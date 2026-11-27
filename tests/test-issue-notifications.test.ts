import { describe, expect, test } from "bun:test"
import type { MessageCreateOptions } from "discord.js"
import {
  DISCORD_MAX_CONTENT_LENGTH,
  notifyDiscord,
  splitDiscordMessageContent,
  type Issue,
} from "../scripts/issue-notifications"

describe("splitDiscordMessageContent", () => {
  test("returns empty array for empty content", () => {
    expect(splitDiscordMessageContent("")).toEqual([])
  })

  test("returns single chunk when content is within or at exact limit", () => {
    const exact = "a".repeat(DISCORD_MAX_CONTENT_LENGTH)
    expect(splitDiscordMessageContent(exact)).toEqual([exact])
  })

  test("splits content that is one character over the limit", () => {
    const over = "a".repeat(DISCORD_MAX_CONTENT_LENGTH + 1)
    const chunks = splitDiscordMessageContent(over)
    expect(chunks.length).toBe(2)
    expect(chunks[0]?.length).toBe(DISCORD_MAX_CONTENT_LENGTH)
    expect(chunks[1]).toBe("a")
  })

  test("does not break UTF-16 surrogate pairs across chunk boundaries", () => {
    const prefix = "x".repeat(DISCORD_MAX_CONTENT_LENGTH - 1)
    const emoji = "🚀" // 2 UTF-16 code units
    const input = `${prefix}${emoji}tail`
    const chunks = splitDiscordMessageContent(input)

    expect(chunks.length).toBe(2)
    expect(chunks[0]).toBe(prefix)
    expect(chunks[1]).toBe(`${emoji}tail`)
    expect(chunks.join("")).toBe(input)
  })

  test("splits multiline content on line boundaries where possible", () => {
    const line1 = "first line"
    const line2 = "second line"
    const line3 = "third line"
    const content = [line1, line2, line3].join("\n")

    const chunks = splitDiscordMessageContent(content, 22)
    expect(chunks).toEqual([`${line1}\n${line2}`, line3])
  })

  test("falls back to bounded split when an individual line exceeds limit", () => {
    const longLine = "b".repeat(2500)
    const chunks = splitDiscordMessageContent(`header\n${longLine}\nfooter`)
    expect(chunks).toEqual([
      "header",
      "b".repeat(DISCORD_MAX_CONTENT_LENGTH),
      "b".repeat(500),
      "footer",
    ])
  })
})

describe("notifyDiscord", () => {
  test("does not send when issue list is empty", async () => {
    const sent: MessageCreateOptions[] = []
    await notifyDiscord([], "example/repo", {
      send: async (options) => {
        sent.push(options)
      },
    })
    expect(sent).toHaveLength(0)
  })

  test("chunks a 30-issue batch within Discord's 2,000-character limit and preserves all records", async () => {
    const issues: Issue[] = Array.from({ length: 30 }, (_, index) => {
      const num = index + 1
      return {
        number: num,
        title: "A realistic notification title ".repeat(3),
        html_url: `https://github.com/example/repo/issues/${num}`,
        user: { login: "contributor" },
        created_at: "2026-09-08T00:00:00Z",
      }
    })

    const sent: MessageCreateOptions[] = []
    await notifyDiscord(issues, "example/repo", {
      send: async (options) => {
        if ((options.content?.length ?? 0) > DISCORD_MAX_CONTENT_LENGTH) {
          throw new Error("Discord content exceeds 2,000 characters")
        }
        sent.push(options)
      },
    })

    expect(sent.length).toBeGreaterThan(1)
    for (const payload of sent) {
      expect(payload.content?.length).toBeLessThanOrEqual(
        DISCORD_MAX_CONTENT_LENGTH,
      )
      expect(payload.allowedMentions).toEqual({ parse: [] })
    }

    const reconstructed = sent.map((p) => p.content).join("\n")
    const expected =
      "New issues in example/repo:\n" +
      issues
        .map(
          (issue) =>
            `• #${issue.number} ${issue.title} by ${issue.user.login} - <${issue.html_url}>`,
        )
        .join("\n")
    expect(reconstructed).toBe(expected)
  })

  test("propagates transport failure without automatic retry", async () => {
    const issues: Issue[] = [
      {
        number: 1,
        title: "Single issue",
        html_url: "https://github.com/example/repo/issues/1",
        user: { login: "contributor" },
        created_at: "2026-09-08T00:00:00Z",
      },
    ]

    let attempts = 0
    await expect(
      notifyDiscord(issues, "example/repo", {
        send: async () => {
          attempts += 1
          throw new Error("Webhook transport error")
        },
      }),
    ).rejects.toThrow("Webhook transport error")

    expect(attempts).toBe(1)
  })
})
