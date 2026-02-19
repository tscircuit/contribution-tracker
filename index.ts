import * as fs from "fs"
import { analyzePRWithAI } from "lib/ai-stuff/analyze-pr"
import { getLastTuesday1830 } from "lib/ai/date-utils"
import {
  generateMarkdown,
  scoreToStarString,
} from "lib/data-processing/generateMarkdown"
import {
  getExistingPrAnalysis,
  loadPrAnalysis,
  storePrAnalysis,
} from "lib/data-processing/storePrAnalysis"
import { getAllPRs } from "lib/data-retrieval/getAllPRs"
import { getBountiedIssues } from "lib/data-retrieval/getBountiedIssues"
import { getIssuesCreated } from "lib/data-retrieval/getIssuesCreated"
import { getMergedPRs } from "lib/data-retrieval/getMergedPRs"
import { getRepos } from "lib/data-retrieval/getRepos"
import { processDiscussionsForContributors } from "lib/data-retrieval/processDiscussions"
import { postMergeComment } from "lib/notifications/notify-pr-change"
import type { AnalyzedPR, ContributorStats } from "lib/types"
import { fetchCodeownersFile } from "lib/utils/code-owner-utils"

export async function generateOverview(
  startDate: string,
  currentTime: Date = new Date(),
) {
  // Extract date portion for file naming (handles both YYYY-MM-DD and full ISO timestamp)
  const startDateString = startDate.split("T")[0]

  const repos = await getRepos()
  const mergedPrsWithAnalysis: AnalyzedPR[] = []
  const contributorData: Record<string, ContributorStats> = {}
  const reviewerToReviewedPrs: Record<
    string,
    Set<{ number: number; isReviewerRepoOwner: boolean }>
  > = {}
  const repoOwnersMap: Record<string, string[]> = {}

  const existingAnalysis = loadPrAnalysis(startDateString)
  console.log(
    `Loaded ${existingAnalysis.length} existing PR analyses for ${startDateString}`,
  )

  for (const repo of repos) {
    console.log(`\nAnalyzing ${repo}`)
    const repoOwners = await fetchCodeownersFile(repo).catch(() => {
      console.log(`Failed to fetch codeowners file for ${repo}`)
      return []
    })
    repoOwnersMap[repo] = repoOwners.map((content) => content.owners).flat()
    console.log(`Found ${repoOwners.length} repo owners`)
    const prsWithReviews = await getAllPRs(repo, startDate, currentTime)
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
          distinctPrsReviewedNonCodeOwner: 0,
          discussionComments: 0,
          discussionNormalComments: 0,
          discussionGreatInformativeComments: 0,
          discussionIncredibleComments: 0,
        }
      }

      const isRepoOwner = repoOwners.some((content) =>
        content.owners.includes(contributor),
      )
      if (isRepoOwner) {
        const existingRepo = contributorData[contributor].reposOwned?.find(
          (ownedRepo) => ownedRepo.repo === repo,
        )
        if (!existingRepo) {
          contributorData[contributor].reposOwned = (
            contributorData[contributor].reposOwned ?? []
          ).concat({
            repo,
            paths: repoOwners.find((content) =>
              content.owners.includes(contributor),
            )?.paths ?? ["*"],
          })
        }
      }

      contributorData[contributor].reviewsReceived += pr.reviewsReceived
      contributorData[contributor].rejectionsReceived += pr.rejectionsReceived
      contributorData[contributor].approvalsReceived += pr.approvalsReceived
      contributorData[contributor].prsOpened += 1

      if (pr.reviewsByUser) {
        Object.entries(pr.reviewsByUser).forEach(
          ([reviewer, reviewerStats]) => {
            const isReviewerRepoOwner = repoOwners.some((content) =>
              content.owners.includes(reviewer),
            )
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
                distinctPrsReviewedNonCodeOwner: 0,
                distinctPrsReviewedAsCodeOwner: 0,
              }
            }
            contributorData[reviewer].approvalsGiven +=
              reviewerStats.approvalsGiven
            contributorData[reviewer].rejectionsGiven +=
              reviewerStats.rejectionsGiven

            // Collect unique PR numbers for each reviewer
            if (!reviewerToReviewedPrs[reviewer]) {
              reviewerToReviewedPrs[reviewer] = new Set<{
                number: number
                isReviewerRepoOwner: boolean
              }>()
            }
            if (reviewerStats.prNumbers) {
              reviewerStats.prNumbers.forEach((prNum) =>
                reviewerToReviewedPrs[reviewer].add({
                  number: prNum,
                  isReviewerRepoOwner: isReviewerRepoOwner || false,
                }),
              )
            }
          },
        )
      }

      if (pr.isClosed && pr.merged_at)
        contributorData[contributor].prsMerged += 1
    }

    // After processing all PRs, set distinctPrsReviewedNonCodeOwner for each reviewer
    Object.entries(reviewerToReviewedPrs).forEach(
      ([reviewer, prReviewMeta]) => {
        if (contributorData[reviewer]) {
          contributorData[reviewer].distinctPrsReviewedNonCodeOwner =
            Array.from(prReviewMeta).filter(
              (pr) => !pr.isReviewerRepoOwner,
            ).length
          contributorData[reviewer].distinctPrsReviewedAsCodeOwner = Array.from(
            prReviewMeta,
          ).filter((pr) => pr.isReviewerRepoOwner).length
        }
      },
    )

    const mergedPrs = await getMergedPRs(repo, startDate, currentTime)
    console.log(`Found ${mergedPrs.length} merged PRs`)
    const mergedPrsWithAnalysisResults = await Promise.all(
      mergedPrs.map(async (pr) => {
        if (
          pr.user.login.includes("renovate") ||
          pr.user.login.includes("[bot]")
        ) {
          return null
        }

        const existingPr = getExistingPrAnalysis(
          existingAnalysis,
          repo,
          pr.number,
        )
        if (existingPr) {
          console.log(`Using stored analysis for PR #${pr.number} in ${repo}`)
          return existingPr as AnalyzedPR
        }

        const analysis = await analyzePRWithAI(pr, repo).catch((e) => {
          console.error(
            `Error analyzing PR #${pr.number} - ${pr.title} by ${pr.user.login} in ${repo}`,
            e,
          )
          return null
        })
        if (!analysis) {
          return null
        }
        await postMergeComment(analysis)
        if (pr.hasMajorTag) {
          analysis.impact = "Major"
        }
        if (analysis.isAlignedWithMilestone) {
          analysis.impact = "Major"
          console.log(
            `PR #${pr.number} by ${pr.user.login} in ${repo} is aligned with milestone, setting impact to Major`,
          )
        }
        return analysis
      }),
    )
    mergedPrsWithAnalysis.push(
      ...mergedPrsWithAnalysisResults.filter((a) => a !== null),
    )

    storePrAnalysis(mergedPrsWithAnalysis, startDateString)

    /*
     * Fetching bountied issues and issues created for every contributor at this
     * stage results in a massive number of GitHub API requests. In production
     * this regularly trips the GitHub rate limits and causes failures. Until we
     * can optimize or cache these requests, this section is commented out.
     */
    // const bountiedIssuesPromises = Object.keys(contributorData).map(
    //   async (contributor) => {
    //     const bountiedIssues = await getBountiedIssues(
    //       repo,
    //       contributor,
    //       startDateString,
    //     )
    //
    //     contributorData[contributor].bountiedIssuesCount =
    //       (contributorData[contributor].bountiedIssuesCount || 0) +
    //       bountiedIssues.length
    //     contributorData[contributor].bountiedIssuesTotal =
    //       (contributorData[contributor].bountiedIssuesTotal || 0) +
    //       bountiedIssues.reduce((total, issue) => total + issue.amount, 0)
    //   },
    // )
    // await Promise.all(bountiedIssuesPromises)

    // const getIssuesCreatedPromises = Object.keys(contributorData).map(
    //   async (contributor) => {
    //     const { totalIssues, majorIssues } = await getIssuesCreated(
    //       repo,
    //       contributor,
    //       startDateString,
    //     )
    //
    //     console.log(
    //       `Processed issues created for ${contributor} - totalIssues: ${totalIssues} - majorIssues: ${majorIssues} in ${repo}`,
    //     )
    //
    //     contributorData[contributor].issuesCreated =
    //       (contributorData[contributor].issuesCreated || 0) + totalIssues
    //
    //     const scoreFromIssues =
    //       Math.min(totalIssues, 5) * 0.5 + majorIssues * 1.5
    //
    //     contributorData[contributor].score =
    //       (contributorData[contributor].score || 0) + scoreFromIssues
    //   },
    // )
    // await Promise.all(getIssuesCreatedPromises)
  }
  // Process GitHub Discussions for all contributors
  const allGithubDiscussions = await processDiscussionsForContributors(
    startDate,
    contributorData,
    currentTime,
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
          distinctPrsReviewedNonCodeOwner: 0,
          score: 0,
        }
      }
      if (contributorData[contributor].discussionComments === undefined) {
        contributorData[contributor].discussionComments = 0
        contributorData[contributor].discussionNormalComments = 0
        contributorData[contributor].discussionGreatInformativeComments = 0
        contributorData[contributor].discussionIncredibleComments = 0
      }
      console.log(
        `Processed discussion for ${contributor} - discussionComments: ${allGithubDiscussions[contributor].discussionComments}`,
      )
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

  // Remove bot accounts from contributor data
  Object.keys(contributorData).forEach((contributor) => {
    if (contributor.includes("[bot]")) {
      delete contributorData[contributor]
    }
  })

  // Data processing complete
  await generateAndWriteFiles(
    mergedPrsWithAnalysis,
    contributorData,
    startDateString,
    repoOwnersMap,
  )
}

async function generateAndWriteFiles(
  mergedPrsWithAnalysis: AnalyzedPR[],
  contributorData: Record<string, ContributorStats>,
  startDateString: string,
  repoOwnersMap: Record<string, string[]>,
) {
  console.log("Generating markdown")
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
    repoOwnersMap,
  )
  console.log("Generated markdown", markdown)

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
  const weekStart = getLastTuesday1830(new Date())
  const weekStartString = weekStart.toISOString()
  await generateOverview(weekStartString)
}
