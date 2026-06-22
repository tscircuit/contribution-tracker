import { describe, expect, it } from "bun:test"
import { summarizePullRequestReviews } from "lib/data-retrieval/getAllPRs"

describe("pull request review summarization", () => {
  it("counts every review given while keeping merged received counts on latest review", () => {
    const summary = summarizePullRequestReviews({
      prNumber: 123,
      isMerged: true,
      reviews: [
        { state: "CHANGES_REQUESTED", user: { login: "reviewer" } },
        { state: "APPROVED", user: { login: "reviewer" } },
      ],
    })

    expect(summary.approvalsReceived).toBe(1)
    expect(summary.rejectionsReceived).toBe(0)
    expect(summary.reviewsReceived).toBe(1)
    expect(summary.reviewsByUser?.reviewer.approvalsGiven).toBe(1)
    expect(summary.reviewsByUser?.reviewer.rejectionsGiven).toBe(1)
    expect(summary.reviewsByUser?.reviewer.prNumbers?.has(123)).toBe(true)
  })

  it("adds change requests to reviewed PR numbers for open pull requests", () => {
    const summary = summarizePullRequestReviews({
      prNumber: 456,
      isMerged: false,
      reviews: [{ state: "CHANGES_REQUESTED", user: { login: "reviewer" } }],
    })

    expect(summary.rejectionsReceived).toBe(1)
    expect(summary.reviewsByUser?.reviewer.rejectionsGiven).toBe(1)
    expect(summary.reviewsByUser?.reviewer.prNumbers?.has(456)).toBe(true)
  })
})
