import {
  getOrCreateContributorStats,
  resolveContributorIdentity,
} from "../contributor-identity"
import type {
  ContributorStats,
  PullRequestWithReviews,
  ReviewerStats,
} from "../types"

export interface GitHubReviewLike {
  user?: {
    id?: number | null
    login: string
  } | null
  state?: string | null
  submitted_at?: string | null
}

export interface GitHubPullRequestLike {
  number: number
  state: string
  title: string
  body?: string | null
  user?: {
    id?: number
    login: string
  } | null
  html_url: string
  created_at: string
  updated_at?: string | null
  closed_at?: string | null
  merged_at: string | null
}

export function isTimestampInWindow(
  timestamp: string | null | undefined,
  sinceMs: number,
  currentTimeMs: number,
): boolean {
  if (!timestamp) return false
  const timeMs = new Date(timestamp).getTime()
  if (Number.isNaN(timeMs)) return false
  return timeMs >= sinceMs && timeMs <= currentTimeMs
}

function isTimestampAtOrBefore(
  timestamp: string | null | undefined,
  cutoffMs: number,
): boolean {
  if (!timestamp) return false
  const timeMs = new Date(timestamp).getTime()
  if (Number.isNaN(timeMs)) return false
  return timeMs <= cutoffMs
}

export function isCandidatePullRequestForWindow(
  pr: GitHubPullRequestLike,
  sinceDate: Date,
): boolean {
  if (!pr?.user) return false
  if (pr.user.login.includes("renovate")) return false

  const sinceMs = sinceDate.getTime()
  if (pr.updated_at) {
    const updatedMs = new Date(pr.updated_at).getTime()
    if (!Number.isNaN(updatedMs)) {
      return updatedMs >= sinceMs
    }
  }

  const createdMs = pr.created_at ? new Date(pr.created_at).getTime() : NaN
  const mergedMs = pr.merged_at ? new Date(pr.merged_at).getTime() : NaN
  return (
    (!Number.isNaN(createdMs) && createdMs >= sinceMs) ||
    (!Number.isNaN(mergedMs) && mergedMs >= sinceMs)
  )
}

