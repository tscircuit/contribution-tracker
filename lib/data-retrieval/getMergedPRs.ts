import { octokit } from "lib/sdks"
import type { MergedPullRequest, Milestone } from "lib/types"

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

  // Fetch diff and milestone content for each PR
  const prsWithDiffAndMilestone = await Promise.all(
    filteredPRs.map(async (pr) => {
      const { data: diffData } = await octokit.pulls.get({
        owner,
        repo: repo_name,
        pull_number: pr.number,
        mediaType: { format: "diff" },
      })

      return {
        ...pr,
        diff: diffData as unknown as string,
        milestone: pr.milestone
          ? ({
              title: pr.milestone.title,
              description: pr.milestone.description ?? null,
              state: pr.milestone.state,
              due_on: pr.milestone.due_on ?? null,
              closed_at: pr.milestone.closed_at ?? null,
            } as Milestone)
          : null,
      }
    }),
  )

  // Process complete

  return prsWithDiffAndMilestone as MergedPullRequest[]
}
