import type { ContributorStats } from "lib/types"
import { getOrCreateContributorStats } from "../contributor-identity"
import { analyzeDiscussionWithAI } from "../ai-stuff/analyze-discussion"
import { getAllDiscussionComments } from "./getAllDiscussionComments"

export async function processDiscussionsForContributors({
  startDate,
  contributorStatsByIdentity,
  currentTime = new Date(),
}: {
  startDate: string
  contributorStatsByIdentity: Record<string, ContributorStats>
  currentTime?: Date
}): Promise<Record<string, ContributorStats>> {
  const contributorStatsWithDiscussionsByIdentity: Record<
    string,
    ContributorStats
  > = JSON.parse(JSON.stringify(contributorStatsByIdentity))
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
      const contributorStats = getOrCreateContributorStats(
        contributorStatsWithDiscussionsByIdentity,
        {
          id: comment.discussionAuthorId,
          login: comment.discussionAuthor,
        },
      )
      contributorStats.discussionComments =
        (contributorStats.discussionComments || 0) + 1
      switch (analysis.level) {
        case "NormalComment":
          contributorStats.discussionNormalComments =
            (contributorStats.discussionNormalComments || 0) + 1
          break
        case "GreatInformativeComment":
          contributorStats.discussionGreatInformativeComments =
            (contributorStats.discussionGreatInformativeComments || 0) + 1
          break
        case "IncredibleCommentTopTier":
          contributorStats.discussionIncredibleComments =
            (contributorStats.discussionIncredibleComments || 0) + 1
          break
      }
    }
    return contributorStatsWithDiscussionsByIdentity
  } catch (error) {
    console.error(`Error processing discussions:`, error)
    return contributorStatsByIdentity
  }
}
