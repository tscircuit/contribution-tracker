import { WebhookClient } from "discord.js"
import { WebClient } from "@slack/web-api"
import type { AnalyzedPR } from "lib/types"
import { octokit } from "lib/sdks"
import { getContributionStarRatingFromAttributes } from "lib/ai-stuff/getConstributionStarRatingFromAttributes"

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

export async function isFirstTimeContributor(
  contributor: string,
): Promise<boolean> {
  try {
    // Search across all tscircuit repositories for PRs by this contributor
    const { data: searchResults } = await octokit.search.issuesAndPullRequests({
      q: `org:tscircuit type:pr author:${contributor}`,
      sort: "created",
      order: "asc",
      per_page: 2,
    })
    if (searchResults.total_count === 1) {
      return true
    }

    return false
  } catch (error) {
    console.error(
      `[First-time check] Error checking contributor history for ${contributor}:`,
      error,
    )
    return false
  }
}

export async function notifyFirstTimeContributor(pr: AnalyzedPR) {
  const notificationChannelUrl =
    process.env.NEW_CONTRIBUTOR_NOTIFICATION_CHANNEL
  if (!notificationChannelUrl) {
    console.warn(
      "[Celebration] New contributor notification channel not configured - skipping",
    )
    return
  }

  const discordWebhookClient = new WebhookClient({
    url: notificationChannelUrl,
  })

  console.info(
    `[Celebration] Sending first-time contributor celebration for ${pr.contributor}`,
  )

  const welcomeMessage = `
🎉 Welcome to the [tscircuit](<https://github.com/tscircuit>) community, [${pr.contributor}](<https://github.com/${pr.contributor}>)!
Thanks for your first contribution to [${pr.repo}](<https://github.com/${pr.repo}>)! Your ${pr.impact.toLowerCase()} PR has been merged and we're excited to have you on board!
🚀 Keep the awesome contributions coming! 🎉

Check out your contribution here: [PR Link](${pr.url})
`.trim()

  try {
    await discordWebhookClient.send(welcomeMessage)
    console.info("[Celebration] Message sent successfully")
  } catch (error) {
    console.error("[Celebration] Failed to send message:", error)
  }
  console.info(
    `[Celebration] Completed sending celebration for ${pr.contributor}`,
  )
}

export async function commentOnPR(pr: AnalyzedPR) {
  console.info(`[PR Comment] Creating comment on PR: ${pr.repo} #${pr.number}`)
  try {
    // Get PR contribution level from analysis
    const prContributionRating = await getContributionStarRatingFromAttributes(pr, pr.repo)
    const prStars = "⭐".repeat(prContributionRating)
    const prContributionLevel =
      prContributionRating === 5
        ? "exceptional"
        : prContributionRating === 4
          ? "major"
          : prContributionRating === 3
            ? "significant"
            : prContributionRating === 2
              ? "moderate"
              : prContributionRating === 1
                ? "minor"
                : 0

    // Show PR rating (from manual tagging or analysis)
    const prRating = pr.starRating ?? prContributionRating
    const prRatingStars = "⭐".repeat(prRating)
    const prRatingLevel =
      prRating === 5
        ? "exceptional"
        : prRating === 4
          ? "major"
          : prRating === 3
            ? "significant"
            : prRating === 2
              ? "moderate"
              : prRating === 1
                ? "minor"
                : 0

    const comment = `
Thank you for your contribution! 🎉

**PR Rating:** ${prRatingStars} (${prRatingLevel})
**Contribution Level:** ${prStars} (${prContributionLevel})
**Impact:** ${pr.impact}

Track your contributions and see the leaderboard at: [tscircuit Contribution Tracker](https://contributions.tscircuit.com)

---

*Comment posted by tscircuitbot*
`.trim()

    const [owner, repo] = pr.repo.split("/")
    await octokit.issues.createComment({
      owner,
      repo,
      issue_number: pr.number,
      body: comment,
    })

    console.info(
      `[PR Comment] Successfully commented on PR: ${pr.repo} #${pr.number}`,
    )
  } catch (error) {
    console.error(
      `[PR Comment] Failed to comment on PR: ${pr.repo} #${pr.number}:`,
      error,
    )
  }
}

export async function testCommentOnPR(repo: string, prNumber: number) {
  console.info(`[Test] Testing PR comment for ${repo} #${prNumber}`)

  const [owner, repoName] = repo.split("/")

  try {
    // Fetch PR details
    const { data: pr } = await octokit.pulls.get({
      owner,
      repo: repoName,
      pull_number: prNumber,
    })

    // Get diff content
    const { data: diffData } = await octokit.pulls.get({
      owner,
      repo: repoName,
      pull_number: prNumber,
      mediaType: { format: "diff" },
    })

    // Create minimal AnalyzedPR structure for testing with all required properties
    const analyzedPR = {
      number: pr.number,
      state: pr.merged_at ? "merged" as const : pr.state === "open" ? "opened" as const : "closed" as const,
      title: pr.title,
      body: pr.body || "",
      user: pr.user,
      html_url: pr.html_url,
      created_at: pr.created_at,
      merged_at: pr.merged_at || null,
      description: pr.body || "",
      impact: "Minor" as const, // Default for testing
      contributor: pr.user?.login || "unknown",
      repo,
      url: pr.html_url,
      isAlignedWithMilestone: false,
      starRating: 3 as const, // Default for testing
      // All PR attributes defaulting to false for testing
      mostly_style: false,
      new_page_or_component: false,
      introduces_or_fixes_a_footprint: false,
      core_change: false,
      only_dependency_update: false,
      bad_title: false,
      introduces_new_circuit_board: false,
      fixes_circuit_board: false,
      fixes_subtle_important_bug: false,
      minor_fix: true, // Default assumption for test
      major_autorouter_bug_fix: false,
      only_adds_autorouter_fixtures: false,
      only_reproduces_a_bug: false,
      reproduces_and_fixes_a_bug: false,
      minor_developer_experience_improvement: false,
      major_experience_improvement: false,
      introduces_new_schematic_symbol: false,
      fixes_schematic_representation: false,
      improves_parts_engine: false,
      add_design_to_schematic_corpus: false,
      major_improvement_to_core_data_modeling: false,
      major_library_algorithm_contribution: false,
      substantially_improves_svg_generation: false,
    }

    // Call the function to test it
    await commentOnPR(analyzedPR)

    console.info(`[Test] Successfully completed PR comment test for ${repo} #${prNumber}`)

  } catch (error) {
    console.error(`[Test] Failed to test PR comment for ${repo} #${prNumber}:`, error)
    throw error
  }
}

export async function notifyPRChange(pr: AnalyzedPR) {
  console.info(`[Notification] Processing PR change: ${pr.repo} #${pr.number}`)
  const starRating =
    pr.starRating ?? getContributionStarRatingFromAttributes(pr, pr.repo)
  const stars = "⭐".repeat(starRating)
  const message = `
[${pr.state === "merged" ? "merged" : "opened"}] ${pr.contributor} ${stars} PR in ${pr.repo}: ${pr.url}
${pr.description.slice(0, 300).replace(/\n/g, " ")}`.trim()

  await postToDiscord(message)
  await postToSlack(message)
  await postToHttpWebhook(message)

  console.info(
    `[Notification] Completed sending notifications for PR: ${pr.repo} #${pr.number}`,
  )
}
