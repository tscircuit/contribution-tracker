import type { PullRequestWithReviews } from "../types"
import { batchProcess } from "../utils/batch-process"
import { fetchAllPagesInWindow, GITHUB_PAGE_SIZE } from "./pagination"
import {
  type GitHubPullRequestLike,
  type GitHubReviewLike,
  isCandidatePullRequestForWindow,
  summarizePullRequestForWindow,
} from "./prWindowActivity"

export interface PullsApiClient {
  pulls: {
    list: (params: {
      owner: string
      repo: string
      sort: "updated"
      direction: "desc"
      state: "all"
      per_page: number
      page: number
    }) => Promise<{ data: GitHubPullRequestLike[] }>
    listReviews: (params: {
      owner: string
      repo: string
      pull_number: number
      per_page: number
      page: number
    }) => Promise<{ data: GitHubReviewLike[] }>
  }
}

export async function getAllPRs(
  repo: string,
  since: string,
  currentTime: Date = new Date(),
  client?: PullsApiClient,
): Promise<PullRequestWithReviews[]> {
  const [owner, repo_name] = repo.split("/")
  const githubClient = client ?? (await import("lib/sdks")).octokit
  const sinceDate = new Date(since)

  const prs = await fetchAllPagesInWindow<GitHubPullRequestLike>({
    since: sinceDate,
    fetchPage: async (page, perPage) => {
      const { data } = await githubClient.pulls.list({
        owner,
        repo: repo_name,
        sort: "updated",
        direction: "desc",
        state: "all",
        per_page: perPage,
        page,
      })
      return data
    },
  })

  const candidatePRs = prs.filter((pr) =>
    isCandidatePullRequestForWindow(pr, sinceDate),
  )

  const fetchReviews = async (
    prNumber: number,
    page = 1,
  ): Promise<GitHubReviewLike[]> => {
    const { data } = await githubClient.pulls.listReviews({
      owner,
      repo: repo_name,
      pull_number: prNumber,
      per_page: GITHUB_PAGE_SIZE,
      page,
    })
    if (data.length === GITHUB_PAGE_SIZE) {
      const nextPageReviews = await fetchReviews(prNumber, page + 1)
      return [...data, ...nextPageReviews]
    }
    return data
  }

  // Process PRs in batches to avoid GitHub's secondary rate limits
  const prsWithDetails = await batchProcess(
    candidatePRs,
    async (pr) => {
      const reviews = await fetchReviews(pr.number)
      return summarizePullRequestForWindow(pr, reviews, sinceDate, currentTime)
    },
    20, // Process 20 PRs at a time
    100, // 100ms delay between batches
  )

  return prsWithDetails.filter(
    (pr): pr is PullRequestWithReviews => pr !== null,
  )
}
