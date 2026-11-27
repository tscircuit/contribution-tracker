import fs from "fs"
import path from "path"
import { Client, Role, WebhookClient } from "discord.js"

// ----- Role definitions ----- //

// All-Time roles (by score)
// These roles are cumulative: if a user qualifies for a higher tier, they should have
// all lower-tier roles as well. However, WE DO NOT REMOVE ANY ALL-TIME ROLES ONCE ASSIGNED.
export const ALL_TIME_ROLE_NAMES = [
  "New Contributor",
  "Contributor",
  "Try Hard",
  "Hero",
  "King",
  "Legend",
] as const
export type AllTimeRoleName = (typeof ALL_TIME_ROLE_NAMES)[number]

// Contributor Tier roles (by total # of merged PR contributions across all weeks)
// Cumulative: higher-tier contributors also receive lower-tier channel access roles.
export const TIER_ROLE_NAMES = ["c-tier", "b-tier", "a-tier"] as const
export type TierRoleName = (typeof TIER_ROLE_NAMES)[number]

// Weekly roles (by stars)
// These roles are fully synced each week: only the cumulative weekly roles based on the current
// stars value should be present.
export const WEEKLY_ROLE_NAMES = ["⭐", "⭐⭐", "⭐⭐⭐", "👑", "👑👑"] as const
export type WeeklyRoleName = (typeof WEEKLY_ROLE_NAMES)[number]

// ----- Helper function for All-Time roles ----- //

export function getAllTimeRoleName(score: number): AllTimeRoleName | null {
  if (score >= 100) return "Legend"
  if (score >= 75) return "King"
  if (score >= 50) return "Hero"
  if (score >= 30) return "Try Hard"
  if (score >= 10) return "Contributor"
  if (score >= 3) return "New Contributor"
  return null
}

// ----- Helper functions for Contributor Tier roles ----- //

export function getTierRoleName(
  contributionsCount: number,
): TierRoleName | null {
  if (contributionsCount >= 100) return "a-tier"
  if (contributionsCount >= 10) return "b-tier"
  if (contributionsCount >= 1) return "c-tier"
  return null
}

export function getCumulativeTierRoleNames(
  contributionsCount: number,
): TierRoleName[] {
  const targetTierRole = getTierRoleName(contributionsCount)
  if (!targetTierRole) return []
  const targetIndex = TIER_ROLE_NAMES.indexOf(targetTierRole)
  return TIER_ROLE_NAMES.slice(0, targetIndex + 1)
}

export function aggregateTotalContributionsByUser(
  weeklyOverviews: Array<Record<string, { prsMerged?: number }>>,
): Record<string, number> {
  const totalsByLowercaseUser: Record<string, number> = {}
  for (const overview of weeklyOverviews) {
    for (const [username, details] of Object.entries(overview)) {
      const merged =
        typeof details?.prsMerged === "number" ? details.prsMerged : 0
      if (merged > 0) {
        const key = username.toLowerCase()
        totalsByLowercaseUser[key] = (totalsByLowercaseUser[key] ?? 0) + merged
      }
    }
  }
  return totalsByLowercaseUser
}

// ----- Crown notification function ----- //
async function notifyCrownWinner(username: string, githubUsername: string) {
  const webhookUrl = process.env.DISCORD_WEBHOOK_URL
  if (!webhookUrl) {
    console.warn(
      "[Crown Notification] Discord webhook URL not configured - skipping crown notification",
    )
    return
  }

  const discordWebhook = new WebhookClient({ url: webhookUrl })

  const message = `
## 👑👑 **Weekly Crown Winner!** 👑👑

🎉 Congratulations [${username}](<https://github.com/${githubUsername}>) for being crowned this week's top contributor!

> Your outstanding contributions have earned you the highest weekly honor. Keep up the amazing work! 🚀
`.trim()

  try {
    await discordWebhook.send(message)
    console.log(
      `[Crown Notification] Crown notification sent for ${username}! 👑`,
    )
  } catch (error) {
    console.error(
      `[Crown Notification] Failed to send crown notification: ${error}`,
    )
  }
}

