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
}

/**
 * Calculate score for a contributor based on PRs, issues, reviews, and discussions
 */
export function getContributorScore(
  contributorPRs: AnalyzedPR[],
  contributorStats: ContributorStats | undefined,
): ContributorScore {
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

      if (result[`rating${pr.starRating}Count`] <= 10) {
        result.score += 2 ** ((pr.starRating ?? 0) - 1)
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

  const distinctPrsReviewed = contributorStats.distinctPrsReviewed || 0
  result.score += Math.min(distinctPrsReviewed, 5)
  const distinctPrsReviewedAsCodeOwner =
    contributorStats.distinctPrsReviewedAsCodeOwner || 0
  result.score += Math.min(distinctPrsReviewedAsCodeOwner, 10)

  return result
}
