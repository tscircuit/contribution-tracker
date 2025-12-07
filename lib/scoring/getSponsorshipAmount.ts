import { MAINTAINERS } from "./maintainers"

export const MAINTAINER_BASE = {
  maintainer1: 200,
  maintainer2: 350,
  maintainer3: 500,
  maintainer4: 850,
  maintainer5: 1300,
  maintainer6: 2000,
}

// Tiers checked in order - first match wins
export const MIN_STAR_TIERS = [{ threshold: 3, amount: 700 }]

export const MEDIAN_STAR_TIERS = [
  { threshold: 3, amount: 550 },
  { threshold: 2.5, amount: 400 },
  { threshold: 2, amount: 250 },
  { threshold: 1.5, amount: 120 },
  { threshold: 1, amount: 75 },
]

export const MAX_STAR_TIERS = [
  { threshold: 2, amount: 45 },
  { threshold: 1, amount: 30 },
]

export const HIGH_SCORE_TIERS = [{ threshold: 3, amount: 10 }]
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

  // Determine base amount - check tiers in order
  let baseAmount = 0

  // Check min star tiers first
  for (const tier of MIN_STAR_TIERS) {
    if (minStarCount >= tier.threshold) {
      baseAmount = tier.amount
      break
    }
  }

  // Check median star tiers
  if (baseAmount === 0) {
    for (const tier of MEDIAN_STAR_TIERS) {
      if (medianStars >= tier.threshold) {
        baseAmount = tier.amount
        break
      }
    }
  }

  // Check max star tiers
  if (baseAmount === 0) {
    for (const tier of MAX_STAR_TIERS) {
      if (maxStarCount >= tier.threshold) {
        baseAmount = tier.amount
        break
      }
    }
  }

  // Check high score tiers (only if all stars = 0)
  if (baseAmount === 0) {
    for (const tier of HIGH_SCORE_TIERS) {
      if (highScore >= tier.threshold) {
        baseAmount = tier.amount
        break
      }
    }
  }

  return baseAmount + maintainerBase
}
