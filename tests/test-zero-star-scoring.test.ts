import { expect, test } from "bun:test"
import { getContributorScore } from "lib/scoring/getContributorScore"
import type { AnalyzedPR } from "lib/types"

test("zero-star PRs do not add score", () => {
  const result = getContributorScore({
    contributorPRs: [{ starRating: 0, impact: "Tiny" } as AnalyzedPR],
    contributorStats: undefined,
  })

  expect(result.rating0Count).toBe(1)
  expect(result.score).toBe(0)
})
