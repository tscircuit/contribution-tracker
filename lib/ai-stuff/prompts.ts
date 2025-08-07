import type { DiscussionComment } from "lib/types"
import { CURRENT_MILESTONES } from "milestones"
import { PR_ATTRIBUTES } from "./pr-attributes"

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
${pr.body ? `- Description: ${pr.body}` : ""}
</pr-info>

<diff>
${pr.diff || "No diff provided"}
</diff>

<instructions>
Strictly assess the PR across the following dimensions:

<description>
   Provide a concise 1-line summary clearly stating what this PR changes for users
   If no description provided, try to generate a description yourself from the diff and title
   Do not include any hyperlinks, or image links, just use plain text

   Give precise details, DO NOT SAY "improves XXX" or "enhances XXX",
   if the PR fixes a precise bug, be precise e.g.

   - "Fixes autorouting failure when pinheaders are connected to same nets within a subcircuit"
   - "Solves discord bug where user can't see boards with many traces inside RunFrame preview"
   - "Add Mosfet symbol"
   - "Fixes KiCad symbol export when jumper is misaligned"
</description>

${Object.entries(PR_ATTRIBUTES)
  .map(
    ([attributeName, attributeDescription]) => `
- <${attributeName}>
  ${attributeDescription}
</${attributeName}>
`,
  )
  .join("\n")}

</instructions>

`.trim()
}