// ----- Data loading functions ----- //

function loadContributionData(): Record<string, any> {
  const contributionsDir = path.join(process.cwd(), "contribution-overviews")
  const files = fs
    .readdirSync(contributionsDir)
    .filter((file) => file.endsWith(".json"))

  if (files.length === 0) {
    throw new Error("No contribution data found.")
  }

  const latestFile = files.sort().pop()
  console.log("Using data from", latestFile, "\n")
  const filePath = path.join(contributionsDir, latestFile!)
  const fileContent = fs.readFileSync(filePath, "utf-8")
  return JSON.parse(fileContent)
}

export function loadTotalContributionsByUser(
  contributionsDir: string = path.join(process.cwd(), "contribution-overviews"),
): Record<string, number> {
  const files = fs
    .readdirSync(contributionsDir)
    .filter((file) => file.endsWith(".json"))
    .sort()

  const overviews = files.map((file) => {
    const filePath = path.join(contributionsDir, file)
    return JSON.parse(fs.readFileSync(filePath, "utf-8"))
  })

  return aggregateTotalContributionsByUser(overviews)
}

function loadUserMappings(): Record<string, string> {
  const filePath = path.join(process.cwd(), "users.json")
  const fileContent = fs.readFileSync(filePath, "utf-8")
  return JSON.parse(fileContent)
}

// ----- Main sync function ----- //

