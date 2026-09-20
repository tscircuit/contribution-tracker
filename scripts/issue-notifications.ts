import { WebhookClient, type MessageCreateOptions } from "discord.js"
import { getRepos } from "lib/data-retrieval/getRepos"
import { octokit } from "lib/sdks"
import { EXCLUDED_BOTS } from "lib/constants"
import { chunkDiscordMessages } from "lib/discord/chunk-discord-messages"

const discordWebhook = new WebhookClient({
  url: process.env.ISSUES_DISCORD_WEBHOOK_URL || "",
})

export interface Issue {
  number: number
  title: string
  html_url: string
  user: {
    login: string
  }
  created_at: string
}

function getUTCDateTime(): string {
  return new Date().toISOString()
}

/**
 * Splits formatted issue lines into multiple Discord message payloads
 * ensuring no single payload exceeds Discord's 2,000-character content limit.
 * Safe default maximum length: 1,950 characters.
 */
export function chunkDiscordMessages(
  header: string,
  lines: string[],
  maxLength = 1950,
): string[] {
  if (lines.length === 0) return []

  const chunks: string[] = []
  let currentChunk = header

  for (const line of lines) {
    // If a single line itself is longer than available buffer, truncate it safely
    const formattedLine =
      line.length > maxLength - header.length - 10
        ? line.slice(0, maxLength - header.length - 15) + "..."
        : line

    // If adding this line would exceed the Discord limit, push the current chunk and start a new one
    if (currentChunk.length + formattedLine.length + 1 > maxLength) {
      if (currentChunk.trim().length > 0) {
        chunks.push(currentChunk.trim())
      }
      currentChunk = header + formattedLine + "\n"
    } else {
      currentChunk += formattedLine + "\n"
    }
  }

  if (currentChunk.trim().length > 0) {
    chunks.push(currentChunk.trim())
  }

  return chunks
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

  const header = `New issues in ${repo}:\n`
  const lines = issues.map(
    (issue) =>
      `• #${issue.number} ${issue.title} by ${issue.user.login} - <${issue.html_url}>`,
  )

  // Chunk messages to strictly respect Discord's 2,000-character limit
  const messageChunks = chunkDiscordMessages(header, lines, 1950)

  for (const chunk of messageChunks) {
    const messageOptions: MessageCreateOptions = {
      content: chunk,
      allowedMentions: { parse: [] }, // This prevents link previews
    }

    await discordWebhook.send(messageOptions)
  }

  console.log(
    `[${getUTCDateTime()}] Successfully sent Discord notification for ${repo} across ${messageChunks.length} message(s)`,
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
