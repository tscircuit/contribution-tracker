#!/usr/bin/env bun
/**
 * Test script for PR commenting functionality
 *
 * Usage: bun run scripts/test-pr-comment.ts <repo> <pr-number>
 * Example: bun run scripts/test-pr-comment.ts tscircuit/contribution-tracker 123
 */

import { postMergeComment } from "lib/notifications/notify-pr-change"
import { Octokit } from "@octokit/rest"
import type { AnalyzedPR } from "lib/types"

// Use a dedicated, non-cached Octokit instance to ensure we always get fresh data
const testOctokit = new Octokit({ auth: process.env.GITHUB_TOKEN })

async function runTest(repo: string, prNumber: number) {
  console.info(`[Test] Testing PR comment for ${repo} #${prNumber}`)

  const [owner, repoName] = repo.split("/")

  // Fetch PR details using the non-cached client
  const prResponse = await testOctokit.pulls.get({
    owner,
    repo: repoName,
    pull_number: prNumber,
  })
  const pr = prResponse.data

  if (typeof pr === "string") {
    throw new Error("PR data is a string, expected an object")
  }

  if (!pr.merged_at) {
    throw new Error(
      `PR ${repo} #${prNumber} is not merged. The test requires a merged PR to proceed.`,
    )
  }

  // Create minimal AnalyzedPR structure for testing
  const analyzedPR: AnalyzedPR = {
    number: pr.number,
    state: "merged",
    title: pr.title,
    body: pr.body || "",
    user: pr.user,
    html_url: pr.html_url,
    created_at: pr.created_at,
    merged_at: pr.merged_at,
    description: pr.body || "",
    impact: "Minor", // Default for testing
    contributor: pr.user?.login || "unknown",
    repo,
    url: pr.html_url,
    isAlignedWithMilestone: false,
    starRating: 3, // Default for testing
    // All PR attributes defaulting to false for testing
    mostly_style: false,
    new_page_or_component: false,
    introduces_or_fixes_a_footprint: false,
    core_change: false,
    only_dependency_update: false,
    bad_title: false,
    introduces_new_circuit_board: false,
    fixes_circuit_board: false,
    fixes_subtle_important_bug: false,
    minor_fix: true, // Default assumption for test
    major_autorouter_bug_fix: false,
    only_adds_autorouter_fixtures: false,
    only_reproduces_a_bug: false,
    reproduces_and_fixes_a_bug: false,
    minor_developer_experience_improvement: false,
    major_experience_improvement: false,
    introduces_new_schematic_symbol: false,
    fixes_schematic_representation: false,
    improves_parts_engine: false,
    add_design_to_schematic_corpus: false,
    major_improvement_to_core_data_modeling: false,
    major_library_algorithm_contribution: false,
    substantially_improves_svg_generation: false,
  }

  // Call the function to test it
  await postMergeComment(analyzedPR)

  console.info(
    `[Test] Successfully completed PR comment test for ${repo} #${prNumber}`,
  )
}

// --- Main execution ---
const repo = "tscircuit/contribution-tracker"
const prNumber = 229

console.log(`🚀 Testing PR comment for ${repo} #${prNumber}`)

runTest(repo, prNumber)
  .then(() => {
    console.log("✅ Test completed successfully!")
  })
  .catch((error) => {
    console.error("❌ Test failed:", error)
    process.exit(1)
  })
