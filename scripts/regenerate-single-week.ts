#!/usr/bin/env bun
/**
 * Script to regenerate a single week's contribution scores
 */

import { generateFixedOverview } from './generate-fixed-overview'

async function regenerateWeek() {
  const weekStart = process.argv[2]
  
  if (!weekStart) {
    console.error('Usage: bun scripts/regenerate-single-week.ts YYYY-MM-DD')
    process.exit(1)
  }
  
  console.log(`Regenerating week starting ${weekStart}...`)
  
  try {
    await generateFixedOverview(weekStart)
    console.log(`✅ Successfully regenerated week ${weekStart}`)
  } catch (error) {
    console.error(`❌ Failed to regenerate week ${weekStart}:`, error)
    process.exit(1)
  }
}

if (import.meta.main) {
  await regenerateWeek()
}