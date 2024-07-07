import { Octokit } from "@octokit/rest"
import * as fs from "fs"
import Anthropic from "@anthropic-ai/sdk"
import { getRepos } from "./getRepos"

const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN })
const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
})

interface PullRequest {
  number: number
  title: string
  body: string
  user: {
    login: string
  }
  html_url: string
  created_at: string
  merged_at: string
}

interface AnalyzedPR {
  number: number
  title: string
  description: string
  impact: "Major" | "Minor" | "Tiny"
  contributor: string
  repo: string
  url: string
}

async function getMergedPRs(
  repo: string,
  since: string
): Promise<PullRequest[]> {
  const [owner, repo_name] = repo.split("/")
  const { data } = await octokit.pulls.list({
    owner,
    repo: repo_name,
    state: "closed",
    sort: "updated",
    direction: "desc",
    per_page: 100,
  })

  return data.filter(
    (pr) => pr.merged_at && new Date(pr.merged_at) >= new Date(since)
  )
}

async function analyzePRWithClaude(
  pr: PullRequest
): Promise<{ description: string; impact: "Major" | "Minor" | "Tiny" }> {
  const prompt = `Analyze the following pull request and provide a one-line description of the change. Also, classify the impact as "Major", "Minor", or "Tiny".

Title: ${pr.title}
Body: ${pr.body}

Response format:
Description: [One-line description]
Impact: [Major/Minor/Tiny]`

  const message = await anthropic.messages.create({
    model: "claude-3-opus-20240229",
    max_tokens: 1000,
    messages: [{ role: "user", content: prompt }],
  })

  const content = message.content[0].text
  const [description, impact] = content.split("\n")

  return {
    description: description.replace("Description: ", "").trim(),
    impact: impact.replace("Impact: ", "").trim() as "Major" | "Minor" | "Tiny",
  }
}

async function generateMarkdown(
  prs: AnalyzedPR[],
  weekStart: string
): Promise<string> {
  let markdown = `# Contribution Overview ${weekStart}\n\n`

  // Generate Mermaid pie chart
  markdown += "## PRs by Repository\n\n"
  markdown += "```mermaid\npie\n"
  const repoCounts = prs.reduce((acc, pr) => {
    acc[pr.repo] = (acc[pr.repo] || 0) + 1
    return acc
  }, {} as Record<string, number>)
  Object.entries(repoCounts).forEach(([repo, count]) => {
    markdown += `    "${repo}" : ${count}\n`
  })
  markdown += "```\n\n"

  // Generate contributor overview table
  markdown += "## Contributor Overview\n\n"
  markdown += "| Contributor | Major | Minor | Other |\n"
  markdown += "|-------------|-------|-------|-------|\n"
  const contributorEffort = prs.reduce((acc, pr) => {
    if (!acc[pr.contributor]) {
      acc[pr.contributor] = { Major: 0, Minor: 0, Tiny: 0 }
    }
    acc[pr.contributor][pr.impact]++
    return acc
  }, {} as Record<string, Record<string, number>>)
  Object.entries(contributorEffort).forEach(([contributor, effort]) => {
    markdown += `| ${contributor} | ${effort.Major} | ${effort.Minor} | ${effort.Tiny} |\n`
  })
  markdown += "\n"

  // Generate changes by repository
  markdown += "## Changes by Repository\n\n"
  const prsByRepo = prs.reduce((acc, pr) => {
    if (!acc[pr.repo]) {
      acc[pr.repo] = []
    }
    acc[pr.repo].push(pr)
    return acc
  }, {} as Record<string, AnalyzedPR[]>)

  Object.entries(prsByRepo).forEach(([repo, repoPRs]) => {
    markdown += `### ${repo}\n\n`
    markdown += "| PR # | Impact | Contributor | Description |\n"
    markdown += "|------|--------|-------------|-------------|\n"
    repoPRs
      .sort((a, b) => {
        const impactOrder = { Major: 0, Minor: 1, Tiny: 2 }
        return impactOrder[a.impact] - impactOrder[b.impact]
      })
      .forEach((pr) => {
        markdown += `| [#${pr.number}](${pr.url}) | ${pr.impact} | ${pr.contributor} | ${pr.description} |\n`
      })
    markdown += "\n"
  })

  // Generate changes by contributor
  markdown += "## Changes by Contributor\n\n"
  const prsByContributor = prs.reduce((acc, pr) => {
    if (!acc[pr.contributor]) {
      acc[pr.contributor] = []
    }
    acc[pr.contributor].push(pr)
    return acc
  }, {} as Record<string, AnalyzedPR[]>)

  Object.entries(prsByContributor).forEach(([contributor, contributorPRs]) => {
    markdown += `### ${contributor}\n\n`
    markdown += "| PR # | Impact | Description |\n"
    markdown += "|------|--------|-------------|\n"
    contributorPRs.forEach((pr) => {
      markdown += `| [#${pr.number}](${pr.url}) | ${pr.impact} | ${pr.description} |\n`
    })
    markdown += "\n"
  })

  return markdown
}

async function main() {
  const weekStart = new Date()
  weekStart.setDate(weekStart.getDate() - weekStart.getDay() - 1) // Set to last Saturday
  const weekStartString = weekStart.toISOString().split("T")[0]

  const repos = await getRepos()
  const allPRs: AnalyzedPR[] = []

  for (const repo of repos) {
    console.log(`Analyzing ${repo}`)
    const prs = await getMergedPRs(repo, weekStartString)
    console.log(`Found ${prs.length} merged PRs`)
    for (const pr of prs) {
      if (
        pr.user.login === "renovate-bot" ||
        pr.title.toLowerCase().includes("bump")
      ) {
        continue
      }
      const analysis = await analyzePRWithClaude(pr)
      allPRs.push({
        number: pr.number,
        title: pr.title,
        description: analysis.description,
        impact: analysis.impact,
        contributor: pr.user.login,
        repo,
        url: pr.html_url,
      })
    }
  }

  const markdown = await generateMarkdown(allPRs, weekStartString)
  fs.writeFileSync(`contribution-overview-${weekStartString}.md`, markdown)
  console.log(`Generated contribution-overview-${weekStartString}.md`)
}

main().catch(console.error)
