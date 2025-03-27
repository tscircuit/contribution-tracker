/**
 * Calculates sponsorship amount based on weekly stars over the past 4 weeks
 * @param weeklyStars Array of star counts for the past 4 weeks
 * @returns Calculated sponsorship amount in USD
 */
export function getSponsorshipAmount({
  weeklyStars,
  highScore,
}: { weeklyStars: number[]; highScore: number }): number {
  // Calculate the median of stars
  const sortedStars = [...weeklyStars].sort((a, b) => a - b)
  const medianStars =
    sortedStars.length % 2 === 0
      ? (sortedStars[sortedStars.length / 2 - 1] +
          sortedStars[sortedStars.length / 2]) /
        2
      : sortedStars[Math.floor(sortedStars.length / 2)]
  const maxStarCount = Math.max(...weeklyStars)

  // Determine amount based on median stars
  if (medianStars >= 3) {
    return 400
  } else if (medianStars >= 2.5) {
    return 200
  } else if (medianStars >= 2) {
    return 150
  } else if (medianStars >= 1.5) {
    return 70
  } else if (medianStars >= 1) {
    return 50
  } else if (maxStarCount >= 2) {
    return 25
  } else if (maxStarCount >= 1) {
    return 15
  } else if (highScore >= 3) {
    return 5
  }

  return 0
}
