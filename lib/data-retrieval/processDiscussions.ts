import type { ContributorStats } from "lib/types"
import { getOrCreateContributor } from "../contributor-identity"
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
      const { stats } = getOrCreateContributor(contributorsStats, {
        id: comment.discussionAuthorId,
        login: comment.discussionAuthor,
      })
      stats.discussionComments = (stats.discussionComments || 0) + 1
      switch (analysis.level) {
        case "NormalComment":
          stats.discussionNormalComments =
            (stats.discussionNormalComments || 0) + 1
          break
        case "GreatInformativeComment":
          stats.discussionGreatInformativeComments =
            (stats.discussionGreatInformativeComments || 0) + 1
          break
        case "IncredibleCommentTopTier":
          stats.discussionIncredibleComments =
            (stats.discussionIncredibleComments || 0) + 1
          break
      }
    }
    return contributorsStats
  } catch (error) {
    console.error(`Error processing discussions:`, error)
    return contributorsRecord
  }
}
