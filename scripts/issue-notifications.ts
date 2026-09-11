import { WebhookClient, type MessageCreateOptions } from "discord.js"
import { getRepos } from "lib/data-retrieval/getRepos"
import { octokit } from "lib/sdks"
import { EXCLUDED_BOTS } from "lib/constants"
import {
  buildIssueNotificationContent,
  splitDiscordContent,
} from "lib/notifications/split-discord-content"

const discordWebhook = new WebhookClient({
  url: process.env.ISSUES_DISCORD_WEBHOOK_URL || "",
})

interface Issue {
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

  const messageContent = buildIssueNotificationContent(repo, issues)
  const chunks = splitDiscordContent(messageContent)

  for (const content of chunks) {
    const messageOptions: MessageCreateOptions = {
      content,
      allowedMentions: { parse: [] },
    }
    await discordWebhook.send(messageOptions)
  }
  console.log(
    `[${getUTCDateTime()}] Successfully sent Discord notification for ${repo} (${chunks.length} message(s))`,
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
        `[${getUTCDateTime()}] Failed Discord notification for ${repo}:`,
        error,
      )
    }
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
