import { WebhookClient, type MessageCreateOptions } from "discord.js"
import { getRepos } from "lib/data-retrieval/getRepos"
import { octokit } from "lib/sdks"
import { EXCLUDED_BOTS } from "lib/constants"

export const DISCORD_MAX_CONTENT_LENGTH = 2000

let defaultDiscordWebhook: WebhookClient | null = null

function getDiscordWebhook(): WebhookClient {
  if (!defaultDiscordWebhook) {
    defaultDiscordWebhook = new WebhookClient({
      url: process.env.ISSUES_DISCORD_WEBHOOK_URL || "",
    })
  }
  return defaultDiscordWebhook
}

export interface Issue {
  number: number
  title: string
  html_url: string
  user: {
    login: string
  }
  created_at: string
}

export interface DiscordWebhookSender {
  send: (options: MessageCreateOptions) => Promise<unknown>
}

function getUTCDateTime(): string {
  return new Date().toISOString()
}

function sliceWithoutBreakingSurrogatePair(
  text: string,
  start: number,
  maxLength: number,
): number {
  let end = Math.min(start + maxLength, text.length)
  if (end < text.length && end > start + 1) {
    const prevCode = text.charCodeAt(end - 1)
    const nextCode = text.charCodeAt(end)
    if (
      prevCode >= 0xd800 &&
      prevCode <= 0xdbff &&
      nextCode >= 0xdc00 &&
      nextCode <= 0xdfff
    ) {
      end -= 1
    }
  }
  return end
}

export function splitDiscordMessageContent(
  content: string,
  maxLength: number = DISCORD_MAX_CONTENT_LENGTH,
): string[] {
  if (!content) return []
  if (content.length <= maxLength) return [content]

  const chunks: string[] = []
  const lines = content.split("\n")
  let currentChunk = ""

  for (const line of lines) {
    const candidate = currentChunk ? `${currentChunk}\n${line}` : line
    if (candidate.length <= maxLength) {
      currentChunk = candidate
      continue
    }

    if (currentChunk) {
      chunks.push(currentChunk)
      currentChunk = ""
    }

    if (line.length <= maxLength) {
      currentChunk = line
      continue
    }

    let offset = 0
    while (offset < line.length) {
      const end = sliceWithoutBreakingSurrogatePair(line, offset, maxLength)
      chunks.push(line.slice(offset, end))
      offset = end
    }
  }

  if (currentChunk) {
    chunks.push(currentChunk)
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

export async function notifyDiscord(
  issues: Issue[],
  repo: string,
  webhook: DiscordWebhookSender = getDiscordWebhook(),
) {
  if (issues.length === 0) return

  console.log(
    `[${getUTCDateTime()}] Sending notification for ${issues.length} issues from ${repo} to Discord`,
  )

  const messageContent =
    `New issues in ${repo}:\n` +
    issues
      .map(
        (issue) =>
          `• #${issue.number} ${issue.title} by ${issue.user.login} - <${issue.html_url}>`,
      )
      .join("\n")

  const chunks = splitDiscordMessageContent(
    messageContent,
    DISCORD_MAX_CONTENT_LENGTH,
  )

  for (const chunk of chunks) {
    const messageOptions: MessageCreateOptions = {
      content: chunk,
      allowedMentions: { parse: [] }, // This prevents link previews
    }

    await webhook.send(messageOptions)
  }

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

if (import.meta.main) {
  main().catch((error) => {
    console.error(
      `[${getUTCDateTime()}] Error in issue notification process:`,
      error,
    )
    process.exit(1)
  })
}
