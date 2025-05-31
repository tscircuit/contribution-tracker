import type { DiscussionComment } from "lib/types"
import { CURRENT_MILESTONE } from "shared/types/milestones"

export function generateAnalyzeDiscussionPrompt(
  comment: DiscussionComment,
): string {
  return `
<task>
Analyze the following GitHub Discussion comment and classify its quality and contribution level based on strict criteria. Assess depth, relevance, effort, and value added to the conversation.
</task>

<discussion-context>
- Title: ${comment.discussionTitle}
- Comment Body: ${comment.body}
</discussion-context>

<classification-guide>
Assign one of the following labels and corresponding contribution scores:

1. "NormalComment" (count: 1)
   - Short, basic, or low-effort participation
   - Adds little to no substantive value
   - Examples: "+1", "Thanks", "I agree", or off-topic replies
   - If the comment is not helpful or not related to the discussion
   - If low effort

2. "GreatInformativeComment" (count: 2)
   - Provides useful insights, thoughtful feedback, or raises meaningful questions
   - Demonstrates effort and relevance to the discussion
   - May include concise reasoning or helpful references

3. "IncredibleCommentTopTier" (count: 3)
   - Highly valuable and impactful
   - Deep analysis, comprehensive explanations, unique perspectives, or code examples
   - Demonstrates expert-level understanding or significantly advances the topic

Be strict in classification. Do not elevate a comment unless it clearly meets the criteria.
</classification-guide>
`.trim()
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
<task>Conduct a strict and thorough analysis of the following pull request in the context of its impact, change type, and alignment with the current development milestone.</task>

<pr-info>
- PR Number: ${pr.number}
- Title: ${pr.title}
- Author: ${pr.user.login}
- Repository: ${repo}
- URL: ${pr.html_url}
- Description: ${pr.body || "No description provided"}
</pr-info>

<diff>
${pr.diff || "No diff provided"}
</diff>

<milestone>
- Name: ${CURRENT_MILESTONE.name}
- Description: ${CURRENT_MILESTONE.description}
- Keywords: ${CURRENT_MILESTONE.keywords.join(", ")}
</milestone>

<instructions>
Strictly assess the PR across the following dimensions:

1. <summary>
   Provide a concise 1-line summary clearly stating what this PR does.
</summary>

2. <impact-assessment>
   Categorize the impact of the PR strictly as:
   - "Major": Large features, architectural changes, or breaking changes.
   - "Minor": Moderate features, bug fixes, performance tuning, or code enhancements.
   - "Tiny": Any of the following:
     - Pure documentation or comment changes.
     - Typo fixes.
     - Changes involving only \`package.json\`, \`package-lock.json\`, or \`yarn.lock\`.
     - Cosmetic or non-functional adjustments.

   ❗ Package or lock file changes must be treated as "Tiny", regardless of description.
</impact-assessment>

3. <analysis>
   Provide a brief, expressive one-line expressive analysis of the PR's nature and value.
   Do not start with "This PR" or "This PR does".
   Just give an analysis of the PR.
</analysis>

4. <milestone-alignment>
   Determine strict alignment to the current milestone. Set as \`true\` only if:
   - The PR's intent directly advances the milestone's main objectives.
   - The scope of the PR is relevant to the milestone's defined keywords and description.
   - It is not tangential or unrelated to milestone goals.

   Set to \`false\` if the PR is off-topic, only partially relevant, or misaligned.
</milestone-alignment>
</instructions>

`.trim()
}
