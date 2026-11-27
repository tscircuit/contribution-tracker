import {
  hasRuntimeCodeChanges,
  hasMatchingAutomatedVisualSnapshot,
} from "../lib/data-processing/filter-diff"
import {
  filterDiff,
  hasOnlySupportingFileChanges,
  isDependencyOnlyDiff,
} from "../lib/data-processing/filter-diff"
import { generateAnalyzePRPrompt } from "../lib/ai-stuff/prompts"
import { describe, expect, it } from "bun:test"
import { getContributorScore } from "lib/scoring/getContributorScore"
import { MAINTAINERS } from "lib/scoring/maintainers"
import type { AnalyzedPR, ContributorStats } from "lib/types"

import {
  PR_ATTRIBUTES,
  pr_attribute_schema,
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
      Object.keys(PR_ATTRIBUTES).map((key) => [
        key,
        key === "changes_runtime_implementation",
      ]),
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
      "non_substantive_maintenance",
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
        contributionAttributes({
          changes_runtime_implementation: false,
          only_docs_tests_or_ci: true,
        }),
        "tscircuit/core",
        5,
      ),
    ).toBe(1)
    expect(
      getContributionStarRatingFromAttributes(
        contributionAttributes({
          changes_runtime_implementation: false,
          only_reproduces_a_bug: true,
          high_quality_reproduction: true,
          has_relevant_regression_test: true,
        }),
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

describe("impact and demonstrated regression quality", () => {
  const rate = (
    attributes: Partial<PrAttributeSchema>,
    manualRating?: AnalyzedPR["starRating"],
  ) =>
    getContributionStarRatingFromAttributes(
      contributionAttributes(attributes),
      "tscircuit/core",
      manualRating,
    )
  const strongFix = {
    changes_runtime_implementation: true,
    major_library_algorithm_contribution: true,
    substantial_impact: true,
    regression_test_required: true,
    has_relevant_regression_test: true,
  }
  it("requires substantial impact and meaningful coverage for automatic major credit", () => {
    expect(rate(strongFix)).toBe(3)
    expect(
      rate({
        ...strongFix,
        has_relevant_regression_test: false,
        has_relevant_visual_snapshot: true,
        visual_snapshot_required: true,
      }),
    ).toBe(3)
    expect(rate({ ...strongFix, substantial_impact: false })).toBe(2)
    expect(rate({ ...strongFix, has_relevant_regression_test: false })).toBe(2)
  })
  it("requires relevant snapshots for visual fixes without requiring screenshots for nonvisual fixes", () => {
    expect(rate({ ...strongFix, visual_snapshot_required: false })).toBe(3)
    expect(
      rate({
        ...strongFix,
        visual_snapshot_required: true,
        has_relevant_visual_snapshot: true,
      }),
    ).toBe(3)
    expect(
      rate({
        ...strongFix,
        visual_snapshot_required: true,
        has_relevant_visual_snapshot: false,
      }),
    ).toBe(2)
    expect(
      rate({
        ...strongFix,
        has_relevant_regression_test: false,
        visual_snapshot_required: true,
        has_relevant_visual_snapshot: false,
      }),
    ).toBe(2)
  })
  it("distinguishes an ordinary repro, a diagnostic tested repro, and a weak visual repro", () => {
    const repro = {
      changes_runtime_implementation: false,
      only_reproduces_a_bug: true,
      regression_test_required: true,
      has_relevant_regression_test: true,
    }
    expect(rate(repro)).toBe(1)
    expect(rate({ ...repro, high_quality_reproduction: true })).toBe(1)
    expect(rate({ ...repro, high_quality_reproduction: true }, 2)).toBe(2)
    expect(
      rate(
        {
          ...repro,
          high_quality_reproduction: true,
          visual_snapshot_required: true,
          has_relevant_visual_snapshot: false,
        },
        2,
      ),
    ).toBe(1)
    expect(
      rate({
        ...repro,
        high_quality_reproduction: true,
        has_relevant_regression_test: false,
      }),
    ).toBe(0)
    expect(rate({ ...repro, non_substantive_maintenance: true })).toBe(0)
  })
  it("keeps snapshot paths in evaluation input without flooding it with SVG payloads or lockfiles", () => {
    const diff =
      "diff --git a/tests/__snapshots__/layout.snap.svg b/tests/__snapshots__/layout.snap.svg\n+<svg>huge payload</svg>\ndiff --git a/bun.lock b/bun.lock\n+lock data\ndiff --git a/tests/layout.test.ts b/tests/layout.test.ts\n+expect(render()).toMatchSvgSnapshot()"
    const filtered = filterDiff(diff)
    expect(filtered).toContain("tests/__snapshots__/layout.snap.svg")
    expect(filtered).toContain("toMatchSvgSnapshot")
    expect(filtered).not.toContain("huge payload")
    expect(filtered).not.toContain("lock data")
  })
  it("puts evaluation criteria before a large diff so truncation preserves the rules", () => {
    const prompt = generateAnalyzePRPrompt(
      {
        number: 1,
        title: "Example",
        body: "",
        user: { login: "example" },
        html_url: "https://github.com/org/repo/pull/1",
        diff: "x".repeat(80000),
      },
      "org/repo",
    )
    expect(prompt.indexOf("RULES")).toBeLessThan(prompt.indexOf("DIFF ("))
    expect(prompt.slice(0, 30000)).toContain("has_relevant_regression_test:")
    expect(prompt.slice(0, 30000)).toContain("PR org/repo#1")
  })
})

it("never gives implementation-major credit to test-only work", () => {
  const attributes = contributionAttributes({
    changes_runtime_implementation: false,
    major_library_algorithm_contribution: true,
    substantial_impact: true,
    has_relevant_regression_test: true,
  })
  expect(
    getContributionStarRatingFromAttributes(attributes, "tscircuit/core"),
  ).toBe(1)
})

it("requires the current evidence fields before cached classifications can be reused", () => {
  const current = contributionAttributes()
  expect(pr_attribute_schema.safeParse(current).success).toBe(true)
  const legacy: Partial<PrAttributeSchema> = { ...current }
  delete legacy.changes_runtime_implementation
  expect(pr_attribute_schema.safeParse(legacy).success).toBe(false)
})

it("keeps regression assertions before large fixture dumps", () => {
  const diff = `diff --git a/tests/fixtures/board.json b/tests/fixtures/board.json\n+${"x".repeat(80000)}\ndiff --git a/tests/bug.test.ts b/tests/bug.test.ts\n+expect(solve()).toThrow("specific bug")`
  const filtered = filterDiff(diff)
  expect(filtered.length).toBeLessThan(6000)
  expect(filtered.indexOf("toThrow")).toBeLessThan(filtered.indexOf("fixture"))
})

it("recognizes test-only changes from actual paths rather than trusting a runtime claim", () => {
  const testOnly =
    "diff --git a/tests/repro.test.ts b/tests/repro.test.ts\n+expect(bug()).toBe(true)\ndiff --git a/tests/fixtures/input.json b/tests/fixtures/input.json\n+{}"
  expect(hasOnlySupportingFileChanges(testOnly)).toBe(true)
  expect(
    hasOnlySupportingFileChanges(
      testOnly + "\ndiff --git a/lib/solver.ts b/lib/solver.ts\n+fixed()",
    ),
  ).toBe(false)
  expect(hasOnlySupportingFileChanges("")).toBe(false)
})

it("keeps pure dependency integrations at zero even with supporting regression tests", () => {
  const dep =
    'diff --git a/package.json b/package.json\n-  "solver": "0.0.1",\n+  "solver": "0.0.2",\ndiff --git a/tests/repro.test.ts b/tests/repro.test.ts\n+expect(solver()).toMatchSnapshot()'
  expect(isDependencyOnlyDiff(dep)).toBe(true)
  expect(
    isDependencyOnlyDiff(
      dep + "\ndiff --git a/lib/solver.ts b/lib/solver.ts\n+newAlgorithm()",
    ),
  ).toBe(false)
  expect(
    isDependencyOnlyDiff(
      'diff --git a/package.json b/package.json\n-  "main": "missing.js",\n+  "main": "lib/index.js",',
    ),
  ).toBe(false)
})

it("checks simple runtime and matching-snapshot facts locally", () => {
  const test =
    "diff --git a/tests/layout.test.ts b/tests/layout.test.ts\n+expect(solver).toMatchSolverSnapshot(import.meta.path)"
  expect(hasRuntimeCodeChanges(test)).toBe(false)
  expect(
    hasRuntimeCodeChanges(
      test + "\ndiff --git a/lib/solver.ts b/lib/solver.ts\n+fixed()",
    ),
  ).toBe(true)
  expect(
    hasMatchingAutomatedVisualSnapshot(
      "[Visual artifact changed: tests/__snapshots__/layout.snap.svg; content omitted]\n" +
        test,
    ),
  ).toBe(true)
  expect(
    hasMatchingAutomatedVisualSnapshot(
      "[Visual artifact changed: tests/__snapshots__/unrelated.snap.svg; content omitted]\n" +
        test,
    ),
  ).toBe(false)
})

describe("impact versus regression coverage", () => {
  const attributes = Object.fromEntries(
    Object.keys(PR_ATTRIBUTES).map((name) => [name, false]),
  ) as PrAttributeSchema

  it("does not double a routine fix for including its regression test", () => {
    const fix = {
      ...attributes,
      changes_runtime_implementation: true,
      fixes_subtle_important_bug: true,
      substantial_impact: true,
      has_relevant_regression_test: true,
    }
    expect(
      getContributionStarRatingFromAttributes(fix, "tscircuit/checks"),
    ).toBe(2)
    expect(
      getContributionStarRatingFromAttributes(
        { ...fix, reproduces_and_fixes_a_bug: true },
        "tscircuit/checks",
      ),
    ).toBe(2)
  })

  it("does not award a repository or core-change bonus", () => {
    const fix = {
      ...attributes,
      core_change: true,
      changes_runtime_implementation: true,
      substantial_impact: true,
      has_relevant_regression_test: true,
    }
    expect(getContributionStarRatingFromAttributes(fix, "tscircuit/core")).toBe(
      1,
    )
    expect(
      getContributionStarRatingFromAttributes(fix, "tscircuit/checks"),
    ).toBe(1)
  })

  it("retains major credit for substantial tested algorithm work", () => {
    expect(
      getContributionStarRatingFromAttributes(
        {
          ...attributes,
          changes_runtime_implementation: true,
          substantial_impact: true,
          major_library_algorithm_contribution: true,
          has_relevant_regression_test: true,
        },
        "tscircuit/checks",
      ),
    ).toBe(3)
  })
})
