import { octokit } from "lib/sdks"
import type { PullRequestWithReviews, ReviewerStats, Review } from "./types"

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
    if (pr.user.login.includes("renovate")) return false
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

      // Get the final review state from each reviewer
      const finalReviewByReviewer = reviews.reduce((acc, review: Review) => {
        const reviewer = review.user.login
        const existingReview = acc.get(reviewer)
        if (
          !existingReview ||
          new Date(review.submitted_at) > new Date(existingReview.submitted_at)
        ) {
          acc.set(reviewer, review)
        }
        return acc
      }, new Map())

      const finalReviews = Array.from(finalReviewByReviewer.values()) as Review[]
      const totalReviewers = finalReviews.length

      const finalApprovals = finalReviews.filter(
        (review: Review) => review.state === "APPROVED",
      ).length
      const finalRejections = finalReviews.filter(
        (review: Review) => review.state === "CHANGES_REQUESTED",
      ).length

      // Get review stats for each reviewer based on their final review state
      const reviewsByUser = finalReviews.reduce<Record<string, ReviewerStats>>(
        (acc, review: Review) => {
          const reviewer = review.user.login
          if (!acc[reviewer]) {
            acc[reviewer] = { 
              approvalsGiven: 0, 
              rejectionsGiven: 0,
              prsReviewed: 1  // Count each PR only once per reviewer
            }
          }
          // Set (not increment) the final state
          if (review.state === "APPROVED") {
            acc[reviewer].approvalsGiven = 1
            acc[reviewer].rejectionsGiven = 0
          } else if (review.state === "CHANGES_REQUESTED") {
            acc[reviewer].approvalsGiven = 0
            acc[reviewer].rejectionsGiven = 1
          }
          return acc
        },
        {},
      )

      return {
        ...pr,
        reviewsReceived: totalReviewers,
        rejectionsReceived: finalRejections,
        approvalsReceived: finalApprovals,
        reviewsByUser,
        isClosed: pr.state === "closed",
      } as PullRequestWithReviews
    }),
  )

  // Process complete

  return prsWithDetails
}
