import type { AnalyzedPR } from "../index"

export const impactIcon = (impact: "Major" | "Minor" | "Tiny") => {
  switch (impact) {
    case "Major":
      return "🐳 Major"
    case "Minor":
      return "🐙 Minor"
    case "Tiny":
      return "🐌 Tiny"
    default:
      return "🟣"
  }
}

export const scoreToStarString = (score: number) => {
  if (score <= 3) return ""
  if (score <= 10) return "⭐"
  if (score <= 30) return "⭐⭐"
  if (score <= 50) return "⭐⭐⭐"
  if (score <= 75) return "👑"
  if (score <= 100) return "👑👑"
  return "👑👑👑"
}

export async function generateMarkdown(
  prs: AnalyzedPR[],
  contributorData: Record<
    string,
    {
      reviewsReceived: number
      rejections: number
      approvals: number
      changesRequested: number
      prsOpened: number
      prsClosed: number
      issuesCreated: number | undefined // Allowing undefined for missing issuesCreated
      bountiedIssuesCount?: number // New field for number of bountied issues
      bountiedIssuesTotal?: number // New field for total bounty amount
    }
  >,
  weekStart: string,
): Promise<string> {
  let markdown = `# Contribution Overview ${weekStart}\n\n`

  // ... (previous code remains the same)

  // Update the Review Table to include Bountied Issues columns
  markdown += "## Review Table\n\n"
  markdown +=
    "| Contributor | Reviews Received | Approvals | Rejections | Changes Requested | PRs Opened | PRs Closed | Issues Created | Bountied Issues | Bountied Issue $ |\n"
  markdown +=
    "|-------------|------------------|-----------|------------|-------------------|------------|------------|----------------|-----------------|------------------|\n"

  Object.entries(contributorData).forEach(([contributor, data]) => {
    markdown += `| [${contributor}](https://github.com/${contributor}) | ${data.reviewsReceived} | ${data.approvals} | ${data.rejections} | ${data.changesRequested} | ${data.prsOpened} | ${data.prsClosed} | ${data.issuesCreated || 0} | ${data.bountiedIssuesCount || 0} | ${data.bountiedIssuesTotal?.toLocaleString() || 0} |\n`
  })
  markdown += "\n"

  // ... (rest of the code remains the same)

  return markdown
}