import { describe, expect, test } from "bun:test"
import {
  TIER_ROLE_NAMES,
  getTierRoleName,
  getAllTimeRoleName,
} from "../scripts/sync-discord-roles"

describe("Contributor Tier Roles (#226)", () => {
  test("getTierRoleName returns null for 0 contributions", () => {
    expect(getTierRoleName(0)).toBeNull()
  })

  test("getTierRoleName returns 'c-tier' for 1 to 9 contributions", () => {
    expect(getTierRoleName(1)).toBe("c-tier")
    expect(getTierRoleName(5)).toBe("c-tier")
    expect(getTierRoleName(9)).toBe("c-tier")
  })

  test("getTierRoleName returns 'b-tier' for 10 to 99 contributions", () => {
    expect(getTierRoleName(10)).toBe("b-tier")
    expect(getTierRoleName(42)).toBe("b-tier")
    expect(getTierRoleName(99)).toBe("b-tier")
  })

  test("getTierRoleName returns 'a-tier' for 100+ contributions", () => {
    expect(getTierRoleName(100)).toBe("a-tier")
    expect(getTierRoleName(101)).toBe("a-tier")
    expect(getTierRoleName(500)).toBe("a-tier")
  })

  test("TIER_ROLE_NAMES preserves cumulative hierarchical ordering", () => {
    expect(TIER_ROLE_NAMES).toEqual(["c-tier", "b-tier", "a-tier"])
  })

  test("cumulative tier role expansion grants all lower tier access roles", () => {
    function getCumulativeRoles(contributions: number): string[] {
      const targetRole = getTierRoleName(contributions)
      if (!targetRole) return []
      const targetIndex = TIER_ROLE_NAMES.indexOf(targetRole)
      return TIER_ROLE_NAMES.slice(0, targetIndex + 1)
    }

    expect(getCumulativeRoles(0)).toEqual([])
    expect(getCumulativeRoles(1)).toEqual(["c-tier"])
    expect(getCumulativeRoles(10)).toEqual(["c-tier", "b-tier"])
    expect(getCumulativeRoles(100)).toEqual(["c-tier", "b-tier", "a-tier"])
  })
})
