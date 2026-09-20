import { expect, test } from "bun:test"
import { chunkDiscordMessages } from "lib/discord/chunk-discord-messages"

test("returns empty array when issues lines are empty", () => {
  const chunks = chunkDiscordMessages("New issues in tscircuit/tscircuit:\n", [])
  expect(chunks).toEqual([])
})

test("returns a single message chunk when total length is well within Discord 2000 limit", () => {
  const header = "New issues in tscircuit/tscircuit:\n"
  const lines = [
    "• #101 Fix autorouter crash by alice - <https://github.com/tscircuit/tscircuit/issues/101>",
    "• #102 Add QFN footprint by bob - <https://github.com/tscircuit/tscircuit/issues/102>",
  ]

  const chunks = chunkDiscordMessages(header, lines)
  expect(chunks.length).toBe(1)
  expect(chunks[0]).toContain("New issues in tscircuit/tscircuit:")
  expect(chunks[0]).toContain("#101 Fix autorouter crash")
  expect(chunks[0]).toContain("#102 Add QFN footprint")
  expect(chunks[0].length).toBeLessThanOrEqual(1950)
})

test("chunks messages into multiple parts when issue list exceeds Discord 2000 character limit", () => {
  const header = "New issues in tscircuit/tscircuit:\n"
  // Create 35 long issue lines (each ~80 chars -> total > 2800 chars)
  const lines: string[] = []
  for (let i = 1; i <= 35; i++) {
    lines.push(
      `• #${i} Highly detailed complex electronic schematic autorouting benchmark issue report by developer_${i} - <https://github.com/tscircuit/tscircuit/issues/${i}>`,
    )
  }

  const chunks = chunkDiscordMessages(header, lines)

  // Must be split across multiple chunks
  expect(chunks.length).toBeGreaterThan(1)

  // Every single chunk must strictly obey the safe Discord character limit
  for (const chunk of chunks) {
    expect(chunk.length).toBeLessThanOrEqual(1950)
    expect(chunk.startsWith(header)).toBe(true)
  }

  // Verify all 35 issues are accounted for across all chunks
  for (let i = 1; i <= 35; i++) {
    const issueFound = chunks.some((chunk) =>
      chunk.includes(`• #${i} Highly detailed complex`),
    )
    expect(issueFound).toBe(true)
  }
})

test("handles individual long line exceeding limit without throwing", () => {
  const header = "New issues in repo:\n"
  const veryLongLine = `• #999 ${"A".repeat(2100)} - <https://github.com>`
  const chunks = chunkDiscordMessages(header, [veryLongLine])

  expect(chunks.length).toBe(1)
  expect(chunks[0].length).toBeLessThanOrEqual(1950)
  expect(chunks[0]).toContain("...")
})
