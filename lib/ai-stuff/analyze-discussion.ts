import { z } from "zod"
import type { DiscussionComment, DiscussionContribution } from "lib/types"
import { generateAiObjectCached } from "./sdk"
import { generateAnalyzeDiscussionPrompt } from "./prompts"

const discussionSchema = z.object({
  level: z.enum([
    "NormalComment",
    "GreatInformativeComment",
    "IncredibleCommentTopTier",
  ]),
  count: z.number(),
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
    debug: `Discussion comment by ${comment.discussionAuthor} with title ${comment.discussionTitle}`,
  })

  return {
    level: result.object.level,
    count: result.object.count,
  } as DiscussionContribution
}
