import type { ContributorStats } from "lib/types"
import { analyzeDiscussionWithAI } from "../ai-stuff/analyze-discussion"
import { getAllDiscussionComments } from "./getAllDiscussionComments"

export async function processDiscussionsForContributors(
  startDate: string,
  contributorsRecord: Record<string, ContributorStats>,
  currentTime: Date = new Date(),
): Promise<Record<string, ContributorStats>> {
  const contributorsStats: Record<string, ContributorStats> = JSON.parse(
    JSON.stringify(contributorsRecord),
  )
  try {
    // Fetch discussion comments for the contributor
    const discussionComments = await getAllDiscussionComments(
      startDate,
      "tscircuit/tscircuit",
      currentTime,
    )
    // Analyze each comment and update stats based on contribution level
    for (const comment of discussionComments) {
      const analysis = await analyzeDiscussionWithAI(comment)
      if (
        !contributorsStats[comment.discussionAuthor] ||
        contributorsStats[comment.discussionAuthor]?.discussionComments ===
          undefined
      ) {
        contributorsStats[comment.discussionAuthor] = {
          discussionComments: 0,
          discussionNormalComments: 0,
          discussionGreatInformativeComments: 0,
          discussionIncredibleComments: 0,
          ...contributorsStats[comment.discussionAuthor],
        }
      }
      contributorsStats[comment.discussionAuthor].discussionComments =
        (contributorsStats[comment.discussionAuthor]?.discussionComments || 0) +
        1
      switch (analysis.level) {
        case "NormalComment":
          contributorsStats[comment.discussionAuthor].discussionNormalComments =
            (contributorsStats[comment.discussionAuthor]
              ?.discussionNormalComments || 0) + 1
          break
        case "GreatInformativeComment":
          contributorsStats[
            comment.discussionAuthor
          ].discussionGreatInformativeComments =
            (contributorsStats[comment.discussionAuthor]
              ?.discussionGreatInformativeComments || 0) + 1
          break
        case "IncredibleCommentTopTier":
          contributorsStats[
            comment.discussionAuthor
          ].discussionIncredibleComments =
            (contributorsStats[comment.discussionAuthor]
              ?.discussionIncredibleComments || 0) + 1
          break
      }
    }
    return contributorsStats
  } catch (error) {
    console.error(`Error processing discussions:`, error)
    return contributorsRecord
  }
}
