import { describe, expect, test } from "bun:test"
import {
  combineStats,
  mergeAliasedContributors,
} from "../lib/merge-contributor-stats"
import { scoreToStarString } from "../lib/scoring/scoreToStars"

describe("combineStats", () => {
  test("sums numbers, concatenates arrays, keeps first-defined otherwise", () => {
    const a = { score: 3, prsMerged: 1, links: ["x"], stars: "first" }
    const b = { score: 8, prsMerged: 2, links: ["y"], issues: 5 }
    expect(combineStats(a, b)).toEqual({
      score: 11,
      prsMerged: 3,
      links: ["x", "y"],
      stars: "first",
      issues: 5,
    })
  })
})

describe("mergeAliasedContributors", () => {
  const raw = () => ({
    "abdalraof-albarbar": {
      score: 8,
      prsMerged: 6,
      reviewsReceived: 17,
      stars: "⭐",
    },
    "technologyet31-create": {
      score: 6,
      prsMerged: 3,
      reviewsReceived: 6,
      stars: "⭐",
    },
    seveibar: { score: 22, prsMerged: 3, reviewsReceived: 0, stars: "⭐⭐" },
  })

  test("merges an aliased login into its canonical login and recomputes stars", () => {
    const merged = mergeAliasedContributors(raw())
    expect(merged["technologyet31-create"]).toBeUndefined()
    expect(merged["abdalraof-albarbar"]).toMatchObject({
      score: 14,
      prsMerged: 9,
      reviewsReceived: 23,
    })
    expect(merged["abdalraof-albarbar"].stars).toBe(scoreToStarString(14))
  })

  test("is order-independent for the merged totals and stars", () => {
    const forward = raw()
    const reversed = {
      "technologyet31-create": forward["technologyet31-create"],
      "abdalraof-albarbar": forward["abdalraof-albarbar"],
    }
    const a = mergeAliasedContributors(forward)["abdalraof-albarbar"]
    const b = mergeAliasedContributors(reversed)["abdalraof-albarbar"]
    expect(b.score).toBe(a.score)
    expect(b.prsMerged).toBe(a.prsMerged)
    expect(b.reviewsReceived).toBe(a.reviewsReceived)
    expect(b.stars).toBe(a.stars)
  })

  test("leaves a non-aliased contributor untouched", () => {
    const merged = mergeAliasedContributors(raw())
    expect(merged.seveibar).toEqual(raw().seveibar)
  })
})
