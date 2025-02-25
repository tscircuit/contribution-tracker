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

function getLastNWeeklyFiles(n: number): string[] {
  const overviewsDir = path.join(process.cwd(), "contribution-overviews")
  const files = fs
    .readdirSync(overviewsDir)
    .filter((file) => file.endsWith(".json"))
    .sort((a, b) => b.localeCompare(a)) // Sort in descending order
    .slice(0, n)

  return files.map((file) => path.join(overviewsDir, file))
}

function readWeeklyData(filePath: string): WeeklyData {
  const content = fs.readFileSync(filePath, "utf-8")
  return JSON.parse(content)
}

function countStars(stars: string): number {
  if (stars === "👑") return 3
  return (stars.match(/⭐/g) || []).length
}

function calculateSponsorship(lastFourWeeks: WeeklyData[]): {
  username: string
  amount: number
  remarks: string
}[] {
  const sponsorships: Map<
    string,
    {
      weeklyStars: number[]
      score: number
    }
  > = new Map()

  // Collect data from all weeks
  lastFourWeeks.forEach((weekData, weekIndex) => {
    Object.entries(weekData).forEach(([username, data]) => {
      // Skip full-timers
      if (FULL_TIMERS.includes(username)) return

      if (!sponsorships.has(username)) {
        sponsorships.set(username, {
          weeklyStars: Array(4).fill(0),
          score: 0,
        })
      }

      const userSponsorship = sponsorships.get(username)!
      if (data.stars) {
        userSponsorship.weeklyStars[weekIndex] = countStars(data.stars)
      }
      if (data.score) {
        userSponsorship.score = Math.max(userSponsorship.score, data.score)
      }
    })
  })

  // Calculate sponsorship amounts
  return Array.from(sponsorships.entries())
    .map(([username, data]) => {
      const { weeklyStars, score } = data

      // Use the getSponsorshipAmount function to calculate the amount
      let amount = getSponsorshipAmount({ weeklyStars, highScore: score })

      return {
        username,
        amount,
        remarks: `Past 4 weeks stars: [${weeklyStars.join(", ")}]`,
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

function getCurrentMonthFile(): string {
  const date = new Date()
  const month = date.getMonth() + 1
  const year = date.getFullYear()
  return path.join(
    process.cwd(),
    "sponsorships",
    `${year}-${month.toString().padStart(2, "0")}.csv`,
  )
}

function main() {
  const lastFourFiles = getLastNWeeklyFiles(4)
  const weeklyData = lastFourFiles.map((file) => readWeeklyData(file))
  const sponsorships = calculateSponsorship(weeklyData)

  const csvContent = generateCSV(sponsorships)

  // Ensure sponsorships directory exists
  const sponsorshipsDir = path.join(process.cwd(), "sponsorships")
  if (!fs.existsSync(sponsorshipsDir)) {
    fs.mkdirSync(sponsorshipsDir)
  }

  // Write/update the current month's CSV file
  const outputPath = getCurrentMonthFile()
  fs.writeFileSync(outputPath, csvContent)

  console.log(`Updated sponsorship CSV at: ${outputPath}`)
  console.log(`Total sponsorships: ${sponsorships.length}`)
  console.log(
    `Total amount: $${sponsorships.reduce((sum, s) => sum + s.amount, 0)}`,
  )
}

main()
