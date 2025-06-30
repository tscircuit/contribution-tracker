import { z } from "zod"
import type { MergedPullRequest } from "lib/types"
import type { AnalyzedPR } from "lib/types"
import { generateAnalyzePRPrompt } from "lib/ai-stuff/prompts"
import { generateAiObjectCached } from "./sdk"

const prSchema = z
  .object({
    number: z.number(),
    title: z.string(),
    analysis: z.string(),
    impact: z.enum(["Major", "Minor", "Tiny"]),
    contributor: z.string(),
    repo: z.string(),
    url: z.string(),
  })
  .merge(pr_attribute_schema)

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
  })
  return {
    ...result,
    user: pr.user,
    html_url: pr.html_url,
    created_at: pr.created_at,
    merged_at: pr.merged_at,
    body: pr.body,
    state: pr.state,
    number: result.object.number,
    title: result.object.title,
    description: result.object.analysis,
    impact: result.object.impact,
    contributor: result.object.contributor,
    repo: result.object.repo,
    url: result.object.url,
    isAlignedWithMilestone: result.object.isAlignedWithMilestone ?? false,
  }
}
