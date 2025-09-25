/**
 * List of users ineligible for sponsorship
 * Each entry contains: { github_username: string, reason: string }
 */
export const INELIGIBLE_FOR_SPONSORSHIP: Array<{
  github_username: string
  reason: string
}> = [
  // Example:
  // { github_username: "username", reason: "Claimed bounty early without completing requirements" },
]

/**
 * Check if a user is ineligible for sponsorship
 */
export function isUserIneligible(username: string): boolean {
  return INELIGIBLE_FOR_SPONSORSHIP.some(
    (entry) => entry.github_username === username,
  )
}
