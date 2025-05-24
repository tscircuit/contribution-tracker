import * as fs from "fs"
import type { AnalyzedPR, ContributorStats } from "lib/types"
import { getRepos } from "lib/data-retrieval/getRepos"
import {
  generateMarkdown,
  scoreToStarString,
} from "lib/data-processing/generateMarkdown"
import { getMergedPRs } from "lib/data-retrieval/getMergedPRs"
import { getAllPRs } from "lib/data-retrieval/getAllPRs"
import { getBountiedIssues } from "lib/data-retrieval/getBountiedIssues"
import { getIssuesCreated } from "lib/data-retrieval/getIssuesCreated"
import { getLastWednesday } from "lib/ai/date-utils"
import { analyzePRWithAI } from "lib/ai-stuff/analyze-pr"
import { analyzePRWithClaude } from "lib/ai/analyzePRWithClaude"
import { processDiscussionsForContributors } from "lib/data-retrieval/processDiscussions"
import { storePrAnalysis } from "lib/data-processing/storePrAnalysis"

export async function generateOverview(startDate: string) {
  const startDateString = startDate

  const repos = await getRepos()
  const mergedPrsWithAnalysis: AnalyzedPR[] = []
  const contributorData: Record<string, ContributorStats> = {}
  // Map to collect unique PR numbers for each reviewer
  const reviewerToReviewedPrs: Record<string, Set<number>> = {}

  for (const repo of repos) {
    console.log(`\nAnalyzing ${repo}`)

    const prsWithReviews = await getAllPRs(repo, startDate)
    console.log(`Found ${prsWithReviews.length} total PRs`)
    for (const pr of prsWithReviews) {
      if (pr.user.login.includes("renovate")) {
        continue
      }

      const contributor = pr.user.login
      if (!contributorData[contributor]) {
        contributorData[contributor] = {
          reviewsReceived: 0,
          rejectionsReceived: 0,
          approvalsReceived: 0,
          approvalsGiven: 0,
          rejectionsGiven: 0,
          prsOpened: 0,
          prsMerged: 0,
          issuesCreated: 0,
          bountiedIssuesCount: 0,
          bountiedIssuesTotal: 0,
          distinctPrsReviewed: 0,
          discussionComments: 0,
          discussionNormalComments: 0,
          discussionGreatInformativeComments: 0,
          discussionIncredibleComments: 0,
        }
      }

      contributorData[contributor].reviewsReceived += pr.reviewsReceived
      contributorData[contributor].rejectionsReceived += pr.rejectionsReceived
      contributorData[contributor].approvalsReceived += pr.approvalsReceived
      contributorData[contributor].prsOpened += 1

      if (pr.reviewsByUser) {
        Object.entries(pr.reviewsByUser).forEach(
          ([reviewer, reviewerStats]) => {
            if (!contributorData[reviewer]) {
              contributorData[reviewer] = {
                reviewsReceived: 0,
                rejectionsReceived: 0,
                approvalsReceived: 0,
                approvalsGiven: 0,
                rejectionsGiven: 0,
                prsOpened: 0,
                prsMerged: 0,
                issuesCreated: 0,
                bountiedIssuesCount: 0,
                bountiedIssuesTotal: 0,
                distinctPrsReviewed: 0,
              }
            }
            contributorData[reviewer].approvalsGiven +=
              reviewerStats.approvalsGiven
            contributorData[reviewer].rejectionsGiven +=
              reviewerStats.rejectionsGiven

            // Collect unique PR numbers for each reviewer
            if (!reviewerToReviewedPrs[reviewer]) {
              reviewerToReviewedPrs[reviewer] = new Set<number>()
            }
            if (reviewerStats.prNumbers) {
              reviewerStats.prNumbers.forEach((prNum) =>
                reviewerToReviewedPrs[reviewer].add(prNum),
              )
            }
          },
        )
      }

      if (pr.isClosed && pr.merged_at)
        contributorData[contributor].prsMerged += 1
    }

    // After processing all PRs, set distinctPrsReviewed for each reviewer
    Object.entries(reviewerToReviewedPrs).forEach(([reviewer, prNumbers]) => {
      if (contributorData[reviewer]) {
        contributorData[reviewer].distinctPrsReviewed = prNumbers.size
      }
    })

    const mergedPrs = await getMergedPRs(repo, startDateString)
    console.log(`Found ${mergedPrs.length} merged PRs`)
    for (const pr of mergedPrs) {
      if (pr.user.login.includes("renovate")) {
        continue
      }
      const analysis = await analyzePRWithAI(pr, repo).catch((e) => {
        console.error(
          `Error analyzing PR #${pr.number} - ${pr.title} by ${pr.user.login} in ${repo}`,
          e,
        )
        return null
      })
      if (!analysis) {
        continue
      }
      if (pr.hasMajorTag) {
        analysis.impact = "Major"
      }
      mergedPrsWithAnalysis.push(analysis)
    }

    storePrAnalysis(mergedPrsWithAnalysis, startDate)

    // Fetch and process bountied issues for all contributors in parallel
    const bountiedIssuesPromises = Object.keys(contributorData).map(
      async (contributor) => {
        const bountiedIssues = await getBountiedIssues(
          repo,
          contributor,
          startDateString,
        )

        contributorData[contributor].bountiedIssuesCount =
          (contributorData[contributor].bountiedIssuesCount || 0) +
          bountiedIssues.length
        contributorData[contributor].bountiedIssuesTotal =
          (contributorData[contributor].bountiedIssuesTotal || 0) +
          bountiedIssues.reduce((total, issue) => total + issue.amount, 0)
      },
    )

    // Wait for all bounty fetching to complete
    await Promise.all(bountiedIssuesPromises)

    const getIssuesCreatedPromises = Object.keys(contributorData).map(
      async (contributor) => {
        const { totalIssues, majorIssues } = await getIssuesCreated(
          repo,
          contributor,
          startDateString,
        )

        contributorData[contributor].issuesCreated =
          (contributorData[contributor].issuesCreated || 0) + totalIssues

        // Calculate score based on issues created
        const scoreFromIssues =
          Math.min(totalIssues, 5) * 0.5 + majorIssues * 1.5

        contributorData[contributor].score =
          (contributorData[contributor].score || 0) + scoreFromIssues
      },
    )

    await Promise.all(getIssuesCreatedPromises)
  }
  // Process GitHub Discussions for all contributors
  const allGithubDiscussions = await processDiscussionsForContributors(
    startDateString,
    contributorData,
  )
  const processDiscussionsPromises = Object.keys(allGithubDiscussions).map(
    async (contributor) => {
      if (!contributorData[contributor]) {
        contributorData[contributor] = {
          reviewsReceived: 0,
          rejectionsReceived: 0,
          approvalsReceived: 0,
          approvalsGiven: 0,
          rejectionsGiven: 0,
          prsOpened: 0,
          prsMerged: 0,
          issuesCreated: 0,
          bountiedIssuesCount: 0,
          bountiedIssuesTotal: 0,
          distinctPrsReviewed: 0,
          score: 0,
        }
      }
      if (contributorData[contributor].discussionComments === undefined) {
        contributorData[contributor].discussionComments = 0
        contributorData[contributor].discussionNormalComments = 0
        contributorData[contributor].discussionGreatInformativeComments = 0
        contributorData[contributor].discussionIncredibleComments = 0
      }
      contributorData[contributor].discussionComments =
        allGithubDiscussions[contributor].discussionComments
      contributorData[contributor].discussionNormalComments =
        allGithubDiscussions[contributor].discussionNormalComments
      contributorData[contributor].discussionGreatInformativeComments =
        allGithubDiscussions[contributor].discussionGreatInformativeComments
      contributorData[contributor].discussionIncredibleComments =
        allGithubDiscussions[contributor].discussionIncredibleComments

      // Add to score based on discussion contribution levels
      contributorData[contributor].score =
        (contributorData[contributor].score ?? 0) +
        (contributorData[contributor].discussionNormalComments ?? 0) * 1 // 1 point each
      contributorData[contributor].score =
        (contributorData[contributor].score ?? 0) +
        (contributorData[contributor].discussionGreatInformativeComments ?? 0) *
          2 // 2 points each
      contributorData[contributor].score =
        (contributorData[contributor].score ?? 0) +
        (contributorData[contributor].discussionIncredibleComments ?? 0) * 4 // 4 points each

      contributorData[contributor].stars = scoreToStarString(
        contributorData[contributor].score ?? 0,
      )
    },
  )
  await Promise.all(processDiscussionsPromises)

  // Data processing complete

  await generateAndWriteFiles(
    mergedPrsWithAnalysis,
    contributorData,
    startDateString,
  )
}

