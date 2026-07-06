import { generateOverview } from ".."
import { getContributionOverviewWindow } from "../lib/ai/date-utils"

const dateArg = process.argv[2]

if (!dateArg) {
  console.error("Usage: bun scripts/generate-overview-for-date.ts <YYYY-MM-DD>")
  console.error("Example: bun scripts/generate-overview-for-date.ts 2024-01-15")
  process.exit(1)
}

// Validate date format
const dateRegex = /^\d{4}-\d{2}-\d{2}$/
if (!dateRegex.test(dateArg)) {
  console.error("Error: Date must be in YYYY-MM-DD format")
  console.error("Example: 2024-01-15")
  process.exit(1)
}

// Validate it's a valid date
const parsedDate = new Date(dateArg)
if (isNaN(parsedDate.getTime())) {
  console.error("Error: Invalid date provided")
  process.exit(1)
}

// Set current time to 18:00 UTC on the specified date (same as the auto workflow cron)
const currentTime = new Date(dateArg)
currentTime.setUTCHours(18, 0, 0, 0)

const { startDate, endDate } = getContributionOverviewWindow(currentTime)
const weekStartString = startDate.toISOString()

console.log(`Current time: ${currentTime.toISOString()}`)
console.log(`Week start: ${startDate.toISOString()}`)
console.log(`Week end: ${endDate.toISOString()}`)
console.log(
  `Generating overview from ${weekStartString} to ${endDate.toISOString()}`,
)

generateOverview(weekStartString, endDate).catch(console.error)
