import { MAINTAINERS } from "./maintainers"

export const MAINTAINER_BASE = {
  maintainer1: 200,
  maintainer2: 350,
  maintainer3: 500,
  maintainer4: 850,
  maintainer5: 1300,
  maintainer6: 2000,
}

export const SPONSORSHIP_TIERS = [
  { condition: "minStarCount >= 3", amount: 700 },
  { condition: "medianStars >= 3", amount: 550 },
  { condition: "medianStars >= 2.5", amount: 400 },
  { condition: "medianStars >= 2", amount: 250 },
  { condition: "medianStars >= 1.5", amount: 120 },
  { condition: "medianStars >= 1", amount: 75 },
  { condition: "maxStarCount >= 2", amount: 45 },
  { condition: "maxStarCount >= 1", amount: 30 },
  { condition: "highScore >= 3 (and all stars = 0)", amount: 10 },
]
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
    baseAmount = SPONSORSHIP_TIERS[0].amount
  } else if (medianStars >= 3) {
    baseAmount = SPONSORSHIP_TIERS[1].amount
  } else if (medianStars >= 2.5) {
    baseAmount = SPONSORSHIP_TIERS[2].amount
  } else if (medianStars >= 2) {
    baseAmount = SPONSORSHIP_TIERS[3].amount
  } else if (medianStars >= 1.5) {
    baseAmount = SPONSORSHIP_TIERS[4].amount
  } else if (medianStars >= 1) {
    baseAmount = SPONSORSHIP_TIERS[5].amount
  } else if (maxStarCount >= 2) {
    baseAmount = SPONSORSHIP_TIERS[6].amount
  } else if (maxStarCount >= 1) {
    baseAmount = SPONSORSHIP_TIERS[7].amount
  } else if (highScore >= 3) {
    baseAmount = SPONSORSHIP_TIERS[8].amount
  }

  return baseAmount + maintainerBase
}
