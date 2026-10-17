import { describe, expect, it } from "bun:test"
import fs from "fs"
import os from "os"
import path from "path"
import {
  getContributionTierRoleName,
  getContributionTierRoleNames,
  loadAllTimeContributionCounts,
} from "lib/utils/contribution-level-utils"

describe("contribution tier role utilities", () => {
  it("maps contribution counts to the expected tier role", () => {
    expect(getContributionTierRoleName(0)).toBeNull()
    expect(getContributionTierRoleName(1)).toBe("c-tier")
    expect(getContributionTierRoleName(9)).toBe("c-tier")
    expect(getContributionTierRoleName(10)).toBe("b-tier")
    expect(getContributionTierRoleName(99)).toBe("b-tier")
    expect(getContributionTierRoleName(100)).toBe("a-tier")
    expect(getContributionTierRoleName(250)).toBe("a-tier")
  })

  it("returns cumulative channel access tier roles", () => {
    expect(getContributionTierRoleNames(0)).toEqual([])
    expect(getContributionTierRoleNames(5)).toEqual(["c-tier"])
    expect(getContributionTierRoleNames(25)).toEqual(["c-tier", "b-tier"])
    expect(getContributionTierRoleNames(120)).toEqual([
      "c-tier",
      "b-tier",
      "a-tier",
    ])
  })

  it("aggregates total merged contributions across overview files", () => {
    const tempDir = fs.mkdtempSync(
      path.join(os.tmpdir(), "contribution-tiers-"),
    )
    try {
      fs.writeFileSync(
        path.join(tempDir, "2026-01-01.json"),
        JSON.stringify({
          alice: { prsMerged: 4 },
          bob: { major: 1, minor: 2, tiny: 0 },
        }),
      )
      fs.writeFileSync(
        path.join(tempDir, "2026-01-08.json"),
        JSON.stringify({
          Alice: { prsMerged: 8 },
          bob: { prsMerged: 97 },
        }),
      )

      const counts = loadAllTimeContributionCounts(tempDir)
      expect(counts.Alice).toBe(12)
      expect(counts.bob).toBe(100)
    } finally {
      fs.rmSync(tempDir, { recursive: true, force: true })
    }
  })
})
