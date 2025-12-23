import { MAINTAINERS } from "./maintainers"
import type { AnalyzedPR, ContributorStats } from "../types"

export interface ContributorScore {
  /**
   * @deprecated
   */
  tiny: number
  /**
   * @deprecated
   */
  minor: number
  /**
   * @deprecated
   */
  major: number

  rating0Count: number
  rating1Count: number
  rating2Count: number
  rating3Count: number
  rating4Count: number
  rating5Count: number

  score: number

  // Point source breakdown
  prPoints: number
  reviewPoints: number
  discussionPoints: number
}

/**
 * Calculate score for a contributor based on PRs, issues, reviews, and discussions
 */
export function getContributorScore({
  contributorPRs,
  contributorStats,
  contributor,
}: {
  contributorPRs: AnalyzedPR[]
  contributorStats: ContributorStats | undefined
  contributor?: string
}): ContributorScore {
  const result: ContributorScore = {
    major: 0,
    minor: 0,
    tiny: 0,
    score: 0,
    rating0Count: 0,
    rating1Count: 0,
    rating2Count: 0,
    rating3Count: 0,
    rating4Count: 0,
    rating5Count: 0,
    prPoints: 0,
    reviewPoints: 0,
    discussionPoints: 0,
  }

  // Impact values for scoring
  const impactWorth = { Major: 4, Minor: 2, Tiny: 1 }

  // Calculate score from PRs
  for (const pr of contributorPRs) {
    // Count PRs by impact level
    switch (pr.impact) {
      case "Major":
        result.major++
        break
      case "Minor":
        result.minor++
        break
      case "Tiny":
        result.tiny++
        break
    }

    if (pr.starRating !== undefined) {
      result[`rating${pr.starRating}Count`]++

      if (result[`rating${pr.starRating}Count`] <= 12) {
        const prScore = 2 ** ((pr.starRating ?? 0) - 1)
        result.score += prScore
        result.prPoints += prScore
      }
    }

    // Add score based on impact
    // const impactScore = impactWorth[pr.impact]
    // if (!Number.isNaN(impactScore) && typeof impactScore === "number") {
    //   result.score += impactScore
    // }
  }

  // If no contributor stats, we're done
  if (!contributorStats) {
    return result
  }

  const isMaintainer =
    contributor && (MAINTAINERS as Record<string, string>)[contributor]

  const totalDistinctPrsReviewed =
    (contributorStats.distinctPrsReviewedNonCodeOwner || 0) +
    (contributorStats.distinctPrsReviewedAsCodeOwner || 0)
  let reviewPoints = Math.min(totalDistinctPrsReviewed, isMaintainer ? 15 : 5)

  if (!isMaintainer) {
    reviewPoints = Math.min(reviewPoints, impactWorth.Tiny)
  }

  result.score += reviewPoints
  result.reviewPoints = reviewPoints

  // Discussion points are currently 0 (not implemented yet)
  result.discussionPoints = 0

  return result
}
