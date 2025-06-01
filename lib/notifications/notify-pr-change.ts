import { WebhookClient } from "discord.js"
import { WebClient } from "@slack/web-api"
import type { AnalyzedPR } from "lib/types"

// Initialize Discord webhook client if the environment variable is set
let discordWebhook: WebhookClient | null = null
if (process.env.DISCORD_WEBHOOK_URL) {
  discordWebhook = new WebhookClient({ url: process.env.DISCORD_WEBHOOK_URL })
  console.info("Discord webhook client initialized successfully")
} else {
  console.warn("[Discord] Webhook URL not configured - notifications disabled")
}

// Initialize Slack client if the environment variable is set
let slackClient: WebClient | null = null
if (process.env.SLACK_BOT_TOKEN) {
  slackClient = new WebClient(process.env.SLACK_BOT_TOKEN)
  console.info("Slack client initialized successfully")
} else {
  console.warn("[Slack] Bot token not configured - notifications disabled")
}

async function postToDiscord(message: string) {
  if (discordWebhook) {
    try {
      await discordWebhook.send(message)
      console.info("[Discord] Message sent successfully")
    } catch (error) {
      console.error("[Discord] Failed to send message:", error)
    }
  }
}

async function postToSlack(message: string) {
  if (slackClient && process.env.SLACK_CHANNEL_ID) {
    try {
      await slackClient.chat.postMessage({
        channel: process.env.SLACK_CHANNEL_ID,
        text: message,
      })
      console.info("[Slack] Message sent successfully")
    } catch (error) {
      console.error("[Slack] Failed to send message:", error)
    }
  } else if (slackClient && !process.env.SLACK_CHANNEL_ID) {
    console.warn("[Slack] Channel ID not configured - message not sent")
  }
}

async function postToHttpWebhook(message: string) {
  if (process.env.HTTP_WEBHOOK_URL) {
    try {
      const response = await fetch(process.env.HTTP_WEBHOOK_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message }),
      })

      if (!response.ok) {
        console.warn(
          `[HTTP Webhook] Request failed with status ${response.status}`,
        )
      } else {
        console.info("[HTTP Webhook] Message sent successfully")
      }
    } catch (error) {
      console.error("[HTTP Webhook] Failed to send message:", error)
    }
  }
}

export async function notifyPRChange(pr: AnalyzedPR) {
  console.info(`[Notification] Processing PR change: ${pr.repo} #${pr.number}`)

  const message = `
[${pr.state === "merged" ? "merged" : "opened"}] ${pr.contributor} ${pr.impact} PR in ${pr.repo}: ${pr.url}
${pr.description.slice(0, 300).replace(/\n/g, " ")}`.trim()

  await postToDiscord(message)
  await postToSlack(message)
  await postToHttpWebhook(message)

  console.info(
    `[Notification] Completed sending notifications for PR: ${pr.repo} #${pr.number}`,
  )
}
