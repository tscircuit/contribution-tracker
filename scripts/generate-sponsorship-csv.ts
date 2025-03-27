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

function getLastNWeeklyFiles(n: number): { filePath: string, endDate: string }[] {
  const overviewsDir = path.join(process.cwd(), "contribution-overviews")
  const now = new Date()
  const cutoff = new Date(now)
  cutoff.setDate(now.getDate() - now.getDay())
  const files = fs
    .readdirSync(overviewsDir)
    .filter((file) => file.endsWith(".json"))
    .filter((file) => {
      const datePart = file.slice(0, 10)
      const fileDate = new Date(datePart)
      return fileDate <= cutoff
    })
    .sort((a, b) => b.localeCompare(a))
    .slice(0, n)

  return files.map((file) => {
    const weekStart = file.slice(0, 10)
    const weekEndDate = new Date(weekStart)
    weekEndDate.setDate(weekEndDate.getDate() + 6)
    const endDate = weekEndDate.toISOString().slice(0, 10)
    return {
      filePath: path.join(overviewsDir, file),
      endDate
    }
  })
}

function readWeeklyData(filePath: string): WeeklyData {
  const content = fs.readFileSync(filePath, "utf-8")
  return JSON.parse(content)
}

function countStars(stars: string): number {
  if (stars === "👑") return 3
  return (stars.match(/⭐/g) || []).length
}

function calculateSponsorship(lastFourWeeks: { endDate: string, data: WeeklyData }[]): {
  username: string
  amount: number
  remarks: string
}[] {
  const sponsorships: Map<
    string,
    {
      weeklyStars: number[]
      score: number
      remarksArr: string[]
    }
  > = new Map()

  // Collect data from all weeks
  lastFourWeeks.forEach((week, weekIndex) => {
    const { endDate, data } = week;
    Object.entries(data).forEach(([username, entry]) => {
      // Skip full-timers
      if (FULL_TIMERS.includes(username)) return

      if (!sponsorships.has(username)) {
        sponsorships.set(username, {
          weeklyStars: Array(4).fill(0),
          score: 0,
          remarksArr: Array(4).fill("")
        })
      }

      const userSponsorship = sponsorships.get(username)!
      const starCount = entry.stars ? countStars(entry.stars) : 0;
      userSponsorship.weeklyStars[weekIndex] = starCount;
      userSponsorship.remarksArr[weekIndex] = `${endDate}: ${starCount === 0 ? "0" : starCount}`;
      if (entry.score) {
        userSponsorship.score = Math.max(userSponsorship.score, entry.score)
      }
    })
  })

  sponsorships.forEach((value) => {
    for (let i = 0; i < lastFourWeeks.length; i++) {
      if (!value.remarksArr[i]) {
        value.remarksArr[i] = `${lastFourWeeks[i].endDate}: 0`;
      }
    }
  });
  
  // Calculate sponsorship amounts
  return Array.from(sponsorships.entries())
    .map(([username, data]) => {
      const { weeklyStars, score, remarksArr } = data
      let amount = getSponsorshipAmount({ weeklyStars, highScore: score })
      return {
        username,
        amount,
        remarks: remarksArr.join("; ")
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
  const lastFourWeeks = getLastNWeeklyFiles(4)
  const weeklyData = lastFourWeeks.map(({ filePath, endDate }) => ({ endDate, data: readWeeklyData(filePath) }))
  const weeklyDataAsc = weeklyData.reverse()
  const sponsorships = calculateSponsorship(weeklyDataAsc)

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
