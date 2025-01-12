import * as fs from "fs"
import type { AnalyzedPR, ContributorStats } from "./lib/types"
import { getRepos } from "./lib/getRepos"
import { generateMarkdown } from "./lib/generateMarkdown"
import { getMergedPRs } from "./lib/getMergedPRs"
import { getAllPRs } from "./lib/getAllPRs"
import { getBountiedIssues } from "./lib/getBountiedIssues"
import { getIssuesCreated } from "./lib/getIssuesCreated"
import { analyzePRWithClaude } from "./lib/analyzePRWithClaude"
import { getLastWednesday } from "./lib/date-utils"
export async function generateOverview(startDate: string) {
  const startDateString = startDate

  const repos = await getRepos()
  const mergedPrsWithAnalysis: AnalyzedPR[] = []
  const contributorData: Record<string, ContributorStats> = {}

  for (const repo of repos) {
    console.log(`Analyzing ${repo}`)

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
              }
            }
            contributorData[reviewer].approvalsGiven +=
              reviewerStats.approvalsGiven
            contributorData[reviewer].rejectionsGiven +=
              reviewerStats.rejectionsGiven
          },
        )
      }

      if (pr.isClosed && pr.merged_at)
        contributorData[contributor].prsMerged += 1
    }

    const mergedPrs = await getMergedPRs(repo, startDateString)
    console.log(`Found ${mergedPrs.length} merged PRs`)
    for (const pr of mergedPrs) {
      if (pr.user.login.includes("renovate")) {
        continue
      }
      const analysis = await analyzePRWithClaude(pr, repo)
      mergedPrsWithAnalysis.push(analysis)
    }

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
        const issuesCreated = await getIssuesCreated(
          repo,
          contributor,
          startDateString,
        )

        contributorData[contributor].issuesCreated =
          (contributorData[contributor].issuesCreated || 0) + issuesCreated
      },
    )

    await Promise.all(getIssuesCreatedPromises)
  }

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
  fs.writeFileSync(`contribution-overviews/${startDateString}.md`, markdown)
  console.log(`Generated contribution-overviews/${startDateString}.md`)
  fs.writeFileSync(
    `contribution-overviews/${startDateString}.json`,
    JSON.stringify(contributorData, null, 2),
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
