#!/usr/bin/env bun
/**
 * Debug script to understand why June sponsorship generation is failing
 */

import fs from "node:fs"
import path from "node:path"

function debugJuneWeeks() {
  const overviewsDir = path.join(process.cwd(), "contribution-overviews")
  const year = 2025
  const month = 6 // June
  
  // First day of June 2025
  const monthStart = new Date(Date.UTC(year, month - 1, 1))
  // First day of July 2025  
  const nextMonthStart = new Date(Date.UTC(year, month, 1))
  
  console.log(`Looking for weeks in June ${year}`)
  console.log(`Month start: ${monthStart.toISOString().split('T')[0]}`)
  console.log(`Next month start: ${nextMonthStart.toISOString().split('T')[0]}`)
  
  // Get all JSON files
  const allFiles = fs
    .readdirSync(overviewsDir)
    .filter((file) => file.endsWith(".json"))
    .filter((file) => file.startsWith("2025-06"))
    .map((file) => {
      const datePart = file.replace(".json", "")
      const fileDate = new Date(datePart)
      return {
        fileName: file,
        filePath: path.join(overviewsDir, file),
        fileDate,
        datePart,
      }
    })
    .filter(({ fileDate }) => !isNaN(fileDate.getTime()))
    .sort((a, b) => a.fileDate.getTime() - b.fileDate.getTime())

  console.log(`\nFound ${allFiles.length} June files:`)
  
  allFiles.forEach(({ fileName, fileDate, datePart }) => {
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
    
    const startsBeforeMonth = weekStartDate < monthStart
    const endsInMonth = weekEndDate >= monthStart && weekEndDate < nextMonthStart
    const startsInMonth = weekStartDate >= monthStart && weekStartDate < nextMonthStart
    const today = new Date()
    const isComplete = weekEndDate <= today
    
    console.log(`\n${fileName}:`)
    console.log(`  Week: ${weekStartDate.toISOString().split('T')[0]} to ${weekEndDate.toISOString().split('T')[0]}`)
    console.log(`  Starts before month: ${startsBeforeMonth}`)
    console.log(`  Ends in month: ${endsInMonth}`)
    console.log(`  Starts in month: ${startsInMonth}`)
    console.log(`  Is complete: ${isComplete}`)
    console.log(`  Should include: ${((startsBeforeMonth && endsInMonth) || startsInMonth) && isComplete}`)
  })
  
  // Check if we have data in the files
  console.log(`\nChecking file contents:`)
  allFiles.forEach(({ fileName, filePath }) => {
    try {
      const content = fs.readFileSync(filePath, "utf-8")
      const data = JSON.parse(content)
      const userCount = Object.keys(data).length
      console.log(`  ${fileName}: ${userCount} contributors`)
    } catch (error) {
      console.log(`  ${fileName}: Error reading file - ${error}`)
    }
  })
}

debugJuneWeeks()