async function syncRoles(client: Client, guildId: string) {
  const guild = await client.guilds.fetch(guildId)
  if (!guild) {
    console.error("Guild not found.")
    return
  }

  const contributionsByUser = loadContributionData()
  const totalContributionsByUser = loadTotalContributionsByUser()
  const userMappings = loadUserMappings()

  // Fetch all-time roles from the guild
  const allTimeRoles: Record<AllTimeRoleName, Role> = {} as any
  for (const roleName of ALL_TIME_ROLE_NAMES) {
    const role = guild.roles.cache.find((r) => r.name === roleName)
    if (!role) {
      console.warn(`All-Time role '${roleName}' not found.`)
      continue
    }
    allTimeRoles[roleName] = role
  }

  // Fetch weekly roles from the guild
  const weeklyRoles: Record<WeeklyRoleName, Role> = {} as any
  for (const roleName of WEEKLY_ROLE_NAMES) {
    const role = guild.roles.cache.find((r) => r.name === roleName)
    if (!role) {
      console.warn(`Weekly role '${roleName}' not found.`)
      continue
    }
    weeklyRoles[roleName] = role
  }

  // Fetch contributor tier roles from the guild
  const tierRoles: Record<TierRoleName, Role> = {} as any
  for (const roleName of TIER_ROLE_NAMES) {
    const role = guild.roles.cache.find((r) => r.name === roleName)
    if (!role) {
      console.warn(`Tier role '${roleName}' not found.`)
      continue
    }
    tierRoles[roleName] = role
  }

  console.log("\n")

  // Track crown winners for notifications
  const crownWinners: Array<{ username: string; githubUsername: string }> = []

  // Process each user in the contribution data
  for (const [githubUsername, contributorDetails] of Object.entries(
    contributionsByUser,
  )) {
    // Extract all-time and weekly contribution data:
    // Use 'score' for all-time roles and 'stars' for weekly roles.
    const { score, stars } = contributorDetails
    const totalContributions =
      totalContributionsByUser[githubUsername.toLowerCase()] ??
      (typeof contributorDetails.prsMerged === "number"
        ? contributorDetails.prsMerged
        : 0)

    // Compute desired cumulative tier roles (only add missing; do not remove any)
    const desiredTierRoles: Role[] = []
    for (const roleName of getCumulativeTierRoleNames(totalContributions)) {
      const role = tierRoles[roleName]
      if (role) {
        desiredTierRoles.push(role)
      }
    }

    // Compute desired cumulative all-time roles (only add missing; do not remove any)
    const desiredAllTimeRoles: Role[] = []
    if (typeof score === "number") {
      const targetAllTimeRoleName = getAllTimeRoleName(score)
      if (targetAllTimeRoleName) {
        const targetIndex = ALL_TIME_ROLE_NAMES.indexOf(targetAllTimeRoleName)
        for (let i = 0; i <= targetIndex; i++) {
          const roleName = ALL_TIME_ROLE_NAMES[i]
          const role = allTimeRoles[roleName]
          if (role) {
            desiredAllTimeRoles.push(role)
          }
        }
      }
    }

    // Compute desired cumulative weekly roles (fully synced)
    const desiredWeeklyRoles: Role[] = []
    if (
      typeof stars === "string" &&
      WEEKLY_ROLE_NAMES.includes(stars as WeeklyRoleName)
    ) {
      const targetWeeklyRoleName = stars as WeeklyRoleName
      const targetIndex = WEEKLY_ROLE_NAMES.indexOf(targetWeeklyRoleName)
      for (let i = 0; i <= targetIndex; i++) {
        const roleName = WEEKLY_ROLE_NAMES[i]
        const role = weeklyRoles[roleName]
        if (role) {
          desiredWeeklyRoles.push(role)
        }
      }
    }

    // Find the Discord user by GitHub username using the userMappings
    const discordId = Object.keys(userMappings).find(
      (id) => userMappings[id].toLowerCase() === githubUsername.toLowerCase(),
    )
    if (!discordId) {
      console.warn(`No Discord ID found for GitHub username ${githubUsername}.`)
      continue
    }

    const discordUser = await guild.members.fetch(discordId).catch(() => null)
    if (!discordUser) {
      console.warn(`Discord user not found for ID ${discordId}.`)
      continue
    }

    // --- Sync All-Time Roles (Addition Only) ---
    const currentAllTimeRoles = discordUser.roles.cache.filter((role) =>
      ALL_TIME_ROLE_NAMES.includes(role.name as AllTimeRoleName),
    )
    const currentAllTimeRoleIds = new Set(currentAllTimeRoles.map((r) => r.id))
    const allTimeRolesToAdd = desiredAllTimeRoles.filter(
      (role) => !currentAllTimeRoleIds.has(role.id),
    )
    if (allTimeRolesToAdd.length > 0) {
      await discordUser.roles
        .add(allTimeRolesToAdd.map((r) => r.id))
        .catch((e) => {
          console.warn(
            `Error adding all-time roles to ${githubUsername} (${discordId}): ${e.message}`,
          )
        })
      console.log(
        `Added all-time roles [${allTimeRolesToAdd.map((r) => r.name).join(", ")}] to ${githubUsername} (${discordId}).`,
      )
      await Bun.sleep(1000)
    }

    // --- Sync Contributor Tier Roles (Addition Only) ---
    const currentTierRoles = discordUser.roles.cache.filter((role) =>
      TIER_ROLE_NAMES.includes(role.name as TierRoleName),
    )
    const currentTierRoleIds = new Set(currentTierRoles.map((r) => r.id))
    const tierRolesToAdd = desiredTierRoles.filter(
      (role) => !currentTierRoleIds.has(role.id),
    )
    if (tierRolesToAdd.length > 0) {
      await discordUser.roles
        .add(tierRolesToAdd.map((r) => r.id))
        .catch((e) => {
          console.warn(
            `Error adding tier roles to ${githubUsername} (${discordId}): ${e.message}`,
          )
        })
      console.log(
        `Added tier roles [${tierRolesToAdd.map((r) => r.name).join(", ")}] to ${githubUsername} (${discordId}).`,
      )
      await Bun.sleep(1000)
    }

    // --- Sync Weekly Roles (Remove & Add) ---
    // Only weekly roles are removed if they are not part of the desired set.
    const currentWeeklyRoles = discordUser.roles.cache.filter((role) =>
      WEEKLY_ROLE_NAMES.includes(role.name as WeeklyRoleName),
    )
    const currentWeeklyRoleIds = new Set(currentWeeklyRoles.map((r) => r.id))
    const desiredWeeklyRoleIds = new Set(desiredWeeklyRoles.map((r) => r.id))
    // Remove weekly roles that are not desired
    const weeklyRolesToRemove = currentWeeklyRoles.filter(
      (role) => !desiredWeeklyRoleIds.has(role.id),
    )
    if (weeklyRolesToRemove.size > 0) {
      await discordUser.roles.remove(weeklyRolesToRemove).catch((e) => {
        console.warn(
          `Error removing weekly roles from ${githubUsername} (${discordId}): ${e.message}`,
        )
      })
      console.log(
        `Removed weekly roles [${Array.from(weeklyRolesToRemove.values())
          .map((r) => r.name)
          .join(", ")}] from ${githubUsername} (${discordId}).`,
      )
      await Bun.sleep(1000)
    }
    // Add any missing weekly roles
    const weeklyRolesToAdd = desiredWeeklyRoles.filter(
      (role) => !currentWeeklyRoleIds.has(role.id),
    )
    if (weeklyRolesToAdd.length > 0) {
      await discordUser.roles
        .add(weeklyRolesToAdd.map((r) => r.id))
        .catch((e) => {
          console.warn(
            `Error adding weekly roles to ${githubUsername} (${discordId}): ${e.message}`,
          )
        })
      console.log(
        `Added weekly roles [${weeklyRolesToAdd.map((r) => r.name).join(", ")}] to ${githubUsername} (${discordId}).`,
      )

      // Check if user got the crown (👑) role
      const gotCrown = weeklyRolesToAdd.some((role) => role.name.includes("👑"))
      if (gotCrown) {
        console.log(
          `[Crown Detection] ${githubUsername} earned the crown! 👑👑`,
        )
        crownWinners.push({
          username: discordUser.displayName || discordUser.user.username,
          githubUsername: githubUsername,
        })
      }

      await Bun.sleep(1000)
    }
  }

  // Send crown notifications
  if (crownWinners.length > 0) {
    console.log(
      `[Crown Notification] Sending notifications for ${crownWinners.length} crown winner(s)`,
    )
    for (const winner of crownWinners) {
      await notifyCrownWinner(winner.username, winner.githubUsername)
      await Bun.sleep(2000)
    }
  }
}

// ----- Main function ----- //

async function main() {
  const discordToken = process.env.DISCORD_TOKEN
  const guildId = process.env.DISCORD_GUILD_ID

  if (!discordToken || !guildId) {
    console.error("Missing required environment variables.")
    return
  }

  const client = new Client({ intents: ["Guilds", "GuildMembers"] })

  client.on("ready", async () => {
    console.log(`Logged in as ${client.user?.tag}\n`)
    await syncRoles(client, guildId)
    client.destroy()
  })

  client.login(discordToken)
}

if (import.meta.main) {
  main().catch((err) => {
    console.error("An error occurred:", err)
  })
}

/**
Contributor Tier Thresholds (Cumulative by total merged PRs):
=============================================================
a-tier: 100+ contributions
b-tier: 10-99 contributions
c-tier: 1-9 contributions

Weekly Role Thresholds:
====================
👑👑: 100+ points
👑: 75+ points
⭐⭐⭐: 50+ points
⭐⭐: 30+ points
⭐: 10+ points

All-Time Role Thresholds:
=====================
Legend: 100+ points
King: 75+ points
Hero: 50+ points
Try Hard: 30+ points
Contributor: 10+ points
New Contributor: 3+ points 
 */
