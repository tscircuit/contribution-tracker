import { describe, expect, it } from "bun:test"
import { getContributorScore } from "lib/scoring/getContributorScore"
import type { AnalyzedPR, ContributorStats } from "lib/types"

it("should count distinct PRs reviewed", () => {
  const mockPRs: AnalyzedPR[] = []
  const stats: ContributorStats = {
    reviewsReceived: 0,
    rejectionsReceived: 0,
    approvalsReceived: 0,
    approvalsGiven: 0,
    rejectionsGiven: 0,
    prsOpened: 0,
    prsMerged: 0,
    issuesCreated: 0,
    bountiedIssuesCount: 0,
    bountiedIssuesTotal: 0,
    distinctPrsReviewed: 2, // Two distinct PRs reviewed
  }

  const result = getContributorScore(mockPRs, stats)
  expect(result.score).toBe(2) // Should get 2 points for reviewing 2 distinct PRs
})

it("should cap review points at 10", () => {
  const mockPRs: AnalyzedPR[] = []
  const stats: ContributorStats = {
    reviewsReceived: 0,
    rejectionsReceived: 0,
    approvalsReceived: 0,
    approvalsGiven: 0,
    rejectionsGiven: 0,
    prsOpened: 0,
    prsMerged: 0,
    issuesCreated: 0,
    bountiedIssuesCount: 0,
    bountiedIssuesTotal: 0,
    distinctPrsReviewed: 15, // More than 10 distinct PRs
  }

  const result = getContributorScore(mockPRs, stats)
  expect(result.score).toBe(10) // Should be capped at 10 points
})

it("should handle edge cases", () => {
  const mockPRs: AnalyzedPR[] = []
  const stats: ContributorStats = {
    reviewsReceived: 0,
    rejectionsReceived: 0,
    approvalsReceived: 0,
    approvalsGiven: 0,
    rejectionsGiven: 0,
    prsOpened: 0,
    prsMerged: 0,
    issuesCreated: 0,
    bountiedIssuesCount: 0,
    bountiedIssuesTotal: 0,
    distinctPrsReviewed: 0, // No PRs reviewed
  }

  const result = getContributorScore(mockPRs, stats)
  expect(result.score).toBe(0) // Should return 0 for no reviews
})

it("should correctly calculate score from distinct PRs reviewed", () => {
  const mockPRs: AnalyzedPR[] = []
  const stats: ContributorStats = {
    reviewsReceived: 0,
    rejectionsReceived: 0,
    approvalsReceived: 0,
    approvalsGiven: 0,
    rejectionsGiven: 0,
    prsOpened: 0,
    prsMerged: 0,
    issuesCreated: 0,
    bountiedIssuesCount: 0,
    bountiedIssuesTotal: 0,
    distinctPrsReviewed: 5, // Five distinct PRs reviewed
  }

  const result = getContributorScore(mockPRs, stats)
  expect(result.score).toBe(5) // Should get 5 points for reviewing 5 distinct PRs
})

// Additional tests to verify the distinct PRs reviewed functionality
describe("distinct PRs reviewed functionality", () => {
  it("should count distinct PRs instead of raw review counts", () => {
    const mockPRs: AnalyzedPR[] = []
    const contributorStats: ContributorStats = {
      reviewsReceived: 0,
      rejectionsReceived: 0,
      approvalsReceived: 0,
      approvalsGiven: 3, // 3 approvals on the same PR
      rejectionsGiven: 2, // 2 rejections on the same PR
      prsOpened: 0,
      prsMerged: 0,
      issuesCreated: 0,
      bountiedIssuesCount: 0,
      bountiedIssuesTotal: 0,
      distinctPrsReviewed: 1, // Should only count as one PR
    }

    const result = getContributorScore(mockPRs, contributorStats)
    expect(result.score).toBe(1) // Should get 1 point for one distinct PR reviewed
  })

  it("should cap review points at 10 even with many distinct PRs", () => {
    const mockPRs: AnalyzedPR[] = []
    const contributorStats: ContributorStats = {
      reviewsReceived: 0,
      rejectionsReceived: 0,
      approvalsReceived: 0,
      approvalsGiven: 25,
      rejectionsGiven: 5,
      prsOpened: 0,
      prsMerged: 0,
      issuesCreated: 0,
      bountiedIssuesCount: 0,
      bountiedIssuesTotal: 0,
      distinctPrsReviewed: 30, // More than the cap
    }

    const result = getContributorScore(mockPRs, contributorStats)
    expect(result.score).toBe(10) // Should be capped at 10 points
  })

  it("should handle edge case of no reviews", () => {
    const mockPRs: AnalyzedPR[] = []
    const contributorStats: ContributorStats = {
      reviewsReceived: 0,
      rejectionsReceived: 0,
      approvalsReceived: 0,
      approvalsGiven: 0,
      rejectionsGiven: 0,
      prsOpened: 0,
      prsMerged: 0,
      issuesCreated: 0,
      bountiedIssuesCount: 0,
      bountiedIssuesTotal: 0,
      distinctPrsReviewed: 0,
    }

    const result = getContributorScore(mockPRs, contributorStats)
    expect(result.score).toBe(0) // Should return 0 for no reviews
  })

  it("should properly calculate score from distinct PRs reviewed", () => {
    const mockPRs: AnalyzedPR[] = []
    const contributorStats: ContributorStats = {
      reviewsReceived: 0,
      rejectionsReceived: 0,
      approvalsReceived: 0,
      approvalsGiven: 5,
      rejectionsGiven: 2,
      prsOpened: 0,
      prsMerged: 0,
      issuesCreated: 0,
      bountiedIssuesCount: 0,
      bountiedIssuesTotal: 0,
      distinctPrsReviewed: 5, // 5 different PRs reviewed
    }

    const result = getContributorScore(mockPRs, contributorStats)
    expect(result.score).toBe(5) // Should get 5 points for 5 distinct PRs reviewed
  })
})
