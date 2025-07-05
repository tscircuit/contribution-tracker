import { octokit } from "lib/sdks"
import type { MergedPullRequest } from "lib/types"
import { STAFF_USERNAMES } from "frontend/src/constants/contributors"
import { filterDiff } from "lib/data-processing/filter-diff"
import { getWeekEndDate } from "../utils/date-range-utils"

export async function getMergedPRsFixed(
  repo: string,
  since: string,
): Promise<MergedPullRequest[]> {
  const [owner, repo_name] = repo.split("/")
  const endDate = getWeekEndDate(since)
  
  const { data } = await octokit.pulls.list({
    owner,
    repo: repo_name,
    state: "closed",
    sort: "updated",
    direction: "desc",
    per_page: 100,
  })

  // Fixed filtering: properly handle date ranges
  const filteredPRs = data.filter((pr) => {
    if (!pr.merged_at) return false
    
    const mergedDate = new Date(pr.merged_at)
    const sinceDate = new Date(since)
    const endDateObj = new Date(endDate)
    endDateObj.setHours(23, 59, 59, 999)
    
    // PR must be merged within the week period
    const mergedInRange = mergedDate >= sinceDate && mergedDate <= endDateObj
    
    return mergedInRange &&
      !pr.title?.toLowerCase().includes("revert") &&
      (pr.body ? !pr.body?.toLowerCase().includes("revert") : true)
  })

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

      const hasMajorTag = pr.labels.some((label) => label.name === "major")
      const manualStarRating = pr.labels
        .map(
          (label) =>
            (label.name.includes("star") &&
              label.name.split("star").length - 1) ||
            (label.name.includes("⭐") && label.name.split("⭐").length - 1) ||
            null,
        )
        .find((l) => l !== null)
      return {
        ...pr,
        user: {
          login: pr.user?.login ?? "unknown",
        },
        state: "merged",
        diff: filteredDiff,
        hasMajorTag: hasMajorTag,
        manualStarRating: manualStarRating ?? undefined,
      }
    }),
  )

  return prsWithDiff as MergedPullRequest[]
}