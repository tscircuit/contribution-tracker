import fs from "node:fs"
import path from "node:path"
import { STAFF_USERNAMES } from "frontend/src/constants/contributors"
import {
  getSponsorshipAmount,
  scoreToSponsorshipStarCount,
} from "../lib/scoring"
import {
  isUserIneligible,
  INELIGIBLE_FOR_SPONSORSHIP,
} from "../lib/ineligible-sponsorships"
import {
  applyHardwareReimbursements,
  filterHardwareReimbursementsForMonth,
  readHardwareReimbursements,
} from "../lib/hardware-reimbursements"

interface ContributorData {
  stars?: string
  score?: number
}

interface WeeklyData {
  [username: string]: ContributorData
}

export interface WeekData {
  filePath: string
  weekStartDate: Date
  weekEndDate: Date
}

export function getFullWeeksForMonth(
  year: number,
  month: number,
  today = new Date(),
): WeekData[] {
  const overviewsDir = path.join(process.cwd(), "contribution-overviews")

  // First day of the target month
  const monthStart = new Date(Date.UTC(year, month - 1, 1))
  // First day of next month
  const nextMonthStart = new Date(Date.UTC(year, month, 1))

  return fs
    .readdirSync(overviewsDir)
    .filter((file) => file.endsWith(".json"))
    .map((file) => {
      const fileDate = new Date(file.replace(".json", ""))
      return {
        filePath: path.join(overviewsDir, file),
        fileDate,
      }
    })
    .filter(({ fileDate }) => !isNaN(fileDate.getTime()))
    .map(({ filePath, fileDate }) => {
      const weekStartDate = new Date(
        Date.UTC(
          fileDate.getUTCFullYear(),
          fileDate.getUTCMonth(),
          fileDate.getUTCDate(),
        ),
      )
      const weekEndDate = new Date(
        Date.UTC(
          fileDate.getUTCFullYear(),
          fileDate.getUTCMonth(),
          fileDate.getUTCDate() + 6,
        ),
      )

      return {
        filePath,
        weekStartDate,
        weekEndDate,
      }
    })
    .filter(({ weekEndDate }) => {
      return (
        weekEndDate >= monthStart &&
        weekEndDate < nextMonthStart &&
        weekEndDate <= today
      )
    })
    .sort((a, b) => b.weekStartDate.getTime() - a.weekStartDate.getTime())
}

function readWeeklyData(filePath: string): WeeklyData {
  const content = fs.readFileSync(filePath, "utf-8")
  return JSON.parse(content)
}

function countStars(stars: string): number {
  if (stars.includes("👑")) return 3
  return (stars.match(/⭐/g) || []).length
}

// Helper to verify if a date is a Wednesday
function isWednesday(date: Date): boolean {
  return date.getUTCDay() === 3 // 0 = Sunday, 3 = Wednesday
}

// Helper to verify if a date is a Tuesday
function isTuesday(date: Date): boolean {
  return date.getUTCDay() === 2 // 0 = Sunday, 2 = Tuesday
}

interface WeeklyDataWithDates {
  data: WeeklyData
  weekStartDate: Date
  weekEndDate: Date
}

function calculateSponsorship(weeksWithDates: WeeklyDataWithDates[]): {
  username: string
  amount: number
  remarks: string
}[] {
  const sponsorships: Map<
    string,
    {
      weeklyStars: number[]
      score: number
      weekDates: Array<{ start: Date; end: Date }>
    }
  > = new Map()

  // Collect data from all weeks
  weeksWithDates.forEach(
    ({ data: weekData, weekStartDate, weekEndDate }, weekIndex) => {
      Object.entries(weekData).forEach(([username, data]) => {
        // Skip full-timers
        if (STAFF_USERNAMES.includes(username)) return

        // Skip users ineligible for sponsorship
        if (isUserIneligible(username)) return

        if (!sponsorships.has(username)) {
          // Initialize with correct weekly date ranges
          const weekDates = weeksWithDates.map(
            ({ weekStartDate, weekEndDate }) => {
              return {
                start: new Date(weekStartDate),
                end: new Date(weekEndDate),
              }
            },
          )

          sponsorships.set(username, {
            weeklyStars: Array(weeksWithDates.length).fill(0),
            score: 0,
            weekDates,
          })
        }

        const userSponsorship = sponsorships.get(username)!
        if (typeof data.score === "number") {
          userSponsorship.weeklyStars[weekIndex] = scoreToSponsorshipStarCount(
            data.score,
            username,
          )
          userSponsorship.score = Math.max(userSponsorship.score, data.score)
        } else if (data.stars) {
          userSponsorship.weeklyStars[weekIndex] = countStars(data.stars)
        }

        // We don't need to update the dates here as they're already initialized correctly
      })
    },
  )

  // Format date as MM/DD
  const formatDate = (date: Date) => {
    return `${(date.getUTCMonth() + 1).toString().padStart(2, "0")}/${date.getUTCDate().toString().padStart(2, "0")}`
  }

  // Calculate sponsorship amounts
  return Array.from(sponsorships.entries())
    .map(([username, data]) => {
      const { weeklyStars, score, weekDates } = data

      // Use the getSponsorshipAmount function to calculate the amount
      let amount = getSponsorshipAmount({
        weeklyStars,
        highScore: score,
        username,
      })

      // Create remarks with dates for each week's score, sorted from oldest to newest
      const weeklyScoreWithDates = weeklyStars
        .map((stars, i) => {
          const startDate = formatDate(weekDates[i].start)
          const endDate = formatDate(weekDates[i].end)
          return `${stars} (${startDate}-${endDate})`
        })
        .reverse() // Reverse to show oldest first

      return {
        username,
        amount,
        remarks: `Weekly scores: [${weeklyScoreWithDates.join(", ")}]`,
      }
    })
    .filter((s) => s.amount > 0) // Only include users who should receive sponsorship
}

