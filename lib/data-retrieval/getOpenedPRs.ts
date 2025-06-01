import { filterDiff } from "lib/data-processing/filter-diff"
import { octokit } from "lib/sdks"
import type { MergedPullRequest } from "lib/types"

export async function getOpenedPRs(
  repo: string,
  since: string,
): Promise<MergedPullRequest[]> {
  const [owner, repo_name] = repo.split("/")
  const { data: prs } = await octokit.pulls.list({
    owner,
    repo: repo_name,
    state: "open",
    sort: "updated",
    direction: "desc",
    per_page: 100,
  })

  const filteredPRs = prs.filter(
    (pr) => new Date(pr.created_at).getTime() >= new Date(since).getTime(),
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

      const filteredDiff = filterDiff(String(diffData))

      return {
        ...pr,
        state: "opened",
        diff: filteredDiff,
      }
    }),
  )
  return prsWithDiff as MergedPullRequest[]
}
