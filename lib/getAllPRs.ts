import { octokit } from "lib/sdks"
import type { PullRequest, PullRequestWithReviews, ReviewerStats } from "./types"

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

      // Track approvals and changes requested by each reviewer
      const reviewsByUser = reviews.reduce<Record<string, ReviewerStats>>((acc, review) => {
        const login = review.user.login
        if (!acc[login]) {
          acc[login] = { approvalsGiven: 0, changesRequestedGiven: 0 }
        }
        if (review.state === "APPROVED") {
          acc[login].approvalsGiven++
        } else if (review.state === "CHANGES_REQUESTED") {
          acc[login].changesRequestedGiven++
        }
        return acc
      }, {})

      // Get unique reviewer logins
      const reviewerLogins = Object.keys(reviewsByUser)

      // Count total approvals and changes requested
      const reviewStats = Object.values(reviewsByUser).reduce<ReviewerStats>(
        (sum, stats: ReviewerStats) => ({
          approvalsGiven: sum.approvalsGiven + stats.approvalsGiven,
          changesRequestedGiven: sum.changesRequestedGiven + stats.changesRequestedGiven
        }),
        { approvalsGiven: 0, changesRequestedGiven: 0 }
      )

      console.log(`Debug: PR #${pr.number} reviewers:`, reviewerLogins)
      console.log(`Debug: PR #${pr.number} review stats:`, reviewsByUser)
      
      return {
        ...pr,
        reviewsReceived,
        rejectionsReceived,
        approvalsReceived,
        isClosed: pr.state === "closed",
        reviewers: reviewerLogins,
        changesRequestedGiven: reviewStats.changesRequestedGiven,
        reviewsByUser,
      } as PullRequestWithReviews
    }),
  )

  return prsWithDetails
}
