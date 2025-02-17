import fs from "fs"
import path from "path"
import { Client, Role } from "discord.js"

// ----- Role definitions ----- //

// All-Time roles (by score)
// These roles are cumulative: if a user qualifies for a higher tier, they should have
// all lower-tier roles as well. However, WE DO NOT REMOVE ANY ALL-TIME ROLES ONCE ASSIGNED.
const ALL_TIME_ROLE_NAMES = [
  "New Contributor",
  "Contributor",
  "Try Hard",
  "Hero",
  "King",
  "Legend",
] as const
type AllTimeRoleName = (typeof ALL_TIME_ROLE_NAMES)[number]

// Weekly roles (by stars)
// These roles are fully synced each week: only the cumulative weekly roles based on the current
// stars value should be present.
const WEEKLY_ROLE_NAMES = ["⭐", "⭐⭐", "⭐⭐⭐", "👑", "👑👑"] as const
type WeeklyRoleName = (typeof WEEKLY_ROLE_NAMES)[number]

// ----- Helper function for All-Time roles ----- //

function getAllTimeRoleName(score: number): AllTimeRoleName | null {
  if (score >= 100) return "Legend"
  if (score >= 75) return "King"
  if (score >= 50) return "Hero"
  if (score >= 30) return "Try Hard"
  if (score >= 10) return "Contributor"
  if (score >= 3) return "New Contributor"
  return null
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
  const data = fs.readFileSync(filePath, "utf-8")
  return JSON.parse(data)
}

function loadUserMappings(): Record<string, string> {
  const filePath = path.join(process.cwd(), "users.json")
  const data = fs.readFileSync(filePath, "utf-8")
  return JSON.parse(data)
}

// ----- Main sync function ----- //

async function syncRoles(client: Client, guildId: string) {
  const guild = await client.guilds.fetch(guildId)
  if (!guild) {
    console.error("Guild not found.")
    return
  }

  const contributionData = loadContributionData()
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

  console.log("\n")

  // Process each user in the contribution data
  for (const [githubUsername, userData] of Object.entries(contributionData)) {
    // Extract all-time and weekly contribution data:
    // Use 'score' for all-time roles and 'stars' for weekly roles.
    const { score, stars } = userData

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
      await Bun.sleep(1000)
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

main().catch((err) => {
  console.error("An error occurred:", err)
})

/**
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
