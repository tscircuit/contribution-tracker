import { getAllDiscussionComments } from "./getAllDiscussionComments"
import { analyzeDiscussionWithClaude } from "../ai/analyzeDiscussionWithClaude"
import type { ContributorStats } from "lib/types"

export async function processDiscussionsForContributors(
  startDate: string,
  contributorsRecord: Record<string, ContributorStats>,
): Promise<Record<string, ContributorStats>> {
  const contributorsStats: Record<string, ContributorStats> = JSON.parse(
    JSON.stringify(contributorsRecord),
  )
  try {
    // Fetch discussion comments for the contributor
    const discussionComments = await getAllDiscussionComments(startDate)
    // Analyze each comment and update stats based on contribution level
    for (const comment of discussionComments) {
      const analysis = await analyzeDiscussionWithClaude(comment)
      if (
        !contributorsStats[comment.discussionAuthor] ||
        contributorsStats[comment.discussionAuthor]?.discussionComments ===
          undefined
      ) {
        contributorsStats[comment.discussionAuthor] = {
          discussionComments: 0,
          discussionParticipating: 0,
          discussionVeryActive: 0,
          discussionExtremelyActive: 0,
          ...contributorsStats[comment.discussionAuthor],
        }
      }
      contributorsStats[comment.discussionAuthor].discussionComments =
        (contributorsStats[comment.discussionAuthor]?.discussionComments || 0) +
        1
      switch (analysis.level) {
        case "Participating":
          contributorsStats[comment.discussionAuthor].discussionParticipating =
            (contributorsStats[comment.discussionAuthor]
              ?.discussionParticipating || 0) + 1
          break
        case "VeryActive":
          contributorsStats[comment.discussionAuthor].discussionVeryActive =
            (contributorsStats[comment.discussionAuthor]
              ?.discussionVeryActive || 0) + 1
          break
        case "ExtremelyActive":
          contributorsStats[
            comment.discussionAuthor
          ].discussionExtremelyActive =
            (contributorsStats[comment.discussionAuthor]
              ?.discussionExtremelyActive || 0) + 1
          break
      }
    }
    return contributorsStats
  } catch (error) {
    console.error(`Error processing discussions:`, error)
    return contributorsRecord
  }
}
