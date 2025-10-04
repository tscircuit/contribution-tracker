import fs from "fs"
import path from "path"
import type { ContributorStats } from "../types"

/**
 * Get the contribution level (stars) for a given user from the latest contribution overview
 */
export async function getContributorLevel(username: string): Promise<string> {
  try {
    const contributionOverviewsDir = path.join(
      process.cwd(),
      "contribution-overviews",
    )

    // Get all JSON files in the contribution-overviews directory
    const files = fs
      .readdirSync(contributionOverviewsDir)
      .filter((file) => file.endsWith(".json"))
      .sort((a, b) => b.localeCompare(a)) // Sort descending to get latest first

    if (files.length === 0) {
      console.error("No contribution overview files found")
      return ""
    }

    // Read the latest contribution overview file
    const latestFile = files[0]
    const filePath = path.join(contributionOverviewsDir, latestFile)
    const data = JSON.parse(fs.readFileSync(filePath, "utf-8")) as Record<
      string,
      ContributorStats
    >

    // Get the user's contribution level
    const contributorData = data[username]
    return contributorData?.stars || ""
  } catch (error) {
    console.error(`Error getting contribution level for ${username}:`, error)
    return ""
  }
}

/**
 * Get contribution tracker URL for a user
 */
export function getContributionTrackerUrl(): string {
  return "https://contributions.tscircuit.com"
}
