import { octokit } from "lib/sdks"

// Function to extract bounty amount from the comment body
function extractBountyAmountFromComment(commentBody: string): number {
  const bodyMatch = commentBody.match(/\$\d+/i)

  if (bodyMatch) {
    return parseInt(bodyMatch[0].replace("$", ""))
  }
  return 0 // Default if no bounty found
}

// Fetch bountied issues for a specific contributor
export async function getBountiedIssues(
  repo: string,
  contributor: string,
  startDate: string,
): Promise<{ number: number; amount: number }[]> {
  try {
    const { data: issues } = await octokit.issues.listForRepo({
      owner: repo.split("/")[0],
      repo: repo.split("/")[1],
      creator: contributor,
      since: startDate,
      state: "all",
      labels: "💎 Bounty", // Filter issues by the bounty label directly
    })

    // Filter out pull requests by checking for the absence of `pull_request` property
    const issueData = issues.filter((issue) => !issue.pull_request)

    // Ensure we only return issues with the bounty label
    const bountiedIssues = issueData.filter((issue) =>
      issue.labels.some((label: any) => label.name === "💎 Bounty"),
    )

    const results = await Promise.all(
      bountiedIssues.map(async (issue) => {
        // Fetch comments for the issue
        const { data: comments } = await octokit.issues.listComments({
          owner: repo.split("/")[0],
          repo: repo.split("/")[1],
          issue_number: issue.number,
        })

        // Find the comment by 'algora-pbc[bot]' and extract the bounty amount
        const botComment = comments.find(
          (comment: any) => comment.user.login === "algora-pbc[bot]",
        )

        // Extract the bounty amount from the bot's comment
        const amount =
          botComment && botComment.body
            ? extractBountyAmountFromComment(botComment.body)
            : 0

        return {
          number: issue.number,
          amount,
        }
      }),
    )

    // Process complete
    return results
  } catch (error) {
    console.error(
      `Error fetching bountied issues for ${contributor} in ${repo}:`,
      error,
    )
    return []
  }
}
