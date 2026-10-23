import { describe, expect, it } from "bun:test"
import {
  DISCORD_MAX_CONTENT_LENGTH,
  type IssueNotificationItem,
  chunkDiscordIssueNotification,
  formatIssueLine,
} from "../lib/notifications/chunkDiscordIssues"

describe("chunkDiscordIssueNotification", () => {
  const sampleRepo = "tscircuit/contribution-tracker"

  it("should return an empty array when given an empty issue list", () => {
    const result = chunkDiscordIssueNotification([], sampleRepo)
    expect(result).toEqual([])
  })

  it("should return a single chunk for small number of issues well under 2,000 characters", () => {
    const issues: IssueNotificationItem[] = [
      {
        number: 101,
        title: "Fix broken button hover state",
        html_url:
          "https://github.com/tscircuit/contribution-tracker/issues/101",
        user: { login: "alice" },
      },
      {
        number: 102,
        title: "Add dark mode toggle to navigation",
        html_url:
          "https://github.com/tscircuit/contribution-tracker/issues/102",
        user: { login: "bob" },
      },
    ]

    const chunks = chunkDiscordIssueNotification(issues, sampleRepo)
    expect(chunks.length).toBe(1)
    expect(chunks[0]).toContain(`New issues in ${sampleRepo}:`)
    expect(chunks[0]).toContain("• #101 Fix broken button hover state by alice")
    expect(chunks[0]).toContain(
      "• #102 Add dark mode toggle to navigation by bob",
    )
    expect(chunks[0].length).toBeLessThanOrEqual(DISCORD_MAX_CONTENT_LENGTH)
  })

  it("should split a large batch of 30 realistic issues without exceeding 2,000 characters in any chunk", () => {
    // 30 issues with realistic titles (~80-120 chars each) that collectively exceed 2,000 chars
    const issues: IssueNotificationItem[] = Array.from(
      { length: 30 },
      (_, i) => ({
        number: i + 1,
        title: `A realistic and detailed notification title describing bug or feature request ${i + 1}`,
        html_url: `https://github.com/tscircuit/contribution-tracker/issues/${i + 1}`,
        user: { login: `contributor_${i + 1}` },
      }),
    )

    const chunks = chunkDiscordIssueNotification(issues, sampleRepo)

    expect(chunks.length).toBeGreaterThan(1)

    // Every chunk MUST strictly respect the 2,000 character limit
    for (const chunk of chunks) {
      expect(chunk.length).toBeLessThanOrEqual(DISCORD_MAX_CONTENT_LENGTH)
    }

    // First chunk has original header, subsequent chunks have continuation header
    expect(chunks[0]).toContain(`New issues in ${sampleRepo}:`)
    for (let i = 1; i < chunks.length; i++) {
      expect(chunks[i]).toContain(`New issues in ${sampleRepo} (cont.):`)
    }

    // Verify all 30 issues are preserved across the chunks
    for (let i = 1; i <= 30; i++) {
      const issueRef = `• #${i} `
      const foundInSomeChunk = chunks.some((chunk) => chunk.includes(issueRef))
      expect(foundInSomeChunk).toBe(true)
    }
  })

  it("should correctly handle custom maxLength boundaries (e.g. 300 chars)", () => {
    const issues: IssueNotificationItem[] = Array.from(
      { length: 6 },
      (_, i) => ({
        number: i + 1,
        title: `Issue title for number ${i + 1}`,
        html_url: `https://github.com/tscircuit/repo/issues/${i + 1}`,
        user: { login: `user${i}` },
      }),
    )

    const limit = 250
    const chunks = chunkDiscordIssueNotification(
      issues,
      "tscircuit/repo",
      limit,
    )

    expect(chunks.length).toBeGreaterThan(1)
    for (const chunk of chunks) {
      expect(chunk.length).toBeLessThanOrEqual(limit)
    }
  })

  it("should safely truncate an individual issue line if it exceeds the chunk length on its own", () => {
    const massiveTitle = "X".repeat(2500)
    const issues: IssueNotificationItem[] = [
      {
        number: 999,
        title: massiveTitle,
        html_url: "https://github.com/tscircuit/repo/issues/999",
        user: { login: "bot" },
      },
    ]

    const chunks = chunkDiscordIssueNotification(issues, "tscircuit/repo", 2000)
    expect(chunks.length).toBe(1)
    expect(chunks[0].length).toBeLessThanOrEqual(2000)
    expect(chunks[0]).toContain("• #999 ")
    expect(chunks[0]).toContain(
      "... by bot - <https://github.com/tscircuit/repo/issues/999>",
    )
  })

  it("should preserve UTF-16 surrogate pairs (emojis) without splitting them", () => {
    const emojiTitle =
      "🚀 Fast automated PCB layout generation with 💎 pristine traces"
    const issues: IssueNotificationItem[] = [
      {
        number: 42,
        title: emojiTitle,
        html_url: "https://github.com/tscircuit/repo/issues/42",
        user: { login: "cad_master" },
      },
    ]

    const chunks = chunkDiscordIssueNotification(issues, "tscircuit/repo")
    expect(chunks.length).toBe(1)
    expect(chunks[0]).toContain(
      "🚀 Fast automated PCB layout generation with 💎",
    )
  })
})
