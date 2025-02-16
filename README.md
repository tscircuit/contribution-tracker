# contribution-tracker

Generates weekly contribution overviews for tscircuit contributors. Check out all
the [contribution overviews here](./contribution-overviews/)

* All PRs in the tscircuit org are scanned/summarized via Claude Haiku
* Claude classifies each Diff/PR as a Major, Minor or Tiny contribution
* All the PRs, summaries, and classifications are organized into charts and tables

The current week is shown below. There are 3 major sections:

* [Contributor Overview](#contributor-overview)
* [PRs by Repository](#prs-by-repository)
* [PRs by Contributor](#changes-by-contributor)

## Current Week

<!-- START_CURRENT_WEEK -->

# Contribution Overview 2025-02-12

## PRs by Repository

```mermaid
pie
    "tscircuit/circuit-json" : 2
    "tscircuit/props" : 5
    "tscircuit/core" : 6
    "tscircuit/cli" : 15
    "tscircuit/footprinter" : 5
    "tscircuit/schematic-symbols" : 1
    "tscircuit/runframe" : 5
    "tscircuit/docs" : 1
    "tscircuit/chat.tscircuit.com" : 1
    "tscircuit/3d-viewer" : 2
    "tscircuit/jscad-electronics" : 1
    "tscircuit/tscircuit.com" : 1
    "tscircuit/plop" : 1
    "tscircuit/circuit-to-svg" : 1
    "tscircuit/trending-snippet-autoposter" : 2
    "tscircuit/dsn-converter" : 2
    "tscircuit/prompt-benchmarks" : 1
```

## Contributor Overview

| Contributor | 🐳 Major | 🐙 Minor | 🐌 Tiny | ⭐ | Issues Created |
|-------------|---------|---------|---------|-----|----------------|
| [seveibar](#seveibar) | 0 | 7 | 0 | ⭐⭐⭐ | 39 |
| [imrishabh18](#imrishabh18) | 0 | 15 | 0 | ⭐⭐⭐ | 10 |
| [Anshgrover23](#Anshgrover23) | 0 | 9 | 0 | ⭐⭐ | 5 |
| [techmannih](#techmannih) | 0 | 7 | 0 | ⭐⭐ | 5 |
| [ShiboSoftwareDev](#ShiboSoftwareDev) | 0 | 1 | 0 | ⭐⭐ | 11 |
| [ArnavK-09](#ArnavK-09) | 0 | 8 | 0 | ⭐⭐ | 1 |
| [Abse2001](#Abse2001) | 0 | 2 | 0 | ⭐ | 1 |
| [kom-senapati](#kom-senapati) | 0 | 2 | 0 | ⭐ | 2 |
| [rohittcodes](#rohittcodes) | 0 | 1 | 0 |  | 0 |

## Review Table

[reviews-received-hover]: ## "Number of reviews received for PRs for this contributor"
[approvals-received-hover]: ## "Number of approvals received for PRs this contributor authored"
[rejections-received-hover]: ## "Number of rejections received for PRs this contributor authored"
[prs-opened-hover]: ## "Number of PRs opened by this contributor"
[issues-created-hover]: ## "Number of issues created by this contributor"
[bountied-issues-hover]: ## "Number of issues this contributor created with a bounty"
[bountied-issue-$-hover]: ## "Total bounty amount placed on issues authored by this contributor"

| Contributor | Reviews Received | Approvals Received | Rejections Received | Approvals | Rejections | PRs Opened | PRs Merged | Issues Created | Bountied Issues | Bountied Issue $ |
|---|---|---|---|---|---|---|---|---|---|---|
| [krushnarout](#krushnarout) | 0 | 0 | 0 | 0 | 0 | 1 | 0 | 0 | 0 | 0 |
| [007King007](#007King007) | 1 | 0 | 1 | 0 | 0 | 1 | 0 | 0 | 0 | 0 |
| [seveibar](#seveibar) | 0 | 0 | 0 | 27 | 7 | 7 | 7 | 39 | 31 | 573 |
| [zalabhavy](#zalabhavy) | 0 | 0 | 0 | 0 | 0 | 1 | 0 | 1 | 0 | 0 |
| [Anshgrover23](#Anshgrover23) | 29 | 13 | 4 | 3 | 11 | 10 | 9 | 5 | 0 | 0 |
| [Abse2001](#Abse2001) | 5 | 1 | 0 | 2 | 0 | 2 | 2 | 1 | 0 | 0 |
| [techmannih](#techmannih) | 28 | 12 | 5 | 0 | 0 | 10 | 7 | 5 | 3 | 23 |
| [imrishabh18](#imrishabh18) | 7 | 5 | 0 | 12 | 7 | 19 | 15 | 10 | 1 | 15 |
| [AnasSarkiz](#AnasSarkiz) | 0 | 0 | 0 | 0 | 1 | 0 | 0 | 0 | 0 | 0 |
| [rohittcodes](#rohittcodes) | 4 | 1 | 0 | 0 | 0 | 1 | 1 | 0 | 0 | 0 |
| [ShiboSoftwareDev](#ShiboSoftwareDev) | 1 | 1 | 0 | 1 | 1 | 3 | 1 | 11 | 6 | 87 |
| [arnavjoyel](#arnavjoyel) | 0 | 0 | 0 | 0 | 0 | 1 | 0 | 0 | 0 | 0 |
| [ArnavK-09](#ArnavK-09) | 35 | 7 | 7 | 1 | 1 | 11 | 8 | 1 | 0 | 0 |
| [Ayushjhawar8](#Ayushjhawar8) | 12 | 1 | 7 | 0 | 0 | 3 | 0 | 1 | 0 | 0 |
| [kom-senapati](#kom-senapati) | 13 | 5 | 2 | 0 | 0 | 5 | 2 | 2 | 0 | 0 |
| [Saurabhsing21](#Saurabhsing21) | 2 | 0 | 2 | 0 | 0 | 1 | 0 | 0 | 0 | 0 |

## Changes by Repository

### [tscircuit/circuit-json](https://github.com/tscircuit/circuit-json)

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#133](https://github.com/tscircuit/circuit-json/pull/133) | 🐙 Minor | Anshgrover23 |  |
| [#131](https://github.com/tscircuit/circuit-json/pull/131) | 🐙 Minor | techmannih |  |

### [tscircuit/props](https://github.com/tscircuit/props)

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#182](https://github.com/tscircuit/props/pull/182) | 🐙 Minor | Anshgrover23 |  |
| [#180](https://github.com/tscircuit/props/pull/180) | 🐙 Minor | Anshgrover23 |  |
| [#176](https://github.com/tscircuit/props/pull/176) | 🐙 Minor | Anshgrover23 |  |
| [#178](https://github.com/tscircuit/props/pull/178) | 🐙 Minor | techmannih |  |
| [#177](https://github.com/tscircuit/props/pull/177) | 🐙 Minor | seveibar |  |

### [tscircuit/core](https://github.com/tscircuit/core)

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#633](https://github.com/tscircuit/core/pull/633) | 🐙 Minor | Anshgrover23 |  |
| [#629](https://github.com/tscircuit/core/pull/629) | 🐙 Minor | Anshgrover23 |  |
| [#626](https://github.com/tscircuit/core/pull/626) | 🐙 Minor | Anshgrover23 |  |
| [#625](https://github.com/tscircuit/core/pull/625) | 🐙 Minor | Anshgrover23 |  |
| [#628](https://github.com/tscircuit/core/pull/628) | 🐙 Minor | techmannih |  |
| [#630](https://github.com/tscircuit/core/pull/630) | 🐙 Minor | imrishabh18 |  |

### [tscircuit/cli](https://github.com/tscircuit/cli)

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#79](https://github.com/tscircuit/cli/pull/79) | 🐙 Minor | Anshgrover23 |  |
| [#70](https://github.com/tscircuit/cli/pull/70) | 🐙 Minor | seveibar |  |
| [#77](https://github.com/tscircuit/cli/pull/77) | 🐙 Minor | imrishabh18 |  |
| [#72](https://github.com/tscircuit/cli/pull/72) | 🐙 Minor | imrishabh18 |  |
| [#61](https://github.com/tscircuit/cli/pull/61) | 🐙 Minor | imrishabh18 |  |
| [#69](https://github.com/tscircuit/cli/pull/69) | 🐙 Minor | imrishabh18 |  |
| [#65](https://github.com/tscircuit/cli/pull/65) | 🐙 Minor | imrishabh18 |  |
| [#62](https://github.com/tscircuit/cli/pull/62) | 🐙 Minor | imrishabh18 |  |
| [#60](https://github.com/tscircuit/cli/pull/60) | 🐙 Minor | imrishabh18 |  |
| [#73](https://github.com/tscircuit/cli/pull/73) | 🐙 Minor | ArnavK-09 |  |
| [#64](https://github.com/tscircuit/cli/pull/64) | 🐙 Minor | ArnavK-09 |  |
| [#66](https://github.com/tscircuit/cli/pull/66) | 🐙 Minor | ArnavK-09 |  |
| [#63](https://github.com/tscircuit/cli/pull/63) | 🐙 Minor | ArnavK-09 |  |
| [#71](https://github.com/tscircuit/cli/pull/71) | 🐙 Minor | kom-senapati |  |
| [#57](https://github.com/tscircuit/cli/pull/57) | 🐙 Minor | kom-senapati |  |

### [tscircuit/footprinter](https://github.com/tscircuit/footprinter)

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#191](https://github.com/tscircuit/footprinter/pull/191) | 🐙 Minor | techmannih |  |
| [#175](https://github.com/tscircuit/footprinter/pull/175) | 🐙 Minor | techmannih |  |
| [#186](https://github.com/tscircuit/footprinter/pull/186) | 🐙 Minor | techmannih |  |
| [#187](https://github.com/tscircuit/footprinter/pull/187) | 🐙 Minor | imrishabh18 |  |
| [#130](https://github.com/tscircuit/footprinter/pull/130) | 🐙 Minor | rohittcodes |  |

### [tscircuit/schematic-symbols](https://github.com/tscircuit/schematic-symbols)

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#249](https://github.com/tscircuit/schematic-symbols/pull/249) | 🐙 Minor | techmannih |  |

### [tscircuit/runframe](https://github.com/tscircuit/runframe)

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#254](https://github.com/tscircuit/runframe/pull/254) | 🐙 Minor | seveibar |  |
| [#252](https://github.com/tscircuit/runframe/pull/252) | 🐙 Minor | seveibar |  |
| [#243](https://github.com/tscircuit/runframe/pull/243) | 🐙 Minor | seveibar |  |
| [#235](https://github.com/tscircuit/runframe/pull/235) | 🐙 Minor | imrishabh18 |  |
| [#234](https://github.com/tscircuit/runframe/pull/234) | 🐙 Minor | imrishabh18 |  |

### [tscircuit/docs](https://github.com/tscircuit/docs)

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#9](https://github.com/tscircuit/docs/pull/9) | 🐙 Minor | seveibar |  |

### [tscircuit/chat.tscircuit.com](https://github.com/tscircuit/chat.tscircuit.com)

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#3](https://github.com/tscircuit/chat.tscircuit.com/pull/3) | 🐙 Minor | seveibar |  |

### [tscircuit/3d-viewer](https://github.com/tscircuit/3d-viewer)

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#179](https://github.com/tscircuit/3d-viewer/pull/179) | 🐙 Minor | imrishabh18 |  |
| [#176](https://github.com/tscircuit/3d-viewer/pull/176) | 🐙 Minor | imrishabh18 |  |

### [tscircuit/jscad-electronics](https://github.com/tscircuit/jscad-electronics)

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#86](https://github.com/tscircuit/jscad-electronics/pull/86) | 🐙 Minor | imrishabh18 |  |

### [tscircuit/tscircuit.com](https://github.com/tscircuit/tscircuit.com)

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#667](https://github.com/tscircuit/tscircuit.com/pull/667) | 🐙 Minor | imrishabh18 |  |

### [tscircuit/plop](https://github.com/tscircuit/plop)

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#9](https://github.com/tscircuit/plop/pull/9) | 🐙 Minor | ArnavK-09 |  |

### [tscircuit/circuit-to-svg](https://github.com/tscircuit/circuit-to-svg)

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#167](https://github.com/tscircuit/circuit-to-svg/pull/167) | 🐙 Minor | ArnavK-09 |  |

### [tscircuit/trending-snippet-autoposter](https://github.com/tscircuit/trending-snippet-autoposter)

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#7](https://github.com/tscircuit/trending-snippet-autoposter/pull/7) | 🐙 Minor | ArnavK-09 |  |
| [#4](https://github.com/tscircuit/trending-snippet-autoposter/pull/4) | 🐙 Minor | ArnavK-09 |  |

### [tscircuit/dsn-converter](https://github.com/tscircuit/dsn-converter)

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#92](https://github.com/tscircuit/dsn-converter/pull/92) | 🐙 Minor | Abse2001 |  |
| [#91](https://github.com/tscircuit/dsn-converter/pull/91) | 🐙 Minor | Abse2001 |  |

### [tscircuit/prompt-benchmarks](https://github.com/tscircuit/prompt-benchmarks)

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#36](https://github.com/tscircuit/prompt-benchmarks/pull/36) | 🐙 Minor | ShiboSoftwareDev |  |

## Changes by Contributor

### [Anshgrover23](https://github.com/Anshgrover23)

| PR # | Impact | Description |
|------|--------|-------------|
| [#133](https://github.com/tscircuit/circuit-json/pull/133) | 🐙 Minor |  |
| [#182](https://github.com/tscircuit/props/pull/182) | 🐙 Minor |  |
| [#180](https://github.com/tscircuit/props/pull/180) | 🐙 Minor |  |
| [#176](https://github.com/tscircuit/props/pull/176) | 🐙 Minor |  |
| [#633](https://github.com/tscircuit/core/pull/633) | 🐙 Minor |  |
| [#629](https://github.com/tscircuit/core/pull/629) | 🐙 Minor |  |
| [#626](https://github.com/tscircuit/core/pull/626) | 🐙 Minor |  |
| [#625](https://github.com/tscircuit/core/pull/625) | 🐙 Minor |  |
| [#79](https://github.com/tscircuit/cli/pull/79) | 🐙 Minor |  |

### [techmannih](https://github.com/techmannih)

| PR # | Impact | Description |
|------|--------|-------------|
| [#131](https://github.com/tscircuit/circuit-json/pull/131) | 🐙 Minor |  |
| [#178](https://github.com/tscircuit/props/pull/178) | 🐙 Minor |  |
| [#191](https://github.com/tscircuit/footprinter/pull/191) | 🐙 Minor |  |
| [#175](https://github.com/tscircuit/footprinter/pull/175) | 🐙 Minor |  |
| [#186](https://github.com/tscircuit/footprinter/pull/186) | 🐙 Minor |  |
| [#628](https://github.com/tscircuit/core/pull/628) | 🐙 Minor |  |
| [#249](https://github.com/tscircuit/schematic-symbols/pull/249) | 🐙 Minor |  |

### [seveibar](https://github.com/seveibar)

| PR # | Impact | Description |
|------|--------|-------------|
| [#177](https://github.com/tscircuit/props/pull/177) | 🐙 Minor |  |
| [#254](https://github.com/tscircuit/runframe/pull/254) | 🐙 Minor |  |
| [#252](https://github.com/tscircuit/runframe/pull/252) | 🐙 Minor |  |
| [#243](https://github.com/tscircuit/runframe/pull/243) | 🐙 Minor |  |
| [#70](https://github.com/tscircuit/cli/pull/70) | 🐙 Minor |  |
| [#9](https://github.com/tscircuit/docs/pull/9) | 🐙 Minor |  |
| [#3](https://github.com/tscircuit/chat.tscircuit.com/pull/3) | 🐙 Minor |  |

### [imrishabh18](https://github.com/imrishabh18)

| PR # | Impact | Description |
|------|--------|-------------|
| [#187](https://github.com/tscircuit/footprinter/pull/187) | 🐙 Minor |  |
| [#179](https://github.com/tscircuit/3d-viewer/pull/179) | 🐙 Minor |  |
| [#176](https://github.com/tscircuit/3d-viewer/pull/176) | 🐙 Minor |  |
| [#630](https://github.com/tscircuit/core/pull/630) | 🐙 Minor |  |
| [#86](https://github.com/tscircuit/jscad-electronics/pull/86) | 🐙 Minor |  |
| [#667](https://github.com/tscircuit/tscircuit.com/pull/667) | 🐙 Minor |  |
| [#235](https://github.com/tscircuit/runframe/pull/235) | 🐙 Minor |  |
| [#234](https://github.com/tscircuit/runframe/pull/234) | 🐙 Minor |  |
| [#77](https://github.com/tscircuit/cli/pull/77) | 🐙 Minor |  |
| [#72](https://github.com/tscircuit/cli/pull/72) | 🐙 Minor |  |
| [#61](https://github.com/tscircuit/cli/pull/61) | 🐙 Minor |  |
| [#69](https://github.com/tscircuit/cli/pull/69) | 🐙 Minor |  |
| [#65](https://github.com/tscircuit/cli/pull/65) | 🐙 Minor |  |
| [#62](https://github.com/tscircuit/cli/pull/62) | 🐙 Minor |  |
| [#60](https://github.com/tscircuit/cli/pull/60) | 🐙 Minor |  |

### [rohittcodes](https://github.com/rohittcodes)

| PR # | Impact | Description |
|------|--------|-------------|
| [#130](https://github.com/tscircuit/footprinter/pull/130) | 🐙 Minor |  |

### [ArnavK-09](https://github.com/ArnavK-09)

| PR # | Impact | Description |
|------|--------|-------------|
| [#9](https://github.com/tscircuit/plop/pull/9) | 🐙 Minor |  |
| [#167](https://github.com/tscircuit/circuit-to-svg/pull/167) | 🐙 Minor |  |
| [#73](https://github.com/tscircuit/cli/pull/73) | 🐙 Minor |  |
| [#64](https://github.com/tscircuit/cli/pull/64) | 🐙 Minor |  |
| [#66](https://github.com/tscircuit/cli/pull/66) | 🐙 Minor |  |
| [#63](https://github.com/tscircuit/cli/pull/63) | 🐙 Minor |  |
| [#7](https://github.com/tscircuit/trending-snippet-autoposter/pull/7) | 🐙 Minor |  |
| [#4](https://github.com/tscircuit/trending-snippet-autoposter/pull/4) | 🐙 Minor |  |

### [Abse2001](https://github.com/Abse2001)

| PR # | Impact | Description |
|------|--------|-------------|
| [#92](https://github.com/tscircuit/dsn-converter/pull/92) | 🐙 Minor |  |
| [#91](https://github.com/tscircuit/dsn-converter/pull/91) | 🐙 Minor |  |

### [ShiboSoftwareDev](https://github.com/ShiboSoftwareDev)

| PR # | Impact | Description |
|------|--------|-------------|
| [#36](https://github.com/tscircuit/prompt-benchmarks/pull/36) | 🐙 Minor |  |

### [kom-senapati](https://github.com/kom-senapati)

| PR # | Impact | Description |
|------|--------|-------------|
| [#71](https://github.com/tscircuit/cli/pull/71) | 🐙 Minor |  |
| [#57](https://github.com/tscircuit/cli/pull/57) | 🐙 Minor |  |



<!-- END_CURRENT_WEEK -->
