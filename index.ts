import { Octokit } from "@octokit/rest"
import * as fs from "fs"
import Anthropic from "@anthropic-ai/sdk"
import { Level } from "level"
import { getRepos } from "./getRepos"
import { generateMarkdown } from "./generateMarkdown"
import { getMergedPRs, type PullRequest } from "./getMergedPRs"

export const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN })
const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
})

// Initialize LevelDB
const db = new Level("./pr-analysis-cache", { valueEncoding: "json" })

interface AnalyzedPR {
  number: number
  title: string
  description: string
  impact: "Major" | "Minor" | "Tiny"
  contributor: string
  repo: string
  url: string
}

async function analyzePRWithClaude(
  pr: PullRequest,
  repo: string
): Promise<AnalyzedPR> {
  const cacheKey = `${repo}:${pr.number}`

  try {
    // Try to get the analysis from cache
    const cachedAnalysis = JSON.parse(
      await db.get(cacheKey, { valueEncoding: "json" })
    )
    return cachedAnalysis
  } catch (error) {
    // If not in cache, perform the analysis
    const prompt = `Analyze the following pull request and provide a one-line description of the change. Also, classify the impact as "Major", "Minor", or "Tiny".

Title: ${pr.title}
Body: ${pr.body}
Diff:
${pr.diff}

Response format:
Description: [One-line description]
Impact: [Major/Minor/Tiny]`

    const message = await anthropic.messages.create({
      model: "claude-3-haiku-20240307",
      max_tokens: 1000,
      messages: [{ role: "user", content: prompt }],
    })

    const content = message.content[0].text
    const [description, impact] = content.split("\n")

    const analysis: AnalyzedPR = {
      number: pr.number,
      title: pr.title,
      description: description.replace("Description: ", "").trim(),
      impact: impact?.replace("Impact: ", "")?.trim() as
        | "Major"
        | "Minor"
        | "Tiny",
      contributor: pr.user.login,
      repo,
      url: pr.html_url,
    }

    // Store the analysis in cache
    await db.put(cacheKey, analysis, { valueEncoding: "json" })

    return analysis
  }
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
      const analysis = await analyzePRWithClaude(pr, repo)
      allPRs.push(analysis)
    }
  }

  const markdown = await generateMarkdown(allPRs, weekStartString)
  fs.writeFileSync(`contribution-overviews/${weekStartString}.md`, markdown)
  console.log(`Generated contribution-overviews/${weekStartString}.md`)

  // Close the database
  await db.close()
}

main().catch(console.error)
