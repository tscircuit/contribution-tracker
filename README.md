# contribution-tracker

[contributions.tscircuit.com](https://contributions.tscircuit.com) ・ [tscircuit.com](https://tscircuit.com) ・ [Contribution Overviews](./contribution-overviews/) ・ [Changelogs](./changelogs/)

Generates weekly contribution overviews for tscircuit contributors. Check out all
the [contribution overviews here](./contribution-overviews/)
You can find AI-generated monthly changelogs in the [changelogs directory](./changelogs/).

- All PRs in the tscircuit org are scanned/summarized via an LLM
- The LLM classifies each Diff/PR as into a set of attributes for scoring
- All the PRs, summaries, and classifications are organized into charts and tables for [the website](https://contributions.tscircuit.com)

> Want to run locally? See the [Development Section](#development)

The current week is shown below. There are 3 major sections:

- [Contributor Overview](#contributor-overview)
- [PRs by Repository](#prs-by-repository)
- [PRs by Contributor](#changes-by-contributor)

## Current Week

<!-- START_CURRENT_WEEK -->

# Contribution Overview 2025-10-15

## PRs by Repository

```mermaid
pie
    "tscircuit/pcb-viewer" : 12
    "tscircuit/tscircuit" : 85
    "tscircuit/tscircuit.com" : 17
    "tscircuit/eval" : 40
    "tscircuit/runframe" : 72
    "tscircuit/cli" : 84
    "tscircuit/svg.tscircuit.com" : 42
    "tscircuit/kicad-component-converter" : 4
    "tscircuit/circuit-to-svg" : 12
    "tscircuit/circuit-json" : 9
    "tscircuit/props" : 7
    "tscircuit/footprinter" : 1
    "tscircuit/core" : 20
    "tscircuit/circuit-json-to-tscircuit" : 4
    "tscircuit/tscircuit-autorouter" : 1
    "tscircuit/contribution-tracker" : 2
    "tscircuit/docs" : 17
    "tscircuit/common" : 2
    "tscircuit/jscad-electronics" : 2
    "tscircuit/3d-viewer" : 5
    "tscircuit/circuit-json-to-step" : 1
    "tscircuit/circuit-json-to-gltf" : 1
    "tscircuit/math-utils" : 2
    "tscircuit/calculate-packing" : 1
    "tscircuit/circuit-json-to-kicad" : 1
    "tscircuit/circuit-json-to-spice" : 1
    "tscircuit/spicey" : 2
    "tscircuit/issue-roulette" : 3
```

## Contributor Overview

| Contributor | 🐳 Major | 🐙 Minor | 🐌 Tiny | ⭐ | Score | Discussion Contributions |
|-------------|---------|---------|---------|-----|----------------|--------------------------|
| [seveibar](#seveibar) | 3 | 26 | 21 | 👑 | 63 | 1🔹 0🔶 0💎 |
| [imrishabh18](#imrishabh18) | 5 | 11 | 10 | 👑 | 55 | 0🔹 0🔶 0💎 |
| [MustafaMulla29](#MustafaMulla29) | 3 | 7 | 2 | ⭐⭐⭐ | 31 | 0🔹 0🔶 0💎 |
| [ShiboSoftwareDev](#ShiboSoftwareDev) | 1 | 10 | 0 | ⭐⭐ | 27 | 0🔹 0🔶 0💎 |
| [techmannih](#techmannih) | 1 | 5 | 3 | ⭐⭐ | 22 | 0🔹 0🔶 0💎 |
| [ArnavK-09](#ArnavK-09) | 3 | 2 | 3 | ⭐⭐ | 22 | 1🔹 0🔶 0💎 |
| [Abse2001](#Abse2001) | 2 | 2 | 2 | ⭐⭐ | 19 | 0🔹 0🔶 0💎 |
| [tscircuitbot](#tscircuitbot) | 0 | 0 | 310 | ⭐⭐ | 18 | 0🔹 0🔶 0💎 |
| [Ayushjhawar8](#Ayushjhawar8) | 2 | 2 | 3 | ⭐⭐ | 15 | 0🔹 0🔶 0💎 |
| [Asymtode712](#Asymtode712) | 0 | 4 | 1 | ⭐ | 9 | 0🔹 0🔶 0💎 |
| [Excellencedev](#Excellencedev) | 0 | 2 | 0 | ⭐ | 5 | 0🔹 0🔶 0💎 |
| [fctpe](#fctpe) | 1 | 0 | 0 | ⭐ | 4 | 0🔹 0🔶 0💎 |
| [Heinrich-XIAO](#Heinrich-XIAO) | 0 | 1 | 2 | ⭐ | 4 | 0🔹 0🔶 0💎 |

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
| [tscircuitbot](#tscircuitbot) | 1 | 0 | 0 | 0 | 0 | 341 | 310 | 18 | 0 | 0 | 0 |
| [seveibar](#seveibar) | 28 | 4 | 0 | 71 | 7 | 63 | 50 | 63 | 0 | 0 | 0 |
| [techmannih](#techmannih) | 18 | 10 | 1 | 2 | 2 | 11 | 9 | 22 | 0 | 0 | 0 |
| [MustafaMulla29](#MustafaMulla29) | 24 | 13 | 5 | 1 | 2 | 17 | 12 | 31 | 0 | 0 | 0 |
| [imrishabh18](#imrishabh18) | 26 | 11 | 0 | 1 | 4 | 27 | 26 | 55 | 0 | 0 | 0 |
| [ShiboSoftwareDev](#ShiboSoftwareDev) | 14 | 10 | 0 | 2 | 0 | 12 | 11 | 27 | 0 | 0 | 0 |
| [Asymtode712](#Asymtode712) | 9 | 6 | 1 | 0 | 0 | 6 | 5 | 9 | 0 | 0 | 0 |
| [fctpe](#fctpe) | 3 | 1 | 0 | 0 | 0 | 3 | 1 | 4 | 0 | 0 | 0 |
| [Abse2001](#Abse2001) | 23 | 6 | 0 | 4 | 4 | 7 | 6 | 19 | 0 | 0 | 0 |
| [Quanta-Naut](#Quanta-Naut) | 7 | 0 | 2 | 0 | 0 | 3 | 0 | 0 | 0 | 0 | 0 |
| [Excellencedev](#Excellencedev) | 23 | 2 | 3 | 0 | 0 | 12 | 2 | 5 | 0 | 0 | 0 |
| [ArnavK-09](#ArnavK-09) | 23 | 10 | 0 | 1 | 0 | 11 | 8 | 22 | 0 | 0 | 0 |
| [MAVRICK-1](#MAVRICK-1) | 1 | 0 | 0 | 0 | 0 | 1 | 0 | 0 | 0 | 0 | 0 |
| [nailoo](#nailoo) | 7 | 1 | 0 | 0 | 0 | 2 | 0 | 0 | 0 | 0 | 0 |
| [Ayushjhawar8](#Ayushjhawar8) | 7 | 6 | 0 | 0 | 0 | 7 | 7 | 15 | 0 | 0 | 0 |
| [Heinrich-XIAO](#Heinrich-XIAO) | 3 | 2 | 0 | 0 | 0 | 4 | 3 | 4 | 0 | 0 | 0 |
| [theajmalrazaq](#theajmalrazaq) | 2 | 0 | 1 | 0 | 0 | 1 | 0 | 0 | 0 | 0 | 0 |
| [Pranjal6955](#Pranjal6955) | 0 | 0 | 0 | 0 | 0 | 1 | 0 | 0 | 0 | 0 | 0 |
| [Incharajayaram](#Incharajayaram) | 1 | 0 | 1 | 0 | 0 | 1 | 0 | 0 | 0 | 0 | 0 |
| [watzon](#watzon) | 0 | 0 | 0 | 0 | 0 | 1 | 0 | 0 | 0 | 0 | 0 |
| [BenraouaneSoufiane](#BenraouaneSoufiane) | 0 | 0 | 0 | 0 | 0 | 1 | 0 | 0 | 0 | 0 | 0 |
| [0hmX](#0hmX) | 2 | 0 | 1 | 0 | 0 | 1 | 0 | 0 | 0 | 0 | 0 |
| [Prachi-kushwaha](#Prachi-kushwaha) | 4 | 0 | 4 | 0 | 0 | 1 | 0 | 0 | 0 | 0 | 0 |

## Top 7 Repositories by Contribution Points

```mermaid
pie
    "tscircuit/cli" : 91
    "tscircuit/tscircuit" : 85
    "tscircuit/runframe" : 81
    "tscircuit/core" : 46
    "tscircuit/eval" : 45
    "tscircuit/svg.tscircuit.com" : 43
    "tscircuit/circuit-to-svg" : 36
```

## Changes by Repository

### [tscircuit/pcb-viewer](https://github.com/tscircuit/pcb-viewer)

| PR # | Impact | Rating | Contributor | Description |
|------|--------|--------|-------------|-------------|
| [#412](https://github.com/tscircuit/pcb-viewer/pull/412) | 🐙 Minor | ⭐⭐ | techmannih | Adds support for corner radius in SMT pad rendering, allowing for rounded corners in PCB designs. |
| [#401](https://github.com/tscircuit/pcb-viewer/pull/401) | 🐙 Minor | ⭐⭐ | techmannih | Adds functionality to render fabrication note dimensions in the PCB viewer, allowing users to visualize dimensions directly on the PCB layout. |
| [#410](https://github.com/tscircuit/pcb-viewer/pull/410) | 🐙 Minor | ⭐⭐ | MustafaMulla29 | Adds functionality to display the anchor position of a PCB group on the canvas, enhancing visual representation of PCB layouts. |
| [#406](https://github.com/tscircuit/pcb-viewer/pull/406) | 🐙 Minor | ⭐⭐ | imrishabh18 | Adds support for color overrides in PCB note shapes, allowing users to specify colors for lines, rectangles, paths, text, and dimensions. |
| [#402](https://github.com/tscircuit/pcb-viewer/pull/402) | 🐙 Minor | ⭐⭐ | imrishabh18 | Adds support for various PCB note elements including lines, rectangles, paths, dimensions, and text in the PCB viewer. |

<details>
<summary>🐌 Tiny Contributions (7)</summary>

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#415](https://github.com/tscircuit/pcb-viewer/pull/415) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#413](https://github.com/tscircuit/pcb-viewer/pull/413) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#411](https://github.com/tscircuit/pcb-viewer/pull/411) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#407](https://github.com/tscircuit/pcb-viewer/pull/407) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#405](https://github.com/tscircuit/pcb-viewer/pull/405) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#403](https://github.com/tscircuit/pcb-viewer/pull/403) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#414](https://github.com/tscircuit/pcb-viewer/pull/414) | 🐌 Tiny | seveibar | Changes the rendering of selector hover text to use a more compact syntax, omitting unnamed components and port hints. |

</details>

### [tscircuit/tscircuit](https://github.com/tscircuit/tscircuit)


<details>
<summary>🐌 Tiny Contributions (85)</summary>

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#1120](https://github.com/tscircuit/tscircuit/pull/1120) | 🐌 Tiny | tscircuitbot | Updates the package version from 0.0.795 to 0.0.796 in package.json |
| [#1119](https://github.com/tscircuit/tscircuit/pull/1119) | 🐌 Tiny | tscircuitbot | Updates the version of the tscircuitcli, tscircuitcore, and tscircuiteval packages in package.json to their latest versions. |
| [#1118](https://github.com/tscircuit/tscircuit/pull/1118) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1117](https://github.com/tscircuit/tscircuit/pull/1117) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1116](https://github.com/tscircuit/tscircuit/pull/1116) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1115](https://github.com/tscircuit/tscircuit/pull/1115) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1114](https://github.com/tscircuit/tscircuit/pull/1114) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1113](https://github.com/tscircuit/tscircuit/pull/1113) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1112](https://github.com/tscircuit/tscircuit/pull/1112) | 🐌 Tiny | tscircuitbot | Updates the package version from 0.0.791 to 0.0.792 in package.json |
| [#1111](https://github.com/tscircuit/tscircuit/pull/1111) | 🐌 Tiny | tscircuitbot | Updates the tscircuitcli package to version 0.1.359 in the package.json file |
| [#1110](https://github.com/tscircuit/tscircuit/pull/1110) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1109](https://github.com/tscircuit/tscircuit/pull/1109) | 🐌 Tiny | tscircuitbot | Updates the tscircuitcli package to version 0.1.358 in the package.json file. |
| [#1108](https://github.com/tscircuit/tscircuit/pull/1108) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1107](https://github.com/tscircuit/tscircuit/pull/1107) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1105](https://github.com/tscircuit/tscircuit/pull/1105) | 🐌 Tiny | tscircuitbot | Updates the tscircuitcli package to version 0.1.356 in the package.json file |
| [#1104](https://github.com/tscircuit/tscircuit/pull/1104) | 🐌 Tiny | tscircuitbot | Updates the package version from 0.0.787 to 0.0.788 in package.json |
| [#1103](https://github.com/tscircuit/tscircuit/pull/1103) | 🐌 Tiny | tscircuitbot | Updates the tscircuitcli package from version 0.1.354 to 0.1.355 and the tscircuitrunframe package from version 0.0.1122 to 0.0.1123 in package.json |
| [#1102](https://github.com/tscircuit/tscircuit/pull/1102) | 🐌 Tiny | tscircuitbot | Updates the package version from 0.0.786 to 0.0.787 in package.json |
| [#1101](https://github.com/tscircuit/tscircuit/pull/1101) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1100](https://github.com/tscircuit/tscircuit/pull/1100) | 🐌 Tiny | tscircuitbot | Updates the package version from 0.0.785 to 0.0.786 in package.json |
| [#1099](https://github.com/tscircuit/tscircuit/pull/1099) | 🐌 Tiny | tscircuitbot | Updates the tscircuitcli and other related package versions in package.json |
| [#1098](https://github.com/tscircuit/tscircuit/pull/1098) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1097](https://github.com/tscircuit/tscircuit/pull/1097) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1095](https://github.com/tscircuit/tscircuit/pull/1095) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1094](https://github.com/tscircuit/tscircuit/pull/1094) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1093](https://github.com/tscircuit/tscircuit/pull/1093) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1092](https://github.com/tscircuit/tscircuit/pull/1092) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1091](https://github.com/tscircuit/tscircuit/pull/1091) | 🐌 Tiny | tscircuitbot | Updates the package version from 0.0.781 to 0.0.782 in package.json |
| [#1090](https://github.com/tscircuit/tscircuit/pull/1090) | 🐌 Tiny | tscircuitbot | Updates the version of several dependencies in the package.json file. |
| [#1085](https://github.com/tscircuit/tscircuit/pull/1085) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1084](https://github.com/tscircuit/tscircuit/pull/1084) | 🐌 Tiny | tscircuitbot | Updates the tscircuitcli package from version 0.1.347 to 0.1.348 and the tscircuitrunframe package from version 0.0.1116 to 0.0.1117 in package.json |
| [#1083](https://github.com/tscircuit/tscircuit/pull/1083) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1082](https://github.com/tscircuit/tscircuit/pull/1082) | 🐌 Tiny | tscircuitbot | Updates the tscircuitcli package version from 0.1.346 to 0.1.347 in package.json |
| [#1079](https://github.com/tscircuit/tscircuit/pull/1079) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1078](https://github.com/tscircuit/tscircuit/pull/1078) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1073](https://github.com/tscircuit/tscircuit/pull/1073) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1072](https://github.com/tscircuit/tscircuit/pull/1072) | 🐌 Tiny | tscircuitbot | Updates the tscircuitcli package from version 0.1.344 to 0.1.345 and the tscircuitrunframe package from version 0.0.1114 to 0.0.1115 in package.json |
| [#1071](https://github.com/tscircuit/tscircuit/pull/1071) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1069](https://github.com/tscircuit/tscircuit/pull/1069) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1068](https://github.com/tscircuit/tscircuit/pull/1068) | 🐌 Tiny | tscircuitbot | Updates the versions of the tscircuitcli, tscircuitcore, and tscircuiteval packages in package.json |
| [#1067](https://github.com/tscircuit/tscircuit/pull/1067) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1066](https://github.com/tscircuit/tscircuit/pull/1066) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1064](https://github.com/tscircuit/tscircuit/pull/1064) | 🐌 Tiny | tscircuitbot | Updates the tscircuitcli package from version 0.1.341 to 0.1.342 and the tscircuitrunframe package from version 0.0.1111 to 0.0.1112 in package.json |
| [#1063](https://github.com/tscircuit/tscircuit/pull/1063) | 🐌 Tiny | tscircuitbot | Updates the package version from 0.0.772 to 0.0.773 in package.json |
| [#1062](https://github.com/tscircuit/tscircuit/pull/1062) | 🐌 Tiny | tscircuitbot | Updates the tscircuitcli and tscircuiteval packages to their latest versions. |
| [#1061](https://github.com/tscircuit/tscircuit/pull/1061) | 🐌 Tiny | tscircuitbot | Updates the package version from 0.0.771 to 0.0.772 in package.json |
| [#1060](https://github.com/tscircuit/tscircuit/pull/1060) | 🐌 Tiny | tscircuitbot | Updates the tscircuitcli package from version 0.1.339 to 0.1.340 and the tscircuitrunframe package from version 0.0.1110 to 0.0.1111 in package.json |
| [#1059](https://github.com/tscircuit/tscircuit/pull/1059) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1058](https://github.com/tscircuit/tscircuit/pull/1058) | 🐌 Tiny | tscircuitbot | Updates the tscircuitcli package to version 0.1.339 in the package.json file |
| [#1057](https://github.com/tscircuit/tscircuit/pull/1057) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1056](https://github.com/tscircuit/tscircuit/pull/1056) | 🐌 Tiny | tscircuitbot | Updates the tscircuitcli package from version 0.1.337 to 0.1.338 and the tscircuitrunframe package from version 0.0.1109 to 0.0.1110 in package.json |
| [#1055](https://github.com/tscircuit/tscircuit/pull/1055) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1054](https://github.com/tscircuit/tscircuit/pull/1054) | 🐌 Tiny | tscircuitbot | Updates the tscircuitcli package from version 0.1.336 to 0.1.337 and the tscircuitrunframe package from version 0.0.1108 to 0.0.1109 in package.json |
| [#1053](https://github.com/tscircuit/tscircuit/pull/1053) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1052](https://github.com/tscircuit/tscircuit/pull/1052) | 🐌 Tiny | tscircuitbot | Updates the tscircuitcli and other related package versions in package.json |
| [#1051](https://github.com/tscircuit/tscircuit/pull/1051) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1050](https://github.com/tscircuit/tscircuit/pull/1050) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1049](https://github.com/tscircuit/tscircuit/pull/1049) | 🐌 Tiny | tscircuitbot | Updates the package version from 0.0.765 to 0.0.766 in package.json |
| [#1048](https://github.com/tscircuit/tscircuit/pull/1048) | 🐌 Tiny | tscircuitbot | Updates the tscircuitcli package from version 0.1.333 to 0.1.334 and the tscircuitrunframe package from version 0.0.1103 to 0.0.1104 in package.json |
| [#1047](https://github.com/tscircuit/tscircuit/pull/1047) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1046](https://github.com/tscircuit/tscircuit/pull/1046) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1045](https://github.com/tscircuit/tscircuit/pull/1045) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1044](https://github.com/tscircuit/tscircuit/pull/1044) | 🐌 Tiny | tscircuitbot | Updates the tscircuitcli package from version 0.1.331 to 0.1.332 and the tscircuitrunframe package from version 0.0.1101 to 0.0.1102 in package.json |
| [#1043](https://github.com/tscircuit/tscircuit/pull/1043) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1042](https://github.com/tscircuit/tscircuit/pull/1042) | 🐌 Tiny | tscircuitbot | Updates the tscircuitcli package from version 0.1.330 to 0.1.331 and the tscircuitrunframe package from version 0.0.1100 to 0.0.1101 in package.json |
| [#1041](https://github.com/tscircuit/tscircuit/pull/1041) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1040](https://github.com/tscircuit/tscircuit/pull/1040) | 🐌 Tiny | tscircuitbot | Updates the tscircuitcli package from version 0.1.329 to 0.1.330 and the tscircuitrunframe package from version 0.0.1099 to 0.0.1100 in package.json |
| [#1038](https://github.com/tscircuit/tscircuit/pull/1038) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1037](https://github.com/tscircuit/tscircuit/pull/1037) | 🐌 Tiny | tscircuitbot | Updates the tscircuitcli package from version 0.1.328 to 0.1.329 and the tscircuitrunframe package from version 0.0.1098 to 0.0.1099 in package.json |
| [#1036](https://github.com/tscircuit/tscircuit/pull/1036) | 🐌 Tiny | tscircuitbot | Updates the package version from 0.0.759 to 0.0.760 in package.json |
| [#1035](https://github.com/tscircuit/tscircuit/pull/1035) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1034](https://github.com/tscircuit/tscircuit/pull/1034) | 🐌 Tiny | tscircuitbot | Automated package version bump from 0.0.758 to 0.0.759 |
| [#1032](https://github.com/tscircuit/tscircuit/pull/1032) | 🐌 Tiny | tscircuitbot | Updates the package version from 0.0.757 to 0.0.758 in package.json |
| [#1031](https://github.com/tscircuit/tscircuit/pull/1031) | 🐌 Tiny | tscircuitbot | Updates the version of tscircuitcli, tscircuitcore, and tscircuiteval packages in package.json |
| [#1030](https://github.com/tscircuit/tscircuit/pull/1030) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1029](https://github.com/tscircuit/tscircuit/pull/1029) | 🐌 Tiny | tscircuitbot | Updates the version of several dependencies in the package.json file. |
| [#1028](https://github.com/tscircuit/tscircuit/pull/1028) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1027](https://github.com/tscircuit/tscircuit/pull/1027) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1026](https://github.com/tscircuit/tscircuit/pull/1026) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1025](https://github.com/tscircuit/tscircuit/pull/1025) | 🐌 Tiny | tscircuitbot | Updates the tscircuitcli package from version 0.1.323 to 0.1.324 and the tscircuitrunframe package from version 0.0.1094 to 0.0.1095. |
| [#1024](https://github.com/tscircuit/tscircuit/pull/1024) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1023](https://github.com/tscircuit/tscircuit/pull/1023) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1021](https://github.com/tscircuit/tscircuit/pull/1021) | 🐌 Tiny | tscircuitbot | Updates the version of tscircuitcli and tscircuitcore packages in package.json |
| [#1070](https://github.com/tscircuit/tscircuit/pull/1070) | 🐌 Tiny | imrishabh18 | Adds a step to close existing PRs authored by tscircuitbot before running updates. |
| [#1033](https://github.com/tscircuit/tscircuit/pull/1033) | 🐌 Tiny | imrishabh18 | Adds a GitHub Actions workflow to send Slack notifications for failed automated package update PRs. |

</details>

### [tscircuit/tscircuit.com](https://github.com/tscircuit/tscircuit.com)

| PR # | Impact | Rating | Contributor | Description |
|------|--------|--------|-------------|-------------|
| [#1812](https://github.com/tscircuit/tscircuit.com/pull/1812) | 🐳 Major | ⭐⭐⭐ | ArnavK-09 | Prevents the display of skeleton loading indicators when the build status is an error, improving user experience during failed builds. |
| [#1811](https://github.com/tscircuit/tscircuit.com/pull/1811) | 🐳 Major | ⭐⭐⭐ | ArnavK-09 | Enables an autocomplete API for the code editor, allowing for predictive text suggestions based on user input. |
| [#1793](https://github.com/tscircuit/tscircuit.com/pull/1793) | 🐳 Major | ⭐⭐⭐ | ArnavK-09 | Prevents flickering and unnecessary refetching of organization members in the application. |
| [#1810](https://github.com/tscircuit/tscircuit.com/pull/1810) | 🐙 Minor | ⭐⭐ | ArnavK-09 | Prevents continuous requests by modifying query parameters and caching behavior in the CmdKMenu component. |

<details>
<summary>🐌 Tiny Contributions (13)</summary>

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#1816](https://github.com/tscircuit/tscircuit.com/pull/1816) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1815](https://github.com/tscircuit/tscircuit.com/pull/1815) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1814](https://github.com/tscircuit/tscircuit.com/pull/1814) | 🐌 Tiny | tscircuitbot | Automated package update for tscircuiteval from version 0.0.407 to 0.0.408 |
| [#1813](https://github.com/tscircuit/tscircuit.com/pull/1813) | 🐌 Tiny | tscircuitbot | Updates the tscircuiteval package to version 0.0.407 in the package.json file. |
| [#1804](https://github.com/tscircuit/tscircuit.com/pull/1804) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1802](https://github.com/tscircuit/tscircuit.com/pull/1802) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1801](https://github.com/tscircuit/tscircuit.com/pull/1801) | 🐌 Tiny | tscircuitbot | Updates the tscircuiteval package from version 0.0.402 to 0.0.403 |
| [#1800](https://github.com/tscircuit/tscircuit.com/pull/1800) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1799](https://github.com/tscircuit/tscircuit.com/pull/1799) | 🐌 Tiny | tscircuitbot | Updates the tscircuiteval package from version 0.0.400 to 0.0.401 in package.json |
| [#1798](https://github.com/tscircuit/tscircuit.com/pull/1798) | 🐌 Tiny | tscircuitbot | Updates the tscircuiteval package from version 0.0.399 to 0.0.400 |
| [#1797](https://github.com/tscircuit/tscircuit.com/pull/1797) | 🐌 Tiny | tscircuitbot | Updates the tscircuiteval package from version 0.0.325 to 0.0.399 |
| [#1795](https://github.com/tscircuit/tscircuit.com/pull/1795) | 🐌 Tiny | seveibar | Add a GitHub Actions workflow to automate dependency updates for the tscircuiteval package, including closing existing PRs and creating new ones for updates. |
| [#1808](https://github.com/tscircuit/tscircuit.com/pull/1808) | 🐌 Tiny | ArnavK-09 | Adds role display functionality for organization members and improves member management UI. |

</details>

### [tscircuit/eval](https://github.com/tscircuit/eval)

| PR # | Impact | Rating | Contributor | Description |
|------|--------|--------|-------------|-------------|
| [#1302](https://github.com/tscircuit/eval/pull/1302) | 🐙 Minor | ⭐⭐ | seveibar | Detects circular dependencies in local imports and surfaces a clear error when such dependencies are formed, along with a regression test to ensure detection functionality. |
| [#1288](https://github.com/tscircuit/eval/pull/1288) | 🐙 Minor | ⭐⭐ | seveibar | Rely on the execution contexts tsconfig during file resolution instead of recomputing it from the filesystem map |
| [#1281](https://github.com/tscircuit/eval/pull/1281) | 🐙 Minor | ⭐⭐ | seveibar | Throws an error when a TypeScript config path alias matches but the corresponding file cannot be resolved. |
| [#1318](https://github.com/tscircuit/eval/pull/1318) | 🐙 Minor | ⭐⭐ | ShiboSoftwareDev | Enhances tsconfig.json parsing by stripping comments and providing clearer error messages for malformed configurations. |
| [#1292](https://github.com/tscircuit/eval/pull/1292) | 🐙 Minor | ⭐⭐ | Excellencedev | Fixes issue 1282 by making sure dont need to specify paths in tsconfig in order to import files from the root directory |

<details>
<summary>🐌 Tiny Contributions (35)</summary>

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#1333](https://github.com/tscircuit/eval/pull/1333) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1332](https://github.com/tscircuit/eval/pull/1332) | 🐌 Tiny | tscircuitbot | Updates the version of the tscircuitcore package from 0.0.803 to 0.0.804 in package.json |
| [#1330](https://github.com/tscircuit/eval/pull/1330) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1329](https://github.com/tscircuit/eval/pull/1329) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1327](https://github.com/tscircuit/eval/pull/1327) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1326](https://github.com/tscircuit/eval/pull/1326) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1324](https://github.com/tscircuit/eval/pull/1324) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1323](https://github.com/tscircuit/eval/pull/1323) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1319](https://github.com/tscircuit/eval/pull/1319) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1316](https://github.com/tscircuit/eval/pull/1316) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1315](https://github.com/tscircuit/eval/pull/1315) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1313](https://github.com/tscircuit/eval/pull/1313) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1312](https://github.com/tscircuit/eval/pull/1312) | 🐌 Tiny | tscircuitbot | Updates the version of the tscircuitcore package from 0.0.797 to 0.0.798 in package.json |
| [#1310](https://github.com/tscircuit/eval/pull/1310) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1309](https://github.com/tscircuit/eval/pull/1309) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1303](https://github.com/tscircuit/eval/pull/1303) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1299](https://github.com/tscircuit/eval/pull/1299) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1298](https://github.com/tscircuit/eval/pull/1298) | 🐌 Tiny | tscircuitbot | Updates the version of the tscircuitcore package from 0.0.792 to 0.0.793 in package.json |
| [#1296](https://github.com/tscircuit/eval/pull/1296) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1294](https://github.com/tscircuit/eval/pull/1294) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1291](https://github.com/tscircuit/eval/pull/1291) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1289](https://github.com/tscircuit/eval/pull/1289) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1287](https://github.com/tscircuit/eval/pull/1287) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1283](https://github.com/tscircuit/eval/pull/1283) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1280](https://github.com/tscircuit/eval/pull/1280) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1279](https://github.com/tscircuit/eval/pull/1279) | 🐌 Tiny | tscircuitbot | Updates the version of the tscircuitcore package from 0.0.791 to 0.0.792 in package.json |
| [#1277](https://github.com/tscircuit/eval/pull/1277) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1276](https://github.com/tscircuit/eval/pull/1276) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1274](https://github.com/tscircuit/eval/pull/1274) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1273](https://github.com/tscircuit/eval/pull/1273) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1271](https://github.com/tscircuit/eval/pull/1271) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1270](https://github.com/tscircuit/eval/pull/1270) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1290](https://github.com/tscircuit/eval/pull/1290) | 🐌 Tiny | seveibar | Adds the UPSTREAM_PACKAGES_TO_UPDATE environment variable to the release workflow, allowing for more flexible upstream package updates. |
| [#1286](https://github.com/tscircuit/eval/pull/1286) | 🐌 Tiny | seveibar | Adds detailed logging for import failures, providing users with specific error messages and context when imports cannot be resolved. |
| [#1295](https://github.com/tscircuit/eval/pull/1295) | 🐌 Tiny | imrishabh18 | Updates the kicad-component-converter dependency from version 0.1.22 to 0.1.27 in package.json |

</details>

### [tscircuit/runframe](https://github.com/tscircuit/runframe)

| PR # | Impact | Rating | Contributor | Description |
|------|--------|--------|-------------|-------------|
| [#1382](https://github.com/tscircuit/runframe/pull/1382) | 🐳 Major | ⭐⭐⭐ | ShiboSoftwareDev | Adds INITIAL_FILES_UPLOADED event to prevent rendering before all initial files are loaded, addressing race conditions in RunFrame. |
| [#1486](https://github.com/tscircuit/runframe/pull/1486) | 🐳 Major | ⭐⭐⭐ | Ayushjhawar8 | Adds functionality to save favorite files to local storage and sets the current directory to the current file by default in the file selector. |
| [#1439](https://github.com/tscircuit/runframe/pull/1439) | 🐙 Minor | ⭐⭐ | seveibar | Filters the RunFrame board selector using includeBoardFiles parsed from tscircuit.config.json and adds a fallback mechanism for invalid configurations. |
| [#1435](https://github.com/tscircuit/runframe/pull/1435) | 🐙 Minor | ⭐⭐ | seveibar | Fixes the issue where debug downloads display Object object instead of readable content by stringifying non-string debug outputs. |
| [#1468](https://github.com/tscircuit/runframe/pull/1468) | 🐙 Minor | ⭐⭐ | Asymtode712 | Removes deleted files from the file dropdown by implementing a new event handling mechanism for file deletion events. |

<details>
<summary>🐌 Tiny Contributions (67)</summary>

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#1508](https://github.com/tscircuit/runframe/pull/1508) | 🐌 Tiny | tscircuitbot | Automated package update to version 0.0.1128 |
| [#1507](https://github.com/tscircuit/runframe/pull/1507) | 🐌 Tiny | tscircuitbot | Updates the tscircuiteval package from version 0.0.409 to 0.0.410 |
| [#1506](https://github.com/tscircuit/runframe/pull/1506) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1505](https://github.com/tscircuit/runframe/pull/1505) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1504](https://github.com/tscircuit/runframe/pull/1504) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1503](https://github.com/tscircuit/runframe/pull/1503) | 🐌 Tiny | tscircuitbot | Updates the tscircuiteval package from version 0.0.407 to 0.0.408 |
| [#1502](https://github.com/tscircuit/runframe/pull/1502) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1501](https://github.com/tscircuit/runframe/pull/1501) | 🐌 Tiny | tscircuitbot | Updates the tscircuiteval package to version 0.0.407 |
| [#1499](https://github.com/tscircuit/runframe/pull/1499) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1498](https://github.com/tscircuit/runframe/pull/1498) | 🐌 Tiny | tscircuitbot | Updates the tscircuit3d-viewer package to version 0.0.416 in package.json |
| [#1497](https://github.com/tscircuit/runframe/pull/1497) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1496](https://github.com/tscircuit/runframe/pull/1496) | 🐌 Tiny | tscircuitbot | Updates the tscircuit3d-viewer package to version 0.0.415 in package.json |
| [#1495](https://github.com/tscircuit/runframe/pull/1495) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1494](https://github.com/tscircuit/runframe/pull/1494) | 🐌 Tiny | tscircuitbot | Updates the tscircuiteval package from version 0.0.404 to 0.0.406 in the package.json file. |
| [#1493](https://github.com/tscircuit/runframe/pull/1493) | 🐌 Tiny | tscircuitbot | Updates the package version from 0.0.1120 to 0.0.1121 in package.json |
| [#1492](https://github.com/tscircuit/runframe/pull/1492) | 🐌 Tiny | tscircuitbot | Updates the tscircuitpcb-viewer package from version 1.11.233 to 1.11.234 |
| [#1491](https://github.com/tscircuit/runframe/pull/1491) | 🐌 Tiny | tscircuitbot | Automated package update to version 0.0.1120 |
| [#1490](https://github.com/tscircuit/runframe/pull/1490) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1489](https://github.com/tscircuit/runframe/pull/1489) | 🐌 Tiny | tscircuitbot | Updates the package version from 0.0.1118 to 0.0.1119 in package.json |
| [#1488](https://github.com/tscircuit/runframe/pull/1488) | 🐌 Tiny | tscircuitbot | Updates the tscircuiteval package from version 0.0.402 to 0.0.403 in the package.json file. |
| [#1487](https://github.com/tscircuit/runframe/pull/1487) | 🐌 Tiny | tscircuitbot | Updates the package version from 0.0.1117 to 0.0.1118 in package.json |
| [#1484](https://github.com/tscircuit/runframe/pull/1484) | 🐌 Tiny | tscircuitbot | Updates the package version from 0.0.1116 to 0.0.1117 in package.json |
| [#1483](https://github.com/tscircuit/runframe/pull/1483) | 🐌 Tiny | tscircuitbot | Updates the tscircuitpcb-viewer package from version 1.11.232 to 1.11.233 |
| [#1482](https://github.com/tscircuit/runframe/pull/1482) | 🐌 Tiny | tscircuitbot | Automated package update to version 0.0.1116 |
| [#1481](https://github.com/tscircuit/runframe/pull/1481) | 🐌 Tiny | tscircuitbot | Updates the tscircuiteval package to version 0.0.402 in the package.json file. |
| [#1480](https://github.com/tscircuit/runframe/pull/1480) | 🐌 Tiny | tscircuitbot | Updates the package version from 0.0.1114 to 0.0.1115 in package.json |
| [#1479](https://github.com/tscircuit/runframe/pull/1479) | 🐌 Tiny | tscircuitbot | Updates the package version from 0.0.1113 to 0.0.1114 in package.json |
| [#1478](https://github.com/tscircuit/runframe/pull/1478) | 🐌 Tiny | tscircuitbot | Updates the tscircuiteval package to version 0.0.401 in the package.json file. |
| [#1477](https://github.com/tscircuit/runframe/pull/1477) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1476](https://github.com/tscircuit/runframe/pull/1476) | 🐌 Tiny | tscircuitbot | Updates the tscircuiteval package to version 0.0.400 in the package.json file. |
| [#1475](https://github.com/tscircuit/runframe/pull/1475) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1474](https://github.com/tscircuit/runframe/pull/1474) | 🐌 Tiny | tscircuitbot | Updates the tscircuiteval package to version 0.0.399 in the package.json file. |
| [#1473](https://github.com/tscircuit/runframe/pull/1473) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1472](https://github.com/tscircuit/runframe/pull/1472) | 🐌 Tiny | tscircuitbot | Updates the tscircuitpcb-viewer package to version 1.11.232 in package.json |
| [#1471](https://github.com/tscircuit/runframe/pull/1471) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1469](https://github.com/tscircuit/runframe/pull/1469) | 🐌 Tiny | tscircuitbot | Automated package update to version 0.0.1109 |
| [#1467](https://github.com/tscircuit/runframe/pull/1467) | 🐌 Tiny | tscircuitbot | Automated package update to version 0.0.1108 |
| [#1466](https://github.com/tscircuit/runframe/pull/1466) | 🐌 Tiny | tscircuitbot | Updates the tscircuiteval package to version 0.0.398 in the package.json file. |
| [#1465](https://github.com/tscircuit/runframe/pull/1465) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1464](https://github.com/tscircuit/runframe/pull/1464) | 🐌 Tiny | tscircuitbot | Updates the tscircuit3d-viewer package to version 0.0.414 in package.json |
| [#1463](https://github.com/tscircuit/runframe/pull/1463) | 🐌 Tiny | tscircuitbot | Updates the package version from 0.0.1105 to 0.0.1106 in package.json |
| [#1462](https://github.com/tscircuit/runframe/pull/1462) | 🐌 Tiny | tscircuitbot | Updates the tscircuiteval package to version 0.0.397 in the package.json file. |
| [#1461](https://github.com/tscircuit/runframe/pull/1461) | 🐌 Tiny | tscircuitbot | Updates the package version from 0.0.1104 to 0.0.1105 in package.json |
| [#1459](https://github.com/tscircuit/runframe/pull/1459) | 🐌 Tiny | tscircuitbot | Updates the tscircuiteval package to version 0.0.396 |
| [#1458](https://github.com/tscircuit/runframe/pull/1458) | 🐌 Tiny | tscircuitbot | Automated package update to version 0.0.1104 |
| [#1457](https://github.com/tscircuit/runframe/pull/1457) | 🐌 Tiny | tscircuitbot | Updates the tscircuitpcb-viewer package from version 1.11.230 to 1.11.231 |
| [#1456](https://github.com/tscircuit/runframe/pull/1456) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1455](https://github.com/tscircuit/runframe/pull/1455) | 🐌 Tiny | tscircuitbot | Updates the tscircuiteval package to version 0.0.395 |
| [#1454](https://github.com/tscircuit/runframe/pull/1454) | 🐌 Tiny | tscircuitbot | Automated package update to version 0.0.1102 |
| [#1453](https://github.com/tscircuit/runframe/pull/1453) | 🐌 Tiny | tscircuitbot | Updates the tscircuitpcb-viewer package from version 1.11.229 to 1.11.230 |
| [#1452](https://github.com/tscircuit/runframe/pull/1452) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1451](https://github.com/tscircuit/runframe/pull/1451) | 🐌 Tiny | tscircuitbot | Updates the tscircuit3d-viewer package to version 0.0.413 in package.json |
| [#1450](https://github.com/tscircuit/runframe/pull/1450) | 🐌 Tiny | tscircuitbot | Updates the package version from 0.0.1099 to 0.0.1100 in package.json |
| [#1449](https://github.com/tscircuit/runframe/pull/1449) | 🐌 Tiny | tscircuitbot | Updates the tscircuitpcb-viewer package from version 1.11.228 to 1.11.229 |
| [#1448](https://github.com/tscircuit/runframe/pull/1448) | 🐌 Tiny | tscircuitbot | Updates the package version from 0.0.1098 to 0.0.1099 in package.json |
| [#1447](https://github.com/tscircuit/runframe/pull/1447) | 🐌 Tiny | tscircuitbot | Updates the tscircuiteval package to version 0.0.394 in the package.json file. |
| [#1446](https://github.com/tscircuit/runframe/pull/1446) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1445](https://github.com/tscircuit/runframe/pull/1445) | 🐌 Tiny | tscircuitbot | Updates the tscircuiteval package to version 0.0.393 in the package.json file. |
| [#1444](https://github.com/tscircuit/runframe/pull/1444) | 🐌 Tiny | tscircuitbot | Automated package update to version 0.0.1097 |
| [#1443](https://github.com/tscircuit/runframe/pull/1443) | 🐌 Tiny | tscircuitbot | Updates the tscircuiteval package to version 0.0.392 |
| [#1442](https://github.com/tscircuit/runframe/pull/1442) | 🐌 Tiny | tscircuitbot | Updates the package version from 0.0.1095 to 0.0.1096 in package.json |
| [#1441](https://github.com/tscircuit/runframe/pull/1441) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1440](https://github.com/tscircuit/runframe/pull/1440) | 🐌 Tiny | tscircuitbot | Updates the tscircuit3d-viewer package from version 0.0.411 to 0.0.412 |
| [#1438](https://github.com/tscircuit/runframe/pull/1438) | 🐌 Tiny | tscircuitbot | Updates the package version from 0.0.1093 to 0.0.1094 in package.json |
| [#1437](https://github.com/tscircuit/runframe/pull/1437) | 🐌 Tiny | tscircuitbot | Updates the tscircuiteval package to version 0.0.391 in the package.json file. |
| [#1436](https://github.com/tscircuit/runframe/pull/1436) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1470](https://github.com/tscircuit/runframe/pull/1470) | 🐌 Tiny | Ayushjhawar8 | img width1074 height561 altimage srchttps:github.comuser-attachmentsassets6ebe85ed-b5b4-4868-9c7e-512f0563b88d  img width1071 height510 altimage srchttps:github.comuser-attachmentsassets400fe2bf-b35b-4232-bee9-aa3ecdd54960 |

</details>

### [tscircuit/cli](https://github.com/tscircuit/cli)

| PR # | Impact | Rating | Contributor | Description |
|------|--------|--------|-------------|-------------|
| [#660](https://github.com/tscircuit/cli/pull/660) | 🐙 Minor | ⭐⭐ | seveibar | Adds support for filtering directory builds based on configured includeBoardFiles patterns and improves error handling for unmatched files during the build process. |
| [#657](https://github.com/tscircuit/cli/pull/657) | 🐙 Minor | ⭐⭐ | seveibar | Add a --all-images flag to the tsci build command to generate preview images for every successful build output. |
| [#642](https://github.com/tscircuit/cli/pull/642) | 🐙 Minor | ⭐⭐ | seveibar | Implements individual error handling for generating circuit JSON, PCB SVG, schematic SVG, and 3D snapshots, improving robustness in snapshot generation. |
| [#581](https://github.com/tscircuit/cli/pull/581) | 🐙 Minor | ⭐⭐ | seveibar | Centralizes board file discovery by reusing configured board file globs and introduces a new includeBoardFiles option in the project config schema, enhancing the build and snapshot processes. |
| [#649](https://github.com/tscircuit/cli/pull/649) | 🐙 Minor | ⭐⭐ | MustafaMulla29 | Allows users to specify a custom output directory for snapshots in the tscircuit configuration file, enhancing flexibility in project organization. |
| [#636](https://github.com/tscircuit/cli/pull/636) | 🐙 Minor | ⭐⭐ | ShiboSoftwareDev | Resolves a race condition in the dev server where the front-end runframe could attempt to render a circuit before all of its dependent files were available by emitting the INITIAL_FILES_UPLOADED event after the initial upload of all project files. |
| [#618](https://github.com/tscircuit/cli/pull/618) | 🐙 Minor | ⭐⭐ | Asymtode712 | Adds handling for FILE_DELETED events to synchronize file deletions in the file server, including a new event interface and listener. |

<details>
<summary>🐌 Tiny Contributions (77)</summary>

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#671](https://github.com/tscircuit/cli/pull/671) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#670](https://github.com/tscircuit/cli/pull/670) | 🐌 Tiny | tscircuitbot | Updates the tscircuitrunframe package from version 0.0.1127 to 0.0.1128 |
| [#669](https://github.com/tscircuit/cli/pull/669) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#668](https://github.com/tscircuit/cli/pull/668) | 🐌 Tiny | tscircuitbot | Updates the tscircuitrunframe package from version 0.0.1126 to 0.0.1127 |
| [#667](https://github.com/tscircuit/cli/pull/667) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#666](https://github.com/tscircuit/cli/pull/666) | 🐌 Tiny | tscircuitbot | Updates the tscircuitrunframe package from version 0.0.1125 to 0.0.1126 |
| [#665](https://github.com/tscircuit/cli/pull/665) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#664](https://github.com/tscircuit/cli/pull/664) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#663](https://github.com/tscircuit/cli/pull/663) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#662](https://github.com/tscircuit/cli/pull/662) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#661](https://github.com/tscircuit/cli/pull/661) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#658](https://github.com/tscircuit/cli/pull/658) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#656](https://github.com/tscircuit/cli/pull/656) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#654](https://github.com/tscircuit/cli/pull/654) | 🐌 Tiny | tscircuitbot | Updates the tscircuitrunframe package from version 0.0.1122 to 0.0.1123 |
| [#653](https://github.com/tscircuit/cli/pull/653) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#652](https://github.com/tscircuit/cli/pull/652) | 🐌 Tiny | tscircuitbot | Updates the tscircuitrunframe package to version 0.0.1122 in the package.json file. |
| [#651](https://github.com/tscircuit/cli/pull/651) | 🐌 Tiny | tscircuitbot | Automated package update to version 0.1.353 |
| [#650](https://github.com/tscircuit/cli/pull/650) | 🐌 Tiny | tscircuitbot | Updates the tscircuitrunframe package from version 0.0.1120 to 0.0.1121 |
| [#648](https://github.com/tscircuit/cli/pull/648) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#646](https://github.com/tscircuit/cli/pull/646) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#645](https://github.com/tscircuit/cli/pull/645) | 🐌 Tiny | tscircuitbot | Updates the tscircuitrunframe package to version 0.0.1120 |
| [#644](https://github.com/tscircuit/cli/pull/644) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#643](https://github.com/tscircuit/cli/pull/643) | 🐌 Tiny | tscircuitbot | Updates the tscircuitrunframe package from version 0.0.1118 to 0.0.1119 |
| [#641](https://github.com/tscircuit/cli/pull/641) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#640](https://github.com/tscircuit/cli/pull/640) | 🐌 Tiny | tscircuitbot | Updates the tscircuitrunframe package from version 0.0.1117 to 0.0.1118 |
| [#639](https://github.com/tscircuit/cli/pull/639) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#638](https://github.com/tscircuit/cli/pull/638) | 🐌 Tiny | tscircuitbot | Updates the tscircuitrunframe package from version 0.0.1116 to 0.0.1117 |
| [#637](https://github.com/tscircuit/cli/pull/637) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#635](https://github.com/tscircuit/cli/pull/635) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#634](https://github.com/tscircuit/cli/pull/634) | 🐌 Tiny | tscircuitbot | Updates the tscircuitrunframe package from version 0.0.1115 to 0.0.1116 |
| [#633](https://github.com/tscircuit/cli/pull/633) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#632](https://github.com/tscircuit/cli/pull/632) | 🐌 Tiny | tscircuitbot | Updates the tscircuitrunframe package from version 0.0.1114 to 0.0.1115 |
| [#631](https://github.com/tscircuit/cli/pull/631) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#630](https://github.com/tscircuit/cli/pull/630) | 🐌 Tiny | tscircuitbot | Updates the tscircuitrunframe package from version 0.0.1113 to 0.0.1114 |
| [#628](https://github.com/tscircuit/cli/pull/628) | 🐌 Tiny | tscircuitbot | Updates the tscircuitrunframe package from version 0.0.1112 to 0.0.1113 |
| [#629](https://github.com/tscircuit/cli/pull/629) | 🐌 Tiny | tscircuitbot | Automated package update to version 0.1.343 |
| [#627](https://github.com/tscircuit/cli/pull/627) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#626](https://github.com/tscircuit/cli/pull/626) | 🐌 Tiny | tscircuitbot | Updates the tscircuitrunframe package from version 0.0.1111 to 0.0.1112 |
| [#625](https://github.com/tscircuit/cli/pull/625) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#623](https://github.com/tscircuit/cli/pull/623) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#622](https://github.com/tscircuit/cli/pull/622) | 🐌 Tiny | tscircuitbot | Updates the tscircuitrunframe package from version 0.0.1110 to 0.0.1111 |
| [#621](https://github.com/tscircuit/cli/pull/621) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#620](https://github.com/tscircuit/cli/pull/620) | 🐌 Tiny | tscircuitbot | Updates the package version from 0.1.337 to 0.1.338 in package.json |
| [#619](https://github.com/tscircuit/cli/pull/619) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#617](https://github.com/tscircuit/cli/pull/617) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#616](https://github.com/tscircuit/cli/pull/616) | 🐌 Tiny | tscircuitbot | Updates the tscircuitrunframe package from version 0.0.1108 to 0.0.1109 |
| [#613](https://github.com/tscircuit/cli/pull/613) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#612](https://github.com/tscircuit/cli/pull/612) | 🐌 Tiny | tscircuitbot | Updates the tscircuitrunframe package from version 0.0.1107 to 0.0.1108 |
| [#611](https://github.com/tscircuit/cli/pull/611) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#610](https://github.com/tscircuit/cli/pull/610) | 🐌 Tiny | tscircuitbot | Updates the tscircuitrunframe package from version 0.0.1104 to 0.0.1107 in the package.json file. |
| [#607](https://github.com/tscircuit/cli/pull/607) | 🐌 Tiny | tscircuitbot | Automated package update to version 0.1.334 |
| [#606](https://github.com/tscircuit/cli/pull/606) | 🐌 Tiny | tscircuitbot | Updates the tscircuitrunframe package from version 0.0.1103 to 0.0.1104 |
| [#605](https://github.com/tscircuit/cli/pull/605) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#604](https://github.com/tscircuit/cli/pull/604) | 🐌 Tiny | tscircuitbot | Updates the tscircuitrunframe package from version 0.0.1102 to 0.0.1103 |
| [#603](https://github.com/tscircuit/cli/pull/603) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#602](https://github.com/tscircuit/cli/pull/602) | 🐌 Tiny | tscircuitbot | Updates the tscircuitrunframe package from version 0.0.1101 to 0.0.1102 in the package.json file. |
| [#601](https://github.com/tscircuit/cli/pull/601) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#600](https://github.com/tscircuit/cli/pull/600) | 🐌 Tiny | tscircuitbot | Updates the tscircuitrunframe package version from 0.0.1099 to 0.0.1101 in package.json |
| [#599](https://github.com/tscircuit/cli/pull/599) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#597](https://github.com/tscircuit/cli/pull/597) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#596](https://github.com/tscircuit/cli/pull/596) | 🐌 Tiny | tscircuitbot | Updates the tscircuitrunframe package from version 0.0.1098 to 0.0.1099 |
| [#595](https://github.com/tscircuit/cli/pull/595) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#593](https://github.com/tscircuit/cli/pull/593) | 🐌 Tiny | tscircuitbot | Automated package update to version 0.1.327 |
| [#592](https://github.com/tscircuit/cli/pull/592) | 🐌 Tiny | tscircuitbot | Updates the tscircuitrunframe package from version 0.0.1097 to 0.0.1098 |
| [#590](https://github.com/tscircuit/cli/pull/590) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#589](https://github.com/tscircuit/cli/pull/589) | 🐌 Tiny | tscircuitbot | Updates the tscircuitrunframe package from version 0.0.1096 to 0.0.1097 |
| [#588](https://github.com/tscircuit/cli/pull/588) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#587](https://github.com/tscircuit/cli/pull/587) | 🐌 Tiny | tscircuitbot | Updates the tscircuitrunframe package from version 0.0.1095 to 0.0.1096 |
| [#586](https://github.com/tscircuit/cli/pull/586) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#585](https://github.com/tscircuit/cli/pull/585) | 🐌 Tiny | tscircuitbot | Updates the tscircuitrunframe package from version 0.0.1094 to 0.0.1095 |
| [#584](https://github.com/tscircuit/cli/pull/584) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#583](https://github.com/tscircuit/cli/pull/583) | 🐌 Tiny | tscircuitbot | Updates the tscircuitrunframe package from version 0.0.1092 to 0.0.1094 |
| [#582](https://github.com/tscircuit/cli/pull/582) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#624](https://github.com/tscircuit/cli/pull/624) | 🐌 Tiny | imrishabh18 | Fixes indentation in the GitHub Actions workflow and adds an environment variable for the GitHub token used in closing pull requests. |
| [#594](https://github.com/tscircuit/cli/pull/594) | 🐌 Tiny | imrishabh18 | Adds a GitHub Actions workflow to send Slack notifications for failed automated package update PRs. |
| [#655](https://github.com/tscircuit/cli/pull/655) | 🐌 Tiny | ArnavK-09 | Updates the local server URL to include the file path in the output for better user reference. |
| [#591](https://github.com/tscircuit/cli/pull/591) | 🐌 Tiny | ArnavK-09 | Fixes the project relative path for the glb files in the package.json to ensure correct file resolution. |

</details>

### [tscircuit/svg.tscircuit.com](https://github.com/tscircuit/svg.tscircuit.com)

| PR # | Impact | Rating | Contributor | Description |
|------|--------|--------|-------------|-------------|
| [#472](https://github.com/tscircuit/svg.tscircuit.com/pull/472) | 🐙 Minor | ⭐⭐ | seveibar | Disables the parts engine by using the PlatformConfig type for project configuration updates. |

<details>
<summary>🐌 Tiny Contributions (41)</summary>

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#471](https://github.com/tscircuit/svg.tscircuit.com/pull/471) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#470](https://github.com/tscircuit/svg.tscircuit.com/pull/470) | 🐌 Tiny | tscircuitbot | Updates the tscircuit package version from 0.0.794 to 0.0.795 in package.json |
| [#469](https://github.com/tscircuit/svg.tscircuit.com/pull/469) | 🐌 Tiny | tscircuitbot | Updates the tscircuit package version from 0.0.793 to 0.0.794 in package.json |
| [#468](https://github.com/tscircuit/svg.tscircuit.com/pull/468) | 🐌 Tiny | tscircuitbot | Updates the tscircuit package version from 0.0.792 to 0.0.793 in package.json |
| [#467](https://github.com/tscircuit/svg.tscircuit.com/pull/467) | 🐌 Tiny | tscircuitbot | Updates the tscircuit package version from 0.0.791 to 0.0.792 in package.json |
| [#466](https://github.com/tscircuit/svg.tscircuit.com/pull/466) | 🐌 Tiny | tscircuitbot | Updates the tscircuit package version from 0.0.790 to 0.0.791 in package.json |
| [#465](https://github.com/tscircuit/svg.tscircuit.com/pull/465) | 🐌 Tiny | tscircuitbot | Updates the tscircuit package version from 0.0.788 to 0.0.790 in package.json |
| [#464](https://github.com/tscircuit/svg.tscircuit.com/pull/464) | 🐌 Tiny | tscircuitbot | Updates the tscircuit package version from 0.0.787 to 0.0.788 in package.json |
| [#463](https://github.com/tscircuit/svg.tscircuit.com/pull/463) | 🐌 Tiny | tscircuitbot | Updates the tscircuit package version from 0.0.786 to 0.0.787 in package.json |
| [#462](https://github.com/tscircuit/svg.tscircuit.com/pull/462) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#461](https://github.com/tscircuit/svg.tscircuit.com/pull/461) | 🐌 Tiny | tscircuitbot | Updates the tscircuit package version from 0.0.784 to 0.0.785 in package.json |
| [#460](https://github.com/tscircuit/svg.tscircuit.com/pull/460) | 🐌 Tiny | tscircuitbot | Updates the tscircuit package version from 0.0.783 to 0.0.784 in package.json |
| [#459](https://github.com/tscircuit/svg.tscircuit.com/pull/459) | 🐌 Tiny | tscircuitbot | Updates the tscircuit package version from 0.0.782 to 0.0.783 in package.json |
| [#458](https://github.com/tscircuit/svg.tscircuit.com/pull/458) | 🐌 Tiny | tscircuitbot | Updates the tscircuit package version from 0.0.781 to 0.0.782 in package.json |
| [#457](https://github.com/tscircuit/svg.tscircuit.com/pull/457) | 🐌 Tiny | tscircuitbot | Updates the tscircuit package version from 0.0.780 to 0.0.781 in package.json |
| [#456](https://github.com/tscircuit/svg.tscircuit.com/pull/456) | 🐌 Tiny | tscircuitbot | Updates the tscircuit package version from 0.0.779 to 0.0.780 in package.json |
| [#455](https://github.com/tscircuit/svg.tscircuit.com/pull/455) | 🐌 Tiny | tscircuitbot | Updates the tscircuit package version from 0.0.778 to 0.0.779 in package.json |
| [#453](https://github.com/tscircuit/svg.tscircuit.com/pull/453) | 🐌 Tiny | tscircuitbot | Updates the tscircuit package version from 0.0.777 to 0.0.778 in package.json |
| [#452](https://github.com/tscircuit/svg.tscircuit.com/pull/452) | 🐌 Tiny | tscircuitbot | Updates the tscircuit package version from 0.0.776 to 0.0.777 in package.json |
| [#451](https://github.com/tscircuit/svg.tscircuit.com/pull/451) | 🐌 Tiny | tscircuitbot | Updates the tscircuit package version from 0.0.775 to 0.0.776 in package.json |
| [#450](https://github.com/tscircuit/svg.tscircuit.com/pull/450) | 🐌 Tiny | tscircuitbot | Updates the tscircuit package version from 0.0.773 to 0.0.775 in package.json |
| [#449](https://github.com/tscircuit/svg.tscircuit.com/pull/449) | 🐌 Tiny | tscircuitbot | Updates the tscircuit package version from 0.0.772 to 0.0.773 in package.json |
| [#448](https://github.com/tscircuit/svg.tscircuit.com/pull/448) | 🐌 Tiny | tscircuitbot | Updates the tscircuit package version from 0.0.771 to 0.0.772 in package.json |
| [#447](https://github.com/tscircuit/svg.tscircuit.com/pull/447) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#446](https://github.com/tscircuit/svg.tscircuit.com/pull/446) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#445](https://github.com/tscircuit/svg.tscircuit.com/pull/445) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#444](https://github.com/tscircuit/svg.tscircuit.com/pull/444) | 🐌 Tiny | tscircuitbot | Updates the tscircuit package version from 0.0.767 to 0.0.768 in package.json |
| [#443](https://github.com/tscircuit/svg.tscircuit.com/pull/443) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#442](https://github.com/tscircuit/svg.tscircuit.com/pull/442) | 🐌 Tiny | tscircuitbot | Updates the tscircuit package version from 0.0.765 to 0.0.766 in package.json |
| [#441](https://github.com/tscircuit/svg.tscircuit.com/pull/441) | 🐌 Tiny | tscircuitbot | Updates the tscircuit package version from 0.0.763 to 0.0.765 in package.json |
| [#440](https://github.com/tscircuit/svg.tscircuit.com/pull/440) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#439](https://github.com/tscircuit/svg.tscircuit.com/pull/439) | 🐌 Tiny | tscircuitbot | Updates the tscircuit package version from 0.0.761 to 0.0.762 in package.json |
| [#438](https://github.com/tscircuit/svg.tscircuit.com/pull/438) | 🐌 Tiny | tscircuitbot | Updates the tscircuit package version from 0.0.760 to 0.0.761 in package.json |
| [#437](https://github.com/tscircuit/svg.tscircuit.com/pull/437) | 🐌 Tiny | tscircuitbot | Updates the tscircuit package version from 0.0.758 to 0.0.760 in package.json |
| [#434](https://github.com/tscircuit/svg.tscircuit.com/pull/434) | 🐌 Tiny | tscircuitbot | Updates the tscircuit package version from 0.0.757 to 0.0.758 in package.json |
| [#433](https://github.com/tscircuit/svg.tscircuit.com/pull/433) | 🐌 Tiny | tscircuitbot | Updates the tscircuit package version from 0.0.756 to 0.0.757 in package.json |
| [#432](https://github.com/tscircuit/svg.tscircuit.com/pull/432) | 🐌 Tiny | tscircuitbot | Updates the tscircuit package version from 0.0.755 to 0.0.756 in package.json |
| [#431](https://github.com/tscircuit/svg.tscircuit.com/pull/431) | 🐌 Tiny | tscircuitbot | Updates the tscircuit package version from 0.0.754 to 0.0.755 in package.json |
| [#430](https://github.com/tscircuit/svg.tscircuit.com/pull/430) | 🐌 Tiny | tscircuitbot | Updates the tscircuit package version from 0.0.752 to 0.0.754 in package.json |
| [#473](https://github.com/tscircuit/svg.tscircuit.com/pull/473) | 🐌 Tiny | seveibar | Fixes async loading of circuit footprints and updates related snapshots in the testing suite. |
| [#435](https://github.com/tscircuit/svg.tscircuit.com/pull/435) | 🐌 Tiny | MustafaMulla29 | Updates the circuit-json-to-gltf dependency to version 0.0.26 to fix the pill hole issue and adds a test to verify the correct rendering of the pill-shaped hole in 3D SVG. |

</details>

### [tscircuit/kicad-component-converter](https://github.com/tscircuit/kicad-component-converter)

| PR # | Impact | Rating | Contributor | Description |
|------|--------|--------|-------------|-------------|
| [#149](https://github.com/tscircuit/kicad-component-converter/pull/149) | 🐳 Major | ⭐⭐⭐ | seveibar | Detects closed polygons from Edge.Cuts segments in KiCad files and creates corresponding pcb_cutout elements in the output JSON. |
| [#154](https://github.com/tscircuit/kicad-component-converter/pull/154) | 🐙 Minor | ⭐⭐ | seveibar | Fixes the handling of fabrication text layers in the conversion process by distinguishing between fabrication notes and silkscreen text based on layer attributes. |
| [#151](https://github.com/tscircuit/kicad-component-converter/pull/151) | 🐙 Minor | ⭐⭐ | imrishabh18 | Adds support for user-defined layers in KiCad by converting them to pcb_note_line and pcb_note_path elements in the tscircuit format. |

<details>
<summary>🐌 Tiny Contributions (1)</summary>

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#155](https://github.com/tscircuit/kicad-component-converter/pull/155) | 🐌 Tiny | imrishabh18 | Updates the circuit-json-to-tscircuit package version from 0.0.8 to 0.0.10 in package.json |

</details>

### [tscircuit/circuit-to-svg](https://github.com/tscircuit/circuit-to-svg)

| PR # | Impact | Rating | Contributor | Description |
|------|--------|--------|-------------|-------------|
| [#390](https://github.com/tscircuit/circuit-to-svg/pull/390) | 🐳 Major | ⭐⭐⭐ | seveibar | Adds support for rendering pcb_panel elements, updates to the latest circuit-json release, and includes a snapshot test for solder mask rendering. |
| [#383](https://github.com/tscircuit/circuit-to-svg/pull/383) | 🐳 Major | ⭐⭐⭐ | seveibar | Includes pcb_cutout shapes when determining PCB SVG bounds so polygon cutouts contribute to the transform and adds a regression test covering polygon-only cutouts to prevent NaN transforms |
| [#387](https://github.com/tscircuit/circuit-to-svg/pull/387) | 🐳 Major | ⭐⭐⭐ | techmannih | Adds support for corner radius in rectangular SMT pads, allowing for rounded corners in SVG rendering. |
| [#391](https://github.com/tscircuit/circuit-to-svg/pull/391) | 🐳 Major | ⭐⭐⭐ | imrishabh18 | Adds support for rendering PCB group outlines as dashed paths, validates outlines before rendering, and includes a dedicated snapshot for PCB group outline rendering with showPcbGroups enabled. |
| [#389](https://github.com/tscircuit/circuit-to-svg/pull/389) | 🐳 Major | ⭐⭐⭐ | imrishabh18 | Adds the option to visualize PCB groups in the SVG output by rendering dashed borders around them when specified in the options. |
| [#388](https://github.com/tscircuit/circuit-to-svg/pull/388) | 🐳 Major | ⭐⭐⭐ | fctpe | Add SVG rendering support for pcb_courtyard_rect elements, rendering courtyards as yellow dashed rectangles. |
| [#393](https://github.com/tscircuit/circuit-to-svg/pull/393) | 🐳 Major | ⭐⭐⭐ | Ayushjhawar8 | Adds text wrapping functionality for long legend names in the graph rendering, improving readability. |
| [#392](https://github.com/tscircuit/circuit-to-svg/pull/392) | 🐙 Minor | ⭐⭐ | seveibar | Fixes PCB panel rendering by preventing soldermask fill, ensuring the panel interior remains transparent. |
| [#386](https://github.com/tscircuit/circuit-to-svg/pull/386) | 🐙 Minor | ⭐⭐ | ShiboSoftwareDev | Fixes the label for transient voltage graphs to correctly use the simulation voltage probe name instead of a fallback name. |
| [#384](https://github.com/tscircuit/circuit-to-svg/pull/384) | 🐙 Minor | ⭐⭐ | ShiboSoftwareDev | This change updates the simulation graph generation to prioritize the name from an associated simulation_voltage_probe for the legend label, formatting it as V(probe_name) for more meaningful labels. |

<details>
<summary>🐌 Tiny Contributions (2)</summary>

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#385](https://github.com/tscircuit/circuit-to-svg/pull/385) | 🐌 Tiny | imrishabh18 | Changes the color for the user layer to align with KiCad standards by replacing default color values with those from a color map. |
| [#394](https://github.com/tscircuit/circuit-to-svg/pull/394) | 🐌 Tiny | Ayushjhawar8 | Adjusts legend label font size and positioning for better visibility and organization in simulation graphs. |

</details>

### [tscircuit/circuit-json](https://github.com/tscircuit/circuit-json)

| PR # | Impact | Rating | Contributor | Description |
|------|--------|--------|-------------|-------------|
| [#319](https://github.com/tscircuit/circuit-json/pull/319) | 🐙 Minor | ⭐⭐ | seveibar | Adds a pcb_panel component with dimensions and solder mask defaults, exports the new panel and includes it in PCB and any_circuit_element unions, and allows pcb_board to reference an associated panel with unit tests. |
| [#317](https://github.com/tscircuit/circuit-json/pull/317) | 🐙 Minor | ⭐⭐ | techmannih | Adds corner_radius support for rectangular and rotated-rect SMT pads in the PCB design. |
| [#315](https://github.com/tscircuit/circuit-json/pull/315) | 🐙 Minor | ⭐⭐ | MustafaMulla29 | Adds anchor_position and anchor_alignment properties to the pcb_group, allowing for more flexible positioning and alignment of PCB groups in the design. |
| [#321](https://github.com/tscircuit/circuit-json/pull/321) | 🐙 Minor | ⭐⭐ | imrishabh18 | Allows the width and height fields of the pcb_group schema to be optional, enabling parsing with only an outline provided. |
| [#320](https://github.com/tscircuit/circuit-json/pull/320) | 🐙 Minor | ⭐⭐ | imrishabh18 | Allows pcb_group schema to accept optional outlines consistent with pcb_board and validates outline parsing via pcb_group anchor test |
| [#324](https://github.com/tscircuit/circuit-json/pull/324) | 🐙 Minor | ⭐⭐ | ShiboSoftwareDev | Adds an optional source_component_id to the simulation_switch element, allowing a simulation switch to be associated with a source_component for improved traceability. |
| [#316](https://github.com/tscircuit/circuit-json/pull/316) | 🐙 Minor | ⭐⭐ | ShiboSoftwareDev | Adds a new optional field simulation_voltage_probe_id to the SimulationTransientVoltageGraph interface for enhanced voltage graph simulation. |
| [#318](https://github.com/tscircuit/circuit-json/pull/318) | 🐙 Minor | ⭐⭐ | Asymtode712 | Adds a new error schema for invalid layer placement, including source_component_id, layer name, and descriptive message, along with tests to verify its functionality. |

<details>
<summary>🐌 Tiny Contributions (1)</summary>

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#323](https://github.com/tscircuit/circuit-json/pull/323) | 🐌 Tiny | seveibar | Removes stroke and fill related properties from the PCB courtyard rectangle definition and updates documentation and tests accordingly. |

</details>

### [tscircuit/props](https://github.com/tscircuit/props)

| PR # | Impact | Rating | Contributor | Description |
|------|--------|--------|-------------|-------------|
| [#460](https://github.com/tscircuit/props/pull/460) | 🐙 Minor | ⭐⭐ | seveibar | Adds new layout properties pcbOffsetX, pcbOffsetY, and renames positionMode to pcbPositionMode, while providing a deprecated alias for compatibility and updating related tests and documentation. |
| [#458](https://github.com/tscircuit/props/pull/458) | 🐙 Minor | ⭐⭐ | seveibar | Allows trace pcbPath definitions to mix coordinate points and pin selector strings, adds coverage to ensure selector strings are accepted when parsing trace props, and regenerates documentation after schema updates. |
| [#457](https://github.com/tscircuit/props/pull/457) | 🐙 Minor | ⭐⭐ | seveibar | Add a panel component definition with required width and height along with an optional noSolderMask flag and export the panel component with updated documentation. |
| [#455](https://github.com/tscircuit/props/pull/455) | 🐙 Minor | ⭐⭐ | seveibar | Adds a doubleSidedAssembly option to the board  component props and schema, allowing users to specify whether the board should be assembled on both sides. |
| [#452](https://github.com/tscircuit/props/pull/452) | 🐙 Minor | ⭐⭐ | seveibar | Adds optional simulator configuration properties to the switch component type definitions and regenerates the component documentation to describe the new simulator props. |
| [#459](https://github.com/tscircuit/props/pull/459) | 🐙 Minor | ⭐⭐ | MustafaMulla29 | Adds a snapshotsDir property to the PlatformConfig interface, allowing users to customize the output directory for snapshots generated by the tsci snapshot command. |

<details>
<summary>🐌 Tiny Contributions (1)</summary>

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#456](https://github.com/tscircuit/props/pull/456) | 🐌 Tiny | techmannih | Adds cornerRadius support for rectangular and rotated-rect SMT pads in the component library. |

</details>

### [tscircuit/footprinter](https://github.com/tscircuit/footprinter)

| PR # | Impact | Rating | Contributor | Description |
|------|--------|--------|-------------|-------------|
| [#387](https://github.com/tscircuit/footprinter/pull/387) | 🐙 Minor | ⭐⭐ | seveibar | Normalizes function name casing by converting parsed function tokens to lowercase before looking up footprinter handlers, and adds a regression test to ensure uppercase footprinter strings resolve correctly. |

### [tscircuit/core](https://github.com/tscircuit/core)

| PR # | Impact | Rating | Contributor | Description |
|------|--------|--------|-------------|-------------|
| [#1513](https://github.com/tscircuit/core/pull/1513) | 🐳 Major | ⭐⭐⭐ | MustafaMulla29 | Adds support for anchor_position and anchor_alignment properties in pcb_group, allowing for more precise positioning of PCB components based on specified anchor points. |
| [#1536](https://github.com/tscircuit/core/pull/1536) | 🐳 Major | ⭐⭐⭐ | imrishabh18 | Calculates the minimum flex container size based on the outline of the group if available, otherwise defaults to width and height. |
| [#1530](https://github.com/tscircuit/core/pull/1530) | 🐳 Major | ⭐⭐⭐ | imrishabh18 | Adds support for packing groups within specified width and height bounds in PCB layout. |
| [#1512](https://github.com/tscircuit/core/pull/1512) | 🐳 Major | ⭐⭐⭐ | imrishabh18 | Fixes the issue where relative components are not considered as obstacles in the packing calculation, ensuring accurate placement of components on the PCB layout. |
| [#1540](https://github.com/tscircuit/core/pull/1540) | 🐙 Minor | ⭐⭐ | seveibar | Moves the simple 3D snapshot matcher implementation into a dedicated extend-expect-3d-matcher module, simplifying the PCBschematic snapshot helper to only handle SVG snapshots and ensuring shared test fixture loads both circuit and 3D matcher extensions. |
| [#1527](https://github.com/tscircuit/core/pull/1527) | 🐙 Minor | ⭐⭐ | seveibar | Ensures that when the doNotPlace property is set to true for a chip, no CAD component is created, and verifies this behavior with a test. |
| [#1525](https://github.com/tscircuit/core/pull/1525) | 🐙 Minor | ⭐⭐ | seveibar | Add a regression test for pcbPath selectors that set a 0.5 mm trace thickness and capture the PCB snapshot for the thicker selector-driven manual route. |
| [#1520](https://github.com/tscircuit/core/pull/1520) | 🐙 Minor | ⭐⭐ | seveibar | Adds support for using string selectors in the pcbPath for traces, allowing for more flexible routing based on component pins. |
| [#1509](https://github.com/tscircuit/core/pull/1509) | 🐙 Minor | ⭐⭐ | seveibar | Reads the board components parsed thickness when calculating board thickness and updates cadmodel properties to expose zOffsetFromSurface, along with adding a test for cadmodel surface offset. |
| [#1535](https://github.com/tscircuit/core/pull/1535) | 🐙 Minor | ⭐⭐ | techmannih | Adds support for corner radius in rectangular surface mount pads, allowing for more customizable pad shapes. |
| [#1529](https://github.com/tscircuit/core/pull/1529) | 🐙 Minor | ⭐⭐ | techmannih | Fixes the rotation of SMT pads on the bottom layer to ensure correct rendering and placement. |
| [#1538](https://github.com/tscircuit/core/pull/1538) | 🐙 Minor | ⭐⭐ | MustafaMulla29 | Passes model_step_url when stepUrl is provided in the cadmodel, ensuring correct URL handling for CAD components. |
| [#1514](https://github.com/tscircuit/core/pull/1514) | 🐙 Minor | ⭐⭐ | imrishabh18 | Fixes incorrect board width and height calculations when an outline is provided, preventing auto-calculated dimensions from overwriting explicit values. |
| [#1515](https://github.com/tscircuit/core/pull/1515) | 🐙 Minor | ⭐⭐ | imrishabh18 | Fixes the selector usage for the PcbNoteDimension component to correctly reference the target element by adding a dot prefix to the input string. |
| [#1511](https://github.com/tscircuit/core/pull/1511) | 🐙 Minor | ⭐⭐ | imrishabh18 | Adds the PcbNoteText component for rendering text notes on PCB layouts with customizable properties such as font, size, and color. |
| [#1533](https://github.com/tscircuit/core/pull/1533) | 🐙 Minor | ⭐⭐ | ShiboSoftwareDev | Adds simulation capabilities for the switch component, allowing it to be used in SPICE analyses with new simulation properties and comprehensive testing. |
| [#1526](https://github.com/tscircuit/core/pull/1526) | 🐙 Minor | ⭐⭐ | Asymtode712 | Components can now only be placed on top or bottom layers. Attempting to place a component on inner layers (inner1, inner2, etc.) will emit a pcb_component_invalid_layer_error while still creating the component with top as a fallback to prevent cascading errors. |
| [#1510](https://github.com/tscircuit/core/pull/1510) | 🐙 Minor | ⭐⭐ | ArnavK-09 | Updated CadModel to use constructAssetUrl for better URL management, improved cache-busting logic for model URLs, and added tests to verify CadModel handles relative paths correctly. |

<details>
<summary>🐌 Tiny Contributions (2)</summary>

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#1537](https://github.com/tscircuit/core/pull/1537) | 🐌 Tiny | techmannih | Removes image upload and failure capture steps from the test workflow, simplifying the process. |
| [#1528](https://github.com/tscircuit/core/pull/1528) | 🐌 Tiny | Abse2001 | Fixes CAD rotation logic to ensure accurate alignment with PCB component rotation during packing and layer flips, including normalization and handling for bottom-layer flips, and adds tests to verify alignment. |

</details>

### [tscircuit/circuit-json-to-tscircuit](https://github.com/tscircuit/circuit-json-to-tscircuit)

| PR # | Impact | Rating | Contributor | Description |
|------|--------|--------|-------------|-------------|
| [#14](https://github.com/tscircuit/circuit-json-to-tscircuit/pull/14) | 🐙 Minor | ⭐⭐ | seveibar | Adds support for PCB cutouts, allowing rectangular, circular, and polygonal cutouts to be defined in the circuit JSON. |

<details>
<summary>🐌 Tiny Contributions (3)</summary>

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#15](https://github.com/tscircuit/circuit-json-to-tscircuit/pull/15) | 🐌 Tiny | seveibar | Converts pcb_note_ circuit JSON elements into their corresponding pcbnote JSX primitives during footprint generation and adds a regression test covering pcb note text, rect, path, line, and dimension mappings. |
| [#13](https://github.com/tscircuit/circuit-json-to-tscircuit/pull/13) | 🐌 Tiny | seveibar | Removes the lockfile and updates the core and circuit-json dependencies to newer versions. |
| [#16](https://github.com/tscircuit/circuit-json-to-tscircuit/pull/16) | 🐌 Tiny | imrishabh18 | Fixes npm release process and refactors the afterEach cleanup method in test fixtures to use a global deferred cleanup function. |

</details>

### [tscircuit/tscircuit-autorouter](https://github.com/tscircuit/tscircuit-autorouter)

| PR # | Impact | Rating | Contributor | Description |
|------|--------|--------|-------------|-------------|
| [#288](https://github.com/tscircuit/tscircuit-autorouter/pull/288) | 🐙 Minor | ⭐⭐ | seveibar | Adds an optional nominalTraceWidth field to SimpleRouteConnection |

### [tscircuit/contribution-tracker](https://github.com/tscircuit/contribution-tracker)

| PR # | Impact | Rating | Contributor | Description |
|------|--------|--------|-------------|-------------|
| [#228](https://github.com/tscircuit/contribution-tracker/pull/228) | 🐙 Minor | ⭐⭐ | Excellencedev | This implements the requested feature from issue 227 to automatically comment on PRs with their contribution level and a link to the contribution tracker. |

<details>
<summary>🐌 Tiny Contributions (1)</summary>

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#230](https://github.com/tscircuit/contribution-tracker/pull/230) | 🐌 Tiny | seveibar | Changes the maintainer designation for Abse2001 from maintainer1 to maintainer2 in the maintainers list. |

</details>

### [tscircuit/docs](https://github.com/tscircuit/docs)

| PR # | Impact | Rating | Contributor | Description |
|------|--------|--------|-------------|-------------|
| [#256](https://github.com/tscircuit/docs/pull/256) | 🐙 Minor | ⭐⭐ | Ayushjhawar8 | Fixes the table layout to be more responsive and visually consistent across all devices by adjusting CSS properties for better readability and alignment. |
| [#242](https://github.com/tscircuit/docs/pull/242) | 🐙 Minor | ⭐⭐ | Ayushjhawar8 | Adjusts the mobile sidebar width for better visibility on smaller screens. |

<details>
<summary>🐌 Tiny Contributions (15)</summary>

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#267](https://github.com/tscircuit/docs/pull/267) | 🐌 Tiny | seveibar | Adds documentation for the optional path argument in the tsci build command and the --all-images flag for outputting all renderable images. |
| [#265](https://github.com/tscircuit/docs/pull/265) | 🐌 Tiny | seveibar | Documents how to place components on the bottom copper layer in the layout properties guide |
| [#264](https://github.com/tscircuit/docs/pull/264) | 🐌 Tiny | seveibar | Switches the manual pcbPath example back to simplified selectors for fromto and aligns the pcbPath array entries with simplified selector syntax. |
| [#263](https://github.com/tscircuit/docs/pull/263) | 🐌 Tiny | seveibar | Clarifies the usage of the board  layers prop by documenting the common numeric value and advanced array customization, and updates the example to use layers4. |
| [#261](https://github.com/tscircuit/docs/pull/261) | 🐌 Tiny | seveibar | Clarifies the documentation for the symbol  element by replacing the term Normal Component with user-facing guidance about customizing symbols via the symbol prop. |
| [#255](https://github.com/tscircuit/docs/pull/255) | 🐌 Tiny | seveibar | Adds tscircuit.com as a downstream target of tscircuiteval in the package dependency diagram. |
| [#253](https://github.com/tscircuit/docs/pull/253) | 🐌 Tiny | seveibar | Clarifies that includeBoardFiles accepts file paths or glob strings and streamlines its use cases, updating the example glob pattern to modules.board.tsx and noting that glob resolution is relative to the project root, matching mainEntrypoint. |
| [#252](https://github.com/tscircuit/docs/pull/252) | 🐌 Tiny | seveibar | Documents the behavior of the obstructsWithinBounds prop for chip placement and provides an example of its usage in a CircuitPreview. |
| [#248](https://github.com/tscircuit/docs/pull/248) | 🐌 Tiny | seveibar | Removes the redundant overview heading from the group  element documentation, drops the unused key prop from the props table, and updates the LED footprint example to 0603. |
| [#249](https://github.com/tscircuit/docs/pull/249) | 🐌 Tiny | seveibar | Decrease markdown table font sizing to improve fit within content areas |
| [#246](https://github.com/tscircuit/docs/pull/246) | 🐌 Tiny | seveibar | Adds a props table covering core group  options and documents grid and flex specific layout props with CircuitPreview examples. |
| [#244](https://github.com/tscircuit/docs/pull/244) | 🐌 Tiny | MustafaMulla29 | Adds documentation for the pill-shaped hole and its rotation feature in the hole  element. |
| [#259](https://github.com/tscircuit/docs/pull/259) | 🐌 Tiny | imrishabh18 | Adds documentation for new PCB note elements including lines, paths, rectangles, and text annotations. |
| [#258](https://github.com/tscircuit/docs/pull/258) | 🐌 Tiny | imrishabh18 | Adds documentation for the pcbnotedimension  element, which allows users to add dimension annotations to PCB designs. |
| [#262](https://github.com/tscircuit/docs/pull/262) | 🐌 Tiny | Ayushjhawar8 | Fixes white space issues and improves the formatting of code elements within markdown tables. |

</details>

### [tscircuit/common](https://github.com/tscircuit/common)


<details>
<summary>🐌 Tiny Contributions (2)</summary>

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#35](https://github.com/tscircuit/common/pull/35) | 🐌 Tiny | seveibar | Adds the doNotPlace attribute to common boards to prevent placement of components in specified areas. |
| [#34](https://github.com/tscircuit/common/pull/34) | 🐌 Tiny | Abse2001 | Adds a new pcbGap property to board properties and repositions the Xiao RP2040 pads to the bottom side of the board for accurate alignment, along with updates to SVG and 3D snapshots to reflect these changes. |

</details>

### [tscircuit/jscad-electronics](https://github.com/tscircuit/jscad-electronics)


<details>
<summary>🐌 Tiny Contributions (2)</summary>

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#142](https://github.com/tscircuit/jscad-electronics/pull/142) | 🐌 Tiny | techmannih | Adds support for the QFN32 CAD model in the Footprinter3D component, including optional thermal pad handling. |
| [#148](https://github.com/tscircuit/jscad-electronics/pull/148) | 🐌 Tiny | Asymtode712 | Adds support for the SMA model by implementing a new component with a three-part lead structure and improved rendering functionality. |

</details>

### [tscircuit/3d-viewer](https://github.com/tscircuit/3d-viewer)

| PR # | Impact | Rating | Contributor | Description |
|------|--------|--------|-------------|-------------|
| [#527](https://github.com/tscircuit/3d-viewer/pull/527) | 🐳 Major | ⭐⭐⭐ | MustafaMulla29 | Adds functionality to configure the visibility of different layers and objects in the 3D viewer, allowing users to toggle the display of specific components such as board body, copper layers, and silkscreens. |
| [#528](https://github.com/tscircuit/3d-viewer/pull/528) | 🐳 Major | ⭐⭐⭐ | Abse2001 | Fixes the geometry processing for non-plated holes to ensure they fully cut through plated holes and reduces the thickness of plated pads for better alignment. |
| [#525](https://github.com/tscircuit/3d-viewer/pull/525) | 🐳 Major | ⭐⭐⭐ | Abse2001 | Add hole offset support for plated holes with rectangular pads, allowing custom hole offsets for improved alignment and realism in 3D and PCB geometries. |
| [#522](https://github.com/tscircuit/3d-viewer/pull/522) | 🐙 Minor | ⭐⭐ | MustafaMulla29 | Adds support for pill and rotated pill hole shapes in PCB design, allowing for more versatile hole configurations. |
| [#526](https://github.com/tscircuit/3d-viewer/pull/526) | 🐙 Minor | ⭐⭐ | Abse2001 | Fixes a bug where hole_offset_x or hole_offset_y being undefined caused the board rendering to fail for plated holes. Defaults offsets to 0 when not provided to ensure stable geometry generation for circular and pill-shaped plated holes. |

### [tscircuit/circuit-json-to-step](https://github.com/tscircuit/circuit-json-to-step)

| PR # | Impact | Rating | Contributor | Description |
|------|--------|--------|-------------|-------------|
| [#14](https://github.com/tscircuit/circuit-json-to-step/pull/14) | 🐳 Major | ⭐⭐⭐ | MustafaMulla29 | ref https:github.comtscircuittscircuitissues1076 |

### [tscircuit/circuit-json-to-gltf](https://github.com/tscircuit/circuit-json-to-gltf)

| PR # | Impact | Rating | Contributor | Description |
|------|--------|--------|-------------|-------------|
| [#53](https://github.com/tscircuit/circuit-json-to-gltf/pull/53) | 🐙 Minor | ⭐⭐ | MustafaMulla29 | Add support for pill and rotated pill hole shapes in the PCB geometry calculations, enhancing the rendering of these hole types in 3D. |

### [tscircuit/math-utils](https://github.com/tscircuit/math-utils)

| PR # | Impact | Rating | Contributor | Description |
|------|--------|--------|-------------|-------------|
| [#26](https://github.com/tscircuit/math-utils/pull/26) | 🐙 Minor | ⭐⭐ | imrishabh18 | Calculates the bounding rectangle from an array of points and returns the bounds object or null if the array is empty |
| [#25](https://github.com/tscircuit/math-utils/pull/25) | 🐙 Minor | ⭐⭐ | Abse2001 | Adds a normalizeDegrees helper that cleanly wraps any angle into the 0, 360) range using a modulo-based formula, ensuring stable rotation calculations and avoiding negative or -0 results. |

### [tscircuit/calculate-packing](https://github.com/tscircuit/calculate-packing)

| PR # | Impact | Rating | Contributor | Description |
|------|--------|--------|-------------|-------------|
| [#60](https://github.com/tscircuit/calculate-packing/pull/60) | 🐙 Minor | ⭐⭐ | imrishabh18 | Fixes issue where component placement did not respect defined bounds, leading to potential layout errors. |

### [tscircuit/circuit-json-to-kicad](https://github.com/tscircuit/circuit-json-to-kicad)

| PR # | Impact | Rating | Contributor | Description |
|------|--------|--------|-------------|-------------|
| [#28](https://github.com/tscircuit/circuit-json-to-kicad/pull/28) | 🐙 Minor | ⭐⭐ | imrishabh18 | Adds dynamic sizing of schematic paper size based on content dimensions, improving layout for various schematic sizes. |

### [tscircuit/circuit-json-to-spice](https://github.com/tscircuit/circuit-json-to-spice)

| PR # | Impact | Rating | Contributor | Description |
|------|--------|--------|-------------|-------------|
| [#15](https://github.com/tscircuit/circuit-json-to-spice/pull/15) | 🐙 Minor | ⭐⭐ | ShiboSoftwareDev | Links simulation_switch elements to their corresponding source_component using source_component_id and simplifies the logic for finding the associated simulation switch. |

### [tscircuit/spicey](https://github.com/tscircuit/spicey)

| PR # | Impact | Rating | Contributor | Description |
|------|--------|--------|-------------|-------------|
| [#11](https://github.com/tscircuit/spicey/pull/11) | 🐙 Minor | ⭐⭐ | ShiboSoftwareDev | Adds support for Vt (threshold voltage) and Vh (hysteresis voltage) parameters in the .MODEL definition for voltage-controlled switches, enabling accurate Von and Voff calculations in transient simulations. |
| [#10](https://github.com/tscircuit/spicey/pull/10) | 🐙 Minor | ⭐⭐ | ShiboSoftwareDev | Changes graph titles to use V(node) notation instead of previous naming conventions. |

### [tscircuit/issue-roulette](https://github.com/tscircuit/issue-roulette)

| PR # | Impact | Rating | Contributor | Description |
|------|--------|--------|-------------|-------------|
| [#26](https://github.com/tscircuit/issue-roulette/pull/26) | 🐙 Minor | ⭐⭐ | Heinrich-XIAO | Removes the limit on the number of issues sent, which previously restricted the functionality of the issue roulette feature. |

<details>
<summary>🐌 Tiny Contributions (2)</summary>

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#28](https://github.com/tscircuit/issue-roulette/pull/28) | 🐌 Tiny | Heinrich-XIAO | Fixes the issue of including archived repositories in the issue fetching process by filtering them out before fetching issues. |
| [#25](https://github.com/tscircuit/issue-roulette/pull/25) | 🐌 Tiny | Heinrich-XIAO | Fetches all issues from all repositories in the tscircuit organization instead of limiting to the first 100 repositories and issues. |

</details>

## Changes by Contributor

### [tscircuitbot](https://github.com/tscircuitbot)


<details>
<summary>🐌 Tiny Contributions (310)</summary>

| PR # | Impact | Description |
|------|--------|-------------|
| [#415](https://github.com/tscircuit/pcb-viewer/pull/415) | 🐌 Tiny | Automated package update |
| [#413](https://github.com/tscircuit/pcb-viewer/pull/413) | 🐌 Tiny | Automated package update |
| [#411](https://github.com/tscircuit/pcb-viewer/pull/411) | 🐌 Tiny | Automated package update |
| [#407](https://github.com/tscircuit/pcb-viewer/pull/407) | 🐌 Tiny | Automated package update |
| [#405](https://github.com/tscircuit/pcb-viewer/pull/405) | 🐌 Tiny | Automated package update |
| [#403](https://github.com/tscircuit/pcb-viewer/pull/403) | 🐌 Tiny | Automated package update |
| [#1120](https://github.com/tscircuit/tscircuit/pull/1120) | 🐌 Tiny | Updates the package version from 0.0.795 to 0.0.796 in package.json |
| [#1119](https://github.com/tscircuit/tscircuit/pull/1119) | 🐌 Tiny | Updates the version of the tscircuitcli, tscircuitcore, and tscircuiteval packages in package.json to their latest versions. |
| [#1118](https://github.com/tscircuit/tscircuit/pull/1118) | 🐌 Tiny | Automated package update |
| [#1117](https://github.com/tscircuit/tscircuit/pull/1117) | 🐌 Tiny | Automated package update |
| [#1116](https://github.com/tscircuit/tscircuit/pull/1116) | 🐌 Tiny | Automated package update |
| [#1115](https://github.com/tscircuit/tscircuit/pull/1115) | 🐌 Tiny | Automated package update |
| [#1114](https://github.com/tscircuit/tscircuit/pull/1114) | 🐌 Tiny | Automated package update |
| [#1113](https://github.com/tscircuit/tscircuit/pull/1113) | 🐌 Tiny | Automated package update |
| [#1112](https://github.com/tscircuit/tscircuit/pull/1112) | 🐌 Tiny | Updates the package version from 0.0.791 to 0.0.792 in package.json |
| [#1111](https://github.com/tscircuit/tscircuit/pull/1111) | 🐌 Tiny | Updates the tscircuitcli package to version 0.1.359 in the package.json file |
| [#1110](https://github.com/tscircuit/tscircuit/pull/1110) | 🐌 Tiny | Automated package update |
| [#1109](https://github.com/tscircuit/tscircuit/pull/1109) | 🐌 Tiny | Updates the tscircuitcli package to version 0.1.358 in the package.json file. |
| [#1108](https://github.com/tscircuit/tscircuit/pull/1108) | 🐌 Tiny | Automated package update |
| [#1107](https://github.com/tscircuit/tscircuit/pull/1107) | 🐌 Tiny | Automated package update |
| [#1105](https://github.com/tscircuit/tscircuit/pull/1105) | 🐌 Tiny | Updates the tscircuitcli package to version 0.1.356 in the package.json file |
| [#1104](https://github.com/tscircuit/tscircuit/pull/1104) | 🐌 Tiny | Updates the package version from 0.0.787 to 0.0.788 in package.json |
| [#1103](https://github.com/tscircuit/tscircuit/pull/1103) | 🐌 Tiny | Updates the tscircuitcli package from version 0.1.354 to 0.1.355 and the tscircuitrunframe package from version 0.0.1122 to 0.0.1123 in package.json |
| [#1102](https://github.com/tscircuit/tscircuit/pull/1102) | 🐌 Tiny | Updates the package version from 0.0.786 to 0.0.787 in package.json |
| [#1101](https://github.com/tscircuit/tscircuit/pull/1101) | 🐌 Tiny | Automated package update |
| [#1100](https://github.com/tscircuit/tscircuit/pull/1100) | 🐌 Tiny | Updates the package version from 0.0.785 to 0.0.786 in package.json |
| [#1099](https://github.com/tscircuit/tscircuit/pull/1099) | 🐌 Tiny | Updates the tscircuitcli and other related package versions in package.json |
| [#1098](https://github.com/tscircuit/tscircuit/pull/1098) | 🐌 Tiny | Automated package update |
| [#1097](https://github.com/tscircuit/tscircuit/pull/1097) | 🐌 Tiny | Automated package update |
| [#1095](https://github.com/tscircuit/tscircuit/pull/1095) | 🐌 Tiny | Automated package update |
| [#1094](https://github.com/tscircuit/tscircuit/pull/1094) | 🐌 Tiny | Automated package update |
| [#1093](https://github.com/tscircuit/tscircuit/pull/1093) | 🐌 Tiny | Automated package update |
| [#1092](https://github.com/tscircuit/tscircuit/pull/1092) | 🐌 Tiny | Automated package update |
| [#1091](https://github.com/tscircuit/tscircuit/pull/1091) | 🐌 Tiny | Updates the package version from 0.0.781 to 0.0.782 in package.json |
| [#1090](https://github.com/tscircuit/tscircuit/pull/1090) | 🐌 Tiny | Updates the version of several dependencies in the package.json file. |
| [#1085](https://github.com/tscircuit/tscircuit/pull/1085) | 🐌 Tiny | Automated package update |
| [#1084](https://github.com/tscircuit/tscircuit/pull/1084) | 🐌 Tiny | Updates the tscircuitcli package from version 0.1.347 to 0.1.348 and the tscircuitrunframe package from version 0.0.1116 to 0.0.1117 in package.json |
| [#1083](https://github.com/tscircuit/tscircuit/pull/1083) | 🐌 Tiny | Automated package update |
| [#1082](https://github.com/tscircuit/tscircuit/pull/1082) | 🐌 Tiny | Updates the tscircuitcli package version from 0.1.346 to 0.1.347 in package.json |
| [#1079](https://github.com/tscircuit/tscircuit/pull/1079) | 🐌 Tiny | Automated package update |
| [#1078](https://github.com/tscircuit/tscircuit/pull/1078) | 🐌 Tiny | Automated package update |
| [#1073](https://github.com/tscircuit/tscircuit/pull/1073) | 🐌 Tiny | Automated package update |
| [#1072](https://github.com/tscircuit/tscircuit/pull/1072) | 🐌 Tiny | Updates the tscircuitcli package from version 0.1.344 to 0.1.345 and the tscircuitrunframe package from version 0.0.1114 to 0.0.1115 in package.json |
| [#1071](https://github.com/tscircuit/tscircuit/pull/1071) | 🐌 Tiny | Automated package update |
| [#1069](https://github.com/tscircuit/tscircuit/pull/1069) | 🐌 Tiny | Automated package update |
| [#1068](https://github.com/tscircuit/tscircuit/pull/1068) | 🐌 Tiny | Updates the versions of the tscircuitcli, tscircuitcore, and tscircuiteval packages in package.json |
| [#1067](https://github.com/tscircuit/tscircuit/pull/1067) | 🐌 Tiny | Automated package update |
| [#1066](https://github.com/tscircuit/tscircuit/pull/1066) | 🐌 Tiny | Automated package update |
| [#1064](https://github.com/tscircuit/tscircuit/pull/1064) | 🐌 Tiny | Updates the tscircuitcli package from version 0.1.341 to 0.1.342 and the tscircuitrunframe package from version 0.0.1111 to 0.0.1112 in package.json |
| [#1063](https://github.com/tscircuit/tscircuit/pull/1063) | 🐌 Tiny | Updates the package version from 0.0.772 to 0.0.773 in package.json |
| [#1062](https://github.com/tscircuit/tscircuit/pull/1062) | 🐌 Tiny | Updates the tscircuitcli and tscircuiteval packages to their latest versions. |
| [#1061](https://github.com/tscircuit/tscircuit/pull/1061) | 🐌 Tiny | Updates the package version from 0.0.771 to 0.0.772 in package.json |
| [#1060](https://github.com/tscircuit/tscircuit/pull/1060) | 🐌 Tiny | Updates the tscircuitcli package from version 0.1.339 to 0.1.340 and the tscircuitrunframe package from version 0.0.1110 to 0.0.1111 in package.json |
| [#1059](https://github.com/tscircuit/tscircuit/pull/1059) | 🐌 Tiny | Automated package update |
| [#1058](https://github.com/tscircuit/tscircuit/pull/1058) | 🐌 Tiny | Updates the tscircuitcli package to version 0.1.339 in the package.json file |
| [#1057](https://github.com/tscircuit/tscircuit/pull/1057) | 🐌 Tiny | Automated package update |
| [#1056](https://github.com/tscircuit/tscircuit/pull/1056) | 🐌 Tiny | Updates the tscircuitcli package from version 0.1.337 to 0.1.338 and the tscircuitrunframe package from version 0.0.1109 to 0.0.1110 in package.json |
| [#1055](https://github.com/tscircuit/tscircuit/pull/1055) | 🐌 Tiny | Automated package update |
| [#1054](https://github.com/tscircuit/tscircuit/pull/1054) | 🐌 Tiny | Updates the tscircuitcli package from version 0.1.336 to 0.1.337 and the tscircuitrunframe package from version 0.0.1108 to 0.0.1109 in package.json |
| [#1053](https://github.com/tscircuit/tscircuit/pull/1053) | 🐌 Tiny | Automated package update |
| [#1052](https://github.com/tscircuit/tscircuit/pull/1052) | 🐌 Tiny | Updates the tscircuitcli and other related package versions in package.json |
| [#1051](https://github.com/tscircuit/tscircuit/pull/1051) | 🐌 Tiny | Automated package update |
| [#1050](https://github.com/tscircuit/tscircuit/pull/1050) | 🐌 Tiny | Automated package update |
| [#1049](https://github.com/tscircuit/tscircuit/pull/1049) | 🐌 Tiny | Updates the package version from 0.0.765 to 0.0.766 in package.json |
| [#1048](https://github.com/tscircuit/tscircuit/pull/1048) | 🐌 Tiny | Updates the tscircuitcli package from version 0.1.333 to 0.1.334 and the tscircuitrunframe package from version 0.0.1103 to 0.0.1104 in package.json |
| [#1047](https://github.com/tscircuit/tscircuit/pull/1047) | 🐌 Tiny | Automated package update |
| [#1046](https://github.com/tscircuit/tscircuit/pull/1046) | 🐌 Tiny | Automated package update |
| [#1045](https://github.com/tscircuit/tscircuit/pull/1045) | 🐌 Tiny | Automated package update |
| [#1044](https://github.com/tscircuit/tscircuit/pull/1044) | 🐌 Tiny | Updates the tscircuitcli package from version 0.1.331 to 0.1.332 and the tscircuitrunframe package from version 0.0.1101 to 0.0.1102 in package.json |
| [#1043](https://github.com/tscircuit/tscircuit/pull/1043) | 🐌 Tiny | Automated package update |
| [#1042](https://github.com/tscircuit/tscircuit/pull/1042) | 🐌 Tiny | Updates the tscircuitcli package from version 0.1.330 to 0.1.331 and the tscircuitrunframe package from version 0.0.1100 to 0.0.1101 in package.json |
| [#1041](https://github.com/tscircuit/tscircuit/pull/1041) | 🐌 Tiny | Automated package update |
| [#1040](https://github.com/tscircuit/tscircuit/pull/1040) | 🐌 Tiny | Updates the tscircuitcli package from version 0.1.329 to 0.1.330 and the tscircuitrunframe package from version 0.0.1099 to 0.0.1100 in package.json |
| [#1038](https://github.com/tscircuit/tscircuit/pull/1038) | 🐌 Tiny | Automated package update |
| [#1037](https://github.com/tscircuit/tscircuit/pull/1037) | 🐌 Tiny | Updates the tscircuitcli package from version 0.1.328 to 0.1.329 and the tscircuitrunframe package from version 0.0.1098 to 0.0.1099 in package.json |
| [#1036](https://github.com/tscircuit/tscircuit/pull/1036) | 🐌 Tiny | Updates the package version from 0.0.759 to 0.0.760 in package.json |
| [#1035](https://github.com/tscircuit/tscircuit/pull/1035) | 🐌 Tiny | Automated package update |
| [#1034](https://github.com/tscircuit/tscircuit/pull/1034) | 🐌 Tiny | Automated package version bump from 0.0.758 to 0.0.759 |
| [#1032](https://github.com/tscircuit/tscircuit/pull/1032) | 🐌 Tiny | Updates the package version from 0.0.757 to 0.0.758 in package.json |
| [#1031](https://github.com/tscircuit/tscircuit/pull/1031) | 🐌 Tiny | Updates the version of tscircuitcli, tscircuitcore, and tscircuiteval packages in package.json |
| [#1030](https://github.com/tscircuit/tscircuit/pull/1030) | 🐌 Tiny | Automated package update |
| [#1029](https://github.com/tscircuit/tscircuit/pull/1029) | 🐌 Tiny | Updates the version of several dependencies in the package.json file. |
| [#1028](https://github.com/tscircuit/tscircuit/pull/1028) | 🐌 Tiny | Automated package update |
| [#1027](https://github.com/tscircuit/tscircuit/pull/1027) | 🐌 Tiny | Automated package update |
| [#1026](https://github.com/tscircuit/tscircuit/pull/1026) | 🐌 Tiny | Automated package update |
| [#1025](https://github.com/tscircuit/tscircuit/pull/1025) | 🐌 Tiny | Updates the tscircuitcli package from version 0.1.323 to 0.1.324 and the tscircuitrunframe package from version 0.0.1094 to 0.0.1095. |
| [#1024](https://github.com/tscircuit/tscircuit/pull/1024) | 🐌 Tiny | Automated package update |
| [#1023](https://github.com/tscircuit/tscircuit/pull/1023) | 🐌 Tiny | Automated package update |
| [#1021](https://github.com/tscircuit/tscircuit/pull/1021) | 🐌 Tiny | Updates the version of tscircuitcli and tscircuitcore packages in package.json |
| [#1816](https://github.com/tscircuit/tscircuit.com/pull/1816) | 🐌 Tiny | Automated package update |
| [#1815](https://github.com/tscircuit/tscircuit.com/pull/1815) | 🐌 Tiny | Automated package update |
| [#1814](https://github.com/tscircuit/tscircuit.com/pull/1814) | 🐌 Tiny | Automated package update for tscircuiteval from version 0.0.407 to 0.0.408 |
| [#1813](https://github.com/tscircuit/tscircuit.com/pull/1813) | 🐌 Tiny | Updates the tscircuiteval package to version 0.0.407 in the package.json file. |
| [#1804](https://github.com/tscircuit/tscircuit.com/pull/1804) | 🐌 Tiny | Automated package update |
| [#1802](https://github.com/tscircuit/tscircuit.com/pull/1802) | 🐌 Tiny | Automated package update |
| [#1801](https://github.com/tscircuit/tscircuit.com/pull/1801) | 🐌 Tiny | Updates the tscircuiteval package from version 0.0.402 to 0.0.403 |
| [#1800](https://github.com/tscircuit/tscircuit.com/pull/1800) | 🐌 Tiny | Automated package update |
| [#1799](https://github.com/tscircuit/tscircuit.com/pull/1799) | 🐌 Tiny | Updates the tscircuiteval package from version 0.0.400 to 0.0.401 in package.json |
| [#1798](https://github.com/tscircuit/tscircuit.com/pull/1798) | 🐌 Tiny | Updates the tscircuiteval package from version 0.0.399 to 0.0.400 |
| [#1797](https://github.com/tscircuit/tscircuit.com/pull/1797) | 🐌 Tiny | Updates the tscircuiteval package from version 0.0.325 to 0.0.399 |
| [#1333](https://github.com/tscircuit/eval/pull/1333) | 🐌 Tiny | Automated package update |
| [#1332](https://github.com/tscircuit/eval/pull/1332) | 🐌 Tiny | Updates the version of the tscircuitcore package from 0.0.803 to 0.0.804 in package.json |
| [#1330](https://github.com/tscircuit/eval/pull/1330) | 🐌 Tiny | Automated package update |
| [#1329](https://github.com/tscircuit/eval/pull/1329) | 🐌 Tiny | Automated package update |
| [#1327](https://github.com/tscircuit/eval/pull/1327) | 🐌 Tiny | Automated package update |
| [#1326](https://github.com/tscircuit/eval/pull/1326) | 🐌 Tiny | Automated package update |
| [#1324](https://github.com/tscircuit/eval/pull/1324) | 🐌 Tiny | Automated package update |
| [#1323](https://github.com/tscircuit/eval/pull/1323) | 🐌 Tiny | Automated package update |
| [#1319](https://github.com/tscircuit/eval/pull/1319) | 🐌 Tiny | Automated package update |
| [#1316](https://github.com/tscircuit/eval/pull/1316) | 🐌 Tiny | Automated package update |
| [#1315](https://github.com/tscircuit/eval/pull/1315) | 🐌 Tiny | Automated package update |
| [#1313](https://github.com/tscircuit/eval/pull/1313) | 🐌 Tiny | Automated package update |
| [#1312](https://github.com/tscircuit/eval/pull/1312) | 🐌 Tiny | Updates the version of the tscircuitcore package from 0.0.797 to 0.0.798 in package.json |
| [#1310](https://github.com/tscircuit/eval/pull/1310) | 🐌 Tiny | Automated package update |
| [#1309](https://github.com/tscircuit/eval/pull/1309) | 🐌 Tiny | Automated package update |
| [#1303](https://github.com/tscircuit/eval/pull/1303) | 🐌 Tiny | Automated package update |
| [#1299](https://github.com/tscircuit/eval/pull/1299) | 🐌 Tiny | Automated package update |
| [#1298](https://github.com/tscircuit/eval/pull/1298) | 🐌 Tiny | Updates the version of the tscircuitcore package from 0.0.792 to 0.0.793 in package.json |
| [#1296](https://github.com/tscircuit/eval/pull/1296) | 🐌 Tiny | Automated package update |
| [#1294](https://github.com/tscircuit/eval/pull/1294) | 🐌 Tiny | Automated package update |
| [#1291](https://github.com/tscircuit/eval/pull/1291) | 🐌 Tiny | Automated package update |
| [#1289](https://github.com/tscircuit/eval/pull/1289) | 🐌 Tiny | Automated package update |
| [#1287](https://github.com/tscircuit/eval/pull/1287) | 🐌 Tiny | Automated package update |
| [#1283](https://github.com/tscircuit/eval/pull/1283) | 🐌 Tiny | Automated package update |
| [#1280](https://github.com/tscircuit/eval/pull/1280) | 🐌 Tiny | Automated package update |
| [#1279](https://github.com/tscircuit/eval/pull/1279) | 🐌 Tiny | Updates the version of the tscircuitcore package from 0.0.791 to 0.0.792 in package.json |
| [#1277](https://github.com/tscircuit/eval/pull/1277) | 🐌 Tiny | Automated package update |
| [#1276](https://github.com/tscircuit/eval/pull/1276) | 🐌 Tiny | Automated package update |
| [#1274](https://github.com/tscircuit/eval/pull/1274) | 🐌 Tiny | Automated package update |
| [#1273](https://github.com/tscircuit/eval/pull/1273) | 🐌 Tiny | Automated package update |
| [#1271](https://github.com/tscircuit/eval/pull/1271) | 🐌 Tiny | Automated package update |
| [#1270](https://github.com/tscircuit/eval/pull/1270) | 🐌 Tiny | Automated package update |
| [#1508](https://github.com/tscircuit/runframe/pull/1508) | 🐌 Tiny | Automated package update to version 0.0.1128 |
| [#1507](https://github.com/tscircuit/runframe/pull/1507) | 🐌 Tiny | Updates the tscircuiteval package from version 0.0.409 to 0.0.410 |
| [#1506](https://github.com/tscircuit/runframe/pull/1506) | 🐌 Tiny | Automated package update |
| [#1505](https://github.com/tscircuit/runframe/pull/1505) | 🐌 Tiny | Automated package update |
| [#1504](https://github.com/tscircuit/runframe/pull/1504) | 🐌 Tiny | Automated package update |
| [#1503](https://github.com/tscircuit/runframe/pull/1503) | 🐌 Tiny | Updates the tscircuiteval package from version 0.0.407 to 0.0.408 |
| [#1502](https://github.com/tscircuit/runframe/pull/1502) | 🐌 Tiny | Automated package update |
| [#1501](https://github.com/tscircuit/runframe/pull/1501) | 🐌 Tiny | Updates the tscircuiteval package to version 0.0.407 |
| [#1499](https://github.com/tscircuit/runframe/pull/1499) | 🐌 Tiny | Automated package update |
| [#1498](https://github.com/tscircuit/runframe/pull/1498) | 🐌 Tiny | Updates the tscircuit3d-viewer package to version 0.0.416 in package.json |
| [#1497](https://github.com/tscircuit/runframe/pull/1497) | 🐌 Tiny | Automated package update |
| [#1496](https://github.com/tscircuit/runframe/pull/1496) | 🐌 Tiny | Updates the tscircuit3d-viewer package to version 0.0.415 in package.json |
| [#1495](https://github.com/tscircuit/runframe/pull/1495) | 🐌 Tiny | Automated package update |
| [#1494](https://github.com/tscircuit/runframe/pull/1494) | 🐌 Tiny | Updates the tscircuiteval package from version 0.0.404 to 0.0.406 in the package.json file. |
| [#1493](https://github.com/tscircuit/runframe/pull/1493) | 🐌 Tiny | Updates the package version from 0.0.1120 to 0.0.1121 in package.json |
| [#1492](https://github.com/tscircuit/runframe/pull/1492) | 🐌 Tiny | Updates the tscircuitpcb-viewer package from version 1.11.233 to 1.11.234 |
| [#1491](https://github.com/tscircuit/runframe/pull/1491) | 🐌 Tiny | Automated package update to version 0.0.1120 |
| [#1490](https://github.com/tscircuit/runframe/pull/1490) | 🐌 Tiny | Automated package update |
| [#1489](https://github.com/tscircuit/runframe/pull/1489) | 🐌 Tiny | Updates the package version from 0.0.1118 to 0.0.1119 in package.json |
| [#1488](https://github.com/tscircuit/runframe/pull/1488) | 🐌 Tiny | Updates the tscircuiteval package from version 0.0.402 to 0.0.403 in the package.json file. |
| [#1487](https://github.com/tscircuit/runframe/pull/1487) | 🐌 Tiny | Updates the package version from 0.0.1117 to 0.0.1118 in package.json |
| [#1484](https://github.com/tscircuit/runframe/pull/1484) | 🐌 Tiny | Updates the package version from 0.0.1116 to 0.0.1117 in package.json |
| [#1483](https://github.com/tscircuit/runframe/pull/1483) | 🐌 Tiny | Updates the tscircuitpcb-viewer package from version 1.11.232 to 1.11.233 |
| [#1482](https://github.com/tscircuit/runframe/pull/1482) | 🐌 Tiny | Automated package update to version 0.0.1116 |
| [#1481](https://github.com/tscircuit/runframe/pull/1481) | 🐌 Tiny | Updates the tscircuiteval package to version 0.0.402 in the package.json file. |
| [#1480](https://github.com/tscircuit/runframe/pull/1480) | 🐌 Tiny | Updates the package version from 0.0.1114 to 0.0.1115 in package.json |
| [#1479](https://github.com/tscircuit/runframe/pull/1479) | 🐌 Tiny | Updates the package version from 0.0.1113 to 0.0.1114 in package.json |
| [#1478](https://github.com/tscircuit/runframe/pull/1478) | 🐌 Tiny | Updates the tscircuiteval package to version 0.0.401 in the package.json file. |
| [#1477](https://github.com/tscircuit/runframe/pull/1477) | 🐌 Tiny | Automated package update |
| [#1476](https://github.com/tscircuit/runframe/pull/1476) | 🐌 Tiny | Updates the tscircuiteval package to version 0.0.400 in the package.json file. |
| [#1475](https://github.com/tscircuit/runframe/pull/1475) | 🐌 Tiny | Automated package update |
| [#1474](https://github.com/tscircuit/runframe/pull/1474) | 🐌 Tiny | Updates the tscircuiteval package to version 0.0.399 in the package.json file. |
| [#1473](https://github.com/tscircuit/runframe/pull/1473) | 🐌 Tiny | Automated package update |
| [#1472](https://github.com/tscircuit/runframe/pull/1472) | 🐌 Tiny | Updates the tscircuitpcb-viewer package to version 1.11.232 in package.json |
| [#1471](https://github.com/tscircuit/runframe/pull/1471) | 🐌 Tiny | Automated package update |
| [#1469](https://github.com/tscircuit/runframe/pull/1469) | 🐌 Tiny | Automated package update to version 0.0.1109 |
| [#1467](https://github.com/tscircuit/runframe/pull/1467) | 🐌 Tiny | Automated package update to version 0.0.1108 |
| [#1466](https://github.com/tscircuit/runframe/pull/1466) | 🐌 Tiny | Updates the tscircuiteval package to version 0.0.398 in the package.json file. |
| [#1465](https://github.com/tscircuit/runframe/pull/1465) | 🐌 Tiny | Automated package update |
| [#1464](https://github.com/tscircuit/runframe/pull/1464) | 🐌 Tiny | Updates the tscircuit3d-viewer package to version 0.0.414 in package.json |
| [#1463](https://github.com/tscircuit/runframe/pull/1463) | 🐌 Tiny | Updates the package version from 0.0.1105 to 0.0.1106 in package.json |
| [#1462](https://github.com/tscircuit/runframe/pull/1462) | 🐌 Tiny | Updates the tscircuiteval package to version 0.0.397 in the package.json file. |
| [#1461](https://github.com/tscircuit/runframe/pull/1461) | 🐌 Tiny | Updates the package version from 0.0.1104 to 0.0.1105 in package.json |
| [#1459](https://github.com/tscircuit/runframe/pull/1459) | 🐌 Tiny | Updates the tscircuiteval package to version 0.0.396 |
| [#1458](https://github.com/tscircuit/runframe/pull/1458) | 🐌 Tiny | Automated package update to version 0.0.1104 |
| [#1457](https://github.com/tscircuit/runframe/pull/1457) | 🐌 Tiny | Updates the tscircuitpcb-viewer package from version 1.11.230 to 1.11.231 |
| [#1456](https://github.com/tscircuit/runframe/pull/1456) | 🐌 Tiny | Automated package update |
| [#1455](https://github.com/tscircuit/runframe/pull/1455) | 🐌 Tiny | Updates the tscircuiteval package to version 0.0.395 |
| [#1454](https://github.com/tscircuit/runframe/pull/1454) | 🐌 Tiny | Automated package update to version 0.0.1102 |
| [#1453](https://github.com/tscircuit/runframe/pull/1453) | 🐌 Tiny | Updates the tscircuitpcb-viewer package from version 1.11.229 to 1.11.230 |
| [#1452](https://github.com/tscircuit/runframe/pull/1452) | 🐌 Tiny | Automated package update |
| [#1451](https://github.com/tscircuit/runframe/pull/1451) | 🐌 Tiny | Updates the tscircuit3d-viewer package to version 0.0.413 in package.json |
| [#1450](https://github.com/tscircuit/runframe/pull/1450) | 🐌 Tiny | Updates the package version from 0.0.1099 to 0.0.1100 in package.json |
| [#1449](https://github.com/tscircuit/runframe/pull/1449) | 🐌 Tiny | Updates the tscircuitpcb-viewer package from version 1.11.228 to 1.11.229 |
| [#1448](https://github.com/tscircuit/runframe/pull/1448) | 🐌 Tiny | Updates the package version from 0.0.1098 to 0.0.1099 in package.json |
| [#1447](https://github.com/tscircuit/runframe/pull/1447) | 🐌 Tiny | Updates the tscircuiteval package to version 0.0.394 in the package.json file. |
| [#1446](https://github.com/tscircuit/runframe/pull/1446) | 🐌 Tiny | Automated package update |
| [#1445](https://github.com/tscircuit/runframe/pull/1445) | 🐌 Tiny | Updates the tscircuiteval package to version 0.0.393 in the package.json file. |
| [#1444](https://github.com/tscircuit/runframe/pull/1444) | 🐌 Tiny | Automated package update to version 0.0.1097 |
| [#1443](https://github.com/tscircuit/runframe/pull/1443) | 🐌 Tiny | Updates the tscircuiteval package to version 0.0.392 |
| [#1442](https://github.com/tscircuit/runframe/pull/1442) | 🐌 Tiny | Updates the package version from 0.0.1095 to 0.0.1096 in package.json |
| [#1441](https://github.com/tscircuit/runframe/pull/1441) | 🐌 Tiny | Automated package update |
| [#1440](https://github.com/tscircuit/runframe/pull/1440) | 🐌 Tiny | Updates the tscircuit3d-viewer package from version 0.0.411 to 0.0.412 |
| [#1438](https://github.com/tscircuit/runframe/pull/1438) | 🐌 Tiny | Updates the package version from 0.0.1093 to 0.0.1094 in package.json |
| [#1437](https://github.com/tscircuit/runframe/pull/1437) | 🐌 Tiny | Updates the tscircuiteval package to version 0.0.391 in the package.json file. |
| [#1436](https://github.com/tscircuit/runframe/pull/1436) | 🐌 Tiny | Automated package update |
| [#671](https://github.com/tscircuit/cli/pull/671) | 🐌 Tiny | Automated package update |
| [#670](https://github.com/tscircuit/cli/pull/670) | 🐌 Tiny | Updates the tscircuitrunframe package from version 0.0.1127 to 0.0.1128 |
| [#669](https://github.com/tscircuit/cli/pull/669) | 🐌 Tiny | Automated package update |
| [#668](https://github.com/tscircuit/cli/pull/668) | 🐌 Tiny | Updates the tscircuitrunframe package from version 0.0.1126 to 0.0.1127 |
| [#667](https://github.com/tscircuit/cli/pull/667) | 🐌 Tiny | Automated package update |
| [#666](https://github.com/tscircuit/cli/pull/666) | 🐌 Tiny | Updates the tscircuitrunframe package from version 0.0.1125 to 0.0.1126 |
| [#665](https://github.com/tscircuit/cli/pull/665) | 🐌 Tiny | Automated package update |
| [#664](https://github.com/tscircuit/cli/pull/664) | 🐌 Tiny | Automated package update |
| [#663](https://github.com/tscircuit/cli/pull/663) | 🐌 Tiny | Automated package update |
| [#662](https://github.com/tscircuit/cli/pull/662) | 🐌 Tiny | Automated package update |
| [#661](https://github.com/tscircuit/cli/pull/661) | 🐌 Tiny | Automated package update |
| [#658](https://github.com/tscircuit/cli/pull/658) | 🐌 Tiny | Automated package update |
| [#656](https://github.com/tscircuit/cli/pull/656) | 🐌 Tiny | Automated package update |
| [#654](https://github.com/tscircuit/cli/pull/654) | 🐌 Tiny | Updates the tscircuitrunframe package from version 0.0.1122 to 0.0.1123 |
| [#653](https://github.com/tscircuit/cli/pull/653) | 🐌 Tiny | Automated package update |
| [#652](https://github.com/tscircuit/cli/pull/652) | 🐌 Tiny | Updates the tscircuitrunframe package to version 0.0.1122 in the package.json file. |
| [#651](https://github.com/tscircuit/cli/pull/651) | 🐌 Tiny | Automated package update to version 0.1.353 |
| [#650](https://github.com/tscircuit/cli/pull/650) | 🐌 Tiny | Updates the tscircuitrunframe package from version 0.0.1120 to 0.0.1121 |
| [#648](https://github.com/tscircuit/cli/pull/648) | 🐌 Tiny | Automated package update |
| [#646](https://github.com/tscircuit/cli/pull/646) | 🐌 Tiny | Automated package update |
| [#645](https://github.com/tscircuit/cli/pull/645) | 🐌 Tiny | Updates the tscircuitrunframe package to version 0.0.1120 |
| [#644](https://github.com/tscircuit/cli/pull/644) | 🐌 Tiny | Automated package update |
| [#643](https://github.com/tscircuit/cli/pull/643) | 🐌 Tiny | Updates the tscircuitrunframe package from version 0.0.1118 to 0.0.1119 |
| [#641](https://github.com/tscircuit/cli/pull/641) | 🐌 Tiny | Automated package update |
| [#640](https://github.com/tscircuit/cli/pull/640) | 🐌 Tiny | Updates the tscircuitrunframe package from version 0.0.1117 to 0.0.1118 |
| [#639](https://github.com/tscircuit/cli/pull/639) | 🐌 Tiny | Automated package update |
| [#638](https://github.com/tscircuit/cli/pull/638) | 🐌 Tiny | Updates the tscircuitrunframe package from version 0.0.1116 to 0.0.1117 |
| [#637](https://github.com/tscircuit/cli/pull/637) | 🐌 Tiny | Automated package update |
| [#635](https://github.com/tscircuit/cli/pull/635) | 🐌 Tiny | Automated package update |
| [#634](https://github.com/tscircuit/cli/pull/634) | 🐌 Tiny | Updates the tscircuitrunframe package from version 0.0.1115 to 0.0.1116 |
| [#633](https://github.com/tscircuit/cli/pull/633) | 🐌 Tiny | Automated package update |
| [#632](https://github.com/tscircuit/cli/pull/632) | 🐌 Tiny | Updates the tscircuitrunframe package from version 0.0.1114 to 0.0.1115 |
| [#631](https://github.com/tscircuit/cli/pull/631) | 🐌 Tiny | Automated package update |
| [#630](https://github.com/tscircuit/cli/pull/630) | 🐌 Tiny | Updates the tscircuitrunframe package from version 0.0.1113 to 0.0.1114 |
| [#628](https://github.com/tscircuit/cli/pull/628) | 🐌 Tiny | Updates the tscircuitrunframe package from version 0.0.1112 to 0.0.1113 |
| [#629](https://github.com/tscircuit/cli/pull/629) | 🐌 Tiny | Automated package update to version 0.1.343 |
| [#627](https://github.com/tscircuit/cli/pull/627) | 🐌 Tiny | Automated package update |
| [#626](https://github.com/tscircuit/cli/pull/626) | 🐌 Tiny | Updates the tscircuitrunframe package from version 0.0.1111 to 0.0.1112 |
| [#625](https://github.com/tscircuit/cli/pull/625) | 🐌 Tiny | Automated package update |
| [#623](https://github.com/tscircuit/cli/pull/623) | 🐌 Tiny | Automated package update |
| [#622](https://github.com/tscircuit/cli/pull/622) | 🐌 Tiny | Updates the tscircuitrunframe package from version 0.0.1110 to 0.0.1111 |
| [#621](https://github.com/tscircuit/cli/pull/621) | 🐌 Tiny | Automated package update |
| [#620](https://github.com/tscircuit/cli/pull/620) | 🐌 Tiny | Updates the package version from 0.1.337 to 0.1.338 in package.json |
| [#619](https://github.com/tscircuit/cli/pull/619) | 🐌 Tiny | Automated package update |
| [#617](https://github.com/tscircuit/cli/pull/617) | 🐌 Tiny | Automated package update |
| [#616](https://github.com/tscircuit/cli/pull/616) | 🐌 Tiny | Updates the tscircuitrunframe package from version 0.0.1108 to 0.0.1109 |
| [#613](https://github.com/tscircuit/cli/pull/613) | 🐌 Tiny | Automated package update |
| [#612](https://github.com/tscircuit/cli/pull/612) | 🐌 Tiny | Updates the tscircuitrunframe package from version 0.0.1107 to 0.0.1108 |
| [#611](https://github.com/tscircuit/cli/pull/611) | 🐌 Tiny | Automated package update |
| [#610](https://github.com/tscircuit/cli/pull/610) | 🐌 Tiny | Updates the tscircuitrunframe package from version 0.0.1104 to 0.0.1107 in the package.json file. |
| [#607](https://github.com/tscircuit/cli/pull/607) | 🐌 Tiny | Automated package update to version 0.1.334 |
| [#606](https://github.com/tscircuit/cli/pull/606) | 🐌 Tiny | Updates the tscircuitrunframe package from version 0.0.1103 to 0.0.1104 |
| [#605](https://github.com/tscircuit/cli/pull/605) | 🐌 Tiny | Automated package update |
| [#604](https://github.com/tscircuit/cli/pull/604) | 🐌 Tiny | Updates the tscircuitrunframe package from version 0.0.1102 to 0.0.1103 |
| [#603](https://github.com/tscircuit/cli/pull/603) | 🐌 Tiny | Automated package update |
| [#602](https://github.com/tscircuit/cli/pull/602) | 🐌 Tiny | Updates the tscircuitrunframe package from version 0.0.1101 to 0.0.1102 in the package.json file. |
| [#601](https://github.com/tscircuit/cli/pull/601) | 🐌 Tiny | Automated package update |
| [#600](https://github.com/tscircuit/cli/pull/600) | 🐌 Tiny | Updates the tscircuitrunframe package version from 0.0.1099 to 0.0.1101 in package.json |
| [#599](https://github.com/tscircuit/cli/pull/599) | 🐌 Tiny | Automated package update |
| [#597](https://github.com/tscircuit/cli/pull/597) | 🐌 Tiny | Automated package update |
| [#596](https://github.com/tscircuit/cli/pull/596) | 🐌 Tiny | Updates the tscircuitrunframe package from version 0.0.1098 to 0.0.1099 |
| [#595](https://github.com/tscircuit/cli/pull/595) | 🐌 Tiny | Automated package update |
| [#593](https://github.com/tscircuit/cli/pull/593) | 🐌 Tiny | Automated package update to version 0.1.327 |
| [#592](https://github.com/tscircuit/cli/pull/592) | 🐌 Tiny | Updates the tscircuitrunframe package from version 0.0.1097 to 0.0.1098 |
| [#590](https://github.com/tscircuit/cli/pull/590) | 🐌 Tiny | Automated package update |
| [#589](https://github.com/tscircuit/cli/pull/589) | 🐌 Tiny | Updates the tscircuitrunframe package from version 0.0.1096 to 0.0.1097 |
| [#588](https://github.com/tscircuit/cli/pull/588) | 🐌 Tiny | Automated package update |
| [#587](https://github.com/tscircuit/cli/pull/587) | 🐌 Tiny | Updates the tscircuitrunframe package from version 0.0.1095 to 0.0.1096 |
| [#586](https://github.com/tscircuit/cli/pull/586) | 🐌 Tiny | Automated package update |
| [#585](https://github.com/tscircuit/cli/pull/585) | 🐌 Tiny | Updates the tscircuitrunframe package from version 0.0.1094 to 0.0.1095 |
| [#584](https://github.com/tscircuit/cli/pull/584) | 🐌 Tiny | Automated package update |
| [#583](https://github.com/tscircuit/cli/pull/583) | 🐌 Tiny | Updates the tscircuitrunframe package from version 0.0.1092 to 0.0.1094 |
| [#582](https://github.com/tscircuit/cli/pull/582) | 🐌 Tiny | Automated package update |
| [#471](https://github.com/tscircuit/svg.tscircuit.com/pull/471) | 🐌 Tiny | Automated package update |
| [#470](https://github.com/tscircuit/svg.tscircuit.com/pull/470) | 🐌 Tiny | Updates the tscircuit package version from 0.0.794 to 0.0.795 in package.json |
| [#469](https://github.com/tscircuit/svg.tscircuit.com/pull/469) | 🐌 Tiny | Updates the tscircuit package version from 0.0.793 to 0.0.794 in package.json |
| [#468](https://github.com/tscircuit/svg.tscircuit.com/pull/468) | 🐌 Tiny | Updates the tscircuit package version from 0.0.792 to 0.0.793 in package.json |
| [#467](https://github.com/tscircuit/svg.tscircuit.com/pull/467) | 🐌 Tiny | Updates the tscircuit package version from 0.0.791 to 0.0.792 in package.json |
| [#466](https://github.com/tscircuit/svg.tscircuit.com/pull/466) | 🐌 Tiny | Updates the tscircuit package version from 0.0.790 to 0.0.791 in package.json |
| [#465](https://github.com/tscircuit/svg.tscircuit.com/pull/465) | 🐌 Tiny | Updates the tscircuit package version from 0.0.788 to 0.0.790 in package.json |
| [#464](https://github.com/tscircuit/svg.tscircuit.com/pull/464) | 🐌 Tiny | Updates the tscircuit package version from 0.0.787 to 0.0.788 in package.json |
| [#463](https://github.com/tscircuit/svg.tscircuit.com/pull/463) | 🐌 Tiny | Updates the tscircuit package version from 0.0.786 to 0.0.787 in package.json |
| [#462](https://github.com/tscircuit/svg.tscircuit.com/pull/462) | 🐌 Tiny | Automated package update |
| [#461](https://github.com/tscircuit/svg.tscircuit.com/pull/461) | 🐌 Tiny | Updates the tscircuit package version from 0.0.784 to 0.0.785 in package.json |
| [#460](https://github.com/tscircuit/svg.tscircuit.com/pull/460) | 🐌 Tiny | Updates the tscircuit package version from 0.0.783 to 0.0.784 in package.json |
| [#459](https://github.com/tscircuit/svg.tscircuit.com/pull/459) | 🐌 Tiny | Updates the tscircuit package version from 0.0.782 to 0.0.783 in package.json |
| [#458](https://github.com/tscircuit/svg.tscircuit.com/pull/458) | 🐌 Tiny | Updates the tscircuit package version from 0.0.781 to 0.0.782 in package.json |
| [#457](https://github.com/tscircuit/svg.tscircuit.com/pull/457) | 🐌 Tiny | Updates the tscircuit package version from 0.0.780 to 0.0.781 in package.json |
| [#456](https://github.com/tscircuit/svg.tscircuit.com/pull/456) | 🐌 Tiny | Updates the tscircuit package version from 0.0.779 to 0.0.780 in package.json |
| [#455](https://github.com/tscircuit/svg.tscircuit.com/pull/455) | 🐌 Tiny | Updates the tscircuit package version from 0.0.778 to 0.0.779 in package.json |
| [#453](https://github.com/tscircuit/svg.tscircuit.com/pull/453) | 🐌 Tiny | Updates the tscircuit package version from 0.0.777 to 0.0.778 in package.json |
| [#452](https://github.com/tscircuit/svg.tscircuit.com/pull/452) | 🐌 Tiny | Updates the tscircuit package version from 0.0.776 to 0.0.777 in package.json |
| [#451](https://github.com/tscircuit/svg.tscircuit.com/pull/451) | 🐌 Tiny | Updates the tscircuit package version from 0.0.775 to 0.0.776 in package.json |
| [#450](https://github.com/tscircuit/svg.tscircuit.com/pull/450) | 🐌 Tiny | Updates the tscircuit package version from 0.0.773 to 0.0.775 in package.json |
| [#449](https://github.com/tscircuit/svg.tscircuit.com/pull/449) | 🐌 Tiny | Updates the tscircuit package version from 0.0.772 to 0.0.773 in package.json |
| [#448](https://github.com/tscircuit/svg.tscircuit.com/pull/448) | 🐌 Tiny | Updates the tscircuit package version from 0.0.771 to 0.0.772 in package.json |
| [#447](https://github.com/tscircuit/svg.tscircuit.com/pull/447) | 🐌 Tiny | Automated package update |
| [#446](https://github.com/tscircuit/svg.tscircuit.com/pull/446) | 🐌 Tiny | Automated package update |
| [#445](https://github.com/tscircuit/svg.tscircuit.com/pull/445) | 🐌 Tiny | Automated package update |
| [#444](https://github.com/tscircuit/svg.tscircuit.com/pull/444) | 🐌 Tiny | Updates the tscircuit package version from 0.0.767 to 0.0.768 in package.json |
| [#443](https://github.com/tscircuit/svg.tscircuit.com/pull/443) | 🐌 Tiny | Automated package update |
| [#442](https://github.com/tscircuit/svg.tscircuit.com/pull/442) | 🐌 Tiny | Updates the tscircuit package version from 0.0.765 to 0.0.766 in package.json |
| [#441](https://github.com/tscircuit/svg.tscircuit.com/pull/441) | 🐌 Tiny | Updates the tscircuit package version from 0.0.763 to 0.0.765 in package.json |
| [#440](https://github.com/tscircuit/svg.tscircuit.com/pull/440) | 🐌 Tiny | Automated package update |
| [#439](https://github.com/tscircuit/svg.tscircuit.com/pull/439) | 🐌 Tiny | Updates the tscircuit package version from 0.0.761 to 0.0.762 in package.json |
| [#438](https://github.com/tscircuit/svg.tscircuit.com/pull/438) | 🐌 Tiny | Updates the tscircuit package version from 0.0.760 to 0.0.761 in package.json |
| [#437](https://github.com/tscircuit/svg.tscircuit.com/pull/437) | 🐌 Tiny | Updates the tscircuit package version from 0.0.758 to 0.0.760 in package.json |
| [#434](https://github.com/tscircuit/svg.tscircuit.com/pull/434) | 🐌 Tiny | Updates the tscircuit package version from 0.0.757 to 0.0.758 in package.json |
| [#433](https://github.com/tscircuit/svg.tscircuit.com/pull/433) | 🐌 Tiny | Updates the tscircuit package version from 0.0.756 to 0.0.757 in package.json |
| [#432](https://github.com/tscircuit/svg.tscircuit.com/pull/432) | 🐌 Tiny | Updates the tscircuit package version from 0.0.755 to 0.0.756 in package.json |
| [#431](https://github.com/tscircuit/svg.tscircuit.com/pull/431) | 🐌 Tiny | Updates the tscircuit package version from 0.0.754 to 0.0.755 in package.json |
| [#430](https://github.com/tscircuit/svg.tscircuit.com/pull/430) | 🐌 Tiny | Updates the tscircuit package version from 0.0.752 to 0.0.754 in package.json |

</details>

### [seveibar](https://github.com/seveibar)

| PRs # | Impact | Rating | Description |
|------|--------|--------|-------------|
| [#149](https://github.com/tscircuit/kicad-component-converter/pull/149) | 🐳 Major | ⭐⭐⭐ | Detects closed polygons from Edge.Cuts segments in KiCad files and creates corresponding pcb_cutout elements in the output JSON. |
| [#390](https://github.com/tscircuit/circuit-to-svg/pull/390) | 🐳 Major | ⭐⭐⭐ | Adds support for rendering pcb_panel elements, updates to the latest circuit-json release, and includes a snapshot test for solder mask rendering. |
| [#383](https://github.com/tscircuit/circuit-to-svg/pull/383) | 🐳 Major | ⭐⭐⭐ | Includes pcb_cutout shapes when determining PCB SVG bounds so polygon cutouts contribute to the transform and adds a regression test covering polygon-only cutouts to prevent NaN transforms |
| [#319](https://github.com/tscircuit/circuit-json/pull/319) | 🐙 Minor | ⭐⭐ | Adds a pcb_panel component with dimensions and solder mask defaults, exports the new panel and includes it in PCB and any_circuit_element unions, and allows pcb_board to reference an associated panel with unit tests. |
| [#460](https://github.com/tscircuit/props/pull/460) | 🐙 Minor | ⭐⭐ | Adds new layout properties pcbOffsetX, pcbOffsetY, and renames positionMode to pcbPositionMode, while providing a deprecated alias for compatibility and updating related tests and documentation. |
| [#458](https://github.com/tscircuit/props/pull/458) | 🐙 Minor | ⭐⭐ | Allows trace pcbPath definitions to mix coordinate points and pin selector strings, adds coverage to ensure selector strings are accepted when parsing trace props, and regenerates documentation after schema updates. |
| [#457](https://github.com/tscircuit/props/pull/457) | 🐙 Minor | ⭐⭐ | Add a panel component definition with required width and height along with an optional noSolderMask flag and export the panel component with updated documentation. |
| [#455](https://github.com/tscircuit/props/pull/455) | 🐙 Minor | ⭐⭐ | Adds a doubleSidedAssembly option to the board  component props and schema, allowing users to specify whether the board should be assembled on both sides. |
| [#452](https://github.com/tscircuit/props/pull/452) | 🐙 Minor | ⭐⭐ | Adds optional simulator configuration properties to the switch component type definitions and regenerates the component documentation to describe the new simulator props. |
| [#387](https://github.com/tscircuit/footprinter/pull/387) | 🐙 Minor | ⭐⭐ | Normalizes function name casing by converting parsed function tokens to lowercase before looking up footprinter handlers, and adds a regression test to ensure uppercase footprinter strings resolve correctly. |
| [#154](https://github.com/tscircuit/kicad-component-converter/pull/154) | 🐙 Minor | ⭐⭐ | Fixes the handling of fabrication text layers in the conversion process by distinguishing between fabrication notes and silkscreen text based on layer attributes. |
| [#1540](https://github.com/tscircuit/core/pull/1540) | 🐙 Minor | ⭐⭐ | Moves the simple 3D snapshot matcher implementation into a dedicated extend-expect-3d-matcher module, simplifying the PCBschematic snapshot helper to only handle SVG snapshots and ensuring shared test fixture loads both circuit and 3D matcher extensions. |
| [#1527](https://github.com/tscircuit/core/pull/1527) | 🐙 Minor | ⭐⭐ | Ensures that when the doNotPlace property is set to true for a chip, no CAD component is created, and verifies this behavior with a test. |
| [#1525](https://github.com/tscircuit/core/pull/1525) | 🐙 Minor | ⭐⭐ | Add a regression test for pcbPath selectors that set a 0.5 mm trace thickness and capture the PCB snapshot for the thicker selector-driven manual route. |
| [#1520](https://github.com/tscircuit/core/pull/1520) | 🐙 Minor | ⭐⭐ | Adds support for using string selectors in the pcbPath for traces, allowing for more flexible routing based on component pins. |
| [#1509](https://github.com/tscircuit/core/pull/1509) | 🐙 Minor | ⭐⭐ | Reads the board components parsed thickness when calculating board thickness and updates cadmodel properties to expose zOffsetFromSurface, along with adding a test for cadmodel surface offset. |
| [#392](https://github.com/tscircuit/circuit-to-svg/pull/392) | 🐙 Minor | ⭐⭐ | Fixes PCB panel rendering by preventing soldermask fill, ensuring the panel interior remains transparent. |
| [#1302](https://github.com/tscircuit/eval/pull/1302) | 🐙 Minor | ⭐⭐ | Detects circular dependencies in local imports and surfaces a clear error when such dependencies are formed, along with a regression test to ensure detection functionality. |
| [#1288](https://github.com/tscircuit/eval/pull/1288) | 🐙 Minor | ⭐⭐ | Rely on the execution contexts tsconfig during file resolution instead of recomputing it from the filesystem map |
| [#1281](https://github.com/tscircuit/eval/pull/1281) | 🐙 Minor | ⭐⭐ | Throws an error when a TypeScript config path alias matches but the corresponding file cannot be resolved. |
| [#1439](https://github.com/tscircuit/runframe/pull/1439) | 🐙 Minor | ⭐⭐ | Filters the RunFrame board selector using includeBoardFiles parsed from tscircuit.config.json and adds a fallback mechanism for invalid configurations. |
| [#1435](https://github.com/tscircuit/runframe/pull/1435) | 🐙 Minor | ⭐⭐ | Fixes the issue where debug downloads display Object object instead of readable content by stringifying non-string debug outputs. |
| [#660](https://github.com/tscircuit/cli/pull/660) | 🐙 Minor | ⭐⭐ | Adds support for filtering directory builds based on configured includeBoardFiles patterns and improves error handling for unmatched files during the build process. |
| [#657](https://github.com/tscircuit/cli/pull/657) | 🐙 Minor | ⭐⭐ | Add a --all-images flag to the tsci build command to generate preview images for every successful build output. |
| [#642](https://github.com/tscircuit/cli/pull/642) | 🐙 Minor | ⭐⭐ | Implements individual error handling for generating circuit JSON, PCB SVG, schematic SVG, and 3D snapshots, improving robustness in snapshot generation. |
| [#581](https://github.com/tscircuit/cli/pull/581) | 🐙 Minor | ⭐⭐ | Centralizes board file discovery by reusing configured board file globs and introduces a new includeBoardFiles option in the project config schema, enhancing the build and snapshot processes. |
| [#14](https://github.com/tscircuit/circuit-json-to-tscircuit/pull/14) | 🐙 Minor | ⭐⭐ | Adds support for PCB cutouts, allowing rectangular, circular, and polygonal cutouts to be defined in the circuit JSON. |
| [#472](https://github.com/tscircuit/svg.tscircuit.com/pull/472) | 🐙 Minor | ⭐⭐ | Disables the parts engine by using the PlatformConfig type for project configuration updates. |
| [#288](https://github.com/tscircuit/tscircuit-autorouter/pull/288) | 🐙 Minor | ⭐⭐ | Adds an optional nominalTraceWidth field to SimpleRouteConnection |

<details>
<summary>🐌 Tiny Contributions (21)</summary>

| PR # | Impact | Description |
|------|--------|-------------|
| [#414](https://github.com/tscircuit/pcb-viewer/pull/414) | 🐌 Tiny | Changes the rendering of selector hover text to use a more compact syntax, omitting unnamed components and port hints. |
| [#323](https://github.com/tscircuit/circuit-json/pull/323) | 🐌 Tiny | Removes stroke and fill related properties from the PCB courtyard rectangle definition and updates documentation and tests accordingly. |
| [#230](https://github.com/tscircuit/contribution-tracker/pull/230) | 🐌 Tiny | Changes the maintainer designation for Abse2001 from maintainer1 to maintainer2 in the maintainers list. |
| [#1795](https://github.com/tscircuit/tscircuit.com/pull/1795) | 🐌 Tiny | Add a GitHub Actions workflow to automate dependency updates for the tscircuiteval package, including closing existing PRs and creating new ones for updates. |
| [#1290](https://github.com/tscircuit/eval/pull/1290) | 🐌 Tiny | Adds the UPSTREAM_PACKAGES_TO_UPDATE environment variable to the release workflow, allowing for more flexible upstream package updates. |
| [#1286](https://github.com/tscircuit/eval/pull/1286) | 🐌 Tiny | Adds detailed logging for import failures, providing users with specific error messages and context when imports cannot be resolved. |
| [#15](https://github.com/tscircuit/circuit-json-to-tscircuit/pull/15) | 🐌 Tiny | Converts pcb_note_ circuit JSON elements into their corresponding pcbnote JSX primitives during footprint generation and adds a regression test covering pcb note text, rect, path, line, and dimension mappings. |
| [#13](https://github.com/tscircuit/circuit-json-to-tscircuit/pull/13) | 🐌 Tiny | Removes the lockfile and updates the core and circuit-json dependencies to newer versions. |
| [#473](https://github.com/tscircuit/svg.tscircuit.com/pull/473) | 🐌 Tiny | Fixes async loading of circuit footprints and updates related snapshots in the testing suite. |
| [#267](https://github.com/tscircuit/docs/pull/267) | 🐌 Tiny | Adds documentation for the optional path argument in the tsci build command and the --all-images flag for outputting all renderable images. |
| [#265](https://github.com/tscircuit/docs/pull/265) | 🐌 Tiny | Documents how to place components on the bottom copper layer in the layout properties guide |
| [#264](https://github.com/tscircuit/docs/pull/264) | 🐌 Tiny | Switches the manual pcbPath example back to simplified selectors for fromto and aligns the pcbPath array entries with simplified selector syntax. |
| [#263](https://github.com/tscircuit/docs/pull/263) | 🐌 Tiny | Clarifies the usage of the board  layers prop by documenting the common numeric value and advanced array customization, and updates the example to use layers4. |
| [#261](https://github.com/tscircuit/docs/pull/261) | 🐌 Tiny | Clarifies the documentation for the symbol  element by replacing the term Normal Component with user-facing guidance about customizing symbols via the symbol prop. |
| [#255](https://github.com/tscircuit/docs/pull/255) | 🐌 Tiny | Adds tscircuit.com as a downstream target of tscircuiteval in the package dependency diagram. |
| [#253](https://github.com/tscircuit/docs/pull/253) | 🐌 Tiny | Clarifies that includeBoardFiles accepts file paths or glob strings and streamlines its use cases, updating the example glob pattern to modules.board.tsx and noting that glob resolution is relative to the project root, matching mainEntrypoint. |
| [#252](https://github.com/tscircuit/docs/pull/252) | 🐌 Tiny | Documents the behavior of the obstructsWithinBounds prop for chip placement and provides an example of its usage in a CircuitPreview. |
| [#248](https://github.com/tscircuit/docs/pull/248) | 🐌 Tiny | Removes the redundant overview heading from the group  element documentation, drops the unused key prop from the props table, and updates the LED footprint example to 0603. |
| [#249](https://github.com/tscircuit/docs/pull/249) | 🐌 Tiny | Decrease markdown table font sizing to improve fit within content areas |
| [#246](https://github.com/tscircuit/docs/pull/246) | 🐌 Tiny | Adds a props table covering core group  options and documents grid and flex specific layout props with CircuitPreview examples. |
| [#35](https://github.com/tscircuit/common/pull/35) | 🐌 Tiny | Adds the doNotPlace attribute to common boards to prevent placement of components in specified areas. |

</details>

### [techmannih](https://github.com/techmannih)

| PRs # | Impact | Rating | Description |
|------|--------|--------|-------------|
| [#387](https://github.com/tscircuit/circuit-to-svg/pull/387) | 🐳 Major | ⭐⭐⭐ | Adds support for corner radius in rectangular SMT pads, allowing for rounded corners in SVG rendering. |
| [#412](https://github.com/tscircuit/pcb-viewer/pull/412) | 🐙 Minor | ⭐⭐ | Adds support for corner radius in SMT pad rendering, allowing for rounded corners in PCB designs. |
| [#401](https://github.com/tscircuit/pcb-viewer/pull/401) | 🐙 Minor | ⭐⭐ | Adds functionality to render fabrication note dimensions in the PCB viewer, allowing users to visualize dimensions directly on the PCB layout. |
| [#317](https://github.com/tscircuit/circuit-json/pull/317) | 🐙 Minor | ⭐⭐ | Adds corner_radius support for rectangular and rotated-rect SMT pads in the PCB design. |
| [#1535](https://github.com/tscircuit/core/pull/1535) | 🐙 Minor | ⭐⭐ | Adds support for corner radius in rectangular surface mount pads, allowing for more customizable pad shapes. |
| [#1529](https://github.com/tscircuit/core/pull/1529) | 🐙 Minor | ⭐⭐ | Fixes the rotation of SMT pads on the bottom layer to ensure correct rendering and placement. |

<details>
<summary>🐌 Tiny Contributions (3)</summary>

| PR # | Impact | Description |
|------|--------|-------------|
| [#456](https://github.com/tscircuit/props/pull/456) | 🐌 Tiny | Adds cornerRadius support for rectangular and rotated-rect SMT pads in the component library. |
| [#1537](https://github.com/tscircuit/core/pull/1537) | 🐌 Tiny | Removes image upload and failure capture steps from the test workflow, simplifying the process. |
| [#142](https://github.com/tscircuit/jscad-electronics/pull/142) | 🐌 Tiny | Adds support for the QFN32 CAD model in the Footprinter3D component, including optional thermal pad handling. |

</details>

### [MustafaMulla29](https://github.com/MustafaMulla29)

| PRs # | Impact | Rating | Description |
|------|--------|--------|-------------|
| [#527](https://github.com/tscircuit/3d-viewer/pull/527) | 🐳 Major | ⭐⭐⭐ | Adds functionality to configure the visibility of different layers and objects in the 3D viewer, allowing users to toggle the display of specific components such as board body, copper layers, and silkscreens. |
| [#1513](https://github.com/tscircuit/core/pull/1513) | 🐳 Major | ⭐⭐⭐ | Adds support for anchor_position and anchor_alignment properties in pcb_group, allowing for more precise positioning of PCB components based on specified anchor points. |
| [#14](https://github.com/tscircuit/circuit-json-to-step/pull/14) | 🐳 Major | ⭐⭐⭐ | ref https:github.comtscircuittscircuitissues1076 |
| [#410](https://github.com/tscircuit/pcb-viewer/pull/410) | 🐙 Minor | ⭐⭐ | Adds functionality to display the anchor position of a PCB group on the canvas, enhancing visual representation of PCB layouts. |
| [#315](https://github.com/tscircuit/circuit-json/pull/315) | 🐙 Minor | ⭐⭐ | Adds anchor_position and anchor_alignment properties to the pcb_group, allowing for more flexible positioning and alignment of PCB groups in the design. |
| [#459](https://github.com/tscircuit/props/pull/459) | 🐙 Minor | ⭐⭐ | Adds a snapshotsDir property to the PlatformConfig interface, allowing users to customize the output directory for snapshots generated by the tsci snapshot command. |
| [#522](https://github.com/tscircuit/3d-viewer/pull/522) | 🐙 Minor | ⭐⭐ | Adds support for pill and rotated pill hole shapes in PCB design, allowing for more versatile hole configurations. |
| [#1538](https://github.com/tscircuit/core/pull/1538) | 🐙 Minor | ⭐⭐ | Passes model_step_url when stepUrl is provided in the cadmodel, ensuring correct URL handling for CAD components. |
| [#649](https://github.com/tscircuit/cli/pull/649) | 🐙 Minor | ⭐⭐ | Allows users to specify a custom output directory for snapshots in the tscircuit configuration file, enhancing flexibility in project organization. |
| [#53](https://github.com/tscircuit/circuit-json-to-gltf/pull/53) | 🐙 Minor | ⭐⭐ | Add support for pill and rotated pill hole shapes in the PCB geometry calculations, enhancing the rendering of these hole types in 3D. |

<details>
<summary>🐌 Tiny Contributions (2)</summary>

| PR # | Impact | Description |
|------|--------|-------------|
| [#435](https://github.com/tscircuit/svg.tscircuit.com/pull/435) | 🐌 Tiny | Updates the circuit-json-to-gltf dependency to version 0.0.26 to fix the pill hole issue and adds a test to verify the correct rendering of the pill-shaped hole in 3D SVG. |
| [#244](https://github.com/tscircuit/docs/pull/244) | 🐌 Tiny | Adds documentation for the pill-shaped hole and its rotation feature in the hole  element. |

</details>

### [imrishabh18](https://github.com/imrishabh18)

| PRs # | Impact | Rating | Description |
|------|--------|--------|-------------|
| [#1536](https://github.com/tscircuit/core/pull/1536) | 🐳 Major | ⭐⭐⭐ | Calculates the minimum flex container size based on the outline of the group if available, otherwise defaults to width and height. |
| [#1530](https://github.com/tscircuit/core/pull/1530) | 🐳 Major | ⭐⭐⭐ | Adds support for packing groups within specified width and height bounds in PCB layout. |
| [#1512](https://github.com/tscircuit/core/pull/1512) | 🐳 Major | ⭐⭐⭐ | Fixes the issue where relative components are not considered as obstacles in the packing calculation, ensuring accurate placement of components on the PCB layout. |
| [#391](https://github.com/tscircuit/circuit-to-svg/pull/391) | 🐳 Major | ⭐⭐⭐ | Adds support for rendering PCB group outlines as dashed paths, validates outlines before rendering, and includes a dedicated snapshot for PCB group outline rendering with showPcbGroups enabled. |
| [#389](https://github.com/tscircuit/circuit-to-svg/pull/389) | 🐳 Major | ⭐⭐⭐ | Adds the option to visualize PCB groups in the SVG output by rendering dashed borders around them when specified in the options. |
| [#406](https://github.com/tscircuit/pcb-viewer/pull/406) | 🐙 Minor | ⭐⭐ | Adds support for color overrides in PCB note shapes, allowing users to specify colors for lines, rectangles, paths, text, and dimensions. |
| [#402](https://github.com/tscircuit/pcb-viewer/pull/402) | 🐙 Minor | ⭐⭐ | Adds support for various PCB note elements including lines, rectangles, paths, dimensions, and text in the PCB viewer. |
| [#321](https://github.com/tscircuit/circuit-json/pull/321) | 🐙 Minor | ⭐⭐ | Allows the width and height fields of the pcb_group schema to be optional, enabling parsing with only an outline provided. |
| [#320](https://github.com/tscircuit/circuit-json/pull/320) | 🐙 Minor | ⭐⭐ | Allows pcb_group schema to accept optional outlines consistent with pcb_board and validates outline parsing via pcb_group anchor test |
| [#151](https://github.com/tscircuit/kicad-component-converter/pull/151) | 🐙 Minor | ⭐⭐ | Adds support for user-defined layers in KiCad by converting them to pcb_note_line and pcb_note_path elements in the tscircuit format. |
| [#1514](https://github.com/tscircuit/core/pull/1514) | 🐙 Minor | ⭐⭐ | Fixes incorrect board width and height calculations when an outline is provided, preventing auto-calculated dimensions from overwriting explicit values. |
| [#1515](https://github.com/tscircuit/core/pull/1515) | 🐙 Minor | ⭐⭐ | Fixes the selector usage for the PcbNoteDimension component to correctly reference the target element by adding a dot prefix to the input string. |
| [#1511](https://github.com/tscircuit/core/pull/1511) | 🐙 Minor | ⭐⭐ | Adds the PcbNoteText component for rendering text notes on PCB layouts with customizable properties such as font, size, and color. |
| [#26](https://github.com/tscircuit/math-utils/pull/26) | 🐙 Minor | ⭐⭐ | Calculates the bounding rectangle from an array of points and returns the bounds object or null if the array is empty |
| [#60](https://github.com/tscircuit/calculate-packing/pull/60) | 🐙 Minor | ⭐⭐ | Fixes issue where component placement did not respect defined bounds, leading to potential layout errors. |
| [#28](https://github.com/tscircuit/circuit-json-to-kicad/pull/28) | 🐙 Minor | ⭐⭐ | Adds dynamic sizing of schematic paper size based on content dimensions, improving layout for various schematic sizes. |

<details>
<summary>🐌 Tiny Contributions (10)</summary>

| PR # | Impact | Description |
|------|--------|-------------|
| [#1070](https://github.com/tscircuit/tscircuit/pull/1070) | 🐌 Tiny | Adds a step to close existing PRs authored by tscircuitbot before running updates. |
| [#1033](https://github.com/tscircuit/tscircuit/pull/1033) | 🐌 Tiny | Adds a GitHub Actions workflow to send Slack notifications for failed automated package update PRs. |
| [#155](https://github.com/tscircuit/kicad-component-converter/pull/155) | 🐌 Tiny | Updates the circuit-json-to-tscircuit package version from 0.0.8 to 0.0.10 in package.json |
| [#385](https://github.com/tscircuit/circuit-to-svg/pull/385) | 🐌 Tiny | Changes the color for the user layer to align with KiCad standards by replacing default color values with those from a color map. |
| [#1295](https://github.com/tscircuit/eval/pull/1295) | 🐌 Tiny | Updates the kicad-component-converter dependency from version 0.1.22 to 0.1.27 in package.json |
| [#624](https://github.com/tscircuit/cli/pull/624) | 🐌 Tiny | Fixes indentation in the GitHub Actions workflow and adds an environment variable for the GitHub token used in closing pull requests. |
| [#594](https://github.com/tscircuit/cli/pull/594) | 🐌 Tiny | Adds a GitHub Actions workflow to send Slack notifications for failed automated package update PRs. |
| [#16](https://github.com/tscircuit/circuit-json-to-tscircuit/pull/16) | 🐌 Tiny | Fixes npm release process and refactors the afterEach cleanup method in test fixtures to use a global deferred cleanup function. |
| [#259](https://github.com/tscircuit/docs/pull/259) | 🐌 Tiny | Adds documentation for new PCB note elements including lines, paths, rectangles, and text annotations. |
| [#258](https://github.com/tscircuit/docs/pull/258) | 🐌 Tiny | Adds documentation for the pcbnotedimension  element, which allows users to add dimension annotations to PCB designs. |

</details>

### [ShiboSoftwareDev](https://github.com/ShiboSoftwareDev)

| PRs # | Impact | Rating | Description |
|------|--------|--------|-------------|
| [#1382](https://github.com/tscircuit/runframe/pull/1382) | 🐳 Major | ⭐⭐⭐ | Adds INITIAL_FILES_UPLOADED event to prevent rendering before all initial files are loaded, addressing race conditions in RunFrame. |
| [#324](https://github.com/tscircuit/circuit-json/pull/324) | 🐙 Minor | ⭐⭐ | Adds an optional source_component_id to the simulation_switch element, allowing a simulation switch to be associated with a source_component for improved traceability. |
| [#316](https://github.com/tscircuit/circuit-json/pull/316) | 🐙 Minor | ⭐⭐ | Adds a new optional field simulation_voltage_probe_id to the SimulationTransientVoltageGraph interface for enhanced voltage graph simulation. |
| [#1533](https://github.com/tscircuit/core/pull/1533) | 🐙 Minor | ⭐⭐ | Adds simulation capabilities for the switch component, allowing it to be used in SPICE analyses with new simulation properties and comprehensive testing. |
| [#386](https://github.com/tscircuit/circuit-to-svg/pull/386) | 🐙 Minor | ⭐⭐ | Fixes the label for transient voltage graphs to correctly use the simulation voltage probe name instead of a fallback name. |
| [#384](https://github.com/tscircuit/circuit-to-svg/pull/384) | 🐙 Minor | ⭐⭐ | This change updates the simulation graph generation to prioritize the name from an associated simulation_voltage_probe for the legend label, formatting it as V(probe_name) for more meaningful labels. |
| [#1318](https://github.com/tscircuit/eval/pull/1318) | 🐙 Minor | ⭐⭐ | Enhances tsconfig.json parsing by stripping comments and providing clearer error messages for malformed configurations. |
| [#15](https://github.com/tscircuit/circuit-json-to-spice/pull/15) | 🐙 Minor | ⭐⭐ | Links simulation_switch elements to their corresponding source_component using source_component_id and simplifies the logic for finding the associated simulation switch. |
| [#636](https://github.com/tscircuit/cli/pull/636) | 🐙 Minor | ⭐⭐ | Resolves a race condition in the dev server where the front-end runframe could attempt to render a circuit before all of its dependent files were available by emitting the INITIAL_FILES_UPLOADED event after the initial upload of all project files. |
| [#11](https://github.com/tscircuit/spicey/pull/11) | 🐙 Minor | ⭐⭐ | Adds support for Vt (threshold voltage) and Vh (hysteresis voltage) parameters in the .MODEL definition for voltage-controlled switches, enabling accurate Von and Voff calculations in transient simulations. |
| [#10](https://github.com/tscircuit/spicey/pull/10) | 🐙 Minor | ⭐⭐ | Changes graph titles to use V(node) notation instead of previous naming conventions. |

### [Asymtode712](https://github.com/Asymtode712)

| PRs # | Impact | Rating | Description |
|------|--------|--------|-------------|
| [#318](https://github.com/tscircuit/circuit-json/pull/318) | 🐙 Minor | ⭐⭐ | Adds a new error schema for invalid layer placement, including source_component_id, layer name, and descriptive message, along with tests to verify its functionality. |
| [#1526](https://github.com/tscircuit/core/pull/1526) | 🐙 Minor | ⭐⭐ | Components can now only be placed on top or bottom layers. Attempting to place a component on inner layers (inner1, inner2, etc.) will emit a pcb_component_invalid_layer_error while still creating the component with top as a fallback to prevent cascading errors. |
| [#1468](https://github.com/tscircuit/runframe/pull/1468) | 🐙 Minor | ⭐⭐ | Removes deleted files from the file dropdown by implementing a new event handling mechanism for file deletion events. |
| [#618](https://github.com/tscircuit/cli/pull/618) | 🐙 Minor | ⭐⭐ | Adds handling for FILE_DELETED events to synchronize file deletions in the file server, including a new event interface and listener. |

<details>
<summary>🐌 Tiny Contributions (1)</summary>

| PR # | Impact | Description |
|------|--------|-------------|
| [#148](https://github.com/tscircuit/jscad-electronics/pull/148) | 🐌 Tiny | Adds support for the SMA model by implementing a new component with a three-part lead structure and improved rendering functionality. |

</details>

### [Abse2001](https://github.com/Abse2001)

| PRs # | Impact | Rating | Description |
|------|--------|--------|-------------|
| [#528](https://github.com/tscircuit/3d-viewer/pull/528) | 🐳 Major | ⭐⭐⭐ | Fixes the geometry processing for non-plated holes to ensure they fully cut through plated holes and reduces the thickness of plated pads for better alignment. |
| [#525](https://github.com/tscircuit/3d-viewer/pull/525) | 🐳 Major | ⭐⭐⭐ | Add hole offset support for plated holes with rectangular pads, allowing custom hole offsets for improved alignment and realism in 3D and PCB geometries. |
| [#526](https://github.com/tscircuit/3d-viewer/pull/526) | 🐙 Minor | ⭐⭐ | Fixes a bug where hole_offset_x or hole_offset_y being undefined caused the board rendering to fail for plated holes. Defaults offsets to 0 when not provided to ensure stable geometry generation for circular and pill-shaped plated holes. |
| [#25](https://github.com/tscircuit/math-utils/pull/25) | 🐙 Minor | ⭐⭐ | Adds a normalizeDegrees helper that cleanly wraps any angle into the 0, 360) range using a modulo-based formula, ensuring stable rotation calculations and avoiding negative or -0 results. |

<details>
<summary>🐌 Tiny Contributions (2)</summary>

| PR # | Impact | Description |
|------|--------|-------------|
| [#1528](https://github.com/tscircuit/core/pull/1528) | 🐌 Tiny | Fixes CAD rotation logic to ensure accurate alignment with PCB component rotation during packing and layer flips, including normalization and handling for bottom-layer flips, and adds tests to verify alignment. |
| [#34](https://github.com/tscircuit/common/pull/34) | 🐌 Tiny | Adds a new pcbGap property to board properties and repositions the Xiao RP2040 pads to the bottom side of the board for accurate alignment, along with updates to SVG and 3D snapshots to reflect these changes. |

</details>

### [ArnavK-09](https://github.com/ArnavK-09)

| PRs # | Impact | Rating | Description |
|------|--------|--------|-------------|
| [#1812](https://github.com/tscircuit/tscircuit.com/pull/1812) | 🐳 Major | ⭐⭐⭐ | Prevents the display of skeleton loading indicators when the build status is an error, improving user experience during failed builds. |
| [#1811](https://github.com/tscircuit/tscircuit.com/pull/1811) | 🐳 Major | ⭐⭐⭐ | Enables an autocomplete API for the code editor, allowing for predictive text suggestions based on user input. |
| [#1793](https://github.com/tscircuit/tscircuit.com/pull/1793) | 🐳 Major | ⭐⭐⭐ | Prevents flickering and unnecessary refetching of organization members in the application. |
| [#1510](https://github.com/tscircuit/core/pull/1510) | 🐙 Minor | ⭐⭐ | Updated CadModel to use constructAssetUrl for better URL management, improved cache-busting logic for model URLs, and added tests to verify CadModel handles relative paths correctly. |
| [#1810](https://github.com/tscircuit/tscircuit.com/pull/1810) | 🐙 Minor | ⭐⭐ | Prevents continuous requests by modifying query parameters and caching behavior in the CmdKMenu component. |

<details>
<summary>🐌 Tiny Contributions (3)</summary>

| PR # | Impact | Description |
|------|--------|-------------|
| [#1808](https://github.com/tscircuit/tscircuit.com/pull/1808) | 🐌 Tiny | Adds role display functionality for organization members and improves member management UI. |
| [#655](https://github.com/tscircuit/cli/pull/655) | 🐌 Tiny | Updates the local server URL to include the file path in the output for better user reference. |
| [#591](https://github.com/tscircuit/cli/pull/591) | 🐌 Tiny | Fixes the project relative path for the glb files in the package.json to ensure correct file resolution. |

</details>

### [Excellencedev](https://github.com/Excellencedev)

| PRs # | Impact | Rating | Description |
|------|--------|--------|-------------|
| [#228](https://github.com/tscircuit/contribution-tracker/pull/228) | 🐙 Minor | ⭐⭐ | This implements the requested feature from issue 227 to automatically comment on PRs with their contribution level and a link to the contribution tracker. |
| [#1292](https://github.com/tscircuit/eval/pull/1292) | 🐙 Minor | ⭐⭐ | Fixes issue 1282 by making sure dont need to specify paths in tsconfig in order to import files from the root directory |

### [fctpe](https://github.com/fctpe)

| PRs # | Impact | Rating | Description |
|------|--------|--------|-------------|
| [#388](https://github.com/tscircuit/circuit-to-svg/pull/388) | 🐳 Major | ⭐⭐⭐ | Add SVG rendering support for pcb_courtyard_rect elements, rendering courtyards as yellow dashed rectangles. |

### [Ayushjhawar8](https://github.com/Ayushjhawar8)

| PRs # | Impact | Rating | Description |
|------|--------|--------|-------------|
| [#393](https://github.com/tscircuit/circuit-to-svg/pull/393) | 🐳 Major | ⭐⭐⭐ | Adds text wrapping functionality for long legend names in the graph rendering, improving readability. |
| [#1486](https://github.com/tscircuit/runframe/pull/1486) | 🐳 Major | ⭐⭐⭐ | Adds functionality to save favorite files to local storage and sets the current directory to the current file by default in the file selector. |
| [#256](https://github.com/tscircuit/docs/pull/256) | 🐙 Minor | ⭐⭐ | Fixes the table layout to be more responsive and visually consistent across all devices by adjusting CSS properties for better readability and alignment. |
| [#242](https://github.com/tscircuit/docs/pull/242) | 🐙 Minor | ⭐⭐ | Adjusts the mobile sidebar width for better visibility on smaller screens. |

<details>
<summary>🐌 Tiny Contributions (3)</summary>

| PR # | Impact | Description |
|------|--------|-------------|
| [#394](https://github.com/tscircuit/circuit-to-svg/pull/394) | 🐌 Tiny | Adjusts legend label font size and positioning for better visibility and organization in simulation graphs. |
| [#1470](https://github.com/tscircuit/runframe/pull/1470) | 🐌 Tiny | img width1074 height561 altimage srchttps:github.comuser-attachmentsassets6ebe85ed-b5b4-4868-9c7e-512f0563b88d  img width1071 height510 altimage srchttps:github.comuser-attachmentsassets400fe2bf-b35b-4232-bee9-aa3ecdd54960 |
| [#262](https://github.com/tscircuit/docs/pull/262) | 🐌 Tiny | Fixes white space issues and improves the formatting of code elements within markdown tables. |

</details>

### [Heinrich-XIAO](https://github.com/Heinrich-XIAO)

| PRs # | Impact | Rating | Description |
|------|--------|--------|-------------|
| [#26](https://github.com/tscircuit/issue-roulette/pull/26) | 🐙 Minor | ⭐⭐ | Removes the limit on the number of issues sent, which previously restricted the functionality of the issue roulette feature. |

<details>
<summary>🐌 Tiny Contributions (2)</summary>

| PR # | Impact | Description |
|------|--------|-------------|
| [#28](https://github.com/tscircuit/issue-roulette/pull/28) | 🐌 Tiny | Fixes the issue of including archived repositories in the issue fetching process by filtering them out before fetching issues. |
| [#25](https://github.com/tscircuit/issue-roulette/pull/25) | 🐌 Tiny | Fetches all issues from all repositories in the tscircuit organization instead of limiting to the first 100 repositories and issues. |

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
| [jscad-electronics](https://github.com/tscircuit/jscad-electronics/blob/main/.github/CODEOWNERS) | [seveibar](https://github.com/seveibar), [abhijitxy](https://github.com/abhijitxy), [anas-sarkez](https://github.com/anas-sarkez)
| [circuit-to-svg](https://github.com/tscircuit/circuit-to-svg/blob/main/.github/CODEOWNERS) | [imrishabh18](https://github.com/imrishabh18)
| [schematic-symbols](https://github.com/tscircuit/schematic-symbols/blob/main/.github/CODEOWNERS) | [seveibar](https://github.com/seveibar), [imrishabh18](https://github.com/imrishabh18), [techmannih](https://github.com/techmannih)
| [circuit-json-to-gerber](https://github.com/tscircuit/circuit-json-to-gerber/blob/main/.github/CODEOWNERS) | [seveibar](https://github.com/seveibar), [ShiboSoftwareDev](https://github.com/ShiboSoftwareDev)
| [tscircuit.com](https://github.com/tscircuit/tscircuit.com/blob/main/.github/CODEOWNERS) | [seveibar](https://github.com/seveibar), [imrishabh18](https://github.com/imrishabh18)
| [issue-roulette](https://github.com/tscircuit/issue-roulette/blob/main/.github/CODEOWNERS) | [Anshgrover23](https://github.com/Anshgrover23)
| [sparkfun-boards](https://github.com/tscircuit/sparkfun-boards/blob/main/.github/CODEOWNERS) | [ShiboSoftwareDev](https://github.com/ShiboSoftwareDev), [Abse2001](https://github.com/Abse2001), [MustafaMulla29](https://github.com/MustafaMulla29), [Anshgrover23](https://github.com/Anshgrover23), [techmannih](https://github.com/techmannih)
| [schematic-corpus](https://github.com/tscircuit/schematic-corpus/blob/main/.github/CODEOWNERS) | [Abse2001](https://github.com/Abse2001)

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
| [ShiboSoftwareDev](https://github.com/ShiboSoftwareDev) | [pcb-viewer](https://github.com/tscircuit/pcb-viewer/blob/main/.github/CODEOWNERS) |
|  | [3d-viewer](https://github.com/tscircuit/3d-viewer/blob/main/.github/CODEOWNERS) |
|  | [winterspec](https://github.com/tscircuit/winterspec/blob/main/.github/CODEOWNERS) |
|  | [circuit-json-to-gerber](https://github.com/tscircuit/circuit-json-to-gerber/blob/main/.github/CODEOWNERS) |
|  | [sparkfun-boards](https://github.com/tscircuit/sparkfun-boards/blob/main/.github/CODEOWNERS) |
| [techmannih](https://github.com/techmannih) | [footprinter](https://github.com/tscircuit/footprinter/blob/main/.github/CODEOWNERS) |
|  | [schematic-symbols](https://github.com/tscircuit/schematic-symbols/blob/main/.github/CODEOWNERS) |
|  | [sparkfun-boards](https://github.com/tscircuit/sparkfun-boards/blob/main/.github/CODEOWNERS) |
| [abhijitxy](https://github.com/abhijitxy) | [jscad-electronics](https://github.com/tscircuit/jscad-electronics/blob/main/.github/CODEOWNERS) |
| [anas-sarkez](https://github.com/anas-sarkez) | [jscad-electronics](https://github.com/tscircuit/jscad-electronics/blob/main/.github/CODEOWNERS) |
| [imrishabh18](https://github.com/imrishabh18) | [circuit-to-svg](https://github.com/tscircuit/circuit-to-svg/blob/main/.github/CODEOWNERS) |
|  | [schematic-symbols](https://github.com/tscircuit/schematic-symbols/blob/main/.github/CODEOWNERS) |
|  | [tscircuit.com](https://github.com/tscircuit/tscircuit.com/blob/main/.github/CODEOWNERS) |
| [Anshgrover23](https://github.com/Anshgrover23) | [issue-roulette](https://github.com/tscircuit/issue-roulette/blob/main/.github/CODEOWNERS) |
|  | [sparkfun-boards](https://github.com/tscircuit/sparkfun-boards/blob/main/.github/CODEOWNERS) |
| [Abse2001](https://github.com/Abse2001) | [sparkfun-boards](https://github.com/tscircuit/sparkfun-boards/blob/main/.github/CODEOWNERS) |
|  | [schematic-corpus](https://github.com/tscircuit/schematic-corpus/blob/main/.github/CODEOWNERS) |
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
