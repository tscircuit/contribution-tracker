import { expect, test } from "bun:test"
import { checkMilestoneAlignment } from "../lib/ai/analyzePRWithClaude"
import type { MergedPullRequest } from "../lib/types"

test("should mark PR as aligned when title contains milestone keyword", async () => {
  const mockPR: MergedPullRequest = {
    number: 1,
    title: "Add new footprints for resistors",
    body: "Adding some basic component footprints",
    diff: "test diff content",
    user: {
      login: "testuser",
    },
    html_url: "https://github.com/test/repo/pull/1",
    created_at: "2024-03-01",
    merged_at: "2024-03-01",
  }

  const result = checkMilestoneAlignment(mockPR)
  expect(result).toBe(true)
})

test("should mark PR as not aligned when no milestone keywords present", async () => {
  const mockPR: MergedPullRequest = {
    number: 2,
    title: "Update documentation",
    body: "Fixed some typos in README",
    diff: "test diff content",
    user: {
      login: "testuser",
    },
    html_url: "https://github.com/test/repo/pull/2",
    created_at: "2024-03-01",
    merged_at: "2024-03-01",
  }

  const result = checkMilestoneAlignment(mockPR)
  expect(result).toBe(false)
})

test("should handle PR with milestone keyword in body", async () => {
  const mockPR: MergedPullRequest = {
    number: 3,
    title: "Component updates",
    body: "This PR adds several new footprints and improves existing ones",
    diff: "test diff content",
    user: {
      login: "testuser",
    },
    html_url: "https://github.com/test/repo/pull/3",
    created_at: "2024-03-01",
    merged_at: "2024-03-01",
  }

  const result = checkMilestoneAlignment(mockPR)
  expect(result).toBe(true)
})

test("should handle error cases gracefully", async () => {
  const mockPR: MergedPullRequest = {
    number: 4,
    title: "", // Empty title
    body: "", // Empty body
    diff: "", // Empty diff
    user: {
      login: "testuser",
    },
    html_url: "https://github.com/test/repo/pull/4",
    created_at: "2024-03-01",
    merged_at: "2024-03-01",
  }

  const result = checkMilestoneAlignment(mockPR)
  expect(result).toBe(false) // Default to false for error cases
})
