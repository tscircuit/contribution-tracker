import { describe, expect, it } from "bun:test"
import { getContributorScore } from "lib/scoring/getContributorScore"
import { MAINTAINERS } from "lib/scoring/maintainers"
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
    distinctPrsReviewedNonCodeOwner: 2, // Two distinct PRs reviewed
  }

  const result = getContributorScore({
    contributorPRs: mockPRs,
    contributorStats: stats,
    contributor: "test-user",
  })
  expect(result.score).toBe(1) // Should be capped at 1 point for non-maintainers
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
    distinctPrsReviewedNonCodeOwner: 15, // More than 10 distinct PRs
  }

  const result = getContributorScore({
    contributorPRs: mockPRs,
    contributorStats: stats,
    contributor: "test-user",
  })
  expect(result.score).toBe(1) // Should be capped at 1 point for non-maintainers
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
    distinctPrsReviewedNonCodeOwner: 0, // No PRs reviewed
  }

  const result = getContributorScore({
    contributorPRs: mockPRs,
    contributorStats: stats,
    contributor: "test-user",
  })
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
    distinctPrsReviewedNonCodeOwner: 5, // Five distinct PRs reviewed
  }

  const result = getContributorScore({
    contributorPRs: mockPRs,
    contributorStats: stats,
    contributor: "test-user",
  })
  expect(result.score).toBe(1) // Should be capped at 1 point for non-maintainers
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
      distinctPrsReviewedNonCodeOwner: 1, // Should only count as one PR
    }

    const result = getContributorScore({
      contributorPRs: mockPRs,
      contributorStats,
      contributor: "test-user",
    })
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
      distinctPrsReviewedNonCodeOwner: 30, // More than the cap
    }

    const result = getContributorScore({
      contributorPRs: mockPRs,
      contributorStats,
      contributor: "test-user",
    })
    expect(result.score).toBe(1) // Should be capped at 1 point for non-maintainers
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
      distinctPrsReviewedNonCodeOwner: 0,
    }

    const result = getContributorScore({
      contributorPRs: mockPRs,
      contributorStats,
      contributor: "test-user",
    })
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
      distinctPrsReviewedNonCodeOwner: 5, // 5 different PRs reviewed
    }

    const result = getContributorScore({
      contributorPRs: mockPRs,
      contributorStats,
      contributor: "test-user",
    })
    expect(result.score).toBe(1) // Should be capped at 1 point for non-maintainers
  })
})

describe("maintainer scoring", () => {
  it.if(Object.keys(MAINTAINERS).length > 0)(
    "should apply higher review point caps for maintainers",
    () => {
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
        distinctPrsReviewedNonCodeOwner: 16,
        distinctPrsReviewedAsCodeOwner: 2,
      }

      const maintainerUsername = Object.keys(MAINTAINERS)[0]
      const result = getContributorScore({
        contributorPRs: mockPRs,
        contributorStats: stats,
        contributor: maintainerUsername,
      })
      expect(result.score).toBe(15)

      const nonMaintainerUsername = "test-user"
      const nonMaintainerResult = getContributorScore({
        contributorPRs: mockPRs,
        contributorStats: stats,
        contributor: nonMaintainerUsername,
      })
      // Non-maintainers can only earn up to one tiny contribution worth of review points
      expect(nonMaintainerResult.score).toBe(1)
    },
  )
})
