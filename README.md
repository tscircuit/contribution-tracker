# contribution tracker

[contributions.tscircuit.com](https://contributions.tscircuit.com) ・ [tscircuit.com](https://tscircuit.com) ・ [Contribution Overviews](./contribution-overviews/) ・ [Changelogs](./changelogs/)

Generates weekly contribution overviews for tscircuit contributors. Check out all
the [contribution overviews here](./contribution-overviews/)
You can find AI-generated monthly changelogs in the [changelogs directory](./changelogs/)

- All PRs in the tscircuit org are scanned/summarized via an LLM
- The LLM classifies each Diff/PR as into a set of attributes for scoring
- All the PRs, summaries, and classifications are organized into charts and tables for [the website](https://contributions.tscircuit.com)

> Want to run locally? See the [Development Section](#development)

## Current Week

<!-- START_CURRENT_WEEK -->

# Contribution Overview 2026-09-22

The current week is shown below. There are 3 major sections:

- [Contributor Overview](#contributor-overview)
- [PRs by Repository](#prs-by-repository)
- [PRs by Contributor](#changes-by-contributor)
- [Scoring & Sponsorship Details](/docs/sponsorship-calculation-explanation.md)

## PRs by Repository

```mermaid
pie
    "tscircuit/checks" : 20
    "tscircuit/calculate-cell-boundaries" : 5
    "tscircuit/circuit-to-svg" : 8
    "tscircuit/schematic-trace-solver" : 12
    "tscircuit/copper-pour-solver" : 8
    "tscircuit/schematic-viewer" : 2
    "tscircuit/core" : 52
    "tscircuit/circuit-json" : 17
    "tscircuit/props" : 4
    "tscircuit/3d-viewer" : 5
    "tscircuit/tscircuit.com" : 40
    "tscircuit/tscircuit-autorouter" : 41
    "tscircuit/circuit-json-to-gltf" : 2
    "tscircuit/tiny-hypergraph" : 3
    "tscircuit/minicanvas" : 1
    "tscircuit/modelprinter" : 3
    "tscircuit/trace-simplification-solver" : 2
    "tscircuit/flex-utils" : 4
    "tscircuit/pcb-viewer" : 6
    "tscircuit/runframe" : 85
    "tscircuit/circuit-to-canvas" : 2
    "tscircuit/circuit-json-schematic-placement-analysis" : 17
    "tscircuit/check-shorts" : 2
    "tscircuit/circuit-json-webgpu" : 1
    "tscircuit/handbook" : 1
    "tscircuit/jlcsearch" : 2
    "tscircuit/cli" : 80
    "tscircuit/motor-driver-firmware" : 1
    "tscircuit/tscircuit" : 34
    "tscircuit/eval" : 68
    "tscircuit/circuit-json-to-kicad" : 5
    "tscircuit/rectdiff" : 3
    "tscircuit/ti" : 5
    "tscircuit/altiumts" : 13
    "tscircuit/kicad-to-circuit-json" : 7
    "tscircuit/circuit-json-to-altium" : 1
    "tscircuit/high-density-repair03" : 2
    "tscircuit/power-trace-expander" : 2
    "tscircuit/repair04" : 1
    "tscircuit/circuit-json-to-bom-csv" : 2
    "tscircuit/circuit-json-to-pnp-csv" : 2
    "tscircuit/jlcpcb-manufacturing-specs" : 1
    "tscircuit/length-matching-solver" : 1
    "tscircuit/parts-engine" : 3
    "tscircuit/schematic-symbols" : 1
    "tscircuit/calculate-packing" : 1
    "tscircuit/altium-to-circuit-json" : 21
    "tscircuit/circuit-json-to-tscircuit" : 1
    "tscircuit/high-density-repair01" : 2
```

## Contributor Overview

| Contributor | 🐳 Major | 🐙 Minor | 🐌 Tiny | Score | ⭐ |
|-------------|---------|---------|---------|-------|-----|
| [seveibar](#seveibar) | 34 | 18 | 15 | 185 | 👑👑👑 |
| [imrishabh18](#imrishabh18) | 14 | 5 | 17 | 79 | ⭐⭐⭐ |
| [mohan-bee](#mohan-bee) | 3 | 10 | 15 | 45 | ⭐⭐ |
| [0hmX](#0hmX) | 8 | 4 | 3 | 42.5 | ⭐⭐ |
| [ShiboSoftwareDev](#ShiboSoftwareDev) | 2 | 3 | 8 | 37 | ⭐⭐ |
| [MustafaMulla29](#MustafaMulla29) | 3 | 7 | 9 | 35 | ⭐⭐ |
| [techmannih](#techmannih) | 1 | 8 | 9 | 30 | ⭐⭐ |
| [AnasSarkiz](#AnasSarkiz) | 3 | 1 | 2 | 21 | ⭐⭐ |
| [anil08607](#anil08607) | 2 | 5 | 2 | 20 | ⭐⭐ |
| [Abse2001](#Abse2001) | 1 | 0 | 2 | 16 | ⭐⭐ |
| [tscircuitbot](#tscircuitbot) | 0 | 0 | 359 | 15.5 | ⭐⭐ |
| [rushabhcodes](#rushabhcodes) | 0 | 6 | 1 | 14 | ⭐⭐ |
| [KrishnaX12](#KrishnaX12) | 0 | 5 | 4 | 14 | ⭐⭐ |
| [GokulPandi-M](#GokulPandi-M) | 0 | 4 | 4 | 11.5 | ⭐⭐ |
| [Devesh36](#Devesh36) | 0 | 3 | 1 | 7 | ⭐ |
| [trixie010](#trixie010) | 0 | 0 | 1 | 1 |  |

## Staff Pass Ratio (SPR)

| Contributor | Reviewed PRs | Rejections | Approvals | SPR |
|-------------|--------------|------------|-----------|-----|
| [MustafaMulla29](#MustafaMulla29) | 8 | 1 | 7 | 87.5% |
| [imrishabh18](#imrishabh18) | 5 | 2 | 4 | 60.0% |
| [rushabhcodes](#rushabhcodes) | 5 | 1 | 4 | 80.0% |
| [0hmX](#0hmX) | 4 | 2 | 3 | 50.0% |
| [techmannih](#techmannih) | 3 | 2 | 1 | 33.3% |
| [AnasSarkiz](#AnasSarkiz) | 2 | 0 | 2 | 100.0% |
| [GokulPandi-M](#GokulPandi-M) | 2 | 0 | 2 | 100.0% |
| [KrishnaX12](#KrishnaX12) | 2 | 0 | 2 | 100.0% |
| [mohan-bee](#mohan-bee) | 2 | 0 | 2 | 100.0% |
| [ShiboSoftwareDev](#ShiboSoftwareDev) | 2 | 2 | 2 | 0.0% |
| [Abse2001](#Abse2001) | 1 | 0 | 1 | 100.0% |

<details>
<summary>MustafaMulla29 SPR PRs (8)</summary>

- [#4126](https://github.com/tscircuit/core/pull/4126) feat: report inverted rails through schematic checks
- [#332](https://github.com/tscircuit/checks/pull/332) feat: include inverted rails in schematic checks
- [#1238](https://github.com/tscircuit/schematic-trace-solver/pull/1238) Recheck power and ground labels after rail alignment
- [#1233](https://github.com/tscircuit/schematic-trace-solver/pull/1233) Fix RP2040 gamepad rail alignment regression
- [#119](https://github.com/tscircuit/circuit-json-schematic-placement-analysis/pull/119) feat: detect voltage divider supply resistors below ground resistors
- [#106](https://github.com/tscircuit/circuit-json-schematic-placement-analysis/pull/106) feat: detect reversed regulator input and output capacitors
- [#102](https://github.com/tscircuit/circuit-json-schematic-placement-analysis/pull/102) feat: selectively execute schematic placement checks
- [#97](https://github.com/tscircuit/circuit-json-schematic-placement-analysis/pull/97) feat: detect separated USB series resistor pairs

</details>

<details>
<summary>imrishabh18 SPR PRs (5)</summary>

- [#4182](https://github.com/tscircuit/core/pull/4182) fix: preserve physical board outlines when routing bounds change
- [#2713](https://github.com/tscircuit/tscircuit-autorouter/pull/2713) Retain safe nudges from existing Pipeline9 clearance projection
- [#209](https://github.com/tscircuit/tiny-hypergraph/pull/209) fix: precheck reachability before selective blocker search
- [#30](https://github.com/tscircuit/power-trace-expander/pull/30) perf: reuse copper alias sets and prune redundant grid checks
- [#7](https://github.com/tscircuit/trace-simplification-solver/pull/7) Support clearance-preserving same-net via repair

</details>

<details>
<summary>rushabhcodes SPR PRs (5)</summary>

- [#4118](https://github.com/tscircuit/core/pull/4118) Fix trace length calculation after vias
- [#4136](https://github.com/tscircuit/core/pull/4136) Keep child copper fixed during parent routing
- [#4111](https://github.com/tscircuit/core/pull/4111) Update calculate-packing for rotated plated holes
- [#4113](https://github.com/tscircuit/core/pull/4113) Reproduce trace-length undercount after vias
- [#136](https://github.com/tscircuit/calculate-packing/pull/136) Respect plated hole rotation in packing bounds

</details>

<details>
<summary>0hmX SPR PRs (4)</summary>

- [#4096](https://github.com/tscircuit/core/pull/4096) Mark antenna radiating copper for dangling trace checks
- [#323](https://github.com/tscircuit/checks/pull/323) feat: detect exposed trace endpoints with checkDanglingTraces
- [#2708](https://github.com/tscircuit/tscircuit-autorouter/pull/2708) Fix missing SOT-23 vias in the shared-via merger dependency
- [#5](https://github.com/tscircuit/trace-simplification-solver/pull/5) Preserve route via metadata when merging into fixed anchors

</details>

<details>
<summary>techmannih SPR PRs (3)</summary>

- [#824](https://github.com/tscircuit/circuit-json/pull/824) Add a board-level via plugging setting
- [#866](https://github.com/tscircuit/props/pull/866) Add plugVias to board props
- [#787](https://github.com/tscircuit/circuit-to-svg/pull/787) Render board-wide via plugging on both PCB faces

</details>

<details>
<summary>AnasSarkiz SPR PRs (2)</summary>

- [#4170](https://github.com/tscircuit/core/pull/4170) fix: preserve rect-pad plated hole IDs and port positions
- [#2724](https://github.com/tscircuit/tscircuit-autorouter/pull/2724) Scale trace simplification with autorouter effort

</details>

<details>
<summary>GokulPandi-M SPR PRs (2)</summary>

- [#4130](https://github.com/tscircuit/core/pull/4130) use graphical body bounds for custom schematic symbols
- [#104](https://github.com/tscircuit/circuit-json-schematic-placement-analysis/pull/104) fix: preserve series power-path diode orientation

</details>

<details>
<summary>KrishnaX12 SPR PRs (2)</summary>

- [#100](https://github.com/tscircuit/copper-pour-solver/pull/100) fix rectangular hole copper-pour clearance
- [#91](https://github.com/tscircuit/altium-to-circuit-json/pull/91) Skip hidden Altium component silkscreen text

</details>

<details>
<summary>mohan-bee SPR PRs (2)</summary>

- [#593](https://github.com/tscircuit/jlcsearch/pull/593) recognize pin structure when deriving header rows
- [#1248](https://github.com/tscircuit/schematic-trace-solver/pull/1248) remove redundant bends from earlier label detours

</details>

<details>
<summary>ShiboSoftwareDev SPR PRs (2)</summary>

- [#208](https://github.com/tscircuit/altiumts/pull/208) Expose typed PCB geometry helpers
- [#92](https://github.com/tscircuit/altium-to-circuit-json/pull/92) Refactor conversion into staged pipelines

</details>

<details>
<summary>Abse2001 SPR PRs (1)</summary>

- [#24](https://github.com/tscircuit/high-density-repair01/pull/24) Make force-improvement vector lengths consistent across platforms

</details>

> Note: AI evaluates PRs and assigns 1-3 star ratings automatically. 4 and 5 star ratings require manual staff review.

## Review Table

[reviews-received-hover]: ## "Number of reviews received for PRs for this contributor"
[approvals-received-hover]: ## "Number of approvals received for PRs this contributor authored"
[rejections-received-hover]: ## "Number of rejections received for PRs this contributor authored"
[prs-opened-hover]: ## "Number of PRs opened by this contributor"
[issues-created-hover]: ## "Number of issues created by this contributor"

| Contributor | Reviews Received | Approvals Received | Rejections Received | Approvals | Rejections Given | PRs Opened | PRs Merged | Issues Created |
|---|---|---|---|---|---|---|---|---|
| [0hmX](#0hmX) | 10 | 4 | 1 | 0 | 0 | 47 | 15 | 0 |
| [Abse2001](#Abse2001) | 4 | 4 | 0 | 11 | 0 | 18 | 3 | 0 |
| [AnasSarkiz](#AnasSarkiz) | 3 | 3 | 0 | 6 | 0 | 13 | 6 | 0 |
| [anil08607](#anil08607) | 11 | 11 | 0 | 0 | 0 | 11 | 9 | 0 |
| [ayoubharrab95-bit](#ayoubharrab95-bit) | 0 | 0 | 0 | 0 | 0 | 1 | 0 | 0 |
| [Devesh36](#Devesh36) | 4 | 3 | 1 | 0 | 0 | 6 | 4 | 0 |
| [ElijahBare](#ElijahBare) | 0 | 0 | 0 | 0 | 0 | 3 | 0 | 0 |
| [ElvinGts](#ElvinGts) | 0 | 0 | 0 | 0 | 0 | 1 | 0 | 0 |
| [furuchanchan](#furuchanchan) | 0 | 0 | 0 | 0 | 0 | 1 | 0 | 0 |
| [gabrielszabos](#gabrielszabos) | 0 | 0 | 0 | 0 | 0 | 2 | 0 | 0 |
| [GokulPandi-M](#GokulPandi-M) | 12 | 11 | 0 | 0 | 0 | 9 | 8 | 0 |
| [halc8312](#halc8312) | 6 | 0 | 0 | 0 | 0 | 6 | 0 | 0 |
| [hrithik18k](#hrithik18k) | 3 | 0 | 0 | 0 | 0 | 1 | 0 | 0 |
| [imrishabh18](#imrishabh18) | 16 | 8 | 2 | 21 | 2 | 44 | 37 | 0 |
| [infosbighouse-glitch](#infosbighouse-glitch) | 0 | 0 | 0 | 0 | 0 | 1 | 0 | 0 |
| [JoeJoeflyn](#JoeJoeflyn) | 2 | 0 | 0 | 0 | 0 | 2 | 0 | 0 |
| [kavyabhand](#kavyabhand) | 0 | 0 | 0 | 0 | 0 | 2 | 0 | 0 |
| [kevin-lozada-santos](#kevin-lozada-santos) | 0 | 0 | 0 | 0 | 0 | 1 | 0 | 0 |
| [KrishnaX12](#KrishnaX12) | 9 | 9 | 0 | 0 | 0 | 11 | 9 | 0 |
| [Lathikaa-S](#Lathikaa-S) | 4 | 0 | 1 | 0 | 0 | 3 | 0 | 0 |
| [marcos452652258-gif](#marcos452652258-gif) | 0 | 0 | 0 | 0 | 0 | 1 | 0 | 0 |
| [Mateidslx](#Mateidslx) | 0 | 0 | 0 | 0 | 0 | 1 | 0 | 0 |
| [meanusarcanus](#meanusarcanus) | 0 | 0 | 0 | 0 | 0 | 3 | 0 | 0 |
| [mohan-bee](#mohan-bee) | 13 | 12 | 0 | 1 | 0 | 34 | 28 | 0 |
| [MoreFoam](#MoreFoam) | 0 | 0 | 0 | 0 | 0 | 1 | 0 | 0 |
| [MustafaMulla29](#MustafaMulla29) | 12 | 8 | 1 | 7 | 0 | 22 | 21 | 0 |
| [ntoledo319](#ntoledo319) | 0 | 0 | 0 | 0 | 0 | 2 | 0 | 0 |
| [Prom11111](#Prom11111) | 0 | 0 | 0 | 0 | 0 | 2 | 0 | 0 |
| [raykholo](#raykholo) | 0 | 0 | 0 | 0 | 0 | 1 | 0 | 0 |
| [rronit786](#rronit786) | 2 | 0 | 1 | 0 | 0 | 4 | 0 | 0 |
| [rushabhcodes](#rushabhcodes) | 35 | 7 | 2 | 4 | 0 | 26 | 7 | 0 |
| [seveibar](#seveibar) | 24 | 2 | 0 | 37 | 7 | 89 | 67 | 0 |
| [ShiboSoftwareDev](#ShiboSoftwareDev) | 15 | 15 | 0 | 17 | 0 | 39 | 15 | 0 |
| [Strohutt](#Strohutt) | 0 | 0 | 0 | 0 | 0 | 2 | 0 | 0 |
| [techmannih](#techmannih) | 12 | 10 | 2 | 6 | 2 | 26 | 19 | 0 |
| [trixie010](#trixie010) | 5 | 3 | 0 | 0 | 0 | 4 | 1 | 0 |
| [tscircuitbot](#tscircuitbot) | 0 | 0 | 0 | 0 | 0 | 489 | 359 | 0 |
| [wroscoe](#wroscoe) | 0 | 0 | 0 | 0 | 0 | 2 | 0 | 0 |

## Changes by Repository

### [tscircuit/checks](https://github.com/tscircuit/checks)

| PR # | Impact | Rating | Contributor | Description |
|------|--------|--------|-------------|-------------|
| [#348](https://github.com/tscircuit/checks/pull/348) | 🐳 Major | ⭐⭐⭐ | mohan-bee | Detects copper overlap and clearance violations between different-net vias, ensuring that different-net vias do not pass the drill-spacing check while their copper overlaps. |
| [#334](https://github.com/tscircuit/checks/pull/334) | 🐳 Major | ⭐⭐⭐ | seveibar | Fixes detection of missing vias at cross-layer trace port attachments, ensuring proper validation of declared trace-to-port layer connections. |
| [#329](https://github.com/tscircuit/checks/pull/329) | 🐳 Major | ⭐⭐⭐ | seveibar | Adds a check for self-shorts in length-matched PCB traces, enhancing routing checks to prevent shorts across their own routes. |
| [#330](https://github.com/tscircuit/checks/pull/330) | 🐳 Major | ⭐⭐⭐ | seveibar | Fixes false positive self-short reports for valid AM62L DQ0 fanout bends due to floating-point roundoff and local copper overlap. |
| [#343](https://github.com/tscircuit/checks/pull/343) | 🐳 Major | ⭐⭐⭐ | imrishabh18 | Fixes hole clearance checks by ensuring NPTH geometry is validated independently of the electrical layer stack, preventing false failures in multi-layer boards. |
| [#340](https://github.com/tscircuit/checks/pull/340) | 🐳 Major | ⭐⭐⭐ | imrishabh18 | Adds checkHoleTraceClearance in check-hole-trace-clearance.ts to measure copper-edge distance to physical non-plated holes, integrating with existing routing checks and ensuring compliance with defined clearance rules. |
| [#347](https://github.com/tscircuit/checks/pull/347) | 🐙 Minor | ⭐⭐ | mohan-bee | Reproduces a missed short between different-net vias with 0.4 mm copper pads and 0.2 mm drills, ensuring that the copper overlap passes the drill-spacing check. |
| [#336](https://github.com/tscircuit/checks/pull/336) | 🐙 Minor | ⭐⭐ | mohan-bee | Fixes false off-board error for circular mounting pads by using their circular envelope for boundary checks instead of square bounds. |
| [#326](https://github.com/tscircuit/checks/pull/326) | 🐙 Minor | ⭐⭐ | mohan-bee | Fixes routing validation failure caused by pill-shaped holes, ensuring proper clearance checks and preserving crossing errors during routing checks. |
| [#341](https://github.com/tscircuit/checks/pull/341) | 🐙 Minor | ⭐⭐ | imrishabh18 | Fixes false missing-via errors by requiring trace endpoint ports to match the copper layer of the associated pads before inferring their IDs. |
| [#342](https://github.com/tscircuit/checks/pull/342) | 🐙 Minor | ⭐⭐ | imrishabh18 | Fixes a crash in connectivity checking when a via is near the rounded end of a trace with separated copper. |
| [#339](https://github.com/tscircuit/checks/pull/339) | 🐙 Minor | ⭐⭐ | 0hmX | Fixes the issue where trace-owned vias connected to copper planes were incorrectly reported as dangling, allowing valid connections to be recognized. |
| [#337](https://github.com/tscircuit/checks/pull/337) | 🐙 Minor | ⭐⭐ | 0hmX | Fixes the issue where dangling-trace checks are not called in routing DRC, ensuring exposed trace endpoints are reported during checks. |
| [#323](https://github.com/tscircuit/checks/pull/323) | 🐙 Minor | ⭐⭐ | 0hmX | Add checkDanglingTraces(circuitJson) to detect exposed branches in PCB traces, ensuring proper connectivity and reporting dangling endpoints. |
| [#332](https://github.com/tscircuit/checks/pull/332) | 🐙 Minor | ⭐⭐ | MustafaMulla29 | Adds inverted-rail warnings to schematic checks, ensuring consistent diagnostics across API calls and enhancing schematic placement analysis. |

<details>
<summary>🐌 Tiny Contributions (5)</summary>

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#335](https://github.com/tscircuit/checks/pull/335) | 🐌 Tiny | mohan-bee | Reproduces a false off-board error for a circular mounting pad near a rounded board corner, ensuring that the copper-edge check passes while asserting the current false error. |
| [#325](https://github.com/tscircuit/checks/pull/325) | 🐌 Tiny | mohan-bee | Reproduces a bug where the routing check fails due to a DRC exception caused by pill-shaped holes in PCB design. |
| [#333](https://github.com/tscircuit/checks/pull/333) | 🐌 Tiny | seveibar | The published pedometer v1.1.3 routes PMID on inner2 into U2s top-only B2 pad at (-8.20005, -3.199898) mm, without a via. Current connectivity checks miss the layer mismatch despite matching endpoint coordinates and port metadata. This PR adds a reproduction, not a production DRC fix: Complete, byte-for-byte circuit JSON fixture with a SHA-256 integrity assertion and release provenance. Geometry assertions verifying the missing endpoint via and the existing via at the opposite end. Three test.failing cases covering the continuity checker, port checker, and aggregate routing checks, plus execution smoke tests and an in-memory valid-via control. A zoomed SVG snapshot with an explicit viewBox, layer colors, and an arrow at the missing transition. A report explaining why each checker misses the defect and separating this finding from the boards other errors and reported hardware measurements. The aggregate routing checker returns other errors on this board, but none diagnoses this missing connection. The standalone continuity checker returns zero errors.  Visual reproduction !Missing inner2-to-top via at U2 B2(https:raw.githubusercontent.comtscircuitchecks3a68ea5testslib__snapshots__pedometer-missing-via.snap.svg)  Validation bun test: 105 tests pass across 54 files. bunx tsc --noEmit: passes. Formatting of the new TypeScript test: passes. The JSON fixture remains verbatim. All three diagnostic assertions fail with expected true, received false when .failing is removed, confirming the reproduction. Source: imrishabh18pedometer v1.1.3(https:tscircuit.comimrishabh18pedometerpcb). Detailed provenance and analysis are in docspedometer-missing-via-repro.md. |
| [#344](https://github.com/tscircuit/checks/pull/344) | 🐌 Tiny | imrishabh18 | Adds concurrency control to npm release jobs to prevent failures due to closely spaced merges. |
| [#322](https://github.com/tscircuit/checks/pull/322) | 🐌 Tiny | 0hmX | Reproduces the behavior of dangling traces and antenna endpoints in the checker, providing comprehensive tests and PCB snapshots for the dangling-trace fix in 323. |

</details>

### [tscircuit/calculate-cell-boundaries](https://github.com/tscircuit/calculate-cell-boundaries)

| PR # | Impact | Rating | Contributor | Description |
|------|--------|--------|-------------|-------------|
| [#43](https://github.com/tscircuit/calculate-cell-boundaries/pull/43) | 🐳 Major | ⭐⭐⭐ | mohan-bee | Reduces processing time by skipping unnecessary neighbour scans during schematic grid merging, improving performance for large grids. |
| [#39](https://github.com/tscircuit/calculate-cell-boundaries/pull/39) | 🐳 Major | ⭐⭐⭐ | mohan-bee | Restores the missing USB-C  Li-ion charger divider by merging adjacent boundary fragments to eliminate floating-point gaps, ensuring accurate schematic representation. |
| [#41](https://github.com/tscircuit/calculate-cell-boundaries/pull/41) | 🐙 Minor | ⭐⭐ | mohan-bee | Aligns touching spans crossed by the same vertical connector at an unobstructed height, fixing the stepped horizontal divider and vertical overhang in the air mouse snapshot after PR 39. |

<details>
<summary>🐌 Tiny Contributions (2)</summary>

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#42](https://github.com/tscircuit/calculate-cell-boundaries/pull/42) | 🐌 Tiny | mohan-bee | Reproduces the boundary-calculation stall triggered by the 14 schematic sections of the Tang Nano GW1N-1 board, capturing input bounds and solver state without altering the solvers behavior. |
| [#38](https://github.com/tscircuit/calculate-cell-boundaries/pull/38) | 🐌 Tiny | mohan-bee | Reproduces the bug where the USB-C  Li-ion charger section divider collapses to a short stub during boundary reduction and repair in the air mouse schematic. |

</details>

### [tscircuit/circuit-to-svg](https://github.com/tscircuit/circuit-to-svg)

| PR # | Impact | Rating | Contributor | Description |
|------|--------|--------|-------------|-------------|
| [#795](https://github.com/tscircuit/circuit-to-svg/pull/795) | 🐳 Major | ⭐⭐⭐ | ShiboSoftwareDev | Summary add a Circuit JSON fixture extracted from the real TI TMDS62LEVM Rev. B sheet 32 add a visual regression for the RJ45 integrated-magnetics symbol capture the current bug where the filled symbol body paints over native line, arc, and circle detail This PR intentionally changes no renderer behavior. It is the reproduction base for 788. Source: https:www.ti.comtoolTMDS62LEVM  Test plan bun test bunx tsc --noEmit targeted Biome format check for the added test |
| [#785](https://github.com/tscircuit/circuit-to-svg/pull/785) | 🐙 Minor | ⭐⭐ | mohan-bee | Exposes schematic text IDs as SVG attributes for improved search selection in schematic viewers. |
| [#783](https://github.com/tscircuit/circuit-to-svg/pull/783) | 🐙 Minor | ⭐⭐ | seveibar | Render linear and quadratic teardrops using optional taper fields on ordinary pcb_trace.route wire points, preserving neighboring segments and avoiding duplicate strokes. |
| [#784](https://github.com/tscircuit/circuit-to-svg/pull/784) | 🐙 Minor | ⭐⭐ | seveibar | Fixes rendering issue where exposed SMT pads connected to a copper pour disappear under its solder-mask overlay when showSolderMask is enabled, affecting GLB exports. |
| [#789](https://github.com/tscircuit/circuit-to-svg/pull/789) | 🐙 Minor | ⭐⭐ | ShiboSoftwareDev | Adjusts the rendering viewport to use the selected schematic sheet frame, preventing overflow issues with long text and ensuring proper rendering of the schematic. |

<details>
<summary>🐌 Tiny Contributions (3)</summary>

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#782](https://github.com/tscircuit/circuit-to-svg/pull/782) | 🐌 Tiny | imrishabh18 | Update the tscircuit dev dependency from 0.0.2018 to 0.0.2629. Its dependency tree supplies schematic-symbols 0.0.246 in this repository, so no separate symbols dependency or overrides are added. Refresh the snapshots affected by the newer core, symbols, and routingcheck behavior. Filter core-generated styling warnings before explicitly regenerating them in the warning fixtures to avoid duplicates. Use the dedicated via-trace clearance check and refresh inline expectations for the updated checks API while retaining nonempty-error assertions. Validation: bun run build passed. bun test --timeout 20000: 389 passed, 1 existing todo, 0 failures. Verified repository resolution: tscircuit 0.0.2629 and schematic-symbols 0.0.246. Visually inspected representative updated schematic snapshots. Scope: tscircuit remains a dev dependency. This updates the repositorytest dependency tree; it does not guarantee schematic-symbols resolution in a separately installed published package. |
| [#796](https://github.com/tscircuit/circuit-to-svg/pull/796) | 🐌 Tiny | ShiboSoftwareDev | Adds a Circuit JSON fixture extracted from the TI TMDS62LEVM Rev. B sheet 04 and a visual regression test for overflowing text that expands the bounds and shrinks the full schematic sheet, without changing renderer behavior. |
| [#788](https://github.com/tscircuit/circuit-to-svg/pull/788) | 🐌 Tiny | ShiboSoftwareDev | Fixes rendering order to ensure filled component bodies are displayed behind native lines, arcs, circles, paths, and text in schematic visualizations. |

</details>

### [tscircuit/schematic-trace-solver](https://github.com/tscircuit/schematic-trace-solver)

| PR # | Impact | Rating | Contributor | Description |
|------|--------|--------|-------------|-------------|
| [#1245](https://github.com/tscircuit/schematic-trace-solver/pull/1245) | 🐳 Major | ⭐⭐⭐ | MustafaMulla29 | Simplifies the Allwinner T113 upper LDOA1V8 supply trace by reducing bends from 24 to 2 and directly attaching the power label to its clear upper corner, enhancing trace efficiency and label placement. |
| [#1238](https://github.com/tscircuit/schematic-trace-solver/pull/1238) | 🐳 Major | ⭐⭐⭐ | MustafaMulla29 | Revalidates power and ground labels after rail alignment to prevent trace-label collisions, ensuring correct label placements and avoiding overlaps in the schematic rendering. |
| [#1233](https://github.com/tscircuit/schematic-trace-solver/pull/1233) | 🐳 Major | ⭐⭐⭐ | MustafaMulla29 | Restores the continuous RP2040 gamepad ground rail alignment that regressed due to a previous change, ensuring correct label containment and rail coordinate selection. |
| [#1250](https://github.com/tscircuit/schematic-trace-solver/pull/1250) | 🐙 Minor | ⭐⭐ | mohan-bee | Fixes the issue of inline-label shove loop causing a label to push against itself, ensuring proper label placement without collisions. |
| [#1249](https://github.com/tscircuit/schematic-trace-solver/pull/1249) | 🐙 Minor | ⭐⭐ | mohan-bee | Reproduces the long ground wire and boxed sample labels in sheet 1 of the portable logic analyzer schematic, adding captured pre-routing input, a focused pipeline test, and an SVG snapshot of the current routing behavior while preserving existing solver behavior for future routing fixes. |
| [#1248](https://github.com/tscircuit/schematic-trace-solver/pull/1248) | 🐙 Minor | ⭐⭐ | mohan-bee | Removes unnecessary bends in the reset trace by passing all label reroute histories to the collision-checked simplifier, resulting in a cleaner trace with fewer bends. |
| [#1246](https://github.com/tscircuit/schematic-trace-solver/pull/1246) | 🐙 Minor | ⭐⭐ | mohan-bee | Preserves distant ground connections between multi-pin components on different rows by using net labels instead of bypassing local routing limits. |
| [#1244](https://github.com/tscircuit/schematic-trace-solver/pull/1244) | 🐙 Minor | ⭐⭐ | MustafaMulla29 | Fixes the issue where rail labels are not correctly repositioned when the associated trace corners are moved during routing, ensuring that power labels remain attached to their respective corners after routing adjustments. |

<details>
<summary>🐌 Tiny Contributions (4)</summary>

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#1247](https://github.com/tscircuit/schematic-trace-solver/pull/1247) | 🐌 Tiny | mohan-bee | Add a reproduction of the STM32 mini dev board MCU sheet in the schematic trace solver, including a six-component routing fixture and snapshot test, while maintaining the current routing algorithm without changes. |
| [#1235](https://github.com/tscircuit/schematic-trace-solver/pull/1235) | 🐌 Tiny | MustafaMulla29 | Reproduces the staggered RP2040 gamepad ground rail exposed by the core solver-dependency update in tscircuitcore4081. |
| [#1234](https://github.com/tscircuit/schematic-trace-solver/pull/1234) | 🐌 Tiny | MustafaMulla29 | Reproduces the trace crossing the LDOA1V8 power label above AVCC in cores repro184-allwinner-t113-analog-net-label-crossing snapshot, capturing the core tests solver input with net display names retained for readable snapshots. |
| [#1240](https://github.com/tscircuit/schematic-trace-solver/pull/1240) | 🐌 Tiny | MustafaMulla29 | Adds a reproduction test for the V3V3 rail label placement in the QSPI section of the RP2040 schematic, capturing the labels incorrect positioning after routing adjustments. |

</details>

### [tscircuit/copper-pour-solver](https://github.com/tscircuit/copper-pour-solver)

| PR # | Impact | Rating | Contributor | Description |
|------|--------|--------|-------------|-------------|
| [#104](https://github.com/tscircuit/copper-pour-solver/pull/104) | 🐳 Major | ⭐⭐⭐ | seveibar | Adds support for native tapered trace clearance in copper pours by reading tapered wire segments from Circuit JSON, allowing for accurate clearance profiles that follow linear or quadratic width changes. |
| [#97](https://github.com/tscircuit/copper-pour-solver/pull/97) | 🐙 Minor | ⭐⭐ | mohan-bee | Fixes the missing mounting-slot clearance around non-plated pill holes, ensuring a 0.3 mm clearance is maintained for both openings without altering the schematic output. |
| [#103](https://github.com/tscircuit/copper-pour-solver/pull/103) | 🐙 Minor | ⭐⭐ | KrishnaX12 | Fixes the bounds calculation for copper pours on shifted boards in the direct converter, ensuring proper coverage of the board area. |
| [#100](https://github.com/tscircuit/copper-pour-solver/pull/100) | 🐙 Minor | ⭐⭐ | KrishnaX12 | Fixes the omission of clearance for rectangular non-plated holes in copper-pour calculations, ensuring they receive the correct clearance similar to round holes. |

<details>
<summary>🐌 Tiny Contributions (4)</summary>

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#98](https://github.com/tscircuit/copper-pour-solver/pull/98) | 🐌 Tiny | mohan-bee | Syncs the package version from 0.0.45 to 0.0.56 to allow pver to select 0.0.57 for the next release. |
| [#96](https://github.com/tscircuit/copper-pour-solver/pull/96) | 🐌 Tiny | mohan-bee | Reproduces the issue of missing copper-pour clearance around non-plated pill mounting slots, ensuring proper mechanical clearance is maintained in PCB designs. |
| [#102](https://github.com/tscircuit/copper-pour-solver/pull/102) | 🐌 Tiny | KrishnaX12 | Reproduces a bug where the copper pour is incorrectly placed at the origin for shifted boards in the direct converter, without making any production fixes or dependency changes. |
| [#99](https://github.com/tscircuit/copper-pour-solver/pull/99) | 🐌 Tiny | KrishnaX12 | Reproduces a bug where non-plated rectangular holes are omitted from copper-pour clearance in the copper-pour solver. |

</details>

### [tscircuit/schematic-viewer](https://github.com/tscircuit/schematic-viewer)

| PR # | Impact | Rating | Contributor | Description |
|------|--------|--------|-------------|-------------|
| [#278](https://github.com/tscircuit/schematic-viewer/pull/278) | 🐙 Minor | ⭐⭐ | seveibar | Expose useSchematicViewerController() so hosts can focus a component imperatively, including while switching to a tab whose viewer has not mounted yet. |

<details>
<summary>🐌 Tiny Contributions (1)</summary>

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#279](https://github.com/tscircuit/schematic-viewer/pull/279) | 🐌 Tiny | mohan-bee | motivation inline net labels should be searchable by name. before search omitted trace-linked schematic text, including the inline labels in the am3352 board. after search includes inline labels with sheet context, matching order, and selection targets using circuit-to-svg 0.0.432. the full-board fixture uses the supplied am3352 board. all 244 inline labels have selectable svg targets, and 37 tests pass. |

</details>

### [tscircuit/core](https://github.com/tscircuit/core)

| PR # | Impact | Rating | Contributor | Description |
|------|--------|--------|-------------|-------------|
| [#4093](https://github.com/tscircuit/core/pull/4093) | 🐳 Major | ⭐⭐⭐ | seveibar | Completes disabled DRC synchronously, caches construction schemas by original schema identity, and skips empty copper cleanup to optimize rendering performance. |
| [#4094](https://github.com/tscircuit/core/pull/4094) | 🐳 Major | ⭐⭐⭐ | seveibar | Large imported boards eagerly build a named phase-state map for every renderable. AM62A has 39,779 renderables, and none of those maps are inspected during its normal unobserved render. Keep ordinary  initialized, dirty  objects in an indexed array. Build the public named map only on first access, using references to those same objects. Render methods directly assign phaseState.initialized and phaseState.dirty: no packed flags, boolean-array synchronization, state reconstruction, or setter helpers. Once the map is exposed, read it to preserve callers replacing individual entries or the entire map. Also avoid temporary arrays when checking previous async effects, check the isolated phase before component fields, and skip lifecycle event preparation when no listeners exist. Phase ordering, async barriers, live subscriptions and custom-rootdebug behavior are preserved. Three fresh processes per variant on the frozen AM62A input, in rotating order, with pours disabled:  Variant  Eval  core render median  Peak RSS median   ---  ---:  ---:   Merged 4093 baseline  5.896 s  1,032 MiB   Previous boolean arrays  4.898 s  801 MiB   Shared state objects  4.970 s  884 MiB  The simpler code retains a 15.7 improvement over baseline in this batch. It takes 0.072 s (1.5) longer and about 83 MiB more peak process memory than boolean arrays. All nine outputs match: 66,219 records, normalizing only software-version metadata. Timings exclude module startup, serialization, transfer and viewer rendering. The 2-second target remains unmet. Benchmark method and comparisons(benchmarkingscriptsrender-state-ablation.md)  Ordered samples(benchmarkingscriptsrender-state-ablation-results.json) Validation: 134 tests pass, one existing skip, five snapshots unchanged; build and typecheck pass. Coverage includes live state inspection, direct mutation, entry and map replacement, first inspection plus replacement inside a handler, dirty propagation, removal, throwing phases, async dependencies, lifecycle subscriptions, custom roots, subcircuits, async footprints and DRC. |
| [#4089](https://github.com/tscircuit/core/pull/4089) | 🐳 Major | ⭐⭐⭐ | seveibar | Add pcbbend and pcbstiffener to cores component catalogue and TSX types. Flex boards now emit pcb_bend and rectangularpolygon pcb_stiffener records with boardgroup ownership, unit-normalized dimensions, adhesive thickness, and resolved authored placementrotation. |
| [#4084](https://github.com/tscircuit/core/pull/4084) | 🐳 Major | ⭐⭐⭐ | seveibar | Fixes autorouting to pass exact preloaded trace geometry to Pipeline9, ensuring that manual PCB paths are preserved and not replaced with rectangle chains during routing. |
| [#4091](https://github.com/tscircuit/core/pull/4091) | 🐳 Major | ⭐⭐⭐ | seveibar | Fixes net lookup costs across the full render lifecycle by optimizing the net resolution process, resulting in significant performance improvements during rendering. |
| [#4090](https://github.com/tscircuit/core/pull/4090) | 🐳 Major | ⭐⭐⭐ | seveibar | Reduces the time spent in createNetsFromProps by indexing literal net selectors, significantly improving performance for large imported boards. |
| [#4182](https://github.com/tscircuit/core/pull/4182) | 🐳 Major | ⭐⭐⭐ | imrishabh18 | Fixes autorouting failure by preserving physical board outlines when routing bounds change, preventing board-edge violations in breakout regions. |
| [#4125](https://github.com/tscircuit/core/pull/4125) | 🐙 Minor | ⭐⭐ | seveibar | Prevents unnecessary source DRC processing when drcChecksDisabled is true, improving performance by reducing CPU time spent on checks. |
| [#4108](https://github.com/tscircuit/core/pull/4108) | 🐙 Minor | ⭐⭐ | seveibar | Updates the tscircuitchecks package to version 0.0.210, enabling detection of self-shorts on length-matched traces and fixing false positives in DRC checks. |
| [#4092](https://github.com/tscircuit/core/pull/4092) | 🐙 Minor | ⭐⭐ | seveibar | Create board-mounted CAD components in their assembled positionrotation during rendering, ensuring that folded records carry is_on_folded_board: true while PCB placementrouting remains flat. |
| [#4086](https://github.com/tscircuit/core/pull/4086) | 🐙 Minor | ⭐⭐ | seveibar | Supports autoroutingphase algorithmFn...  by carrying the callback through the routing phase plan and applying it after autorouter preset resolution, allowing phase callbacks to take precedence over inherited or nested callbacks. |
| [#4095](https://github.com/tscircuit/core/pull/4095) | 🐙 Minor | ⭐⭐ | imrishabh18 | Disables the implicit copper pour render phase, ensuring it does not execute even when automatic pours are enabled, while retaining explicit copper pour elements and adding regression tests. |
| [#4132](https://github.com/tscircuit/core/pull/4132) | 🐙 Minor | ⭐⭐ | 0hmX | Marks antenna traces with is_antenna_trace: true for generated antenna shapes and updates circuit-json dependency from 0.0.500 to 0.0.504. |
| [#4170](https://github.com/tscircuit/core/pull/4170) | 🐙 Minor | ⭐⭐ | AnasSarkiz | Fixes the regression where rect-pad plated holes shared a null ID and ports were incorrectly positioned, ensuring distinct IDs and correct port placements for each pad. |
| [#4150](https://github.com/tscircuit/core/pull/4150) | 🐙 Minor | ⭐⭐ | MustafaMulla29 | Adds a warning for inverted rails in schematic checks when a two-pin component has its positive-supply connection below its ground connection. |
| [#4130](https://github.com/tscircuit/core/pull/4130) | 🐙 Minor | ⭐⭐ | GokulPandi-M | Fixes asymmetric solver bounds for custom schematic symbols by excluding text labels from body-bound calculations. |
| [#4118](https://github.com/tscircuit/core/pull/4118) | 🐙 Minor | ⭐⭐ | rushabhcodes | Fixes the trace length calculation to correctly include distances after vias in PCB routing. |
| [#4111](https://github.com/tscircuit/core/pull/4111) | 🐙 Minor | ⭐⭐ | rushabhcodes | Updates the calculate-packing dependency to version 0.0.90 and enables a regression test for rotated cross-layer plated-hole packing, ensuring proper clearance of components in PCB snapshots. |
| [#4113](https://github.com/tscircuit/core/pull/4113) | 🐙 Minor | ⭐⭐ | rushabhcodes | Adds a minimal failing reproduction for the trace-length calculation bug that omits the segment after a via, preventing the maximum-length DRC error from being emitted. |

<details>
<summary>🐌 Tiny Contributions (33)</summary>

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#4179](https://github.com/tscircuit/core/pull/4179) | 🐌 Tiny | mohan-bee | Updates the tscircuitschematic-trace-solver dependency to version 0.0.212 in the package.json file. |
| [#4178](https://github.com/tscircuit/core/pull/4178) | 🐌 Tiny | mohan-bee | Updates the calculate-cell-boundaries dependency to version 0.0.24 in the package.json file. |
| [#4173](https://github.com/tscircuit/core/pull/4173) | 🐌 Tiny | mohan-bee | Updates the tscircuitschematic-trace-solver dependency to version 0.0.211 in the package.json file. |
| [#4143](https://github.com/tscircuit/core/pull/4143) | 🐌 Tiny | mohan-bee | Updates the calculate-cell-boundaries dependency to version 0.0.23 and refreshes schematic snapshots to align with the latest section divider geometry. |
| [#4127](https://github.com/tscircuit/core/pull/4127) | 🐌 Tiny | mohan-bee | Updates the tscircuitchecks dependency to version 0.0.211 in package.json |
| [#4133](https://github.com/tscircuit/core/pull/4133) | 🐌 Tiny | mohan-bee | Updates the tscircuitschematic-trace-solver dependency to version 0.0.210 in the package.json file. |
| [#4098](https://github.com/tscircuit/core/pull/4098) | 🐌 Tiny | mohan-bee | Updates the tscircuitcopper-pour-solver dependency to version 0.0.57 in the package.json file. |
| [#4139](https://github.com/tscircuit/core/pull/4139) | 🐌 Tiny | seveibar | Bump tscircuitchecks from 0.0.213 to 0.0.214 to consume the missing-via fix, rejecting trace-to-port attachments across unbridged copper layers and reporting the disconnected endpoint. |
| [#4177](https://github.com/tscircuit/core/pull/4177) | 🐌 Tiny | tscircuitbot | Updates the version of the tscircuitchecks package from 0.0.221 to 0.0.222 in package.json |
| [#4176](https://github.com/tscircuit/core/pull/4176) | 🐌 Tiny | tscircuitbot | Updates the version of the tscircuitchecks package from 0.0.221 to 0.0.222 in package.json |
| [#4161](https://github.com/tscircuit/core/pull/4161) | 🐌 Tiny | tscircuitbot | Updates the version of the tscircuitchecks package from 0.0.220 to 0.0.221 in package.json |
| [#4159](https://github.com/tscircuit/core/pull/4159) | 🐌 Tiny | tscircuitbot | Updates the tscircuitchecks package from version 0.0.219 to 0.0.220 |
| [#4157](https://github.com/tscircuit/core/pull/4157) | 🐌 Tiny | tscircuitbot | Updates the version of the tscircuitchecks package from 0.0.218 to 0.0.219 in package.json |
| [#4160](https://github.com/tscircuit/core/pull/4160) | 🐌 Tiny | tscircuitbot | Updates the version of the tscircuitchecks package from 0.0.220 to 0.0.221 in package.json |
| [#4158](https://github.com/tscircuit/core/pull/4158) | 🐌 Tiny | tscircuitbot | Updates the tscircuitchecks package from version 0.0.219 to 0.0.220 |
| [#4156](https://github.com/tscircuit/core/pull/4156) | 🐌 Tiny | tscircuitbot | Updates the version of the tscircuitchecks package from 0.0.217 to 0.0.218 in package.json |
| [#4149](https://github.com/tscircuit/core/pull/4149) | 🐌 Tiny | tscircuitbot | Updates the version of the tscircuitchecks package from 0.0.215 to 0.0.216 in package.json |
| [#4147](https://github.com/tscircuit/core/pull/4147) | 🐌 Tiny | tscircuitbot | Updates the tscircuitchecks dependency to version 0.0.217 to enable dangling-trace detection in cores routing DRC and adjusts existing error counts and snapshots accordingly. |
| [#4148](https://github.com/tscircuit/core/pull/4148) | 🐌 Tiny | tscircuitbot | Updates the version of the tscircuitchecks package from 0.0.215 to 0.0.216 in package.json |
| [#4146](https://github.com/tscircuit/core/pull/4146) | 🐌 Tiny | tscircuitbot | Updates the tscircuitchecks package from version 0.0.214 to 0.0.215 |
| [#4138](https://github.com/tscircuit/core/pull/4138) | 🐌 Tiny | tscircuitbot | Updates the tscircuitchecks package from version 0.0.212 to 0.0.213 in package.json |
| [#4137](https://github.com/tscircuit/core/pull/4137) | 🐌 Tiny | tscircuitbot | Updates the tscircuitchecks package from version 0.0.212 to 0.0.213 |
| [#4135](https://github.com/tscircuit/core/pull/4135) | 🐌 Tiny | tscircuitbot | Updates the version of the tscircuitchecks package from 0.0.211 to 0.0.212 in package.json |
| [#4110](https://github.com/tscircuit/core/pull/4110) | 🐌 Tiny | tscircuitbot | Updates the tscircuitchecks package from version 0.0.208 to 0.0.209 in the package.json file. |
| [#4088](https://github.com/tscircuit/core/pull/4088) | 🐌 Tiny | techmannih | Updates dependency versions to ensure merged via-tenting rendering fixes are included for consumers. |
| [#4181](https://github.com/tscircuit/core/pull/4181) | 🐌 Tiny | imrishabh18 | Adds a PCB snapshot test for 0.2mm trace-to-hole edge clearance with local Pipeline 9 routing, ensuring routing correctness without implementation changes. |
| [#4171](https://github.com/tscircuit/core/pull/4171) | 🐌 Tiny | AnasSarkiz | Restores CI functionality by updating test expectations to match new diagnostics from the tscircuitchecks upgrade, ensuring accurate test results for existing routing fixtures. |
| [#4169](https://github.com/tscircuit/core/pull/4169) | 🐌 Tiny | AnasSarkiz | Reproduces the issue where rectPad plated holes with null IDs cause incorrect PCB port resolution, specifically moving J1s port to J2s pad. |
| [#4129](https://github.com/tscircuit/core/pull/4129) | 🐌 Tiny | MustafaMulla29 | Updates the tscircuitschematic-trace-solver dependency to version 0.0.209 to include rail-detour simplification and label corner-placement fixes. |
| [#4099](https://github.com/tscircuit/core/pull/4099) | 🐌 Tiny | MustafaMulla29 | Updates tscircuitschematic-trace-solver from 0.0.205 to 0.0.208, including the rail-label corner fix and refreshes the affected schematic snapshots. |
| [#4128](https://github.com/tscircuit/core/pull/4128) | 🐌 Tiny | GokulPandi-M | Reproduces the issue of asymmetric solver bounds for two-pin symbols in the schematic trace solver, highlighting the inconsistency in handling terminal connections without providing a fix. |
| [#4100](https://github.com/tscircuit/core/pull/4100) | 🐌 Tiny | GokulPandi-M | Update schematic-symbols dependency from version 0.0.246 to 0.0.247, aligning varistor terminals and correcting REF and VAL placement as per related changes in tscircuitschematic-symbols478. |
| [#4104](https://github.com/tscircuit/core/pull/4104) | 🐌 Tiny | rushabhcodes | Adds a regression repro for pcbPack placing a bottom SMT pad over a rotated through-hole copper area, computes the plated-hole physical board-space AABB from its emitted ccw_rotation, and displays the resulting placement DRC error in the PCB snapshot. |

</details>

### [tscircuit/circuit-json](https://github.com/tscircuit/circuit-json)

| PR # | Impact | Rating | Contributor | Description |
|------|--------|--------|-------------|-------------|
| [#830](https://github.com/tscircuit/circuit-json/pull/830) | 🐳 Major | ⭐⭐⭐ | seveibar | Teardrops now use ordinary wire route points. Removes teardrop from the route union and its standalone schematype, and adds optional start_width, end_width, and width_interpolation_mode: linear  quadratic to wires. |
| [#825](https://github.com/tscircuit/circuit-json/pull/825) | 🐳 Major | ⭐⭐⭐ | seveibar | Add a new route type teardrop to represent tapered wire segments with varying widths in PCB traces, enhancing the geometry representation without requiring separate copper pours. |
| [#820](https://github.com/tscircuit/circuit-json/pull/820) | 🐳 Major | ⭐⭐⭐ | seveibar | Add optional cad_component.is_on_folded_board to distinguish assembled CAD positionrotation from the flat PCB pose. |
| [#816](https://github.com/tscircuit/circuit-json/pull/816) | 🐳 Major | ⭐⭐⭐ | seveibar | Add pcb_bend and pcb_stiffener schemas and types to describe bends and bonded reinforcement in flex PCB designs, ensuring flat layout preservation and unit-aware validation. |
| [#824](https://github.com/tscircuit/circuit-json/pull/824) | 🐳 Major | ⭐⭐⭐ | techmannih | Adds an optional board-wide via plugging setting to Circuit JSON, allowing users to specify via plugging behavior for standalone and trace-route vias. |
| [#833](https://github.com/tscircuit/circuit-json/pull/833) | 🐳 Major | ⭐⭐⭐ | imrishabh18 | Add optional pcb_board.min_trace_to_hole_edge_clearance through the shared manufacturing DRC properties, alongside min_trace_to_pad_edge_clearance, to record the minimum distance from a traces copper edge to a non-plated holes edge for accurate board exporting and reparsing. |
| [#822](https://github.com/tscircuit/circuit-json/pull/822) | 🐳 Major | ⭐⭐⭐ | 0hmX | Adds an optional boolean property to distinguish intentional radiating antenna copper from accidental stubs in PCB designs. |
| [#828](https://github.com/tscircuit/circuit-json/pull/828) | 🐙 Minor | ⭐⭐ | seveibar | Replaces smoothstep with quadratic interpolation for teardrop width transitions, updating schema and validation tests accordingly. |
| [#818](https://github.com/tscircuit/circuit-json/pull/818) | 🐙 Minor | ⭐⭐ | seveibar | Adds support for flex as a valid PCB board material in the runtime enum and PcbBoard type, allowing for validation through the Circuit JSON union. |

<details>
<summary>🐌 Tiny Contributions (8)</summary>

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#834](https://github.com/tscircuit/circuit-json/pull/834) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#832](https://github.com/tscircuit/circuit-json/pull/832) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#831](https://github.com/tscircuit/circuit-json/pull/831) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#829](https://github.com/tscircuit/circuit-json/pull/829) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#827](https://github.com/tscircuit/circuit-json/pull/827) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#826](https://github.com/tscircuit/circuit-json/pull/826) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#821](https://github.com/tscircuit/circuit-json/pull/821) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#819](https://github.com/tscircuit/circuit-json/pull/819) | 🐌 Tiny | tscircuitbot | Automated package update |

</details>

### [tscircuit/props](https://github.com/tscircuit/props)

| PR # | Impact | Rating | Contributor | Description |
|------|--------|--------|-------------|-------------|
| [#864](https://github.com/tscircuit/props/pull/864) | 🐳 Major | ⭐⭐⭐ | seveibar | Add exported PcbBendProps and PcbStiffenerProps for pcbbend  and pcbstiffener  components, enabling the definition of bends and stiffeners in flex PCBs with validation for geometry and dimensions. |
| [#869](https://github.com/tscircuit/props/pull/869) | 🐙 Minor | ⭐⭐ | seveibar | Adds trace-level teardrop controls and explicit width interpolation for saved pcbTracePaths |
| [#863](https://github.com/tscircuit/props/pull/863) | 🐙 Minor | ⭐⭐ | seveibar | Adds an optional algorithmFn prop directly to autoroutingphase , reusing the existing AutorouterConfig callback type and schema validation. Parsing preserves the callback unchanged and rejects non-function values; existing phases remain valid without the prop. |

<details>
<summary>🐌 Tiny Contributions (1)</summary>

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#868](https://github.com/tscircuit/props/pull/868) | 🐌 Tiny | imrishabh18 | Add minTraceToHoleEdgeClearance to the shared routing tolerances used by boards, subcircuit groups, and autorouting phases, specifying the minimum distance from trace copper to the edge of a non-plated hole. |

</details>

### [tscircuit/3d-viewer](https://github.com/tscircuit/3d-viewer)

| PR # | Impact | Rating | Contributor | Description |
|------|--------|--------|-------------|-------------|
| [#1006](https://github.com/tscircuit/3d-viewer/pull/1006) | 🐳 Major | ⭐⭐⭐ | seveibar | Fixes context menus exceeding the viewport and groups camera controls under a single menu, ensuring all menus stay within view and are scrollable if overflowing. |
| [#1005](https://github.com/tscircuit/3d-viewer/pull/1005) | 🐳 Major | ⭐⭐⭐ | seveibar | Adds a right-click context menu option to show 3D components on the schematic, enabling users to navigate to the schematic view directly from the 3D viewer. |
| [#1004](https://github.com/tscircuit/3d-viewer/pull/1004) | 🐳 Major | ⭐⭐⭐ | seveibar | Reduces the setup cost for board relief textures and pauses rendering of hidden 3D viewers to improve performance and resource management. |
| [#1002](https://github.com/tscircuit/3d-viewer/pull/1002) | 🐳 Major | ⭐⭐⭐ | seveibar | Add a right-click Fold PCBs toggle using native Three.js geometry and the shared flex-utils math, allowing flat and already-folded CAD input to be displayed in either state. |

<details>
<summary>🐌 Tiny Contributions (1)</summary>

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#1003](https://github.com/tscircuit/3d-viewer/pull/1003) | 🐌 Tiny | seveibar | Add a TSX-generated flex assembly with a slotted sheet-metal U-channel and two modeled M3 socket-head bolts, including a PCB with routed traces and components. |

</details>

### [tscircuit/tscircuit.com](https://github.com/tscircuit/tscircuit.com)

| PR # | Impact | Rating | Contributor | Description |
|------|--------|--------|-------------|-------------|
| [#5046](https://github.com/tscircuit/tscircuit.com/pull/5046) | 🐳 Major | ⭐⭐⭐ | seveibar | Preserves 3D and PCB viewers across tab switches to prevent UI thread blocking during 3D construction, optimizing resource management and improving user experience. |

<details>
<summary>🐌 Tiny Contributions (39)</summary>

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#5068](https://github.com/tscircuit/tscircuit.com/pull/5068) | 🐌 Tiny | seveibar | Fixes missing utility export in production build by updating dependencies and ensuring compatibility with the latest circuit-to-canvas requirements. |
| [#5105](https://github.com/tscircuit/tscircuit.com/pull/5105) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#5103](https://github.com/tscircuit/tscircuit.com/pull/5103) | 🐌 Tiny | tscircuitbot | Updates the tscircuitrunframe package from version 0.0.2826 to 0.0.2827 |
| [#5101](https://github.com/tscircuit/tscircuit.com/pull/5101) | 🐌 Tiny | tscircuitbot | Updates the tscircuitrunframe package from version 0.0.2825 to 0.0.2826 |
| [#5100](https://github.com/tscircuit/tscircuit.com/pull/5100) | 🐌 Tiny | tscircuitbot | Updates the tscircuiteval package from version 0.0.1471 to 0.0.1472 |
| [#5099](https://github.com/tscircuit/tscircuit.com/pull/5099) | 🐌 Tiny | tscircuitbot | Updates the tscircuitrunframe package to version 0.0.2825 |
| [#5098](https://github.com/tscircuit/tscircuit.com/pull/5098) | 🐌 Tiny | tscircuitbot | Updates the tscircuiteval package from version 0.0.1470 to 0.0.1471 |
| [#5097](https://github.com/tscircuit/tscircuit.com/pull/5097) | 🐌 Tiny | tscircuitbot | Updates the tscircuitrunframe package from version 0.0.2823 to 0.0.2824 |
| [#5096](https://github.com/tscircuit/tscircuit.com/pull/5096) | 🐌 Tiny | tscircuitbot | Updates the tscircuiteval package from version 0.0.1468 to 0.0.1470 |
| [#5095](https://github.com/tscircuit/tscircuit.com/pull/5095) | 🐌 Tiny | tscircuitbot | Updates the tscircuitrunframe package from version 0.0.2822 to 0.0.2823 |
| [#5093](https://github.com/tscircuit/tscircuit.com/pull/5093) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#5091](https://github.com/tscircuit/tscircuit.com/pull/5091) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#5089](https://github.com/tscircuit/tscircuit.com/pull/5089) | 🐌 Tiny | tscircuitbot | Updates the tscircuiteval package from version 0.0.1464 to 0.0.1468 in the package.json file. |
| [#5088](https://github.com/tscircuit/tscircuit.com/pull/5088) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#5086](https://github.com/tscircuit/tscircuit.com/pull/5086) | 🐌 Tiny | tscircuitbot | Updates the tscircuitrunframe package from version 0.0.2817 to 0.0.2818 |
| [#5084](https://github.com/tscircuit/tscircuit.com/pull/5084) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#5082](https://github.com/tscircuit/tscircuit.com/pull/5082) | 🐌 Tiny | tscircuitbot | Updates the tscircuitrunframe package to version 0.0.2816 |
| [#5081](https://github.com/tscircuit/tscircuit.com/pull/5081) | 🐌 Tiny | tscircuitbot | Updates the tscircuitrunframe package from version 0.0.2814 to 0.0.2815 |
| [#5080](https://github.com/tscircuit/tscircuit.com/pull/5080) | 🐌 Tiny | tscircuitbot | Updates the tscircuiteval package from version 0.0.1462 to 0.0.1464 |
| [#5079](https://github.com/tscircuit/tscircuit.com/pull/5079) | 🐌 Tiny | tscircuitbot | Updates the tscircuitrunframe package from version 0.0.2813 to 0.0.2814 |
| [#5077](https://github.com/tscircuit/tscircuit.com/pull/5077) | 🐌 Tiny | tscircuitbot | Updates the tscircuitrunframe package from version 0.0.2812 to 0.0.2813 |
| [#5076](https://github.com/tscircuit/tscircuit.com/pull/5076) | 🐌 Tiny | tscircuitbot | Updates the tscircuiteval package from version 0.0.1461 to 0.0.1462 |
| [#5075](https://github.com/tscircuit/tscircuit.com/pull/5075) | 🐌 Tiny | tscircuitbot | Updates the tscircuitrunframe package from version 0.0.2811 to 0.0.2812 |
| [#5074](https://github.com/tscircuit/tscircuit.com/pull/5074) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#5073](https://github.com/tscircuit/tscircuit.com/pull/5073) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#5072](https://github.com/tscircuit/tscircuit.com/pull/5072) | 🐌 Tiny | tscircuitbot | Updates the tscircuiteval package to version 0.0.1460 in the package.json file. |
| [#5071](https://github.com/tscircuit/tscircuit.com/pull/5071) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#5025](https://github.com/tscircuit/tscircuit.com/pull/5025) | 🐌 Tiny | tscircuitbot | Updates the tscircuiteval package from version 0.0.1440 to 0.0.1442 |
| [#5033](https://github.com/tscircuit/tscircuit.com/pull/5033) | 🐌 Tiny | tscircuitbot | Updates the tscircuitrunframe package from version 0.0.2790 to 0.0.2791 |
| [#5032](https://github.com/tscircuit/tscircuit.com/pull/5032) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#5031](https://github.com/tscircuit/tscircuit.com/pull/5031) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#5026](https://github.com/tscircuit/tscircuit.com/pull/5026) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#5023](https://github.com/tscircuit/tscircuit.com/pull/5023) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#5034](https://github.com/tscircuit/tscircuit.com/pull/5034) | 🐌 Tiny | tscircuitbot | Updates the tscircuiteval package from version 0.0.1444 to 0.0.1445 |
| [#5030](https://github.com/tscircuit/tscircuit.com/pull/5030) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#5029](https://github.com/tscircuit/tscircuit.com/pull/5029) | 🐌 Tiny | tscircuitbot | Updates the tscircuiteval package from version 0.0.1442 to 0.0.1443 |
| [#5024](https://github.com/tscircuit/tscircuit.com/pull/5024) | 🐌 Tiny | tscircuitbot | Automated package update for tscircuitrunframe from version 0.0.2786 to 0.0.2787 |
| [#5028](https://github.com/tscircuit/tscircuit.com/pull/5028) | 🐌 Tiny | techmannih | Update tscircuitrunframe from 0.0.2791 to 0.0.2792 so the website editor uses the via-tenting viewer fixes merged in 5269. Refresh the RunFrame lockfile entry. |
| [#5092](https://github.com/tscircuit/tscircuit.com/pull/5092) | 🐌 Tiny | imrishabh18 | Updates the circuit-json-to-pnp-csv package from version 0.0.13 to 0.0.18 to include a fix for mounting-hole export. |

</details>

### [tscircuit/tscircuit-autorouter](https://github.com/tscircuit/tscircuit-autorouter)

| PR # | Impact | Rating | Contributor | Description |
|------|--------|--------|-------------|-------------|
| [#2744](https://github.com/tscircuit/tscircuit-autorouter/pull/2744) | 🐳 Major | ⭐⭐⭐ | seveibar | Changes the default autorouting solver from Pipeline 7 to Pipeline 9, ensuring that users get local Pipeline 9 routing when using the generic import. |
| [#2702](https://github.com/tscircuit/tscircuit-autorouter/pull/2702) | 🐳 Major | ⭐⭐⭐ | seveibar | Add Debug  Run Trace Linting after a successful route, analyzing the complete routed SRJ and recording per-type style issue counts in benchmarks. |
| [#2681](https://github.com/tscircuit/tscircuit-autorouter/pull/2681) | 🐳 Major | ⭐⭐⭐ | seveibar | Adds the complete AM3352 four-layer board as an unphased routing fixture and fixes three problems it exposes: an exhausted crowded-node search budget, excessive force-improvement work on redundant grid vertices, and an infinite shared-via merge cycle. The initial fixes reached length matching instead of failing in high-density routing or stalling during repair. It still does not complete successfully or produce a clean board. An uncached Pipeline 9 run reached length matching after about 21.5 minutes, then exhausted the meander search for source_net_70 in DDR_BYTE0, which needs 5.1637 mm of additional length.  Changes Updated against main after trace simplification moved into its own package. The shared-via fix now lives in trace-simplification-solver2(https:github.comtscircuittrace-simplification-solverpull2); this PR pins the dependency to the fix commit and keeps an integration regression against its public export. Extend the existing growshrink search budget according to unrelated terminal spacing as well as via diameter, while respecting explicit caller caps and preserving the original attempt order. Clear a stale error when an attempt succeeds. Reduce long collinear grid runs only in pathological regions with at least 4,096 points. Ordinary force-control vertices stay unchanged, since removing them caused regressions in existing routing and repair. Preserve endpoints, layer transitions, vias, terminal metadata, and segment metadata. The captured slow sample drops from 4,735 points to 889 without changing its copper path, and its force solve finishes in about two seconds. Merge a shared physical via only when every attached route can follow it. Reserve whole via locations within each batch. The captured oscillating board case terminates in three passes rather than moving a branch back and forth forever. Add small extracted regressions, update the fixture page, and replace the old partial-routing snapshot with repaired routing labeled explicitly as a length-matching failure. The full-board reproduction is opt-in with RUN_AM3352_FULL_SOLVE1 because of its runtime. The initial broad grid reduction regressed dataset 18 samples 2, 4, and 7. The restricted implementation passes their DRC and repair-budget tests without changing expectations. A new regression also checks that ordinary regions retain every control vertex even when the total board is large.  Remaining problems The board measurements and SVG below are the earlier failing capture from 567ca9a, before narrowing force preprocessing to avoid regressions. A refresh with the latest guard passed dense routing but remained slow in force improvement and was stopped; the current full AM3352 solve is not validated to completion. Dataset 18 validation does not establish that this board is clean. The captured post-repair output has 637 traces and 3,413 relaxed-DRC errors: 1,874 trace errors, 1,008 viatrace clearance errors, 314 padtrace clearance errors, and 217 via clearance errors. The snapshot displays the evaluated DRC count. The existing growshrink strategy creates provisional routing; passing that stage does not establish physical clearance. Before matching, DDR byte-bus skew is 14.0323 mm and 7.1412 mm against a 0.635 mm limit. The DQSclock pairs also exceed their 0.127 mm limits. An isolated experiment with tighter 0.1 mm meander spacing still exhausts all 66 candidates for the first failing member. No bus constraints or routing phases were removed to obtain progress. Congestion and routing space need further work upstream of length matching. The fixture retains 138 connections, 774 terminals, 907 obstacles, four layers, and six bus-skew constraints. It removes saved routing, fanout escapes, and preconnected pours; groundpower are ordinary connections. All four layers are available, and differential-pair couplingimpedance requirements are not encoded. This is a routing reproduction, not a fabrication-ready DDR layout.  Dataset 18 regression validation Latest same-machine benchmark(https:github.comtscircuittscircuit-autorouterpull2681issuecomment-5782770393) compares current main be1e57e with PR cf1f745, after merging latest main and preserving the retry-order correction: 1516 samples complete and pass relaxed DRC on both revisions (93.8), with one timeout on each. Zero outcome regressions, zero DRC issues among solved samples, and identical average via counts (215.87). Median runtime: 101.1s  101.2s; P95: 336.4s  334.4s (0.6). All nine CI test shards, build, types, formatting, and Vercel checks pass on cf1f745. The full Game Boy routing test passes against the existing snapshot; no snapshot refresh was needed. The crowded-terminal test verifies the original attempted nodes remain an unchanged prefix of the expanded search. The sub-via-node regression also passes. The standalone simplifier PR passes all 39 tests, type checking, and formatting checks.  Validation Fresh uncached full Pipeline 9 run with --timeout 9999999: passed routing and repair stages, then reproduced the specific length-matching failure after 1,288 seconds. Replayed the captured post-repair geometry: reproduced the identical 5.1637 mm failure; failure assertions and updated SVG snapshot passed. The revised opt-in full-board test was not rerun from scratch after changing its assertions. Five fixtureextracted regression tests: pass, 5,002 assertions. Existing growthoverlap, via-merger, via-preservation, and clearance-repair visual tests: pass. bun run build: pass. Updated SVG rendered to PNG and visually inspected. Open bug-reportsbugreport108-am3352-four-layer in React Cosmos with bun run start. The README documents provenance, conversion, remaining measurements, and the opt-in full-solve command.  Preserve growshrink retry order Extending the maximum budget had also raised the first retry scale, skipping attempts used by the existing Game Boy routing snapshot. Keep the initial retry bound based on the original budget, and use the expanded budget only for additional attempts. The crowded-terminal regression now verifies that the original failed attempts remain an unchanged prefix of the expanded search. |
| [#2691](https://github.com/tscircuit/tscircuit-autorouter/pull/2691) | 🐳 Major | ⭐⭐⭐ | seveibar | Regional repair can exhaust its search queue with unresolved spans before reaching either work limit. On SRJ18 sample 15, the smaller regions fixed collar blocks coupled routes, but each accepted partial improvement resets the visited regions and repeats the same small context. Prioritize the existing wider context after this stalled-search condition on boards that revisit changed regions. Searches still making progress retain the smaller context. The existing search budgets, physical guards, reference DRC checks, and 360-second benchmark timeout are unchanged. Validation: the cropped sample 15 regression leaves 11 internal errors on main and reaches zero with this change; the full local sample 15 also passes relaxed DRC. The sample 14 repair replay remains clean. Eleven focused tests, the build, and TypeScript checking pass. The full SRJ18 CI benchmark completes all 16 samples with clean relaxed DRC at the unchanged 360-second timeout; sample 15 finishes in 352.7 seconds. All CI checks are green. |
| [#2685](https://github.com/tscircuit/tscircuit-autorouter/pull/2685) | 🐳 Major | ⭐⭐⭐ | seveibar | Includes all samples in timing percentiles, counting failed or timed-out samples at their configured timeout, and preserves diagnostic metadata for better reporting. |
| [#2680](https://github.com/tscircuit/tscircuit-autorouter/pull/2680) | 🐳 Major | ⭐⭐⭐ | seveibar | Fixes autorouting failure in SRJ18 sample 6 by implementing a congestion-aware final routing strategy that allows for successful completion of the routing process. |
| [#2686](https://github.com/tscircuit/tscircuit-autorouter/pull/2686) | 🐳 Major | ⭐⭐⭐ | seveibar | Preserves negotiated routes during regional rerouting when clearance projection would invalidate them due to via guard violations. |
| [#2735](https://github.com/tscircuit/tscircuit-autorouter/pull/2735) | 🐳 Major | ⭐⭐⭐ | imrishabh18 | Non-plated holes need a copper-edge clearance independent of pad clearance. Add minTraceToHoleEdgeClearance (mm) and explicit isNonPlatedHole obstacle metadata. Pipeline 9 passes the value directly from its SRJ, following the existing pad-clearance flow. Routing, repair, width selection, and power expansion use native margins while preserving physical hole dimensions. Shared DRC composes the released hole check alongside pad and via checks. Corne reports 88 (right) and 94 (left) identify their 144 circular NPTHs per half and request 0.2 mm. Both use Pipeline 9, require every point-pair connection to be routed, and assert zero DRC errors. Their snapshots retain the existing visualization without a DRC heading. Two focused hole-clearance files cover physical edge measurements at 0, 0.2, and 0.5 mm, unchanged input geometry, reconstruction, and shared DRC detection of preloaded clearance violations and overlaps. Uses published tscircuitchecks0.0.222. This PR is stacked on 2743 to keep Circuit JSON conversion fixes separate. No Pipeline 7 source changes. The existing Pipeline 7 repair and Game Boy snapshots reflect the checks upgrade; the Pipeline 7 fixture retains its baseline continuity errors and is separate from the Corne tests. Native solver dependencies: https:github.comtscircuitrepair04pull18 https:github.comtscircuithigh-density-repair03pull150 https:github.comtscircuitpower-trace-expanderpull32 Core producer: https:github.comtscircuitcorepull4153 All producers and consumers use isNonPlatedHole; there is no legacy alias. Repair04 imports the canonical SRJ type and retains all four existing cache options. The indexed engine follows the existing obstacle clearance and tolerance paths, including its cached rectangular precheck. Power expansion uses its existing obstacleKind classification. Each solver has one functional clearance test and one visual snapshot test. Existing cached-engine and autorouter fixes are combined separately in https:github.comtscircuithigh-density-repair03pull151. Validation: both Corne halves route every connection with zero shared DRC errors at 0.2 mm. The completed layer search changes the right-half route; its snapshot is refreshed without a DRC heading. The left-half snapshot matches unchanged. Focused clearance tests, TypeScript, and package build pass. All nine Linux CI test shards pass on f0e9d0125fcda5892dd31838d652b5c1ed785db5: https:github.comtscircuittscircuit-autorouteractionsruns36269393782. The Linux right-half snapshot uses the native Linux result; its routing, connectivity, and zero-DRC assertions remain unchanged. Companion status: repair04 has 144 passing tests. Power expansion has 85 passing tests. The indexed engine now has 120 passing tests, with the premature sample-9 stopping regression fixed separately in high-density-repair03 151. 151 and 150 both have green test, type-check, and formatting CI. 151 includes a close-up snapshot of the previous stopping point with one trace-to-via violation and the completed repair with zero errors. |
| [#2715](https://github.com/tscircuit/tscircuit-autorouter/pull/2715) | 🐳 Major | ⭐⭐⭐ | imrishabh18 | Retains independently safe sections of a trace during autorouting, allowing valid repairs even when other sections are blocked. |
| [#2713](https://github.com/tscircuit/tscircuit-autorouter/pull/2713) | 🐳 Major | ⭐⭐⭐ | imrishabh18 | Retains safe wire nudges during autorouting while preventing unrelated trace errors from blocking repairs, improving overall error counts in the routing process. |
| [#2694](https://github.com/tscircuit/tscircuit-autorouter/pull/2694) | 🐳 Major | ⭐⭐⭐ | imrishabh18 | Enables bugreport107 for Pipeline 9, asserting successful routing with 141 relaxed DRC errors and generating a routed-board SVG snapshot. |
| [#2720](https://github.com/tscircuit/tscircuit-autorouter/pull/2720) | 🐳 Major | ⭐⭐⭐ | 0hmX | Updates the rectdiff dependency to a specific commit that combines bounded gap filling with existing transit behavior, ensuring that gap-fill nodes remain within board bounds and improving the autorouters handling of edge cases. |
| [#2719](https://github.com/tscircuit/tscircuit-autorouter/pull/2719) | 🐳 Major | ⭐⭐⭐ | 0hmX | Validates connection bounds after preprocessing to reject terminals left outside bounds after obstacle filtering. |
| [#2708](https://github.com/tscircuit/tscircuit-autorouter/pull/2708) | 🐳 Major | ⭐⭐⭐ | 0hmX | Fixes missing vias in the SOT-23 breakout routing due to incorrect handling of layer transitions in the autorouting process. |
| [#2707](https://github.com/tscircuit/tscircuit-autorouter/pull/2707) | 🐳 Major | ⭐⭐⭐ | 0hmX | Reproduces a missing via issue in the SOT-23 breakout routing after an autorouter update, highlighting a failure in the routing process that omits a critical via during layer transitions. |
| [#2697](https://github.com/tscircuit/tscircuit-autorouter/pull/2697) | 🐳 Major | ⭐⭐⭐ | 0hmX | Fixes length-matching clearance violations by using native SRJ traces for Pipeline9, ensuring accurate routing and compliance with design rules. |
| [#2724](https://github.com/tscircuit/tscircuit-autorouter/pull/2724) | 🐳 Major | ⭐⭐⭐ | AnasSarkiz | Scales the number of cleanup passes in autorouting based on effort levels, improving trace cleanup efficiency in Pipelines 7 and 9. |
| [#2728](https://github.com/tscircuit/tscircuit-autorouter/pull/2728) | 🐳 Major | ⭐⭐⭐ | AnasSarkiz | Requests 2x autorouter effort on SRJ18 sample 3 and captures the existing two-pass cleanup behavior to evaluate effort-scaled simplification. |

<details>
<summary>🐌 Tiny Contributions (23)</summary>

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#2760](https://github.com/tscircuit/tscircuit-autorouter/pull/2760) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#2746](https://github.com/tscircuit/tscircuit-autorouter/pull/2746) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#2738](https://github.com/tscircuit/tscircuit-autorouter/pull/2738) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#2739](https://github.com/tscircuit/tscircuit-autorouter/pull/2739) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#2737](https://github.com/tscircuit/tscircuit-autorouter/pull/2737) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#2736](https://github.com/tscircuit/tscircuit-autorouter/pull/2736) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#2726](https://github.com/tscircuit/tscircuit-autorouter/pull/2726) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#2731](https://github.com/tscircuit/tscircuit-autorouter/pull/2731) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#2727](https://github.com/tscircuit/tscircuit-autorouter/pull/2727) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#2716](https://github.com/tscircuit/tscircuit-autorouter/pull/2716) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#2701](https://github.com/tscircuit/tscircuit-autorouter/pull/2701) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#2687](https://github.com/tscircuit/tscircuit-autorouter/pull/2687) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#2695](https://github.com/tscircuit/tscircuit-autorouter/pull/2695) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#2700](https://github.com/tscircuit/tscircuit-autorouter/pull/2700) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#2692](https://github.com/tscircuit/tscircuit-autorouter/pull/2692) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#2688](https://github.com/tscircuit/tscircuit-autorouter/pull/2688) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#2690](https://github.com/tscircuit/tscircuit-autorouter/pull/2690) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#2684](https://github.com/tscircuit/tscircuit-autorouter/pull/2684) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#2696](https://github.com/tscircuit/tscircuit-autorouter/pull/2696) | 🐌 Tiny | imrishabh18 | Pins the dependency tscircuitpower-trace-expander to a specific commit that includes optimizations for power trace expansion, improving performance and maintaining routing integrity. |
| [#2718](https://github.com/tscircuit/tscircuit-autorouter/pull/2718) | 🐌 Tiny | 0hmX | Reproduces a failure in pipeline 9 when obstacle filtering incorrectly allows a connection terminal to be outside the routing bounds, adding a test to assert that the input is rejected without output. |
| [#2698](https://github.com/tscircuit/tscircuit-autorouter/pull/2698) | 🐌 Tiny | 0hmX | Reproduces the Pipeline 9 length-matching bug with comprehensive tests and snapshots before applying the fix in a subsequent PR. |
| [#2712](https://github.com/tscircuit/tscircuit-autorouter/pull/2712) | 🐌 Tiny | ShiboSoftwareDev | Updates the benchmark dataset for autorouting by pinning the dataset-srj24 to a specific commit and adding ten new KiCad-derived samples, increasing the total inputs to 20 and asserting full-board obstacle layer spans for regression samples. |
| [#2742](https://github.com/tscircuit/tscircuit-autorouter/pull/2742) | 🐌 Tiny | Abse2001 | Stack 1. Repro only: https:github.comtscircuithigh-density-repair01pull23 2. Merged fix: https:github.comtscircuithigh-density-repair01pull24 3. This PR pins Repair01 to its merged commit 27b3392c38ed4474b0557c73640b261155e28c27. Its complete Git tree is identical to reviewed commit c020d0f, whose ordinary CI and manual LinuxmacOS node comparison(https:github.comtscircuithigh-density-repair01actionsruns36318388796) passed. No auto-merge.  Scope The only production change is the exact Repair01 dependency pin. No autorouter algorithms, DRC rules, board geometry, connectivity, clearances, routing phases or options are changed. The unchanged complete Game Boy SRJ comes from the Core 0.0.1989 capture used in 2741, before any routing. SHA-256: 89cfabf40f44453f4894a67475c4a5563e171d629f52bd42a8724bb15185ace4. It has 144 connections, 477 obstacles, four layers and blindburied vias disabled. There is no input routed copper.  Validation Repair01s unchanged real-node repro now passes on Linux x64 and macOS ARM64, using Bun 1.3.8 on both. The full Repair01 suite and type checking pass. The dedicated Game Boy platform parity workflow is manual-only (workflow_dispatch), not triggered by PRs or pushes. When requested, it runs normal end-to-end Pipeline 9 on the full board on both platforms with effort: 1 and no cache. A read-only observer uses the existing onSolved callback to record the force-improvement output hash before the next stage. No constructor arguments are changed. CI compares the input, force-stage and final route hashes, routevia counts, and measured relaxed-DRC counts. It exports actual routes, error lists, and the repository-native board SVG with the measured DRC overlay. There is no forced DRC count or patched output.  Same-machine Pipeline 9 benchmarks Requested using benchmark-all --pipeline 9 --same-machine(https:github.comtscircuittscircuit-autorouterpull2742issuecomment-5844841129). These results cover the Repair01 arithmetic used by this PR; subsequent Repair01 changes were workflowtest metadata, variable naming, import ordering, formatting, and test-file naming, not arithmetic changes. The current pin uses the merged upstream commit rather than the earlier branch commit.  Dataset  Completed, main  PR  Relaxed-DRC passing, main  PR  DRC issues, main  PR  Timeouts, main  PR   ---  ---  ---  ---  ---   Dataset01(https:github.comtscircuittscircuit-autorouterpull2742issuecomment-5844845738)  8585  8585  8585  8585  0  0  0  0   SRJ18(https:github.comtscircuittscircuit-autorouterpull2742issuecomment-5844845914)  1316  1316  1316  1316  0  0  3  3  There were no completionDRCtimeout outcome changes in these two datasets. SRJ18 samples 6, 14 and 15 timed out on both versions. Runtime changes were mixed: Dataset01 P50P95 were 2.65310.791 s  2.78911.771 s; SRJ18 P50 was 134.151 s  135.333 s. This is not a claim of zero runtime regressions.  Ordinary CI snapshot review CI run 36232869155(https:github.comtscircuittscircuit-autorouteractionsruns36232869155) failed only at five Linux snapshot comparisons: bugreports 88, 94, 96, 107, and the SRJ18 sample 3 repair test. Their preceding routingDRC assertions passed. The received images were inspected using the repositorys visualization guidance. No assertions or snapshot tolerances were weakened. The focused Linux snapshot updater(https:github.comtscircuittscircuit-autorouteractionsruns36311026007) generated and committed three of the five snapshots in 19925531, then reached its one-hour limit during verification. Its bun-test-plan groups differ from ordinary CIs balanced groups, so it missed bugreports 88 and 94. Commit e740d1c2 adds those two snapshots directly from the exact received SVG artifacts of run 36232869155, with byte-for-byte SHA-256 verification. The solvertest code is unchanged between that run and these snapshot-only commits. Fresh ordinary CI on e740d1c2(https:github.comtscircuittscircuit-autorouteractionsruns36314621856) passed all nine test shards, verifying all five snapshot updates. Build, type checking, formatting checks, added-code checks, and Vercel checks also passed. Known outcome regression outside the benchmark datasets: bugreport107-board-1726 changes from 96 to 97 relaxed DRC issues in the received CI snapshot. Updating its expected image records this result; it does not fix or dismiss that extra issue. The other three tests with zero-DRC assertions (bugreports 88 and 94, and SRJ18 sample 3) still passed those assertions. Bugreport 96s test checks routingreplacement behavior, not zero DRCs.  Full-board parity limitation In manual full-board run 36231902500(https:github.comtscircuittscircuit-autorouteractionsruns36231902500), the force-improvement stage hashes matched across Linux and macOS. Both final boards had 322 traces, 290 vias and 108 relaxed DRC issues, but the final route hashes still differed. Complete-board parity is not yet established. The previous snapshot-update head e740d1c2 passed ordinary CI. Fresh CI is required for the final merged-fix dependency pin. Green checks do not mean zero regressions, complete-board parity, zero DRCs, or fabrication readiness. Further stage divergence and the extra board-1726 DRC remain visible for review. |

</details>

### [tscircuit/circuit-json-to-gltf](https://github.com/tscircuit/circuit-json-to-gltf)

| PR # | Impact | Rating | Contributor | Description |
|------|--------|--------|-------------|-------------|
| [#223](https://github.com/tscircuit/circuit-json-to-gltf/pull/223) | 🐳 Major | ⭐⭐⭐ | seveibar | Use flex-utils for bend math, surface subdivision, stiffeners and CAD transforms. Keep the renderer-owned adapter between Circuit JSON (Z up) and Scene3D (Y up), including triangle winding changes. Normalize pre-folded CAD through the shared inverse transform before selecting the output fold state, preserving PCB coordinates. |
| [#221](https://github.com/tscircuit/circuit-json-to-gltf/pull/221) | 🐳 Major | ⭐⭐⭐ | seveibar | Flex PCB records currently render only as a flat board. Add a runtime foldPcbs: true option to the conversion APIs; false or omission renders flat. The same Circuit JSON can produce either pose without changing PCB geometry or stored CAD poses. The included capsule fixture uses three 12 mm discs, two narrow flex links, and four 90-degree bends. It aligns the discs at heights 0, 6, and 12 mm, with the middle disc inverted. Copper textures, CAD models, and FR4 stiffeners follow the fold. A Cosmos fixture provides a flatfolded selector, and an example script exports both GLBs and PNG previews. !Three-disc flex capsule(https:raw.githubusercontent.comtscircuitcircuit-json-to-gltfadd-folded-flex-pcb-renderingtestsintegration__snapshots__three-disc-flex-folded.snap.png) The board mesh is split at bend tangencies and five-degree arc intervals. Original surface identity and interpolated flat UVs keep topbottom textures attached through curved and inverted regions. Rigid models retain existing formatlayer rotations; their positions, orientations, normals, and bounds are transformed afterward. Standalone CAD geometry without a PCB component remains fixed. Large tessellated exports use 32-bit indices when needed. Initial scope is a single board with parallel, non-overlapping bends sharing a moving direction. Geometry determines composition order. Partial-width bend lines, incompatible boardpanel references, and rigid geometry crossing bend zones fail explicitly. Self-collision and manufacturing checks are not implemented. The flex links extend beyond the circular areas and must be included in capsule clearance. Uses temporary structural input types compatible with https:github.comtscircuitcircuit-jsonpull816 while those records await release; no upstream dependency release is required to try this fixture. Validation: Full Bun suite passed: 137 tests before the final standalone-CAD regression was added. Final targeted suite: 10 tests pass, including the four-view snapshot, explicit falsedefault equivalence, and standalone-CAD case, measured three-disc alignment, signedoblique bends, record-order independence, immutable inputs, texture continuity, and exported off-axis geometry across both layers and 03790180270-degree rotations. Three Chromium tests pass: repeated flatfolded exports and existing uploadrecovery flows. TypeScript check, packagedeclaration build, source formatting, and diff whitespace checks pass. Inspected the generated folded snapshot and flatfolded previews visually. A four-view snapshot regression now covers isometric, Z side, X end, and Y top views. The baseline was visually inspected, its comparison passes, and TypeScript checks pass. !Four views of the folded capsule flex(https:raw.githubusercontent.comtscircuitcircuit-json-to-gltfadd-folded-flex-pcb-renderingtestssnapshot__snapshots__three-disc-flex-four-view.snap.png) |

### [tscircuit/tiny-hypergraph](https://github.com/tscircuit/tiny-hypergraph)

| PR # | Impact | Rating | Contributor | Description |
|------|--------|--------|-------------|-------------|
| [#211](https://github.com/tscircuit/tiny-hypergraph/pull/211) | 🐳 Major | ⭐⭐⭐ | seveibar | Adds congestion-aware routing as a candidate for final routing to prevent congested topologies that hinder downstream detailed routing. |
| [#209](https://github.com/tscircuit/tiny-hypergraph/pull/209) | 🐳 Major | ⭐⭐⭐ | imrishabh18 | Adds a reachability check to prevent unnecessary rerouting attempts in the solver when a route is blocked by another route, specifically addressing issues in the routing process for board107-1726. |

<details>
<summary>🐌 Tiny Contributions (1)</summary>

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#210](https://github.com/tscircuit/tiny-hypergraph/pull/210) | 🐌 Tiny | imrishabh18 | Add a visual regression test for the disconnected, owner-branching blocker search, recording 511 label expansions as the search revisits states for different owner sets. |

</details>

### [tscircuit/minicanvas](https://github.com/tscircuit/minicanvas)

| PR # | Impact | Rating | Contributor | Description |
|------|--------|--------|-------------|-------------|
| [#1](https://github.com/tscircuit/minicanvas/pull/1) | 🐳 Major | ⭐⭐⭐ | seveibar | Implement the Canvas 2D subset needed to render Circuit JSON directly to RGBAPNG through circuit-to-canvas, without SVG rasterization, native runtime dependencies, or WASM. The rasterizer supports polygon fills, even-odd holes, arcsellipsesarcTo, transformed strokes with capsjoinsdashes, nested clipping, alpha compositing, and non-repeating canvas patterns for offscreen soldermask layers. createCanvas( width, height ) provides image data, PNG bytes, and PNG data URLs. Unsupported features such as system-font text, gradients, and image decoding are explicitly outside this subset; PCB lettering uses glyph paths. |

### [tscircuit/modelprinter](https://github.com/tscircuit/modelprinter)

| PR # | Impact | Rating | Contributor | Description |
|------|--------|--------|-------------|-------------|
| [#3](https://github.com/tscircuit/modelprinter/pull/3) | 🐳 Major | ⭐⭐⭐ | seveibar | Add parameterized sheet-metal plates, right-angle brackets, and U-channels with round holes and rounded slots on individual panels, including typed mesh generation and model strings for various dimensions and features. |

<details>
<summary>🐌 Tiny Contributions (2)</summary>

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#5](https://github.com/tscircuit/modelprinter/pull/5) | 🐌 Tiny | seveibar | Moves Zod to peerDependencies with , aligns Zod 3 development version, and modifies model definitions to accommodate consumer-owned Zod. |
| [#4](https://github.com/tscircuit/modelprinter/pull/4) | 🐌 Tiny | seveibar | Publish the merged modelprinter implementation as tscircuitmodelprinter on GitHub Packages so public consumers can install its tarball through jscdn.tscircuit.com. |

</details>

### [tscircuit/trace-simplification-solver](https://github.com/tscircuit/trace-simplification-solver)

| PR # | Impact | Rating | Contributor | Description |
|------|--------|--------|-------------|-------------|
| [#2](https://github.com/tscircuit/trace-simplification-solver/pull/2) | 🐳 Major | ⭐⭐⭐ | seveibar | Fixes an issue where a shared via oscillates indefinitely between two occupied sites by requiring all attached routes to move together during a merge. |

<details>
<summary>🐌 Tiny Contributions (1)</summary>

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#3](https://github.com/tscircuit/trace-simplification-solver/pull/3) | 🐌 Tiny | imrishabh18 | Adds a README introducing the trace simplification pipeline, installation, and a complete TypeScript usage example. Documents constructor options and defaults, incremental solving, visualization, individual solvers, development commands, and the MIT license, with an existing before-and-after SVG snapshot. |

</details>

### [tscircuit/flex-utils](https://github.com/tscircuit/flex-utils)

| PR # | Impact | Rating | Contributor | Description |
|------|--------|--------|-------------|-------------|
| [#1](https://github.com/tscircuit/flex-utils/pull/1) | 🐳 Major | ⭐⭐⭐ | seveibar | Introduce a renderer-independent implementation of finite-radius PCB folding and reversible CAD poses, including transformations and geometry handling for PCB components. |

<details>
<summary>🐌 Tiny Contributions (3)</summary>

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#3](https://github.com/tscircuit/flex-utils/pull/3) | 🐌 Tiny | seveibar | Expose CadComponentPlacement and transformCadComponentPlacement for transforming CAD positionrotation before the database record exists, and convert remaining flex-utils helpers with more than two arguments to named arguments. |
| [#4](https://github.com/tscircuit/flex-utils/pull/4) | 🐌 Tiny | seveibar | Publish flex-utils to GitHub Packages for token-free tarball installation via jscdn, replacing npm registry and adding versioning support. |
| [#2](https://github.com/tscircuit/flex-utils/pull/2) | 🐌 Tiny | seveibar | Disables Bun lockfile writes by modifying bunfig.toml and removes tracked lockfiles from the repository, ensuring that bun install does not create lockfiles during checks and publishing. |

</details>

### [tscircuit/pcb-viewer](https://github.com/tscircuit/pcb-viewer)

| PR # | Impact | Rating | Contributor | Description |
|------|--------|--------|-------------|-------------|
| [#1037](https://github.com/tscircuit/pcb-viewer/pull/1037) | 🐙 Minor | ⭐⭐ | seveibar | Pressing Escape now exits X-Ray mode and clears all inspected nets, including bus selections. |
| [#1035](https://github.com/tscircuit/pcb-viewer/pull/1035) | 🐙 Minor | ⭐⭐ | seveibar | Adds functionality to display the manufacturer part number of a component pad in the context menu and enables navigation to the schematic when a callback is provided. |

<details>
<summary>🐌 Tiny Contributions (4)</summary>

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#1038](https://github.com/tscircuit/pcb-viewer/pull/1038) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1036](https://github.com/tscircuit/pcb-viewer/pull/1036) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1034](https://github.com/tscircuit/pcb-viewer/pull/1034) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1033](https://github.com/tscircuit/pcb-viewer/pull/1033) | 🐌 Tiny | techmannih | Updates the circuit-to-canvas dependency to version 0.0.131 to include fixes for pad openings over tented vias and updates the circuit-json-util dependency to version 0.0.116 for utility import. |

</details>

### [tscircuit/runframe](https://github.com/tscircuit/runframe)

| PR # | Impact | Rating | Contributor | Description |
|------|--------|--------|-------------|-------------|
| [#5335](https://github.com/tscircuit/runframe/pull/5335) | 🐙 Minor | ⭐⭐ | seveibar | Right-clicking a component in the 3D tab now opens and focuses its matching schematic component, enhancing navigation between 3D models and schematic components. |

<details>
<summary>🐌 Tiny Contributions (84)</summary>

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#5268](https://github.com/tscircuit/runframe/pull/5268) | 🐌 Tiny | seveibar | Selecting U1 on Schematic from a PCB pad now opens the schematic tab and centershighlights the matching source component. |
| [#5351](https://github.com/tscircuit/runframe/pull/5351) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#5350](https://github.com/tscircuit/runframe/pull/5350) | 🐌 Tiny | tscircuitbot | Updates the tscircuiteval package from version 0.0.1473 to 0.0.1474 |
| [#5349](https://github.com/tscircuit/runframe/pull/5349) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#5348](https://github.com/tscircuit/runframe/pull/5348) | 🐌 Tiny | tscircuitbot | Updates the tscircuiteval package from version 0.0.1472 to 0.0.1473 in the package.json file. |
| [#5347](https://github.com/tscircuit/runframe/pull/5347) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#5346](https://github.com/tscircuit/runframe/pull/5346) | 🐌 Tiny | tscircuitbot | Updates the tscircuiteval package from version 0.0.1471 to 0.0.1472 in the package.json file. |
| [#5345](https://github.com/tscircuit/runframe/pull/5345) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#5344](https://github.com/tscircuit/runframe/pull/5344) | 🐌 Tiny | tscircuitbot | Updates the tscircuiteval package from version 0.0.1470 to 0.0.1471 |
| [#5343](https://github.com/tscircuit/runframe/pull/5343) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#5342](https://github.com/tscircuit/runframe/pull/5342) | 🐌 Tiny | tscircuitbot | Updates the tscircuiteval package from version 0.0.1469 to 0.0.1470 |
| [#5341](https://github.com/tscircuit/runframe/pull/5341) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#5340](https://github.com/tscircuit/runframe/pull/5340) | 🐌 Tiny | tscircuitbot | Updates the tscircuiteval package from version 0.0.1468 to 0.0.1469 in the package.json file. |
| [#5339](https://github.com/tscircuit/runframe/pull/5339) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#5333](https://github.com/tscircuit/runframe/pull/5333) | 🐌 Tiny | tscircuitbot | Updates the tscircuiteval package from version 0.0.1467 to 0.0.1468 |
| [#5331](https://github.com/tscircuit/runframe/pull/5331) | 🐌 Tiny | tscircuitbot | Updates the tscircuiteval package from version 0.0.1466 to 0.0.1467 |
| [#5330](https://github.com/tscircuit/runframe/pull/5330) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#5329](https://github.com/tscircuit/runframe/pull/5329) | 🐌 Tiny | tscircuitbot | Updates the tscircuiteval package from version 0.0.1465 to 0.0.1466 |
| [#5328](https://github.com/tscircuit/runframe/pull/5328) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#5327](https://github.com/tscircuit/runframe/pull/5327) | 🐌 Tiny | tscircuitbot | Updates the tscircuiteval package from version 0.0.1464 to 0.0.1465 |
| [#5334](https://github.com/tscircuit/runframe/pull/5334) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#5337](https://github.com/tscircuit/runframe/pull/5337) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#5332](https://github.com/tscircuit/runframe/pull/5332) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#5318](https://github.com/tscircuit/runframe/pull/5318) | 🐌 Tiny | tscircuitbot | Updates the tscircuiteval package from version 0.0.1461 to 0.0.1462 in the package.json file. |
| [#5323](https://github.com/tscircuit/runframe/pull/5323) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#5314](https://github.com/tscircuit/runframe/pull/5314) | 🐌 Tiny | tscircuitbot | Updates the tscircuiteval package from version 0.0.1459 to 0.0.1460 |
| [#5311](https://github.com/tscircuit/runframe/pull/5311) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#5325](https://github.com/tscircuit/runframe/pull/5325) | 🐌 Tiny | tscircuitbot | Updates the circuit-json-to-kicad package version from 0.0.219 to 0.0.221 in package.json |
| [#5322](https://github.com/tscircuit/runframe/pull/5322) | 🐌 Tiny | tscircuitbot | Updates the tscircuiteval package from version 0.0.1463 to 0.0.1464 |
| [#5321](https://github.com/tscircuit/runframe/pull/5321) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#5320](https://github.com/tscircuit/runframe/pull/5320) | 🐌 Tiny | tscircuitbot | Updates the tscircuiteval package from version 0.0.1462 to 0.0.1463 |
| [#5319](https://github.com/tscircuit/runframe/pull/5319) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#5317](https://github.com/tscircuit/runframe/pull/5317) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#5316](https://github.com/tscircuit/runframe/pull/5316) | 🐌 Tiny | tscircuitbot | Updates the tscircuiteval package from version 0.0.1460 to 0.0.1461 in the package.json file. |
| [#5313](https://github.com/tscircuit/runframe/pull/5313) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#5310](https://github.com/tscircuit/runframe/pull/5310) | 🐌 Tiny | tscircuitbot | Updates the tscircuiteval package from version 0.0.1457 to 0.0.1458 in the package.json file. |
| [#5308](https://github.com/tscircuit/runframe/pull/5308) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#5307](https://github.com/tscircuit/runframe/pull/5307) | 🐌 Tiny | tscircuitbot | Updates the tscircuiteval package from version 0.0.1456 to 0.0.1457 in the package.json file. |
| [#5305](https://github.com/tscircuit/runframe/pull/5305) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#5304](https://github.com/tscircuit/runframe/pull/5304) | 🐌 Tiny | tscircuitbot | Updates the tscircuiteval package from version 0.0.1455 to 0.0.1456 in the package.json file. |
| [#5303](https://github.com/tscircuit/runframe/pull/5303) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#5302](https://github.com/tscircuit/runframe/pull/5302) | 🐌 Tiny | tscircuitbot | Updates the tscircuiteval package from version 0.0.1454 to 0.0.1455 |
| [#5315](https://github.com/tscircuit/runframe/pull/5315) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#5306](https://github.com/tscircuit/runframe/pull/5306) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#5326](https://github.com/tscircuit/runframe/pull/5326) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#5312](https://github.com/tscircuit/runframe/pull/5312) | 🐌 Tiny | tscircuitbot | Updates the tscircuiteval package from version 0.0.1458 to 0.0.1459 in the package.json file. |
| [#5300](https://github.com/tscircuit/runframe/pull/5300) | 🐌 Tiny | tscircuitbot | Updates the tscircuiteval package from version 0.0.1453 to 0.0.1454 in the package.json file. |
| [#5296](https://github.com/tscircuit/runframe/pull/5296) | 🐌 Tiny | tscircuitbot | Automated package update for tscircuit3d-viewer from version 0.0.604 to 0.0.605 |
| [#5294](https://github.com/tscircuit/runframe/pull/5294) | 🐌 Tiny | tscircuitbot | Updates the tscircuiteval package from version 0.0.1450 to 0.0.1451 |
| [#5292](https://github.com/tscircuit/runframe/pull/5292) | 🐌 Tiny | tscircuitbot | Updates the version of the circuit-json-to-kicad package from 0.0.218 to 0.0.219 in package.json |
| [#5290](https://github.com/tscircuit/runframe/pull/5290) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#5287](https://github.com/tscircuit/runframe/pull/5287) | 🐌 Tiny | tscircuitbot | Updates the tscircuiteval package from version 0.0.1448 to 0.0.1449 |
| [#5286](https://github.com/tscircuit/runframe/pull/5286) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#5285](https://github.com/tscircuit/runframe/pull/5285) | 🐌 Tiny | tscircuitbot | Updates the tscircuiteval package from version 0.0.1447 to 0.0.1448 |
| [#5284](https://github.com/tscircuit/runframe/pull/5284) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#5301](https://github.com/tscircuit/runframe/pull/5301) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#5298](https://github.com/tscircuit/runframe/pull/5298) | 🐌 Tiny | tscircuitbot | Updates the tscircuiteval package from version 0.0.1451 to 0.0.1453 |
| [#5297](https://github.com/tscircuit/runframe/pull/5297) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#5295](https://github.com/tscircuit/runframe/pull/5295) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#5289](https://github.com/tscircuit/runframe/pull/5289) | 🐌 Tiny | tscircuitbot | Updates the tscircuiteval package from version 0.0.1449 to 0.0.1450 |
| [#5299](https://github.com/tscircuit/runframe/pull/5299) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#5293](https://github.com/tscircuit/runframe/pull/5293) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#5288](https://github.com/tscircuit/runframe/pull/5288) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#5280](https://github.com/tscircuit/runframe/pull/5280) | 🐌 Tiny | tscircuitbot | Updates the tscircuitschematic-viewer package from version 2.0.95 to 2.0.96 |
| [#5281](https://github.com/tscircuit/runframe/pull/5281) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#5276](https://github.com/tscircuit/runframe/pull/5276) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#5282](https://github.com/tscircuit/runframe/pull/5282) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#5277](https://github.com/tscircuit/runframe/pull/5277) | 🐌 Tiny | tscircuitbot | Updates the tscircuiteval package from version 0.0.1445 to 0.0.1446 |
| [#5275](https://github.com/tscircuit/runframe/pull/5275) | 🐌 Tiny | tscircuitbot | Updates the tscircuiteval package from version 0.0.1444 to 0.0.1445 |
| [#5274](https://github.com/tscircuit/runframe/pull/5274) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#5273](https://github.com/tscircuit/runframe/pull/5273) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#5272](https://github.com/tscircuit/runframe/pull/5272) | 🐌 Tiny | tscircuitbot | Updates the tscircuiteval package from version 0.0.1443 to 0.0.1444 in the package.json file. |
| [#5271](https://github.com/tscircuit/runframe/pull/5271) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#5270](https://github.com/tscircuit/runframe/pull/5270) | 🐌 Tiny | tscircuitbot | Updates the tscircuiteval package from version 0.0.1442 to 0.0.1443 in the package.json file. |
| [#5266](https://github.com/tscircuit/runframe/pull/5266) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#5265](https://github.com/tscircuit/runframe/pull/5265) | 🐌 Tiny | tscircuitbot | Updates the tscircuiteval package from version 0.0.1441 to 0.0.1442 in the package.json file. |
| [#5264](https://github.com/tscircuit/runframe/pull/5264) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#5263](https://github.com/tscircuit/runframe/pull/5263) | 🐌 Tiny | tscircuitbot | Updates the tscircuitpcb-viewer package from version 1.11.405 to 1.11.406 |
| [#5261](https://github.com/tscircuit/runframe/pull/5261) | 🐌 Tiny | tscircuitbot | Updates the tscircuiteval package from version 0.0.1440 to 0.0.1441 in the package.json file. |
| [#5278](https://github.com/tscircuit/runframe/pull/5278) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#5283](https://github.com/tscircuit/runframe/pull/5283) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#5262](https://github.com/tscircuit/runframe/pull/5262) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#5269](https://github.com/tscircuit/runframe/pull/5269) | 🐌 Tiny | techmannih | Updates the 3D and PCB viewers to the latest versions to support via tenting fixes and adds a new dependency for circuit JSON utilities. |
| [#5338](https://github.com/tscircuit/runframe/pull/5338) | 🐌 Tiny | imrishabh18 | Update circuit-json-to-bom-csv to 0.0.19 and circuit-json-to-pnp-csv to 0.0.18 to pick up the mounting-hole export fixes. |

</details>

### [tscircuit/circuit-to-canvas](https://github.com/tscircuit/circuit-to-canvas)

| PR # | Impact | Rating | Contributor | Description |
|------|--------|--------|-------------|-------------|
| [#295](https://github.com/tscircuit/circuit-to-canvas/pull/295) | 🐙 Minor | ⭐⭐ | seveibar | Render linear and quadratic teardrops using optional taper fields on ordinary pcb_trace.route wire points, preserving neighboring segments and avoiding duplicate strokes. |

<details>
<summary>🐌 Tiny Contributions (1)</summary>

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#297](https://github.com/tscircuit/circuit-to-canvas/pull/297) | 🐌 Tiny | tscircuitbot | Automated package update |

</details>

### [tscircuit/circuit-json-schematic-placement-analysis](https://github.com/tscircuit/circuit-json-schematic-placement-analysis)

| PR # | Impact | Rating | Contributor | Description |
|------|--------|--------|-------------|-------------|
| [#89](https://github.com/tscircuit/circuit-json-schematic-placement-analysis/pull/89) | 🐙 Minor | ⭐⭐ | seveibar | Allows one extra pin spacing beyond the ideal padding before emitting a warning for centered pin banks with unequal counts, while keeping existing ideal-padding values and resize suggestions for excessive gaps. |
| [#113](https://github.com/tscircuit/circuit-json-schematic-placement-analysis/pull/113) | 🐙 Minor | ⭐⭐ | MustafaMulla29 | Fixes the issue where selecting issueTypes: RegulatorCapacitorsOnWrongSides returned no findings due to missing solver mapping, ensuring selective execution returns the same regulator findings as the default analysis. |
| [#106](https://github.com/tscircuit/circuit-json-schematic-placement-analysis/pull/106) | 🐙 Minor | ⭐⭐ | MustafaMulla29 | Detects and reports when local input and output capacitors are placed on the wrong sides of a regulator, ensuring proper connectivity and placement according to design specifications. |
| [#102](https://github.com/tscircuit/circuit-json-schematic-placement-analysis/pull/102) | 🐙 Minor | ⭐⭐ | MustafaMulla29 | Adds optional issueTypes to analyzeSchematicPlacement() so callers can run selected checks, preserving existing functionality and deduplication. |
| [#97](https://github.com/tscircuit/circuit-json-schematic-placement-analysis/pull/97) | 🐙 Minor | ⭐⭐ | MustafaMulla29 | Adds UsbSeriesResistorPlacementSolver, which reports a USB DD series-resistor pair drawn end-to-end on the same row (or column) and recommends nearby placement with clear traces to the corresponding USB ports. |
| [#104](https://github.com/tscircuit/circuit-json-schematic-placement-analysis/pull/104) | 🐙 Minor | ⭐⭐ | GokulPandi-M | Fixes the analyzers behavior to allow series power-path diodes to maintain their orientation based on schematic layout, rather than enforcing a vertical orientation. |

<details>
<summary>🐌 Tiny Contributions (11)</summary>

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#117](https://github.com/tscircuit/circuit-json-schematic-placement-analysis/pull/117) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#111](https://github.com/tscircuit/circuit-json-schematic-placement-analysis/pull/111) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#103](https://github.com/tscircuit/circuit-json-schematic-placement-analysis/pull/103) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#101](https://github.com/tscircuit/circuit-json-schematic-placement-analysis/pull/101) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#100](https://github.com/tscircuit/circuit-json-schematic-placement-analysis/pull/100) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#99](https://github.com/tscircuit/circuit-json-schematic-placement-analysis/pull/99) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#115](https://github.com/tscircuit/circuit-json-schematic-placement-analysis/pull/115) | 🐌 Tiny | MustafaMulla29 | Update the runtime schematic-symbols dependency from 0.0.224 to 0.0.244 to align with the core version used by the checks integration, fixing SVG rendering issues caused by different symbol geometry. |
| [#105](https://github.com/tscircuit/circuit-json-schematic-placement-analysis/pull/105) | 🐌 Tiny | MustafaMulla29 | Adds unchanged full-sheet repros for regulator inputoutput capacitors placed on the opposite sides from their connected ports: seveibarf1c1990s-dev-board v1.8.0(https:tscircuit.comseveibarf1c1990s-dev-board): U_1V8 and U_1V2, complete 90-component sheet. pixalynxesp32-usb-ducky v1.2.8(https:tscircuit.compixalynxesp32-usb-ducky): U2C1C2, reusing the existing complete 46-component export. Six files: one circuit asset and import wrapper, two tests, and two unhighlighted full-sheet snapshots with current diagnostics below. Positions, wiring, symbols, and retained source records are unchanged. References: AP2112 typical application, page 2(https:www.diodes.comassetsDatasheetsAP2112.pdfpage2) and TI TLV757P typical application, page 1(https:www.ti.comlitdssymlinktlv757p.pdfpage1). Each draws the input capacitor beside IN and the output capacitor beside OUT. The proposed placement check follows the actual symbols port sides, rather than requiring left-to-right power flow. Solver: 106, stacked on this PR. Validation: all 115 tests pass. Typecheck and formatting pass. |
| [#107](https://github.com/tscircuit/circuit-json-schematic-placement-analysis/pull/107) | 🐌 Tiny | MustafaMulla29 | Refreshes the clock-board orientation repro snapshot using the repositorys current renderer to fix the snapshot mismatch on main. |
| [#94](https://github.com/tscircuit/circuit-json-schematic-placement-analysis/pull/94) | 🐌 Tiny | MustafaMulla29 | Solver PR: 97, stacked on this repro. Adds complete, unchanged schematic repros from imrishabh18nema-23-stepper-controller v1.0.4(https:tscircuit.comimrishabh18nema-23-stepper-controller) (the 14-component programming sheet) and pixalynxesp32-usb-ducky v1.2.8(https:tscircuit.compixalynxesp32-usb-ducky) (the complete 46-component sheet). Both place the USB DD series resistors far apart along one row. Current analysis misses the pair arrangement; the ducky board has a separate, existing R3 flip warning. Tests preserve the exported positions and connectivity, with current diagnostics below unhighlighted full-sheet snapshots.  RP2040 reference comparison Raspberry Pi, Figure 9(https:datasheets.raspberrypi.comrp2040hardware-design-with-rp2040.pdfpage12) draws the corresponding resistors in parallel signal rows. !RP2040 reference and unchanged tscircuit sheet(https:github.comuser-attachmentsassets961ad120-5608-47bc-8a55-6f87e36fb048)  ESP32-S3 reference comparison Espressif USB RC schematic(https:docs.espressif.comprojectsesp-hardware-design-guidelinesenlatestesp32s3schematic-checklist.htmlfig-usb-rc-schematic) shows the same paired arrangement. These comparisons concern schematic readability; the reference circuits other parts and PCB-placement requirements are separate. !ESP32-S3 reference and unchanged tscircuit sheet(https:github.comuser-attachmentsassets317893ae-4e07-4b23-b6b1-d1c7c675877e) Validation: 105 tests pass; typecheck and formatting pass. |
| [#87](https://github.com/tscircuit/circuit-json-schematic-placement-analysis/pull/87) | 🐌 Tiny | GokulPandi-M | Problem The clock board places D_REVERSE horizontally in series between VBAT_SWITCHED and VBAT_SW. Both nets are explicitly marked as positive power nets, and the current analyzer emits TwoPinComponentShouldBeVertical with a -90 degree rotation. The same power sheet also reports C_BUCK_IN, C_BUCK_OUT1, and C_BUCK_OUT2. Those three capacitors are power-to-ground branches, so their vertical suggestions are expected. Unlike them, D_REVERSE continues a left-to-right power path. This repro records all four sheet findings while keeping the review question focused on the series diode, similar to the series-inductor distinction introduced in 62. The existing generic test intentionally reports horizontal supply diodes. This PR does not change that behavior or claim the final solver policy; it adds the real clock-board case for review.  Repro Adds the complete source and schematic records from the clock-board export, preserving their original order and contents. Verifies the 80-component schematic renders without Circuit JSON errors. Verifies D_REVERSE.pin1 connects to VBAT_SWITCHED, D_REVERSE.pin2 connects to VBAT_SW, and both nets are positive power supplies. Shows all four TwoPinComponentShouldBeVertical findings on the power sheet in the stacked snapshot. Makes no solver or dependency changes. !Clock-board power-sheet orientation repro(https:raw.githubusercontent.comGokulPandi-Mcircuit-json-schematic-placement-analysis28ef3da1fc094dbe4451dab64472fb43be5e6476testscases__snapshots__clock-board-series-diode-orientation-repro.snap.svg)  Validation bun test: 100 passed, 0 failed bun run typecheck bun run format:check bun run build:site git diff --check Verified the checked-in source and schematic records semantically match the provided export Visually inspected the stacked snapshot |

</details>

### [tscircuit/check-shorts](https://github.com/tscircuit/check-shorts)

| PR # | Impact | Rating | Contributor | Description |
|------|--------|--------|-------------|-------------|
| [#60](https://github.com/tscircuit/check-shorts/pull/60) | 🐙 Minor | ⭐⭐ | seveibar | The published pedometer v1.1.3 passes the Gerber short check on all four copper layers, but its PMID net is physically split: C4 and the chargers PMID pins are disconnected from C9 and the 2.5 V regulator input. Trace source_net_6_mst1_0 ends on inner2 at U2.PMID_Bs top-only pad, (-8.20005, -3.199898) mm, without a via. This adds the full, byte-for-byte published distindexcircuit.json (checksum protected), 12 regressioncharacterization tests, and originalrepair SVG snapshots with a focused viewBox, arrow, and whole-board minimap. A test-local physical copper probe checks all eight PMID pads across four layers using PCB and Gerber masks. It detects two islands in the original and one after adding the missing via; wrong-layer and remote-via controls remain disconnected. The short checker groups copper by logical net and detects contact between different groups. It does not establish continuity within a group. This is an intra-net open; this PR captures the reproducible gap without changing the production shorts API. The fixture README documents the measurements, provenance, oracle scope, and requirements for a future general open-circuit check. Validation: bun test  52 tests pass, zero failures. bun run typecheck  passes. bun run format:check  passes; large literal JSON fixtures are skipped with size warnings. Snapshot creation and subsequent comparison both verified; the added via is a diagnostic control, not a fabrication-approved repair. |

<details>
<summary>🐌 Tiny Contributions (1)</summary>

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#61](https://github.com/tscircuit/check-shorts/pull/61) | 🐌 Tiny | tscircuitbot | Automated package update |

</details>

### [tscircuit/circuit-json-webgpu](https://github.com/tscircuit/circuit-json-webgpu)

| PR # | Impact | Rating | Contributor | Description |
|------|--------|--------|-------------|-------------|
| [#6](https://github.com/tscircuit/circuit-json-webgpu/pull/6) | 🐙 Minor | ⭐⭐ | seveibar | Render linear and quadratic teardrops using optional taper fields on ordinary pcb_trace.route wire points, preserving neighboring segments and avoiding duplicate strokes. |

### [tscircuit/handbook](https://github.com/tscircuit/handbook)


<details>
<summary>🐌 Tiny Contributions (1)</summary>

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#11](https://github.com/tscircuit/handbook/pull/11) | 🐌 Tiny | seveibar | Adds guidelines for preparing for design review, emphasizing schematic readability and the use of explanatory text near chips. |

</details>

### [tscircuit/jlcsearch](https://github.com/tscircuit/jlcsearch)


<details>
<summary>🐌 Tiny Contributions (2)</summary>

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#592](https://github.com/tscircuit/jlcsearch/pull/592) | 🐌 Tiny | seveibar | Adds a Spring-Clamp Connectors homepage category at spring_clamp_connectorslist, backed by the existing spring-clamp terminal-block catalog, including pitch and pin filters and a .json endpoint. |
| [#591](https://github.com/tscircuit/jlcsearch/pull/591) | 🐌 Tiny | seveibar | Microcontrollers such as RP2040 and STM32F103C8T6 report has_usbfalse when supplier descriptions omit USB, and the list page has no USB filter. Add a Has USB AllYesNo selector and has_usbtruefalse API filtering, composable with existing filters. Audit the 1,000 highest-stock records against manufacturer specifications, datasheets, and official device definitions. Commit per-part sources and evidence, with normalized exact-part overrides shared by imports and three idempotent D1 migrations. The audit finds 387 USB-capable parts and 613 without USB, correcting 360 originally incorrect flags across the three batches. The final 700 records add 264 corrections; previously released migrations 0011 and 0012 remain unchanged. Use exact variant evidence: for example, STM32F303C8K8, LPC1517, MG32F02A032 and STC32G8K48 do not gain USB support from similarly named parts. Official ST hardware-IP inventories and versioned Microchip register definitions supplement datasheet review. USB power delivery, software-emulated USB ISP, external programming adapters, and CRC16_USB do not count as hardware USB. The audit records silicon-revision caveats and category anomalies such as USB hubs, an op-amp and SPI flash; category assignments remain unchanged. Add migrations_only and read-only audit_microcontrollers dispatch options to Build and Sync D1. The former applies pending migrations and clears cached responses without rebuilding tables; both export the top 1,000 records for verification. Validation: 208 data-pipeline tests and 163 worker tests pass, plus typecheck and formatting. Tests cover all 1,000 import decisions, conflicting supplier metadata, family exceptions, normalization, repeated migration application, unaudited-row isolation, and preservation of other fields. All three migrations were tested against 1,000 deliberately inverted flags. Route tests cover HTMLJSON filtering for Yes, No, All, and filter composition. CI is green. Production migrations 0011 and 0012 completed in run 36058323522(https:github.comtscircuitjlcsearchactionsruns36058323522) and run 36060512782(https:github.comtscircuitjlcsearchactionsruns36060512782). Migration 0013 completed in run 36065678153(https:github.comtscircuitjlcsearchactionsruns36065678153). The final production export matches all 1,000 audit decisions: 387 Yes  613 No. Its beforeafter comparison confirms exactly 264 changed flags, with unchanged LCSC numbers, manufacturer part numbers and stock. The worker filter changes still require mergingdeploying this PR. |

</details>

### [tscircuit/cli](https://github.com/tscircuit/cli)


<details>
<summary>🐌 Tiny Contributions (80)</summary>

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#4929](https://github.com/tscircuit/cli/pull/4929) | 🐌 Tiny | seveibar | Updates the pinned tscircuitcheck-shorts tarball from 0.0.24 to 0.0.25, including its lockfile URL and integrity hash, ensuring the packaged fallback and test dependency is current. |
| [#4979](https://github.com/tscircuit/cli/pull/4979) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#4978](https://github.com/tscircuit/cli/pull/4978) | 🐌 Tiny | tscircuitbot | Updates the tscircuitrunframe package from version 0.0.2827 to 0.0.2828 |
| [#4977](https://github.com/tscircuit/cli/pull/4977) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#4976](https://github.com/tscircuit/cli/pull/4976) | 🐌 Tiny | tscircuitbot | Updates the tscircuitrunframe package from version 0.0.2826 to 0.0.2827 |
| [#4975](https://github.com/tscircuit/cli/pull/4975) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#4974](https://github.com/tscircuit/cli/pull/4974) | 🐌 Tiny | tscircuitbot | Updates the tscircuitrunframe package from version 0.0.2825 to 0.0.2826 |
| [#4973](https://github.com/tscircuit/cli/pull/4973) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#4972](https://github.com/tscircuit/cli/pull/4972) | 🐌 Tiny | tscircuitbot | Updates the tscircuitrunframe package from version 0.0.2824 to 0.0.2825 |
| [#4971](https://github.com/tscircuit/cli/pull/4971) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#4970](https://github.com/tscircuit/cli/pull/4970) | 🐌 Tiny | tscircuitbot | Updates the tscircuitrunframe package to version 0.0.2824 in the package.json file. |
| [#4969](https://github.com/tscircuit/cli/pull/4969) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#4968](https://github.com/tscircuit/cli/pull/4968) | 🐌 Tiny | tscircuitbot | Updates the tscircuitrunframe package from version 0.0.2822 to 0.0.2823 |
| [#4965](https://github.com/tscircuit/cli/pull/4965) | 🐌 Tiny | tscircuitbot | Updates the tscircuitrunframe package from version 0.0.2821 to 0.0.2822 |
| [#4962](https://github.com/tscircuit/cli/pull/4962) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#4961](https://github.com/tscircuit/cli/pull/4961) | 🐌 Tiny | tscircuitbot | Updates the tscircuitrunframe package from version 0.0.2820 to 0.0.2821 |
| [#4966](https://github.com/tscircuit/cli/pull/4966) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#4959](https://github.com/tscircuit/cli/pull/4959) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#4958](https://github.com/tscircuit/cli/pull/4958) | 🐌 Tiny | tscircuitbot | Updates the tscircuitrunframe package to version 0.0.2820 in package.json |
| [#4954](https://github.com/tscircuit/cli/pull/4954) | 🐌 Tiny | tscircuitbot | Updates the tscircuitrunframe package from version 0.0.2817 to 0.0.2818 |
| [#4952](https://github.com/tscircuit/cli/pull/4952) | 🐌 Tiny | tscircuitbot | Updates the tscircuitrunframe package from version 0.0.2815 to 0.0.2817 |
| [#4957](https://github.com/tscircuit/cli/pull/4957) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#4956](https://github.com/tscircuit/cli/pull/4956) | 🐌 Tiny | tscircuitbot | Updates the tscircuitrunframe package to version 0.0.2819 in the package.json file |
| [#4955](https://github.com/tscircuit/cli/pull/4955) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#4945](https://github.com/tscircuit/cli/pull/4945) | 🐌 Tiny | tscircuitbot | Updates the tscircuitrunframe package from version 0.0.2812 to 0.0.2813 |
| [#4944](https://github.com/tscircuit/cli/pull/4944) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#4950](https://github.com/tscircuit/cli/pull/4950) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#4949](https://github.com/tscircuit/cli/pull/4949) | 🐌 Tiny | tscircuitbot | Updates the tscircuitrunframe package from version 0.0.2814 to 0.0.2815 |
| [#4947](https://github.com/tscircuit/cli/pull/4947) | 🐌 Tiny | tscircuitbot | Updates the tscircuitrunframe package from version 0.0.2813 to 0.0.2814 |
| [#4946](https://github.com/tscircuit/cli/pull/4946) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#4943](https://github.com/tscircuit/cli/pull/4943) | 🐌 Tiny | tscircuitbot | Updates the tscircuitrunframe package from version 0.0.2811 to 0.0.2812 |
| [#4941](https://github.com/tscircuit/cli/pull/4941) | 🐌 Tiny | tscircuitbot | Updates the tscircuitrunframe package from version 0.0.2810 to 0.0.2811 |
| [#4940](https://github.com/tscircuit/cli/pull/4940) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#4939](https://github.com/tscircuit/cli/pull/4939) | 🐌 Tiny | tscircuitbot | Updates the tscircuitrunframe package version from 0.0.2809 to 0.0.2810 in package.json |
| [#4937](https://github.com/tscircuit/cli/pull/4937) | 🐌 Tiny | tscircuitbot | Updates the tscircuitrunframe package from version 0.0.2807 to 0.0.2809 |
| [#4935](https://github.com/tscircuit/cli/pull/4935) | 🐌 Tiny | tscircuitbot | Updates the tscircuitrunframe package from version 0.0.2806 to 0.0.2807 |
| [#4932](https://github.com/tscircuit/cli/pull/4932) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#4931](https://github.com/tscircuit/cli/pull/4931) | 🐌 Tiny | tscircuitbot | Updates the tscircuitrunframe package from version 0.0.2805 to 0.0.2806 |
| [#4928](https://github.com/tscircuit/cli/pull/4928) | 🐌 Tiny | tscircuitbot | Updates the tscircuitrunframe package from version 0.0.2804 to 0.0.2805 |
| [#4942](https://github.com/tscircuit/cli/pull/4942) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#4938](https://github.com/tscircuit/cli/pull/4938) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#4924](https://github.com/tscircuit/cli/pull/4924) | 🐌 Tiny | tscircuitbot | Updates the tscircuitrunframe package from version 0.0.2802 to 0.0.2803 |
| [#4920](https://github.com/tscircuit/cli/pull/4920) | 🐌 Tiny | tscircuitbot | Updates the tscircuitrunframe package version from 0.0.2800 to 0.0.2801 in package.json |
| [#4917](https://github.com/tscircuit/cli/pull/4917) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#4914](https://github.com/tscircuit/cli/pull/4914) | 🐌 Tiny | tscircuitbot | Updates the tscircuitrunframe package to version 0.0.2798 in package.json |
| [#4911](https://github.com/tscircuit/cli/pull/4911) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#4910](https://github.com/tscircuit/cli/pull/4910) | 🐌 Tiny | tscircuitbot | Updates the tscircuitrunframe package version from 0.0.2795 to 0.0.2796 in package.json |
| [#4908](https://github.com/tscircuit/cli/pull/4908) | 🐌 Tiny | tscircuitbot | Updates the tscircuitrunframe package from version 0.0.2794 to 0.0.2795 |
| [#4926](https://github.com/tscircuit/cli/pull/4926) | 🐌 Tiny | tscircuitbot | Updates the tscircuitrunframe package from version 0.0.2803 to 0.0.2804 |
| [#4925](https://github.com/tscircuit/cli/pull/4925) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#4922](https://github.com/tscircuit/cli/pull/4922) | 🐌 Tiny | tscircuitbot | Updates the tscircuitrunframe package version from 0.0.2801 to 0.0.2802 |
| [#4918](https://github.com/tscircuit/cli/pull/4918) | 🐌 Tiny | tscircuitbot | Updates the tscircuitrunframe package to version 0.0.2800 in package.json |
| [#4916](https://github.com/tscircuit/cli/pull/4916) | 🐌 Tiny | tscircuitbot | Updates the tscircuitrunframe package from version 0.0.2798 to 0.0.2799 |
| [#4915](https://github.com/tscircuit/cli/pull/4915) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#4912](https://github.com/tscircuit/cli/pull/4912) | 🐌 Tiny | tscircuitbot | Updates the tscircuitrunframe package from version 0.0.2796 to 0.0.2797 |
| [#4927](https://github.com/tscircuit/cli/pull/4927) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#4921](https://github.com/tscircuit/cli/pull/4921) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#4919](https://github.com/tscircuit/cli/pull/4919) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#4909](https://github.com/tscircuit/cli/pull/4909) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#4913](https://github.com/tscircuit/cli/pull/4913) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#4894](https://github.com/tscircuit/cli/pull/4894) | 🐌 Tiny | tscircuitbot | Updates the tscircuitrunframe package from version 0.0.2787 to 0.0.2788 |
| [#4902](https://github.com/tscircuit/cli/pull/4902) | 🐌 Tiny | tscircuitbot | Updates the tscircuitrunframe package from version 0.0.2791 to 0.0.2792 |
| [#4906](https://github.com/tscircuit/cli/pull/4906) | 🐌 Tiny | tscircuitbot | Updates the tscircuitrunframe package from version 0.0.2793 to 0.0.2794 |
| [#4904](https://github.com/tscircuit/cli/pull/4904) | 🐌 Tiny | tscircuitbot | Updates the tscircuitrunframe package from version 0.0.2792 to 0.0.2793 in the package.json file. |
| [#4903](https://github.com/tscircuit/cli/pull/4903) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#4901](https://github.com/tscircuit/cli/pull/4901) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#4898](https://github.com/tscircuit/cli/pull/4898) | 🐌 Tiny | tscircuitbot | Updates the tscircuitrunframe package to version 0.0.2790 in package.json |
| [#4895](https://github.com/tscircuit/cli/pull/4895) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#4893](https://github.com/tscircuit/cli/pull/4893) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#4891](https://github.com/tscircuit/cli/pull/4891) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#4890](https://github.com/tscircuit/cli/pull/4890) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#4905](https://github.com/tscircuit/cli/pull/4905) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#4900](https://github.com/tscircuit/cli/pull/4900) | 🐌 Tiny | tscircuitbot | Updates the tscircuitrunframe package from version 0.0.2790 to 0.0.2791 |
| [#4899](https://github.com/tscircuit/cli/pull/4899) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#4897](https://github.com/tscircuit/cli/pull/4897) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#4896](https://github.com/tscircuit/cli/pull/4896) | 🐌 Tiny | tscircuitbot | Updates the tscircuitrunframe package from version 0.0.2788 to 0.0.2789 |
| [#4892](https://github.com/tscircuit/cli/pull/4892) | 🐌 Tiny | tscircuitbot | Updates the tscircuitrunframe package to version 0.0.2787 in package.json |
| [#4889](https://github.com/tscircuit/cli/pull/4889) | 🐌 Tiny | tscircuitbot | Updates the tscircuitrunframe package from version 0.0.2785 to 0.0.2786 |
| [#4964](https://github.com/tscircuit/cli/pull/4964) | 🐌 Tiny | imrishabh18 | Updates circuit-json-to-bom-csv to version 0.0.19 and circuit-json-to-pnp-csv to version 0.0.18 to incorporate mounting-hole export fixes. |
| [#4884](https://github.com/tscircuit/cli/pull/4884) | 🐌 Tiny | imrishabh18 | Updates circuit-to-svg and the X-ray alias to 0.0.430, adds schematic-symbols and schematic-trace-solver as development dependencies for improved rendering of newer symbol geometry. |

</details>

### [tscircuit/motor-driver-firmware](https://github.com/tscircuit/motor-driver-firmware)


<details>
<summary>🐌 Tiny Contributions (1)</summary>

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#1](https://github.com/tscircuit/motor-driver-firmware/pull/1) | 🐌 Tiny | seveibar | Adds GitHub and Firmware links above the motorcontrol.tscircuit.com dashboard header so visitors can find the repository and its firmware directory. |

</details>

### [tscircuit/tscircuit](https://github.com/tscircuit/tscircuit)


<details>
<summary>🐌 Tiny Contributions (34)</summary>

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#5137](https://github.com/tscircuit/tscircuit/pull/5137) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#5147](https://github.com/tscircuit/tscircuit/pull/5147) | 🐌 Tiny | tscircuitbot | Updates the tscircuitcli package version from 0.1.2134 to 0.1.2135 in package.json |
| [#5128](https://github.com/tscircuit/tscircuit/pull/5128) | 🐌 Tiny | tscircuitbot | Updates the tscircuitcli package to version 0.1.2130 |
| [#5133](https://github.com/tscircuit/tscircuit/pull/5133) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#5153](https://github.com/tscircuit/tscircuit/pull/5153) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#5145](https://github.com/tscircuit/tscircuit/pull/5145) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#5131](https://github.com/tscircuit/tscircuit/pull/5131) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#5155](https://github.com/tscircuit/tscircuit/pull/5155) | 🐌 Tiny | tscircuitbot | Updates the tscircuitcli package to version 0.1.2137 |
| [#5138](https://github.com/tscircuit/tscircuit/pull/5138) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#5127](https://github.com/tscircuit/tscircuit/pull/5127) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#5159](https://github.com/tscircuit/tscircuit/pull/5159) | 🐌 Tiny | tscircuitbot | Updates the tscircuitcli package to version 0.1.2138 in the package.json file |
| [#5158](https://github.com/tscircuit/tscircuit/pull/5158) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#5157](https://github.com/tscircuit/tscircuit/pull/5157) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#5156](https://github.com/tscircuit/tscircuit/pull/5156) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#5154](https://github.com/tscircuit/tscircuit/pull/5154) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#5150](https://github.com/tscircuit/tscircuit/pull/5150) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#5149](https://github.com/tscircuit/tscircuit/pull/5149) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#5148](https://github.com/tscircuit/tscircuit/pull/5148) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#5144](https://github.com/tscircuit/tscircuit/pull/5144) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#5143](https://github.com/tscircuit/tscircuit/pull/5143) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#5141](https://github.com/tscircuit/tscircuit/pull/5141) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#5140](https://github.com/tscircuit/tscircuit/pull/5140) | 🐌 Tiny | tscircuitbot | Updates the tscircuitcli package to version 0.1.2133 in the package.json file |
| [#5139](https://github.com/tscircuit/tscircuit/pull/5139) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#5136](https://github.com/tscircuit/tscircuit/pull/5136) | 🐌 Tiny | tscircuitbot | Updates the tscircuitcli package version from 0.1.2131 to 0.1.2132 in package.json |
| [#5135](https://github.com/tscircuit/tscircuit/pull/5135) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#5134](https://github.com/tscircuit/tscircuit/pull/5134) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#5132](https://github.com/tscircuit/tscircuit/pull/5132) | 🐌 Tiny | tscircuitbot | Updates the tscircuitcli package to version 0.1.2131 in the package.json file |
| [#5126](https://github.com/tscircuit/tscircuit/pull/5126) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#5151](https://github.com/tscircuit/tscircuit/pull/5151) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#5129](https://github.com/tscircuit/tscircuit/pull/5129) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#5160](https://github.com/tscircuit/tscircuit/pull/5160) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#5152](https://github.com/tscircuit/tscircuit/pull/5152) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#5146](https://github.com/tscircuit/tscircuit/pull/5146) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#5130](https://github.com/tscircuit/tscircuit/pull/5130) | 🐌 Tiny | tscircuitbot | Automated package update |

</details>

### [tscircuit/eval](https://github.com/tscircuit/eval)


<details>
<summary>🐌 Tiny Contributions (68)</summary>

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#4802](https://github.com/tscircuit/eval/pull/4802) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#4801](https://github.com/tscircuit/eval/pull/4801) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#4799](https://github.com/tscircuit/eval/pull/4799) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#4798](https://github.com/tscircuit/eval/pull/4798) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#4796](https://github.com/tscircuit/eval/pull/4796) | 🐌 Tiny | tscircuitbot | Automated package update to version 0.0.1473 |
| [#4795](https://github.com/tscircuit/eval/pull/4795) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#4793](https://github.com/tscircuit/eval/pull/4793) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#4792](https://github.com/tscircuit/eval/pull/4792) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#4790](https://github.com/tscircuit/eval/pull/4790) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#4789](https://github.com/tscircuit/eval/pull/4789) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#4787](https://github.com/tscircuit/eval/pull/4787) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#4786](https://github.com/tscircuit/eval/pull/4786) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#4783](https://github.com/tscircuit/eval/pull/4783) | 🐌 Tiny | tscircuitbot | Updates package dependencies to their latest versions as part of routine maintenance. |
| [#4781](https://github.com/tscircuit/eval/pull/4781) | 🐌 Tiny | tscircuitbot | Updates the package version from 0.0.1467 to 0.0.1468 in package.json |
| [#4778](https://github.com/tscircuit/eval/pull/4778) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#4777](https://github.com/tscircuit/eval/pull/4777) | 🐌 Tiny | tscircuitbot | Updates package dependencies to their latest versions as part of routine maintenance. |
| [#4774](https://github.com/tscircuit/eval/pull/4774) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#4780](https://github.com/tscircuit/eval/pull/4780) | 🐌 Tiny | tscircuitbot | Updates package dependencies to their latest versions in package.json |
| [#4784](https://github.com/tscircuit/eval/pull/4784) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#4775](https://github.com/tscircuit/eval/pull/4775) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#4771](https://github.com/tscircuit/eval/pull/4771) | 🐌 Tiny | tscircuitbot | Updates the versions of several dependencies in the package.json file. |
| [#4766](https://github.com/tscircuit/eval/pull/4766) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#4765](https://github.com/tscircuit/eval/pull/4765) | 🐌 Tiny | tscircuitbot | Updates the version of the tscircuitcore package from 0.0.1985 to 0.0.1986 in package.json |
| [#4760](https://github.com/tscircuit/eval/pull/4760) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#4753](https://github.com/tscircuit/eval/pull/4753) | 🐌 Tiny | tscircuitbot | Updates the version of the tscircuitcore package from 0.0.1981 to 0.0.1982 in package.json |
| [#4748](https://github.com/tscircuit/eval/pull/4748) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#4744](https://github.com/tscircuit/eval/pull/4744) | 🐌 Tiny | tscircuitbot | Updates the version of tscircuitcore from 0.0.1978 to 0.0.1979 and tscircuitschematic-trace-solver from 0.0.209 to 0.0.210 in package.json |
| [#4772](https://github.com/tscircuit/eval/pull/4772) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#4769](https://github.com/tscircuit/eval/pull/4769) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#4768](https://github.com/tscircuit/eval/pull/4768) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#4763](https://github.com/tscircuit/eval/pull/4763) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#4762](https://github.com/tscircuit/eval/pull/4762) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#4757](https://github.com/tscircuit/eval/pull/4757) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#4756](https://github.com/tscircuit/eval/pull/4756) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#4754](https://github.com/tscircuit/eval/pull/4754) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#4750](https://github.com/tscircuit/eval/pull/4750) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#4747](https://github.com/tscircuit/eval/pull/4747) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#4759](https://github.com/tscircuit/eval/pull/4759) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#4751](https://github.com/tscircuit/eval/pull/4751) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#4745](https://github.com/tscircuit/eval/pull/4745) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#4739](https://github.com/tscircuit/eval/pull/4739) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#4738](https://github.com/tscircuit/eval/pull/4738) | 🐌 Tiny | tscircuitbot | Updates the version of the tscircuitcore package from 0.0.1976 to 0.0.1977 in package.json |
| [#4736](https://github.com/tscircuit/eval/pull/4736) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#4733](https://github.com/tscircuit/eval/pull/4733) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#4727](https://github.com/tscircuit/eval/pull/4727) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#4742](https://github.com/tscircuit/eval/pull/4742) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#4741](https://github.com/tscircuit/eval/pull/4741) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#4735](https://github.com/tscircuit/eval/pull/4735) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#4730](https://github.com/tscircuit/eval/pull/4730) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#4732](https://github.com/tscircuit/eval/pull/4732) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#4729](https://github.com/tscircuit/eval/pull/4729) | 🐌 Tiny | tscircuitbot | Updates package dependencies to their latest versions as part of routine maintenance. |
| [#4726](https://github.com/tscircuit/eval/pull/4726) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#4724](https://github.com/tscircuit/eval/pull/4724) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#4723](https://github.com/tscircuit/eval/pull/4723) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#4720](https://github.com/tscircuit/eval/pull/4720) | 🐌 Tiny | tscircuitbot | Updates the version of several dependencies in the package.json file. |
| [#4717](https://github.com/tscircuit/eval/pull/4717) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#4712](https://github.com/tscircuit/eval/pull/4712) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#4711](https://github.com/tscircuit/eval/pull/4711) | 🐌 Tiny | tscircuitbot | Updates the version of the tscircuitcore package from 0.0.1967 to 0.0.1968 in package.json |
| [#4709](https://github.com/tscircuit/eval/pull/4709) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#4708](https://github.com/tscircuit/eval/pull/4708) | 🐌 Tiny | tscircuitbot | Updates package dependencies and the bun version in the workflow configuration |
| [#4701](https://github.com/tscircuit/eval/pull/4701) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#4721](https://github.com/tscircuit/eval/pull/4721) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#4718](https://github.com/tscircuit/eval/pull/4718) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#4715](https://github.com/tscircuit/eval/pull/4715) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#4714](https://github.com/tscircuit/eval/pull/4714) | 🐌 Tiny | tscircuitbot | Updates package versions for dependencies in the project. |
| [#4702](https://github.com/tscircuit/eval/pull/4702) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#4694](https://github.com/tscircuit/eval/pull/4694) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#4693](https://github.com/tscircuit/eval/pull/4693) | 🐌 Tiny | tscircuitbot | Automated package update |

</details>

### [tscircuit/circuit-json-to-kicad](https://github.com/tscircuit/circuit-json-to-kicad)

| PR # | Impact | Rating | Contributor | Description |
|------|--------|--------|-------------|-------------|
| [#592](https://github.com/tscircuit/circuit-json-to-kicad/pull/592) | 🐙 Minor | ⭐⭐ | techmannih | Records the current behavior of the Soil Moisture Sensor board and replaces narrow comparison with a full-board SVG, addressing rotation changes during KiCad to Circuit JSON round trip. |
| [#597](https://github.com/tscircuit/circuit-json-to-kicad/pull/597) | 🐙 Minor | ⭐⭐ | rushabhcodes | Fixes the mapping of KiCad symbol pin numbers to match the corresponding circuit pin numbers for a four-pin crystal component, addressing a regression issue. |

<details>
<summary>🐌 Tiny Contributions (3)</summary>

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#603](https://github.com/tscircuit/circuit-json-to-kicad/pull/603) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#599](https://github.com/tscircuit/circuit-json-to-kicad/pull/599) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#593](https://github.com/tscircuit/circuit-json-to-kicad/pull/593) | 🐌 Tiny | techmannih | Fixes incorrect footprint rotations during KiCad round trips by preserving the original CCW angles instead of negating them. |

</details>

### [tscircuit/rectdiff](https://github.com/tscircuit/rectdiff)

| PR # | Impact | Rating | Contributor | Description |
|------|--------|--------|-------------|-------------|
| [#154](https://github.com/tscircuit/rectdiff/pull/154) | 🐳 Major | ⭐⭐⭐ | 0hmX | Constricts generated gap-fill nodes within board boundaries by clipping seed edges and halting expansion at the nearest board edge or blocker, while maintaining respect for existing obstacles and ensuring that empty gaps can still reach the board edge. |
| [#146](https://github.com/tscircuit/rectdiff/pull/146) | 🐳 Major | ⭐⭐⭐ | AnasSarkiz | Preserves outer-layer transit for four-layer boards with copper planes on inner layers, ensuring usable routing mesh remains intact during containment merging. |

<details>
<summary>🐌 Tiny Contributions (1)</summary>

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#155](https://github.com/tscircuit/rectdiff/pull/155) | 🐌 Tiny | tscircuitbot | Automated package update |

</details>

### [tscircuit/ti](https://github.com/tscircuit/ti)


<details>
<summary>🐌 Tiny Contributions (5)</summary>

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#249](https://github.com/tscircuit/ti/pull/249) | 🐌 Tiny | tscircuitbot | Automated version update after publishing tscircuitti to npm. |
| [#248](https://github.com/tscircuit/ti/pull/248) | 🐌 Tiny | techmannih | Update the TI system-block UIs Altium export dependencies while preserving their existing pin formats |
| [#245](https://github.com/tscircuit/ti/pull/245) | 🐌 Tiny | imrishabh18 | Switches the TI npm release process to use pver for automatic versioning and publishing on main branch pushes or manual dispatch, improving the release workflow. |
| [#244](https://github.com/tscircuit/ti/pull/244) | 🐌 Tiny | imrishabh18 | Add ti import TPS62160DSGR to resolve an exact manufacturer part number through LCSCJLCPCB, fetch its EasyEDA symbol and footprint, and write an editable importsTPS62160DSGR.tsx component. |
| [#243](https://github.com/tscircuit/ti/pull/243) | 🐌 Tiny | imrishabh18 | Add a command line interface (CLI) command ti search for searching Texas Instruments components, providing JSON output and handling various query formats. |

</details>

### [tscircuit/altiumts](https://github.com/tscircuit/altiumts)

| PR # | Impact | Rating | Contributor | Description |
|------|--------|--------|-------------|-------------|
| [#208](https://github.com/tscircuit/altiumts/pull/208) | 🐳 Major | ⭐⭐⭐ | ShiboSoftwareDev | Promotes Altium arc sampling and pad-stack geometry to public, unit-explicit APIs, organizes geometry functions, exposes common schematic component fields, and updates SVG serialization without changing output. |
| [#211](https://github.com/tscircuit/altiumts/pull/211) | 🐙 Minor | ⭐⭐ | techmannih | Adds altiumts parser and PCB SVG snapshot coverage for all six TI power reference boards already used by altium-to-circuit-json: PMP22650, PMP22712, PMP22773, PMP23595, PMP23653 main, and PMP23653 planar transformer. |
| [#223](https://github.com/tscircuit/altiumts/pull/223) | 🐙 Minor | ⭐⭐ | KrishnaX12 | Fixes rendering issue where the CH582 boards top-layer copper antenna is hidden by a polygon cutout, ensuring accurate visual representation in the converter. |
| [#214](https://github.com/tscircuit/altiumts/pull/214) | 🐙 Minor | ⭐⭐ | anil08607 | Share a signed fixed-point reader for schematic coordinates, ensuring accurate parsing of integer and fractional values for schematic positions and vertices. |

<details>
<summary>🐌 Tiny Contributions (9)</summary>

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#224](https://github.com/tscircuit/altiumts/pull/224) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#225](https://github.com/tscircuit/altiumts/pull/225) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#218](https://github.com/tscircuit/altiumts/pull/218) | 🐌 Tiny | tscircuitbot | Updates the package version from 0.0.79 to 0.0.80 in package.json |
| [#217](https://github.com/tscircuit/altiumts/pull/217) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#215](https://github.com/tscircuit/altiumts/pull/215) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#213](https://github.com/tscircuit/altiumts/pull/213) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#216](https://github.com/tscircuit/altiumts/pull/216) | 🐌 Tiny | techmannih | Fixes stroke visibility and label positioning in SVG previews of scaled schematics, ensuring accurate representation in Altium Viewer. |
| [#222](https://github.com/tscircuit/altiumts/pull/222) | 🐌 Tiny | KrishnaX12 | Reproduces the issue of the CH582 copper antenna being hidden by a polygon cutout in altiumts without changing the rendering. |
| [#212](https://github.com/tscircuit/altiumts/pull/212) | 🐌 Tiny | anil08607 | Excludes generic schematic text from being treated as electrical net identifiers, preventing incorrect merging of disconnected wires while preserving genuine connectivity. |

</details>

### [tscircuit/kicad-to-circuit-json](https://github.com/tscircuit/kicad-to-circuit-json)

| PR # | Impact | Rating | Contributor | Description |
|------|--------|--------|-------------|-------------|
| [#205](https://github.com/tscircuit/kicad-to-circuit-json/pull/205) | 🐙 Minor | ⭐⭐ | techmannih | Fixes the loss of DNP status for components R1 and R2 when importing the Arduino Mega 2560 board into Circuit JSON, ensuring that the correct number of components marked as do_not_place is retained. |
| [#206](https://github.com/tscircuit/kicad-to-circuit-json/pull/206) | 🐙 Minor | ⭐⭐ | techmannih | Preserves a KiCad footprints dnp attribute as Circuit JSON pcb_component.do_not_place, ensuring components R1 and R2 retain their DNP status during import. |
| [#208](https://github.com/tscircuit/kicad-to-circuit-json/pull/208) | 🐙 Minor | ⭐⭐ | techmannih | Fixes the issue where HDMI EDID Debug Board imports retain components but lose manufacturer and MPN information, ensuring that MPNs are preserved and unsupported manufacturer names are reported. |
| [#202](https://github.com/tscircuit/kicad-to-circuit-json/pull/202) | 🐙 Minor | ⭐⭐ | techmannih | Fixes the issue where the Corne Keyboard importer retains NPTH hole counts but incorrectly replaces oval slots with circular holes during import. |
| [#203](https://github.com/tscircuit/kicad-to-circuit-json/pull/203) | 🐙 Minor | ⭐⭐ | techmannih | Fixes the import of KiCad oval NPTH drills to preserve their dimensions and angles instead of converting them to circular holes. |

<details>
<summary>🐌 Tiny Contributions (2)</summary>

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#209](https://github.com/tscircuit/kicad-to-circuit-json/pull/209) | 🐌 Tiny | techmannih | Fixes import of KiCad footprint MPN properties to ensure they populate correctly and report unsupported manufacturers instead of disappearing silently. |
| [#201](https://github.com/tscircuit/kicad-to-circuit-json/pull/201) | 🐌 Tiny | techmannih | Fixes the issue of incorrect component orientation by preserving KiCad footprint rotations during import, ensuring that pads and graphics are placed correctly without reversing the orientation. |

</details>

### [tscircuit/circuit-json-to-altium](https://github.com/tscircuit/circuit-json-to-altium)

| PR # | Impact | Rating | Contributor | Description |
|------|--------|--------|-------------|-------------|
| [#170](https://github.com/tscircuit/circuit-json-to-altium/pull/170) | 🐙 Minor | ⭐⭐ | techmannih | New schematic exports used 20 Altium units per Circuit JSON unit, making Altiums smallest radius-2 junction appear at radius 0.1 in Circuit JSON coordinates. The default is now 200  3 (66.67), giving the intended 0.03-unit junction radius in the native Viewer. Geometry and fonts are converted from Circuit JSON at the selected scale before rounding. Pin text offsets, custom power graphics, label outlines and hierarchy placement use the same scale. Native sheet-entry fractions use DISTANCEFROMTOP_FRAC1, keeping entries aligned with No-ERC markers. Physical sheet dimensions and font-point values increase; integer fonts still require rounding. PCB output is unchanged. The final wire cleanup also fixes a straight wire with a collinear net-label leader producing two false junctions. Actual branches and connected crossings are preserved, including fractional coordinates and record ownership. Compatibility: schematicUnitsPerCircuitUnit: 20 restores the previous export scale. Imported Altium templates retain 20 by default; requesting a different scale with an external template is rejected rather than mixing coordinate systems. Existing native-grid tests explicitly cover this compatibility mode; default conversion is covered by the visual fixtures, source-pitch checks and public ZIP API test. The SVG preview uses the altiumts junction-visibility follow-up(https:github.comtscircuitaltiumtscommitb816b59df81bf3ef40c7dc7635e9f979a6cc41d7), pinned at b816b59df81bf3ef40c7dc7635e9f979a6cc41d7. The prior preview rendered small junctions at radius 1.5 while making hairlines 1 output pixel wide, which hid the dots in wires. The renderer now uses native junction radius presets (2, 3, 5, 10) and half-pixel hairlines. The TI board retains all 62 green junctions, with a raster regression checking that the dots remain visible beyond the wire strokes. Both downloadable .SchDoc files remain byte-for-byte unchanged; fonts, component geometry and layout are unchanged. Native Altium Viewer verification: TI TPS61288: 62 green junctions, radius 2 at the new scale, covering all 61 automatic-junction positions with zero exposed blue dots. Automotive communication and microcontroller sheets: inspected componentpin text, custom inductor, net labels and power symbols. Clockinverted pin example: inspected thin filled markers and leftrighttop pin text. Fractional hierarchy example: three entries and No-ERC markers align at native SVG y475, 509 and 542. Latest review files, freshly generated from PR 170 commit a9ffb74 using altiumts b816b59. The native files match the Viewer-verified bytes: Download latest TI TPS61288 .SchDoc(https:github.comtscircuitcircuit-json-to-altiumrawa9ffb7472e964cc0629f61599c925b190a6885b2testsassetsti-tps61288-small-junctions.SchDoc), Circuit JSON(https:github.comtscircuitcircuit-json-to-altiumbloba9ffb7472e964cc0629f61599c925b190a6885b2testsassetsti-tps61288-power-supply.circuit.json), comparison SVG(https:github.comtscircuitcircuit-json-to-altiumbloba9ffb7472e964cc0629f61599c925b190a6885b2testsassetsti-tps61288-small-junctions.svg). Download latest automotive microcontroller .SchDoc(https:github.comtscircuitcircuit-json-to-altiumrawa9ffb7472e964cc0629f61599c925b190a6885b2testsassetsautomotive-microcontroller-small-junctions.SchDoc), comparison SVG(https:github.comtscircuitcircuit-json-to-altiumbloba9ffb7472e964cc0629f61599c925b190a6885b2testsassetsautomotive-microcontroller-small-junctions.svg). Regenerate with bun scriptsgenerate-junction-review-files.ts. The TI regression checks that the downloadable file equals converter output. The SVG preview now uses the native radius-2 minimum. No dependency patches are used. Validation: bun test --timeout 60000 (196 passed, 0 failed), published renderer dependency recheck (17 passed, 0 failed), focused default-scaletemplateZIP checks (4 passed), bun run typecheck, bun run format:check, and git diff --check. The junction-visibility follow-up refreshes 57 snapshots and two comparison assets; all 42 affected Circuit JSON panels are unchanged. Structural checks found only stroke widths and junction radii changed relative to fresh output from the previous renderer. One stale quadcopter snapshot also catches up with the already-merged pin-name margin correction. This PR now targets main, including merged 169 and its reviewer-requested helper changes. |

### [tscircuit/high-density-repair03](https://github.com/tscircuit/high-density-repair03)

| PR # | Impact | Rating | Contributor | Description |
|------|--------|--------|-------------|-------------|
| [#150](https://github.com/tscircuit/high-density-repair03/pull/150) | 🐳 Major | ⭐⭐⭐ | imrishabh18 | Adds independent trace clearance for non-plated holes in the indexed DRC engine, ensuring proper clearance checks and error classifications. |
| [#151](https://github.com/tscircuit/high-density-repair03/pull/151) | 🐳 Major | ⭐⭐⭐ | imrishabh18 | Preserves existing autorouter fixes by merging commits onto a cache-compatible stack, ensuring shared engine behavior without dropping fixes for wide-trace clearance and geometry. |

### [tscircuit/power-trace-expander](https://github.com/tscircuit/power-trace-expander)

| PR # | Impact | Rating | Contributor | Description |
|------|--------|--------|-------------|-------------|
| [#32](https://github.com/tscircuit/power-trace-expander/pull/32) | 🐳 Major | ⭐⭐⭐ | imrishabh18 | Trace expansion must retain the requested gap to non-plated holes, ensuring proper clearance during routing operations. |
| [#30](https://github.com/tscircuit/power-trace-expander/pull/30) | 🐳 Major | ⭐⭐⭐ | imrishabh18 | Reduces the time taken for power trace expansion by reusing resolved copper aliases and eliminating unnecessary grid collision checks, resulting in a performance improvement of 36.1. |

### [tscircuit/repair04](https://github.com/tscircuit/repair04)

| PR # | Impact | Rating | Contributor | Description |
|------|--------|--------|-------------|-------------|
| [#18](https://github.com/tscircuit/repair04/pull/18) | 🐳 Major | ⭐⭐⭐ | imrishabh18 | Adds support for honoring hole-edge clearance during bounded trace repair, ensuring compliance with SRJ hole-edge rules and improving obstacle handling in routing paths. |

### [tscircuit/circuit-json-to-bom-csv](https://github.com/tscircuit/circuit-json-to-bom-csv)

| PR # | Impact | Rating | Contributor | Description |
|------|--------|--------|-------------|-------------|
| [#29](https://github.com/tscircuit/circuit-json-to-bom-csv/pull/29) | 🐙 Minor | ⭐⭐ | imrishabh18 | Excludes bare mounting holes from BOM exports when they are unassigned simple chips with a specific footprint, while preserving other components with assigned part numbers or additional features. |
| [#28](https://github.com/tscircuit/circuit-json-to-bom-csv/pull/28) | 🐙 Minor | ⭐⭐ | imrishabh18 | Excludes bare mounting-hole footprints from BOM rows and CSV in the BOM export process. |

### [tscircuit/circuit-json-to-pnp-csv](https://github.com/tscircuit/circuit-json-to-pnp-csv)


<details>
<summary>🐌 Tiny Contributions (2)</summary>

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#21](https://github.com/tscircuit/circuit-json-to-pnp-csv/pull/21) | 🐌 Tiny | imrishabh18 | Excludes bare mounting holes from pick-and-place exports when they are authored as ordinary chips, ensuring they do not appear as assembly parts if they meet specific criteria. |
| [#20](https://github.com/tscircuit/circuit-json-to-pnp-csv/pull/20) | 🐌 Tiny | imrishabh18 | Reproduces the issue of mounting holes being incorrectly included in pick-and-place exports, providing a test that expects their exclusion. |

</details>

### [tscircuit/jlcpcb-manufacturing-specs](https://github.com/tscircuit/jlcpcb-manufacturing-specs)


<details>
<summary>🐌 Tiny Contributions (1)</summary>

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#5](https://github.com/tscircuit/jlcpcb-manufacturing-specs/pull/5) | 🐌 Tiny | imrishabh18 | Add min_trace_to_hole_edge_clearance: 0.2 mm to jlcMinTolerances and jlcPreferredTolerances for JLCPCB specifications. |

</details>

### [tscircuit/length-matching-solver](https://github.com/tscircuit/length-matching-solver)

| PR # | Impact | Rating | Contributor | Description |
|------|--------|--------|-------------|-------------|
| [#71](https://github.com/tscircuit/length-matching-solver/pull/71) | 🐳 Major | ⭐⭐⭐ | 0hmX | Adds support for native fixed SRJ traces in length matching without converting them to rectangular obstacles, allowing for direct input of fixed traces in the LengthMatchingSolver and PostProcessingSolver. |

### [tscircuit/parts-engine](https://github.com/tscircuit/parts-engine)

| PR # | Impact | Rating | Contributor | Description |
|------|--------|--------|-------------|-------------|
| [#58](https://github.com/tscircuit/parts-engine/pull/58) | 🐙 Minor | ⭐⭐ | GokulPandi-M | Fixes the issue where the parts engine did not include an LEDs requested color when searching for matching JLC parts, allowing incompatible LEDs to be selected. |
| [#57](https://github.com/tscircuit/parts-engine/pull/57) | 🐙 Minor | ⭐⭐ | GokulPandi-M | Fixes the issue where the parts engine selects an LED of the wrong color due to the missing color filter in the LED search functionality. |
| [#59](https://github.com/tscircuit/parts-engine/pull/59) | 🐙 Minor | ⭐⭐ | rushabhcodes | Fixes the invalid switch type filter in JLC searches that caused no matches to be returned for switches, ensuring correct results are fetched from the JLC search service. |

### [tscircuit/schematic-symbols](https://github.com/tscircuit/schematic-symbols)


<details>
<summary>🐌 Tiny Contributions (1)</summary>

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#478](https://github.com/tscircuit/schematic-symbols/pull/478) | 🐌 Tiny | GokulPandi-M | Aligns the second varistor lead and port with the first terminal, centers the horizontal REF label above the symbol and VAL below it, places the vertical varistor REF and VAL labels on the right, and regenerates only the affected varistor snapshots without renderer or router workarounds. |

</details>

### [tscircuit/calculate-packing](https://github.com/tscircuit/calculate-packing)

| PR # | Impact | Rating | Contributor | Description |
|------|--------|--------|-------------|-------------|
| [#136](https://github.com/tscircuit/calculate-packing/pull/136) | 🐙 Minor | ⭐⭐ | rushabhcodes | Computes axis-aligned packing bounds from ccw_rotation for oval and pill plated holes, fixing a root conversion issue and ensuring packed components clear the rotated bounds. |

### [tscircuit/altium-to-circuit-json](https://github.com/tscircuit/altium-to-circuit-json)

| PR # | Impact | Rating | Contributor | Description |
|------|--------|--------|-------------|-------------|
| [#101](https://github.com/tscircuit/altium-to-circuit-json/pull/101) | 🐳 Major | ⭐⭐⭐ | anil08607 | Fixes incorrect parsing of schematic coordinates leading to rendering issues and electrical disconnections in schematic designs. |
| [#100](https://github.com/tscircuit/altium-to-circuit-json/pull/100) | 🐳 Major | ⭐⭐⭐ | anil08607 | Maps copper layers from the physical board stack, ensuring distinct signal and plane IDs, and rejecting invalid configurations. |
| [#110](https://github.com/tscircuit/altium-to-circuit-json/pull/110) | 🐙 Minor | ⭐⭐ | ShiboSoftwareDev | Convert Altium embedded-image records into portable inline schematic_graphic elements, preserving source placement and aspect-ratio behavior across the schematic sheet, and adding the first compatible renderer release for schematic visual regressions. |
| [#104](https://github.com/tscircuit/altium-to-circuit-json/pull/104) | 🐙 Minor | ⭐⭐ | ShiboSoftwareDev | Resolves Altium .Designator and .Comment overlay text from the owning component and omits unresolved special strings instead of rendering placeholders. |
| [#93](https://github.com/tscircuit/altium-to-circuit-json/pull/93) | 🐙 Minor | ⭐⭐ | KrishnaX12 | Matches Altiums default PCB text justification when JUSTIFICATION is omitted, using Altium justification 3 (bottom_left) instead of centering the text, while preserving existing explicit numeric and named justification handling. |
| [#91](https://github.com/tscircuit/altium-to-circuit-json/pull/91) | 🐙 Minor | ⭐⭐ | KrishnaX12 | Skip component silkscreen designators and comments when Altium disables NAMEON or COMMENTON, using the text records DESIGNATORCOMMENT flags to keep ordinary labels and visible text unchanged. |
| [#113](https://github.com/tscircuit/altium-to-circuit-json/pull/113) | 🐙 Minor | ⭐⭐ | anil08607 | Fixes deduplication of copper polygons with explicit IDs to prevent suppression of unrelated polygons and ensure correct rendering of PCB copper pours. |
| [#102](https://github.com/tscircuit/altium-to-circuit-json/pull/102) | 🐙 Minor | ⭐⭐ | anil08607 | Updates the coordinate API to use the merged altiumts shared-coordinate reader with a two-argument format, pins the upstream merge commit, and refreshes TI comparison snapshots for SVG rendering fixes. |
| [#97](https://github.com/tscircuit/altium-to-circuit-json/pull/97) | 🐙 Minor | ⭐⭐ | anil08607 | Prevents completed converter stages from executing again, allowing converters to resume without duplicating netssheets or centering the schematic again. |
| [#96](https://github.com/tscircuit/altium-to-circuit-json/pull/96) | 🐙 Minor | ⭐⭐ | anil08607 | Removes duplicate hole-offset calculation in slotted through-hole pad conversion, ensuring identical output while improving efficiency. |
| [#122](https://github.com/tscircuit/altium-to-circuit-json/pull/122) | 🐙 Minor | ⭐⭐ | Devesh36 | Fixes the issue where mechanical-layer pads are incorrectly converted to PCB holes, ensuring only pads on mapped copper layers are processed as holes. |
| [#121](https://github.com/tscircuit/altium-to-circuit-json/pull/121) | 🐙 Minor | ⭐⭐ | Devesh36 | Fixes regression where non-plated Altium slot holes were incorrectly rendered as circles instead of retaining their original slot geometry in Circuit JSON output. |
| [#120](https://github.com/tscircuit/altium-to-circuit-json/pull/120) | 🐙 Minor | ⭐⭐ | Devesh36 | Fixes the conversion of non-plated Altium slots to ensure they are rendered as circular holes instead of losing their geometry during the conversion process. |

<details>
<summary>🐌 Tiny Contributions (8)</summary>

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#118](https://github.com/tscircuit/altium-to-circuit-json/pull/118) | 🐌 Tiny | ShiboSoftwareDev | Maps Altium outer-edge inversion markers to Circuit JSONs inversion-circle field and preserves inner-edge clock markers as standard schematic paths derived from finalized port geometry. |
| [#117](https://github.com/tscircuit/altium-to-circuit-json/pull/117) | 🐌 Tiny | ShiboSoftwareDev | Preserves nonnumeric Altium pin designators such as A1, B7, and SH1 as valid component-associated schematic text, placing the text using finalized Circuit JSON port geometry and respecting Altiums pin-designator visibility flag. |
| [#116](https://github.com/tscircuit/altium-to-circuit-json/pull/116) | 🐌 Tiny | ShiboSoftwareDev | Converts Altium active-low pin labels into structured Circuit JSON format, ensuring proper rendering and representation in schematics. |
| [#115](https://github.com/tscircuit/altium-to-circuit-json/pull/115) | 🐌 Tiny | ShiboSoftwareDev | Add a focused visual regression for the TI TMDS62LEVM Rev. B sheet 05, converting it to Circuit JSON and rendering it through renderImportedSchematicToSvg, while capturing the current behavior of circuit-to-svg without changing converter behavior. |
| [#103](https://github.com/tscircuit/altium-to-circuit-json/pull/103) | 🐌 Tiny | ShiboSoftwareDev | Replaces the copper-only TMDS62LEVM comparison with a complete top-side PCB render, including all layers and graphics, and updates the README description accordingly. |
| [#95](https://github.com/tscircuit/altium-to-circuit-json/pull/95) | 🐌 Tiny | KrishnaX12 | Reproduces the issue where linked polygon cutouts on a polygon without a poured copper region suppress the polygon entirely, leading to missing copper geometry in the conversion process. |
| [#99](https://github.com/tscircuit/altium-to-circuit-json/pull/99) | 🐌 Tiny | anil08607 | Restricts generic SchDoc text from being treated as electrical net labels, preventing unintended junctions and ensuring proper classification of electrical components. |
| [#123](https://github.com/tscircuit/altium-to-circuit-json/pull/123) | 🐌 Tiny | Devesh36 | Reproduces a bug where an Altium keepout arc is incorrectly converted to a copper trace instead of a keepout element, ensuring the center remains clear of copper. |

</details>

### [tscircuit/circuit-json-to-tscircuit](https://github.com/tscircuit/circuit-json-to-tscircuit)


<details>
<summary>🐌 Tiny Contributions (1)</summary>

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#86](https://github.com/tscircuit/circuit-json-to-tscircuit/pull/86) | 🐌 Tiny | trixie010 | Fixes the issue where the silkscreen path layer and stroke width are dropped during conversion, ensuring that non-default values are correctly emitted in the output. |

</details>

### [tscircuit/high-density-repair01](https://github.com/tscircuit/high-density-repair01)

| PR # | Impact | Rating | Contributor | Description |
|------|--------|--------|-------------|-------------|
| [#24](https://github.com/tscircuit/high-density-repair01/pull/24) | 🐳 Major | ⭐⭐⭐ | Abse2001 | Standardizes vector length calculations across platforms to avoid discrepancies in mathematical operations, ensuring consistent behavior in force improvement and related calculations. |

<details>
<summary>🐌 Tiny Contributions (1)</summary>

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#23](https://github.com/tscircuit/high-density-repair01/pull/23) | 🐌 Tiny | Abse2001 | Summary Repro only: the same real Game Boy routing node produces different geometry on macOS ARM64 and Linux x64, with Bun 1.3.8 on both. No solver changes or mocked math. The fixture is the unchanged cmn_170 input captured at highDensityForceImproveSolver from the full Game Boy Pipeline 9 solve (Core 0.0.1989, autorouter bc998052). The full SRJ SHA-256 was 89cfabf40f44453f4894a67475c4a5563e171d629f52bd42a8724bb15185ace4. All 795 loaded source files and the preceding phase inputs matched across platforms.  Reproduction One test runs the real solver twice, verifies within-process repeatability, and exports its untouched output. A manual-only LinuxmacOS workflow runs that test with the same Bun version and compares the resulting JSON files exactly. It is not triggered by pull requests or pushes. The workflow uses a normal comparison: it is red on this unfixed repro and green once the stacked fix makes the outputs identical. There is no inverted result, continue-on-error, or hard-coded platform geometryDRC count. Missing artifacts and execution errors also fail normally. The first differing full-run node is cmn_170, trace source_trace_259: the Y coordinate is 15.94692277523442 on Linux and 15.946922775234418 on Mac. Inside the affected node, identical arguments to Math.hypot(-0.12499999999999645, 0.34999999999999787) return 0.37165171868295943 and 0.3716517186829595, respectively, in HighDensityForceImproveSolver.tss point-to-segment clearance calculation. Matched-version diagnostic evidence(https:github.comtscircuittscircuit-autorouteractionsruns36230960938). This is a numerical determinism repro. The difference is too small to meaningfully show in a PCB image. It does not yet prove that this first discrepancy alone explains the full boards final DRC-count mismatch.  Validation bun test testsgameboy-force-improve-platform.test.ts --timeout 9999999 passes locally. Ordinary PR tests remain automatic. Run Force improvement platform parity manually on the repro branch when needed; its known mismatch should produce a red workflow. Run the same unchanged comparison on the stacked fix branch to verify it passes.  Manual repro check Manual repro check results(https:github.comtscircuithigh-density-repair01actionsruns36233058567)  run on this PRs head commit 8a0023260eae2d71b620a0e6312af010df3324fb. Both routing jobs passed; the LinuxmacOS geometry comparison failed as expected, reproducing the coordinate mismatch. |

</details>

## Changes by Contributor

### [mohan-bee](https://github.com/mohan-bee)

| PRs # | Impact | Rating | Description |
|------|--------|--------|-------------|
| [#348](https://github.com/tscircuit/checks/pull/348) | 🐳 Major | ⭐⭐⭐ | Detects copper overlap and clearance violations between different-net vias, ensuring that different-net vias do not pass the drill-spacing check while their copper overlaps. |
| [#43](https://github.com/tscircuit/calculate-cell-boundaries/pull/43) | 🐳 Major | ⭐⭐⭐ | Reduces processing time by skipping unnecessary neighbour scans during schematic grid merging, improving performance for large grids. |
| [#39](https://github.com/tscircuit/calculate-cell-boundaries/pull/39) | 🐳 Major | ⭐⭐⭐ | Restores the missing USB-C  Li-ion charger divider by merging adjacent boundary fragments to eliminate floating-point gaps, ensuring accurate schematic representation. |
| [#785](https://github.com/tscircuit/circuit-to-svg/pull/785) | 🐙 Minor | ⭐⭐ | Exposes schematic text IDs as SVG attributes for improved search selection in schematic viewers. |
| [#347](https://github.com/tscircuit/checks/pull/347) | 🐙 Minor | ⭐⭐ | Reproduces a missed short between different-net vias with 0.4 mm copper pads and 0.2 mm drills, ensuring that the copper overlap passes the drill-spacing check. |
| [#336](https://github.com/tscircuit/checks/pull/336) | 🐙 Minor | ⭐⭐ | Fixes false off-board error for circular mounting pads by using their circular envelope for boundary checks instead of square bounds. |
| [#326](https://github.com/tscircuit/checks/pull/326) | 🐙 Minor | ⭐⭐ | Fixes routing validation failure caused by pill-shaped holes, ensuring proper clearance checks and preserving crossing errors during routing checks. |
| [#41](https://github.com/tscircuit/calculate-cell-boundaries/pull/41) | 🐙 Minor | ⭐⭐ | Aligns touching spans crossed by the same vertical connector at an unobstructed height, fixing the stepped horizontal divider and vertical overhang in the air mouse snapshot after PR 39. |
| [#1250](https://github.com/tscircuit/schematic-trace-solver/pull/1250) | 🐙 Minor | ⭐⭐ | Fixes the issue of inline-label shove loop causing a label to push against itself, ensuring proper label placement without collisions. |
| [#1249](https://github.com/tscircuit/schematic-trace-solver/pull/1249) | 🐙 Minor | ⭐⭐ | Reproduces the long ground wire and boxed sample labels in sheet 1 of the portable logic analyzer schematic, adding captured pre-routing input, a focused pipeline test, and an SVG snapshot of the current routing behavior while preserving existing solver behavior for future routing fixes. |
| [#1248](https://github.com/tscircuit/schematic-trace-solver/pull/1248) | 🐙 Minor | ⭐⭐ | Removes unnecessary bends in the reset trace by passing all label reroute histories to the collision-checked simplifier, resulting in a cleaner trace with fewer bends. |
| [#1246](https://github.com/tscircuit/schematic-trace-solver/pull/1246) | 🐙 Minor | ⭐⭐ | Preserves distant ground connections between multi-pin components on different rows by using net labels instead of bypassing local routing limits. |
| [#97](https://github.com/tscircuit/copper-pour-solver/pull/97) | 🐙 Minor | ⭐⭐ | Fixes the missing mounting-slot clearance around non-plated pill holes, ensuring a 0.3 mm clearance is maintained for both openings without altering the schematic output. |

<details>
<summary>🐌 Tiny Contributions (15)</summary>

| PR # | Impact | Description |
|------|--------|-------------|
| [#279](https://github.com/tscircuit/schematic-viewer/pull/279) | 🐌 Tiny | motivation inline net labels should be searchable by name. before search omitted trace-linked schematic text, including the inline labels in the am3352 board. after search includes inline labels with sheet context, matching order, and selection targets using circuit-to-svg 0.0.432. the full-board fixture uses the supplied am3352 board. all 244 inline labels have selectable svg targets, and 37 tests pass. |
| [#4179](https://github.com/tscircuit/core/pull/4179) | 🐌 Tiny | Updates the tscircuitschematic-trace-solver dependency to version 0.0.212 in the package.json file. |
| [#4178](https://github.com/tscircuit/core/pull/4178) | 🐌 Tiny | Updates the calculate-cell-boundaries dependency to version 0.0.24 in the package.json file. |
| [#4173](https://github.com/tscircuit/core/pull/4173) | 🐌 Tiny | Updates the tscircuitschematic-trace-solver dependency to version 0.0.211 in the package.json file. |
| [#4143](https://github.com/tscircuit/core/pull/4143) | 🐌 Tiny | Updates the calculate-cell-boundaries dependency to version 0.0.23 and refreshes schematic snapshots to align with the latest section divider geometry. |
| [#4127](https://github.com/tscircuit/core/pull/4127) | 🐌 Tiny | Updates the tscircuitchecks dependency to version 0.0.211 in package.json |
| [#4133](https://github.com/tscircuit/core/pull/4133) | 🐌 Tiny | Updates the tscircuitschematic-trace-solver dependency to version 0.0.210 in the package.json file. |
| [#4098](https://github.com/tscircuit/core/pull/4098) | 🐌 Tiny | Updates the tscircuitcopper-pour-solver dependency to version 0.0.57 in the package.json file. |
| [#335](https://github.com/tscircuit/checks/pull/335) | 🐌 Tiny | Reproduces a false off-board error for a circular mounting pad near a rounded board corner, ensuring that the copper-edge check passes while asserting the current false error. |
| [#325](https://github.com/tscircuit/checks/pull/325) | 🐌 Tiny | Reproduces a bug where the routing check fails due to a DRC exception caused by pill-shaped holes in PCB design. |
| [#42](https://github.com/tscircuit/calculate-cell-boundaries/pull/42) | 🐌 Tiny | Reproduces the boundary-calculation stall triggered by the 14 schematic sections of the Tang Nano GW1N-1 board, capturing input bounds and solver state without altering the solvers behavior. |
| [#38](https://github.com/tscircuit/calculate-cell-boundaries/pull/38) | 🐌 Tiny | Reproduces the bug where the USB-C  Li-ion charger section divider collapses to a short stub during boundary reduction and repair in the air mouse schematic. |
| [#1247](https://github.com/tscircuit/schematic-trace-solver/pull/1247) | 🐌 Tiny | Add a reproduction of the STM32 mini dev board MCU sheet in the schematic trace solver, including a six-component routing fixture and snapshot test, while maintaining the current routing algorithm without changes. |
| [#98](https://github.com/tscircuit/copper-pour-solver/pull/98) | 🐌 Tiny | Syncs the package version from 0.0.45 to 0.0.56 to allow pver to select 0.0.57 for the next release. |
| [#96](https://github.com/tscircuit/copper-pour-solver/pull/96) | 🐌 Tiny | Reproduces the issue of missing copper-pour clearance around non-plated pill mounting slots, ensuring proper mechanical clearance is maintained in PCB designs. |

</details>

### [seveibar](https://github.com/seveibar)

| PRs # | Impact | Rating | Description |
|------|--------|--------|-------------|
| [#830](https://github.com/tscircuit/circuit-json/pull/830) | 🐳 Major | ⭐⭐⭐ | Teardrops now use ordinary wire route points. Removes teardrop from the route union and its standalone schematype, and adds optional start_width, end_width, and width_interpolation_mode: linear  quadratic to wires. |
| [#825](https://github.com/tscircuit/circuit-json/pull/825) | 🐳 Major | ⭐⭐⭐ | Add a new route type teardrop to represent tapered wire segments with varying widths in PCB traces, enhancing the geometry representation without requiring separate copper pours. |
| [#820](https://github.com/tscircuit/circuit-json/pull/820) | 🐳 Major | ⭐⭐⭐ | Add optional cad_component.is_on_folded_board to distinguish assembled CAD positionrotation from the flat PCB pose. |
| [#816](https://github.com/tscircuit/circuit-json/pull/816) | 🐳 Major | ⭐⭐⭐ | Add pcb_bend and pcb_stiffener schemas and types to describe bends and bonded reinforcement in flex PCB designs, ensuring flat layout preservation and unit-aware validation. |
| [#864](https://github.com/tscircuit/props/pull/864) | 🐳 Major | ⭐⭐⭐ | Add exported PcbBendProps and PcbStiffenerProps for pcbbend  and pcbstiffener  components, enabling the definition of bends and stiffeners in flex PCBs with validation for geometry and dimensions. |
| [#1006](https://github.com/tscircuit/3d-viewer/pull/1006) | 🐳 Major | ⭐⭐⭐ | Fixes context menus exceeding the viewport and groups camera controls under a single menu, ensuring all menus stay within view and are scrollable if overflowing. |
| [#1005](https://github.com/tscircuit/3d-viewer/pull/1005) | 🐳 Major | ⭐⭐⭐ | Adds a right-click context menu option to show 3D components on the schematic, enabling users to navigate to the schematic view directly from the 3D viewer. |
| [#1004](https://github.com/tscircuit/3d-viewer/pull/1004) | 🐳 Major | ⭐⭐⭐ | Reduces the setup cost for board relief textures and pauses rendering of hidden 3D viewers to improve performance and resource management. |
| [#1002](https://github.com/tscircuit/3d-viewer/pull/1002) | 🐳 Major | ⭐⭐⭐ | Add a right-click Fold PCBs toggle using native Three.js geometry and the shared flex-utils math, allowing flat and already-folded CAD input to be displayed in either state. |
| [#4093](https://github.com/tscircuit/core/pull/4093) | 🐳 Major | ⭐⭐⭐ | Completes disabled DRC synchronously, caches construction schemas by original schema identity, and skips empty copper cleanup to optimize rendering performance. |
| [#4094](https://github.com/tscircuit/core/pull/4094) | 🐳 Major | ⭐⭐⭐ | Large imported boards eagerly build a named phase-state map for every renderable. AM62A has 39,779 renderables, and none of those maps are inspected during its normal unobserved render. Keep ordinary  initialized, dirty  objects in an indexed array. Build the public named map only on first access, using references to those same objects. Render methods directly assign phaseState.initialized and phaseState.dirty: no packed flags, boolean-array synchronization, state reconstruction, or setter helpers. Once the map is exposed, read it to preserve callers replacing individual entries or the entire map. Also avoid temporary arrays when checking previous async effects, check the isolated phase before component fields, and skip lifecycle event preparation when no listeners exist. Phase ordering, async barriers, live subscriptions and custom-rootdebug behavior are preserved. Three fresh processes per variant on the frozen AM62A input, in rotating order, with pours disabled:  Variant  Eval  core render median  Peak RSS median   ---  ---:  ---:   Merged 4093 baseline  5.896 s  1,032 MiB   Previous boolean arrays  4.898 s  801 MiB   Shared state objects  4.970 s  884 MiB  The simpler code retains a 15.7 improvement over baseline in this batch. It takes 0.072 s (1.5) longer and about 83 MiB more peak process memory than boolean arrays. All nine outputs match: 66,219 records, normalizing only software-version metadata. Timings exclude module startup, serialization, transfer and viewer rendering. The 2-second target remains unmet. Benchmark method and comparisons(benchmarkingscriptsrender-state-ablation.md)  Ordered samples(benchmarkingscriptsrender-state-ablation-results.json) Validation: 134 tests pass, one existing skip, five snapshots unchanged; build and typecheck pass. Coverage includes live state inspection, direct mutation, entry and map replacement, first inspection plus replacement inside a handler, dirty propagation, removal, throwing phases, async dependencies, lifecycle subscriptions, custom roots, subcircuits, async footprints and DRC. |
| [#4089](https://github.com/tscircuit/core/pull/4089) | 🐳 Major | ⭐⭐⭐ | Add pcbbend and pcbstiffener to cores component catalogue and TSX types. Flex boards now emit pcb_bend and rectangularpolygon pcb_stiffener records with boardgroup ownership, unit-normalized dimensions, adhesive thickness, and resolved authored placementrotation. |
| [#4084](https://github.com/tscircuit/core/pull/4084) | 🐳 Major | ⭐⭐⭐ | Fixes autorouting to pass exact preloaded trace geometry to Pipeline9, ensuring that manual PCB paths are preserved and not replaced with rectangle chains during routing. |
| [#4091](https://github.com/tscircuit/core/pull/4091) | 🐳 Major | ⭐⭐⭐ | Fixes net lookup costs across the full render lifecycle by optimizing the net resolution process, resulting in significant performance improvements during rendering. |
| [#4090](https://github.com/tscircuit/core/pull/4090) | 🐳 Major | ⭐⭐⭐ | Reduces the time spent in createNetsFromProps by indexing literal net selectors, significantly improving performance for large imported boards. |
| [#334](https://github.com/tscircuit/checks/pull/334) | 🐳 Major | ⭐⭐⭐ | Fixes detection of missing vias at cross-layer trace port attachments, ensuring proper validation of declared trace-to-port layer connections. |
| [#329](https://github.com/tscircuit/checks/pull/329) | 🐳 Major | ⭐⭐⭐ | Adds a check for self-shorts in length-matched PCB traces, enhancing routing checks to prevent shorts across their own routes. |
| [#330](https://github.com/tscircuit/checks/pull/330) | 🐳 Major | ⭐⭐⭐ | Fixes false positive self-short reports for valid AM62L DQ0 fanout bends due to floating-point roundoff and local copper overlap. |
| [#5046](https://github.com/tscircuit/tscircuit.com/pull/5046) | 🐳 Major | ⭐⭐⭐ | Preserves 3D and PCB viewers across tab switches to prevent UI thread blocking during 3D construction, optimizing resource management and improving user experience. |
| [#2744](https://github.com/tscircuit/tscircuit-autorouter/pull/2744) | 🐳 Major | ⭐⭐⭐ | Changes the default autorouting solver from Pipeline 7 to Pipeline 9, ensuring that users get local Pipeline 9 routing when using the generic import. |
| [#2702](https://github.com/tscircuit/tscircuit-autorouter/pull/2702) | 🐳 Major | ⭐⭐⭐ | Add Debug  Run Trace Linting after a successful route, analyzing the complete routed SRJ and recording per-type style issue counts in benchmarks. |
| [#2681](https://github.com/tscircuit/tscircuit-autorouter/pull/2681) | 🐳 Major | ⭐⭐⭐ | Adds the complete AM3352 four-layer board as an unphased routing fixture and fixes three problems it exposes: an exhausted crowded-node search budget, excessive force-improvement work on redundant grid vertices, and an infinite shared-via merge cycle. The initial fixes reached length matching instead of failing in high-density routing or stalling during repair. It still does not complete successfully or produce a clean board. An uncached Pipeline 9 run reached length matching after about 21.5 minutes, then exhausted the meander search for source_net_70 in DDR_BYTE0, which needs 5.1637 mm of additional length.  Changes Updated against main after trace simplification moved into its own package. The shared-via fix now lives in trace-simplification-solver2(https:github.comtscircuittrace-simplification-solverpull2); this PR pins the dependency to the fix commit and keeps an integration regression against its public export. Extend the existing growshrink search budget according to unrelated terminal spacing as well as via diameter, while respecting explicit caller caps and preserving the original attempt order. Clear a stale error when an attempt succeeds. Reduce long collinear grid runs only in pathological regions with at least 4,096 points. Ordinary force-control vertices stay unchanged, since removing them caused regressions in existing routing and repair. Preserve endpoints, layer transitions, vias, terminal metadata, and segment metadata. The captured slow sample drops from 4,735 points to 889 without changing its copper path, and its force solve finishes in about two seconds. Merge a shared physical via only when every attached route can follow it. Reserve whole via locations within each batch. The captured oscillating board case terminates in three passes rather than moving a branch back and forth forever. Add small extracted regressions, update the fixture page, and replace the old partial-routing snapshot with repaired routing labeled explicitly as a length-matching failure. The full-board reproduction is opt-in with RUN_AM3352_FULL_SOLVE1 because of its runtime. The initial broad grid reduction regressed dataset 18 samples 2, 4, and 7. The restricted implementation passes their DRC and repair-budget tests without changing expectations. A new regression also checks that ordinary regions retain every control vertex even when the total board is large.  Remaining problems The board measurements and SVG below are the earlier failing capture from 567ca9a, before narrowing force preprocessing to avoid regressions. A refresh with the latest guard passed dense routing but remained slow in force improvement and was stopped; the current full AM3352 solve is not validated to completion. Dataset 18 validation does not establish that this board is clean. The captured post-repair output has 637 traces and 3,413 relaxed-DRC errors: 1,874 trace errors, 1,008 viatrace clearance errors, 314 padtrace clearance errors, and 217 via clearance errors. The snapshot displays the evaluated DRC count. The existing growshrink strategy creates provisional routing; passing that stage does not establish physical clearance. Before matching, DDR byte-bus skew is 14.0323 mm and 7.1412 mm against a 0.635 mm limit. The DQSclock pairs also exceed their 0.127 mm limits. An isolated experiment with tighter 0.1 mm meander spacing still exhausts all 66 candidates for the first failing member. No bus constraints or routing phases were removed to obtain progress. Congestion and routing space need further work upstream of length matching. The fixture retains 138 connections, 774 terminals, 907 obstacles, four layers, and six bus-skew constraints. It removes saved routing, fanout escapes, and preconnected pours; groundpower are ordinary connections. All four layers are available, and differential-pair couplingimpedance requirements are not encoded. This is a routing reproduction, not a fabrication-ready DDR layout.  Dataset 18 regression validation Latest same-machine benchmark(https:github.comtscircuittscircuit-autorouterpull2681issuecomment-5782770393) compares current main be1e57e with PR cf1f745, after merging latest main and preserving the retry-order correction: 1516 samples complete and pass relaxed DRC on both revisions (93.8), with one timeout on each. Zero outcome regressions, zero DRC issues among solved samples, and identical average via counts (215.87). Median runtime: 101.1s  101.2s; P95: 336.4s  334.4s (0.6). All nine CI test shards, build, types, formatting, and Vercel checks pass on cf1f745. The full Game Boy routing test passes against the existing snapshot; no snapshot refresh was needed. The crowded-terminal test verifies the original attempted nodes remain an unchanged prefix of the expanded search. The sub-via-node regression also passes. The standalone simplifier PR passes all 39 tests, type checking, and formatting checks.  Validation Fresh uncached full Pipeline 9 run with --timeout 9999999: passed routing and repair stages, then reproduced the specific length-matching failure after 1,288 seconds. Replayed the captured post-repair geometry: reproduced the identical 5.1637 mm failure; failure assertions and updated SVG snapshot passed. The revised opt-in full-board test was not rerun from scratch after changing its assertions. Five fixtureextracted regression tests: pass, 5,002 assertions. Existing growthoverlap, via-merger, via-preservation, and clearance-repair visual tests: pass. bun run build: pass. Updated SVG rendered to PNG and visually inspected. Open bug-reportsbugreport108-am3352-four-layer in React Cosmos with bun run start. The README documents provenance, conversion, remaining measurements, and the opt-in full-solve command.  Preserve growshrink retry order Extending the maximum budget had also raised the first retry scale, skipping attempts used by the existing Game Boy routing snapshot. Keep the initial retry bound based on the original budget, and use the expanded budget only for additional attempts. The crowded-terminal regression now verifies that the original failed attempts remain an unchanged prefix of the expanded search. |
| [#2691](https://github.com/tscircuit/tscircuit-autorouter/pull/2691) | 🐳 Major | ⭐⭐⭐ | Regional repair can exhaust its search queue with unresolved spans before reaching either work limit. On SRJ18 sample 15, the smaller regions fixed collar blocks coupled routes, but each accepted partial improvement resets the visited regions and repeats the same small context. Prioritize the existing wider context after this stalled-search condition on boards that revisit changed regions. Searches still making progress retain the smaller context. The existing search budgets, physical guards, reference DRC checks, and 360-second benchmark timeout are unchanged. Validation: the cropped sample 15 regression leaves 11 internal errors on main and reaches zero with this change; the full local sample 15 also passes relaxed DRC. The sample 14 repair replay remains clean. Eleven focused tests, the build, and TypeScript checking pass. The full SRJ18 CI benchmark completes all 16 samples with clean relaxed DRC at the unchanged 360-second timeout; sample 15 finishes in 352.7 seconds. All CI checks are green. |
| [#2685](https://github.com/tscircuit/tscircuit-autorouter/pull/2685) | 🐳 Major | ⭐⭐⭐ | Includes all samples in timing percentiles, counting failed or timed-out samples at their configured timeout, and preserves diagnostic metadata for better reporting. |
| [#2680](https://github.com/tscircuit/tscircuit-autorouter/pull/2680) | 🐳 Major | ⭐⭐⭐ | Fixes autorouting failure in SRJ18 sample 6 by implementing a congestion-aware final routing strategy that allows for successful completion of the routing process. |
| [#2686](https://github.com/tscircuit/tscircuit-autorouter/pull/2686) | 🐳 Major | ⭐⭐⭐ | Preserves negotiated routes during regional rerouting when clearance projection would invalidate them due to via guard violations. |
| [#223](https://github.com/tscircuit/circuit-json-to-gltf/pull/223) | 🐳 Major | ⭐⭐⭐ | Use flex-utils for bend math, surface subdivision, stiffeners and CAD transforms. Keep the renderer-owned adapter between Circuit JSON (Z up) and Scene3D (Y up), including triangle winding changes. Normalize pre-folded CAD through the shared inverse transform before selecting the output fold state, preserving PCB coordinates. |
| [#221](https://github.com/tscircuit/circuit-json-to-gltf/pull/221) | 🐳 Major | ⭐⭐⭐ | Flex PCB records currently render only as a flat board. Add a runtime foldPcbs: true option to the conversion APIs; false or omission renders flat. The same Circuit JSON can produce either pose without changing PCB geometry or stored CAD poses. The included capsule fixture uses three 12 mm discs, two narrow flex links, and four 90-degree bends. It aligns the discs at heights 0, 6, and 12 mm, with the middle disc inverted. Copper textures, CAD models, and FR4 stiffeners follow the fold. A Cosmos fixture provides a flatfolded selector, and an example script exports both GLBs and PNG previews. !Three-disc flex capsule(https:raw.githubusercontent.comtscircuitcircuit-json-to-gltfadd-folded-flex-pcb-renderingtestsintegration__snapshots__three-disc-flex-folded.snap.png) The board mesh is split at bend tangencies and five-degree arc intervals. Original surface identity and interpolated flat UVs keep topbottom textures attached through curved and inverted regions. Rigid models retain existing formatlayer rotations; their positions, orientations, normals, and bounds are transformed afterward. Standalone CAD geometry without a PCB component remains fixed. Large tessellated exports use 32-bit indices when needed. Initial scope is a single board with parallel, non-overlapping bends sharing a moving direction. Geometry determines composition order. Partial-width bend lines, incompatible boardpanel references, and rigid geometry crossing bend zones fail explicitly. Self-collision and manufacturing checks are not implemented. The flex links extend beyond the circular areas and must be included in capsule clearance. Uses temporary structural input types compatible with https:github.comtscircuitcircuit-jsonpull816 while those records await release; no upstream dependency release is required to try this fixture. Validation: Full Bun suite passed: 137 tests before the final standalone-CAD regression was added. Final targeted suite: 10 tests pass, including the four-view snapshot, explicit falsedefault equivalence, and standalone-CAD case, measured three-disc alignment, signedoblique bends, record-order independence, immutable inputs, texture continuity, and exported off-axis geometry across both layers and 03790180270-degree rotations. Three Chromium tests pass: repeated flatfolded exports and existing uploadrecovery flows. TypeScript check, packagedeclaration build, source formatting, and diff whitespace checks pass. Inspected the generated folded snapshot and flatfolded previews visually. A four-view snapshot regression now covers isometric, Z side, X end, and Y top views. The baseline was visually inspected, its comparison passes, and TypeScript checks pass. !Four views of the folded capsule flex(https:raw.githubusercontent.comtscircuitcircuit-json-to-gltfadd-folded-flex-pcb-renderingtestssnapshot__snapshots__three-disc-flex-four-view.snap.png) |
| [#104](https://github.com/tscircuit/copper-pour-solver/pull/104) | 🐳 Major | ⭐⭐⭐ | Adds support for native tapered trace clearance in copper pours by reading tapered wire segments from Circuit JSON, allowing for accurate clearance profiles that follow linear or quadratic width changes. |
| [#211](https://github.com/tscircuit/tiny-hypergraph/pull/211) | 🐳 Major | ⭐⭐⭐ | Adds congestion-aware routing as a candidate for final routing to prevent congested topologies that hinder downstream detailed routing. |
| [#1](https://github.com/tscircuit/minicanvas/pull/1) | 🐳 Major | ⭐⭐⭐ | Implement the Canvas 2D subset needed to render Circuit JSON directly to RGBAPNG through circuit-to-canvas, without SVG rasterization, native runtime dependencies, or WASM. The rasterizer supports polygon fills, even-odd holes, arcsellipsesarcTo, transformed strokes with capsjoinsdashes, nested clipping, alpha compositing, and non-repeating canvas patterns for offscreen soldermask layers. createCanvas( width, height ) provides image data, PNG bytes, and PNG data URLs. Unsupported features such as system-font text, gradients, and image decoding are explicitly outside this subset; PCB lettering uses glyph paths. |
| [#3](https://github.com/tscircuit/modelprinter/pull/3) | 🐳 Major | ⭐⭐⭐ | Add parameterized sheet-metal plates, right-angle brackets, and U-channels with round holes and rounded slots on individual panels, including typed mesh generation and model strings for various dimensions and features. |
| [#2](https://github.com/tscircuit/trace-simplification-solver/pull/2) | 🐳 Major | ⭐⭐⭐ | Fixes an issue where a shared via oscillates indefinitely between two occupied sites by requiring all attached routes to move together during a merge. |
| [#1](https://github.com/tscircuit/flex-utils/pull/1) | 🐳 Major | ⭐⭐⭐ | Introduce a renderer-independent implementation of finite-radius PCB folding and reversible CAD poses, including transformations and geometry handling for PCB components. |
| [#278](https://github.com/tscircuit/schematic-viewer/pull/278) | 🐙 Minor | ⭐⭐ | Expose useSchematicViewerController() so hosts can focus a component imperatively, including while switching to a tab whose viewer has not mounted yet. |
| [#1037](https://github.com/tscircuit/pcb-viewer/pull/1037) | 🐙 Minor | ⭐⭐ | Pressing Escape now exits X-Ray mode and clears all inspected nets, including bus selections. |
| [#1035](https://github.com/tscircuit/pcb-viewer/pull/1035) | 🐙 Minor | ⭐⭐ | Adds functionality to display the manufacturer part number of a component pad in the context menu and enables navigation to the schematic when a callback is provided. |
| [#828](https://github.com/tscircuit/circuit-json/pull/828) | 🐙 Minor | ⭐⭐ | Replaces smoothstep with quadratic interpolation for teardrop width transitions, updating schema and validation tests accordingly. |
| [#818](https://github.com/tscircuit/circuit-json/pull/818) | 🐙 Minor | ⭐⭐ | Adds support for flex as a valid PCB board material in the runtime enum and PcbBoard type, allowing for validation through the Circuit JSON union. |
| [#869](https://github.com/tscircuit/props/pull/869) | 🐙 Minor | ⭐⭐ | Adds trace-level teardrop controls and explicit width interpolation for saved pcbTracePaths |
| [#863](https://github.com/tscircuit/props/pull/863) | 🐙 Minor | ⭐⭐ | Adds an optional algorithmFn prop directly to autoroutingphase , reusing the existing AutorouterConfig callback type and schema validation. Parsing preserves the callback unchanged and rejects non-function values; existing phases remain valid without the prop. |
| [#4125](https://github.com/tscircuit/core/pull/4125) | 🐙 Minor | ⭐⭐ | Prevents unnecessary source DRC processing when drcChecksDisabled is true, improving performance by reducing CPU time spent on checks. |
| [#4108](https://github.com/tscircuit/core/pull/4108) | 🐙 Minor | ⭐⭐ | Updates the tscircuitchecks package to version 0.0.210, enabling detection of self-shorts on length-matched traces and fixing false positives in DRC checks. |
| [#4092](https://github.com/tscircuit/core/pull/4092) | 🐙 Minor | ⭐⭐ | Create board-mounted CAD components in their assembled positionrotation during rendering, ensuring that folded records carry is_on_folded_board: true while PCB placementrouting remains flat. |
| [#4086](https://github.com/tscircuit/core/pull/4086) | 🐙 Minor | ⭐⭐ | Supports autoroutingphase algorithmFn...  by carrying the callback through the routing phase plan and applying it after autorouter preset resolution, allowing phase callbacks to take precedence over inherited or nested callbacks. |
| [#783](https://github.com/tscircuit/circuit-to-svg/pull/783) | 🐙 Minor | ⭐⭐ | Render linear and quadratic teardrops using optional taper fields on ordinary pcb_trace.route wire points, preserving neighboring segments and avoiding duplicate strokes. |
| [#784](https://github.com/tscircuit/circuit-to-svg/pull/784) | 🐙 Minor | ⭐⭐ | Fixes rendering issue where exposed SMT pads connected to a copper pour disappear under its solder-mask overlay when showSolderMask is enabled, affecting GLB exports. |
| [#5335](https://github.com/tscircuit/runframe/pull/5335) | 🐙 Minor | ⭐⭐ | Right-clicking a component in the 3D tab now opens and focuses its matching schematic component, enhancing navigation between 3D models and schematic components. |
| [#295](https://github.com/tscircuit/circuit-to-canvas/pull/295) | 🐙 Minor | ⭐⭐ | Render linear and quadratic teardrops using optional taper fields on ordinary pcb_trace.route wire points, preserving neighboring segments and avoiding duplicate strokes. |
| [#89](https://github.com/tscircuit/circuit-json-schematic-placement-analysis/pull/89) | 🐙 Minor | ⭐⭐ | Allows one extra pin spacing beyond the ideal padding before emitting a warning for centered pin banks with unequal counts, while keeping existing ideal-padding values and resize suggestions for excessive gaps. |
| [#60](https://github.com/tscircuit/check-shorts/pull/60) | 🐙 Minor | ⭐⭐ | The published pedometer v1.1.3 passes the Gerber short check on all four copper layers, but its PMID net is physically split: C4 and the chargers PMID pins are disconnected from C9 and the 2.5 V regulator input. Trace source_net_6_mst1_0 ends on inner2 at U2.PMID_Bs top-only pad, (-8.20005, -3.199898) mm, without a via. This adds the full, byte-for-byte published distindexcircuit.json (checksum protected), 12 regressioncharacterization tests, and originalrepair SVG snapshots with a focused viewBox, arrow, and whole-board minimap. A test-local physical copper probe checks all eight PMID pads across four layers using PCB and Gerber masks. It detects two islands in the original and one after adding the missing via; wrong-layer and remote-via controls remain disconnected. The short checker groups copper by logical net and detects contact between different groups. It does not establish continuity within a group. This is an intra-net open; this PR captures the reproducible gap without changing the production shorts API. The fixture README documents the measurements, provenance, oracle scope, and requirements for a future general open-circuit check. Validation: bun test  52 tests pass, zero failures. bun run typecheck  passes. bun run format:check  passes; large literal JSON fixtures are skipped with size warnings. Snapshot creation and subsequent comparison both verified; the added via is a diagnostic control, not a fabrication-approved repair. |
| [#6](https://github.com/tscircuit/circuit-json-webgpu/pull/6) | 🐙 Minor | ⭐⭐ | Render linear and quadratic teardrops using optional taper fields on ordinary pcb_trace.route wire points, preserving neighboring segments and avoiding duplicate strokes. |

<details>
<summary>🐌 Tiny Contributions (15)</summary>

| PR # | Impact | Description |
|------|--------|-------------|
| [#1003](https://github.com/tscircuit/3d-viewer/pull/1003) | 🐌 Tiny | Add a TSX-generated flex assembly with a slotted sheet-metal U-channel and two modeled M3 socket-head bolts, including a PCB with routed traces and components. |
| [#4139](https://github.com/tscircuit/core/pull/4139) | 🐌 Tiny | Bump tscircuitchecks from 0.0.213 to 0.0.214 to consume the missing-via fix, rejecting trace-to-port attachments across unbridged copper layers and reporting the disconnected endpoint. |
| [#333](https://github.com/tscircuit/checks/pull/333) | 🐌 Tiny | The published pedometer v1.1.3 routes PMID on inner2 into U2s top-only B2 pad at (-8.20005, -3.199898) mm, without a via. Current connectivity checks miss the layer mismatch despite matching endpoint coordinates and port metadata. This PR adds a reproduction, not a production DRC fix: Complete, byte-for-byte circuit JSON fixture with a SHA-256 integrity assertion and release provenance. Geometry assertions verifying the missing endpoint via and the existing via at the opposite end. Three test.failing cases covering the continuity checker, port checker, and aggregate routing checks, plus execution smoke tests and an in-memory valid-via control. A zoomed SVG snapshot with an explicit viewBox, layer colors, and an arrow at the missing transition. A report explaining why each checker misses the defect and separating this finding from the boards other errors and reported hardware measurements. The aggregate routing checker returns other errors on this board, but none diagnoses this missing connection. The standalone continuity checker returns zero errors.  Visual reproduction !Missing inner2-to-top via at U2 B2(https:raw.githubusercontent.comtscircuitchecks3a68ea5testslib__snapshots__pedometer-missing-via.snap.svg)  Validation bun test: 105 tests pass across 54 files. bunx tsc --noEmit: passes. Formatting of the new TypeScript test: passes. The JSON fixture remains verbatim. All three diagnostic assertions fail with expected true, received false when .failing is removed, confirming the reproduction. Source: imrishabh18pedometer v1.1.3(https:tscircuit.comimrishabh18pedometerpcb). Detailed provenance and analysis are in docspedometer-missing-via-repro.md. |
| [#11](https://github.com/tscircuit/handbook/pull/11) | 🐌 Tiny | Adds guidelines for preparing for design review, emphasizing schematic readability and the use of explanatory text near chips. |
| [#5068](https://github.com/tscircuit/tscircuit.com/pull/5068) | 🐌 Tiny | Fixes missing utility export in production build by updating dependencies and ensuring compatibility with the latest circuit-to-canvas requirements. |
| [#592](https://github.com/tscircuit/jlcsearch/pull/592) | 🐌 Tiny | Adds a Spring-Clamp Connectors homepage category at spring_clamp_connectorslist, backed by the existing spring-clamp terminal-block catalog, including pitch and pin filters and a .json endpoint. |
| [#591](https://github.com/tscircuit/jlcsearch/pull/591) | 🐌 Tiny | Microcontrollers such as RP2040 and STM32F103C8T6 report has_usbfalse when supplier descriptions omit USB, and the list page has no USB filter. Add a Has USB AllYesNo selector and has_usbtruefalse API filtering, composable with existing filters. Audit the 1,000 highest-stock records against manufacturer specifications, datasheets, and official device definitions. Commit per-part sources and evidence, with normalized exact-part overrides shared by imports and three idempotent D1 migrations. The audit finds 387 USB-capable parts and 613 without USB, correcting 360 originally incorrect flags across the three batches. The final 700 records add 264 corrections; previously released migrations 0011 and 0012 remain unchanged. Use exact variant evidence: for example, STM32F303C8K8, LPC1517, MG32F02A032 and STC32G8K48 do not gain USB support from similarly named parts. Official ST hardware-IP inventories and versioned Microchip register definitions supplement datasheet review. USB power delivery, software-emulated USB ISP, external programming adapters, and CRC16_USB do not count as hardware USB. The audit records silicon-revision caveats and category anomalies such as USB hubs, an op-amp and SPI flash; category assignments remain unchanged. Add migrations_only and read-only audit_microcontrollers dispatch options to Build and Sync D1. The former applies pending migrations and clears cached responses without rebuilding tables; both export the top 1,000 records for verification. Validation: 208 data-pipeline tests and 163 worker tests pass, plus typecheck and formatting. Tests cover all 1,000 import decisions, conflicting supplier metadata, family exceptions, normalization, repeated migration application, unaudited-row isolation, and preservation of other fields. All three migrations were tested against 1,000 deliberately inverted flags. Route tests cover HTMLJSON filtering for Yes, No, All, and filter composition. CI is green. Production migrations 0011 and 0012 completed in run 36058323522(https:github.comtscircuitjlcsearchactionsruns36058323522) and run 36060512782(https:github.comtscircuitjlcsearchactionsruns36060512782). Migration 0013 completed in run 36065678153(https:github.comtscircuitjlcsearchactionsruns36065678153). The final production export matches all 1,000 audit decisions: 387 Yes  613 No. Its beforeafter comparison confirms exactly 264 changed flags, with unchanged LCSC numbers, manufacturer part numbers and stock. The worker filter changes still require mergingdeploying this PR. |
| [#5268](https://github.com/tscircuit/runframe/pull/5268) | 🐌 Tiny | Selecting U1 on Schematic from a PCB pad now opens the schematic tab and centershighlights the matching source component. |
| [#4929](https://github.com/tscircuit/cli/pull/4929) | 🐌 Tiny | Updates the pinned tscircuitcheck-shorts tarball from 0.0.24 to 0.0.25, including its lockfile URL and integrity hash, ensuring the packaged fallback and test dependency is current. |
| [#5](https://github.com/tscircuit/modelprinter/pull/5) | 🐌 Tiny | Moves Zod to peerDependencies with , aligns Zod 3 development version, and modifies model definitions to accommodate consumer-owned Zod. |
| [#4](https://github.com/tscircuit/modelprinter/pull/4) | 🐌 Tiny | Publish the merged modelprinter implementation as tscircuitmodelprinter on GitHub Packages so public consumers can install its tarball through jscdn.tscircuit.com. |
| [#3](https://github.com/tscircuit/flex-utils/pull/3) | 🐌 Tiny | Expose CadComponentPlacement and transformCadComponentPlacement for transforming CAD positionrotation before the database record exists, and convert remaining flex-utils helpers with more than two arguments to named arguments. |
| [#4](https://github.com/tscircuit/flex-utils/pull/4) | 🐌 Tiny | Publish flex-utils to GitHub Packages for token-free tarball installation via jscdn, replacing npm registry and adding versioning support. |
| [#2](https://github.com/tscircuit/flex-utils/pull/2) | 🐌 Tiny | Disables Bun lockfile writes by modifying bunfig.toml and removes tracked lockfiles from the repository, ensuring that bun install does not create lockfiles during checks and publishing. |
| [#1](https://github.com/tscircuit/motor-driver-firmware/pull/1) | 🐌 Tiny | Adds GitHub and Firmware links above the motorcontrol.tscircuit.com dashboard header so visitors can find the repository and its firmware directory. |

</details>

### [tscircuitbot](https://github.com/tscircuitbot)


<details>
<summary>🐌 Tiny Contributions (359)</summary>

| PR # | Impact | Description |
|------|--------|-------------|
| [#1038](https://github.com/tscircuit/pcb-viewer/pull/1038) | 🐌 Tiny | Automated package update |
| [#1036](https://github.com/tscircuit/pcb-viewer/pull/1036) | 🐌 Tiny | Automated package update |
| [#1034](https://github.com/tscircuit/pcb-viewer/pull/1034) | 🐌 Tiny | Automated package update |
| [#5137](https://github.com/tscircuit/tscircuit/pull/5137) | 🐌 Tiny | Automated package update |
| [#5147](https://github.com/tscircuit/tscircuit/pull/5147) | 🐌 Tiny | Updates the tscircuitcli package version from 0.1.2134 to 0.1.2135 in package.json |
| [#5128](https://github.com/tscircuit/tscircuit/pull/5128) | 🐌 Tiny | Updates the tscircuitcli package to version 0.1.2130 |
| [#5133](https://github.com/tscircuit/tscircuit/pull/5133) | 🐌 Tiny | Automated package update |
| [#5153](https://github.com/tscircuit/tscircuit/pull/5153) | 🐌 Tiny | Automated package update |
| [#5145](https://github.com/tscircuit/tscircuit/pull/5145) | 🐌 Tiny | Automated package update |
| [#5131](https://github.com/tscircuit/tscircuit/pull/5131) | 🐌 Tiny | Automated package update |
| [#5155](https://github.com/tscircuit/tscircuit/pull/5155) | 🐌 Tiny | Updates the tscircuitcli package to version 0.1.2137 |
| [#5138](https://github.com/tscircuit/tscircuit/pull/5138) | 🐌 Tiny | Automated package update |
| [#5127](https://github.com/tscircuit/tscircuit/pull/5127) | 🐌 Tiny | Automated package update |
| [#5159](https://github.com/tscircuit/tscircuit/pull/5159) | 🐌 Tiny | Updates the tscircuitcli package to version 0.1.2138 in the package.json file |
| [#5158](https://github.com/tscircuit/tscircuit/pull/5158) | 🐌 Tiny | Automated package update |
| [#5157](https://github.com/tscircuit/tscircuit/pull/5157) | 🐌 Tiny | Automated package update |
| [#5156](https://github.com/tscircuit/tscircuit/pull/5156) | 🐌 Tiny | Automated package update |
| [#5154](https://github.com/tscircuit/tscircuit/pull/5154) | 🐌 Tiny | Automated package update |
| [#5150](https://github.com/tscircuit/tscircuit/pull/5150) | 🐌 Tiny | Automated package update |
| [#5149](https://github.com/tscircuit/tscircuit/pull/5149) | 🐌 Tiny | Automated package update |
| [#5148](https://github.com/tscircuit/tscircuit/pull/5148) | 🐌 Tiny | Automated package update |
| [#5144](https://github.com/tscircuit/tscircuit/pull/5144) | 🐌 Tiny | Automated package update |
| [#5143](https://github.com/tscircuit/tscircuit/pull/5143) | 🐌 Tiny | Automated package update |
| [#5141](https://github.com/tscircuit/tscircuit/pull/5141) | 🐌 Tiny | Automated package update |
| [#5140](https://github.com/tscircuit/tscircuit/pull/5140) | 🐌 Tiny | Updates the tscircuitcli package to version 0.1.2133 in the package.json file |
| [#5139](https://github.com/tscircuit/tscircuit/pull/5139) | 🐌 Tiny | Automated package update |
| [#5136](https://github.com/tscircuit/tscircuit/pull/5136) | 🐌 Tiny | Updates the tscircuitcli package version from 0.1.2131 to 0.1.2132 in package.json |
| [#5135](https://github.com/tscircuit/tscircuit/pull/5135) | 🐌 Tiny | Automated package update |
| [#5134](https://github.com/tscircuit/tscircuit/pull/5134) | 🐌 Tiny | Automated package update |
| [#5132](https://github.com/tscircuit/tscircuit/pull/5132) | 🐌 Tiny | Updates the tscircuitcli package to version 0.1.2131 in the package.json file |
| [#5126](https://github.com/tscircuit/tscircuit/pull/5126) | 🐌 Tiny | Automated package update |
| [#5151](https://github.com/tscircuit/tscircuit/pull/5151) | 🐌 Tiny | Automated package update |
| [#5129](https://github.com/tscircuit/tscircuit/pull/5129) | 🐌 Tiny | Automated package update |
| [#5160](https://github.com/tscircuit/tscircuit/pull/5160) | 🐌 Tiny | Automated package update |
| [#5152](https://github.com/tscircuit/tscircuit/pull/5152) | 🐌 Tiny | Automated package update |
| [#5146](https://github.com/tscircuit/tscircuit/pull/5146) | 🐌 Tiny | Automated package update |
| [#5130](https://github.com/tscircuit/tscircuit/pull/5130) | 🐌 Tiny | Automated package update |
| [#834](https://github.com/tscircuit/circuit-json/pull/834) | 🐌 Tiny | Automated package update |
| [#832](https://github.com/tscircuit/circuit-json/pull/832) | 🐌 Tiny | Automated package update |
| [#831](https://github.com/tscircuit/circuit-json/pull/831) | 🐌 Tiny | Automated package update |
| [#829](https://github.com/tscircuit/circuit-json/pull/829) | 🐌 Tiny | Automated package update |
| [#827](https://github.com/tscircuit/circuit-json/pull/827) | 🐌 Tiny | Automated package update |
| [#826](https://github.com/tscircuit/circuit-json/pull/826) | 🐌 Tiny | Automated package update |
| [#821](https://github.com/tscircuit/circuit-json/pull/821) | 🐌 Tiny | Automated package update |
| [#819](https://github.com/tscircuit/circuit-json/pull/819) | 🐌 Tiny | Automated package update |
| [#4177](https://github.com/tscircuit/core/pull/4177) | 🐌 Tiny | Updates the version of the tscircuitchecks package from 0.0.221 to 0.0.222 in package.json |
| [#4176](https://github.com/tscircuit/core/pull/4176) | 🐌 Tiny | Updates the version of the tscircuitchecks package from 0.0.221 to 0.0.222 in package.json |
| [#4161](https://github.com/tscircuit/core/pull/4161) | 🐌 Tiny | Updates the version of the tscircuitchecks package from 0.0.220 to 0.0.221 in package.json |
| [#4159](https://github.com/tscircuit/core/pull/4159) | 🐌 Tiny | Updates the tscircuitchecks package from version 0.0.219 to 0.0.220 |
| [#4157](https://github.com/tscircuit/core/pull/4157) | 🐌 Tiny | Updates the version of the tscircuitchecks package from 0.0.218 to 0.0.219 in package.json |
| [#4160](https://github.com/tscircuit/core/pull/4160) | 🐌 Tiny | Updates the version of the tscircuitchecks package from 0.0.220 to 0.0.221 in package.json |
| [#4158](https://github.com/tscircuit/core/pull/4158) | 🐌 Tiny | Updates the tscircuitchecks package from version 0.0.219 to 0.0.220 |
| [#4156](https://github.com/tscircuit/core/pull/4156) | 🐌 Tiny | Updates the version of the tscircuitchecks package from 0.0.217 to 0.0.218 in package.json |
| [#4149](https://github.com/tscircuit/core/pull/4149) | 🐌 Tiny | Updates the version of the tscircuitchecks package from 0.0.215 to 0.0.216 in package.json |
| [#4147](https://github.com/tscircuit/core/pull/4147) | 🐌 Tiny | Updates the tscircuitchecks dependency to version 0.0.217 to enable dangling-trace detection in cores routing DRC and adjusts existing error counts and snapshots accordingly. |
| [#4148](https://github.com/tscircuit/core/pull/4148) | 🐌 Tiny | Updates the version of the tscircuitchecks package from 0.0.215 to 0.0.216 in package.json |
| [#4146](https://github.com/tscircuit/core/pull/4146) | 🐌 Tiny | Updates the tscircuitchecks package from version 0.0.214 to 0.0.215 |
| [#4138](https://github.com/tscircuit/core/pull/4138) | 🐌 Tiny | Updates the tscircuitchecks package from version 0.0.212 to 0.0.213 in package.json |
| [#4137](https://github.com/tscircuit/core/pull/4137) | 🐌 Tiny | Updates the tscircuitchecks package from version 0.0.212 to 0.0.213 |
| [#4135](https://github.com/tscircuit/core/pull/4135) | 🐌 Tiny | Updates the version of the tscircuitchecks package from 0.0.211 to 0.0.212 in package.json |
| [#4110](https://github.com/tscircuit/core/pull/4110) | 🐌 Tiny | Updates the tscircuitchecks package from version 0.0.208 to 0.0.209 in the package.json file. |
| [#5105](https://github.com/tscircuit/tscircuit.com/pull/5105) | 🐌 Tiny | Automated package update |
| [#5103](https://github.com/tscircuit/tscircuit.com/pull/5103) | 🐌 Tiny | Updates the tscircuitrunframe package from version 0.0.2826 to 0.0.2827 |
| [#5101](https://github.com/tscircuit/tscircuit.com/pull/5101) | 🐌 Tiny | Updates the tscircuitrunframe package from version 0.0.2825 to 0.0.2826 |
| [#5100](https://github.com/tscircuit/tscircuit.com/pull/5100) | 🐌 Tiny | Updates the tscircuiteval package from version 0.0.1471 to 0.0.1472 |
| [#5099](https://github.com/tscircuit/tscircuit.com/pull/5099) | 🐌 Tiny | Updates the tscircuitrunframe package to version 0.0.2825 |
| [#5098](https://github.com/tscircuit/tscircuit.com/pull/5098) | 🐌 Tiny | Updates the tscircuiteval package from version 0.0.1470 to 0.0.1471 |
| [#5097](https://github.com/tscircuit/tscircuit.com/pull/5097) | 🐌 Tiny | Updates the tscircuitrunframe package from version 0.0.2823 to 0.0.2824 |
| [#5096](https://github.com/tscircuit/tscircuit.com/pull/5096) | 🐌 Tiny | Updates the tscircuiteval package from version 0.0.1468 to 0.0.1470 |
| [#5095](https://github.com/tscircuit/tscircuit.com/pull/5095) | 🐌 Tiny | Updates the tscircuitrunframe package from version 0.0.2822 to 0.0.2823 |
| [#5093](https://github.com/tscircuit/tscircuit.com/pull/5093) | 🐌 Tiny | Automated package update |
| [#5091](https://github.com/tscircuit/tscircuit.com/pull/5091) | 🐌 Tiny | Automated package update |
| [#5089](https://github.com/tscircuit/tscircuit.com/pull/5089) | 🐌 Tiny | Updates the tscircuiteval package from version 0.0.1464 to 0.0.1468 in the package.json file. |
| [#5088](https://github.com/tscircuit/tscircuit.com/pull/5088) | 🐌 Tiny | Automated package update |
| [#5086](https://github.com/tscircuit/tscircuit.com/pull/5086) | 🐌 Tiny | Updates the tscircuitrunframe package from version 0.0.2817 to 0.0.2818 |
| [#5084](https://github.com/tscircuit/tscircuit.com/pull/5084) | 🐌 Tiny | Automated package update |
| [#5082](https://github.com/tscircuit/tscircuit.com/pull/5082) | 🐌 Tiny | Updates the tscircuitrunframe package to version 0.0.2816 |
| [#5081](https://github.com/tscircuit/tscircuit.com/pull/5081) | 🐌 Tiny | Updates the tscircuitrunframe package from version 0.0.2814 to 0.0.2815 |
| [#5080](https://github.com/tscircuit/tscircuit.com/pull/5080) | 🐌 Tiny | Updates the tscircuiteval package from version 0.0.1462 to 0.0.1464 |
| [#5079](https://github.com/tscircuit/tscircuit.com/pull/5079) | 🐌 Tiny | Updates the tscircuitrunframe package from version 0.0.2813 to 0.0.2814 |
| [#5077](https://github.com/tscircuit/tscircuit.com/pull/5077) | 🐌 Tiny | Updates the tscircuitrunframe package from version 0.0.2812 to 0.0.2813 |
| [#5076](https://github.com/tscircuit/tscircuit.com/pull/5076) | 🐌 Tiny | Updates the tscircuiteval package from version 0.0.1461 to 0.0.1462 |
| [#5075](https://github.com/tscircuit/tscircuit.com/pull/5075) | 🐌 Tiny | Updates the tscircuitrunframe package from version 0.0.2811 to 0.0.2812 |
| [#5074](https://github.com/tscircuit/tscircuit.com/pull/5074) | 🐌 Tiny | Automated package update |
| [#5073](https://github.com/tscircuit/tscircuit.com/pull/5073) | 🐌 Tiny | Automated package update |
| [#5072](https://github.com/tscircuit/tscircuit.com/pull/5072) | 🐌 Tiny | Updates the tscircuiteval package to version 0.0.1460 in the package.json file. |
| [#5071](https://github.com/tscircuit/tscircuit.com/pull/5071) | 🐌 Tiny | Automated package update |
| [#5025](https://github.com/tscircuit/tscircuit.com/pull/5025) | 🐌 Tiny | Updates the tscircuiteval package from version 0.0.1440 to 0.0.1442 |
| [#5033](https://github.com/tscircuit/tscircuit.com/pull/5033) | 🐌 Tiny | Updates the tscircuitrunframe package from version 0.0.2790 to 0.0.2791 |
| [#5032](https://github.com/tscircuit/tscircuit.com/pull/5032) | 🐌 Tiny | Automated package update |
| [#5031](https://github.com/tscircuit/tscircuit.com/pull/5031) | 🐌 Tiny | Automated package update |
| [#5026](https://github.com/tscircuit/tscircuit.com/pull/5026) | 🐌 Tiny | Automated package update |
| [#5023](https://github.com/tscircuit/tscircuit.com/pull/5023) | 🐌 Tiny | Automated package update |
| [#5034](https://github.com/tscircuit/tscircuit.com/pull/5034) | 🐌 Tiny | Updates the tscircuiteval package from version 0.0.1444 to 0.0.1445 |
| [#5030](https://github.com/tscircuit/tscircuit.com/pull/5030) | 🐌 Tiny | Automated package update |
| [#5029](https://github.com/tscircuit/tscircuit.com/pull/5029) | 🐌 Tiny | Updates the tscircuiteval package from version 0.0.1442 to 0.0.1443 |
| [#5024](https://github.com/tscircuit/tscircuit.com/pull/5024) | 🐌 Tiny | Automated package update for tscircuitrunframe from version 0.0.2786 to 0.0.2787 |
| [#4802](https://github.com/tscircuit/eval/pull/4802) | 🐌 Tiny | Automated package update |
| [#4801](https://github.com/tscircuit/eval/pull/4801) | 🐌 Tiny | Automated package update |
| [#4799](https://github.com/tscircuit/eval/pull/4799) | 🐌 Tiny | Automated package update |
| [#4798](https://github.com/tscircuit/eval/pull/4798) | 🐌 Tiny | Automated package update |
| [#4796](https://github.com/tscircuit/eval/pull/4796) | 🐌 Tiny | Automated package update to version 0.0.1473 |
| [#4795](https://github.com/tscircuit/eval/pull/4795) | 🐌 Tiny | Automated package update |
| [#4793](https://github.com/tscircuit/eval/pull/4793) | 🐌 Tiny | Automated package update |
| [#4792](https://github.com/tscircuit/eval/pull/4792) | 🐌 Tiny | Automated package update |
| [#4790](https://github.com/tscircuit/eval/pull/4790) | 🐌 Tiny | Automated package update |
| [#4789](https://github.com/tscircuit/eval/pull/4789) | 🐌 Tiny | Automated package update |
| [#4787](https://github.com/tscircuit/eval/pull/4787) | 🐌 Tiny | Automated package update |
| [#4786](https://github.com/tscircuit/eval/pull/4786) | 🐌 Tiny | Automated package update |
| [#4783](https://github.com/tscircuit/eval/pull/4783) | 🐌 Tiny | Updates package dependencies to their latest versions as part of routine maintenance. |
| [#4781](https://github.com/tscircuit/eval/pull/4781) | 🐌 Tiny | Updates the package version from 0.0.1467 to 0.0.1468 in package.json |
| [#4778](https://github.com/tscircuit/eval/pull/4778) | 🐌 Tiny | Automated package update |
| [#4777](https://github.com/tscircuit/eval/pull/4777) | 🐌 Tiny | Updates package dependencies to their latest versions as part of routine maintenance. |
| [#4774](https://github.com/tscircuit/eval/pull/4774) | 🐌 Tiny | Automated package update |
| [#4780](https://github.com/tscircuit/eval/pull/4780) | 🐌 Tiny | Updates package dependencies to their latest versions in package.json |
| [#4784](https://github.com/tscircuit/eval/pull/4784) | 🐌 Tiny | Automated package update |
| [#4775](https://github.com/tscircuit/eval/pull/4775) | 🐌 Tiny | Automated package update |
| [#4771](https://github.com/tscircuit/eval/pull/4771) | 🐌 Tiny | Updates the versions of several dependencies in the package.json file. |
| [#4766](https://github.com/tscircuit/eval/pull/4766) | 🐌 Tiny | Automated package update |
| [#4765](https://github.com/tscircuit/eval/pull/4765) | 🐌 Tiny | Updates the version of the tscircuitcore package from 0.0.1985 to 0.0.1986 in package.json |
| [#4760](https://github.com/tscircuit/eval/pull/4760) | 🐌 Tiny | Automated package update |
| [#4753](https://github.com/tscircuit/eval/pull/4753) | 🐌 Tiny | Updates the version of the tscircuitcore package from 0.0.1981 to 0.0.1982 in package.json |
| [#4748](https://github.com/tscircuit/eval/pull/4748) | 🐌 Tiny | Automated package update |
| [#4744](https://github.com/tscircuit/eval/pull/4744) | 🐌 Tiny | Updates the version of tscircuitcore from 0.0.1978 to 0.0.1979 and tscircuitschematic-trace-solver from 0.0.209 to 0.0.210 in package.json |
| [#4772](https://github.com/tscircuit/eval/pull/4772) | 🐌 Tiny | Automated package update |
| [#4769](https://github.com/tscircuit/eval/pull/4769) | 🐌 Tiny | Automated package update |
| [#4768](https://github.com/tscircuit/eval/pull/4768) | 🐌 Tiny | Automated package update |
| [#4763](https://github.com/tscircuit/eval/pull/4763) | 🐌 Tiny | Automated package update |
| [#4762](https://github.com/tscircuit/eval/pull/4762) | 🐌 Tiny | Automated package update |
| [#4757](https://github.com/tscircuit/eval/pull/4757) | 🐌 Tiny | Automated package update |
| [#4756](https://github.com/tscircuit/eval/pull/4756) | 🐌 Tiny | Automated package update |
| [#4754](https://github.com/tscircuit/eval/pull/4754) | 🐌 Tiny | Automated package update |
| [#4750](https://github.com/tscircuit/eval/pull/4750) | 🐌 Tiny | Automated package update |
| [#4747](https://github.com/tscircuit/eval/pull/4747) | 🐌 Tiny | Automated package update |
| [#4759](https://github.com/tscircuit/eval/pull/4759) | 🐌 Tiny | Automated package update |
| [#4751](https://github.com/tscircuit/eval/pull/4751) | 🐌 Tiny | Automated package update |
| [#4745](https://github.com/tscircuit/eval/pull/4745) | 🐌 Tiny | Automated package update |
| [#4739](https://github.com/tscircuit/eval/pull/4739) | 🐌 Tiny | Automated package update |
| [#4738](https://github.com/tscircuit/eval/pull/4738) | 🐌 Tiny | Updates the version of the tscircuitcore package from 0.0.1976 to 0.0.1977 in package.json |
| [#4736](https://github.com/tscircuit/eval/pull/4736) | 🐌 Tiny | Automated package update |
| [#4733](https://github.com/tscircuit/eval/pull/4733) | 🐌 Tiny | Automated package update |
| [#4727](https://github.com/tscircuit/eval/pull/4727) | 🐌 Tiny | Automated package update |
| [#4742](https://github.com/tscircuit/eval/pull/4742) | 🐌 Tiny | Automated package update |
| [#4741](https://github.com/tscircuit/eval/pull/4741) | 🐌 Tiny | Automated package update |
| [#4735](https://github.com/tscircuit/eval/pull/4735) | 🐌 Tiny | Automated package update |
| [#4730](https://github.com/tscircuit/eval/pull/4730) | 🐌 Tiny | Automated package update |
| [#4732](https://github.com/tscircuit/eval/pull/4732) | 🐌 Tiny | Automated package update |
| [#4729](https://github.com/tscircuit/eval/pull/4729) | 🐌 Tiny | Updates package dependencies to their latest versions as part of routine maintenance. |
| [#4726](https://github.com/tscircuit/eval/pull/4726) | 🐌 Tiny | Automated package update |
| [#4724](https://github.com/tscircuit/eval/pull/4724) | 🐌 Tiny | Automated package update |
| [#4723](https://github.com/tscircuit/eval/pull/4723) | 🐌 Tiny | Automated package update |
| [#4720](https://github.com/tscircuit/eval/pull/4720) | 🐌 Tiny | Updates the version of several dependencies in the package.json file. |
| [#4717](https://github.com/tscircuit/eval/pull/4717) | 🐌 Tiny | Automated package update |
| [#4712](https://github.com/tscircuit/eval/pull/4712) | 🐌 Tiny | Automated package update |
| [#4711](https://github.com/tscircuit/eval/pull/4711) | 🐌 Tiny | Updates the version of the tscircuitcore package from 0.0.1967 to 0.0.1968 in package.json |
| [#4709](https://github.com/tscircuit/eval/pull/4709) | 🐌 Tiny | Automated package update |
| [#4708](https://github.com/tscircuit/eval/pull/4708) | 🐌 Tiny | Updates package dependencies and the bun version in the workflow configuration |
| [#4701](https://github.com/tscircuit/eval/pull/4701) | 🐌 Tiny | Automated package update |
| [#4721](https://github.com/tscircuit/eval/pull/4721) | 🐌 Tiny | Automated package update |
| [#4718](https://github.com/tscircuit/eval/pull/4718) | 🐌 Tiny | Automated package update |
| [#4715](https://github.com/tscircuit/eval/pull/4715) | 🐌 Tiny | Automated package update |
| [#4714](https://github.com/tscircuit/eval/pull/4714) | 🐌 Tiny | Updates package versions for dependencies in the project. |
| [#4702](https://github.com/tscircuit/eval/pull/4702) | 🐌 Tiny | Automated package update |
| [#4694](https://github.com/tscircuit/eval/pull/4694) | 🐌 Tiny | Automated package update |
| [#4693](https://github.com/tscircuit/eval/pull/4693) | 🐌 Tiny | Automated package update |
| [#5351](https://github.com/tscircuit/runframe/pull/5351) | 🐌 Tiny | Automated package update |
| [#5350](https://github.com/tscircuit/runframe/pull/5350) | 🐌 Tiny | Updates the tscircuiteval package from version 0.0.1473 to 0.0.1474 |
| [#5349](https://github.com/tscircuit/runframe/pull/5349) | 🐌 Tiny | Automated package update |
| [#5348](https://github.com/tscircuit/runframe/pull/5348) | 🐌 Tiny | Updates the tscircuiteval package from version 0.0.1472 to 0.0.1473 in the package.json file. |
| [#5347](https://github.com/tscircuit/runframe/pull/5347) | 🐌 Tiny | Automated package update |
| [#5346](https://github.com/tscircuit/runframe/pull/5346) | 🐌 Tiny | Updates the tscircuiteval package from version 0.0.1471 to 0.0.1472 in the package.json file. |
| [#5345](https://github.com/tscircuit/runframe/pull/5345) | 🐌 Tiny | Automated package update |
| [#5344](https://github.com/tscircuit/runframe/pull/5344) | 🐌 Tiny | Updates the tscircuiteval package from version 0.0.1470 to 0.0.1471 |
| [#5343](https://github.com/tscircuit/runframe/pull/5343) | 🐌 Tiny | Automated package update |
| [#5342](https://github.com/tscircuit/runframe/pull/5342) | 🐌 Tiny | Updates the tscircuiteval package from version 0.0.1469 to 0.0.1470 |
| [#5341](https://github.com/tscircuit/runframe/pull/5341) | 🐌 Tiny | Automated package update |
| [#5340](https://github.com/tscircuit/runframe/pull/5340) | 🐌 Tiny | Updates the tscircuiteval package from version 0.0.1468 to 0.0.1469 in the package.json file. |
| [#5339](https://github.com/tscircuit/runframe/pull/5339) | 🐌 Tiny | Automated package update |
| [#5333](https://github.com/tscircuit/runframe/pull/5333) | 🐌 Tiny | Updates the tscircuiteval package from version 0.0.1467 to 0.0.1468 |
| [#5331](https://github.com/tscircuit/runframe/pull/5331) | 🐌 Tiny | Updates the tscircuiteval package from version 0.0.1466 to 0.0.1467 |
| [#5330](https://github.com/tscircuit/runframe/pull/5330) | 🐌 Tiny | Automated package update |
| [#5329](https://github.com/tscircuit/runframe/pull/5329) | 🐌 Tiny | Updates the tscircuiteval package from version 0.0.1465 to 0.0.1466 |
| [#5328](https://github.com/tscircuit/runframe/pull/5328) | 🐌 Tiny | Automated package update |
| [#5327](https://github.com/tscircuit/runframe/pull/5327) | 🐌 Tiny | Updates the tscircuiteval package from version 0.0.1464 to 0.0.1465 |
| [#5334](https://github.com/tscircuit/runframe/pull/5334) | 🐌 Tiny | Automated package update |
| [#5337](https://github.com/tscircuit/runframe/pull/5337) | 🐌 Tiny | Automated package update |
| [#5332](https://github.com/tscircuit/runframe/pull/5332) | 🐌 Tiny | Automated package update |
| [#5318](https://github.com/tscircuit/runframe/pull/5318) | 🐌 Tiny | Updates the tscircuiteval package from version 0.0.1461 to 0.0.1462 in the package.json file. |
| [#5323](https://github.com/tscircuit/runframe/pull/5323) | 🐌 Tiny | Automated package update |
| [#5314](https://github.com/tscircuit/runframe/pull/5314) | 🐌 Tiny | Updates the tscircuiteval package from version 0.0.1459 to 0.0.1460 |
| [#5311](https://github.com/tscircuit/runframe/pull/5311) | 🐌 Tiny | Automated package update |
| [#5325](https://github.com/tscircuit/runframe/pull/5325) | 🐌 Tiny | Updates the circuit-json-to-kicad package version from 0.0.219 to 0.0.221 in package.json |
| [#5322](https://github.com/tscircuit/runframe/pull/5322) | 🐌 Tiny | Updates the tscircuiteval package from version 0.0.1463 to 0.0.1464 |
| [#5321](https://github.com/tscircuit/runframe/pull/5321) | 🐌 Tiny | Automated package update |
| [#5320](https://github.com/tscircuit/runframe/pull/5320) | 🐌 Tiny | Updates the tscircuiteval package from version 0.0.1462 to 0.0.1463 |
| [#5319](https://github.com/tscircuit/runframe/pull/5319) | 🐌 Tiny | Automated package update |
| [#5317](https://github.com/tscircuit/runframe/pull/5317) | 🐌 Tiny | Automated package update |
| [#5316](https://github.com/tscircuit/runframe/pull/5316) | 🐌 Tiny | Updates the tscircuiteval package from version 0.0.1460 to 0.0.1461 in the package.json file. |
| [#5313](https://github.com/tscircuit/runframe/pull/5313) | 🐌 Tiny | Automated package update |
| [#5310](https://github.com/tscircuit/runframe/pull/5310) | 🐌 Tiny | Updates the tscircuiteval package from version 0.0.1457 to 0.0.1458 in the package.json file. |
| [#5308](https://github.com/tscircuit/runframe/pull/5308) | 🐌 Tiny | Automated package update |
| [#5307](https://github.com/tscircuit/runframe/pull/5307) | 🐌 Tiny | Updates the tscircuiteval package from version 0.0.1456 to 0.0.1457 in the package.json file. |
| [#5305](https://github.com/tscircuit/runframe/pull/5305) | 🐌 Tiny | Automated package update |
| [#5304](https://github.com/tscircuit/runframe/pull/5304) | 🐌 Tiny | Updates the tscircuiteval package from version 0.0.1455 to 0.0.1456 in the package.json file. |
| [#5303](https://github.com/tscircuit/runframe/pull/5303) | 🐌 Tiny | Automated package update |
| [#5302](https://github.com/tscircuit/runframe/pull/5302) | 🐌 Tiny | Updates the tscircuiteval package from version 0.0.1454 to 0.0.1455 |
| [#5315](https://github.com/tscircuit/runframe/pull/5315) | 🐌 Tiny | Automated package update |
| [#5306](https://github.com/tscircuit/runframe/pull/5306) | 🐌 Tiny | Automated package update |
| [#5326](https://github.com/tscircuit/runframe/pull/5326) | 🐌 Tiny | Automated package update |
| [#5312](https://github.com/tscircuit/runframe/pull/5312) | 🐌 Tiny | Updates the tscircuiteval package from version 0.0.1458 to 0.0.1459 in the package.json file. |
| [#5300](https://github.com/tscircuit/runframe/pull/5300) | 🐌 Tiny | Updates the tscircuiteval package from version 0.0.1453 to 0.0.1454 in the package.json file. |
| [#5296](https://github.com/tscircuit/runframe/pull/5296) | 🐌 Tiny | Automated package update for tscircuit3d-viewer from version 0.0.604 to 0.0.605 |
| [#5294](https://github.com/tscircuit/runframe/pull/5294) | 🐌 Tiny | Updates the tscircuiteval package from version 0.0.1450 to 0.0.1451 |
| [#5292](https://github.com/tscircuit/runframe/pull/5292) | 🐌 Tiny | Updates the version of the circuit-json-to-kicad package from 0.0.218 to 0.0.219 in package.json |
| [#5290](https://github.com/tscircuit/runframe/pull/5290) | 🐌 Tiny | Automated package update |
| [#5287](https://github.com/tscircuit/runframe/pull/5287) | 🐌 Tiny | Updates the tscircuiteval package from version 0.0.1448 to 0.0.1449 |
| [#5286](https://github.com/tscircuit/runframe/pull/5286) | 🐌 Tiny | Automated package update |
| [#5285](https://github.com/tscircuit/runframe/pull/5285) | 🐌 Tiny | Updates the tscircuiteval package from version 0.0.1447 to 0.0.1448 |
| [#5284](https://github.com/tscircuit/runframe/pull/5284) | 🐌 Tiny | Automated package update |
| [#5301](https://github.com/tscircuit/runframe/pull/5301) | 🐌 Tiny | Automated package update |
| [#5298](https://github.com/tscircuit/runframe/pull/5298) | 🐌 Tiny | Updates the tscircuiteval package from version 0.0.1451 to 0.0.1453 |
| [#5297](https://github.com/tscircuit/runframe/pull/5297) | 🐌 Tiny | Automated package update |
| [#5295](https://github.com/tscircuit/runframe/pull/5295) | 🐌 Tiny | Automated package update |
| [#5289](https://github.com/tscircuit/runframe/pull/5289) | 🐌 Tiny | Updates the tscircuiteval package from version 0.0.1449 to 0.0.1450 |
| [#5299](https://github.com/tscircuit/runframe/pull/5299) | 🐌 Tiny | Automated package update |
| [#5293](https://github.com/tscircuit/runframe/pull/5293) | 🐌 Tiny | Automated package update |
| [#5288](https://github.com/tscircuit/runframe/pull/5288) | 🐌 Tiny | Automated package update |
| [#5280](https://github.com/tscircuit/runframe/pull/5280) | 🐌 Tiny | Updates the tscircuitschematic-viewer package from version 2.0.95 to 2.0.96 |
| [#5281](https://github.com/tscircuit/runframe/pull/5281) | 🐌 Tiny | Automated package update |
| [#5276](https://github.com/tscircuit/runframe/pull/5276) | 🐌 Tiny | Automated package update |
| [#5282](https://github.com/tscircuit/runframe/pull/5282) | 🐌 Tiny | Automated package update |
| [#5277](https://github.com/tscircuit/runframe/pull/5277) | 🐌 Tiny | Updates the tscircuiteval package from version 0.0.1445 to 0.0.1446 |
| [#5275](https://github.com/tscircuit/runframe/pull/5275) | 🐌 Tiny | Updates the tscircuiteval package from version 0.0.1444 to 0.0.1445 |
| [#5274](https://github.com/tscircuit/runframe/pull/5274) | 🐌 Tiny | Automated package update |
| [#5273](https://github.com/tscircuit/runframe/pull/5273) | 🐌 Tiny | Automated package update |
| [#5272](https://github.com/tscircuit/runframe/pull/5272) | 🐌 Tiny | Updates the tscircuiteval package from version 0.0.1443 to 0.0.1444 in the package.json file. |
| [#5271](https://github.com/tscircuit/runframe/pull/5271) | 🐌 Tiny | Automated package update |
| [#5270](https://github.com/tscircuit/runframe/pull/5270) | 🐌 Tiny | Updates the tscircuiteval package from version 0.0.1442 to 0.0.1443 in the package.json file. |
| [#5266](https://github.com/tscircuit/runframe/pull/5266) | 🐌 Tiny | Automated package update |
| [#5265](https://github.com/tscircuit/runframe/pull/5265) | 🐌 Tiny | Updates the tscircuiteval package from version 0.0.1441 to 0.0.1442 in the package.json file. |
| [#5264](https://github.com/tscircuit/runframe/pull/5264) | 🐌 Tiny | Automated package update |
| [#5263](https://github.com/tscircuit/runframe/pull/5263) | 🐌 Tiny | Updates the tscircuitpcb-viewer package from version 1.11.405 to 1.11.406 |
| [#5261](https://github.com/tscircuit/runframe/pull/5261) | 🐌 Tiny | Updates the tscircuiteval package from version 0.0.1440 to 0.0.1441 in the package.json file. |
| [#5278](https://github.com/tscircuit/runframe/pull/5278) | 🐌 Tiny | Automated package update |
| [#5283](https://github.com/tscircuit/runframe/pull/5283) | 🐌 Tiny | Automated package update |
| [#5262](https://github.com/tscircuit/runframe/pull/5262) | 🐌 Tiny | Automated package update |
| [#4979](https://github.com/tscircuit/cli/pull/4979) | 🐌 Tiny | Automated package update |
| [#4978](https://github.com/tscircuit/cli/pull/4978) | 🐌 Tiny | Updates the tscircuitrunframe package from version 0.0.2827 to 0.0.2828 |
| [#4977](https://github.com/tscircuit/cli/pull/4977) | 🐌 Tiny | Automated package update |
| [#4976](https://github.com/tscircuit/cli/pull/4976) | 🐌 Tiny | Updates the tscircuitrunframe package from version 0.0.2826 to 0.0.2827 |
| [#4975](https://github.com/tscircuit/cli/pull/4975) | 🐌 Tiny | Automated package update |
| [#4974](https://github.com/tscircuit/cli/pull/4974) | 🐌 Tiny | Updates the tscircuitrunframe package from version 0.0.2825 to 0.0.2826 |
| [#4973](https://github.com/tscircuit/cli/pull/4973) | 🐌 Tiny | Automated package update |
| [#4972](https://github.com/tscircuit/cli/pull/4972) | 🐌 Tiny | Updates the tscircuitrunframe package from version 0.0.2824 to 0.0.2825 |
| [#4971](https://github.com/tscircuit/cli/pull/4971) | 🐌 Tiny | Automated package update |
| [#4970](https://github.com/tscircuit/cli/pull/4970) | 🐌 Tiny | Updates the tscircuitrunframe package to version 0.0.2824 in the package.json file. |
| [#4969](https://github.com/tscircuit/cli/pull/4969) | 🐌 Tiny | Automated package update |
| [#4968](https://github.com/tscircuit/cli/pull/4968) | 🐌 Tiny | Updates the tscircuitrunframe package from version 0.0.2822 to 0.0.2823 |
| [#4965](https://github.com/tscircuit/cli/pull/4965) | 🐌 Tiny | Updates the tscircuitrunframe package from version 0.0.2821 to 0.0.2822 |
| [#4962](https://github.com/tscircuit/cli/pull/4962) | 🐌 Tiny | Automated package update |
| [#4961](https://github.com/tscircuit/cli/pull/4961) | 🐌 Tiny | Updates the tscircuitrunframe package from version 0.0.2820 to 0.0.2821 |
| [#4966](https://github.com/tscircuit/cli/pull/4966) | 🐌 Tiny | Automated package update |
| [#4959](https://github.com/tscircuit/cli/pull/4959) | 🐌 Tiny | Automated package update |
| [#4958](https://github.com/tscircuit/cli/pull/4958) | 🐌 Tiny | Updates the tscircuitrunframe package to version 0.0.2820 in package.json |
| [#4954](https://github.com/tscircuit/cli/pull/4954) | 🐌 Tiny | Updates the tscircuitrunframe package from version 0.0.2817 to 0.0.2818 |
| [#4952](https://github.com/tscircuit/cli/pull/4952) | 🐌 Tiny | Updates the tscircuitrunframe package from version 0.0.2815 to 0.0.2817 |
| [#4957](https://github.com/tscircuit/cli/pull/4957) | 🐌 Tiny | Automated package update |
| [#4956](https://github.com/tscircuit/cli/pull/4956) | 🐌 Tiny | Updates the tscircuitrunframe package to version 0.0.2819 in the package.json file |
| [#4955](https://github.com/tscircuit/cli/pull/4955) | 🐌 Tiny | Automated package update |
| [#4945](https://github.com/tscircuit/cli/pull/4945) | 🐌 Tiny | Updates the tscircuitrunframe package from version 0.0.2812 to 0.0.2813 |
| [#4944](https://github.com/tscircuit/cli/pull/4944) | 🐌 Tiny | Automated package update |
| [#4950](https://github.com/tscircuit/cli/pull/4950) | 🐌 Tiny | Automated package update |
| [#4949](https://github.com/tscircuit/cli/pull/4949) | 🐌 Tiny | Updates the tscircuitrunframe package from version 0.0.2814 to 0.0.2815 |
| [#4947](https://github.com/tscircuit/cli/pull/4947) | 🐌 Tiny | Updates the tscircuitrunframe package from version 0.0.2813 to 0.0.2814 |
| [#4946](https://github.com/tscircuit/cli/pull/4946) | 🐌 Tiny | Automated package update |
| [#4943](https://github.com/tscircuit/cli/pull/4943) | 🐌 Tiny | Updates the tscircuitrunframe package from version 0.0.2811 to 0.0.2812 |
| [#4941](https://github.com/tscircuit/cli/pull/4941) | 🐌 Tiny | Updates the tscircuitrunframe package from version 0.0.2810 to 0.0.2811 |
| [#4940](https://github.com/tscircuit/cli/pull/4940) | 🐌 Tiny | Automated package update |
| [#4939](https://github.com/tscircuit/cli/pull/4939) | 🐌 Tiny | Updates the tscircuitrunframe package version from 0.0.2809 to 0.0.2810 in package.json |
| [#4937](https://github.com/tscircuit/cli/pull/4937) | 🐌 Tiny | Updates the tscircuitrunframe package from version 0.0.2807 to 0.0.2809 |
| [#4935](https://github.com/tscircuit/cli/pull/4935) | 🐌 Tiny | Updates the tscircuitrunframe package from version 0.0.2806 to 0.0.2807 |
| [#4932](https://github.com/tscircuit/cli/pull/4932) | 🐌 Tiny | Automated package update |
| [#4931](https://github.com/tscircuit/cli/pull/4931) | 🐌 Tiny | Updates the tscircuitrunframe package from version 0.0.2805 to 0.0.2806 |
| [#4928](https://github.com/tscircuit/cli/pull/4928) | 🐌 Tiny | Updates the tscircuitrunframe package from version 0.0.2804 to 0.0.2805 |
| [#4942](https://github.com/tscircuit/cli/pull/4942) | 🐌 Tiny | Automated package update |
| [#4938](https://github.com/tscircuit/cli/pull/4938) | 🐌 Tiny | Automated package update |
| [#4924](https://github.com/tscircuit/cli/pull/4924) | 🐌 Tiny | Updates the tscircuitrunframe package from version 0.0.2802 to 0.0.2803 |
| [#4920](https://github.com/tscircuit/cli/pull/4920) | 🐌 Tiny | Updates the tscircuitrunframe package version from 0.0.2800 to 0.0.2801 in package.json |
| [#4917](https://github.com/tscircuit/cli/pull/4917) | 🐌 Tiny | Automated package update |
| [#4914](https://github.com/tscircuit/cli/pull/4914) | 🐌 Tiny | Updates the tscircuitrunframe package to version 0.0.2798 in package.json |
| [#4911](https://github.com/tscircuit/cli/pull/4911) | 🐌 Tiny | Automated package update |
| [#4910](https://github.com/tscircuit/cli/pull/4910) | 🐌 Tiny | Updates the tscircuitrunframe package version from 0.0.2795 to 0.0.2796 in package.json |
| [#4908](https://github.com/tscircuit/cli/pull/4908) | 🐌 Tiny | Updates the tscircuitrunframe package from version 0.0.2794 to 0.0.2795 |
| [#4926](https://github.com/tscircuit/cli/pull/4926) | 🐌 Tiny | Updates the tscircuitrunframe package from version 0.0.2803 to 0.0.2804 |
| [#4925](https://github.com/tscircuit/cli/pull/4925) | 🐌 Tiny | Automated package update |
| [#4922](https://github.com/tscircuit/cli/pull/4922) | 🐌 Tiny | Updates the tscircuitrunframe package version from 0.0.2801 to 0.0.2802 |
| [#4918](https://github.com/tscircuit/cli/pull/4918) | 🐌 Tiny | Updates the tscircuitrunframe package to version 0.0.2800 in package.json |
| [#4916](https://github.com/tscircuit/cli/pull/4916) | 🐌 Tiny | Updates the tscircuitrunframe package from version 0.0.2798 to 0.0.2799 |
| [#4915](https://github.com/tscircuit/cli/pull/4915) | 🐌 Tiny | Automated package update |
| [#4912](https://github.com/tscircuit/cli/pull/4912) | 🐌 Tiny | Updates the tscircuitrunframe package from version 0.0.2796 to 0.0.2797 |
| [#4927](https://github.com/tscircuit/cli/pull/4927) | 🐌 Tiny | Automated package update |
| [#4921](https://github.com/tscircuit/cli/pull/4921) | 🐌 Tiny | Automated package update |
| [#4919](https://github.com/tscircuit/cli/pull/4919) | 🐌 Tiny | Automated package update |
| [#4909](https://github.com/tscircuit/cli/pull/4909) | 🐌 Tiny | Automated package update |
| [#4913](https://github.com/tscircuit/cli/pull/4913) | 🐌 Tiny | Automated package update |
| [#4894](https://github.com/tscircuit/cli/pull/4894) | 🐌 Tiny | Updates the tscircuitrunframe package from version 0.0.2787 to 0.0.2788 |
| [#4902](https://github.com/tscircuit/cli/pull/4902) | 🐌 Tiny | Updates the tscircuitrunframe package from version 0.0.2791 to 0.0.2792 |
| [#4906](https://github.com/tscircuit/cli/pull/4906) | 🐌 Tiny | Updates the tscircuitrunframe package from version 0.0.2793 to 0.0.2794 |
| [#4904](https://github.com/tscircuit/cli/pull/4904) | 🐌 Tiny | Updates the tscircuitrunframe package from version 0.0.2792 to 0.0.2793 in the package.json file. |
| [#4903](https://github.com/tscircuit/cli/pull/4903) | 🐌 Tiny | Automated package update |
| [#4901](https://github.com/tscircuit/cli/pull/4901) | 🐌 Tiny | Automated package update |
| [#4898](https://github.com/tscircuit/cli/pull/4898) | 🐌 Tiny | Updates the tscircuitrunframe package to version 0.0.2790 in package.json |
| [#4895](https://github.com/tscircuit/cli/pull/4895) | 🐌 Tiny | Automated package update |
| [#4893](https://github.com/tscircuit/cli/pull/4893) | 🐌 Tiny | Automated package update |
| [#4891](https://github.com/tscircuit/cli/pull/4891) | 🐌 Tiny | Automated package update |
| [#4890](https://github.com/tscircuit/cli/pull/4890) | 🐌 Tiny | Automated package update |
| [#4905](https://github.com/tscircuit/cli/pull/4905) | 🐌 Tiny | Automated package update |
| [#4900](https://github.com/tscircuit/cli/pull/4900) | 🐌 Tiny | Updates the tscircuitrunframe package from version 0.0.2790 to 0.0.2791 |
| [#4899](https://github.com/tscircuit/cli/pull/4899) | 🐌 Tiny | Automated package update |
| [#4897](https://github.com/tscircuit/cli/pull/4897) | 🐌 Tiny | Automated package update |
| [#4896](https://github.com/tscircuit/cli/pull/4896) | 🐌 Tiny | Updates the tscircuitrunframe package from version 0.0.2788 to 0.0.2789 |
| [#4892](https://github.com/tscircuit/cli/pull/4892) | 🐌 Tiny | Updates the tscircuitrunframe package to version 0.0.2787 in package.json |
| [#4889](https://github.com/tscircuit/cli/pull/4889) | 🐌 Tiny | Updates the tscircuitrunframe package from version 0.0.2785 to 0.0.2786 |
| [#2760](https://github.com/tscircuit/tscircuit-autorouter/pull/2760) | 🐌 Tiny | Automated package update |
| [#2746](https://github.com/tscircuit/tscircuit-autorouter/pull/2746) | 🐌 Tiny | Automated package update |
| [#2738](https://github.com/tscircuit/tscircuit-autorouter/pull/2738) | 🐌 Tiny | Automated package update |
| [#2739](https://github.com/tscircuit/tscircuit-autorouter/pull/2739) | 🐌 Tiny | Automated package update |
| [#2737](https://github.com/tscircuit/tscircuit-autorouter/pull/2737) | 🐌 Tiny | Automated package update |
| [#2736](https://github.com/tscircuit/tscircuit-autorouter/pull/2736) | 🐌 Tiny | Automated package update |
| [#2726](https://github.com/tscircuit/tscircuit-autorouter/pull/2726) | 🐌 Tiny | Automated package update |
| [#2731](https://github.com/tscircuit/tscircuit-autorouter/pull/2731) | 🐌 Tiny | Automated package update |
| [#2727](https://github.com/tscircuit/tscircuit-autorouter/pull/2727) | 🐌 Tiny | Automated package update |
| [#2716](https://github.com/tscircuit/tscircuit-autorouter/pull/2716) | 🐌 Tiny | Automated package update |
| [#2701](https://github.com/tscircuit/tscircuit-autorouter/pull/2701) | 🐌 Tiny | Automated package update |
| [#2687](https://github.com/tscircuit/tscircuit-autorouter/pull/2687) | 🐌 Tiny | Automated package update |
| [#2695](https://github.com/tscircuit/tscircuit-autorouter/pull/2695) | 🐌 Tiny | Automated package update |
| [#2700](https://github.com/tscircuit/tscircuit-autorouter/pull/2700) | 🐌 Tiny | Automated package update |
| [#2692](https://github.com/tscircuit/tscircuit-autorouter/pull/2692) | 🐌 Tiny | Automated package update |
| [#2688](https://github.com/tscircuit/tscircuit-autorouter/pull/2688) | 🐌 Tiny | Automated package update |
| [#2690](https://github.com/tscircuit/tscircuit-autorouter/pull/2690) | 🐌 Tiny | Automated package update |
| [#2684](https://github.com/tscircuit/tscircuit-autorouter/pull/2684) | 🐌 Tiny | Automated package update |
| [#603](https://github.com/tscircuit/circuit-json-to-kicad/pull/603) | 🐌 Tiny | Automated package update |
| [#599](https://github.com/tscircuit/circuit-json-to-kicad/pull/599) | 🐌 Tiny | Automated package update |
| [#297](https://github.com/tscircuit/circuit-to-canvas/pull/297) | 🐌 Tiny | Automated package update |
| [#155](https://github.com/tscircuit/rectdiff/pull/155) | 🐌 Tiny | Automated package update |
| [#117](https://github.com/tscircuit/circuit-json-schematic-placement-analysis/pull/117) | 🐌 Tiny | Automated package update |
| [#111](https://github.com/tscircuit/circuit-json-schematic-placement-analysis/pull/111) | 🐌 Tiny | Automated package update |
| [#103](https://github.com/tscircuit/circuit-json-schematic-placement-analysis/pull/103) | 🐌 Tiny | Automated package update |
| [#101](https://github.com/tscircuit/circuit-json-schematic-placement-analysis/pull/101) | 🐌 Tiny | Automated package update |
| [#100](https://github.com/tscircuit/circuit-json-schematic-placement-analysis/pull/100) | 🐌 Tiny | Automated package update |
| [#99](https://github.com/tscircuit/circuit-json-schematic-placement-analysis/pull/99) | 🐌 Tiny | Automated package update |
| [#249](https://github.com/tscircuit/ti/pull/249) | 🐌 Tiny | Automated version update after publishing tscircuitti to npm. |
| [#61](https://github.com/tscircuit/check-shorts/pull/61) | 🐌 Tiny | Automated package update |
| [#224](https://github.com/tscircuit/altiumts/pull/224) | 🐌 Tiny | Automated package update |
| [#225](https://github.com/tscircuit/altiumts/pull/225) | 🐌 Tiny | Automated package update |
| [#218](https://github.com/tscircuit/altiumts/pull/218) | 🐌 Tiny | Updates the package version from 0.0.79 to 0.0.80 in package.json |
| [#217](https://github.com/tscircuit/altiumts/pull/217) | 🐌 Tiny | Automated package update |
| [#215](https://github.com/tscircuit/altiumts/pull/215) | 🐌 Tiny | Automated package update |
| [#213](https://github.com/tscircuit/altiumts/pull/213) | 🐌 Tiny | Automated package update |

</details>

### [techmannih](https://github.com/techmannih)

| PRs # | Impact | Rating | Description |
|------|--------|--------|-------------|
| [#824](https://github.com/tscircuit/circuit-json/pull/824) | 🐳 Major | ⭐⭐⭐ | Adds an optional board-wide via plugging setting to Circuit JSON, allowing users to specify via plugging behavior for standalone and trace-route vias. |
| [#592](https://github.com/tscircuit/circuit-json-to-kicad/pull/592) | 🐙 Minor | ⭐⭐ | Records the current behavior of the Soil Moisture Sensor board and replaces narrow comparison with a full-board SVG, addressing rotation changes during KiCad to Circuit JSON round trip. |
| [#205](https://github.com/tscircuit/kicad-to-circuit-json/pull/205) | 🐙 Minor | ⭐⭐ | Fixes the loss of DNP status for components R1 and R2 when importing the Arduino Mega 2560 board into Circuit JSON, ensuring that the correct number of components marked as do_not_place is retained. |
| [#206](https://github.com/tscircuit/kicad-to-circuit-json/pull/206) | 🐙 Minor | ⭐⭐ | Preserves a KiCad footprints dnp attribute as Circuit JSON pcb_component.do_not_place, ensuring components R1 and R2 retain their DNP status during import. |
| [#208](https://github.com/tscircuit/kicad-to-circuit-json/pull/208) | 🐙 Minor | ⭐⭐ | Fixes the issue where HDMI EDID Debug Board imports retain components but lose manufacturer and MPN information, ensuring that MPNs are preserved and unsupported manufacturer names are reported. |
| [#202](https://github.com/tscircuit/kicad-to-circuit-json/pull/202) | 🐙 Minor | ⭐⭐ | Fixes the issue where the Corne Keyboard importer retains NPTH hole counts but incorrectly replaces oval slots with circular holes during import. |
| [#203](https://github.com/tscircuit/kicad-to-circuit-json/pull/203) | 🐙 Minor | ⭐⭐ | Fixes the import of KiCad oval NPTH drills to preserve their dimensions and angles instead of converting them to circular holes. |
| [#211](https://github.com/tscircuit/altiumts/pull/211) | 🐙 Minor | ⭐⭐ | Adds altiumts parser and PCB SVG snapshot coverage for all six TI power reference boards already used by altium-to-circuit-json: PMP22650, PMP22712, PMP22773, PMP23595, PMP23653 main, and PMP23653 planar transformer. |
| [#170](https://github.com/tscircuit/circuit-json-to-altium/pull/170) | 🐙 Minor | ⭐⭐ | New schematic exports used 20 Altium units per Circuit JSON unit, making Altiums smallest radius-2 junction appear at radius 0.1 in Circuit JSON coordinates. The default is now 200  3 (66.67), giving the intended 0.03-unit junction radius in the native Viewer. Geometry and fonts are converted from Circuit JSON at the selected scale before rounding. Pin text offsets, custom power graphics, label outlines and hierarchy placement use the same scale. Native sheet-entry fractions use DISTANCEFROMTOP_FRAC1, keeping entries aligned with No-ERC markers. Physical sheet dimensions and font-point values increase; integer fonts still require rounding. PCB output is unchanged. The final wire cleanup also fixes a straight wire with a collinear net-label leader producing two false junctions. Actual branches and connected crossings are preserved, including fractional coordinates and record ownership. Compatibility: schematicUnitsPerCircuitUnit: 20 restores the previous export scale. Imported Altium templates retain 20 by default; requesting a different scale with an external template is rejected rather than mixing coordinate systems. Existing native-grid tests explicitly cover this compatibility mode; default conversion is covered by the visual fixtures, source-pitch checks and public ZIP API test. The SVG preview uses the altiumts junction-visibility follow-up(https:github.comtscircuitaltiumtscommitb816b59df81bf3ef40c7dc7635e9f979a6cc41d7), pinned at b816b59df81bf3ef40c7dc7635e9f979a6cc41d7. The prior preview rendered small junctions at radius 1.5 while making hairlines 1 output pixel wide, which hid the dots in wires. The renderer now uses native junction radius presets (2, 3, 5, 10) and half-pixel hairlines. The TI board retains all 62 green junctions, with a raster regression checking that the dots remain visible beyond the wire strokes. Both downloadable .SchDoc files remain byte-for-byte unchanged; fonts, component geometry and layout are unchanged. Native Altium Viewer verification: TI TPS61288: 62 green junctions, radius 2 at the new scale, covering all 61 automatic-junction positions with zero exposed blue dots. Automotive communication and microcontroller sheets: inspected componentpin text, custom inductor, net labels and power symbols. Clockinverted pin example: inspected thin filled markers and leftrighttop pin text. Fractional hierarchy example: three entries and No-ERC markers align at native SVG y475, 509 and 542. Latest review files, freshly generated from PR 170 commit a9ffb74 using altiumts b816b59. The native files match the Viewer-verified bytes: Download latest TI TPS61288 .SchDoc(https:github.comtscircuitcircuit-json-to-altiumrawa9ffb7472e964cc0629f61599c925b190a6885b2testsassetsti-tps61288-small-junctions.SchDoc), Circuit JSON(https:github.comtscircuitcircuit-json-to-altiumbloba9ffb7472e964cc0629f61599c925b190a6885b2testsassetsti-tps61288-power-supply.circuit.json), comparison SVG(https:github.comtscircuitcircuit-json-to-altiumbloba9ffb7472e964cc0629f61599c925b190a6885b2testsassetsti-tps61288-small-junctions.svg). Download latest automotive microcontroller .SchDoc(https:github.comtscircuitcircuit-json-to-altiumrawa9ffb7472e964cc0629f61599c925b190a6885b2testsassetsautomotive-microcontroller-small-junctions.SchDoc), comparison SVG(https:github.comtscircuitcircuit-json-to-altiumbloba9ffb7472e964cc0629f61599c925b190a6885b2testsassetsautomotive-microcontroller-small-junctions.svg). Regenerate with bun scriptsgenerate-junction-review-files.ts. The TI regression checks that the downloadable file equals converter output. The SVG preview now uses the native radius-2 minimum. No dependency patches are used. Validation: bun test --timeout 60000 (196 passed, 0 failed), published renderer dependency recheck (17 passed, 0 failed), focused default-scaletemplateZIP checks (4 passed), bun run typecheck, bun run format:check, and git diff --check. The junction-visibility follow-up refreshes 57 snapshots and two comparison assets; all 42 affected Circuit JSON panels are unchanged. Structural checks found only stroke widths and junction radii changed relative to fresh output from the previous renderer. One stale quadcopter snapshot also catches up with the already-merged pin-name margin correction. This PR now targets main, including merged 169 and its reviewer-requested helper changes. |

<details>
<summary>🐌 Tiny Contributions (9)</summary>

| PR # | Impact | Description |
|------|--------|-------------|
| [#1033](https://github.com/tscircuit/pcb-viewer/pull/1033) | 🐌 Tiny | Updates the circuit-to-canvas dependency to version 0.0.131 to include fixes for pad openings over tented vias and updates the circuit-json-util dependency to version 0.0.116 for utility import. |
| [#4088](https://github.com/tscircuit/core/pull/4088) | 🐌 Tiny | Updates dependency versions to ensure merged via-tenting rendering fixes are included for consumers. |
| [#5028](https://github.com/tscircuit/tscircuit.com/pull/5028) | 🐌 Tiny | Update tscircuitrunframe from 0.0.2791 to 0.0.2792 so the website editor uses the via-tenting viewer fixes merged in 5269. Refresh the RunFrame lockfile entry. |
| [#5269](https://github.com/tscircuit/runframe/pull/5269) | 🐌 Tiny | Updates the 3D and PCB viewers to the latest versions to support via tenting fixes and adds a new dependency for circuit JSON utilities. |
| [#593](https://github.com/tscircuit/circuit-json-to-kicad/pull/593) | 🐌 Tiny | Fixes incorrect footprint rotations during KiCad round trips by preserving the original CCW angles instead of negating them. |
| [#209](https://github.com/tscircuit/kicad-to-circuit-json/pull/209) | 🐌 Tiny | Fixes import of KiCad footprint MPN properties to ensure they populate correctly and report unsupported manufacturers instead of disappearing silently. |
| [#201](https://github.com/tscircuit/kicad-to-circuit-json/pull/201) | 🐌 Tiny | Fixes the issue of incorrect component orientation by preserving KiCad footprint rotations during import, ensuring that pads and graphics are placed correctly without reversing the orientation. |
| [#248](https://github.com/tscircuit/ti/pull/248) | 🐌 Tiny | Update the TI system-block UIs Altium export dependencies while preserving their existing pin formats |
| [#216](https://github.com/tscircuit/altiumts/pull/216) | 🐌 Tiny | Fixes stroke visibility and label positioning in SVG previews of scaled schematics, ensuring accurate representation in Altium Viewer. |

</details>

### [imrishabh18](https://github.com/imrishabh18)

| PRs # | Impact | Rating | Description |
|------|--------|--------|-------------|
| [#833](https://github.com/tscircuit/circuit-json/pull/833) | 🐳 Major | ⭐⭐⭐ | Add optional pcb_board.min_trace_to_hole_edge_clearance through the shared manufacturing DRC properties, alongside min_trace_to_pad_edge_clearance, to record the minimum distance from a traces copper edge to a non-plated holes edge for accurate board exporting and reparsing. |
| [#4182](https://github.com/tscircuit/core/pull/4182) | 🐳 Major | ⭐⭐⭐ | Fixes autorouting failure by preserving physical board outlines when routing bounds change, preventing board-edge violations in breakout regions. |
| [#343](https://github.com/tscircuit/checks/pull/343) | 🐳 Major | ⭐⭐⭐ | Fixes hole clearance checks by ensuring NPTH geometry is validated independently of the electrical layer stack, preventing false failures in multi-layer boards. |
| [#340](https://github.com/tscircuit/checks/pull/340) | 🐳 Major | ⭐⭐⭐ | Adds checkHoleTraceClearance in check-hole-trace-clearance.ts to measure copper-edge distance to physical non-plated holes, integrating with existing routing checks and ensuring compliance with defined clearance rules. |
| [#2735](https://github.com/tscircuit/tscircuit-autorouter/pull/2735) | 🐳 Major | ⭐⭐⭐ | Non-plated holes need a copper-edge clearance independent of pad clearance. Add minTraceToHoleEdgeClearance (mm) and explicit isNonPlatedHole obstacle metadata. Pipeline 9 passes the value directly from its SRJ, following the existing pad-clearance flow. Routing, repair, width selection, and power expansion use native margins while preserving physical hole dimensions. Shared DRC composes the released hole check alongside pad and via checks. Corne reports 88 (right) and 94 (left) identify their 144 circular NPTHs per half and request 0.2 mm. Both use Pipeline 9, require every point-pair connection to be routed, and assert zero DRC errors. Their snapshots retain the existing visualization without a DRC heading. Two focused hole-clearance files cover physical edge measurements at 0, 0.2, and 0.5 mm, unchanged input geometry, reconstruction, and shared DRC detection of preloaded clearance violations and overlaps. Uses published tscircuitchecks0.0.222. This PR is stacked on 2743 to keep Circuit JSON conversion fixes separate. No Pipeline 7 source changes. The existing Pipeline 7 repair and Game Boy snapshots reflect the checks upgrade; the Pipeline 7 fixture retains its baseline continuity errors and is separate from the Corne tests. Native solver dependencies: https:github.comtscircuitrepair04pull18 https:github.comtscircuithigh-density-repair03pull150 https:github.comtscircuitpower-trace-expanderpull32 Core producer: https:github.comtscircuitcorepull4153 All producers and consumers use isNonPlatedHole; there is no legacy alias. Repair04 imports the canonical SRJ type and retains all four existing cache options. The indexed engine follows the existing obstacle clearance and tolerance paths, including its cached rectangular precheck. Power expansion uses its existing obstacleKind classification. Each solver has one functional clearance test and one visual snapshot test. Existing cached-engine and autorouter fixes are combined separately in https:github.comtscircuithigh-density-repair03pull151. Validation: both Corne halves route every connection with zero shared DRC errors at 0.2 mm. The completed layer search changes the right-half route; its snapshot is refreshed without a DRC heading. The left-half snapshot matches unchanged. Focused clearance tests, TypeScript, and package build pass. All nine Linux CI test shards pass on f0e9d0125fcda5892dd31838d652b5c1ed785db5: https:github.comtscircuittscircuit-autorouteractionsruns36269393782. The Linux right-half snapshot uses the native Linux result; its routing, connectivity, and zero-DRC assertions remain unchanged. Companion status: repair04 has 144 passing tests. Power expansion has 85 passing tests. The indexed engine now has 120 passing tests, with the premature sample-9 stopping regression fixed separately in high-density-repair03 151. 151 and 150 both have green test, type-check, and formatting CI. 151 includes a close-up snapshot of the previous stopping point with one trace-to-via violation and the completed repair with zero errors. |
| [#2715](https://github.com/tscircuit/tscircuit-autorouter/pull/2715) | 🐳 Major | ⭐⭐⭐ | Retains independently safe sections of a trace during autorouting, allowing valid repairs even when other sections are blocked. |
| [#2713](https://github.com/tscircuit/tscircuit-autorouter/pull/2713) | 🐳 Major | ⭐⭐⭐ | Retains safe wire nudges during autorouting while preventing unrelated trace errors from blocking repairs, improving overall error counts in the routing process. |
| [#2694](https://github.com/tscircuit/tscircuit-autorouter/pull/2694) | 🐳 Major | ⭐⭐⭐ | Enables bugreport107 for Pipeline 9, asserting successful routing with 141 relaxed DRC errors and generating a routed-board SVG snapshot. |
| [#209](https://github.com/tscircuit/tiny-hypergraph/pull/209) | 🐳 Major | ⭐⭐⭐ | Adds a reachability check to prevent unnecessary rerouting attempts in the solver when a route is blocked by another route, specifically addressing issues in the routing process for board107-1726. |
| [#150](https://github.com/tscircuit/high-density-repair03/pull/150) | 🐳 Major | ⭐⭐⭐ | Adds independent trace clearance for non-plated holes in the indexed DRC engine, ensuring proper clearance checks and error classifications. |
| [#151](https://github.com/tscircuit/high-density-repair03/pull/151) | 🐳 Major | ⭐⭐⭐ | Preserves existing autorouter fixes by merging commits onto a cache-compatible stack, ensuring shared engine behavior without dropping fixes for wide-trace clearance and geometry. |
| [#32](https://github.com/tscircuit/power-trace-expander/pull/32) | 🐳 Major | ⭐⭐⭐ | Trace expansion must retain the requested gap to non-plated holes, ensuring proper clearance during routing operations. |
| [#30](https://github.com/tscircuit/power-trace-expander/pull/30) | 🐳 Major | ⭐⭐⭐ | Reduces the time taken for power trace expansion by reusing resolved copper aliases and eliminating unnecessary grid collision checks, resulting in a performance improvement of 36.1. |
| [#18](https://github.com/tscircuit/repair04/pull/18) | 🐳 Major | ⭐⭐⭐ | Adds support for honoring hole-edge clearance during bounded trace repair, ensuring compliance with SRJ hole-edge rules and improving obstacle handling in routing paths. |
| [#4095](https://github.com/tscircuit/core/pull/4095) | 🐙 Minor | ⭐⭐ | Disables the implicit copper pour render phase, ensuring it does not execute even when automatic pours are enabled, while retaining explicit copper pour elements and adding regression tests. |
| [#341](https://github.com/tscircuit/checks/pull/341) | 🐙 Minor | ⭐⭐ | Fixes false missing-via errors by requiring trace endpoint ports to match the copper layer of the associated pads before inferring their IDs. |
| [#342](https://github.com/tscircuit/checks/pull/342) | 🐙 Minor | ⭐⭐ | Fixes a crash in connectivity checking when a via is near the rounded end of a trace with separated copper. |
| [#29](https://github.com/tscircuit/circuit-json-to-bom-csv/pull/29) | 🐙 Minor | ⭐⭐ | Excludes bare mounting holes from BOM exports when they are unassigned simple chips with a specific footprint, while preserving other components with assigned part numbers or additional features. |
| [#28](https://github.com/tscircuit/circuit-json-to-bom-csv/pull/28) | 🐙 Minor | ⭐⭐ | Excludes bare mounting-hole footprints from BOM rows and CSV in the BOM export process. |

<details>
<summary>🐌 Tiny Contributions (17)</summary>

| PR # | Impact | Description |
|------|--------|-------------|
| [#868](https://github.com/tscircuit/props/pull/868) | 🐌 Tiny | Add minTraceToHoleEdgeClearance to the shared routing tolerances used by boards, subcircuit groups, and autorouting phases, specifying the minimum distance from trace copper to the edge of a non-plated hole. |
| [#4181](https://github.com/tscircuit/core/pull/4181) | 🐌 Tiny | Adds a PCB snapshot test for 0.2mm trace-to-hole edge clearance with local Pipeline 9 routing, ensuring routing correctness without implementation changes. |
| [#782](https://github.com/tscircuit/circuit-to-svg/pull/782) | 🐌 Tiny | Update the tscircuit dev dependency from 0.0.2018 to 0.0.2629. Its dependency tree supplies schematic-symbols 0.0.246 in this repository, so no separate symbols dependency or overrides are added. Refresh the snapshots affected by the newer core, symbols, and routingcheck behavior. Filter core-generated styling warnings before explicitly regenerating them in the warning fixtures to avoid duplicates. Use the dedicated via-trace clearance check and refresh inline expectations for the updated checks API while retaining nonempty-error assertions. Validation: bun run build passed. bun test --timeout 20000: 389 passed, 1 existing todo, 0 failures. Verified repository resolution: tscircuit 0.0.2629 and schematic-symbols 0.0.246. Visually inspected representative updated schematic snapshots. Scope: tscircuit remains a dev dependency. This updates the repositorytest dependency tree; it does not guarantee schematic-symbols resolution in a separately installed published package. |
| [#344](https://github.com/tscircuit/checks/pull/344) | 🐌 Tiny | Adds concurrency control to npm release jobs to prevent failures due to closely spaced merges. |
| [#21](https://github.com/tscircuit/circuit-json-to-pnp-csv/pull/21) | 🐌 Tiny | Excludes bare mounting holes from pick-and-place exports when they are authored as ordinary chips, ensuring they do not appear as assembly parts if they meet specific criteria. |
| [#20](https://github.com/tscircuit/circuit-json-to-pnp-csv/pull/20) | 🐌 Tiny | Reproduces the issue of mounting holes being incorrectly included in pick-and-place exports, providing a test that expects their exclusion. |
| [#5092](https://github.com/tscircuit/tscircuit.com/pull/5092) | 🐌 Tiny | Updates the circuit-json-to-pnp-csv package from version 0.0.13 to 0.0.18 to include a fix for mounting-hole export. |
| [#5338](https://github.com/tscircuit/runframe/pull/5338) | 🐌 Tiny | Update circuit-json-to-bom-csv to 0.0.19 and circuit-json-to-pnp-csv to 0.0.18 to pick up the mounting-hole export fixes. |
| [#4964](https://github.com/tscircuit/cli/pull/4964) | 🐌 Tiny | Updates circuit-json-to-bom-csv to version 0.0.19 and circuit-json-to-pnp-csv to version 0.0.18 to incorporate mounting-hole export fixes. |
| [#4884](https://github.com/tscircuit/cli/pull/4884) | 🐌 Tiny | Updates circuit-to-svg and the X-ray alias to 0.0.430, adds schematic-symbols and schematic-trace-solver as development dependencies for improved rendering of newer symbol geometry. |
| [#2696](https://github.com/tscircuit/tscircuit-autorouter/pull/2696) | 🐌 Tiny | Pins the dependency tscircuitpower-trace-expander to a specific commit that includes optimizations for power trace expansion, improving performance and maintaining routing integrity. |
| [#210](https://github.com/tscircuit/tiny-hypergraph/pull/210) | 🐌 Tiny | Add a visual regression test for the disconnected, owner-branching blocker search, recording 511 label expansions as the search revisits states for different owner sets. |
| [#5](https://github.com/tscircuit/jlcpcb-manufacturing-specs/pull/5) | 🐌 Tiny | Add min_trace_to_hole_edge_clearance: 0.2 mm to jlcMinTolerances and jlcPreferredTolerances for JLCPCB specifications. |
| [#245](https://github.com/tscircuit/ti/pull/245) | 🐌 Tiny | Switches the TI npm release process to use pver for automatic versioning and publishing on main branch pushes or manual dispatch, improving the release workflow. |
| [#244](https://github.com/tscircuit/ti/pull/244) | 🐌 Tiny | Add ti import TPS62160DSGR to resolve an exact manufacturer part number through LCSCJLCPCB, fetch its EasyEDA symbol and footprint, and write an editable importsTPS62160DSGR.tsx component. |
| [#243](https://github.com/tscircuit/ti/pull/243) | 🐌 Tiny | Add a command line interface (CLI) command ti search for searching Texas Instruments components, providing JSON output and handling various query formats. |
| [#3](https://github.com/tscircuit/trace-simplification-solver/pull/3) | 🐌 Tiny | Adds a README introducing the trace simplification pipeline, installation, and a complete TypeScript usage example. Documents constructor options and defaults, incremental solving, visualization, individual solvers, development commands, and the MIT license, with an existing before-and-after SVG snapshot. |

</details>

### [0hmX](https://github.com/0hmX)

| PRs # | Impact | Rating | Description |
|------|--------|--------|-------------|
| [#822](https://github.com/tscircuit/circuit-json/pull/822) | 🐳 Major | ⭐⭐⭐ | Adds an optional boolean property to distinguish intentional radiating antenna copper from accidental stubs in PCB designs. |
| [#2720](https://github.com/tscircuit/tscircuit-autorouter/pull/2720) | 🐳 Major | ⭐⭐⭐ | Updates the rectdiff dependency to a specific commit that combines bounded gap filling with existing transit behavior, ensuring that gap-fill nodes remain within board bounds and improving the autorouters handling of edge cases. |
| [#2719](https://github.com/tscircuit/tscircuit-autorouter/pull/2719) | 🐳 Major | ⭐⭐⭐ | Validates connection bounds after preprocessing to reject terminals left outside bounds after obstacle filtering. |
| [#2708](https://github.com/tscircuit/tscircuit-autorouter/pull/2708) | 🐳 Major | ⭐⭐⭐ | Fixes missing vias in the SOT-23 breakout routing due to incorrect handling of layer transitions in the autorouting process. |
| [#2707](https://github.com/tscircuit/tscircuit-autorouter/pull/2707) | 🐳 Major | ⭐⭐⭐ | Reproduces a missing via issue in the SOT-23 breakout routing after an autorouter update, highlighting a failure in the routing process that omits a critical via during layer transitions. |
| [#2697](https://github.com/tscircuit/tscircuit-autorouter/pull/2697) | 🐳 Major | ⭐⭐⭐ | Fixes length-matching clearance violations by using native SRJ traces for Pipeline9, ensuring accurate routing and compliance with design rules. |
| [#154](https://github.com/tscircuit/rectdiff/pull/154) | 🐳 Major | ⭐⭐⭐ | Constricts generated gap-fill nodes within board boundaries by clipping seed edges and halting expansion at the nearest board edge or blocker, while maintaining respect for existing obstacles and ensuring that empty gaps can still reach the board edge. |
| [#71](https://github.com/tscircuit/length-matching-solver/pull/71) | 🐳 Major | ⭐⭐⭐ | Adds support for native fixed SRJ traces in length matching without converting them to rectangular obstacles, allowing for direct input of fixed traces in the LengthMatchingSolver and PostProcessingSolver. |
| [#4132](https://github.com/tscircuit/core/pull/4132) | 🐙 Minor | ⭐⭐ | Marks antenna traces with is_antenna_trace: true for generated antenna shapes and updates circuit-json dependency from 0.0.500 to 0.0.504. |
| [#339](https://github.com/tscircuit/checks/pull/339) | 🐙 Minor | ⭐⭐ | Fixes the issue where trace-owned vias connected to copper planes were incorrectly reported as dangling, allowing valid connections to be recognized. |
| [#337](https://github.com/tscircuit/checks/pull/337) | 🐙 Minor | ⭐⭐ | Fixes the issue where dangling-trace checks are not called in routing DRC, ensuring exposed trace endpoints are reported during checks. |
| [#323](https://github.com/tscircuit/checks/pull/323) | 🐙 Minor | ⭐⭐ | Add checkDanglingTraces(circuitJson) to detect exposed branches in PCB traces, ensuring proper connectivity and reporting dangling endpoints. |

<details>
<summary>🐌 Tiny Contributions (3)</summary>

| PR # | Impact | Description |
|------|--------|-------------|
| [#322](https://github.com/tscircuit/checks/pull/322) | 🐌 Tiny | Reproduces the behavior of dangling traces and antenna endpoints in the checker, providing comprehensive tests and PCB snapshots for the dangling-trace fix in 323. |
| [#2718](https://github.com/tscircuit/tscircuit-autorouter/pull/2718) | 🐌 Tiny | Reproduces a failure in pipeline 9 when obstacle filtering incorrectly allows a connection terminal to be outside the routing bounds, adding a test to assert that the input is rejected without output. |
| [#2698](https://github.com/tscircuit/tscircuit-autorouter/pull/2698) | 🐌 Tiny | Reproduces the Pipeline 9 length-matching bug with comprehensive tests and snapshots before applying the fix in a subsequent PR. |

</details>

### [AnasSarkiz](https://github.com/AnasSarkiz)

| PRs # | Impact | Rating | Description |
|------|--------|--------|-------------|
| [#2724](https://github.com/tscircuit/tscircuit-autorouter/pull/2724) | 🐳 Major | ⭐⭐⭐ | Scales the number of cleanup passes in autorouting based on effort levels, improving trace cleanup efficiency in Pipelines 7 and 9. |
| [#2728](https://github.com/tscircuit/tscircuit-autorouter/pull/2728) | 🐳 Major | ⭐⭐⭐ | Requests 2x autorouter effort on SRJ18 sample 3 and captures the existing two-pass cleanup behavior to evaluate effort-scaled simplification. |
| [#146](https://github.com/tscircuit/rectdiff/pull/146) | 🐳 Major | ⭐⭐⭐ | Preserves outer-layer transit for four-layer boards with copper planes on inner layers, ensuring usable routing mesh remains intact during containment merging. |
| [#4170](https://github.com/tscircuit/core/pull/4170) | 🐙 Minor | ⭐⭐ | Fixes the regression where rect-pad plated holes shared a null ID and ports were incorrectly positioned, ensuring distinct IDs and correct port placements for each pad. |

<details>
<summary>🐌 Tiny Contributions (2)</summary>

| PR # | Impact | Description |
|------|--------|-------------|
| [#4171](https://github.com/tscircuit/core/pull/4171) | 🐌 Tiny | Restores CI functionality by updating test expectations to match new diagnostics from the tscircuitchecks upgrade, ensuring accurate test results for existing routing fixtures. |
| [#4169](https://github.com/tscircuit/core/pull/4169) | 🐌 Tiny | Reproduces the issue where rectPad plated holes with null IDs cause incorrect PCB port resolution, specifically moving J1s port to J2s pad. |

</details>

### [MustafaMulla29](https://github.com/MustafaMulla29)

| PRs # | Impact | Rating | Description |
|------|--------|--------|-------------|
| [#1245](https://github.com/tscircuit/schematic-trace-solver/pull/1245) | 🐳 Major | ⭐⭐⭐ | Simplifies the Allwinner T113 upper LDOA1V8 supply trace by reducing bends from 24 to 2 and directly attaching the power label to its clear upper corner, enhancing trace efficiency and label placement. |
| [#1238](https://github.com/tscircuit/schematic-trace-solver/pull/1238) | 🐳 Major | ⭐⭐⭐ | Revalidates power and ground labels after rail alignment to prevent trace-label collisions, ensuring correct label placements and avoiding overlaps in the schematic rendering. |
| [#1233](https://github.com/tscircuit/schematic-trace-solver/pull/1233) | 🐳 Major | ⭐⭐⭐ | Restores the continuous RP2040 gamepad ground rail alignment that regressed due to a previous change, ensuring correct label containment and rail coordinate selection. |
| [#4150](https://github.com/tscircuit/core/pull/4150) | 🐙 Minor | ⭐⭐ | Adds a warning for inverted rails in schematic checks when a two-pin component has its positive-supply connection below its ground connection. |
| [#332](https://github.com/tscircuit/checks/pull/332) | 🐙 Minor | ⭐⭐ | Adds inverted-rail warnings to schematic checks, ensuring consistent diagnostics across API calls and enhancing schematic placement analysis. |
| [#1244](https://github.com/tscircuit/schematic-trace-solver/pull/1244) | 🐙 Minor | ⭐⭐ | Fixes the issue where rail labels are not correctly repositioned when the associated trace corners are moved during routing, ensuring that power labels remain attached to their respective corners after routing adjustments. |
| [#113](https://github.com/tscircuit/circuit-json-schematic-placement-analysis/pull/113) | 🐙 Minor | ⭐⭐ | Fixes the issue where selecting issueTypes: RegulatorCapacitorsOnWrongSides returned no findings due to missing solver mapping, ensuring selective execution returns the same regulator findings as the default analysis. |
| [#106](https://github.com/tscircuit/circuit-json-schematic-placement-analysis/pull/106) | 🐙 Minor | ⭐⭐ | Detects and reports when local input and output capacitors are placed on the wrong sides of a regulator, ensuring proper connectivity and placement according to design specifications. |
| [#102](https://github.com/tscircuit/circuit-json-schematic-placement-analysis/pull/102) | 🐙 Minor | ⭐⭐ | Adds optional issueTypes to analyzeSchematicPlacement() so callers can run selected checks, preserving existing functionality and deduplication. |
| [#97](https://github.com/tscircuit/circuit-json-schematic-placement-analysis/pull/97) | 🐙 Minor | ⭐⭐ | Adds UsbSeriesResistorPlacementSolver, which reports a USB DD series-resistor pair drawn end-to-end on the same row (or column) and recommends nearby placement with clear traces to the corresponding USB ports. |

<details>
<summary>🐌 Tiny Contributions (9)</summary>

| PR # | Impact | Description |
|------|--------|-------------|
| [#4129](https://github.com/tscircuit/core/pull/4129) | 🐌 Tiny | Updates the tscircuitschematic-trace-solver dependency to version 0.0.209 to include rail-detour simplification and label corner-placement fixes. |
| [#4099](https://github.com/tscircuit/core/pull/4099) | 🐌 Tiny | Updates tscircuitschematic-trace-solver from 0.0.205 to 0.0.208, including the rail-label corner fix and refreshes the affected schematic snapshots. |
| [#1235](https://github.com/tscircuit/schematic-trace-solver/pull/1235) | 🐌 Tiny | Reproduces the staggered RP2040 gamepad ground rail exposed by the core solver-dependency update in tscircuitcore4081. |
| [#1234](https://github.com/tscircuit/schematic-trace-solver/pull/1234) | 🐌 Tiny | Reproduces the trace crossing the LDOA1V8 power label above AVCC in cores repro184-allwinner-t113-analog-net-label-crossing snapshot, capturing the core tests solver input with net display names retained for readable snapshots. |
| [#1240](https://github.com/tscircuit/schematic-trace-solver/pull/1240) | 🐌 Tiny | Adds a reproduction test for the V3V3 rail label placement in the QSPI section of the RP2040 schematic, capturing the labels incorrect positioning after routing adjustments. |
| [#115](https://github.com/tscircuit/circuit-json-schematic-placement-analysis/pull/115) | 🐌 Tiny | Update the runtime schematic-symbols dependency from 0.0.224 to 0.0.244 to align with the core version used by the checks integration, fixing SVG rendering issues caused by different symbol geometry. |
| [#105](https://github.com/tscircuit/circuit-json-schematic-placement-analysis/pull/105) | 🐌 Tiny | Adds unchanged full-sheet repros for regulator inputoutput capacitors placed on the opposite sides from their connected ports: seveibarf1c1990s-dev-board v1.8.0(https:tscircuit.comseveibarf1c1990s-dev-board): U_1V8 and U_1V2, complete 90-component sheet. pixalynxesp32-usb-ducky v1.2.8(https:tscircuit.compixalynxesp32-usb-ducky): U2C1C2, reusing the existing complete 46-component export. Six files: one circuit asset and import wrapper, two tests, and two unhighlighted full-sheet snapshots with current diagnostics below. Positions, wiring, symbols, and retained source records are unchanged. References: AP2112 typical application, page 2(https:www.diodes.comassetsDatasheetsAP2112.pdfpage2) and TI TLV757P typical application, page 1(https:www.ti.comlitdssymlinktlv757p.pdfpage1). Each draws the input capacitor beside IN and the output capacitor beside OUT. The proposed placement check follows the actual symbols port sides, rather than requiring left-to-right power flow. Solver: 106, stacked on this PR. Validation: all 115 tests pass. Typecheck and formatting pass. |
| [#107](https://github.com/tscircuit/circuit-json-schematic-placement-analysis/pull/107) | 🐌 Tiny | Refreshes the clock-board orientation repro snapshot using the repositorys current renderer to fix the snapshot mismatch on main. |
| [#94](https://github.com/tscircuit/circuit-json-schematic-placement-analysis/pull/94) | 🐌 Tiny | Solver PR: 97, stacked on this repro. Adds complete, unchanged schematic repros from imrishabh18nema-23-stepper-controller v1.0.4(https:tscircuit.comimrishabh18nema-23-stepper-controller) (the 14-component programming sheet) and pixalynxesp32-usb-ducky v1.2.8(https:tscircuit.compixalynxesp32-usb-ducky) (the complete 46-component sheet). Both place the USB DD series resistors far apart along one row. Current analysis misses the pair arrangement; the ducky board has a separate, existing R3 flip warning. Tests preserve the exported positions and connectivity, with current diagnostics below unhighlighted full-sheet snapshots.  RP2040 reference comparison Raspberry Pi, Figure 9(https:datasheets.raspberrypi.comrp2040hardware-design-with-rp2040.pdfpage12) draws the corresponding resistors in parallel signal rows. !RP2040 reference and unchanged tscircuit sheet(https:github.comuser-attachmentsassets961ad120-5608-47bc-8a55-6f87e36fb048)  ESP32-S3 reference comparison Espressif USB RC schematic(https:docs.espressif.comprojectsesp-hardware-design-guidelinesenlatestesp32s3schematic-checklist.htmlfig-usb-rc-schematic) shows the same paired arrangement. These comparisons concern schematic readability; the reference circuits other parts and PCB-placement requirements are separate. !ESP32-S3 reference and unchanged tscircuit sheet(https:github.comuser-attachmentsassets317893ae-4e07-4b23-b6b1-d1c7c675877e) Validation: 105 tests pass; typecheck and formatting pass. |

</details>

### [GokulPandi-M](https://github.com/GokulPandi-M)

| PRs # | Impact | Rating | Description |
|------|--------|--------|-------------|
| [#4130](https://github.com/tscircuit/core/pull/4130) | 🐙 Minor | ⭐⭐ | Fixes asymmetric solver bounds for custom schematic symbols by excluding text labels from body-bound calculations. |
| [#58](https://github.com/tscircuit/parts-engine/pull/58) | 🐙 Minor | ⭐⭐ | Fixes the issue where the parts engine did not include an LEDs requested color when searching for matching JLC parts, allowing incompatible LEDs to be selected. |
| [#57](https://github.com/tscircuit/parts-engine/pull/57) | 🐙 Minor | ⭐⭐ | Fixes the issue where the parts engine selects an LED of the wrong color due to the missing color filter in the LED search functionality. |
| [#104](https://github.com/tscircuit/circuit-json-schematic-placement-analysis/pull/104) | 🐙 Minor | ⭐⭐ | Fixes the analyzers behavior to allow series power-path diodes to maintain their orientation based on schematic layout, rather than enforcing a vertical orientation. |

<details>
<summary>🐌 Tiny Contributions (4)</summary>

| PR # | Impact | Description |
|------|--------|-------------|
| [#4128](https://github.com/tscircuit/core/pull/4128) | 🐌 Tiny | Reproduces the issue of asymmetric solver bounds for two-pin symbols in the schematic trace solver, highlighting the inconsistency in handling terminal connections without providing a fix. |
| [#4100](https://github.com/tscircuit/core/pull/4100) | 🐌 Tiny | Update schematic-symbols dependency from version 0.0.246 to 0.0.247, aligning varistor terminals and correcting REF and VAL placement as per related changes in tscircuitschematic-symbols478. |
| [#478](https://github.com/tscircuit/schematic-symbols/pull/478) | 🐌 Tiny | Aligns the second varistor lead and port with the first terminal, centers the horizontal REF label above the symbol and VAL below it, places the vertical varistor REF and VAL labels on the right, and regenerates only the affected varistor snapshots without renderer or router workarounds. |
| [#87](https://github.com/tscircuit/circuit-json-schematic-placement-analysis/pull/87) | 🐌 Tiny | Problem The clock board places D_REVERSE horizontally in series between VBAT_SWITCHED and VBAT_SW. Both nets are explicitly marked as positive power nets, and the current analyzer emits TwoPinComponentShouldBeVertical with a -90 degree rotation. The same power sheet also reports C_BUCK_IN, C_BUCK_OUT1, and C_BUCK_OUT2. Those three capacitors are power-to-ground branches, so their vertical suggestions are expected. Unlike them, D_REVERSE continues a left-to-right power path. This repro records all four sheet findings while keeping the review question focused on the series diode, similar to the series-inductor distinction introduced in 62. The existing generic test intentionally reports horizontal supply diodes. This PR does not change that behavior or claim the final solver policy; it adds the real clock-board case for review.  Repro Adds the complete source and schematic records from the clock-board export, preserving their original order and contents. Verifies the 80-component schematic renders without Circuit JSON errors. Verifies D_REVERSE.pin1 connects to VBAT_SWITCHED, D_REVERSE.pin2 connects to VBAT_SW, and both nets are positive power supplies. Shows all four TwoPinComponentShouldBeVertical findings on the power sheet in the stacked snapshot. Makes no solver or dependency changes. !Clock-board power-sheet orientation repro(https:raw.githubusercontent.comGokulPandi-Mcircuit-json-schematic-placement-analysis28ef3da1fc094dbe4451dab64472fb43be5e6476testscases__snapshots__clock-board-series-diode-orientation-repro.snap.svg)  Validation bun test: 100 passed, 0 failed bun run typecheck bun run format:check bun run build:site git diff --check Verified the checked-in source and schematic records semantically match the provided export Visually inspected the stacked snapshot |

</details>

### [rushabhcodes](https://github.com/rushabhcodes)

| PRs # | Impact | Rating | Description |
|------|--------|--------|-------------|
| [#4118](https://github.com/tscircuit/core/pull/4118) | 🐙 Minor | ⭐⭐ | Fixes the trace length calculation to correctly include distances after vias in PCB routing. |
| [#4111](https://github.com/tscircuit/core/pull/4111) | 🐙 Minor | ⭐⭐ | Updates the calculate-packing dependency to version 0.0.90 and enables a regression test for rotated cross-layer plated-hole packing, ensuring proper clearance of components in PCB snapshots. |
| [#4113](https://github.com/tscircuit/core/pull/4113) | 🐙 Minor | ⭐⭐ | Adds a minimal failing reproduction for the trace-length calculation bug that omits the segment after a via, preventing the maximum-length DRC error from being emitted. |
| [#59](https://github.com/tscircuit/parts-engine/pull/59) | 🐙 Minor | ⭐⭐ | Fixes the invalid switch type filter in JLC searches that caused no matches to be returned for switches, ensuring correct results are fetched from the JLC search service. |
| [#136](https://github.com/tscircuit/calculate-packing/pull/136) | 🐙 Minor | ⭐⭐ | Computes axis-aligned packing bounds from ccw_rotation for oval and pill plated holes, fixing a root conversion issue and ensuring packed components clear the rotated bounds. |
| [#597](https://github.com/tscircuit/circuit-json-to-kicad/pull/597) | 🐙 Minor | ⭐⭐ | Fixes the mapping of KiCad symbol pin numbers to match the corresponding circuit pin numbers for a four-pin crystal component, addressing a regression issue. |

<details>
<summary>🐌 Tiny Contributions (1)</summary>

| PR # | Impact | Description |
|------|--------|-------------|
| [#4104](https://github.com/tscircuit/core/pull/4104) | 🐌 Tiny | Adds a regression repro for pcbPack placing a bottom SMT pad over a rotated through-hole copper area, computes the plated-hole physical board-space AABB from its emitted ccw_rotation, and displays the resulting placement DRC error in the PCB snapshot. |

</details>

### [ShiboSoftwareDev](https://github.com/ShiboSoftwareDev)

| PRs # | Impact | Rating | Description |
|------|--------|--------|-------------|
| [#795](https://github.com/tscircuit/circuit-to-svg/pull/795) | 🐳 Major | ⭐⭐⭐ | Summary add a Circuit JSON fixture extracted from the real TI TMDS62LEVM Rev. B sheet 32 add a visual regression for the RJ45 integrated-magnetics symbol capture the current bug where the filled symbol body paints over native line, arc, and circle detail This PR intentionally changes no renderer behavior. It is the reproduction base for 788. Source: https:www.ti.comtoolTMDS62LEVM  Test plan bun test bunx tsc --noEmit targeted Biome format check for the added test |
| [#208](https://github.com/tscircuit/altiumts/pull/208) | 🐳 Major | ⭐⭐⭐ | Promotes Altium arc sampling and pad-stack geometry to public, unit-explicit APIs, organizes geometry functions, exposes common schematic component fields, and updates SVG serialization without changing output. |
| [#789](https://github.com/tscircuit/circuit-to-svg/pull/789) | 🐙 Minor | ⭐⭐ | Adjusts the rendering viewport to use the selected schematic sheet frame, preventing overflow issues with long text and ensuring proper rendering of the schematic. |
| [#110](https://github.com/tscircuit/altium-to-circuit-json/pull/110) | 🐙 Minor | ⭐⭐ | Convert Altium embedded-image records into portable inline schematic_graphic elements, preserving source placement and aspect-ratio behavior across the schematic sheet, and adding the first compatible renderer release for schematic visual regressions. |
| [#104](https://github.com/tscircuit/altium-to-circuit-json/pull/104) | 🐙 Minor | ⭐⭐ | Resolves Altium .Designator and .Comment overlay text from the owning component and omits unresolved special strings instead of rendering placeholders. |

<details>
<summary>🐌 Tiny Contributions (8)</summary>

| PR # | Impact | Description |
|------|--------|-------------|
| [#796](https://github.com/tscircuit/circuit-to-svg/pull/796) | 🐌 Tiny | Adds a Circuit JSON fixture extracted from the TI TMDS62LEVM Rev. B sheet 04 and a visual regression test for overflowing text that expands the bounds and shrinks the full schematic sheet, without changing renderer behavior. |
| [#788](https://github.com/tscircuit/circuit-to-svg/pull/788) | 🐌 Tiny | Fixes rendering order to ensure filled component bodies are displayed behind native lines, arcs, circles, paths, and text in schematic visualizations. |
| [#2712](https://github.com/tscircuit/tscircuit-autorouter/pull/2712) | 🐌 Tiny | Updates the benchmark dataset for autorouting by pinning the dataset-srj24 to a specific commit and adding ten new KiCad-derived samples, increasing the total inputs to 20 and asserting full-board obstacle layer spans for regression samples. |
| [#118](https://github.com/tscircuit/altium-to-circuit-json/pull/118) | 🐌 Tiny | Maps Altium outer-edge inversion markers to Circuit JSONs inversion-circle field and preserves inner-edge clock markers as standard schematic paths derived from finalized port geometry. |
| [#117](https://github.com/tscircuit/altium-to-circuit-json/pull/117) | 🐌 Tiny | Preserves nonnumeric Altium pin designators such as A1, B7, and SH1 as valid component-associated schematic text, placing the text using finalized Circuit JSON port geometry and respecting Altiums pin-designator visibility flag. |
| [#116](https://github.com/tscircuit/altium-to-circuit-json/pull/116) | 🐌 Tiny | Converts Altium active-low pin labels into structured Circuit JSON format, ensuring proper rendering and representation in schematics. |
| [#115](https://github.com/tscircuit/altium-to-circuit-json/pull/115) | 🐌 Tiny | Add a focused visual regression for the TI TMDS62LEVM Rev. B sheet 05, converting it to Circuit JSON and rendering it through renderImportedSchematicToSvg, while capturing the current behavior of circuit-to-svg without changing converter behavior. |
| [#103](https://github.com/tscircuit/altium-to-circuit-json/pull/103) | 🐌 Tiny | Replaces the copper-only TMDS62LEVM comparison with a complete top-side PCB render, including all layers and graphics, and updates the README description accordingly. |

</details>

### [trixie010](https://github.com/trixie010)


<details>
<summary>🐌 Tiny Contributions (1)</summary>

| PR # | Impact | Description |
|------|--------|-------------|
| [#86](https://github.com/tscircuit/circuit-json-to-tscircuit/pull/86) | 🐌 Tiny | Fixes the issue where the silkscreen path layer and stroke width are dropped during conversion, ensuring that non-default values are correctly emitted in the output. |

</details>

### [Abse2001](https://github.com/Abse2001)

| PRs # | Impact | Rating | Description |
|------|--------|--------|-------------|
| [#24](https://github.com/tscircuit/high-density-repair01/pull/24) | 🐳 Major | ⭐⭐⭐ | Standardizes vector length calculations across platforms to avoid discrepancies in mathematical operations, ensuring consistent behavior in force improvement and related calculations. |

<details>
<summary>🐌 Tiny Contributions (2)</summary>

| PR # | Impact | Description |
|------|--------|-------------|
| [#2742](https://github.com/tscircuit/tscircuit-autorouter/pull/2742) | 🐌 Tiny | Stack 1. Repro only: https:github.comtscircuithigh-density-repair01pull23 2. Merged fix: https:github.comtscircuithigh-density-repair01pull24 3. This PR pins Repair01 to its merged commit 27b3392c38ed4474b0557c73640b261155e28c27. Its complete Git tree is identical to reviewed commit c020d0f, whose ordinary CI and manual LinuxmacOS node comparison(https:github.comtscircuithigh-density-repair01actionsruns36318388796) passed. No auto-merge.  Scope The only production change is the exact Repair01 dependency pin. No autorouter algorithms, DRC rules, board geometry, connectivity, clearances, routing phases or options are changed. The unchanged complete Game Boy SRJ comes from the Core 0.0.1989 capture used in 2741, before any routing. SHA-256: 89cfabf40f44453f4894a67475c4a5563e171d629f52bd42a8724bb15185ace4. It has 144 connections, 477 obstacles, four layers and blindburied vias disabled. There is no input routed copper.  Validation Repair01s unchanged real-node repro now passes on Linux x64 and macOS ARM64, using Bun 1.3.8 on both. The full Repair01 suite and type checking pass. The dedicated Game Boy platform parity workflow is manual-only (workflow_dispatch), not triggered by PRs or pushes. When requested, it runs normal end-to-end Pipeline 9 on the full board on both platforms with effort: 1 and no cache. A read-only observer uses the existing onSolved callback to record the force-improvement output hash before the next stage. No constructor arguments are changed. CI compares the input, force-stage and final route hashes, routevia counts, and measured relaxed-DRC counts. It exports actual routes, error lists, and the repository-native board SVG with the measured DRC overlay. There is no forced DRC count or patched output.  Same-machine Pipeline 9 benchmarks Requested using benchmark-all --pipeline 9 --same-machine(https:github.comtscircuittscircuit-autorouterpull2742issuecomment-5844841129). These results cover the Repair01 arithmetic used by this PR; subsequent Repair01 changes were workflowtest metadata, variable naming, import ordering, formatting, and test-file naming, not arithmetic changes. The current pin uses the merged upstream commit rather than the earlier branch commit.  Dataset  Completed, main  PR  Relaxed-DRC passing, main  PR  DRC issues, main  PR  Timeouts, main  PR   ---  ---  ---  ---  ---   Dataset01(https:github.comtscircuittscircuit-autorouterpull2742issuecomment-5844845738)  8585  8585  8585  8585  0  0  0  0   SRJ18(https:github.comtscircuittscircuit-autorouterpull2742issuecomment-5844845914)  1316  1316  1316  1316  0  0  3  3  There were no completionDRCtimeout outcome changes in these two datasets. SRJ18 samples 6, 14 and 15 timed out on both versions. Runtime changes were mixed: Dataset01 P50P95 were 2.65310.791 s  2.78911.771 s; SRJ18 P50 was 134.151 s  135.333 s. This is not a claim of zero runtime regressions.  Ordinary CI snapshot review CI run 36232869155(https:github.comtscircuittscircuit-autorouteractionsruns36232869155) failed only at five Linux snapshot comparisons: bugreports 88, 94, 96, 107, and the SRJ18 sample 3 repair test. Their preceding routingDRC assertions passed. The received images were inspected using the repositorys visualization guidance. No assertions or snapshot tolerances were weakened. The focused Linux snapshot updater(https:github.comtscircuittscircuit-autorouteractionsruns36311026007) generated and committed three of the five snapshots in 19925531, then reached its one-hour limit during verification. Its bun-test-plan groups differ from ordinary CIs balanced groups, so it missed bugreports 88 and 94. Commit e740d1c2 adds those two snapshots directly from the exact received SVG artifacts of run 36232869155, with byte-for-byte SHA-256 verification. The solvertest code is unchanged between that run and these snapshot-only commits. Fresh ordinary CI on e740d1c2(https:github.comtscircuittscircuit-autorouteractionsruns36314621856) passed all nine test shards, verifying all five snapshot updates. Build, type checking, formatting checks, added-code checks, and Vercel checks also passed. Known outcome regression outside the benchmark datasets: bugreport107-board-1726 changes from 96 to 97 relaxed DRC issues in the received CI snapshot. Updating its expected image records this result; it does not fix or dismiss that extra issue. The other three tests with zero-DRC assertions (bugreports 88 and 94, and SRJ18 sample 3) still passed those assertions. Bugreport 96s test checks routingreplacement behavior, not zero DRCs.  Full-board parity limitation In manual full-board run 36231902500(https:github.comtscircuittscircuit-autorouteractionsruns36231902500), the force-improvement stage hashes matched across Linux and macOS. Both final boards had 322 traces, 290 vias and 108 relaxed DRC issues, but the final route hashes still differed. Complete-board parity is not yet established. The previous snapshot-update head e740d1c2 passed ordinary CI. Fresh CI is required for the final merged-fix dependency pin. Green checks do not mean zero regressions, complete-board parity, zero DRCs, or fabrication readiness. Further stage divergence and the extra board-1726 DRC remain visible for review. |
| [#23](https://github.com/tscircuit/high-density-repair01/pull/23) | 🐌 Tiny | Summary Repro only: the same real Game Boy routing node produces different geometry on macOS ARM64 and Linux x64, with Bun 1.3.8 on both. No solver changes or mocked math. The fixture is the unchanged cmn_170 input captured at highDensityForceImproveSolver from the full Game Boy Pipeline 9 solve (Core 0.0.1989, autorouter bc998052). The full SRJ SHA-256 was 89cfabf40f44453f4894a67475c4a5563e171d629f52bd42a8724bb15185ace4. All 795 loaded source files and the preceding phase inputs matched across platforms.  Reproduction One test runs the real solver twice, verifies within-process repeatability, and exports its untouched output. A manual-only LinuxmacOS workflow runs that test with the same Bun version and compares the resulting JSON files exactly. It is not triggered by pull requests or pushes. The workflow uses a normal comparison: it is red on this unfixed repro and green once the stacked fix makes the outputs identical. There is no inverted result, continue-on-error, or hard-coded platform geometryDRC count. Missing artifacts and execution errors also fail normally. The first differing full-run node is cmn_170, trace source_trace_259: the Y coordinate is 15.94692277523442 on Linux and 15.946922775234418 on Mac. Inside the affected node, identical arguments to Math.hypot(-0.12499999999999645, 0.34999999999999787) return 0.37165171868295943 and 0.3716517186829595, respectively, in HighDensityForceImproveSolver.tss point-to-segment clearance calculation. Matched-version diagnostic evidence(https:github.comtscircuittscircuit-autorouteractionsruns36230960938). This is a numerical determinism repro. The difference is too small to meaningfully show in a PCB image. It does not yet prove that this first discrepancy alone explains the full boards final DRC-count mismatch.  Validation bun test testsgameboy-force-improve-platform.test.ts --timeout 9999999 passes locally. Ordinary PR tests remain automatic. Run Force improvement platform parity manually on the repro branch when needed; its known mismatch should produce a red workflow. Run the same unchanged comparison on the stacked fix branch to verify it passes.  Manual repro check Manual repro check results(https:github.comtscircuithigh-density-repair01actionsruns36233058567)  run on this PRs head commit 8a0023260eae2d71b620a0e6312af010df3324fb. Both routing jobs passed; the LinuxmacOS geometry comparison failed as expected, reproducing the coordinate mismatch. |

</details>

### [KrishnaX12](https://github.com/KrishnaX12)

| PRs # | Impact | Rating | Description |
|------|--------|--------|-------------|
| [#103](https://github.com/tscircuit/copper-pour-solver/pull/103) | 🐙 Minor | ⭐⭐ | Fixes the bounds calculation for copper pours on shifted boards in the direct converter, ensuring proper coverage of the board area. |
| [#100](https://github.com/tscircuit/copper-pour-solver/pull/100) | 🐙 Minor | ⭐⭐ | Fixes the omission of clearance for rectangular non-plated holes in copper-pour calculations, ensuring they receive the correct clearance similar to round holes. |
| [#223](https://github.com/tscircuit/altiumts/pull/223) | 🐙 Minor | ⭐⭐ | Fixes rendering issue where the CH582 boards top-layer copper antenna is hidden by a polygon cutout, ensuring accurate visual representation in the converter. |
| [#93](https://github.com/tscircuit/altium-to-circuit-json/pull/93) | 🐙 Minor | ⭐⭐ | Matches Altiums default PCB text justification when JUSTIFICATION is omitted, using Altium justification 3 (bottom_left) instead of centering the text, while preserving existing explicit numeric and named justification handling. |
| [#91](https://github.com/tscircuit/altium-to-circuit-json/pull/91) | 🐙 Minor | ⭐⭐ | Skip component silkscreen designators and comments when Altium disables NAMEON or COMMENTON, using the text records DESIGNATORCOMMENT flags to keep ordinary labels and visible text unchanged. |

<details>
<summary>🐌 Tiny Contributions (4)</summary>

| PR # | Impact | Description |
|------|--------|-------------|
| [#102](https://github.com/tscircuit/copper-pour-solver/pull/102) | 🐌 Tiny | Reproduces a bug where the copper pour is incorrectly placed at the origin for shifted boards in the direct converter, without making any production fixes or dependency changes. |
| [#99](https://github.com/tscircuit/copper-pour-solver/pull/99) | 🐌 Tiny | Reproduces a bug where non-plated rectangular holes are omitted from copper-pour clearance in the copper-pour solver. |
| [#222](https://github.com/tscircuit/altiumts/pull/222) | 🐌 Tiny | Reproduces the issue of the CH582 copper antenna being hidden by a polygon cutout in altiumts without changing the rendering. |
| [#95](https://github.com/tscircuit/altium-to-circuit-json/pull/95) | 🐌 Tiny | Reproduces the issue where linked polygon cutouts on a polygon without a poured copper region suppress the polygon entirely, leading to missing copper geometry in the conversion process. |

</details>

### [anil08607](https://github.com/anil08607)

| PRs # | Impact | Rating | Description |
|------|--------|--------|-------------|
| [#101](https://github.com/tscircuit/altium-to-circuit-json/pull/101) | 🐳 Major | ⭐⭐⭐ | Fixes incorrect parsing of schematic coordinates leading to rendering issues and electrical disconnections in schematic designs. |
| [#100](https://github.com/tscircuit/altium-to-circuit-json/pull/100) | 🐳 Major | ⭐⭐⭐ | Maps copper layers from the physical board stack, ensuring distinct signal and plane IDs, and rejecting invalid configurations. |
| [#214](https://github.com/tscircuit/altiumts/pull/214) | 🐙 Minor | ⭐⭐ | Share a signed fixed-point reader for schematic coordinates, ensuring accurate parsing of integer and fractional values for schematic positions and vertices. |
| [#113](https://github.com/tscircuit/altium-to-circuit-json/pull/113) | 🐙 Minor | ⭐⭐ | Fixes deduplication of copper polygons with explicit IDs to prevent suppression of unrelated polygons and ensure correct rendering of PCB copper pours. |
| [#102](https://github.com/tscircuit/altium-to-circuit-json/pull/102) | 🐙 Minor | ⭐⭐ | Updates the coordinate API to use the merged altiumts shared-coordinate reader with a two-argument format, pins the upstream merge commit, and refreshes TI comparison snapshots for SVG rendering fixes. |
| [#97](https://github.com/tscircuit/altium-to-circuit-json/pull/97) | 🐙 Minor | ⭐⭐ | Prevents completed converter stages from executing again, allowing converters to resume without duplicating netssheets or centering the schematic again. |
| [#96](https://github.com/tscircuit/altium-to-circuit-json/pull/96) | 🐙 Minor | ⭐⭐ | Removes duplicate hole-offset calculation in slotted through-hole pad conversion, ensuring identical output while improving efficiency. |

<details>
<summary>🐌 Tiny Contributions (2)</summary>

| PR # | Impact | Description |
|------|--------|-------------|
| [#212](https://github.com/tscircuit/altiumts/pull/212) | 🐌 Tiny | Excludes generic schematic text from being treated as electrical net identifiers, preventing incorrect merging of disconnected wires while preserving genuine connectivity. |
| [#99](https://github.com/tscircuit/altium-to-circuit-json/pull/99) | 🐌 Tiny | Restricts generic SchDoc text from being treated as electrical net labels, preventing unintended junctions and ensuring proper classification of electrical components. |

</details>

### [Devesh36](https://github.com/Devesh36)

| PRs # | Impact | Rating | Description |
|------|--------|--------|-------------|
| [#122](https://github.com/tscircuit/altium-to-circuit-json/pull/122) | 🐙 Minor | ⭐⭐ | Fixes the issue where mechanical-layer pads are incorrectly converted to PCB holes, ensuring only pads on mapped copper layers are processed as holes. |
| [#121](https://github.com/tscircuit/altium-to-circuit-json/pull/121) | 🐙 Minor | ⭐⭐ | Fixes regression where non-plated Altium slot holes were incorrectly rendered as circles instead of retaining their original slot geometry in Circuit JSON output. |
| [#120](https://github.com/tscircuit/altium-to-circuit-json/pull/120) | 🐙 Minor | ⭐⭐ | Fixes the conversion of non-plated Altium slots to ensure they are rendered as circular holes instead of losing their geometry during the conversion process. |

<details>
<summary>🐌 Tiny Contributions (1)</summary>

| PR # | Impact | Description |
|------|--------|-------------|
| [#123](https://github.com/tscircuit/altium-to-circuit-json/pull/123) | 🐌 Tiny | Reproduces a bug where an Altium keepout arc is incorrectly converted to a copper trace instead of a keepout element, ensuring the center remains clear of copper. |

</details>

## Repository Owners

| Repository | Codeowners |
|------------|------------|
| [builder](https://github.com/tscircuit/builder/blob/main/.github/CODEOWNERS) | [seveibar](https://github.com/seveibar)
| [pcb-viewer](https://github.com/tscircuit/pcb-viewer/blob/main/.github/CODEOWNERS) | [seveibar](https://github.com/seveibar), [ShiboSoftwareDev](https://github.com/ShiboSoftwareDev), [Abse2001](https://github.com/Abse2001)
| [footprints-old](https://github.com/tscircuit/footprints-old/blob/main/.github/CODEOWNERS) | [seveibar](https://github.com/seveibar)
| [footprinter](https://github.com/tscircuit/footprinter/blob/main/.github/CODEOWNERS) | [seveibar](https://github.com/seveibar), [techmannih](https://github.com/techmannih)
| [3d-viewer](https://github.com/tscircuit/3d-viewer/blob/main/.github/CODEOWNERS) | [ShiboSoftwareDev](https://github.com/ShiboSoftwareDev), [Abse2001](https://github.com/Abse2001)
| [winterspec](https://github.com/tscircuit/winterspec/blob/main/.github/CODEOWNERS) | [seveibar](https://github.com/seveibar), [ShiboSoftwareDev](https://github.com/ShiboSoftwareDev)
| [jscad-electronics](https://github.com/tscircuit/jscad-electronics/blob/main/.github/CODEOWNERS) | [seveibar](https://github.com/seveibar), [techmannih](https://github.com/techmannih), [ShiboSoftwareDev](https://github.com/ShiboSoftwareDev), [anas-sarkez](https://github.com/anas-sarkez)
| [circuit-to-svg](https://github.com/tscircuit/circuit-to-svg/blob/main/.github/CODEOWNERS) | [imrishabh18](https://github.com/imrishabh18)
| [schematic-symbols](https://github.com/tscircuit/schematic-symbols/blob/main/.github/CODEOWNERS) | [seveibar](https://github.com/seveibar), [imrishabh18](https://github.com/imrishabh18), [techmannih](https://github.com/techmannih)
| [circuit-json-to-gerber](https://github.com/tscircuit/circuit-json-to-gerber/blob/main/.github/CODEOWNERS) | [seveibar](https://github.com/seveibar), [ShiboSoftwareDev](https://github.com/ShiboSoftwareDev)
| [tscircuit.com](https://github.com/tscircuit/tscircuit.com/blob/main/.github/CODEOWNERS) | [seveibar](https://github.com/seveibar), [imrishabh18](https://github.com/imrishabh18)
| [issue-roulette](https://github.com/tscircuit/issue-roulette/blob/main/.github/CODEOWNERS) | [Anshgrover23](https://github.com/Anshgrover23)
| [schematic-corpus](https://github.com/tscircuit/schematic-corpus/blob/main/.github/CODEOWNERS) | [Abse2001](https://github.com/Abse2001)
| [copper-pour-solver](https://github.com/tscircuit/copper-pour-solver/blob/main/.github/CODEOWNERS) | [seveibar](https://github.com/seveibar), [ShiboSoftwareDev](https://github.com/ShiboSoftwareDev)
| [common](https://github.com/tscircuit/common/blob/main/.github/CODEOWNERS) | [seveibar](https://github.com/seveibar), [Abse2001](https://github.com/Abse2001)
| [circuit-to-canvas](https://github.com/tscircuit/circuit-to-canvas/blob/main/.github/CODEOWNERS) | [ShiboSoftwareDev](https://github.com/ShiboSoftwareDev), [Abse2001](https://github.com/Abse2001), [techmannih](https://github.com/techmannih)
| [circuit-json-to-lbrn](https://github.com/tscircuit/circuit-json-to-lbrn/blob/main/.github/CODEOWNERS) | [AnasSarkiz](https://github.com/AnasSarkiz)
| [pcbburn.com](https://github.com/tscircuit/pcbburn.com/blob/main/.github/CODEOWNERS) | [AnasSarkiz](https://github.com/AnasSarkiz)
| [high-density-repair03](https://github.com/tscircuit/high-density-repair03/blob/main/.github/CODEOWNERS) | [Abse2001](https://github.com/Abse2001)
| [fabrication-operator-ui](https://github.com/tscircuit/fabrication-operator-ui/blob/main/.github/CODEOWNERS) | [AnasSarkiz](https://github.com/AnasSarkiz)
| [layerweaver](https://github.com/tscircuit/layerweaver/blob/main/.github/CODEOWNERS) | [0hmx](https://github.com/0hmx)

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
|  | [copper-pour-solver](https://github.com/tscircuit/copper-pour-solver/blob/main/.github/CODEOWNERS) |
|  | [circuit-to-canvas](https://github.com/tscircuit/circuit-to-canvas/blob/main/.github/CODEOWNERS) |
| [Abse2001](https://github.com/Abse2001) | [pcb-viewer](https://github.com/tscircuit/pcb-viewer/blob/main/.github/CODEOWNERS) |
|  | [3d-viewer](https://github.com/tscircuit/3d-viewer/blob/main/.github/CODEOWNERS) |
|  | [schematic-corpus](https://github.com/tscircuit/schematic-corpus/blob/main/.github/CODEOWNERS) |
|  | [common](https://github.com/tscircuit/common/blob/main/.github/CODEOWNERS) |
|  | [circuit-to-canvas](https://github.com/tscircuit/circuit-to-canvas/blob/main/.github/CODEOWNERS) |
|  | [high-density-repair03](https://github.com/tscircuit/high-density-repair03/blob/main/.github/CODEOWNERS) |
| [techmannih](https://github.com/techmannih) | [footprinter](https://github.com/tscircuit/footprinter/blob/main/.github/CODEOWNERS) |
|  | [jscad-electronics](https://github.com/tscircuit/jscad-electronics/blob/main/.github/CODEOWNERS) |
|  | [schematic-symbols](https://github.com/tscircuit/schematic-symbols/blob/main/.github/CODEOWNERS) |
|  | [circuit-to-canvas](https://github.com/tscircuit/circuit-to-canvas/blob/main/.github/CODEOWNERS) |
| [anas-sarkez](https://github.com/anas-sarkez) | [jscad-electronics](https://github.com/tscircuit/jscad-electronics/blob/main/.github/CODEOWNERS) |
| [imrishabh18](https://github.com/imrishabh18) | [circuit-to-svg](https://github.com/tscircuit/circuit-to-svg/blob/main/.github/CODEOWNERS) |
|  | [schematic-symbols](https://github.com/tscircuit/schematic-symbols/blob/main/.github/CODEOWNERS) |
|  | [tscircuit.com](https://github.com/tscircuit/tscircuit.com/blob/main/.github/CODEOWNERS) |
| [Anshgrover23](https://github.com/Anshgrover23) | [issue-roulette](https://github.com/tscircuit/issue-roulette/blob/main/.github/CODEOWNERS) |
| [AnasSarkiz](https://github.com/AnasSarkiz) | [circuit-json-to-lbrn](https://github.com/tscircuit/circuit-json-to-lbrn/blob/main/.github/CODEOWNERS) |
|  | [pcbburn.com](https://github.com/tscircuit/pcbburn.com/blob/main/.github/CODEOWNERS) |
|  | [fabrication-operator-ui](https://github.com/tscircuit/fabrication-operator-ui/blob/main/.github/CODEOWNERS) |
| [0hmx](https://github.com/0hmx) | [layerweaver](https://github.com/tscircuit/layerweaver/blob/main/.github/CODEOWNERS) |



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
