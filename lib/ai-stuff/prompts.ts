import { CURRENT_MILESTONES } from "milestones"
import { PR_ATTRIBUTES } from "./pr-attributes"

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

   Give precise details, DO NOT SAY "improves XXX" or "enhances XXX" or "this pull request introduces",
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
