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

# Contribution Overview 2025-11-26

The current week is shown below. There are 4 major sections:

- [Contributor Overview](#contributor-overview)
- [PRs by Repository](#prs-by-repository)
- [PRs by Contributor](#changes-by-contributor)
- [Scoring & Sponsorship System](#scoring--sponsorship-system)

## PRs by Repository

```mermaid
pie
    "tscircuit/circuit-to-svg" : 2
    "tscircuit/pcb-viewer" : 9
    "tscircuit/circuit-json" : 3
    "tscircuit/footprinter" : 4
    "tscircuit/kicad-component-converter" : 1
    "tscircuit/easyeda-converter" : 1
    "tscircuit/jscad-electronics" : 3
    "tscircuit/circuit-json-to-gltf" : 3
    "tscircuit/tscircuit" : 95
    "tscircuit/tscircuit.com" : 24
    "tscircuit/eval" : 40
    "tscircuit/runframe" : 78
    "tscircuit/cli" : 53
    "tscircuit/svg.tscircuit.com" : 41
    "tscircuit/rectdiff" : 4
    "tscircuit/lbrnts" : 3
    "tscircuit/circuit-json-to-lbrn" : 22
    "tscircuit/props" : 8
    "tscircuit/core" : 17
    "tscircuit/circuit-json-to-gerber" : 3
    "tscircuit/file-server" : 1
    "tscircuit/calculate-packing" : 1
    "tscircuit/dsnts" : 5
    "tscircuit/orthoroutets" : 1
    "tscircuit/contribution-tracker" : 4
    "tscircuit/docs" : 4
    "tscircuit/3d-viewer" : 4
    "tscircuit/sparkfun-boards" : 5
    "tscircuit/circuit-json-to-dsn" : 5
    "tscircuit/dsn-converter" : 1
    "tscircuit/common" : 2
    "tscircuit/circuit-json-to-spice" : 2
    "tscircuit/ngspice-spice-engine" : 1
    "tscircuit/tscircuit-autorouter" : 7
```

## Contributor Overview

| Contributor | 🐳 Major | 🐙 Minor | 🐌 Tiny | ⭐ | Score | Discussion Contributions |
|-------------|---------|---------|---------|-----|----------------|--------------------------|
| [seveibar](#seveibar) | 8 | 16 | 14 | 👑 | 69 | 0🔹 1🔶 0💎 |
| [imrishabh18](#imrishabh18) | 4 | 10 | 10 | ⭐⭐⭐ | 47 | 0🔹 0🔶 0💎 |
| [AnasSarkiz](#AnasSarkiz) | 6 | 7 | 1 | ⭐⭐⭐ | 39 | 0🔹 0🔶 0💎 |
| [ShiboSoftwareDev](#ShiboSoftwareDev) | 1 | 7 | 2 | ⭐⭐⭐ | 35 | 0🔹 0🔶 0💎 |
| [techmannih](#techmannih) | 1 | 8 | 4 | ⭐⭐⭐ | 34 | 0🔹 0🔶 0💎 |
| [ArnavK-09](#ArnavK-09) | 4 | 3 | 7 | ⭐⭐ | 29.5 | 0🔹 0🔶 0💎 |
| [rushabhcodes](#rushabhcodes) | 3 | 4 | 2 | ⭐⭐ | 25 | 0🔹 0🔶 0💎 |
| [0hmX](#0hmX) | 5 | 0 | 1 | ⭐⭐ | 21 | 0🔹 0🔶 0💎 |
| [tscircuitbot](#tscircuitbot) | 0 | 0 | 305 | ⭐⭐ | 18 | 0🔹 0🔶 0💎 |
| [Ayushjhawar8](#Ayushjhawar8) | 1 | 6 | 0 | ⭐⭐ | 17 | 0🔹 0🔶 0💎 |
| [MustafaMulla29](#MustafaMulla29) | 1 | 5 | 2 | ⭐⭐ | 15.5 | 0🔹 0🔶 0💎 |
| [Heinrich-XIAO](#Heinrich-XIAO) | 2 | 0 | 2 | ⭐ | 10 | 0🔹 0🔶 0💎 |
| [pxlpal](#pxlpal) | 1 | 1 | 0 | ⭐ | 6 | 0🔹 0🔶 0💎 |
| [Abse2001](#Abse2001) | 1 | 0 | 0 | ⭐ | 5 | 0🔹 0🔶 0💎 |
| [Anshgrover23](#Anshgrover23) | 1 | 0 | 0 | ⭐ | 4 | 0🔹 0🔶 0💎 |
| [Asymtode712](#Asymtode712) | 0 | 0 | 1 |  | 1 | 0🔹 0🔶 0💎 |
| [Jimyzzp](#Jimyzzp) | 0 | 0 | 0 |  | 0 | 1🔹 0🔶 0💎 |

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
| [techmannih](#techmannih) | 28 | 13 | 3 | 2 | 0 | 22 | 14 | 34 | 0 | 0 | 0 |
| [seveibar](#seveibar) | 8 | 0 | 0 | 76 | 7 | 62 | 43 | 69 | 0 | 0 | 0 |
| [Asymtode712](#Asymtode712) | 1 | 1 | 0 | 0 | 0 | 2 | 1 | 1 | 0 | 0 | 0 |
| [ShiboSoftwareDev](#ShiboSoftwareDev) | 13 | 10 | 0 | 18 | 1 | 11 | 10 | 35 | 0 | 0 | 0 |
| [tscircuitbot](#tscircuitbot) | 0 | 0 | 0 | 0 | 0 | 418 | 349 | 18 | 0 | 0 | 0 |
| [imrishabh18](#imrishabh18) | 20 | 6 | 1 | 7 | 1 | 30 | 24 | 47 | 0 | 0 | 0 |
| [rushabhcodes](#rushabhcodes) | 36 | 20 | 1 | 0 | 0 | 19 | 9 | 25 | 0 | 0 | 0 |
| [Ayushjhawar8](#Ayushjhawar8) | 23 | 6 | 2 | 1 | 0 | 13 | 7 | 17 | 0 | 0 | 0 |
| [ArnavK-09](#ArnavK-09) | 15 | 12 | 0 | 1 | 0 | 23 | 19 | 29.5 | 0 | 0 | 0 |
| [baeoc](#baeoc) | 0 | 0 | 0 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| [nailoo](#nailoo) | 1 | 0 | 0 | 0 | 0 | 1 | 0 | 0 | 0 | 0 | 0 |
| [Abse2001](#Abse2001) | 1 | 1 | 0 | 1 | 0 | 1 | 1 | 5 | 0 | 0 | 0 |
| [MustafaMulla29](#MustafaMulla29) | 18 | 10 | 0 | 0 | 0 | 17 | 10 | 15.5 | 0 | 0 | 0 |
| [RaghavArora14](#RaghavArora14) | 1 | 0 | 0 | 1 | 0 | 1 | 0 | 0 | 0 | 0 | 0 |
| [Anshgrover23](#Anshgrover23) | 5 | 1 | 1 | 0 | 0 | 1 | 1 | 4 | 0 | 0 | 0 |
| [AnasSarkiz](#AnasSarkiz) | 29 | 17 | 1 | 0 | 0 | 16 | 14 | 39 | 0 | 0 | 0 |
| [pxlpal](#pxlpal) | 1 | 1 | 0 | 0 | 0 | 2 | 2 | 6 | 0 | 0 | 0 |
| [guptadeepak8](#guptadeepak8) | 0 | 0 | 0 | 0 | 0 | 1 | 0 | 0 | 0 | 0 | 0 |
| [0hmX](#0hmX) | 8 | 6 | 0 | 0 | 0 | 6 | 6 | 21 | 0 | 0 | 0 |
| [Heinrich-XIAO](#Heinrich-XIAO) | 5 | 4 | 0 | 0 | 0 | 5 | 4 | 10 | 0 | 0 | 0 |
| [lau90eth](#lau90eth) | 8 | 0 | 0 | 0 | 0 | 1 | 0 | 0 | 0 | 0 | 0 |
| [Excellencedev](#Excellencedev) | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| [Jimyzzp](#Jimyzzp) | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 0 | 0 | 0 |

## Top 7 Repositories by Contribution Points

```mermaid
pie
    "tscircuit/tscircuit" : 95
    "tscircuit/runframe" : 92
    "tscircuit/cli" : 63
    "tscircuit/eval" : 45
    "tscircuit/svg.tscircuit.com" : 41
    "tscircuit/circuit-json-to-lbrn" : 41
    "tscircuit/core" : 39
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

### [tscircuit/circuit-to-svg](https://github.com/tscircuit/circuit-to-svg)

| PR # | Impact | Rating | Contributor | Description |
|------|--------|--------|-------------|-------------|
| [#440](https://github.com/tscircuit/circuit-to-svg/pull/440) | 🐳 Major | ⭐⭐⭐ | techmannih | Adds support for rendering solder masks for rotated pill-shaped SMT pads in the SVG output. |
| [#439](https://github.com/tscircuit/circuit-to-svg/pull/439) | 🐳 Major | ⭐⭐⭐ | AnasSarkiz | Implemented rotation support for pill-shaped SMT pads and added proper handling of soldermask margins for rotated pills |

### [tscircuit/pcb-viewer](https://github.com/tscircuit/pcb-viewer)

| PR # | Impact | Rating | Contributor | Description |
|------|--------|--------|-------------|-------------|
| [#500](https://github.com/tscircuit/pcb-viewer/pull/500) | 🐙 Minor | ⭐⭐ | techmannih | Add support for rendering solder masks on surface mount technology (SMT) pads in the PCB viewer, allowing users to visualize solder mask coverage on pads. |
| [#502](https://github.com/tscircuit/pcb-viewer/pull/502) | 🐙 Minor | ⭐⭐ | techmannih | Add support for solder mask margins on surface mount pads, allowing for positive and negative margins to be specified for better control over solder mask coverage. |

<details>
<summary>🐌 Tiny Contributions (7)</summary>

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#503](https://github.com/tscircuit/pcb-viewer/pull/503) | 🐌 Tiny | techmannih | Updates the tscircuitalphabet dependency from version 0.0.3 to 0.0.8 in the package.json file. |
| [#509](https://github.com/tscircuit/pcb-viewer/pull/509) | 🐌 Tiny | Asymtode712 | Adds scrolling functionality to the error list in the toolbar overlay by setting a maximum height and enabling overflow when the error list exceeds this height. |
| [#510](https://github.com/tscircuit/pcb-viewer/pull/510) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#508](https://github.com/tscircuit/pcb-viewer/pull/508) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#506](https://github.com/tscircuit/pcb-viewer/pull/506) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#505](https://github.com/tscircuit/pcb-viewer/pull/505) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#501](https://github.com/tscircuit/pcb-viewer/pull/501) | 🐌 Tiny | tscircuitbot | Automated package update |

</details>

### [tscircuit/circuit-json](https://github.com/tscircuit/circuit-json)

| PR # | Impact | Rating | Contributor | Description |
|------|--------|--------|-------------|-------------|
| [#364](https://github.com/tscircuit/circuit-json/pull/364) | 🐙 Minor | ⭐⭐ | techmannih | Adds an optional boolean property is_tented to the PCB via definition, allowing for better representation of tented vias in PCB designs. |
| [#365](https://github.com/tscircuit/circuit-json/pull/365) | 🐙 Minor | ⭐⭐ | seveibar | Adds a SourceInterconnect schema with ftype interconnect built on the source component base, includes the interconnect element in source exports and the any_source_component union, and adds coverage to ensure source interconnect elements parse and appear in any_circuit_element. |
| [#363](https://github.com/tscircuit/circuit-json/pull/363) | 🐙 Minor | ⭐⭐ | Ayushjhawar8 | Adds an optional boolean property show_as_translucent_model to the CadComponent type, allowing for the representation of components as translucent models in the PCB design. |

### [tscircuit/footprinter](https://github.com/tscircuit/footprinter)

| PR # | Impact | Rating | Contributor | Description |
|------|--------|--------|-------------|-------------|
| [#433](https://github.com/tscircuit/footprinter/pull/433) | 🐙 Minor | ⭐⭐ | techmannih | Adds a faceup flag to the pinrow definition to control the orientation of the 3D model, ensuring the male pin header faces upwards. |
| [#434](https://github.com/tscircuit/footprinter/pull/434) | 🐙 Minor | ⭐⭐ | seveibar | Adds a nosilkscreen flag to the shared footprint definition options, allowing users to filter generated footprints to remove silkscreen elements when the flag is set. |
| [#432](https://github.com/tscircuit/footprinter/pull/432) | 🐙 Minor | ⭐⭐ | rushabhcodes | Adds an optional boolean property invert to the base_def schema to hint jscad-electronics to flip headers in the 3D model. |

<details>
<summary>🐌 Tiny Contributions (1)</summary>

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#435](https://github.com/tscircuit/footprinter/pull/435) | 🐌 Tiny | techmannih | Fixes type error by adding missing hole_offset_x and hole_offset_y properties to PcbHoleCircularWithRectPad type definition |

</details>

### [tscircuit/kicad-component-converter](https://github.com/tscircuit/kicad-component-converter)

| PR # | Impact | Rating | Contributor | Description |
|------|--------|--------|-------------|-------------|
| [#171](https://github.com/tscircuit/kicad-component-converter/pull/171) | 🐙 Minor | ⭐⭐ | techmannih | Adds pin label tooltips formatted as pinN for PCB elements in the circuit JSON output. |

### [tscircuit/easyeda-converter](https://github.com/tscircuit/easyeda-converter)

| PR # | Impact | Rating | Contributor | Description |
|------|--------|--------|-------------|-------------|
| [#330](https://github.com/tscircuit/easyeda-converter/pull/330) | 🐙 Minor | ⭐⭐ | techmannih | Fixes handling of circuit-json type errors by adding support for path shapes and ensuring proper application of transformations to various shapes. |

### [tscircuit/jscad-electronics](https://github.com/tscircuit/jscad-electronics)

| PR # | Impact | Rating | Contributor | Description |
|------|--------|--------|-------------|-------------|
| [#241](https://github.com/tscircuit/jscad-electronics/pull/241) | 🐙 Minor | ⭐⭐ | techmannih | Adds faceup functionality to the PinRow component, allowing for better representation of pin configurations in 3D views. |
| [#236](https://github.com/tscircuit/jscad-electronics/pull/236) | 🐙 Minor | ⭐⭐ | rushabhcodes | Adds support for rendering inverted pin row footprints in the 3D visualization components by detecting the invert parameter and flipping Z coordinates in the PinRow component. |

<details>
<summary>🐌 Tiny Contributions (1)</summary>

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#243](https://github.com/tscircuit/jscad-electronics/pull/243) | 🐌 Tiny | techmannih | Fixes DIP leg positioning to prevent body overlap with the hole grid in the Dual Inline Package component. |

</details>

### [tscircuit/circuit-json-to-gltf](https://github.com/tscircuit/circuit-json-to-gltf)

| PR # | Impact | Rating | Contributor | Description |
|------|--------|--------|-------------|-------------|
| [#91](https://github.com/tscircuit/circuit-json-to-gltf/pull/91) | 🐙 Minor | ⭐⭐ | techmannih | Removes the interfaces and types related to PCB copper pours from the codebase, simplifying the structure and potentially reducing complexity in PCB design handling. |
| [#88](https://github.com/tscircuit/circuit-json-to-gltf/pull/88) | 🐙 Minor | ⭐⭐ | ArnavK-09 | Updates the color factors for rendering PCB layers and materials in the GLTF output. |

<details>
<summary>🐌 Tiny Contributions (1)</summary>

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#92](https://github.com/tscircuit/circuit-json-to-gltf/pull/92) | 🐌 Tiny | techmannih | Adds a reproduction test for CAD components failing to align with their PCB panels footprints. |

</details>

### [tscircuit/tscircuit](https://github.com/tscircuit/tscircuit)


<details>
<summary>🐌 Tiny Contributions (95)</summary>

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#1562](https://github.com/tscircuit/tscircuit/pull/1562) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1561](https://github.com/tscircuit/tscircuit/pull/1561) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1560](https://github.com/tscircuit/tscircuit/pull/1560) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1559](https://github.com/tscircuit/tscircuit/pull/1559) | 🐌 Tiny | tscircuitbot | Updates the tscircuitcli package to version 0.1.596 in the package.json file. |
| [#1558](https://github.com/tscircuit/tscircuit/pull/1558) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1557](https://github.com/tscircuit/tscircuit/pull/1557) | 🐌 Tiny | tscircuitbot | Updates the tscircuitcli package to version 0.1.595 in package.json |
| [#1556](https://github.com/tscircuit/tscircuit/pull/1556) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1555](https://github.com/tscircuit/tscircuit/pull/1555) | 🐌 Tiny | tscircuitbot | Updates the tscircuitcli package from version 0.1.591 to 0.1.594 |
| [#1551](https://github.com/tscircuit/tscircuit/pull/1551) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1550](https://github.com/tscircuit/tscircuit/pull/1550) | 🐌 Tiny | tscircuitbot | Updates the package versions for tscircuitcli, tscircuitcore, and tscircuiteval in package.json |
| [#1549](https://github.com/tscircuit/tscircuit/pull/1549) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1548](https://github.com/tscircuit/tscircuit/pull/1548) | 🐌 Tiny | tscircuitbot | Updates the tscircuitcli package to version 0.1.590 in the package.json file. |
| [#1547](https://github.com/tscircuit/tscircuit/pull/1547) | 🐌 Tiny | tscircuitbot | Updates the package version from 0.0.998 to 0.0.999 in package.json |
| [#1546](https://github.com/tscircuit/tscircuit/pull/1546) | 🐌 Tiny | tscircuitbot | Updates the tscircuitcli package to version 0.1.589 in the package.json file. |
| [#1545](https://github.com/tscircuit/tscircuit/pull/1545) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1544](https://github.com/tscircuit/tscircuit/pull/1544) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1541](https://github.com/tscircuit/tscircuit/pull/1541) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1540](https://github.com/tscircuit/tscircuit/pull/1540) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1538](https://github.com/tscircuit/tscircuit/pull/1538) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1537](https://github.com/tscircuit/tscircuit/pull/1537) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1536](https://github.com/tscircuit/tscircuit/pull/1536) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1535](https://github.com/tscircuit/tscircuit/pull/1535) | 🐌 Tiny | tscircuitbot | Updates the tscircuitcli package from version 0.1.584 to 0.1.585 and the tscircuitrunframe package from version 0.0.1321 to 0.0.1322 in package.json |
| [#1534](https://github.com/tscircuit/tscircuit/pull/1534) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1533](https://github.com/tscircuit/tscircuit/pull/1533) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1532](https://github.com/tscircuit/tscircuit/pull/1532) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1531](https://github.com/tscircuit/tscircuit/pull/1531) | 🐌 Tiny | tscircuitbot | Updates the tscircuitcli package to version 0.1.583 in the package.json file |
| [#1530](https://github.com/tscircuit/tscircuit/pull/1530) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1529](https://github.com/tscircuit/tscircuit/pull/1529) | 🐌 Tiny | tscircuitbot | Updates the tscircuitcli package to version 0.1.582 in the package.json file. |
| [#1528](https://github.com/tscircuit/tscircuit/pull/1528) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1527](https://github.com/tscircuit/tscircuit/pull/1527) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1526](https://github.com/tscircuit/tscircuit/pull/1526) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1525](https://github.com/tscircuit/tscircuit/pull/1525) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1524](https://github.com/tscircuit/tscircuit/pull/1524) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1523](https://github.com/tscircuit/tscircuit/pull/1523) | 🐌 Tiny | tscircuitbot | Updates the tscircuitcli package to version 0.1.579 in the package.json file. |
| [#1522](https://github.com/tscircuit/tscircuit/pull/1522) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1521](https://github.com/tscircuit/tscircuit/pull/1521) | 🐌 Tiny | tscircuitbot | Updates the tscircuitcli package to version 0.1.578 in package.json |
| [#1519](https://github.com/tscircuit/tscircuit/pull/1519) | 🐌 Tiny | tscircuitbot | Updates the tscircuitcli package to version 0.1.577 in the package.json file. |
| [#1517](https://github.com/tscircuit/tscircuit/pull/1517) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1516](https://github.com/tscircuit/tscircuit/pull/1516) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1515](https://github.com/tscircuit/tscircuit/pull/1515) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1514](https://github.com/tscircuit/tscircuit/pull/1514) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1513](https://github.com/tscircuit/tscircuit/pull/1513) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1512](https://github.com/tscircuit/tscircuit/pull/1512) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1510](https://github.com/tscircuit/tscircuit/pull/1510) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1509](https://github.com/tscircuit/tscircuit/pull/1509) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1504](https://github.com/tscircuit/tscircuit/pull/1504) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1503](https://github.com/tscircuit/tscircuit/pull/1503) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1502](https://github.com/tscircuit/tscircuit/pull/1502) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1501](https://github.com/tscircuit/tscircuit/pull/1501) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1500](https://github.com/tscircuit/tscircuit/pull/1500) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1499](https://github.com/tscircuit/tscircuit/pull/1499) | 🐌 Tiny | tscircuitbot | Updates the tscircuitcli package to version 0.1.570 |
| [#1498](https://github.com/tscircuit/tscircuit/pull/1498) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1497](https://github.com/tscircuit/tscircuit/pull/1497) | 🐌 Tiny | tscircuitbot | Updates the tscircuitcli and tscircuiteval packages to their latest versions. |
| [#1496](https://github.com/tscircuit/tscircuit/pull/1496) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1495](https://github.com/tscircuit/tscircuit/pull/1495) | 🐌 Tiny | tscircuitbot | Updates the tscircuitcli package to version 0.1.568 in the package.json file. |
| [#1494](https://github.com/tscircuit/tscircuit/pull/1494) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1493](https://github.com/tscircuit/tscircuit/pull/1493) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1492](https://github.com/tscircuit/tscircuit/pull/1492) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1491](https://github.com/tscircuit/tscircuit/pull/1491) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1490](https://github.com/tscircuit/tscircuit/pull/1490) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1489](https://github.com/tscircuit/tscircuit/pull/1489) | 🐌 Tiny | tscircuitbot | Updates the tscircuitcli package from version 0.1.564 to 0.1.565 and the tscircuitrunframe package from version 0.0.1302 to 0.0.1303 in package.json |
| [#1488](https://github.com/tscircuit/tscircuit/pull/1488) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1487](https://github.com/tscircuit/tscircuit/pull/1487) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1486](https://github.com/tscircuit/tscircuit/pull/1486) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1485](https://github.com/tscircuit/tscircuit/pull/1485) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1484](https://github.com/tscircuit/tscircuit/pull/1484) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1483](https://github.com/tscircuit/tscircuit/pull/1483) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1482](https://github.com/tscircuit/tscircuit/pull/1482) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1481](https://github.com/tscircuit/tscircuit/pull/1481) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1480](https://github.com/tscircuit/tscircuit/pull/1480) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1479](https://github.com/tscircuit/tscircuit/pull/1479) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1478](https://github.com/tscircuit/tscircuit/pull/1478) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1477](https://github.com/tscircuit/tscircuit/pull/1477) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1476](https://github.com/tscircuit/tscircuit/pull/1476) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1475](https://github.com/tscircuit/tscircuit/pull/1475) | 🐌 Tiny | tscircuitbot | Updates the tscircuitcli package from version 0.1.557 to 0.1.558 and the tscircuitrunframe package from version 0.0.1294 to 0.0.1295 in package.json |
| [#1474](https://github.com/tscircuit/tscircuit/pull/1474) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1473](https://github.com/tscircuit/tscircuit/pull/1473) | 🐌 Tiny | tscircuitbot | Updates the tscircuitcli package to version 0.1.557 in package.json |
| [#1471](https://github.com/tscircuit/tscircuit/pull/1471) | 🐌 Tiny | tscircuitbot | Updates the tscircuitcli package to version 0.1.556 in the package.json file. |
| [#1470](https://github.com/tscircuit/tscircuit/pull/1470) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1469](https://github.com/tscircuit/tscircuit/pull/1469) | 🐌 Tiny | tscircuitbot | Updates the tscircuitcli package to version 0.1.555 in package.json |
| [#1468](https://github.com/tscircuit/tscircuit/pull/1468) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1467](https://github.com/tscircuit/tscircuit/pull/1467) | 🐌 Tiny | tscircuitbot | Updates the tscircuitcli package to version 0.1.554 in the package.json file |
| [#1466](https://github.com/tscircuit/tscircuit/pull/1466) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1465](https://github.com/tscircuit/tscircuit/pull/1465) | 🐌 Tiny | tscircuitbot | Updates the tscircuitcli package to version 0.1.553 in package.json |
| [#1464](https://github.com/tscircuit/tscircuit/pull/1464) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1463](https://github.com/tscircuit/tscircuit/pull/1463) | 🐌 Tiny | tscircuitbot | Updates the tscircuitcli package to version 0.1.552 in the package.json file. |
| [#1462](https://github.com/tscircuit/tscircuit/pull/1462) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1461](https://github.com/tscircuit/tscircuit/pull/1461) | 🐌 Tiny | tscircuitbot | Updates the tscircuitcli package from version 0.1.550 to 0.1.551 and the tscircuitrunframe package from version 0.0.1293 to 0.0.1294 in package.json |
| [#1460](https://github.com/tscircuit/tscircuit/pull/1460) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1459](https://github.com/tscircuit/tscircuit/pull/1459) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1458](https://github.com/tscircuit/tscircuit/pull/1458) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1457](https://github.com/tscircuit/tscircuit/pull/1457) | 🐌 Tiny | tscircuitbot | Updates the tscircuitcli package to version 0.1.549 in the package.json file. |
| [#1456](https://github.com/tscircuit/tscircuit/pull/1456) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1455](https://github.com/tscircuit/tscircuit/pull/1455) | 🐌 Tiny | tscircuitbot | Updates the tscircuitcli package version from 0.1.547 to 0.1.548 in package.json |
| [#1454](https://github.com/tscircuit/tscircuit/pull/1454) | 🐌 Tiny | tscircuitbot | Updates the package version from 0.0.955 to 0.0.956 in package.json |

</details>

### [tscircuit/tscircuit.com](https://github.com/tscircuit/tscircuit.com)

| PR # | Impact | Rating | Contributor | Description |
|------|--------|--------|-------------|-------------|
| [#2091](https://github.com/tscircuit/tscircuit.com/pull/2091) | 🐳 Major | ⭐⭐⭐ | ArnavK-09 | Fixes the handling of 401 errors by removing the previous 401 error handler and implementing a new toast notification system for unauthorized access. |
| [#2072](https://github.com/tscircuit/tscircuit.com/pull/2072) | 🐳 Major | ⭐⭐⭐ | ArnavK-09 | Adds autoclose functionality to the CLI login page, allowing the window to close automatically after a successful login if specified in the URL parameters. |
| [#2080](https://github.com/tscircuit/tscircuit.com/pull/2080) | 🐳 Major | ⭐⭐⭐ | pxlpal | Modifies the GitHub App installation process to support non-personal organizations by adding organization ID handling and updating repository fetching logic accordingly. |
| [#2107](https://github.com/tscircuit/tscircuit.com/pull/2107) | 🐙 Minor | ⭐⭐ | pxlpal | Changes the permission check for package linking from owner to org-management. |

<details>
<summary>🐌 Tiny Contributions (20)</summary>

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#2110](https://github.com/tscircuit/tscircuit.com/pull/2110) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#2109](https://github.com/tscircuit/tscircuit.com/pull/2109) | 🐌 Tiny | tscircuitbot | Updates the tscircuiteval package from version 0.0.510 to 0.0.511 |
| [#2103](https://github.com/tscircuit/tscircuit.com/pull/2103) | 🐌 Tiny | tscircuitbot | Updates the tscircuiteval package from version 0.0.509 to 0.0.510 in the package.json file. |
| [#2100](https://github.com/tscircuit/tscircuit.com/pull/2100) | 🐌 Tiny | tscircuitbot | Updates the tscircuiteval package from version 0.0.508 to 0.0.509 |
| [#2099](https://github.com/tscircuit/tscircuit.com/pull/2099) | 🐌 Tiny | tscircuitbot | Updates the tscircuiteval package from version 0.0.507 to 0.0.508 |
| [#2098](https://github.com/tscircuit/tscircuit.com/pull/2098) | 🐌 Tiny | tscircuitbot | Updates the tscircuiteval package version from 0.0.505 to 0.0.507 in package.json |
| [#2094](https://github.com/tscircuit/tscircuit.com/pull/2094) | 🐌 Tiny | tscircuitbot | Updates the tscircuiteval package from version 0.0.503 to 0.0.505 |
| [#2090](https://github.com/tscircuit/tscircuit.com/pull/2090) | 🐌 Tiny | tscircuitbot | Updates the tscircuiteval package from version 0.0.502 to 0.0.503 in the package.json file. |
| [#2089](https://github.com/tscircuit/tscircuit.com/pull/2089) | 🐌 Tiny | tscircuitbot | Updates the tscircuiteval package from version 0.0.501 to 0.0.502 |
| [#2088](https://github.com/tscircuit/tscircuit.com/pull/2088) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#2087](https://github.com/tscircuit/tscircuit.com/pull/2087) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#2086](https://github.com/tscircuit/tscircuit.com/pull/2086) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#2085](https://github.com/tscircuit/tscircuit.com/pull/2085) | 🐌 Tiny | tscircuitbot | Updates the tscircuiteval package version from 0.0.497 to 0.0.498 in package.json |
| [#2084](https://github.com/tscircuit/tscircuit.com/pull/2084) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#2083](https://github.com/tscircuit/tscircuit.com/pull/2083) | 🐌 Tiny | tscircuitbot | Updates the tscircuiteval package from version 0.0.495 to 0.0.496 |
| [#2082](https://github.com/tscircuit/tscircuit.com/pull/2082) | 🐌 Tiny | tscircuitbot | Updates the tscircuiteval package to version 0.0.495 in the package.json file. |
| [#2081](https://github.com/tscircuit/tscircuit.com/pull/2081) | 🐌 Tiny | tscircuitbot | Updates the tscircuiteval package version from 0.0.493 to 0.0.494 in package.json |
| [#2079](https://github.com/tscircuit/tscircuit.com/pull/2079) | 🐌 Tiny | tscircuitbot | Updates the tscircuiteval package from version 0.0.492 to 0.0.493 |
| [#2101](https://github.com/tscircuit/tscircuit.com/pull/2101) | 🐌 Tiny | ArnavK-09 | Fixes session error message to include session expired alongside session not found for improved user clarity. |
| [#2092](https://github.com/tscircuit/tscircuit.com/pull/2092) | 🐌 Tiny | ArnavK-09 | Displays the edit icon to visitors on the file view page, enhancing user interaction. |

</details>

### [tscircuit/eval](https://github.com/tscircuit/eval)

| PR # | Impact | Rating | Contributor | Description |
|------|--------|--------|-------------|-------------|
| [#1599](https://github.com/tscircuit/eval/pull/1599) | 🐙 Minor | ⭐⭐ | Ayushjhawar8 | Adds a validation flow for node module imports that checks for package declaration in package.json, existence of files in node_modules, unsupported TypeScript entrypoints, and empty dist directories. |
| [#1593](https://github.com/tscircuit/eval/pull/1593) | 🐙 Minor | ⭐⭐ | Ayushjhawar8 | Throws an error when attempting to import a dependency from jsDelivr that is not declared in package.json, ensuring that all dependencies are explicitly listed. |
| [#1629](https://github.com/tscircuit/eval/pull/1629) | 🐙 Minor | ⭐⭐ | imrishabh18 | Adds support for importing files with the .mjs extension in the eval module, allowing for ES module syntax in circuit definitions. |
| [#1594](https://github.com/tscircuit/eval/pull/1594) | 🐙 Minor | ⭐⭐ | imrishabh18 | Adds logic to handle subpath imports for local transpiled packages, ensuring that imports like reactjsx-runtime are resolved correctly without errors. |
| [#1583](https://github.com/tscircuit/eval/pull/1583) | 🐙 Minor | ⭐⭐ | imrishabh18 | Adds a flag to disable loading npm packages from jsDelivr CDN, throwing an error for import statements instead. |

<details>
<summary>🐌 Tiny Contributions (35)</summary>

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#1632](https://github.com/tscircuit/eval/pull/1632) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1631](https://github.com/tscircuit/eval/pull/1631) | 🐌 Tiny | tscircuitbot | Automated package update to version 0.0.511 |
| [#1626](https://github.com/tscircuit/eval/pull/1626) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1625](https://github.com/tscircuit/eval/pull/1625) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1622](https://github.com/tscircuit/eval/pull/1622) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1621](https://github.com/tscircuit/eval/pull/1621) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1617](https://github.com/tscircuit/eval/pull/1617) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1614](https://github.com/tscircuit/eval/pull/1614) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1613](https://github.com/tscircuit/eval/pull/1613) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1611](https://github.com/tscircuit/eval/pull/1611) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1610](https://github.com/tscircuit/eval/pull/1610) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1608](https://github.com/tscircuit/eval/pull/1608) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1606](https://github.com/tscircuit/eval/pull/1606) | 🐌 Tiny | tscircuitbot | Automated package update to version 0.0.504 |
| [#1605](https://github.com/tscircuit/eval/pull/1605) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1601](https://github.com/tscircuit/eval/pull/1601) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1600](https://github.com/tscircuit/eval/pull/1600) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1598](https://github.com/tscircuit/eval/pull/1598) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1597](https://github.com/tscircuit/eval/pull/1597) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1595](https://github.com/tscircuit/eval/pull/1595) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1592](https://github.com/tscircuit/eval/pull/1592) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1591](https://github.com/tscircuit/eval/pull/1591) | 🐌 Tiny | tscircuitbot | Updates the version of the tscircuitcore package from 0.0.884 to 0.0.885 in package.json |
| [#1589](https://github.com/tscircuit/eval/pull/1589) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1588](https://github.com/tscircuit/eval/pull/1588) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1587](https://github.com/tscircuit/eval/pull/1587) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1586](https://github.com/tscircuit/eval/pull/1586) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1584](https://github.com/tscircuit/eval/pull/1584) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1582](https://github.com/tscircuit/eval/pull/1582) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1581](https://github.com/tscircuit/eval/pull/1581) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1579](https://github.com/tscircuit/eval/pull/1579) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1578](https://github.com/tscircuit/eval/pull/1578) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1576](https://github.com/tscircuit/eval/pull/1576) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1575](https://github.com/tscircuit/eval/pull/1575) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1630](https://github.com/tscircuit/eval/pull/1630) | 🐌 Tiny | seveibar | Adds tslib to the pre-supplied imports available in the execution context and declares it in devDependencies for bundling, along with a feature test to ensure tslib-based helper imports resolve correctly. |
| [#1616](https://github.com/tscircuit/eval/pull/1616) | 🐌 Tiny | seveibar | Refactors the directory structure to separate webworker and library code, ensuring that webworker imports do not mix with library imports, and adds a GitHub workflow to check for violations. |
| [#1596](https://github.com/tscircuit/eval/pull/1596) | 🐌 Tiny | imrishabh18 | Adds the reactjsx-runtime import to the preSuppliedImports context in the execution environment. |

</details>

### [tscircuit/runframe](https://github.com/tscircuit/runframe)

| PR # | Impact | Rating | Contributor | Description |
|------|--------|--------|-------------|-------------|
| [#1943](https://github.com/tscircuit/runframe/pull/1943) | 🐳 Major | ⭐⭐⭐ | seveibar | Adds functionality to emit run completion events, including error handling, to prevent refresh loops in the RunFrame component. |
| [#1852](https://github.com/tscircuit/runframe/pull/1852) | 🐳 Major | ⭐⭐⭐ | ArnavK-09 | Adds a login dialog for CLI access and integrates it with the bug report functionality, requiring user authentication to submit bug reports. |
| [#1928](https://github.com/tscircuit/runframe/pull/1928) | 🐳 Major | ⭐⭐⭐ | MustafaMulla29 | Adds support for displaying recently saved files in the file selector, allowing users to easily access their most recently modified files. |
| [#1939](https://github.com/tscircuit/runframe/pull/1939) | 🐙 Minor | ⭐⭐ | seveibar | Adds a helper to build run completion payloads that collect execution and circuit JSON errors and emits RUN_COMPLETED events to the file server when runs finish, including error details. |
| [#1931](https://github.com/tscircuit/runframe/pull/1931) | 🐙 Minor | ⭐⭐ | seveibar | Adds a custom RegistryHTTPError to enhance error messaging for registry responses, including path, server message, and error code. |
| [#1873](https://github.com/tscircuit/runframe/pull/1873) | 🐙 Minor | ⭐⭐ | rushabhcodes | Fixes the issue where the CadViewer component does not re-render correctly when toggling fullscreen mode in the CircuitJsonPreview component. |
| [#1892](https://github.com/tscircuit/runframe/pull/1892) | 🐙 Minor | ⭐⭐ | imrishabh18 | Adds functionality to disable CDN loading for the CLI by introducing a new worker in RunFrame. |
| [#1949](https://github.com/tscircuit/runframe/pull/1949) | 🐙 Minor | ⭐⭐ | MustafaMulla29 | Fixes the issue where the Recent Files toggle disappears when clicked, ensuring it remains visible for user interaction. |

<details>
<summary>🐌 Tiny Contributions (70)</summary>

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#1954](https://github.com/tscircuit/runframe/pull/1954) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1953](https://github.com/tscircuit/runframe/pull/1953) | 🐌 Tiny | tscircuitbot | Updates the tscircuiteval package to version 0.0.512 in the package.json file. |
| [#1952](https://github.com/tscircuit/runframe/pull/1952) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1951](https://github.com/tscircuit/runframe/pull/1951) | 🐌 Tiny | tscircuitbot | Updates the tscircuiteval package from version 0.0.510 to 0.0.511 |
| [#1950](https://github.com/tscircuit/runframe/pull/1950) | 🐌 Tiny | tscircuitbot | Automated package update to version 0.0.1328 |
| [#1948](https://github.com/tscircuit/runframe/pull/1948) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1947](https://github.com/tscircuit/runframe/pull/1947) | 🐌 Tiny | tscircuitbot | Updates the tscircuiteval package from version 0.0.509 to 0.0.510 |
| [#1946](https://github.com/tscircuit/runframe/pull/1946) | 🐌 Tiny | tscircuitbot | Updates the package version from 0.0.1325 to 0.0.1326 in package.json |
| [#1945](https://github.com/tscircuit/runframe/pull/1945) | 🐌 Tiny | tscircuitbot | Updates the package version from 0.0.1324 to 0.0.1325 in package.json |
| [#1942](https://github.com/tscircuit/runframe/pull/1942) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1940](https://github.com/tscircuit/runframe/pull/1940) | 🐌 Tiny | tscircuitbot | Updates the package version from 0.0.1322 to 0.0.1323 in package.json |
| [#1938](https://github.com/tscircuit/runframe/pull/1938) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1937](https://github.com/tscircuit/runframe/pull/1937) | 🐌 Tiny | tscircuitbot | Updates the circuit-json-to-gerber package from version 0.0.41 to 0.0.42 |
| [#1936](https://github.com/tscircuit/runframe/pull/1936) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1935](https://github.com/tscircuit/runframe/pull/1935) | 🐌 Tiny | tscircuitbot | Updates the tscircuit3d-viewer package to version 0.0.448 in the package.json file. |
| [#1934](https://github.com/tscircuit/runframe/pull/1934) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1932](https://github.com/tscircuit/runframe/pull/1932) | 🐌 Tiny | tscircuitbot | Updates the package version from 0.0.1318 to 0.0.1319 in package.json |
| [#1930](https://github.com/tscircuit/runframe/pull/1930) | 🐌 Tiny | tscircuitbot | Updates the package version from 0.0.1317 to 0.0.1318 in package.json |
| [#1929](https://github.com/tscircuit/runframe/pull/1929) | 🐌 Tiny | tscircuitbot | Updates the tscircuiteval package from version 0.0.508 to 0.0.509 |
| [#1927](https://github.com/tscircuit/runframe/pull/1927) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1926](https://github.com/tscircuit/runframe/pull/1926) | 🐌 Tiny | tscircuitbot | Automated package update for tscircuit3d-viewer from version 0.0.446 to 0.0.447 |
| [#1924](https://github.com/tscircuit/runframe/pull/1924) | 🐌 Tiny | tscircuitbot | Updates the package version from 0.0.1315 to 0.0.1316 in package.json |
| [#1922](https://github.com/tscircuit/runframe/pull/1922) | 🐌 Tiny | tscircuitbot | Updates the package version from 0.0.1314 to 0.0.1315 in package.json |
| [#1921](https://github.com/tscircuit/runframe/pull/1921) | 🐌 Tiny | tscircuitbot | Updates the tscircuiteval package to version 0.0.508 |
| [#1920](https://github.com/tscircuit/runframe/pull/1920) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1919](https://github.com/tscircuit/runframe/pull/1919) | 🐌 Tiny | tscircuitbot | Updates the tscircuiteval package from version 0.0.505 to 0.0.507 |
| [#1917](https://github.com/tscircuit/runframe/pull/1917) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1916](https://github.com/tscircuit/runframe/pull/1916) | 🐌 Tiny | tscircuitbot | Updates the tscircuitpcb-viewer package from version 1.11.272 to 1.11.273 |
| [#1914](https://github.com/tscircuit/runframe/pull/1914) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1913](https://github.com/tscircuit/runframe/pull/1913) | 🐌 Tiny | tscircuitbot | Updates the tscircuiteval package from version 0.0.503 to 0.0.505 |
| [#1912](https://github.com/tscircuit/runframe/pull/1912) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1911](https://github.com/tscircuit/runframe/pull/1911) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1910](https://github.com/tscircuit/runframe/pull/1910) | 🐌 Tiny | tscircuitbot | Automated package update to version 0.0.1310 |
| [#1909](https://github.com/tscircuit/runframe/pull/1909) | 🐌 Tiny | tscircuitbot | Updates the tscircuitpcb-viewer package from version 1.11.271 to 1.11.272 |
| [#1908](https://github.com/tscircuit/runframe/pull/1908) | 🐌 Tiny | tscircuitbot | Updates the package version from 0.0.1307 to 0.0.1309 in package.json |
| [#1907](https://github.com/tscircuit/runframe/pull/1907) | 🐌 Tiny | tscircuitbot | Updates the tscircuitpcb-viewer package from version 1.11.270 to 1.11.271 |
| [#1906](https://github.com/tscircuit/runframe/pull/1906) | 🐌 Tiny | tscircuitbot | Updates the tscircuitpcb-viewer package from version 1.11.269 to 1.11.270 |
| [#1904](https://github.com/tscircuit/runframe/pull/1904) | 🐌 Tiny | tscircuitbot | Automated package update to version 0.0.1307 |
| [#1903](https://github.com/tscircuit/runframe/pull/1903) | 🐌 Tiny | tscircuitbot | Updates the tscircuiteval package from version 0.0.502 to 0.0.503 in the package.json file. |
| [#1902](https://github.com/tscircuit/runframe/pull/1902) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1901](https://github.com/tscircuit/runframe/pull/1901) | 🐌 Tiny | tscircuitbot | Updates the tscircuiteval package to version 0.0.502 in the package.json file. |
| [#1900](https://github.com/tscircuit/runframe/pull/1900) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1899](https://github.com/tscircuit/runframe/pull/1899) | 🐌 Tiny | tscircuitbot | Updates the tscircuiteval package from version 0.0.500 to 0.0.501 |
| [#1898](https://github.com/tscircuit/runframe/pull/1898) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1897](https://github.com/tscircuit/runframe/pull/1897) | 🐌 Tiny | tscircuitbot | Updates the tscircuiteval package from version 0.0.499 to 0.0.500 |
| [#1896](https://github.com/tscircuit/runframe/pull/1896) | 🐌 Tiny | tscircuitbot | Updates the package version from 0.0.1302 to 0.0.1303 in package.json |
| [#1895](https://github.com/tscircuit/runframe/pull/1895) | 🐌 Tiny | tscircuitbot | Updates the tscircuiteval package to version 0.0.499 in package.json |
| [#1894](https://github.com/tscircuit/runframe/pull/1894) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1893](https://github.com/tscircuit/runframe/pull/1893) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1891](https://github.com/tscircuit/runframe/pull/1891) | 🐌 Tiny | tscircuitbot | Automated package update to version 0.0.1301 |
| [#1890](https://github.com/tscircuit/runframe/pull/1890) | 🐌 Tiny | tscircuitbot | Updates the tscircuitpcb-viewer package to version 1.11.269 |
| [#1889](https://github.com/tscircuit/runframe/pull/1889) | 🐌 Tiny | tscircuitbot | Automated package update to version 0.0.1300 |
| [#1888](https://github.com/tscircuit/runframe/pull/1888) | 🐌 Tiny | tscircuitbot | Updates the tscircuiteval package to version 0.0.497 in package.json |
| [#1887](https://github.com/tscircuit/runframe/pull/1887) | 🐌 Tiny | tscircuitbot | Updates the package version from 0.0.1298 to 0.0.1299 in package.json |
| [#1886](https://github.com/tscircuit/runframe/pull/1886) | 🐌 Tiny | tscircuitbot | Updates the tscircuiteval package from version 0.0.495 to 0.0.496 |
| [#1885](https://github.com/tscircuit/runframe/pull/1885) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1884](https://github.com/tscircuit/runframe/pull/1884) | 🐌 Tiny | tscircuitbot | Updates the tscircuiteval package to version 0.0.495 in package.json |
| [#1883](https://github.com/tscircuit/runframe/pull/1883) | 🐌 Tiny | tscircuitbot | Automated package update to version 0.0.1297 |
| [#1882](https://github.com/tscircuit/runframe/pull/1882) | 🐌 Tiny | tscircuitbot | Updates the tscircuiteval package to version 0.0.494 in the package.json file. |
| [#1881](https://github.com/tscircuit/runframe/pull/1881) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1880](https://github.com/tscircuit/runframe/pull/1880) | 🐌 Tiny | tscircuitbot | Updates the tscircuit3d-viewer package to version 0.0.446 in the package.json file. |
| [#1879](https://github.com/tscircuit/runframe/pull/1879) | 🐌 Tiny | tscircuitbot | Automated package update to version 0.0.1295 |
| [#1878](https://github.com/tscircuit/runframe/pull/1878) | 🐌 Tiny | tscircuitbot | Automated package update to version 0.0.1294 |
| [#1877](https://github.com/tscircuit/runframe/pull/1877) | 🐌 Tiny | tscircuitbot | Updates the tscircuit3d-viewer package to version 0.0.445 in package.json |
| [#1876](https://github.com/tscircuit/runframe/pull/1876) | 🐌 Tiny | tscircuitbot | Updates the package version from 0.0.1292 to 0.0.1293 in package.json |
| [#1875](https://github.com/tscircuit/runframe/pull/1875) | 🐌 Tiny | tscircuitbot | Updates the tscircuiteval package to version 0.0.493 |
| [#1872](https://github.com/tscircuit/runframe/pull/1872) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1923](https://github.com/tscircuit/runframe/pull/1923) | 🐌 Tiny | seveibar | Updates the circuit-json-to-gerber package to version 0.0.41 and refreshes bun.lock with new dependency metadata. |
| [#1933](https://github.com/tscircuit/runframe/pull/1933) | 🐌 Tiny | ArnavK-09 | img width627 height476 altimage srchttps:github.comuser-attachmentsassets68c4274e-8405-4cc6-a88d-40479aa7d092  img width625 height333 altimage srchttps:github.comuser-attachmentsassets09fbd47e-05cd-4cc8-bcd1-718efb89693c  img width863 height515 altimage srchttps:github.comuser-attachmentsassets6ed13980-fe86-48a3-96ea-0e529bb10aef |
| [#1871](https://github.com/tscircuit/runframe/pull/1871) | 🐌 Tiny | ArnavK-09 | This pull request introduces a generated CSS file that includes various utility classes and styles for the project, leveraging Tailwind CSS for styling. |

</details>

### [tscircuit/cli](https://github.com/tscircuit/cli)

| PR # | Impact | Rating | Contributor | Description |
|------|--------|--------|-------------|-------------|
| [#1173](https://github.com/tscircuit/cli/pull/1173) | 🐳 Major | ⭐⭐⭐ | ArnavK-09 | Adds a --no-install option to the init command, allowing users to skip the installation of dependencies during project initialization. |
| [#1179](https://github.com/tscircuit/cli/pull/1179) | 🐙 Minor | ⭐⭐ | seveibar | Ensures that direct dependencies from package.json are resolved and uploaded even when not explicitly imported, adding coverage to verify that npm dependencies are sent to the file server without explicit imports. |
| [#1160](https://github.com/tscircuit/cli/pull/1160) | 🐙 Minor | ⭐⭐ | seveibar | Adds a test to ensure that all node_modules dependency dist files are uploaded to the dev servers file server, fixing a bug where these files were not available for the browser runtime. |
| [#1163](https://github.com/tscircuit/cli/pull/1163) | 🐙 Minor | ⭐⭐ | seveibar | Fixes the handling of asset paths in Windows by ensuring absolute paths are used instead of relative paths, improving compatibility across different operating systems. |
| [#1212](https://github.com/tscircuit/cli/pull/1212) | 🐙 Minor | ⭐⭐ | imrishabh18 | Fixes TypeError when resolving nested conditional exports in package.json, allowing proper handling of modern package structures. |
| [#1107](https://github.com/tscircuit/cli/pull/1107) | 🐙 Minor | ⭐⭐ | imrishabh18 | Fixes the resolution of node_modules imports by searching upward for hoisted packages, collecting local package roots, and skipping runtime-provided packages during dependency uploads. |
| [#1149](https://github.com/tscircuit/cli/pull/1149) | 🐙 Minor | ⭐⭐ | MustafaMulla29 | Fixes the issue of uploading binary files in the tsci push command by implementing checks for binary content and encoding it in base64 when necessary. |
| [#1125](https://github.com/tscircuit/cli/pull/1125) | 🐙 Minor | ⭐⭐ | MustafaMulla29 | Adds support for loading .kicad_mod files by converting absolute file paths to file: URLs for Buns fetch, enhancing platform configuration with KiCad parsing support. |

<details>
<summary>🐌 Tiny Contributions (45)</summary>

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#1215](https://github.com/tscircuit/cli/pull/1215) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1201](https://github.com/tscircuit/cli/pull/1201) | 🐌 Tiny | tscircuitbot | Updates the tscircuitrunframe package from version 0.0.1324 to 0.0.1327 |
| [#1206](https://github.com/tscircuit/cli/pull/1206) | 🐌 Tiny | tscircuitbot | Automated README update with latest CLI usage output. |
| [#1205](https://github.com/tscircuit/cli/pull/1205) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1198](https://github.com/tscircuit/cli/pull/1198) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1195](https://github.com/tscircuit/cli/pull/1195) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1191](https://github.com/tscircuit/cli/pull/1191) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1185](https://github.com/tscircuit/cli/pull/1185) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1184](https://github.com/tscircuit/cli/pull/1184) | 🐌 Tiny | tscircuitbot | Updates the tscircuitrunframe package from version 0.0.1323 to 0.0.1324 |
| [#1182](https://github.com/tscircuit/cli/pull/1182) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1181](https://github.com/tscircuit/cli/pull/1181) | 🐌 Tiny | tscircuitbot | Updates the tscircuitrunframe package from version 0.0.1321 to 0.0.1323 in the package.json file. |
| [#1180](https://github.com/tscircuit/cli/pull/1180) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1176](https://github.com/tscircuit/cli/pull/1176) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1175](https://github.com/tscircuit/cli/pull/1175) | 🐌 Tiny | tscircuitbot | Updates the tscircuitrunframe package to version 0.0.1321 in package.json |
| [#1174](https://github.com/tscircuit/cli/pull/1174) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1172](https://github.com/tscircuit/cli/pull/1172) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1170](https://github.com/tscircuit/cli/pull/1170) | 🐌 Tiny | tscircuitbot | Updates the tscircuitrunframe package to version 0.0.1320 in package.json |
| [#1171](https://github.com/tscircuit/cli/pull/1171) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1168](https://github.com/tscircuit/cli/pull/1168) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1166](https://github.com/tscircuit/cli/pull/1166) | 🐌 Tiny | tscircuitbot | Updates the tscircuitrunframe package from version 0.0.1318 to 0.0.1319 |
| [#1165](https://github.com/tscircuit/cli/pull/1165) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1162](https://github.com/tscircuit/cli/pull/1162) | 🐌 Tiny | tscircuitbot | Automated package update to version 0.1.578 |
| [#1159](https://github.com/tscircuit/cli/pull/1159) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1155](https://github.com/tscircuit/cli/pull/1155) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1154](https://github.com/tscircuit/cli/pull/1154) | 🐌 Tiny | tscircuitbot | Updates the tscircuitrunframe package from version 0.0.1316 to 0.0.1318 |
| [#1153](https://github.com/tscircuit/cli/pull/1153) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1146](https://github.com/tscircuit/cli/pull/1146) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1141](https://github.com/tscircuit/cli/pull/1141) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1140](https://github.com/tscircuit/cli/pull/1140) | 🐌 Tiny | tscircuitbot | Updates the tscircuitrunframe package from version 0.0.1308 to 0.0.1314 in the package.json file. |
| [#1133](https://github.com/tscircuit/cli/pull/1133) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1132](https://github.com/tscircuit/cli/pull/1132) | 🐌 Tiny | tscircuitbot | Updates the tscircuitrunframe package from version 0.0.1306 to 0.0.1308 |
| [#1130](https://github.com/tscircuit/cli/pull/1130) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1128](https://github.com/tscircuit/cli/pull/1128) | 🐌 Tiny | tscircuitbot | Automated package update to version 0.1.570 |
| [#1127](https://github.com/tscircuit/cli/pull/1127) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1126](https://github.com/tscircuit/cli/pull/1126) | 🐌 Tiny | tscircuitbot | Updates the tscircuitrunframe package from version 0.0.1305 to 0.0.1306 |
| [#1202](https://github.com/tscircuit/cli/pull/1202) | 🐌 Tiny | seveibar | Adds functionality to test bug reports by downloading them and running tests in a browser environment using Playwright. |
| [#1189](https://github.com/tscircuit/cli/pull/1189) | 🐌 Tiny | seveibar | Switches bun-test workflow to matrix-based execution with generated test plans and adds a CLI-specific test plan generator that distributes test files across nodes while retaining snapshot uploads on failure. |
| [#1193](https://github.com/tscircuit/cli/pull/1193) | 🐌 Tiny | seveibar | Removes the inclusion of devDependencies and peerDependencies from the module upload process, ensuring only production dependencies are uploaded. |
| [#1156](https://github.com/tscircuit/cli/pull/1156) | 🐌 Tiny | seveibar | Adds a test to ensure GLB file imports are transpiled to relative paths, preventing errors related to absolute paths from the developers machine. |
| [#1169](https://github.com/tscircuit/cli/pull/1169) | 🐌 Tiny | ArnavK-09 | Removes the setup of the TSCi project during the cloning of bug reports, addressing issue 1157. |
| [#1217](https://github.com/tscircuit/cli/pull/1217) | 🐌 Tiny | imrishabh18 | Adds tslib to the set of runtime provided packages in the dependency analysis module. |
| [#1152](https://github.com/tscircuit/cli/pull/1152) | 🐌 Tiny | imrishabh18 | Updates the version of the tscircuit and tscircuitprops dependencies in package.json |
| [#1145](https://github.com/tscircuit/cli/pull/1145) | 🐌 Tiny | imrishabh18 | Fixes blocking tests by ensuring process exits correctly after export and simulation operations in the CLI. |
| [#1207](https://github.com/tscircuit/cli/pull/1207) | 🐌 Tiny | MustafaMulla29 | Reproduces a bug where packages installed from GitHub URLs do not have their files uploaded to the dev server due to the absence of a package.json file. |
| [#1148](https://github.com/tscircuit/cli/pull/1148) | 🐌 Tiny | MustafaMulla29 | Adds support for installing specific KiCad libraries via the tsci install command and enhances console output with color using the kleur library. |

</details>

### [tscircuit/svg.tscircuit.com](https://github.com/tscircuit/svg.tscircuit.com)


<details>
<summary>🐌 Tiny Contributions (41)</summary>

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#693](https://github.com/tscircuit/svg.tscircuit.com/pull/693) | 🐌 Tiny | tscircuitbot | Updates the tscircuit package version from 0.0.1005 to 0.0.1006 in package.json |
| [#692](https://github.com/tscircuit/svg.tscircuit.com/pull/692) | 🐌 Tiny | tscircuitbot | Updates the tscircuit package version from 0.0.1004 to 0.0.1005 in package.json |
| [#691](https://github.com/tscircuit/svg.tscircuit.com/pull/691) | 🐌 Tiny | tscircuitbot | Updates the tscircuit package version from 0.0.1003 to 0.0.1004 in package.json |
| [#690](https://github.com/tscircuit/svg.tscircuit.com/pull/690) | 🐌 Tiny | tscircuitbot | Updates the tscircuit package version from 0.0.1002 to 0.0.1003 in package.json |
| [#689](https://github.com/tscircuit/svg.tscircuit.com/pull/689) | 🐌 Tiny | tscircuitbot | Updates the tscircuit package version from 0.0.1001 to 0.0.1002 in package.json |
| [#688](https://github.com/tscircuit/svg.tscircuit.com/pull/688) | 🐌 Tiny | tscircuitbot | Updates the tscircuit package version from 0.0.1000 to 0.0.1001 in package.json |
| [#687](https://github.com/tscircuit/svg.tscircuit.com/pull/687) | 🐌 Tiny | tscircuitbot | Updates the tscircuit package version from 0.0.999 to 0.0.1000 in package.json |
| [#686](https://github.com/tscircuit/svg.tscircuit.com/pull/686) | 🐌 Tiny | tscircuitbot | Updates the tscircuit package version from 0.0.998 to 0.0.999 in package.json |
| [#685](https://github.com/tscircuit/svg.tscircuit.com/pull/685) | 🐌 Tiny | tscircuitbot | Updates the tscircuit package version from 0.0.997 to 0.0.998 in package.json |
| [#684](https://github.com/tscircuit/svg.tscircuit.com/pull/684) | 🐌 Tiny | tscircuitbot | Updates the tscircuit package version from 0.0.996 to 0.0.997 in package.json |
| [#683](https://github.com/tscircuit/svg.tscircuit.com/pull/683) | 🐌 Tiny | tscircuitbot | Updates the tscircuit package version from 0.0.994 to 0.0.996 in package.json |
| [#682](https://github.com/tscircuit/svg.tscircuit.com/pull/682) | 🐌 Tiny | tscircuitbot | Updates the tscircuit package version from 0.0.993 to 0.0.994 in package.json |
| [#681](https://github.com/tscircuit/svg.tscircuit.com/pull/681) | 🐌 Tiny | tscircuitbot | Updates the tscircuit package version from 0.0.992 to 0.0.993 in package.json |
| [#679](https://github.com/tscircuit/svg.tscircuit.com/pull/679) | 🐌 Tiny | tscircuitbot | Updates the tscircuit package version from 0.0.991 to 0.0.992 in package.json |
| [#678](https://github.com/tscircuit/svg.tscircuit.com/pull/678) | 🐌 Tiny | tscircuitbot | Updates the tscircuit package version from 0.0.990 to 0.0.991 in package.json |
| [#677](https://github.com/tscircuit/svg.tscircuit.com/pull/677) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#676](https://github.com/tscircuit/svg.tscircuit.com/pull/676) | 🐌 Tiny | tscircuitbot | Updates the tscircuit package version from 0.0.988 to 0.0.989 in package.json |
| [#675](https://github.com/tscircuit/svg.tscircuit.com/pull/675) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#674](https://github.com/tscircuit/svg.tscircuit.com/pull/674) | 🐌 Tiny | tscircuitbot | Updates the tscircuit package version from 0.0.985 to 0.0.987 in package.json |
| [#673](https://github.com/tscircuit/svg.tscircuit.com/pull/673) | 🐌 Tiny | tscircuitbot | Updates the tscircuit package version from 0.0.984 to 0.0.985 in package.json |
| [#672](https://github.com/tscircuit/svg.tscircuit.com/pull/672) | 🐌 Tiny | tscircuitbot | Updates the tscircuit package version from 0.0.983 to 0.0.984 in package.json |
| [#670](https://github.com/tscircuit/svg.tscircuit.com/pull/670) | 🐌 Tiny | tscircuitbot | Updates the tscircuit package version from 0.0.982 to 0.0.983 in package.json |
| [#669](https://github.com/tscircuit/svg.tscircuit.com/pull/669) | 🐌 Tiny | tscircuitbot | Updates the tscircuit package version from 0.0.981 to 0.0.982 in package.json |
| [#668](https://github.com/tscircuit/svg.tscircuit.com/pull/668) | 🐌 Tiny | tscircuitbot | Updates the tscircuit package version from 0.0.980 to 0.0.981 in package.json |
| [#667](https://github.com/tscircuit/svg.tscircuit.com/pull/667) | 🐌 Tiny | tscircuitbot | Updates the tscircuit package version from 0.0.968 to 0.0.980 in package.json |
| [#655](https://github.com/tscircuit/svg.tscircuit.com/pull/655) | 🐌 Tiny | tscircuitbot | Updates the tscircuit package version from 0.0.967 to 0.0.968 in package.json |
| [#654](https://github.com/tscircuit/svg.tscircuit.com/pull/654) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#653](https://github.com/tscircuit/svg.tscircuit.com/pull/653) | 🐌 Tiny | tscircuitbot | Updates the tscircuit package version from 0.0.964 to 0.0.966 in package.json |
| [#652](https://github.com/tscircuit/svg.tscircuit.com/pull/652) | 🐌 Tiny | tscircuitbot | Updates the tscircuit package version from 0.0.963 to 0.0.964 in package.json |
| [#651](https://github.com/tscircuit/svg.tscircuit.com/pull/651) | 🐌 Tiny | tscircuitbot | Updates the tscircuit package version from 0.0.962 to 0.0.963 in package.json |
| [#650](https://github.com/tscircuit/svg.tscircuit.com/pull/650) | 🐌 Tiny | tscircuitbot | Updates the tscircuit package version from 0.0.961 to 0.0.962 in package.json |
| [#649](https://github.com/tscircuit/svg.tscircuit.com/pull/649) | 🐌 Tiny | tscircuitbot | Updates the tscircuit package version from 0.0.960 to 0.0.961 in package.json |
| [#648](https://github.com/tscircuit/svg.tscircuit.com/pull/648) | 🐌 Tiny | tscircuitbot | Updates the tscircuit package version from 0.0.959 to 0.0.960 in package.json |
| [#647](https://github.com/tscircuit/svg.tscircuit.com/pull/647) | 🐌 Tiny | tscircuitbot | Updates the tscircuit package version from 0.0.958 to 0.0.959 in package.json |
| [#646](https://github.com/tscircuit/svg.tscircuit.com/pull/646) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#645](https://github.com/tscircuit/svg.tscircuit.com/pull/645) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#644](https://github.com/tscircuit/svg.tscircuit.com/pull/644) | 🐌 Tiny | tscircuitbot | Updates the tscircuit package version from 0.0.955 to 0.0.956 in package.json |
| [#643](https://github.com/tscircuit/svg.tscircuit.com/pull/643) | 🐌 Tiny | tscircuitbot | Updates the tscircuit package version from 0.0.954 to 0.0.955 in package.json |
| [#642](https://github.com/tscircuit/svg.tscircuit.com/pull/642) | 🐌 Tiny | tscircuitbot | Updates the tscircuit package version from 0.0.953 to 0.0.954 in package.json |
| [#680](https://github.com/tscircuit/svg.tscircuit.com/pull/680) | 🐌 Tiny | ArnavK-09 | Updates the color scheme used in the application to a new set of colors, affecting the visual presentation of the user interface. |
| [#671](https://github.com/tscircuit/svg.tscircuit.com/pull/671) | 🐌 Tiny | imrishabh18 | Fixes the eval issue in tscircuit that caused an outage by updating the tscircuit dependency to version 0.0.983 |

</details>

### [tscircuit/rectdiff](https://github.com/tscircuit/rectdiff)

| PR # | Impact | Rating | Contributor | Description |
|------|--------|--------|-------------|-------------|
| [#11](https://github.com/tscircuit/rectdiff/pull/11) | 🐳 Major | ⭐⭐⭐ | 0hmX | How GapFillSubSolver Works GapFillSubSolver operates as a post-processing cleanup algorithm that creates brand new rectangles to fill empty spaces left after the main RectDiff placement. It follows a four-stage process: 1. SCAN: Detects uncovered areas using grid-based sweep-line algorithm, merging adjacent empty cells into maximal gap rectangles 2. SELECT: Prioritizes gaps by size and multi-layer coverage, choosing the most valuable gap to fill next 3. EXPAND: Places seed point at gap center and grows a rectangle outward until hitting existing rectangles, obstacles, or boundaries 4. PLACE: Adds the successfully expanded rectangle to the solution as a new placement  Fundamental Difference from RectDiff RectDiff solves the routing problem - it places rectangles to enable electrical signal connections based on circuit topology and routing requirements from SimpleRouteJson input. GapFillSubSolver solves the coverage problem - it maximizes board area utilization by filling leftover empty spaces with new rectangles, regardless of routing needs. RectDiff creates rectangles for electrical functionality (routing paths), while GapFillSubSolver creates rectangles for geometric efficiency (space utilization). They serve complementary but entirely different purposes in the placement pipeline: connectivity versus coverage optimization. |

<details>
<summary>🐌 Tiny Contributions (3)</summary>

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#14](https://github.com/tscircuit/rectdiff/pull/14) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#13](https://github.com/tscircuit/rectdiff/pull/13) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#12](https://github.com/tscircuit/rectdiff/pull/12) | 🐌 Tiny | 0hmX | Fixes the preview rendering by updating the HTML title and script source paths, and adds Vite configuration for React support. |

</details>

### [tscircuit/lbrnts](https://github.com/tscircuit/lbrnts)

| PR # | Impact | Rating | Contributor | Description |
|------|--------|--------|-------------|-------------|
| [#10](https://github.com/tscircuit/lbrnts/pull/10) | 🐳 Major | ⭐⭐⭐ | AnasSarkiz | Introduces high-fidelity scan-path generation for laser fill operations, including configurable scan patterns, optimized clipping for geometric primitives, and enhanced fill logic, replacing static fills with realistic scan-line simulation while maintaining backward compatibility. |

<details>
<summary>🐌 Tiny Contributions (2)</summary>

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#11](https://github.com/tscircuit/lbrnts/pull/11) | 🐌 Tiny | tscircuitbot | Automated package update to version 0.0.8 |
| [#9](https://github.com/tscircuit/lbrnts/pull/9) | 🐌 Tiny | tscircuitbot | Updates the package version from 0.0.6 to 0.0.7 in package.json |

</details>

### [tscircuit/circuit-json-to-lbrn](https://github.com/tscircuit/circuit-json-to-lbrn)

| PR # | Impact | Rating | Contributor | Description |
|------|--------|--------|-------------|-------------|
| [#37](https://github.com/tscircuit/circuit-json-to-lbrn/pull/37) | 🐳 Major | ⭐⭐⭐ | AnasSarkiz | Implements complete support for pcb_hole elements (non-plated holes) in the circuit-json-to-lbrn converter, enabling laser cutting of mounting holes, alignment holes, and other non-electrical through-board features. |
| [#39](https://github.com/tscircuit/circuit-json-to-lbrn/pull/39) | 🐳 Major | ⭐⭐⭐ | AnasSarkiz | Adds full support for all PCB cutout types in the convertCircuitJsonToLbrn pipeline, enabling correct generation of cutouts in LightBurn-compatible output, with consistent processing of cutouts and support for copper-layer removal and soldermask openings. |
| [#35](https://github.com/tscircuit/circuit-json-to-lbrn/pull/35) | 🐳 Major | ⭐⭐⭐ | AnasSarkiz | Adds support for pcb_via elements in circuit-json conversion to LightBurn format, including proper connectivity mapping and net-based geometry merging. |
| [#31](https://github.com/tscircuit/circuit-json-to-lbrn/pull/31) | 🐳 Major | ⭐⭐⭐ | AnasSarkiz | Adds cross-hatching support, fixes board closure behavior, and upgrades the lbrnts engine to version 0.0.8. |
| [#41](https://github.com/tscircuit/circuit-json-to-lbrn/pull/41) | 🐙 Minor | ⭐⭐ | AnasSarkiz | Adds an includeCopper flag to control copper removal for drilled and plated holes, allowing selective skipping of copper removal for visualization modes and non-copper-layer operations. |
| [#43](https://github.com/tscircuit/circuit-json-to-lbrn/pull/43) | 🐙 Minor | ⭐⭐ | AnasSarkiz | Fixes incorrect rendering of SMT pads due to degree-based rotation input being misinterpreted as radians. |
| [#33](https://github.com/tscircuit/circuit-json-to-lbrn/pull/33) | 🐙 Minor | ⭐⭐ | AnasSarkiz | Add soldermaskMargin parameter to convertCircuitJsonToLbrn options to allow global adjustment of soldermask opening sizes, supporting both positive and negative margins, and updating the ConvertContext interface accordingly. |
| [#28](https://github.com/tscircuit/circuit-json-to-lbrn/pull/28) | 🐙 Minor | ⭐⭐ | AnasSarkiz | Switches the soldermask layer generation from Cut mode (outline paths) to Scan mode (filled shapes) to accommodate laser-cutting workflows for Kapton tape. |
| [#26](https://github.com/tscircuit/circuit-json-to-lbrn/pull/26) | 🐙 Minor | ⭐⭐ | AnasSarkiz | Add a new soldermask cut setting with optimized parameters and update relevant handlers to use this setting instead of copper cut settings, ensuring appropriate laser parameters for soldermask layers. |
| [#24](https://github.com/tscircuit/circuit-json-to-lbrn/pull/24) | 🐙 Minor | ⭐⭐ | AnasSarkiz | Adds support for soldermask layer and unifies handling of copper and soldermask across PCB element handlers, allowing for more flexible PCB design options. |
| [#21](https://github.com/tscircuit/circuit-json-to-lbrn/pull/21) | 🐙 Minor | ⭐⭐ | AnasSarkiz | Adds support for new SMT pad shapes including circle, pill, polygon, rotated rectangle, and rounded rectangle, along with corresponding path generation and snapshot tests. |

<details>
<summary>🐌 Tiny Contributions (11)</summary>

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#44](https://github.com/tscircuit/circuit-json-to-lbrn/pull/44) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#42](https://github.com/tscircuit/circuit-json-to-lbrn/pull/42) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#40](https://github.com/tscircuit/circuit-json-to-lbrn/pull/40) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#36](https://github.com/tscircuit/circuit-json-to-lbrn/pull/36) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#34](https://github.com/tscircuit/circuit-json-to-lbrn/pull/34) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#32](https://github.com/tscircuit/circuit-json-to-lbrn/pull/32) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#30](https://github.com/tscircuit/circuit-json-to-lbrn/pull/30) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#29](https://github.com/tscircuit/circuit-json-to-lbrn/pull/29) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#27](https://github.com/tscircuit/circuit-json-to-lbrn/pull/27) | 🐌 Tiny | tscircuitbot | Automated package update to version 0.0.11 |
| [#25](https://github.com/tscircuit/circuit-json-to-lbrn/pull/25) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#45](https://github.com/tscircuit/circuit-json-to-lbrn/pull/45) | 🐌 Tiny | AnasSarkiz | Refactors shape and path utility functions to use options-based parameter signatures for improved readability and consistency across the codebase. |

</details>

### [tscircuit/props](https://github.com/tscircuit/props)

| PR # | Impact | Rating | Contributor | Description |
|------|--------|--------|-------------|-------------|
| [#522](https://github.com/tscircuit/props/pull/522) | 🐳 Major | ⭐⭐⭐ | seveibar | Add pcbLeftEdgeX, pcbRightEdgeX, pcbTopEdgeY, and pcbBottomEdgeY layout properties for edge-anchored PCB positioning and extend component schemas to accept these new edge coordinates while maintaining alignment with existing properties. |
| [#520](https://github.com/tscircuit/props/pull/520) | 🐙 Minor | ⭐⭐ | seveibar | Allows pcbXpcbY coordinates to accept calc(...) expressions across shared layout schemas and ensures cad model coordinates use the new calc-aware validation. |
| [#519](https://github.com/tscircuit/props/pull/519) | 🐙 Minor | ⭐⭐ | seveibar | Adds a SchStyle schema covering passive size and capacitor orientation defaults, exposes optional schStyle on layout props, and regenerates documentation artifacts to include the new schematic style options. |
| [#516](https://github.com/tscircuit/props/pull/516) | 🐙 Minor | ⭐⭐ | seveibar | Allows board props to accept 6- and 8-layer stackups, updates generated documentation to reflect the expanded layer options, and adds coverage ensuring new layer counts parse correctly. |
| [#517](https://github.com/tscircuit/props/pull/517) | 🐙 Minor | ⭐⭐ | seveibar | Adds viaPadDiameter and viaHoleDiameter fields to the PcbStyle interface and validation schema, along with updated documentation to reflect these new properties. |
| [#513](https://github.com/tscircuit/props/pull/513) | 🐙 Minor | ⭐⭐ | Ayushjhawar8 | Adds a new property to the CommonComponentProps interface to allow components to be displayed as translucent models in the 3D viewer. |

<details>
<summary>🐌 Tiny Contributions (2)</summary>

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#523](https://github.com/tscircuit/props/pull/523) | 🐌 Tiny | seveibar | Allows interconnect components to use 0805, 0603, and 1206 standard values, regenerates component and props documentation to reflect the new standards, and extends interconnect tests to cover all supported standards. |
| [#518](https://github.com/tscircuit/props/pull/518) | 🐌 Tiny | seveibar | Adds a shared schematicSymbolSize schema for describing symbol pin spacing and exposes an optional schSize property on resistor and capacitor components, along with regenerating documentation and exports to reflect the new property. |

</details>

### [tscircuit/core](https://github.com/tscircuit/core)

| PR # | Impact | Rating | Contributor | Description |
|------|--------|--------|-------------|-------------|
| [#1702](https://github.com/tscircuit/core/pull/1702) | 🐳 Major | ⭐⭐⭐ | seveibar | Removes the interconnect-specific externally-connected port grouping in the autorouter connection builder and drops the interconnect autorouter jumper test that relied on the removed behavior. |
| [#1705](https://github.com/tscircuit/core/pull/1705) | 🐳 Major | ⭐⭐⭐ | ShiboSoftwareDev | Fixes bug in subcircuit inflation logic where nested groups and trace paths were not handled correctly, leading to incorrect connections within circuitJson. |
| [#1696](https://github.com/tscircuit/core/pull/1696) | 🐳 Major | ⭐⭐⭐ | Abse2001 | Fixes PCB component positioning by applying the correct component-local transform and adds missing placement fields for various components. |
| [#1698](https://github.com/tscircuit/core/pull/1698) | 🐙 Minor | ⭐⭐ | seveibar | Add support for calc string evaluation and PCB position resolution with board bounds context, including board traversal and calc variable support while guarding auto-sized boards, and update primitives to use resolved PCB positions with new tests. |
| [#1697](https://github.com/tscircuit/core/pull/1697) | 🐙 Minor | ⭐⭐ | seveibar | Adds support for double-row pinheader footprints by including a doubleRow prop, allowing for dual-row pad layouts and adds a regression test to ensure correct placement of pins across two PCB rows. |
| [#1693](https://github.com/tscircuit/core/pull/1693) | 🐙 Minor | ⭐⭐ | seveibar | Updates the intrinsic JSX footprint element to use FootprintProps while retaining optional name support and updates the tscircuitprops dependency to the latest release. |
| [#1689](https://github.com/tscircuit/core/pull/1689) | 🐙 Minor | ⭐⭐ | seveibar | Adds default via diameters for PCB styles and includes regression tests for the new functionality. |
| [#1685](https://github.com/tscircuit/core/pull/1685) | 🐙 Minor | ⭐⭐ | Ayushjhawar8 | Updates NormalComponent and CadModel to pass the show_as_translucent_model property for rendering translucent models. |
| [#1687](https://github.com/tscircuit/core/pull/1687) | 🐙 Minor | ⭐⭐ | Ayushjhawar8 | Fixes errors related to updated circuit-json dependencies in the VoltageProbe component. |
| [#1683](https://github.com/tscircuit/core/pull/1683) | 🐙 Minor | ⭐⭐ | imrishabh18 | Adds error handling for missing x and y coordinates in port connections, logging an error message and skipping the trace if coordinates are not defined. |
| [#1706](https://github.com/tscircuit/core/pull/1706) | 🐙 Minor | ⭐⭐ | ShiboSoftwareDev | Fixes bug where inflator mutates circuitJson reference, causing incorrect data and layout errors in components using shared circuitJson. |
| [#1703](https://github.com/tscircuit/core/pull/1703) | 🐙 Minor | ⭐⭐ | ShiboSoftwareDev | Enables the use of circuitJson directly on Board components and adds a new PanelLayout render phase for panelizing these boards. |
| [#1700](https://github.com/tscircuit/core/pull/1700) | 🐙 Minor | ⭐⭐ | ShiboSoftwareDev | Adds support for NPN transistors in SPICE simulations by updating the circuit-json-to-spice library and testing transistor functionality in a switch circuit. |
| [#1695](https://github.com/tscircuit/core/pull/1695) | 🐙 Minor | ⭐⭐ | ShiboSoftwareDev | Adds support for differential voltage probes in simulation, allowing measurement of voltage differences between two points in a circuit. Includes a full-wave bridge rectifier test demonstrating the new functionality. |
| [#1692](https://github.com/tscircuit/core/pull/1692) | 🐙 Minor | ⭐⭐ | MustafaMulla29 | Fixes issue where traces extend beyond the edges of pads in PCB layouts, ensuring proper rendering of trace endpoints at pad edges. |
| [#1691](https://github.com/tscircuit/core/pull/1691) | 🐙 Minor | ⭐⭐ | MustafaMulla29 | Adds a test to verify that a straight trace correctly connects a circular pad to a capacitor without rendering issues. |

<details>
<summary>🐌 Tiny Contributions (1)</summary>

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#1690](https://github.com/tscircuit/core/pull/1690) | 🐌 Tiny | seveibar | Updates the calculate-packing dependency from version 0.0.58 to 0.0.62 in the package.json file. |

</details>

### [tscircuit/circuit-json-to-gerber](https://github.com/tscircuit/circuit-json-to-gerber)

| PR # | Impact | Rating | Contributor | Description |
|------|--------|--------|-------------|-------------|
| [#67](https://github.com/tscircuit/circuit-json-to-gerber/pull/67) | 🐳 Major | ⭐⭐⭐ | seveibar | repro4 reproduction of missing trace in gerber snapshot |
| [#71](https://github.com/tscircuit/circuit-json-to-gerber/pull/71) | 🐙 Minor | ⭐⭐ | seveibar | Summary close custom board outlines and flip Y coordinates when generating edge cut gerbers add a regression test and SVG snapshots for the greenboard outline fixture  Testing BUN_UPDATE_SNAPSHOTS1 bun test testsreprosrepro5greenboard-outline.test.tsx bunx tsc --noEmit bun run format |

<details>
<summary>🐌 Tiny Contributions (1)</summary>

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#72](https://github.com/tscircuit/circuit-json-to-gerber/pull/72) | 🐌 Tiny | seveibar | Adds a workflow_dispatch trigger and upstream configuration for dispatching updates to runframe, allowing the post-release step to trigger the update-package workflow for the circuit-json-to-gerber package. |

</details>

### [tscircuit/file-server](https://github.com/tscircuit/file-server)

| PR # | Impact | Rating | Contributor | Description |
|------|--------|--------|-------------|-------------|
| [#24](https://github.com/tscircuit/file-server/pull/24) | 🐳 Major | ⭐⭐⭐ | seveibar | Adds functionality for creating, retrieving, and managing file proxies, allowing files to be served from disk or HTTP endpoints based on matching patterns. |

### [tscircuit/calculate-packing](https://github.com/tscircuit/calculate-packing)

| PR # | Impact | Rating | Contributor | Description |
|------|--------|--------|-------------|-------------|
| [#77](https://github.com/tscircuit/calculate-packing/pull/77) | 🐳 Major | ⭐⭐⭐ | seveibar | Fixes incorrect merging of collinear segments in the packing algorithm due to improper usage of the .map function. |

### [tscircuit/dsnts](https://github.com/tscircuit/dsnts)

| PR # | Impact | Rating | Contributor | Description |
|------|--------|--------|-------------|-------------|
| [#3](https://github.com/tscircuit/dsnts/pull/3) | 🐳 Major | ⭐⭐⭐ | seveibar | Add SVG generation helpers and export generateSvgFromDsn using svgson serialization with white backgrounds, install svgsonbun-match-svg and preload the SVG matcher for snapshot tests, cover rectangular, path-based, and empty DSN scenarios with SVG snapshots. |
| [#4](https://github.com/tscircuit/dsnts/pull/4) | 🐳 Major | ⭐⭐⭐ | imrishabh18 | Adds the DsnProperty element to the DsnLayer, allowing for nested properties such as index within the layer definition. |

<details>
<summary>🐌 Tiny Contributions (3)</summary>

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#7](https://github.com/tscircuit/dsnts/pull/7) | 🐌 Tiny | imrishabh18 | Removes quotes from pin references in the DsnPins class string representation. |
| [#5](https://github.com/tscircuit/dsnts/pull/5) | 🐌 Tiny | imrishabh18 | Removes double quotes around the pin ID in the output string of the DsnPin class, ensuring the output format is cleaner and more consistent. |
| [#6](https://github.com/tscircuit/dsnts/pull/6) | 🐌 Tiny | imrishabh18 | Removes double quotes from image and padstack names in the output string representation. |

</details>

### [tscircuit/orthoroutets](https://github.com/tscircuit/orthoroutets)

| PR # | Impact | Rating | Contributor | Description |
|------|--------|--------|-------------|-------------|
| [#1](https://github.com/tscircuit/orthoroutets/pull/1) | 🐳 Major | ⭐⭐⭐ | seveibar | Adds SVG generation capabilities for ORP and ORS files, allowing users to visualize circuit board designs and routing solutions in SVG format. |

### [tscircuit/contribution-tracker](https://github.com/tscircuit/contribution-tracker)

| PR # | Impact | Rating | Contributor | Description |
|------|--------|--------|-------------|-------------|
| [#257](https://github.com/tscircuit/contribution-tracker/pull/257) | 🐳 Major | ⭐⭐⭐ | Anshgrover23 | Implements contributor toggle functionality in the PR section for enhanced user interaction. |
| [#268](https://github.com/tscircuit/contribution-tracker/pull/268) | 🐙 Minor | ⭐⭐ | ArnavK-09 | Adds functionality to prioritize GitHub comments containing analysis data for pull request analysis retrieval, enhancing the data source hierarchy. |

<details>
<summary>🐌 Tiny Contributions (2)</summary>

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#269](https://github.com/tscircuit/contribution-tracker/pull/269) | 🐌 Tiny | seveibar | Adds MustafaMulla29, Ayushjhawar8, and 0hmX to the staff usernames list |
| [#270](https://github.com/tscircuit/contribution-tracker/pull/270) | 🐌 Tiny | ArnavK-09 | Changes the impact icon from purple to yellow for the default case in the impactIcon function. |

</details>

### [tscircuit/docs](https://github.com/tscircuit/docs)


<details>
<summary>🐌 Tiny Contributions (4)</summary>

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#360](https://github.com/tscircuit/docs/pull/360) | 🐌 Tiny | seveibar | Adds a link from the circuit-json-to-gerber package node to the runframe in the package dependencies diagram. |
| [#358](https://github.com/tscircuit/docs/pull/358) | 🐌 Tiny | seveibar | Simplifies the pinrow rows parameter description to omit unsupported pin distribution note |
| [#361](https://github.com/tscircuit/docs/pull/361) | 🐌 Tiny | ShiboSoftwareDev | Adds a new Transistors category to SPICE simulation guides and introduces a transistor switch example with standardized titles for diode examples. |
| [#359](https://github.com/tscircuit/docs/pull/359) | 🐌 Tiny | ShiboSoftwareDev | Adds a new documentation page with an example of a full-wave bridge rectifier for SPICE simulation. |

</details>

### [tscircuit/3d-viewer](https://github.com/tscircuit/3d-viewer)

| PR # | Impact | Rating | Contributor | Description |
|------|--------|--------|-------------|-------------|
| [#585](https://github.com/tscircuit/3d-viewer/pull/585) | 🐳 Major | ⭐⭐⭐ | Ayushjhawar8 | Add a keyboard shortcut to toggle the visibility of translucent components in the 3D viewer. |
| [#579](https://github.com/tscircuit/3d-viewer/pull/579) | 🐙 Minor | ⭐⭐ | rushabhcodes | Fixes z-fighting artifacts in 3D geometry rendering by enabling polygon offset for mesh materials and updates the jscad-electronics package version to the latest. |
| [#588](https://github.com/tscircuit/3d-viewer/pull/588) | 🐙 Minor | ⭐⭐ | ArnavK-09 | Prevents automatic zooming when the camera is changed in the 3D viewer context. |
| [#583](https://github.com/tscircuit/3d-viewer/pull/583) | 🐙 Minor | ⭐⭐ | imrishabh18 | Tracks glTF loader failures and stores them in component state, throwing load errors for rendering error messages when models fail to load. |

### [tscircuit/sparkfun-boards](https://github.com/tscircuit/sparkfun-boards)

| PR # | Impact | Rating | Contributor | Description |
|------|--------|--------|-------------|-------------|
| [#216](https://github.com/tscircuit/sparkfun-boards/pull/216) | 🐳 Major | ⭐⭐⭐ | rushabhcodes | Adds a new SparkFun Audio Jack Breakout board definition, including the PJ_307C audio jack component, board layout, and documentation. |
| [#217](https://github.com/tscircuit/sparkfun-boards/pull/217) | 🐳 Major | ⭐⭐⭐ | rushabhcodes | Adds a new board definition for the SparkFun USB-C Breakout - Vertical, including its schematic, layout, and a custom USB-C connector component with detailed pin mapping and documentation. |
| [#212](https://github.com/tscircuit/sparkfun-boards/pull/212) | 🐳 Major | ⭐⭐⭐ | rushabhcodes | Adds support for the SparkFun Tristimulus Color Sensor - OPT4048DTSR (Qwiic) board by introducing component definitions, footprints, and documentation. |

<details>
<summary>🐌 Tiny Contributions (2)</summary>

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#213](https://github.com/tscircuit/sparkfun-boards/pull/213) | 🐌 Tiny | rushabhcodes | Adds a new variant of the SM04B_SRSS_TB_LF__SN connector component and updates the board schematic to use this new version for one of the connectors, along with a minor adjustment to the 3D model positioning of the original component. |
| [#211](https://github.com/tscircuit/sparkfun-boards/pull/211) | 🐌 Tiny | rushabhcodes | Adjusts the Z-axis rotation offset of the AP2112K CAD model from 0 to 90 degrees to correct its orientation. |

</details>

### [tscircuit/circuit-json-to-dsn](https://github.com/tscircuit/circuit-json-to-dsn)

| PR # | Impact | Rating | Contributor | Description |
|------|--------|--------|-------------|-------------|
| [#5](https://github.com/tscircuit/circuit-json-to-dsn/pull/5) | 🐳 Major | ⭐⭐⭐ | imrishabh18 | Adds the library and network stages to the DSN conversion process, enabling the creation of padstack definitions and net definitions from circuit JSON. |
| [#3](https://github.com/tscircuit/circuit-json-to-dsn/pull/3) | 🐳 Major | ⭐⭐⭐ | imrishabh18 | Changes the stage name from CreateBoardBoundaryStage to AddStructureStage and adds design rules for width and clearances in the DSN structure. |
| [#2](https://github.com/tscircuit/circuit-json-to-dsn/pull/2) | 🐳 Major | ⭐⭐⭐ | imrishabh18 | img width2308 height1910 altimage srchttps:github.comuser-attachmentsassets12858576-0bd8-4761-bcdd-6d6e26fa1bc4 |
| [#4](https://github.com/tscircuit/circuit-json-to-dsn/pull/4) | 🐙 Minor | ⭐⭐ | imrishabh18 | Adds the placement stage to the DSN file, enabling the conversion of PCB component placements from circuit JSON to DSN format. |

<details>
<summary>🐌 Tiny Contributions (1)</summary>

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#1](https://github.com/tscircuit/circuit-json-to-dsn/pull/1) | 🐌 Tiny | imrishabh18 | Sets up the project with Bun as the JavaScript runtime, including configuration files and initial scripts. |

</details>

### [tscircuit/dsn-converter](https://github.com/tscircuit/dsn-converter)

| PR # | Impact | Rating | Contributor | Description |
|------|--------|--------|-------------|-------------|
| [#114](https://github.com/tscircuit/dsn-converter/pull/114) | 🐙 Minor | ⭐⭐ | imrishabh18 | Adds support for specifying the number of layers in PCB routing, allowing for dynamic layer generation based on user input. |

### [tscircuit/common](https://github.com/tscircuit/common)


<details>
<summary>🐌 Tiny Contributions (2)</summary>

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#59](https://github.com/tscircuit/common/pull/59) | 🐌 Tiny | imrishabh18 | Changes the build command from tsup to tsup-node for building the library with TypeScript definitions. |
| [#58](https://github.com/tscircuit/common/pull/58) | 🐌 Tiny | Heinrich-XIAO | Adds support for through-hole technology (THT) in the XiaoReceiver component by introducing a new prop to control the footprint rendering. |

</details>

### [tscircuit/circuit-json-to-spice](https://github.com/tscircuit/circuit-json-to-spice)

| PR # | Impact | Rating | Contributor | Description |
|------|--------|--------|-------------|-------------|
| [#27](https://github.com/tscircuit/circuit-json-to-spice/pull/27) | 🐙 Minor | ⭐⭐ | ShiboSoftwareDev | Adds support for simple_transistor components, converting them into SPICE BJT elements. |
| [#26](https://github.com/tscircuit/circuit-json-to-spice/pull/26) | 🐙 Minor | ⭐⭐ | ShiboSoftwareDev | Adds support for differential voltage probes by updating circuitJsonToSpice.ts to handle signal_input_source_ and reference_input_source_ properties, updating tests to use the new SimulationVoltageProbe format, and adding a new test for differential voltage probing. |

### [tscircuit/ngspice-spice-engine](https://github.com/tscircuit/ngspice-spice-engine)

| PR # | Impact | Rating | Contributor | Description |
|------|--------|--------|-------------|-------------|
| [#5](https://github.com/tscircuit/ngspice-spice-engine/pull/5) | 🐙 Minor | ⭐⭐ | ShiboSoftwareDev | Adds SVG snapshot testing for SPICE simulation results, enabling visual regression testing of output graphs. |

### [tscircuit/tscircuit-autorouter](https://github.com/tscircuit/tscircuit-autorouter)

| PR # | Impact | Rating | Contributor | Description |
|------|--------|--------|-------------|-------------|
| [#357](https://github.com/tscircuit/tscircuit-autorouter/pull/357) | 🐳 Major | ⭐⭐⭐ | 0hmX | Adds new animation speed options for the autorouting pipeline debugger, allowing users to select slower animation speeds for better visualization. |
| [#356](https://github.com/tscircuit/tscircuit-autorouter/pull/356) | 🐳 Major | ⭐⭐⭐ | 0hmX | Fixes routing errors caused by incorrect direction orientation, leading to better alignment of routes in high-density scenarios. |
| [#329](https://github.com/tscircuit/tscircuit-autorouter/pull/329) | 🐳 Major | ⭐⭐⭐ | 0hmX | Integrates RectDiffSolver into the autorouting pipeline, replacing the previous node solver and modifying related functionality. |
| [#344](https://github.com/tscircuit/tscircuit-autorouter/pull/344) | 🐳 Major | ⭐⭐⭐ | 0hmX | Implements off-board connection handling in the autorouting pipeline, allowing for routing through off-board connection points. |
| [#355](https://github.com/tscircuit/tscircuit-autorouter/pull/355) | 🐳 Major | ⭐⭐⭐ | Heinrich-XIAO | Removes restrictions on navigating to specific iterations in the autorouting debugger, allowing users to go to any iteration regardless of solver status. |
| [#338](https://github.com/tscircuit/tscircuit-autorouter/pull/338) | 🐳 Major | ⭐⭐⭐ | Heinrich-XIAO | Adds SameNetViaMergerSolver to optimize via connections for the same net in autorouting. |

<details>
<summary>🐌 Tiny Contributions (1)</summary>

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#340](https://github.com/tscircuit/tscircuit-autorouter/pull/340) | 🐌 Tiny | Heinrich-XIAO | Adds a bug report fixture and corresponding test for bug report ID d95f3897-599c-4f1b-a35a-73342e6114fb, enabling easier reproduction and debugging of the autorouting issue. |

</details>

## Changes by Contributor

### [techmannih](https://github.com/techmannih)

| PRs # | Impact | Rating | Description |
|------|--------|--------|-------------|
| [#440](https://github.com/tscircuit/circuit-to-svg/pull/440) | 🐳 Major | ⭐⭐⭐ | Adds support for rendering solder masks for rotated pill-shaped SMT pads in the SVG output. |
| [#500](https://github.com/tscircuit/pcb-viewer/pull/500) | 🐙 Minor | ⭐⭐ | Add support for rendering solder masks on surface mount technology (SMT) pads in the PCB viewer, allowing users to visualize solder mask coverage on pads. |
| [#502](https://github.com/tscircuit/pcb-viewer/pull/502) | 🐙 Minor | ⭐⭐ | Add support for solder mask margins on surface mount pads, allowing for positive and negative margins to be specified for better control over solder mask coverage. |
| [#364](https://github.com/tscircuit/circuit-json/pull/364) | 🐙 Minor | ⭐⭐ | Adds an optional boolean property is_tented to the PCB via definition, allowing for better representation of tented vias in PCB designs. |
| [#433](https://github.com/tscircuit/footprinter/pull/433) | 🐙 Minor | ⭐⭐ | Adds a faceup flag to the pinrow definition to control the orientation of the 3D model, ensuring the male pin header faces upwards. |
| [#171](https://github.com/tscircuit/kicad-component-converter/pull/171) | 🐙 Minor | ⭐⭐ | Adds pin label tooltips formatted as pinN for PCB elements in the circuit JSON output. |
| [#330](https://github.com/tscircuit/easyeda-converter/pull/330) | 🐙 Minor | ⭐⭐ | Fixes handling of circuit-json type errors by adding support for path shapes and ensuring proper application of transformations to various shapes. |
| [#241](https://github.com/tscircuit/jscad-electronics/pull/241) | 🐙 Minor | ⭐⭐ | Adds faceup functionality to the PinRow component, allowing for better representation of pin configurations in 3D views. |
| [#91](https://github.com/tscircuit/circuit-json-to-gltf/pull/91) | 🐙 Minor | ⭐⭐ | Removes the interfaces and types related to PCB copper pours from the codebase, simplifying the structure and potentially reducing complexity in PCB design handling. |

<details>
<summary>🐌 Tiny Contributions (4)</summary>

| PR # | Impact | Description |
|------|--------|-------------|
| [#503](https://github.com/tscircuit/pcb-viewer/pull/503) | 🐌 Tiny | Updates the tscircuitalphabet dependency from version 0.0.3 to 0.0.8 in the package.json file. |
| [#435](https://github.com/tscircuit/footprinter/pull/435) | 🐌 Tiny | Fixes type error by adding missing hole_offset_x and hole_offset_y properties to PcbHoleCircularWithRectPad type definition |
| [#243](https://github.com/tscircuit/jscad-electronics/pull/243) | 🐌 Tiny | Fixes DIP leg positioning to prevent body overlap with the hole grid in the Dual Inline Package component. |
| [#92](https://github.com/tscircuit/circuit-json-to-gltf/pull/92) | 🐌 Tiny | Adds a reproduction test for CAD components failing to align with their PCB panels footprints. |

</details>

### [Asymtode712](https://github.com/Asymtode712)


<details>
<summary>🐌 Tiny Contributions (1)</summary>

| PR # | Impact | Description |
|------|--------|-------------|
| [#509](https://github.com/tscircuit/pcb-viewer/pull/509) | 🐌 Tiny | Adds scrolling functionality to the error list in the toolbar overlay by setting a maximum height and enabling overflow when the error list exceeds this height. |

</details>

### [tscircuitbot](https://github.com/tscircuitbot)


<details>
<summary>🐌 Tiny Contributions (305)</summary>

| PR # | Impact | Description |
|------|--------|-------------|
| [#510](https://github.com/tscircuit/pcb-viewer/pull/510) | 🐌 Tiny | Automated package update |
| [#508](https://github.com/tscircuit/pcb-viewer/pull/508) | 🐌 Tiny | Automated package update |
| [#506](https://github.com/tscircuit/pcb-viewer/pull/506) | 🐌 Tiny | Automated package update |
| [#505](https://github.com/tscircuit/pcb-viewer/pull/505) | 🐌 Tiny | Automated package update |
| [#501](https://github.com/tscircuit/pcb-viewer/pull/501) | 🐌 Tiny | Automated package update |
| [#1562](https://github.com/tscircuit/tscircuit/pull/1562) | 🐌 Tiny | Automated package update |
| [#1561](https://github.com/tscircuit/tscircuit/pull/1561) | 🐌 Tiny | Automated package update |
| [#1560](https://github.com/tscircuit/tscircuit/pull/1560) | 🐌 Tiny | Automated package update |
| [#1559](https://github.com/tscircuit/tscircuit/pull/1559) | 🐌 Tiny | Updates the tscircuitcli package to version 0.1.596 in the package.json file. |
| [#1558](https://github.com/tscircuit/tscircuit/pull/1558) | 🐌 Tiny | Automated package update |
| [#1557](https://github.com/tscircuit/tscircuit/pull/1557) | 🐌 Tiny | Updates the tscircuitcli package to version 0.1.595 in package.json |
| [#1556](https://github.com/tscircuit/tscircuit/pull/1556) | 🐌 Tiny | Automated package update |
| [#1555](https://github.com/tscircuit/tscircuit/pull/1555) | 🐌 Tiny | Updates the tscircuitcli package from version 0.1.591 to 0.1.594 |
| [#1551](https://github.com/tscircuit/tscircuit/pull/1551) | 🐌 Tiny | Automated package update |
| [#1550](https://github.com/tscircuit/tscircuit/pull/1550) | 🐌 Tiny | Updates the package versions for tscircuitcli, tscircuitcore, and tscircuiteval in package.json |
| [#1549](https://github.com/tscircuit/tscircuit/pull/1549) | 🐌 Tiny | Automated package update |
| [#1548](https://github.com/tscircuit/tscircuit/pull/1548) | 🐌 Tiny | Updates the tscircuitcli package to version 0.1.590 in the package.json file. |
| [#1547](https://github.com/tscircuit/tscircuit/pull/1547) | 🐌 Tiny | Updates the package version from 0.0.998 to 0.0.999 in package.json |
| [#1546](https://github.com/tscircuit/tscircuit/pull/1546) | 🐌 Tiny | Updates the tscircuitcli package to version 0.1.589 in the package.json file. |
| [#1545](https://github.com/tscircuit/tscircuit/pull/1545) | 🐌 Tiny | Automated package update |
| [#1544](https://github.com/tscircuit/tscircuit/pull/1544) | 🐌 Tiny | Automated package update |
| [#1541](https://github.com/tscircuit/tscircuit/pull/1541) | 🐌 Tiny | Automated package update |
| [#1540](https://github.com/tscircuit/tscircuit/pull/1540) | 🐌 Tiny | Automated package update |
| [#1538](https://github.com/tscircuit/tscircuit/pull/1538) | 🐌 Tiny | Automated package update |
| [#1537](https://github.com/tscircuit/tscircuit/pull/1537) | 🐌 Tiny | Automated package update |
| [#1536](https://github.com/tscircuit/tscircuit/pull/1536) | 🐌 Tiny | Automated package update |
| [#1535](https://github.com/tscircuit/tscircuit/pull/1535) | 🐌 Tiny | Updates the tscircuitcli package from version 0.1.584 to 0.1.585 and the tscircuitrunframe package from version 0.0.1321 to 0.0.1322 in package.json |
| [#1534](https://github.com/tscircuit/tscircuit/pull/1534) | 🐌 Tiny | Automated package update |
| [#1533](https://github.com/tscircuit/tscircuit/pull/1533) | 🐌 Tiny | Automated package update |
| [#1532](https://github.com/tscircuit/tscircuit/pull/1532) | 🐌 Tiny | Automated package update |
| [#1531](https://github.com/tscircuit/tscircuit/pull/1531) | 🐌 Tiny | Updates the tscircuitcli package to version 0.1.583 in the package.json file |
| [#1530](https://github.com/tscircuit/tscircuit/pull/1530) | 🐌 Tiny | Automated package update |
| [#1529](https://github.com/tscircuit/tscircuit/pull/1529) | 🐌 Tiny | Updates the tscircuitcli package to version 0.1.582 in the package.json file. |
| [#1528](https://github.com/tscircuit/tscircuit/pull/1528) | 🐌 Tiny | Automated package update |
| [#1527](https://github.com/tscircuit/tscircuit/pull/1527) | 🐌 Tiny | Automated package update |
| [#1526](https://github.com/tscircuit/tscircuit/pull/1526) | 🐌 Tiny | Automated package update |
| [#1525](https://github.com/tscircuit/tscircuit/pull/1525) | 🐌 Tiny | Automated package update |
| [#1524](https://github.com/tscircuit/tscircuit/pull/1524) | 🐌 Tiny | Automated package update |
| [#1523](https://github.com/tscircuit/tscircuit/pull/1523) | 🐌 Tiny | Updates the tscircuitcli package to version 0.1.579 in the package.json file. |
| [#1522](https://github.com/tscircuit/tscircuit/pull/1522) | 🐌 Tiny | Automated package update |
| [#1521](https://github.com/tscircuit/tscircuit/pull/1521) | 🐌 Tiny | Updates the tscircuitcli package to version 0.1.578 in package.json |
| [#1519](https://github.com/tscircuit/tscircuit/pull/1519) | 🐌 Tiny | Updates the tscircuitcli package to version 0.1.577 in the package.json file. |
| [#1517](https://github.com/tscircuit/tscircuit/pull/1517) | 🐌 Tiny | Automated package update |
| [#1516](https://github.com/tscircuit/tscircuit/pull/1516) | 🐌 Tiny | Automated package update |
| [#1515](https://github.com/tscircuit/tscircuit/pull/1515) | 🐌 Tiny | Automated package update |
| [#1514](https://github.com/tscircuit/tscircuit/pull/1514) | 🐌 Tiny | Automated package update |
| [#1513](https://github.com/tscircuit/tscircuit/pull/1513) | 🐌 Tiny | Automated package update |
| [#1512](https://github.com/tscircuit/tscircuit/pull/1512) | 🐌 Tiny | Automated package update |
| [#1510](https://github.com/tscircuit/tscircuit/pull/1510) | 🐌 Tiny | Automated package update |
| [#1509](https://github.com/tscircuit/tscircuit/pull/1509) | 🐌 Tiny | Automated package update |
| [#1504](https://github.com/tscircuit/tscircuit/pull/1504) | 🐌 Tiny | Automated package update |
| [#1503](https://github.com/tscircuit/tscircuit/pull/1503) | 🐌 Tiny | Automated package update |
| [#1502](https://github.com/tscircuit/tscircuit/pull/1502) | 🐌 Tiny | Automated package update |
| [#1501](https://github.com/tscircuit/tscircuit/pull/1501) | 🐌 Tiny | Automated package update |
| [#1500](https://github.com/tscircuit/tscircuit/pull/1500) | 🐌 Tiny | Automated package update |
| [#1499](https://github.com/tscircuit/tscircuit/pull/1499) | 🐌 Tiny | Updates the tscircuitcli package to version 0.1.570 |
| [#1498](https://github.com/tscircuit/tscircuit/pull/1498) | 🐌 Tiny | Automated package update |
| [#1497](https://github.com/tscircuit/tscircuit/pull/1497) | 🐌 Tiny | Updates the tscircuitcli and tscircuiteval packages to their latest versions. |
| [#1496](https://github.com/tscircuit/tscircuit/pull/1496) | 🐌 Tiny | Automated package update |
| [#1495](https://github.com/tscircuit/tscircuit/pull/1495) | 🐌 Tiny | Updates the tscircuitcli package to version 0.1.568 in the package.json file. |
| [#1494](https://github.com/tscircuit/tscircuit/pull/1494) | 🐌 Tiny | Automated package update |
| [#1493](https://github.com/tscircuit/tscircuit/pull/1493) | 🐌 Tiny | Automated package update |
| [#1492](https://github.com/tscircuit/tscircuit/pull/1492) | 🐌 Tiny | Automated package update |
| [#1491](https://github.com/tscircuit/tscircuit/pull/1491) | 🐌 Tiny | Automated package update |
| [#1490](https://github.com/tscircuit/tscircuit/pull/1490) | 🐌 Tiny | Automated package update |
| [#1489](https://github.com/tscircuit/tscircuit/pull/1489) | 🐌 Tiny | Updates the tscircuitcli package from version 0.1.564 to 0.1.565 and the tscircuitrunframe package from version 0.0.1302 to 0.0.1303 in package.json |
| [#1488](https://github.com/tscircuit/tscircuit/pull/1488) | 🐌 Tiny | Automated package update |
| [#1487](https://github.com/tscircuit/tscircuit/pull/1487) | 🐌 Tiny | Automated package update |
| [#1486](https://github.com/tscircuit/tscircuit/pull/1486) | 🐌 Tiny | Automated package update |
| [#1485](https://github.com/tscircuit/tscircuit/pull/1485) | 🐌 Tiny | Automated package update |
| [#1484](https://github.com/tscircuit/tscircuit/pull/1484) | 🐌 Tiny | Automated package update |
| [#1483](https://github.com/tscircuit/tscircuit/pull/1483) | 🐌 Tiny | Automated package update |
| [#1482](https://github.com/tscircuit/tscircuit/pull/1482) | 🐌 Tiny | Automated package update |
| [#1481](https://github.com/tscircuit/tscircuit/pull/1481) | 🐌 Tiny | Automated package update |
| [#1480](https://github.com/tscircuit/tscircuit/pull/1480) | 🐌 Tiny | Automated package update |
| [#1479](https://github.com/tscircuit/tscircuit/pull/1479) | 🐌 Tiny | Automated package update |
| [#1478](https://github.com/tscircuit/tscircuit/pull/1478) | 🐌 Tiny | Automated package update |
| [#1477](https://github.com/tscircuit/tscircuit/pull/1477) | 🐌 Tiny | Automated package update |
| [#1476](https://github.com/tscircuit/tscircuit/pull/1476) | 🐌 Tiny | Automated package update |
| [#1475](https://github.com/tscircuit/tscircuit/pull/1475) | 🐌 Tiny | Updates the tscircuitcli package from version 0.1.557 to 0.1.558 and the tscircuitrunframe package from version 0.0.1294 to 0.0.1295 in package.json |
| [#1474](https://github.com/tscircuit/tscircuit/pull/1474) | 🐌 Tiny | Automated package update |
| [#1473](https://github.com/tscircuit/tscircuit/pull/1473) | 🐌 Tiny | Updates the tscircuitcli package to version 0.1.557 in package.json |
| [#1471](https://github.com/tscircuit/tscircuit/pull/1471) | 🐌 Tiny | Updates the tscircuitcli package to version 0.1.556 in the package.json file. |
| [#1470](https://github.com/tscircuit/tscircuit/pull/1470) | 🐌 Tiny | Automated package update |
| [#1469](https://github.com/tscircuit/tscircuit/pull/1469) | 🐌 Tiny | Updates the tscircuitcli package to version 0.1.555 in package.json |
| [#1468](https://github.com/tscircuit/tscircuit/pull/1468) | 🐌 Tiny | Automated package update |
| [#1467](https://github.com/tscircuit/tscircuit/pull/1467) | 🐌 Tiny | Updates the tscircuitcli package to version 0.1.554 in the package.json file |
| [#1466](https://github.com/tscircuit/tscircuit/pull/1466) | 🐌 Tiny | Automated package update |
| [#1465](https://github.com/tscircuit/tscircuit/pull/1465) | 🐌 Tiny | Updates the tscircuitcli package to version 0.1.553 in package.json |
| [#1464](https://github.com/tscircuit/tscircuit/pull/1464) | 🐌 Tiny | Automated package update |
| [#1463](https://github.com/tscircuit/tscircuit/pull/1463) | 🐌 Tiny | Updates the tscircuitcli package to version 0.1.552 in the package.json file. |
| [#1462](https://github.com/tscircuit/tscircuit/pull/1462) | 🐌 Tiny | Automated package update |
| [#1461](https://github.com/tscircuit/tscircuit/pull/1461) | 🐌 Tiny | Updates the tscircuitcli package from version 0.1.550 to 0.1.551 and the tscircuitrunframe package from version 0.0.1293 to 0.0.1294 in package.json |
| [#1460](https://github.com/tscircuit/tscircuit/pull/1460) | 🐌 Tiny | Automated package update |
| [#1459](https://github.com/tscircuit/tscircuit/pull/1459) | 🐌 Tiny | Automated package update |
| [#1458](https://github.com/tscircuit/tscircuit/pull/1458) | 🐌 Tiny | Automated package update |
| [#1457](https://github.com/tscircuit/tscircuit/pull/1457) | 🐌 Tiny | Updates the tscircuitcli package to version 0.1.549 in the package.json file. |
| [#1456](https://github.com/tscircuit/tscircuit/pull/1456) | 🐌 Tiny | Automated package update |
| [#1455](https://github.com/tscircuit/tscircuit/pull/1455) | 🐌 Tiny | Updates the tscircuitcli package version from 0.1.547 to 0.1.548 in package.json |
| [#1454](https://github.com/tscircuit/tscircuit/pull/1454) | 🐌 Tiny | Updates the package version from 0.0.955 to 0.0.956 in package.json |
| [#2110](https://github.com/tscircuit/tscircuit.com/pull/2110) | 🐌 Tiny | Automated package update |
| [#2109](https://github.com/tscircuit/tscircuit.com/pull/2109) | 🐌 Tiny | Updates the tscircuiteval package from version 0.0.510 to 0.0.511 |
| [#2103](https://github.com/tscircuit/tscircuit.com/pull/2103) | 🐌 Tiny | Updates the tscircuiteval package from version 0.0.509 to 0.0.510 in the package.json file. |
| [#2100](https://github.com/tscircuit/tscircuit.com/pull/2100) | 🐌 Tiny | Updates the tscircuiteval package from version 0.0.508 to 0.0.509 |
| [#2099](https://github.com/tscircuit/tscircuit.com/pull/2099) | 🐌 Tiny | Updates the tscircuiteval package from version 0.0.507 to 0.0.508 |
| [#2098](https://github.com/tscircuit/tscircuit.com/pull/2098) | 🐌 Tiny | Updates the tscircuiteval package version from 0.0.505 to 0.0.507 in package.json |
| [#2094](https://github.com/tscircuit/tscircuit.com/pull/2094) | 🐌 Tiny | Updates the tscircuiteval package from version 0.0.503 to 0.0.505 |
| [#2090](https://github.com/tscircuit/tscircuit.com/pull/2090) | 🐌 Tiny | Updates the tscircuiteval package from version 0.0.502 to 0.0.503 in the package.json file. |
| [#2089](https://github.com/tscircuit/tscircuit.com/pull/2089) | 🐌 Tiny | Updates the tscircuiteval package from version 0.0.501 to 0.0.502 |
| [#2088](https://github.com/tscircuit/tscircuit.com/pull/2088) | 🐌 Tiny | Automated package update |
| [#2087](https://github.com/tscircuit/tscircuit.com/pull/2087) | 🐌 Tiny | Automated package update |
| [#2086](https://github.com/tscircuit/tscircuit.com/pull/2086) | 🐌 Tiny | Automated package update |
| [#2085](https://github.com/tscircuit/tscircuit.com/pull/2085) | 🐌 Tiny | Updates the tscircuiteval package version from 0.0.497 to 0.0.498 in package.json |
| [#2084](https://github.com/tscircuit/tscircuit.com/pull/2084) | 🐌 Tiny | Automated package update |
| [#2083](https://github.com/tscircuit/tscircuit.com/pull/2083) | 🐌 Tiny | Updates the tscircuiteval package from version 0.0.495 to 0.0.496 |
| [#2082](https://github.com/tscircuit/tscircuit.com/pull/2082) | 🐌 Tiny | Updates the tscircuiteval package to version 0.0.495 in the package.json file. |
| [#2081](https://github.com/tscircuit/tscircuit.com/pull/2081) | 🐌 Tiny | Updates the tscircuiteval package version from 0.0.493 to 0.0.494 in package.json |
| [#2079](https://github.com/tscircuit/tscircuit.com/pull/2079) | 🐌 Tiny | Updates the tscircuiteval package from version 0.0.492 to 0.0.493 |
| [#1632](https://github.com/tscircuit/eval/pull/1632) | 🐌 Tiny | Automated package update |
| [#1631](https://github.com/tscircuit/eval/pull/1631) | 🐌 Tiny | Automated package update to version 0.0.511 |
| [#1626](https://github.com/tscircuit/eval/pull/1626) | 🐌 Tiny | Automated package update |
| [#1625](https://github.com/tscircuit/eval/pull/1625) | 🐌 Tiny | Automated package update |
| [#1622](https://github.com/tscircuit/eval/pull/1622) | 🐌 Tiny | Automated package update |
| [#1621](https://github.com/tscircuit/eval/pull/1621) | 🐌 Tiny | Automated package update |
| [#1617](https://github.com/tscircuit/eval/pull/1617) | 🐌 Tiny | Automated package update |
| [#1614](https://github.com/tscircuit/eval/pull/1614) | 🐌 Tiny | Automated package update |
| [#1613](https://github.com/tscircuit/eval/pull/1613) | 🐌 Tiny | Automated package update |
| [#1611](https://github.com/tscircuit/eval/pull/1611) | 🐌 Tiny | Automated package update |
| [#1610](https://github.com/tscircuit/eval/pull/1610) | 🐌 Tiny | Automated package update |
| [#1608](https://github.com/tscircuit/eval/pull/1608) | 🐌 Tiny | Automated package update |
| [#1606](https://github.com/tscircuit/eval/pull/1606) | 🐌 Tiny | Automated package update to version 0.0.504 |
| [#1605](https://github.com/tscircuit/eval/pull/1605) | 🐌 Tiny | Automated package update |
| [#1601](https://github.com/tscircuit/eval/pull/1601) | 🐌 Tiny | Automated package update |
| [#1600](https://github.com/tscircuit/eval/pull/1600) | 🐌 Tiny | Automated package update |
| [#1598](https://github.com/tscircuit/eval/pull/1598) | 🐌 Tiny | Automated package update |
| [#1597](https://github.com/tscircuit/eval/pull/1597) | 🐌 Tiny | Automated package update |
| [#1595](https://github.com/tscircuit/eval/pull/1595) | 🐌 Tiny | Automated package update |
| [#1592](https://github.com/tscircuit/eval/pull/1592) | 🐌 Tiny | Automated package update |
| [#1591](https://github.com/tscircuit/eval/pull/1591) | 🐌 Tiny | Updates the version of the tscircuitcore package from 0.0.884 to 0.0.885 in package.json |
| [#1589](https://github.com/tscircuit/eval/pull/1589) | 🐌 Tiny | Automated package update |
| [#1588](https://github.com/tscircuit/eval/pull/1588) | 🐌 Tiny | Automated package update |
| [#1587](https://github.com/tscircuit/eval/pull/1587) | 🐌 Tiny | Automated package update |
| [#1586](https://github.com/tscircuit/eval/pull/1586) | 🐌 Tiny | Automated package update |
| [#1584](https://github.com/tscircuit/eval/pull/1584) | 🐌 Tiny | Automated package update |
| [#1582](https://github.com/tscircuit/eval/pull/1582) | 🐌 Tiny | Automated package update |
| [#1581](https://github.com/tscircuit/eval/pull/1581) | 🐌 Tiny | Automated package update |
| [#1579](https://github.com/tscircuit/eval/pull/1579) | 🐌 Tiny | Automated package update |
| [#1578](https://github.com/tscircuit/eval/pull/1578) | 🐌 Tiny | Automated package update |
| [#1576](https://github.com/tscircuit/eval/pull/1576) | 🐌 Tiny | Automated package update |
| [#1575](https://github.com/tscircuit/eval/pull/1575) | 🐌 Tiny | Automated package update |
| [#1954](https://github.com/tscircuit/runframe/pull/1954) | 🐌 Tiny | Automated package update |
| [#1953](https://github.com/tscircuit/runframe/pull/1953) | 🐌 Tiny | Updates the tscircuiteval package to version 0.0.512 in the package.json file. |
| [#1952](https://github.com/tscircuit/runframe/pull/1952) | 🐌 Tiny | Automated package update |
| [#1951](https://github.com/tscircuit/runframe/pull/1951) | 🐌 Tiny | Updates the tscircuiteval package from version 0.0.510 to 0.0.511 |
| [#1950](https://github.com/tscircuit/runframe/pull/1950) | 🐌 Tiny | Automated package update to version 0.0.1328 |
| [#1948](https://github.com/tscircuit/runframe/pull/1948) | 🐌 Tiny | Automated package update |
| [#1947](https://github.com/tscircuit/runframe/pull/1947) | 🐌 Tiny | Updates the tscircuiteval package from version 0.0.509 to 0.0.510 |
| [#1946](https://github.com/tscircuit/runframe/pull/1946) | 🐌 Tiny | Updates the package version from 0.0.1325 to 0.0.1326 in package.json |
| [#1945](https://github.com/tscircuit/runframe/pull/1945) | 🐌 Tiny | Updates the package version from 0.0.1324 to 0.0.1325 in package.json |
| [#1942](https://github.com/tscircuit/runframe/pull/1942) | 🐌 Tiny | Automated package update |
| [#1940](https://github.com/tscircuit/runframe/pull/1940) | 🐌 Tiny | Updates the package version from 0.0.1322 to 0.0.1323 in package.json |
| [#1938](https://github.com/tscircuit/runframe/pull/1938) | 🐌 Tiny | Automated package update |
| [#1937](https://github.com/tscircuit/runframe/pull/1937) | 🐌 Tiny | Updates the circuit-json-to-gerber package from version 0.0.41 to 0.0.42 |
| [#1936](https://github.com/tscircuit/runframe/pull/1936) | 🐌 Tiny | Automated package update |
| [#1935](https://github.com/tscircuit/runframe/pull/1935) | 🐌 Tiny | Updates the tscircuit3d-viewer package to version 0.0.448 in the package.json file. |
| [#1934](https://github.com/tscircuit/runframe/pull/1934) | 🐌 Tiny | Automated package update |
| [#1932](https://github.com/tscircuit/runframe/pull/1932) | 🐌 Tiny | Updates the package version from 0.0.1318 to 0.0.1319 in package.json |
| [#1930](https://github.com/tscircuit/runframe/pull/1930) | 🐌 Tiny | Updates the package version from 0.0.1317 to 0.0.1318 in package.json |
| [#1929](https://github.com/tscircuit/runframe/pull/1929) | 🐌 Tiny | Updates the tscircuiteval package from version 0.0.508 to 0.0.509 |
| [#1927](https://github.com/tscircuit/runframe/pull/1927) | 🐌 Tiny | Automated package update |
| [#1926](https://github.com/tscircuit/runframe/pull/1926) | 🐌 Tiny | Automated package update for tscircuit3d-viewer from version 0.0.446 to 0.0.447 |
| [#1924](https://github.com/tscircuit/runframe/pull/1924) | 🐌 Tiny | Updates the package version from 0.0.1315 to 0.0.1316 in package.json |
| [#1922](https://github.com/tscircuit/runframe/pull/1922) | 🐌 Tiny | Updates the package version from 0.0.1314 to 0.0.1315 in package.json |
| [#1921](https://github.com/tscircuit/runframe/pull/1921) | 🐌 Tiny | Updates the tscircuiteval package to version 0.0.508 |
| [#1920](https://github.com/tscircuit/runframe/pull/1920) | 🐌 Tiny | Automated package update |
| [#1919](https://github.com/tscircuit/runframe/pull/1919) | 🐌 Tiny | Updates the tscircuiteval package from version 0.0.505 to 0.0.507 |
| [#1917](https://github.com/tscircuit/runframe/pull/1917) | 🐌 Tiny | Automated package update |
| [#1916](https://github.com/tscircuit/runframe/pull/1916) | 🐌 Tiny | Updates the tscircuitpcb-viewer package from version 1.11.272 to 1.11.273 |
| [#1914](https://github.com/tscircuit/runframe/pull/1914) | 🐌 Tiny | Automated package update |
| [#1913](https://github.com/tscircuit/runframe/pull/1913) | 🐌 Tiny | Updates the tscircuiteval package from version 0.0.503 to 0.0.505 |
| [#1912](https://github.com/tscircuit/runframe/pull/1912) | 🐌 Tiny | Automated package update |
| [#1911](https://github.com/tscircuit/runframe/pull/1911) | 🐌 Tiny | Automated package update |
| [#1910](https://github.com/tscircuit/runframe/pull/1910) | 🐌 Tiny | Automated package update to version 0.0.1310 |
| [#1909](https://github.com/tscircuit/runframe/pull/1909) | 🐌 Tiny | Updates the tscircuitpcb-viewer package from version 1.11.271 to 1.11.272 |
| [#1908](https://github.com/tscircuit/runframe/pull/1908) | 🐌 Tiny | Updates the package version from 0.0.1307 to 0.0.1309 in package.json |
| [#1907](https://github.com/tscircuit/runframe/pull/1907) | 🐌 Tiny | Updates the tscircuitpcb-viewer package from version 1.11.270 to 1.11.271 |
| [#1906](https://github.com/tscircuit/runframe/pull/1906) | 🐌 Tiny | Updates the tscircuitpcb-viewer package from version 1.11.269 to 1.11.270 |
| [#1904](https://github.com/tscircuit/runframe/pull/1904) | 🐌 Tiny | Automated package update to version 0.0.1307 |
| [#1903](https://github.com/tscircuit/runframe/pull/1903) | 🐌 Tiny | Updates the tscircuiteval package from version 0.0.502 to 0.0.503 in the package.json file. |
| [#1902](https://github.com/tscircuit/runframe/pull/1902) | 🐌 Tiny | Automated package update |
| [#1901](https://github.com/tscircuit/runframe/pull/1901) | 🐌 Tiny | Updates the tscircuiteval package to version 0.0.502 in the package.json file. |
| [#1900](https://github.com/tscircuit/runframe/pull/1900) | 🐌 Tiny | Automated package update |
| [#1899](https://github.com/tscircuit/runframe/pull/1899) | 🐌 Tiny | Updates the tscircuiteval package from version 0.0.500 to 0.0.501 |
| [#1898](https://github.com/tscircuit/runframe/pull/1898) | 🐌 Tiny | Automated package update |
| [#1897](https://github.com/tscircuit/runframe/pull/1897) | 🐌 Tiny | Updates the tscircuiteval package from version 0.0.499 to 0.0.500 |
| [#1896](https://github.com/tscircuit/runframe/pull/1896) | 🐌 Tiny | Updates the package version from 0.0.1302 to 0.0.1303 in package.json |
| [#1895](https://github.com/tscircuit/runframe/pull/1895) | 🐌 Tiny | Updates the tscircuiteval package to version 0.0.499 in package.json |
| [#1894](https://github.com/tscircuit/runframe/pull/1894) | 🐌 Tiny | Automated package update |
| [#1893](https://github.com/tscircuit/runframe/pull/1893) | 🐌 Tiny | Automated package update |
| [#1891](https://github.com/tscircuit/runframe/pull/1891) | 🐌 Tiny | Automated package update to version 0.0.1301 |
| [#1890](https://github.com/tscircuit/runframe/pull/1890) | 🐌 Tiny | Updates the tscircuitpcb-viewer package to version 1.11.269 |
| [#1889](https://github.com/tscircuit/runframe/pull/1889) | 🐌 Tiny | Automated package update to version 0.0.1300 |
| [#1888](https://github.com/tscircuit/runframe/pull/1888) | 🐌 Tiny | Updates the tscircuiteval package to version 0.0.497 in package.json |
| [#1887](https://github.com/tscircuit/runframe/pull/1887) | 🐌 Tiny | Updates the package version from 0.0.1298 to 0.0.1299 in package.json |
| [#1886](https://github.com/tscircuit/runframe/pull/1886) | 🐌 Tiny | Updates the tscircuiteval package from version 0.0.495 to 0.0.496 |
| [#1885](https://github.com/tscircuit/runframe/pull/1885) | 🐌 Tiny | Automated package update |
| [#1884](https://github.com/tscircuit/runframe/pull/1884) | 🐌 Tiny | Updates the tscircuiteval package to version 0.0.495 in package.json |
| [#1883](https://github.com/tscircuit/runframe/pull/1883) | 🐌 Tiny | Automated package update to version 0.0.1297 |
| [#1882](https://github.com/tscircuit/runframe/pull/1882) | 🐌 Tiny | Updates the tscircuiteval package to version 0.0.494 in the package.json file. |
| [#1881](https://github.com/tscircuit/runframe/pull/1881) | 🐌 Tiny | Automated package update |
| [#1880](https://github.com/tscircuit/runframe/pull/1880) | 🐌 Tiny | Updates the tscircuit3d-viewer package to version 0.0.446 in the package.json file. |
| [#1879](https://github.com/tscircuit/runframe/pull/1879) | 🐌 Tiny | Automated package update to version 0.0.1295 |
| [#1878](https://github.com/tscircuit/runframe/pull/1878) | 🐌 Tiny | Automated package update to version 0.0.1294 |
| [#1877](https://github.com/tscircuit/runframe/pull/1877) | 🐌 Tiny | Updates the tscircuit3d-viewer package to version 0.0.445 in package.json |
| [#1876](https://github.com/tscircuit/runframe/pull/1876) | 🐌 Tiny | Updates the package version from 0.0.1292 to 0.0.1293 in package.json |
| [#1875](https://github.com/tscircuit/runframe/pull/1875) | 🐌 Tiny | Updates the tscircuiteval package to version 0.0.493 |
| [#1872](https://github.com/tscircuit/runframe/pull/1872) | 🐌 Tiny | Automated package update |
| [#1215](https://github.com/tscircuit/cli/pull/1215) | 🐌 Tiny | Automated package update |
| [#1201](https://github.com/tscircuit/cli/pull/1201) | 🐌 Tiny | Updates the tscircuitrunframe package from version 0.0.1324 to 0.0.1327 |
| [#1206](https://github.com/tscircuit/cli/pull/1206) | 🐌 Tiny | Automated README update with latest CLI usage output. |
| [#1205](https://github.com/tscircuit/cli/pull/1205) | 🐌 Tiny | Automated package update |
| [#1198](https://github.com/tscircuit/cli/pull/1198) | 🐌 Tiny | Automated package update |
| [#1195](https://github.com/tscircuit/cli/pull/1195) | 🐌 Tiny | Automated package update |
| [#1191](https://github.com/tscircuit/cli/pull/1191) | 🐌 Tiny | Automated package update |
| [#1185](https://github.com/tscircuit/cli/pull/1185) | 🐌 Tiny | Automated package update |
| [#1184](https://github.com/tscircuit/cli/pull/1184) | 🐌 Tiny | Updates the tscircuitrunframe package from version 0.0.1323 to 0.0.1324 |
| [#1182](https://github.com/tscircuit/cli/pull/1182) | 🐌 Tiny | Automated package update |
| [#1181](https://github.com/tscircuit/cli/pull/1181) | 🐌 Tiny | Updates the tscircuitrunframe package from version 0.0.1321 to 0.0.1323 in the package.json file. |
| [#1180](https://github.com/tscircuit/cli/pull/1180) | 🐌 Tiny | Automated package update |
| [#1176](https://github.com/tscircuit/cli/pull/1176) | 🐌 Tiny | Automated package update |
| [#1175](https://github.com/tscircuit/cli/pull/1175) | 🐌 Tiny | Updates the tscircuitrunframe package to version 0.0.1321 in package.json |
| [#1174](https://github.com/tscircuit/cli/pull/1174) | 🐌 Tiny | Automated package update |
| [#1172](https://github.com/tscircuit/cli/pull/1172) | 🐌 Tiny | Automated package update |
| [#1170](https://github.com/tscircuit/cli/pull/1170) | 🐌 Tiny | Updates the tscircuitrunframe package to version 0.0.1320 in package.json |
| [#1171](https://github.com/tscircuit/cli/pull/1171) | 🐌 Tiny | Automated package update |
| [#1168](https://github.com/tscircuit/cli/pull/1168) | 🐌 Tiny | Automated package update |
| [#1166](https://github.com/tscircuit/cli/pull/1166) | 🐌 Tiny | Updates the tscircuitrunframe package from version 0.0.1318 to 0.0.1319 |
| [#1165](https://github.com/tscircuit/cli/pull/1165) | 🐌 Tiny | Automated package update |
| [#1162](https://github.com/tscircuit/cli/pull/1162) | 🐌 Tiny | Automated package update to version 0.1.578 |
| [#1159](https://github.com/tscircuit/cli/pull/1159) | 🐌 Tiny | Automated package update |
| [#1155](https://github.com/tscircuit/cli/pull/1155) | 🐌 Tiny | Automated package update |
| [#1154](https://github.com/tscircuit/cli/pull/1154) | 🐌 Tiny | Updates the tscircuitrunframe package from version 0.0.1316 to 0.0.1318 |
| [#1153](https://github.com/tscircuit/cli/pull/1153) | 🐌 Tiny | Automated package update |
| [#1146](https://github.com/tscircuit/cli/pull/1146) | 🐌 Tiny | Automated package update |
| [#1141](https://github.com/tscircuit/cli/pull/1141) | 🐌 Tiny | Automated package update |
| [#1140](https://github.com/tscircuit/cli/pull/1140) | 🐌 Tiny | Updates the tscircuitrunframe package from version 0.0.1308 to 0.0.1314 in the package.json file. |
| [#1133](https://github.com/tscircuit/cli/pull/1133) | 🐌 Tiny | Automated package update |
| [#1132](https://github.com/tscircuit/cli/pull/1132) | 🐌 Tiny | Updates the tscircuitrunframe package from version 0.0.1306 to 0.0.1308 |
| [#1130](https://github.com/tscircuit/cli/pull/1130) | 🐌 Tiny | Automated package update |
| [#1128](https://github.com/tscircuit/cli/pull/1128) | 🐌 Tiny | Automated package update to version 0.1.570 |
| [#1127](https://github.com/tscircuit/cli/pull/1127) | 🐌 Tiny | Automated package update |
| [#1126](https://github.com/tscircuit/cli/pull/1126) | 🐌 Tiny | Updates the tscircuitrunframe package from version 0.0.1305 to 0.0.1306 |
| [#693](https://github.com/tscircuit/svg.tscircuit.com/pull/693) | 🐌 Tiny | Updates the tscircuit package version from 0.0.1005 to 0.0.1006 in package.json |
| [#692](https://github.com/tscircuit/svg.tscircuit.com/pull/692) | 🐌 Tiny | Updates the tscircuit package version from 0.0.1004 to 0.0.1005 in package.json |
| [#691](https://github.com/tscircuit/svg.tscircuit.com/pull/691) | 🐌 Tiny | Updates the tscircuit package version from 0.0.1003 to 0.0.1004 in package.json |
| [#690](https://github.com/tscircuit/svg.tscircuit.com/pull/690) | 🐌 Tiny | Updates the tscircuit package version from 0.0.1002 to 0.0.1003 in package.json |
| [#689](https://github.com/tscircuit/svg.tscircuit.com/pull/689) | 🐌 Tiny | Updates the tscircuit package version from 0.0.1001 to 0.0.1002 in package.json |
| [#688](https://github.com/tscircuit/svg.tscircuit.com/pull/688) | 🐌 Tiny | Updates the tscircuit package version from 0.0.1000 to 0.0.1001 in package.json |
| [#687](https://github.com/tscircuit/svg.tscircuit.com/pull/687) | 🐌 Tiny | Updates the tscircuit package version from 0.0.999 to 0.0.1000 in package.json |
| [#686](https://github.com/tscircuit/svg.tscircuit.com/pull/686) | 🐌 Tiny | Updates the tscircuit package version from 0.0.998 to 0.0.999 in package.json |
| [#685](https://github.com/tscircuit/svg.tscircuit.com/pull/685) | 🐌 Tiny | Updates the tscircuit package version from 0.0.997 to 0.0.998 in package.json |
| [#684](https://github.com/tscircuit/svg.tscircuit.com/pull/684) | 🐌 Tiny | Updates the tscircuit package version from 0.0.996 to 0.0.997 in package.json |
| [#683](https://github.com/tscircuit/svg.tscircuit.com/pull/683) | 🐌 Tiny | Updates the tscircuit package version from 0.0.994 to 0.0.996 in package.json |
| [#682](https://github.com/tscircuit/svg.tscircuit.com/pull/682) | 🐌 Tiny | Updates the tscircuit package version from 0.0.993 to 0.0.994 in package.json |
| [#681](https://github.com/tscircuit/svg.tscircuit.com/pull/681) | 🐌 Tiny | Updates the tscircuit package version from 0.0.992 to 0.0.993 in package.json |
| [#679](https://github.com/tscircuit/svg.tscircuit.com/pull/679) | 🐌 Tiny | Updates the tscircuit package version from 0.0.991 to 0.0.992 in package.json |
| [#678](https://github.com/tscircuit/svg.tscircuit.com/pull/678) | 🐌 Tiny | Updates the tscircuit package version from 0.0.990 to 0.0.991 in package.json |
| [#677](https://github.com/tscircuit/svg.tscircuit.com/pull/677) | 🐌 Tiny | Automated package update |
| [#676](https://github.com/tscircuit/svg.tscircuit.com/pull/676) | 🐌 Tiny | Updates the tscircuit package version from 0.0.988 to 0.0.989 in package.json |
| [#675](https://github.com/tscircuit/svg.tscircuit.com/pull/675) | 🐌 Tiny | Automated package update |
| [#674](https://github.com/tscircuit/svg.tscircuit.com/pull/674) | 🐌 Tiny | Updates the tscircuit package version from 0.0.985 to 0.0.987 in package.json |
| [#673](https://github.com/tscircuit/svg.tscircuit.com/pull/673) | 🐌 Tiny | Updates the tscircuit package version from 0.0.984 to 0.0.985 in package.json |
| [#672](https://github.com/tscircuit/svg.tscircuit.com/pull/672) | 🐌 Tiny | Updates the tscircuit package version from 0.0.983 to 0.0.984 in package.json |
| [#670](https://github.com/tscircuit/svg.tscircuit.com/pull/670) | 🐌 Tiny | Updates the tscircuit package version from 0.0.982 to 0.0.983 in package.json |
| [#669](https://github.com/tscircuit/svg.tscircuit.com/pull/669) | 🐌 Tiny | Updates the tscircuit package version from 0.0.981 to 0.0.982 in package.json |
| [#668](https://github.com/tscircuit/svg.tscircuit.com/pull/668) | 🐌 Tiny | Updates the tscircuit package version from 0.0.980 to 0.0.981 in package.json |
| [#667](https://github.com/tscircuit/svg.tscircuit.com/pull/667) | 🐌 Tiny | Updates the tscircuit package version from 0.0.968 to 0.0.980 in package.json |
| [#655](https://github.com/tscircuit/svg.tscircuit.com/pull/655) | 🐌 Tiny | Updates the tscircuit package version from 0.0.967 to 0.0.968 in package.json |
| [#654](https://github.com/tscircuit/svg.tscircuit.com/pull/654) | 🐌 Tiny | Automated package update |
| [#653](https://github.com/tscircuit/svg.tscircuit.com/pull/653) | 🐌 Tiny | Updates the tscircuit package version from 0.0.964 to 0.0.966 in package.json |
| [#652](https://github.com/tscircuit/svg.tscircuit.com/pull/652) | 🐌 Tiny | Updates the tscircuit package version from 0.0.963 to 0.0.964 in package.json |
| [#651](https://github.com/tscircuit/svg.tscircuit.com/pull/651) | 🐌 Tiny | Updates the tscircuit package version from 0.0.962 to 0.0.963 in package.json |
| [#650](https://github.com/tscircuit/svg.tscircuit.com/pull/650) | 🐌 Tiny | Updates the tscircuit package version from 0.0.961 to 0.0.962 in package.json |
| [#649](https://github.com/tscircuit/svg.tscircuit.com/pull/649) | 🐌 Tiny | Updates the tscircuit package version from 0.0.960 to 0.0.961 in package.json |
| [#648](https://github.com/tscircuit/svg.tscircuit.com/pull/648) | 🐌 Tiny | Updates the tscircuit package version from 0.0.959 to 0.0.960 in package.json |
| [#647](https://github.com/tscircuit/svg.tscircuit.com/pull/647) | 🐌 Tiny | Updates the tscircuit package version from 0.0.958 to 0.0.959 in package.json |
| [#646](https://github.com/tscircuit/svg.tscircuit.com/pull/646) | 🐌 Tiny | Automated package update |
| [#645](https://github.com/tscircuit/svg.tscircuit.com/pull/645) | 🐌 Tiny | Automated package update |
| [#644](https://github.com/tscircuit/svg.tscircuit.com/pull/644) | 🐌 Tiny | Updates the tscircuit package version from 0.0.955 to 0.0.956 in package.json |
| [#643](https://github.com/tscircuit/svg.tscircuit.com/pull/643) | 🐌 Tiny | Updates the tscircuit package version from 0.0.954 to 0.0.955 in package.json |
| [#642](https://github.com/tscircuit/svg.tscircuit.com/pull/642) | 🐌 Tiny | Updates the tscircuit package version from 0.0.953 to 0.0.954 in package.json |
| [#14](https://github.com/tscircuit/rectdiff/pull/14) | 🐌 Tiny | Automated package update |
| [#13](https://github.com/tscircuit/rectdiff/pull/13) | 🐌 Tiny | Automated package update |
| [#11](https://github.com/tscircuit/lbrnts/pull/11) | 🐌 Tiny | Automated package update to version 0.0.8 |
| [#9](https://github.com/tscircuit/lbrnts/pull/9) | 🐌 Tiny | Updates the package version from 0.0.6 to 0.0.7 in package.json |
| [#44](https://github.com/tscircuit/circuit-json-to-lbrn/pull/44) | 🐌 Tiny | Automated package update |
| [#42](https://github.com/tscircuit/circuit-json-to-lbrn/pull/42) | 🐌 Tiny | Automated package update |
| [#40](https://github.com/tscircuit/circuit-json-to-lbrn/pull/40) | 🐌 Tiny | Automated package update |
| [#36](https://github.com/tscircuit/circuit-json-to-lbrn/pull/36) | 🐌 Tiny | Automated package update |
| [#34](https://github.com/tscircuit/circuit-json-to-lbrn/pull/34) | 🐌 Tiny | Automated package update |
| [#32](https://github.com/tscircuit/circuit-json-to-lbrn/pull/32) | 🐌 Tiny | Automated package update |
| [#30](https://github.com/tscircuit/circuit-json-to-lbrn/pull/30) | 🐌 Tiny | Automated package update |
| [#29](https://github.com/tscircuit/circuit-json-to-lbrn/pull/29) | 🐌 Tiny | Automated package update |
| [#27](https://github.com/tscircuit/circuit-json-to-lbrn/pull/27) | 🐌 Tiny | Automated package update to version 0.0.11 |
| [#25](https://github.com/tscircuit/circuit-json-to-lbrn/pull/25) | 🐌 Tiny | Automated package update |

</details>

### [seveibar](https://github.com/seveibar)

| PRs # | Impact | Rating | Description |
|------|--------|--------|-------------|
| [#522](https://github.com/tscircuit/props/pull/522) | 🐳 Major | ⭐⭐⭐ | Add pcbLeftEdgeX, pcbRightEdgeX, pcbTopEdgeY, and pcbBottomEdgeY layout properties for edge-anchored PCB positioning and extend component schemas to accept these new edge coordinates while maintaining alignment with existing properties. |
| [#1702](https://github.com/tscircuit/core/pull/1702) | 🐳 Major | ⭐⭐⭐ | Removes the interconnect-specific externally-connected port grouping in the autorouter connection builder and drops the interconnect autorouter jumper test that relied on the removed behavior. |
| [#67](https://github.com/tscircuit/circuit-json-to-gerber/pull/67) | 🐳 Major | ⭐⭐⭐ | repro4 reproduction of missing trace in gerber snapshot |
| [#1943](https://github.com/tscircuit/runframe/pull/1943) | 🐳 Major | ⭐⭐⭐ | Adds functionality to emit run completion events, including error handling, to prevent refresh loops in the RunFrame component. |
| [#24](https://github.com/tscircuit/file-server/pull/24) | 🐳 Major | ⭐⭐⭐ | Adds functionality for creating, retrieving, and managing file proxies, allowing files to be served from disk or HTTP endpoints based on matching patterns. |
| [#77](https://github.com/tscircuit/calculate-packing/pull/77) | 🐳 Major | ⭐⭐⭐ | Fixes incorrect merging of collinear segments in the packing algorithm due to improper usage of the .map function. |
| [#3](https://github.com/tscircuit/dsnts/pull/3) | 🐳 Major | ⭐⭐⭐ | Add SVG generation helpers and export generateSvgFromDsn using svgson serialization with white backgrounds, install svgsonbun-match-svg and preload the SVG matcher for snapshot tests, cover rectangular, path-based, and empty DSN scenarios with SVG snapshots. |
| [#1](https://github.com/tscircuit/orthoroutets/pull/1) | 🐳 Major | ⭐⭐⭐ | Adds SVG generation capabilities for ORP and ORS files, allowing users to visualize circuit board designs and routing solutions in SVG format. |
| [#365](https://github.com/tscircuit/circuit-json/pull/365) | 🐙 Minor | ⭐⭐ | Adds a SourceInterconnect schema with ftype interconnect built on the source component base, includes the interconnect element in source exports and the any_source_component union, and adds coverage to ensure source interconnect elements parse and appear in any_circuit_element. |
| [#520](https://github.com/tscircuit/props/pull/520) | 🐙 Minor | ⭐⭐ | Allows pcbXpcbY coordinates to accept calc(...) expressions across shared layout schemas and ensures cad model coordinates use the new calc-aware validation. |
| [#519](https://github.com/tscircuit/props/pull/519) | 🐙 Minor | ⭐⭐ | Adds a SchStyle schema covering passive size and capacitor orientation defaults, exposes optional schStyle on layout props, and regenerates documentation artifacts to include the new schematic style options. |
| [#516](https://github.com/tscircuit/props/pull/516) | 🐙 Minor | ⭐⭐ | Allows board props to accept 6- and 8-layer stackups, updates generated documentation to reflect the expanded layer options, and adds coverage ensuring new layer counts parse correctly. |
| [#517](https://github.com/tscircuit/props/pull/517) | 🐙 Minor | ⭐⭐ | Adds viaPadDiameter and viaHoleDiameter fields to the PcbStyle interface and validation schema, along with updated documentation to reflect these new properties. |
| [#434](https://github.com/tscircuit/footprinter/pull/434) | 🐙 Minor | ⭐⭐ | Adds a nosilkscreen flag to the shared footprint definition options, allowing users to filter generated footprints to remove silkscreen elements when the flag is set. |
| [#1698](https://github.com/tscircuit/core/pull/1698) | 🐙 Minor | ⭐⭐ | Add support for calc string evaluation and PCB position resolution with board bounds context, including board traversal and calc variable support while guarding auto-sized boards, and update primitives to use resolved PCB positions with new tests. |
| [#1697](https://github.com/tscircuit/core/pull/1697) | 🐙 Minor | ⭐⭐ | Adds support for double-row pinheader footprints by including a doubleRow prop, allowing for dual-row pad layouts and adds a regression test to ensure correct placement of pins across two PCB rows. |
| [#1693](https://github.com/tscircuit/core/pull/1693) | 🐙 Minor | ⭐⭐ | Updates the intrinsic JSX footprint element to use FootprintProps while retaining optional name support and updates the tscircuitprops dependency to the latest release. |
| [#1689](https://github.com/tscircuit/core/pull/1689) | 🐙 Minor | ⭐⭐ | Adds default via diameters for PCB styles and includes regression tests for the new functionality. |
| [#71](https://github.com/tscircuit/circuit-json-to-gerber/pull/71) | 🐙 Minor | ⭐⭐ | Summary close custom board outlines and flip Y coordinates when generating edge cut gerbers add a regression test and SVG snapshots for the greenboard outline fixture  Testing BUN_UPDATE_SNAPSHOTS1 bun test testsreprosrepro5greenboard-outline.test.tsx bunx tsc --noEmit bun run format |
| [#1939](https://github.com/tscircuit/runframe/pull/1939) | 🐙 Minor | ⭐⭐ | Adds a helper to build run completion payloads that collect execution and circuit JSON errors and emits RUN_COMPLETED events to the file server when runs finish, including error details. |
| [#1931](https://github.com/tscircuit/runframe/pull/1931) | 🐙 Minor | ⭐⭐ | Adds a custom RegistryHTTPError to enhance error messaging for registry responses, including path, server message, and error code. |
| [#1179](https://github.com/tscircuit/cli/pull/1179) | 🐙 Minor | ⭐⭐ | Ensures that direct dependencies from package.json are resolved and uploaded even when not explicitly imported, adding coverage to verify that npm dependencies are sent to the file server without explicit imports. |
| [#1160](https://github.com/tscircuit/cli/pull/1160) | 🐙 Minor | ⭐⭐ | Adds a test to ensure that all node_modules dependency dist files are uploaded to the dev servers file server, fixing a bug where these files were not available for the browser runtime. |
| [#1163](https://github.com/tscircuit/cli/pull/1163) | 🐙 Minor | ⭐⭐ | Fixes the handling of asset paths in Windows by ensuring absolute paths are used instead of relative paths, improving compatibility across different operating systems. |

<details>
<summary>🐌 Tiny Contributions (14)</summary>

| PR # | Impact | Description |
|------|--------|-------------|
| [#523](https://github.com/tscircuit/props/pull/523) | 🐌 Tiny | Allows interconnect components to use 0805, 0603, and 1206 standard values, regenerates component and props documentation to reflect the new standards, and extends interconnect tests to cover all supported standards. |
| [#518](https://github.com/tscircuit/props/pull/518) | 🐌 Tiny | Adds a shared schematicSymbolSize schema for describing symbol pin spacing and exposes an optional schSize property on resistor and capacitor components, along with regenerating documentation and exports to reflect the new property. |
| [#1690](https://github.com/tscircuit/core/pull/1690) | 🐌 Tiny | Updates the calculate-packing dependency from version 0.0.58 to 0.0.62 in the package.json file. |
| [#269](https://github.com/tscircuit/contribution-tracker/pull/269) | 🐌 Tiny | Adds MustafaMulla29, Ayushjhawar8, and 0hmX to the staff usernames list |
| [#72](https://github.com/tscircuit/circuit-json-to-gerber/pull/72) | 🐌 Tiny | Adds a workflow_dispatch trigger and upstream configuration for dispatching updates to runframe, allowing the post-release step to trigger the update-package workflow for the circuit-json-to-gerber package. |
| [#1630](https://github.com/tscircuit/eval/pull/1630) | 🐌 Tiny | Adds tslib to the pre-supplied imports available in the execution context and declares it in devDependencies for bundling, along with a feature test to ensure tslib-based helper imports resolve correctly. |
| [#1616](https://github.com/tscircuit/eval/pull/1616) | 🐌 Tiny | Refactors the directory structure to separate webworker and library code, ensuring that webworker imports do not mix with library imports, and adds a GitHub workflow to check for violations. |
| [#1923](https://github.com/tscircuit/runframe/pull/1923) | 🐌 Tiny | Updates the circuit-json-to-gerber package to version 0.0.41 and refreshes bun.lock with new dependency metadata. |
| [#1202](https://github.com/tscircuit/cli/pull/1202) | 🐌 Tiny | Adds functionality to test bug reports by downloading them and running tests in a browser environment using Playwright. |
| [#1189](https://github.com/tscircuit/cli/pull/1189) | 🐌 Tiny | Switches bun-test workflow to matrix-based execution with generated test plans and adds a CLI-specific test plan generator that distributes test files across nodes while retaining snapshot uploads on failure. |
| [#1193](https://github.com/tscircuit/cli/pull/1193) | 🐌 Tiny | Removes the inclusion of devDependencies and peerDependencies from the module upload process, ensuring only production dependencies are uploaded. |
| [#1156](https://github.com/tscircuit/cli/pull/1156) | 🐌 Tiny | Adds a test to ensure GLB file imports are transpiled to relative paths, preventing errors related to absolute paths from the developers machine. |
| [#360](https://github.com/tscircuit/docs/pull/360) | 🐌 Tiny | Adds a link from the circuit-json-to-gerber package node to the runframe in the package dependencies diagram. |
| [#358](https://github.com/tscircuit/docs/pull/358) | 🐌 Tiny | Simplifies the pinrow rows parameter description to omit unsupported pin distribution note |

</details>

### [Ayushjhawar8](https://github.com/Ayushjhawar8)

| PRs # | Impact | Rating | Description |
|------|--------|--------|-------------|
| [#585](https://github.com/tscircuit/3d-viewer/pull/585) | 🐳 Major | ⭐⭐⭐ | Add a keyboard shortcut to toggle the visibility of translucent components in the 3D viewer. |
| [#363](https://github.com/tscircuit/circuit-json/pull/363) | 🐙 Minor | ⭐⭐ | Adds an optional boolean property show_as_translucent_model to the CadComponent type, allowing for the representation of components as translucent models in the PCB design. |
| [#513](https://github.com/tscircuit/props/pull/513) | 🐙 Minor | ⭐⭐ | Adds a new property to the CommonComponentProps interface to allow components to be displayed as translucent models in the 3D viewer. |
| [#1685](https://github.com/tscircuit/core/pull/1685) | 🐙 Minor | ⭐⭐ | Updates NormalComponent and CadModel to pass the show_as_translucent_model property for rendering translucent models. |
| [#1687](https://github.com/tscircuit/core/pull/1687) | 🐙 Minor | ⭐⭐ | Fixes errors related to updated circuit-json dependencies in the VoltageProbe component. |
| [#1599](https://github.com/tscircuit/eval/pull/1599) | 🐙 Minor | ⭐⭐ | Adds a validation flow for node module imports that checks for package declaration in package.json, existence of files in node_modules, unsupported TypeScript entrypoints, and empty dist directories. |
| [#1593](https://github.com/tscircuit/eval/pull/1593) | 🐙 Minor | ⭐⭐ | Throws an error when attempting to import a dependency from jsDelivr that is not declared in package.json, ensuring that all dependencies are explicitly listed. |

### [rushabhcodes](https://github.com/rushabhcodes)

| PRs # | Impact | Rating | Description |
|------|--------|--------|-------------|
| [#216](https://github.com/tscircuit/sparkfun-boards/pull/216) | 🐳 Major | ⭐⭐⭐ | Adds a new SparkFun Audio Jack Breakout board definition, including the PJ_307C audio jack component, board layout, and documentation. |
| [#217](https://github.com/tscircuit/sparkfun-boards/pull/217) | 🐳 Major | ⭐⭐⭐ | Adds a new board definition for the SparkFun USB-C Breakout - Vertical, including its schematic, layout, and a custom USB-C connector component with detailed pin mapping and documentation. |
| [#212](https://github.com/tscircuit/sparkfun-boards/pull/212) | 🐳 Major | ⭐⭐⭐ | Adds support for the SparkFun Tristimulus Color Sensor - OPT4048DTSR (Qwiic) board by introducing component definitions, footprints, and documentation. |
| [#432](https://github.com/tscircuit/footprinter/pull/432) | 🐙 Minor | ⭐⭐ | Adds an optional boolean property invert to the base_def schema to hint jscad-electronics to flip headers in the 3D model. |
| [#579](https://github.com/tscircuit/3d-viewer/pull/579) | 🐙 Minor | ⭐⭐ | Fixes z-fighting artifacts in 3D geometry rendering by enabling polygon offset for mesh materials and updates the jscad-electronics package version to the latest. |
| [#236](https://github.com/tscircuit/jscad-electronics/pull/236) | 🐙 Minor | ⭐⭐ | Adds support for rendering inverted pin row footprints in the 3D visualization components by detecting the invert parameter and flipping Z coordinates in the PinRow component. |
| [#1873](https://github.com/tscircuit/runframe/pull/1873) | 🐙 Minor | ⭐⭐ | Fixes the issue where the CadViewer component does not re-render correctly when toggling fullscreen mode in the CircuitJsonPreview component. |

<details>
<summary>🐌 Tiny Contributions (2)</summary>

| PR # | Impact | Description |
|------|--------|-------------|
| [#213](https://github.com/tscircuit/sparkfun-boards/pull/213) | 🐌 Tiny | Adds a new variant of the SM04B_SRSS_TB_LF__SN connector component and updates the board schematic to use this new version for one of the connectors, along with a minor adjustment to the 3D model positioning of the original component. |
| [#211](https://github.com/tscircuit/sparkfun-boards/pull/211) | 🐌 Tiny | Adjusts the Z-axis rotation offset of the AP2112K CAD model from 0 to 90 degrees to correct its orientation. |

</details>

### [ArnavK-09](https://github.com/ArnavK-09)

| PRs # | Impact | Rating | Description |
|------|--------|--------|-------------|
| [#2091](https://github.com/tscircuit/tscircuit.com/pull/2091) | 🐳 Major | ⭐⭐⭐ | Fixes the handling of 401 errors by removing the previous 401 error handler and implementing a new toast notification system for unauthorized access. |
| [#2072](https://github.com/tscircuit/tscircuit.com/pull/2072) | 🐳 Major | ⭐⭐⭐ | Adds autoclose functionality to the CLI login page, allowing the window to close automatically after a successful login if specified in the URL parameters. |
| [#1852](https://github.com/tscircuit/runframe/pull/1852) | 🐳 Major | ⭐⭐⭐ | Adds a login dialog for CLI access and integrates it with the bug report functionality, requiring user authentication to submit bug reports. |
| [#1173](https://github.com/tscircuit/cli/pull/1173) | 🐳 Major | ⭐⭐⭐ | Adds a --no-install option to the init command, allowing users to skip the installation of dependencies during project initialization. |
| [#588](https://github.com/tscircuit/3d-viewer/pull/588) | 🐙 Minor | ⭐⭐ | Prevents automatic zooming when the camera is changed in the 3D viewer context. |
| [#268](https://github.com/tscircuit/contribution-tracker/pull/268) | 🐙 Minor | ⭐⭐ | Adds functionality to prioritize GitHub comments containing analysis data for pull request analysis retrieval, enhancing the data source hierarchy. |
| [#88](https://github.com/tscircuit/circuit-json-to-gltf/pull/88) | 🐙 Minor | ⭐⭐ | Updates the color factors for rendering PCB layers and materials in the GLTF output. |

<details>
<summary>🐌 Tiny Contributions (7)</summary>

| PR # | Impact | Description |
|------|--------|-------------|
| [#270](https://github.com/tscircuit/contribution-tracker/pull/270) | 🐌 Tiny | Changes the impact icon from purple to yellow for the default case in the impactIcon function. |
| [#2101](https://github.com/tscircuit/tscircuit.com/pull/2101) | 🐌 Tiny | Fixes session error message to include session expired alongside session not found for improved user clarity. |
| [#2092](https://github.com/tscircuit/tscircuit.com/pull/2092) | 🐌 Tiny | Displays the edit icon to visitors on the file view page, enhancing user interaction. |
| [#1933](https://github.com/tscircuit/runframe/pull/1933) | 🐌 Tiny | img width627 height476 altimage srchttps:github.comuser-attachmentsassets68c4274e-8405-4cc6-a88d-40479aa7d092  img width625 height333 altimage srchttps:github.comuser-attachmentsassets09fbd47e-05cd-4cc8-bcd1-718efb89693c  img width863 height515 altimage srchttps:github.comuser-attachmentsassets6ed13980-fe86-48a3-96ea-0e529bb10aef |
| [#1871](https://github.com/tscircuit/runframe/pull/1871) | 🐌 Tiny | This pull request introduces a generated CSS file that includes various utility classes and styles for the project, leveraging Tailwind CSS for styling. |
| [#1169](https://github.com/tscircuit/cli/pull/1169) | 🐌 Tiny | Removes the setup of the TSCi project during the cloning of bug reports, addressing issue 1157. |
| [#680](https://github.com/tscircuit/svg.tscircuit.com/pull/680) | 🐌 Tiny | Updates the color scheme used in the application to a new set of colors, affecting the visual presentation of the user interface. |

</details>

### [imrishabh18](https://github.com/imrishabh18)

| PRs # | Impact | Rating | Description |
|------|--------|--------|-------------|
| [#4](https://github.com/tscircuit/dsnts/pull/4) | 🐳 Major | ⭐⭐⭐ | Adds the DsnProperty element to the DsnLayer, allowing for nested properties such as index within the layer definition. |
| [#5](https://github.com/tscircuit/circuit-json-to-dsn/pull/5) | 🐳 Major | ⭐⭐⭐ | Adds the library and network stages to the DSN conversion process, enabling the creation of padstack definitions and net definitions from circuit JSON. |
| [#3](https://github.com/tscircuit/circuit-json-to-dsn/pull/3) | 🐳 Major | ⭐⭐⭐ | Changes the stage name from CreateBoardBoundaryStage to AddStructureStage and adds design rules for width and clearances in the DSN structure. |
| [#2](https://github.com/tscircuit/circuit-json-to-dsn/pull/2) | 🐳 Major | ⭐⭐⭐ | img width2308 height1910 altimage srchttps:github.comuser-attachmentsassets12858576-0bd8-4761-bcdd-6d6e26fa1bc4 |
| [#583](https://github.com/tscircuit/3d-viewer/pull/583) | 🐙 Minor | ⭐⭐ | Tracks glTF loader failures and stores them in component state, throwing load errors for rendering error messages when models fail to load. |
| [#1683](https://github.com/tscircuit/core/pull/1683) | 🐙 Minor | ⭐⭐ | Adds error handling for missing x and y coordinates in port connections, logging an error message and skipping the trace if coordinates are not defined. |
| [#114](https://github.com/tscircuit/dsn-converter/pull/114) | 🐙 Minor | ⭐⭐ | Adds support for specifying the number of layers in PCB routing, allowing for dynamic layer generation based on user input. |
| [#1629](https://github.com/tscircuit/eval/pull/1629) | 🐙 Minor | ⭐⭐ | Adds support for importing files with the .mjs extension in the eval module, allowing for ES module syntax in circuit definitions. |
| [#1594](https://github.com/tscircuit/eval/pull/1594) | 🐙 Minor | ⭐⭐ | Adds logic to handle subpath imports for local transpiled packages, ensuring that imports like reactjsx-runtime are resolved correctly without errors. |
| [#1583](https://github.com/tscircuit/eval/pull/1583) | 🐙 Minor | ⭐⭐ | Adds a flag to disable loading npm packages from jsDelivr CDN, throwing an error for import statements instead. |
| [#1892](https://github.com/tscircuit/runframe/pull/1892) | 🐙 Minor | ⭐⭐ | Adds functionality to disable CDN loading for the CLI by introducing a new worker in RunFrame. |
| [#1212](https://github.com/tscircuit/cli/pull/1212) | 🐙 Minor | ⭐⭐ | Fixes TypeError when resolving nested conditional exports in package.json, allowing proper handling of modern package structures. |
| [#1107](https://github.com/tscircuit/cli/pull/1107) | 🐙 Minor | ⭐⭐ | Fixes the resolution of node_modules imports by searching upward for hoisted packages, collecting local package roots, and skipping runtime-provided packages during dependency uploads. |
| [#4](https://github.com/tscircuit/circuit-json-to-dsn/pull/4) | 🐙 Minor | ⭐⭐ | Adds the placement stage to the DSN file, enabling the conversion of PCB component placements from circuit JSON to DSN format. |

<details>
<summary>🐌 Tiny Contributions (10)</summary>

| PR # | Impact | Description |
|------|--------|-------------|
| [#1596](https://github.com/tscircuit/eval/pull/1596) | 🐌 Tiny | Adds the reactjsx-runtime import to the preSuppliedImports context in the execution environment. |
| [#1217](https://github.com/tscircuit/cli/pull/1217) | 🐌 Tiny | Adds tslib to the set of runtime provided packages in the dependency analysis module. |
| [#1152](https://github.com/tscircuit/cli/pull/1152) | 🐌 Tiny | Updates the version of the tscircuit and tscircuitprops dependencies in package.json |
| [#1145](https://github.com/tscircuit/cli/pull/1145) | 🐌 Tiny | Fixes blocking tests by ensuring process exits correctly after export and simulation operations in the CLI. |
| [#671](https://github.com/tscircuit/svg.tscircuit.com/pull/671) | 🐌 Tiny | Fixes the eval issue in tscircuit that caused an outage by updating the tscircuit dependency to version 0.0.983 |
| [#59](https://github.com/tscircuit/common/pull/59) | 🐌 Tiny | Changes the build command from tsup to tsup-node for building the library with TypeScript definitions. |
| [#7](https://github.com/tscircuit/dsnts/pull/7) | 🐌 Tiny | Removes quotes from pin references in the DsnPins class string representation. |
| [#5](https://github.com/tscircuit/dsnts/pull/5) | 🐌 Tiny | Removes double quotes around the pin ID in the output string of the DsnPin class, ensuring the output format is cleaner and more consistent. |
| [#6](https://github.com/tscircuit/dsnts/pull/6) | 🐌 Tiny | Removes double quotes from image and padstack names in the output string representation. |
| [#1](https://github.com/tscircuit/circuit-json-to-dsn/pull/1) | 🐌 Tiny | Sets up the project with Bun as the JavaScript runtime, including configuration files and initial scripts. |

</details>

### [ShiboSoftwareDev](https://github.com/ShiboSoftwareDev)

| PRs # | Impact | Rating | Description |
|------|--------|--------|-------------|
| [#1705](https://github.com/tscircuit/core/pull/1705) | 🐳 Major | ⭐⭐⭐ | Fixes bug in subcircuit inflation logic where nested groups and trace paths were not handled correctly, leading to incorrect connections within circuitJson. |
| [#1706](https://github.com/tscircuit/core/pull/1706) | 🐙 Minor | ⭐⭐ | Fixes bug where inflator mutates circuitJson reference, causing incorrect data and layout errors in components using shared circuitJson. |
| [#1703](https://github.com/tscircuit/core/pull/1703) | 🐙 Minor | ⭐⭐ | Enables the use of circuitJson directly on Board components and adds a new PanelLayout render phase for panelizing these boards. |
| [#1700](https://github.com/tscircuit/core/pull/1700) | 🐙 Minor | ⭐⭐ | Adds support for NPN transistors in SPICE simulations by updating the circuit-json-to-spice library and testing transistor functionality in a switch circuit. |
| [#1695](https://github.com/tscircuit/core/pull/1695) | 🐙 Minor | ⭐⭐ | Adds support for differential voltage probes in simulation, allowing measurement of voltage differences between two points in a circuit. Includes a full-wave bridge rectifier test demonstrating the new functionality. |
| [#27](https://github.com/tscircuit/circuit-json-to-spice/pull/27) | 🐙 Minor | ⭐⭐ | Adds support for simple_transistor components, converting them into SPICE BJT elements. |
| [#26](https://github.com/tscircuit/circuit-json-to-spice/pull/26) | 🐙 Minor | ⭐⭐ | Adds support for differential voltage probes by updating circuitJsonToSpice.ts to handle signal_input_source_ and reference_input_source_ properties, updating tests to use the new SimulationVoltageProbe format, and adding a new test for differential voltage probing. |
| [#5](https://github.com/tscircuit/ngspice-spice-engine/pull/5) | 🐙 Minor | ⭐⭐ | Adds SVG snapshot testing for SPICE simulation results, enabling visual regression testing of output graphs. |

<details>
<summary>🐌 Tiny Contributions (2)</summary>

| PR # | Impact | Description |
|------|--------|-------------|
| [#361](https://github.com/tscircuit/docs/pull/361) | 🐌 Tiny | Adds a new Transistors category to SPICE simulation guides and introduces a transistor switch example with standardized titles for diode examples. |
| [#359](https://github.com/tscircuit/docs/pull/359) | 🐌 Tiny | Adds a new documentation page with an example of a full-wave bridge rectifier for SPICE simulation. |

</details>

### [Abse2001](https://github.com/Abse2001)

| PRs # | Impact | Rating | Description |
|------|--------|--------|-------------|
| [#1696](https://github.com/tscircuit/core/pull/1696) | 🐳 Major | ⭐⭐⭐ | Fixes PCB component positioning by applying the correct component-local transform and adds missing placement fields for various components. |

### [MustafaMulla29](https://github.com/MustafaMulla29)

| PRs # | Impact | Rating | Description |
|------|--------|--------|-------------|
| [#1928](https://github.com/tscircuit/runframe/pull/1928) | 🐳 Major | ⭐⭐⭐ | Adds support for displaying recently saved files in the file selector, allowing users to easily access their most recently modified files. |
| [#1692](https://github.com/tscircuit/core/pull/1692) | 🐙 Minor | ⭐⭐ | Fixes issue where traces extend beyond the edges of pads in PCB layouts, ensuring proper rendering of trace endpoints at pad edges. |
| [#1691](https://github.com/tscircuit/core/pull/1691) | 🐙 Minor | ⭐⭐ | Adds a test to verify that a straight trace correctly connects a circular pad to a capacitor without rendering issues. |
| [#1949](https://github.com/tscircuit/runframe/pull/1949) | 🐙 Minor | ⭐⭐ | Fixes the issue where the Recent Files toggle disappears when clicked, ensuring it remains visible for user interaction. |
| [#1149](https://github.com/tscircuit/cli/pull/1149) | 🐙 Minor | ⭐⭐ | Fixes the issue of uploading binary files in the tsci push command by implementing checks for binary content and encoding it in base64 when necessary. |
| [#1125](https://github.com/tscircuit/cli/pull/1125) | 🐙 Minor | ⭐⭐ | Adds support for loading .kicad_mod files by converting absolute file paths to file: URLs for Buns fetch, enhancing platform configuration with KiCad parsing support. |

<details>
<summary>🐌 Tiny Contributions (2)</summary>

| PR # | Impact | Description |
|------|--------|-------------|
| [#1207](https://github.com/tscircuit/cli/pull/1207) | 🐌 Tiny | Reproduces a bug where packages installed from GitHub URLs do not have their files uploaded to the dev server due to the absence of a package.json file. |
| [#1148](https://github.com/tscircuit/cli/pull/1148) | 🐌 Tiny | Adds support for installing specific KiCad libraries via the tsci install command and enhances console output with color using the kleur library. |

</details>

### [Anshgrover23](https://github.com/Anshgrover23)

| PRs # | Impact | Rating | Description |
|------|--------|--------|-------------|
| [#257](https://github.com/tscircuit/contribution-tracker/pull/257) | 🐳 Major | ⭐⭐⭐ | Implements contributor toggle functionality in the PR section for enhanced user interaction. |

### [AnasSarkiz](https://github.com/AnasSarkiz)

| PRs # | Impact | Rating | Description |
|------|--------|--------|-------------|
| [#439](https://github.com/tscircuit/circuit-to-svg/pull/439) | 🐳 Major | ⭐⭐⭐ | Implemented rotation support for pill-shaped SMT pads and added proper handling of soldermask margins for rotated pills |
| [#10](https://github.com/tscircuit/lbrnts/pull/10) | 🐳 Major | ⭐⭐⭐ | Introduces high-fidelity scan-path generation for laser fill operations, including configurable scan patterns, optimized clipping for geometric primitives, and enhanced fill logic, replacing static fills with realistic scan-line simulation while maintaining backward compatibility. |
| [#37](https://github.com/tscircuit/circuit-json-to-lbrn/pull/37) | 🐳 Major | ⭐⭐⭐ | Implements complete support for pcb_hole elements (non-plated holes) in the circuit-json-to-lbrn converter, enabling laser cutting of mounting holes, alignment holes, and other non-electrical through-board features. |
| [#39](https://github.com/tscircuit/circuit-json-to-lbrn/pull/39) | 🐳 Major | ⭐⭐⭐ | Adds full support for all PCB cutout types in the convertCircuitJsonToLbrn pipeline, enabling correct generation of cutouts in LightBurn-compatible output, with consistent processing of cutouts and support for copper-layer removal and soldermask openings. |
| [#35](https://github.com/tscircuit/circuit-json-to-lbrn/pull/35) | 🐳 Major | ⭐⭐⭐ | Adds support for pcb_via elements in circuit-json conversion to LightBurn format, including proper connectivity mapping and net-based geometry merging. |
| [#31](https://github.com/tscircuit/circuit-json-to-lbrn/pull/31) | 🐳 Major | ⭐⭐⭐ | Adds cross-hatching support, fixes board closure behavior, and upgrades the lbrnts engine to version 0.0.8. |
| [#41](https://github.com/tscircuit/circuit-json-to-lbrn/pull/41) | 🐙 Minor | ⭐⭐ | Adds an includeCopper flag to control copper removal for drilled and plated holes, allowing selective skipping of copper removal for visualization modes and non-copper-layer operations. |
| [#43](https://github.com/tscircuit/circuit-json-to-lbrn/pull/43) | 🐙 Minor | ⭐⭐ | Fixes incorrect rendering of SMT pads due to degree-based rotation input being misinterpreted as radians. |
| [#33](https://github.com/tscircuit/circuit-json-to-lbrn/pull/33) | 🐙 Minor | ⭐⭐ | Add soldermaskMargin parameter to convertCircuitJsonToLbrn options to allow global adjustment of soldermask opening sizes, supporting both positive and negative margins, and updating the ConvertContext interface accordingly. |
| [#28](https://github.com/tscircuit/circuit-json-to-lbrn/pull/28) | 🐙 Minor | ⭐⭐ | Switches the soldermask layer generation from Cut mode (outline paths) to Scan mode (filled shapes) to accommodate laser-cutting workflows for Kapton tape. |
| [#26](https://github.com/tscircuit/circuit-json-to-lbrn/pull/26) | 🐙 Minor | ⭐⭐ | Add a new soldermask cut setting with optimized parameters and update relevant handlers to use this setting instead of copper cut settings, ensuring appropriate laser parameters for soldermask layers. |
| [#24](https://github.com/tscircuit/circuit-json-to-lbrn/pull/24) | 🐙 Minor | ⭐⭐ | Adds support for soldermask layer and unifies handling of copper and soldermask across PCB element handlers, allowing for more flexible PCB design options. |
| [#21](https://github.com/tscircuit/circuit-json-to-lbrn/pull/21) | 🐙 Minor | ⭐⭐ | Adds support for new SMT pad shapes including circle, pill, polygon, rotated rectangle, and rounded rectangle, along with corresponding path generation and snapshot tests. |

<details>
<summary>🐌 Tiny Contributions (1)</summary>

| PR # | Impact | Description |
|------|--------|-------------|
| [#45](https://github.com/tscircuit/circuit-json-to-lbrn/pull/45) | 🐌 Tiny | Refactors shape and path utility functions to use options-based parameter signatures for improved readability and consistency across the codebase. |

</details>

### [pxlpal](https://github.com/pxlpal)

| PRs # | Impact | Rating | Description |
|------|--------|--------|-------------|
| [#2080](https://github.com/tscircuit/tscircuit.com/pull/2080) | 🐳 Major | ⭐⭐⭐ | Modifies the GitHub App installation process to support non-personal organizations by adding organization ID handling and updating repository fetching logic accordingly. |
| [#2107](https://github.com/tscircuit/tscircuit.com/pull/2107) | 🐙 Minor | ⭐⭐ | Changes the permission check for package linking from owner to org-management. |

### [0hmX](https://github.com/0hmX)

| PRs # | Impact | Rating | Description |
|------|--------|--------|-------------|
| [#357](https://github.com/tscircuit/tscircuit-autorouter/pull/357) | 🐳 Major | ⭐⭐⭐ | Adds new animation speed options for the autorouting pipeline debugger, allowing users to select slower animation speeds for better visualization. |
| [#356](https://github.com/tscircuit/tscircuit-autorouter/pull/356) | 🐳 Major | ⭐⭐⭐ | Fixes routing errors caused by incorrect direction orientation, leading to better alignment of routes in high-density scenarios. |
| [#329](https://github.com/tscircuit/tscircuit-autorouter/pull/329) | 🐳 Major | ⭐⭐⭐ | Integrates RectDiffSolver into the autorouting pipeline, replacing the previous node solver and modifying related functionality. |
| [#344](https://github.com/tscircuit/tscircuit-autorouter/pull/344) | 🐳 Major | ⭐⭐⭐ | Implements off-board connection handling in the autorouting pipeline, allowing for routing through off-board connection points. |
| [#11](https://github.com/tscircuit/rectdiff/pull/11) | 🐳 Major | ⭐⭐⭐ | How GapFillSubSolver Works GapFillSubSolver operates as a post-processing cleanup algorithm that creates brand new rectangles to fill empty spaces left after the main RectDiff placement. It follows a four-stage process: 1. SCAN: Detects uncovered areas using grid-based sweep-line algorithm, merging adjacent empty cells into maximal gap rectangles 2. SELECT: Prioritizes gaps by size and multi-layer coverage, choosing the most valuable gap to fill next 3. EXPAND: Places seed point at gap center and grows a rectangle outward until hitting existing rectangles, obstacles, or boundaries 4. PLACE: Adds the successfully expanded rectangle to the solution as a new placement  Fundamental Difference from RectDiff RectDiff solves the routing problem - it places rectangles to enable electrical signal connections based on circuit topology and routing requirements from SimpleRouteJson input. GapFillSubSolver solves the coverage problem - it maximizes board area utilization by filling leftover empty spaces with new rectangles, regardless of routing needs. RectDiff creates rectangles for electrical functionality (routing paths), while GapFillSubSolver creates rectangles for geometric efficiency (space utilization). They serve complementary but entirely different purposes in the placement pipeline: connectivity versus coverage optimization. |

<details>
<summary>🐌 Tiny Contributions (1)</summary>

| PR # | Impact | Description |
|------|--------|-------------|
| [#12](https://github.com/tscircuit/rectdiff/pull/12) | 🐌 Tiny | Fixes the preview rendering by updating the HTML title and script source paths, and adds Vite configuration for React support. |

</details>

### [Heinrich-XIAO](https://github.com/Heinrich-XIAO)

| PRs # | Impact | Rating | Description |
|------|--------|--------|-------------|
| [#355](https://github.com/tscircuit/tscircuit-autorouter/pull/355) | 🐳 Major | ⭐⭐⭐ | Removes restrictions on navigating to specific iterations in the autorouting debugger, allowing users to go to any iteration regardless of solver status. |
| [#338](https://github.com/tscircuit/tscircuit-autorouter/pull/338) | 🐳 Major | ⭐⭐⭐ | Adds SameNetViaMergerSolver to optimize via connections for the same net in autorouting. |

<details>
<summary>🐌 Tiny Contributions (2)</summary>

| PR # | Impact | Description |
|------|--------|-------------|
| [#340](https://github.com/tscircuit/tscircuit-autorouter/pull/340) | 🐌 Tiny | Adds a bug report fixture and corresponding test for bug report ID d95f3897-599c-4f1b-a35a-73342e6114fb, enabling easier reproduction and debugging of the autorouting issue. |
| [#58](https://github.com/tscircuit/common/pull/58) | 🐌 Tiny | Adds support for through-hole technology (THT) in the XiaoReceiver component by introducing a new prop to control the footprint rendering. |

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