export function summarizePullRequestForWindow(
  pr: GitHubPullRequestLike,
  reviews: GitHubReviewLike[],
  sinceDate: Date,
  currentTime: Date,
): PullRequestWithReviews | null {
  if (!pr?.user || pr.user.login.includes("renovate")) {
    return null
  }

  const sinceMs = sinceDate.getTime()
  const currentTimeMs = currentTime.getTime()
  const openedInWindow = isTimestampInWindow(
    pr.created_at,
    sinceMs,
    currentTimeMs,
  )
  const mergedInWindow = isTimestampInWindow(
    pr.merged_at,
    sinceMs,
    currentTimeMs,
  )

  const reviewsUpToCutoff = reviews.filter((review) => {
    if (!review?.user) return false
    if (review.state === "PENDING") return false
    if (review.submitted_at === null) return false
    if (review.submitted_at === undefined) return true
    return isTimestampAtOrBefore(review.submitted_at, currentTimeMs)
  })

  const inWindowReviews = reviewsUpToCutoff.filter((review) => {
    if (review.submitted_at === undefined) return true
    return isTimestampInWindow(review.submitted_at, sinceMs, currentTimeMs)
  })

  if (!openedInWindow && !mergedInWindow && inWindowReviews.length === 0) {
    return null
  }

  const allReviewsByUser = inWindowReviews.reduce<
    Record<string, ReviewerStats>
  >((acc, review) => {
    if (!review.user) return acc
    const reviewerIdentity = resolveContributorIdentity({
      id: review.user.id ?? undefined,
      login: review.user.login,
    })
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
      acc[reviewerIdentity.contributorIdentityKey].prNumbers?.add(pr.number)
    } else if (review.state === "CHANGES_REQUESTED") {
      acc[reviewerIdentity.contributorIdentityKey].rejectionsGiven++
      acc[reviewerIdentity.contributorIdentityKey].prNumbers?.add(pr.number)
    }

    return acc
  }, {})

  let processedReviews = inWindowReviews

  // For PRs merged inside the window, deduplicate to the latest in-window review per reviewer
  if (mergedInWindow) {
    const latestReviewByContributorIdentity = new Map<
      string,
      GitHubReviewLike
    >()
    for (const review of [...inWindowReviews].reverse()) {
      if (!review.user) continue
      const reviewerIdentity = resolveContributorIdentity({
        id: review.user.id ?? undefined,
        login: review.user.login,
      })
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
    processedReviews = Array.from(latestReviewByContributorIdentity.values())
  }

  const approvalsReceived = processedReviews.filter(
    (review) => review.state === "APPROVED",
  ).length
  const rejectionsReceived = processedReviews.filter(
    (review) => review.state === "CHANGES_REQUESTED",
  ).length

  const ensureReviewerEntry = (
    acc: Record<string, ReviewerStats>,
    user: { id?: number | null; login: string },
  ) => {
    const reviewerIdentity = resolveContributorIdentity({
      id: user.id ?? undefined,
      login: user.login,
    })
    if (!acc[reviewerIdentity.contributorIdentityKey]) {
      acc[reviewerIdentity.contributorIdentityKey] = {
        githubId: reviewerIdentity.githubId,
        githubLogin: reviewerIdentity.githubLogin,
        approvalsGiven: 0,
        rejectionsGiven: 0,
        prNumbers: new Set<number>(),
      }
    }
    return reviewerIdentity
  }

  const reviewsByUser = processedReviews.reduce<Record<string, ReviewerStats>>(
    (acc, review) => {
      if (!review.user) return acc
      const reviewerIdentity = ensureReviewerEntry(acc, review.user)

      if (mergedInWindow) {
        if (review.state === "APPROVED") {
          acc[reviewerIdentity.contributorIdentityKey].approvalsGiven++
          acc[reviewerIdentity.contributorIdentityKey].prNumbers?.add(pr.number)
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
    },
    {},
  )

  // If a PR was approved before the weekly cutoff and merged inside this window
  // (e.g. approved Tuesday afternoon, merged Tuesday evening on day 1 of the week),
  // credit the distinct merged PR review on merge without double-counting approvalsGiven.
  if (mergedInWindow) {
    const latestCutoffReviewByIdentity = new Map<string, GitHubReviewLike>()
    for (const review of [...reviewsUpToCutoff].reverse()) {
      if (!review.user) continue
      const reviewerIdentity = resolveContributorIdentity({
        id: review.user.id ?? undefined,
        login: review.user.login,
      })
      if (
        !latestCutoffReviewByIdentity.has(
          reviewerIdentity.contributorIdentityKey,
        )
      ) {
        latestCutoffReviewByIdentity.set(
          reviewerIdentity.contributorIdentityKey,
          review,
        )
      }
    }

    for (const review of latestCutoffReviewByIdentity.values()) {
      if (!review.user || review.state !== "APPROVED") continue
      const reviewerIdentity = ensureReviewerEntry(reviewsByUser, review.user)
      reviewsByUser[reviewerIdentity.contributorIdentityKey].prNumbers?.add(
        pr.number,
      )
    }
  }

  const isMergedAtCutoff = isTimestampAtOrBefore(pr.merged_at, currentTimeMs)
  const isClosedAtCutoff =
    isMergedAtCutoff ||
    (pr.state === "closed" &&
      (!pr.closed_at || isTimestampAtOrBefore(pr.closed_at, currentTimeMs)))

  return {
    ...pr,
    body: pr.body ?? "",
    user: {
      id: pr.user.id,
      login: pr.user.login,
    },
    reviewsReceived: processedReviews.length,
    approvalsReceived,
    rejectionsReceived,
    reviewsByUser,
    allReviewsByUser,
    openedInWindow,
    mergedInWindow,
    isClosed: isClosedAtCutoff,
    state:
      isClosedAtCutoff && !isMergedAtCutoff
        ? "closed"
        : isMergedAtCutoff
          ? "merged"
          : "opened",
  } as PullRequestWithReviews
}

export function recordPullRequestActivityForRepo({
  repo,
  prsWithReviews,
  repoOwners,
  contributorStatsByIdentity,
  reviewedPrsByReviewerIdentity,
  seniorStaffUsernames,
  sinceDate,
  currentTime,
}: {
  repo: string
  prsWithReviews: PullRequestWithReviews[]
  repoOwners: Array<{ paths: string[]; owners: string[] }>
  contributorStatsByIdentity: Record<string, ContributorStats>
  reviewedPrsByReviewerIdentity: Record<
    string,
    Set<{ number: number; isReviewerRepoOwner: boolean }>
  >
  seniorStaffUsernames: Set<string>
  sinceDate: Date
  currentTime: Date
}): void {
  const sinceMs = sinceDate.getTime()
  const currentTimeMs = currentTime.getTime()

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

    const openedInWindow =
      pr.openedInWindow ??
      isTimestampInWindow(pr.created_at, sinceMs, currentTimeMs)
    const mergedInWindow =
      pr.mergedInWindow ??
      isTimestampInWindow(pr.merged_at, sinceMs, currentTimeMs)

    contributorStats.reviewsReceived += pr.reviewsReceived
    contributorStats.rejectionsReceived += pr.rejectionsReceived
    contributorStats.approvalsReceived += pr.approvalsReceived
    if (openedInWindow) {
      contributorStats.prsOpened += 1
    }

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

    if (mergedInWindow) {
      contributorStats.prsMerged += 1
    }
  }

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
}
