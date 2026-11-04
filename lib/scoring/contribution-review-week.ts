/** Contribution weeks begin on Tuesday at 18:00 UTC. */
export function getContributionReviewWeek(date: Date): string {
  const weekStart = new Date(date)
  const daysSinceTuesday = (date.getUTCDay() + 5) % 7
  weekStart.setUTCDate(weekStart.getUTCDate() - daysSinceTuesday)
  weekStart.setUTCHours(18, 0, 0, 0)
  if (date.getTime() < weekStart.getTime()) {
    weekStart.setUTCDate(weekStart.getUTCDate() - 7)
  }
  return weekStart.toISOString()
}

export function mergeDownvotedReviewsByWeek(
  firstWeekCounts: Record<string, number> = {},
  secondWeekCounts: Record<string, number> = {},
): Record<string, number> {
  const weekCounts = { ...firstWeekCounts }
  for (const [reviewWeek, downvotedReviews] of Object.entries(
    secondWeekCounts,
  )) {
    weekCounts[reviewWeek] = (weekCounts[reviewWeek] ?? 0) + downvotedReviews
  }
  return weekCounts
}

export function getDistinctPrsReviewedByWeek(
  reviewedPrs: Iterable<{ reviewWeek: string; isReviewerRepoOwner: boolean }>,
): NonNullable<ContributorStats["distinctPrsReviewedByWeek"]> {
  const reviewedPrsByWeek: NonNullable<
    ContributorStats["distinctPrsReviewedByWeek"]
  > = {}
  for (const reviewedPr of reviewedPrs) {
    const weeklyCounts = (reviewedPrsByWeek[reviewedPr.reviewWeek] ??= {
      nonCodeOwner: 0,
      asCodeOwner: 0,
    })
    if (reviewedPr.isReviewerRepoOwner) weeklyCounts.asCodeOwner++
    else weeklyCounts.nonCodeOwner++
  }
  return reviewedPrsByWeek
}
import type { ContributorStats } from "../types"
