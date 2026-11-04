import {
  type GitHubUserIdentity,
  resolveContributorIdentity,
} from "../contributor-identity"
import type { PullRequestWithReviews, ReviewerStats } from "../types"
import { getContributionReviewWeek } from "../scoring/contribution-review-week"

interface PullRequestReview {
  id: number
  state: string
  submitted_at?: string | null
  user: GitHubUserIdentity | null
}

function getReviewerStats(
  reviewsByUser: Record<string, ReviewerStats>,
  user: GitHubUserIdentity,
): ReviewerStats {
  const { contributorIdentityKey, githubId, githubLogin } =
    resolveContributorIdentity(user)
  const reviewerStats = reviewsByUser[contributorIdentityKey] ?? {
    githubId,
    githubLogin,
    approvalsGiven: 0,
    rejectionsGiven: 0,
    downvotedReviewsGiven: 0,
    downvotedReviewsGivenByWeek: {},
    prNumbers: new Set<number>(),
  }
  reviewerStats.githubLogin = githubLogin
  reviewsByUser[contributorIdentityKey] = reviewerStats
  return reviewerStats
}

export function getReviewStats({
  reviews,
  downvotedReviewIds,
  prNumber,
  isMerged,
  since,
  currentTime,
}: {
  reviews: PullRequestReview[]
  downvotedReviewIds: Set<number>
  prNumber: number
  isMerged: boolean
  since: Date
  currentTime: Date
}): Pick<
  PullRequestWithReviews,
  | "reviewsReceived"
  | "approvalsReceived"
  | "rejectionsReceived"
  | "reviewsByUser"
  | "allReviewsByUser"
> {
  const allReviewsByUser: Record<string, ReviewerStats> = {}
  for (const review of reviews) {
    if (!review.user) continue
    const reviewerStats = getReviewerStats(allReviewsByUser, review.user)
    if (downvotedReviewIds.has(review.id)) {
      const submittedAtMs = new Date(review.submitted_at ?? "").getTime()
      if (
        submittedAtMs >= since.getTime() &&
        submittedAtMs <= currentTime.getTime()
      ) {
        reviewerStats.downvotedReviewsGiven =
          (reviewerStats.downvotedReviewsGiven ?? 0) + 1
        const reviewWeek = getContributionReviewWeek(new Date(submittedAtMs))
        reviewerStats.downvotedReviewsGivenByWeek ??= {}
        reviewerStats.downvotedReviewsGivenByWeek[reviewWeek] =
          (reviewerStats.downvotedReviewsGivenByWeek[reviewWeek] ?? 0) + 1
      }
      continue
    }
    if (review.state === "APPROVED") {
      reviewerStats.approvalsGiven++
      reviewerStats.prNumbers?.add(prNumber)
    } else if (review.state === "CHANGES_REQUESTED") {
      reviewerStats.rejectionsGiven++
      reviewerStats.prNumbers?.add(prNumber)
    }
  }

  let processedReviews = reviews
  if (isMerged) {
    const seenReviewerIdentities = new Set<string>()
    // Select the latest review before excluding downvotes, so an older
    // approval cannot be revived when the latest review is downvoted.
    processedReviews = [...reviews].reverse().filter((review) => {
      if (!review.user) return false
      const { contributorIdentityKey } = resolveContributorIdentity(review.user)
      if (seenReviewerIdentities.has(contributorIdentityKey)) return false
      seenReviewerIdentities.add(contributorIdentityKey)
      return true
    })
  }
  processedReviews = processedReviews.filter(
    (review) => !downvotedReviewIds.has(review.id),
  )

  const reviewsByUser: Record<string, ReviewerStats> = {}
  for (const review of processedReviews) {
    if (!review.user) continue
    const reviewerStats = getReviewerStats(reviewsByUser, review.user)
    if (review.state === "APPROVED") {
      reviewerStats.approvalsGiven++
      if (isMerged) reviewerStats.prNumbers?.add(prNumber)
    } else if (review.state === "CHANGES_REQUESTED") {
      reviewerStats.rejectionsGiven++
    }
  }

  // Keep reviewers who have only downvoted reviews in the overview too.
  for (const [reviewerIdentity, reviewerStats] of Object.entries(
    allReviewsByUser,
  )) {
    if (!reviewerStats.downvotedReviewsGiven) continue
    reviewsByUser[reviewerIdentity] ??= {
      ...reviewerStats,
      approvalsGiven: 0,
      rejectionsGiven: 0,
      prNumbers: new Set<number>(),
    }
    reviewsByUser[reviewerIdentity].downvotedReviewsGiven =
      reviewerStats.downvotedReviewsGiven
    reviewsByUser[reviewerIdentity].downvotedReviewsGivenByWeek =
      reviewerStats.downvotedReviewsGivenByWeek
  }

  return {
    reviewsReceived: processedReviews.length,
    approvalsReceived: processedReviews.filter(
      (review) => review.state === "APPROVED",
    ).length,
    rejectionsReceived: processedReviews.filter(
      (review) => review.state === "CHANGES_REQUESTED",
    ).length,
    reviewsByUser,
    allReviewsByUser,
  }
}
