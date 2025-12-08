import type { AnalyzedPR } from "lib/types"
import fs from "fs"

export interface StoredPrAnalysis extends AnalyzedPR {
  tag: string
}

const PR_ANALYSIS_DIR = "pr-analysis"

export const loadPrAnalysis = (weekStartDate: string): StoredPrAnalysis[] => {
  const filePath = `${PR_ANALYSIS_DIR}/${weekStartDate}.json`
  if (!fs.existsSync(filePath)) {
    return []
  }
  try {
    const content = fs.readFileSync(filePath, "utf-8")
    return JSON.parse(content) as StoredPrAnalysis[]
  } catch (e) {
    console.error(`Failed to load PR analysis from ${filePath}`, e)
    return []
  }
}

export const getExistingPrAnalysis = (
  existingAnalysis: StoredPrAnalysis[],
  repo: string,
  prNumber: number,
): StoredPrAnalysis | undefined => {
  const tag = `${repo}#${prNumber}`
  return existingAnalysis.find((pr) => pr.tag === tag)
}

export const storePrAnalysis = (
  mergedPrsWithAnalysis: AnalyzedPR[],
  weekStartDate: string,
) => {
  if (!fs.existsSync(PR_ANALYSIS_DIR)) {
    fs.mkdirSync(PR_ANALYSIS_DIR, { recursive: true })
  }

  const existingAnalysis = loadPrAnalysis(weekStartDate)
  const existingTags = new Set(existingAnalysis.map((pr) => pr.tag))

  const newPrs = mergedPrsWithAnalysis
    .filter((pr) => !existingTags.has(`${pr.repo}#${pr.number}`))
    .map((pr) => ({
      tag: `${pr.repo}#${pr.number}`,
      ...pr,
    }))

  const allAnalysis = [...existingAnalysis, ...newPrs]

  fs.writeFileSync(
    `${PR_ANALYSIS_DIR}/${weekStartDate}.json`,
    JSON.stringify(allAnalysis, null, 2),
  )
  console.log(
    `Generated pr-analysis/${weekStartDate}.json (${newPrs.length} new PRs added)`,
  )
}
