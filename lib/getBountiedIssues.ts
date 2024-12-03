import { Octokit } from "@octokit/rest"

// Ensure you have access to the Octokit instance
const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN })

// Function to check if an issue has a bounty label
function hasBountyLabel(issue: any): boolean {
  return issue.labels.some((label: any) => label.name === "💎 Bounty")
}

// Function to extract bounty amount from issue body
function extractBountyAmount(issue: any): number {
  const bodyMatch = issue.body?.match(/\$(\d+)\s*bounty/i)
  if (bodyMatch) {
    return parseInt(bodyMatch[1])
  }
  return 0 // Default if no bounty found
}

// Fetch bountied issues for a specific contributor
export async function fetchBountiedIssues(
  repo: string,
  contributor: string,
  startDate: string
): Promise<{ number: number; amount: number }[]> {
  try {
    const { data: issues } = await octokit.issues.listForRepo({
      owner: repo.split('/')[0],
      repo: repo.split('/')[1],
      creator: contributor,
      since: startDate,
      state: 'all'
    })

    // Filter and process bountied issues
    return issues
      .filter(hasBountyLabel)
      .map((issue) => ({
        number: issue.number,
        amount: extractBountyAmount(issue)
      }))
  } catch (error) {
    console.error(`Error fetching bountied issues for ${contributor} in ${repo}:`, error)
    return []
  }
}