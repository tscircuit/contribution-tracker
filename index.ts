import * as fs from "fs"
import { analyzePRWithAI } from "lib/ai-stuff/analyze-pr"
import { getContributionOverviewWindow } from "lib/ai/date-utils"
import {
  generateMarkdown,
  scoreToStarString,
} from "lib/data-processing/generateMarkdown"
import {
  getOrCreateContributorStats,
  getPrsWithCurrentContributorLogins,
  mergeContributorStatsByGitHubId,
} from "lib/contributor-identity"
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
import { SENIOR_STAFF_USERNAMES } from "lib/constants"
import type { AnalyzedPR, ContributorStats } from "lib/types"
import { fetchCodeownersFile } from "lib/utils/code-owner-utils"

export async function generateOverview(
  startDate: string,
  currentTime: Date = new Date(),
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
    for (const pr of prsWithReviews) {
      if (pr.user.login.includes("renovate")) {
        continue
      }

      const contributorLogin = pr.user.login
      const contributorStats = getOrCreateContributorStats(
        contributorStatsByIdentity,
        pr.user,
      )

      const isRepoOwner = repoOwners.some((content) =>
        content.owners.includes(contributorLogin),
      )
      if (isRepoOwner) {
        const existingRepo = contributorStats.reposOwned?.find(
          (ownedRepo) => ownedRepo.repo === repo,
        )
        if (!existingRepo) {
          contributorStats.reposOwned = (
            contributorStats.reposOwned ?? []
          ).concat({
            repo,
            paths: repoOwners.find((content) =>
              content.owners.includes(contributorLogin),
            )?.paths ?? ["*"],
          })
        }
      }

      contributorStats.reviewsReceived += pr.reviewsReceived
      contributorStats.rejectionsReceived += pr.rejectionsReceived
      contributorStats.approvalsReceived += pr.approvalsReceived
      contributorStats.prsOpened += 1

      const seniorStaffReviewStats = Object.entries(
        pr.allReviewsByUser ?? {},
      ).reduce(
        (acc, [, reviewerStats]) => {
          if (!seniorStaffUsernames.has(reviewerStats.githubLogin)) return acc
          acc.approvals += reviewerStats.approvalsGiven
          acc.rejections += reviewerStats.rejectionsGiven
          return acc
        },
        { approvals: 0, rejections: 0 },
      )

      if (
        seniorStaffReviewStats.approvals > 0 ||
        seniorStaffReviewStats.rejections > 0
      ) {
        contributorStats.staffReviewedPrs =
          (contributorStats.staffReviewedPrs ?? 0) + 1
        contributorStats.staffRejectionsReceived =
          (contributorStats.staffRejectionsReceived ?? 0) +
          seniorStaffReviewStats.rejections
        contributorStats.staffApprovalsReceived =
          (contributorStats.staffApprovalsReceived ?? 0) +
          seniorStaffReviewStats.approvals
        contributorStats.staffReviewedPrLinks = (
          contributorStats.staffReviewedPrLinks ?? []
        ).concat({
          number: pr.number,
          url: pr.html_url,
          title: pr.title,
          staffApprovals: seniorStaffReviewStats.approvals,
          staffRejections: seniorStaffReviewStats.rejections,
        })
      }

      if (pr.reviewsByUser) {
        Object.entries(pr.reviewsByUser).forEach(
          ([reviewerIdentityKey, reviewerStats]) => {
            const reviewerLogin = reviewerStats.githubLogin
            const isReviewerRepoOwner = repoOwners.some((content) =>
              content.owners.includes(reviewerLogin),
            )
            const reviewerContributorStats = getOrCreateContributorStats(
              contributorStatsByIdentity,
              {
                id: reviewerStats.githubId,
                login: reviewerLogin,
              },
            )
            reviewerContributorStats.approvalsGiven +=
              reviewerStats.approvalsGiven
            reviewerContributorStats.rejectionsGiven +=
              reviewerStats.rejectionsGiven

            // Collect unique PR numbers for each reviewer
            if (!reviewedPrsByReviewerIdentity[reviewerIdentityKey]) {
              reviewedPrsByReviewerIdentity[reviewerIdentityKey] = new Set<{
                number: number
                isReviewerRepoOwner: boolean
              }>()
            }
            if (reviewerStats.prNumbers) {
              reviewerStats.prNumbers.forEach((prNum) =>
                reviewedPrsByReviewerIdentity[reviewerIdentityKey].add({
                  number: prNum,
                  isReviewerRepoOwner: isReviewerRepoOwner || false,
                }),
              )
            }
          },
        )
      }

      if (pr.isClosed && pr.merged_at) contributorStats.prsMerged += 1
    }

    // After processing all PRs, set distinctPrsReviewedNonCodeOwner for each reviewer
    Object.entries(reviewedPrsByReviewerIdentity).forEach(
      ([reviewerIdentityKey, prReviewMeta]) => {
        if (contributorStatsByIdentity[reviewerIdentityKey]) {
          contributorStatsByIdentity[
            reviewerIdentityKey
          ].distinctPrsReviewedNonCodeOwner = Array.from(prReviewMeta).filter(
            (pr) => !pr.isReviewerRepoOwner,
          ).length
          contributorStatsByIdentity[
            reviewerIdentityKey
          ].distinctPrsReviewedAsCodeOwner = Array.from(prReviewMeta).filter(
            (pr) => pr.isReviewerRepoOwner,
          ).length
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
  // Process GitHub Discussions for all contributors
  const contributorStatsWithDiscussionsByIdentity =
    await processDiscussionsForContributors({
      startDate,
      currentTime,
      contributorStatsByIdentity,
    })
  for (const [contributorIdentityKey, contributorStats] of Object.entries(
    contributorStatsWithDiscussionsByIdentity,
  )) {
    contributorStatsByIdentity[contributorIdentityKey] = contributorStats
    const contributorLogin =
      contributorStats.githubLogin ?? `unknown-${contributorIdentityKey}`
    console.log(
      `Processed discussion for ${contributorLogin} - discussionComments: ${contributorStats.discussionComments}`,
    )

    // Add to score based on discussion contribution levels
    contributorStats.score =
      (contributorStats.score ?? 0) +
      (contributorStats.discussionNormalComments ?? 0) * 1 // 1 point each
    contributorStats.score =
      (contributorStats.score ?? 0) +
      (contributorStats.discussionGreatInformativeComments ?? 0) * 2 // 2 points each
    contributorStats.score =
      (contributorStats.score ?? 0) +
      (contributorStats.discussionIncredibleComments ?? 0) * 4 // 4 points each

    contributorStats.stars = scoreToStarString(contributorStats.score ?? 0)
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
  })
}

async function generateAndWriteFiles({
  mergedPrsWithCurrentContributorLogins,
  contributorStatsByLogin,
  startDateString,
  repoOwnersMap,
}: {
  mergedPrsWithCurrentContributorLogins: AnalyzedPR[]
  contributorStatsByLogin: Record<string, ContributorStats>
  startDateString: string
  repoOwnersMap: Record<string, string[]>
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

  // Edit the README.md file
  const readme = fs.readFileSync("README.md", "utf8")
  const updatedReadme = readme.replace(
    /<!-- START_CURRENT_WEEK -->[\s\S]*<!-- END_CURRENT_WEEK -->/m,
    `<!-- START_CURRENT_WEEK -->\n\n${markdown}\n\n<!-- END_CURRENT_WEEK -->`,
  )
  fs.writeFileSync("README.md", updatedReadme)
}

export async function generateWeeklyOverview() {
  const { startDate, endDate } = getContributionOverviewWindow(new Date())
  const weekStartString = startDate.toISOString()
  await generateOverview(weekStartString, endDate)
}
