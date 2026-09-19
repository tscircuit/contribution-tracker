import { expect, test } from "bun:test"
import { getReviewDownvotes } from "../lib/data-retrieval/getReviewDownvotes"
import { getAllPRs } from "../lib/data-retrieval/getAllPRs"
import {
  createEmptyContributorStats,
  mergeContributorStats,
} from "../lib/contributor-identity"
import { getContributorScore } from "../lib/scoring/getContributorScore"
import { MAINTAINERS } from "../lib/scoring/maintainers"
import type { AnalyzedPR } from "../lib/types"

test("fetches more than 100 review nodes and counts reviews, not reactions", async () => {
  const ids = Array.from({ length: 101 }, (_, i) => `review-${i}`)
  const sizes: number[] = []
  const result = await getReviewDownvotes([...ids, ids[0]], async (batch) => {
    sizes.push(batch.length)
    return batch.map((id) => ({
      id,
      reactions: { totalCount: id === ids[100] ? 7 : 0 },
    }))
  })
  expect(sizes).toEqual([100, 1])
  expect([...result]).toEqual([ids[100]])
})

test("missing reaction data fails instead of awarding credit", async () => {
  await expect(
    getReviewDownvotes(["deleted"], async () => [null]),
  ).rejects.toThrow("Missing review reaction data")
  await expect(
    getReviewDownvotes(["r"], async () => {
      throw new Error("API unavailable")
    }),
  ).rejects.toThrow("API unavailable")
  expect(
    await getReviewDownvotes([], async () => {
      throw new Error("not called")
    }),
  ).toEqual(new Set())
})

test("downvotes withhold credit without changing received counts or reviving an earlier approval", async () => {
  const reviews = [
    {
      node_id: "old",
      user: { id: 1, login: "old-name" },
      state: "APPROVED",
      submitted_at: "2026-09-01T00:00:00Z",
    },
    {
      node_id: "bad",
      user: { id: 1, login: "new-name" },
      state: "APPROVED",
      submitted_at: "2026-09-04T00:00:00Z",
    },
    {
      node_id: "bad2",
      user: { id: 1, login: "new-name" },
      state: "COMMENTED",
      submitted_at: "2026-09-05T00:00:00Z",
    },
    {
      node_id: "good",
      user: { id: 2, login: "other" },
      state: "APPROVED",
      submitted_at: "2026-09-05T00:00:00Z",
    },
  ]
  const client = {
    pulls: {
      list: async () => ({
        data: [
          {
            number: 1,
            user: { login: "author" },
            created_at: "2026-09-03T00:00:00Z",
            merged_at: "2026-09-06T00:00:00Z",
            state: "closed",
          },
        ],
      }),
      listReviews: async () => ({ data: reviews }),
    },
    reviewReactionNodes: async (ids: string[]) =>
      ids.map((id) => ({
        id,
        reactions: { totalCount: id === "good" ? 0 : 2 },
      })),
  } as unknown as NonNullable<Parameters<typeof getAllPRs>[3]>
  const [pr] = await getAllPRs(
    "org/repo",
    "2026-09-03",
    new Date("2026-09-07"),
    client,
  )
  expect(pr.reviewsReceived).toBe(2)
  expect(pr.approvalsReceived).toBe(1)
  expect(pr.allReviewsByUser?.["github:1"].approvalsGiven).toBe(2)
  expect(pr.reviewsByUser?.["github:1"].prNumbers?.size).toBe(0)
  expect(pr.reviewsByUser?.["github:1"].downvotedReviews).toBe(2)
  expect(pr.reviewsByUser?.["github:2"].prNumbers?.has(1)).toBe(true)
})

test("three downvoted reviews remove only review points for maintainers and contributors", () => {
  for (const contributor of [
    "ordinary-contributor",
    Object.keys(MAINTAINERS)[0],
  ]) {
    const stats = {
      ...createEmptyContributorStats(),
      distinctPrsReviewedNonCodeOwner: 10,
      downvotedReviews: 2,
    }
    const contributorPRs = [{ starRating: 3, impact: "Major" }] as AnalyzedPR[]
    const before = getContributorScore({
      contributor,
      contributorPRs,
      contributorStats: stats,
    })
    expect(before.score).toBeGreaterThan(4)
    for (const downvotedReviews of [3, 4]) {
      const after = getContributorScore({
        contributor,
        contributorPRs,
        contributorStats: { ...stats, downvotedReviews },
      })
      expect(after.score).toBe(4)
      expect(after.rating3Count).toBe(before.rating3Count)
    }
    expect(
      mergeContributorStats(stats, {
        ...createEmptyContributorStats(),
        downvotedReviews: 1,
      }).downvotedReviews,
    ).toBe(3)
  }
})

import {
  getReviewWeek,
  mergeReviewWeeks,
  countEligibleReviewedPrs,
  type ReviewWeeks,
} from "../lib/scoring/review-weeks"

test("weekly attribution changes at Tuesday 18:00 UTC", () => {
  expect(getReviewWeek("2026-09-08T17:59:59.999Z")).toBe(
    "2026-09-01T18:00:00.000Z",
  )
  expect(getReviewWeek("2026-09-08T18:00:00.000Z")).toBe(
    "2026-09-08T18:00:00.000Z",
  )
  expect(getReviewWeek("2026-09-09T12:00:00Z")).toBe("2026-09-08T18:00:00.000Z")
})

test("three downvoted reviews spread across three weeks do not penalize the month", () => {
  const weeks: ReviewWeeks = {}
  for (const [i, day] of ["02", "09", "16"].entries()) {
    weeks[getReviewWeek(`2026-09-${day}T12:00:00Z`)] = {
      downvotedReviewIds: [`review-${i}`],
      eligiblePrs: [`org/repo#${i}`],
    }
  }
  const contributor = Object.keys(MAINTAINERS)[0]
  const contributorPRs = [{ starRating: 3, impact: "Major" }] as AnalyzedPR[]
  const stats = {
    ...createEmptyContributorStats(),
    downvotedReviews: 3,
    reviewWeeks: weeks,
  }
  expect(
    getContributorScore({
      contributor,
      contributorPRs,
      contributorStats: stats,
    }).score,
  ).toBe(7)
  const badWeek = Object.keys(weeks)[0]
  const penalized = mergeReviewWeeks(weeks, {
    [badWeek]: {
      downvotedReviewIds: ["review-extra1", "review-extra2"],
      eligiblePrs: [],
    },
  })
  expect(
    getContributorScore({
      contributor,
      contributorPRs,
      contributorStats: { ...stats, reviewWeeks: penalized },
    }).score,
  ).toBe(6)
  expect(
    getContributorScore({
      contributor: "ordinary",
      contributorPRs,
      contributorStats: stats,
    }).score,
  ).toBe(5)
  expect(countEligibleReviewedPrs(mergeReviewWeeks(weeks, weeks))).toBe(3)
  expect(
    mergeReviewWeeks(weeks, weeks)[badWeek].downvotedReviewIds,
  ).toHaveLength(1)
  const cappedWeeks = {
    [badWeek]: {
      downvotedReviewIds: [],
      eligiblePrs: Array.from({ length: 20 }, (_, i) => `org/repo#${i}`),
    },
  }
  expect(
    getContributorScore({
      contributor,
      contributorPRs,
      contributorStats: { ...stats, reviewWeeks: cappedWeeks },
    }).score,
  ).toBe(19)
})
