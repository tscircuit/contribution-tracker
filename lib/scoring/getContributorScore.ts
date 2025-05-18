import type { AnalyzedPR, ContributorStats } from "../types"

export interface ContributorScore {
  tiny: number
  minor: number
  major: number
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

    // Add score based on impact
    const impactScore = impactWorth[pr.impact]
    if (!Number.isNaN(impactScore) && typeof impactScore === "number") {
      result.score += impactScore
    }
  }

  // If no contributor stats, we're done
  if (!contributorStats) {
    return result
  }

  // Add score for bountied issues
  const bountiedAmount = contributorStats.bountiedIssuesTotal || 0
  // Convert bounty amount to tiny contributions
  // $1-10 = 1 tiny contribution, $10-20 = 2 tiny contributions etc.
  let tinyContributionsFromBounties = Math.ceil(bountiedAmount / 10)
  // Cap at 6 tiny contributions as a maximum for issues
  tinyContributionsFromBounties = Math.min(tinyContributionsFromBounties, 6)
  // Add to score (tiny contributions are worth 1 point each)
  result.score += tinyContributionsFromBounties

  // Add score for reviews
  // Use distinctPrsReviewed for scoring instead of raw review counts
  const distinctPrsReviewed = contributorStats.distinctPrsReviewed || 0
  // Cap review points at 20
  result.score += Math.min(distinctPrsReviewed, 10)

  // Add score for discussion participation
  const participatingDiscussionCommentCount =
    contributorStats.discussionParticipating || 0
  const veryActiveDiscussionCommentCount =
    contributorStats.discussionVeryActive || 0
  const extremelyActiveDiscussionCommentCount =
    contributorStats.discussionExtremelyActive || 0

  // Add points based on discussion contribution levels
  result.score += participatingDiscussionCommentCount * 1 // 1 point each
  result.score += veryActiveDiscussionCommentCount * 2 // 2 points each
  result.score += extremelyActiveDiscussionCommentCount * 4 // 4 points each

  return result
}
