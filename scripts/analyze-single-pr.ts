import { CachedOctokit } from "lib/data-retrieval/cachedOctokit"
import { analyzePRWithAI } from "lib/ai-stuff/analyze-pr"
import type { MergedPullRequest, StarRating } from "lib/types"
import { filterDiff } from "lib/data-processing/filter-diff"
import type { components } from "@octokit/openapi-types"

type PullRequest = components["schemas"]["pull-request"]

function parsePRUrl(url: string): {
  owner: string
  repo: string
  number: number
} {
  const match = url.match(/github\.com\/([^\/]+)\/([^\/]+)\/pull\/(\d+)/)
  if (!match) {
    throw new Error(
      "Invalid GitHub PR URL format. Expected: https://github.com/owner/repo/pull/123",
    )
  }
  return {
    owner: match[1],
    repo: match[2],
    number: parseInt(match[3], 10),
  }
}

async function fetchPullRequestDetails(
  owner: string,
  repo: string,
  number: number,
): Promise<MergedPullRequest> {
  const octokit = new CachedOctokit({ auth: process.env.GITHUB_TOKEN })

  // Fetch basic PR data
  const { data: pr } = (await octokit.pulls.get({
    owner,
    repo,
    pull_number: number,
  })) as { data: PullRequest }

  // Fetch diff data
  const { data: diffData } = await octokit.pulls.get({
    owner,
    repo,
    pull_number: number,
    mediaType: { format: "diff" },
  })

  const filteredDiff = filterDiff(diffData as string)

  const manualStarRating = pr.labels
    .map(
      (label) =>
        (label.name.includes("star") && label.name.split("star").length - 1) ||
        (label.name.includes("⭐") && label.name.split("⭐").length - 1) ||
        null,
    )
    .find((l) => l !== null)

  return {
    number: pr.number,
    state: pr.merged_at ? "merged" : (pr.state as "opened" | "closed"),
    title: pr.title,
    body: pr.body || "",
    user: {
      login: pr.user?.login || "unknown",
    },
    html_url: pr.html_url,
    created_at: pr.created_at,
    merged_at: pr.merged_at || "",
    diff: filteredDiff,
    manualStarRating: manualStarRating as StarRating,
  }
}

async function main() {
  const url = process.argv[2]

  if (!url) {
    console.error("Usage: bun scripts/analyze-single-pr.ts <PR_URL>")
    console.error(
      "Example: bun scripts/analyze-single-pr.ts https://github.com/owner/repo/pull/123",
    )
    process.exit(1)
  }

  if (!process.env.GITHUB_TOKEN) {
    console.error("Error: GITHUB_TOKEN environment variable is required")
    process.exit(1)
  }

  try {
    // Parse URL
    const { owner, repo, number } = parsePRUrl(url)
    console.log(`Analyzing PR #${number} from ${owner}/${repo}`)

    // Fetch PR data
    const pullRequestDetails = await fetchPullRequestDetails(
      owner,
      repo,
      number,
    )

    // Run AI analysis
    const analysis = await analyzePRWithAI(
      pullRequestDetails,
      `${owner}/${repo}`,
    )

    // Output results
    console.log("\n=== PR Analysis Results ===")
    console.log(analysis)
  } catch (error) {
    console.error("Error analyzing PR:", error)
    process.exit(1)
  }
}

main()
