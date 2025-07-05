#!/usr/bin/env bun
/**
 * Complete the remaining June 2025 weeks that weren't regenerated due to rate limits
 */

import { generateFixedOverview } from './generate-fixed-overview'

const REMAINING_JUNE_WEEKS = [
  '2025-06-11', // June 11-17
  '2025-06-18', // June 18-24
  '2025-06-25', // June 25 - July 1
]

async function finishJuneRecompute() {
  console.log('Completing June 2025 score recomputation...')
  console.log('Note: Run this when GitHub API rate limits have reset.')
  
  for (const weekStart of REMAINING_JUNE_WEEKS) {
    console.log(`\n=== Recomputing week starting ${weekStart} ===`)
    
    try {
      await generateFixedOverview(weekStart)
      console.log(`✅ Successfully recomputed week ${weekStart}`)
      
      // Add a small delay between weeks to avoid hitting rate limits
      await new Promise(resolve => setTimeout(resolve, 2000))
    } catch (error) {
      console.error(`❌ Failed to recompute week ${weekStart}:`, error)
      if (error.message?.includes('rate limit')) {
        console.log('💡 Hit rate limits again. Please try again later.')
        break
      }
    }
  }
  
  console.log('\n🎉 June 2025 score recomputation completed!')
}

if (import.meta.main) {
  await finishJuneRecompute()
}