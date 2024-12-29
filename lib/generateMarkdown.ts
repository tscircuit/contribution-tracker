import type { AnalyzedPR, ContributorStats } from "lib/types"

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

      // Track number of issues created
      acc[pr.contributor].issuesCreated =
        contributorIdToStatsMap[pr.contributor]?.issuesCreated ?? 0 // Use fallback to 0

      return acc
    },
    {} as Record<string, Record<string, number>>,
  )

  // Then add bounty points separately for each contributor
  Object.entries(contributorEffort).forEach(([contributor, effort]) => {
    const bountiedAmount =
      contributorIdToStatsMap[contributor]?.bountiedIssuesTotal || 0
    // Convert bounty amount to minor contributions ($10 = 1 minor contribution)
    let minorContributionsFromBounties = Math.floor(bountiedAmount / 10)
    // Cap at 10 minor contributions as per requirements
    minorContributionsFromBounties = Math.min(
      minorContributionsFromBounties,
      10,
    )
    // Add to score (minor contributions are worth 2 points each)
    effort.score += minorContributionsFromBounties * 2
  })

  const sortedContributors = Object.entries(contributorEffort).sort(
    (a, b) => b[1].score - a[1].score,
  )
  for (const [contributor, effort] of sortedContributors) {
    markdown += `| [${contributor}](#${contributor.replace(/\s/g, "-")}) | ${effort.Major} | ${effort.Minor} | ${effort.Tiny} | ${scoreToStarString(effort.score)} | ${effort.issuesCreated} |\n`

    // Update the contributor's stats with the new score
    contributorIdToStatsMap[contributor].score = effort.score
  }
  markdown += "\n"

  // Generate Review Table
  markdown += "## Review Table\n\n"

  // Debug: Print current state of contributorIdToStatsMap
  console.log("Debug: Full contributor stats:")
  Object.entries(contributorIdToStatsMap).forEach(([contributor, stats]) => {
    console.log(`${contributor}:`, stats)
  })

  const columnTitleToDescription = {
    Contributor: "GitHub username of the contributor",
    "Reviews Received": "Number of reviews received for PRs for this contributor",
    "Approvals Given": "Number of approvals this contributor has given to other PRs",
    "Changes Requested Given": "Number of changes this contributor has requested on other PRs",
    "Approvals Received": "Number of approvals received for PRs this contributor authored",
    "Changes Requested": "Number of changes requested for PRs this contributor authored",
    "PRs Opened": "Number of PRs opened by this contributor",
    "PRs Closed": "Number of PRs closed by this contributor",
    "Issues Created": "Number of issues created by this contributor",
    "Bountied Issues": "Number of issues this contributor created with a bounty",
    "Bountied Issue $": "Total bounty amount placed on issues authored by this contributor",
  }

  markdown += Object.entries(columnTitleToDescription)
    .map(
      ([title, description]) =>
        `[${title.toLowerCase().replace(/\s/g, "-")}-hover]: ## "${description}"`,
    )
    .join("\n")
  markdown += "\n\n"

  // Define column title to property name mapping
  const columnTitleToPropName: Record<
    string,
    keyof ContributorStats | "contributor"
  > = {
    "Contributor": "contributor",
    "Reviews Received": "reviewsReceived",
    "Approvals Given": "approvalsGiven",
    "Changes Requested Given": "changesRequestedGiven",
    "Approvals Received": "approvalsReceived",
    "Changes Requested": "changesRequested",
    "PRs Opened": "prsOpened",
    "PRs Closed": "prsMerged",
    "Issues Created": "issuesCreated",
    "Bountied Issues": "bountiedIssuesCount",
    "Bountied Issue $": "bountiedIssuesTotal"
  }

  // Debug: Print all contributor stats to verify data
  console.log("\nDebug: All contributor stats:")
  Object.entries(contributorIdToStatsMap).forEach(([contributor, stats]) => {
    console.log(`${contributor}:`, {
      approvalsGiven: stats.approvalsGiven,
      changesRequested: stats.changesRequested,
      reviewsReceived: stats.reviewsReceived,
      approvalsReceived: stats.approvalsReceived
    })
  })

  // Define explicit column order
  const columnTitles = [
    "Contributor",
    "Reviews Received",
    "Approvals Given",
    "Changes Requested Given",
    "Approvals Received",
    "Changes Requested",
    "PRs Opened",
    "PRs Closed",
    "Issues Created",
    "Bountied Issues",
    "Bountied Issue $"
  ]

  // Debug: Print column titles and their property mappings
  console.log("\nDebug: Column titles and their property mappings:")
  columnTitles.forEach(title => {
    const propName = columnTitleToPropName[title]
    console.log(`${title} -> ${propName || 'undefined'}`)
  })

  // Debug: Print contributor stats before table generation
  console.log("\nDebug: Contributor Stats before table generation:")
  Object.entries(contributorIdToStatsMap).forEach(([contributor, stats]) => {
    console.log(`${contributor}:`, {
      approvalsGiven: stats.approvalsGiven,
      changesRequested: stats.changesRequested,
      reviewsReceived: stats.reviewsReceived,
      approvalsReceived: stats.approvalsReceived,
      score: stats.score
    })
  })

  // Debug: Print column titles and their property mappings
  console.log("\nDebug: Column Titles and Property Mappings:")
  columnTitles.forEach(title => {
    console.log(`${title} -> ${columnTitleToPropName[title]}`)
  })

  // Debug: Print current state before table generation
  console.log("Debug: Using explicit column order:", columnTitles)
  console.log("Debug: First contributor stats:", Object.entries(contributorIdToStatsMap)[0])

  // Ensure all column titles have corresponding property mappings
  Object.keys(columnTitleToPropName).forEach(title => {
    if (!columnTitles.includes(title)) {
      console.warn(`Warning: Column title "${title}" exists in mapping but not in columnTitles array`)
    }
  })
  columnTitles.forEach(title => {
    if (!columnTitleToPropName[title] && title !== "Contributor") {
      console.warn(`Warning: Column title "${title}" exists in columnTitles array but not in mapping`)
    }
  })

  // Generate table header with all defined columns
  const tableHeader = columnTitles.map(title => ` ${title} `).join("|")
  const tableSeparator = columnTitles.map(() => "-------------").join("|")
  
  markdown += `|${tableHeader}|\n`
  markdown += `|${tableSeparator}|\n`
  
  console.log("Debug: Generated table header:")
  console.log(`|${tableHeader}|`)
  console.log(`|${tableSeparator}|`)

  // Generate table rows with enhanced debug logging
  Object.entries(contributorIdToStatsMap).forEach(
    ([contributor, stats]: any[]) => {
      console.log(`\nDebug: Processing contributor ${contributor}:`, {
        reviewsReceived: stats.reviewsReceived,
        approvalsGiven: stats.approvalsGiven,
        changesRequestedGiven: stats.changesRequestedGiven,
        approvalsReceived: stats.approvalsReceived,
        changesRequested: stats.changesRequested
      })
      
      let row = "|"
      columnTitles.forEach((columnTitle) => {
        if (columnTitle === "Contributor") {
          row += ` [${contributor}](https://github.com/${contributor}) |`
          return
        }
        const propName = columnTitleToPropName[columnTitle]
        if (!propName) {
          console.error(`Error: No property mapping found for column "${columnTitle}"`)
          row += ` 0 |`
          return
        }
        const value = stats[propName] ?? 0
        console.log(`Debug: ${contributor} - ${columnTitle} (${propName}) = ${value}`)
        row += ` ${value} |`
      })
      console.log(`Debug: Generated row: ${row}`)
      markdown += row + "\n"
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
