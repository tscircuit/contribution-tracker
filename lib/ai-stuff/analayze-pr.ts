import { openai } from "@ai-sdk/openai"
import { z } from "zod"
import type { MergedPullRequest } from "lib/types"
import type { AnalyzedPR } from "lib/types"
import { generateAnalyzePRPrompt } from "lib/ai-stuff/prompts"
import { generateAiObjectCached } from "./sdk"

const prSchema = z.object({
  number: z.number(),
  title: z.string(),
  description: z.string(),
  impact: z.enum(["Major", "Minor", "Tiny"]),
  contributor: z.string(),
  repo: z.string(),
  url: z.string(),
  isAlignedWithMilestone: z.boolean(),
})

export async function analyzePRWithAI(
  pr: MergedPullRequest,
  repo: string,
): Promise<AnalyzedPR> {
  const result = await generateAiObjectCached({
    model: openai("gpt-4.1-nano"),
    schema: prSchema,
    prompt: generateAnalyzePRPrompt(pr, repo),
  })
  return {
    number: result.object.number,
    title: result.object.title,
    description: result.object.description,
    impact: result.object.impact,
    contributor: result.object.contributor,
    repo: result.object.repo,
    url: result.object.url,
    isAlignedWithMilestone: result.object.isAlignedWithMilestone ?? false,
  }
}
