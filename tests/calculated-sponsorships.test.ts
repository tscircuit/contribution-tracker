import { expect, test } from "bun:test"
import { calculatePrSponsorships } from "../lib/calculated-sponsorships"
import type { AnalyzedPR } from "../lib/types"
function pr(
  username: string,
  id: number,
  number: number,
  stars: number,
  extra = {},
): AnalyzedPR {
  return {
    contributor: username,
    contributorId: id,
    repo: "example/project",
    number,
    title: "Useful work",
    url: `https://github.com/example/project/pull/${number}`,
    state: "merged",
    merged_at: "2027-03-10T00:00:00Z",
    starRating: stars,
    baseStarRating: stars,
    evaluationPolicyVersion: 3,
    ...extra,
  } as AnalyzedPR
}
const profiles = new Map<string, string | null>([
  ["alice", "https://opencollective.com/alice"],
  ["bob", "https://opencollective.com/bob"],
  ["mohan-bee", "https://opencollective.com/mohan"],
  ["abse2001", "https://opencollective.com/abse"],
  ["missing", null],
])
test("generic point pricing responds to changed evaluations without dollar overrides", () => {
  const prs = [pr("alice", 1, 1, 3), pr("bob", 2, 2, 2)]
  const original = calculatePrSponsorships({ prs, profiles })
  expect(original.map((row) => row.amountCents)).toEqual([20000, 10000])
  const updated = calculatePrSponsorships({
    prs: [...prs, pr("bob", 2, 3, 2)],
    profiles,
  })
  expect(updated.map((row) => row.amountCents)).toEqual([20000, 20000])
})
test("the exception rate does not rescale other contributors", () => {
  const rows = calculatePrSponsorships({
    prs: [pr("alice", 1, 1, 3), pr("mohan-bee", 2, 2, 3)],
    profiles,
  })
  expect(rows.map((row) => row.amountCents)).toEqual([20000, 30000])
})
test("staff, null profiles and no-credit PRs do not inflate points or denominator", () => {
  const rows = calculatePrSponsorships({
    prs: [
      pr("alice", 1, 1, 2),
      pr("Abse2001", 2, 2, 5),
      pr("missing", 3, 3, 5),
      pr("bob", 4, 4, 5, { only_dependency_update: true }),
    ],
    profiles,
  })
  expect(rows).toHaveLength(1)
  expect(rows[0].username).toBe("alice")
  expect(rows[0].amountCents).toBe(20000)
})
test("deduplicates PRs and applies the evidence penalty once from the baseline", () => {
  const work = pr("alice", 1, 1, 2, {
    baseStarRating: 3,
    missing_regression_evidence: true,
  })
  const rows = calculatePrSponsorships({ prs: [work, work], profiles })
  expect(rows[0].auditedPoints).toBe(2)
  expect(rows[0].mergedPRs).toBe(1)
  expect(
    rows[0].items.reduce((sum, item) => sum + item.amountV2.valueInCents, 0),
  ).toBe(rows[0].amountCents)
})
test("unreviewed legacy inputs fail instead of silently inventing audit coverage", () => {
  expect(() =>
    calculatePrSponsorships({
      prs: [pr("alice", 1, 1, 2, { evaluationPolicyVersion: undefined })],
      profiles,
    }),
  ).toThrow("refreshed")
})
