#!/usr/bin/env bun
/**
 * Test script for PR commenting functionality
 *
 * Usage: bun run scripts/test-pr-comment.ts <repo> <pr-number>
 * Example: bun run scripts/test-pr-comment.ts tscircuit/contribution-tracker 123
 */

import { testCommentOnPR } from "lib/notifications/notify-pr-change"

// Get command line arguments
const [,, repo, prNumberStr] = process.argv

if (!repo || !prNumberStr) {
  console.error("Usage: bun run scripts/test-pr-comment.ts <repo> <pr-number>")
  console.error("Example: bun run scripts/test-pr-comment.ts tscircuit/contribution-tracker 123")
  process.exit(1)
}

const prNumber = parseInt(prNumberStr, 10)
if (isNaN(prNumber)) {
  console.error("PR number must be a valid number")
  process.exit(1)
}

console.log(`🚀 Testing PR comment for ${repo} #${prNumber}`)

testCommentOnPR(repo, prNumber)
  .then(() => {
    console.log("✅ Test completed successfully!")
  })
  .catch((error) => {
    console.error("❌ Test failed:", error)
    process.exit(1)
  })
