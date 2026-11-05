import { describe, expect, test } from "bun:test"
import { chunkContent } from "../scripts/issue-notifications"

const DISCORD_LIMIT = 2000

describe("chunkContent", () => {
  test("short content stays one chunk", () => {
    expect(chunkContent("hello")).toEqual(["hello"])
  })

  test("empty content returns single empty chunk", () => {
    expect(chunkContent("")).toEqual([""])
  })

  test("over-limit multiline content splits on line boundaries", () => {
    const lines = Array.from(
      { length: 30 },
      (_, i) =>
        `• #${i + 1} ${"A realistic notification title ".repeat(3)}by contributor - https://github.com/example/repo/issues/${i + 1}`,
    )
    const content = `New issues in example/repo:\n${lines.join("\n")}`
    expect(content.length).toBeGreaterThan(DISCORD_LIMIT)

    const chunks = chunkContent(content)
    for (const chunk of chunks) {
      expect(chunk.length).toBeLessThanOrEqual(DISCORD_LIMIT)
    }
    expect(chunks.join("\n")).toBe(content)
  })

  test("single line longer than the limit is hard-split losslessly", () => {
    const line = "x".repeat(5000)
    const chunks = chunkContent(line)
    for (const chunk of chunks) {
      expect(chunk.length).toBeLessThanOrEqual(DISCORD_LIMIT)
    }
    expect(chunks.join("")).toBe(line)
  })
})
