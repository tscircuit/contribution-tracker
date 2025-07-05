#!/usr/bin/env bun
/**
 * Fixed sponsorship CSV generator for June 2025
 */

import fs from "node:fs"
import path from "node:path"
import { STAFF_USERNAMES } from "../frontend/src/constants/contributors"
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

function getJuneWeeks(): WeekData[] {
  const overviewsDir = path.join(process.cwd(), "contribution-overviews")
  
  // June 2025 weeks - use the proper Wednesday-to-Tuesday weekly structure
  const juneWeeks = [
    "2025-06-04", // June 4-10
    "2025-06-11", // June 11-17  
    "2025-06-18", // June 18-24
    "2025-06-25", // June 25-July 1
  ]
  
  const weeks: WeekData[] = []
  
  for (const weekStartStr of juneWeeks) {
    const filePath = path.join(overviewsDir, `${weekStartStr}.json`)
    
    if (fs.existsSync(filePath)) {
      const weekStartDate = new Date(weekStartStr)
      const weekEndDate = new Date(weekStartDate)
      weekEndDate.setDate(weekEndDate.getDate() + 6)
      
      weeks.push({
        filePath,
        weekStartDate,
        weekEndDate,
      })
    } else {
      console.warn(`Warning: Missing data file for week ${weekStartStr}`)
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
  weeksWithDates.forEach(
    ({ data: weekData, weekStartDate, weekEndDate }, weekIndex) => {
      Object.entries(weekData).forEach(([username, data]) => {
        // Skip staff members
        if (STAFF_USERNAMES.includes(username)) return

        if (!sponsorships.has(username)) {
          const weekDates = weeksWithDates.map(
            ({ weekStartDate, weekEndDate }) => ({
              start: new Date(weekStartDate),
              end: new Date(weekEndDate),
            })
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
      })
    }
  )

  // Format date as MM/DD
  const formatDate = (date: Date) => {
    return `${(date.getMonth() + 1).toString().padStart(2, "0")}/${date.getDate().toString().padStart(2, "0")}`
  }

  // Calculate sponsorship amounts
  return Array.from(sponsorships.entries())
    .map(([username, data]) => {
      const { weeklyStars, score, weekDates } = data

      const amount = getSponsorshipAmount({ 
        weeklyStars, 
        highScore: score,
        username 
      })

      // Create remarks with dates for each week's score
      const weeklyScoreWithDates = weeklyStars
        .map((stars, i) => {
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
    .sort((a, b) => b.amount - a.amount) // Sort by amount descending
}

function generateCSV(
  sponsorships: { username: string; amount: number; remarks: string }[]
): string {
  const header = "Maintainer username,Sponsorship amount in USD,REMARKS\n"
  const rows = sponsorships
    .map((s) => `${s.username},${s.amount},"${s.remarks}"`)
    .join("\n")

  return header + rows
}

function main() {
  console.log("Generating June 2025 sponsorship CSV...")
  
  // Get June weeks
  const weeks = getJuneWeeks()
  console.log(`Found ${weeks.length} weeks for June 2025`)
  
  if (weeks.length === 0) {
    console.error("No weekly data found for June 2025")
    process.exit(1)
  }

  // Read weekly data for each week
  const weeksWithData = weeks.map((week) => {
    console.log(`Reading data from: ${path.basename(week.filePath)}`)
    return {
      data: readWeeklyData(week.filePath),
      weekStartDate: week.weekStartDate,
      weekEndDate: week.weekEndDate,
    }
  })

  // Calculate sponsorships
  const sponsorships = calculateSponsorship(weeksWithData)
  const csvContent = generateCSV(sponsorships)

  // Ensure sponsorships directory exists
  const sponsorshipsDir = path.join(process.cwd(), "sponsorships")
  if (!fs.existsSync(sponsorshipsDir)) {
    fs.mkdirSync(sponsorshipsDir)
  }

  // Write June 2025 CSV file
  const outputPath = path.join(sponsorshipsDir, "2025-06.csv")
  fs.writeFileSync(outputPath, csvContent)

  console.log(`\n✅ Generated June 2025 sponsorship CSV: ${outputPath}`)
  console.log(`Weeks included: ${weeks.length}`)
  weeks.forEach((week) => {
    const startDate = `${week.weekStartDate.getMonth() + 1}/${week.weekStartDate.getDate()}`
    const endDate = `${week.weekEndDate.getMonth() + 1}/${week.weekEndDate.getDate()}`
    console.log(`  ${startDate} - ${endDate}: ${path.basename(week.filePath)}`)
  })
  console.log(`Total sponsorships: ${sponsorships.length}`)
  console.log(`Total amount: $${sponsorships.reduce((sum, s) => sum + s.amount, 0)}`)
  
  // Show top contributors
  console.log(`\nTop 5 contributors:`)
  sponsorships.slice(0, 5).forEach((s, i) => {
    console.log(`  ${i + 1}. ${s.username}: $${s.amount}`)
  })
}

if (import.meta.main) {
  main()
}