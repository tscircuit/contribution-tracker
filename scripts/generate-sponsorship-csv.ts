import fs from "node:fs"
import path from "node:path"
import { FULL_TIMERS } from "frontend/src/constants/contributors"
import { getSponsorshipAmount } from "../lib/scoring"

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
  
  // Format date as YYYY-MM-DD
  const formatDateForFile = (d: Date) => {
    return `${d.getFullYear()}-${(d.getMonth() + 1).toString().padStart(2, "0")}-${d.getDate().toString().padStart(2, "0")}`
  }
  
  // First day of the target month
  const monthStart = new Date(year, month - 1, 1)
  // First day of next month
  const nextMonthStart = new Date(year, month, 1)
  
  // Find all the Wednesdays (report dates) that correspond to full weeks in the month
  const weeks: WeekData[] = []
  
  // Get all JSON files in the directory
  const allFiles = fs.readdirSync(overviewsDir)
    .filter((file) => file.endsWith(".json"))
    .map((file) => {
      const datePart = file.replace(".json", "")
      const reportDate = new Date(datePart)
      return {
        filePath: path.join(overviewsDir, file),
        reportDate,
      }
    })
    .filter(({ reportDate }) => !isNaN(reportDate.getTime())) // Filter out invalid dates
    .sort((a, b) => b.reportDate.getTime() - a.reportDate.getTime()) // Sort in descending order
  
  // For each report date, determine the week it represents (Wednesday to Tuesday)
  for (const { filePath, reportDate } of allFiles) {
    // The report date is a Wednesday, which is the end of our week
    const weekEndDate = new Date(reportDate)
    
    // The start of the week is 7 days before (previous Thursday)
    const weekStartDate = new Date(reportDate)
    weekStartDate.setDate(weekStartDate.getDate() - 6)
    
    // Check if this week is relevant to the month we're calculating for
    // Either the week must end in the target month or start in the target month
    const weekEndsInTargetMonth = weekEndDate >= monthStart && weekEndDate < nextMonthStart
    const weekStartsInTargetMonth = weekStartDate >= monthStart && weekStartDate < nextMonthStart
    
    if (weekEndsInTargetMonth || weekStartsInTargetMonth) {
      weeks.push({
        filePath,
        weekStartDate,
        weekEndDate
      })
    }
    
    // Stop once we've found 4 weeks or gone past the relevant time period
    if (weeks.length >= 4 || weekEndDate < monthStart) {
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
  weeksWithDates.forEach(({ data: weekData, weekStartDate, weekEndDate }, weekIndex) => {
    Object.entries(weekData).forEach(([username, data]) => {
      // Skip full-timers
      if (FULL_TIMERS.includes(username)) return

      if (!sponsorships.has(username)) {
        // Initialize with placeholder dates that will be overwritten
        const weekDates = weeksWithDates.map(({ weekStartDate, weekEndDate }) => ({
          start: new Date(weekStartDate),
          end: new Date(weekEndDate)
        }))
        
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
  })

  // Format date as MM/DD
  const formatDate = (date: Date) => {
    return `${(date.getMonth() + 1).toString().padStart(2, "0")}/${date.getDate().toString().padStart(2, "0")}`
  }

  // Calculate sponsorship amounts
  return Array.from(sponsorships.entries())
    .map(([username, data]) => {
      const { weeklyStars, score, weekDates } = data

      // Use the getSponsorshipAmount function to calculate the amount
      let amount = getSponsorshipAmount({ weeklyStars, highScore: score })

      // Create remarks with dates for each week's score
      const weeklyScoreWithDates = weeklyStars.map((stars, i) => {
        const startDate = formatDate(weekDates[i].start)
        const endDate = formatDate(weekDates[i].end)
        return `${stars} (${startDate}-${endDate})`
      })

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
  const currentYear = date.getFullYear()
  const currentMonth = date.getMonth() + 1
  
  // Use command line args if provided (format: year month)
  const args = process.argv.slice(2)
  const year = args[0] ? parseInt(args[0]) : currentYear
  const month = args[1] ? parseInt(args[1]) : currentMonth
  
  // Get full weeks for the specified month
  const weeks = getFullWeeksForMonth(year, month)
  
  // Read weekly data for each week
  const weeksWithData = weeks.map(week => ({
    data: readWeeklyData(week.filePath),
    weekStartDate: week.weekStartDate,
    weekEndDate: week.weekEndDate
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

  console.log(`Updated sponsorship CSV for ${year}-${month.toString().padStart(2, "0")} at: ${outputPath}`)
  console.log(`Weeks included: ${weeks.length}`)
  weeks.forEach(week => {
    const startDate = `${week.weekStartDate.getMonth() + 1}/${week.weekStartDate.getDate()}`
    const endDate = `${week.weekEndDate.getMonth() + 1}/${week.weekEndDate.getDate()}`
    console.log(`  ${startDate} - ${endDate}: ${path.basename(week.filePath)}`)
  })
  console.log(`Total sponsorships: ${sponsorships.length}`)
  console.log(
    `Total amount: $${sponsorships.reduce((sum, s) => sum + s.amount, 0)}`,
  )
}

main()
