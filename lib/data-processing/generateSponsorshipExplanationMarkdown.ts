import {
  HIGH_SCORE_TIERS,
  MAINTAINER_SPONSORSHIP_SCORE_MULTIPLIER,
  MAINTAINER_BASE,
  MAX_STAR_TIERS,
  MEDIAN_STAR_TIERS,
  MIN_STAR_TIERS,
} from "../scoring/getSponsorshipAmount"

export const generateSponsorshipExplanationMarkdown = () => {
  let markdown = "# Sponsorship Calculation Explanation\n\n"
  markdown +=
    "This document explains how contribution points, scores, and sponsorship tiers are calculated. It exists outside the weekly overview so the contribution summary stays focused on work completed.\n\n"

  markdown += "## Contribution Points by Impact\n\n"
  markdown += "| Impact | Points |\n"
  markdown += "|--------|--------|\n"
  markdown += "| Major | 4 |\n"
  markdown += "| Minor | 2 |\n"
  markdown += "| Tiny | 1 |\n\n"

  markdown += "## Scoring & Sponsorship System\n\n"
  markdown += "### Overview\n\n"
  markdown +=
    "PRs are analyzed by AI and assigned a **star rating (1-3 stars)**. 4 and 5 star ratings can only be manually assigned by staff. Weekly scores use `2^(starRating - 1)` per PR (capped at 12 PRs per rating), plus review/discussion points.\n\n"

  markdown += "### Weekly Score → Star String\n\n"
  markdown += "| Score Range | Star String | Count Value |\n"
  markdown += "|------------|-------------|-------------|\n"
  markdown += "| 0-3 | (empty) | 0 stars |\n"
  markdown += "| 4-10 | ⭐ | 1 star |\n"
  markdown += "| 11-49 | ⭐⭐ | 2 stars |\n"
  markdown += "| 50-81 | ⭐⭐⭐ | 3 stars |\n"
  markdown += "| 82-121 | 👑 | 1 crown |\n"
  markdown += "| 122-161 | 👑👑 | 2 crowns |\n"
  markdown += "| 162+ | 👑👑👑 | 3 crowns |\n\n"
  markdown += "> Crowns count as 3 stars for sponsorship.\n\n"

  markdown += "### Monthly Sponsorship Calculation\n\n"
  markdown +=
    "The sponsorship system calculates monthly payments based on your **weekly star counts** over the complete weeks in that month (typically 4-5 weeks, Wednesday-Tuesday format).\n\n"

  markdown += "**Step 1: Collect Weekly Stars**\n"
  markdown += "- All complete weeks in the month are analyzed\n"
  markdown +=
    "- For sponsorship only, each week's raw score is converted to a numeric star count (⭐ = 1 star, ⭐⭐⭐ = 3 stars) using maintainer-level adjusted score thresholds\n"
  markdown +=
    "- Example: `[2, 2, 2, 1, 0]` means 2 stars in week 1, 2 stars in week 2, etc.\n\n"

  markdown += "**Sponsorship-only score threshold multipliers**\n"
  markdown +=
    "(These do not change weekly score displays or contribution overview tables.)\n\n"
  markdown += "| Maintainer Level | Score Threshold Multiplier |\n"
  markdown += "|------------------|----------------------------|\n"
  Object.entries(MAINTAINER_SPONSORSHIP_SCORE_MULTIPLIER).forEach(
    ([level, multiplier]) => {
      const levelNumber = level.replace("maintainer", "")
      markdown += `| Level ${levelNumber} | ${Math.round(multiplier * 100)}% |\n`
    },
  )
  markdown += "\n"

  markdown += "**Step 2: Calculate Metrics**\n"
  markdown += "- **Median stars**: The median value of all weekly star counts\n"
  markdown += "- **Min stars**: The minimum weekly star count\n"
  markdown += "- **Max stars**: The maximum weekly star count\n"
  markdown +=
    "- **High score**: The maximum raw weekly score (0-162+ range from the scoring table) from any week in the month\n\n"

  markdown += "**Step 3: Determine Base Amount**\n"
  markdown +=
    "The sponsorship amount is calculated based on these metrics (checked in order):\n\n"

  markdown += "| Condition | Base Amount |\n"
  markdown += "|-----------|-------------|\n"
  MIN_STAR_TIERS.forEach((tier) => {
    markdown += `| \`minStarCount >= ${tier.threshold}\` | **$${tier.amount}** |\n`
  })
  MEDIAN_STAR_TIERS.forEach((tier) => {
    markdown += `| \`medianStars >= ${tier.threshold}\` | **$${tier.amount}** |\n`
  })
  MAX_STAR_TIERS.forEach((tier) => {
    markdown += `| \`maxStarCount >= ${tier.threshold}\` | **$${tier.amount}** |\n`
  })
  HIGH_SCORE_TIERS.forEach((tier) => {
    markdown += `| \`highScore >= ${tier.threshold}\` (and all stars = 0) | **$${tier.amount}** |\n`
  })
  markdown += "\n"

  markdown += "| Maintainer Level | Monthly Bonus |\n"
  markdown += "|------------------|---------------|\n"
  Object.entries(MAINTAINER_BASE).forEach(([_, value], index) => {
    const level = index + 1
    markdown += `| Level ${level} | **$${value}** |\n`
  })
  markdown += "\n"

  markdown += "**Final Amount** = Base Amount + Maintainer Bonus\n"

  return markdown
}
