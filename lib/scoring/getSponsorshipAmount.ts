/**
 * Calculates sponsorship amount based on weekly stars over the past 4 weeks
 * @param weeklyStars Array of star counts for the past 4 weeks
 * @param highScore Highest recorded score
 * @returns Calculated sponsorship amount in USD
 */
export function getSponsorshipAmount({
  weeklyStars,
  highScore,
}: { weeklyStars: number[]; highScore: number }): number {
  const SPONSORSHIP_MULTIPLIER = 1.25
  // Calculate the median of stars
  const sortedStars = [...weeklyStars].sort((a, b) => a - b)
  const medianStars =
    sortedStars.length % 2 === 0
      ? (sortedStars[sortedStars.length / 2 - 1] +
          sortedStars[sortedStars.length / 2]) /
        2
      : sortedStars[Math.floor(sortedStars.length / 2)]
  const maxStarCount = Math.max(...weeklyStars)

  // Determine base amount based on median stars
  let baseAmount = 0
  if (medianStars >= 3) {
    baseAmount = 400
  } else if (medianStars >= 2.5) {
    baseAmount = 200
  } else if (medianStars >= 2) {
    baseAmount = 150
  } else if (medianStars >= 1.5) {
    baseAmount = 70
  } else if (medianStars >= 1) {
    baseAmount = 50
  } else if (maxStarCount >= 2) {
    baseAmount = 25
  } else if (maxStarCount >= 1) {
    baseAmount = 15
  } else if (highScore >= 3) {
    baseAmount = 5
  }

  return baseAmount * SPONSORSHIP_MULTIPLIER
}
