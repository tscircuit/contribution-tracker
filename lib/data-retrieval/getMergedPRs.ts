import { octokit } from "lib/sdks"
import type { MergedPullRequest } from "lib/types"
import { STAFF_USERNAMES } from "frontend/src/constants/contributors"

function filterDiff(diff: string): string {
  if (!diff || typeof diff !== "string") {
    return "No diff available"
  }

  const lines = diff.split("\n")
  const filteredLines: string[] = []
  let skipFile = false
  let hasValidContent = false

  for (const line of lines) {
    if (line.startsWith("diff --git")) {
      const fileName = line.split(" ")[3]?.replace("b/", "") || ""
      skipFile =
        fileName.endsWith(".svg") ||
        fileName.endsWith(".lock") ||
        fileName.includes("package-lock.json") ||
        fileName.includes("yarn.lock") ||
        fileName.includes("pnpm-lock.yaml")

      if (!skipFile) {
        hasValidContent = true
      }
    }

    if (!skipFile) {
      filteredLines.push(line)
    }
  }

  const result = filteredLines.join("\n").trim()

  if (!result || !hasValidContent) {
    return "Changes only in non-code files (SVG, lock files, etc.)"
  }

  return result
}

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
    (pr) =>
      pr.merged_at &&
      new Date(pr.merged_at).getTime() >= new Date(since).getTime() &&
      !pr.title?.toLowerCase().includes("revert") &&
      (pr.body ? !pr.body?.toLowerCase().includes("revert") : true),
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

      const filteredDiff = filterDiff(diffData as unknown as string)

      // Fetch comments for the PR
      const { data: comments } = await octokit.issues
        .listComments({
          owner,
          repo: repo_name,
          issue_number: pr.number,
          per_page: 100,
        })
        .catch(() => ({ data: [] }))

      // Check if any maintainer has added a /major tag in their comments
      const hasMajorTagFromMaintainer = comments.some(
        (comment) =>
          STAFF_USERNAMES.includes(comment.user?.login ?? "") &&
          comment.body &&
          comment.body.includes("/major"),
      )
      const hasMajorTag = pr.labels.some((label) => label.name === "major")
      return {
        ...pr,
        diff: filteredDiff,
        hasMajorTag: hasMajorTagFromMaintainer || hasMajorTag,
      }
    }),
  )

  // Process complete

  return prsWithDiff as MergedPullRequest[]
}
