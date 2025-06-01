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
    "| Contributor | 🐳 Major | 🐙 Minor | 🐌 Tiny | ⭐ | Issues Created | Discussion Contributions |\n"
  markdown +=
    "|-------------|---------|---------|---------|-----|----------------|--------------------------|\n"

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
  const sortedContributors = Object.entries(contributorScores).sort((a, b) => {
    return b[1].score - a[1].score
  })

  // Find contributors who exist in stats but not in sorted contributors
  const contributorsHavingOnlyDiscussions = Object.keys(
    contributorIdToStatsMap,
  ).filter(
    (contributor) =>
      !sortedContributors.some(
        ([sortedContributor]) => sortedContributor === contributor,
      ),
  )

  for (const contributor of contributorsHavingOnlyDiscussions) {
    // Add score for GitHub Discussions contributions
    // 1 point for each Participating comment (minor contribution)
    // 2 points for each Great Informative comment (major contribution)
    // 4 points for each Incredible comment (two major contributions)
    const discussionNormalComments =
      contributorIdToStatsMap[contributor].discussionNormalComments || 0
    const discussionGreatInformativeComments =
      contributorIdToStatsMap[contributor].discussionGreatInformativeComments ||
      0
    const discussionIncredibleComments =
      contributorIdToStatsMap[contributor].discussionIncredibleComments || 0

    if (!contributorIdToStatsMap[contributor].score) {
      contributorIdToStatsMap[contributor].score = 0
    }
  }

  // Generate table rows
  for (const [contributor, effort] of sortedContributors) {
    // Calculate discussion contributions summary
    const discussionNormalComments =
      contributorIdToStatsMap[contributor].discussionNormalComments || 0
    const discussionGreatInformativeComments =
      contributorIdToStatsMap[contributor].discussionGreatInformativeComments ||
      0
    const discussionIncredibleComments =
      contributorIdToStatsMap[contributor].discussionIncredibleComments || 0
    const discussionSummary = `${discussionNormalComments}🔹 ${discussionGreatInformativeComments}🔶 ${discussionIncredibleComments}💎`

    markdown += `| [${contributor}](#${contributor.replace(/\s/g, "-")}) | ${
      effort.major
    } | ${effort.minor} | ${effort.tiny} | ${scoreToStarString(
      effort.score,
    )} | ${effort.issuesCreated} | ${discussionSummary} |\n`
  }

  for (const contributor of contributorsHavingOnlyDiscussions) {
    const stats = contributorIdToStatsMap[contributor]
    if (!contributorIdToStatsMap[contributor].discussionComments) continue
    // Calculate discussion contributions summary
    const discussionNormalComments =
      contributorIdToStatsMap[contributor].discussionNormalComments || 0
    const discussionGreatInformativeComments =
      contributorIdToStatsMap[contributor].discussionGreatInformativeComments ||
      0
    const discussionIncredibleComments =
      contributorIdToStatsMap[contributor].discussionIncredibleComments || 0
    const discussionSummary = `${discussionNormalComments}🔹 ${discussionGreatInformativeComments}🔶 ${discussionIncredibleComments}💎`

    markdown += `| [${contributor}](#${contributor.replace(
      /\s/g,
      "-",
    )}) | 0 | 0 | 0 | ${scoreToStarString(stats.score || 0)} | ${
      stats?.issuesCreated ?? 0
    } | ${discussionSummary} |\n`
  }
  markdown += "\n"

  // Add explanation for discussion contribution symbols
  markdown += "### Discussion Contribution Legend\n\n"
  markdown += "- 🔹 Normal Comments: Basic participation with minimal effort\n"
  markdown +=
    "- 🔶 Great Informative Comments: Thoughtful participation that adds value\n"
  markdown +=
    "- 💎 Incredible Comments: Exceptional participation with high-quality content\n\n"

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
        `[${title
          .toLowerCase()
          .replace(/\s/g, "-")}-hover]: ## "${description}"`,
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
    markdown +=
      "| PR # | Impact | Contributor | Description | Milestone Aligned |\n"
    markdown +=
      "|------|--------|-------------|-------------|-------------------|\n"
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
        )} | ${pr.contributor} | ${pr.description} | ${
          pr.isAlignedWithMilestone ? "✅" : "❌"
        } |\n`
      })
    markdown += "\n"
  })

  // Generate changes by contributor
  markdown += "## Changes by Contributor\n\n"
  // Reuse prsByContributor from above

  Object.entries(prsByContributor).forEach(([contributor, contributorPRs]) => {
    markdown += `### [${contributor}](https://github.com/${contributor})\n\n`
    markdown += "| PR # | Impact | Description | Milestone Aligned |\n"
    markdown += "|------|--------|-------------|-------------------|\n"
    contributorPRs.forEach((pr) => {
      markdown += `| [#${pr.number}](${pr.url}) | ${impactIcon(pr.impact)} | ${
        pr.description
      } | ${pr.isAlignedWithMilestone ? "✅" : "❌"} |\n`
    })
    markdown += "\n"
  })

  // Generate Repository Owners Table
  markdown += "## Repository Owners\n\n"
  markdown += "| Repository | Codeowners | Paths | Edit |\n"
  markdown += "|------------|------------|-------|------|\n"

  const repoOwnersWithPaths = Object.entries(contributorIdToStatsMap)
    .filter(([_, stats]) => stats.reposOwned && stats.reposOwned.length > 0)
    .reduce(
      (ownersMap, [ownerName, contributorStats]) => {
        contributorStats.reposOwned?.forEach(({ repo: repoName, paths }) => {
          if (!ownersMap[repoName]) {
            ownersMap[repoName] = { owners: [], paths: [] }
          }
          if (!ownersMap[repoName].owners.includes(ownerName)) {
            ownersMap[repoName].owners.push(ownerName)
          }
          if (paths && paths.length > 0) {
            paths.forEach((path) => {
              if (!ownersMap[repoName].paths.includes(path)) {
                ownersMap[repoName].paths.push(path)
              }
            })
          }
        })
        return ownersMap
      },
      {} as Record<string, { owners: string[]; paths: string[] }>,
    )

  Object.entries(repoOwnersWithPaths).forEach(([repo, { owners, paths }]) => {
    const ownersLinks = owners
      .map((owner) => `[${owner}](https://github.com/${owner})`)
      .join(", ")
    markdown += `| [${repo}](https://github.com/${repo}) | ${ownersLinks} | ${paths.join(", ")} | [Edit](https://github.com/${repo}/edit/main/.github/CODEOWNERS) |\n`
  })
  markdown += "\n"

  return markdown
}
