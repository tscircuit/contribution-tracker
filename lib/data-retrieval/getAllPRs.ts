import { octokit } from "lib/sdks"
import { getReviewStats } from "../data-processing/get-review-stats"
import type { PullRequestWithReviews } from "../types"
import {
  fetchDownvotedReviewIds,
  REVIEW_DOWNVOTES_QUERY,
  type ReviewDownvotesResponse,
} from "./review-downvotes"
import { batchProcess } from "../utils/batch-process"

export async function getAllPRs(
  repo: string,
  since: string,
  currentTime: Date = new Date(),
): Promise<PullRequestWithReviews[]> {
  const [owner, repo_name] = repo.split("/")
  const fetchPRs = async (page = 1): Promise<any[]> => {
    const { data } = await octokit.pulls.list({
      owner,
      repo: repo_name,
      sort: "updated",
      direction: "desc",
      state: "all",
      per_page: 100,
      page,
    })
    if (data.length === 100) {
      const nextPagePRs = await fetchPRs(page + 1)
      return [...data, ...nextPagePRs]
    }
    return data
  }

  const prs = await fetchPRs()
  const sinceDate = new Date(since)
  const currentTimeMs = currentTime.getTime()
  const filteredPRs = prs.filter((pr) => {
    if (!pr.user) return false
    if (pr.user.login.includes("renovate")) return false
    const createdDate = pr.created_at ? new Date(pr.created_at) : null
    const mergedDate = pr.merged_at ? new Date(pr.merged_at) : null
    const createdInRange =
      createdDate &&
      createdDate.getTime() >= sinceDate.getTime() &&
      createdDate.getTime() <= currentTimeMs
    const mergedInRange =
      mergedDate &&
      mergedDate.getTime() >= sinceDate.getTime() &&
      mergedDate.getTime() <= currentTimeMs
    return createdInRange || mergedInRange
  })

  const fetchReviews = async (prNumber: number, page = 1): Promise<any[]> => {
    const { data } = await octokit.pulls.listReviews({
      owner,
      repo: repo_name,
      pull_number: prNumber,
      per_page: 100,
      page,
    })
    if (data.length === 100) {
      const nextPageReviews = await fetchReviews(prNumber, page + 1)
      return [...data, ...nextPageReviews]
    }
    return data
  }

  // Process PRs in batches to avoid GitHub's secondary rate limits
  const prsWithDetails = await batchProcess(
    filteredPRs,
    async (pr) => {
      const reviews = await fetchReviews(pr.number)
      const downvotedReviewIds = reviews.length
        ? await fetchDownvotedReviewIds({
            fetchPage: (cursor) =>
              octokit.graphql<ReviewDownvotesResponse>(REVIEW_DOWNVOTES_QUERY, {
                owner,
                repo: repo_name,
                pullNumber: pr.number,
                cursor,
              }),
          })
        : new Set<number>()
      const reviewStats = getReviewStats({
        reviews,
        downvotedReviewIds,
        prNumber: pr.number,
        isMerged: !!pr.merged_at,
        since: sinceDate,
        currentTime,
      })

      return {
        ...pr,
        ...reviewStats,
        isClosed: pr.state === "closed",
        state:
          pr.state === "closed" && !pr.merged_at
            ? "closed"
            : pr.merged_at
              ? "merged"
              : "opened",
      } as PullRequestWithReviews
    },
    20, // Process 20 PRs at a time
    100, // 100ms delay between batches
  )

  return prsWithDetails
}
