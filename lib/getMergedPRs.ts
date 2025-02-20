import { octokit } from "lib/sdks"
import type { MergedPullRequest } from "lib/types"

export async function getMergedPRs(
  repo: string,
  since: string,
): Promise<MergedPullRequest[]> {
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

  // Fetch review details for each PR
  const prsWithDetails = await Promise.all(
    filteredPRs.map(async (pr) => {
      const { data: reviews } = await octokit.pulls.listReviews({
        owner,
        repo: repo_name,
        pull_number: pr.number,
      })

      // Check if a reviewer requested changes but never approved
      const reviewersWhoRequestedChanges = new Set(
        reviews
          .filter((review) => review.state === "CHANGES_REQUESTED")
          .map((review) => review.user?.login)
      )

      const reviewersWhoApproved = new Set(
        reviews
          .filter((review) => review.state === "APPROVED")
          .map((review) => review.user?.login)
      )

      const validMerge = [...reviewersWhoRequestedChanges].every(
        (reviewer) => reviewersWhoApproved.has(reviewer)
      )

      if (!validMerge) return null

      const { data: diffData } = await octokit.pulls.get({
        owner,
        repo: repo_name,
        pull_number: pr.number,
        mediaType: { format: "diff" },
      })

      return { ...pr, diff: diffData as unknown as string }
    }),
  )

  return prsWithDetails.filter(Boolean) as MergedPullRequest[]
}