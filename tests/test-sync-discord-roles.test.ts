import { describe, expect, it } from "bun:test"
import {
  getAllTimeRoleName,
  getHighestAllTimeRoleName,
  getWeeklyRoleName,
} from "scripts/sync-discord-roles"

describe("Discord role resolution", () => {
  it("resolves only the single matching weekly role for a star rating", () => {
    expect(getWeeklyRoleName("⭐⭐⭐")).toBe("⭐⭐⭐")
    expect(getWeeklyRoleName("👑👑")).toBe("👑👑")
    expect(getWeeklyRoleName("")).toBeNull()
    expect(getWeeklyRoleName(undefined)).toBeNull()
  })

  it("resolves only the highest all-time role earned from score or existing roles", () => {
    expect(getAllTimeRoleName(50)).toBe("Hero")
    expect(getHighestAllTimeRoleName(50, [])).toBe("Hero")
    expect(
      getHighestAllTimeRoleName(50, ["New Contributor", "Contributor"]),
    ).toBe("Hero")
    expect(
      getHighestAllTimeRoleName(5, ["New Contributor", "Contributor", "King"]),
    ).toBe("King")
    expect(getHighestAllTimeRoleName(0, ["Try Hard"])).toBe("Try Hard")
    expect(getHighestAllTimeRoleName(1, [])).toBeNull()
  })
})
