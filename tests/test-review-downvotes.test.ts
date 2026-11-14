import { expect, test } from "bun:test"
import {
  createEmptyContributorStats,
  mergeContributorStats,
} from "../lib/contributor-identity"
import { getReviewStats } from "../lib/data-processing/get-review-stats"
import {
  fetchDownvotedReviewIds,
  type ReviewDownvotesResponse,
} from "../lib/data-retrieval/review-downvotes"
import { getContributorScore } from "../lib/scoring/getContributorScore"
import { MAINTAINERS } from "../lib/scoring/maintainers"
import { getContributionReviewWeek } from "../lib/scoring/contribution-review-week"

const since = new Date("2026-09-29T18:00:00Z")
const currentTime = new Date("2026-10-06T18:00:00Z")
const user = { id: 123, login: "reviewer" }
const review = (id: number, state = "APPROVED") => ({
  id,
  state,
  user,
  submitted_at: "2026-10-01T12:00:00Z",
})

const reviewPage = (
  nodes: Array<{
    databaseId: number | null
    reactions: { totalCount: number }
  } | null>,
  endCursor: string | null = null,
): ReviewDownvotesResponse => ({
  repository: {
    pullRequest: {
      reviews: {
        nodes,
        pageInfo: { hasNextPage: endCursor !== null, endCursor },
      },
    },
  },
})

test("paginates downvotes and counts each review once, regardless of reaction count", async () => {
  const cursors: Array<string | null> = []
  const downvotedReviewIds = await fetchDownvotedReviewIds({
    fetchPage: async (cursor) => {
      cursors.push(cursor)
      if (cursor === null) {
        return reviewPage(
          [
            { databaseId: 1, reactions: { totalCount: 3 } },
            { databaseId: 2, reactions: { totalCount: 0 } },
            null,
          ],
          "next",
        )
      }
      return reviewPage([
        { databaseId: 1, reactions: { totalCount: 3 } },
        { databaseId: 3, reactions: { totalCount: 1 } },
        { databaseId: null, reactions: { totalCount: 1 } },
      ])
    },
  })
  expect(cursors).toEqual([null, "next"])
  expect([...downvotedReviewIds]).toEqual([1, 3])
})

test("does not silently treat unavailable reactions as zero downvotes", async () => {
  await expect(
    fetchDownvotedReviewIds({
      fetchPage: async () => ({ repository: null }),
    }),
  ).rejects.toThrow("Cannot retrieve pull request review reactions")
})

test("a downvoted latest review does not revive an older approval", () => {
  const stats = getReviewStats({
    reviews: [review(1), review(2, "CHANGES_REQUESTED")],
    downvotedReviewIds: new Set([2]),
    prNumber: 42,
    isMerged: true,
    since,
    currentTime,
  })
  expect(stats.reviewsReceived).toBe(0)
  expect(stats.approvalsReceived).toBe(0)
  expect(stats.rejectionsReceived).toBe(0)
  expect(stats.reviewsByUser?.["github:123"].downvotedReviewsGiven).toBe(1)
  expect(stats.reviewsByUser?.["github:123"].prNumbers?.size).toBe(0)
  expect(stats.allReviewsByUser?.["github:123"].rejectionsGiven).toBe(0)
})

test("keeps a valid latest approval while tracking older downvoted reviews", () => {
  const stats = getReviewStats({
    reviews: [review(1), review(2, "COMMENTED"), review(3)],
    downvotedReviewIds: new Set([1, 2]),
    prNumber: 42,
    isMerged: true,
    since,
    currentTime,
  })
  expect(stats.reviewsReceived).toBe(1)
  expect(stats.approvalsReceived).toBe(1)
  expect(stats.reviewsByUser?.["github:123"].approvalsGiven).toBe(1)
  expect(stats.reviewsByUser?.["github:123"].downvotedReviewsGiven).toBe(2)
  expect([...(stats.reviewsByUser?.["github:123"].prNumbers ?? [])]).toEqual([
    42,
  ])
})

