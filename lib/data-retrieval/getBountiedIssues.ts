import { octokit } from "lib/sdks"
import { GITHUB_PAGE_SIZE } from "./pagination"

type RepoIssue = Awaited<
  ReturnType<typeof octokit.issues.listForRepo>
>["data"][number]

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
    const fetchBountiedIssues = async (page = 1): Promise<RepoIssue[]> => {
      const { data } = await octokit.issues.listForRepo({
        owner: repo.split("/")[0],
        repo: repo.split("/")[1],
        creator: contributor,
        since: startDate,
        state: "all",
        labels: "💎 Bounty", // Filter issues by the bounty label directly
        per_page: GITHUB_PAGE_SIZE,
        page,
      })
      if (data.length < GITHUB_PAGE_SIZE) return data
      return [...data, ...(await fetchBountiedIssues(page + 1))]
    }

    const issues = await fetchBountiedIssues()

    // Filter out pull requests by checking for the absence of `pull_request` property
    const openedBountiedIssues = issues.filter((issue) => !issue.pull_request)

    const results = await Promise.all(
      openedBountiedIssues.map(async (issue) => {
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
