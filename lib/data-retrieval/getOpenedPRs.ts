import { filterDiff } from "lib/data-processing/filter-diff"
import { octokit } from "lib/sdks"
import type { MergedPullRequest } from "lib/types"
import { GITHUB_PAGE_SIZE, hasMorePagesInWindow } from "./pagination"

type OpenPullRequest = Awaited<
  ReturnType<typeof octokit.pulls.list>
>["data"][number]

export async function getOpenedPRs(
  repo: string,
  since: string,
): Promise<MergedPullRequest[]> {
  const [owner, repo_name] = repo.split("/")
  const sinceDate = new Date(since)

  const fetchOpenPRs = async (page = 1): Promise<OpenPullRequest[]> => {
    const { data } = await octokit.pulls.list({
      owner,
      repo: repo_name,
      state: "open",
      sort: "updated",
      direction: "desc",
      per_page: GITHUB_PAGE_SIZE,
      page,
    })
    if (!hasMorePagesInWindow(data, sinceDate)) return data
    return [...data, ...(await fetchOpenPRs(page + 1))]
  }

  const prs = await fetchOpenPRs()
  const filteredPRs = prs.filter(
    (pr) => new Date(pr.created_at).getTime() >= sinceDate.getTime(),
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
