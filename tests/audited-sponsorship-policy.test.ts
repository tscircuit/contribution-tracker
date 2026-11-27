import { expect, test } from "bun:test"
import {
  PR_ATTRIBUTES,
  type PrAttributeSchema,
} from "../lib/ai-stuff/pr-attributes"
import { getContributionStarRatingFromAttributes as rating } from "../lib/ai-stuff/getConstributionStarRatingFromAttributes"
import { getContributorScore } from "../lib/scoring/getContributorScore"
import { getSponsorshipAmount } from "../lib/scoring/getSponsorshipAmount"
import {
  readReviewedSponsorships,
  reviewedSponsorshipCsv,
} from "../lib/reviewed-sponsorships"
import { allocatePrItems } from "../lib/sponsorship-expense-send"
import type { AnalyzedPR } from "../lib/types"
function attributes(
  overrides: Partial<PrAttributeSchema> = {},
): PrAttributeSchema {
  return {
    ...Object.fromEntries(
      Object.keys(PR_ATTRIBUTES).map((key) => [key, false]),
    ),
    ...overrides,
  } as PrAttributeSchema
}
test("no-credit work earns zero actual points, not the zero-star half point", () => {
  for (const flag of [
    "only_dependency_update",
    "payment_bookkeeping",
    "clear_noop_or_duplicate",
  ]) {
    const attrs = attributes({ [flag]: true })
    expect(rating(attrs, "tscircuit/core", 5)).toBe(0)
    const score = getContributorScore({
      contributorPRs: [
        { ...attrs, starRating: 0, impact: "Tiny" } as AnalyzedPR,
      ],
      contributorStats: undefined,
    })
    expect(score.score).toBe(0)
  }
  expect(
    getContributorScore({
      contributorPRs: [{ starRating: 0, impact: "Tiny" } as AnalyzedPR],
      contributorStats: undefined,
    }).score,
  ).toBe(0.5)
})
test("support work is one star and reproductions never exceed two, including manual ratings", () => {
  expect(
    rating(attributes({ only_docs_tests_or_ci: true }), "tscircuit/core", 5),
  ).toBe(1)
  expect(
    rating(attributes({ only_reproduces_a_bug: true }), "tscircuit/core", 5),
  ).toBe(2)
})
test("missing regression evidence reduces one level without zeroing useful work", () => {
  expect(
    rating(
      attributes({
        only_docs_tests_or_ci: true,
        missing_regression_evidence: true,
      }),
      "tscircuit/core",
      3,
    ),
  ).toBe(1)
  expect(
    rating(
      attributes({ missing_regression_evidence: true }),
      "tscircuit/core",
      3,
    ),
  ).toBe(2)
  expect(
    rating(
      attributes({ missing_regression_evidence: true }),
      "tscircuit/core",
      1,
    ),
  ).toBe(0)
  expect(rating(attributes(), "tscircuit/core", 3)).toBe(3)
})
test("monthly sponsorship caps preserve lower earnings and apply the exception case-insensitively", () => {
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
test("reviewed manifests and regenerated CSVs retain the approved payouts and omit staff", async () => {
  for (const [month, total] of [
    ["2026-09", 53500],
    ["2026-10", 66849],
  ] as const) {
    const rows = readReviewedSponsorships(month)!
    expect(rows).toHaveLength(7)
    expect(rows.reduce((sum, row) => sum + row.amountCents, 0)).toBe(total)
    expect(rows.find((row) => row.username === "mohan-bee")?.amountCents).toBe(
      30000,
    )
    expect(
      rows.some((row) =>
        ["Abse2001", "AnasSarkiz", "ShiboSoftwareDev"].includes(row.username),
      ),
    ).toBe(false)
    expect(await Bun.file(`sponsorships/${month}.csv`).text()).toBe(
      reviewedSponsorshipCsv(month)!,
    )
  }
})
test("invoice allocation gives dependency updates no line item or money", () => {
  const prs = [
    {
      repo: "tscircuit/core",
      number: 1,
      title: "Fix",
      starRating: 2,
      url: "https://github.com/tscircuit/core/pull/1",
    },
    {
      repo: "tscircuit/core",
      number: 2,
      title: "Dependency",
      starRating: 1,
      only_dependency_update: true,
      url: "https://github.com/tscircuit/core/pull/2",
    },
  ]
  const items = allocatePrItems({ prs, amountCents: 1000 })
  expect(items).toHaveLength(1)
  expect(items[0].amountV2.valueInCents).toBe(1000)
})