async function generateAndWriteFiles(
  mergedPrsWithAnalysis: AnalyzedPR[],
  contributorData: Record<string, ContributorStats>,
  startDateString: string,
) {
  // Group PRs by contributor
  const contributorPRs = mergedPrsWithAnalysis.reduce(
    (acc, pr) => {
      if (!acc[pr.contributor]) {
        acc[pr.contributor] = []
      }
      acc[pr.contributor].push(pr)
      return acc
    },
    {} as Record<string, AnalyzedPR[]>,
  )

  // Sort each contributor's PRs by impact
  const impactOrder = { Major: 3, Minor: 2, Tiny: 1 }
  for (const contributor in contributorPRs) {
    contributorPRs[contributor].sort(
      (a, b) => impactOrder[b.impact] - impactOrder[a.impact],
    )
  }

  // Flatten the sorted PRs back into a single array
  const sortedPRs = Object.values(contributorPRs).flat()
  const markdown = await generateMarkdown(
    sortedPRs,
    contributorData,
    startDateString,
  )

  // Sort contributor data alphabetically by contributor name
  const alphabeticalContributorData = Object.keys(contributorData)
    .sort()
    .reduce(
      (acc, key) => {
        acc[key] = contributorData[key]
        return acc
      },
      {} as Record<string, ContributorStats>,
    )

  fs.writeFileSync(`contribution-overviews/${startDateString}.md`, markdown)

  console.log(`Generated contribution-overviews/${startDateString}.md`)
  fs.writeFileSync(
    `contribution-overviews/${startDateString}.json`,
    JSON.stringify(alphabeticalContributorData, null, 2),
  )
  console.log(`Generated contribution-overviews/${startDateString}.json`)

  // Edit the README.md file
  const readme = fs.readFileSync("README.md", "utf8")
  const updatedReadme = readme.replace(
    /<!-- START_CURRENT_WEEK -->[\s\S]*<!-- END_CURRENT_WEEK -->/m,
    `<!-- START_CURRENT_WEEK -->\n\n${markdown}\n\n<!-- END_CURRENT_WEEK -->`,
  )
  fs.writeFileSync("README.md", updatedReadme)
}

export async function generateWeeklyOverview() {
  const weekStart = getLastWednesday(new Date())
  const weekStartString = weekStart.toISOString().split("T")[0]
  await generateOverview(weekStartString)
}
