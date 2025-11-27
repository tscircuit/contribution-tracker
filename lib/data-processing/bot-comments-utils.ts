import type { AnalyzedPR } from "lib/types"

type PRComment = { user: { login: string } | null; body?: string | null }

export const extractBotAnalysis = (
  comments: PRComment[],
): AnalyzedPR | undefined => {
  const botComment = comments.find(
    (comment) =>
      comment.user?.login === "tscircuitbot" &&
      comment.body?.includes("ANALYSIS_DATA:"),
  )
  if (!botComment?.body) return undefined
  const match = botComment.body.match(/<!-- ANALYSIS_DATA:(.+?) -->/)
  if (!match) return undefined
  try {
    const data = JSON.parse(match[1]) as AnalyzedPR
    if (data.starRating !== undefined && data.description && data.impact) {
      return data
    }
  } catch {}
  return undefined
}
