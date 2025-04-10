import { octokit } from "lib/sdks"
import type { MergedPullRequest } from "lib/types"
import { FULL_TIMERS } from "frontend/src/constants/contributors"

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

  // Fetch diff content for each PR
  const prsWithDiff = await Promise.all(
    filteredPRs.map(async (pr) => {
      const { data: diffData } = await octokit.pulls.get({
        owner,
        repo: repo_name,
        pull_number: pr.number,
        mediaType: { format: "diff" },
      })

      // Check if PR has /major tag in title or body
      const hasMajorTag =
        (pr.title && pr.title.includes("/major")) ||
        (pr.body && pr.body.includes("/major"))

      // Fetch comments for the PR
      const { data: comments } = await octokit.issues.listComments({
        owner,
        repo: repo_name,
        issue_number: pr.number,
      })

      // Check if any maintainer has added a /major tag in their comments
      const hasMajorTagFromMaintainer = comments.some(
        (comment) =>
          FULL_TIMERS.includes(comment.user?.login ?? "") &&
          comment.body &&
          comment.body.includes("/major"),
      )

      return {
        ...pr,
        diff: diffData as unknown as string,
        hasMajorTag: hasMajorTag || hasMajorTagFromMaintainer,
      }
    }),
  )

  // Process complete

  return prsWithDiff as MergedPullRequest[]
}
