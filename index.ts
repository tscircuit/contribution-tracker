import * as fs from "fs"
import { analyzePRWithAI } from "lib/ai-stuff/analyze-pr"
import { getContributionOverviewWindow } from "lib/ai/date-utils"
import { replaceCurrentWeekReadme } from "lib/data-processing/current-week-readme"
import { generateMarkdown } from "lib/data-processing/generateMarkdown"
import {
  getPrsWithCurrentContributorLogins,
  mergeContributorStatsByGitHubId,
} from "lib/contributor-identity"
import {
  getExistingPrAnalysis,
  loadPrAnalysis,
  storePrAnalysis,
} from "lib/data-processing/storePrAnalysis"
import { getAllPRs } from "lib/data-retrieval/getAllPRs"
import { recordPullRequestActivityForRepo } from "lib/data-retrieval/prWindowActivity"
import { getBountiedIssues } from "lib/data-retrieval/getBountiedIssues"
import { getIssuesCreated } from "lib/data-retrieval/getIssuesCreated"
import { getMergedPRs } from "lib/data-retrieval/getMergedPRs"
import { getRepos } from "lib/data-retrieval/getRepos"
import { postMergeComment } from "lib/notifications/notify-pr-change"
import { SENIOR_STAFF_USERNAMES } from "lib/constants"
import type { AnalyzedPR, ContributorStats } from "lib/types"
import { fetchCodeownersFile } from "lib/utils/code-owner-utils"

export interface GenerateOverviewOptions {
  updateReadme?: boolean
}

export async function generateOverview(
  startDate: string,
  currentTime: Date = new Date(),
  options: GenerateOverviewOptions = {},
) {
  const seniorStaffUsernames = new Set<string>(SENIOR_STAFF_USERNAMES)
  // Extract date portion for file naming (handles both YYYY-MM-DD and full ISO timestamp)
  const startDateString = startDate.split("T")[0]

  const repos = await getRepos()
  const mergedPrsWithAnalysis: AnalyzedPR[] = []
  // Runtime aggregation is keyed by durable GitHub account ID, never login.
  const contributorStatsByIdentity: Record<string, ContributorStats> = {}
  const reviewedPrsByReviewerIdentity: Record<
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
    recordPullRequestActivityForRepo({
      repo,
      prsWithReviews,
      repoOwners,
      contributorStatsByIdentity,
      reviewedPrsByReviewerIdentity,
      seniorStaffUsernames,
      sinceDate: new Date(startDate),
      currentTime,
    })

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
          return {
            ...existingPr,
            contributor: pr.user.login,
            contributorId: pr.user.id,
            user: pr.user,
          } as AnalyzedPR
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
    // const bountiedIssuesPromises = Object.values(
    //   contributorStatsByIdentity,
    // ).map(async (contributorStats) => {
    //     const contributor = contributorStats.githubLogin
    //     if (!contributor) return
    //     const bountiedIssues = await getBountiedIssues(
    //       repo,
    //       contributor,
    //       startDateString,
    //     )
    //
    //     contributorStats.bountiedIssuesCount =
    //       (contributorStats.bountiedIssuesCount || 0) +
    //       bountiedIssues.length
    //     contributorStats.bountiedIssuesTotal =
    //       (contributorStats.bountiedIssuesTotal || 0) +
    //       bountiedIssues.reduce((total, issue) => total + issue.amount, 0)
    //   })
    // await Promise.all(bountiedIssuesPromises)

    // const getIssuesCreatedPromises = Object.values(
    //   contributorStatsByIdentity,
    // ).map(async (contributorStats) => {
    //     const contributor = contributorStats.githubLogin
    //     if (!contributor) return
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
    //     contributorStats.issuesCreated =
    //       (contributorStats.issuesCreated || 0) + totalIssues
    //
    //     const scoreFromIssues =
    //       Math.min(totalIssues, 5) * 0.5 + majorIssues * 1.5
    //
    //     contributorStats.score =
    //       (contributorStats.score || 0) + scoreFromIssues
    //   })
    // await Promise.all(getIssuesCreatedPromises)
  }
  // Remove bot accounts from contributor stats
  Object.entries(contributorStatsByIdentity).forEach(
    ([contributorIdentityKey, contributorStats]) => {
      if (contributorStats.githubLogin?.includes("[bot]")) {
        delete contributorStatsByIdentity[contributorIdentityKey]
      }
    },
  )

  const contributorStatsByLogin = mergeContributorStatsByGitHubId(
    contributorStatsByIdentity,
  )
  const mergedPrsWithCurrentContributorLogins =
    getPrsWithCurrentContributorLogins(
      mergedPrsWithAnalysis,
      contributorStatsByLogin,
    )

  // Data processing complete
  await generateAndWriteFiles({
    mergedPrsWithCurrentContributorLogins,
    contributorStatsByLogin,
    startDateString,
    repoOwnersMap,
    updateReadme: options.updateReadme ?? false,
  })
}

async function generateAndWriteFiles({
  mergedPrsWithCurrentContributorLogins,
  contributorStatsByLogin,
  startDateString,
  repoOwnersMap,
  updateReadme,
}: {
  mergedPrsWithCurrentContributorLogins: AnalyzedPR[]
  contributorStatsByLogin: Record<string, ContributorStats>
  startDateString: string
  repoOwnersMap: Record<string, string[]>
  updateReadme: boolean
}) {
  console.log("Generating markdown")
  // Group PRs by contributor
  const contributorPRs = mergedPrsWithCurrentContributorLogins.reduce(
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
    contributorStatsByLogin,
    startDateString,
    repoOwnersMap,
  )
  console.log("Generated markdown", markdown)

  // Sort contributor stats alphabetically by contributor name
  const contributorStatsBySortedLogin = Object.keys(contributorStatsByLogin)
    .sort()
    .reduce(
      (sortedContributorStats, login) => {
        sortedContributorStats[login] = contributorStatsByLogin[login]
        return sortedContributorStats
      },
      {} as Record<string, ContributorStats>,
    )

  fs.writeFileSync(`contribution-overviews/${startDateString}.md`, markdown)

  console.log(`Generated contribution-overviews/${startDateString}.md`)
  fs.writeFileSync(
    `contribution-overviews/${startDateString}.json`,
    JSON.stringify(contributorStatsBySortedLogin, null, 2),
  )
  console.log(`Generated contribution-overviews/${startDateString}.json`)

  if (updateReadme) {
    const readme = fs.readFileSync("README.md", "utf8")
    fs.writeFileSync("README.md", replaceCurrentWeekReadme(readme, markdown))
  } else {
    console.log("Skipped README current-week update")
  }
}

export async function generateWeeklyOverview() {
  const { startDate, endDate } = getContributionOverviewWindow(new Date())
  const weekStartString = startDate.toISOString()
  await generateOverview(weekStartString, endDate, { updateReadme: true })
}
