import { CONTRIBUTION_OVERVIEW_CUTOFF_HOUR_UTC } from "../ai/date-utils"

export interface ReviewWeekStats {
  downvotedReviewIds: string[]
  eligiblePrs: string[]
}
export type ReviewWeeks = Record<string, ReviewWeekStats>

/** Tuesday 18:00 UTC starts a reporting week. */
export function getReviewWeek(submittedAt: string): string {
  const date = new Date(submittedAt)
  const start = new Date(date)
  start.setUTCHours(CONTRIBUTION_OVERVIEW_CUTOFF_HOUR_UTC, 0, 0, 0)
  start.setUTCDate(start.getUTCDate() - ((start.getUTCDay() + 5) % 7))
  if (start > date) start.setUTCDate(start.getUTCDate() - 7)
  return start.toISOString()
}

export function mergeReviewWeeks(
  first: ReviewWeeks = {},
  second: ReviewWeeks = {},
): ReviewWeeks {
  const result: ReviewWeeks = {}
  for (const week of new Set([...Object.keys(first), ...Object.keys(second)])) {
    result[week] = {
      downvotedReviewIds: [
        ...new Set([
          ...(first[week]?.downvotedReviewIds ?? []),
          ...(second[week]?.downvotedReviewIds ?? []),
        ]),
      ],
      eligiblePrs: [
        ...new Set([
          ...(first[week]?.eligiblePrs ?? []),
          ...(second[week]?.eligiblePrs ?? []),
        ]),
      ],
    }
  }
  return result
}

export function countEligibleReviewedPrs(weeks: ReviewWeeks): number {
  return new Set(
    Object.values(weeks).flatMap((week) =>
      new Set(week.downvotedReviewIds).size >= 3 ? [] : week.eligiblePrs,
    ),
  ).size
}
