import { Octokit } from "@octokit/rest"
import { getBountiedIssues } from "../lib/getBountiedIssues"

async function testFetchBountiedIssues() {
  // You'll need to set a GitHub token
  const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN })

  // Choose a specific repository and contributor to test
  const repo = "tscircuit/contribution-tracker"
  const contributor = "seveibar"
  const startDate = "2024-01-01"

  try {
    const bountiedIssues = await getBountiedIssues(repo, contributor, startDate)

    console.log("Bountied Issues Found:")
    console.log(JSON.stringify(bountiedIssues, null, 2))

    console.log(`Total Bountied Issues: ${bountiedIssues.length}`)
    const totalBountyAmount = bountiedIssues.reduce(
      (sum, issue) => sum + issue.amount,
      0,
    )
    console.log(`Total Bounty Amount: $${totalBountyAmount}`)
  } catch (error) {
    console.error("Error fetching bountied issues:", error)
  }
}

testFetchBountiedIssues()
