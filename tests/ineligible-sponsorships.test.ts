import { describe, test, expect } from "bun:test"
import {
  isUserIneligible,
  INELIGIBLE_FOR_SPONSORSHIP,
} from "../lib/ineligible-sponsorships"
import fs from "node:fs"
import path from "node:path"

describe("Ineligible Sponsorship", () => {
  test("should export correct data structures", () => {
    expect(Array.isArray(INELIGIBLE_FOR_SPONSORSHIP)).toBe(true)
    expect(typeof isUserIneligible).toBe("function")
  })

  test("should handle empty list correctly", () => {
    expect(isUserIneligible("any-user")).toBe(false)
    expect(isUserIneligible("")).toBe(false)
  })

  test("should validate array structure", () => {
    INELIGIBLE_FOR_SPONSORSHIP.forEach((entry) => {
      expect(entry).toHaveProperty("github_username")
      expect(entry).toHaveProperty("reason")
      expect(typeof entry.github_username).toBe("string")
      expect(typeof entry.reason).toBe("string")
    })
  })

  test("should integrate with sponsorship script", () => {
    const sponsorshipScript = fs.readFileSync(
      path.join(process.cwd(), "scripts", "generate-sponsorship-csv.ts"),
      "utf-8",
    )

    expect(sponsorshipScript).toContain('from "../lib/ineligible-sponsorships"')
    expect(sponsorshipScript).toContain(
      "if (isUserIneligible(username)) return",
    )
  })
})
