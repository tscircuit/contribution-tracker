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
    distinctPrsReviewedNonCodeOwner: 15, // More than 10 distinct PRs
  }

  const result = getContributorScore({
    contributorPRs: mockPRs,
    contributorStats: stats,
    contributor: "test-user",
  })
  expect(result.score).toBe(5) // Should be capped at 5 points
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
    expect(result.score).toBe(5) // Should be capped at 5 points
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
    expect(result.score).toBe(5) // Should get 5 points for 5 distinct PRs reviewed
  })

  it("should count distinct PRs reviewed as code owner", () => {
    const mockPRs: AnalyzedPR[] = []
    const statsAsCodeOwner: ContributorStats = {
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
      distinctPrsReviewedAsCodeOwner: 29,
    }

    const scoreAsCodeOwner = getContributorScore({
      contributorPRs: mockPRs,
      contributorStats: statsAsCodeOwner,
      contributor: "test-user",
    })
    expect(scoreAsCodeOwner.score).toBe(10)

    const statsNonCodeOwner: ContributorStats = {
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
      distinctPrsReviewedNonCodeOwner: 29,
    }

    const scoreNonCodeOwner = getContributorScore({
      contributorPRs: mockPRs,
      contributorStats: statsNonCodeOwner,
      contributor: "test-user",
    })
    expect(scoreNonCodeOwner.score).toBe(5)

    const statsMixed: ContributorStats = {
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
      distinctPrsReviewedNonCodeOwner: 15,
      distinctPrsReviewedAsCodeOwner: 15,
    }

    const scoreMixed = getContributorScore({
      contributorPRs: mockPRs,
      contributorStats: statsMixed,
      contributor: "test-user",
    })
    expect(scoreMixed.score).toBe(15)
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
      expect(result.score).toBe(17)

      const nonMaintainerUsername = "test-user"
      const nonMaintainerResult = getContributorScore({
        contributorPRs: mockPRs,
        contributorStats: stats,
        contributor: nonMaintainerUsername,
      })
      // Capped at 5 for non-code-owner, and 10 for code-owner
      expect(nonMaintainerResult.score).toBe(7)
    },
  )
})
