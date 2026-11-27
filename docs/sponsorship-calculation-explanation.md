# Sponsorship Calculation Explanation

This document explains how contribution points, scores, and sponsorship tiers are calculated. It exists outside the weekly overview so the contribution summary stays focused on work completed.

## Contribution Points by Impact

| Impact | Points |
|--------|--------|
| Major | 4 |
| Minor | 2 |
| Tiny | 1 |

## Scoring & Sponsorship System

### Overview

PRs are analyzed by AI and assigned a **star rating (0-3 stars)**. Dependencies, payment bookkeeping, clear no-ops and duplicate-counted work earn zero points (distinct from a useful zero-star PR earning 0.5). Documentation/test/CI-only fixes receive one star; standalone reproductions receive at most two stars. Missing meaningful tests or relevant automated snapshots reduce the rating by one level when the gap is demonstrated; relevant unchanged tests count and nonvisual fixes do not require screenshots.  4 and 5 star ratings can only be manually assigned by staff. Weekly scores use `2^(starRating - 1)` per PR, with 1-star PRs capped at 12 per week, plus review points.

### Weekly Score → Star String

| Score Range | Star String | Count Value |
|------------|-------------|-------------|
| 0-3 | (empty) | 0 stars |
| 4-10 | ⭐ | 1 star |
| 11-49 | ⭐⭐ | 2 stars |
| 50-81 | ⭐⭐⭐ | 3 stars |
| 82-121 | 👑 | 1 crown |
| 122-161 | 👑👑 | 2 crowns |
| 162+ | 👑👑👑 | 3 crowns |

> Crowns count as 3 stars for sponsorship.

### Monthly Sponsorship Calculation

The sponsorship system calculates monthly payments based on your **weekly star counts** over the complete weeks in that month (typically 4-5 weeks, Wednesday-Tuesday format).

**Step 1: Collect Weekly Stars**
- All complete weeks in the month are analyzed
- For sponsorship only, each week's raw score is converted to a numeric star count (⭐ = 1 star, ⭐⭐⭐ = 3 stars) using maintainer-level adjusted score thresholds; when score is unavailable, the saved star string is used
- Example: `[2, 2, 2, 1, 0]` means 2 stars in week 1, 2 stars in week 2, etc.

**Sponsorship-only score threshold multipliers**
(These do not change weekly score displays or contribution overview tables.)
See the latest multiplier mapping in code: [`MAINTAINER_SPONSORSHIP_SCORE_MULTIPLIER`](https://github.com/tscircuit/contribution-tracker/blob/main/lib/scoring/getSponsorshipAmount.ts).

**Step 2: Calculate Metrics**
- **Median stars**: The median value of all weekly star counts
- **Min stars**: The minimum weekly star count
- **Max stars**: The maximum weekly star count
- **High score**: The maximum raw weekly score (0-162+ range from the scoring table) from any week in the month

**Step 3: Determine Base Amount**
The sponsorship amount is calculated based on these metrics (checked in order):

| Condition | Base Amount |
|-----------|-------------|
| `minStarCount >= 3` | **$700** |
| `medianStars >= 3` | **$550** |
| `medianStars >= 2.5` | **$400** |
| `medianStars >= 2` | **$250** |
| `medianStars >= 1.5` | **$120** |
| `medianStars >= 1` | **$75** |
| `maxStarCount >= 2` | **$45** |
| `maxStarCount >= 1` | **$30** |
| `highScore >= 3` (and all stars = 0) | **$10** |

| Maintainer Level | Monthly Bonus |
|------------------|---------------|
| Level 1 | **$200** |
| Level 2 | **$350** |
| Level 3 | **$500** |
| Level 4 | **$850** |
| Level 5 | **$1300** |
| Level 6 | **$2000** |

**Final Amount** = min(Base Amount + Maintainer Bonus, monthly cap). The monthly cap is **$200**, with a **$300** exception for `mohan-bee`. Hardware reimbursements remain separate. Reviewed September and October 2026 amounts are exported from their audited manifests instead of recalculating legacy tiers.
