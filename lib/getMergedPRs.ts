import { octokit } from "lib/sdks"
import { readCache, writeCache } from "./cache"
import type { MergedPullRequest } from "lib/types"

export async function getMergedPRs(
  repo: string,
  since: string,
): Promise<MergedPullRequest[]> {
  const cacheKey = `mergedPRs:${repo}:${since}`
  const cacheExpiry = 24 * 60 * 60 * 1000 // 24 hours

  // Attempt to fetch from cache
  const cachedPRs = await readCache<MergedPullRequest[]>(cacheKey, cacheExpiry)
  if (cachedPRs) return cachedPRs

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
      return { ...pr, diff: diffData as unknown as string }
    }),
  )

  // Cache results
  await writeCache(cacheKey, prsWithDiff)

  return prsWithDiff as MergedPullRequest[]
}
