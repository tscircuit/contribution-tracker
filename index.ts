import { Octokit } from "@octokit/rest"
import * as fs from "fs"
import type { AnalyzedPR, ContributorStats } from "./lib/types"
import Anthropic from "@anthropic-ai/sdk"
import { Level } from "level"
import { getRepos } from "./lib/getRepos"
import { generateMarkdown } from "./lib/generateMarkdown"
import { getMergedPRs } from "./lib/getMergedPRs"
import { getAllPRs } from "./lib/getAllPRs"
import { getBountiedIssues } from "./lib/getBountiedIssues"
import { getIssuesCreated } from "./lib/getIssuesCreated"
import { analyzePRWithClaude } from "./lib/analyzePRWithClaude"
import { db } from "./lib/cache"

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
          prsOpened: 0,
          prsMerged: 0,
          issuesCreated: 0,
          bountiedIssuesCount: 0,
          bountiedIssuesTotal: 0,
          approvalsGiven: 0,
          changesRequested: 0,
          changesRequestedGiven: 0,
        }
      }

      contributorData[contributor].reviewsReceived += pr.reviewsReceived
      contributorData[contributor].rejectionsReceived += pr.rejectionsReceived
      contributorData[contributor].approvalsReceived += pr.approvalsReceived
      contributorData[contributor].prsOpened += 1

      // Count reviews authored by each reviewer
      const uniqueReviewers = new Set(pr.reviewers)
      for (const reviewer of uniqueReviewers) {
        if (!contributorData[reviewer]) {
          contributorData[reviewer] = {
            reviewsReceived: 0,
            rejectionsReceived: 0,
            approvalsReceived: 0,
            prsOpened: 0,
            prsMerged: 0,
            issuesCreated: 0,
            bountiedIssuesCount: 0,
            bountiedIssuesTotal: 0,
            approvalsGiven: 0,
            changesRequested: 0,
            changesRequestedGiven: 0,
            score: 0,
          }
        }
        // Update approvals and changes requested counts from review stats
        const reviewerStats = pr.reviewsByUser[reviewer]
        if (reviewerStats) {
          contributorData[reviewer].approvalsGiven = (contributorData[reviewer].approvalsGiven || 0) + reviewerStats.approvalsGiven
          contributorData[reviewer].changesRequestedGiven = (contributorData[reviewer].changesRequestedGiven || 0) + reviewerStats.changesRequested
          console.log(`Debug: Updated review stats for ${reviewer}:`, {
            approvalsGiven: contributorData[reviewer].approvalsGiven,
            changesRequestedGiven: contributorData[reviewer].changesRequestedGiven
          })
        }
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

  // Add points for approvals and changes requested authored
  for (const contributor in contributorData) {
    const stats = contributorData[contributor]
    // 1 point for each approval or changes requested authored (tiny contribution)
    const reviewPoints = (stats.approvalsGiven || 0) + (stats.changesRequestedGiven || 0)
    stats.score = (stats.score || 0) + reviewPoints
    console.log(`Debug: ${contributor} review points:`, {
      approvalsGiven: stats.approvalsGiven || 0,
      changesRequestedGiven: stats.changesRequestedGiven || 0,
      totalPoints: reviewPoints,
      isNaN_changesRequestedGiven: isNaN(stats.changesRequestedGiven),
      isNaN_approvalsGiven: isNaN(stats.approvalsGiven)
    })
  }
  
  // Debug: Print final contributor data
  console.log("\nDebug: Final contributor data:")
  Object.entries(contributorData).forEach(([contributor, stats]) => {
    console.log(`${contributor}:`, {
      approvalsGiven: stats.approvalsGiven || 0,
      changesRequestedGiven: stats.changesRequestedGiven || 0,
      changesRequested: stats.changesRequested || 0,
      score: stats.score || 0,
      isNaN_changesRequested: isNaN(stats.changesRequested),
      isNaN_changesRequestedGiven: isNaN(stats.changesRequestedGiven)
    })
  })

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

  // Close the database
  await db.close()
}

export async function generateWeeklyOverview() {
  const weekStart = new Date()
  weekStart.setDate(weekStart.getDate() - weekStart.getDay() - 4) // Set to last Wednesday
  const weekStartString = weekStart.toISOString().split("T")[0]
  await generateOverview(weekStartString)
}
