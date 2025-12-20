import { octokit } from "lib/sdks"
import type {
  PullRequestWithReviews,
  ReviewerStats,
  ContributorStats,
} from "../types"

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
      (createdDate && createdDate.getTime() >= sinceDate.getTime()) ||
      (mergedDate && mergedDate.getTime() >= sinceDate.getTime())
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
      const isMerged = !!pr.merged_at

      let processedReviews = reviews

      // For merged PRs, get the latest review per user
      if (isMerged) {
        const userLatestReviewMap = new Map<string, any>()
        // Process in reverse to get the latest review first
        for (const review of [...reviews].reverse()) {
          const reviewer = review.user.login
          if (!userLatestReviewMap.has(reviewer)) {
            userLatestReviewMap.set(reviewer, review)
          }
        }
        processedReviews = Array.from(userLatestReviewMap.values())
      }

      const approvalsReceived = processedReviews.filter(
        (review) => review.state === "APPROVED",
      ).length
      const rejectionsReceived = processedReviews.filter(
        (review) => review.state === "CHANGES_REQUESTED",
      ).length

      // Calculate time to first review
      let timeToFirstReviewMs: number | undefined
      if (reviews.length > 0) {
        const prCreatedAt = new Date(pr.created_at).getTime()
        const firstReviewAt = new Date(reviews[0].submitted_at).getTime()
        timeToFirstReviewMs = firstReviewAt - prCreatedAt
      }

      const reviewsByUser = processedReviews.reduce<
        Record<string, ReviewerStats>
      >((acc, review) => {
        const reviewer = review.user.login
        if (!acc[reviewer]) {
          acc[reviewer] = {
            approvalsGiven: 0,
            rejectionsGiven: 0,
            prNumbers: new Set<number>(),
          }
        }

        if (isMerged) {
          // For merged PRs, only add to prNumbers if approved
          if (review.state === "APPROVED") {
            acc[reviewer].approvalsGiven++
            acc[reviewer].prNumbers?.add(pr.number)
          } else if (review.state === "CHANGES_REQUESTED") {
            acc[reviewer].rejectionsGiven++
          }
        } else {
          // For non-merged PRs, count all reviews
          acc[reviewer].prNumbers?.add(pr.number)
          if (review.state === "APPROVED") {
            acc[reviewer].approvalsGiven++
          } else if (review.state === "CHANGES_REQUESTED") {
            acc[reviewer].rejectionsGiven++
          }
        }
        return acc
      }, {})

      return {
        ...pr,
        reviewsReceived: processedReviews.length,
        approvalsReceived,
        rejectionsReceived,
        reviewsByUser,
        timeToFirstReviewMs,
        isClosed: pr.state === "closed",
        state:
          pr.state === "closed" && !pr.merged_at
            ? "closed"
            : pr.merged_at
              ? "merged"
              : "opened",
      } as PullRequestWithReviews
    }),
  )

  // Map of reviewer usernames to their set of reviewed PR numbers
  const reviewerUserNameToReviewedPrsSet: Record<string, Set<number>> = {}
  const contributorStats: Record<string, ContributorStats> = {}
  // Track time to first review for each contributor's PRs
  const contributorTimeToFirstReview: Record<string, number[]> = {}

  // First pass: collect all PR numbers for each reviewer and track time to first review
  prsWithDetails.forEach((pr) => {
    // Track time to first review for the PR author
    const prAuthor = pr.user.login
    if (pr.timeToFirstReviewMs !== undefined) {
      if (!contributorTimeToFirstReview[prAuthor]) {
        contributorTimeToFirstReview[prAuthor] = []
      }
      contributorTimeToFirstReview[prAuthor].push(pr.timeToFirstReviewMs)
    }

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
          distinctPrsReviewedNonCodeOwner: 0,
        }
      }

      // Add this PR's review counts to the total
      contributorStats[reviewer].approvalsGiven += stats.approvalsGiven
      contributorStats[reviewer].rejectionsGiven += stats.rejectionsGiven
    })
  })

  // Second pass: set distinctPrsReviewedNonCodeOwner from aggregated PR numbers and calculate avg time to first review
  Object.entries(reviewerUserNameToReviewedPrsSet).forEach(
    ([reviewer, prNumbers]) => {
      if (contributorStats[reviewer]) {
        contributorStats[reviewer].distinctPrsReviewedNonCodeOwner =
          prNumbers.size
      }
    },
  )

  // Calculate average time to first review for each contributor
  Object.entries(contributorTimeToFirstReview).forEach(
    ([contributor, times]) => {
      if (times.length > 0) {
        const avgTimeMs = times.reduce((a, b) => a + b, 0) / times.length
        if (!contributorStats[contributor]) {
          contributorStats[contributor] = {
            reviewsReceived: 0,
            rejectionsReceived: 0,
            approvalsReceived: 0,
            prsOpened: 0,
            prsMerged: 0,
            issuesCreated: 0,
            approvalsGiven: 0,
            rejectionsGiven: 0,
          }
        }
        contributorStats[contributor].avgTimeToFirstReviewMs = avgTimeMs
        contributorStats[contributor].avgTimeToFirstReviewHours =
          avgTimeMs / (1000 * 60 * 60)
      }
    },
  )

  return prsWithDetails
}
