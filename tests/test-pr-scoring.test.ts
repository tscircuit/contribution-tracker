import { expect, test } from "bun:test"
import { generateMarkdown } from "../lib/data-processing/generateMarkdown"
import type { ContributorStats, AnalyzedPR } from "../lib/types"

const mockPRs: AnalyzedPR[] = [
  {
    number: 1,
    title: "Test PR 1",
    description: "Test Description 1",
    impact: "Major",
    contributor: "user1",
    repo: "test/repo",
    url: "https://github.com/test/repo/pull/1",
  },
]

test("should count distinct PRs for scoring instead of raw review counts", async () => {
  const contributorStats: Record<string, ContributorStats> = {
    user1: {
      reviewsReceived: 0,
      rejectionsReceived: 0,
      approvalsReceived: 0,
      prsOpened: 1,
      prsMerged: 0,
      issuesCreated: 0,
      approvalsGiven: 1, // One approvals on the same PR
      rejectionsGiven: 2, // Two rejection on the same PR
      distinctPrsReviewed: 1, // Should only count as one PR
      score: 0,
    },
  }

  await generateMarkdown(mockPRs, contributorStats, "2024-03-01")

  // The score should reflect one PR (capped at 20), not 3 reviews
  // Plus 4 points for the Major PR contribution
  expect(contributorStats["user1"].score).toBe(5)
})

test("should cap review points at 20 even with many distinct PRs", async () => {
  const contributorStats: Record<string, ContributorStats> = {
    user1: {
      reviewsReceived: 0,
      rejectionsReceived: 0,
      approvalsReceived: 0,
      prsOpened: 1,
      prsMerged: 0,
      issuesCreated: 0,
      approvalsGiven: 25,
      rejectionsGiven: 5,
      distinctPrsReviewed: 30, // More than the cap
      score: 0,
    },
  }

  await generateMarkdown(mockPRs, contributorStats, "2024-03-01")

  // Score should be 20 (capped) + 4 (Major PR)
  expect(contributorStats["user1"].score).toBe(24)
})

test("should handle edge case of no reviews", async () => {
  const contributorStats: Record<string, ContributorStats> = {
    user1: {
      reviewsReceived: 0,
      rejectionsReceived: 0,
      approvalsReceived: 0,
      prsOpened: 1,
      prsMerged: 0,
      issuesCreated: 0,
      approvalsGiven: 0,
      rejectionsGiven: 0,
      score: 0,
    },
  }

  await generateMarkdown(mockPRs, contributorStats, "2024-03-01")

  // Score should be 4 (Major PR) + 0 (no reviews)
  expect(contributorStats["user1"].score).toBe(4)
})
