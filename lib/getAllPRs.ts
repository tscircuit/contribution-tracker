import { octokit } from "../index"

export interface PullRequest {
  number: number
  title: string
  body: string
  user: {
    login: string
  }
  html_url: string
  created_at: string
  merged_at: string
  reviewsReceived: number
  rejections: number
  approvals: number
  changesRequested: number
  isClosed: boolean
}

export async function getAllPRs(
  repo: string,
  since: string,
): Promise<PullRequest[]> {
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

      const approvals = reviews.filter(
        (review) => review.state === "APPROVED",
      ).length
      const changesRequested = reviews.filter(
        (review) => review.state === "CHANGES_REQUESTED",
      ).length

      const { data: reviewRequests } =
        await octokit.pulls.listRequestedReviewers({
          owner,
          repo: repo_name,
          pull_number: pr.number,
        })

      const rejections = reviewRequests.users.length

      return {
        ...pr,
        reviewsReceived,
        rejections,
        changesRequested,
        approvals,
        isClosed: pr.state === "closed",
      } as PullRequest
    }),
  )

  return prsWithDetails
}
