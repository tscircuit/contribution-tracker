import fs from "fs"
import path from "path"

/**
 * Get contribution tracker URL for a user
 */
export function getContributionTrackerUrl(): string {
  return "https://contributions.tscircuit.com"
}

export const CONTRIBUTION_TIER_ROLE_NAMES = [
  "c-tier",
  "b-tier",
  "a-tier",
] as const
export type ContributionTierRoleName =
  (typeof CONTRIBUTION_TIER_ROLE_NAMES)[number]

/**
 * Resolve the highest contribution tier role based on total contribution count:
 * - 1-9: c-tier
 * - 10-99: b-tier
 * - 100+: a-tier
 */
export function getContributionTierRoleName(
  contributionCount: number,
): ContributionTierRoleName | null {
  if (contributionCount >= 100) return "a-tier"
  if (contributionCount >= 10) return "b-tier"
  if (contributionCount >= 1) return "c-tier"
  return null
}

/**
 * Resolve all tier roles a contributor is eligible to access based on total contributions
 */
export function getContributionTierRoleNames(
  contributionCount: number,
): ContributionTierRoleName[] {
  const highestTier = getContributionTierRoleName(contributionCount)
  if (!highestTier) return []
  const targetIndex = CONTRIBUTION_TIER_ROLE_NAMES.indexOf(highestTier)
  return CONTRIBUTION_TIER_ROLE_NAMES.slice(0, targetIndex + 1)
}

/**
 * Aggregate total merged contributions per GitHub username across overview files
 */
export function loadAllTimeContributionCounts(
  contributionsDir = path.join(process.cwd(), "contribution-overviews"),
): Record<string, number> {
  if (!fs.existsSync(contributionsDir)) {
    return {}
  }

  const files = fs
    .readdirSync(contributionsDir)
    .filter((file) => file.endsWith(".json"))
    .sort()

  const countsByLowercaseUser: Record<string, number> = {}
  const canonicalUsernameByLowercase: Record<string, string> = {}

  for (const file of files) {
    const filePath = path.join(contributionsDir, file)
    const data = JSON.parse(fs.readFileSync(filePath, "utf-8")) as Record<
      string,
      {
        prsMerged?: number
        major?: number
        minor?: number
        tiny?: number
      }
    >

    for (const [username, stats] of Object.entries(data)) {
      const key = username.toLowerCase()
      canonicalUsernameByLowercase[key] = username
      const mergedCount =
        typeof stats.prsMerged === "number"
          ? stats.prsMerged
          : (stats.major ?? 0) + (stats.minor ?? 0) + (stats.tiny ?? 0)
      countsByLowercaseUser[key] =
        (countsByLowercaseUser[key] ?? 0) + mergedCount
    }
  }

  const result: Record<string, number> = {}
  for (const [key, count] of Object.entries(countsByLowercaseUser)) {
    result[canonicalUsernameByLowercase[key]] = count
  }
  return result
}
