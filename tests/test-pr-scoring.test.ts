import { describe, expect, it } from "bun:test"
import { getContributorScore } from "lib/scoring/getContributorScore"
import { MAINTAINERS } from "lib/scoring/maintainers"
import type { AnalyzedPR, ContributorStats } from "lib/types"

import {
  PR_ATTRIBUTES,
  type PrAttributeSchema,
} from "../lib/ai-stuff/pr-attributes"
import { getContributionStarRatingFromAttributes } from "../lib/ai-stuff/getConstributionStarRatingFromAttributes"
import { getSponsorshipAmount } from "../lib/scoring/getSponsorshipAmount"

const createPRs = (
  starRating: AnalyzedPR["starRating"],
  impact: AnalyzedPR["impact"],
  count: number,
): AnalyzedPR[] =>
  Array.from({ length: count }, () => ({ starRating, impact }) as AnalyzedPR)

describe("PR scoring caps", () => {
  it("should cap tiny PRs at 12", () => {
    const result = getContributorScore({
      contributorPRs: createPRs(1, "Tiny", 13),
      contributorStats: undefined,
    })

    expect(result.rating1Count).toBe(13)
    expect(result.score).toBe(12)
  })

  it("should not cap minor PRs", () => {
    const result = getContributorScore({
      contributorPRs: createPRs(2, "Minor", 13),
      contributorStats: undefined,
    })

    expect(result.rating2Count).toBe(13)
    expect(result.score).toBe(26)
  })

  it("should not cap major PRs", () => {
    const result = getContributorScore({
      contributorPRs: createPRs(3, "Major", 13),
      contributorStats: undefined,
    })

    expect(result.rating3Count).toBe(13)
    expect(result.score).toBe(52)
  })
})

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

// These are the normal PR evaluation rules, including for newly analyzed PRs.
function contributionAttributes(
  overrides: Partial<PrAttributeSchema> = {},
): PrAttributeSchema {
  return {
    ...Object.fromEntries(
      Object.keys(PR_ATTRIBUTES).map((key) => [key, false]),
    ),
    ...overrides,
  } as PrAttributeSchema
}

describe("standard contribution evaluation", () => {
  it("gives dependency, bookkeeping and demonstrated duplicate/no-op work zero actual points", () => {
    for (const flag of [
      "only_dependency_update",
      "payment_bookkeeping",
      "clear_noop_or_duplicate",
    ]) {
      const attributes = contributionAttributes({ [flag]: true })
      const starRating = getContributionStarRatingFromAttributes(
        attributes,
        "tscircuit/core",
        5,
      )
      expect(starRating).toBe(0)
      expect(
        getContributorScore({
          contributorPRs: [
            { ...attributes, starRating, impact: "Tiny" } as AnalyzedPR,
          ],
          contributorStats: undefined,
        }).score,
      ).toBe(0)
    }
    expect(
      getContributorScore({
        contributorPRs: [{ starRating: 0, impact: "Tiny" } as AnalyzedPR],
        contributorStats: undefined,
      }).score,
    ).toBe(0.5)
  })
  it("rates docs/test/CI-only fixes at one star and caps standalone reproductions at two", () => {
    expect(
      getContributionStarRatingFromAttributes(
        contributionAttributes({ only_docs_tests_or_ci: true }),
        "tscircuit/core",
        5,
      ),
    ).toBe(1)
    expect(
      getContributionStarRatingFromAttributes(
        contributionAttributes({ only_reproduces_a_bug: true }),
        "tscircuit/core",
        5,
      ),
    ).toBe(2)
  })
  it("reduces demonstrated missing regression evidence by one star level", () => {
    expect(
      getContributionStarRatingFromAttributes(
        contributionAttributes({ missing_regression_evidence: true }),
        "tscircuit/core",
        3,
      ),
    ).toBe(2)
    expect(
      getContributionStarRatingFromAttributes(
        contributionAttributes({ missing_regression_evidence: true }),
        "tscircuit/core",
        1,
      ),
    ).toBe(0)
    expect(
      getContributionStarRatingFromAttributes(
        contributionAttributes(),
        "tscircuit/core",
        3,
      ),
    ).toBe(3)
  })
  it("caps monthly sponsorships at $200, with the $300 exception, without increasing lower amounts", () => {
    expect(
      getSponsorshipAmount({
        weeklyStars: [3, 3, 3, 3],
        highScore: 80,
        username: "example",
      }),
    ).toBe(200)
    expect(
      getSponsorshipAmount({
        weeklyStars: [3, 3, 3, 3],
        highScore: 80,
        username: "MOHAN-BEE",
      }),
    ).toBe(300)
    expect(
      getSponsorshipAmount({
        weeklyStars: [1, 0, 0, 0],
        highScore: 4,
        username: "example",
      }),
    ).toBe(30)
  })
})
