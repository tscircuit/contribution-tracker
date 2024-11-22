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
      issuesCreated: Number
    }
  >,
  weekStart: string,
): Promise<string> {
  let markdown = `# Contribution Overview ${weekStart}\n\n`

  // Generate Mermaid pie chart
  markdown += "## PRs by Repository\n\n"
  markdown += "```mermaid\npie\n"
  const repoCounts = prs.reduce(
    (acc, pr) => {
      acc[pr.repo] = (acc[pr.repo] || 0) + 1
      return acc
    },
    {} as Record<string, number>,
  )
  Object.entries(repoCounts).forEach(([repo, count]) => {
    markdown += `    "${repo}" : ${count}\n`
  })
  markdown += "```\n\n"

  // Generate contributor overview table
  markdown += "## Contributor Overview\n\n"
  markdown += "| Contributor | 🐳 Major | 🐙 Minor | 🐌 Tiny | ⭐ |\n"
  markdown += "|-------------|-------|-------|-------|-------|\n"
  const impactWorth = { Major: 4, Minor: 2, Tiny: 1 }
  const contributorEffort = prs.reduce(
    (acc, pr) => {
      if (!acc[pr.contributor]) {
        acc[pr.contributor] = { Major: 0, Minor: 0, Tiny: 0, score: 0 }
      }
      acc[pr.contributor][pr.impact]++
      const impactScore = impactWorth[pr.impact as keyof typeof impactWorth]
      if (!Number.isNaN(impactScore) && typeof impactScore === "number") {
        acc[pr.contributor].score += impactScore
      }

      return acc
    },
    {} as Record<string, Record<string, number>>,
  )
  const sortedContributors = Object.entries(contributorEffort).sort(
    (a, b) => b[1].score - a[1].score,
  )
  console.log(sortedContributors)
  for (const [contributor, effort] of sortedContributors) {
    markdown += `| [${contributor}](#${contributor.replace(/\s/g, "-")}) | ${effort.Major} | ${effort.Minor} | ${effort.Tiny} | ${scoreToStarString(effort.score)} |\n`
  }
  markdown += "\n"

  // Generate Review Table
  markdown += "## Review Table\n\n"
  markdown +=
    "| Contributor | Reviews Received | Approvals | Rejections | Changes Requested | PRs Opened | PRs Closed | Issues Created |\n"
  markdown +=
    "|-------------|------------------|-----------|------------|-------------------|------------|------------|----------------|n"

  Object.entries(contributorData).forEach(([contributor, data]) => {
    markdown += `| [${contributor}](https://github.com/${contributor}) | ${data.reviewsReceived} | ${data.approvals} | ${data.rejections} | ${data.changesRequested} | ${data.prsOpened} | ${data.prsClosed} | ${data.issuesCreated} |\n`
  })
  markdown += "\n"

  // Generate changes by repository
  markdown += "## Changes by Repository\n\n"
  const prsByRepo = prs.reduce(
    (acc, pr) => {
      if (!acc[pr.repo]) {
        acc[pr.repo] = []
      }
      acc[pr.repo].push(pr)
      return acc
    },
    {} as Record<string, AnalyzedPR[]>,
  )

  Object.entries(prsByRepo).forEach(([repo, repoPRs]) => {
    markdown += `### [${repo}](https://github.com/${repo})\n\n`
    markdown += "| PR # | Impact | Contributor | Description |\n"
    markdown += "|------|--------|-------------|-------------|\n"
    repoPRs
      .sort((a, b) => {
        const impactOrder = { Major: 0, Minor: 1, Tiny: 2 }
        return impactOrder[a.impact] - impactOrder[b.impact]
      })
      .forEach((pr) => {
        markdown += `| [#${pr.number}](${pr.url}) | ${impactIcon(
          pr.impact,
        )} | ${pr.contributor} | ${pr.description} |\n`
      })
    markdown += "\n"
  })

  // Generate changes by contributor
  markdown += "## Changes by Contributor\n\n"
  const prsByContributor = prs.reduce(
    (acc, pr) => {
      if (!acc[pr.contributor]) {
        acc[pr.contributor] = []
      }
      acc[pr.contributor].push(pr)
      return acc
    },
    {} as Record<string, AnalyzedPR[]>,
  )

  Object.entries(prsByContributor).forEach(([contributor, contributorPRs]) => {
    markdown += `### [${contributor}](https://github.com/${contributor})\n\n`
    markdown += "| PR # | Impact | Description |\n"
    markdown += "|------|--------|-------------|\n"
    contributorPRs.forEach((pr) => {
      markdown += `| [#${pr.number}](${pr.url}) | ${impactIcon(pr.impact)} | ${
        pr.description
      } |\n`
    })
    markdown += "\n"
  })

  return markdown
}
