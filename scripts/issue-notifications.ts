import { WebhookClient, type MessageCreateOptions } from "discord.js"
import { getRepos } from "lib/data-retrieval/getRepos"
import { octokit } from "lib/sdks"
import { EXCLUDED_BOTS } from "lib/constants"

const getDiscordWebhook = () => {
  const url = process.env.ISSUES_DISCORD_WEBHOOK_URL
  if (!url) return null
  return new WebhookClient({ url })
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

function getUTCDateTime(): string {
  return new Date().toISOString()
}

export function formatDiscordIssueMessages(
  issues: Issue[],
  repo: string,
  maxLength = 2000,
): string[] {
  if (issues.length === 0) return []

  const header = `New issues in ${repo}:\n`
  const lines = issues.map(
    (issue) =>
      `• #${issue.number} ${issue.title} by ${issue.user.login} - <${issue.html_url}>`,
  )

  const messages: string[] = []
  let currentMessage = header

  for (const line of lines) {
    if ((currentMessage + line + "\n").length > maxLength) {
      if (currentMessage.trim().length > 0 && currentMessage !== header) {
        messages.push(currentMessage.trimEnd())
        currentMessage = `New issues in ${repo} (cont.):\n`
      }
      if ((currentMessage + line + "\n").length > maxLength) {
        const truncatedLine =
          line.slice(0, maxLength - currentMessage.length - 5) + "..."
        messages.push((currentMessage + truncatedLine).trimEnd())
        currentMessage = `New issues in ${repo} (cont.):\n`
        continue
      }
    }
    currentMessage += line + "\n"
  }

  if (
    currentMessage.trim().length > 0 &&
    currentMessage !== header &&
    currentMessage !== `New issues in ${repo} (cont.):\n`
  ) {
    messages.push(currentMessage.trimEnd())
  }

  return messages
}

export async function notifyDiscord(
  issues: Issue[],
  repo: string,
  webhook?: { send: (options: MessageCreateOptions) => Promise<any> },
) {
  if (issues.length === 0) return

  const client = webhook ?? getDiscordWebhook()
  if (!client) {
    console.warn(
      `[${getUTCDateTime()}] ISSUES_DISCORD_WEBHOOK_URL is not set; skipping Discord notification for ${repo}`,
    )
    return
  }

  console.log(
    `[${getUTCDateTime()}] Sending notification for ${issues.length} issues from ${repo} to Discord`,
  )

  const messageChunks = formatDiscordIssueMessages(issues, repo)

  for (const chunk of messageChunks) {
    const messageOptions: MessageCreateOptions = {
      content: chunk,
      allowedMentions: { parse: [] }, // This prevents link previews
    }

    await client.send(messageOptions)
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
    try {
      await notifyDiscord(issues, repo)
    } catch (error) {
      console.error(
        `[${getUTCDateTime()}] Failed sending Discord notification for ${repo}:`,
        error,
      )
    }
  }

  console.log(`[${getUTCDateTime()}] Completed issue notification process`)
}

if (
  import.meta.main ||
  process.argv[1]?.endsWith("issue-notifications.ts") ||
  process.argv[1]?.endsWith("issue-notifications")
) {
  main().catch((error) => {
    console.error(
      `[${getUTCDateTime()}] Error in issue notification process:`,
      error,
    )
    process.exit(1)
  })
}
