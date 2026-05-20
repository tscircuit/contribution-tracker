import { type MessageCreateOptions, WebhookClient } from "discord.js"
import { EXCLUDED_BOTS } from "lib/constants"
import { getRepos } from "lib/data-retrieval/getRepos"
import { octokit } from "lib/sdks"

const discordWebhook = new WebhookClient({
  url: process.env.ISSUES_DISCORD_WEBHOOK_URL || "",
})

interface Issue {
  number: number
  title: string
  html_url: string
  bounty?: string | null
  user: {
    login: string
  }
  created_at: string
}

interface IssueComment {
  body?: string | null
  user?: {
    login?: string
  } | null
}

function getUTCDateTime(): string {
  return new Date().toISOString()
}

function formatUsd(amount: number): string {
  return `$${Number.isInteger(amount) ? amount : amount.toFixed(2)}`
}

function getBountyLabelFromComment(body: string): string | null {
  const bountyMatches = Array.from(
    body.matchAll(/^##\s+.*?\$([0-9][0-9,]*(?:\.[0-9]{1,2})?)\s+bounty\b/gim),
  )

  if (bountyMatches.length === 0) return null

  const bountyTotal = bountyMatches.reduce((total, match) => {
    return total + Number.parseFloat(match[1].replace(/,/g, ""))
  }, 0)

  return `${formatUsd(bountyTotal)} bounty`
}

async function getBountyForIssue(repo: string, issueNumber: number) {
  const [owner, repoName] = repo.split("/")
  const { data: comments } = await octokit.issues.listComments({
    owner,
    repo: repoName,
    issue_number: issueNumber,
    per_page: 100,
  })

  for (const comment of comments as IssueComment[]) {
    if (!comment.user?.login?.startsWith("algora-pbc")) continue
    if (!comment.body) continue

    const bountyLabel = getBountyLabelFromComment(comment.body)
    if (bountyLabel) return bountyLabel
  }

  return null
}

async function getRecentIssues(repo: string): Promise<Issue[]> {
  const [owner, repoName] = repo.split("/")
  const sixtyMinutesAgo = new Date(Date.now() - 60 * 60 * 1000).toISOString()

  console.log(
    `[${getUTCDateTime()}] Fetching issues for ${repo} since ${sixtyMinutesAgo}`,
  )

  const { data } = await octokit.issues.listForRepo({
    owner,
    repo: repoName,
    state: "open",
    since: sixtyMinutesAgo,
    sort: "created",
    direction: "desc",
  })

  const filteredIssues = data.filter(
    (issue) =>
      !issue.pull_request &&
      new Date(issue.created_at) >= new Date(sixtyMinutesAgo) &&
      issue.user?.login &&
      !EXCLUDED_BOTS.includes(
        issue.user.login as (typeof EXCLUDED_BOTS)[number],
      ),
  ) as Issue[]

  const issuesWithBounties = await Promise.all(
    filteredIssues.map(async (issue) => ({
      ...issue,
      bounty: await getBountyForIssue(repo, issue.number),
    })),
  )

  console.log(
    `[${getUTCDateTime()}] Found ${issuesWithBounties.length} new issues in ${repo}`,
  )

  return issuesWithBounties
}

async function notifyDiscord(issues: Issue[], repo: string) {
  if (issues.length === 0) return

  console.log(
    `[${getUTCDateTime()}] Sending notification for ${issues.length} issues from ${repo} to Discord`,
  )

  const messageContent = `New issues in ${repo}:\n${issues
    .map((issue) => {
      const bounty = issue.bounty ? ` [${issue.bounty}]` : ""
      return `• #${issue.number}${bounty} ${issue.title} by ${issue.user.login} - <${issue.html_url}>`
    })
    .join("\n")}`

  const messageOptions: MessageCreateOptions = {
    content: messageContent,
    allowedMentions: { parse: [] }, // This prevents link previews
  }

  await discordWebhook.send(messageOptions)
  console.log(
    `[${getUTCDateTime()}] Successfully sent Discord notification for ${repo}`,
  )
}

async function main() {
  console.log(`[${getUTCDateTime()}] Starting issue notification process`)
  const repos = await getRepos()
  console.log(
    `[${getUTCDateTime()}] Found ${repos.length} repositories to check`,
  )

  const allIssues: { [repo: string]: Issue[] } = {}

  for (const repo of repos) {
    const recentIssues = await getRecentIssues(repo)
    if (recentIssues.length > 0) {
      allIssues[repo] = recentIssues
    }
  }

  const totalIssues = Object.values(allIssues).flat().length
  console.log(
    `[${getUTCDateTime()}] Found total of ${totalIssues} new issues across all repositories`,
  )

  for (const [repo, issues] of Object.entries(allIssues)) {
    await notifyDiscord(issues, repo)
  }

  console.log(`[${getUTCDateTime()}] Completed issue notification process`)
}

main().catch((error) => {
  console.error(
    `[${getUTCDateTime()}] Error in issue notification process:`,
    error,
  )
  process.exit(1)
})
