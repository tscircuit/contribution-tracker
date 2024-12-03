import { Octokit } from "@octokit/rest"

const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN })

// Function to extract bounty amount from comment body
function extractBountyAmountFromComment(
  commentBody: string | undefined,
): number {
  if (typeof commentBody !== "string") {
    return 0 // Return 0 if commentBody is undefined or not a string
  }

  // Updated regex to match the bounty format in comments
  const bodyMatch = commentBody.match(/## 💎 \$(\d+)\s*bounty/i)
  if (bodyMatch) {
    return parseInt(bodyMatch[1], 10) // Parse the bounty amount as an integer
  }
  return 0 // Return 0 if no bounty found
}

// Fetch bountied issues for a specific contributor and extract bounty info from comments
export async function fetchBountiedIssues(
  repo: string,
  contributor: string,
  startDate: string,
): Promise<{ number: number; amount: number }[]> {
  try {
    // Fetch issues with the '💎 Bounty' label
    const { data: issues } = await octokit.issues.listForRepo({
      owner: repo.split("/")[0],
      repo: repo.split("/")[1],
      creator: contributor,
      since: startDate,
      state: "all",
      labels: "💎 Bounty", // Filter issues by the bounty label directly
    })

    const issuesWithBounties = []

    for (const issue of issues) {
      // Fetch comments for each issue
      const { data: comments } = await octokit.issues.listComments({
        owner: repo.split("/")[0],
        repo: repo.split("/")[1],
        issue_number: issue.number,
      })

      // Check each comment for bounty amount
      let totalBounty = 0
      comments.forEach((comment) => {
        totalBounty += extractBountyAmountFromComment(comment.body)
      })

      // Only include issues with a bounty
      if (totalBounty > 0) {
        issuesWithBounties.push({
          number: issue.number,
          amount: totalBounty,
        })
      }
    }

    return issuesWithBounties
  } catch (error) {
    console.error(
      `Error fetching bountied issues for ${contributor} in ${repo}:`,
      error,
    )
    return []
  }
}
