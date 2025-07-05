import { octokit } from "lib/sdks"
import { getWeekEndDate } from "../utils/date-range-utils"

export async function getIssuesCreatedFixed(
  repo: string,
  contributor: string,
  startDate: string,
): Promise<{ totalIssues: number; majorIssues: number }> {
  try {
    const endDate = getWeekEndDate(startDate)
    
    const { data: issues } = await octokit.issues.listForRepo({
      owner: repo.split("/")[0],
      repo: repo.split("/")[1],
      creator: contributor,
      since: startDate,
      state: "all",
    })

    // Filter out pull requests and apply proper date range filtering
    const sinceDate = new Date(startDate)
    const endDateObj = new Date(endDate)
    endDateObj.setHours(23, 59, 59, 999)
    
    const issueData = issues.filter((issue) => {
      // Filter out pull requests
      if (issue.pull_request) return false
      
      // Filter by date range
      const createdDate = new Date(issue.created_at)
      return createdDate >= sinceDate && createdDate <= endDateObj
    })
    
    const totalIssues = issueData.length

    // Count major issues
    const majorIssues = issueData.filter((issue) =>
      issue.labels.some(
        (label) =>
          typeof label === "object" && label.name?.toLowerCase() === "major",
      ),
    ).length

    return { totalIssues, majorIssues }
  } catch (error) {
    console.error(
      `Error fetching issues created by ${contributor} in ${repo}:`,
      error,
    )
    return { totalIssues: 0, majorIssues: 0 }
  }
}