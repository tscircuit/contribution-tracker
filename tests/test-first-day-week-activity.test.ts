import { describe, expect, test } from "bun:test"
import { getContributionOverviewWindow } from "../lib/ai/date-utils"
import { mergeContributorStatsByGitHubId } from "../lib/contributor-identity"
import { generateMarkdown } from "../lib/data-processing/generateMarkdown"
import { getAllPRs, type PullsApiClient } from "../lib/data-retrieval/getAllPRs"
import { GITHUB_PAGE_SIZE } from "../lib/data-retrieval/pagination"
import {
  recordPullRequestActivityForRepo,
  summarizePullRequestForWindow,
} from "../lib/data-retrieval/prWindowActivity"
import type { ContributorStats } from "../lib/types"

// First-day-of-week scheduled run: Wednesday 18:20 UTC
// Reporting window: Tuesday Jan 16 18:00 UTC -> Wednesday Jan 17 18:00 UTC
const wednesdayFirstDayRun = new Date("2024-01-17T18:20:00.000Z")
const { startDate: firstDayStart, endDate: firstDayEnd } =
  getContributionOverviewWindow(wednesdayFirstDayRun)

describe("first-day-of-week contribution tracking (#59)", () => {
  test("captures first-day reviews on PRs opened before the Tuesday cutoff without double-counting prsOpened", async () => {
    const mockClient: PullsApiClient = {
      pulls: {
        list: async () => ({
          data: [
            {
              number: 101,
              state: "open",
              title: "Opened before Tuesday cutoff, reviewed on day 1",
              body: "",
              user: { id: 1001, login: "author-a" },
              html_url: "https://github.com/tscircuit/core/pull/101",
              created_at: "2024-01-16T15:30:00.000Z", // Before Tuesday 18:00 UTC
              updated_at: "2024-01-17T09:00:00.000Z", // Updated on day 1
              closed_at: null,
              merged_at: null,
            },
            {
              number: 102,
              state: "open",
              title: "Opened before cutoff with only label update (no reviews)",
              body: "",
              user: { id: 1002, login: "author-b" },
              html_url: "https://github.com/tscircuit/core/pull/102",
              created_at: "2024-01-15T12:00:00.000Z",
              updated_at: "2024-01-16T22:00:00.000Z",
              closed_at: null,
              merged_at: null,
            },
          ],
        }),
        listReviews: async ({ pull_number }) => {
          if (pull_number === 101) {
            return {
              data: [
                {
                  // Previous week review before Tuesday 18:00 UTC cutoff -> must not be double-counted
                  user: { id: 2001, login: "reviewer-prev" },
                  state: "CHANGES_REQUESTED",
                  submitted_at: "2024-01-16T17:00:00.000Z",
                },
                {
                  // First-day review on Tuesday evening (after 18:00 UTC cutoff)
                  user: { id: 2002, login: "seveibar" },
                  state: "APPROVED",
                  submitted_at: "2024-01-16T19:15:00.000Z",
                },
                {
                  // First-day review on Wednesday morning
                  user: { id: 2003, login: "reviewer-day1" },
                  state: "CHANGES_REQUESTED",
                  submitted_at: "2024-01-17T09:00:00.000Z",
                },
                {
                  // Post-cutoff review at 18:05 UTC while cron started at 18:20 UTC -> belongs to day 2
                  user: { id: 2004, login: "reviewer-after-cutoff" },
                  state: "APPROVED",
                  submitted_at: "2024-01-17T18:05:00.000Z",
                },
              ],
            }
          }
          return { data: [] }
        },
      },
    }

    const prsWithReviews = await getAllPRs(
      "tscircuit/core",
      firstDayStart.toISOString(),
      firstDayEnd,
      mockClient,
    )

    expect(prsWithReviews).toHaveLength(1)
    expect(prsWithReviews[0]?.number).toBe(101)
    expect(prsWithReviews[0]?.openedInWindow).toBe(false)
    expect(prsWithReviews[0]?.mergedInWindow).toBe(false)
    expect(prsWithReviews[0]?.reviewsReceived).toBe(2)
    expect(prsWithReviews[0]?.approvalsReceived).toBe(1)
    expect(prsWithReviews[0]?.rejectionsReceived).toBe(1)

    const contributorStatsByIdentity: Record<string, ContributorStats> = {}
    const reviewedPrsByReviewerIdentity: Record<
      string,
      Set<{ number: number; isReviewerRepoOwner: boolean }>
    > = {}

    recordPullRequestActivityForRepo({
      repo: "tscircuit/core",
      prsWithReviews,
      repoOwners: [],
      contributorStatsByIdentity,
      reviewedPrsByReviewerIdentity,
      seniorStaffUsernames: new Set(["seveibar"]),
      sinceDate: firstDayStart,
      currentTime: firstDayEnd,
    })

    const statsByLogin = mergeContributorStatsByGitHubId(
      contributorStatsByIdentity,
    )

    expect(statsByLogin["author-a"]).toMatchObject({
      prsOpened: 0,
      prsMerged: 0,
      reviewsReceived: 2,
      approvalsReceived: 1,
      rejectionsReceived: 1,
      staffReviewedPrs: 1,
      staffApprovalsReceived: 1,
      staffRejectionsReceived: 0,
    })
    expect(statsByLogin.seveibar).toMatchObject({
      approvalsGiven: 1,
      rejectionsGiven: 0,
    })
    expect(statsByLogin["reviewer-day1"]).toMatchObject({
      approvalsGiven: 0,
      rejectionsGiven: 1,
    })
    expect(statsByLogin["reviewer-prev"]).toBeUndefined()
    expect(statsByLogin["reviewer-after-cutoff"]).toBeUndefined()
    expect(statsByLogin["author-b"]).toBeUndefined()
  })

  test("credits distinct merged PR reviews when approved before Tuesday cutoff and merged on day 1", () => {
    const summarized = summarizePullRequestForWindow(
      {
        number: 205,
        state: "closed",
        title: "Approved Tuesday 17:50 UTC, merged Tuesday 18:10 UTC",
        body: "",
        user: { id: 3001, login: "contributor-1" },
        html_url: "https://github.com/tscircuit/core/pull/205",
        created_at: "2024-01-16T17:30:00.000Z", // Week 1
        updated_at: "2024-01-16T18:10:00.000Z", // Day 1 of Week 2
        closed_at: "2024-01-16T18:10:00.000Z",
        merged_at: "2024-01-16T18:10:00.000Z", // Day 1 of Week 2
      },
      [
        {
          user: { id: 4001, login: "reviewer-1" },
          state: "APPROVED",
          submitted_at: "2024-01-16T17:50:00.000Z", // 10 min before cutoff
        },
      ],
      firstDayStart,
      firstDayEnd,
    )

    expect(summarized).not.toBeNull()
    expect(summarized?.openedInWindow).toBe(false)
    expect(summarized?.mergedInWindow).toBe(true)

    const contributorStatsByIdentity: Record<string, ContributorStats> = {}
    const reviewedPrsByReviewerIdentity: Record<
      string,
      Set<{ number: number; isReviewerRepoOwner: boolean }>
    > = {}

    recordPullRequestActivityForRepo({
      repo: "tscircuit/core",
      prsWithReviews: [summarized!],
      repoOwners: [],
      contributorStatsByIdentity,
      reviewedPrsByReviewerIdentity,
      seniorStaffUsernames: new Set(),
      sinceDate: firstDayStart,
      currentTime: firstDayEnd,
    })

    const statsByLogin = mergeContributorStatsByGitHubId(
      contributorStatsByIdentity,
    )
    expect(statsByLogin["contributor-1"]).toMatchObject({
      prsOpened: 0,
      prsMerged: 1,
    })
    expect(statsByLogin["reviewer-1"]).toMatchObject({
      approvalsGiven: 0, // Already counted in Week 1 when submitted
      distinctPrsReviewedNonCodeOwner: 1, // Credited in Week 2 when merged
    })
  })

  test("paginates PRs in getAllPRs and stops once updated_at crosses the reporting window start", async () => {
    const requestedPages: number[] = []

    const page1 = Array.from({ length: GITHUB_PAGE_SIZE }, (_, idx) => ({
      number: idx + 1,
      state: "open",
      title: `PR ${idx + 1}`,
      body: "",
      user: { id: 5000 + idx, login: `user-${idx + 1}` },
      html_url: `https://github.com/tscircuit/core/pull/${idx + 1}`,
      created_at:
        idx === 0 ? "2024-01-16T18:30:00.000Z" : "2024-01-10T00:00:00.000Z",
      updated_at:
        idx === GITHUB_PAGE_SIZE - 1
          ? "2024-01-16T19:00:00.000Z" // Still inside window -> must request page 2
          : "2024-01-16T20:00:00.000Z",
      closed_at: null,
      merged_at: null,
    }))

    const page2 = Array.from({ length: GITHUB_PAGE_SIZE }, (_, idx) => ({
      number: GITHUB_PAGE_SIZE + idx + 1,
      state: "closed",
      title: `PR ${GITHUB_PAGE_SIZE + idx + 1}`,
      body: "",
      user: { id: 6000 + idx, login: `user-p2-${idx + 1}` },
      html_url: `https://github.com/tscircuit/core/pull/${GITHUB_PAGE_SIZE + idx + 1}`,
      created_at: "2024-01-16T18:05:00.000Z",
      updated_at:
        idx === 0 ? "2024-01-16T18:10:00.000Z" : "2024-01-15T00:00:00.000Z", // Crosses before firstDayStart -> stops after page 2
      closed_at: idx === 0 ? "2024-01-16T18:10:00.000Z" : null,
      merged_at: idx === 0 ? "2024-01-16T18:10:00.000Z" : null,
    }))

    const mockClient: PullsApiClient = {
      pulls: {
        list: async ({ page }) => {
          requestedPages.push(page)
          if (page === 1) return { data: page1 }
          if (page === 2) return { data: page2 }
          return { data: [] }
        },
        listReviews: async () => ({ data: [] }),
      },
    }

    const result = await getAllPRs(
      "tscircuit/core",
      firstDayStart.toISOString(),
      firstDayEnd,
      mockClient,
    )

    expect(requestedPages).toEqual([1, 2])
    expect(result.map((pr) => pr.number)).toEqual([1, GITHUB_PAGE_SIZE + 1])
  })

  test("scores contributors with day-1 review points even before they merge a PR of their own", async () => {
    const statsMap: Record<string, ContributorStats> = {
      "reviewer-only": {
        reviewsReceived: 0,
        rejectionsReceived: 0,
        approvalsReceived: 0,
        approvalsGiven: 4,
        rejectionsGiven: 0,
        prsOpened: 1,
        prsMerged: 0,
        issuesCreated: 0,
        distinctPrsReviewedNonCodeOwner: 4,
      },
      "opened-only": {
        reviewsReceived: 0,
        rejectionsReceived: 0,
        approvalsReceived: 0,
        approvalsGiven: 0,
        rejectionsGiven: 0,
        prsOpened: 1,
        prsMerged: 0,
        issuesCreated: 0,
        distinctPrsReviewedNonCodeOwner: 0,
      },
    }

    const markdown = await generateMarkdown([], statsMap, "2024-01-16")
    const contributorOverviewSection =
      markdown
        .split("## Contributor Overview")[1]
        ?.split("## Staff Pass Ratio")[0] ?? ""

    expect(statsMap["reviewer-only"].score).toBe(1)
    expect(statsMap["reviewer-only"].stars).toBe("")
    expect(statsMap["opened-only"].score).toBe(0)
    expect(contributorOverviewSection).toContain(
      "| [reviewer-only](#reviewer-only) | 0 | 0 | 0 | 1 |  |",
    )
    expect(contributorOverviewSection).not.toContain("opened-only")
  })
})
