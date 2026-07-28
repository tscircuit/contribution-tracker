import { octokit } from "lib/sdks"
import { GITHUB_PAGE_SIZE } from "./pagination"

type RepoIssue = Awaited<
  ReturnType<typeof octokit.issues.listForRepo>
>["data"][number]

export async function getIssuesCreated(
  repo: string,
  contributor: string,
  startDate: string,
): Promise<{ totalIssues: number; majorIssues: number }> {
  try {
    const fetchIssues = async (page = 1): Promise<RepoIssue[]> => {
      const { data } = await octokit.issues.listForRepo({
        owner: repo.split("/")[0],
        repo: repo.split("/")[1],
        creator: contributor,
        since: startDate,
        state: "all",
        per_page: GITHUB_PAGE_SIZE,
        page,
      })
      if (data.length < GITHUB_PAGE_SIZE) return data
      return [...data, ...(await fetchIssues(page + 1))]
    }

    const issues = await fetchIssues()

    // Filter out pull requests by checking for the absence of `pull_request` property
    const openedIssues = issues.filter((issue) => !issue.pull_request)
    const totalIssues = openedIssues.length

    const majorIssues = openedIssues.filter((issue) =>
      issue.labels.some(
        (label) =>
          typeof label === "object" && label.name?.toLowerCase() === "major",
      ),
    ).length

    // Process complete

    return { totalIssues, majorIssues }
  } catch (error) {
    console.error(
      `Error fetching issues created by ${contributor} in ${repo}:`,
      error,
    )
    return { totalIssues: 0, majorIssues: 0 }
  }
}
