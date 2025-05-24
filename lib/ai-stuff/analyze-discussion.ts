import { z } from "zod"
import type { DiscussionComment, DiscussionContribution } from "lib/types"
import { generateAiObjectCached } from "./sdk"
import { generateAnalyzeDiscussionPrompt } from "./prompts"

const discussionSchema = z.object({
  level: z.enum(["Participating", "VeryActive", "ExtremelyActive"]),
  count: z.number(),
  reasoning: z.string(),
})

export async function analyzeDiscussionWithAI(
  comment: DiscussionComment,
): Promise<DiscussionContribution> {
  console.log(
    `Analyzing discussion comment by ${comment.discussionAuthor} with title ${comment.discussionTitle}`,
  )
  const result = await generateAiObjectCached({
    schema: discussionSchema,
    prompt: generateAnalyzeDiscussionPrompt(comment),
  })

  return {
    level: result.object.level,
    count: result.object.count,
  }
}