function generateCSV(
  sponsorships: { username: string; amount: number; remarks: string }[],
): string {
  const header = "Maintainer username,Sponsorship amount in USD,REMARKS\n"
  const rows = sponsorships
    .map((s) => `${s.username},${s.amount},"${s.remarks}"`)
    .join("\n")

  return header + rows
}

function getMonthFile(year: number, month: number): string {
  return path.join(
    process.cwd(),
    "sponsorships",
    `${year}-${month.toString().padStart(2, "0")}.csv`,
  )
}

function main() {
  // Get the current month by default
  const date = new Date()
  const currentYear = date.getUTCFullYear()
  const currentMonth = date.getUTCMonth() + 1

  // Use command line args if provided (format: year month)
  const args = process.argv.slice(2)
  const year = args[0] ? parseInt(args[0]) : currentYear
  const month = args[1] ? parseInt(args[1]) : currentMonth

  // Get full weeks for the specified month
  const weeks = getFullWeeksForMonth(year, month)

  // Read weekly data for each week
  const weeksWithContributions = weeks.map((week) => ({
    data: readWeeklyData(week.filePath),
    weekStartDate: week.weekStartDate,
    weekEndDate: week.weekEndDate,
  }))

  // Check if we have enough weeks
  if (weeksWithContributions.length === 0) {
    console.error(`No weekly data found for ${year}-${month}`)
    process.exit(1)
  }

  // Calculate sponsorships
  const sponsorships = calculateSponsorship(weeksWithContributions)
  const hardwareReimbursements = filterHardwareReimbursementsForMonth(
    readHardwareReimbursements(),
    year,
    month,
  )
  const sponsorshipsWithReimbursements = applyHardwareReimbursements(
    sponsorships,
    hardwareReimbursements,
  )
  const csvContent = generateCSV(sponsorshipsWithReimbursements)

  // Ensure sponsorships directory exists
  const sponsorshipsDir = path.join(process.cwd(), "sponsorships")
  if (!fs.existsSync(sponsorshipsDir)) {
    fs.mkdirSync(sponsorshipsDir)
  }

  // Write/update the specified month's CSV file
  const outputPath = getMonthFile(year, month)
  fs.writeFileSync(outputPath, csvContent)

  console.log(
    `Updated sponsorship CSV for ${year}-${month.toString().padStart(2, "0")} at: ${outputPath}`,
  )
  console.log(`Weeks included: ${weeks.length}`)
  weeks.forEach((week) => {
    const startDate = `${week.weekStartDate.getUTCMonth() + 1}/${week.weekStartDate.getUTCDate()}`
    const endDate = `${week.weekEndDate.getUTCMonth() + 1}/${week.weekEndDate.getUTCDate()}`
    console.log(`  ${startDate} - ${endDate}: ${path.basename(week.filePath)}`)
  })
  console.log(`Total sponsorships: ${sponsorshipsWithReimbursements.length}`)
  console.log(
    `Total amount: $${sponsorshipsWithReimbursements
      .reduce((sum, s) => sum + s.amount, 0)
      .toFixed(2)}`,
  )

  if (hardwareReimbursements.length > 0) {
    console.log("\nHardware reimbursements applied:")
    hardwareReimbursements.forEach((reimbursement) => {
      console.log(
        `  - ${reimbursement.username}: $${reimbursement.amount.toFixed(2)} on ${reimbursement.date.toISOString().slice(0, 10)}${reimbursement.description ? ` (${reimbursement.description})` : ""}`,
      )
    })
  }

  // Show ineligible users if any
  if (INELIGIBLE_FOR_SPONSORSHIP.length > 0) {
    console.log(`\nUsers excluded from sponsorship (ineligible):`)
    INELIGIBLE_FOR_SPONSORSHIP.forEach((entry) => {
      console.log(`  - ${entry.github_username}: ${entry.reason}`)
    })
  }
}

if (import.meta.main) {
  main()
}
