import { describe, expect, it } from "bun:test"
import {
  DISCORD_CONTENT_LIMIT,
  buildIssueNotificationContent,
  splitDiscordContent,
} from "lib/notifications/split-discord-content"

const makeIssues = (count: number) =>
  Array.from({ length: count }, (_, i) => ({
    number: i + 1,
    title: "A realistic notification title ".repeat(3),
    html_url: `https://github.com/example/repo/issues/${i + 1}`,
    user: { login: "contributor" },
  }))

describe("splitDiscordContent", () => {
  it("returns empty for empty content", () => {
    expect(splitDiscordContent("")).toEqual([])
  })

  it("keeps content at the exact limit as one chunk", () => {
    const content = "a".repeat(DISCORD_CONTENT_LIMIT)
    expect(splitDiscordContent(content)).toEqual([content])
  })

  it("splits one character over the limit", () => {
    const content = "a".repeat(DISCORD_CONTENT_LIMIT + 1)
    const chunks = splitDiscordContent(content)
    expect(chunks.every((c) => c.length <= DISCORD_CONTENT_LIMIT)).toBe(true)
    expect(chunks.join("")).toBe(content)
  })

  it("splits at complete lines when possible", () => {
    const line = "x".repeat(100)
    const content = Array.from({ length: 30 }, () => line).join("\n")
    const chunks = splitDiscordContent(content)
    expect(chunks.every((c) => c.length <= DISCORD_CONTENT_LIMIT)).toBe(true)
    expect(chunks.join("")).toBe(content)
  })

  it("does not split a UTF-16 surrogate pair at the boundary", () => {
    const emoji = "🎯"
    const prefix = "a".repeat(DISCORD_CONTENT_LIMIT - 1)
    const content = prefix + emoji
    const chunks = splitDiscordContent(content)
    expect(chunks.join("")).toBe(content)
    expect(chunks.every((c) => c.length <= DISCORD_CONTENT_LIMIT)).toBe(true)
    for (const chunk of chunks) {
      expect(() => [...chunk]).not.toThrow()
    }
  })

  it("splits a single line longer than the limit", () => {
    const content = "y".repeat(DISCORD_CONTENT_LIMIT * 2 + 50)
    const chunks = splitDiscordContent(content)
    expect(chunks.every((c) => c.length <= DISCORD_CONTENT_LIMIT)).toBe(true)
    expect(chunks.join("")).toBe(content)
  })
})

describe("issue notification payloads", () => {
  it("30 ordinary issues exceed Discord's limit before splitting", () => {
    const content = buildIssueNotificationContent(
      "example/repo",
      makeIssues(30),
    )
    expect(content.length).toBeGreaterThan(DISCORD_CONTENT_LIMIT)
  })

  it("chunked 30-issue payload preserves every record", () => {
    const content = buildIssueNotificationContent(
      "example/repo",
      makeIssues(30),
    )
    const chunks = splitDiscordContent(content)
    expect(chunks.every((c) => c.length <= DISCORD_CONTENT_LIMIT)).toBe(true)
    expect(chunks.join("")).toBe(content)
    for (let n = 1; n <= 30; n++) {
      expect(chunks.join("")).toContain(`#${n} `)
    }
  })

  it("empty issue list produces only the header line", () => {
    expect(buildIssueNotificationContent("example/repo", [])).toBe(
      "New issues in example/repo:\n",
    )
  })
})
