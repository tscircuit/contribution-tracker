import fs from "fs"
import path from "path"
import { Client, Role } from "discord.js"

// Discord Roles
const ROLE_NAMES = [
  "New Contributor",
  "Contributor",
  "Try Hard",
  "Hero",
  "King",
  "Legend",
] as const

// Infer the type of ROLE_NAMES as a tuple of string literals
type RoleName = (typeof ROLE_NAMES)[number]

// Map stars to roles
const STAR_TO_ROLE_MAP: Record<string, RoleName> = {
  "": "New Contributor",
  "⭐": "Contributor",
  "⭐⭐": "Try Hard",
  "⭐⭐⭐": "Hero",
  "⭐⭐⭐⭐⭐": "Legend",
  "👑": "King",
}

// Function to load contribution data
function loadContributionData(): Record<string, any> {
  const contributionsDir = path.join(process.cwd(), "contribution-overviews")
  const files = fs
    .readdirSync(contributionsDir)
    .filter((file) => file.endsWith(".json"))

  if (files.length === 0) {
    throw new Error("No contribution data found.")
  }

  const latestFile = files.sort().pop()
  console.log("Using data from ", latestFile, "\n")
  const filePath = path.join(contributionsDir, latestFile!)
  const data = fs.readFileSync(filePath, "utf-8")
  return JSON.parse(data)
}

// Function to load user mappings
function loadUserMappings(): Record<string, string> {
  const filePath = path.join(process.cwd(), "users.json")
  const data = fs.readFileSync(filePath, "utf-8")
  return JSON.parse(data)
}

// Function to sync roles
async function syncRoles(client: Client, guildId: string) {
  const guild = await client.guilds.fetch(guildId)
  if (!guild) {
    console.error("Guild not found.")
    return
  }

  const contributionData = loadContributionData()
  const userMappings = loadUserMappings()

  // Fetch all roles in the guild
  const roles: Record<string, Role> = {}
  for (const roleName of ROLE_NAMES) {
    const role = guild.roles.cache.find((r) => r.name == roleName)
    if (!role) {
      console.warn(`Role '${roleName}' not found.`)
      continue
    }
    roles[roleName] = role
  }
  console.log("\n")
  // Process each user in the contribution data
  for (const [githubUsername, userData] of Object.entries(contributionData)) {
    const { stars } = userData

    // Skip users without stars
    if (!stars || !STAR_TO_ROLE_MAP[stars]) {
      console.warn(
        `Skipping user ${githubUsername} due to missing or invalid stars.`,
      )
      continue
    }

    const targetRoleName = STAR_TO_ROLE_MAP[stars]
    const targetRole = roles[targetRoleName]
    if (!targetRole) {
      console.warn(
        `Target role '${targetRoleName}' not found for user ${githubUsername}.`,
      )
      continue
    }

    // Find the Discord user by GitHub username
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

    // Remove all existing roles present in ROLE_NAMES
    const rolesToRemove = discordUser.roles.cache.filter((role) =>
      ROLE_NAMES.includes(role.name as RoleName),
    )
    if (rolesToRemove.size > 0) {
      await discordUser.roles.remove(rolesToRemove).catch((e) => {
        console.warn(
          `Error removing roles from ${githubUsername} (${discordId}):`,
          e.message,
        )
      })
      console.log(
        `Removed roles [${Array.from(rolesToRemove.values())
          .map((r) => r.name)
          .join(", ")}] from ${githubUsername} (${discordId})`,
      )
      await Bun.sleep(1000)
    }

    // Determine all roles to assign based on the user's rank
    const rolesToAssign: Role[] = []
    let currentRankIndex = ROLE_NAMES.indexOf(targetRoleName)

    // Add all roles up to and including the target role
    for (let i = 0; i <= currentRankIndex; i++) {
      const roleName = ROLE_NAMES[i]
      const role = roles[roleName]
      if (role) {
        rolesToAssign.push(role)
      }
    }

    // Assign the roles
    if (rolesToAssign.length > 0) {
      await discordUser.roles.add(rolesToAssign.map((r) => r.id)).catch((e) => {
        console.log(
          `Error adding roles to ${githubUsername} (${discordId}) because:`,
          e.message,
        )
      })
      console.log(
        `Assigned roles [${rolesToAssign.map((r) => r.name).join(", ")}] to ${githubUsername} (${discordId}).`,
      )
      await Bun.sleep(1000) // avoid rate limit
    }
  }
}

// Main function
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
