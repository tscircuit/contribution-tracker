import {
  hasOnlySupportingFileChanges,
  hasRuntimeCodeChanges,
  hasMatchingAutomatedVisualSnapshot,
  isDependencyOnlyDiff,
} from "../data-processing/filter-diff"
import { z } from "zod"
import type { MergedPullRequest } from "lib/types"
import type { AnalyzedPR } from "lib/types"
import { generateAnalyzePRPrompt } from "lib/ai-stuff/prompts"
import { generateAiObjectCached } from "./sdk"
import { pr_attribute_schema } from "./pr-attributes"
import { getContributionStarRatingFromAttributes } from "./getConstributionStarRatingFromAttributes"

const prSchema = z
  .object({
    description: z.string(),
    evaluation_evidence: z
      .string()
      .describe(
        "At most 60 words: impact and specific test/snapshot evidence, or not demonstrated. No invented coverage or execution.",
      ),
  })
  .merge(pr_attribute_schema)

function cleanDescription(description: string): string {
  return description
    .replace(/^\s*[-*•]\s+/gm, "") // Remove bullet points (-, *, •)
    .replace(/\n+/g, " ") // Replace newlines with spaces
    .replace(/\s+/g, " ") // Replace multiple spaces with single space
    .replace(/[^\w\s.,!?;:()\-]/g, "") // Remove special characters except basic punctuation
    .trim()
}

export async function analyzePRWithAI(
  pr: MergedPullRequest,
  repo: string,
): Promise<AnalyzedPR> {
  console.log(
    `Analyzing PR #${pr.number} - ${pr.title} by ${pr.user.login} in ${repo}`,
  )
  const result = await generateAiObjectCached({
    schema: prSchema,
    prompt: generateAnalyzePRPrompt(pr, repo),
    debug: `PR #${pr.number} - ${pr.title} by ${pr.user.login} in ${repo}`,
  })
  const attributes = normalizeContributionAttributes(result.object, pr.diff)
  const starRating = getContributionStarRatingFromAttributes(
    attributes,
    repo,
    pr.manualStarRating,
  )
  return {
    ...attributes,
    description: cleanDescription(result.object.description),
    user: pr.user,
    html_url: pr.html_url,
    created_at: pr.created_at,
    merged_at: pr.merged_at,
    body: pr.body,
    state: pr.state,
    number: pr.number,
    title: pr.title,
    contributor: pr.user.login,
    contributorId: pr.user.id,
    repo,
    url: pr.html_url,
    isAlignedWithMilestone: false,
    starRating,
    impact: starRating >= 3 ? "Major" : starRating >= 2 ? "Minor" : "Tiny",
  }
}

export function normalizeContributionAttributes<
  T extends import("./pr-attributes").PrAttributeSchema,
>(input: T, diff: string): T {
  const attributes = {
    ...input,
    changes_runtime_implementation:
      hasOnlySupportingFileChanges(diff) || isDependencyOnlyDiff(diff)
        ? false
        : hasRuntimeCodeChanges(diff) || input.changes_runtime_implementation,
  }
  if (
    attributes.has_relevant_regression_test &&
    hasMatchingAutomatedVisualSnapshot(diff)
  ) {
    attributes.has_relevant_visual_snapshot = true
  }
  if (isDependencyOnlyDiff(diff)) attributes.only_dependency_update = true
  if (attributes.changes_runtime_implementation) {
    attributes.only_reproduces_a_bug = false
    attributes.only_adds_autorouter_fixtures = false
    attributes.only_docs_tests_or_ci = false
  }
  return attributes
}