test("only counts submitted downvoted reviews within the reporting window", () => {
  const stats = getReviewStats({
    reviews: [
      { ...review(1), submitted_at: "2026-09-29T17:59:59Z" },
      { ...review(2), submitted_at: since.toISOString() },
      { ...review(3), submitted_at: currentTime.toISOString() },
      { ...review(4), submitted_at: "2026-10-06T18:00:01Z" },
      { ...review(5), submitted_at: null },
      { ...review(6), user: null },
    ],
    downvotedReviewIds: new Set([1, 2, 3, 4, 5, 6]),
    prNumber: 42,
    isMerged: false,
    since,
    currentTime,
  })
  expect(stats.reviewsByUser?.["github:123"].downvotedReviewsGiven).toBe(2)
  expect(stats.reviewsReceived).toBe(0)
})

test("preserves unmerged review counts while excluding downvoted reviews", () => {
  const stats = getReviewStats({
    reviews: [
      review(1),
      review(2, "CHANGES_REQUESTED"),
      review(3, "COMMENTED"),
    ],
    downvotedReviewIds: new Set([1]),
    prNumber: 42,
    isMerged: false,
    since,
    currentTime,
  })
  expect(stats.approvalsReceived).toBe(0)
  expect(stats.rejectionsReceived).toBe(1)
  expect(stats.reviewsReceived).toBe(2)
  expect(stats.reviewsByUser?.["github:123"].prNumbers?.size).toBe(0)
})

test("three downvoted reviews remove review points for maintainers and contributors", () => {
  const contributorStats = {
    ...createEmptyContributorStats(user),
    distinctPrsReviewedNonCodeOwner: 10,
    downvotedReviewsGiven: 3,
  }
  for (const contributor of ["reviewer", Object.keys(MAINTAINERS)[0]]) {
    expect(
      getContributorScore({
        contributorPRs: [],
        contributorStats,
        contributor,
      }).score,
    ).toBe(0)
    expect(
      getContributorScore({
        contributorPRs: [],
        contributorStats: { ...contributorStats, downvotedReviewsGiven: 2 },
        contributor,
      }).score,
    ).toBeGreaterThan(0)
  }
})

test("aggregates downvotes across repositories and renamed logins", () => {
  const contributorStats = mergeContributorStats(
    {
      ...createEmptyContributorStats(user),
      downvotedReviewsGiven: 2,
      downvotedReviewsGivenByWeek: { "2026-09-29T18:00:00.000Z": 2 },
    },
    {
      ...createEmptyContributorStats({ ...user, login: "renamed" }),
      downvotedReviewsGiven: 1,
      downvotedReviewsGivenByWeek: { "2026-09-29T18:00:00.000Z": 1 },
    },
  )
  expect(contributorStats.githubId).toBe(user.id)
  expect(contributorStats.githubLogin).toBe("renamed")
  expect(contributorStats.downvotedReviewsGiven).toBe(3)
  expect(
    contributorStats.downvotedReviewsGivenByWeek?.["2026-09-29T18:00:00.000Z"],
  ).toBe(3)
})

test("weekly penalties do not combine separate weeks in a monthly overview", () => {
  const contributorStats = {
    ...createEmptyContributorStats(user),
    downvotedReviewsGiven: 3,
    downvotedReviewsGivenByWeek: { first: 2, second: 1 },
    distinctPrsReviewedByWeek: {
      first: { nonCodeOwner: 10, asCodeOwner: 0 },
      second: { nonCodeOwner: 2, asCodeOwner: 0 },
    },
  }
  const contributor = Object.keys(MAINTAINERS)[0]
  expect(
    getContributorScore({ contributorPRs: [], contributorStats, contributor })
      .score,
  ).toBe(12)
  expect(
    getContributorScore({
      contributorPRs: [],
      contributorStats: {
        ...contributorStats,
        downvotedReviewsGivenByWeek: { first: 3, second: 0 },
      },
      contributor,
    }).score,
  ).toBe(2)
})

test("groups review penalties using the Tuesday 18:00 UTC week boundary", () => {
  expect(getContributionReviewWeek(new Date("2026-10-06T17:59:59Z"))).toBe(
    "2026-09-29T18:00:00.000Z",
  )
  expect(getContributionReviewWeek(new Date("2026-10-06T18:00:00Z"))).toBe(
    "2026-10-06T18:00:00.000Z",
  )
  expect(getContributionReviewWeek(new Date("2026-10-08T12:00:00Z"))).toBe(
    "2026-10-06T18:00:00.000Z",
  )
})
