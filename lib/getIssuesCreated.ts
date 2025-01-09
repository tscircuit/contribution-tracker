import { octokit } from "lib/sdks"

export async function getIssuesCreated(
  repo: string,
  contributor: string,
  startDate: string,
): Promise<number> {
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

    // Process complete

    return count
  } catch (error) {
    console.error(
      `Error fetching issues created by ${contributor} in ${repo}:`,
      error,
    )
    return 0
  }
}
