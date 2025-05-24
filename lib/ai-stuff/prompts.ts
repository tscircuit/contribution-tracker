import type { DiscussionComment } from "lib/types"
import { CURRENT_MILESTONE } from "shared/types/milestones"

export function generateAnalyzeDiscussionPrompt(
  comment: DiscussionComment,
): string {
  return `
Analyze the following GitHub Discussion comment and classify its contribution level as "NormalComment", "GreatInformativeComment", or "IncredibleCommentTopTier" based on these criteria:

NormalComment: Basic participation with minimal effort. Short comments that don't add significant value to the discussion. (count: 1)
GreatInformativeComment: Thoughtful participation that adds value. Detailed explanations, helpful suggestions, or meaningful questions that advance the discussion. (count: 2)
IncredibleCommentTopTier: Exceptional participation with high-quality content. In-depth analysis, comprehensive explanations, code examples, or solutions that significantly help others. (count: 3)

Discussion Title: ${comment.discussionTitle}
Comment Body: ${comment.body}

Provide the classification level, corresponding count (1-3)

Return the analysis in the specified format.`
}

export function generateAnalyzePRPrompt(
  pr: {
    number: number
    title: string
    body: string
    user: { login: string }
    html_url: string
    diff: string
  },
  repo: string,
): string {
  return `
Analyze this pull request and determine its impact and alignment:

PR Number: ${pr.number}
Title: ${pr.title}
Body: ${pr.body || "No description provided"}
Author: ${pr.user.login}
Repository: ${repo}
URL: ${pr.html_url}
Diff: ${pr.diff}

Current Milestone:
Name: ${CURRENT_MILESTONE.name}
Description: ${CURRENT_MILESTONE.description}
Keywords: ${CURRENT_MILESTONE.keywords.join(", ")}

Based on the code changes, title, and description, please:
1. Provide a clear description of what this PR does
2. Categorize the impact as:
   - "Major": Significant new features, breaking changes, or major refactoring
   - "Minor": Bug fixes, small improvements, or moderate feature additions
   - "Tiny": Documentation updates, typo fixes, or very minor changes
3. Determine if this PR appears to align with current development milestones (true/false)


Determine if this PR aligns with the current milestone's goals and objectives. Consider:
1. Does the PR directly contribute to the milestone's main objective?
2. Is the PR's scope and impact relevant to the milestone?
3. Does the PR's content match the milestone's focus area?

Return the analysis in the specified format.`
}
