import { expect, test } from "bun:test"
import {
  DISCORD_MAX_CONTENT_LENGTH,
  splitDiscordContent,
} from "../lib/utils/split-discord-content"

const buildIssueList = (count: number): string => {
  const title = "A realistic notification title ".repeat(3)
  const lines = Array.from(
    { length: count },
    (_, i) =>
      `• #${i + 1} ${title}by contributor - <https://github.com/example/repo/issues/${i + 1}>`,
  )
  return `New issues in tscircuit/example:\n${lines.join("\n")}`
}

test("empty content yields no chunks", () => {
  expect(splitDiscordContent("")).toEqual([])
})

test("content below the limit is returned unchanged", () => {
  const content = "New issues in tscircuit/example:\n• #1 hello"
  expect(splitDiscordContent(content)).toEqual([content])
})

test("content of exactly the limit stays a single chunk", () => {
  const content = "a".repeat(DISCORD_MAX_CONTENT_LENGTH)
  const chunks = splitDiscordContent(content)
  expect(chunks).toHaveLength(1)
  expect(chunks[0].length).toBe(DISCORD_MAX_CONTENT_LENGTH)
})

test("one character over the limit is split in two", () => {
  const content = `${"a".repeat(DISCORD_MAX_CONTENT_LENGTH - 1)}\nb`
  const chunks = splitDiscordContent(content)
  expect(chunks.length).toBeGreaterThan(1)
  for (const chunk of chunks) {
    expect(chunk.length).toBeLessThanOrEqual(DISCORD_MAX_CONTENT_LENGTH)
  }
  expect(chunks.join("\n")).toBe(content)
})

test("a batch of 30 issues keeps every entry and respects the limit", () => {
  const content = buildIssueList(30)
  expect(content.length).toBeGreaterThan(DISCORD_MAX_CONTENT_LENGTH)

  const chunks = splitDiscordContent(content)
  expect(chunks.length).toBeGreaterThan(1)
  for (const chunk of chunks) {
    expect(chunk.length).toBeLessThanOrEqual(DISCORD_MAX_CONTENT_LENGTH)
  }
  // Joining on the line separator reproduces the payload, so nothing is lost.
  expect(chunks.join("\n")).toBe(content)
  for (let i = 1; i <= 30; i++) {
    expect(chunks.join("\n")).toContain(`• #${i} `)
  }
})

test("a surrogate pair at the boundary is not broken", () => {
  const limit = 4
  // "😀" is a surrogate pair; a naive 4-code-unit slice would split it.
  const content = "a😀b"
  const chunks = splitDiscordContent(content, limit)
  expect(chunks.join("")).toBe(content)
  for (const chunk of chunks) {
    expect(chunk.length).toBeLessThanOrEqual(limit)
    expect(
      /[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/.test(
        chunk,
      ),
    ).toBe(false)
  }
})

test("a single line longer than the limit is split without losing characters", () => {
  const line = "x".repeat(DISCORD_MAX_CONTENT_LENGTH * 2 + 5)
  const chunks = splitDiscordContent(line)
  expect(chunks.length).toBeGreaterThan(2)
  for (const chunk of chunks) {
    expect(chunk.length).toBeLessThanOrEqual(DISCORD_MAX_CONTENT_LENGTH)
  }
  expect(chunks.join("")).toBe(line)
})

test("multiline content keeps its line structure", () => {
  const content = `first line\n${"y".repeat(DISCORD_MAX_CONTENT_LENGTH)}\nlast line`
  const chunks = splitDiscordContent(content)
  for (const chunk of chunks) {
    expect(chunk.length).toBeLessThanOrEqual(DISCORD_MAX_CONTENT_LENGTH)
  }
  expect(chunks.join("\n")).toBe(content)
})
