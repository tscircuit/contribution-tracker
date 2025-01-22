import { octokit } from "lib/sdks"
import type {
  PullRequestWithReviews,
  ReviewerStats,
  ContributorStats,
} from "./types"

export async function getAllPRs(
  repo: string,
  since: string,
): Promise<PullRequestWithReviews[]> {
  const [owner, repo_name] = repo.split("/")
  const fetchPRs = async (page = 1): Promise<any[]> => {
    const { data } = await octokit.pulls.list({
      owner,
      repo: repo_name,
      sort: "updated",
      direction: "desc",
      state: "all",
      per_page: 100,
      page,
    })
    if (data.length === 100) {
      const nextPagePRs = await fetchPRs(page + 1)
      return [...data, ...nextPagePRs]
    }
    return data
  }

  const prs = await fetchPRs()
  const filteredPRs = prs.filter((pr) => {
    if (pr.user.login.includes("renovate")) return false
    const createdDate = pr.created_at ? new Date(pr.created_at) : null
    const mergedDate = pr.merged_at ? new Date(pr.merged_at) : null
    const sinceDate = new Date(since)
    return (
      (createdDate && createdDate >= sinceDate) ||
      (mergedDate && mergedDate >= sinceDate)
    )
  })

  const fetchReviews = async (prNumber: number, page = 1): Promise<any[]> => {
    const { data } = await octokit.pulls.listReviews({
      owner,
      repo: repo_name,
      pull_number: prNumber,
      per_page: 100,
      page,
    })
    if (data.length === 100) {
      const nextPageReviews = await fetchReviews(prNumber, page + 1)
      return [...data, ...nextPageReviews]
    }
    return data
  }

  const prsWithDetails = await Promise.all(
    filteredPRs.map(async (pr) => {
      const reviews = await fetchReviews(pr.number)
      const reviewsReceived = reviews.length

      const approvalsReceived = reviews.filter(
        (review) => review.state === "APPROVED",
      ).length
      const rejectionsReceived = reviews.filter(
        (review) => review.state === "CHANGES_REQUESTED",
      ).length

      const reviewsByUser = reviews.reduce<Record<string, ReviewerStats>>(
        (acc, review) => {
          const reviewer = review.user.login
          if (!acc[reviewer]) {
            acc[reviewer] = {
              approvalsGiven: 0,
              rejectionsGiven: 0,
              prNumbers: new Set<number>(),
            }
          }
          // Track this PR number for the reviewer
          acc[reviewer].prNumbers?.add(pr.number)

          // Update approval/rejection counts
          if (review.state === "APPROVED") {
            acc[reviewer].approvalsGiven++
          } else if (review.state === "CHANGES_REQUESTED") {
            acc[reviewer].rejectionsGiven++
          }
          return acc
        },
        {},
      )

      return {
        ...pr,
        reviewsReceived,
        rejectionsReceived,
        approvalsReceived,
        reviewsByUser,
        isClosed: pr.state === "closed",
      } as PullRequestWithReviews
    }),
  )

  // Map of reviewer usernames to their set of reviewed PR numbers
  const reviewerUserNameToReviewedPrsSet: Record<string, Set<number>> = {}
  const contributorStats: Record<string, ContributorStats> = {}

  // First pass: collect all PR numbers for each reviewer
  prsWithDetails.forEach((pr) => {
    if (!pr.reviewsByUser) return

    Object.entries(pr.reviewsByUser).forEach(([reviewer, stats]) => {
      if (!reviewerUserNameToReviewedPrsSet[reviewer]) {
        reviewerUserNameToReviewedPrsSet[reviewer] = new Set<number>()
      }
      if (stats.prNumbers) {
        // Union the PR numbers from this review into the aggregate set
        stats.prNumbers.forEach((prNum) =>
          reviewerUserNameToReviewedPrsSet[reviewer].add(prNum),
        )
      }

      // Initialize contributor stats if needed
      if (!contributorStats[reviewer]) {
        contributorStats[reviewer] = {
          reviewsReceived: 0,
          rejectionsReceived: 0,
          approvalsReceived: 0,
          prsOpened: 0,
          prsMerged: 0,
          issuesCreated: 0,
          approvalsGiven: 0,
          rejectionsGiven: 0,
          distinctPrsReviewed: 0,
        }
      }

      // Add this PR's review counts to the total
      contributorStats[reviewer].approvalsGiven += stats.approvalsGiven
      contributorStats[reviewer].rejectionsGiven += stats.rejectionsGiven
    })
  })

  // Second pass: set distinctPRsReviewed from aggregated PR numbers
  Object.entries(reviewerUserNameToReviewedPrsSet).forEach(
    ([reviewer, prNumbers]) => {
      if (contributorStats[reviewer]) {
        contributorStats[reviewer].distinctPrsReviewed = prNumbers.size
      }
    },
  )

  return prsWithDetails
}
