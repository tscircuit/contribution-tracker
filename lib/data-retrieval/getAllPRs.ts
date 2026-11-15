import { octokit } from "lib/sdks"
import { resolveContributorIdentity } from "../contributor-identity"
import type { PullRequestWithReviews, ReviewerStats } from "../types"
import { batchProcess } from "../utils/batch-process"

export function extractFirstReviewTiming(
  pr: {
    created_at: string
    user?: { id?: number; login: string } | null
  },
  reviews: Array<{
    submitted_at?: string | null
    state?: string
    user?: { id?: number; login: string } | null
  }>,
): {
  firstReviewAt?: string
  firstReviewer?: string
  firstReviewerId?: number
  timeToFirstReviewMs?: number
} {
  const authorLogin = pr.user?.login?.toLowerCase()
  const authorId = pr.user?.id

  const firstReview = reviews
    .filter((review) => {
      if (!review.submitted_at || !review.user?.login) return false
      if (review.state === "PENDING") return false
      if (review.user.login.includes("[bot]")) return false
      if (
        authorId !== undefined &&
        review.user.id !== undefined &&
        review.user.id === authorId
      ) {
        return false
      }
      if (authorLogin && review.user.login.toLowerCase() === authorLogin) {
        return false
      }
      return !Number.isNaN(new Date(review.submitted_at).getTime())
    })
    .sort(
      (a, b) =>
        new Date(a.submitted_at!).getTime() -
        new Date(b.submitted_at!).getTime(),
    )[0]

  if (!firstReview?.submitted_at || !firstReview.user) {
    return {}
  }

  const reviewerIdentity = resolveContributorIdentity(firstReview.user)

  return {
    firstReviewAt: firstReview.submitted_at,
    firstReviewer: reviewerIdentity.githubLogin,
    firstReviewerId: reviewerIdentity.githubId,
    timeToFirstReviewMs: Math.max(
      0,
      new Date(firstReview.submitted_at).getTime() -
        new Date(pr.created_at).getTime(),
    ),
  }
}

export async function getAllPRs(
  repo: string,
  since: string,
  currentTime: Date = new Date(),
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
  const sinceDate = new Date(since)
  const currentTimeMs = currentTime.getTime()
  const filteredPRs = prs.filter((pr) => {
    if (!pr.user) return false
    if (pr.user.login.includes("renovate")) return false
    const createdDate = pr.created_at ? new Date(pr.created_at) : null
    const mergedDate = pr.merged_at ? new Date(pr.merged_at) : null
    const createdInRange =
      createdDate &&
      createdDate.getTime() >= sinceDate.getTime() &&
      createdDate.getTime() <= currentTimeMs
    const mergedInRange =
      mergedDate &&
      mergedDate.getTime() >= sinceDate.getTime() &&
      mergedDate.getTime() <= currentTimeMs
    return createdInRange || mergedInRange
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

  // Process PRs in batches to avoid GitHub's secondary rate limits
  const prsWithDetails = await batchProcess(
    filteredPRs,
    async (pr) => {
      const reviews = await fetchReviews(pr.number)
      const isMerged = !!pr.merged_at

      const allReviewsByUser = reviews.reduce<Record<string, ReviewerStats>>(
        (acc, review) => {
          if (!review.user) return acc
          const reviewerIdentity = resolveContributorIdentity(review.user)
          if (!acc[reviewerIdentity.contributorIdentityKey]) {
            acc[reviewerIdentity.contributorIdentityKey] = {
              githubId: reviewerIdentity.githubId,
              githubLogin: reviewerIdentity.githubLogin,
              approvalsGiven: 0,
              rejectionsGiven: 0,
              prNumbers: new Set<number>(),
            }
          }

          if (review.state === "APPROVED") {
            acc[reviewerIdentity.contributorIdentityKey].approvalsGiven++
            acc[reviewerIdentity.contributorIdentityKey].prNumbers?.add(
              pr.number,
            )
          } else if (review.state === "CHANGES_REQUESTED") {
            acc[reviewerIdentity.contributorIdentityKey].rejectionsGiven++
            acc[reviewerIdentity.contributorIdentityKey].prNumbers?.add(
              pr.number,
            )
          }

          return acc
        },
        {},
      )

      let processedReviews = reviews

      // For merged PRs, get the latest review per user
      if (isMerged) {
        const latestReviewByContributorIdentity = new Map<string, any>()
        // Process in reverse to get the latest review first
        for (const review of [...reviews].reverse()) {
          if (!review.user) continue
          const reviewerIdentity = resolveContributorIdentity(review.user)
          if (
            !latestReviewByContributorIdentity.has(
              reviewerIdentity.contributorIdentityKey,
            )
          ) {
            latestReviewByContributorIdentity.set(
              reviewerIdentity.contributorIdentityKey,
              review,
            )
          }
        }
        processedReviews = Array.from(
          latestReviewByContributorIdentity.values(),
        )
      }

      const approvalsReceived = processedReviews.filter(
        (review) => review.state === "APPROVED",
      ).length
      const rejectionsReceived = processedReviews.filter(
        (review) => review.state === "CHANGES_REQUESTED",
      ).length
      const firstReviewTiming = extractFirstReviewTiming(pr, reviews)

      const reviewsByUser = processedReviews.reduce<
        Record<string, ReviewerStats>
      >((acc, review) => {
        if (!review.user) return acc
        const reviewerIdentity = resolveContributorIdentity(review.user)
        if (!acc[reviewerIdentity.contributorIdentityKey]) {
          acc[reviewerIdentity.contributorIdentityKey] = {
            githubId: reviewerIdentity.githubId,
            githubLogin: reviewerIdentity.githubLogin,
            approvalsGiven: 0,
            rejectionsGiven: 0,
            prNumbers: new Set<number>(),
          }
        }

        if (isMerged) {
          // For merged PRs, only add to prNumbers if approved
          if (review.state === "APPROVED") {
            acc[reviewerIdentity.contributorIdentityKey].approvalsGiven++
            acc[reviewerIdentity.contributorIdentityKey].prNumbers?.add(
              pr.number,
            )
          } else if (review.state === "CHANGES_REQUESTED") {
            acc[reviewerIdentity.contributorIdentityKey].rejectionsGiven++
          }
        } else {
          if (review.state === "APPROVED") {
            acc[reviewerIdentity.contributorIdentityKey].approvalsGiven++
          } else if (review.state === "CHANGES_REQUESTED") {
            acc[reviewerIdentity.contributorIdentityKey].rejectionsGiven++
          }
        }
        return acc
      }, {})

      return {
        ...pr,
        reviewsReceived: processedReviews.length,
        approvalsReceived,
        rejectionsReceived,
        ...firstReviewTiming,
        reviewsByUser,
        allReviewsByUser,
        isClosed: pr.state === "closed",
        state:
          pr.state === "closed" && !pr.merged_at
            ? "closed"
            : pr.merged_at
              ? "merged"
              : "opened",
      } as PullRequestWithReviews
    },
    20, // Process 20 PRs at a time
    100, // 100ms delay between batches
  )

  return prsWithDetails
}
