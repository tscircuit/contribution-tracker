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
  repoOwnersMap: Record<string, string[]> = {},
): Promise<string> {
  let markdown = `# Contribution Overview ${weekStart}\n\n`

  // Remove bot accounts from contributor data
  Object.keys(contributorIdToStatsMap).forEach((contributor) => {
    if (contributor.includes("[bot]")) {
      delete contributorIdToStatsMap[contributor]
    }
  })

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
    "| Contributor | 🐳 Major | 🐙 Minor | 🐌 Tiny | ⭐ | Score | Discussion Contributions |\n"
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
    const scoreResult = getContributorScore(contributorPRs, stats, contributor)

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
    )} | ${effort.score} | ${discussionSummary} |\n`
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
    Score: "score",
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
    ([contributor, stats]: [string, ContributorStats]) => {
      markdown += "|"
      columnTitles.forEach((columnTitle) => {
        if (columnTitle.toLowerCase().trim() === "contributor") {
          markdown += ` [${contributor}](#${contributor.replace(/\s/g, "-")}) |`
          return
        }
        markdown += ` ${stats[columnTitleToPropName[columnTitle] as keyof ContributorStats]} |`
      })
      markdown += "\n"
    },
  )
  markdown += "\n"

  // Generate pie chart for top 7 repos by points
  markdown += "## Top 7 Repositories by Contribution Points\n\n"

  // Calculate points by repository
  const repoPoints = prs.reduce(
    (acc, pr) => {
      const points = pr.impact === "Major" ? 4 : pr.impact === "Minor" ? 2 : 1
      acc[pr.repo] = (acc[pr.repo] || 0) + points
      return acc
    },
    {} as Record<string, number>,
  )

  // Sort repos by points and take top 7
  const top7Repos = Object.entries(repoPoints)
    .sort(([, a], [, b]) => b - a)
    .slice(0, 7)

  // Generate Mermaid pie chart for top repos by points
  markdown += "```mermaid\npie\n"
  top7Repos.forEach(([repo, points]) => {
    markdown += `    "${repo}" : ${points}\n`
  })
  markdown += "```\n\n"

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
    const majorMinorPRs = repoPRs.filter((pr) => pr.impact !== "Tiny")
    const tinyPRs = repoPRs.filter((pr) => pr.impact === "Tiny")

    markdown += `### [${repo}](https://github.com/${repo})\n\n`

    if (majorMinorPRs.length > 0) {
      markdown += "| PR # | Impact | Rating | Contributor | Description |\n"
      markdown += "|------|--------|--------|-------------|-------------|\n"
      majorMinorPRs
        .sort((a, b) => {
          return (b.starRating ?? 0) - (a.starRating ?? 0)
        })
        .forEach((pr) => {
          markdown += `| [#${pr.number}](${pr.url}) | ${impactIcon(pr.impact)} | ${"⭐".repeat(pr.starRating ?? 0)} | ${pr.contributor} | ${pr.description} |\n`
        })
    }

    if (tinyPRs.length > 0) {
      markdown += `\n<details>\n<summary>🐌 Tiny Contributions (${tinyPRs.length})</summary>\n\n`
      markdown += "| PR # | Impact | Contributor | Description |\n"
      markdown += "|------|--------|-------------|-------------|\n"
      tinyPRs.forEach((pr) => {
        markdown += `| [#${pr.number}](${pr.url}) | ${impactIcon(
          pr.impact,
        )} | ${pr.contributor} | ${pr.description} |\n`
      })
      markdown += "\n</details>\n"
    }

    markdown += "\n"
  })

  // Generate changes by contributor
  markdown += "## Changes by Contributor\n\n"

  Object.entries(prsByContributor).forEach(([contributor, contributorPRs]) => {
    const majorMinorPRs = contributorPRs
      .filter((pr) => pr.impact !== "Tiny")
      .sort((a, b) => {
        return (b.starRating ?? 0) - (a.starRating ?? 0)
      })
    const tinyPRs = contributorPRs.filter((pr) => pr.impact === "Tiny")

    markdown += `### [${contributor}](https://github.com/${contributor})\n\n`

    if (majorMinorPRs.length > 0) {
      markdown += "| PRs # | Impact | Rating | Description |\n"
      markdown += "|------|--------|--------|-------------|\n"
      majorMinorPRs.forEach((pr) => {
        markdown += `| [#${pr.number}](${pr.url}) | ${impactIcon(
          pr.impact,
        )} | ${"⭐".repeat(pr.starRating ?? 0)} | ${pr.description} |\n`
      })
    }

    if (tinyPRs.length > 0) {
      markdown += `\n<details>\n<summary>🐌 Tiny Contributions (${tinyPRs.length})</summary>\n\n`
      markdown += "| PR # | Impact | Description |\n"
      markdown += "|------|--------|-------------|\n"
      tinyPRs.forEach((pr) => {
        markdown += `| [#${pr.number}](${pr.url}) | ${impactIcon(pr.impact)} | ${
          pr.description
        } |\n`
      })
      markdown += "\n</details>\n"
    }

    markdown += "\n"
  })

  // Generate Repository Owners Table
  markdown += "## Repository Owners\n\n"
  markdown += "| Repository | Codeowners |\n"
  markdown += "|------------|------------|\n"

  Object.entries(repoOwnersMap).forEach(([repo, owners]) => {
    const ownersLinks = owners.map(
      (owner) => `[${owner}](https://github.com/${owner})`,
    )

    const repoDisplayName = repo.replace(/^tscircuit\//, "")
    if (owners.length > 0) {
      markdown += `| [${repoDisplayName}](https://github.com/${repo}/blob/main/.github/CODEOWNERS) | ${[
        ...new Set(ownersLinks),
      ].join(", ")}\n`
    }
  })
  markdown += "\n"

  // Generate Repos by Owner Table
  markdown += "## Repositories by Owner\n\n"
  markdown += "| User | Repo |\n"
  markdown += "|------|------|\n"

  // Group repos by owner
  const ownerToReposMap: Record<string, string[]> = {}
  Object.entries(repoOwnersMap).forEach(([repo, owners]) => {
    owners.forEach((owner) => {
      if (!ownerToReposMap[owner]) {
        ownerToReposMap[owner] = []
      }
      if (!ownerToReposMap[owner].includes(repo)) {
        ownerToReposMap[owner].push(repo)
      }
    })
  })

  // Generate table with grouped repos
  Object.entries(ownerToReposMap).forEach(([owner, repos]) => {
    repos.forEach((repo, index) => {
      const userCell =
        index === 0 ? `[${owner}](https://github.com/${owner})` : ""
      const repoDisplayName = repo.replace(/^tscircuit\//, "")
      markdown += `| ${userCell} | [${repoDisplayName}](https://github.com/${repo}/blob/main/.github/CODEOWNERS) |\n`
    })
  })
  markdown += "\n"

  return markdown
}
