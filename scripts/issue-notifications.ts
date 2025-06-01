import { WebhookClient, type MessageCreateOptions } from "discord.js"
import { getRepos } from "lib/data-retrieval/getRepos"
import { octokit } from "lib/sdks"

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
      new Date(issue.created_at) >= new Date(sixtyMinutesAgo),
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

  const messageContent =
    `New issues in ${repo}:\n` +
    issues
      .map(
        (issue) =>
          `• #${issue.number} ${issue.title} by ${issue.user.login} - <${issue.html_url}>`,
      )
      .join("\n")

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
