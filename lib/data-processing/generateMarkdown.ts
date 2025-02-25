import type { AnalyzedPR, ContributorStats } from "lib/types"
import { getContributorScore } from "../scoring"

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
  contributorIdToStatsMap: Record<string, ContributorStats>,
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

  markdown +=
    "| Contributor | 🐳 Major | 🐙 Minor | 🐌 Tiny | ⭐ | Issues Created |\n"
  markdown +=
    "|-------------|---------|---------|---------|-----|----------------|\n"

  // Group PRs by contributor
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

  // Calculate scores for each contributor
  const contributorScores: Record<string, any> = {}

  Object.entries(prsByContributor).forEach(([contributor, contributorPRs]) => {
    // Get contributor stats if they exist
    const stats = contributorIdToStatsMap[contributor]

    // Calculate score
    const scoreResult = getContributorScore(contributorPRs, stats)

    // Store the result
    contributorScores[contributor] = {
      ...scoreResult,
      issuesCreated: stats?.issuesCreated ?? 0,
    }

    // Update the contributor's stats with the new score and counts
    if (stats) {
      stats.score = scoreResult.score
      stats.major = scoreResult.major
      stats.minor = scoreResult.minor
      stats.tiny = scoreResult.tiny
      stats.stars = scoreToStarString(scoreResult.score)
    }
  })

  // Sort contributors by score
  const sortedContributors = Object.entries(contributorScores).sort(
    (a, b) => b[1].score - a[1].score,
  )

  // Generate table rows
  for (const [contributor, effort] of sortedContributors) {
    markdown += `| [${contributor}](#${contributor.replace(/\s/g, "-")}) | ${effort.major} | ${effort.minor} | ${effort.tiny} | ${scoreToStarString(effort.score)} | ${effort.issuesCreated} |\n`
  }
  markdown += "\n"

  // Generate Review Table
  markdown += "## Review Table\n\n"

  const columnTitleToDescription = {
    "Reviews Received":
      "Number of reviews received for PRs for this contributor",
    "Approvals Received":
      "Number of approvals received for PRs this contributor authored",
    "Rejections Received":
      "Number of rejections received for PRs this contributor authored",
    "PRs Opened": "Number of PRs opened by this contributor",
    "Issues Created": "Number of issues created by this contributor",
    "Bountied Issues":
      "Number of issues this contributor created with a bounty",
    "Bountied Issue $":
      "Total bounty amount placed on issues authored by this contributor",
  }

  markdown += Object.entries(columnTitleToDescription)
    .map(
      ([title, description]) =>
        `[${title.toLowerCase().replace(/\s/g, "-")}-hover]: ## "${description}"`,
    )
    .join("\n")
  markdown += "\n\n"

  const columnTitleToPropName: Record<
    string,
    keyof ContributorStats | "contributor"
  > = {
    Contributor: "contributor",
    "Reviews Received": "reviewsReceived",
    "Approvals Received": "approvalsReceived",
    "Rejections Received": "rejectionsReceived",
    Approvals: "approvalsGiven",
    Rejections: "rejectionsGiven",
    "PRs Opened": "prsOpened",
    "PRs Merged": "prsMerged",
    "Issues Created": "issuesCreated",
    "Bountied Issues": "bountiedIssuesCount",
    "Bountied Issue $": "bountiedIssuesTotal",
  }

  const columnTitles = Object.keys(columnTitleToPropName)

  markdown += "|"
  columnTitles.forEach((column) => {
    markdown += ` ${column} |`
  })
  markdown += "\n"

  markdown += "|"
  columnTitles.forEach(() => {
    markdown += "---|"
  })
  markdown += "\n"

  Object.entries(contributorIdToStatsMap).forEach(
    ([contributor, stats]: any[]) => {
      markdown += "|"
      columnTitles.forEach((columnTitle) => {
        if (columnTitle.toLowerCase().trim() === "contributor") {
          markdown += ` [${contributor}](#${contributor.replace(/\s/g, "-")}) |`
          return
        }
        markdown += ` ${stats[columnTitleToPropName[columnTitle]]} |`
      })
      markdown += "\n"
    },
  )
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
        return (
          impactOrder[a.impact as keyof typeof impactOrder] -
          impactOrder[b.impact as keyof typeof impactOrder]
        )
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
  // Reuse prsByContributor from above

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
