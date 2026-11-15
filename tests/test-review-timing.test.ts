import { expect, test } from "bun:test"
import {
  createEmptyContributorStats,
  getReviewLatencyEntriesWithCurrentLogins,
} from "../lib/contributor-identity"
import {
  formatReviewLatency,
  generateMarkdown,
} from "../lib/data-processing/generateMarkdown"
import { extractFirstReviewTiming } from "../lib/data-retrieval/getAllPRs"
import type { ContributorStats, ReviewLatencyEntry } from "../lib/types"

test("formatReviewLatency formats durations across days, hours, and minutes", () => {
  expect(formatReviewLatency(0)).toBe("0m")
  expect(formatReviewLatency(-15_000)).toBe("0m")
  expect(formatReviewLatency(12 * 60_000)).toBe("12m")
  expect(formatReviewLatency(75 * 60_000)).toBe("1h 15m")
  expect(formatReviewLatency(26.5 * 60 * 60_000)).toBe("1d 2h 30m")
})

test("extractFirstReviewTiming picks earliest genuine review while skipping bots, self-reviews, and pending reviews", () => {
  const timing = extractFirstReviewTiming(
    {
      created_at: "2026-06-01T10:00:00Z",
      user: { id: 101, login: "author-user" },
    },
    [
      {
        state: "COMMENTED",
        submitted_at: "2026-06-01T10:01:00Z",
        user: { id: 999, login: "coderabbitai[bot]" },
      },
      {
        state: "COMMENTED",
        submitted_at: "2026-06-01T10:05:00Z",
        user: { id: 101, login: "author-user" },
      },
      {
        state: "PENDING",
        submitted_at: null,
        user: { id: 202, login: "reviewer-pending" },
      },
      {
        state: "APPROVED",
        submitted_at: "2026-06-01T13:30:00Z",
        user: { id: 203, login: "later-reviewer" },
      },
      {
        state: "CHANGES_REQUESTED",
        submitted_at: "2026-06-01T11:45:00Z",
        user: { id: 204, login: "first-human-reviewer" },
      },
    ],
  )

  expect(timing).toEqual({
    firstReviewAt: "2026-06-01T11:45:00Z",
    firstReviewer: "first-human-reviewer",
    firstReviewerId: 204,
    timeToFirstReviewMs: 105 * 60_000,
  })
})

test("getReviewLatencyEntriesWithCurrentLogins resolves renamed GitHub accounts", () => {
  const statsByLogin: Record<string, ContributorStats> = {
    "new-author-login": {
      ...createEmptyContributorStats({ id: 500, login: "new-author-login" }),
    },
    "new-reviewer-login": {
      ...createEmptyContributorStats({ id: 600, login: "new-reviewer-login" }),
    },
  }

  const entries: ReviewLatencyEntry[] = [
    {
      repo: "tscircuit/core",
      number: 42,
      title: "Fix trace routing",
      url: "https://github.com/tscircuit/core/pull/42",
      author: "old-author-login",
      authorId: 500,
      createdAt: "2026-06-01T00:00:00Z",
      firstReviewAt: "2026-06-01T01:00:00Z",
      firstReviewer: "old-reviewer-login",
      firstReviewerId: 600,
      timeToFirstReviewMs: 60 * 60_000,
    },
  ]

  const resolved = getReviewLatencyEntriesWithCurrentLogins(
    entries,
    statsByLogin,
  )
  expect(resolved[0].author).toBe("new-author-login")
  expect(resolved[0].firstReviewer).toBe("new-reviewer-login")
})

test("generateMarkdown renders Time to First Review table sorted by review latency descending", async () => {
  const entries: ReviewLatencyEntry[] = [
    {
      repo: "tscircuit/runframe",
      number: 10,
      title: "Fast review PR",
      url: "https://github.com/tscircuit/runframe/pull/10",
      author: "alice",
      createdAt: "2026-06-03T00:00:00Z",
      firstReviewAt: "2026-06-03T00:45:00Z",
      firstReviewer: "seveibar",
      timeToFirstReviewMs: 45 * 60_000,
    },
    {
      repo: "tscircuit/core",
      number: 11,
      title: "Slow | piped title\nwith newline",
      url: "https://github.com/tscircuit/core/pull/11",
      author: "bob",
      createdAt: "2026-06-01T00:00:00Z",
      firstReviewAt: "2026-06-02T02:30:00Z",
      firstReviewer: "imrishabh18",
      timeToFirstReviewMs: 26.5 * 60 * 60_000,
    },
  ]

  const markdown = await generateMarkdown([], {}, "2026-06-01", {}, entries)

  expect(markdown).toContain("- [Time to First Review](#time-to-first-review)")
  expect(markdown).toContain("## Time to First Review")
  expect(markdown).toContain(
    "| PR | Repository | Author | First Reviewer | First Review | Time to First Review |",
  )
  expect(markdown).toContain(
    "| [#11 Slow \\| piped title with newline](https://github.com/tscircuit/core/pull/11) | tscircuit/core | bob | imrishabh18 | 2026-06-02T02:30:00Z | 1d 2h 30m |",
  )
  expect(markdown).toContain(
    "| [#10 Fast review PR](https://github.com/tscircuit/runframe/pull/10) | tscircuit/runframe | alice | seveibar | 2026-06-03T00:45:00Z | 45m |",
  )
  expect(markdown.indexOf("#11 Slow")).toBeLessThan(
    markdown.indexOf("#10 Fast review PR"),
  )
})
