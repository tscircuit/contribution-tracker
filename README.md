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

# Contribution Overview 2025-03-05

## PRs by Repository

```mermaid
pie
    "tscircuit/runframe" : 1
    "tscircuit/pcb-viewer" : 1
    "tscircuit/dsn-converter" : 3
    "tscircuit/tscircuit.com" : 5
    "tscircuit/circuit-json" : 1
    "tscircuit/core" : 3
    "tscircuit/fake-freerouting" : 1
    "tscircuit/footprinter" : 5
    "tscircuit/circuit-to-svg" : 2
    "tscircuit/schematic-symbols" : 1
    "tscircuit/capacity-autorouter" : 6
    "tscircuit/jlcsearch" : 2
    "tscircuit/contribution-tracker" : 1
    "tscircuit/graphics-debug" : 1
    "tscircuit/eval" : 1
```

## Contributor Overview

| Contributor | 🐳 Major | 🐙 Minor | 🐌 Tiny | ⭐ | Issues Created |
|-------------|---------|---------|---------|-----|----------------|
| [seveibar](#seveibar) | 6 | 1 | 0 | ⭐⭐⭐ | 26 |
| [imrishabh18](#imrishabh18) | 2 | 8 | 1 | ⭐⭐ | 9 |
| [techmannih](#techmannih) | 0 | 6 | 0 | ⭐⭐ | 5 |
| [ArnavK-09](#ArnavK-09) | 1 | 1 | 1 | ⭐ | 0 |
| [Ayushjhawar8](#Ayushjhawar8) | 1 | 1 | 0 | ⭐ | 1 |
| [Abse2001](#Abse2001) | 1 | 1 | 0 | ⭐ | 0 |
| [Anshgrover23](#Anshgrover23) | 0 | 1 | 0 |  | 3 |
| [MustafaMulla29](#MustafaMulla29) | 0 | 1 | 0 |  | 2 |
| [tscircuitbot](#tscircuitbot) | 0 | 0 | 1 |  | 0 |

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
| [imrishabh18](#imrishabh18) | 9 | 4 | 0 | 4 | 1 | 15 | 11 | 9 | 4 | 25 |
| [seveibar](#seveibar) | 0 | 0 | 0 | 17 | 2 | 11 | 7 | 26 | 16 | 277 |
| [Abse2001](#Abse2001) | 2 | 2 | 0 | 0 | 0 | 2 | 2 | 0 | 0 | 0 |
| [ShiboSoftwareDev](#ShiboSoftwareDev) | 1 | 0 | 0 | 0 | 0 | 2 | 0 | 2 | 1 | 10 |
| [techmannih](#techmannih) | 9 | 7 | 2 | 2 | 3 | 10 | 6 | 5 | 1 | 5 |
| [MustafaMulla29](#MustafaMulla29) | 10 | 3 | 2 | 0 | 0 | 3 | 1 | 2 | 0 | 0 |
| [Rishikesh63](#Rishikesh63) | 2 | 0 | 1 | 0 | 0 | 2 | 0 | 1 | 0 | 0 |
| [ArnavK-09](#ArnavK-09) | 4 | 2 | 0 | 0 | 0 | 4 | 3 | 0 | 0 | 0 |
| [Ayushjhawar8](#Ayushjhawar8) | 7 | 3 | 0 | 0 | 0 | 3 | 2 | 1 | 1 | 10 |
| [Husainj](#Husainj) | 1 | 0 | 1 | 0 | 0 | 1 | 0 | 0 | 0 | 0 |
| [Anshgrover23](#Anshgrover23) | 1 | 1 | 0 | 0 | 1 | 1 | 1 | 3 | 1 | 5 |
| [kom-senapati](#kom-senapati) | 7 | 1 | 1 | 0 | 0 | 1 | 0 | 0 | 0 | 0 |
| [PatanSharuKhan](#PatanSharuKhan) | 0 | 0 | 0 | 0 | 0 | 3 | 0 | 0 | 0 | 0 |
| [krushnarout](#krushnarout) | 0 | 0 | 0 | 0 | 0 | 1 | 0 | 0 | 0 | 0 |
| [tscircuitbot](#tscircuitbot) | 0 | 0 | 0 | 0 | 0 | 1 | 1 | 0 | 0 | 0 |

## Changes by Repository

### [tscircuit/runframe](https://github.com/tscircuit/runframe)

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#323](https://github.com/tscircuit/runframe/pull/323) | 🐳 Major | Abse2001 | Adds a feature to emit `onEditEvent` with an example and debounces the events to only emit the last one after dragging ends. |

### [tscircuit/pcb-viewer](https://github.com/tscircuit/pcb-viewer)

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#191](https://github.com/tscircuit/pcb-viewer/pull/191) | 🐙 Minor | Abse2001 | Changes the type of `EditEvent` from a union of `EditPcbComponentLocationEvent` and `EditTraceHintEvent` to just `ManualEditEvent`. |

### [tscircuit/dsn-converter](https://github.com/tscircuit/dsn-converter)

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#101](https://github.com/tscircuit/dsn-converter/pull/101) | 🐳 Major | imrishabh18 | Add trace thickness information from the circuit JSON to the DSN file. |
| [#103](https://github.com/tscircuit/dsn-converter/pull/103) | 🐙 Minor | imrishabh18 | Changed the trace width used in freerouting from 100 to 150. |
| [#102](https://github.com/tscircuit/dsn-converter/pull/102) | 🐙 Minor | imrishabh18 | Add support for thickness conversion from ses file to circuit-json |

### [tscircuit/tscircuit.com](https://github.com/tscircuit/tscircuit.com)

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#714](https://github.com/tscircuit/tscircuit.com/pull/714) | 🐳 Major | imrishabh18 | Adds a new `/update` endpoint to the package fake API that allows updating existing packages, including privacy settings. |
| [#723](https://github.com/tscircuit/tscircuit.com/pull/723) | 🐙 Minor | imrishabh18 | Update dependencies for `@tscircuit/core` and `@tscircuit/runframe` packages |
| [#718](https://github.com/tscircuit/tscircuit.com/pull/718) | 🐙 Minor | imrishabh18 | Adds the support for users to have private snippets. |
| [#722](https://github.com/tscircuit/tscircuit.com/pull/722) | 🐙 Minor | Anshgrover23 | Fixes playwright tests for the editor page and footprint dialog |
| [#724](https://github.com/tscircuit/tscircuit.com/pull/724) | 🐌 Tiny | imrishabh18 | Update the `@tscircuit/runframe` dependency to version `0.0.244`. |

### [tscircuit/circuit-json](https://github.com/tscircuit/circuit-json)

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#161](https://github.com/tscircuit/circuit-json/pull/161) | 🐙 Minor | imrishabh18 | Add `min_trace_thickness` property to `source_trace` object |

### [tscircuit/core](https://github.com/tscircuit/core)

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#696](https://github.com/tscircuit/core/pull/696) | 🐙 Minor | imrishabh18 | Add thickness to `source_trace` in the Trace component. |
| [#691](https://github.com/tscircuit/core/pull/691) | 🐙 Minor | imrishabh18 | Fix a hover bug for traces by setting the `source_trace_id` property of the `pcb_trace` object. |
| [#692](https://github.com/tscircuit/core/pull/692) | 🐙 Minor | seveibar | Update the version of the capacity autorouter dependency. |

### [tscircuit/fake-freerouting](https://github.com/tscircuit/fake-freerouting)

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#23](https://github.com/tscircuit/fake-freerouting/pull/23) | 🐙 Minor | imrishabh18 | Update the `dsn-converter` dependency version and update the snapshot tests. |

### [tscircuit/footprinter](https://github.com/tscircuit/footprinter)

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#242](https://github.com/tscircuit/footprinter/pull/242) | 🐙 Minor | techmannih | Adds a new footprint for the SOD80 package. |
| [#247](https://github.com/tscircuit/footprinter/pull/247) | 🐙 Minor | techmannih | The pull request adds a new footprint for the SOD323W component. |
| [#245](https://github.com/tscircuit/footprinter/pull/245) | 🐙 Minor | techmannih | Adds a new footprint for the SOD323FL package. |
| [#243](https://github.com/tscircuit/footprinter/pull/243) | 🐙 Minor | techmannih | Add the Sod123fl footprint. |
| [#235](https://github.com/tscircuit/footprinter/pull/235) | 🐙 Minor | MustafaMulla29 | Implemented the MSOP-8 component footprint. |

### [tscircuit/circuit-to-svg](https://github.com/tscircuit/circuit-to-svg)

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#193](https://github.com/tscircuit/circuit-to-svg/pull/193) | 🐙 Minor | techmannih | Add support for pill-shaped holes with rectangular plated pads |
| [#191](https://github.com/tscircuit/circuit-to-svg/pull/191) | 🐙 Minor | Ayushjhawar8 | The pull request fixes an issue where the bottom layer silkscreen elements were not visually distinguishable, and adds different colors for the top (yellow) and bottom (blue) silkscreen elements. |

### [tscircuit/schematic-symbols](https://github.com/tscircuit/schematic-symbols)

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#263](https://github.com/tscircuit/schematic-symbols/pull/263) | 🐙 Minor | techmannih | Add a new tilted ground symbol |

### [tscircuit/capacity-autorouter](https://github.com/tscircuit/capacity-autorouter)

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#38](https://github.com/tscircuit/capacity-autorouter/pull/38) | 🐳 Major | seveibar | Fixes high density routing issues where smaller cell sizes weren't working. |
| [#37](https://github.com/tscircuit/capacity-autorouter/pull/37) | 🐳 Major | seveibar | Adds a detailed JSON configuration for a keyboard design, including obstacles, trace widths, and layer count. |
| [#35](https://github.com/tscircuit/capacity-autorouter/pull/35) | 🐳 Major | seveibar | The pull request changes the implementation of the Edge Solver to only solve between layer-compatible nodes and generate single layer nodes when there's a single-layer obstacle. |
| [#34](https://github.com/tscircuit/capacity-autorouter/pull/34) | 🐳 Major | seveibar | Replace CapacitySegmentPointOptimizer with UnravelMultiSectionSolver, many fixes and optimizations with a 10x speed increase and higher quality. |
| [#33](https://github.com/tscircuit/capacity-autorouter/pull/33) | 🐳 Major | seveibar | Introduces a new UnravelSectionSolver with A* algorithm for path planning. |
| [#32](https://github.com/tscircuit/capacity-autorouter/pull/32) | 🐳 Major | seveibar | Fix major issues in Capacity Segment Optimization |

### [tscircuit/jlcsearch](https://github.com/tscircuit/jlcsearch)

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#36](https://github.com/tscircuit/jlcsearch/pull/36) | 🐳 Major | ArnavK-09 | Introduces a new API endpoint `/api/search` for searching components with support for full-text search, filtering by package, and limiting the number of results. |
| [#39](https://github.com/tscircuit/jlcsearch/pull/39) | 🐌 Tiny | ArnavK-09 | Removes a surplus log statement from a search API test. |

### [tscircuit/contribution-tracker](https://github.com/tscircuit/contribution-tracker)

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#97](https://github.com/tscircuit/contribution-tracker/pull/97) | 🐙 Minor | ArnavK-09 | Upload the Anthropic cache to GitHub Actions |

### [tscircuit/graphics-debug](https://github.com/tscircuit/graphics-debug)

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#35](https://github.com/tscircuit/graphics-debug/pull/35) | 🐳 Major | Ayushjhawar8 | Add a dimension overlay feature that displays the dimensions of an object on the canvas. |

### [tscircuit/eval](https://github.com/tscircuit/eval)

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#135](https://github.com/tscircuit/eval/pull/135) | 🐌 Tiny | tscircuitbot | Update @tscircuit/core to v0.0.348 |

## Changes by Contributor

### [Abse2001](https://github.com/Abse2001)

| PR # | Impact | Description |
|------|--------|-------------|
| [#323](https://github.com/tscircuit/runframe/pull/323) | 🐳 Major | Adds a feature to emit `onEditEvent` with an example and debounces the events to only emit the last one after dragging ends. |
| [#191](https://github.com/tscircuit/pcb-viewer/pull/191) | 🐙 Minor | Changes the type of `EditEvent` from a union of `EditPcbComponentLocationEvent` and `EditTraceHintEvent` to just `ManualEditEvent`. |

### [imrishabh18](https://github.com/imrishabh18)

| PR # | Impact | Description |
|------|--------|-------------|
| [#101](https://github.com/tscircuit/dsn-converter/pull/101) | 🐳 Major | Add trace thickness information from the circuit JSON to the DSN file. |
| [#714](https://github.com/tscircuit/tscircuit.com/pull/714) | 🐳 Major | Adds a new `/update` endpoint to the package fake API that allows updating existing packages, including privacy settings. |
| [#161](https://github.com/tscircuit/circuit-json/pull/161) | 🐙 Minor | Add `min_trace_thickness` property to `source_trace` object |
| [#696](https://github.com/tscircuit/core/pull/696) | 🐙 Minor | Add thickness to `source_trace` in the Trace component. |
| [#691](https://github.com/tscircuit/core/pull/691) | 🐙 Minor | Fix a hover bug for traces by setting the `source_trace_id` property of the `pcb_trace` object. |
| [#103](https://github.com/tscircuit/dsn-converter/pull/103) | 🐙 Minor | Changed the trace width used in freerouting from 100 to 150. |
| [#102](https://github.com/tscircuit/dsn-converter/pull/102) | 🐙 Minor | Add support for thickness conversion from ses file to circuit-json |
| [#723](https://github.com/tscircuit/tscircuit.com/pull/723) | 🐙 Minor | Update dependencies for `@tscircuit/core` and `@tscircuit/runframe` packages |
| [#718](https://github.com/tscircuit/tscircuit.com/pull/718) | 🐙 Minor | Adds the support for users to have private snippets. |
| [#23](https://github.com/tscircuit/fake-freerouting/pull/23) | 🐙 Minor | Update the `dsn-converter` dependency version and update the snapshot tests. |
| [#724](https://github.com/tscircuit/tscircuit.com/pull/724) | 🐌 Tiny | Update the `@tscircuit/runframe` dependency to version `0.0.244`. |

### [techmannih](https://github.com/techmannih)

| PR # | Impact | Description |
|------|--------|-------------|
| [#242](https://github.com/tscircuit/footprinter/pull/242) | 🐙 Minor | Adds a new footprint for the SOD80 package. |
| [#247](https://github.com/tscircuit/footprinter/pull/247) | 🐙 Minor | The pull request adds a new footprint for the SOD323W component. |
| [#245](https://github.com/tscircuit/footprinter/pull/245) | 🐙 Minor | Adds a new footprint for the SOD323FL package. |
| [#243](https://github.com/tscircuit/footprinter/pull/243) | 🐙 Minor | Add the Sod123fl footprint. |
| [#193](https://github.com/tscircuit/circuit-to-svg/pull/193) | 🐙 Minor | Add support for pill-shaped holes with rectangular plated pads |
| [#263](https://github.com/tscircuit/schematic-symbols/pull/263) | 🐙 Minor | Add a new tilted ground symbol |

### [MustafaMulla29](https://github.com/MustafaMulla29)

| PR # | Impact | Description |
|------|--------|-------------|
| [#235](https://github.com/tscircuit/footprinter/pull/235) | 🐙 Minor | Implemented the MSOP-8 component footprint. |

### [seveibar](https://github.com/seveibar)

| PR # | Impact | Description |
|------|--------|-------------|
| [#38](https://github.com/tscircuit/capacity-autorouter/pull/38) | 🐳 Major | Fixes high density routing issues where smaller cell sizes weren't working. |
| [#37](https://github.com/tscircuit/capacity-autorouter/pull/37) | 🐳 Major | Adds a detailed JSON configuration for a keyboard design, including obstacles, trace widths, and layer count. |
| [#35](https://github.com/tscircuit/capacity-autorouter/pull/35) | 🐳 Major | The pull request changes the implementation of the Edge Solver to only solve between layer-compatible nodes and generate single layer nodes when there's a single-layer obstacle. |
| [#34](https://github.com/tscircuit/capacity-autorouter/pull/34) | 🐳 Major | Replace CapacitySegmentPointOptimizer with UnravelMultiSectionSolver, many fixes and optimizations with a 10x speed increase and higher quality. |
| [#33](https://github.com/tscircuit/capacity-autorouter/pull/33) | 🐳 Major | Introduces a new UnravelSectionSolver with A* algorithm for path planning. |
| [#32](https://github.com/tscircuit/capacity-autorouter/pull/32) | 🐳 Major | Fix major issues in Capacity Segment Optimization |
| [#692](https://github.com/tscircuit/core/pull/692) | 🐙 Minor | Update the version of the capacity autorouter dependency. |

### [ArnavK-09](https://github.com/ArnavK-09)

| PR # | Impact | Description |
|------|--------|-------------|
| [#36](https://github.com/tscircuit/jlcsearch/pull/36) | 🐳 Major | Introduces a new API endpoint `/api/search` for searching components with support for full-text search, filtering by package, and limiting the number of results. |
| [#97](https://github.com/tscircuit/contribution-tracker/pull/97) | 🐙 Minor | Upload the Anthropic cache to GitHub Actions |
| [#39](https://github.com/tscircuit/jlcsearch/pull/39) | 🐌 Tiny | Removes a surplus log statement from a search API test. |

### [Ayushjhawar8](https://github.com/Ayushjhawar8)

| PR # | Impact | Description |
|------|--------|-------------|
| [#35](https://github.com/tscircuit/graphics-debug/pull/35) | 🐳 Major | Add a dimension overlay feature that displays the dimensions of an object on the canvas. |
| [#191](https://github.com/tscircuit/circuit-to-svg/pull/191) | 🐙 Minor | The pull request fixes an issue where the bottom layer silkscreen elements were not visually distinguishable, and adds different colors for the top (yellow) and bottom (blue) silkscreen elements. |

### [Anshgrover23](https://github.com/Anshgrover23)

| PR # | Impact | Description |
|------|--------|-------------|
| [#722](https://github.com/tscircuit/tscircuit.com/pull/722) | 🐙 Minor | Fixes playwright tests for the editor page and footprint dialog |

### [tscircuitbot](https://github.com/tscircuitbot)

| PR # | Impact | Description |
|------|--------|-------------|
| [#135](https://github.com/tscircuit/eval/pull/135) | 🐌 Tiny | Update @tscircuit/core to v0.0.348 |



<!-- END_CURRENT_WEEK -->
