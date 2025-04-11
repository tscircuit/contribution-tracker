import type { AnalyzedPR } from "lib/types"
import fs from "fs"
export const storePrAnalysis = (
  mergedPrsWithAnalysis: AnalyzedPR[],
  startDate: string,
) => {
  // Ensure directory exists before writing
  const dir = "pr-analysis"
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true })
  }

  fs.writeFileSync(
    `${dir}/${startDate}.json`,
    JSON.stringify(
      mergedPrsWithAnalysis.map((pr) => ({
        tag: `${pr.repo}#${pr.number}`,
        ...pr,
      })),
      null,
      2,
    ),
    {},
  )
  console.log(`Generated pr-analysis/${startDate}.json`)
}
