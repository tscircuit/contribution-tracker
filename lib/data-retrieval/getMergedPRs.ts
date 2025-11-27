import { octokit } from "lib/sdks"
import type { MergedPullRequest } from "lib/types"
import { filterDiff } from "lib/data-processing/filter-diff"
import { extractBotAnalysis } from "lib/data-processing/bot-comments-utils"

export async function getMergedPRs(
  repo: string,
  since: string,
): Promise<MergedPullRequest[]> {
  console.log(`[getMergedPRs] Getting merged PRs for ${repo} since ${since}`)
  const [owner, repo_name] = repo.split("/")
  const { data } = await octokit.pulls.list({
    owner,
    repo: repo_name,
    state: "closed",
    sort: "updated",
    direction: "desc",
    per_page: 100,
  })

  const filteredPRs = data
    .filter(
      (pr) =>
        pr.merged_at &&
        new Date(pr.merged_at).getTime() >= new Date(since).getTime() &&
        !pr.title?.toLowerCase().includes("revert") &&
        (pr.body ? !pr.body?.toLowerCase().includes("revert") : true),
    )

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

      const { data: comments } = await octokit.octokit.issues
        .listComments({
          owner,
          repo: repo_name,
          issue_number: pr.number,
          per_page: 100,
        })
        .catch(() => ({ data: [] }))

      const botAnalysis = extractBotAnalysis(comments)
      console.log(
        botAnalysis
          ? `Bot analysis found for PR:- ${pr.url} | ${botAnalysis.starRating}`
          : `Bot analysis not found for PR:- ${pr.url}`,
      )

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
        botAnalysis,
      }
    }),
  )

  return prsWithDiff.filter((pr) => pr !== null) as MergedPullRequest[]
}
