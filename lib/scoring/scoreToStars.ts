export const SCORE_TO_STAR_THRESHOLDS = [
  { minScore: 162, starString: "👑👑👑", starCount: 3 },
  { minScore: 122, starString: "👑👑", starCount: 3 },
  { minScore: 82, starString: "👑", starCount: 3 },
  { minScore: 50, starString: "⭐⭐⭐", starCount: 3 },
  { minScore: 11, starString: "⭐⭐", starCount: 2 },
  { minScore: 4, starString: "⭐", starCount: 1 },
  { minScore: 0, starString: "", starCount: 0 },
] as const

export const SPONSORSHIP_STAR_SCORE_THRESHOLDS =
  SCORE_TO_STAR_THRESHOLDS.filter(
    (threshold) => threshold.starCount > 0 && threshold.minScore <= 50,
  ).map((threshold) => ({
    stars: threshold.starCount,
    minScore: threshold.minScore,
  }))

export const scoreToStarString = (score: number) => {
  for (const threshold of SCORE_TO_STAR_THRESHOLDS) {
    if (score >= threshold.minScore) {
      return threshold.starString
    }
  }
  return ""
}
