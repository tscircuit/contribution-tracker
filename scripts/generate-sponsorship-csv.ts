import fs from "node:fs"
import path from "node:path"
import { STAFF_USERNAMES } from "frontend/src/constants/contributors"
import { getSponsorshipAmount } from "../lib/scoring"
import { getIneligibleUsernames, getIneligibleUser } from "../lib/scoring/ineligibleUsers"

interface ContributorData {
  stars?: string
  score?: number
}

interface WeeklyData {
  [username: string]: ContributorData
}

interface WeekData {
  filePath: string
  weekStartDate: Date
  weekEndDate: Date
}

function getFullWeeksForMonth(year: number, month: number): WeekData[] {
  const overviewsDir = path.join(process.cwd(), "contribution-overviews")

  // First day of the target month
  const monthStart = new Date(Date.UTC(year, month - 1, 1))
  // First day of next month
  const nextMonthStart = new Date(Date.UTC(year, month, 1))

  // We'll collect weeks with data that are relevant for the month
  const weeks: WeekData[] = []

  // Get all JSON files in the directory
  const allFiles = fs
    .readdirSync(overviewsDir)
    .filter((file) => file.endsWith(".json"))
    .map((file) => {
      const datePart = file.replace(".json", "")
      const fileDate = new Date(datePart)
      return {
        filePath: path.join(overviewsDir, file),
        fileDate,
        datePart, // Keep the original date string for debugging
      }
    })
    .filter(({ fileDate }) => !isNaN(fileDate.getTime())) // Filter out invalid dates
    .sort((a, b) => b.fileDate.getTime() - a.fileDate.getTime()) // Sort in descending order (newest first)

  // For each week's data file
  for (const { filePath, fileDate, datePart } of allFiles) {
    // The date in the filename is the START of the week
    const weekStartDate = new Date(
      Date.UTC(
        fileDate.getUTCFullYear(),
        fileDate.getUTCMonth(),
        fileDate.getUTCDate(),
      ),
    )

    // End date is the Tuesday following the start date (which should be a Wednesday)
    const weekEndDate = new Date(
      Date.UTC(
        fileDate.getUTCFullYear(),
        fileDate.getUTCMonth(),
        fileDate.getUTCDate() + 6,
      ),
    )

    // For March, we want COMPLETE weeks:
    // - 02/26, 03/05, 03/12, 03/19 (we exclude 03/26 since it's not a complete week)

    // Include weeks that start in February but end in target month
    // OR weeks that start AND end in the target month
    const startsBeforeMonth = weekStartDate < monthStart
    const endsInMonth =
      weekEndDate >= monthStart && weekEndDate < nextMonthStart
    const startsInMonth =
      weekStartDate >= monthStart && weekStartDate < nextMonthStart

    // Include if it overlaps with the target month
    if ((startsBeforeMonth && endsInMonth) || startsInMonth) {
      // But only include if we have complete data for this week
      // For files generated on the last day of the month, we might not have complete data
      // Assuming a complete week has data through the end date
      const today = new Date()
      if (weekEndDate <= today) {
        weeks.push({
          filePath,
          weekStartDate,
          weekEndDate,
        })
      }
    }

    // Stop once we've collected 4-5 weeks or gone past the relevant time period
    if (weeks.length >= 5 || weekStartDate > nextMonthStart) {
      break
    }
  }

  return weeks
}

function readWeeklyData(filePath: string): WeeklyData {
  const content = fs.readFileSync(filePath, "utf-8")
  return JSON.parse(content)
}

function countStars(stars: string): number {
  if (stars === "👑") return 3
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

  // Load ineligible users once for efficient lookup
  const ineligibleUsernames = getIneligibleUsernames()

  // Collect data from all weeks
  weeksWithDates.forEach(
    ({ data: weekData, weekStartDate, weekEndDate }, weekIndex) => {
      Object.entries(weekData).forEach(([username, data]) => {
        // Skip full-timers
        if (STAFF_USERNAMES.includes(username)) return

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
        if (data.stars) {
          userSponsorship.weeklyStars[weekIndex] = countStars(data.stars)
        }
        if (data.score) {
          userSponsorship.score = Math.max(userSponsorship.score, data.score)
        }

        // We don't need to update the dates here as they're already initialized correctly
      })
    },
  )

  // Format date as MM/DD
  const formatDate = (date: Date) => {
    return `${(date.getUTCMonth() + 1).toString().padStart(2, "0")}/${date.getUTCDate().toString().padStart(2, "0")}`
  }

  const allSponsorships = Array.from(sponsorships.entries())
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

  // Filter out ineligible users and log excluded ones
  const eligibleSponsorships = allSponsorships.filter((sponsorship) => {
    if (ineligibleUsernames.has(sponsorship.username)) {
      const ineligibleUser = getIneligibleUser(sponsorship.username)
      console.log(
        `🚫 Excluded ${sponsorship.username} from sponsorship (would have received $${sponsorship.amount}): ${ineligibleUser?.reason || 'Unknown reason'}`
      )
      return false
    }
    return true
  })

  const excludedCount = allSponsorships.length - eligibleSponsorships.length
  const excludedAmount = allSponsorships
    .filter(s => ineligibleUsernames.has(s.username))
    .reduce((sum, s) => sum + s.amount, 0)
  
  if (excludedCount > 0) {
    console.log(`\n📊 Sponsorship Exclusion Summary:`)
    console.log(`   Excluded users: ${excludedCount}`)
    console.log(`   Excluded amount: $${excludedAmount}`)
  }

  return eligibleSponsorships
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
  const weeksWithData = weeks.map((week) => ({
    data: readWeeklyData(week.filePath),
    weekStartDate: week.weekStartDate,
    weekEndDate: week.weekEndDate,
  }))

  // Check if we have enough weeks
  if (weeksWithData.length === 0) {
    console.error(`No weekly data found for ${year}-${month}`)
    process.exit(1)
  }

  // Calculate sponsorships
  const sponsorships = calculateSponsorship(weeksWithData)
  const csvContent = generateCSV(sponsorships)

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
  console.log(`Total sponsorships: ${sponsorships.length}`)
  console.log(
    `Total amount: $${sponsorships.reduce((sum, s) => sum + s.amount, 0)}`,
  )
}

main()
