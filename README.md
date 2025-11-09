# contribution-tracker

[contributions.tscircuit.com](https://contributions.tscircuit.com) ・ [tscircuit.com](https://tscircuit.com) ・ [Contribution Overviews](./contribution-overviews/) ・ [Changelogs](./changelogs/)

Generates weekly contribution overviews for tscircuit contributors. Check out all
the [contribution overviews here](./contribution-overviews/)
You can find AI-generated monthly changelogs in the [changelogs directory](./changelogs/).

- All PRs in the tscircuit org are scanned/summarized via an LLM
- The LLM classifies each Diff/PR as into a set of attributes for scoring
- All the PRs, summaries, and classifications are organized into charts and tables for [the website](https://contributions.tscircuit.com)

> Want to run locally? See the [Development Section](#development)

The current week is shown below. There are 4 major sections:

- [Contributor Overview](#contributor-overview)
- [PRs by Repository](#prs-by-repository)
- [PRs by Contributor](#changes-by-contributor)
- [Scoring & Sponsorship System](#scoring--sponsorship-system)

## Current Week

<!-- START_CURRENT_WEEK -->

# Contribution Overview 2025-11-05

The current week is shown below. There are 4 major sections:

- [Contributor Overview](#contributor-overview)
- [PRs by Repository](#prs-by-repository)
- [PRs by Contributor](#changes-by-contributor)
- [Scoring & Sponsorship System](#scoring--sponsorship-system)

## PRs by Repository

```mermaid
pie
    "tscircuit/core" : 10
    "tscircuit/schematic-viewer" : 1
    "tscircuit/pcb-viewer" : 6
    "tscircuit/3d-viewer" : 6
    "tscircuit/runframe" : 52
    "tscircuit/tscircuit" : 22
    "tscircuit/tscircuit.com" : 19
    "tscircuit/eval" : 18
    "tscircuit/cli" : 45
    "tscircuit/svg.tscircuit.com" : 5
    "tscircuit/copper-pour-solver" : 23
    "tscircuit/circuit-json" : 3
    "tscircuit/circuit-to-svg" : 3
    "tscircuit/props" : 4
    "tscircuit/footprinter" : 4
    "tscircuit/circuit-json-to-gerber" : 3
    "tscircuit/plop" : 2
    "tscircuit/jlcsearch" : 2
    "tscircuit/tscircuit-autorouter" : 1
    "tscircuit/contribution-tracker" : 5
    "tscircuit/docs" : 3
    "tscircuit/jscad-electronics" : 10
    "tscircuit/kicadts" : 4
    "tscircuit/circuit-json-to-kicad" : 1
    "tscircuit/kicad-to-circuit-json" : 4
```

## Contributor Overview

| Contributor | 🐳 Major | 🐙 Minor | 🐌 Tiny | ⭐ | Score | Discussion Contributions |
|-------------|---------|---------|---------|-----|----------------|--------------------------|
| [ShiboSoftwareDev](#ShiboSoftwareDev) | 5 | 8 | 13 | 👑 | 59.5 | 0🔹 0🔶 0💎 |
| [imrishabh18](#imrishabh18) | 6 | 7 | 1 | ⭐⭐⭐ | 45 | 0🔹 0🔶 0💎 |
| [seveibar](#seveibar) | 2 | 4 | 9 | ⭐⭐⭐ | 40 | 0🔹 0🔶 0💎 |
| [techmannih](#techmannih) | 3 | 4 | 2 | ⭐⭐⭐ | 35 | 0🔹 0🔶 0💎 |
| [ArnavK-09](#ArnavK-09) | 5 | 2 | 5 | ⭐⭐ | 30 | 0🔹 0🔶 0💎 |
| [rushabhcodes](#rushabhcodes) | 0 | 3 | 10 | ⭐⭐ | 17 | 0🔹 0🔶 0💎 |
| [tscircuitbot](#tscircuitbot) | 0 | 0 | 142 | ⭐⭐ | 16.5 | 0🔹 0🔶 0💎 |
| [RaghavArora14](#RaghavArora14) | 2 | 0 | 3 | ⭐⭐ | 11 | 0🔹 0🔶 0💎 |
| [Ayushjhawar8](#Ayushjhawar8) | 1 | 1 | 3 | ⭐ | 9 | 0🔹 0🔶 0💎 |
| [Asymtode712](#Asymtode712) | 0 | 2 | 4 | ⭐ | 8 | 0🔹 0🔶 0💎 |
| [Enity300](#Enity300) | 1 | 0 | 2 | ⭐ | 6 | 0🔹 0🔶 0💎 |
| [nailoo](#nailoo) | 0 | 0 | 3 | ⭐ | 6 | 0🔹 0🔶 0💎 |
| [Abse2001](#Abse2001) | 1 | 0 | 0 | ⭐ | 4 | 0🔹 0🔶 0💎 |
| [0hmX](#0hmX) | 0 | 0 | 1 |  | 2 | 0🔹 0🔶 0💎 |
| [anshubatra2563-ux](#anshubatra2563-ux) | 0 | 0 | 1 |  | 1 | 0🔹 0🔶 0💎 |

> Note: AI evaluates PRs and assigns 1-3 star ratings automatically. 4 and 5 star ratings require manual staff review.

### Discussion Contribution Legend

- 🔹 Normal Comments: Basic participation with minimal effort
- 🔶 Great Informative Comments: Thoughtful participation that adds value
- 💎 Incredible Comments: Exceptional participation with high-quality content

## Review Table

[reviews-received-hover]: ## "Number of reviews received for PRs for this contributor"
[approvals-received-hover]: ## "Number of approvals received for PRs this contributor authored"
[rejections-received-hover]: ## "Number of rejections received for PRs this contributor authored"
[prs-opened-hover]: ## "Number of PRs opened by this contributor"
[issues-created-hover]: ## "Number of issues created by this contributor"
[bountied-issues-hover]: ## "Number of issues this contributor created with a bounty"
[bountied-issue-$-hover]: ## "Total bounty amount placed on issues authored by this contributor"

| Contributor | Reviews Received | Approvals Received | Rejections Received | Approvals | Rejections | PRs Opened | PRs Merged | Score | Issues Created | Bountied Issues | Bountied Issue $ |
|---|---|---|---|---|---|---|---|---|---|---|---|
| [Asymtode712](#Asymtode712) | 10 | 6 | 0 | 0 | 0 | 7 | 6 | 8 | 0 | 0 | 0 |
| [seveibar](#seveibar) | 6 | 0 | 0 | 60 | 1 | 22 | 15 | 40 | 0 | 0 | 0 |
| [tscircuitbot](#tscircuitbot) | 3 | 0 | 0 | 0 | 0 | 166 | 142 | 16.5 | 0 | 0 | 0 |
| [techmannih](#techmannih) | 12 | 9 | 0 | 8 | 2 | 11 | 9 | 35 | 0 | 0 | 0 |
| [Quanta-Naut](#Quanta-Naut) | 2 | 0 | 1 | 0 | 0 | 1 | 0 | 0 | 0 | 0 | 0 |
| [imrishabh18](#imrishabh18) | 11 | 3 | 0 | 5 | 3 | 18 | 15 | 45 | 0 | 0 | 0 |
| [ShiboSoftwareDev](#ShiboSoftwareDev) | 20 | 17 | 0 | 12 | 0 | 28 | 26 | 59.5 | 0 | 0 | 0 |
| [Enity300](#Enity300) | 6 | 4 | 0 | 0 | 0 | 3 | 3 | 6 | 0 | 0 | 0 |
| [rushabhcodes](#rushabhcodes) | 35 | 18 | 2 | 1 | 1 | 20 | 13 | 17 | 0 | 0 | 0 |
| [RaghavArora14](#RaghavArora14) | 24 | 13 | 2 | 0 | 0 | 7 | 5 | 11 | 0 | 0 | 0 |
| [nailoo](#nailoo) | 9 | 4 | 0 | 2 | 0 | 6 | 3 | 6 | 0 | 0 | 0 |
| [Abse2001](#Abse2001) | 3 | 1 | 0 | 0 | 0 | 4 | 1 | 4 | 0 | 0 | 0 |
| [Ayushjhawar8](#Ayushjhawar8) | 8 | 5 | 0 | 0 | 0 | 6 | 5 | 9 | 0 | 0 | 0 |
| [Exceluyi](#Exceluyi) | 7 | 0 | 2 | 0 | 0 | 2 | 0 | 0 | 0 | 0 | 0 |
| [0hmX](#0hmX) | 1 | 1 | 0 | 0 | 1 | 2 | 1 | 2 | 0 | 0 | 0 |
| [anshubatra2563-ux](#anshubatra2563-ux) | 2 | 2 | 0 | 0 | 0 | 1 | 1 | 1 | 0 | 0 | 0 |
| [ArnavK-09](#ArnavK-09) | 13 | 5 | 1 | 1 | 0 | 13 | 12 | 30 | 0 | 0 | 0 |
| [pxlpal](#pxlpal) | 1 | 1 | 0 | 0 | 0 | 1 | 0 | 0 | 0 | 0 | 0 |

## Top 7 Repositories by Contribution Points

```mermaid
pie
    "tscircuit/runframe" : 55
    "tscircuit/cli" : 50
    "tscircuit/tscircuit.com" : 38
    "tscircuit/copper-pour-solver" : 36
    "tscircuit/tscircuit" : 22
    "tscircuit/core" : 21
    "tscircuit/eval" : 19
```

## Scoring & Sponsorship System

### Overview

PRs are analyzed by AI and assigned a **star rating (1-3 stars)**. 4 and 5 star ratings can only be manually assigned by staff. Weekly scores use `2^(starRating - 1)` per PR (capped at 12 PRs per rating), plus review/discussion points.

### Weekly Score → Star String

| Score Range | Star String | Count Value |
|------------|-------------|-------------|
| 0-3 | (empty) | 0 stars |
| 4-10 | ⭐ | 1 star |
| 11-30 | ⭐⭐ | 2 stars |
| 31-50 | ⭐⭐⭐ | 3 stars |
| 51-75 | 👑 | 1 crown |
| 76-100 | 👑👑 | 2 crowns |
| 101+ | 👑👑👑 | 3 crowns |

> Crowns count as 3 stars for sponsorship.

### Monthly Sponsorship Calculation

The sponsorship system calculates monthly payments based on your **weekly star counts** over the complete weeks in that month (typically 4-5 weeks, Wednesday-Tuesday format).

**Step 1: Collect Weekly Stars**
- All complete weeks in the month are analyzed
- Each week's star string is converted to a numeric count (⭐ = 1 star, ⭐⭐⭐ = 3 stars)
- Example: `[2, 2, 2, 1, 0]` means 2 stars in week 1, 2 stars in week 2, etc.

**Step 2: Calculate Metrics**
- **Median stars**: The median value of all weekly star counts
- **Min stars**: The minimum weekly star count
- **Max stars**: The maximum weekly star count
- **High score**: The maximum raw weekly score (0-100+ range from the scoring table) from any week in the month

**Step 3: Determine Base Amount**
The sponsorship amount is calculated based on these metrics (checked in order):

| Condition | Base Amount |
|-----------|-------------|
| `minStarCount >= 3` | **$500** |
| `medianStars >= 3` | **$450** |
| `medianStars >= 2.5` | **$300** |
| `medianStars >= 2` | **$200** |
| `medianStars >= 1.5` | **$100** |
| `medianStars >= 1` | **$75** |
| `maxStarCount >= 2` | **$25** |
| `maxStarCount >= 1` | **$15** |
| `highScore >= 3` (and all stars = 0) | **$5** |

| Maintainer Level | Monthly Bonus |
|------------------|---------------|
| Level 1 | **$200** |
| Level 2 | **$350** |
| Level 3 | **$500** |

**Final Amount** = Base Amount + Maintainer Bonus

## Changes by Repository

### [tscircuit/core](https://github.com/tscircuit/core)

| PR # | Impact | Rating | Contributor | Description |
|------|--------|--------|-------------|-------------|
| [#1621](https://github.com/tscircuit/core/pull/1621) | 🐳 Major | ⭐⭐⭐ | ShiboSoftwareDev | Replaces the internal copper pour generation logic with the new tscircuitcopper-pour-solver package, delegating complex geometry calculations to a dedicated package. |
| [#1620](https://github.com/tscircuit/core/pull/1620) | 🐙 Minor | ⭐⭐ | Asymtode712 | Adds visual verification for the pcbStyle.silkscreenFontSize override by including a silkscreen text element and dimension annotation to ensure correct font size rendering in tests. |
| [#1617](https://github.com/tscircuit/core/pull/1617) | 🐙 Minor | ⭐⭐ | Asymtode712 | Implements pcbStyle inheritance for kicad: footprints by passing the resolved pcbStyle to footprintLibraryMap functions, enabling override of silkscreen font size and other style properties. |
| [#1622](https://github.com/tscircuit/core/pull/1622) | 🐙 Minor | ⭐⭐ | techmannih | Fixes rendering issues in PCB board by ensuring non-null width and height values are asserted before calculations. |
| [#1632](https://github.com/tscircuit/core/pull/1632) | 🐙 Minor | ⭐⭐ | ShiboSoftwareDev | Adds a new error element, simulation_unknown_experiment_error, to report SPICE simulation failures in circuit JSON. |
| [#1630](https://github.com/tscircuit/core/pull/1630) | 🐙 Minor | ⭐⭐ | ShiboSoftwareDev | Adds support for cutout margins in copper pours and includes a test to verify functionality. |
| [#1625](https://github.com/tscircuit/core/pull/1625) | 🐙 Minor | ⭐⭐ | ShiboSoftwareDev | Adds boardEdgeMargin and clearance properties to the CopperPour component for improved spacing control. |
| [#1634](https://github.com/tscircuit/core/pull/1634) | 🐙 Minor | ⭐⭐ | seveibar | Ensures copper pours propagate the coveredWithSolderMask flag into circuit JSON output and adds a regression test for this functionality. |
| [#1627](https://github.com/tscircuit/core/pull/1627) | 🐙 Minor | ⭐⭐ | seveibar | Ensures CopperPour creates missing nets from its connectsTo property during the CreateNetsFromProps phase |

<details>
<summary>🐌 Tiny Contributions (1)</summary>

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#1623](https://github.com/tscircuit/core/pull/1623) | 🐌 Tiny | 0hmX | Updates the schematic-trace-solver dependency to version 0.0.45, addressing issue 87. |

</details>

### [tscircuit/schematic-viewer](https://github.com/tscircuit/schematic-viewer)


<details>
<summary>🐌 Tiny Contributions (1)</summary>

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#145](https://github.com/tscircuit/schematic-viewer/pull/145) | 🐌 Tiny | Asymtode712 | Integrates release-tracker into schematic-viewer workflows by adding workflows to notify on feature merges and version updates. |

</details>

### [tscircuit/pcb-viewer](https://github.com/tscircuit/pcb-viewer)

| PR # | Impact | Rating | Contributor | Description |
|------|--------|--------|-------------|-------------|
| [#460](https://github.com/tscircuit/pcb-viewer/pull/460) | 🐙 Minor | ⭐⭐ | techmannih | Adds support for corner radius in rectangle components, allowing for rounded corners in PCB designs. |

<details>
<summary>🐌 Tiny Contributions (5)</summary>

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#465](https://github.com/tscircuit/pcb-viewer/pull/465) | 🐌 Tiny | Asymtode712 | Integrates release-tracker into pcb-viewer workflows by adding notifications for feature merges and version updates. |
| [#466](https://github.com/tscircuit/pcb-viewer/pull/466) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#464](https://github.com/tscircuit/pcb-viewer/pull/464) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#463](https://github.com/tscircuit/pcb-viewer/pull/463) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#461](https://github.com/tscircuit/pcb-viewer/pull/461) | 🐌 Tiny | techmannih | Fixes handling of optional width and height properties for the pcb_board element in rendering calculations. |

</details>

### [tscircuit/3d-viewer](https://github.com/tscircuit/3d-viewer)

| PR # | Impact | Rating | Contributor | Description |
|------|--------|--------|-------------|-------------|
| [#555](https://github.com/tscircuit/3d-viewer/pull/555) | 🐳 Major | ⭐⭐⭐ | techmannih | Adds support for rendering silkscreen circles in PCB designs, allowing for more detailed and customizable PCB layouts. |
| [#552](https://github.com/tscircuit/3d-viewer/pull/552) | 🐳 Major | ⭐⭐⭐ | Abse2001 | Fixes the issue where selecting a camera preset always switched the camera to Custom and improves the default camera positioning in JSCAD and Manifold viewers by adding animation and cooldown logic to prevent user interactions from overriding presets. |
| [#554](https://github.com/tscircuit/3d-viewer/pull/554) | 🐙 Minor | ⭐⭐ | techmannih | Fixes rendering issues by ensuring non-null width and height values are asserted in PCB board rendering. |
| [#551](https://github.com/tscircuit/3d-viewer/pull/551) | 🐙 Minor | ⭐⭐ | Ayushjhawar8 | Fixes the default camera angle when loading boards in the viewer, ensuring they are displayed from the correct perspective. |

<details>
<summary>🐌 Tiny Contributions (2)</summary>

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#553](https://github.com/tscircuit/3d-viewer/pull/553) | 🐌 Tiny | Asymtode712 | Integrate release-tracker into 3d-viewer workflows by adding workflows to notify on feature merges and version updates. |
| [#559](https://github.com/tscircuit/3d-viewer/pull/559) | 🐌 Tiny | nailoo | Updates the jscad-electronics dependency to version 0.0.88 in package.json |

</details>

### [tscircuit/runframe](https://github.com/tscircuit/runframe)

| PR # | Impact | Rating | Contributor | Description |
|------|--------|--------|-------------|-------------|
| [#1673](https://github.com/tscircuit/runframe/pull/1673) | 🐳 Major | ⭐⭐⭐ | Ayushjhawar8 | Fixes the natural sorting of filenames in the file selector component to ensure correct order based on numeric values. |

<details>
<summary>🐌 Tiny Contributions (51)</summary>

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#1700](https://github.com/tscircuit/runframe/pull/1700) | 🐌 Tiny | Asymtode712 | Integrates release-tracker into runframe workflows by adding notifications for feature merges and version updates. |
| [#1731](https://github.com/tscircuit/runframe/pull/1731) | 🐌 Tiny | tscircuitbot | Updates the package version from 0.0.1230 to 0.0.1231 in package.json |
| [#1730](https://github.com/tscircuit/runframe/pull/1730) | 🐌 Tiny | tscircuitbot | Updates the tscircuit3d-viewer package to version 0.0.431 in package.json |
| [#1729](https://github.com/tscircuit/runframe/pull/1729) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1728](https://github.com/tscircuit/runframe/pull/1728) | 🐌 Tiny | tscircuitbot | Updates the tscircuiteval package to version 0.0.460 |
| [#1726](https://github.com/tscircuit/runframe/pull/1726) | 🐌 Tiny | tscircuitbot | Automated package version bump from 0.0.1228 to 0.0.1229 |
| [#1724](https://github.com/tscircuit/runframe/pull/1724) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1723](https://github.com/tscircuit/runframe/pull/1723) | 🐌 Tiny | tscircuitbot | Updates the tscircuiteval package to version 0.0.458 in the package.json file. |
| [#1722](https://github.com/tscircuit/runframe/pull/1722) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1720](https://github.com/tscircuit/runframe/pull/1720) | 🐌 Tiny | tscircuitbot | Automated package update to version 0.0.1226 |
| [#1718](https://github.com/tscircuit/runframe/pull/1718) | 🐌 Tiny | tscircuitbot | Updates the package version from 0.0.1224 to 0.0.1225 in package.json |
| [#1717](https://github.com/tscircuit/runframe/pull/1717) | 🐌 Tiny | tscircuitbot | Updates the package version from 0.0.1223 to 0.0.1224 in package.json |
| [#1716](https://github.com/tscircuit/runframe/pull/1716) | 🐌 Tiny | tscircuitbot | Updates the tscircuit3d-viewer package from version 0.0.429 to 0.0.430 |
| [#1715](https://github.com/tscircuit/runframe/pull/1715) | 🐌 Tiny | tscircuitbot | Automated package version bump from 0.0.1222 to 0.0.1223 |
| [#1713](https://github.com/tscircuit/runframe/pull/1713) | 🐌 Tiny | tscircuitbot | Updates the package version from 0.0.1221 to 0.0.1222 in package.json |
| [#1711](https://github.com/tscircuit/runframe/pull/1711) | 🐌 Tiny | tscircuitbot | Updates the package version from 0.0.1220 to 0.0.1221 in package.json |
| [#1710](https://github.com/tscircuit/runframe/pull/1710) | 🐌 Tiny | tscircuitbot | Updates the tscircuiteval package to version 0.0.457 in the package.json file. |
| [#1708](https://github.com/tscircuit/runframe/pull/1708) | 🐌 Tiny | tscircuitbot | Automated package update to version 0.0.1220 |
| [#1707](https://github.com/tscircuit/runframe/pull/1707) | 🐌 Tiny | tscircuitbot | Updates the tscircuiteval package to version 0.0.456 |
| [#1706](https://github.com/tscircuit/runframe/pull/1706) | 🐌 Tiny | tscircuitbot | Updates the tscircuiteval package to version 0.0.455 in the package.json file. |
| [#1705](https://github.com/tscircuit/runframe/pull/1705) | 🐌 Tiny | tscircuitbot | Updates the package version from 0.0.1218 to 0.0.1219 in package.json |
| [#1703](https://github.com/tscircuit/runframe/pull/1703) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1702](https://github.com/tscircuit/runframe/pull/1702) | 🐌 Tiny | tscircuitbot | Updates the tscircuitschematic-viewer package from version 2.0.47 to 2.0.48 |
| [#1699](https://github.com/tscircuit/runframe/pull/1699) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1698](https://github.com/tscircuit/runframe/pull/1698) | 🐌 Tiny | tscircuitbot | Updates the tscircuitpcb-viewer package from version 1.11.253 to 1.11.254 |
| [#1697](https://github.com/tscircuit/runframe/pull/1697) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1696](https://github.com/tscircuit/runframe/pull/1696) | 🐌 Tiny | tscircuitbot | Updates the tscircuit3d-viewer package from version 0.0.428 to 0.0.429 |
| [#1695](https://github.com/tscircuit/runframe/pull/1695) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1694](https://github.com/tscircuit/runframe/pull/1694) | 🐌 Tiny | tscircuitbot | Updates the tscircuiteval package to version 0.0.454 in package.json |
| [#1693](https://github.com/tscircuit/runframe/pull/1693) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1692](https://github.com/tscircuit/runframe/pull/1692) | 🐌 Tiny | tscircuitbot | Updates the tscircuit3d-viewer package to version 0.0.428 in package.json |
| [#1691](https://github.com/tscircuit/runframe/pull/1691) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1690](https://github.com/tscircuit/runframe/pull/1690) | 🐌 Tiny | tscircuitbot | Updates the tscircuitpcb-viewer package from version 1.11.252 to 1.11.253 |
| [#1689](https://github.com/tscircuit/runframe/pull/1689) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1688](https://github.com/tscircuit/runframe/pull/1688) | 🐌 Tiny | tscircuitbot | Updates the tscircuitpcb-viewer package to version 1.11.252 |
| [#1687](https://github.com/tscircuit/runframe/pull/1687) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1686](https://github.com/tscircuit/runframe/pull/1686) | 🐌 Tiny | tscircuitbot | Updates the tscircuit3d-viewer package to version 0.0.427 in package.json |
| [#1685](https://github.com/tscircuit/runframe/pull/1685) | 🐌 Tiny | tscircuitbot | Updates the package version from 0.0.1209 to 0.0.1210 in package.json |
| [#1684](https://github.com/tscircuit/runframe/pull/1684) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1683](https://github.com/tscircuit/runframe/pull/1683) | 🐌 Tiny | tscircuitbot | Updates the package version from 0.0.1208 to 0.0.1209 in package.json |
| [#1682](https://github.com/tscircuit/runframe/pull/1682) | 🐌 Tiny | tscircuitbot | Updates the tscircuiteval package to version 0.0.452 in the package.json file. |
| [#1681](https://github.com/tscircuit/runframe/pull/1681) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1680](https://github.com/tscircuit/runframe/pull/1680) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1725](https://github.com/tscircuit/runframe/pull/1725) | 🐌 Tiny | seveibar | Adds a prefabricated board example that reproduces a broken solder mask export issue from fabrication files. |
| [#1721](https://github.com/tscircuit/runframe/pull/1721) | 🐌 Tiny | seveibar | Updates the versions of the circuit-json and props dependencies in the package.json file. |
| [#1714](https://github.com/tscircuit/runframe/pull/1714) | 🐌 Tiny | seveibar | Updates the version of the circuit-json-to-gerber dependency in package.json from 0.0.35 to 0.0.37 |
| [#1704](https://github.com/tscircuit/runframe/pull/1704) | 🐌 Tiny | seveibar | Updates the circuit-json-to-gerber dependency to version 0.0.35 to include the copper pour soldermask feature. |
| [#1709](https://github.com/tscircuit/runframe/pull/1709) | 🐌 Tiny | Ayushjhawar8 | Adds top spacing to error messages for improved visual styling in the ErrorTabContent component. |
| [#1672](https://github.com/tscircuit/runframe/pull/1672) | 🐌 Tiny | Ayushjhawar8 | img width1021 height277 altimage srchttps:github.comuser-attachmentsassets4430e588-fc3e-4519-be92-f22a44b67fa2 |
| [#1719](https://github.com/tscircuit/runframe/pull/1719) | 🐌 Tiny | ArnavK-09 | before img width525 height828 altimage srchttps:github.comuser-attachmentsassets8b5ad571-da64-4fd1-8135-80415f3d570f   after img width519 height838 altimage srchttps:github.comuser-attachmentsassetscd547222-ac2e-4812-825d-fa984675759a |
| [#1712](https://github.com/tscircuit/runframe/pull/1712) | 🐌 Tiny | ArnavK-09 | Fixes the package URL used in error reporting to ensure it correctly calls the function instead of referencing it as a variable. |

</details>

### [tscircuit/tscircuit](https://github.com/tscircuit/tscircuit)


<details>
<summary>🐌 Tiny Contributions (22)</summary>

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#1287](https://github.com/tscircuit/tscircuit/pull/1287) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1286](https://github.com/tscircuit/tscircuit/pull/1286) | 🐌 Tiny | tscircuitbot | Updates the tscircuitcli package version from 0.1.464 to 0.1.466 in package.json |
| [#1285](https://github.com/tscircuit/tscircuit/pull/1285) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1284](https://github.com/tscircuit/tscircuit/pull/1284) | 🐌 Tiny | tscircuitbot | Updates the version of the tscircuitrunframe package from 0.0.1230 to 0.0.1231 in package.json |
| [#1283](https://github.com/tscircuit/tscircuit/pull/1283) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1282](https://github.com/tscircuit/tscircuit/pull/1282) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1281](https://github.com/tscircuit/tscircuit/pull/1281) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1280](https://github.com/tscircuit/tscircuit/pull/1280) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1279](https://github.com/tscircuit/tscircuit/pull/1279) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1276](https://github.com/tscircuit/tscircuit/pull/1276) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1274](https://github.com/tscircuit/tscircuit/pull/1274) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1272](https://github.com/tscircuit/tscircuit/pull/1272) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1269](https://github.com/tscircuit/tscircuit/pull/1269) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1268](https://github.com/tscircuit/tscircuit/pull/1268) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1267](https://github.com/tscircuit/tscircuit/pull/1267) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1266](https://github.com/tscircuit/tscircuit/pull/1266) | 🐌 Tiny | tscircuitbot | Updates the tscircuitcli package from version 0.1.444 to 0.1.445 and the tscircuitrunframe package from version 0.0.1207 to 0.0.1208 in package.json |
| [#1265](https://github.com/tscircuit/tscircuit/pull/1265) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1264](https://github.com/tscircuit/tscircuit/pull/1264) | 🐌 Tiny | tscircuitbot | Updates the tscircuitcli package from version 0.1.443 to 0.1.444 and the tscircuitrunframe package from version 0.0.1206 to 0.0.1207 in package.json |
| [#1278](https://github.com/tscircuit/tscircuit/pull/1278) | 🐌 Tiny | ShiboSoftwareDev | Updates the versions of the tscircuitcore and tscircuiteval dependencies in package.json |
| [#1275](https://github.com/tscircuit/tscircuit/pull/1275) | 🐌 Tiny | ShiboSoftwareDev | Adds new dependencies to the project to resolve package update issues. |
| [#1273](https://github.com/tscircuit/tscircuit/pull/1273) | 🐌 Tiny | seveibar | Updates the CLI and RunFrame dependencies to their latest versions in package.json |
| [#1271](https://github.com/tscircuit/tscircuit/pull/1271) | 🐌 Tiny | seveibar | Updates the version of the tscircuitrunframe dependency from 0.0.1209 to 0.0.1222 in package.json |

</details>

### [tscircuit/tscircuit.com](https://github.com/tscircuit/tscircuit.com)

| PR # | Impact | Rating | Contributor | Description |
|------|--------|--------|-------------|-------------|
| [#1955](https://github.com/tscircuit/tscircuit.com/pull/1955) | 🐳 Major | ⭐⭐⭐ | RaghavArora14 | Fixes session handling by automatically clearing expired sessions and preventing duplicate unauthorized notifications when a 401 error occurs. |
| [#1970](https://github.com/tscircuit/tscircuit.com/pull/1970) | 🐳 Major | ⭐⭐⭐ | ArnavK-09 | Adds filtering and search functionality for user profile organizations based on user input, improving the user experience in navigating organizations. |
| [#1968](https://github.com/tscircuit/tscircuit.com/pull/1968) | 🐳 Major | ⭐⭐⭐ | ArnavK-09 | Adds support for tscircuit_handle in organization creation and update endpoints, while removing client-side modification of github_handle. |
| [#1961](https://github.com/tscircuit/tscircuit.com/pull/1961) | 🐳 Major | ⭐⭐⭐ | ArnavK-09 | Adds meta tags for SEO optimization in release-related pages and improves error handling for package routes. |
| [#1964](https://github.com/tscircuit/tscircuit.com/pull/1964) | 🐳 Major | ⭐⭐⭐ | ArnavK-09 | Adds a session check in the import component to ensure users are signed in before importing components, displaying an error message if not signed in. |
| [#1962](https://github.com/tscircuit/tscircuit.com/pull/1962) | 🐳 Major | ⭐⭐⭐ | ArnavK-09 | Adds debug information for user account details in the user settings page, including GitHub username, email, account ID, and created date. |
| [#1969](https://github.com/tscircuit/tscircuit.com/pull/1969) | 🐙 Minor | ⭐⭐ | ArnavK-09 | Only displays the email address of an account when the request is made by an authenticated user, ensuring that unauthenticated users do not have access to sensitive information. |

<details>
<summary>🐌 Tiny Contributions (12)</summary>

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#1972](https://github.com/tscircuit/tscircuit.com/pull/1972) | 🐌 Tiny | tscircuitbot | Automated package update to version 0.0.138 |
| [#1971](https://github.com/tscircuit/tscircuit.com/pull/1971) | 🐌 Tiny | tscircuitbot | Updates the tscircuiteval package from version 0.0.458 to 0.0.460 |
| [#1966](https://github.com/tscircuit/tscircuit.com/pull/1966) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1960](https://github.com/tscircuit/tscircuit.com/pull/1960) | 🐌 Tiny | tscircuitbot | Updates the tscircuiteval package from version 0.0.456 to 0.0.457 |
| [#1959](https://github.com/tscircuit/tscircuit.com/pull/1959) | 🐌 Tiny | tscircuitbot | Updates the tscircuiteval package from version 0.0.454 to 0.0.456 |
| [#1957](https://github.com/tscircuit/tscircuit.com/pull/1957) | 🐌 Tiny | tscircuitbot | Updates the tscircuiteval package from version 0.0.453 to 0.0.454 |
| [#1954](https://github.com/tscircuit/tscircuit.com/pull/1954) | 🐌 Tiny | tscircuitbot | Updates the tscircuiteval package from version 0.0.452 to 0.0.453 in the package.json file. |
| [#1951](https://github.com/tscircuit/tscircuit.com/pull/1951) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1953](https://github.com/tscircuit/tscircuit.com/pull/1953) | 🐌 Tiny | imrishabh18 | Updates the tscircuitrunframe dependency version from 0.0.1198 to 0.0.1209 in package.json |
| [#1965](https://github.com/tscircuit/tscircuit.com/pull/1965) | 🐌 Tiny | ArnavK-09 | Changes the default view for package display from pcb to 3d in the package information handling. |
| [#1956](https://github.com/tscircuit/tscircuit.com/pull/1956) | 🐌 Tiny | ArnavK-09 | Refactors the CodeEditor component to avoid refetching typings when the font size changes, improving performance and user experience. |
| [#1952](https://github.com/tscircuit/tscircuit.com/pull/1952) | 🐌 Tiny | ArnavK-09 | Fixes the proxy URL used in the import dialog to ensure correct API calls are made. |

</details>

### [tscircuit/eval](https://github.com/tscircuit/eval)

| PR # | Impact | Rating | Contributor | Description |
|------|--------|--------|-------------|-------------|
| [#1483](https://github.com/tscircuit/eval/pull/1483) | 🐙 Minor | ⭐⭐ | ShiboSoftwareDev | Enables the partsEngineDisabled property to disable the parts engine when set to true in the configuration, ensuring that the parts engine is undefined and adding tests for verification. |

<details>
<summary>🐌 Tiny Contributions (17)</summary>

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#1484](https://github.com/tscircuit/eval/pull/1484) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1482](https://github.com/tscircuit/eval/pull/1482) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1481](https://github.com/tscircuit/eval/pull/1481) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1479](https://github.com/tscircuit/eval/pull/1479) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1474](https://github.com/tscircuit/eval/pull/1474) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1473](https://github.com/tscircuit/eval/pull/1473) | 🐌 Tiny | tscircuitbot | Updates the version of the tscircuitcore package from 0.0.849 to 0.0.850 in package.json |
| [#1471](https://github.com/tscircuit/eval/pull/1471) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1470](https://github.com/tscircuit/eval/pull/1470) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1468](https://github.com/tscircuit/eval/pull/1468) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1467](https://github.com/tscircuit/eval/pull/1467) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1466](https://github.com/tscircuit/eval/pull/1466) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1465](https://github.com/tscircuit/eval/pull/1465) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1463](https://github.com/tscircuit/eval/pull/1463) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1462](https://github.com/tscircuit/eval/pull/1462) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1460](https://github.com/tscircuit/eval/pull/1460) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1459](https://github.com/tscircuit/eval/pull/1459) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1478](https://github.com/tscircuit/eval/pull/1478) | 🐌 Tiny | seveibar | Updates the versions of the tscircuitprops and circuit-json dependencies in package.json and modifies the bun-test workflow to use bun version 1.3.1 instead of the latest version. |

</details>

### [tscircuit/cli](https://github.com/tscircuit/cli)

| PR # | Impact | Rating | Contributor | Description |
|------|--------|--------|-------------|-------------|
| [#841](https://github.com/tscircuit/cli/pull/841) | 🐳 Major | ⭐⭐⭐ | imrishabh18 | Adds support for transpiling TypeScript to ESM, CommonJS, and generating type declarations with the tsci build --transpile command. |
| [#844](https://github.com/tscircuit/cli/pull/844) | 🐙 Minor | ⭐⭐ | imrishabh18 | Allows users to specify file paths using glob patterns when generating schematic and PCB snapshots. |
| [#877](https://github.com/tscircuit/cli/pull/877) | 🐙 Minor | ⭐⭐ | ArnavK-09 | Fixes path handling in the build process to ensure correct resolution of file paths regardless of their format. |

<details>
<summary>🐌 Tiny Contributions (42)</summary>

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#888](https://github.com/tscircuit/cli/pull/888) | 🐌 Tiny | tscircuitbot | Automated package update to version 0.1.466 |
| [#886](https://github.com/tscircuit/cli/pull/886) | 🐌 Tiny | tscircuitbot | Updates the tscircuitrunframe package from version 0.0.1230 to 0.0.1231 in the package.json file. |
| [#887](https://github.com/tscircuit/cli/pull/887) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#885](https://github.com/tscircuit/cli/pull/885) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#884](https://github.com/tscircuit/cli/pull/884) | 🐌 Tiny | tscircuitbot | Updates the tscircuitrunframe package to version 0.0.1230 |
| [#882](https://github.com/tscircuit/cli/pull/882) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#881](https://github.com/tscircuit/cli/pull/881) | 🐌 Tiny | tscircuitbot | Updates the tscircuitrunframe package from version 0.0.1225 to 0.0.1228 and sets bun version to 1.3.1 in the CI workflow. |
| [#876](https://github.com/tscircuit/cli/pull/876) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#875](https://github.com/tscircuit/cli/pull/875) | 🐌 Tiny | tscircuitbot | Updates the tscircuitrunframe package from version 0.0.1224 to 0.0.1225 |
| [#874](https://github.com/tscircuit/cli/pull/874) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#873](https://github.com/tscircuit/cli/pull/873) | 🐌 Tiny | tscircuitbot | Updates the tscircuitrunframe package from version 0.0.1223 to 0.0.1224 |
| [#871](https://github.com/tscircuit/cli/pull/871) | 🐌 Tiny | tscircuitbot | Updates the tscircuitrunframe package to version 0.0.1223 in package.json |
| [#872](https://github.com/tscircuit/cli/pull/872) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#870](https://github.com/tscircuit/cli/pull/870) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#869](https://github.com/tscircuit/cli/pull/869) | 🐌 Tiny | tscircuitbot | Updates the tscircuitrunframe package to version 0.0.1222 in package.json |
| [#866](https://github.com/tscircuit/cli/pull/866) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#863](https://github.com/tscircuit/cli/pull/863) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#862](https://github.com/tscircuit/cli/pull/862) | 🐌 Tiny | tscircuitbot | Updates the tscircuitrunframe package from version 0.0.1218 to 0.0.1219 |
| [#861](https://github.com/tscircuit/cli/pull/861) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#860](https://github.com/tscircuit/cli/pull/860) | 🐌 Tiny | tscircuitbot | Updates the tscircuitrunframe package from version 0.0.1216 to 0.0.1218 |
| [#858](https://github.com/tscircuit/cli/pull/858) | 🐌 Tiny | tscircuitbot | Automated package update to version 0.1.455 |
| [#857](https://github.com/tscircuit/cli/pull/857) | 🐌 Tiny | tscircuitbot | Updates the tscircuitrunframe package from version 0.0.1215 to 0.0.1216 |
| [#856](https://github.com/tscircuit/cli/pull/856) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#855](https://github.com/tscircuit/cli/pull/855) | 🐌 Tiny | tscircuitbot | Updates the tscircuitrunframe package from version 0.0.1214 to 0.0.1215 |
| [#854](https://github.com/tscircuit/cli/pull/854) | 🐌 Tiny | tscircuitbot | Updates the package version from 0.1.452 to 0.1.453 in package.json |
| [#853](https://github.com/tscircuit/cli/pull/853) | 🐌 Tiny | tscircuitbot | Updates the tscircuitrunframe package from version 0.0.1213 to 0.0.1214 |
| [#852](https://github.com/tscircuit/cli/pull/852) | 🐌 Tiny | tscircuitbot | Updates the package version from 0.1.451 to 0.1.452 in package.json |
| [#851](https://github.com/tscircuit/cli/pull/851) | 🐌 Tiny | tscircuitbot | Updates the tscircuitrunframe package from version 0.0.1212 to 0.0.1213 |
| [#850](https://github.com/tscircuit/cli/pull/850) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#849](https://github.com/tscircuit/cli/pull/849) | 🐌 Tiny | tscircuitbot | Updates the tscircuitrunframe package to version 0.0.1212 in the package.json file. |
| [#848](https://github.com/tscircuit/cli/pull/848) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#847](https://github.com/tscircuit/cli/pull/847) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#846](https://github.com/tscircuit/cli/pull/846) | 🐌 Tiny | tscircuitbot | Updates the tscircuitrunframe package from version 0.0.1210 to 0.0.1211 |
| [#845](https://github.com/tscircuit/cli/pull/845) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#843](https://github.com/tscircuit/cli/pull/843) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#842](https://github.com/tscircuit/cli/pull/842) | 🐌 Tiny | tscircuitbot | Updates the tscircuitrunframe package from version 0.0.1209 to 0.0.1210 |
| [#840](https://github.com/tscircuit/cli/pull/840) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#839](https://github.com/tscircuit/cli/pull/839) | 🐌 Tiny | tscircuitbot | Updates the tscircuitrunframe package from version 0.0.1208 to 0.0.1209 |
| [#838](https://github.com/tscircuit/cli/pull/838) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#837](https://github.com/tscircuit/cli/pull/837) | 🐌 Tiny | tscircuitbot | Updates the tscircuitrunframe package from version 0.0.1207 to 0.0.1208 |
| [#836](https://github.com/tscircuit/cli/pull/836) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#835](https://github.com/tscircuit/cli/pull/835) | 🐌 Tiny | tscircuitbot | Updates the tscircuitrunframe package from version 0.0.1206 to 0.0.1207 |

</details>

### [tscircuit/svg.tscircuit.com](https://github.com/tscircuit/svg.tscircuit.com)


<details>
<summary>🐌 Tiny Contributions (5)</summary>

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#555](https://github.com/tscircuit/svg.tscircuit.com/pull/555) | 🐌 Tiny | tscircuitbot | Updates the tscircuit package version from 0.0.873 to 0.0.874 in package.json |
| [#554](https://github.com/tscircuit/svg.tscircuit.com/pull/554) | 🐌 Tiny | tscircuitbot | Updates the tscircuit package version from 0.0.872 to 0.0.873 in package.json |
| [#553](https://github.com/tscircuit/svg.tscircuit.com/pull/553) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#552](https://github.com/tscircuit/svg.tscircuit.com/pull/552) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#550](https://github.com/tscircuit/svg.tscircuit.com/pull/550) | 🐌 Tiny | ShiboSoftwareDev | Updates the bun version to 1.3.1 and the tscircuit dependency to version 0.0.870 to ensure proper functionality of the copper pour in documentation. |

</details>

### [tscircuit/copper-pour-solver](https://github.com/tscircuit/copper-pour-solver)

| PR # | Impact | Rating | Contributor | Description |
|------|--------|--------|-------------|-------------|
| [#20](https://github.com/tscircuit/copper-pour-solver/pull/20) | 🐳 Major | ⭐⭐⭐ | ShiboSoftwareDev | Adds support for pcb_cutout elements to the copper pour solver, allowing for proper clearance around board cutouts. |
| [#18](https://github.com/tscircuit/copper-pour-solver/pull/18) | 🐳 Major | ⭐⭐⭐ | ShiboSoftwareDev | Add support for generating copper pour cutouts around vias and their connected traces, processing pcb_via elements as circular obstacles and updating pcb_trace parsing logic for multi-layer traces. |
| [#6](https://github.com/tscircuit/copper-pour-solver/pull/6) | 🐳 Major | ⭐⭐⭐ | ShiboSoftwareDev | Adds support for a boardEdgeMargin parameter to control clearance between copper pours and board edges, improving handling of complex board shapes. |
| [#2](https://github.com/tscircuit/copper-pour-solver/pull/2) | 🐳 Major | ⭐⭐⭐ | ShiboSoftwareDev | This pull request implements the core logic for the copper pour solver. It introduces a complete pipeline that takes a circuit-json input and generates B-Rep shapes for the copper pour regions. Key changes include: Copper Pour Solver Implementation: The CopperPourPipelineSolver is built out to process obstacles, perform boolean geometry operations using flatten-js, and generate final B-Rep shapes. Circuit JSON Conversion: A new function convertCircuitJsonToInputProblem is added to translate standard circuit-json elements (pads, traces, holes) into the solvers internal InputProblem format. Comprehensive Testing: A suite of snapshot tests has been added, rendering the output of the solver to SVG for multiple circuit configurations to visually validate the results. Type Definitions: Updated libtypes.ts to support various pad shapes (rect, circle, trace) and define the solvers input and output structures. Dependency Updates: Added flatten-jscore for geometric calculations and circuit-to-svg for test rendering. |
| [#24](https://github.com/tscircuit/copper-pour-solver/pull/24) | 🐙 Minor | ⭐⭐ | ShiboSoftwareDev | Fixes incorrect handling of board shapes defined by custom polygons in the copper pour solver due to inconsistent winding order, ensuring proper boolean operations for copper pour geometry. |

<details>
<summary>🐌 Tiny Contributions (18)</summary>

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#25](https://github.com/tscircuit/copper-pour-solver/pull/25) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#23](https://github.com/tscircuit/copper-pour-solver/pull/23) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#21](https://github.com/tscircuit/copper-pour-solver/pull/21) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#19](https://github.com/tscircuit/copper-pour-solver/pull/19) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#17](https://github.com/tscircuit/copper-pour-solver/pull/17) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#14](https://github.com/tscircuit/copper-pour-solver/pull/14) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#12](https://github.com/tscircuit/copper-pour-solver/pull/12) | 🐌 Tiny | tscircuitbot | Automated package update to version 0.0.6 |
| [#10](https://github.com/tscircuit/copper-pour-solver/pull/10) | 🐌 Tiny | tscircuitbot | Automated package update to version 0.0.5 |
| [#8](https://github.com/tscircuit/copper-pour-solver/pull/8) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#22](https://github.com/tscircuit/copper-pour-solver/pull/22) | 🐌 Tiny | ShiboSoftwareDev | Removes console log statements from the circuit JSON conversion and copper pour processing functions to clean up the codebase. |
| [#9](https://github.com/tscircuit/copper-pour-solver/pull/9) | 🐌 Tiny | ShiboSoftwareDev | This change renames several test files and their corresponding assets to have more descriptive names that reflect their purpose. |
| [#11](https://github.com/tscircuit/copper-pour-solver/pull/11) | 🐌 Tiny | ShiboSoftwareDev | Renames boardEdgeMargin to board_edge_margin for consistency with the snake_case naming convention used for other properties in the project. |
| [#13](https://github.com/tscircuit/copper-pour-solver/pull/13) | 🐌 Tiny | ShiboSoftwareDev | Fixes the workflow to only commit pver release updates and disables auto-merge of upstream changes. |
| [#16](https://github.com/tscircuit/copper-pour-solver/pull/16) | 🐌 Tiny | ShiboSoftwareDev | Enables auto-merging of pull requests in the GitHub workflow for pver. |
| [#7](https://github.com/tscircuit/copper-pour-solver/pull/7) | 🐌 Tiny | ShiboSoftwareDev | Auto updates the package version in the GitHub workflow for releases. |
| [#4](https://github.com/tscircuit/copper-pour-solver/pull/4) | 🐌 Tiny | ShiboSoftwareDev | Adds a new script to check formatting in the project using biome. |
| [#5](https://github.com/tscircuit/copper-pour-solver/pull/5) | 🐌 Tiny | ShiboSoftwareDev | Removes the lockfile as it is not needed. |
| [#3](https://github.com/tscircuit/copper-pour-solver/pull/3) | 🐌 Tiny | ShiboSoftwareDev | Adds a CODEOWNERS file to define code ownership for the repository |

</details>

### [tscircuit/circuit-json](https://github.com/tscircuit/circuit-json)

| PR # | Impact | Rating | Contributor | Description |
|------|--------|--------|-------------|-------------|
| [#341](https://github.com/tscircuit/circuit-json/pull/341) | 🐳 Major | ⭐⭐⭐ | techmannih | Adds support for circular and rectangular holes in PCB design, allowing for more versatile hole shapes in circuit layouts. |
| [#339](https://github.com/tscircuit/circuit-json/pull/339) | 🐳 Major | ⭐⭐⭐ | Enity300 | This PR makes the width and height properties optional on the PCBBoard interface to support boards with custom outlines. |

<details>
<summary>🐌 Tiny Contributions (1)</summary>

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#340](https://github.com/tscircuit/circuit-json/pull/340) | 🐌 Tiny | Enity300 | Adds an optional shape property to the PCBBoard interface, allowing specification of board shape as either rectangular or polygonal, while maintaining backward compatibility. |

</details>

### [tscircuit/circuit-to-svg](https://github.com/tscircuit/circuit-to-svg)

| PR # | Impact | Rating | Contributor | Description |
|------|--------|--------|-------------|-------------|
| [#419](https://github.com/tscircuit/circuit-to-svg/pull/419) | 🐳 Major | ⭐⭐⭐ | techmannih | Adds support for rectangular and circular PCB holes in SVG generation. |
| [#416](https://github.com/tscircuit/circuit-to-svg/pull/416) | 🐳 Major | ⭐⭐⭐ | RaghavArora14 | Adds a debug feature to visualize anchor position offsets for PCB components positioned relative to groups, including dimension lines and markers for clarity. |

<details>
<summary>🐌 Tiny Contributions (1)</summary>

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#418](https://github.com/tscircuit/circuit-to-svg/pull/418) | 🐌 Tiny | RaghavArora14 | Changes the bun version from latest to 1.3.1 to resolve CI test errors related to bun. |

</details>

### [tscircuit/props](https://github.com/tscircuit/props)

| PR # | Impact | Rating | Contributor | Description |
|------|--------|--------|-------------|-------------|
| [#491](https://github.com/tscircuit/props/pull/491) | 🐙 Minor | ⭐⭐ | techmannih | Adds RectHoleProps interface for rectangular hole support in PCB layout, expanding the HoleProps type to include rectangular holes. |
| [#490](https://github.com/tscircuit/props/pull/490) | 🐙 Minor | ⭐⭐ | ShiboSoftwareDev | Adds the cutoutMargin property to copper pours, allowing for a clearance to be set between the pour and board cutouts. |
| [#488](https://github.com/tscircuit/props/pull/488) | 🐙 Minor | ⭐⭐ | ShiboSoftwareDev | Adds the boardEdgeMargin property to the copper-pour component, allowing specification of a margin between a copper pour and the board edge. |
| [#489](https://github.com/tscircuit/props/pull/489) | 🐙 Minor | ⭐⭐ | rushabhcodes | Adds an optional property, minTraceWidth, to group components for specifying minimum trace width in TypeScript interfaces and schema validation. |

### [tscircuit/footprinter](https://github.com/tscircuit/footprinter)


<details>
<summary>🐌 Tiny Contributions (4)</summary>

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#407](https://github.com/tscircuit/footprinter/pull/407) | 🐌 Tiny | techmannih | Adds a test for the sod123 footprint to ensure parity with KiCads representation. |
| [#409](https://github.com/tscircuit/footprinter/pull/409) | 🐌 Tiny | rushabhcodes | Pins the bun version to 1.3.1 in the CI workflow to resolve test errors caused by using the latest version. |
| [#406](https://github.com/tscircuit/footprinter/pull/406) | 🐌 Tiny | rushabhcodes | Adds new parity snapshot tests for MELF diode footprints, ensuring that the generated SVGs from the Footprinter tool match those from KiCad for several MELF package variants. |
| [#411](https://github.com/tscircuit/footprinter/pull/411) | 🐌 Tiny | RaghavArora14 | Add intelligent defaults for TQFP footprints, allowing users to specify common pin layouts without needing to manually input all parameters each time. |

</details>

### [tscircuit/circuit-json-to-gerber](https://github.com/tscircuit/circuit-json-to-gerber)

| PR # | Impact | Rating | Contributor | Description |
|------|--------|--------|-------------|-------------|
| [#62](https://github.com/tscircuit/circuit-json-to-gerber/pull/62) | 🐙 Minor | ⭐⭐ | ShiboSoftwareDev | Adds a boolean property, covered_with_solder_mask, to copper pour elements, allowing for solder mask-free regions when set to false. |
| [#63](https://github.com/tscircuit/circuit-json-to-gerber/pull/63) | 🐙 Minor | ⭐⭐ | imrishabh18 | Adds support for polygon-shaped SMT pads in Gerber command generation, allowing for accurate representation of complex pad shapes in PCB designs. |
| [#64](https://github.com/tscircuit/circuit-json-to-gerber/pull/64) | 🐙 Minor | ⭐⭐ | imrishabh18 | Adds tests to generate Excellon drill commands for both plated and unplated holes in the viagrid board, ensuring proper representation under the copper pour. |

### [tscircuit/plop](https://github.com/tscircuit/plop)


<details>
<summary>🐌 Tiny Contributions (2)</summary>

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#25](https://github.com/tscircuit/plop/pull/25) | 🐌 Tiny | ShiboSoftwareDev | Enable committing and auto-merging pver update |
| [#24](https://github.com/tscircuit/plop/pull/24) | 🐌 Tiny | seveibar | Add a GitHub workflow that triggers on merged pull requests to notify the release tracker service about merged features. |

</details>

### [tscircuit/jlcsearch](https://github.com/tscircuit/jlcsearch)

| PR # | Impact | Rating | Contributor | Description |
|------|--------|--------|-------------|-------------|
| [#108](https://github.com/tscircuit/jlcsearch/pull/108) | 🐳 Major | ⭐⭐⭐ | seveibar | Add a resistor_array derived table that extracts topology, temperature coefficient, and other helpful fields, expose a resistor arrays list page and JSON endpoint with filtering for package, topology, and value, register the new table in the setup script and regenerate Kysely types so the table is available in the database client |
| [#107](https://github.com/tscircuit/jlcsearch/pull/107) | 🐙 Minor | ⭐⭐ | seveibar | Strips leading C from part-number queries and filters by the numeric LCSC code in the search endpoint. |

### [tscircuit/tscircuit-autorouter](https://github.com/tscircuit/tscircuit-autorouter)

| PR # | Impact | Rating | Contributor | Description |
|------|--------|--------|-------------|-------------|
| [#302](https://github.com/tscircuit/tscircuit-autorouter/pull/302) | 🐳 Major | ⭐⭐⭐ | seveibar | Adds an optional offBoardConnectsTo array to SRJ obstacles to describe off-board connectivity and merges these connections into the connectivity map, allowing assignable obstacles to share nets. |

### [tscircuit/contribution-tracker](https://github.com/tscircuit/contribution-tracker)

| PR # | Impact | Rating | Contributor | Description |
|------|--------|--------|-------------|-------------|
| [#255](https://github.com/tscircuit/contribution-tracker/pull/255) | 🐙 Minor | ⭐⭐ | seveibar | Increases the base sponsorship amounts based on median and maximum star counts in the getSponsorshipAmount function. |

<details>
<summary>🐌 Tiny Contributions (4)</summary>

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#260](https://github.com/tscircuit/contribution-tracker/pull/260) | 🐌 Tiny | Enity300 | Adds a new user Enity300 to the users.json file. |
| [#258](https://github.com/tscircuit/contribution-tracker/pull/258) | 🐌 Tiny | rushabhcodes | Adds the Discord ID and GitHub username of the user rushabhcodes to the users.json file. |
| [#259](https://github.com/tscircuit/contribution-tracker/pull/259) | 🐌 Tiny | RaghavArora14 | Adds GitHub username and Discord ID for user RaghavArora14 in users.json |
| [#261](https://github.com/tscircuit/contribution-tracker/pull/261) | 🐌 Tiny | anshubatra2563-ux | Removes console logs from the PrAttributeBadges component and updates key generation for mobile card and table rows in PrsTable component to include repository name for better uniqueness. |

</details>

### [tscircuit/docs](https://github.com/tscircuit/docs)


<details>
<summary>🐌 Tiny Contributions (3)</summary>

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#314](https://github.com/tscircuit/docs/pull/314) | 🐌 Tiny | seveibar | Rewrite the measuring circuit size guide to focus on board template selection and remove Adom-specific wording, document JSON metadata imports and add a metadata-driven carrier example, embed a CircuitPreview that loads metadata via fsMap to demonstrate template selection. |
| [#308](https://github.com/tscircuit/docs/pull/308) | 🐌 Tiny | rushabhcodes | Wraps CircuitPreview components in board tags to ensure proper rendering in PCB view, while adding an acceptable border. |
| [#315](https://github.com/tscircuit/docs/pull/315) | 🐌 Tiny | Ayushjhawar8 | Adjusts the indentation of nested documentation groups in the sidebar for better visual hierarchy and usability. |

</details>

### [tscircuit/jscad-electronics](https://github.com/tscircuit/jscad-electronics)

| PR # | Impact | Rating | Contributor | Description |
|------|--------|--------|-------------|-------------|
| [#208](https://github.com/tscircuit/jscad-electronics/pull/208) | 🐙 Minor | ⭐⭐ | rushabhcodes | Fixes inaccuracies in the rendering of QFP, LQFP, and TQFP chip components by adjusting lead placements, body rendering, and physical parameters for better alignment with real-world specifications. |
| [#201](https://github.com/tscircuit/jscad-electronics/pull/201) | 🐙 Minor | ⭐⭐ | rushabhcodes | Adds notchRadius property to QFP, LQFP, and TQFP components for accurate notch rendering and updates snapshot tests that were previously skipped due to minimal differences. |

<details>
<summary>🐌 Tiny Contributions (8)</summary>

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#206](https://github.com/tscircuit/jscad-electronics/pull/206) | 🐌 Tiny | rushabhcodes | Pins the bun version to 1.3.1 in the CI workflow to resolve test errors caused by using the latest version. |
| [#202](https://github.com/tscircuit/jscad-electronics/pull/202) | 🐌 Tiny | rushabhcodes | Adds support for the SOD882 diode package to the 3D footprint rendering library, including implementation, integration, example usage, and snapshot testing. |
| [#197](https://github.com/tscircuit/jscad-electronics/pull/197) | 🐌 Tiny | rushabhcodes | Adds support for rendering the MicroMELF package in the 3D footprint visualizer, including a new component and tests. |
| [#195](https://github.com/tscircuit/jscad-electronics/pull/195) | 🐌 Tiny | rushabhcodes | Adds support for the MELF (Metal Electrode Leadless Face) package by introducing a new MELF component for rendering, integrating it into the main rendering logic, and providing an example and test for the new package. |
| [#198](https://github.com/tscircuit/jscad-electronics/pull/198) | 🐌 Tiny | rushabhcodes | Adds support for the MSOP chip package to the 3D footprint rendering library, including a new MSOP component, integration into the renderer, and test coverage. |
| [#199](https://github.com/tscircuit/jscad-electronics/pull/199) | 🐌 Tiny | rushabhcodes | Adds support for the MS-012 chip package to the 3D footprint rendering system, including a new component, integration into the renderer, and a test for rendering correctness. |
| [#204](https://github.com/tscircuit/jscad-electronics/pull/204) | 🐌 Tiny | nailoo | Adds the SOT723 footprint to the Footprinter3D component for rendering in 3D. |
| [#196](https://github.com/tscircuit/jscad-electronics/pull/196) | 🐌 Tiny | nailoo | Add a new MINIMELF component and its corresponding 3D model to the library, along with an example usage. |

</details>

### [tscircuit/kicadts](https://github.com/tscircuit/kicadts)

| PR # | Impact | Rating | Contributor | Description |
|------|--------|--------|-------------|-------------|
| [#18](https://github.com/tscircuit/kicadts/pull/18) | 🐳 Major | ⭐⭐⭐ | imrishabh18 | Add new classes for graphical elements: GrCircle, GrRect, and Group, including properties for locked state and UUID. |
| [#19](https://github.com/tscircuit/kicadts/pull/19) | 🐳 Major | ⭐⭐⭐ | imrishabh18 | Adds GrPoly class for polygon representation and enhances GrText class by introducing render_cache functionality for improved text rendering. |
| [#20](https://github.com/tscircuit/kicadts/pull/20) | 🐙 Minor | ⭐⭐ | imrishabh18 | Adds support for the fill token in PadPrimitiveGrPoly, allowing it to accept a string value for fill properties. |
| [#21](https://github.com/tscircuit/kicadts/pull/21) | 🐙 Minor | ⭐⭐ | imrishabh18 | Adds graphic polygon and rectangle support to the KicadPcb type in the KiCad TypeScript library. |

### [tscircuit/circuit-json-to-kicad](https://github.com/tscircuit/circuit-json-to-kicad)

| PR # | Impact | Rating | Contributor | Description |
|------|--------|--------|-------------|-------------|
| [#29](https://github.com/tscircuit/circuit-json-to-kicad/pull/29) | 🐳 Major | ⭐⭐⭐ | imrishabh18 | The ViaGridBoard in the common module should be supported for export |

### [tscircuit/kicad-to-circuit-json](https://github.com/tscircuit/kicad-to-circuit-json)

| PR # | Impact | Rating | Contributor | Description |
|------|--------|--------|-------------|-------------|
| [#20](https://github.com/tscircuit/kicad-to-circuit-json/pull/20) | 🐳 Major | ⭐⭐⭐ | imrishabh18 | This pull request introduces the ViaGridBoard feature, which processes filled rectangles on copper layers and creates corresponding SMT pads in the PCB design. It enhances the PCB graphics processing capabilities by adding support for gr_rect elements, allowing for better representation of PCB designs in the Circuit JSON format. Additionally, it updates the kicadts dependency to a newer version and includes new test snapshots and assets for the ViaGridBoard functionality. |
| [#21](https://github.com/tscircuit/kicad-to-circuit-json/pull/21) | 🐳 Major | ⭐⭐⭐ | imrishabh18 | Adds functionality to parse gr_poly elements and convert them into pcb_smtpad shape polygons for filled polygons on copper layers. |
| [#23](https://github.com/tscircuit/kicad-to-circuit-json/pull/23) | 🐙 Minor | ⭐⭐ | imrishabh18 | Adds support for gr_poly shapes in pcb_smtpad, allowing for polygon-shaped SMT pads in PCB designs. |
| [#22](https://github.com/tscircuit/kicad-to-circuit-json/pull/22) | 🐙 Minor | ⭐⭐ | imrishabh18 | This pull request adds the missing shape for the smtpad shaped rect in the PCB design process. It ensures that the correct shape is assigned to the smtpad based on the provided parameters, enhancing the accuracy of the PCB representation in the circuit JSON output. |

## Changes by Contributor

### [Asymtode712](https://github.com/Asymtode712)

| PRs # | Impact | Rating | Description |
|------|--------|--------|-------------|
| [#1620](https://github.com/tscircuit/core/pull/1620) | 🐙 Minor | ⭐⭐ | Adds visual verification for the pcbStyle.silkscreenFontSize override by including a silkscreen text element and dimension annotation to ensure correct font size rendering in tests. |
| [#1617](https://github.com/tscircuit/core/pull/1617) | 🐙 Minor | ⭐⭐ | Implements pcbStyle inheritance for kicad: footprints by passing the resolved pcbStyle to footprintLibraryMap functions, enabling override of silkscreen font size and other style properties. |

<details>
<summary>🐌 Tiny Contributions (4)</summary>

| PR # | Impact | Description |
|------|--------|-------------|
| [#145](https://github.com/tscircuit/schematic-viewer/pull/145) | 🐌 Tiny | Integrates release-tracker into schematic-viewer workflows by adding workflows to notify on feature merges and version updates. |
| [#465](https://github.com/tscircuit/pcb-viewer/pull/465) | 🐌 Tiny | Integrates release-tracker into pcb-viewer workflows by adding notifications for feature merges and version updates. |
| [#553](https://github.com/tscircuit/3d-viewer/pull/553) | 🐌 Tiny | Integrate release-tracker into 3d-viewer workflows by adding workflows to notify on feature merges and version updates. |
| [#1700](https://github.com/tscircuit/runframe/pull/1700) | 🐌 Tiny | Integrates release-tracker into runframe workflows by adding notifications for feature merges and version updates. |

</details>

### [tscircuitbot](https://github.com/tscircuitbot)


<details>
<summary>🐌 Tiny Contributions (142)</summary>

| PR # | Impact | Description |
|------|--------|-------------|
| [#466](https://github.com/tscircuit/pcb-viewer/pull/466) | 🐌 Tiny | Automated package update |
| [#464](https://github.com/tscircuit/pcb-viewer/pull/464) | 🐌 Tiny | Automated package update |
| [#463](https://github.com/tscircuit/pcb-viewer/pull/463) | 🐌 Tiny | Automated package update |
| [#1287](https://github.com/tscircuit/tscircuit/pull/1287) | 🐌 Tiny | Automated package update |
| [#1286](https://github.com/tscircuit/tscircuit/pull/1286) | 🐌 Tiny | Updates the tscircuitcli package version from 0.1.464 to 0.1.466 in package.json |
| [#1285](https://github.com/tscircuit/tscircuit/pull/1285) | 🐌 Tiny | Automated package update |
| [#1284](https://github.com/tscircuit/tscircuit/pull/1284) | 🐌 Tiny | Updates the version of the tscircuitrunframe package from 0.0.1230 to 0.0.1231 in package.json |
| [#1283](https://github.com/tscircuit/tscircuit/pull/1283) | 🐌 Tiny | Automated package update |
| [#1282](https://github.com/tscircuit/tscircuit/pull/1282) | 🐌 Tiny | Automated package update |
| [#1281](https://github.com/tscircuit/tscircuit/pull/1281) | 🐌 Tiny | Automated package update |
| [#1280](https://github.com/tscircuit/tscircuit/pull/1280) | 🐌 Tiny | Automated package update |
| [#1279](https://github.com/tscircuit/tscircuit/pull/1279) | 🐌 Tiny | Automated package update |
| [#1276](https://github.com/tscircuit/tscircuit/pull/1276) | 🐌 Tiny | Automated package update |
| [#1274](https://github.com/tscircuit/tscircuit/pull/1274) | 🐌 Tiny | Automated package update |
| [#1272](https://github.com/tscircuit/tscircuit/pull/1272) | 🐌 Tiny | Automated package update |
| [#1269](https://github.com/tscircuit/tscircuit/pull/1269) | 🐌 Tiny | Automated package update |
| [#1268](https://github.com/tscircuit/tscircuit/pull/1268) | 🐌 Tiny | Automated package update |
| [#1267](https://github.com/tscircuit/tscircuit/pull/1267) | 🐌 Tiny | Automated package update |
| [#1266](https://github.com/tscircuit/tscircuit/pull/1266) | 🐌 Tiny | Updates the tscircuitcli package from version 0.1.444 to 0.1.445 and the tscircuitrunframe package from version 0.0.1207 to 0.0.1208 in package.json |
| [#1265](https://github.com/tscircuit/tscircuit/pull/1265) | 🐌 Tiny | Automated package update |
| [#1264](https://github.com/tscircuit/tscircuit/pull/1264) | 🐌 Tiny | Updates the tscircuitcli package from version 0.1.443 to 0.1.444 and the tscircuitrunframe package from version 0.0.1206 to 0.0.1207 in package.json |
| [#1972](https://github.com/tscircuit/tscircuit.com/pull/1972) | 🐌 Tiny | Automated package update to version 0.0.138 |
| [#1971](https://github.com/tscircuit/tscircuit.com/pull/1971) | 🐌 Tiny | Updates the tscircuiteval package from version 0.0.458 to 0.0.460 |
| [#1966](https://github.com/tscircuit/tscircuit.com/pull/1966) | 🐌 Tiny | Automated package update |
| [#1960](https://github.com/tscircuit/tscircuit.com/pull/1960) | 🐌 Tiny | Updates the tscircuiteval package from version 0.0.456 to 0.0.457 |
| [#1959](https://github.com/tscircuit/tscircuit.com/pull/1959) | 🐌 Tiny | Updates the tscircuiteval package from version 0.0.454 to 0.0.456 |
| [#1957](https://github.com/tscircuit/tscircuit.com/pull/1957) | 🐌 Tiny | Updates the tscircuiteval package from version 0.0.453 to 0.0.454 |
| [#1954](https://github.com/tscircuit/tscircuit.com/pull/1954) | 🐌 Tiny | Updates the tscircuiteval package from version 0.0.452 to 0.0.453 in the package.json file. |
| [#1951](https://github.com/tscircuit/tscircuit.com/pull/1951) | 🐌 Tiny | Automated package update |
| [#1484](https://github.com/tscircuit/eval/pull/1484) | 🐌 Tiny | Automated package update |
| [#1482](https://github.com/tscircuit/eval/pull/1482) | 🐌 Tiny | Automated package update |
| [#1481](https://github.com/tscircuit/eval/pull/1481) | 🐌 Tiny | Automated package update |
| [#1479](https://github.com/tscircuit/eval/pull/1479) | 🐌 Tiny | Automated package update |
| [#1474](https://github.com/tscircuit/eval/pull/1474) | 🐌 Tiny | Automated package update |
| [#1473](https://github.com/tscircuit/eval/pull/1473) | 🐌 Tiny | Updates the version of the tscircuitcore package from 0.0.849 to 0.0.850 in package.json |
| [#1471](https://github.com/tscircuit/eval/pull/1471) | 🐌 Tiny | Automated package update |
| [#1470](https://github.com/tscircuit/eval/pull/1470) | 🐌 Tiny | Automated package update |
| [#1468](https://github.com/tscircuit/eval/pull/1468) | 🐌 Tiny | Automated package update |
| [#1467](https://github.com/tscircuit/eval/pull/1467) | 🐌 Tiny | Automated package update |
| [#1466](https://github.com/tscircuit/eval/pull/1466) | 🐌 Tiny | Automated package update |
| [#1465](https://github.com/tscircuit/eval/pull/1465) | 🐌 Tiny | Automated package update |
| [#1463](https://github.com/tscircuit/eval/pull/1463) | 🐌 Tiny | Automated package update |
| [#1462](https://github.com/tscircuit/eval/pull/1462) | 🐌 Tiny | Automated package update |
| [#1460](https://github.com/tscircuit/eval/pull/1460) | 🐌 Tiny | Automated package update |
| [#1459](https://github.com/tscircuit/eval/pull/1459) | 🐌 Tiny | Automated package update |
| [#1731](https://github.com/tscircuit/runframe/pull/1731) | 🐌 Tiny | Updates the package version from 0.0.1230 to 0.0.1231 in package.json |
| [#1730](https://github.com/tscircuit/runframe/pull/1730) | 🐌 Tiny | Updates the tscircuit3d-viewer package to version 0.0.431 in package.json |
| [#1729](https://github.com/tscircuit/runframe/pull/1729) | 🐌 Tiny | Automated package update |
| [#1728](https://github.com/tscircuit/runframe/pull/1728) | 🐌 Tiny | Updates the tscircuiteval package to version 0.0.460 |
| [#1726](https://github.com/tscircuit/runframe/pull/1726) | 🐌 Tiny | Automated package version bump from 0.0.1228 to 0.0.1229 |
| [#1724](https://github.com/tscircuit/runframe/pull/1724) | 🐌 Tiny | Automated package update |
| [#1723](https://github.com/tscircuit/runframe/pull/1723) | 🐌 Tiny | Updates the tscircuiteval package to version 0.0.458 in the package.json file. |
| [#1722](https://github.com/tscircuit/runframe/pull/1722) | 🐌 Tiny | Automated package update |
| [#1720](https://github.com/tscircuit/runframe/pull/1720) | 🐌 Tiny | Automated package update to version 0.0.1226 |
| [#1718](https://github.com/tscircuit/runframe/pull/1718) | 🐌 Tiny | Updates the package version from 0.0.1224 to 0.0.1225 in package.json |
| [#1717](https://github.com/tscircuit/runframe/pull/1717) | 🐌 Tiny | Updates the package version from 0.0.1223 to 0.0.1224 in package.json |
| [#1716](https://github.com/tscircuit/runframe/pull/1716) | 🐌 Tiny | Updates the tscircuit3d-viewer package from version 0.0.429 to 0.0.430 |
| [#1715](https://github.com/tscircuit/runframe/pull/1715) | 🐌 Tiny | Automated package version bump from 0.0.1222 to 0.0.1223 |
| [#1713](https://github.com/tscircuit/runframe/pull/1713) | 🐌 Tiny | Updates the package version from 0.0.1221 to 0.0.1222 in package.json |
| [#1711](https://github.com/tscircuit/runframe/pull/1711) | 🐌 Tiny | Updates the package version from 0.0.1220 to 0.0.1221 in package.json |
| [#1710](https://github.com/tscircuit/runframe/pull/1710) | 🐌 Tiny | Updates the tscircuiteval package to version 0.0.457 in the package.json file. |
| [#1708](https://github.com/tscircuit/runframe/pull/1708) | 🐌 Tiny | Automated package update to version 0.0.1220 |
| [#1707](https://github.com/tscircuit/runframe/pull/1707) | 🐌 Tiny | Updates the tscircuiteval package to version 0.0.456 |
| [#1706](https://github.com/tscircuit/runframe/pull/1706) | 🐌 Tiny | Updates the tscircuiteval package to version 0.0.455 in the package.json file. |
| [#1705](https://github.com/tscircuit/runframe/pull/1705) | 🐌 Tiny | Updates the package version from 0.0.1218 to 0.0.1219 in package.json |
| [#1703](https://github.com/tscircuit/runframe/pull/1703) | 🐌 Tiny | Automated package update |
| [#1702](https://github.com/tscircuit/runframe/pull/1702) | 🐌 Tiny | Updates the tscircuitschematic-viewer package from version 2.0.47 to 2.0.48 |
| [#1699](https://github.com/tscircuit/runframe/pull/1699) | 🐌 Tiny | Automated package update |
| [#1698](https://github.com/tscircuit/runframe/pull/1698) | 🐌 Tiny | Updates the tscircuitpcb-viewer package from version 1.11.253 to 1.11.254 |
| [#1697](https://github.com/tscircuit/runframe/pull/1697) | 🐌 Tiny | Automated package update |
| [#1696](https://github.com/tscircuit/runframe/pull/1696) | 🐌 Tiny | Updates the tscircuit3d-viewer package from version 0.0.428 to 0.0.429 |
| [#1695](https://github.com/tscircuit/runframe/pull/1695) | 🐌 Tiny | Automated package update |
| [#1694](https://github.com/tscircuit/runframe/pull/1694) | 🐌 Tiny | Updates the tscircuiteval package to version 0.0.454 in package.json |
| [#1693](https://github.com/tscircuit/runframe/pull/1693) | 🐌 Tiny | Automated package update |
| [#1692](https://github.com/tscircuit/runframe/pull/1692) | 🐌 Tiny | Updates the tscircuit3d-viewer package to version 0.0.428 in package.json |
| [#1691](https://github.com/tscircuit/runframe/pull/1691) | 🐌 Tiny | Automated package update |
| [#1690](https://github.com/tscircuit/runframe/pull/1690) | 🐌 Tiny | Updates the tscircuitpcb-viewer package from version 1.11.252 to 1.11.253 |
| [#1689](https://github.com/tscircuit/runframe/pull/1689) | 🐌 Tiny | Automated package update |
| [#1688](https://github.com/tscircuit/runframe/pull/1688) | 🐌 Tiny | Updates the tscircuitpcb-viewer package to version 1.11.252 |
| [#1687](https://github.com/tscircuit/runframe/pull/1687) | 🐌 Tiny | Automated package update |
| [#1686](https://github.com/tscircuit/runframe/pull/1686) | 🐌 Tiny | Updates the tscircuit3d-viewer package to version 0.0.427 in package.json |
| [#1685](https://github.com/tscircuit/runframe/pull/1685) | 🐌 Tiny | Updates the package version from 0.0.1209 to 0.0.1210 in package.json |
| [#1684](https://github.com/tscircuit/runframe/pull/1684) | 🐌 Tiny | Automated package update |
| [#1683](https://github.com/tscircuit/runframe/pull/1683) | 🐌 Tiny | Updates the package version from 0.0.1208 to 0.0.1209 in package.json |
| [#1682](https://github.com/tscircuit/runframe/pull/1682) | 🐌 Tiny | Updates the tscircuiteval package to version 0.0.452 in the package.json file. |
| [#1681](https://github.com/tscircuit/runframe/pull/1681) | 🐌 Tiny | Automated package update |
| [#1680](https://github.com/tscircuit/runframe/pull/1680) | 🐌 Tiny | Automated package update |
| [#888](https://github.com/tscircuit/cli/pull/888) | 🐌 Tiny | Automated package update to version 0.1.466 |
| [#886](https://github.com/tscircuit/cli/pull/886) | 🐌 Tiny | Updates the tscircuitrunframe package from version 0.0.1230 to 0.0.1231 in the package.json file. |
| [#887](https://github.com/tscircuit/cli/pull/887) | 🐌 Tiny | Automated package update |
| [#885](https://github.com/tscircuit/cli/pull/885) | 🐌 Tiny | Automated package update |
| [#884](https://github.com/tscircuit/cli/pull/884) | 🐌 Tiny | Updates the tscircuitrunframe package to version 0.0.1230 |
| [#882](https://github.com/tscircuit/cli/pull/882) | 🐌 Tiny | Automated package update |
| [#881](https://github.com/tscircuit/cli/pull/881) | 🐌 Tiny | Updates the tscircuitrunframe package from version 0.0.1225 to 0.0.1228 and sets bun version to 1.3.1 in the CI workflow. |
| [#876](https://github.com/tscircuit/cli/pull/876) | 🐌 Tiny | Automated package update |
| [#875](https://github.com/tscircuit/cli/pull/875) | 🐌 Tiny | Updates the tscircuitrunframe package from version 0.0.1224 to 0.0.1225 |
| [#874](https://github.com/tscircuit/cli/pull/874) | 🐌 Tiny | Automated package update |
| [#873](https://github.com/tscircuit/cli/pull/873) | 🐌 Tiny | Updates the tscircuitrunframe package from version 0.0.1223 to 0.0.1224 |
| [#871](https://github.com/tscircuit/cli/pull/871) | 🐌 Tiny | Updates the tscircuitrunframe package to version 0.0.1223 in package.json |
| [#872](https://github.com/tscircuit/cli/pull/872) | 🐌 Tiny | Automated package update |
| [#870](https://github.com/tscircuit/cli/pull/870) | 🐌 Tiny | Automated package update |
| [#869](https://github.com/tscircuit/cli/pull/869) | 🐌 Tiny | Updates the tscircuitrunframe package to version 0.0.1222 in package.json |
| [#866](https://github.com/tscircuit/cli/pull/866) | 🐌 Tiny | Automated package update |
| [#863](https://github.com/tscircuit/cli/pull/863) | 🐌 Tiny | Automated package update |
| [#862](https://github.com/tscircuit/cli/pull/862) | 🐌 Tiny | Updates the tscircuitrunframe package from version 0.0.1218 to 0.0.1219 |
| [#861](https://github.com/tscircuit/cli/pull/861) | 🐌 Tiny | Automated package update |
| [#860](https://github.com/tscircuit/cli/pull/860) | 🐌 Tiny | Updates the tscircuitrunframe package from version 0.0.1216 to 0.0.1218 |
| [#858](https://github.com/tscircuit/cli/pull/858) | 🐌 Tiny | Automated package update to version 0.1.455 |
| [#857](https://github.com/tscircuit/cli/pull/857) | 🐌 Tiny | Updates the tscircuitrunframe package from version 0.0.1215 to 0.0.1216 |
| [#856](https://github.com/tscircuit/cli/pull/856) | 🐌 Tiny | Automated package update |
| [#855](https://github.com/tscircuit/cli/pull/855) | 🐌 Tiny | Updates the tscircuitrunframe package from version 0.0.1214 to 0.0.1215 |
| [#854](https://github.com/tscircuit/cli/pull/854) | 🐌 Tiny | Updates the package version from 0.1.452 to 0.1.453 in package.json |
| [#853](https://github.com/tscircuit/cli/pull/853) | 🐌 Tiny | Updates the tscircuitrunframe package from version 0.0.1213 to 0.0.1214 |
| [#852](https://github.com/tscircuit/cli/pull/852) | 🐌 Tiny | Updates the package version from 0.1.451 to 0.1.452 in package.json |
| [#851](https://github.com/tscircuit/cli/pull/851) | 🐌 Tiny | Updates the tscircuitrunframe package from version 0.0.1212 to 0.0.1213 |
| [#850](https://github.com/tscircuit/cli/pull/850) | 🐌 Tiny | Automated package update |
| [#849](https://github.com/tscircuit/cli/pull/849) | 🐌 Tiny | Updates the tscircuitrunframe package to version 0.0.1212 in the package.json file. |
| [#848](https://github.com/tscircuit/cli/pull/848) | 🐌 Tiny | Automated package update |
| [#847](https://github.com/tscircuit/cli/pull/847) | 🐌 Tiny | Automated package update |
| [#846](https://github.com/tscircuit/cli/pull/846) | 🐌 Tiny | Updates the tscircuitrunframe package from version 0.0.1210 to 0.0.1211 |
| [#845](https://github.com/tscircuit/cli/pull/845) | 🐌 Tiny | Automated package update |
| [#843](https://github.com/tscircuit/cli/pull/843) | 🐌 Tiny | Automated package update |
| [#842](https://github.com/tscircuit/cli/pull/842) | 🐌 Tiny | Updates the tscircuitrunframe package from version 0.0.1209 to 0.0.1210 |
| [#840](https://github.com/tscircuit/cli/pull/840) | 🐌 Tiny | Automated package update |
| [#839](https://github.com/tscircuit/cli/pull/839) | 🐌 Tiny | Updates the tscircuitrunframe package from version 0.0.1208 to 0.0.1209 |
| [#838](https://github.com/tscircuit/cli/pull/838) | 🐌 Tiny | Automated package update |
| [#837](https://github.com/tscircuit/cli/pull/837) | 🐌 Tiny | Updates the tscircuitrunframe package from version 0.0.1207 to 0.0.1208 |
| [#836](https://github.com/tscircuit/cli/pull/836) | 🐌 Tiny | Automated package update |
| [#835](https://github.com/tscircuit/cli/pull/835) | 🐌 Tiny | Updates the tscircuitrunframe package from version 0.0.1206 to 0.0.1207 |
| [#555](https://github.com/tscircuit/svg.tscircuit.com/pull/555) | 🐌 Tiny | Updates the tscircuit package version from 0.0.873 to 0.0.874 in package.json |
| [#554](https://github.com/tscircuit/svg.tscircuit.com/pull/554) | 🐌 Tiny | Updates the tscircuit package version from 0.0.872 to 0.0.873 in package.json |
| [#553](https://github.com/tscircuit/svg.tscircuit.com/pull/553) | 🐌 Tiny | Automated package update |
| [#552](https://github.com/tscircuit/svg.tscircuit.com/pull/552) | 🐌 Tiny | Automated package update |
| [#25](https://github.com/tscircuit/copper-pour-solver/pull/25) | 🐌 Tiny | Automated package update |
| [#23](https://github.com/tscircuit/copper-pour-solver/pull/23) | 🐌 Tiny | Automated package update |
| [#21](https://github.com/tscircuit/copper-pour-solver/pull/21) | 🐌 Tiny | Automated package update |
| [#19](https://github.com/tscircuit/copper-pour-solver/pull/19) | 🐌 Tiny | Automated package update |
| [#17](https://github.com/tscircuit/copper-pour-solver/pull/17) | 🐌 Tiny | Automated package update |
| [#14](https://github.com/tscircuit/copper-pour-solver/pull/14) | 🐌 Tiny | Automated package update |
| [#12](https://github.com/tscircuit/copper-pour-solver/pull/12) | 🐌 Tiny | Automated package update to version 0.0.6 |
| [#10](https://github.com/tscircuit/copper-pour-solver/pull/10) | 🐌 Tiny | Automated package update to version 0.0.5 |
| [#8](https://github.com/tscircuit/copper-pour-solver/pull/8) | 🐌 Tiny | Automated package update |

</details>

### [techmannih](https://github.com/techmannih)

| PRs # | Impact | Rating | Description |
|------|--------|--------|-------------|
| [#341](https://github.com/tscircuit/circuit-json/pull/341) | 🐳 Major | ⭐⭐⭐ | Adds support for circular and rectangular holes in PCB design, allowing for more versatile hole shapes in circuit layouts. |
| [#555](https://github.com/tscircuit/3d-viewer/pull/555) | 🐳 Major | ⭐⭐⭐ | Adds support for rendering silkscreen circles in PCB designs, allowing for more detailed and customizable PCB layouts. |
| [#419](https://github.com/tscircuit/circuit-to-svg/pull/419) | 🐳 Major | ⭐⭐⭐ | Adds support for rectangular and circular PCB holes in SVG generation. |
| [#460](https://github.com/tscircuit/pcb-viewer/pull/460) | 🐙 Minor | ⭐⭐ | Adds support for corner radius in rectangle components, allowing for rounded corners in PCB designs. |
| [#491](https://github.com/tscircuit/props/pull/491) | 🐙 Minor | ⭐⭐ | Adds RectHoleProps interface for rectangular hole support in PCB layout, expanding the HoleProps type to include rectangular holes. |
| [#554](https://github.com/tscircuit/3d-viewer/pull/554) | 🐙 Minor | ⭐⭐ | Fixes rendering issues by ensuring non-null width and height values are asserted in PCB board rendering. |
| [#1622](https://github.com/tscircuit/core/pull/1622) | 🐙 Minor | ⭐⭐ | Fixes rendering issues in PCB board by ensuring non-null width and height values are asserted before calculations. |

<details>
<summary>🐌 Tiny Contributions (2)</summary>

| PR # | Impact | Description |
|------|--------|-------------|
| [#461](https://github.com/tscircuit/pcb-viewer/pull/461) | 🐌 Tiny | Fixes handling of optional width and height properties for the pcb_board element in rendering calculations. |
| [#407](https://github.com/tscircuit/footprinter/pull/407) | 🐌 Tiny | Adds a test for the sod123 footprint to ensure parity with KiCads representation. |

</details>

### [ShiboSoftwareDev](https://github.com/ShiboSoftwareDev)

| PRs # | Impact | Rating | Description |
|------|--------|--------|-------------|
| [#1621](https://github.com/tscircuit/core/pull/1621) | 🐳 Major | ⭐⭐⭐ | Replaces the internal copper pour generation logic with the new tscircuitcopper-pour-solver package, delegating complex geometry calculations to a dedicated package. |
| [#20](https://github.com/tscircuit/copper-pour-solver/pull/20) | 🐳 Major | ⭐⭐⭐ | Adds support for pcb_cutout elements to the copper pour solver, allowing for proper clearance around board cutouts. |
| [#18](https://github.com/tscircuit/copper-pour-solver/pull/18) | 🐳 Major | ⭐⭐⭐ | Add support for generating copper pour cutouts around vias and their connected traces, processing pcb_via elements as circular obstacles and updating pcb_trace parsing logic for multi-layer traces. |
| [#6](https://github.com/tscircuit/copper-pour-solver/pull/6) | 🐳 Major | ⭐⭐⭐ | Adds support for a boardEdgeMargin parameter to control clearance between copper pours and board edges, improving handling of complex board shapes. |
| [#2](https://github.com/tscircuit/copper-pour-solver/pull/2) | 🐳 Major | ⭐⭐⭐ | This pull request implements the core logic for the copper pour solver. It introduces a complete pipeline that takes a circuit-json input and generates B-Rep shapes for the copper pour regions. Key changes include: Copper Pour Solver Implementation: The CopperPourPipelineSolver is built out to process obstacles, perform boolean geometry operations using flatten-js, and generate final B-Rep shapes. Circuit JSON Conversion: A new function convertCircuitJsonToInputProblem is added to translate standard circuit-json elements (pads, traces, holes) into the solvers internal InputProblem format. Comprehensive Testing: A suite of snapshot tests has been added, rendering the output of the solver to SVG for multiple circuit configurations to visually validate the results. Type Definitions: Updated libtypes.ts to support various pad shapes (rect, circle, trace) and define the solvers input and output structures. Dependency Updates: Added flatten-jscore for geometric calculations and circuit-to-svg for test rendering. |
| [#490](https://github.com/tscircuit/props/pull/490) | 🐙 Minor | ⭐⭐ | Adds the cutoutMargin property to copper pours, allowing for a clearance to be set between the pour and board cutouts. |
| [#488](https://github.com/tscircuit/props/pull/488) | 🐙 Minor | ⭐⭐ | Adds the boardEdgeMargin property to the copper-pour component, allowing specification of a margin between a copper pour and the board edge. |
| [#1632](https://github.com/tscircuit/core/pull/1632) | 🐙 Minor | ⭐⭐ | Adds a new error element, simulation_unknown_experiment_error, to report SPICE simulation failures in circuit JSON. |
| [#1630](https://github.com/tscircuit/core/pull/1630) | 🐙 Minor | ⭐⭐ | Adds support for cutout margins in copper pours and includes a test to verify functionality. |
| [#1625](https://github.com/tscircuit/core/pull/1625) | 🐙 Minor | ⭐⭐ | Adds boardEdgeMargin and clearance properties to the CopperPour component for improved spacing control. |
| [#62](https://github.com/tscircuit/circuit-json-to-gerber/pull/62) | 🐙 Minor | ⭐⭐ | Adds a boolean property, covered_with_solder_mask, to copper pour elements, allowing for solder mask-free regions when set to false. |
| [#1483](https://github.com/tscircuit/eval/pull/1483) | 🐙 Minor | ⭐⭐ | Enables the partsEngineDisabled property to disable the parts engine when set to true in the configuration, ensuring that the parts engine is undefined and adding tests for verification. |
| [#24](https://github.com/tscircuit/copper-pour-solver/pull/24) | 🐙 Minor | ⭐⭐ | Fixes incorrect handling of board shapes defined by custom polygons in the copper pour solver due to inconsistent winding order, ensuring proper boolean operations for copper pour geometry. |

<details>
<summary>🐌 Tiny Contributions (13)</summary>

| PR # | Impact | Description |
|------|--------|-------------|
| [#1278](https://github.com/tscircuit/tscircuit/pull/1278) | 🐌 Tiny | Updates the versions of the tscircuitcore and tscircuiteval dependencies in package.json |
| [#1275](https://github.com/tscircuit/tscircuit/pull/1275) | 🐌 Tiny | Adds new dependencies to the project to resolve package update issues. |
| [#25](https://github.com/tscircuit/plop/pull/25) | 🐌 Tiny | Enable committing and auto-merging pver update |
| [#550](https://github.com/tscircuit/svg.tscircuit.com/pull/550) | 🐌 Tiny | Updates the bun version to 1.3.1 and the tscircuit dependency to version 0.0.870 to ensure proper functionality of the copper pour in documentation. |
| [#22](https://github.com/tscircuit/copper-pour-solver/pull/22) | 🐌 Tiny | Removes console log statements from the circuit JSON conversion and copper pour processing functions to clean up the codebase. |
| [#9](https://github.com/tscircuit/copper-pour-solver/pull/9) | 🐌 Tiny | This change renames several test files and their corresponding assets to have more descriptive names that reflect their purpose. |
| [#11](https://github.com/tscircuit/copper-pour-solver/pull/11) | 🐌 Tiny | Renames boardEdgeMargin to board_edge_margin for consistency with the snake_case naming convention used for other properties in the project. |
| [#13](https://github.com/tscircuit/copper-pour-solver/pull/13) | 🐌 Tiny | Fixes the workflow to only commit pver release updates and disables auto-merge of upstream changes. |
| [#16](https://github.com/tscircuit/copper-pour-solver/pull/16) | 🐌 Tiny | Enables auto-merging of pull requests in the GitHub workflow for pver. |
| [#7](https://github.com/tscircuit/copper-pour-solver/pull/7) | 🐌 Tiny | Auto updates the package version in the GitHub workflow for releases. |
| [#4](https://github.com/tscircuit/copper-pour-solver/pull/4) | 🐌 Tiny | Adds a new script to check formatting in the project using biome. |
| [#5](https://github.com/tscircuit/copper-pour-solver/pull/5) | 🐌 Tiny | Removes the lockfile as it is not needed. |
| [#3](https://github.com/tscircuit/copper-pour-solver/pull/3) | 🐌 Tiny | Adds a CODEOWNERS file to define code ownership for the repository |

</details>

### [seveibar](https://github.com/seveibar)

| PRs # | Impact | Rating | Description |
|------|--------|--------|-------------|
| [#108](https://github.com/tscircuit/jlcsearch/pull/108) | 🐳 Major | ⭐⭐⭐ | Add a resistor_array derived table that extracts topology, temperature coefficient, and other helpful fields, expose a resistor arrays list page and JSON endpoint with filtering for package, topology, and value, register the new table in the setup script and regenerate Kysely types so the table is available in the database client |
| [#302](https://github.com/tscircuit/tscircuit-autorouter/pull/302) | 🐳 Major | ⭐⭐⭐ | Adds an optional offBoardConnectsTo array to SRJ obstacles to describe off-board connectivity and merges these connections into the connectivity map, allowing assignable obstacles to share nets. |
| [#1634](https://github.com/tscircuit/core/pull/1634) | 🐙 Minor | ⭐⭐ | Ensures copper pours propagate the coveredWithSolderMask flag into circuit JSON output and adds a regression test for this functionality. |
| [#1627](https://github.com/tscircuit/core/pull/1627) | 🐙 Minor | ⭐⭐ | Ensures CopperPour creates missing nets from its connectsTo property during the CreateNetsFromProps phase |
| [#255](https://github.com/tscircuit/contribution-tracker/pull/255) | 🐙 Minor | ⭐⭐ | Increases the base sponsorship amounts based on median and maximum star counts in the getSponsorshipAmount function. |
| [#107](https://github.com/tscircuit/jlcsearch/pull/107) | 🐙 Minor | ⭐⭐ | Strips leading C from part-number queries and filters by the numeric LCSC code in the search endpoint. |

<details>
<summary>🐌 Tiny Contributions (9)</summary>

| PR # | Impact | Description |
|------|--------|-------------|
| [#1273](https://github.com/tscircuit/tscircuit/pull/1273) | 🐌 Tiny | Updates the CLI and RunFrame dependencies to their latest versions in package.json |
| [#1271](https://github.com/tscircuit/tscircuit/pull/1271) | 🐌 Tiny | Updates the version of the tscircuitrunframe dependency from 0.0.1209 to 0.0.1222 in package.json |
| [#24](https://github.com/tscircuit/plop/pull/24) | 🐌 Tiny | Add a GitHub workflow that triggers on merged pull requests to notify the release tracker service about merged features. |
| [#1478](https://github.com/tscircuit/eval/pull/1478) | 🐌 Tiny | Updates the versions of the tscircuitprops and circuit-json dependencies in package.json and modifies the bun-test workflow to use bun version 1.3.1 instead of the latest version. |
| [#1725](https://github.com/tscircuit/runframe/pull/1725) | 🐌 Tiny | Adds a prefabricated board example that reproduces a broken solder mask export issue from fabrication files. |
| [#1721](https://github.com/tscircuit/runframe/pull/1721) | 🐌 Tiny | Updates the versions of the circuit-json and props dependencies in the package.json file. |
| [#1714](https://github.com/tscircuit/runframe/pull/1714) | 🐌 Tiny | Updates the version of the circuit-json-to-gerber dependency in package.json from 0.0.35 to 0.0.37 |
| [#1704](https://github.com/tscircuit/runframe/pull/1704) | 🐌 Tiny | Updates the circuit-json-to-gerber dependency to version 0.0.35 to include the copper pour soldermask feature. |
| [#314](https://github.com/tscircuit/docs/pull/314) | 🐌 Tiny | Rewrite the measuring circuit size guide to focus on board template selection and remove Adom-specific wording, document JSON metadata imports and add a metadata-driven carrier example, embed a CircuitPreview that loads metadata via fsMap to demonstrate template selection. |

</details>

### [Enity300](https://github.com/Enity300)

| PRs # | Impact | Rating | Description |
|------|--------|--------|-------------|
| [#339](https://github.com/tscircuit/circuit-json/pull/339) | 🐳 Major | ⭐⭐⭐ | This PR makes the width and height properties optional on the PCBBoard interface to support boards with custom outlines. |

<details>
<summary>🐌 Tiny Contributions (2)</summary>

| PR # | Impact | Description |
|------|--------|-------------|
| [#340](https://github.com/tscircuit/circuit-json/pull/340) | 🐌 Tiny | Adds an optional shape property to the PCBBoard interface, allowing specification of board shape as either rectangular or polygonal, while maintaining backward compatibility. |
| [#260](https://github.com/tscircuit/contribution-tracker/pull/260) | 🐌 Tiny | Adds a new user Enity300 to the users.json file. |

</details>

### [rushabhcodes](https://github.com/rushabhcodes)

| PRs # | Impact | Rating | Description |
|------|--------|--------|-------------|
| [#489](https://github.com/tscircuit/props/pull/489) | 🐙 Minor | ⭐⭐ | Adds an optional property, minTraceWidth, to group components for specifying minimum trace width in TypeScript interfaces and schema validation. |
| [#208](https://github.com/tscircuit/jscad-electronics/pull/208) | 🐙 Minor | ⭐⭐ | Fixes inaccuracies in the rendering of QFP, LQFP, and TQFP chip components by adjusting lead placements, body rendering, and physical parameters for better alignment with real-world specifications. |
| [#201](https://github.com/tscircuit/jscad-electronics/pull/201) | 🐙 Minor | ⭐⭐ | Adds notchRadius property to QFP, LQFP, and TQFP components for accurate notch rendering and updates snapshot tests that were previously skipped due to minimal differences. |

<details>
<summary>🐌 Tiny Contributions (10)</summary>

| PR # | Impact | Description |
|------|--------|-------------|
| [#409](https://github.com/tscircuit/footprinter/pull/409) | 🐌 Tiny | Pins the bun version to 1.3.1 in the CI workflow to resolve test errors caused by using the latest version. |
| [#406](https://github.com/tscircuit/footprinter/pull/406) | 🐌 Tiny | Adds new parity snapshot tests for MELF diode footprints, ensuring that the generated SVGs from the Footprinter tool match those from KiCad for several MELF package variants. |
| [#206](https://github.com/tscircuit/jscad-electronics/pull/206) | 🐌 Tiny | Pins the bun version to 1.3.1 in the CI workflow to resolve test errors caused by using the latest version. |
| [#202](https://github.com/tscircuit/jscad-electronics/pull/202) | 🐌 Tiny | Adds support for the SOD882 diode package to the 3D footprint rendering library, including implementation, integration, example usage, and snapshot testing. |
| [#197](https://github.com/tscircuit/jscad-electronics/pull/197) | 🐌 Tiny | Adds support for rendering the MicroMELF package in the 3D footprint visualizer, including a new component and tests. |
| [#195](https://github.com/tscircuit/jscad-electronics/pull/195) | 🐌 Tiny | Adds support for the MELF (Metal Electrode Leadless Face) package by introducing a new MELF component for rendering, integrating it into the main rendering logic, and providing an example and test for the new package. |
| [#198](https://github.com/tscircuit/jscad-electronics/pull/198) | 🐌 Tiny | Adds support for the MSOP chip package to the 3D footprint rendering library, including a new MSOP component, integration into the renderer, and test coverage. |
| [#199](https://github.com/tscircuit/jscad-electronics/pull/199) | 🐌 Tiny | Adds support for the MS-012 chip package to the 3D footprint rendering system, including a new component, integration into the renderer, and a test for rendering correctness. |
| [#258](https://github.com/tscircuit/contribution-tracker/pull/258) | 🐌 Tiny | Adds the Discord ID and GitHub username of the user rushabhcodes to the users.json file. |
| [#308](https://github.com/tscircuit/docs/pull/308) | 🐌 Tiny | Wraps CircuitPreview components in board tags to ensure proper rendering in PCB view, while adding an acceptable border. |

</details>

### [RaghavArora14](https://github.com/RaghavArora14)

| PRs # | Impact | Rating | Description |
|------|--------|--------|-------------|
| [#416](https://github.com/tscircuit/circuit-to-svg/pull/416) | 🐳 Major | ⭐⭐⭐ | Adds a debug feature to visualize anchor position offsets for PCB components positioned relative to groups, including dimension lines and markers for clarity. |
| [#1955](https://github.com/tscircuit/tscircuit.com/pull/1955) | 🐳 Major | ⭐⭐⭐ | Fixes session handling by automatically clearing expired sessions and preventing duplicate unauthorized notifications when a 401 error occurs. |

<details>
<summary>🐌 Tiny Contributions (3)</summary>

| PR # | Impact | Description |
|------|--------|-------------|
| [#411](https://github.com/tscircuit/footprinter/pull/411) | 🐌 Tiny | Add intelligent defaults for TQFP footprints, allowing users to specify common pin layouts without needing to manually input all parameters each time. |
| [#259](https://github.com/tscircuit/contribution-tracker/pull/259) | 🐌 Tiny | Adds GitHub username and Discord ID for user RaghavArora14 in users.json |
| [#418](https://github.com/tscircuit/circuit-to-svg/pull/418) | 🐌 Tiny | Changes the bun version from latest to 1.3.1 to resolve CI test errors related to bun. |

</details>

### [nailoo](https://github.com/nailoo)


<details>
<summary>🐌 Tiny Contributions (3)</summary>

| PR # | Impact | Description |
|------|--------|-------------|
| [#559](https://github.com/tscircuit/3d-viewer/pull/559) | 🐌 Tiny | Updates the jscad-electronics dependency to version 0.0.88 in package.json |
| [#204](https://github.com/tscircuit/jscad-electronics/pull/204) | 🐌 Tiny | Adds the SOT723 footprint to the Footprinter3D component for rendering in 3D. |
| [#196](https://github.com/tscircuit/jscad-electronics/pull/196) | 🐌 Tiny | Add a new MINIMELF component and its corresponding 3D model to the library, along with an example usage. |

</details>

### [Abse2001](https://github.com/Abse2001)

| PRs # | Impact | Rating | Description |
|------|--------|--------|-------------|
| [#552](https://github.com/tscircuit/3d-viewer/pull/552) | 🐳 Major | ⭐⭐⭐ | Fixes the issue where selecting a camera preset always switched the camera to Custom and improves the default camera positioning in JSCAD and Manifold viewers by adding animation and cooldown logic to prevent user interactions from overriding presets. |

### [Ayushjhawar8](https://github.com/Ayushjhawar8)

| PRs # | Impact | Rating | Description |
|------|--------|--------|-------------|
| [#1673](https://github.com/tscircuit/runframe/pull/1673) | 🐳 Major | ⭐⭐⭐ | Fixes the natural sorting of filenames in the file selector component to ensure correct order based on numeric values. |
| [#551](https://github.com/tscircuit/3d-viewer/pull/551) | 🐙 Minor | ⭐⭐ | Fixes the default camera angle when loading boards in the viewer, ensuring they are displayed from the correct perspective. |

<details>
<summary>🐌 Tiny Contributions (3)</summary>

| PR # | Impact | Description |
|------|--------|-------------|
| [#1709](https://github.com/tscircuit/runframe/pull/1709) | 🐌 Tiny | Adds top spacing to error messages for improved visual styling in the ErrorTabContent component. |
| [#1672](https://github.com/tscircuit/runframe/pull/1672) | 🐌 Tiny | img width1021 height277 altimage srchttps:github.comuser-attachmentsassets4430e588-fc3e-4519-be92-f22a44b67fa2 |
| [#315](https://github.com/tscircuit/docs/pull/315) | 🐌 Tiny | Adjusts the indentation of nested documentation groups in the sidebar for better visual hierarchy and usability. |

</details>

### [0hmX](https://github.com/0hmX)


<details>
<summary>🐌 Tiny Contributions (1)</summary>

| PR # | Impact | Description |
|------|--------|-------------|
| [#1623](https://github.com/tscircuit/core/pull/1623) | 🐌 Tiny | Updates the schematic-trace-solver dependency to version 0.0.45, addressing issue 87. |

</details>

### [anshubatra2563-ux](https://github.com/anshubatra2563-ux)


<details>
<summary>🐌 Tiny Contributions (1)</summary>

| PR # | Impact | Description |
|------|--------|-------------|
| [#261](https://github.com/tscircuit/contribution-tracker/pull/261) | 🐌 Tiny | Removes console logs from the PrAttributeBadges component and updates key generation for mobile card and table rows in PrsTable component to include repository name for better uniqueness. |

</details>

### [imrishabh18](https://github.com/imrishabh18)

| PRs # | Impact | Rating | Description |
|------|--------|--------|-------------|
| [#841](https://github.com/tscircuit/cli/pull/841) | 🐳 Major | ⭐⭐⭐ | Adds support for transpiling TypeScript to ESM, CommonJS, and generating type declarations with the tsci build --transpile command. |
| [#18](https://github.com/tscircuit/kicadts/pull/18) | 🐳 Major | ⭐⭐⭐ | Add new classes for graphical elements: GrCircle, GrRect, and Group, including properties for locked state and UUID. |
| [#19](https://github.com/tscircuit/kicadts/pull/19) | 🐳 Major | ⭐⭐⭐ | Adds GrPoly class for polygon representation and enhances GrText class by introducing render_cache functionality for improved text rendering. |
| [#29](https://github.com/tscircuit/circuit-json-to-kicad/pull/29) | 🐳 Major | ⭐⭐⭐ | The ViaGridBoard in the common module should be supported for export |
| [#20](https://github.com/tscircuit/kicad-to-circuit-json/pull/20) | 🐳 Major | ⭐⭐⭐ | This pull request introduces the ViaGridBoard feature, which processes filled rectangles on copper layers and creates corresponding SMT pads in the PCB design. It enhances the PCB graphics processing capabilities by adding support for gr_rect elements, allowing for better representation of PCB designs in the Circuit JSON format. Additionally, it updates the kicadts dependency to a newer version and includes new test snapshots and assets for the ViaGridBoard functionality. |
| [#21](https://github.com/tscircuit/kicad-to-circuit-json/pull/21) | 🐳 Major | ⭐⭐⭐ | Adds functionality to parse gr_poly elements and convert them into pcb_smtpad shape polygons for filled polygons on copper layers. |
| [#63](https://github.com/tscircuit/circuit-json-to-gerber/pull/63) | 🐙 Minor | ⭐⭐ | Adds support for polygon-shaped SMT pads in Gerber command generation, allowing for accurate representation of complex pad shapes in PCB designs. |
| [#64](https://github.com/tscircuit/circuit-json-to-gerber/pull/64) | 🐙 Minor | ⭐⭐ | Adds tests to generate Excellon drill commands for both plated and unplated holes in the viagrid board, ensuring proper representation under the copper pour. |
| [#844](https://github.com/tscircuit/cli/pull/844) | 🐙 Minor | ⭐⭐ | Allows users to specify file paths using glob patterns when generating schematic and PCB snapshots. |
| [#20](https://github.com/tscircuit/kicadts/pull/20) | 🐙 Minor | ⭐⭐ | Adds support for the fill token in PadPrimitiveGrPoly, allowing it to accept a string value for fill properties. |
| [#21](https://github.com/tscircuit/kicadts/pull/21) | 🐙 Minor | ⭐⭐ | Adds graphic polygon and rectangle support to the KicadPcb type in the KiCad TypeScript library. |
| [#23](https://github.com/tscircuit/kicad-to-circuit-json/pull/23) | 🐙 Minor | ⭐⭐ | Adds support for gr_poly shapes in pcb_smtpad, allowing for polygon-shaped SMT pads in PCB designs. |
| [#22](https://github.com/tscircuit/kicad-to-circuit-json/pull/22) | 🐙 Minor | ⭐⭐ | This pull request adds the missing shape for the smtpad shaped rect in the PCB design process. It ensures that the correct shape is assigned to the smtpad based on the provided parameters, enhancing the accuracy of the PCB representation in the circuit JSON output. |

<details>
<summary>🐌 Tiny Contributions (1)</summary>

| PR # | Impact | Description |
|------|--------|-------------|
| [#1953](https://github.com/tscircuit/tscircuit.com/pull/1953) | 🐌 Tiny | Updates the tscircuitrunframe dependency version from 0.0.1198 to 0.0.1209 in package.json |

</details>

### [ArnavK-09](https://github.com/ArnavK-09)

| PRs # | Impact | Rating | Description |
|------|--------|--------|-------------|
| [#1970](https://github.com/tscircuit/tscircuit.com/pull/1970) | 🐳 Major | ⭐⭐⭐ | Adds filtering and search functionality for user profile organizations based on user input, improving the user experience in navigating organizations. |
| [#1968](https://github.com/tscircuit/tscircuit.com/pull/1968) | 🐳 Major | ⭐⭐⭐ | Adds support for tscircuit_handle in organization creation and update endpoints, while removing client-side modification of github_handle. |
| [#1961](https://github.com/tscircuit/tscircuit.com/pull/1961) | 🐳 Major | ⭐⭐⭐ | Adds meta tags for SEO optimization in release-related pages and improves error handling for package routes. |
| [#1964](https://github.com/tscircuit/tscircuit.com/pull/1964) | 🐳 Major | ⭐⭐⭐ | Adds a session check in the import component to ensure users are signed in before importing components, displaying an error message if not signed in. |
| [#1962](https://github.com/tscircuit/tscircuit.com/pull/1962) | 🐳 Major | ⭐⭐⭐ | Adds debug information for user account details in the user settings page, including GitHub username, email, account ID, and created date. |
| [#1969](https://github.com/tscircuit/tscircuit.com/pull/1969) | 🐙 Minor | ⭐⭐ | Only displays the email address of an account when the request is made by an authenticated user, ensuring that unauthenticated users do not have access to sensitive information. |
| [#877](https://github.com/tscircuit/cli/pull/877) | 🐙 Minor | ⭐⭐ | Fixes path handling in the build process to ensure correct resolution of file paths regardless of their format. |

<details>
<summary>🐌 Tiny Contributions (5)</summary>

| PR # | Impact | Description |
|------|--------|-------------|
| [#1965](https://github.com/tscircuit/tscircuit.com/pull/1965) | 🐌 Tiny | Changes the default view for package display from pcb to 3d in the package information handling. |
| [#1956](https://github.com/tscircuit/tscircuit.com/pull/1956) | 🐌 Tiny | Refactors the CodeEditor component to avoid refetching typings when the font size changes, improving performance and user experience. |
| [#1952](https://github.com/tscircuit/tscircuit.com/pull/1952) | 🐌 Tiny | Fixes the proxy URL used in the import dialog to ensure correct API calls are made. |
| [#1719](https://github.com/tscircuit/runframe/pull/1719) | 🐌 Tiny | before img width525 height828 altimage srchttps:github.comuser-attachmentsassets8b5ad571-da64-4fd1-8135-80415f3d570f   after img width519 height838 altimage srchttps:github.comuser-attachmentsassetscd547222-ac2e-4812-825d-fa984675759a |
| [#1712](https://github.com/tscircuit/runframe/pull/1712) | 🐌 Tiny | Fixes the package URL used in error reporting to ensure it correctly calls the function instead of referencing it as a variable. |

</details>

## Repository Owners

| Repository | Codeowners |
|------------|------------|
| [builder](https://github.com/tscircuit/builder/blob/main/.github/CODEOWNERS) | [seveibar](https://github.com/seveibar)
| [pcb-viewer](https://github.com/tscircuit/pcb-viewer/blob/main/.github/CODEOWNERS) | [seveibar](https://github.com/seveibar), [ShiboSoftwareDev](https://github.com/ShiboSoftwareDev)
| [footprints-old](https://github.com/tscircuit/footprints-old/blob/main/.github/CODEOWNERS) | [seveibar](https://github.com/seveibar)
| [footprinter](https://github.com/tscircuit/footprinter/blob/main/.github/CODEOWNERS) | [seveibar](https://github.com/seveibar), [techmannih](https://github.com/techmannih)
| [3d-viewer](https://github.com/tscircuit/3d-viewer/blob/main/.github/CODEOWNERS) | [ShiboSoftwareDev](https://github.com/ShiboSoftwareDev)
| [winterspec](https://github.com/tscircuit/winterspec/blob/main/.github/CODEOWNERS) | [seveibar](https://github.com/seveibar), [ShiboSoftwareDev](https://github.com/ShiboSoftwareDev)
| [jscad-electronics](https://github.com/tscircuit/jscad-electronics/blob/main/.github/CODEOWNERS) | [seveibar](https://github.com/seveibar), [techmannih](https://github.com/techmannih), [ShiboSoftwareDev](https://github.com/ShiboSoftwareDev), [anas-sarkez](https://github.com/anas-sarkez)
| [circuit-to-svg](https://github.com/tscircuit/circuit-to-svg/blob/main/.github/CODEOWNERS) | [imrishabh18](https://github.com/imrishabh18)
| [schematic-symbols](https://github.com/tscircuit/schematic-symbols/blob/main/.github/CODEOWNERS) | [seveibar](https://github.com/seveibar), [imrishabh18](https://github.com/imrishabh18), [techmannih](https://github.com/techmannih)
| [circuit-json-to-gerber](https://github.com/tscircuit/circuit-json-to-gerber/blob/main/.github/CODEOWNERS) | [seveibar](https://github.com/seveibar), [ShiboSoftwareDev](https://github.com/ShiboSoftwareDev)
| [tscircuit.com](https://github.com/tscircuit/tscircuit.com/blob/main/.github/CODEOWNERS) | [seveibar](https://github.com/seveibar), [imrishabh18](https://github.com/imrishabh18)
| [issue-roulette](https://github.com/tscircuit/issue-roulette/blob/main/.github/CODEOWNERS) | [Anshgrover23](https://github.com/Anshgrover23)
| [sparkfun-boards](https://github.com/tscircuit/sparkfun-boards/blob/main/.github/CODEOWNERS) | [ShiboSoftwareDev](https://github.com/ShiboSoftwareDev), [Abse2001](https://github.com/Abse2001), [MustafaMulla29](https://github.com/MustafaMulla29), [Anshgrover23](https://github.com/Anshgrover23), [techmannih](https://github.com/techmannih)
| [schematic-corpus](https://github.com/tscircuit/schematic-corpus/blob/main/.github/CODEOWNERS) | [Abse2001](https://github.com/Abse2001)
| [copper-pour-solver](https://github.com/tscircuit/copper-pour-solver/blob/main/.github/CODEOWNERS) | [seveibar](https://github.com/seveibar), [ShiboSoftwareDev](https://github.com/ShiboSoftwareDev)
| [common](https://github.com/tscircuit/common/blob/main/.github/CODEOWNERS) | [seveibar](https://github.com/seveibar), [Abse2001](https://github.com/Abse2001)

## Repositories by Owner

| User | Repo |
|------|------|
| [seveibar](https://github.com/seveibar) | [builder](https://github.com/tscircuit/builder/blob/main/.github/CODEOWNERS) |
|  | [pcb-viewer](https://github.com/tscircuit/pcb-viewer/blob/main/.github/CODEOWNERS) |
|  | [footprints-old](https://github.com/tscircuit/footprints-old/blob/main/.github/CODEOWNERS) |
|  | [footprinter](https://github.com/tscircuit/footprinter/blob/main/.github/CODEOWNERS) |
|  | [winterspec](https://github.com/tscircuit/winterspec/blob/main/.github/CODEOWNERS) |
|  | [jscad-electronics](https://github.com/tscircuit/jscad-electronics/blob/main/.github/CODEOWNERS) |
|  | [schematic-symbols](https://github.com/tscircuit/schematic-symbols/blob/main/.github/CODEOWNERS) |
|  | [circuit-json-to-gerber](https://github.com/tscircuit/circuit-json-to-gerber/blob/main/.github/CODEOWNERS) |
|  | [tscircuit.com](https://github.com/tscircuit/tscircuit.com/blob/main/.github/CODEOWNERS) |
|  | [copper-pour-solver](https://github.com/tscircuit/copper-pour-solver/blob/main/.github/CODEOWNERS) |
|  | [common](https://github.com/tscircuit/common/blob/main/.github/CODEOWNERS) |
| [ShiboSoftwareDev](https://github.com/ShiboSoftwareDev) | [pcb-viewer](https://github.com/tscircuit/pcb-viewer/blob/main/.github/CODEOWNERS) |
|  | [3d-viewer](https://github.com/tscircuit/3d-viewer/blob/main/.github/CODEOWNERS) |
|  | [winterspec](https://github.com/tscircuit/winterspec/blob/main/.github/CODEOWNERS) |
|  | [jscad-electronics](https://github.com/tscircuit/jscad-electronics/blob/main/.github/CODEOWNERS) |
|  | [circuit-json-to-gerber](https://github.com/tscircuit/circuit-json-to-gerber/blob/main/.github/CODEOWNERS) |
|  | [sparkfun-boards](https://github.com/tscircuit/sparkfun-boards/blob/main/.github/CODEOWNERS) |
|  | [copper-pour-solver](https://github.com/tscircuit/copper-pour-solver/blob/main/.github/CODEOWNERS) |
| [techmannih](https://github.com/techmannih) | [footprinter](https://github.com/tscircuit/footprinter/blob/main/.github/CODEOWNERS) |
|  | [jscad-electronics](https://github.com/tscircuit/jscad-electronics/blob/main/.github/CODEOWNERS) |
|  | [schematic-symbols](https://github.com/tscircuit/schematic-symbols/blob/main/.github/CODEOWNERS) |
|  | [sparkfun-boards](https://github.com/tscircuit/sparkfun-boards/blob/main/.github/CODEOWNERS) |
| [anas-sarkez](https://github.com/anas-sarkez) | [jscad-electronics](https://github.com/tscircuit/jscad-electronics/blob/main/.github/CODEOWNERS) |
| [imrishabh18](https://github.com/imrishabh18) | [circuit-to-svg](https://github.com/tscircuit/circuit-to-svg/blob/main/.github/CODEOWNERS) |
|  | [schematic-symbols](https://github.com/tscircuit/schematic-symbols/blob/main/.github/CODEOWNERS) |
|  | [tscircuit.com](https://github.com/tscircuit/tscircuit.com/blob/main/.github/CODEOWNERS) |
| [Anshgrover23](https://github.com/Anshgrover23) | [issue-roulette](https://github.com/tscircuit/issue-roulette/blob/main/.github/CODEOWNERS) |
|  | [sparkfun-boards](https://github.com/tscircuit/sparkfun-boards/blob/main/.github/CODEOWNERS) |
| [Abse2001](https://github.com/Abse2001) | [sparkfun-boards](https://github.com/tscircuit/sparkfun-boards/blob/main/.github/CODEOWNERS) |
|  | [schematic-corpus](https://github.com/tscircuit/schematic-corpus/blob/main/.github/CODEOWNERS) |
|  | [common](https://github.com/tscircuit/common/blob/main/.github/CODEOWNERS) |
| [MustafaMulla29](https://github.com/MustafaMulla29) | [sparkfun-boards](https://github.com/tscircuit/sparkfun-boards/blob/main/.github/CODEOWNERS) |



<!-- END_CURRENT_WEEK -->


## Development

### Prerequisites

- [Bun](https://bun.sh/) runtime
- `.env` file with required API keys:
  ```
  GITHUB_TOKEN=your_github_token
  OPENAI_API_KEY=your_openai_api_key
  DISCORD_TOKEN=your_discord_token (optional, for Discord integration)
  SLACK_BOT_TOKEN=your_slack_token (optional, for Slack integration)
  ```

### Available Scripts

#### Core Generation Scripts

- `bun run generate:weekly` - Generate current week's contribution overview
- `bun run generate:monthly` - Generate current month's contribution overview
- `bun run generate:changelog` - Generate monthly changelog from PRs

#### Analysis & Testing

- `bun run analyze-pr` - Analyze a single PR (interactive prompt)
- `bun run test:github` - Test GitHub API integration

#### Notifications & Sync

- `bun run notifications:issues` - Send notifications for new issues
- `bun run notifications:pr` - Send notifications for new PRs
- `bun run sync:discord` - Sync contributor roles with Discord

#### Data Export

- `bun run export:sponsorship` - Generate sponsorship data CSV

#### Development

- `bun run dev` - Start development server for web UI
- `bun run build` - Build for production
- `bun run format` - Format code with Biome

### Usage Examples

```bash
# Generate this week's contribution overview
bun run generate:weekly

# Generate current month's overview
bun run generate:monthly

# Analyze a specific PR
bun run analyze-pr

# Test your GitHub token setup
bun run test:github
```
