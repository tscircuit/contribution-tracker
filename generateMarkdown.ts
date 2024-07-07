import type { AnalyzedPR } from "."

export async function generateMarkdown(
  prs: AnalyzedPR[],
  weekStart: string
): Promise<string> {
  let markdown = `# Contribution Overview ${weekStart}\n\n`

  // Generate Mermaid pie chart
  markdown += "## PRs by Repository\n\n"
  markdown += "```mermaid\npie\n"
  const repoCounts = prs.reduce((acc, pr) => {
    acc[pr.repo] = (acc[pr.repo] || 0) + 1
    return acc
  }, {} as Record<string, number>)
  Object.entries(repoCounts).forEach(([repo, count]) => {
    markdown += `    "${repo}" : ${count}\n`
  })
  markdown += "```\n\n"

  // Generate contributor overview table
  markdown += "## Contributor Overview\n\n"
  markdown += "| Contributor | Major | Minor | Other |\n"
  markdown += "|-------------|-------|-------|-------|\n"
  const contributorEffort = prs.reduce((acc, pr) => {
    if (!acc[pr.contributor]) {
      acc[pr.contributor] = { Major: 0, Minor: 0, Tiny: 0 }
    }
    acc[pr.contributor][pr.impact]++
    return acc
  }, {} as Record<string, Record<string, number>>)
  Object.entries(contributorEffort).forEach(([contributor, effort]) => {
    markdown += `| ${contributor} | ${effort.Major} | ${effort.Minor} | ${effort.Tiny} |\n`
  })
  markdown += "\n"

  // Generate changes by repository
  markdown += "## Changes by Repository\n\n"
  const prsByRepo = prs.reduce((acc, pr) => {
    if (!acc[pr.repo]) {
      acc[pr.repo] = []
    }
    acc[pr.repo].push(pr)
    return acc
  }, {} as Record<string, AnalyzedPR[]>)

  Object.entries(prsByRepo).forEach(([repo, repoPRs]) => {
    markdown += `### ${repo}\n\n`
    markdown += "| PR # | Impact | Contributor | Description |\n"
    markdown += "|------|--------|-------------|-------------|\n"
    repoPRs
      .sort((a, b) => {
        const impactOrder = { Major: 0, Minor: 1, Tiny: 2 }
        return impactOrder[a.impact] - impactOrder[b.impact]
      })
      .forEach((pr) => {
        markdown += `| [#${pr.number}](${pr.url}) | ${pr.impact} | ${pr.contributor} | ${pr.description} |\n`
      })
    markdown += "\n"
  })

  // Generate changes by contributor
  markdown += "## Changes by Contributor\n\n"
  const prsByContributor = prs.reduce((acc, pr) => {
    if (!acc[pr.contributor]) {
      acc[pr.contributor] = []
    }
    acc[pr.contributor].push(pr)
    return acc
  }, {} as Record<string, AnalyzedPR[]>)

  Object.entries(prsByContributor).forEach(([contributor, contributorPRs]) => {
    markdown += `### ${contributor}\n\n`
    markdown += "| PR # | Impact | Description |\n"
    markdown += "|------|--------|-------------|\n"
    contributorPRs.forEach((pr) => {
      markdown += `| [#${pr.number}](${pr.url}) | ${pr.impact} | ${pr.description} |\n`
    })
    markdown += "\n"
  })

  return markdown
}
