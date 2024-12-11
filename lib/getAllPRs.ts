import { octokit } from "lib/sdks"
import type { PullRequest, PullRequestWithReviews } from "./types"

export async function getAllPRs(
  repo: string,
  since: string,
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

  const filteredPRs = prs.filter((pr) => {
    if (pr.user.login.includes("renovate")) {
      return false
    }
    const createdDate = pr.created_at ? new Date(pr.created_at) : null
    const mergedDate = pr.merged_at ? new Date(pr.merged_at) : null
    const sinceDate = new Date(since)
    return (
      (createdDate && createdDate >= sinceDate) ||
      (mergedDate && mergedDate >= sinceDate)
    )
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

  const prsWithDetails = await Promise.all(
    filteredPRs.map(async (pr) => {
      const reviews = await fetchReviews(pr.number)
      const reviewsReceived = reviews.length

      const approvalsReceived = reviews.filter(
        (review) => review.state === "APPROVED",
      ).length
      const rejectionsReceived = reviews.filter(
        (review) => review.state === "CHANGES_REQUESTED",
      ).length

      return {
        ...pr,
        reviewsReceived,
        rejectionsReceived,
        approvalsReceived,
        isClosed: pr.state === "closed",
      } as PullRequestWithReviews
    }),
  )

  return prsWithDetails
}
