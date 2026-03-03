import { describe, expect, test } from "bun:test"
import { scoreToStarString } from "../lib/data-processing/generateMarkdown"

describe("scoreToStarString", () => {
  test("maps updated thresholds correctly", () => {
    expect(scoreToStarString(3)).toBe("")
    expect(scoreToStarString(10)).toBe("⭐")
    expect(scoreToStarString(49)).toBe("⭐⭐")
    expect(scoreToStarString(81)).toBe("⭐⭐⭐")
    expect(scoreToStarString(121)).toBe("👑")
    expect(scoreToStarString(161)).toBe("👑👑")
    expect(scoreToStarString(162)).toBe("👑👑👑")
  })
})
