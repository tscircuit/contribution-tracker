import { STAFF_USERNAMES } from "frontend/src/constants/contributors"
import { filterDiff } from "lib/data-processing/filter-diff"
import { octokit } from "lib/sdks"
import type { MergedPullRequest } from "lib/types"

export async function getMergedPRs(
  repo: string,
  since: string,
  currentTime: Date = new Date(),
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

  const sinceDate = new Date(since)
  const currentTimeMs = currentTime.getTime()
  const filteredPRs = data.filter((pr) => {
    if (!pr.merged_at) return false
    const mergedTime = new Date(pr.merged_at).getTime()
    const inRange =
      mergedTime >= sinceDate.getTime() && mergedTime <= currentTimeMs
    const notRevert =
      !pr.title?.toLowerCase().includes("revert") &&
      (pr.body ? !pr.body?.toLowerCase().includes("revert") : true)
    return inRange && notRevert
  })

  // Fetch diff content for each PR
  const prsWithDiff = await Promise.all(
    filteredPRs.map(async (pr) => {
      const { data: diffData } = await octokit.pulls
        .get({
          owner,
          repo: repo_name,
          pull_number: pr.number,
          mediaType: { format: "diff" },
        })
        .catch((e) => {
          console.log(`Failed to fetch diff for PR ${pr.number}`, e)
          return { data: "" }
        })

      if (!diffData) {
        return null
      }

      const filteredDiff = filterDiff(String(diffData))

      // // Fetch comments for the PR
      // const { data: comments } = await octokit.issues
      //   .listComments({
      //     owner,
      //     repo: repo_name,
      //     issue_number: pr.number,
      //     per_page: 100,
      //   })
      //   .catch(() => ({ data: [] }))

      // // Check if any maintainer has added a /major tag in their comments
      // const hasMajorTagFromMaintainer = comments.some(
      //   (comment) =>
      //     STAFF_USERNAMES.includes(comment.user?.login ?? "") &&
      //     comment.body &&
      //     comment.body.includes("/major"),
      // )
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

  // Process complete

  return prsWithDiff.filter((pr) => pr !== null) as MergedPullRequest[]
}
