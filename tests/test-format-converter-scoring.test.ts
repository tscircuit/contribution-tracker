import { describe, expect, it } from "bun:test"
import { getContributionStarRatingFromAttributes } from "lib/ai-stuff/getConstributionStarRatingFromAttributes"
import {
  PR_ATTRIBUTES,
  type PrAttributeSchema,
} from "lib/ai-stuff/pr-attributes"

const attributes = (value: boolean): PrAttributeSchema =>
  Object.fromEntries(
    Object.keys(PR_ATTRIBUTES).map((key) => [key, value]),
  ) as PrAttributeSchema

describe("format converter PR scoring", () => {
  for (const repo of [
    "tscircuit/circuit-json-to-altium",
    "tscircuit/circuit-json-to-kicad",
  ]) {
    it(`always rates PRs to ${repo} as tiny`, () => {
      expect(
        getContributionStarRatingFromAttributes(attributes(false), repo),
      ).toBe(1)
      expect(
        getContributionStarRatingFromAttributes(attributes(true), repo),
      ).toBe(1)
    })

    it(`overrides manual ratings for ${repo}`, () => {
      for (const rating of [0, 1, 2, 3, 4, 5] as const) {
        expect(
          getContributionStarRatingFromAttributes(
            attributes(true),
            repo,
            rating,
          ),
        ).toBe(1)
      }
    })
  }

  it("preserves automatic and manual ratings for other repositories", () => {
    const repo = "tscircuit/core"
    expect(
      getContributionStarRatingFromAttributes(attributes(false), repo),
    ).toBe(1)
    expect(
      getContributionStarRatingFromAttributes(attributes(true), repo),
    ).toBe(3)
    expect(
      getContributionStarRatingFromAttributes(attributes(true), repo, 0),
    ).toBe(0)
    expect(
      getContributionStarRatingFromAttributes(attributes(false), repo, 5),
    ).toBe(5)
  })
})
