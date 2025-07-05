#!/usr/bin/env bun
/**
 * Script to recompute June 2025 contribution scores with proper date range filtering
 * 
 * This script fixes the issue where weekly calculations only filtered by start date
 * but not end date, potentially including data from future weeks.
 */

import { generateFixedOverview } from './generate-fixed-overview'
import { getLastWednesday } from '../lib/ai/date-utils'

// June 2025 weekly periods (Wednesday to Wednesday)
const JUNE_2025_WEEKS = [
  '2025-06-04', // June 4-10
  '2025-06-11', // June 11-17
  '2025-06-18', // June 18-24
  '2025-06-25', // June 25 - July 1
]

async function recomputeJuneScores() {
  console.log('Starting recomputation of June 2025 contribution scores...')
  console.log('This will fix the date range filtering issue and regenerate all files.')
  
  for (const weekStart of JUNE_2025_WEEKS) {
    console.log(`\n=== Recomputing week starting ${weekStart} ===`)
    
    try {
      // Use the fixed generateOverview function with proper date range filtering
      await generateFixedOverview(weekStart)
      
      console.log(`✅ Successfully recomputed week ${weekStart}`)
    } catch (error) {
      console.error(`❌ Failed to recompute week ${weekStart}:`, error)
    }
  }
  
  console.log('\n🎉 June 2025 score recomputation completed!')
}

// Helper function to calculate week end date
function getWeekEndDate(startDate: string): string {
  const start = new Date(startDate)
  const end = new Date(start)
  end.setDate(start.getDate() + 6) // 6 days later (Wednesday to Tuesday)
  return end.toISOString().split('T')[0]
}

// Export the week end helper for use in data retrieval functions
export { getWeekEndDate }

if (import.meta.main) {
  await recomputeJuneScores()
}