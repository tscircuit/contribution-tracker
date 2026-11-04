import { describe, expect, it } from "bun:test"
import { getContributionStarRatingFromAttributes } from "lib/ai-stuff/getConstributionStarRatingFromAttributes"
import {
  PR_ATTRIBUTES,
  type PrAttributeSchema,
} from "lib/ai-stuff/pr-attributes"
import { extractLinkedIssueNumbers } from "lib/data-retrieval/getMergedPRs"
import { getContributorScore } from "lib/scoring/getContributorScore"
import type { AnalyzedPR } from "lib/types"

const defaultAttributes = (): PrAttributeSchema =>
  Object.fromEntries(
    Object.keys(PR_ATTRIBUTES).map((key) => [key, false]),
  ) as PrAttributeSchema

describe("Major issue PR scoring (#135)", () => {
  it("extracts linked issue numbers from closing keywords", () => {
    expect(
      extractLinkedIssueNumbers(
        "Fixes #135, closes tscircuit/contribution-tracker#143 and resolves #99",
        "tscircuit/contribution-tracker",
      ),
    ).toEqual([135, 143, 99])
    expect(extractLinkedIssueNumbers("Related to #50")).toEqual([])
  })

  it("rates PRs with hasMajorTag as 3-star Major contributions", () => {
    expect(
      getContributionStarRatingFromAttributes(
        defaultAttributes(),
        "tscircuit/core",
        undefined,
        true,
      ),
    ).toBe(3)
  })

  it("awards Major (4 points / 3-star) score when a PR is marked Major", () => {
    const prs: AnalyzedPR[] = [
      {
        impact: "Major",
        starRating: 1,
      } as AnalyzedPR,
    ]
    const result = getContributorScore({
      contributorPRs: prs,
      contributorStats: undefined,
    })
    expect(result.major).toBe(1)
    expect(result.rating3Count).toBe(1)
    expect(result.score).toBe(4)
  })
})
