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
  diff: string
  reviews: number
  reviewRequests: number
  reviewsGiven: number
  changesRequested: number
  isClosed: boolean
}

export async function getMergedPRs(
  repo: string,
  since: string,
): Promise<PullRequest[]> {
  const [owner, repo_name] = repo.split("/")
  const { data } = await octokit.pulls.list({
    owner,
    repo: repo_name,
    state: "closed",
    sort: "updated",
    direction: "desc",
    per_page: 100,
  })

  const filteredPRs = data.filter(
    (pr) => pr.merged_at && new Date(pr.merged_at) >= new Date(since),
  )

  const prsWithDetails = await Promise.all(
    filteredPRs.map(async (pr) => {
      const { data: diffData } = await octokit.pulls.get({
        owner,
        repo: repo_name,
        pull_number: pr.number,
        mediaType: {
          format: "diff",
        },
      })

      const { data: reviews } = await octokit.pulls.listReviews({
        owner,
        repo: repo_name,
        pull_number: pr.number,
      })

      const { data: reviewRequests } =
        await octokit.pulls.listRequestedReviewers({
          owner,
          repo: repo_name,
          pull_number: pr.number,
        })

      const changesRequested = reviews.filter(
        (review) => review.state === "CHANGES_REQUESTED",
      ).length

      const reviewsGiven = reviews.filter(
        (review) => pr.user && review.user?.login === pr.user.login,
      ).length

      return {
        ...pr,
        diff: diffData as unknown as string,
        reviews: reviews.length,
        reviewRequests: reviewRequests.users.length,
        reviewsGiven,
        changesRequested,
        isClosed: pr.state === "closed",
      } as PullRequest
    }),
  )

  return prsWithDetails as PullRequest[]
}
