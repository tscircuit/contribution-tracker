import { test, expect } from "bun:test"
import {
  formatDiscordIssueMessages,
  notifyDiscord,
  type Issue,
} from "../scripts/issue-notifications"

test("formatDiscordIssueMessages chunks large issue list under 2,000 characters", () => {
  const issues: Issue[] = Array.from({ length: 30 }, (_, i) => ({
    number: i + 1,
    title: "A realistic notification title ".repeat(3),
    html_url: `https://github.com/tscircuit/example/issues/${i + 1}`,
    user: { login: "contributor" },
    created_at: new Date().toISOString(),
  }))

  const messages = formatDiscordIssueMessages(issues, "tscircuit/example")

  expect(messages.length).toBeGreaterThan(1)
  for (const msg of messages) {
    expect(msg.length).toBeLessThanOrEqual(2000)
    expect(msg).toContain("New issues in tscircuit/example")
  }
})

test("formatDiscordIssueMessages handles empty list", () => {
  const messages = formatDiscordIssueMessages([], "tscircuit/example")
  expect(messages).toEqual([])
})

test("formatDiscordIssueMessages handles extremely long titles safely", () => {
  const issues: Issue[] = [
    {
      number: 100,
      title: "Extremely long title ".repeat(150),
      html_url: "https://github.com/tscircuit/example/issues/100",
      user: { login: "contributor" },
      created_at: new Date().toISOString(),
    },
  ]

  const messages = formatDiscordIssueMessages(issues, "tscircuit/example")
  expect(messages.length).toBeGreaterThanOrEqual(1)
  for (const msg of messages) {
    expect(msg.length).toBeLessThanOrEqual(2000)
  }
})

test("notifyDiscord sends each chunk through webhook", async () => {
  const sentPayloads: any[] = []
  const mockWebhook: any = {
    send: async (options: any) => {
      sentPayloads.push(options)
    },
  }

  const issues: Issue[] = Array.from({ length: 30 }, (_, i) => ({
    number: i + 1,
    title: "Feature Request and Bug Fix Details for issue ".repeat(2),
    html_url: `https://github.com/tscircuit/example/issues/${i + 1}`,
    user: { login: "contributor" },
    created_at: new Date().toISOString(),
  }))

  await notifyDiscord(issues, "tscircuit/example", mockWebhook)
  expect(sentPayloads.length).toBeGreaterThan(1)
  for (const payload of sentPayloads) {
    expect(payload.content.length).toBeLessThanOrEqual(2000)
    expect(payload.allowedMentions).toEqual({ parse: [] })
  }
})
