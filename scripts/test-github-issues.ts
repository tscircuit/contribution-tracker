import { Octokit } from "@octokit/rest"
import { fetchBountiedIssues } from '../lib/getBountiedIssues'

async function testFetchBountiedIssues() {
  // You'll need to set a GitHub token
  const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN })

  // Choose a specific repository and contributor to test
  const repo = "tscircuit/snippets" // Example repo, replace with a real one
  const contributor = "sevelbar" // Replace with a real GitHub username
  const startDate = "2024-01-01" // Start date for issue search

  try {
    const bountiedIssues = await fetchBountiedIssues(repo, contributor, startDate)

    console.log("Bountied Issues Found:")
    console.log(JSON.stringify(bountiedIssues, null, 2))

    console.log(`Total Bountied Issues: ${bountiedIssues.length}`)
    const totalBountyAmount = bountiedIssues.reduce((sum, issue) => sum + issue.amount, 0)
    console.log(`Total Bounty Amount: $${totalBountyAmount}`)
  } catch (error) {
    console.error("Error fetching bountied issues:", error)
  }
}

testFetchBountiedIssues()