import { octokit } from "lib/sdks"
import { readCache, writeCache } from "./cache"

export async function getIssuesCreated(
  repo: string,
  contributor: string,
  startDate: string,
): Promise<number> {
  const cacheKey = `issuesCreated:${repo}:${contributor}:${startDate}`
  const cacheExpiry = 24 * 60 * 60 * 1000 // 24 hours

  const cachedCount = await readCache<number>(cacheKey, cacheExpiry)
  if (cachedCount !== null) return cachedCount

  try {
    const { data: issues } = await octokit.issues.listForRepo({
      owner: repo.split("/")[0],
      repo: repo.split("/")[1],
      creator: contributor,
      since: startDate,
      state: "all",
    })

    // Filter out pull requests by checking for the absence of `pull_request` property
    const issueData = issues.filter((issue) => !issue.pull_request)
    const count = issueData.length

    // Cache the count
    await writeCache(cacheKey, count)

    return count
  } catch (error) {
    console.error(
      `Error fetching issues created by ${contributor} in ${repo}:`,
      error,
    )
    return 0
  }
}
