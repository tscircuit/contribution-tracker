import { anthropic } from "lib/sdks"
import type { DiscussionComment, DiscussionContribution } from "../types"

/**
 * Analyzes a GitHub Discussion comment using Claude AI to determine its quality level
 * @param comment The discussion comment to analyze
 * @returns The contribution level assessment
 */
export async function analyzeDiscussionWithClaude(
  comment: DiscussionComment,
): Promise<DiscussionContribution> {
  try {
    const prompt = `Analyze the following GitHub Discussion comment and classify its contribution level as "Participating", "VeryActive", or "ExtremelyActive" based on these criteria:

Participating: Basic participation with minimal effort. Short comments that don't add significant value to the discussion.

VeryActive: Thoughtful participation that adds value. Detailed explanations, helpful suggestions, or meaningful questions that advance the discussion.

ExtremelyActive: Exceptional participation with high-quality content. In-depth analysis, comprehensive explanations, code examples, or solutions that significantly help others.

Discussion Title: ${comment.discussionTitle}
Comment Body: ${comment.body}

Response format:
Level: [Participating/VeryActive/ExtremelyActive]
Reasoning: [Brief explanation of your classification]`

    const message = await anthropic.messages.create({
      model: "claude-3-haiku-20240307",
      max_tokens: 100,
      messages: [{ role: "user", content: prompt }],
    })

    // @ts-ignore
    const content = message.content[0].text.trim().toLowerCase()
    const level =
      content.split("level:")[1]?.split("reasoning:")[0]?.trim() ??
      "participating"

    // Map the response to the expected format
    let contributionLevel: "Participating" | "VeryActive" | "ExtremelyActive" =
      "Participating"

    if (level.includes("VeryActive".toLowerCase())) {
      contributionLevel = "VeryActive"
    } else if (level.includes("ExtremelyActive".toLowerCase())) {
      contributionLevel = "ExtremelyActive"
    }

    return {
      level: contributionLevel,
      count:
        contributionLevel === "Participating"
          ? 1
          : contributionLevel === "VeryActive"
            ? 2
            : 3,
    }
  } catch (error) {
    console.error(
      `Error analyzing discussion comment for ${comment.discussionUrl}:`,
      error,
    )
    return {
      level: "Participating",
      count: 1,
    }
  }
}
