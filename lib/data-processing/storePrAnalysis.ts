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
  const analysesByTag = new Map(
    existingAnalysis.map((pr) => [pr.tag, pr] as const),
  )
  let newCount = 0
  let updatedCount = 0

  for (const pr of mergedPrsWithAnalysis) {
    const tag = `${pr.repo}#${pr.number}`
    const existing = analysesByTag.get(tag)
    if (existing) updatedCount++
    else newCount++

    analysesByTag.set(tag, {
      ...existing,
      tag: `${pr.repo}#${pr.number}`,
      ...pr,
    })
  }

  fs.writeFileSync(
    `${PR_ANALYSIS_DIR}/${weekStartDate}.json`,
    JSON.stringify([...analysesByTag.values()], null, 2),
  )
  console.log(
    `Generated pr-analysis/${weekStartDate}.json (${newCount} added, ${updatedCount} refreshed)`,
  )
}
