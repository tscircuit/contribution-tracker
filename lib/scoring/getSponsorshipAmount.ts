import { MAINTAINERS } from "./maintainers"

const MAINTAINER_BASE = {
  maintainer1: 200,
  maintainer2: 350,
  maintainer3: 500,
  maintainer4: 2000,
}
/**
 * Calculates sponsorship amount based on weekly stars over the past 4 weeks
 * @param weeklyStars Array of star counts for the past 4 weeks
 * @param highScore Highest recorded score
 * @returns Calculated sponsorship amount in USD
 */
export function getSponsorshipAmount({
  weeklyStars,
  highScore,
  username,
}: { weeklyStars: number[]; highScore: number; username?: string }): number {
  // Calculate the median of stars
  const sortedStars = [...weeklyStars].sort((a, b) => a - b)
  const medianStars =
    sortedStars.length % 2 === 0
      ? (sortedStars[sortedStars.length / 2 - 1] +
          sortedStars[sortedStars.length / 2]) /
        2
      : sortedStars[Math.floor(sortedStars.length / 2)]
  const maxStarCount = Math.max(...weeklyStars)
  const minStarCount = Math.min(...weeklyStars)

  const maintainerBase =
    (username &&
      MAINTAINERS[username as keyof typeof MAINTAINERS] &&
      MAINTAINER_BASE[
        MAINTAINERS[
          username as keyof typeof MAINTAINERS
        ] as keyof typeof MAINTAINER_BASE
      ]) ||
    0

  // Determine base amount based on median stars
  let baseAmount = 0
  if (minStarCount >= 3) {
    baseAmount = 700
  } else if (medianStars >= 3) {
    baseAmount = 550
  } else if (medianStars >= 2.5) {
    baseAmount = 400
  } else if (medianStars >= 2) {
    baseAmount = 200
  } else if (medianStars >= 1.5) {
    baseAmount = 120
  } else if (medianStars >= 1) {
    baseAmount = 60
  } else if (maxStarCount >= 2) {
    baseAmount = 45
  } else if (maxStarCount >= 1) {
    baseAmount = 30
  } else if (highScore >= 3) {
    baseAmount = 10
  }

  return baseAmount + maintainerBase
}
