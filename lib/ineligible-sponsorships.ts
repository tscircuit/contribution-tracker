import fs from "node:fs"
import path from "node:path"

export interface IneligibleEntry {
  github_username: string
  reason: string
}

const INELIGIBLE_FILE_PATH = path.join(
  process.cwd(),
  "ineligible-sponsorships",
  "ineligible-sponsorships.csv",
)

/**
 * Generate CSV content from ineligible list
 */
function generateCSVContent(ineligibleList: IneligibleEntry[]): string {
  const header = "github_username,reason"
  const rows = ineligibleList.map((entry) => {
    // Escape reason if it contains commas or quotes
    const escapedReason =
      entry.reason.includes(",") || entry.reason.includes('"')
        ? `"${entry.reason.replace(/"/g, '""')}"`
        : entry.reason
    return `${entry.github_username},${escapedReason}`
  })
  return [header, ...rows].join("\n")
}

/**
 * Load the list of users ineligible for sponsorship
 */
export function loadIneligibleList(): IneligibleEntry[] {
  try {
    if (!fs.existsSync(INELIGIBLE_FILE_PATH)) {
      return []
    }
    const content = fs.readFileSync(INELIGIBLE_FILE_PATH, "utf-8")
    const lines = content.trim().split("\n")

    // Skip header row
    if (lines.length <= 1) {
      return []
    }

    return lines
      .slice(1)
      .map((line) => {
        const [github_username, ...reasonParts] = line.split(",")
        const reason = reasonParts.join(",").replace(/^"|"$/g, "") // Handle quoted reasons
        return {
          github_username: github_username.trim(),
          reason: reason.trim(),
        }
      })
      .filter((entry) => entry.github_username && entry.reason)
  } catch (error) {
    console.warn(`Warning: Could not load ineligible list: ${error}`)
    return []
  }
}

/**
 * Check if a user is ineligible for sponsorship
 */
export function isUserIneligible(username: string): boolean {
  const ineligibleList = loadIneligibleList()
  return ineligibleList.some((entry) => entry.github_username === username)
}

/**
 * Get the reason why a user is ineligible for sponsorship
 */
export function getIneligibilityReason(username: string): string | null {
  const ineligibleList = loadIneligibleList()
  const entry = ineligibleList.find(
    (entry) => entry.github_username === username,
  )
  return entry?.reason || null
}

/**
 * Add a user to the ineligible list
 */
export function addIneligibleUser(username: string, reason: string): void {
  const ineligibleList = loadIneligibleList()

  // Check if user is already in the list
  const existingIndex = ineligibleList.findIndex(
    (entry) => entry.github_username === username,
  )

  if (existingIndex >= 0) {
    // Update existing entry
    ineligibleList[existingIndex].reason = reason
  } else {
    // Add new entry
    ineligibleList.push({ github_username: username, reason })
  }

  // Write CSV format
  const csvContent = generateCSVContent(ineligibleList)
  fs.writeFileSync(INELIGIBLE_FILE_PATH, csvContent)
}

/**
 * Remove a user from the ineligible list
 */
export function removeIneligibleUser(username: string): boolean {
  const ineligibleList = loadIneligibleList()
  const initialLength = ineligibleList.length

  const filteredList = ineligibleList.filter(
    (entry) => entry.github_username !== username,
  )

  if (filteredList.length !== initialLength) {
    const csvContent = generateCSVContent(filteredList)
    fs.writeFileSync(INELIGIBLE_FILE_PATH, csvContent)
    return true
  }

  return false
}

/**
 * Get all ineligible users as a formatted string for display
 */
export function getIneligibleUsersDisplay(): string {
  const ineligibleList = loadIneligibleList()

  if (ineligibleList.length === 0) {
    return "No users currently ineligible for sponsorship."
  }

  return ineligibleList
    .map((entry) => `• ${entry.github_username}: ${entry.reason}`)
    .join("\n")
}
