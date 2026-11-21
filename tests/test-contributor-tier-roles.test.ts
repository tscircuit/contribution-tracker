import { describe, expect, test } from "bun:test"
import {
  TIER_ROLE_NAMES,
  aggregateTotalContributionsByUser,
  getCumulativeTierRoleNames,
  getTierRoleName,
} from "../scripts/sync-discord-roles"

describe("Contributor Tier Roles (#226)", () => {
  test("getTierRoleName maps contribution thresholds to c-tier, b-tier, and a-tier", () => {
    expect(getTierRoleName(0)).toBeNull()
    expect(getTierRoleName(1)).toBe("c-tier")
    expect(getTierRoleName(9)).toBe("c-tier")
    expect(getTierRoleName(10)).toBe("b-tier")
    expect(getTierRoleName(99)).toBe("b-tier")
    expect(getTierRoleName(100)).toBe("a-tier")
    expect(getTierRoleName(250)).toBe("a-tier")
  })

  test("getCumulativeTierRoleNames includes lower-tier roles for higher-tier contributors", () => {
    expect(getCumulativeTierRoleNames(0)).toEqual([])
    expect(getCumulativeTierRoleNames(1)).toEqual(["c-tier"])
    expect(getCumulativeTierRoleNames(10)).toEqual(["c-tier", "b-tier"])
    expect(getCumulativeTierRoleNames(100)).toEqual([
      "c-tier",
      "b-tier",
      "a-tier",
    ])
    expect(TIER_ROLE_NAMES).toEqual(["c-tier", "b-tier", "a-tier"])
  })

  test("aggregateTotalContributionsByUser sums prsMerged across weekly overviews case-insensitively", () => {
    const totals = aggregateTotalContributionsByUser([
      {
        Alice: { prsMerged: 6 },
        Bob: { prsMerged: 40 },
      },
      {
        alice: { prsMerged: 5 },
        Bob: { prsMerged: 65 },
        Charlie: { prsMerged: 1 },
      },
    ])

    expect(totals).toEqual({
      alice: 11,
      bob: 105,
      charlie: 1,
    })
    expect(getCumulativeTierRoleNames(totals.alice!)).toEqual([
      "c-tier",
      "b-tier",
    ])
    expect(getCumulativeTierRoleNames(totals.bob!)).toEqual([
      "c-tier",
      "b-tier",
      "a-tier",
    ])
    expect(getCumulativeTierRoleNames(totals.charlie!)).toEqual(["c-tier"])
  })
})
