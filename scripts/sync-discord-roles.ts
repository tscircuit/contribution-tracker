import fs from "fs"
import path from "path"
import { Client, Guild, Role, GuildMember } from "discord.js"

// Define constants for role names
const ROLE_NAMES = [
  "New Contributor",
  "Contributor",
  "Try Hard",
  "Hero",
  "King",
  "Legend",
]

// Map stars to roles
const STAR_TO_ROLE_MAP: Record<string, string> = {
  "": "New Contributor",
  "⭐": "Contributor",
  "⭐⭐": "Try Hard",
  "⭐⭐⭐": "Hero",
  "👑": "King",
  "⭐⭐⭐⭐⭐": "Legend",
}

// Function to load contribution data
function loadContributionData(): Record<string, any> {
  const contributionsDir = path.join(__dirname, "contribution-overviews")
  const files = fs
    .readdirSync(contributionsDir)
    .filter((file) => file.endsWith(".json"))

  if (files.length === 0) {
    throw new Error("No contribution data found.")
  }

  const latestFile = files.sort().pop()
  const filePath = path.join(contributionsDir, latestFile!)
  const data = fs.readFileSync(filePath, "utf-8")
  return JSON.parse(data)
}

// Function to load user mappings
function loadUserMappings(): Record<string, string> {
  const filePath = path.join(__dirname, "users.json")
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
    const role = guild.roles.cache.find((r) => r.name === roleName)
    if (!role) {
      console.warn(`Role '${roleName}' not found.`)
      continue
    }
    roles[roleName] = role
  }

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

    // Remove all existing roles and assign the target role
    await discordUser.roles.set([targetRole.id])
    console.log(
      `Updated role for ${githubUsername} (${discordId}) to '${targetRoleName}' (${targetRole.id}).`,
    )
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
    console.log(`Logged in as ${client.user?.tag}`)
    await syncRoles(client, guildId)
    client.destroy()
  })

  client.login(discordToken)
}

main().catch((err) => {
  console.error("An error occurred:", err)
})
