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
  body?: string | null
  labels: Array<
    | string
    | {
        name?: string
      }
  >
  user: {
    login: string
  }
  created_at: string
}

function getUTCDateTime(): string {
  return new Date().toISOString()
}

function getLabelNames(issue: Issue): string[] {
  return issue.labels
    .map((label) => (typeof label === "string" ? label : label.name))
    .filter((label): label is string => Boolean(label))
}

function findBountyAmount(text: string): string | null {
  const bountyMatch = text.match(
    /(?:\/bounty|bounty)\s*\$\s*([\d,]+(?:\.\d{1,2})?)/i,
  )
  if (bountyMatch) return `$${bountyMatch[1]}`

  const dollarMatch = text.match(/\$\s*([\d,]+(?:\.\d{1,2})?)/)
  if (dollarMatch) return `$${dollarMatch[1]}`

  return null
}

async function getIssueBounty(
  repo: string,
  issue: Issue,
): Promise<string | null> {
  const labelBounty = getLabelNames(issue)
    .filter((label) => !label.toLowerCase().includes("rewarded"))
    .map(findBountyAmount)
    .find((amount) => amount)

  if (labelBounty) return labelBounty

  const bodyBounty = findBountyAmount(issue.body ?? "")
  if (bodyBounty) return bodyBounty

  const [owner, repoName] = repo.split("/")
  const { data: comments } = await octokit.issues.listComments({
    owner,
    repo: repoName,
    issue_number: issue.number,
    per_page: 20,
  })

  return (
    comments
      .map((comment) => findBountyAmount(comment.body ?? ""))
      .find((amount) => amount) ?? null
  )
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
  console.log(
    `[${getUTCDateTime()}] Found ${filteredIssues.length} new issues in ${repo}`,
  )

  return filteredIssues
}

async function notifyDiscord(issues: Issue[], repo: string) {
  if (issues.length === 0) return

  console.log(
    `[${getUTCDateTime()}] Sending notification for ${issues.length} issues from ${repo} to Discord`,
  )

  const issueLines = await Promise.all(
    issues.map(async (issue) => {
      const bounty = await getIssueBounty(repo, issue)
      const bountyText = bounty ? ` [bounty: ${bounty}]` : ""
      return `• #${issue.number} ${issue.title}${bountyText} by ${issue.user.login} - <${issue.html_url}>`
    }),
  )

  const messageContent = `New issues in ${repo}:\n${issueLines.join("\n")}`

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
