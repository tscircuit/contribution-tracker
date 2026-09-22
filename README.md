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

# Contribution Overview 2026-09-15

The current week is shown below. There are 3 major sections:

- [Contributor Overview](#contributor-overview)
- [PRs by Repository](#prs-by-repository)
- [PRs by Contributor](#changes-by-contributor)
- [Scoring & Sponsorship Details](/docs/sponsorship-calculation-explanation.md)

## PRs by Repository

```mermaid
pie
    "tscircuit/circuit-json" : 11
    "tscircuit/circuit-json-util" : 3
    "tscircuit/core" : 51
    "tscircuit/checks" : 15
    "tscircuit/cli" : 79
    "tscircuit/tscircuit-autorouter" : 30
    "tscircuit/tisearch.tscircuit.com" : 5
    "tscircuit/trace-simplification-solver" : 1
    "tscircuit/pcb-viewer" : 24
    "tscircuit/circuit-json-schematic-placement-analysis" : 13
    "tscircuit/schematic-viewer" : 1
    "tscircuit/tscircuit" : 132
    "tscircuit/circuit-to-svg" : 8
    "tscircuit/schematic-trace-solver" : 19
    "tscircuit/ti" : 3
    "tscircuit/fabricator-drc" : 1
    "tscircuit/props" : 4
    "tscircuit/3d-viewer" : 5
    "tscircuit/tscircuit.com" : 66
    "tscircuit/docs" : 5
    "tscircuit/high-density-repair02" : 1
    "tscircuit/check-shorts" : 1
    "tscircuit/length-matching-solver" : 2
    "tscircuit/modelprinter" : 2
    "tscircuit/standard-jst-programmer" : 1
    "tscircuit/jscad-electronics" : 2
    "tscircuit/circuit-json-to-gltf" : 4
    "tscircuit/tiny-hypergraph" : 1
    "tscircuit/schematic-symbols" : 1
    "tscircuit/skill" : 1
    "tscircuit/circuit-json-to-footprinter" : 4
    "tscircuit/circuit-json-webgpu" : 2
    "tscircuit/eval" : 62
    "tscircuit/runframe" : 100
    "tscircuit/test-github-automerge" : 4
    "tscircuit/circuit-json-to-kicad" : 13
    "tscircuit/circuit-to-canvas" : 4
    "tscircuit/altiumts" : 9
    "tscircuit/circuit-json-to-flattenjs" : 1
    "tscircuit/kicad-to-circuit-json" : 6
    "tscircuit/altium-to-circuit-json" : 20
    "tscircuit/circuit-json-to-altium" : 7
    "tscircuit/easyeda-converter" : 5
    "tscircuit/footprinter" : 1
    "tscircuit/circuit-json-to-gerber" : 2
    "tscircuit/matchpack" : 2
    "tscircuit/copper-pour-solver" : 2
    "tscircuit/dataset-srj18" : 1
    "tscircuit/circuit-json-to-connectivity-map" : 1
    "tscircuit/high-density-repair03" : 1
    "tscircuit/high-density-a01" : 1
```

## Contributor Overview

| Contributor | 🐳 Major | 🐙 Minor | 🐌 Tiny | Score | ⭐ |
|-------------|---------|---------|---------|-------|-----|
| [seveibar](#seveibar) | 41 | 18 | 26 | 213.5 | 👑👑👑 |
| [imrishabh18](#imrishabh18) | 14 | 5 | 13 | 79 | ⭐⭐⭐ |
| [ShiboSoftwareDev](#ShiboSoftwareDev) | 6 | 12 | 3 | 66 | ⭐⭐⭐ |
| [techmannih](#techmannih) | 7 | 10 | 10 | 59 | ⭐⭐⭐ |
| [mohan-bee](#mohan-bee) | 4 | 8 | 12 | 52 | ⭐⭐⭐ |
| [hrithik18k](#hrithik18k) | 2 | 6 | 4 | 23.5 | ⭐⭐ |
| [rushabhcodes](#rushabhcodes) | 1 | 6 | 5 | 22 | ⭐⭐ |
| [AnasSarkiz](#AnasSarkiz) | 3 | 0 | 0 | 20 | ⭐⭐ |
| [Abse2001](#Abse2001) | 2 | 0 | 3 | 18 | ⭐⭐ |
| [tscircuitbot](#tscircuitbot) | 0 | 0 | 490 | 16 | ⭐⭐ |
| [MustafaMulla29](#MustafaMulla29) | 3 | 0 | 3 | 16 | ⭐⭐ |
| [GokulPandi-M](#GokulPandi-M) | 0 | 3 | 6 | 12 | ⭐⭐ |
| [Devesh36](#Devesh36) | 0 | 4 | 2 | 11 | ⭐⭐ |
| [anil08607](#anil08607) | 1 | 1 | 1 | 7 | ⭐ |
| [KrishnaX12](#KrishnaX12) | 0 | 2 | 1 | 5 | ⭐ |
| [addibble](#addibble) | 0 | 1 | 1 | 3 |  |

## Staff Pass Ratio (SPR)

| Contributor | Reviewed PRs | Rejections | Approvals | SPR |
|-------------|--------------|------------|-----------|-----|
| [techmannih](#techmannih) | 10 | 8 | 10 | 20.0% |
| [ShiboSoftwareDev](#ShiboSoftwareDev) | 6 | 0 | 6 | 100.0% |
| [MustafaMulla29](#MustafaMulla29) | 5 | 0 | 5 | 100.0% |
| [imrishabh18](#imrishabh18) | 4 | 1 | 3 | 75.0% |
| [rushabhcodes](#rushabhcodes) | 4 | 2 | 2 | 50.0% |
| [Abse2001](#Abse2001) | 3 | 0 | 3 | 100.0% |
| [addibble](#addibble) | 3 | 2 | 1 | 33.3% |
| [AnasSarkiz](#AnasSarkiz) | 2 | 1 | 2 | 50.0% |
| [hrithik18k](#hrithik18k) | 2 | 0 | 2 | 100.0% |
| [mohan-bee](#mohan-bee) | 2 | 0 | 2 | 100.0% |
| [anil08607](#anil08607) | 1 | 1 | 0 | 0.0% |

<details>
<summary>techmannih SPR PRs (10)</summary>

- [#1010](https://github.com/tscircuit/pcb-viewer/pull/1010) fix: respect board via tenting and preserve board context in PCB viewer
- [#996](https://github.com/tscircuit/3d-viewer/pull/996) Render standalone and trace-route vias with board tenting defaults
- [#3991](https://github.com/tscircuit/core/pull/3991) fix: preserve inner-layer via route net identities
- [#3926](https://github.com/tscircuit/core/pull/3926) Support board default via tenting with per-via overrides
- [#766](https://github.com/tscircuit/circuit-to-svg/pull/766) Clip via tenting at exposed pad openings
- [#768](https://github.com/tscircuit/circuit-to-svg/pull/768) Keep silkscreen visible over tented vias
- [#752](https://github.com/tscircuit/circuit-to-svg/pull/752) Resolve board defaults for via tenting
- [#219](https://github.com/tscircuit/circuit-json-to-gltf/pull/219) Update SVG rendering for via tenting in GLB exports
- [#291](https://github.com/tscircuit/circuit-to-canvas/pull/291) Keep pad openings exposed over tented vias
- [#288](https://github.com/tscircuit/circuit-to-canvas/pull/288) Render trace vias and resolve board tenting defaults

</details>

<details>
<summary>ShiboSoftwareDev SPR PRs (6)</summary>

- [#3987](https://github.com/tscircuit/core/pull/3987) Update partial trace DRC expectations
- [#3967](https://github.com/tscircuit/core/pull/3967) Center routing directives on padded PCB content
- [#50](https://github.com/tscircuit/circuit-json-to-connectivity-map/pull/50) Connect partial PCB traces to available endpoints
- [#2604](https://github.com/tscircuit/tscircuit-autorouter/pull/2604) Ignore zero-length preloaded wire spans in Pipeline9
- [#2598](https://github.com/tscircuit/tscircuit-autorouter/pull/2598) Keep zero-length fixed spans in Pipeline9 regional sections
- [#2581](https://github.com/tscircuit/tscircuit-autorouter/pull/2581) Resolve canonical roots in Pipeline9 via validation

</details>

<details>
<summary>MustafaMulla29 SPR PRs (5)</summary>

- [#1238](https://github.com/tscircuit/schematic-trace-solver/pull/1238) Recheck power and ground labels after rail alignment
- [#1236](https://github.com/tscircuit/schematic-trace-solver/pull/1236) Keep rail labels on moved trace corners
- [#1233](https://github.com/tscircuit/schematic-trace-solver/pull/1233) Fix RP2040 gamepad rail alignment regression
- [#97](https://github.com/tscircuit/circuit-json-schematic-placement-analysis/pull/97) feat: detect separated USB series resistor pairs
- [#83](https://github.com/tscircuit/circuit-json-schematic-placement-analysis/pull/83) feat: detect misplaced low-side NPN load drivers

</details>

<details>
<summary>imrishabh18 SPR PRs (4)</summary>

- [#801](https://github.com/tscircuit/circuit-json/pull/801) Add optional pcb_port_ids to pcb_via
- [#2676](https://github.com/tscircuit/tscircuit-autorouter/pull/2676) update tiny-hypergraph to avoid disconnected blocker searches
- [#2673](https://github.com/tscircuit/tscircuit-autorouter/pull/2673) Speed up trace simplification with geometry-first filtering
- [#209](https://github.com/tscircuit/tiny-hypergraph/pull/209) fix: precheck reachability before selective blocker search

</details>

<details>
<summary>rushabhcodes SPR PRs (4)</summary>

- [#379](https://github.com/tscircuit/jscad-electronics/pull/379) Add RHB32 VQFN footprint model
- [#296](https://github.com/tscircuit/checks/pull/296) Fix do-not-place mixed courtyard overlaps
- [#135](https://github.com/tscircuit/calculate-packing/pull/135) Honor maximum trace lengths during PCB packing
- [#70](https://github.com/tscircuit/altium-to-circuit-json/pull/70) Fix distorted SVG comparison snapshots

</details>

<details>
<summary>Abse2001 SPR PRs (3)</summary>

- [#2630](https://github.com/tscircuit/tscircuit-autorouter/pull/2630) Improve trace widths after hypergraph pathing
- [#2664](https://github.com/tscircuit/tscircuit-autorouter/pull/2664) Detect through-hole via collisions in reference DRC
- [#2609](https://github.com/tscircuit/tscircuit-autorouter/pull/2609) Detect through-hole via collisions in reference DRC

</details>

<details>
<summary>addibble SPR PRs (3)</summary>

- [#213](https://github.com/tscircuit/circuit-json-to-gltf/pull/213) Accept binary GLB content through model_gltf_url
- [#214](https://github.com/tscircuit/circuit-json-to-gltf/pull/214) Fix generated PCB placement on the board plane
- [#192](https://github.com/tscircuit/circuit-json-to-gltf/pull/192) test: cover fixed child CAD rotation and size in GLB snapshots

</details>

<details>
<summary>AnasSarkiz SPR PRs (2)</summary>

- [#2631](https://github.com/tscircuit/tscircuit-autorouter/pull/2631) Accelerate high-density routing with cached via occupants
- [#121](https://github.com/tscircuit/high-density-a01/pull/121) Cache via occupants within each A01 and A03 connection search

</details>

<details>
<summary>hrithik18k SPR PRs (2)</summary>

- [#1209](https://github.com/tscircuit/schematic-trace-solver/pull/1209) Fix overlapping GND label for shared pin branch
- [#1195](https://github.com/tscircuit/schematic-trace-solver/pull/1195) Fix net-label branch origin at component edge

</details>

<details>
<summary>mohan-bee SPR PRs (2)</summary>

- [#4029](https://github.com/tscircuit/core/pull/4029) honor net nominal trace width during pcb routing
- [#1226](https://github.com/tscircuit/schematic-trace-solver/pull/1226) remove unnecessary detours around net label connectors

</details>

<details>
<summary>anil08607 SPR PRs (1)</summary>

- [#809](https://github.com/tscircuit/circuit-json/pull/809) Add standalone PCB solder-mask openings

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
| [0hmX](#0hmX) | 0 | 0 | 0 | 5 | 0 | 7 | 0 | 0 |
| [0monish](#0monish) | 0 | 0 | 0 | 0 | 0 | 1 | 0 | 0 |
| [Abse2001](#Abse2001) | 13 | 6 | 0 | 7 | 0 | 15 | 5 | 0 |
| [addibble](#addibble) | 8 | 2 | 2 | 0 | 0 | 15 | 2 | 0 |
| [AnasSarkiz](#AnasSarkiz) | 4 | 3 | 0 | 8 | 0 | 15 | 3 | 0 |
| [anil08607](#anil08607) | 7 | 5 | 1 | 0 | 0 | 10 | 3 | 0 |
| [anupamme](#anupamme) | 0 | 0 | 0 | 0 | 0 | 1 | 0 | 0 |
| [ArtyormSatori](#ArtyormSatori) | 0 | 0 | 0 | 0 | 0 | 1 | 0 | 0 |
| [astinds](#astinds) | 0 | 0 | 0 | 0 | 0 | 4 | 0 | 0 |
| [billythompsons](#billythompsons) | 0 | 0 | 0 | 0 | 0 | 2 | 0 | 0 |
| [Cid-oe](#Cid-oe) | 0 | 0 | 0 | 0 | 0 | 1 | 0 | 0 |
| [dball1126](#dball1126) | 0 | 0 | 0 | 0 | 0 | 1 | 0 | 0 |
| [devamkakoty](#devamkakoty) | 0 | 0 | 0 | 0 | 0 | 2 | 0 | 0 |
| [Devesh36](#Devesh36) | 8 | 7 | 0 | 2 | 0 | 9 | 6 | 0 |
| [diogo2806](#diogo2806) | 0 | 0 | 0 | 0 | 0 | 1 | 0 | 0 |
| [Furox-Art](#Furox-Art) | 0 | 0 | 0 | 0 | 0 | 8 | 0 | 0 |
| [furuchanchan](#furuchanchan) | 0 | 0 | 0 | 0 | 0 | 28 | 0 | 0 |
| [gaboolthewild](#gaboolthewild) | 0 | 0 | 0 | 0 | 0 | 1 | 0 | 0 |
| [GokulPandi-M](#GokulPandi-M) | 18 | 13 | 2 | 0 | 0 | 14 | 9 | 0 |
| [halc8312](#halc8312) | 8 | 0 | 0 | 0 | 0 | 8 | 0 | 0 |
| [hrithik18k](#hrithik18k) | 22 | 15 | 2 | 0 | 0 | 15 | 12 | 0 |
| [Ialyahya96](#Ialyahya96) | 0 | 0 | 0 | 0 | 0 | 6 | 0 | 0 |
| [imrishabh18](#imrishabh18) | 7 | 3 | 1 | 24 | 7 | 39 | 32 | 0 |
| [iprasen](#iprasen) | 0 | 0 | 0 | 0 | 0 | 11 | 0 | 0 |
| [Itachi3355](#Itachi3355) | 0 | 0 | 0 | 0 | 0 | 1 | 0 | 0 |
| [ivan-mihalic](#ivan-mihalic) | 0 | 0 | 0 | 0 | 0 | 1 | 0 | 0 |
| [jack297b-jpg](#jack297b-jpg) | 0 | 0 | 0 | 0 | 0 | 6 | 0 | 0 |
| [jkorrr](#jkorrr) | 0 | 0 | 0 | 0 | 0 | 5 | 0 | 0 |
| [JosephTJennings](#JosephTJennings) | 0 | 0 | 0 | 0 | 0 | 1 | 0 | 0 |
| [KrishnaX12](#KrishnaX12) | 9 | 4 | 0 | 0 | 0 | 22 | 3 | 0 |
| [maci0](#maci0) | 0 | 0 | 0 | 0 | 0 | 2 | 0 | 0 |
| [marcos452652258-gif](#marcos452652258-gif) | 0 | 0 | 0 | 0 | 0 | 8 | 0 | 0 |
| [meanusarcanus](#meanusarcanus) | 0 | 0 | 0 | 0 | 0 | 14 | 0 | 0 |
| [mohan-bee](#mohan-bee) | 16 | 13 | 1 | 8 | 0 | 37 | 24 | 0 |
| [MustafaMulla29](#MustafaMulla29) | 10 | 6 | 1 | 3 | 1 | 18 | 6 | 0 |
| [MyDude92](#MyDude92) | 0 | 0 | 0 | 0 | 0 | 14 | 0 | 0 |
| [Nexlu1](#Nexlu1) | 0 | 0 | 0 | 0 | 0 | 1 | 0 | 0 |
| [petermm](#petermm) | 6 | 0 | 1 | 0 | 0 | 2 | 0 | 0 |
| [pifuyuini](#pifuyuini) | 0 | 0 | 0 | 0 | 0 | 1 | 0 | 0 |
| [PINYOPATTANAWASANPORN](#PINYOPATTANAWASANPORN) | 0 | 0 | 0 | 0 | 0 | 2 | 0 | 0 |
| [rushabhcodes](#rushabhcodes) | 58 | 10 | 2 | 9 | 0 | 30 | 12 | 0 |
| [saiyer123](#saiyer123) | 0 | 0 | 0 | 0 | 0 | 3 | 0 | 0 |
| [seveibar](#seveibar) | 32 | 3 | 0 | 40 | 8 | 122 | 89 | 0 |
| [ShiboSoftwareDev](#ShiboSoftwareDev) | 25 | 22 | 0 | 24 | 0 | 70 | 21 | 0 |
| [singhharsh1708](#singhharsh1708) | 0 | 0 | 0 | 0 | 0 | 3 | 0 | 0 |
| [stffinfcti](#stffinfcti) | 0 | 0 | 0 | 0 | 0 | 1 | 0 | 0 |
| [techmannih](#techmannih) | 30 | 23 | 3 | 5 | 0 | 38 | 27 | 0 |
| [themaksat](#themaksat) | 0 | 0 | 0 | 0 | 0 | 2 | 0 | 0 |
| [TonF1917](#TonF1917) | 0 | 0 | 0 | 0 | 0 | 1 | 0 | 0 |
| [tscircuitbot](#tscircuitbot) | 0 | 0 | 0 | 0 | 0 | 656 | 490 | 0 |
| [VykosMolt](#VykosMolt) | 0 | 0 | 0 | 0 | 0 | 2 | 0 | 0 |
| [yanyishuai](#yanyishuai) | 0 | 0 | 0 | 0 | 0 | 1 | 0 | 0 |

## Changes by Repository

### [tscircuit/circuit-json](https://github.com/tscircuit/circuit-json)

| PR # | Impact | Rating | Contributor | Description |
|------|--------|--------|-------------|-------------|
| [#801](https://github.com/tscircuit/circuit-json/pull/801) | 🐳 Major | ⭐⭐⭐ | imrishabh18 | Adds optional pcb_port_ids to the PcbVia interface and Zod schema, allowing for explicit reference to PCB ports associated with a via. |
| [#811](https://github.com/tscircuit/circuit-json/pull/811) | 🐳 Major | ⭐⭐⭐ | seveibar | Makes cad_component.pcb_component_id optional to allow CAD geometry representation without a PCB component. |
| [#803](https://github.com/tscircuit/circuit-json/pull/803) | 🐳 Major | ⭐⭐⭐ | seveibar | Proposes the Circuit JSON contract for advisory PCB keepouts, allowing routing and copper placement to cross certain keepout regions while reporting overlaps as warnings instead of errors. |
| [#798](https://github.com/tscircuit/circuit-json/pull/798) | 🐳 Major | ⭐⭐⭐ | seveibar | Add schemas for source bus length-matching requirements and routed length violations as dedicated errors in Circuit JSON. |
| [#800](https://github.com/tscircuit/circuit-json/pull/800) | 🐙 Minor | ⭐⭐ | seveibar | Adds optional fields for topmost and bottommost drill layers, and through-hole status to the pcb_via schema and TypeScript interface, while maintaining compatibility with deprecated fields. |
| [#805](https://github.com/tscircuit/circuit-json/pull/805) | 🐙 Minor | ⭐⭐ | seveibar | Adds optional allow_traces and allow_placements booleans to all three keepout shapes, allowing for trace crossings and component placements without keepout diagnostics while preserving copper pour exclusions. |

<details>
<summary>🐌 Tiny Contributions (5)</summary>

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#812](https://github.com/tscircuit/circuit-json/pull/812) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#810](https://github.com/tscircuit/circuit-json/pull/810) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#804](https://github.com/tscircuit/circuit-json/pull/804) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#802](https://github.com/tscircuit/circuit-json/pull/802) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#799](https://github.com/tscircuit/circuit-json/pull/799) | 🐌 Tiny | tscircuitbot | Automated package update |

</details>

### [tscircuit/circuit-json-util](https://github.com/tscircuit/circuit-json-util)

| PR # | Impact | Rating | Contributor | Description |
|------|--------|--------|-------------|-------------|
| [#190](https://github.com/tscircuit/circuit-json-util/pull/190) | 🐳 Major | ⭐⭐⭐ | imrishabh18 | Extracts shared polygon helpers for copper geometry from core to circuit-json-util, allowing both core and checks to utilize the same functionality without dependency cycles. |
| [#196](https://github.com/tscircuit/circuit-json-util/pull/196) | 🐳 Major | ⭐⭐⭐ | seveibar | Completes root operations for cjuIndexed, ensuring proper insertion and isolation of list results to prevent corruption of subsequent queries. |
| [#197](https://github.com/tscircuit/circuit-json-util/pull/197) | 🐳 Major | ⭐⭐⭐ | techmannih | Adds a shared board ownership resolver for PCB renderers to deduplicate vias and choose drillpad diameters based on each vias owning board, allowing Canvas and 3D viewer to use the same resolver without a canvas context. |

### [tscircuit/core](https://github.com/tscircuit/core)

| PR # | Impact | Rating | Contributor | Description |
|------|--------|--------|-------------|-------------|
| [#4001](https://github.com/tscircuit/core/pull/4001) | 🐳 Major | ⭐⭐⭐ | imrishabh18 | Bumps tscircuitchecks to version 0.0.199 to enhance copper-pour connectivity checks by utilizing explicit pcb_via.pcb_port_ids, and adds regression tests for specific connectivity scenarios. |
| [#4000](https://github.com/tscircuit/core/pull/4000) | 🐳 Major | ⭐⭐⭐ | imrishabh18 | Manual vias now emit pcb_port_ids identifying their rendered layer ports, providing explicit association between a traces via endpoint and the physical barrel, without inferring port ownership from coordinates. |
| [#4061](https://github.com/tscircuit/core/pull/4061) | 🐳 Major | ⭐⭐⭐ | seveibar | Reduces rendering time by caching empty selector results and footprint-child lookups, skipping unnecessary calculations, and using indexed databases for improved performance. |
| [#4060](https://github.com/tscircuit/core/pull/4060) | 🐳 Major | ⭐⭐⭐ | seveibar | Add core regressions for through-via inner-layer connectivity and update tscircuitchecks to include a merged viapour connectivity fix, ensuring accurate diagnostics for missing connections. |
| [#4047](https://github.com/tscircuit/core/pull/4047) | 🐳 Major | ⭐⭐⭐ | seveibar | Implements assembly.subassembly and assembly.cadassembly as aliases for the same mechanical container, supporting name, displayName, CAD models, and nested children. |
| [#4053](https://github.com/tscircuit/core/pull/4053) | 🐳 Major | ⭐⭐⭐ | seveibar | Collects jumper pad bounds once per trace-insertion batch to optimize the discovery process, significantly reducing the time taken for jumper-pad discovery in routing operations. |
| [#4036](https://github.com/tscircuit/core/pull/4036) | 🐳 Major | ⭐⭐⭐ | seveibar | Exports differential-pair membership to Circuit JSON for bus X-Ray inspection, enabling PCB viewers to access complete pair information. |
| [#4015](https://github.com/tscircuit/core/pull/4015) | 🐳 Major | ⭐⭐⭐ | seveibar | Updates tscircuitcapacity-autorouter from 0.0.900 to 0.0.913 and refreshes 74 PCB and routing-phase snapshots for the changed routes, including breakout routing, imported boards, USBHDMI, and implicit-pour stitching. |
| [#4014](https://github.com/tscircuit/core/pull/4014) | 🐳 Major | ⭐⭐⭐ | seveibar | Implements keepout warningOnly  across cores PCB rendering, routing, import, and copper-pour generation, allowing advisory keepouts to emit warnings without blocking autorouting. |
| [#4013](https://github.com/tscircuit/core/pull/4013) | 🐳 Major | ⭐⭐⭐ | seveibar | Fixes autorouting failure for traces connected through named nets by resolving bus members connections accurately and supporting named nets without merging distinct branches. |
| [#3992](https://github.com/tscircuit/core/pull/3992) | 🐳 Major | ⭐⭐⭐ | seveibar | Emit source_bus records with resolved trace IDs, max_length_skew, name, and subcircuit ID to ensure downstream checks can enforce bus length-skew requirements in Circuit JSON. |
| [#4005](https://github.com/tscircuit/core/pull/4005) | 🐳 Major | ⭐⭐⭐ | rushabhcodes | Preserves plated holes and vias as per-pad obstacles on every copper layer they span, ensuring proper PCB packing without affecting opposite-side SMT body stacking behavior. |
| [#4029](https://github.com/tscircuit/core/pull/4029) | 🐳 Major | ⭐⭐⭐ | mohan-bee | Honors net-level nominal trace width during PCB routing instead of defaulting to the board minimum, ensuring accurate routing widths based on specified net requirements. |
| [#3965](https://github.com/tscircuit/core/pull/3965) | 🐳 Major | ⭐⭐⭐ | ShiboSoftwareDev | The exact 96-component Allwinner T113-S3 Linux board places every fanout component correctly, but Core stores each auto-sized routing group at its authored pcbXpcbY anchor instead of the center of its padded content. The mismatch produces a false REG18USB overlap and gives later fanout solvers boxes that do not enclose their components. This reproduction keeps the original TSX, supplier Circuit JSON, four copper layers, and default Pipeline9 configuration. It contains no manual routes, vias, breakout points, or route hints. The test calls circuit.render() once so it captures the exact placement and group-bounds failure before downstream autorouting starts; it asserts the incorrect group centers and false placement error on current main. t113-linux-routing-group-bounds-pcb.snap.svg is rendered by circuit-to-svg from that live Circuit JSON with native PCB-group overlays enabled. The stacked winding reproduction and implementation fix update this same real board state, so the Files tab exposes the geometry change directly. Validation: bun test --timeout 60000 testsreprost113-linux-routing-group-bounds.test.tsx  pass in about 6 seconds, 8 assertions SVG contains all 96 real board components and the native PCB-group overlays Biome check on the test and exact TSX fixture git diff --check |
| [#3961](https://github.com/tscircuit/core/pull/3961) | 🐙 Minor | ⭐⭐ | imrishabh18 | Enables part orientation analysis by default, allowing for better handling of pin-1 orientation metadata in circuit JSON exports. |
| [#3983](https://github.com/tscircuit/core/pull/3983) | 🐙 Minor | ⭐⭐ | imrishabh18 | Fixes false disconnection reports for plated GND contacts joined by a bottom copper pour when no conventional PCB tracks are present. |
| [#4052](https://github.com/tscircuit/core/pull/4052) | 🐙 Minor | ⭐⭐ | seveibar | Fixes incorrect polarity mapping in schematic symbols by prioritizing label matching over pin numbers. |
| [#4038](https://github.com/tscircuit/core/pull/4038) | 🐙 Minor | ⭐⭐ | seveibar | Adds assembly.screen so a display can attach to a PCB connector through connectsTo, without generating and importing a combined connectordisplay GLB. |
| [#4017](https://github.com/tscircuit/core/pull/4017) | 🐙 Minor | ⭐⭐ | seveibar | Implements keepout allowTraces  and keepout allowPlacements  emission and import, allowing independent routing and placement while copper pours avoid both. |
| [#4011](https://github.com/tscircuit/core/pull/4011) | 🐙 Minor | ⭐⭐ | seveibar | Integrates routed trace and bus length DRC checks by updating the checks library and implementing new error handling for trace lengths and bus skew violations. |
| [#3926](https://github.com/tscircuit/core/pull/3926) | 🐙 Minor | ⭐⭐ | techmannih | Adds support for board default via tenting with per-via overrides, allowing vias to inherit board settings unless explicitly overridden, and updates related tests and dependencies. |
| [#4003](https://github.com/tscircuit/core/pull/4003) | 🐙 Minor | ⭐⭐ | rushabhcodes | Reproduces the placement failure blocking SparkFun-Electret-Microphone-Breakout by demonstrating that opposite-layer component collapsing removes plated-hole copper from packing obstacles. |
| [#4028](https://github.com/tscircuit/core/pull/4028) | 🐙 Minor | ⭐⭐ | mohan-bee | Reproduces a bug where a net requesting a specific trace width is ignored during PCB routing, ensuring the request is preserved in the source net and routing input. |
| [#3975](https://github.com/tscircuit/core/pull/3975) | 🐙 Minor | ⭐⭐ | hrithik18k | Summary adds the complete hrithik18kair-mouse(https:tscircuit.comhrithik18kair-mousefiles) board source as a core repro fixture, including all component imports and all six schematic sections captures the full 1200600 schematic sheet, using the supplied air-mouse.svg as the layout reference preserves the currently published solver (0.0.198) output so the ICM-20948 pins 911 GND-routing bug is visible in the baseline repro  Verification sh bun test testsreprosrepro-icm20948-shared-ground-label.test.tsx  Result: 1 pass, 0 fail. The solver fix is tracked separately in tscircuitschematic-trace-solver1209. |
| [#3987](https://github.com/tscircuit/core/pull/3987) | 🐙 Minor | ⭐⭐ | ShiboSoftwareDev | Updates the partial-trace DRC expectations to reflect the corrected behavior after a previous fix, ensuring accurate reporting of trace errors in PCB designs. |
| [#3967](https://github.com/tscircuit/core/pull/3967) | 🐙 Minor | ⭐⭐ | ShiboSoftwareDev | Aligns routing directives with padded content bounds, ensuring consistent center positioning for auto-sized subcircuits and packed groups. |

<details>
<summary>🐌 Tiny Contributions (25)</summary>

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#4082](https://github.com/tscircuit/core/pull/4082) | 🐌 Tiny | imrishabh18 | Updates the tscircuitschematic-trace-solver dependency from 0.0.204 to 0.0.205, incorporating a fix for power-label attachment and orientation without modifying core implementation or snapshots. |
| [#3981](https://github.com/tscircuit/core/pull/3981) | 🐌 Tiny | imrishabh18 | Reproduces a bug where plated GND contacts are incorrectly reported as disconnected when connected through a bottom copper pour. |
| [#4059](https://github.com/tscircuit/core/pull/4059) | 🐌 Tiny | seveibar | Updates tscircuitcapacity-autorouter from 0.0.913 to 0.0.919, bringing the SRJ18 routing improvements and the merged simplification from tscircuittscircuit-autorouter2678 into core. |
| [#4058](https://github.com/tscircuit/core/pull/4058) | 🐌 Tiny | seveibar | Update tscircuitchecks from 0.0.205 to 0.0.207, bringing in shared routing connectivity maps and copper-pour contact queries using Flatten.jss existing polygon edge index (tscircuitchecks317 and tscircuitchecks319). |
| [#3994](https://github.com/tscircuit/core/pull/3994) | 🐌 Tiny | seveibar | Update tscircuitchecks to 0.0.198 to enable copper-pour short detection and Flatbush improvements without failing on empty schematic-only boards. |
| [#4057](https://github.com/tscircuit/core/pull/4057) | 🐌 Tiny | tscircuitbot | Updates the version of the tscircuitchecks package from 0.0.205 to 0.0.206 in package.json |
| [#4056](https://github.com/tscircuit/core/pull/4056) | 🐌 Tiny | tscircuitbot | Updates the tscircuitchecks package from version 0.0.205 to 0.0.206 in the package.json file. |
| [#4055](https://github.com/tscircuit/core/pull/4055) | 🐌 Tiny | tscircuitbot | Updates the tscircuitchecks package from version 0.0.204 to 0.0.205 in the package.json file. |
| [#4054](https://github.com/tscircuit/core/pull/4054) | 🐌 Tiny | tscircuitbot | Updates the tscircuitchecks package from version 0.0.204 to 0.0.205 in the package.json file. |
| [#4046](https://github.com/tscircuit/core/pull/4046) | 🐌 Tiny | tscircuitbot | Updates the version of the tscircuitchecks package from 0.0.203 to 0.0.204 in package.json |
| [#4032](https://github.com/tscircuit/core/pull/4032) | 🐌 Tiny | tscircuitbot | Updates the tscircuitchecks package to version 0.0.202 in the package.json file. |
| [#3996](https://github.com/tscircuit/core/pull/3996) | 🐌 Tiny | tscircuitbot | Updates the tscircuitchecks package from version 0.0.196 to 0.0.197 |
| [#3995](https://github.com/tscircuit/core/pull/3995) | 🐌 Tiny | tscircuitbot | Updates the tscircuitchecks package from version 0.0.196 to 0.0.197 |
| [#3990](https://github.com/tscircuit/core/pull/3990) | 🐌 Tiny | tscircuitbot | Updates the tscircuitchecks package from version 0.0.195 to 0.0.196 in the package.json file. |
| [#3989](https://github.com/tscircuit/core/pull/3989) | 🐌 Tiny | tscircuitbot | Updates the tscircuitchecks package to version 0.0.196 in package.json |
| [#3980](https://github.com/tscircuit/core/pull/3980) | 🐌 Tiny | rushabhcodes | Updates the tscircuitchecks package from version 0.0.193 to 0.0.194, incorporating the courtyard-overlap fix from tscircuitchecks291. |
| [#4062](https://github.com/tscircuit/core/pull/4062) | 🐌 Tiny | mohan-bee | Updates the tscircuitschematic-trace-solver dependency to version 0.0.203 in the package.json file. |
| [#4048](https://github.com/tscircuit/core/pull/4048) | 🐌 Tiny | mohan-bee | Updates the tscircuitcopper-pour-solver dependency to version 0.0.56 in the package.json file. |
| [#4044](https://github.com/tscircuit/core/pull/4044) | 🐌 Tiny | mohan-bee | Updates the tscircuitmatchpack dependency to version 0.0.97 in the package.json file. |
| [#4020](https://github.com/tscircuit/core/pull/4020) | 🐌 Tiny | mohan-bee | Fixes redundant near-parallel VREF routes in the acoustic tuner schematic by updating the schematic trace recovery behavior. |
| [#3999](https://github.com/tscircuit/core/pull/3999) | 🐌 Tiny | hrithik18k | Updates the tscircuitschematic-trace-solver package from version 0.0.198 to 0.0.199, including a fix for shared-ground-label and refreshing the Air Mouse schematic regression snapshot. |
| [#3969](https://github.com/tscircuit/core/pull/3969) | 🐌 Tiny | hrithik18k | Update tscircuitschematic-trace-solver from 0.0.197 to 0.0.198, bringing in a net-label branch placement fix that maintains junctions while placing eligible net-label branches from the component-adjacent edge. |
| [#4081](https://github.com/tscircuit/core/pull/4081) | 🐌 Tiny | MustafaMulla29 | Bumps tscircuitschematic-trace-solver from 0.0.203 to 0.0.204 to include the labeled rail alignment and redundant trace detour fixes from the previous pull request. |
| [#3966](https://github.com/tscircuit/core/pull/3966) | 🐌 Tiny | ShiboSoftwareDev | Reproduces a winding solver error for the T113 board by adding a test case with specific input data, without changing production code. |
| [#3932](https://github.com/tscircuit/core/pull/3932) | 🐌 Tiny | GokulPandi-M | Fixes redundant parallel routing of VREF branches in schematic, preventing potential electrical issues. |

</details>

### [tscircuit/checks](https://github.com/tscircuit/checks)

| PR # | Impact | Rating | Contributor | Description |
|------|--------|--------|-------------|-------------|
| [#316](https://github.com/tscircuit/checks/pull/316) | 🐳 Major | ⭐⭐⭐ | imrishabh18 | Fixes the copper clearance checks for rounded rectangular SMT pads by accurately measuring against their actual geometry, correcting a bug that misreported clearance gaps. |
| [#303](https://github.com/tscircuit/checks/pull/303) | 🐳 Major | ⭐⭐⭐ | imrishabh18 | Fixes connectivity issues when traces terminate on manual via ports, ensuring that pour-only contacts on the same net are correctly reported as connected. |
| [#293](https://github.com/tscircuit/checks/pull/293) | 🐳 Major | ⭐⭐⭐ | imrishabh18 | Fixes disconnected-port errors for plated GND contacts joined by a bottom copper pour by adding a physical copper connectivity fallback to the port checker and the missing-PCB-trace checker. |
| [#320](https://github.com/tscircuit/checks/pull/320) | 🐳 Major | ⭐⭐⭐ | seveibar | Fixes missing connections for top-layer escapes connected by inner-layer bridges when using plated via barrels and copper pours. |
| [#319](https://github.com/tscircuit/checks/pull/319) | 🐳 Major | ⭐⭐⭐ | seveibar | Replaces the construction of a separate Flatbush edge index for copper-pour connectivity with the use of Flatten.jss existing polygon edges indexed PlanarSet, optimizing performance and memory usage during connectivity checks. |
| [#317](https://github.com/tscircuit/checks/pull/317) | 🐳 Major | ⭐⭐⭐ | seveibar | Reduces routing-check time by reusing logical and physical connectivity maps and implementing Flatbush for trace pair selection, while maintaining accurate diagnostics. |
| [#290](https://github.com/tscircuit/checks/pull/290) | 🐳 Major | ⭐⭐⭐ | seveibar | Copper pours were not checked for accidental contact with other copper. The supplied MSPM0G3507 USB-C board reproduces a GND pour touching both USB-C VBUS pads. Add checkCopperPourShorts to the public API and runAllRoutingChecks. It checks pours against traces, pads, plated holes, vias, and other pours, respecting connectivity, copper layers, trace width, drill voids, and BRep cutouts. Use tscircuitcircuit-json-to-flattenjs for both pour shorts and board-edge clearance, removing the local geometry implementation. Pin the published 0.0.2 jscdn tarball as a development dependency and bundle it with tsup; consumers need no separate converter dependency or GitHub Packages authentication. The converter repository includes 73 side-by-side visual snapshots. Use boundary intersections and containment for contact detection. FlattenJS distanceTo can incorrectly return zero between tiny BRep segments and distant arcs; regression coverage prevents these false positives. The supplied board reports exactly the two GND-to-VBUS pad contacts. Index individual copper shapes with Flatbush on each layer, and use one point per polygon face for containment once boundary intersections are ruled out. An alternating local Bun 1.3.2 benchmark on the supplied board improved median runtime from 2.07 s to 227 ms (about 9), including conversion. A standalone rerun measured 241 ms. Flatbush is a runtime dependency; flatqueue is supplied transitively. Neither is bundled. Run bun benchmarkscopper-pour-shorts.ts to reproduce and verify the expected shorts. Validation: bun test: 330 passed, 0 failed. TypeScript, build, changed-file formatting, and diff checks passed. Built-package smoke test detects both VBUS pad contacts. Built JavaScriptdeclarations contain no external converter import. Clean Bun installation from the public jscdn tarball succeeded. |
| [#298](https://github.com/tscircuit/checks/pull/298) | 🐙 Minor | ⭐⭐ | seveibar | Enforces bus length-skew requirements and maximum-length violations as routing errors, enhancing the routing error reporting mechanism. |
| [#305](https://github.com/tscircuit/checks/pull/305) | 🐙 Minor | ⭐⭐ | seveibar | Honors allow_traces and allow_placements on keepouts, allowing traces and padsplated holes to emit neither errors nor warnings while keeping vias checked and applying warning_only to prohibited overlaps. |
| [#304](https://github.com/tscircuit/checks/pull/304) | 🐙 Minor | ⭐⭐ | seveibar | A keepout with warning_only: true now produces pcb_keepout_overlap_warning diagnostics instead of placement or trace errors. |
| [#299](https://github.com/tscircuit/checks/pull/299) | 🐙 Minor | ⭐⭐ | seveibar | Prevents copper-to-board-edge checks from running on empty schematic-only boards, avoiding errors during conversion when no copper exists. |
| [#296](https://github.com/tscircuit/checks/pull/296) | 🐙 Minor | ⭐⭐ | rushabhcodes | Fixes courtyard overlap checks for do-not-place components to ensure proper collision detection without suppressing copper collisions. |
| [#291](https://github.com/tscircuit/checks/pull/291) | 🐙 Minor | ⭐⭐ | rushabhcodes | Excludes courtyards owned by do-not-place PCB components from overlap checks and adds regression coverage for overlapping same-layer courtyards. |

<details>
<summary>🐌 Tiny Contributions (2)</summary>

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#315](https://github.com/tscircuit/checks/pull/315) | 🐌 Tiny | imrishabh18 | Reproduces false clearance violations for rounded rectangular SMT pads through comprehensive tests, documenting the behavior of existing bugs in clearance checks. |
| [#297](https://github.com/tscircuit/checks/pull/297) | 🐌 Tiny | seveibar | Clarifies the inferred connector direction when no explicit insertion direction is defined and provides guidance on setting the insertion direction in the footprint. |

</details>

### [tscircuit/cli](https://github.com/tscircuit/cli)

| PR # | Impact | Rating | Contributor | Description |
|------|--------|--------|-------------|-------------|
| [#4785](https://github.com/tscircuit/cli/pull/4785) | 🐳 Major | ⭐⭐⭐ | imrishabh18 | Adds tsci search --digikey and tsci search --mouser, using the corresponding tscircuit search services without distributor API credentials. Both flags support combined searches with existing sources and --json. |
| [#4783](https://github.com/tscircuit/cli/pull/4783) | 🐳 Major | ⭐⭐⭐ | imrishabh18 | Add tsci search --ti query to discover Texas Instruments parts through tisearch.tscircuit.com, following the existing JLC search flow. TI-only searches do not query JLC; --ti can also be combined with other source flags. |
| [#4871](https://github.com/tscircuit/cli/pull/4871) | 🐳 Major | ⭐⭐⭐ | seveibar | Adds the ability to link a GitHub repository to a registry package through the command line, allowing users to update the GitHub repository associated with a package directly from the CLI. |
| [#4839](https://github.com/tscircuit/cli/pull/4839) | 🐳 Major | ⭐⭐⭐ | seveibar | Add repeatable --x-ray-net name-or-id and --hidden-layer-opacity 0..1 options for PCB export and snapshots, allowing users to inspect PCB nets with specified opacity and layer options. |
| [#4804](https://github.com/tscircuit/cli/pull/4804) | 🐙 Minor | ⭐⭐ | seveibar | Adds support for the useCloudAutorouting property in tscircuit.config.json, allowing users to enable cloud-based autorouting functionality and ensuring proper validation and handling of this configuration option. |

<details>
<summary>🐌 Tiny Contributions (74)</summary>

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#4878](https://github.com/tscircuit/cli/pull/4878) | 🐌 Tiny | imrishabh18 | Updates the tscircuitcircuit-json-schematic-placement-analysis dependency to version 0.0.11 and regenerates schematic export snapshots to reflect the updated dependency tree. |
| [#4888](https://github.com/tscircuit/cli/pull/4888) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#4887](https://github.com/tscircuit/cli/pull/4887) | 🐌 Tiny | tscircuitbot | Updates the tscircuitrunframe package from version 0.0.2784 to 0.0.2785 |
| [#4886](https://github.com/tscircuit/cli/pull/4886) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#4885](https://github.com/tscircuit/cli/pull/4885) | 🐌 Tiny | tscircuitbot | Updates the tscircuitrunframe package to version 0.0.2784 in package.json |
| [#4882](https://github.com/tscircuit/cli/pull/4882) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#4881](https://github.com/tscircuit/cli/pull/4881) | 🐌 Tiny | tscircuitbot | Updates the tscircuitrunframe package from version 0.0.2782 to 0.0.2783 |
| [#4880](https://github.com/tscircuit/cli/pull/4880) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#4879](https://github.com/tscircuit/cli/pull/4879) | 🐌 Tiny | tscircuitbot | Updates the tscircuitrunframe package from version 0.0.2781 to 0.0.2782 |
| [#4876](https://github.com/tscircuit/cli/pull/4876) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#4875](https://github.com/tscircuit/cli/pull/4875) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#4874](https://github.com/tscircuit/cli/pull/4874) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#4873](https://github.com/tscircuit/cli/pull/4873) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#4872](https://github.com/tscircuit/cli/pull/4872) | 🐌 Tiny | tscircuitbot | Updates the tscircuitrunframe package version from 0.0.2779 to 0.0.2780 |
| [#4870](https://github.com/tscircuit/cli/pull/4870) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#4869](https://github.com/tscircuit/cli/pull/4869) | 🐌 Tiny | tscircuitbot | Updates the tscircuitrunframe package from version 0.0.2778 to 0.0.2779 |
| [#4868](https://github.com/tscircuit/cli/pull/4868) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#4867](https://github.com/tscircuit/cli/pull/4867) | 🐌 Tiny | tscircuitbot | Updates the tscircuitrunframe package to version 0.0.2778 |
| [#4866](https://github.com/tscircuit/cli/pull/4866) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#4865](https://github.com/tscircuit/cli/pull/4865) | 🐌 Tiny | tscircuitbot | Updates the tscircuitrunframe package to version 0.0.2777 in package.json |
| [#4863](https://github.com/tscircuit/cli/pull/4863) | 🐌 Tiny | tscircuitbot | Updates the tscircuitrunframe package to version 0.0.2776 |
| [#4862](https://github.com/tscircuit/cli/pull/4862) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#4861](https://github.com/tscircuit/cli/pull/4861) | 🐌 Tiny | tscircuitbot | Updates the tscircuitrunframe package from version 0.0.2774 to 0.0.2775 |
| [#4860](https://github.com/tscircuit/cli/pull/4860) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#4859](https://github.com/tscircuit/cli/pull/4859) | 🐌 Tiny | tscircuitbot | Updates the tscircuitrunframe package to version 0.0.2774 in package.json |
| [#4850](https://github.com/tscircuit/cli/pull/4850) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#4857](https://github.com/tscircuit/cli/pull/4857) | 🐌 Tiny | tscircuitbot | Updates the tscircuitrunframe package from version 0.0.2772 to 0.0.2773 |
| [#4856](https://github.com/tscircuit/cli/pull/4856) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#4855](https://github.com/tscircuit/cli/pull/4855) | 🐌 Tiny | tscircuitbot | Updates the tscircuitrunframe package from version 0.0.2771 to 0.0.2772 |
| [#4854](https://github.com/tscircuit/cli/pull/4854) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#4853](https://github.com/tscircuit/cli/pull/4853) | 🐌 Tiny | tscircuitbot | Updates the tscircuitrunframe package to version 0.0.2771 in package.json |
| [#4852](https://github.com/tscircuit/cli/pull/4852) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#4851](https://github.com/tscircuit/cli/pull/4851) | 🐌 Tiny | tscircuitbot | Updates the tscircuitrunframe package to version 0.0.2770 |
| [#4849](https://github.com/tscircuit/cli/pull/4849) | 🐌 Tiny | tscircuitbot | Updates the tscircuitrunframe package from version 0.0.2767 to 0.0.2769 |
| [#4858](https://github.com/tscircuit/cli/pull/4858) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#4837](https://github.com/tscircuit/cli/pull/4837) | 🐌 Tiny | tscircuitbot | Updates the tscircuitrunframe package from version 0.0.2761 to 0.0.2764 |
| [#4847](https://github.com/tscircuit/cli/pull/4847) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#4845](https://github.com/tscircuit/cli/pull/4845) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#4841](https://github.com/tscircuit/cli/pull/4841) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#4840](https://github.com/tscircuit/cli/pull/4840) | 🐌 Tiny | tscircuitbot | Updates the tscircuitrunframe package from version 0.0.2764 to 0.0.2765 |
| [#4846](https://github.com/tscircuit/cli/pull/4846) | 🐌 Tiny | tscircuitbot | Updates the tscircuitrunframe package from version 0.0.2766 to 0.0.2767 |
| [#4844](https://github.com/tscircuit/cli/pull/4844) | 🐌 Tiny | tscircuitbot | Updates the tscircuitrunframe package from version 0.0.2765 to 0.0.2766 |
| [#4838](https://github.com/tscircuit/cli/pull/4838) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#4833](https://github.com/tscircuit/cli/pull/4833) | 🐌 Tiny | tscircuitbot | Updates the tscircuitrunframe package from version 0.0.2760 to 0.0.2761 |
| [#4832](https://github.com/tscircuit/cli/pull/4832) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#4831](https://github.com/tscircuit/cli/pull/4831) | 🐌 Tiny | tscircuitbot | Updates the tscircuitrunframe package to version 0.0.2760 |
| [#4829](https://github.com/tscircuit/cli/pull/4829) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#4828](https://github.com/tscircuit/cli/pull/4828) | 🐌 Tiny | tscircuitbot | Updates the tscircuitrunframe package version from 0.0.2758 to 0.0.2759 in package.json |
| [#4826](https://github.com/tscircuit/cli/pull/4826) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#4825](https://github.com/tscircuit/cli/pull/4825) | 🐌 Tiny | tscircuitbot | Updates the tscircuitrunframe package to version 0.0.2758 |
| [#4823](https://github.com/tscircuit/cli/pull/4823) | 🐌 Tiny | tscircuitbot | Updates the tscircuitrunframe package to version 0.0.2757 in package.json |
| [#4822](https://github.com/tscircuit/cli/pull/4822) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#4821](https://github.com/tscircuit/cli/pull/4821) | 🐌 Tiny | tscircuitbot | Updates the tscircuitrunframe package to version 0.0.2756 in package.json |
| [#4820](https://github.com/tscircuit/cli/pull/4820) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#4819](https://github.com/tscircuit/cli/pull/4819) | 🐌 Tiny | tscircuitbot | Updates the tscircuitrunframe package from version 0.0.2754 to 0.0.2755 |
| [#4817](https://github.com/tscircuit/cli/pull/4817) | 🐌 Tiny | tscircuitbot | Updates the tscircuitrunframe package to version 0.0.2754 |
| [#4814](https://github.com/tscircuit/cli/pull/4814) | 🐌 Tiny | tscircuitbot | Updates the tscircuitrunframe package version from 0.0.2752 to 0.0.2753 in package.json |
| [#4812](https://github.com/tscircuit/cli/pull/4812) | 🐌 Tiny | tscircuitbot | Updates the tscircuitrunframe package to version 0.0.2752 in the package.json file. |
| [#4806](https://github.com/tscircuit/cli/pull/4806) | 🐌 Tiny | tscircuitbot | Updates the tscircuitrunframe package from version 0.0.2747 to 0.0.2748 |
| [#4805](https://github.com/tscircuit/cli/pull/4805) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#4807](https://github.com/tscircuit/cli/pull/4807) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#4802](https://github.com/tscircuit/cli/pull/4802) | 🐌 Tiny | tscircuitbot | Updates the tscircuitrunframe package to version 0.0.2747 in the package.json file. |
| [#4801](https://github.com/tscircuit/cli/pull/4801) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#4800](https://github.com/tscircuit/cli/pull/4800) | 🐌 Tiny | tscircuitbot | Updates the tscircuitrunframe package from version 0.0.2740 to 0.0.2746 |
| [#4793](https://github.com/tscircuit/cli/pull/4793) | 🐌 Tiny | tscircuitbot | Updates the tscircuitrunframe package to version 0.0.2740 in package.json |
| [#4789](https://github.com/tscircuit/cli/pull/4789) | 🐌 Tiny | tscircuitbot | Updates the tscircuitrunframe package from version 0.0.2737 to 0.0.2738 |
| [#4794](https://github.com/tscircuit/cli/pull/4794) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#4792](https://github.com/tscircuit/cli/pull/4792) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#4803](https://github.com/tscircuit/cli/pull/4803) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#4791](https://github.com/tscircuit/cli/pull/4791) | 🐌 Tiny | tscircuitbot | Updates the tscircuitrunframe package from version 0.0.2738 to 0.0.2739 |
| [#4788](https://github.com/tscircuit/cli/pull/4788) | 🐌 Tiny | tscircuitbot | Updates the package version from 0.1.2087 to 0.1.2088 in package.json |
| [#4784](https://github.com/tscircuit/cli/pull/4784) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#4786](https://github.com/tscircuit/cli/pull/4786) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#4787](https://github.com/tscircuit/cli/pull/4787) | 🐌 Tiny | ShiboSoftwareDev | Updates the CLIs packagedoffline tscircuitcheck-shorts fallback from version 0.0.19 to 0.0.24, including new boundary contact detection and refreshed test snapshots. |

</details>

### [tscircuit/tscircuit-autorouter](https://github.com/tscircuit/tscircuit-autorouter)

| PR # | Impact | Rating | Contributor | Description |
|------|--------|--------|-------------|-------------|
| [#2682](https://github.com/tscircuit/tscircuit-autorouter/pull/2682) | 🐳 Major | ⭐⭐⭐ | imrishabh18 | Use tscircuittrace-simplification-solver from the commit-pinned GitHub dependency github:tscircuittrace-simplification-solver5c0ad217a1ee17a557ba160a5ca14ef1f22a244c, provided by https:github.comtscircuittrace-simplification-solverpull1. Replace local imports across autorouting pipelines, tests, and debug fixtures. Delete the local trace-simplification, path-simplification, via-removal, via-merging, and crossing-via-reduction implementations, plus the segment index and path-construction helper now owned by the package. Shared geometry and route types still used by other autorouter solvers remain here. Existing test assertions and snapshots are unchanged. Install the commit-pinned package in devDependencies, matching the existing GitHub-installed solver packages. The existing build bundles its implementation without a tsup.config.ts or build-script changes. The dependency PR exposes the solver classes and index types needed by the existing callers. Validation: 53 focused tests pass across 44 files, covering existing simplification regressions, Pipeline 9 integration, Pipeline 11, and visual snapshots; one pre-existing test remains skipped. Type checking, format checking, and git diff --check pass. The package build, declaration generation, and CosmosVercel fixture build pass. Verified the JavaScript bundle contains the implementation and no external import of the TypeScript-only solver package. No solver behavior changes, benchmark additions, patches, or extra Markdown files. |
| [#2678](https://github.com/tscircuit/tscircuit-autorouter/pull/2678) | 🐳 Major | ⭐⭐⭐ | seveibar | Simplifies Pipeline 9 by consolidating bounded regional repair into a single pass after B01 repair, removing unnecessary complexity and maintaining route integrity with zero search budget. |
| [#2662](https://github.com/tscircuit/tscircuit-autorouter/pull/2662) | 🐳 Major | ⭐⭐⭐ | seveibar | SRJ18s large boards failed routing or exhausted the CI timeout. This change bounds routing work and adds validated congestion repair. The exact benchmark --dataset 18 run on green commit 9032401 now reports 87.5 completion and 87.5 relaxed DRC pass (1416 for both), with the original 360-second timeout and eight-worker concurrency. Redistribute displaced shared-edge ports using physical node bounds and obstacle layers in multilayer Pipeline 9, preserving solitary crossings around preloaded copper. Reduce repeated search work with cached blocker-search hops, shared multilayer destination metadata, early rejection of dominated candidates, per-layer congestion indexes, and cached ordinary-via clearance. Reject physically overlapping unrelated terminals before exhausting an infeasible intra-node portfolio. Bound multilayer grid and regional repair work. Use coarse-to-fine weighted regional search with shared node limits and reserved candidate calls for remaining conflicts. Reserve all board layers for ordinary drilled vias and merge only reported same-net via conflicts. Validate complete proposals against reference DRC and physical copper guards before publishing them. Dependencies: high-density-repair03 142(https:github.comtscircuithigh-density-repair03pull142), repair04 16(https:github.comtscircuitrepair04pull16), and tiny-hypergraph 207(https:github.comtscircuittiny-hypergraphpull207), pinned to tested commits. Validation: all nine CI test shards, build, TypeScript, and formatting checks are green. Repair04s 142 tests and tiny-hypergraphs 128 tests pass. The local eight-worker full-dataset run completed 1516 samples, passed relaxed DRC on 1416, and had no timeouts. The exact benchmark command(https:github.comtscircuittscircuit-autorouterpull2662issuecomment-5750646721) produced this CI benchmark result(https:github.comtscircuittscircuit-autorouterpull2662issuecomment-5750649855):  Metric  Main  PR   ---  ---:  ---:   Completion  81.3  87.5   Relaxed DRC pass  56.3  87.5  The raw report confirms sample 14 completes with zero DRC errors in 299.363 seconds, below the unchanged 360-second limit. Sample 6 retains its routing failure and sample 15 still times out. CI runtime varies: an earlier run of this same revision timed out on sample 14 as well. No benchmark timeout, concurrency, dataset, or DRC criteria were changed. |
| [#2642](https://github.com/tscircuit/tscircuit-autorouter/pull/2642) | 🐳 Major | ⭐⭐⭐ | seveibar | Repairs copper-clearance violations inside native high-density nodes before stitching, ensuring compliance with minimum trace width and connectivity requirements. |
| [#2601](https://github.com/tscircuit/tscircuit-autorouter/pull/2601) | 🐳 Major | ⭐⭐⭐ | seveibar | Updates the length matcher to preserve unchanged leads during DDR tuning by changing the dependency to a commit that includes a fix for retained-lead clearance. |
| [#2598](https://github.com/tscircuit/tscircuit-autorouter/pull/2598) | 🐳 Major | ⭐⭐⭐ | ShiboSoftwareDev | Fixes autorouting failure by retaining zero-length fixed spans during regional section assembly, allowing for proper reconstruction of routes in the Pipeline9 autorouter. |
| [#2592](https://github.com/tscircuit/tscircuit-autorouter/pull/2592) | 🐳 Major | ⭐⭐⭐ | ShiboSoftwareDev | Adds a visual baseline for the T113-S3 Linux boards autorouting failure at the source_trace_194 boundary, rendering the complete board and its preloaded traces. |
| [#2581](https://github.com/tscircuit/tscircuit-autorouter/pull/2581) | 🐳 Major | ⭐⭐⭐ | ShiboSoftwareDev | Fixes autorouting failure by resolving route and obstacle identities to canonical nets in Pipeline9 during regional via validation. |
| [#2664](https://github.com/tscircuit/tscircuit-autorouter/pull/2664) | 🐳 Major | ⭐⭐⭐ | Abse2001 | Corrects the detection of through-hole via collisions in the reference DRC by allowing vias to cover the complete board stack when blind and buried vias are disabled, improving DRC reporting accuracy. |
| [#2640](https://github.com/tscircuit/tscircuit-autorouter/pull/2640) | 🐳 Major | ⭐⭐⭐ | AnasSarkiz | Stops preprocessing when an on-board connection point lies outside the routing bounds, setting the pipeline status to failed and preventing further stages from starting. |
| [#2631](https://github.com/tscircuit/tscircuit-autorouter/pull/2631) | 🐳 Major | ⭐⭐⭐ | AnasSarkiz | Caches via-occupancy results during connection searches to reduce repeated scans, improving routing efficiency in high-density scenarios. |
| [#2605](https://github.com/tscircuit/tscircuit-autorouter/pull/2605) | 🐙 Minor | ⭐⭐ | ShiboSoftwareDev | Fixes the missing plated-slot copper obstacle for J4 pin 1 in SRJ18 sample002, ensuring accurate routing visualization and output. |

<details>
<summary>🐌 Tiny Contributions (18)</summary>

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#2667](https://github.com/tscircuit/tscircuit-autorouter/pull/2667) | 🐌 Tiny | imrishabh18 | Adds the captured board 1726 routing input as bugreport107, with a debugger fixture and Pipeline 9 reproduction test. Bug report: https:api.tscircuit.comautoroutingbug_reportsview?autorouting_bug_report_id8223a114-7a87-4a9f-8fca-20b2d8acf8d6 Related issue: 2668 Stores the exact captured simple_route_json: 382 connection entries, 1,072 obstacles, four layers, and no preloaded traces array. Preserves the original routing constraints and connection widths. Names the JSON, debugger fixture, and test for board 1726; both the debugger and test import the same JSON. Keeps the existing test behavior: call solver.solve() and assert solver.solved is false if it returns, with the existing 300,000 ms test timeout. Validation: verified the fixture input equals the downloaded reports simple_route_json; transpiled the test and debugger fixture successfully; git diff --check passed. Ran bun test --timeout 9999999 testsbugsbugreport107-board-1726.test.ts, but the synchronous routing call did not return during the observed run and was manually interrupted. The test did not reach its assertion, so this is not a passing test or a confirmed terminal solver failure. The exact failing stage for this input remains unverified. |
| [#2658](https://github.com/tscircuit/tscircuit-autorouter/pull/2658) | 🐌 Tiny | seveibar | Changes the default autorouting pipeline in the GUI from Pipeline7 to Pipeline9, while honoring existing saved selections. |
| [#2653](https://github.com/tscircuit/tscircuit-autorouter/pull/2653) | 🐌 Tiny | seveibar | Expanded the description of the autorouter and added links to resources. |
| [#2683](https://github.com/tscircuit/tscircuit-autorouter/pull/2683) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#2679](https://github.com/tscircuit/tscircuit-autorouter/pull/2679) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#2670](https://github.com/tscircuit/tscircuit-autorouter/pull/2670) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#2669](https://github.com/tscircuit/tscircuit-autorouter/pull/2669) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#2665](https://github.com/tscircuit/tscircuit-autorouter/pull/2665) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#2659](https://github.com/tscircuit/tscircuit-autorouter/pull/2659) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#2657](https://github.com/tscircuit/tscircuit-autorouter/pull/2657) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#2645](https://github.com/tscircuit/tscircuit-autorouter/pull/2645) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#2641](https://github.com/tscircuit/tscircuit-autorouter/pull/2641) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#2633](https://github.com/tscircuit/tscircuit-autorouter/pull/2633) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#2612](https://github.com/tscircuit/tscircuit-autorouter/pull/2612) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#2610](https://github.com/tscircuit/tscircuit-autorouter/pull/2610) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#2602](https://github.com/tscircuit/tscircuit-autorouter/pull/2602) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#2599](https://github.com/tscircuit/tscircuit-autorouter/pull/2599) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#2606](https://github.com/tscircuit/tscircuit-autorouter/pull/2606) | 🐌 Tiny | Abse2001 | Reproduces a bug where Pipeline 9 narrows a requested 0.4 mm trace width to 0.2375 mm instead of finding a legal detour, highlighting a flaw in the autorouting logic. |

</details>

### [tscircuit/tisearch.tscircuit.com](https://github.com/tscircuit/tisearch.tscircuit.com)

| PR # | Impact | Rating | Contributor | Description |
|------|--------|--------|-------------|-------------|
| [#15](https://github.com/tscircuit/tisearch.tscircuit.com/pull/15) | 🐳 Major | ⭐⭐⭐ | imrishabh18 | Fills DAC channel counts from explicit TI descriptions to improve channel coverage in the DAC catalog. |
| [#14](https://github.com/tscircuit/tisearch.tscircuit.com/pull/14) | 🐳 Major | ⭐⭐⭐ | imrishabh18 | Fixes the Linux-capable Processors page by correctly querying TI processor families and mapping DACADC channel specifications, improving data accuracy and availability. |
| [#13](https://github.com/tscircuit/tisearch.tscircuit.com/pull/13) | 🐳 Major | ⭐⭐⭐ | imrishabh18 | Fixes incorrect classification of analog switches by using TIs configuration metadata to accurately filter and categorize switches and multiplexers. |
| [#12](https://github.com/tscircuit/tisearch.tscircuit.com/pull/12) | 🐙 Minor | ⭐⭐ | imrishabh18 | Removes the empty LCSC column from HTML tables and hides categories without TI family mappings from the homepage and HTML category directory, while retaining existing category routes and JSON schemas. |

<details>
<summary>🐌 Tiny Contributions (1)</summary>

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#16](https://github.com/tscircuit/tisearch.tscircuit.com/pull/16) | 🐌 Tiny | imrishabh18 | Removes the unsupported RISC-V family mapping from the navigation filter, ensuring that no unsupported RISC-V tiles are displayed to users. |

</details>

### [tscircuit/trace-simplification-solver](https://github.com/tscircuit/trace-simplification-solver)

| PR # | Impact | Rating | Contributor | Description |
|------|--------|--------|-------------|-------------|
| [#1](https://github.com/tscircuit/trace-simplification-solver/pull/1) | 🐳 Major | ⭐⭐⭐ | imrishabh18 | Extract TraceSimplificationSolver and its required phase solvers, geometry helpers, spatial indexes, and types from tscircuittscircuit-autorouter at be3403c8b3bb105a7b32770a28f58b57737c7602. Preserve the existing solver behavior and API. Internal imports use relative paths, and the package exports index.ts directly so autorouter can install the source from GitHub without a build or lifecycle hook. Includes only the solver implementation, related tests and four existing SVG snapshots, and minimal packagetest configuration. Includes separate test, type-check, and format-check workflows for pull requests and pushes to main, using Bun 1.3.8. No benchmarks, build tooling, patches, or additional Markdown files. Validation: all 38 tests pass; type checking passes. Verified direct GitHub installation in a separate consumer project using Bun 1.3.8, verified that the crossing-via fixture simplifies from three vias to one, and type-checked the consumer without autorouter path aliases. Companion autorouter migration: https:github.comtscircuittscircuit-autorouterpull2682. The public exports include the phase solvers and their index types used by autorouter tests and debug fixtures. |

### [tscircuit/pcb-viewer](https://github.com/tscircuit/pcb-viewer)

| PR # | Impact | Rating | Contributor | Description |
|------|--------|--------|-------------|-------------|
| [#1023](https://github.com/tscircuit/pcb-viewer/pull/1023) | 🐳 Major | ⭐⭐⭐ | seveibar | Clicking or right-clicking a trace now labels the action X-Ray display name, such as X-Ray GND or X-Ray U1.1 to U2.2, using existing trace-hover naming rules and ensuring long labels wrap inside the menu. |
| [#1021](https://github.com/tscircuit/pcb-viewer/pull/1021) | 🐳 Major | ⭐⭐⭐ | seveibar | Allows users to add multiple nets for X-Ray inspection without replacing the previously selected net, retaining fully opaque pads, traces, vias, and plated-hole drills across layers. |
| [#1019](https://github.com/tscircuit/pcb-viewer/pull/1019) | 🐳 Major | ⭐⭐⭐ | seveibar | Adds X-Ray Net inspection feature that allows users to view selected nets traces, pads, and vias at full opacity while dimming unrelated copper layers, enhancing PCB inspection capabilities. |
| [#1017](https://github.com/tscircuit/pcb-viewer/pull/1017) | 🐳 Major | ⭐⭐⭐ | seveibar | Sets the default hidden layer visibility to 20 and saves user preferences in localStorage, restoring them upon reopening the viewer or reloading the page. |
| [#1012](https://github.com/tscircuit/pcb-viewer/pull/1012) | 🐳 Major | ⭐⭐⭐ | seveibar | Large boards need responsive navigation without waiting for new raster images. This adds a worker-owned WebGPU renderer that compiles Circuit JSON once, retains GPU geometry, and redraws on camera changes throughout panzoom. Right-click the board and choose Rendering Engine  Canvas or WebGPU (experimental). Switching preserves camera and viewer state, releases the previous worker, and updates the selected radio item. Opening the context menu cancels active panning and disables navigation; the dismissal press cannot start a drag. The renderer prop sets the initial engine; subsequent prop changes update the selection. This candidate still defaults to WebGPU and automatically falls back to Canvas on unavailable WebGPUOffscreenCanvas, workerdevice failures, and diagnosed unsupported geometry. The standalone circuit-json-webgpu(https:github.comtscircuitcircuit-json-webgpu) renderer is installed as a devDependency from https:jscdn.tscircuit.comtscircuitcircuit-json-webgpu0.0.3.tgz and bundled into the inline worker. This version includes the merged gray-board-background and soldermask-state fixes. No renderer runtime import or vendored upstream sources are required. Layer visibility, opacity, pours, mask, annotations, and highlights update without rebuilding geometry; resize preserves the worker. Draft: full visual parity is not achieved. The renderers strict audit compares fresh circuit-to-svg on the left with rendered WebGPU on the right. The latest checked-in report passes 75597 comparisons (326 text-only); 19 Canvas-only passes are explicitly not comparable. Diagnostics and Canvas fallback do not detect every mismatch. The 597 committed comparison snapshots provide regression coverage, not proof of cross-renderer parity. Validation: TypeScript passes in a clean checkout without dist, the production build passes, and all 53 viewer tests pass. Browser tests typecheck against source and use a Vite alias to exercise the built bundle at runtime. Real Chromium checks of the built bundle pass: AM3352 zoom, resize, StrictModeunmount cleanup, context-menu switching both directions, camera preservation, context-menu navigation blockingdismissalresumption, and Canvas fallbacks. AM3352 compiles in approximately 699 ms in the worker locally, then retains one geometry upload during navigation; the measured animation-frame p95 was 14.4 ms. These are local measurements, not cross-device guarantees. Renderer 0.0.3 passed its publish workflows typecheck, 35 unit tests, and build. Its test-tooling compatibility fix is tracked in renderer PR 3(https:github.comtscircuitcircuit-json-webgpupull3). Merged current main and resolved the build-config conflict. Independent of the earlier bitmap-worker PR 1009. |
| [#1006](https://github.com/tscircuit/pcb-viewer/pull/1006) | 🐳 Major | ⭐⭐⭐ | seveibar | Reduces the rendering time of the measuring tool by caching SVG paths, significantly improving performance during dragging operations. |
| [#1010](https://github.com/tscircuit/pcb-viewer/pull/1010) | 🐳 Major | ⭐⭐⭐ | techmannih | Fixes PCB viewer to respect board via tenting and preserve board context when rendering filtered vias, ensuring proper visibility and functionality of vias and traces with hidden copper pours. |
| [#1013](https://github.com/tscircuit/pcb-viewer/pull/1013) | 🐙 Minor | ⭐⭐ | imrishabh18 | Fixes a production bundle issue where React DOM was incorrectly embedded, causing loading failures on the dashboard. |
| [#1029](https://github.com/tscircuit/pcb-viewer/pull/1029) | 🐙 Minor | ⭐⭐ | seveibar | Fixes the issue where X-ray mode did not display tooltips for SMT pads and plated holes belonging to inspected nets, and includes connected copper pours on all layers. |
| [#1025](https://github.com/tscircuit/pcb-viewer/pull/1025) | 🐙 Minor | ⭐⭐ | seveibar | Adds a second X-Ray busName action beside the individual net action when the clicked trace or pad belongs to a source_bus, resolving all member traces through electrical connectivity and adding their nets to the current X-Ray selection. |

<details>
<summary>🐌 Tiny Contributions (14)</summary>

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#1027](https://github.com/tscircuit/pcb-viewer/pull/1027) | 🐌 Tiny | seveibar | Replace the AM3352 fixture with Circuit JSON from seveibaram3352-dev-board-4layer-dogbone, release v0.1.1 (1dde7554-9eed-449f-a580-8b886cdedd9e). This was the latest completed build when downloaded; v0.1.2 was still building. The fixture now contains DDR_BYTE0 and DDR_BYTE1 source buses, each resolving to 11 distinct electrical nets with no missing members. Add source provenance and instructions for the DDR bus X-Ray menu. Validation: production build, TypeScript, and the browser WebGPU suite pass against the updated board, including worker lifecycle, fallback, rendering, and navigation without geometry re-upload. Both bus memberships were checked through the viewers connectivity resolver. |
| [#1003](https://github.com/tscircuit/pcb-viewer/pull/1003) | 🐌 Tiny | seveibar | Summary Dense multilayer boards make the selected layer difficult to distinguish. Add a right-click menu with Visibility  Hidden Layer Visibility offering Hide, 10, 20, 40, 60, 80, and 100, with 40 as the default. Hide clears inactive-layer canvases and skips drawing their contents. The selected layer, its associated side details, and shared board geometry and drills remain visible. Changing the selected layer updates which layers are hidden. The menu supports keyboard navigation and dismissal, and adapts its placement near viewport edges. Add an AM3352 dev board fixture using the complete supplied circuit JSON: 10,979 elements and eight copper layers. The large JSON addition is the unchanged fixture input.  Validation bun test: 48 passed. bunx tsc --noEmit: passed. bun run build: passed, including declarations. Formatting and git diff --check: passed. Fixture verified byte-identical to the supplied JSON. Browser verification was blocked by a saved local browser permission. |
| [#1031](https://github.com/tscircuit/pcb-viewer/pull/1031) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1026](https://github.com/tscircuit/pcb-viewer/pull/1026) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1024](https://github.com/tscircuit/pcb-viewer/pull/1024) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1030](https://github.com/tscircuit/pcb-viewer/pull/1030) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1022](https://github.com/tscircuit/pcb-viewer/pull/1022) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1020](https://github.com/tscircuit/pcb-viewer/pull/1020) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1018](https://github.com/tscircuit/pcb-viewer/pull/1018) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1015](https://github.com/tscircuit/pcb-viewer/pull/1015) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1014](https://github.com/tscircuit/pcb-viewer/pull/1014) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1004](https://github.com/tscircuit/pcb-viewer/pull/1004) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1007](https://github.com/tscircuit/pcb-viewer/pull/1007) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1011](https://github.com/tscircuit/pcb-viewer/pull/1011) | 🐌 Tiny | tscircuitbot | Automated package update |

</details>

### [tscircuit/circuit-json-schematic-placement-analysis](https://github.com/tscircuit/circuit-json-schematic-placement-analysis)

| PR # | Impact | Rating | Contributor | Description |
|------|--------|--------|-------------|-------------|
| [#83](https://github.com/tscircuit/circuit-json-schematic-placement-analysis/pull/83) | 🐳 Major | ⭐⭐⭐ | MustafaMulla29 | Stacked on 84, which adds the unchanged complete STM32 schematic. Reports a grounded-emitter NPN drawn above its load or with its collectoremitter facing away from the vertical load path. Detection requires explicit transistor pin roles, a base resistor, a positive-supply two-pin load and a correctly connected parallel clamp diode; ambiguous or separate-block circuits are skipped. On the published STM32 sheet, Q1BZ1R6D2 gain one new finding. The full-sheet repro snapshot(https:github.comtscircuitcircuit-json-schematic-placement-analysisblobfeatlow-side-transistor-placementtestscases__snapshots__stm32-low-side-driver-repro-full-sheet.snap.svg) now highlights those four parts with matching numbered badges beside the diagnostic. Only the new issue type is highlighted; the counts include all findings. The original layout and wiring are unchanged. 84 retains the unhighlighted baseline. Murata Figure 1(https:www.murata.comen-globalsupportfaqssoundsoundercharsch0007) shows the corresponding buzzer-driver arrangement: transistor below the load, emitter toward ground, and resistor beside the base. The manufactureroriginal-render comparison is in 84. This is a placement advisory; it does not apply moves or claim collision-checked coordinates. Validation: 102 tests pass; typecheck and formatting pass. The small beforeafter control preserves connectivity and clears the finding. A scan of nine recent published designs reports only the STM32 driver. |
| [#95](https://github.com/tscircuit/circuit-json-schematic-placement-analysis/pull/95) | 🐙 Minor | ⭐⭐ | imrishabh18 | Fixes false box-width warning for standard USB-C connectors by skipping width checks for source components with ftypesimple_connector and standardusb_c. |
| [#78](https://github.com/tscircuit/circuit-json-schematic-placement-analysis/pull/78) | 🐙 Minor | ⭐⭐ | mohan-bee | Fixes false alignment warnings between disconnected ports in schematic analysis by ensuring source-port connectivity is checked before emitting alignment advice. |
| [#74](https://github.com/tscircuit/circuit-json-schematic-placement-analysis/pull/74) | 🐙 Minor | ⭐⭐ | mohan-bee | Fixes misleading padding warnings for singleton schematic pins by skipping bank-end padding checks for sides with one pin. |

<details>
<summary>🐌 Tiny Contributions (9)</summary>

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#90](https://github.com/tscircuit/circuit-json-schematic-placement-analysis/pull/90) | 🐌 Tiny | seveibar | Fixes alignment issues of imported resistor symbols in schematic snapshots when rendered at different scales, ensuring they meet their traces correctly. |
| [#96](https://github.com/tscircuit/circuit-json-schematic-placement-analysis/pull/96) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#93](https://github.com/tscircuit/circuit-json-schematic-placement-analysis/pull/93) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#92](https://github.com/tscircuit/circuit-json-schematic-placement-analysis/pull/92) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#91](https://github.com/tscircuit/circuit-json-schematic-placement-analysis/pull/91) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#80](https://github.com/tscircuit/circuit-json-schematic-placement-analysis/pull/80) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#77](https://github.com/tscircuit/circuit-json-schematic-placement-analysis/pull/77) | 🐌 Tiny | mohan-bee | Reproduces incorrect dioderesistor alignment advice when a generated net-label trace ends near a port on a different electrical net. |
| [#73](https://github.com/tscircuit/circuit-json-schematic-placement-analysis/pull/73) | 🐌 Tiny | mohan-bee | Records existing behavior of padding warnings for centered supply pins without changing it, ensuring all tests pass. |
| [#84](https://github.com/tscircuit/circuit-json-schematic-placement-analysis/pull/84) | 🐌 Tiny | MustafaMulla29 | Repro baseline for 83. Imports the complete 29-component STM32 Mini Dev Board v1.0.0, published September 19, preserving every source and schematic record. |

</details>

### [tscircuit/schematic-viewer](https://github.com/tscircuit/schematic-viewer)


<details>
<summary>🐌 Tiny Contributions (1)</summary>

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#277](https://github.com/tscircuit/schematic-viewer/pull/277) | 🐌 Tiny | imrishabh18 | Pins the style analyzer development dependency to the published tscircuitcircuit-json-schematic-placement-analysis 0.0.11 CDN tarball instead of the moving GitHub main archive, and regenerates bun.lock. |

</details>

### [tscircuit/tscircuit](https://github.com/tscircuit/tscircuit)


<details>
<summary>🐌 Tiny Contributions (132)</summary>

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#4992](https://github.com/tscircuit/tscircuit/pull/4992) | 🐌 Tiny | imrishabh18 | Updates the CLI, core, and related tscircuit packages to their latest versions and syncs dependencies accordingly. |
| [#5125](https://github.com/tscircuit/tscircuit/pull/5125) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#5124](https://github.com/tscircuit/tscircuit/pull/5124) | 🐌 Tiny | tscircuitbot | Updates the tscircuitcli package to version 0.1.2129 in the package.json file |
| [#5123](https://github.com/tscircuit/tscircuit/pull/5123) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#5122](https://github.com/tscircuit/tscircuit/pull/5122) | 🐌 Tiny | tscircuitbot | Updates the version of the tscircuitrunframe package from 0.0.2785 to 0.0.2786 in package.json |
| [#5121](https://github.com/tscircuit/tscircuit/pull/5121) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#5120](https://github.com/tscircuit/tscircuit/pull/5120) | 🐌 Tiny | tscircuitbot | Updates the tscircuitcli package version from 0.1.2127 to 0.1.2128 |
| [#5119](https://github.com/tscircuit/tscircuit/pull/5119) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#5118](https://github.com/tscircuit/tscircuit/pull/5118) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#5116](https://github.com/tscircuit/tscircuit/pull/5116) | 🐌 Tiny | tscircuitbot | Updates the tscircuitcli package to version 0.1.2126 in the package.json file. |
| [#5115](https://github.com/tscircuit/tscircuit/pull/5115) | 🐌 Tiny | tscircuitbot | Updates the package version from 0.0.2623 to 0.0.2624 in package.json |
| [#5114](https://github.com/tscircuit/tscircuit/pull/5114) | 🐌 Tiny | tscircuitbot | Updates the version of the tscircuitrunframe package from 0.0.2783 to 0.0.2784 in package.json |
| [#5113](https://github.com/tscircuit/tscircuit/pull/5113) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#5112](https://github.com/tscircuit/tscircuit/pull/5112) | 🐌 Tiny | tscircuitbot | Updates the tscircuitcli package version from 0.1.2124 to 0.1.2125 in package.json |
| [#5111](https://github.com/tscircuit/tscircuit/pull/5111) | 🐌 Tiny | tscircuitbot | Updates the package version from 0.0.2621 to 0.0.2622 in package.json |
| [#5110](https://github.com/tscircuit/tscircuit/pull/5110) | 🐌 Tiny | tscircuitbot | Updates the versions of several dependencies in the package.json file, including tscircuitcore, tscircuiteval, tscircuitrunframe, and tscircuitschematic-trace-solver. |
| [#5109](https://github.com/tscircuit/tscircuit/pull/5109) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#5108](https://github.com/tscircuit/tscircuit/pull/5108) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#5107](https://github.com/tscircuit/tscircuit/pull/5107) | 🐌 Tiny | tscircuitbot | Automated package update to version 0.0.2620 |
| [#5106](https://github.com/tscircuit/tscircuit/pull/5106) | 🐌 Tiny | tscircuitbot | Updates the version of the tscircuiteval and tscircuitrunframe packages in package.json |
| [#5105](https://github.com/tscircuit/tscircuit/pull/5105) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#5104](https://github.com/tscircuit/tscircuit/pull/5104) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#5103](https://github.com/tscircuit/tscircuit/pull/5103) | 🐌 Tiny | tscircuitbot | Updates the package version from 0.0.2617 to 0.0.2618 in package.json |
| [#5102](https://github.com/tscircuit/tscircuit/pull/5102) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#5101](https://github.com/tscircuit/tscircuit/pull/5101) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#5100](https://github.com/tscircuit/tscircuit/pull/5100) | 🐌 Tiny | tscircuitbot | Updates the tscircuitcli package to version 0.1.2122 in the package.json file |
| [#5099](https://github.com/tscircuit/tscircuit/pull/5099) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#5098](https://github.com/tscircuit/tscircuit/pull/5098) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#5097](https://github.com/tscircuit/tscircuit/pull/5097) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#5096](https://github.com/tscircuit/tscircuit/pull/5096) | 🐌 Tiny | tscircuitbot | Updates the tscircuitcli package to version 0.1.2121 in the package.json file |
| [#5095](https://github.com/tscircuit/tscircuit/pull/5095) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#5094](https://github.com/tscircuit/tscircuit/pull/5094) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#5093](https://github.com/tscircuit/tscircuit/pull/5093) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#5092](https://github.com/tscircuit/tscircuit/pull/5092) | 🐌 Tiny | tscircuitbot | Updates the tscircuitcli package to version 0.1.2120 in the package.json file |
| [#5091](https://github.com/tscircuit/tscircuit/pull/5091) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#5090](https://github.com/tscircuit/tscircuit/pull/5090) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#5089](https://github.com/tscircuit/tscircuit/pull/5089) | 🐌 Tiny | tscircuitbot | Updates the package version from 0.0.2610 to 0.0.2611 in package.json |
| [#5088](https://github.com/tscircuit/tscircuit/pull/5088) | 🐌 Tiny | tscircuitbot | Updates the tscircuitcli package to version 0.1.2119 |
| [#5087](https://github.com/tscircuit/tscircuit/pull/5087) | 🐌 Tiny | tscircuitbot | Automated package update to version 0.0.2610 |
| [#5086](https://github.com/tscircuit/tscircuit/pull/5086) | 🐌 Tiny | tscircuitbot | Updates the tscircuitcli package and other related dependencies to their latest versions. |
| [#5085](https://github.com/tscircuit/tscircuit/pull/5085) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#5084](https://github.com/tscircuit/tscircuit/pull/5084) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#5083](https://github.com/tscircuit/tscircuit/pull/5083) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#5082](https://github.com/tscircuit/tscircuit/pull/5082) | 🐌 Tiny | tscircuitbot | Updates the tscircuitcli package to version 0.1.2117 |
| [#5081](https://github.com/tscircuit/tscircuit/pull/5081) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#5080](https://github.com/tscircuit/tscircuit/pull/5080) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#5079](https://github.com/tscircuit/tscircuit/pull/5079) | 🐌 Tiny | tscircuitbot | Updates the package version from 0.0.2605 to 0.0.2606 in package.json |
| [#5078](https://github.com/tscircuit/tscircuit/pull/5078) | 🐌 Tiny | tscircuitbot | Updates the tscircuitcli package to version 0.1.2116 |
| [#5077](https://github.com/tscircuit/tscircuit/pull/5077) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#5076](https://github.com/tscircuit/tscircuit/pull/5076) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#5058](https://github.com/tscircuit/tscircuit/pull/5058) | 🐌 Tiny | tscircuitbot | Updates the tscircuitcli package from version 0.1.2110 to 0.1.2111 |
| [#5069](https://github.com/tscircuit/tscircuit/pull/5069) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#5075](https://github.com/tscircuit/tscircuit/pull/5075) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#5074](https://github.com/tscircuit/tscircuit/pull/5074) | 🐌 Tiny | tscircuitbot | Updates the tscircuitcli package version from 0.1.2114 to 0.1.2115 in package.json |
| [#5071](https://github.com/tscircuit/tscircuit/pull/5071) | 🐌 Tiny | tscircuitbot | Automated package update to version 0.0.2602 |
| [#5070](https://github.com/tscircuit/tscircuit/pull/5070) | 🐌 Tiny | tscircuitbot | Updates the tscircuitcli package to version 0.1.2114 in the package.json file |
| [#5068](https://github.com/tscircuit/tscircuit/pull/5068) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#5067](https://github.com/tscircuit/tscircuit/pull/5067) | 🐌 Tiny | tscircuitbot | Automated package update to version 0.0.2600 |
| [#5066](https://github.com/tscircuit/tscircuit/pull/5066) | 🐌 Tiny | tscircuitbot | Updates the tscircuitcli package from version 0.1.2112 to 0.1.2113 |
| [#5064](https://github.com/tscircuit/tscircuit/pull/5064) | 🐌 Tiny | tscircuitbot | Updates the version of the tscircuitrunframe package from 0.0.2771 to 0.0.2772 in package.json |
| [#5063](https://github.com/tscircuit/tscircuit/pull/5063) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#5062](https://github.com/tscircuit/tscircuit/pull/5062) | 🐌 Tiny | tscircuitbot | Updates the tscircuitcli package to version 0.1.2112 in the package.json file. |
| [#5061](https://github.com/tscircuit/tscircuit/pull/5061) | 🐌 Tiny | tscircuitbot | Automated package update to version 0.0.2597 |
| [#5060](https://github.com/tscircuit/tscircuit/pull/5060) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#5056](https://github.com/tscircuit/tscircuit/pull/5056) | 🐌 Tiny | tscircuitbot | Updates the versions of several dependencies in the package.json file. |
| [#5073](https://github.com/tscircuit/tscircuit/pull/5073) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#5072](https://github.com/tscircuit/tscircuit/pull/5072) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#5059](https://github.com/tscircuit/tscircuit/pull/5059) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#5057](https://github.com/tscircuit/tscircuit/pull/5057) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#5065](https://github.com/tscircuit/tscircuit/pull/5065) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#5043](https://github.com/tscircuit/tscircuit/pull/5043) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#5042](https://github.com/tscircuit/tscircuit/pull/5042) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#5041](https://github.com/tscircuit/tscircuit/pull/5041) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#5040](https://github.com/tscircuit/tscircuit/pull/5040) | 🐌 Tiny | tscircuitbot | Updates the package version from 0.0.2586 to 0.0.2587 in package.json |
| [#5039](https://github.com/tscircuit/tscircuit/pull/5039) | 🐌 Tiny | tscircuitbot | Updates the version of the tscircuitcli package from 0.1.2104 to 0.1.2105 and the tscircuiteval package from 0.0.1424 to 0.0.1425, as well as the tscircuitrunframe package from 0.0.2762 to 0.0.2765 in the package.json file. |
| [#5055](https://github.com/tscircuit/tscircuit/pull/5055) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#5052](https://github.com/tscircuit/tscircuit/pull/5052) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#5051](https://github.com/tscircuit/tscircuit/pull/5051) | 🐌 Tiny | tscircuitbot | Updates the package version from 0.0.2591 to 0.0.2592 |
| [#5049](https://github.com/tscircuit/tscircuit/pull/5049) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#5048](https://github.com/tscircuit/tscircuit/pull/5048) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#5047](https://github.com/tscircuit/tscircuit/pull/5047) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#5046](https://github.com/tscircuit/tscircuit/pull/5046) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#5044](https://github.com/tscircuit/tscircuit/pull/5044) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#5054](https://github.com/tscircuit/tscircuit/pull/5054) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#5053](https://github.com/tscircuit/tscircuit/pull/5053) | 🐌 Tiny | tscircuitbot | Updates the package version from 0.0.2592 to 0.0.2593 in package.json |
| [#5050](https://github.com/tscircuit/tscircuit/pull/5050) | 🐌 Tiny | tscircuitbot | Updates the tscircuitcli package from version 0.1.2108 to 0.1.2109 |
| [#5038](https://github.com/tscircuit/tscircuit/pull/5038) | 🐌 Tiny | tscircuitbot | Automated package update to version 0.0.2586 |
| [#5037](https://github.com/tscircuit/tscircuit/pull/5037) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#5036](https://github.com/tscircuit/tscircuit/pull/5036) | 🐌 Tiny | tscircuitbot | Updates the tscircuitcli package to version 0.1.2104 in the package.json file. |
| [#5035](https://github.com/tscircuit/tscircuit/pull/5035) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#5034](https://github.com/tscircuit/tscircuit/pull/5034) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#5033](https://github.com/tscircuit/tscircuit/pull/5033) | 🐌 Tiny | tscircuitbot | Automated package update to version 0.0.2583 |
| [#5032](https://github.com/tscircuit/tscircuit/pull/5032) | 🐌 Tiny | tscircuitbot | Updates the tscircuitcli package to version 0.1.2103 |
| [#5031](https://github.com/tscircuit/tscircuit/pull/5031) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#5030](https://github.com/tscircuit/tscircuit/pull/5030) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#5028](https://github.com/tscircuit/tscircuit/pull/5028) | 🐌 Tiny | tscircuitbot | Updates the tscircuitcli package to version 0.1.2102 |
| [#5027](https://github.com/tscircuit/tscircuit/pull/5027) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#5026](https://github.com/tscircuit/tscircuit/pull/5026) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#5023](https://github.com/tscircuit/tscircuit/pull/5023) | 🐌 Tiny | tscircuitbot | Updates the package version from 0.0.2577 to 0.0.2578 in package.json |
| [#5022](https://github.com/tscircuit/tscircuit/pull/5022) | 🐌 Tiny | tscircuitbot | Updates the tscircuitcli package to version 0.1.2100 in the package.json file |
| [#5021](https://github.com/tscircuit/tscircuit/pull/5021) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#5020](https://github.com/tscircuit/tscircuit/pull/5020) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#5016](https://github.com/tscircuit/tscircuit/pull/5016) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#5015](https://github.com/tscircuit/tscircuit/pull/5015) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#5014](https://github.com/tscircuit/tscircuit/pull/5014) | 🐌 Tiny | tscircuitbot | Updates the version of several packages in the project, including tscircuitcli, tscircuitcore, and tscircuiteval. |
| [#5013](https://github.com/tscircuit/tscircuit/pull/5013) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#5012](https://github.com/tscircuit/tscircuit/pull/5012) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#5029](https://github.com/tscircuit/tscircuit/pull/5029) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#5025](https://github.com/tscircuit/tscircuit/pull/5025) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#5019](https://github.com/tscircuit/tscircuit/pull/5019) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#5024](https://github.com/tscircuit/tscircuit/pull/5024) | 🐌 Tiny | tscircuitbot | Updates the version of the tscircuitrunframe package from 0.0.2757 to 0.0.2758 in package.json |
| [#5018](https://github.com/tscircuit/tscircuit/pull/5018) | 🐌 Tiny | tscircuitbot | Updates the tscircuitcli package to version 0.1.2099 in the package.json file |
| [#5017](https://github.com/tscircuit/tscircuit/pull/5017) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#5011](https://github.com/tscircuit/tscircuit/pull/5011) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#5010](https://github.com/tscircuit/tscircuit/pull/5010) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#5006](https://github.com/tscircuit/tscircuit/pull/5006) | 🐌 Tiny | tscircuitbot | Updates the version of the tscircuitrunframe package from 0.0.2748 to 0.0.2749 in package.json |
| [#5005](https://github.com/tscircuit/tscircuit/pull/5005) | 🐌 Tiny | tscircuitbot | Automated package update to version 0.0.2569 |
| [#5004](https://github.com/tscircuit/tscircuit/pull/5004) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#5002](https://github.com/tscircuit/tscircuit/pull/5002) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#5007](https://github.com/tscircuit/tscircuit/pull/5007) | 🐌 Tiny | tscircuitbot | Updates the package version from 0.0.2569 to 0.0.2570 in package.json |
| [#5003](https://github.com/tscircuit/tscircuit/pull/5003) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#5009](https://github.com/tscircuit/tscircuit/pull/5009) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#5008](https://github.com/tscircuit/tscircuit/pull/5008) | 🐌 Tiny | tscircuitbot | Updates the tscircuitcli package to version 0.1.2095 in the package.json file. |
| [#5001](https://github.com/tscircuit/tscircuit/pull/5001) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#5000](https://github.com/tscircuit/tscircuit/pull/5000) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#4998](https://github.com/tscircuit/tscircuit/pull/4998) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#4997](https://github.com/tscircuit/tscircuit/pull/4997) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#4996](https://github.com/tscircuit/tscircuit/pull/4996) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#4994](https://github.com/tscircuit/tscircuit/pull/4994) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#4999](https://github.com/tscircuit/tscircuit/pull/4999) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#4995](https://github.com/tscircuit/tscircuit/pull/4995) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#4993](https://github.com/tscircuit/tscircuit/pull/4993) | 🐌 Tiny | tscircuitbot | Automated package update |

</details>

### [tscircuit/circuit-to-svg](https://github.com/tscircuit/circuit-to-svg)

| PR # | Impact | Rating | Contributor | Description |
|------|--------|--------|-------------|-------------|
| [#752](https://github.com/tscircuit/circuit-to-svg/pull/752) | 🐳 Major | ⭐⭐⭐ | techmannih | Standalone and trace-route vias inherit omitted tenting fields from their owning board, preserving explicit per-side and legacy overrides. |
| [#766](https://github.com/tscircuit/circuit-to-svg/pull/766) | 🐙 Minor | ⭐⭐ | techmannih | Clips the via tenting overlay at exposed SMT pad openings to ensure the pad remains exposed while the rest of the via is tented, including in GLB textures generated from the renderer. |
| [#768](https://github.com/tscircuit/circuit-to-svg/pull/768) | 🐙 Minor | ⭐⭐ | techmannih | Fixes rendering issue where tented vias erase overlapping silkscreen text by placing tented vias in the viewed surface layer when soldermask is shown. |

<details>
<summary>🐌 Tiny Contributions (5)</summary>

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#779](https://github.com/tscircuit/circuit-to-svg/pull/779) | 🐌 Tiny | imrishabh18 | Fixes concurrent npm release version conflicts by serializing publish runs and ensuring queued runs include previous release commits before installation and building. |
| [#771](https://github.com/tscircuit/circuit-to-svg/pull/771) | 🐌 Tiny | seveibar | Fixes alignment of scaled schematic symbols to ensure that resistor symbols with non-native pin spacing meet their traces correctly. |
| [#769](https://github.com/tscircuit/circuit-to-svg/pull/769) | 🐌 Tiny | seveibar | Fixes the offset of scaled schematic symbols to ensure resistor terminals align with their corresponding Circuit JSON pin coordinates. |
| [#770](https://github.com/tscircuit/circuit-to-svg/pull/770) | 🐌 Tiny | seveibar | Reproduces resistor symbols drifting away from their trace endpoints when Circuit JSON pin spacing differs from the symbols native spacing. |
| [#763](https://github.com/tscircuit/circuit-to-svg/pull/763) | 🐌 Tiny | seveibar | Add xRayElementIds and hiddenLayerOpacity to PCB SVG rendering, allowing users to inspect one or more nets with selected copper and associated viaplated-hole drills rendered fully opaque across all copper layers while other copper is dimmed. |

</details>

### [tscircuit/schematic-trace-solver](https://github.com/tscircuit/schematic-trace-solver)

| PR # | Impact | Rating | Contributor | Description |
|------|--------|--------|-------------|-------------|
| [#1226](https://github.com/tscircuit/schematic-trace-solver/pull/1226) | 🐳 Major | ⭐⭐⭐ | mohan-bee | Removes old trace loops left behind when rerouting around label connectors, optimizing path selection for cleaner routing. |
| [#1219](https://github.com/tscircuit/schematic-trace-solver/pull/1219) | 🐳 Major | ⭐⭐⭐ | mohan-bee | Prevents junction alignment from causing different-net supply rails to visually overlap by rejecting new stroke contacts while allowing cleanup of existing touching nets, maintaining specified separation distances. |
| [#1215](https://github.com/tscircuit/schematic-trace-solver/pull/1215) | 🐳 Major | ⭐⭐⭐ | hrithik18k | Shortens same-side rails in schematics by routing through nearby net-label columns when a shorter path is available, improving schematic clarity and compactness. |
| [#1229](https://github.com/tscircuit/schematic-trace-solver/pull/1229) | 🐳 Major | ⭐⭐⭐ | MustafaMulla29 | Fixes alignment of C99 with the labeled rail and reduces the L34 ground route from eight vertices to six, while allowing a rail group to include a multi-turn backbone on fixed label coordinates. |
| [#1222](https://github.com/tscircuit/schematic-trace-solver/pull/1222) | 🐳 Major | ⭐⭐⭐ | MustafaMulla29 | Fixes net label orientation handling to prevent collisions and ensure correct placement of inline labels during schematic trace solving. |
| [#1209](https://github.com/tscircuit/schematic-trace-solver/pull/1209) | 🐙 Minor | ⭐⭐ | hrithik18k | Fixes overlapping GND label for shared pin branch by allowing downward GND labels to search past colliding traces and placing the shared GND symbol below nearby signal traces without overlap. |
| [#1195](https://github.com/tscircuit/schematic-trace-solver/pull/1195) | 🐙 Minor | ⭐⭐ | hrithik18k | Fixes the net-label branch origin to prefer the nearest host-trace endpoint pin when placing a vertical label for a two-pin branch of a larger non-ground net, ensuring the V3V3 branch is rooted directly at R8 instead of the interior junction. |
| [#1223](https://github.com/tscircuit/schematic-trace-solver/pull/1223) | 🐙 Minor | ⭐⭐ | GokulPandi-M | Fixes routing issue where traces stop at component boundaries instead of reaching the intended ports. |
| [#1213](https://github.com/tscircuit/schematic-trace-solver/pull/1213) | 🐙 Minor | ⭐⭐ | GokulPandi-M | Prevents recovery from adding redundant routes for already connected same-net pairs in the autorouting process. |

<details>
<summary>🐌 Tiny Contributions (10)</summary>

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#1243](https://github.com/tscircuit/schematic-trace-solver/pull/1243) | 🐌 Tiny | imrishabh18 | Fixes the VREG_IN power labels attachment and orientation to prevent it from being treated as a tag instead of a power symbol, ensuring it retains its upward orientation and correct anchor point during schematic processing. |
| [#1242](https://github.com/tscircuit/schematic-trace-solver/pull/1242) | 🐌 Tiny | imrishabh18 | Reproduces the issue of the RP2040 motor controllers VREG_IN wire ending in an unlabeled stub while its V3V3 label appears below the wire instead of as an upward power symbol. |
| [#1205](https://github.com/tscircuit/schematic-trace-solver/pull/1205) | 🐌 Tiny | seveibar | Adds a reduced repro for the J_SD, J_SPI, J_I2C, and J_USB0 connector section on sheet 3 of the AM3352 dev board, providing a baseline for improving power and ground rail routing and label placement. |
| [#1208](https://github.com/tscircuit/schematic-trace-solver/pull/1208) | 🐌 Tiny | tscircuitbot | Adds a snapshot-only regression test and debugger page for the attached JSON solver input. |
| [#1187](https://github.com/tscircuit/schematic-trace-solver/pull/1187) | 🐌 Tiny | tscircuitbot | Adds a snapshot-only regression test and debugger page for the attached JSON solver input. |
| [#1231](https://github.com/tscircuit/schematic-trace-solver/pull/1231) | 🐌 Tiny | mohan-bee | Refreshes the AM3352 interfaces snapshot to align with recent routing fixes, ensuring all tests pass with 4 skipped. |
| [#1224](https://github.com/tscircuit/schematic-trace-solver/pull/1224) | 🐌 Tiny | mohan-bee | Add full AM3352 03-Interfaces sheet reproduction including all connectors and a test for the solver. |
| [#1225](https://github.com/tscircuit/schematic-trace-solver/pull/1225) | 🐌 Tiny | mohan-bee | Add a complete reproduction of the AM3352 06-Boot sheet, including solver input and a test case. |
| [#1228](https://github.com/tscircuit/schematic-trace-solver/pull/1228) | 🐌 Tiny | MustafaMulla29 | Adds a standalone repro for the complete ble_module schematic sheet from imrishabh18smart-lock v0.0.1(https:tscircuit.comimrishabh18smart-lockschematic), so its routing can be inspected and compared in this repo. The shared JSON fixture preserves all 39 components, 123 schematic pins, 16 direct connections, and 37 named nets. It is used by a Bun snapshot test and a Cosmos PipelineDebugger page. Source net names and component names are included for readable snapshots. The input is reconstructed from deployed Circuit JSON with current core input-generation defaults, including maxMspPairDistance: 2.4. It is not an original-build solver capture. This PR adds the repro only; it does not change solver behavior. Validation: bun test: 413 passed, 4 skipped, 0 failed. Re-ran the new snapshot test after adding display metadata. bunx tsc --noEmit and bun run format:check passed. Generated all 24 pipeline-stage artifacts and visually inspected the final snapshot. Audited all pin coordinatesdirections, direct connections, and named-net memberships against the deployed Circuit JSON. Run the repro with bun test testsreprosrepro-smart-lock-ble-module.test.ts, or run bun start and open SchematicTracePipelineSolverrepro-smart-lock-ble-module. |
| [#1211](https://github.com/tscircuit/schematic-trace-solver/pull/1211) | 🐌 Tiny | GokulPandi-M | Reproduces a bug where two long, near-parallel branches on the same VREF net are generated, leading to redundant traces in the schematic. |

</details>

### [tscircuit/ti](https://github.com/tscircuit/ti)


<details>
<summary>🐌 Tiny Contributions (3)</summary>

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#242](https://github.com/tscircuit/ti/pull/242) | 🐌 Tiny | imrishabh18 | Adds a public npm distribution for the TI library, allowing installation via npm while preserving the existing registry name and source entrypoint. |
| [#240](https://github.com/tscircuit/ti/pull/240) | 🐌 Tiny | techmannih | Updates the Altium export dependencies to include the latest native pin-label positioning, marker sizing, and pin connection fixes. |
| [#239](https://github.com/tscircuit/ti/pull/239) | 🐌 Tiny | techmannih | Update the System Block UIs Altium export dependencies to use merged native custom-power support, preserving thin GNDVDD symbol strokes. |

</details>

### [tscircuit/fabricator-drc](https://github.com/tscircuit/fabricator-drc)


<details>
<summary>🐌 Tiny Contributions (1)</summary>

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#2](https://github.com/tscircuit/fabricator-drc/pull/2) | 🐌 Tiny | imrishabh18 | Makes circuit-json a peer dependency to ensure a shared schema and upgrades to version 0.0.493 for development, while adding regression tests for source_bus records compatibility. |

</details>

### [tscircuit/props](https://github.com/tscircuit/props)

| PR # | Impact | Rating | Contributor | Description |
|------|--------|--------|-------------|-------------|
| [#858](https://github.com/tscircuit/props/pull/858) | 🐳 Major | ⭐⭐⭐ | seveibar | Proposes assembly.subassembly as a generic named mechanical assembly and assembly.cadassembly as an exact alias, both using the same Zod schema and exporting equivalent propsinput types. |
| [#855](https://github.com/tscircuit/props/pull/855) | 🐳 Major | ⭐⭐⭐ | seveibar | Proposes keepout allowTraces  and keepout allowPlacements  for rectangular and circular keepouts, allowing trace crossings and component placements while managing keepout diagnostics. |
| [#862](https://github.com/tscircuit/props/pull/862) | 🐙 Minor | ⭐⭐ | seveibar | Removes the connectsTo field from assembly.subassembly and its alias assembly.cadassembly, as containment is expressed through nesting, and updates related tests and documentation accordingly. |
| [#854](https://github.com/tscircuit/props/pull/854) | 🐙 Minor | ⭐⭐ | seveibar | Adds optional warningOnly boolean support to both circle and rectangle PCB keepout props, preserving existing inputs and requiring no migration. |

### [tscircuit/3d-viewer](https://github.com/tscircuit/3d-viewer)

| PR # | Impact | Rating | Contributor | Description |
|------|--------|--------|-------------|-------------|
| [#1000](https://github.com/tscircuit/3d-viewer/pull/1000) | 🐳 Major | ⭐⭐⭐ | seveibar | Render mechanical CAD without requiring or inferring a PCB owner, allowing for standalone CAD models without faux boards or height offsets. |
| [#996](https://github.com/tscircuit/3d-viewer/pull/996) | 🐳 Major | ⭐⭐⭐ | techmannih | TEST https:3d-viewer-2z0142pe4-tscircuit.vercel.app?pathstoryvia-tenting--board-defaults-and-overrides https:3d-viewer-2z0142pe4-tscircuit.vercel.app?pathstoryvia-tenting--silkscreen-and-pad-overlap Render standalone and trace-route vias using their owning boards tenting defaults and explicit per-side overrides. Silkscreen stays visible over tented vias and clears exposed drill openings. circuit-to-canvas 0.0.131 keeps overlapping pad openings exposed and uses the shared board ownership resolver. Trace-route vias now use the existing Manifold and JSCAD drillcopper builders, so exposed centres are real holes through the board. Via collection respects board-specific drillpad sizes and explicit route-via dimensions. It indexes vias by board and position, then compares layer spans only at that position to skip standalone and repeated-route duplicates without scanning the entire via list for each route point. Reuse createBoardOwnerMap from tscircuitcircuit-json-util 0.0.116 (tscircuitcircuit-json-util197), removing the custom ownership traversal from getPcbVias. Ownership follows Circuit JSON IDs, including nested groups and panels. Development uses 0.0.116; the existing wildcard peer dependency is retained. Stories on the current preview: Board Defaults And Overrides(https:3d-viewer-2z0142pe4-tscircuit.vercel.app?pathstoryvia-tenting--board-defaults-and-overrides) shows standalone and route vias on two boards with opposite defaults, using the exact Circuit JSON property names in its labels. Silkscreen And Pad Overlap(https:3d-viewer-2z0142pe4-tscircuit.vercel.app?pathstoryvia-tenting--silkscreen-and-pad-overlap) shows PB1 crossing tentedexposed vias and pads partially overlapping their rings on both faces. Validation: Geometry and aperture regression tests pass (2 tests, 14 assertions), including both geometry engines, board drill defaults, and standalonerepeated-route duplicate handling with reversed layer direction. Local comparison with the previous collector preserves nested ownership, separate boards at identical coordinates, board and explicit dimensions, standalonerepeated-route deduplication, generated IDs, tenting overrides, single-board fallback, and unresolved ownership. Opened both stories in the browser with the Manifold renderer and checked their top and bottom views. Tented vias retain silkscreen text, exposed vias have drill openings, and overlapping pad openings remain exposed. Captured screenshots of all four views. Local warmed-up benchmark, median of three runs with 10,000 route vias at distinct positions: approximately 420 ms before indexing and 2.6 ms after, with identical collected vias. Typecheck, formatting of tracked files, package build, and Node bundle load pass with the published utility package. GitHub format, typecheck, Node bundle, and Vercel checks pass on 2cdfdef. The full local suite is not claimed clean: broader checks previously found two unrelated faux-board placement failures. Related to tscircuitcore3903 and tscircuitcircuit-to-canvas291. |

<details>
<summary>🐌 Tiny Contributions (3)</summary>

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#1001](https://github.com/tscircuit/3d-viewer/pull/1001) | 🐌 Tiny | seveibar | Disables the renderer comparison diagnostics job in the CI workflow to prevent unnecessary runner allocation while keeping the workflow steps available for future re-enablement. |
| [#997](https://github.com/tscircuit/3d-viewer/pull/997) | 🐌 Tiny | addibble | Summary Add diagnostic Storybook stories and browser comparisons of the actual 3d-viewer against GLBs generated by pinned, development-only circuit-json-to-gltf0.0.129. This PR changes neither production renderer. There are no changes under src or lib, no renderer corrections hidden in the harness, and no approved screenshot baselines. Existing differences deliberately remain visible as failing, non-blocking diagnostics.  What reviewers can see Run bun run storybook:comparisons to open Diagnostics  Renderer Parity  X Rotation directly. Each story automatically shows both oblique and side comparisons: the normal rendered boards, unlit component geometry, edge maps, redcyan overlay, and downloadable PNGs with camera metadata and metrics. Bottom-layer stories look from below. The inputs isolate XY signs, mixed-axis order, missing and explicit nonzero origins, implicit bottom-layer orientation, and binary GLB dispatch through gltfUrl. Oblique angle probes avoid quarter-turn symmetries. Explicit-origin zeroZ cases are controls. The USB mounting example uses the measured native Z-up model with rotation (0,0,270), an explicit datum and common reference board. Only that fixtures two pill slots are rotated 90 degrees to accept the metal tabs. A geometry test checks all four tabs against the apertures and all five contacts against the pads. The captured input is preserved, and its original missing-origin case remains a separate diagnostic.  Comparison contract Identical local model bytes and Circuit JSON feed both real rendering paths; models are not fetched from ModelCDN during tests. Only the fixed final GLB-to-project coordinate basis is normalized. No registration, recentering, rescaling, or pose correction is allowed. Component-only captures preserve loaded world transforms and use shared 640x640 orthographic cameras, white unlit double-sided surfaces, black backgrounds, and depth-tested crease lines. The same pure matcher runs in the browser UI and tests: bidirectional Euclidean edge coverage, 1.5 px tolerance, at most 1 unmatched edges independently on either side. Empty or clipped captures fail. Viewer-only calibration accepts identical copies and rejects deliberate sign, Euler-order and 0.2248885 mm translation defects. It does not load an exported GLB.  CI and local results GitHub Actions installs matching ChromiumLinux libraries and uses Node 22, Bun 1.3.14 and software WebGL. Matcherunit tests and calibration are blocking. Actual renderer comparisons retain ordinary failed assertions, reports, images and traces but are intentionally non-blocking. Missingmalformed reports and runner failures still produce errors from the diagnostic wrapper; the workflow marks only the diagnostic step continue-on-error. Vercel continues to host Storybook, not run the browser suite. build-storybook now prepares the local comparison assets, so the existing vercel-build entry point includes working stories. Local results:  Scope  Result   ---  ---   New matcher, runner, camera, probe and USB geometry tests  77 passed   Browser calibration  2 passed   Pairwise renderer diagnostics  6 passed, 18 failed as retained diagnostic evidence   Typecheck, formatting, production build and Node import  Passed   Static Storybook build and built XUSB stories  Passed   Workspace PR gates  910 passed; full Bun suite has 132 passed and 5 unrelated failures  All five full-suite failures reproduce on an untouched archive of base commit d18b6fe with the same installed dependencies: two faux-board Z assertions in preprocess-circuit-json.test.ts, the soldermask-color assertion in outline-bounds.test.ts, and the SVG snapshots in convert-3d-view-to-svg-top-view.test.ts and convert-3d-view-to-svg-with-multiple-elements.test.ts. This PR does not change those tests, snapshots, or renderer behavior. The 18 diagnostic failures cover XYmixed rotations, missing origins, the glTF origin and bottom-layer cases, and GLB dispatch. ZeroZ controls and the physically mounted USB match in both views. These are observations, not newly approved expected images; future renderer fixes can turn the actual comparisons green. GitHub-hosted CI results are separate from these local results.  X37 degrees: actual unlit geometry and unmatched-edge overlay (red: viewer; cyan: circuit-json-to-gltf). !pr-x37-geometry.png(https:github.comuser-attachmentsassets569dafb4-1e81-4447-9cdc-4f88a554e009)  Physically seated USB: shared board and measured placement in both rendering paths. !pr-usb-mounted-context.png(https:github.comuser-attachmentsassets45c0e73f-e20b-4e5a-8284-63f271998288)  Seated USB control: component geometry matches despite differences in normal rendering materials. !pr-usb-mounted-geometry.png(https:github.comuser-attachmentsassetse3b44f6f-7ee6-40a6-a076-a9ca6ac93a06) |
| [#995](https://github.com/tscircuit/3d-viewer/pull/995) | 🐌 Tiny | Devesh36 | Updates the jscad-electronics dependency to version 0.0.178 to include newer footprint geometry and rotation handling for the interactive 3D viewer. |

</details>

### [tscircuit/tscircuit.com](https://github.com/tscircuit/tscircuit.com)

| PR # | Impact | Rating | Contributor | Description |
|------|--------|--------|-------------|-------------|
| [#4988](https://github.com/tscircuit/tscircuit.com/pull/4988) | 🐳 Major | ⭐⭐⭐ | seveibar | Add per-view actions to package settings: failed images have Retry image, and ready images have Regenerate image. Each action requests only that angle, updates its status, and resumes polling. Controls are author-only and unavailable while that view is processing or its request is pending. Request errors stay on the relevant card. Preview queries now include the render attempt ID so a completed replacement fetches fresh PNG data instead of reusing the previous image. Replace the outdated cannot be restarted message with guidance explaining that regeneration replaces only the selected image, and keep long renderer errors wrapped and scrollable inside their card. The local fake API also supports regeneration of completed views. No production API change is required: the merged API already supports retry_failed: true and regenerate: true on package_releasescreate_render_image, preserving the original circuit snapshot. Validation: TypeScript and formatting checks; render-settings Playwright coverage for desktopmobile generation, individual retryregeneration, request failures, unchanged sibling images, fresh PNG fetches, and author permissions; fake API regression test for regeneration, pending-job idempotence, original-board preservation, and authorization. |
| [#4962](https://github.com/tscircuit/tscircuit.com/pull/4962) | 🐳 Major | ⭐⭐⭐ | seveibar | Excludes partial datasheets from the index, ensuring only fully populated records are listed and displayed to users. |
| [#4960](https://github.com/tscircuit/tscircuit.com/pull/4960) | 🐳 Major | ⭐⭐⭐ | seveibar | datasheets now lists every indexed chip in a compact alphabetical grid of links, with a result count and name search. It fetches all matching datasheets in a single request without a popularity filter. The fake API mirrors the complete list and substring search. |

<details>
<summary>🐌 Tiny Contributions (63)</summary>

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#5021](https://github.com/tscircuit/tscircuit.com/pull/5021) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#5019](https://github.com/tscircuit/tscircuit.com/pull/5019) | 🐌 Tiny | tscircuitbot | Updates the tscircuiteval package from version 0.0.1438 to 0.0.1440 |
| [#5018](https://github.com/tscircuit/tscircuit.com/pull/5018) | 🐌 Tiny | tscircuitbot | Updates the tscircuitrunframe package from version 0.0.2782 to 0.0.2783 |
| [#5017](https://github.com/tscircuit/tscircuit.com/pull/5017) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#5015](https://github.com/tscircuit/tscircuit.com/pull/5015) | 🐌 Tiny | tscircuitbot | Updates the tscircuitrunframe package from version 0.0.2780 to 0.0.2781 |
| [#5014](https://github.com/tscircuit/tscircuit.com/pull/5014) | 🐌 Tiny | tscircuitbot | Updates the tscircuiteval package from version 0.0.1437 to 0.0.1438 |
| [#5013](https://github.com/tscircuit/tscircuit.com/pull/5013) | 🐌 Tiny | tscircuitbot | Updates the tscircuitrunframe package version from 0.0.2779 to 0.0.2780 |
| [#5012](https://github.com/tscircuit/tscircuit.com/pull/5012) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#5011](https://github.com/tscircuit/tscircuit.com/pull/5011) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#5009](https://github.com/tscircuit/tscircuit.com/pull/5009) | 🐌 Tiny | tscircuitbot | Updates the tscircuiteval package from version 0.0.1434 to 0.0.1435 |
| [#5008](https://github.com/tscircuit/tscircuit.com/pull/5008) | 🐌 Tiny | tscircuitbot | Updates the tscircuitrunframe package to version 0.0.2777 in the package.json file |
| [#5007](https://github.com/tscircuit/tscircuit.com/pull/5007) | 🐌 Tiny | tscircuitbot | Updates the tscircuiteval package from version 0.0.1433 to 0.0.1434 |
| [#5006](https://github.com/tscircuit/tscircuit.com/pull/5006) | 🐌 Tiny | tscircuitbot | Updates the tscircuitrunframe package to version 0.0.2776 |
| [#5005](https://github.com/tscircuit/tscircuit.com/pull/5005) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#5004](https://github.com/tscircuit/tscircuit.com/pull/5004) | 🐌 Tiny | tscircuitbot | Updates the tscircuitrunframe package from version 0.0.2774 to 0.0.2775 |
| [#5003](https://github.com/tscircuit/tscircuit.com/pull/5003) | 🐌 Tiny | tscircuitbot | Updates the tscircuiteval package from version 0.0.1429 to 0.0.1432 |
| [#5002](https://github.com/tscircuit/tscircuit.com/pull/5002) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#4999](https://github.com/tscircuit/tscircuit.com/pull/4999) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#4996](https://github.com/tscircuit/tscircuit.com/pull/4996) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#4995](https://github.com/tscircuit/tscircuit.com/pull/4995) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#4994](https://github.com/tscircuit/tscircuit.com/pull/4994) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#4993](https://github.com/tscircuit/tscircuit.com/pull/4993) | 🐌 Tiny | tscircuitbot | Updates the tscircuiteval package from version 0.0.1423 to 0.0.1428 |
| [#4992](https://github.com/tscircuit/tscircuit.com/pull/4992) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#4991](https://github.com/tscircuit/tscircuit.com/pull/4991) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#4989](https://github.com/tscircuit/tscircuit.com/pull/4989) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#4987](https://github.com/tscircuit/tscircuit.com/pull/4987) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#4985](https://github.com/tscircuit/tscircuit.com/pull/4985) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#4983](https://github.com/tscircuit/tscircuit.com/pull/4983) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#4982](https://github.com/tscircuit/tscircuit.com/pull/4982) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#4981](https://github.com/tscircuit/tscircuit.com/pull/4981) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#4980](https://github.com/tscircuit/tscircuit.com/pull/4980) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#4975](https://github.com/tscircuit/tscircuit.com/pull/4975) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#4974](https://github.com/tscircuit/tscircuit.com/pull/4974) | 🐌 Tiny | tscircuitbot | Updates the tscircuiteval package from version 0.0.1421 to 0.0.1422 in the package.json file. |
| [#4958](https://github.com/tscircuit/tscircuit.com/pull/4958) | 🐌 Tiny | tscircuitbot | Updates the tscircuiteval package from version 0.0.1416 to 0.0.1417 |
| [#4977](https://github.com/tscircuit/tscircuit.com/pull/4977) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#4976](https://github.com/tscircuit/tscircuit.com/pull/4976) | 🐌 Tiny | tscircuitbot | Updates the tscircuiteval package from version 0.0.1422 to 0.0.1423 |
| [#4973](https://github.com/tscircuit/tscircuit.com/pull/4973) | 🐌 Tiny | tscircuitbot | Updates the tscircuitrunframe package to version 0.0.2758 |
| [#4971](https://github.com/tscircuit/tscircuit.com/pull/4971) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#4970](https://github.com/tscircuit/tscircuit.com/pull/4970) | 🐌 Tiny | tscircuitbot | Updates the tscircuitrunframe package from version 0.0.2754 to 0.0.2756 |
| [#4969](https://github.com/tscircuit/tscircuit.com/pull/4969) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#4967](https://github.com/tscircuit/tscircuit.com/pull/4967) | 🐌 Tiny | tscircuitbot | Updates the tscircuiteval package from version 0.0.1418 to 0.0.1419 |
| [#4965](https://github.com/tscircuit/tscircuit.com/pull/4965) | 🐌 Tiny | tscircuitbot | Updates the tscircuitrunframe package from version 0.0.2752 to 0.0.2754 |
| [#4964](https://github.com/tscircuit/tscircuit.com/pull/4964) | 🐌 Tiny | tscircuitbot | Updates the tscircuiteval package from version 0.0.1417 to 0.0.1418 |
| [#4963](https://github.com/tscircuit/tscircuit.com/pull/4963) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#4961](https://github.com/tscircuit/tscircuit.com/pull/4961) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#4972](https://github.com/tscircuit/tscircuit.com/pull/4972) | 🐌 Tiny | tscircuitbot | Updates the tscircuiteval package from version 0.0.1420 to 0.0.1421 |
| [#4953](https://github.com/tscircuit/tscircuit.com/pull/4953) | 🐌 Tiny | tscircuitbot | Updates the tscircuitrunframe package from version 0.0.2747 to 0.0.2749 and the tscircuitpcb-viewer package from version 1.11.398 to 1.11.399 in package.json |
| [#4951](https://github.com/tscircuit/tscircuit.com/pull/4951) | 🐌 Tiny | tscircuitbot | Updates the tscircuiteval package from version 0.0.1411 to 0.0.1415 |
| [#4956](https://github.com/tscircuit/tscircuit.com/pull/4956) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#4955](https://github.com/tscircuit/tscircuit.com/pull/4955) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#4954](https://github.com/tscircuit/tscircuit.com/pull/4954) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#4957](https://github.com/tscircuit/tscircuit.com/pull/4957) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#4948](https://github.com/tscircuit/tscircuit.com/pull/4948) | 🐌 Tiny | tscircuitbot | Updates the tscircuitrunframe package from version 0.0.2745 to 0.0.2746 and the tscircuitpcb-viewer package from version 1.11.397 to 1.11.398. |
| [#4938](https://github.com/tscircuit/tscircuit.com/pull/4938) | 🐌 Tiny | tscircuitbot | Updates the tscircuitrunframe package from version 0.0.2738 to 0.0.2739 |
| [#4944](https://github.com/tscircuit/tscircuit.com/pull/4944) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#4942](https://github.com/tscircuit/tscircuit.com/pull/4942) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#4936](https://github.com/tscircuit/tscircuit.com/pull/4936) | 🐌 Tiny | tscircuitbot | Updates the tscircuitrunframe package from version 0.0.2737 to 0.0.2738 |
| [#4950](https://github.com/tscircuit/tscircuit.com/pull/4950) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#4946](https://github.com/tscircuit/tscircuit.com/pull/4946) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#4941](https://github.com/tscircuit/tscircuit.com/pull/4941) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#4939](https://github.com/tscircuit/tscircuit.com/pull/4939) | 🐌 Tiny | tscircuitbot | Updates the tscircuiteval package from version 0.0.1410 to 0.0.1411 |
| [#4947](https://github.com/tscircuit/tscircuit.com/pull/4947) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#4937](https://github.com/tscircuit/tscircuit.com/pull/4937) | 🐌 Tiny | tscircuitbot | Updates the tscircuiteval package from version 0.0.1409 to 0.0.1410. |

</details>

### [tscircuit/docs](https://github.com/tscircuit/docs)

| PR # | Impact | Rating | Contributor | Description |
|------|--------|--------|-------------|-------------|
| [#890](https://github.com/tscircuit/docs/pull/890) | 🐳 Major | ⭐⭐⭐ | seveibar | Moves the AI callout to follow the first top-level prose paragraph in guides, ensuring readers see the subject introduction first. |

<details>
<summary>🐌 Tiny Contributions (4)</summary>

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#892](https://github.com/tscircuit/docs/pull/892) | 🐌 Tiny | seveibar | Adds concise entries for warningOnly, allowTraces, allowPlacements, and excludeRefs to the existing keepout properties table, detailing their defaults and independent permissions. |
| [#893](https://github.com/tscircuit/docs/pull/893) | 🐌 Tiny | seveibar | Documents the X-Ray export flags and PCB PNG format, with an example in the existing export reference. |
| [#889](https://github.com/tscircuit/docs/pull/889) | 🐌 Tiny | seveibar | This PR changes the getting-started documentation to lead with AI usage for setup and replaces terminal screenshots with a server-rendered terminal component that displays commands and output as selectable text. |
| [#888](https://github.com/tscircuit/docs/pull/888) | 🐌 Tiny | seveibar | Add useCloudAutorouting to the configuration options table in the tscircuit.config.json reference, describing its use for CLI builds, exports, and snapshots. |

</details>

### [tscircuit/high-density-repair02](https://github.com/tscircuit/high-density-repair02)

| PR # | Impact | Rating | Contributor | Description |
|------|--------|--------|-------------|-------------|
| [#71](https://github.com/tscircuit/high-density-repair02/pull/71) | 🐳 Major | ⭐⭐⭐ | seveibar | Repair copper-clearance violations directly in native high-density nodes before stitching. The pass checks tracetrace, tracevia, individual viavia, and pad clearance against the nodes routes and immutable neighboring copper. It preserves ports, net identity, and layer transitions without reconstructing a bounded board region. The correction moves the free interior endpoint of a port-adjacent segment, budgets work by the number of conflicts, and tracks each via and trace layer separately so improving one contact cannot hide another. An optional repairBoundaryDiagonals: false keeps DRC-clean boundary geometry unchanged while still checking every node. Conflict-key and frame-stat caches avoid repeated geometry bookkeeping. Validation: 92 tests pass locally and in CI, including congested vias, immutable neighboring copper, unchanged clean boundary routes, and the masked-via-contact regression. Type checking and formatting pass. Integration and dataset18 benchmark results are tracked in https:github.comtscircuittscircuit-autorouterpull2642. |

### [tscircuit/check-shorts](https://github.com/tscircuit/check-shorts)

| PR # | Impact | Rating | Contributor | Description |
|------|--------|--------|-------------|-------------|
| [#58](https://github.com/tscircuit/check-shorts/pull/58) | 🐳 Major | ⭐⭐⭐ | seveibar | Fixes detection of edge contacts between pads and copper pours in bitmap shorts checks, ensuring accurate identification of potential shorts in PCB designs. |

### [tscircuit/length-matching-solver](https://github.com/tscircuit/length-matching-solver)

| PR # | Impact | Rating | Contributor | Description |
|------|--------|--------|-------------|-------------|
| [#70](https://github.com/tscircuit/length-matching-solver/pull/70) | 🐳 Major | ⭐⭐⭐ | seveibar | Fixes the issue where the DDR_D0 matcher rejected meanders due to unchanged lead clearances, allowing for successful matching while preserving existing terminal leads. |

<details>
<summary>🐌 Tiny Contributions (1)</summary>

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#69](https://github.com/tscircuit/length-matching-solver/pull/69) | 🐌 Tiny | seveibar | This PR reproduces a bug where the LengthMatchingSolver exhausts its meander search for DDR_D0, adding a test to confirm the failure without altering production solver functionality. |

</details>

### [tscircuit/modelprinter](https://github.com/tscircuit/modelprinter)

| PR # | Impact | Rating | Contributor | Description |
|------|--------|--------|-------------|-------------|
| [#1](https://github.com/tscircuit/modelprinter/pull/1) | 🐳 Major | ⭐⭐⭐ | seveibar | Adds metric hex socket bolts to modelprinters string API, schemas and exported model union. mp.string(hexsocketbolt_m3_l6mm).json() resolves to an M3 bolt with a 6 mm under-head length. Supports M2, M2.5, M3, M4, M5, M6, M8, M10 and M12, unit-bearing lengths and optional smooth shanks. The renderer-independent indexed mesh generator produces a blind hex socket, chamfered headtip and approximate coarse right-hand threads. A single visual test renders an M3  6 mm bolt in four orthographic views using PoppyGL and compares the result with a committed PNG. The parser and mesh assertions remain in helper functions invoked by that test. No browser or system fonts are needed. !PoppyGL M3  6 mm: isometric, top, front and underside(https:raw.githubusercontent.comtscircuitmodelprinter403398dc571c14b26a52c7f215f9700cf0fb4939tests__snapshots__hex-socket-bolt.snap.png) AGENTS.md documents that new models must not change README.md, all snapshots must use PoppyGL, and each test file must contain exactly one visual test with no describe blocks. README.md is unchanged. Validation: the visual regression test passes with 889 assertions; typecheck, formatting and build pass. The PoppyGL image was regenerated and visually inspected. Downstream CAD viewers still need to register the new model family. |

<details>
<summary>🐌 Tiny Contributions (1)</summary>

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#2](https://github.com/tscircuit/modelprinter/pull/2) | 🐌 Tiny | seveibar | Configures publishing as the unscoped modelprinter package. Build output and declarations are generated and ignored, with dist removed from Git. Buildprepack stage index.js, index.d.ts and index.js.map at the package root; the npm files allowlist excludes dist entirely. Disables Bun lockfile saving in bunfig.toml, removes bun.lock, and updates CIrelease workflows to install without a frozen lockfile and validate npm packaging. The release workflow supports NPM_TOKEN or configured npm trusted publishing. AGENTS.md reflects the generated-file and lockfile conventions. Validation: the PoppyGL visual test passes with 889 assertions; typecheck, formatting, build and npm packing pass. The six-file tarball contains no dist or lockfile. A clean consumer imports it in Node, generates bolt geometry and typechecks its public declarations. bun install does not regenerate a lockfile. Publishing was attempted but npm rejected the upload; npm whoami also reports unauthorized credentials. The first release needs a refreshed npm login or valid publishing token. |

</details>

### [tscircuit/standard-jst-programmer](https://github.com/tscircuit/standard-jst-programmer)

| PR # | Impact | Rating | Contributor | Description |
|------|--------|--------|-------------|-------------|
| [#1](https://github.com/tscircuit/standard-jst-programmer/pull/1) | 🐳 Major | ⭐⭐⭐ | seveibar | Adds a 6-pin, 1.27 mm SMT male header for the TC2030-IDC-NL-050 cable beside the lower JST connectors, with RUN beside BOOT. J4 exposes fixed 3.3 V on pin 1 and USB 5 V on pin 6 (replacing SWO), bypassing the selector and current sensor. JST ports retain selectable, current-sensed VOUT. The matching target component exports V3_3 and V5, and the README and silkscreen show the custom pinout. The programmer remains 26  42 mm with top-side assembly. Exports StandardTagConnectSwd, the matching target footprint with six paste-free contacts and three alignment holes. Routes the board with the built-in default autorouter and autoroutingphase , followed by explicit finishing paths. The default router handles the crystal connections; checked saved paths preserve the remaining copper. Connections with saved paths run only in their assigned phases, avoiding a redundant full-board reroute. Saved paths use board-local coordinates so the standalone programmer and three-board preview use the same checked copper where needed. All vias span all four copper layers. Three crystal ground vias now escape the solder lands with at least 0.1 mm copper clearance, reducing via holes overlapping pads from four to one. The flash-chip via remains in-pad; one RP2040 via copper ring also overlaps a pad edge. Larger rear legends identify every JSTIDC pin and the 3.3 V SWD logic level. Both target examples include the Tag-Connect footprint, the default 3D preview shows all three boards, and rendered documentation is refreshed. The README remains focused on importing and using the components. Organizes the programmer schematic into four named sheets using schematicsheet, with functional schematicsection dividers and readable SWD, QSPI, USB, I2C, and RGB signal labels. Each target connector example has its own sheet. Validation: All four circuitpreview builds pass; independent routing DRC reports zero errors for each. Repository tests pass: electrical connectivity, JST pinouts and partmodel IDs, top-side assembly, through vias, crystal via-to-pad clearance in both standalone and panel builds, physical IDC connections, and target footprint geometry. Imported Tag-Connect routingkeepout test passes with the default autorouter. Type checking, package transpilation, and firmware-math checks pass. Electrical net partitions match the previous design except for the intended J4 pin 1pin 6 power changes. Tests verify fixed-rail connectivity, isolation from VOUT, and physical copper at all six IDC pins. |

### [tscircuit/jscad-electronics](https://github.com/tscircuit/jscad-electronics)

| PR # | Impact | Rating | Contributor | Description |
|------|--------|--------|-------------|-------------|
| [#388](https://github.com/tscircuit/jscad-electronics/pull/388) | 🐙 Minor | ⭐⭐ | seveibar | Fixes the floating issue of the JST housing by correctly applying rotation angles in the vanilla renderer, ensuring proper positioning of the housing and pins. |

<details>
<summary>🐌 Tiny Contributions (1)</summary>

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#363](https://github.com/tscircuit/jscad-electronics/pull/363) | 🐌 Tiny | Abse2001 | Adjusts the MiniMELF component design to ensure proper seating on pads and matches the cylindrical outline as per specifications, improving the fit and visual representation of the component. |

</details>

### [tscircuit/circuit-json-to-gltf](https://github.com/tscircuit/circuit-json-to-gltf)

| PR # | Impact | Rating | Contributor | Description |
|------|--------|--------|-------------|-------------|
| [#220](https://github.com/tscircuit/circuit-json-to-gltf/pull/220) | 🐙 Minor | ⭐⭐ | seveibar | Allows CAD models without a pcb_component_id, skipping PCB lookups and bookkeeping when absent, and using the CAD records layer for bottom-side orientation with existing PCB-layer fallback. |
| [#219](https://github.com/tscircuit/circuit-json-to-gltf/pull/219) | 🐙 Minor | ⭐⭐ | techmannih | Update circuit-to-svg to 0.0.429 and its peer minimum to 0.0.429, including board via-tenting defaults, clipping tenting at exposed pad openings, and preserving silkscreen over tented vias. |
| [#192](https://github.com/tscircuit/circuit-json-to-gltf/pull/192) | 🐙 Minor | ⭐⭐ | addibble | Covers fixed child CAD rotation and size in GLB snapshots, ensuring accurate geometry assertions and type-check fixes with updated dependencies. |

<details>
<summary>🐌 Tiny Contributions (1)</summary>

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#210](https://github.com/tscircuit/circuit-json-to-gltf/pull/210) | 🐌 Tiny | Devesh36 | Fixes incorrect orientation of JST PH housing in 3D exports by updating jscad-electronics to version 0.0.178, which includes a fix for the rendering issue. |

</details>

### [tscircuit/tiny-hypergraph](https://github.com/tscircuit/tiny-hypergraph)

| PR # | Impact | Rating | Contributor | Description |
|------|--------|--------|-------------|-------------|
| [#200](https://github.com/tscircuit/tiny-hypergraph/pull/200) | 🐙 Minor | ⭐⭐ | seveibar | Fixes benchmark fallback to installed dataset when legacy SRJ18 datasets lack a manifest.json, preventing ENOENT errors during benchmark execution. |

### [tscircuit/schematic-symbols](https://github.com/tscircuit/schematic-symbols)


<details>
<summary>🐌 Tiny Contributions (1)</summary>

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#477](https://github.com/tscircuit/schematic-symbols/pull/477) | 🐌 Tiny | seveibar | Add polarity aliases anodepos and cathodeneg to LED and laser-diode symbol ports, enhancing cores ability to match schematic terminals to physical pins without separate mapping. |

</details>

### [tscircuit/skill](https://github.com/tscircuit/skill)


<details>
<summary>🐌 Tiny Contributions (1)</summary>

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#47](https://github.com/tscircuit/skill/pull/47) | 🐌 Tiny | seveibar | Adds brief descriptions of warningOnly, allowTraces, allowPlacements, and excludeRefs under the existing keepout Props heading. Notes defaults, independent permissions, via restrictions, and continued copper-pour avoidance. No new sections or examples. Validation: reviewed against the implemented behavior; git diff --check passes. |

</details>

### [tscircuit/circuit-json-to-footprinter](https://github.com/tscircuit/circuit-json-to-footprinter)


<details>
<summary>🐌 Tiny Contributions (4)</summary>

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#116](https://github.com/tscircuit/circuit-json-to-footprinter/pull/116) | 🐌 Tiny | seveibar | Fixes incorrect resolution of TSSOPHTSSOP packages to DFN by generating accurate TSSOP candidates based on metadata, ensuring proper matching and scoring for electronic component footprints. |
| [#118](https://github.com/tscircuit/circuit-json-to-footprinter/pull/118) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#117](https://github.com/tscircuit/circuit-json-to-footprinter/pull/117) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#115](https://github.com/tscircuit/circuit-json-to-footprinter/pull/115) | 🐌 Tiny | Abse2001 | Recognizes MiniMELF and SOD-80 package names and seeds their supported Footprinter definitions using the measured pitch and land dimensions, allowing for accurate footprint generation for the C68883 component. |

</details>

### [tscircuit/circuit-json-webgpu](https://github.com/tscircuit/circuit-json-webgpu)


<details>
<summary>🐌 Tiny Contributions (2)</summary>

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#5](https://github.com/tscircuit/circuit-json-webgpu/pull/5) | 🐌 Tiny | seveibar | X-Ray now shows the selected nets via and plated-hole drills at full opacity. Unrelated drills remain hidden, and normal drill visibility returns when X-Ray exits. Drill rendering shares the retained geometry and honors explicit layer filters. This follows merged PR 4. Adds a Vercel configuration for the existing WebGPU gallery, with separate site output so library distribution files stay intact. The Vercel project is connected to this repository for automatic branch previews. The gallery includes beforeafter X-Ray drill examples, linkable using ?fixturex-ray-drills. |
| [#4](https://github.com/tscircuit/circuit-json-webgpu/pull/4) | 🐌 Tiny | seveibar | Add native X-Ray net rendering through RenderOptions.xRayElementIds, allowing selected copper to render at full opacity across all layers while maintaining correct layer order during inspection. |

</details>

### [tscircuit/eval](https://github.com/tscircuit/eval)


<details>
<summary>🐌 Tiny Contributions (62)</summary>

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#4691](https://github.com/tscircuit/eval/pull/4691) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#4690](https://github.com/tscircuit/eval/pull/4690) | 🐌 Tiny | tscircuitbot | Updates the version of tscircuitcore from 0.0.1958 to 0.0.1959 and tscircuitschematic-trace-solver from 0.0.203 to 0.0.204 in package.json |
| [#4688](https://github.com/tscircuit/eval/pull/4688) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#4687](https://github.com/tscircuit/eval/pull/4687) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#4685](https://github.com/tscircuit/eval/pull/4685) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#4684](https://github.com/tscircuit/eval/pull/4684) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#4682](https://github.com/tscircuit/eval/pull/4682) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#4681](https://github.com/tscircuit/eval/pull/4681) | 🐌 Tiny | tscircuitbot | Updates package dependencies to their latest versions as part of routine maintenance. |
| [#4679](https://github.com/tscircuit/eval/pull/4679) | 🐌 Tiny | tscircuitbot | Automated package version bump from 0.0.1436 to 0.0.1437 |
| [#4678](https://github.com/tscircuit/eval/pull/4678) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#4674](https://github.com/tscircuit/eval/pull/4674) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#4673](https://github.com/tscircuit/eval/pull/4673) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#4671](https://github.com/tscircuit/eval/pull/4671) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#4670](https://github.com/tscircuit/eval/pull/4670) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#4668](https://github.com/tscircuit/eval/pull/4668) | 🐌 Tiny | tscircuitbot | Automated package update to version 0.0.1434 |
| [#4667](https://github.com/tscircuit/eval/pull/4667) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#4663](https://github.com/tscircuit/eval/pull/4663) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#4662](https://github.com/tscircuit/eval/pull/4662) | 🐌 Tiny | tscircuitbot | Updates the version of the tscircuitcore package from 0.0.1948 to 0.0.1949 in package.json |
| [#4660](https://github.com/tscircuit/eval/pull/4660) | 🐌 Tiny | tscircuitbot | Automated package update to version 0.0.1432 |
| [#4659](https://github.com/tscircuit/eval/pull/4659) | 🐌 Tiny | tscircuitbot | Updates package dependencies to their latest versions |
| [#4657](https://github.com/tscircuit/eval/pull/4657) | 🐌 Tiny | tscircuitbot | Updates the package version from 0.0.1430 to 0.0.1431 in package.json |
| [#4656](https://github.com/tscircuit/eval/pull/4656) | 🐌 Tiny | tscircuitbot | Updates the versions of several dependencies in the package.json file. |
| [#4654](https://github.com/tscircuit/eval/pull/4654) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#4653](https://github.com/tscircuit/eval/pull/4653) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#4651](https://github.com/tscircuit/eval/pull/4651) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#4650](https://github.com/tscircuit/eval/pull/4650) | 🐌 Tiny | tscircuitbot | Updates the version of the tscircuitcore package from 0.0.1944 to 0.0.1945 in package.json |
| [#4648](https://github.com/tscircuit/eval/pull/4648) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#4647](https://github.com/tscircuit/eval/pull/4647) | 🐌 Tiny | tscircuitbot | Updates the version of the tscircuitcore package from 0.0.1943 to 0.0.1944 in package.json |
| [#4645](https://github.com/tscircuit/eval/pull/4645) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#4644](https://github.com/tscircuit/eval/pull/4644) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#4642](https://github.com/tscircuit/eval/pull/4642) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#4641](https://github.com/tscircuit/eval/pull/4641) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#4639](https://github.com/tscircuit/eval/pull/4639) | 🐌 Tiny | tscircuitbot | Updates the package version from 0.0.1424 to 0.0.1425 in package.json |
| [#4638](https://github.com/tscircuit/eval/pull/4638) | 🐌 Tiny | tscircuitbot | Updates the versions of several dependencies in the package.json file. |
| [#4636](https://github.com/tscircuit/eval/pull/4636) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#4635](https://github.com/tscircuit/eval/pull/4635) | 🐌 Tiny | tscircuitbot | Updates the package versions in package.json to the latest compatible versions. |
| [#4633](https://github.com/tscircuit/eval/pull/4633) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#4632](https://github.com/tscircuit/eval/pull/4632) | 🐌 Tiny | tscircuitbot | Updates package dependencies to their latest versions in package.json |
| [#4630](https://github.com/tscircuit/eval/pull/4630) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#4629](https://github.com/tscircuit/eval/pull/4629) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#4627](https://github.com/tscircuit/eval/pull/4627) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#4626](https://github.com/tscircuit/eval/pull/4626) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#4624](https://github.com/tscircuit/eval/pull/4624) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#4621](https://github.com/tscircuit/eval/pull/4621) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#4620](https://github.com/tscircuit/eval/pull/4620) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#4618](https://github.com/tscircuit/eval/pull/4618) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#4617](https://github.com/tscircuit/eval/pull/4617) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#4623](https://github.com/tscircuit/eval/pull/4623) | 🐌 Tiny | tscircuitbot | Updates the version of the tscircuitcore package from 0.0.1935 to 0.0.1936 in package.json |
| [#4615](https://github.com/tscircuit/eval/pull/4615) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#4614](https://github.com/tscircuit/eval/pull/4614) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#4612](https://github.com/tscircuit/eval/pull/4612) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#4611](https://github.com/tscircuit/eval/pull/4611) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#4609](https://github.com/tscircuit/eval/pull/4609) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#4608](https://github.com/tscircuit/eval/pull/4608) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#4598](https://github.com/tscircuit/eval/pull/4598) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#4597](https://github.com/tscircuit/eval/pull/4597) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#4595](https://github.com/tscircuit/eval/pull/4595) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#4594](https://github.com/tscircuit/eval/pull/4594) | 🐌 Tiny | tscircuitbot | Updates package dependencies to their latest versions as part of routine maintenance. |
| [#4592](https://github.com/tscircuit/eval/pull/4592) | 🐌 Tiny | tscircuitbot | Automated package update to version 0.0.1412 |
| [#4591](https://github.com/tscircuit/eval/pull/4591) | 🐌 Tiny | tscircuitbot | Updates the versions of several dependencies in the package.json file. |
| [#4589](https://github.com/tscircuit/eval/pull/4589) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#4588](https://github.com/tscircuit/eval/pull/4588) | 🐌 Tiny | rushabhcodes | Updates package dependencies and regenerates the TL3342 simple 3D snapshot. |

</details>

### [tscircuit/runframe](https://github.com/tscircuit/runframe)


<details>
<summary>🐌 Tiny Contributions (100)</summary>

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#5260](https://github.com/tscircuit/runframe/pull/5260) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#5259](https://github.com/tscircuit/runframe/pull/5259) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#5258](https://github.com/tscircuit/runframe/pull/5258) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#5257](https://github.com/tscircuit/runframe/pull/5257) | 🐌 Tiny | tscircuitbot | Updates the tscircuiteval package from version 0.0.1439 to 0.0.1440 in the package.json file. |
| [#5256](https://github.com/tscircuit/runframe/pull/5256) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#5255](https://github.com/tscircuit/runframe/pull/5255) | 🐌 Tiny | tscircuitbot | Updates the circuit-json-to-kicad package version from 0.0.217 to 0.0.218 in package.json |
| [#5253](https://github.com/tscircuit/runframe/pull/5253) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#5252](https://github.com/tscircuit/runframe/pull/5252) | 🐌 Tiny | tscircuitbot | Updates the tscircuiteval package from version 0.0.1438 to 0.0.1439 in the package.json file. |
| [#5251](https://github.com/tscircuit/runframe/pull/5251) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#5250](https://github.com/tscircuit/runframe/pull/5250) | 🐌 Tiny | tscircuitbot | Updates the tscircuiteval package from version 0.0.1437 to 0.0.1438 in the package.json file. |
| [#5249](https://github.com/tscircuit/runframe/pull/5249) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#5248](https://github.com/tscircuit/runframe/pull/5248) | 🐌 Tiny | tscircuitbot | Updates the tscircuiteval package from version 0.0.1436 to 0.0.1437 |
| [#5247](https://github.com/tscircuit/runframe/pull/5247) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#5246](https://github.com/tscircuit/runframe/pull/5246) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#5245](https://github.com/tscircuit/runframe/pull/5245) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#5244](https://github.com/tscircuit/runframe/pull/5244) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#5243](https://github.com/tscircuit/runframe/pull/5243) | 🐌 Tiny | tscircuitbot | Updates the tscircuiteval package from version 0.0.1434 to 0.0.1435 |
| [#5242](https://github.com/tscircuit/runframe/pull/5242) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#5241](https://github.com/tscircuit/runframe/pull/5241) | 🐌 Tiny | tscircuitbot | Updates the tscircuiteval package from version 0.0.1433 to 0.0.1434 |
| [#5240](https://github.com/tscircuit/runframe/pull/5240) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#5239](https://github.com/tscircuit/runframe/pull/5239) | 🐌 Tiny | tscircuitbot | Updates the tscircuiteval package from version 0.0.1432 to 0.0.1433 |
| [#5238](https://github.com/tscircuit/runframe/pull/5238) | 🐌 Tiny | tscircuitbot | Updates the package version from 0.0.2775 to 0.0.2776 in package.json |
| [#5237](https://github.com/tscircuit/runframe/pull/5237) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#5236](https://github.com/tscircuit/runframe/pull/5236) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#5235](https://github.com/tscircuit/runframe/pull/5235) | 🐌 Tiny | tscircuitbot | Updates the tscircuiteval package from version 0.0.1430 to 0.0.1431 in the package.json file. |
| [#5233](https://github.com/tscircuit/runframe/pull/5233) | 🐌 Tiny | tscircuitbot | Updates the tscircuiteval package from version 0.0.1429 to 0.0.1430 |
| [#5229](https://github.com/tscircuit/runframe/pull/5229) | 🐌 Tiny | tscircuitbot | Updates the tscircuitpcb-viewer package from version 1.11.404 to 1.11.405 |
| [#5234](https://github.com/tscircuit/runframe/pull/5234) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#5232](https://github.com/tscircuit/runframe/pull/5232) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#5231](https://github.com/tscircuit/runframe/pull/5231) | 🐌 Tiny | tscircuitbot | Updates the tscircuiteval package from version 0.0.1428 to 0.0.1429 |
| [#5230](https://github.com/tscircuit/runframe/pull/5230) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#5227](https://github.com/tscircuit/runframe/pull/5227) | 🐌 Tiny | tscircuitbot | Updates the tscircuiteval package from version 0.0.1427 to 0.0.1428 in the package.json file. |
| [#5228](https://github.com/tscircuit/runframe/pull/5228) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#5221](https://github.com/tscircuit/runframe/pull/5221) | 🐌 Tiny | tscircuitbot | Updates the tscircuiteval package from version 0.0.1425 to 0.0.1426 |
| [#5220](https://github.com/tscircuit/runframe/pull/5220) | 🐌 Tiny | tscircuitbot | Updates the tscircuitpcb-viewer package from version 1.11.402 to 1.11.403 |
| [#5218](https://github.com/tscircuit/runframe/pull/5218) | 🐌 Tiny | tscircuitbot | Updates the tscircuiteval package from version 0.0.1424 to 0.0.1425 in the package.json file. |
| [#5216](https://github.com/tscircuit/runframe/pull/5216) | 🐌 Tiny | tscircuitbot | Updates the tscircuit3d-viewer package to version 0.0.600 |
| [#5215](https://github.com/tscircuit/runframe/pull/5215) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#5212](https://github.com/tscircuit/runframe/pull/5212) | 🐌 Tiny | tscircuitbot | Updates the tscircuitpcb-viewer package from version 1.11.400 to 1.11.401 |
| [#5226](https://github.com/tscircuit/runframe/pull/5226) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#5225](https://github.com/tscircuit/runframe/pull/5225) | 🐌 Tiny | tscircuitbot | Updates the tscircuitpcb-viewer package from version 1.11.403 to 1.11.404 |
| [#5224](https://github.com/tscircuit/runframe/pull/5224) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#5222](https://github.com/tscircuit/runframe/pull/5222) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#5219](https://github.com/tscircuit/runframe/pull/5219) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#5217](https://github.com/tscircuit/runframe/pull/5217) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#5223](https://github.com/tscircuit/runframe/pull/5223) | 🐌 Tiny | tscircuitbot | Updates the tscircuiteval package from version 0.0.1426 to 0.0.1427 in the package.json file. |
| [#5214](https://github.com/tscircuit/runframe/pull/5214) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#5213](https://github.com/tscircuit/runframe/pull/5213) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#5210](https://github.com/tscircuit/runframe/pull/5210) | 🐌 Tiny | tscircuitbot | Updates the tscircuiteval package from version 0.0.1423 to 0.0.1424 in the package.json file. |
| [#5209](https://github.com/tscircuit/runframe/pull/5209) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#5208](https://github.com/tscircuit/runframe/pull/5208) | 🐌 Tiny | tscircuitbot | Updates the tscircuitpcb-viewer package from version 1.11.399 to 1.11.400 |
| [#5207](https://github.com/tscircuit/runframe/pull/5207) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#5206](https://github.com/tscircuit/runframe/pull/5206) | 🐌 Tiny | tscircuitbot | Updates the tscircuiteval package from version 0.0.1422 to 0.0.1423 |
| [#5205](https://github.com/tscircuit/runframe/pull/5205) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#5204](https://github.com/tscircuit/runframe/pull/5204) | 🐌 Tiny | tscircuitbot | Updates the tscircuiteval package from version 0.0.1421 to 0.0.1422 in the package.json file. |
| [#5203](https://github.com/tscircuit/runframe/pull/5203) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#5202](https://github.com/tscircuit/runframe/pull/5202) | 🐌 Tiny | tscircuitbot | Updates the tscircuiteval package from version 0.0.1420 to 0.0.1421 in the package.json file. |
| [#5201](https://github.com/tscircuit/runframe/pull/5201) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#5200](https://github.com/tscircuit/runframe/pull/5200) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#5199](https://github.com/tscircuit/runframe/pull/5199) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#5198](https://github.com/tscircuit/runframe/pull/5198) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#5197](https://github.com/tscircuit/runframe/pull/5197) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#5196](https://github.com/tscircuit/runframe/pull/5196) | 🐌 Tiny | tscircuitbot | Updates the tscircuiteval package from version 0.0.1418 to 0.0.1419 |
| [#5195](https://github.com/tscircuit/runframe/pull/5195) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#5194](https://github.com/tscircuit/runframe/pull/5194) | 🐌 Tiny | tscircuitbot | Updates the tscircuiteval package from version 0.0.1417 to 0.0.1418 |
| [#5193](https://github.com/tscircuit/runframe/pull/5193) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#5192](https://github.com/tscircuit/runframe/pull/5192) | 🐌 Tiny | tscircuitbot | Updates the tscircuiteval package from version 0.0.1416 to 0.0.1417 |
| [#5211](https://github.com/tscircuit/runframe/pull/5211) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#5180](https://github.com/tscircuit/runframe/pull/5180) | 🐌 Tiny | tscircuitbot | Updates the tscircuitpcb-viewer package to version 1.11.399 |
| [#5190](https://github.com/tscircuit/runframe/pull/5190) | 🐌 Tiny | tscircuitbot | Updates the circuit-json-to-kicad package version from 0.0.216 to 0.0.217 in package.json |
| [#5187](https://github.com/tscircuit/runframe/pull/5187) | 🐌 Tiny | tscircuitbot | Updates the tscircuiteval package from version 0.0.1415 to 0.0.1416 |
| [#5184](https://github.com/tscircuit/runframe/pull/5184) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#5183](https://github.com/tscircuit/runframe/pull/5183) | 🐌 Tiny | tscircuitbot | Updates the circuit-json-to-kicad package version from 0.0.213 to 0.0.216 in package.json |
| [#5181](https://github.com/tscircuit/runframe/pull/5181) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#5191](https://github.com/tscircuit/runframe/pull/5191) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#5188](https://github.com/tscircuit/runframe/pull/5188) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#5186](https://github.com/tscircuit/runframe/pull/5186) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#5179](https://github.com/tscircuit/runframe/pull/5179) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#5178](https://github.com/tscircuit/runframe/pull/5178) | 🐌 Tiny | tscircuitbot | Updates the tscircuiteval package from version 0.0.1414 to 0.0.1415 in the package.json file. |
| [#5174](https://github.com/tscircuit/runframe/pull/5174) | 🐌 Tiny | tscircuitbot | Updates the tscircuitpcb-viewer package from version 1.11.397 to 1.11.398 |
| [#5177](https://github.com/tscircuit/runframe/pull/5177) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#5176](https://github.com/tscircuit/runframe/pull/5176) | 🐌 Tiny | tscircuitbot | Updates the tscircuiteval package from version 0.0.1413 to 0.0.1414 |
| [#5175](https://github.com/tscircuit/runframe/pull/5175) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#5173](https://github.com/tscircuit/runframe/pull/5173) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#5172](https://github.com/tscircuit/runframe/pull/5172) | 🐌 Tiny | tscircuitbot | Updates the tscircuitpcb-viewer package from version 1.11.396 to 1.11.397 |
| [#5171](https://github.com/tscircuit/runframe/pull/5171) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#5170](https://github.com/tscircuit/runframe/pull/5170) | 🐌 Tiny | tscircuitbot | Updates the tscircuiteval package from version 0.0.1412 to 0.0.1413 in the package.json file. |
| [#5169](https://github.com/tscircuit/runframe/pull/5169) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#5168](https://github.com/tscircuit/runframe/pull/5168) | 🐌 Tiny | tscircuitbot | Updates the tscircuiteval package from version 0.0.1411 to 0.0.1412 |
| [#5167](https://github.com/tscircuit/runframe/pull/5167) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#5166](https://github.com/tscircuit/runframe/pull/5166) | 🐌 Tiny | tscircuitbot | Updates the tscircuitpcb-viewer package from version 1.11.395 to 1.11.396 |
| [#5165](https://github.com/tscircuit/runframe/pull/5165) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#5164](https://github.com/tscircuit/runframe/pull/5164) | 🐌 Tiny | tscircuitbot | Updates the tscircuitpcb-viewer package to version 1.11.395 |
| [#5163](https://github.com/tscircuit/runframe/pull/5163) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#5162](https://github.com/tscircuit/runframe/pull/5162) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#5161](https://github.com/tscircuit/runframe/pull/5161) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#5160](https://github.com/tscircuit/runframe/pull/5160) | 🐌 Tiny | tscircuitbot | Updates the tscircuiteval package from version 0.0.1409 to 0.0.1410 |
| [#5159](https://github.com/tscircuit/runframe/pull/5159) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#5158](https://github.com/tscircuit/runframe/pull/5158) | 🐌 Tiny | tscircuitbot | Updates the circuit-json-to-kicad package version from 0.0.212 to 0.0.213 in package.json |
| [#5185](https://github.com/tscircuit/runframe/pull/5185) | 🐌 Tiny | mohan-bee | Updates the easyeda dependency from version 0.0.357 to 0.0.360 in package.json |

</details>

### [tscircuit/test-github-automerge](https://github.com/tscircuit/test-github-automerge)


<details>
<summary>🐌 Tiny Contributions (4)</summary>

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#80](https://github.com/tscircuit/test-github-automerge/pull/80) | 🐌 Tiny | tscircuitbot | Updates the tscircuitcircuit-json-util package from version 0.0.114 to 0.0.115 in the project dependencies. |
| [#79](https://github.com/tscircuit/test-github-automerge/pull/79) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#77](https://github.com/tscircuit/test-github-automerge/pull/77) | 🐌 Tiny | tscircuitbot | Updates the tscircuitcircuit-json-util package from version 0.0.113 to 0.0.114 in the devDependencies of the project. |
| [#76](https://github.com/tscircuit/test-github-automerge/pull/76) | 🐌 Tiny | tscircuitbot | Automated package update |

</details>

### [tscircuit/circuit-json-to-kicad](https://github.com/tscircuit/circuit-json-to-kicad)

| PR # | Impact | Rating | Contributor | Description |
|------|--------|--------|-------------|-------------|
| [#571](https://github.com/tscircuit/circuit-json-to-kicad/pull/571) | 🐳 Major | ⭐⭐⭐ | techmannih | Fixes the issue where imported pad nets are lost during KiCad round trips by preserving the correct net on all HSP USB LED pads, including repeated lands. |
| [#582](https://github.com/tscircuit/circuit-json-to-kicad/pull/582) | 🐙 Minor | ⭐⭐ | techmannih | Fixes the issue where the Pan-Tilt Home Sensor board loses assembly exclusions during the KiCad to Circuit JSON export process, ensuring that excluded footprints are correctly represented in the output. |
| [#576](https://github.com/tscircuit/circuit-json-to-kicad/pull/576) | 🐙 Minor | ⭐⭐ | techmannih | Fixes the preservation of trace and via net ownership during KiCad round trips, ensuring correct net assignments for traces and vias. |
| [#575](https://github.com/tscircuit/circuit-json-to-kicad/pull/575) | 🐙 Minor | ⭐⭐ | techmannih | Fixes the issue where the HSP USB LED board preserves pad nets but loses trace and via ownership on export, ensuring all net definitions survive during the export process. |
| [#567](https://github.com/tscircuit/circuit-json-to-kicad/pull/567) | 🐙 Minor | ⭐⭐ | ShiboSoftwareDev | Derives standalone KiCad silkscreen thickness from Circuit JSON font size with practical bounds, restores soil sensor title stroke to visually matching thickness, and updates SVG snapshots. |
| [#568](https://github.com/tscircuit/circuit-json-to-kicad/pull/568) | 🐙 Minor | ⭐⭐ | ShiboSoftwareDev | Add a documented edgeCutsWidth converter option with the existing 0.1 mm default, carry the native source width through real-board round-trip coverage, and verify the soil sensor keeps its 1.0 mm outline with a side-by-side SVG snapshot. |
| [#564](https://github.com/tscircuit/circuit-json-to-kicad/pull/564) | 🐙 Minor | ⭐⭐ | ShiboSoftwareDev | Fixes the loss of knockout silkscreen text in KiCad exports by ensuring the knockout layer flag is preserved for both standalone and footprint-relative text. |

<details>
<summary>🐌 Tiny Contributions (6)</summary>

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#591](https://github.com/tscircuit/circuit-json-to-kicad/pull/591) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#578](https://github.com/tscircuit/circuit-json-to-kicad/pull/578) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#574](https://github.com/tscircuit/circuit-json-to-kicad/pull/574) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#566](https://github.com/tscircuit/circuit-json-to-kicad/pull/566) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#589](https://github.com/tscircuit/circuit-json-to-kicad/pull/589) | 🐌 Tiny | techmannih | Fixes loss of assembly exclusions during Circuit JSON round trips for KiCad footprints marked exclude_from_bom or exclude_from_pos_files. |
| [#570](https://github.com/tscircuit/circuit-json-to-kicad/pull/570) | 🐌 Tiny | techmannih | Reproduces pad-net loss using the existing, unmodified HSP USB LED board, asserting that all input pads have nets but lose net assignments after importexport. |

</details>

### [tscircuit/circuit-to-canvas](https://github.com/tscircuit/circuit-to-canvas)

| PR # | Impact | Rating | Contributor | Description |
|------|--------|--------|-------------|-------------|
| [#288](https://github.com/tscircuit/circuit-to-canvas/pull/288) | 🐳 Major | ⭐⭐⭐ | techmannih | Resolve omitted tenting fields for standalone and trace-route vias from their owning board, ensuring proper rendering and deduplication of vias in PCB designs. |
| [#291](https://github.com/tscircuit/circuit-to-canvas/pull/291) | 🐙 Minor | ⭐⭐ | techmannih | Keeps pad openings exposed when tented vias overlap SMT pads in the rendering process, ensuring correct visual representation in the output. |

<details>
<summary>🐌 Tiny Contributions (2)</summary>

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#289](https://github.com/tscircuit/circuit-to-canvas/pull/289) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#293](https://github.com/tscircuit/circuit-to-canvas/pull/293) | 🐌 Tiny | techmannih | Resolve board ownership with createBoardOwnerMap from tscircuitcircuit-json-util instead of maintaining a private copy in Canvas. |

</details>

### [tscircuit/altiumts](https://github.com/tscircuit/altiumts)

| PR # | Impact | Rating | Contributor | Description |
|------|--------|--------|-------------|-------------|
| [#197](https://github.com/tscircuit/altiumts/pull/197) | 🐳 Major | ⭐⭐⭐ | anil08607 | Adds typed access to pin-to-pad mappings for schematic Record 47 while preserving raw fields and ensuring accurate roundtrips, along with updated regression tests for various parsing scenarios. |
| [#206](https://github.com/tscircuit/altiumts/pull/206) | 🐙 Minor | ⭐⭐ | rushabhcodes | Render layer-specific keepout arcs with a distinct color and metadata in PCB SVG output to prevent confusion with conductive traces. |
| [#194](https://github.com/tscircuit/altiumts/pull/194) | 🐙 Minor | ⭐⭐ | ShiboSoftwareDev | Fixes a visual issue where off-board content was clipped in DSP5509 CIII diagnostic snapshots, by adding an opt-in SVG viewport mode to include all visible PCB records. |
| [#193](https://github.com/tscircuit/altiumts/pull/193) | 🐙 Minor | ⭐⭐ | ShiboSoftwareDev | Fixes binary PCB serialization issue where rounded SMD pads reopen as plain rectangles by preserving rounded pad stack metadata and validating new pad fields. |
| [#203](https://github.com/tscircuit/altiumts/pull/203) | 🐙 Minor | ⭐⭐ | KrishnaX12 | Add declared Top Solder and Bottom Solder mask layers to the project viewer dropdown and normalize layer names to prevent duplicates. |

<details>
<summary>🐌 Tiny Contributions (4)</summary>

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#207](https://github.com/tscircuit/altiumts/pull/207) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#204](https://github.com/tscircuit/altiumts/pull/204) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#201](https://github.com/tscircuit/altiumts/pull/201) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#200](https://github.com/tscircuit/altiumts/pull/200) | 🐌 Tiny | tscircuitbot | Automated package update |

</details>

### [tscircuit/circuit-json-to-flattenjs](https://github.com/tscircuit/circuit-json-to-flattenjs)


<details>
<summary>🐌 Tiny Contributions (1)</summary>

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#1](https://github.com/tscircuit/circuit-json-to-flattenjs/pull/1) | 🐌 Tiny | tscircuitbot | Automated package update |

</details>

### [tscircuit/kicad-to-circuit-json](https://github.com/tscircuit/kicad-to-circuit-json)

| PR # | Impact | Rating | Contributor | Description |
|------|--------|--------|-------------|-------------|
| [#194](https://github.com/tscircuit/kicad-to-circuit-json/pull/194) | 🐳 Major | ⭐⭐⭐ | techmannih | Preserve each physical KiCad vias native net as pcb_via.source_net_id, including vias connected through copper pours rather than trace routes. Net 0 remains unassigned. |

<details>
<summary>🐌 Tiny Contributions (5)</summary>

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#196](https://github.com/tscircuit/kicad-to-circuit-json/pull/196) | 🐌 Tiny | techmannih | Preserves KiCad footprint assembly exclusions during import to prevent incorrect inclusion of mechanical or board-only footprints in BOM and position outputs. |
| [#199](https://github.com/tscircuit/kicad-to-circuit-json/pull/199) | 🐌 Tiny | GokulPandi-M | Motivation A power:GND instance in MIPI.kicad_sch uses a 270 rotation with (mirror x). KiCad renders the symbol body to the left of its electrical anchor, but the converted Circuit JSON renders the graphic to the right even though the emitted port faces left. The complete schematic is included so the incorrect symbol orientation is visible in its original circuit context.  Changes add the complete MIPI KiCad schematic as the repro fixture snapshot the affected graphic direction and emitted port direction add a full-sheet stacked Circuit JSON and KiCad comparison allow schematic snapshots without the drawing sheet !Circuit JSON and KiCad comparison(https:raw.githubusercontent.comGokulPandi-Mkicad-to-circuit-json361b26bf46f935d1a77a92836d9268a33332606atestsreprosrotated-mirrored-symbol-graphics__snapshots__rotated-mirrored-symbol-graphics.snap.png) This PR captures the current incorrect conversion as a repro and does not change the conversion logic.  Validation bun test testsreprosrotated-mirrored-symbolsrotated-mirrored-symbol-graphics.test.ts bun run build:lib bun run format:check |
| [#200](https://github.com/tscircuit/kicad-to-circuit-json/pull/200) | 🐌 Tiny | GokulPandi-M | Fixes the transformation order of rotated and mirrored symbols in KiCad export, ensuring correct graphic and port directions. |
| [#195](https://github.com/tscircuit/kicad-to-circuit-json/pull/195) | 🐌 Tiny | GokulPandi-M | Description Reproduces the USB symbol primitive issue with a minimal KiCad schematic extracted from the original Power.kicad_sch. The fixture contains only the USB-C connector, its CC and data resistors, ESD protection, shield network, related power symbols, labels, and wires. The test converts that schematic through KicadToCircuitJsonConverter, commits the generated Circuit JSON and SVG for inspection, and creates one stacked Circuit-JSON-versus-KiCad PNG snapshot. It also verifies that the converted USB connector owns all six schematic_arc elements.  Motive Provide a small, repeatable conversion snapshot that isolates the incorrect USB symbol shown by the website preview and confirms whether its primitives were lost during conversion or hidden during rendering.  Snapshot !Circuit JSON and KiCad USB comparison(https:raw.githubusercontent.comGokulPandi-Mkicad-to-circuit-jsoncc91c36testsreprosusb-symbol-primitive-layering__snapshots__usb-symbol-primitive-layering.snap.png) Rendered output: usb-symbol-primitive-layering-circuit-json.svg(https:github.comGokulPandi-Mkicad-to-circuit-jsonblobcc91c36testsreprosusb-symbol-primitive-layering__snapshots__usb-symbol-primitive-layering-circuit-json.svg) Generated output: usb-symbol-primitive-layering-circuit-json.json(https:github.comGokulPandi-Mkicad-to-circuit-jsonblobcc91c36testsreprosusb-symbol-primitive-layering__snapshots__usb-symbol-primitive-layering-circuit-json.json)  Validation bun test testsreprosusb-symbol-primitive-layeringusb-symbol-primitive-layering.test.ts bunx tsc --noEmit bunx biome format testsreprosusb-symbol-primitive-layeringusb-symbol-primitive-layering.test.ts bun run build:lib |
| [#198](https://github.com/tscircuit/kicad-to-circuit-json/pull/198) | 🐌 Tiny | GokulPandi-M | Preserves KiCad symbol graphic layering and shape continuity during Circuit JSON conversion. Background-filled polylines, rectangles, circles, and arcs are emitted before pins and foreground geometry, so the symbol body no longer covers details such as the USB trident. Unfilled KiCad polylines are emitted as continuous paths so connected branches retain smooth joins. Filled arcs are represented by a closed filled path while retaining the original arc stroke, which preserves the rounded USB-C socket ends and all six source arcs. |

</details>

### [tscircuit/altium-to-circuit-json](https://github.com/tscircuit/altium-to-circuit-json)

| PR # | Impact | Rating | Contributor | Description |
|------|--------|--------|-------------|-------------|
| [#72](https://github.com/tscircuit/altium-to-circuit-json/pull/72) | 🐳 Major | ⭐⭐⭐ | hrithik18k | Preserves Altium PCB net identities by creating Circuit JSON source nets and traces for every Altium net, linking routed tracks and arcs to their source trace, and retaining copper-pour net ownership. |
| [#75](https://github.com/tscircuit/altium-to-circuit-json/pull/75) | 🐙 Minor | ⭐⭐ | techmannih | Changes the PCB text justification mapper to use the shared NinePointAnchor type directly, reducing type friction with Circuit JSON text elements. |
| [#61](https://github.com/tscircuit/altium-to-circuit-json/pull/61) | 🐙 Minor | ⭐⭐ | techmannih | Adds support for parsing text records on copper layers in Altium PCB documents and converting them into pcb_copper_text elements in Circuit JSON. |
| [#70](https://github.com/tscircuit/altium-to-circuit-json/pull/70) | 🐙 Minor | ⭐⭐ | rushabhcodes | Fixes distortion in SVG comparison snapshots by preserving viewBox aspect ratios and preventing independent scaling when viewport dimensions differ. |
| [#66](https://github.com/tscircuit/altium-to-circuit-json/pull/66) | 🐙 Minor | ⭐⭐ | hrithik18k | Fixes the issue where Altium region records on TopOverlay and BottomOverlay were dropped, restoring filled logos, polarity marks, and component artwork in converted boards by converting those regions into pcb_silkscreen_graphic BRep elements. |
| [#57](https://github.com/tscircuit/altium-to-circuit-json/pull/57) | 🐙 Minor | ⭐⭐ | hrithik18k | Adds support for importing Altium full-circle arcs on the Keepout layer as circular pcb_keepout elements, preserving routing exclusions during conversion. |
| [#54](https://github.com/tscircuit/altium-to-circuit-json/pull/54) | 🐙 Minor | ⭐⭐ | hrithik18k | Fixes rendering of wrapped Altium silkscreen arcs to correctly display a 90 quarter-circle instead of a -270 three-quarter circle, adds regression tests, and updates affected SVG snapshots. |
| [#85](https://github.com/tscircuit/altium-to-circuit-json/pull/85) | 🐙 Minor | ⭐⭐ | Devesh36 | Preserves non-empty custom dimension suffixes and appends measured units to native dimension labels in PCB snapshots. |
| [#84](https://github.com/tscircuit/altium-to-circuit-json/pull/84) | 🐙 Minor | ⭐⭐ | Devesh36 | Fixes the copper layer count for Altium PCB files by accurately counting physical layers from modern Altium V8 layer-stack entries instead of relying on user-visible layer names, while retaining a fallback for older files. |
| [#82](https://github.com/tscircuit/altium-to-circuit-json/pull/82) | 🐙 Minor | ⭐⭐ | Devesh36 | Derives native dimension labels from their measured geometry when TEXTFORMAT contains a measurement-shaped formatting value such as 10mil, while preserving non-measurement custom text and adding regression coverage for affected TI PCB snapshots. |
| [#77](https://github.com/tscircuit/altium-to-circuit-json/pull/77) | 🐙 Minor | ⭐⭐ | Devesh36 | Detects anonymous EasyEDA dimension components exported as Mechanical 1516 vector strokes and converts those strokes to Circuit JSON fabrication-note paths without affecting real component courtyards. |
| [#47](https://github.com/tscircuit/altium-to-circuit-json/pull/47) | 🐙 Minor | ⭐⭐ | ShiboSoftwareDev | Converts Altium linear Dimension records into Circuit JSON fabrication-note dimensions, including units, precision, offsets, arrows, and text sizing. Adds a focused regression test and updated TI board visual snapshots. |
| [#55](https://github.com/tscircuit/altium-to-circuit-json/pull/55) | 🐙 Minor | ⭐⭐ | GokulPandi-M | Maps Altium numeric PCB text justification values 1 through 9 to the corresponding Circuit JSON anchors and preserves existing textual justification fallback while updating affected PCB visual snapshots. |
| [#80](https://github.com/tscircuit/altium-to-circuit-json/pull/80) | 🐙 Minor | ⭐⭐ | KrishnaX12 | Imports visible component mechanical-layer text as fabrication notes, resolving .Designator and .Comment from the component while skipping text hidden by NAMEON or COMMENTON, and updating affected SVG snapshots. |
| [#60](https://github.com/tscircuit/altium-to-circuit-json/pull/60) | 🐙 Minor | ⭐⭐ | anil08607 | Adds support for AltiumArcRecord on copper layers, enabling curved traces in PCB conversion to circuit-json. |

<details>
<summary>🐌 Tiny Contributions (5)</summary>

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#89](https://github.com/tscircuit/altium-to-circuit-json/pull/89) | 🐌 Tiny | rushabhcodes | Updates the altiumts dependency to version 0.0.75, fixing the rendering of keepout arcs to match Altiums treatment of routing exclusions. |
| [#73](https://github.com/tscircuit/altium-to-circuit-json/pull/73) | 🐌 Tiny | rushabhcodes | Normalizes dimension-only SVGs into viewBox-based inputs before stacking, preserves explicit background coverage after SVG roots are unwrapped, adds regression coverage for uniform panel scaling, and regenerates comparison snapshots so Circuit JSON panels use the available area. |
| [#46](https://github.com/tscircuit/altium-to-circuit-json/pull/46) | 🐌 Tiny | ShiboSoftwareDev | Adds six new PCB references from Texas Instruments, including focused side-by-side AltiumCircuit JSON SVG repros for various models, and enhances PCB validation requirements. |
| [#51](https://github.com/tscircuit/altium-to-circuit-json/pull/51) | 🐌 Tiny | KrishnaX12 | Fixes incorrect rendering of Altium pad and plated slot geometry by preserving layer-specific dimensions and shapes, ensuring accurate hole geometry for plated slots. |
| [#59](https://github.com/tscircuit/altium-to-circuit-json/pull/59) | 🐌 Tiny | anil08607 | Updates the altiumts dependency to v0.0.74 to ensure accurate rendering of complex pad shapes with rounded corners in SVGs. |

</details>

### [tscircuit/circuit-json-to-altium](https://github.com/tscircuit/circuit-json-to-altium)

| PR # | Impact | Rating | Contributor | Description |
|------|--------|--------|-------------|-------------|
| [#167](https://github.com/tscircuit/circuit-json-to-altium/pull/167) | 🐳 Major | ⭐⭐⭐ | ShiboSoftwareDev | Preserves independent slot and pad rotations in Altium by using dedicated Circuit JSON rotated pill-hole shapes when they differ, and restores the CH582 plated-slot orientation in the SVG round-trip snapshot. |
| [#168](https://github.com/tscircuit/circuit-json-to-altium/pull/168) | 🐙 Minor | ⭐⭐ | ShiboSoftwareDev | Normalizes Altium wraparound arc sweeps to maintain near-full circles and preserves top and bottom solder-layer text as Circuit JSON annotations, restoring the Cobra board circle and title in the SVG round-trip snapshot. |
| [#160](https://github.com/tscircuit/circuit-json-to-altium/pull/160) | 🐙 Minor | ⭐⭐ | ShiboSoftwareDev | Fixes the export of pill and rounded-rectangle SMT pads to ensure they are correctly represented as ROUNDRECT shapes in Altium, preserving their corner radius and improving the accuracy of pad shapes in the Cobra board. |

<details>
<summary>🐌 Tiny Contributions (4)</summary>

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#165](https://github.com/tscircuit/circuit-json-to-altium/pull/165) | 🐌 Tiny | techmannih | Fixes the placement of native electrical terminals at the converted Circuit JSON schematic port center, ensuring accurate pin connection points in Altium. |
| [#164](https://github.com/tscircuit/circuit-json-to-altium/pull/164) | 🐌 Tiny | techmannih | Adjusts Altium pin markers to match sizes and fill styles defined in Circuit JSON, ensuring proper visual representation and electrical behavior in exported schematics. |
| [#163](https://github.com/tscircuit/circuit-json-to-altium/pull/163) | 🐌 Tiny | techmannih | Changes the font size of native schematic pin numbers to 3 pt to match the Circuit JSON rendering scale, ensuring consistency in the Altium preview. |
| [#162](https://github.com/tscircuit/circuit-json-to-altium/pull/162) | 🐌 Tiny | techmannih | Sets an explicit native pin-number margin of 3 schematic units for the TPS61288 conversion, ensuring pin numbers are positioned closer to the component body in all orientations, while preserving font sizes and colors. |

</details>

### [tscircuit/easyeda-converter](https://github.com/tscircuit/easyeda-converter)

| PR # | Impact | Rating | Contributor | Description |
|------|--------|--------|-------------|-------------|
| [#569](https://github.com/tscircuit/easyeda-converter/pull/569) | 🐙 Minor | ⭐⭐ | rushabhcodes | Summary derive generated courtyards from the EasyEDA 3D body outline and physical padhole extents use the broad package BBox only when no model outline exists recognize rectangular explicit courtyards so no fallback is added add FS3000-1015 and VCNL4040 regressions and update affected snapshots This fixes oversizedinaccurate courtyards produced by tsci add, including the FS3000-1015 import, without adding a circuit-json dependency or ignoring errors.  Validation bun run format:check bun run build bun test testsconvert-to-soup-tests (30 pass) affected TSXPCB snapshot tests (11 pass) |
| [#567](https://github.com/tscircuit/easyeda-converter/pull/567) | 🐙 Minor | ⭐⭐ | mohan-bee | Fixes the loss of pin names containing punctuation during import, ensuring that multiplexed EasyEDA pin names and connection aliases are preserved correctly. |

<details>
<summary>🐌 Tiny Contributions (3)</summary>

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#566](https://github.com/tscircuit/easyeda-converter/pull/566) | 🐌 Tiny | mohan-bee | Reproduces the missing multiplexed pin labels when importing c609652 (attiny1616-snr) by adding the real easyeda fixture and ensuring all source ports and pads remain present. |
| [#572](https://github.com/tscircuit/easyeda-converter/pull/572) | 🐌 Tiny | hrithik18k | Prefer schematic pin names over footprint pad aliases while preserving both as connection aliases, ensuring stable canonical pin mapping and adding regression coverage for USB-C connectors. |
| [#571](https://github.com/tscircuit/easyeda-converter/pull/571) | 🐌 Tiny | hrithik18k | Adds a reproduction for the incorrect pin naming of the USB-C schematic symbol C2765186, ensuring logical pin names are preserved during import from EasyEDA. |

</details>

### [tscircuit/footprinter](https://github.com/tscircuit/footprinter)


<details>
<summary>🐌 Tiny Contributions (1)</summary>

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#888](https://github.com/tscircuit/footprinter/pull/888) | 🐌 Tiny | rushabhcodes | Adds explicit identities for DO-219AD and SOD-323HE package footprints, including validated parameters and improved error handling for unsupported parameters. |

</details>

### [tscircuit/circuit-json-to-gerber](https://github.com/tscircuit/circuit-json-to-gerber)

| PR # | Impact | Rating | Contributor | Description |
|------|--------|--------|-------------|-------------|
| [#175](https://github.com/tscircuit/circuit-json-to-gerber/pull/175) | 🐳 Major | ⭐⭐⭐ | mohan-bee | motivation capture unwanted mask openings on covered smt pads with one tsx repro and a small layer-overlay snapshot and the routed touch piano full-board snapshot. before all six covered samples incorrectly emit mask openings, matching the six intentionally exposed controls. after add a passing reproduction with labeled shape columns and coveredexposed rows. assertions verify twelve pads and six coverage flags. the piano fixture preserves placement and routing, restoring its eight polygon-workaround keys to equivalent 11 x 27 mm rectangular pads. the focused tests and typecheck pass. snapshots render actual gerber output; schematic output is unaffected. |
| [#176](https://github.com/tscircuit/circuit-json-to-gerber/pull/176) | 🐙 Minor | ⭐⭐ | mohan-bee | Fixes incorrect soldermask coverage on SMT pads that explicitly request coverage, preventing exposed copper in the Gerber output. |

### [tscircuit/matchpack](https://github.com/tscircuit/matchpack)

| PR # | Impact | Rating | Contributor | Description |
|------|--------|--------|-------------|-------------|
| [#264](https://github.com/tscircuit/matchpack/pull/264) | 🐙 Minor | ⭐⭐ | mohan-bee | Adds a layout snapshot for the acoustic guitar tuner circuit, capturing its configuration for repeatable reviews and ensuring accurate representation in the exported JSON. |
| [#265](https://github.com/tscircuit/matchpack/pull/265) | 🐙 Minor | ⭐⭐ | mohan-bee | Fixes the reversed right-side resistorLED branches in the layout, ensuring correct ordering and eliminating overlap issues in the schematic. |

### [tscircuit/copper-pour-solver](https://github.com/tscircuit/copper-pour-solver)

| PR # | Impact | Rating | Contributor | Description |
|------|--------|--------|-------------|-------------|
| [#95](https://github.com/tscircuit/copper-pour-solver/pull/95) | 🐙 Minor | ⭐⭐ | mohan-bee | Prevents ground copper from shorting polygon plated-hole power pads by ensuring both pads have proper clearance and connectivity, fixing a bug where only one pad was cleared. |

<details>
<summary>🐌 Tiny Contributions (1)</summary>

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#94](https://github.com/tscircuit/copper-pour-solver/pull/94) | 🐌 Tiny | mohan-bee | Reproduces a ground pour shorting a polygon-shaped through-hole power pad without fixing the underlying issue. |

</details>

### [tscircuit/dataset-srj18](https://github.com/tscircuit/dataset-srj18)

| PR # | Impact | Rating | Contributor | Description |
|------|--------|--------|-------------|-------------|
| [#19](https://github.com/tscircuit/dataset-srj18/pull/19) | 🐳 Major | ⭐⭐⭐ | ShiboSoftwareDev | Problem SRJ18 sample002 contains the routing endpoint for J4 pin 1 (pcb_port_157), but its plated-slot copper pad is absent from the obstacle list. This lets autorouters produce output that appears cut off at an unrendered pad. The malformed input is reproduced in tscircuittscircuit-autorouter2603.  Change upgrade tscircuitcore to the first release containing tscircuitcore3704 and align its peer dependency graph regenerate sample002 from its checked-in Circuit JSON assert the plated-slot obstacles identity, layers, center, width, and height in dataset validation The regenerated obstacle is a 2 x 4.5 mm rectangle on both copper layers centered at (-39.2404, -18.2722), matching the source plated hole.  Validation bun scriptsvalidate.mjs git diff --check  Consumer The stacked autorouter fix is tscircuittscircuit-autorouter2605. |

### [tscircuit/circuit-json-to-connectivity-map](https://github.com/tscircuit/circuit-json-to-connectivity-map)

| PR # | Impact | Rating | Contributor | Description |
|------|--------|--------|-------------|-------------|
| [#50](https://github.com/tscircuit/circuit-json-to-connectivity-map/pull/50) | 🐙 Minor | ⭐⭐ | ShiboSoftwareDev | Connects PCB traces to available endpoints independently, addressing false DRC reports from unconnected ports. |

### [tscircuit/high-density-repair03](https://github.com/tscircuit/high-density-repair03)

| PR # | Impact | Rating | Contributor | Description |
|------|--------|--------|-------------|-------------|
| [#143](https://github.com/tscircuit/high-density-repair03/pull/143) | 🐳 Major | ⭐⭐⭐ | Abse2001 | Modifies the via handling in Repair03 to ensure through-hole vias are checked and repaired across the full board drill span when blind and buried vias are disabled, enhancing DRC and circuit JSON projection accuracy. |

### [tscircuit/high-density-a01](https://github.com/tscircuit/high-density-a01)

| PR # | Impact | Rating | Contributor | Description |
|------|--------|--------|-------------|-------------|
| [#121](https://github.com/tscircuit/high-density-a01/pull/121) | 🐳 Major | ⭐⭐⭐ | AnasSarkiz | Caches via occupants by grid cell during connection searches in A01 and A03 to optimize routing performance. |

## Changes by Contributor

### [imrishabh18](https://github.com/imrishabh18)

| PRs # | Impact | Rating | Description |
|------|--------|--------|-------------|
| [#801](https://github.com/tscircuit/circuit-json/pull/801) | 🐳 Major | ⭐⭐⭐ | Adds optional pcb_port_ids to the PcbVia interface and Zod schema, allowing for explicit reference to PCB ports associated with a via. |
| [#190](https://github.com/tscircuit/circuit-json-util/pull/190) | 🐳 Major | ⭐⭐⭐ | Extracts shared polygon helpers for copper geometry from core to circuit-json-util, allowing both core and checks to utilize the same functionality without dependency cycles. |
| [#4001](https://github.com/tscircuit/core/pull/4001) | 🐳 Major | ⭐⭐⭐ | Bumps tscircuitchecks to version 0.0.199 to enhance copper-pour connectivity checks by utilizing explicit pcb_via.pcb_port_ids, and adds regression tests for specific connectivity scenarios. |
| [#4000](https://github.com/tscircuit/core/pull/4000) | 🐳 Major | ⭐⭐⭐ | Manual vias now emit pcb_port_ids identifying their rendered layer ports, providing explicit association between a traces via endpoint and the physical barrel, without inferring port ownership from coordinates. |
| [#316](https://github.com/tscircuit/checks/pull/316) | 🐳 Major | ⭐⭐⭐ | Fixes the copper clearance checks for rounded rectangular SMT pads by accurately measuring against their actual geometry, correcting a bug that misreported clearance gaps. |
| [#303](https://github.com/tscircuit/checks/pull/303) | 🐳 Major | ⭐⭐⭐ | Fixes connectivity issues when traces terminate on manual via ports, ensuring that pour-only contacts on the same net are correctly reported as connected. |
| [#293](https://github.com/tscircuit/checks/pull/293) | 🐳 Major | ⭐⭐⭐ | Fixes disconnected-port errors for plated GND contacts joined by a bottom copper pour by adding a physical copper connectivity fallback to the port checker and the missing-PCB-trace checker. |
| [#4785](https://github.com/tscircuit/cli/pull/4785) | 🐳 Major | ⭐⭐⭐ | Adds tsci search --digikey and tsci search --mouser, using the corresponding tscircuit search services without distributor API credentials. Both flags support combined searches with existing sources and --json. |
| [#4783](https://github.com/tscircuit/cli/pull/4783) | 🐳 Major | ⭐⭐⭐ | Add tsci search --ti query to discover Texas Instruments parts through tisearch.tscircuit.com, following the existing JLC search flow. TI-only searches do not query JLC; --ti can also be combined with other source flags. |
| [#2682](https://github.com/tscircuit/tscircuit-autorouter/pull/2682) | 🐳 Major | ⭐⭐⭐ | Use tscircuittrace-simplification-solver from the commit-pinned GitHub dependency github:tscircuittrace-simplification-solver5c0ad217a1ee17a557ba160a5ca14ef1f22a244c, provided by https:github.comtscircuittrace-simplification-solverpull1. Replace local imports across autorouting pipelines, tests, and debug fixtures. Delete the local trace-simplification, path-simplification, via-removal, via-merging, and crossing-via-reduction implementations, plus the segment index and path-construction helper now owned by the package. Shared geometry and route types still used by other autorouter solvers remain here. Existing test assertions and snapshots are unchanged. Install the commit-pinned package in devDependencies, matching the existing GitHub-installed solver packages. The existing build bundles its implementation without a tsup.config.ts or build-script changes. The dependency PR exposes the solver classes and index types needed by the existing callers. Validation: 53 focused tests pass across 44 files, covering existing simplification regressions, Pipeline 9 integration, Pipeline 11, and visual snapshots; one pre-existing test remains skipped. Type checking, format checking, and git diff --check pass. The package build, declaration generation, and CosmosVercel fixture build pass. Verified the JavaScript bundle contains the implementation and no external import of the TypeScript-only solver package. No solver behavior changes, benchmark additions, patches, or extra Markdown files. |
| [#15](https://github.com/tscircuit/tisearch.tscircuit.com/pull/15) | 🐳 Major | ⭐⭐⭐ | Fills DAC channel counts from explicit TI descriptions to improve channel coverage in the DAC catalog. |
| [#14](https://github.com/tscircuit/tisearch.tscircuit.com/pull/14) | 🐳 Major | ⭐⭐⭐ | Fixes the Linux-capable Processors page by correctly querying TI processor families and mapping DACADC channel specifications, improving data accuracy and availability. |
| [#13](https://github.com/tscircuit/tisearch.tscircuit.com/pull/13) | 🐳 Major | ⭐⭐⭐ | Fixes incorrect classification of analog switches by using TIs configuration metadata to accurately filter and categorize switches and multiplexers. |
| [#1](https://github.com/tscircuit/trace-simplification-solver/pull/1) | 🐳 Major | ⭐⭐⭐ | Extract TraceSimplificationSolver and its required phase solvers, geometry helpers, spatial indexes, and types from tscircuittscircuit-autorouter at be3403c8b3bb105a7b32770a28f58b57737c7602. Preserve the existing solver behavior and API. Internal imports use relative paths, and the package exports index.ts directly so autorouter can install the source from GitHub without a build or lifecycle hook. Includes only the solver implementation, related tests and four existing SVG snapshots, and minimal packagetest configuration. Includes separate test, type-check, and format-check workflows for pull requests and pushes to main, using Bun 1.3.8. No benchmarks, build tooling, patches, or additional Markdown files. Validation: all 38 tests pass; type checking passes. Verified direct GitHub installation in a separate consumer project using Bun 1.3.8, verified that the crossing-via fixture simplifies from three vias to one, and type-checked the consumer without autorouter path aliases. Companion autorouter migration: https:github.comtscircuittscircuit-autorouterpull2682. The public exports include the phase solvers and their index types used by autorouter tests and debug fixtures. |
| [#1013](https://github.com/tscircuit/pcb-viewer/pull/1013) | 🐙 Minor | ⭐⭐ | Fixes a production bundle issue where React DOM was incorrectly embedded, causing loading failures on the dashboard. |
| [#3961](https://github.com/tscircuit/core/pull/3961) | 🐙 Minor | ⭐⭐ | Enables part orientation analysis by default, allowing for better handling of pin-1 orientation metadata in circuit JSON exports. |
| [#3983](https://github.com/tscircuit/core/pull/3983) | 🐙 Minor | ⭐⭐ | Fixes false disconnection reports for plated GND contacts joined by a bottom copper pour when no conventional PCB tracks are present. |
| [#95](https://github.com/tscircuit/circuit-json-schematic-placement-analysis/pull/95) | 🐙 Minor | ⭐⭐ | Fixes false box-width warning for standard USB-C connectors by skipping width checks for source components with ftypesimple_connector and standardusb_c. |
| [#12](https://github.com/tscircuit/tisearch.tscircuit.com/pull/12) | 🐙 Minor | ⭐⭐ | Removes the empty LCSC column from HTML tables and hides categories without TI family mappings from the homepage and HTML category directory, while retaining existing category routes and JSON schemas. |

<details>
<summary>🐌 Tiny Contributions (13)</summary>

| PR # | Impact | Description |
|------|--------|-------------|
| [#277](https://github.com/tscircuit/schematic-viewer/pull/277) | 🐌 Tiny | Pins the style analyzer development dependency to the published tscircuitcircuit-json-schematic-placement-analysis 0.0.11 CDN tarball instead of the moving GitHub main archive, and regenerates bun.lock. |
| [#4992](https://github.com/tscircuit/tscircuit/pull/4992) | 🐌 Tiny | Updates the CLI, core, and related tscircuit packages to their latest versions and syncs dependencies accordingly. |
| [#4082](https://github.com/tscircuit/core/pull/4082) | 🐌 Tiny | Updates the tscircuitschematic-trace-solver dependency from 0.0.204 to 0.0.205, incorporating a fix for power-label attachment and orientation without modifying core implementation or snapshots. |
| [#3981](https://github.com/tscircuit/core/pull/3981) | 🐌 Tiny | Reproduces a bug where plated GND contacts are incorrectly reported as disconnected when connected through a bottom copper pour. |
| [#779](https://github.com/tscircuit/circuit-to-svg/pull/779) | 🐌 Tiny | Fixes concurrent npm release version conflicts by serializing publish runs and ensuring queued runs include previous release commits before installation and building. |
| [#315](https://github.com/tscircuit/checks/pull/315) | 🐌 Tiny | Reproduces false clearance violations for rounded rectangular SMT pads through comprehensive tests, documenting the behavior of existing bugs in clearance checks. |
| [#4878](https://github.com/tscircuit/cli/pull/4878) | 🐌 Tiny | Updates the tscircuitcircuit-json-schematic-placement-analysis dependency to version 0.0.11 and regenerates schematic export snapshots to reflect the updated dependency tree. |
| [#2667](https://github.com/tscircuit/tscircuit-autorouter/pull/2667) | 🐌 Tiny | Adds the captured board 1726 routing input as bugreport107, with a debugger fixture and Pipeline 9 reproduction test. Bug report: https:api.tscircuit.comautoroutingbug_reportsview?autorouting_bug_report_id8223a114-7a87-4a9f-8fca-20b2d8acf8d6 Related issue: 2668 Stores the exact captured simple_route_json: 382 connection entries, 1,072 obstacles, four layers, and no preloaded traces array. Preserves the original routing constraints and connection widths. Names the JSON, debugger fixture, and test for board 1726; both the debugger and test import the same JSON. Keeps the existing test behavior: call solver.solve() and assert solver.solved is false if it returns, with the existing 300,000 ms test timeout. Validation: verified the fixture input equals the downloaded reports simple_route_json; transpiled the test and debugger fixture successfully; git diff --check passed. Ran bun test --timeout 9999999 testsbugsbugreport107-board-1726.test.ts, but the synchronous routing call did not return during the observed run and was manually interrupted. The test did not reach its assertion, so this is not a passing test or a confirmed terminal solver failure. The exact failing stage for this input remains unverified. |
| [#1243](https://github.com/tscircuit/schematic-trace-solver/pull/1243) | 🐌 Tiny | Fixes the VREG_IN power labels attachment and orientation to prevent it from being treated as a tag instead of a power symbol, ensuring it retains its upward orientation and correct anchor point during schematic processing. |
| [#1242](https://github.com/tscircuit/schematic-trace-solver/pull/1242) | 🐌 Tiny | Reproduces the issue of the RP2040 motor controllers VREG_IN wire ending in an unlabeled stub while its V3V3 label appears below the wire instead of as an upward power symbol. |
| [#242](https://github.com/tscircuit/ti/pull/242) | 🐌 Tiny | Adds a public npm distribution for the TI library, allowing installation via npm while preserving the existing registry name and source entrypoint. |
| [#16](https://github.com/tscircuit/tisearch.tscircuit.com/pull/16) | 🐌 Tiny | Removes the unsupported RISC-V family mapping from the navigation filter, ensuring that no unsupported RISC-V tiles are displayed to users. |
| [#2](https://github.com/tscircuit/fabricator-drc/pull/2) | 🐌 Tiny | Makes circuit-json a peer dependency to ensure a shared schema and upgrades to version 0.0.493 for development, while adding regression tests for source_bus records compatibility. |

</details>

### [seveibar](https://github.com/seveibar)

| PRs # | Impact | Rating | Description |
|------|--------|--------|-------------|
| [#1023](https://github.com/tscircuit/pcb-viewer/pull/1023) | 🐳 Major | ⭐⭐⭐ | Clicking or right-clicking a trace now labels the action X-Ray display name, such as X-Ray GND or X-Ray U1.1 to U2.2, using existing trace-hover naming rules and ensuring long labels wrap inside the menu. |
| [#1021](https://github.com/tscircuit/pcb-viewer/pull/1021) | 🐳 Major | ⭐⭐⭐ | Allows users to add multiple nets for X-Ray inspection without replacing the previously selected net, retaining fully opaque pads, traces, vias, and plated-hole drills across layers. |
| [#1019](https://github.com/tscircuit/pcb-viewer/pull/1019) | 🐳 Major | ⭐⭐⭐ | Adds X-Ray Net inspection feature that allows users to view selected nets traces, pads, and vias at full opacity while dimming unrelated copper layers, enhancing PCB inspection capabilities. |
| [#1017](https://github.com/tscircuit/pcb-viewer/pull/1017) | 🐳 Major | ⭐⭐⭐ | Sets the default hidden layer visibility to 20 and saves user preferences in localStorage, restoring them upon reopening the viewer or reloading the page. |
| [#1012](https://github.com/tscircuit/pcb-viewer/pull/1012) | 🐳 Major | ⭐⭐⭐ | Large boards need responsive navigation without waiting for new raster images. This adds a worker-owned WebGPU renderer that compiles Circuit JSON once, retains GPU geometry, and redraws on camera changes throughout panzoom. Right-click the board and choose Rendering Engine  Canvas or WebGPU (experimental). Switching preserves camera and viewer state, releases the previous worker, and updates the selected radio item. Opening the context menu cancels active panning and disables navigation; the dismissal press cannot start a drag. The renderer prop sets the initial engine; subsequent prop changes update the selection. This candidate still defaults to WebGPU and automatically falls back to Canvas on unavailable WebGPUOffscreenCanvas, workerdevice failures, and diagnosed unsupported geometry. The standalone circuit-json-webgpu(https:github.comtscircuitcircuit-json-webgpu) renderer is installed as a devDependency from https:jscdn.tscircuit.comtscircuitcircuit-json-webgpu0.0.3.tgz and bundled into the inline worker. This version includes the merged gray-board-background and soldermask-state fixes. No renderer runtime import or vendored upstream sources are required. Layer visibility, opacity, pours, mask, annotations, and highlights update without rebuilding geometry; resize preserves the worker. Draft: full visual parity is not achieved. The renderers strict audit compares fresh circuit-to-svg on the left with rendered WebGPU on the right. The latest checked-in report passes 75597 comparisons (326 text-only); 19 Canvas-only passes are explicitly not comparable. Diagnostics and Canvas fallback do not detect every mismatch. The 597 committed comparison snapshots provide regression coverage, not proof of cross-renderer parity. Validation: TypeScript passes in a clean checkout without dist, the production build passes, and all 53 viewer tests pass. Browser tests typecheck against source and use a Vite alias to exercise the built bundle at runtime. Real Chromium checks of the built bundle pass: AM3352 zoom, resize, StrictModeunmount cleanup, context-menu switching both directions, camera preservation, context-menu navigation blockingdismissalresumption, and Canvas fallbacks. AM3352 compiles in approximately 699 ms in the worker locally, then retains one geometry upload during navigation; the measured animation-frame p95 was 14.4 ms. These are local measurements, not cross-device guarantees. Renderer 0.0.3 passed its publish workflows typecheck, 35 unit tests, and build. Its test-tooling compatibility fix is tracked in renderer PR 3(https:github.comtscircuitcircuit-json-webgpupull3). Merged current main and resolved the build-config conflict. Independent of the earlier bitmap-worker PR 1009. |
| [#1006](https://github.com/tscircuit/pcb-viewer/pull/1006) | 🐳 Major | ⭐⭐⭐ | Reduces the rendering time of the measuring tool by caching SVG paths, significantly improving performance during dragging operations. |
| [#811](https://github.com/tscircuit/circuit-json/pull/811) | 🐳 Major | ⭐⭐⭐ | Makes cad_component.pcb_component_id optional to allow CAD geometry representation without a PCB component. |
| [#803](https://github.com/tscircuit/circuit-json/pull/803) | 🐳 Major | ⭐⭐⭐ | Proposes the Circuit JSON contract for advisory PCB keepouts, allowing routing and copper placement to cross certain keepout regions while reporting overlaps as warnings instead of errors. |
| [#798](https://github.com/tscircuit/circuit-json/pull/798) | 🐳 Major | ⭐⭐⭐ | Add schemas for source bus length-matching requirements and routed length violations as dedicated errors in Circuit JSON. |
| [#196](https://github.com/tscircuit/circuit-json-util/pull/196) | 🐳 Major | ⭐⭐⭐ | Completes root operations for cjuIndexed, ensuring proper insertion and isolation of list results to prevent corruption of subsequent queries. |
| [#858](https://github.com/tscircuit/props/pull/858) | 🐳 Major | ⭐⭐⭐ | Proposes assembly.subassembly as a generic named mechanical assembly and assembly.cadassembly as an exact alias, both using the same Zod schema and exporting equivalent propsinput types. |
| [#855](https://github.com/tscircuit/props/pull/855) | 🐳 Major | ⭐⭐⭐ | Proposes keepout allowTraces  and keepout allowPlacements  for rectangular and circular keepouts, allowing trace crossings and component placements while managing keepout diagnostics. |
| [#1000](https://github.com/tscircuit/3d-viewer/pull/1000) | 🐳 Major | ⭐⭐⭐ | Render mechanical CAD without requiring or inferring a PCB owner, allowing for standalone CAD models without faux boards or height offsets. |
| [#4061](https://github.com/tscircuit/core/pull/4061) | 🐳 Major | ⭐⭐⭐ | Reduces rendering time by caching empty selector results and footprint-child lookups, skipping unnecessary calculations, and using indexed databases for improved performance. |
| [#4060](https://github.com/tscircuit/core/pull/4060) | 🐳 Major | ⭐⭐⭐ | Add core regressions for through-via inner-layer connectivity and update tscircuitchecks to include a merged viapour connectivity fix, ensuring accurate diagnostics for missing connections. |
| [#4047](https://github.com/tscircuit/core/pull/4047) | 🐳 Major | ⭐⭐⭐ | Implements assembly.subassembly and assembly.cadassembly as aliases for the same mechanical container, supporting name, displayName, CAD models, and nested children. |
| [#4053](https://github.com/tscircuit/core/pull/4053) | 🐳 Major | ⭐⭐⭐ | Collects jumper pad bounds once per trace-insertion batch to optimize the discovery process, significantly reducing the time taken for jumper-pad discovery in routing operations. |
| [#4036](https://github.com/tscircuit/core/pull/4036) | 🐳 Major | ⭐⭐⭐ | Exports differential-pair membership to Circuit JSON for bus X-Ray inspection, enabling PCB viewers to access complete pair information. |
| [#4015](https://github.com/tscircuit/core/pull/4015) | 🐳 Major | ⭐⭐⭐ | Updates tscircuitcapacity-autorouter from 0.0.900 to 0.0.913 and refreshes 74 PCB and routing-phase snapshots for the changed routes, including breakout routing, imported boards, USBHDMI, and implicit-pour stitching. |
| [#4014](https://github.com/tscircuit/core/pull/4014) | 🐳 Major | ⭐⭐⭐ | Implements keepout warningOnly  across cores PCB rendering, routing, import, and copper-pour generation, allowing advisory keepouts to emit warnings without blocking autorouting. |
| [#4013](https://github.com/tscircuit/core/pull/4013) | 🐳 Major | ⭐⭐⭐ | Fixes autorouting failure for traces connected through named nets by resolving bus members connections accurately and supporting named nets without merging distinct branches. |
| [#3992](https://github.com/tscircuit/core/pull/3992) | 🐳 Major | ⭐⭐⭐ | Emit source_bus records with resolved trace IDs, max_length_skew, name, and subcircuit ID to ensure downstream checks can enforce bus length-skew requirements in Circuit JSON. |
| [#320](https://github.com/tscircuit/checks/pull/320) | 🐳 Major | ⭐⭐⭐ | Fixes missing connections for top-layer escapes connected by inner-layer bridges when using plated via barrels and copper pours. |
| [#319](https://github.com/tscircuit/checks/pull/319) | 🐳 Major | ⭐⭐⭐ | Replaces the construction of a separate Flatbush edge index for copper-pour connectivity with the use of Flatten.jss existing polygon edges indexed PlanarSet, optimizing performance and memory usage during connectivity checks. |
| [#317](https://github.com/tscircuit/checks/pull/317) | 🐳 Major | ⭐⭐⭐ | Reduces routing-check time by reusing logical and physical connectivity maps and implementing Flatbush for trace pair selection, while maintaining accurate diagnostics. |
| [#290](https://github.com/tscircuit/checks/pull/290) | 🐳 Major | ⭐⭐⭐ | Copper pours were not checked for accidental contact with other copper. The supplied MSPM0G3507 USB-C board reproduces a GND pour touching both USB-C VBUS pads. Add checkCopperPourShorts to the public API and runAllRoutingChecks. It checks pours against traces, pads, plated holes, vias, and other pours, respecting connectivity, copper layers, trace width, drill voids, and BRep cutouts. Use tscircuitcircuit-json-to-flattenjs for both pour shorts and board-edge clearance, removing the local geometry implementation. Pin the published 0.0.2 jscdn tarball as a development dependency and bundle it with tsup; consumers need no separate converter dependency or GitHub Packages authentication. The converter repository includes 73 side-by-side visual snapshots. Use boundary intersections and containment for contact detection. FlattenJS distanceTo can incorrectly return zero between tiny BRep segments and distant arcs; regression coverage prevents these false positives. The supplied board reports exactly the two GND-to-VBUS pad contacts. Index individual copper shapes with Flatbush on each layer, and use one point per polygon face for containment once boundary intersections are ruled out. An alternating local Bun 1.3.2 benchmark on the supplied board improved median runtime from 2.07 s to 227 ms (about 9), including conversion. A standalone rerun measured 241 ms. Flatbush is a runtime dependency; flatqueue is supplied transitively. Neither is bundled. Run bun benchmarkscopper-pour-shorts.ts to reproduce and verify the expected shorts. Validation: bun test: 330 passed, 0 failed. TypeScript, build, changed-file formatting, and diff checks passed. Built-package smoke test detects both VBUS pad contacts. Built JavaScriptdeclarations contain no external converter import. Clean Bun installation from the public jscdn tarball succeeded. |
| [#4988](https://github.com/tscircuit/tscircuit.com/pull/4988) | 🐳 Major | ⭐⭐⭐ | Add per-view actions to package settings: failed images have Retry image, and ready images have Regenerate image. Each action requests only that angle, updates its status, and resumes polling. Controls are author-only and unavailable while that view is processing or its request is pending. Request errors stay on the relevant card. Preview queries now include the render attempt ID so a completed replacement fetches fresh PNG data instead of reusing the previous image. Replace the outdated cannot be restarted message with guidance explaining that regeneration replaces only the selected image, and keep long renderer errors wrapped and scrollable inside their card. The local fake API also supports regeneration of completed views. No production API change is required: the merged API already supports retry_failed: true and regenerate: true on package_releasescreate_render_image, preserving the original circuit snapshot. Validation: TypeScript and formatting checks; render-settings Playwright coverage for desktopmobile generation, individual retryregeneration, request failures, unchanged sibling images, fresh PNG fetches, and author permissions; fake API regression test for regeneration, pending-job idempotence, original-board preservation, and authorization. |
| [#4962](https://github.com/tscircuit/tscircuit.com/pull/4962) | 🐳 Major | ⭐⭐⭐ | Excludes partial datasheets from the index, ensuring only fully populated records are listed and displayed to users. |
| [#4960](https://github.com/tscircuit/tscircuit.com/pull/4960) | 🐳 Major | ⭐⭐⭐ | datasheets now lists every indexed chip in a compact alphabetical grid of links, with a result count and name search. It fetches all matching datasheets in a single request without a popularity filter. The fake API mirrors the complete list and substring search. |
| [#4871](https://github.com/tscircuit/cli/pull/4871) | 🐳 Major | ⭐⭐⭐ | Adds the ability to link a GitHub repository to a registry package through the command line, allowing users to update the GitHub repository associated with a package directly from the CLI. |
| [#4839](https://github.com/tscircuit/cli/pull/4839) | 🐳 Major | ⭐⭐⭐ | Add repeatable --x-ray-net name-or-id and --hidden-layer-opacity 0..1 options for PCB export and snapshots, allowing users to inspect PCB nets with specified opacity and layer options. |
| [#890](https://github.com/tscircuit/docs/pull/890) | 🐳 Major | ⭐⭐⭐ | Moves the AI callout to follow the first top-level prose paragraph in guides, ensuring readers see the subject introduction first. |
| [#2678](https://github.com/tscircuit/tscircuit-autorouter/pull/2678) | 🐳 Major | ⭐⭐⭐ | Simplifies Pipeline 9 by consolidating bounded regional repair into a single pass after B01 repair, removing unnecessary complexity and maintaining route integrity with zero search budget. |
| [#2662](https://github.com/tscircuit/tscircuit-autorouter/pull/2662) | 🐳 Major | ⭐⭐⭐ | SRJ18s large boards failed routing or exhausted the CI timeout. This change bounds routing work and adds validated congestion repair. The exact benchmark --dataset 18 run on green commit 9032401 now reports 87.5 completion and 87.5 relaxed DRC pass (1416 for both), with the original 360-second timeout and eight-worker concurrency. Redistribute displaced shared-edge ports using physical node bounds and obstacle layers in multilayer Pipeline 9, preserving solitary crossings around preloaded copper. Reduce repeated search work with cached blocker-search hops, shared multilayer destination metadata, early rejection of dominated candidates, per-layer congestion indexes, and cached ordinary-via clearance. Reject physically overlapping unrelated terminals before exhausting an infeasible intra-node portfolio. Bound multilayer grid and regional repair work. Use coarse-to-fine weighted regional search with shared node limits and reserved candidate calls for remaining conflicts. Reserve all board layers for ordinary drilled vias and merge only reported same-net via conflicts. Validate complete proposals against reference DRC and physical copper guards before publishing them. Dependencies: high-density-repair03 142(https:github.comtscircuithigh-density-repair03pull142), repair04 16(https:github.comtscircuitrepair04pull16), and tiny-hypergraph 207(https:github.comtscircuittiny-hypergraphpull207), pinned to tested commits. Validation: all nine CI test shards, build, TypeScript, and formatting checks are green. Repair04s 142 tests and tiny-hypergraphs 128 tests pass. The local eight-worker full-dataset run completed 1516 samples, passed relaxed DRC on 1416, and had no timeouts. The exact benchmark command(https:github.comtscircuittscircuit-autorouterpull2662issuecomment-5750646721) produced this CI benchmark result(https:github.comtscircuittscircuit-autorouterpull2662issuecomment-5750649855):  Metric  Main  PR   ---  ---:  ---:   Completion  81.3  87.5   Relaxed DRC pass  56.3  87.5  The raw report confirms sample 14 completes with zero DRC errors in 299.363 seconds, below the unchanged 360-second limit. Sample 6 retains its routing failure and sample 15 still times out. CI runtime varies: an earlier run of this same revision timed out on sample 14 as well. No benchmark timeout, concurrency, dataset, or DRC criteria were changed. |
| [#2642](https://github.com/tscircuit/tscircuit-autorouter/pull/2642) | 🐳 Major | ⭐⭐⭐ | Repairs copper-clearance violations inside native high-density nodes before stitching, ensuring compliance with minimum trace width and connectivity requirements. |
| [#2601](https://github.com/tscircuit/tscircuit-autorouter/pull/2601) | 🐳 Major | ⭐⭐⭐ | Updates the length matcher to preserve unchanged leads during DDR tuning by changing the dependency to a commit that includes a fix for retained-lead clearance. |
| [#71](https://github.com/tscircuit/high-density-repair02/pull/71) | 🐳 Major | ⭐⭐⭐ | Repair copper-clearance violations directly in native high-density nodes before stitching. The pass checks tracetrace, tracevia, individual viavia, and pad clearance against the nodes routes and immutable neighboring copper. It preserves ports, net identity, and layer transitions without reconstructing a bounded board region. The correction moves the free interior endpoint of a port-adjacent segment, budgets work by the number of conflicts, and tracks each via and trace layer separately so improving one contact cannot hide another. An optional repairBoundaryDiagonals: false keeps DRC-clean boundary geometry unchanged while still checking every node. Conflict-key and frame-stat caches avoid repeated geometry bookkeeping. Validation: 92 tests pass locally and in CI, including congested vias, immutable neighboring copper, unchanged clean boundary routes, and the masked-via-contact regression. Type checking and formatting pass. Integration and dataset18 benchmark results are tracked in https:github.comtscircuittscircuit-autorouterpull2642. |
| [#58](https://github.com/tscircuit/check-shorts/pull/58) | 🐳 Major | ⭐⭐⭐ | Fixes detection of edge contacts between pads and copper pours in bitmap shorts checks, ensuring accurate identification of potential shorts in PCB designs. |
| [#70](https://github.com/tscircuit/length-matching-solver/pull/70) | 🐳 Major | ⭐⭐⭐ | Fixes the issue where the DDR_D0 matcher rejected meanders due to unchanged lead clearances, allowing for successful matching while preserving existing terminal leads. |
| [#1](https://github.com/tscircuit/modelprinter/pull/1) | 🐳 Major | ⭐⭐⭐ | Adds metric hex socket bolts to modelprinters string API, schemas and exported model union. mp.string(hexsocketbolt_m3_l6mm).json() resolves to an M3 bolt with a 6 mm under-head length. Supports M2, M2.5, M3, M4, M5, M6, M8, M10 and M12, unit-bearing lengths and optional smooth shanks. The renderer-independent indexed mesh generator produces a blind hex socket, chamfered headtip and approximate coarse right-hand threads. A single visual test renders an M3  6 mm bolt in four orthographic views using PoppyGL and compares the result with a committed PNG. The parser and mesh assertions remain in helper functions invoked by that test. No browser or system fonts are needed. !PoppyGL M3  6 mm: isometric, top, front and underside(https:raw.githubusercontent.comtscircuitmodelprinter403398dc571c14b26a52c7f215f9700cf0fb4939tests__snapshots__hex-socket-bolt.snap.png) AGENTS.md documents that new models must not change README.md, all snapshots must use PoppyGL, and each test file must contain exactly one visual test with no describe blocks. README.md is unchanged. Validation: the visual regression test passes with 889 assertions; typecheck, formatting and build pass. The PoppyGL image was regenerated and visually inspected. Downstream CAD viewers still need to register the new model family. |
| [#1](https://github.com/tscircuit/standard-jst-programmer/pull/1) | 🐳 Major | ⭐⭐⭐ | Adds a 6-pin, 1.27 mm SMT male header for the TC2030-IDC-NL-050 cable beside the lower JST connectors, with RUN beside BOOT. J4 exposes fixed 3.3 V on pin 1 and USB 5 V on pin 6 (replacing SWO), bypassing the selector and current sensor. JST ports retain selectable, current-sensed VOUT. The matching target component exports V3_3 and V5, and the README and silkscreen show the custom pinout. The programmer remains 26  42 mm with top-side assembly. Exports StandardTagConnectSwd, the matching target footprint with six paste-free contacts and three alignment holes. Routes the board with the built-in default autorouter and autoroutingphase , followed by explicit finishing paths. The default router handles the crystal connections; checked saved paths preserve the remaining copper. Connections with saved paths run only in their assigned phases, avoiding a redundant full-board reroute. Saved paths use board-local coordinates so the standalone programmer and three-board preview use the same checked copper where needed. All vias span all four copper layers. Three crystal ground vias now escape the solder lands with at least 0.1 mm copper clearance, reducing via holes overlapping pads from four to one. The flash-chip via remains in-pad; one RP2040 via copper ring also overlaps a pad edge. Larger rear legends identify every JSTIDC pin and the 3.3 V SWD logic level. Both target examples include the Tag-Connect footprint, the default 3D preview shows all three boards, and rendered documentation is refreshed. The README remains focused on importing and using the components. Organizes the programmer schematic into four named sheets using schematicsheet, with functional schematicsection dividers and readable SWD, QSPI, USB, I2C, and RGB signal labels. Each target connector example has its own sheet. Validation: All four circuitpreview builds pass; independent routing DRC reports zero errors for each. Repository tests pass: electrical connectivity, JST pinouts and partmodel IDs, top-side assembly, through vias, crystal via-to-pad clearance in both standalone and panel builds, physical IDC connections, and target footprint geometry. Imported Tag-Connect routingkeepout test passes with the default autorouter. Type checking, package transpilation, and firmware-math checks pass. Electrical net partitions match the previous design except for the intended J4 pin 1pin 6 power changes. Tests verify fixed-rail connectivity, isolation from VOUT, and physical copper at all six IDC pins. |
| [#1029](https://github.com/tscircuit/pcb-viewer/pull/1029) | 🐙 Minor | ⭐⭐ | Fixes the issue where X-ray mode did not display tooltips for SMT pads and plated holes belonging to inspected nets, and includes connected copper pours on all layers. |
| [#1025](https://github.com/tscircuit/pcb-viewer/pull/1025) | 🐙 Minor | ⭐⭐ | Adds a second X-Ray busName action beside the individual net action when the clicked trace or pad belongs to a source_bus, resolving all member traces through electrical connectivity and adding their nets to the current X-Ray selection. |
| [#800](https://github.com/tscircuit/circuit-json/pull/800) | 🐙 Minor | ⭐⭐ | Adds optional fields for topmost and bottommost drill layers, and through-hole status to the pcb_via schema and TypeScript interface, while maintaining compatibility with deprecated fields. |
| [#805](https://github.com/tscircuit/circuit-json/pull/805) | 🐙 Minor | ⭐⭐ | Adds optional allow_traces and allow_placements booleans to all three keepout shapes, allowing for trace crossings and component placements without keepout diagnostics while preserving copper pour exclusions. |
| [#862](https://github.com/tscircuit/props/pull/862) | 🐙 Minor | ⭐⭐ | Removes the connectsTo field from assembly.subassembly and its alias assembly.cadassembly, as containment is expressed through nesting, and updates related tests and documentation accordingly. |
| [#854](https://github.com/tscircuit/props/pull/854) | 🐙 Minor | ⭐⭐ | Adds optional warningOnly boolean support to both circle and rectangle PCB keepout props, preserving existing inputs and requiring no migration. |
| [#4052](https://github.com/tscircuit/core/pull/4052) | 🐙 Minor | ⭐⭐ | Fixes incorrect polarity mapping in schematic symbols by prioritizing label matching over pin numbers. |
| [#4038](https://github.com/tscircuit/core/pull/4038) | 🐙 Minor | ⭐⭐ | Adds assembly.screen so a display can attach to a PCB connector through connectsTo, without generating and importing a combined connectordisplay GLB. |
| [#4017](https://github.com/tscircuit/core/pull/4017) | 🐙 Minor | ⭐⭐ | Implements keepout allowTraces  and keepout allowPlacements  emission and import, allowing independent routing and placement while copper pours avoid both. |
| [#4011](https://github.com/tscircuit/core/pull/4011) | 🐙 Minor | ⭐⭐ | Integrates routed trace and bus length DRC checks by updating the checks library and implementing new error handling for trace lengths and bus skew violations. |
| [#388](https://github.com/tscircuit/jscad-electronics/pull/388) | 🐙 Minor | ⭐⭐ | Fixes the floating issue of the JST housing by correctly applying rotation angles in the vanilla renderer, ensuring proper positioning of the housing and pins. |
| [#298](https://github.com/tscircuit/checks/pull/298) | 🐙 Minor | ⭐⭐ | Enforces bus length-skew requirements and maximum-length violations as routing errors, enhancing the routing error reporting mechanism. |
| [#305](https://github.com/tscircuit/checks/pull/305) | 🐙 Minor | ⭐⭐ | Honors allow_traces and allow_placements on keepouts, allowing traces and padsplated holes to emit neither errors nor warnings while keeping vias checked and applying warning_only to prohibited overlaps. |
| [#304](https://github.com/tscircuit/checks/pull/304) | 🐙 Minor | ⭐⭐ | A keepout with warning_only: true now produces pcb_keepout_overlap_warning diagnostics instead of placement or trace errors. |
| [#299](https://github.com/tscircuit/checks/pull/299) | 🐙 Minor | ⭐⭐ | Prevents copper-to-board-edge checks from running on empty schematic-only boards, avoiding errors during conversion when no copper exists. |
| [#4804](https://github.com/tscircuit/cli/pull/4804) | 🐙 Minor | ⭐⭐ | Adds support for the useCloudAutorouting property in tscircuit.config.json, allowing users to enable cloud-based autorouting functionality and ensuring proper validation and handling of this configuration option. |
| [#220](https://github.com/tscircuit/circuit-json-to-gltf/pull/220) | 🐙 Minor | ⭐⭐ | Allows CAD models without a pcb_component_id, skipping PCB lookups and bookkeeping when absent, and using the CAD records layer for bottom-side orientation with existing PCB-layer fallback. |
| [#200](https://github.com/tscircuit/tiny-hypergraph/pull/200) | 🐙 Minor | ⭐⭐ | Fixes benchmark fallback to installed dataset when legacy SRJ18 datasets lack a manifest.json, preventing ENOENT errors during benchmark execution. |

<details>
<summary>🐌 Tiny Contributions (26)</summary>

| PR # | Impact | Description |
|------|--------|-------------|
| [#1027](https://github.com/tscircuit/pcb-viewer/pull/1027) | 🐌 Tiny | Replace the AM3352 fixture with Circuit JSON from seveibaram3352-dev-board-4layer-dogbone, release v0.1.1 (1dde7554-9eed-449f-a580-8b886cdedd9e). This was the latest completed build when downloaded; v0.1.2 was still building. The fixture now contains DDR_BYTE0 and DDR_BYTE1 source buses, each resolving to 11 distinct electrical nets with no missing members. Add source provenance and instructions for the DDR bus X-Ray menu. Validation: production build, TypeScript, and the browser WebGPU suite pass against the updated board, including worker lifecycle, fallback, rendering, and navigation without geometry re-upload. Both bus memberships were checked through the viewers connectivity resolver. |
| [#1003](https://github.com/tscircuit/pcb-viewer/pull/1003) | 🐌 Tiny | Summary Dense multilayer boards make the selected layer difficult to distinguish. Add a right-click menu with Visibility  Hidden Layer Visibility offering Hide, 10, 20, 40, 60, 80, and 100, with 40 as the default. Hide clears inactive-layer canvases and skips drawing their contents. The selected layer, its associated side details, and shared board geometry and drills remain visible. Changing the selected layer updates which layers are hidden. The menu supports keyboard navigation and dismissal, and adapts its placement near viewport edges. Add an AM3352 dev board fixture using the complete supplied circuit JSON: 10,979 elements and eight copper layers. The large JSON addition is the unchanged fixture input.  Validation bun test: 48 passed. bunx tsc --noEmit: passed. bun run build: passed, including declarations. Formatting and git diff --check: passed. Fixture verified byte-identical to the supplied JSON. Browser verification was blocked by a saved local browser permission. |
| [#1001](https://github.com/tscircuit/3d-viewer/pull/1001) | 🐌 Tiny | Disables the renderer comparison diagnostics job in the CI workflow to prevent unnecessary runner allocation while keeping the workflow steps available for future re-enablement. |
| [#4059](https://github.com/tscircuit/core/pull/4059) | 🐌 Tiny | Updates tscircuitcapacity-autorouter from 0.0.913 to 0.0.919, bringing the SRJ18 routing improvements and the merged simplification from tscircuittscircuit-autorouter2678 into core. |
| [#4058](https://github.com/tscircuit/core/pull/4058) | 🐌 Tiny | Update tscircuitchecks from 0.0.205 to 0.0.207, bringing in shared routing connectivity maps and copper-pour contact queries using Flatten.jss existing polygon edge index (tscircuitchecks317 and tscircuitchecks319). |
| [#3994](https://github.com/tscircuit/core/pull/3994) | 🐌 Tiny | Update tscircuitchecks to 0.0.198 to enable copper-pour short detection and Flatbush improvements without failing on empty schematic-only boards. |
| [#771](https://github.com/tscircuit/circuit-to-svg/pull/771) | 🐌 Tiny | Fixes alignment of scaled schematic symbols to ensure that resistor symbols with non-native pin spacing meet their traces correctly. |
| [#769](https://github.com/tscircuit/circuit-to-svg/pull/769) | 🐌 Tiny | Fixes the offset of scaled schematic symbols to ensure resistor terminals align with their corresponding Circuit JSON pin coordinates. |
| [#770](https://github.com/tscircuit/circuit-to-svg/pull/770) | 🐌 Tiny | Reproduces resistor symbols drifting away from their trace endpoints when Circuit JSON pin spacing differs from the symbols native spacing. |
| [#763](https://github.com/tscircuit/circuit-to-svg/pull/763) | 🐌 Tiny | Add xRayElementIds and hiddenLayerOpacity to PCB SVG rendering, allowing users to inspect one or more nets with selected copper and associated viaplated-hole drills rendered fully opaque across all copper layers while other copper is dimmed. |
| [#297](https://github.com/tscircuit/checks/pull/297) | 🐌 Tiny | Clarifies the inferred connector direction when no explicit insertion direction is defined and provides guidance on setting the insertion direction in the footprint. |
| [#477](https://github.com/tscircuit/schematic-symbols/pull/477) | 🐌 Tiny | Add polarity aliases anodepos and cathodeneg to LED and laser-diode symbol ports, enhancing cores ability to match schematic terminals to physical pins without separate mapping. |
| [#892](https://github.com/tscircuit/docs/pull/892) | 🐌 Tiny | Adds concise entries for warningOnly, allowTraces, allowPlacements, and excludeRefs to the existing keepout properties table, detailing their defaults and independent permissions. |
| [#893](https://github.com/tscircuit/docs/pull/893) | 🐌 Tiny | Documents the X-Ray export flags and PCB PNG format, with an example in the existing export reference. |
| [#889](https://github.com/tscircuit/docs/pull/889) | 🐌 Tiny | This PR changes the getting-started documentation to lead with AI usage for setup and replaces terminal screenshots with a server-rendered terminal component that displays commands and output as selectable text. |
| [#888](https://github.com/tscircuit/docs/pull/888) | 🐌 Tiny | Add useCloudAutorouting to the configuration options table in the tscircuit.config.json reference, describing its use for CLI builds, exports, and snapshots. |
| [#2658](https://github.com/tscircuit/tscircuit-autorouter/pull/2658) | 🐌 Tiny | Changes the default autorouting pipeline in the GUI from Pipeline7 to Pipeline9, while honoring existing saved selections. |
| [#2653](https://github.com/tscircuit/tscircuit-autorouter/pull/2653) | 🐌 Tiny | Expanded the description of the autorouter and added links to resources. |
| [#1205](https://github.com/tscircuit/schematic-trace-solver/pull/1205) | 🐌 Tiny | Adds a reduced repro for the J_SD, J_SPI, J_I2C, and J_USB0 connector section on sheet 3 of the AM3352 dev board, providing a baseline for improving power and ground rail routing and label placement. |
| [#47](https://github.com/tscircuit/skill/pull/47) | 🐌 Tiny | Adds brief descriptions of warningOnly, allowTraces, allowPlacements, and excludeRefs under the existing keepout Props heading. Notes defaults, independent permissions, via restrictions, and continued copper-pour avoidance. No new sections or examples. Validation: reviewed against the implemented behavior; git diff --check passes. |
| [#90](https://github.com/tscircuit/circuit-json-schematic-placement-analysis/pull/90) | 🐌 Tiny | Fixes alignment issues of imported resistor symbols in schematic snapshots when rendered at different scales, ensuring they meet their traces correctly. |
| [#69](https://github.com/tscircuit/length-matching-solver/pull/69) | 🐌 Tiny | This PR reproduces a bug where the LengthMatchingSolver exhausts its meander search for DDR_D0, adding a test to confirm the failure without altering production solver functionality. |
| [#116](https://github.com/tscircuit/circuit-json-to-footprinter/pull/116) | 🐌 Tiny | Fixes incorrect resolution of TSSOPHTSSOP packages to DFN by generating accurate TSSOP candidates based on metadata, ensuring proper matching and scoring for electronic component footprints. |
| [#2](https://github.com/tscircuit/modelprinter/pull/2) | 🐌 Tiny | Configures publishing as the unscoped modelprinter package. Build output and declarations are generated and ignored, with dist removed from Git. Buildprepack stage index.js, index.d.ts and index.js.map at the package root; the npm files allowlist excludes dist entirely. Disables Bun lockfile saving in bunfig.toml, removes bun.lock, and updates CIrelease workflows to install without a frozen lockfile and validate npm packaging. The release workflow supports NPM_TOKEN or configured npm trusted publishing. AGENTS.md reflects the generated-file and lockfile conventions. Validation: the PoppyGL visual test passes with 889 assertions; typecheck, formatting, build and npm packing pass. The six-file tarball contains no dist or lockfile. A clean consumer imports it in Node, generates bolt geometry and typechecks its public declarations. bun install does not regenerate a lockfile. Publishing was attempted but npm rejected the upload; npm whoami also reports unauthorized credentials. The first release needs a refreshed npm login or valid publishing token. |
| [#5](https://github.com/tscircuit/circuit-json-webgpu/pull/5) | 🐌 Tiny | X-Ray now shows the selected nets via and plated-hole drills at full opacity. Unrelated drills remain hidden, and normal drill visibility returns when X-Ray exits. Drill rendering shares the retained geometry and honors explicit layer filters. This follows merged PR 4. Adds a Vercel configuration for the existing WebGPU gallery, with separate site output so library distribution files stay intact. The Vercel project is connected to this repository for automatic branch previews. The gallery includes beforeafter X-Ray drill examples, linkable using ?fixturex-ray-drills. |
| [#4](https://github.com/tscircuit/circuit-json-webgpu/pull/4) | 🐌 Tiny | Add native X-Ray net rendering through RenderOptions.xRayElementIds, allowing selected copper to render at full opacity across all layers while maintaining correct layer order during inspection. |

</details>

### [tscircuitbot](https://github.com/tscircuitbot)


<details>
<summary>🐌 Tiny Contributions (490)</summary>

| PR # | Impact | Description |
|------|--------|-------------|
| [#1031](https://github.com/tscircuit/pcb-viewer/pull/1031) | 🐌 Tiny | Automated package update |
| [#1026](https://github.com/tscircuit/pcb-viewer/pull/1026) | 🐌 Tiny | Automated package update |
| [#1024](https://github.com/tscircuit/pcb-viewer/pull/1024) | 🐌 Tiny | Automated package update |
| [#1030](https://github.com/tscircuit/pcb-viewer/pull/1030) | 🐌 Tiny | Automated package update |
| [#1022](https://github.com/tscircuit/pcb-viewer/pull/1022) | 🐌 Tiny | Automated package update |
| [#1020](https://github.com/tscircuit/pcb-viewer/pull/1020) | 🐌 Tiny | Automated package update |
| [#1018](https://github.com/tscircuit/pcb-viewer/pull/1018) | 🐌 Tiny | Automated package update |
| [#1015](https://github.com/tscircuit/pcb-viewer/pull/1015) | 🐌 Tiny | Automated package update |
| [#1014](https://github.com/tscircuit/pcb-viewer/pull/1014) | 🐌 Tiny | Automated package update |
| [#1004](https://github.com/tscircuit/pcb-viewer/pull/1004) | 🐌 Tiny | Automated package update |
| [#1007](https://github.com/tscircuit/pcb-viewer/pull/1007) | 🐌 Tiny | Automated package update |
| [#1011](https://github.com/tscircuit/pcb-viewer/pull/1011) | 🐌 Tiny | Automated package update |
| [#5125](https://github.com/tscircuit/tscircuit/pull/5125) | 🐌 Tiny | Automated package update |
| [#5124](https://github.com/tscircuit/tscircuit/pull/5124) | 🐌 Tiny | Updates the tscircuitcli package to version 0.1.2129 in the package.json file |
| [#5123](https://github.com/tscircuit/tscircuit/pull/5123) | 🐌 Tiny | Automated package update |
| [#5122](https://github.com/tscircuit/tscircuit/pull/5122) | 🐌 Tiny | Updates the version of the tscircuitrunframe package from 0.0.2785 to 0.0.2786 in package.json |
| [#5121](https://github.com/tscircuit/tscircuit/pull/5121) | 🐌 Tiny | Automated package update |
| [#5120](https://github.com/tscircuit/tscircuit/pull/5120) | 🐌 Tiny | Updates the tscircuitcli package version from 0.1.2127 to 0.1.2128 |
| [#5119](https://github.com/tscircuit/tscircuit/pull/5119) | 🐌 Tiny | Automated package update |
| [#5118](https://github.com/tscircuit/tscircuit/pull/5118) | 🐌 Tiny | Automated package update |
| [#5116](https://github.com/tscircuit/tscircuit/pull/5116) | 🐌 Tiny | Updates the tscircuitcli package to version 0.1.2126 in the package.json file. |
| [#5115](https://github.com/tscircuit/tscircuit/pull/5115) | 🐌 Tiny | Updates the package version from 0.0.2623 to 0.0.2624 in package.json |
| [#5114](https://github.com/tscircuit/tscircuit/pull/5114) | 🐌 Tiny | Updates the version of the tscircuitrunframe package from 0.0.2783 to 0.0.2784 in package.json |
| [#5113](https://github.com/tscircuit/tscircuit/pull/5113) | 🐌 Tiny | Automated package update |
| [#5112](https://github.com/tscircuit/tscircuit/pull/5112) | 🐌 Tiny | Updates the tscircuitcli package version from 0.1.2124 to 0.1.2125 in package.json |
| [#5111](https://github.com/tscircuit/tscircuit/pull/5111) | 🐌 Tiny | Updates the package version from 0.0.2621 to 0.0.2622 in package.json |
| [#5110](https://github.com/tscircuit/tscircuit/pull/5110) | 🐌 Tiny | Updates the versions of several dependencies in the package.json file, including tscircuitcore, tscircuiteval, tscircuitrunframe, and tscircuitschematic-trace-solver. |
| [#5109](https://github.com/tscircuit/tscircuit/pull/5109) | 🐌 Tiny | Automated package update |
| [#5108](https://github.com/tscircuit/tscircuit/pull/5108) | 🐌 Tiny | Automated package update |
| [#5107](https://github.com/tscircuit/tscircuit/pull/5107) | 🐌 Tiny | Automated package update to version 0.0.2620 |
| [#5106](https://github.com/tscircuit/tscircuit/pull/5106) | 🐌 Tiny | Updates the version of the tscircuiteval and tscircuitrunframe packages in package.json |
| [#5105](https://github.com/tscircuit/tscircuit/pull/5105) | 🐌 Tiny | Automated package update |
| [#5104](https://github.com/tscircuit/tscircuit/pull/5104) | 🐌 Tiny | Automated package update |
| [#5103](https://github.com/tscircuit/tscircuit/pull/5103) | 🐌 Tiny | Updates the package version from 0.0.2617 to 0.0.2618 in package.json |
| [#5102](https://github.com/tscircuit/tscircuit/pull/5102) | 🐌 Tiny | Automated package update |
| [#5101](https://github.com/tscircuit/tscircuit/pull/5101) | 🐌 Tiny | Automated package update |
| [#5100](https://github.com/tscircuit/tscircuit/pull/5100) | 🐌 Tiny | Updates the tscircuitcli package to version 0.1.2122 in the package.json file |
| [#5099](https://github.com/tscircuit/tscircuit/pull/5099) | 🐌 Tiny | Automated package update |
| [#5098](https://github.com/tscircuit/tscircuit/pull/5098) | 🐌 Tiny | Automated package update |
| [#5097](https://github.com/tscircuit/tscircuit/pull/5097) | 🐌 Tiny | Automated package update |
| [#5096](https://github.com/tscircuit/tscircuit/pull/5096) | 🐌 Tiny | Updates the tscircuitcli package to version 0.1.2121 in the package.json file |
| [#5095](https://github.com/tscircuit/tscircuit/pull/5095) | 🐌 Tiny | Automated package update |
| [#5094](https://github.com/tscircuit/tscircuit/pull/5094) | 🐌 Tiny | Automated package update |
| [#5093](https://github.com/tscircuit/tscircuit/pull/5093) | 🐌 Tiny | Automated package update |
| [#5092](https://github.com/tscircuit/tscircuit/pull/5092) | 🐌 Tiny | Updates the tscircuitcli package to version 0.1.2120 in the package.json file |
| [#5091](https://github.com/tscircuit/tscircuit/pull/5091) | 🐌 Tiny | Automated package update |
| [#5090](https://github.com/tscircuit/tscircuit/pull/5090) | 🐌 Tiny | Automated package update |
| [#5089](https://github.com/tscircuit/tscircuit/pull/5089) | 🐌 Tiny | Updates the package version from 0.0.2610 to 0.0.2611 in package.json |
| [#5088](https://github.com/tscircuit/tscircuit/pull/5088) | 🐌 Tiny | Updates the tscircuitcli package to version 0.1.2119 |
| [#5087](https://github.com/tscircuit/tscircuit/pull/5087) | 🐌 Tiny | Automated package update to version 0.0.2610 |
| [#5086](https://github.com/tscircuit/tscircuit/pull/5086) | 🐌 Tiny | Updates the tscircuitcli package and other related dependencies to their latest versions. |
| [#5085](https://github.com/tscircuit/tscircuit/pull/5085) | 🐌 Tiny | Automated package update |
| [#5084](https://github.com/tscircuit/tscircuit/pull/5084) | 🐌 Tiny | Automated package update |
| [#5083](https://github.com/tscircuit/tscircuit/pull/5083) | 🐌 Tiny | Automated package update |
| [#5082](https://github.com/tscircuit/tscircuit/pull/5082) | 🐌 Tiny | Updates the tscircuitcli package to version 0.1.2117 |
| [#5081](https://github.com/tscircuit/tscircuit/pull/5081) | 🐌 Tiny | Automated package update |
| [#5080](https://github.com/tscircuit/tscircuit/pull/5080) | 🐌 Tiny | Automated package update |
| [#5079](https://github.com/tscircuit/tscircuit/pull/5079) | 🐌 Tiny | Updates the package version from 0.0.2605 to 0.0.2606 in package.json |
| [#5078](https://github.com/tscircuit/tscircuit/pull/5078) | 🐌 Tiny | Updates the tscircuitcli package to version 0.1.2116 |
| [#5077](https://github.com/tscircuit/tscircuit/pull/5077) | 🐌 Tiny | Automated package update |
| [#5076](https://github.com/tscircuit/tscircuit/pull/5076) | 🐌 Tiny | Automated package update |
| [#5058](https://github.com/tscircuit/tscircuit/pull/5058) | 🐌 Tiny | Updates the tscircuitcli package from version 0.1.2110 to 0.1.2111 |
| [#5069](https://github.com/tscircuit/tscircuit/pull/5069) | 🐌 Tiny | Automated package update |
| [#5075](https://github.com/tscircuit/tscircuit/pull/5075) | 🐌 Tiny | Automated package update |
| [#5074](https://github.com/tscircuit/tscircuit/pull/5074) | 🐌 Tiny | Updates the tscircuitcli package version from 0.1.2114 to 0.1.2115 in package.json |
| [#5071](https://github.com/tscircuit/tscircuit/pull/5071) | 🐌 Tiny | Automated package update to version 0.0.2602 |
| [#5070](https://github.com/tscircuit/tscircuit/pull/5070) | 🐌 Tiny | Updates the tscircuitcli package to version 0.1.2114 in the package.json file |
| [#5068](https://github.com/tscircuit/tscircuit/pull/5068) | 🐌 Tiny | Automated package update |
| [#5067](https://github.com/tscircuit/tscircuit/pull/5067) | 🐌 Tiny | Automated package update to version 0.0.2600 |
| [#5066](https://github.com/tscircuit/tscircuit/pull/5066) | 🐌 Tiny | Updates the tscircuitcli package from version 0.1.2112 to 0.1.2113 |
| [#5064](https://github.com/tscircuit/tscircuit/pull/5064) | 🐌 Tiny | Updates the version of the tscircuitrunframe package from 0.0.2771 to 0.0.2772 in package.json |
| [#5063](https://github.com/tscircuit/tscircuit/pull/5063) | 🐌 Tiny | Automated package update |
| [#5062](https://github.com/tscircuit/tscircuit/pull/5062) | 🐌 Tiny | Updates the tscircuitcli package to version 0.1.2112 in the package.json file. |
| [#5061](https://github.com/tscircuit/tscircuit/pull/5061) | 🐌 Tiny | Automated package update to version 0.0.2597 |
| [#5060](https://github.com/tscircuit/tscircuit/pull/5060) | 🐌 Tiny | Automated package update |
| [#5056](https://github.com/tscircuit/tscircuit/pull/5056) | 🐌 Tiny | Updates the versions of several dependencies in the package.json file. |
| [#5073](https://github.com/tscircuit/tscircuit/pull/5073) | 🐌 Tiny | Automated package update |
| [#5072](https://github.com/tscircuit/tscircuit/pull/5072) | 🐌 Tiny | Automated package update |
| [#5059](https://github.com/tscircuit/tscircuit/pull/5059) | 🐌 Tiny | Automated package update |
| [#5057](https://github.com/tscircuit/tscircuit/pull/5057) | 🐌 Tiny | Automated package update |
| [#5065](https://github.com/tscircuit/tscircuit/pull/5065) | 🐌 Tiny | Automated package update |
| [#5043](https://github.com/tscircuit/tscircuit/pull/5043) | 🐌 Tiny | Automated package update |
| [#5042](https://github.com/tscircuit/tscircuit/pull/5042) | 🐌 Tiny | Automated package update |
| [#5041](https://github.com/tscircuit/tscircuit/pull/5041) | 🐌 Tiny | Automated package update |
| [#5040](https://github.com/tscircuit/tscircuit/pull/5040) | 🐌 Tiny | Updates the package version from 0.0.2586 to 0.0.2587 in package.json |
| [#5039](https://github.com/tscircuit/tscircuit/pull/5039) | 🐌 Tiny | Updates the version of the tscircuitcli package from 0.1.2104 to 0.1.2105 and the tscircuiteval package from 0.0.1424 to 0.0.1425, as well as the tscircuitrunframe package from 0.0.2762 to 0.0.2765 in the package.json file. |
| [#5055](https://github.com/tscircuit/tscircuit/pull/5055) | 🐌 Tiny | Automated package update |
| [#5052](https://github.com/tscircuit/tscircuit/pull/5052) | 🐌 Tiny | Automated package update |
| [#5051](https://github.com/tscircuit/tscircuit/pull/5051) | 🐌 Tiny | Updates the package version from 0.0.2591 to 0.0.2592 |
| [#5049](https://github.com/tscircuit/tscircuit/pull/5049) | 🐌 Tiny | Automated package update |
| [#5048](https://github.com/tscircuit/tscircuit/pull/5048) | 🐌 Tiny | Automated package update |
| [#5047](https://github.com/tscircuit/tscircuit/pull/5047) | 🐌 Tiny | Automated package update |
| [#5046](https://github.com/tscircuit/tscircuit/pull/5046) | 🐌 Tiny | Automated package update |
| [#5044](https://github.com/tscircuit/tscircuit/pull/5044) | 🐌 Tiny | Automated package update |
| [#5054](https://github.com/tscircuit/tscircuit/pull/5054) | 🐌 Tiny | Automated package update |
| [#5053](https://github.com/tscircuit/tscircuit/pull/5053) | 🐌 Tiny | Updates the package version from 0.0.2592 to 0.0.2593 in package.json |
| [#5050](https://github.com/tscircuit/tscircuit/pull/5050) | 🐌 Tiny | Updates the tscircuitcli package from version 0.1.2108 to 0.1.2109 |
| [#5038](https://github.com/tscircuit/tscircuit/pull/5038) | 🐌 Tiny | Automated package update to version 0.0.2586 |
| [#5037](https://github.com/tscircuit/tscircuit/pull/5037) | 🐌 Tiny | Automated package update |
| [#5036](https://github.com/tscircuit/tscircuit/pull/5036) | 🐌 Tiny | Updates the tscircuitcli package to version 0.1.2104 in the package.json file. |
| [#5035](https://github.com/tscircuit/tscircuit/pull/5035) | 🐌 Tiny | Automated package update |
| [#5034](https://github.com/tscircuit/tscircuit/pull/5034) | 🐌 Tiny | Automated package update |
| [#5033](https://github.com/tscircuit/tscircuit/pull/5033) | 🐌 Tiny | Automated package update to version 0.0.2583 |
| [#5032](https://github.com/tscircuit/tscircuit/pull/5032) | 🐌 Tiny | Updates the tscircuitcli package to version 0.1.2103 |
| [#5031](https://github.com/tscircuit/tscircuit/pull/5031) | 🐌 Tiny | Automated package update |
| [#5030](https://github.com/tscircuit/tscircuit/pull/5030) | 🐌 Tiny | Automated package update |
| [#5028](https://github.com/tscircuit/tscircuit/pull/5028) | 🐌 Tiny | Updates the tscircuitcli package to version 0.1.2102 |
| [#5027](https://github.com/tscircuit/tscircuit/pull/5027) | 🐌 Tiny | Automated package update |
| [#5026](https://github.com/tscircuit/tscircuit/pull/5026) | 🐌 Tiny | Automated package update |
| [#5023](https://github.com/tscircuit/tscircuit/pull/5023) | 🐌 Tiny | Updates the package version from 0.0.2577 to 0.0.2578 in package.json |
| [#5022](https://github.com/tscircuit/tscircuit/pull/5022) | 🐌 Tiny | Updates the tscircuitcli package to version 0.1.2100 in the package.json file |
| [#5021](https://github.com/tscircuit/tscircuit/pull/5021) | 🐌 Tiny | Automated package update |
| [#5020](https://github.com/tscircuit/tscircuit/pull/5020) | 🐌 Tiny | Automated package update |
| [#5016](https://github.com/tscircuit/tscircuit/pull/5016) | 🐌 Tiny | Automated package update |
| [#5015](https://github.com/tscircuit/tscircuit/pull/5015) | 🐌 Tiny | Automated package update |
| [#5014](https://github.com/tscircuit/tscircuit/pull/5014) | 🐌 Tiny | Updates the version of several packages in the project, including tscircuitcli, tscircuitcore, and tscircuiteval. |
| [#5013](https://github.com/tscircuit/tscircuit/pull/5013) | 🐌 Tiny | Automated package update |
| [#5012](https://github.com/tscircuit/tscircuit/pull/5012) | 🐌 Tiny | Automated package update |
| [#5029](https://github.com/tscircuit/tscircuit/pull/5029) | 🐌 Tiny | Automated package update |
| [#5025](https://github.com/tscircuit/tscircuit/pull/5025) | 🐌 Tiny | Automated package update |
| [#5019](https://github.com/tscircuit/tscircuit/pull/5019) | 🐌 Tiny | Automated package update |
| [#5024](https://github.com/tscircuit/tscircuit/pull/5024) | 🐌 Tiny | Updates the version of the tscircuitrunframe package from 0.0.2757 to 0.0.2758 in package.json |
| [#5018](https://github.com/tscircuit/tscircuit/pull/5018) | 🐌 Tiny | Updates the tscircuitcli package to version 0.1.2099 in the package.json file |
| [#5017](https://github.com/tscircuit/tscircuit/pull/5017) | 🐌 Tiny | Automated package update |
| [#5011](https://github.com/tscircuit/tscircuit/pull/5011) | 🐌 Tiny | Automated package update |
| [#5010](https://github.com/tscircuit/tscircuit/pull/5010) | 🐌 Tiny | Automated package update |
| [#5006](https://github.com/tscircuit/tscircuit/pull/5006) | 🐌 Tiny | Updates the version of the tscircuitrunframe package from 0.0.2748 to 0.0.2749 in package.json |
| [#5005](https://github.com/tscircuit/tscircuit/pull/5005) | 🐌 Tiny | Automated package update to version 0.0.2569 |
| [#5004](https://github.com/tscircuit/tscircuit/pull/5004) | 🐌 Tiny | Automated package update |
| [#5002](https://github.com/tscircuit/tscircuit/pull/5002) | 🐌 Tiny | Automated package update |
| [#5007](https://github.com/tscircuit/tscircuit/pull/5007) | 🐌 Tiny | Updates the package version from 0.0.2569 to 0.0.2570 in package.json |
| [#5003](https://github.com/tscircuit/tscircuit/pull/5003) | 🐌 Tiny | Automated package update |
| [#5009](https://github.com/tscircuit/tscircuit/pull/5009) | 🐌 Tiny | Automated package update |
| [#5008](https://github.com/tscircuit/tscircuit/pull/5008) | 🐌 Tiny | Updates the tscircuitcli package to version 0.1.2095 in the package.json file. |
| [#5001](https://github.com/tscircuit/tscircuit/pull/5001) | 🐌 Tiny | Automated package update |
| [#5000](https://github.com/tscircuit/tscircuit/pull/5000) | 🐌 Tiny | Automated package update |
| [#4998](https://github.com/tscircuit/tscircuit/pull/4998) | 🐌 Tiny | Automated package update |
| [#4997](https://github.com/tscircuit/tscircuit/pull/4997) | 🐌 Tiny | Automated package update |
| [#4996](https://github.com/tscircuit/tscircuit/pull/4996) | 🐌 Tiny | Automated package update |
| [#4994](https://github.com/tscircuit/tscircuit/pull/4994) | 🐌 Tiny | Automated package update |
| [#4999](https://github.com/tscircuit/tscircuit/pull/4999) | 🐌 Tiny | Automated package update |
| [#4995](https://github.com/tscircuit/tscircuit/pull/4995) | 🐌 Tiny | Automated package update |
| [#4993](https://github.com/tscircuit/tscircuit/pull/4993) | 🐌 Tiny | Automated package update |
| [#812](https://github.com/tscircuit/circuit-json/pull/812) | 🐌 Tiny | Automated package update |
| [#810](https://github.com/tscircuit/circuit-json/pull/810) | 🐌 Tiny | Automated package update |
| [#804](https://github.com/tscircuit/circuit-json/pull/804) | 🐌 Tiny | Automated package update |
| [#802](https://github.com/tscircuit/circuit-json/pull/802) | 🐌 Tiny | Automated package update |
| [#799](https://github.com/tscircuit/circuit-json/pull/799) | 🐌 Tiny | Automated package update |
| [#4057](https://github.com/tscircuit/core/pull/4057) | 🐌 Tiny | Updates the version of the tscircuitchecks package from 0.0.205 to 0.0.206 in package.json |
| [#4056](https://github.com/tscircuit/core/pull/4056) | 🐌 Tiny | Updates the tscircuitchecks package from version 0.0.205 to 0.0.206 in the package.json file. |
| [#4055](https://github.com/tscircuit/core/pull/4055) | 🐌 Tiny | Updates the tscircuitchecks package from version 0.0.204 to 0.0.205 in the package.json file. |
| [#4054](https://github.com/tscircuit/core/pull/4054) | 🐌 Tiny | Updates the tscircuitchecks package from version 0.0.204 to 0.0.205 in the package.json file. |
| [#4046](https://github.com/tscircuit/core/pull/4046) | 🐌 Tiny | Updates the version of the tscircuitchecks package from 0.0.203 to 0.0.204 in package.json |
| [#4032](https://github.com/tscircuit/core/pull/4032) | 🐌 Tiny | Updates the tscircuitchecks package to version 0.0.202 in the package.json file. |
| [#3996](https://github.com/tscircuit/core/pull/3996) | 🐌 Tiny | Updates the tscircuitchecks package from version 0.0.196 to 0.0.197 |
| [#3995](https://github.com/tscircuit/core/pull/3995) | 🐌 Tiny | Updates the tscircuitchecks package from version 0.0.196 to 0.0.197 |
| [#3990](https://github.com/tscircuit/core/pull/3990) | 🐌 Tiny | Updates the tscircuitchecks package from version 0.0.195 to 0.0.196 in the package.json file. |
| [#3989](https://github.com/tscircuit/core/pull/3989) | 🐌 Tiny | Updates the tscircuitchecks package to version 0.0.196 in package.json |
| [#5021](https://github.com/tscircuit/tscircuit.com/pull/5021) | 🐌 Tiny | Automated package update |
| [#5019](https://github.com/tscircuit/tscircuit.com/pull/5019) | 🐌 Tiny | Updates the tscircuiteval package from version 0.0.1438 to 0.0.1440 |
| [#5018](https://github.com/tscircuit/tscircuit.com/pull/5018) | 🐌 Tiny | Updates the tscircuitrunframe package from version 0.0.2782 to 0.0.2783 |
| [#5017](https://github.com/tscircuit/tscircuit.com/pull/5017) | 🐌 Tiny | Automated package update |
| [#5015](https://github.com/tscircuit/tscircuit.com/pull/5015) | 🐌 Tiny | Updates the tscircuitrunframe package from version 0.0.2780 to 0.0.2781 |
| [#5014](https://github.com/tscircuit/tscircuit.com/pull/5014) | 🐌 Tiny | Updates the tscircuiteval package from version 0.0.1437 to 0.0.1438 |
| [#5013](https://github.com/tscircuit/tscircuit.com/pull/5013) | 🐌 Tiny | Updates the tscircuitrunframe package version from 0.0.2779 to 0.0.2780 |
| [#5012](https://github.com/tscircuit/tscircuit.com/pull/5012) | 🐌 Tiny | Automated package update |
| [#5011](https://github.com/tscircuit/tscircuit.com/pull/5011) | 🐌 Tiny | Automated package update |
| [#5009](https://github.com/tscircuit/tscircuit.com/pull/5009) | 🐌 Tiny | Updates the tscircuiteval package from version 0.0.1434 to 0.0.1435 |
| [#5008](https://github.com/tscircuit/tscircuit.com/pull/5008) | 🐌 Tiny | Updates the tscircuitrunframe package to version 0.0.2777 in the package.json file |
| [#5007](https://github.com/tscircuit/tscircuit.com/pull/5007) | 🐌 Tiny | Updates the tscircuiteval package from version 0.0.1433 to 0.0.1434 |
| [#5006](https://github.com/tscircuit/tscircuit.com/pull/5006) | 🐌 Tiny | Updates the tscircuitrunframe package to version 0.0.2776 |
| [#5005](https://github.com/tscircuit/tscircuit.com/pull/5005) | 🐌 Tiny | Automated package update |
| [#5004](https://github.com/tscircuit/tscircuit.com/pull/5004) | 🐌 Tiny | Updates the tscircuitrunframe package from version 0.0.2774 to 0.0.2775 |
| [#5003](https://github.com/tscircuit/tscircuit.com/pull/5003) | 🐌 Tiny | Updates the tscircuiteval package from version 0.0.1429 to 0.0.1432 |
| [#5002](https://github.com/tscircuit/tscircuit.com/pull/5002) | 🐌 Tiny | Automated package update |
| [#4999](https://github.com/tscircuit/tscircuit.com/pull/4999) | 🐌 Tiny | Automated package update |
| [#4996](https://github.com/tscircuit/tscircuit.com/pull/4996) | 🐌 Tiny | Automated package update |
| [#4995](https://github.com/tscircuit/tscircuit.com/pull/4995) | 🐌 Tiny | Automated package update |
| [#4994](https://github.com/tscircuit/tscircuit.com/pull/4994) | 🐌 Tiny | Automated package update |
| [#4993](https://github.com/tscircuit/tscircuit.com/pull/4993) | 🐌 Tiny | Updates the tscircuiteval package from version 0.0.1423 to 0.0.1428 |
| [#4992](https://github.com/tscircuit/tscircuit.com/pull/4992) | 🐌 Tiny | Automated package update |
| [#4991](https://github.com/tscircuit/tscircuit.com/pull/4991) | 🐌 Tiny | Automated package update |
| [#4989](https://github.com/tscircuit/tscircuit.com/pull/4989) | 🐌 Tiny | Automated package update |
| [#4987](https://github.com/tscircuit/tscircuit.com/pull/4987) | 🐌 Tiny | Automated package update |
| [#4985](https://github.com/tscircuit/tscircuit.com/pull/4985) | 🐌 Tiny | Automated package update |
| [#4983](https://github.com/tscircuit/tscircuit.com/pull/4983) | 🐌 Tiny | Automated package update |
| [#4982](https://github.com/tscircuit/tscircuit.com/pull/4982) | 🐌 Tiny | Automated package update |
| [#4981](https://github.com/tscircuit/tscircuit.com/pull/4981) | 🐌 Tiny | Automated package update |
| [#4980](https://github.com/tscircuit/tscircuit.com/pull/4980) | 🐌 Tiny | Automated package update |
| [#4975](https://github.com/tscircuit/tscircuit.com/pull/4975) | 🐌 Tiny | Automated package update |
| [#4974](https://github.com/tscircuit/tscircuit.com/pull/4974) | 🐌 Tiny | Updates the tscircuiteval package from version 0.0.1421 to 0.0.1422 in the package.json file. |
| [#4958](https://github.com/tscircuit/tscircuit.com/pull/4958) | 🐌 Tiny | Updates the tscircuiteval package from version 0.0.1416 to 0.0.1417 |
| [#4977](https://github.com/tscircuit/tscircuit.com/pull/4977) | 🐌 Tiny | Automated package update |
| [#4976](https://github.com/tscircuit/tscircuit.com/pull/4976) | 🐌 Tiny | Updates the tscircuiteval package from version 0.0.1422 to 0.0.1423 |
| [#4973](https://github.com/tscircuit/tscircuit.com/pull/4973) | 🐌 Tiny | Updates the tscircuitrunframe package to version 0.0.2758 |
| [#4971](https://github.com/tscircuit/tscircuit.com/pull/4971) | 🐌 Tiny | Automated package update |
| [#4970](https://github.com/tscircuit/tscircuit.com/pull/4970) | 🐌 Tiny | Updates the tscircuitrunframe package from version 0.0.2754 to 0.0.2756 |
| [#4969](https://github.com/tscircuit/tscircuit.com/pull/4969) | 🐌 Tiny | Automated package update |
| [#4967](https://github.com/tscircuit/tscircuit.com/pull/4967) | 🐌 Tiny | Updates the tscircuiteval package from version 0.0.1418 to 0.0.1419 |
| [#4965](https://github.com/tscircuit/tscircuit.com/pull/4965) | 🐌 Tiny | Updates the tscircuitrunframe package from version 0.0.2752 to 0.0.2754 |
| [#4964](https://github.com/tscircuit/tscircuit.com/pull/4964) | 🐌 Tiny | Updates the tscircuiteval package from version 0.0.1417 to 0.0.1418 |
| [#4963](https://github.com/tscircuit/tscircuit.com/pull/4963) | 🐌 Tiny | Automated package update |
| [#4961](https://github.com/tscircuit/tscircuit.com/pull/4961) | 🐌 Tiny | Automated package update |
| [#4972](https://github.com/tscircuit/tscircuit.com/pull/4972) | 🐌 Tiny | Updates the tscircuiteval package from version 0.0.1420 to 0.0.1421 |
| [#4953](https://github.com/tscircuit/tscircuit.com/pull/4953) | 🐌 Tiny | Updates the tscircuitrunframe package from version 0.0.2747 to 0.0.2749 and the tscircuitpcb-viewer package from version 1.11.398 to 1.11.399 in package.json |
| [#4951](https://github.com/tscircuit/tscircuit.com/pull/4951) | 🐌 Tiny | Updates the tscircuiteval package from version 0.0.1411 to 0.0.1415 |
| [#4956](https://github.com/tscircuit/tscircuit.com/pull/4956) | 🐌 Tiny | Automated package update |
| [#4955](https://github.com/tscircuit/tscircuit.com/pull/4955) | 🐌 Tiny | Automated package update |
| [#4954](https://github.com/tscircuit/tscircuit.com/pull/4954) | 🐌 Tiny | Automated package update |
| [#4957](https://github.com/tscircuit/tscircuit.com/pull/4957) | 🐌 Tiny | Automated package update |
| [#4948](https://github.com/tscircuit/tscircuit.com/pull/4948) | 🐌 Tiny | Updates the tscircuitrunframe package from version 0.0.2745 to 0.0.2746 and the tscircuitpcb-viewer package from version 1.11.397 to 1.11.398. |
| [#4938](https://github.com/tscircuit/tscircuit.com/pull/4938) | 🐌 Tiny | Updates the tscircuitrunframe package from version 0.0.2738 to 0.0.2739 |
| [#4944](https://github.com/tscircuit/tscircuit.com/pull/4944) | 🐌 Tiny | Automated package update |
| [#4942](https://github.com/tscircuit/tscircuit.com/pull/4942) | 🐌 Tiny | Automated package update |
| [#4936](https://github.com/tscircuit/tscircuit.com/pull/4936) | 🐌 Tiny | Updates the tscircuitrunframe package from version 0.0.2737 to 0.0.2738 |
| [#4950](https://github.com/tscircuit/tscircuit.com/pull/4950) | 🐌 Tiny | Automated package update |
| [#4946](https://github.com/tscircuit/tscircuit.com/pull/4946) | 🐌 Tiny | Automated package update |
| [#4941](https://github.com/tscircuit/tscircuit.com/pull/4941) | 🐌 Tiny | Automated package update |
| [#4939](https://github.com/tscircuit/tscircuit.com/pull/4939) | 🐌 Tiny | Updates the tscircuiteval package from version 0.0.1410 to 0.0.1411 |
| [#4947](https://github.com/tscircuit/tscircuit.com/pull/4947) | 🐌 Tiny | Automated package update |
| [#4937](https://github.com/tscircuit/tscircuit.com/pull/4937) | 🐌 Tiny | Updates the tscircuiteval package from version 0.0.1409 to 0.0.1410. |
| [#4691](https://github.com/tscircuit/eval/pull/4691) | 🐌 Tiny | Automated package update |
| [#4690](https://github.com/tscircuit/eval/pull/4690) | 🐌 Tiny | Updates the version of tscircuitcore from 0.0.1958 to 0.0.1959 and tscircuitschematic-trace-solver from 0.0.203 to 0.0.204 in package.json |
| [#4688](https://github.com/tscircuit/eval/pull/4688) | 🐌 Tiny | Automated package update |
| [#4687](https://github.com/tscircuit/eval/pull/4687) | 🐌 Tiny | Automated package update |
| [#4685](https://github.com/tscircuit/eval/pull/4685) | 🐌 Tiny | Automated package update |
| [#4684](https://github.com/tscircuit/eval/pull/4684) | 🐌 Tiny | Automated package update |
| [#4682](https://github.com/tscircuit/eval/pull/4682) | 🐌 Tiny | Automated package update |
| [#4681](https://github.com/tscircuit/eval/pull/4681) | 🐌 Tiny | Updates package dependencies to their latest versions as part of routine maintenance. |
| [#4679](https://github.com/tscircuit/eval/pull/4679) | 🐌 Tiny | Automated package version bump from 0.0.1436 to 0.0.1437 |
| [#4678](https://github.com/tscircuit/eval/pull/4678) | 🐌 Tiny | Automated package update |
| [#4674](https://github.com/tscircuit/eval/pull/4674) | 🐌 Tiny | Automated package update |
| [#4673](https://github.com/tscircuit/eval/pull/4673) | 🐌 Tiny | Automated package update |
| [#4671](https://github.com/tscircuit/eval/pull/4671) | 🐌 Tiny | Automated package update |
| [#4670](https://github.com/tscircuit/eval/pull/4670) | 🐌 Tiny | Automated package update |
| [#4668](https://github.com/tscircuit/eval/pull/4668) | 🐌 Tiny | Automated package update to version 0.0.1434 |
| [#4667](https://github.com/tscircuit/eval/pull/4667) | 🐌 Tiny | Automated package update |
| [#4663](https://github.com/tscircuit/eval/pull/4663) | 🐌 Tiny | Automated package update |
| [#4662](https://github.com/tscircuit/eval/pull/4662) | 🐌 Tiny | Updates the version of the tscircuitcore package from 0.0.1948 to 0.0.1949 in package.json |
| [#4660](https://github.com/tscircuit/eval/pull/4660) | 🐌 Tiny | Automated package update to version 0.0.1432 |
| [#4659](https://github.com/tscircuit/eval/pull/4659) | 🐌 Tiny | Updates package dependencies to their latest versions |
| [#4657](https://github.com/tscircuit/eval/pull/4657) | 🐌 Tiny | Updates the package version from 0.0.1430 to 0.0.1431 in package.json |
| [#4656](https://github.com/tscircuit/eval/pull/4656) | 🐌 Tiny | Updates the versions of several dependencies in the package.json file. |
| [#4654](https://github.com/tscircuit/eval/pull/4654) | 🐌 Tiny | Automated package update |
| [#4653](https://github.com/tscircuit/eval/pull/4653) | 🐌 Tiny | Automated package update |
| [#4651](https://github.com/tscircuit/eval/pull/4651) | 🐌 Tiny | Automated package update |
| [#4650](https://github.com/tscircuit/eval/pull/4650) | 🐌 Tiny | Updates the version of the tscircuitcore package from 0.0.1944 to 0.0.1945 in package.json |
| [#4648](https://github.com/tscircuit/eval/pull/4648) | 🐌 Tiny | Automated package update |
| [#4647](https://github.com/tscircuit/eval/pull/4647) | 🐌 Tiny | Updates the version of the tscircuitcore package from 0.0.1943 to 0.0.1944 in package.json |
| [#4645](https://github.com/tscircuit/eval/pull/4645) | 🐌 Tiny | Automated package update |
| [#4644](https://github.com/tscircuit/eval/pull/4644) | 🐌 Tiny | Automated package update |
| [#4642](https://github.com/tscircuit/eval/pull/4642) | 🐌 Tiny | Automated package update |
| [#4641](https://github.com/tscircuit/eval/pull/4641) | 🐌 Tiny | Automated package update |
| [#4639](https://github.com/tscircuit/eval/pull/4639) | 🐌 Tiny | Updates the package version from 0.0.1424 to 0.0.1425 in package.json |
| [#4638](https://github.com/tscircuit/eval/pull/4638) | 🐌 Tiny | Updates the versions of several dependencies in the package.json file. |
| [#4636](https://github.com/tscircuit/eval/pull/4636) | 🐌 Tiny | Automated package update |
| [#4635](https://github.com/tscircuit/eval/pull/4635) | 🐌 Tiny | Updates the package versions in package.json to the latest compatible versions. |
| [#4633](https://github.com/tscircuit/eval/pull/4633) | 🐌 Tiny | Automated package update |
| [#4632](https://github.com/tscircuit/eval/pull/4632) | 🐌 Tiny | Updates package dependencies to their latest versions in package.json |
| [#4630](https://github.com/tscircuit/eval/pull/4630) | 🐌 Tiny | Automated package update |
| [#4629](https://github.com/tscircuit/eval/pull/4629) | 🐌 Tiny | Automated package update |
| [#4627](https://github.com/tscircuit/eval/pull/4627) | 🐌 Tiny | Automated package update |
| [#4626](https://github.com/tscircuit/eval/pull/4626) | 🐌 Tiny | Automated package update |
| [#4624](https://github.com/tscircuit/eval/pull/4624) | 🐌 Tiny | Automated package update |
| [#4621](https://github.com/tscircuit/eval/pull/4621) | 🐌 Tiny | Automated package update |
| [#4620](https://github.com/tscircuit/eval/pull/4620) | 🐌 Tiny | Automated package update |
| [#4618](https://github.com/tscircuit/eval/pull/4618) | 🐌 Tiny | Automated package update |
| [#4617](https://github.com/tscircuit/eval/pull/4617) | 🐌 Tiny | Automated package update |
| [#4623](https://github.com/tscircuit/eval/pull/4623) | 🐌 Tiny | Updates the version of the tscircuitcore package from 0.0.1935 to 0.0.1936 in package.json |
| [#4615](https://github.com/tscircuit/eval/pull/4615) | 🐌 Tiny | Automated package update |
| [#4614](https://github.com/tscircuit/eval/pull/4614) | 🐌 Tiny | Automated package update |
| [#4612](https://github.com/tscircuit/eval/pull/4612) | 🐌 Tiny | Automated package update |
| [#4611](https://github.com/tscircuit/eval/pull/4611) | 🐌 Tiny | Automated package update |
| [#4609](https://github.com/tscircuit/eval/pull/4609) | 🐌 Tiny | Automated package update |
| [#4608](https://github.com/tscircuit/eval/pull/4608) | 🐌 Tiny | Automated package update |
| [#4598](https://github.com/tscircuit/eval/pull/4598) | 🐌 Tiny | Automated package update |
| [#4597](https://github.com/tscircuit/eval/pull/4597) | 🐌 Tiny | Automated package update |
| [#4595](https://github.com/tscircuit/eval/pull/4595) | 🐌 Tiny | Automated package update |
| [#4594](https://github.com/tscircuit/eval/pull/4594) | 🐌 Tiny | Updates package dependencies to their latest versions as part of routine maintenance. |
| [#4592](https://github.com/tscircuit/eval/pull/4592) | 🐌 Tiny | Automated package update to version 0.0.1412 |
| [#4591](https://github.com/tscircuit/eval/pull/4591) | 🐌 Tiny | Updates the versions of several dependencies in the package.json file. |
| [#4589](https://github.com/tscircuit/eval/pull/4589) | 🐌 Tiny | Automated package update |
| [#5260](https://github.com/tscircuit/runframe/pull/5260) | 🐌 Tiny | Automated package update |
| [#5259](https://github.com/tscircuit/runframe/pull/5259) | 🐌 Tiny | Automated package update |
| [#5258](https://github.com/tscircuit/runframe/pull/5258) | 🐌 Tiny | Automated package update |
| [#5257](https://github.com/tscircuit/runframe/pull/5257) | 🐌 Tiny | Updates the tscircuiteval package from version 0.0.1439 to 0.0.1440 in the package.json file. |
| [#5256](https://github.com/tscircuit/runframe/pull/5256) | 🐌 Tiny | Automated package update |
| [#5255](https://github.com/tscircuit/runframe/pull/5255) | 🐌 Tiny | Updates the circuit-json-to-kicad package version from 0.0.217 to 0.0.218 in package.json |
| [#5253](https://github.com/tscircuit/runframe/pull/5253) | 🐌 Tiny | Automated package update |
| [#5252](https://github.com/tscircuit/runframe/pull/5252) | 🐌 Tiny | Updates the tscircuiteval package from version 0.0.1438 to 0.0.1439 in the package.json file. |
| [#5251](https://github.com/tscircuit/runframe/pull/5251) | 🐌 Tiny | Automated package update |
| [#5250](https://github.com/tscircuit/runframe/pull/5250) | 🐌 Tiny | Updates the tscircuiteval package from version 0.0.1437 to 0.0.1438 in the package.json file. |
| [#5249](https://github.com/tscircuit/runframe/pull/5249) | 🐌 Tiny | Automated package update |
| [#5248](https://github.com/tscircuit/runframe/pull/5248) | 🐌 Tiny | Updates the tscircuiteval package from version 0.0.1436 to 0.0.1437 |
| [#5247](https://github.com/tscircuit/runframe/pull/5247) | 🐌 Tiny | Automated package update |
| [#5246](https://github.com/tscircuit/runframe/pull/5246) | 🐌 Tiny | Automated package update |
| [#5245](https://github.com/tscircuit/runframe/pull/5245) | 🐌 Tiny | Automated package update |
| [#5244](https://github.com/tscircuit/runframe/pull/5244) | 🐌 Tiny | Automated package update |
| [#5243](https://github.com/tscircuit/runframe/pull/5243) | 🐌 Tiny | Updates the tscircuiteval package from version 0.0.1434 to 0.0.1435 |
| [#5242](https://github.com/tscircuit/runframe/pull/5242) | 🐌 Tiny | Automated package update |
| [#5241](https://github.com/tscircuit/runframe/pull/5241) | 🐌 Tiny | Updates the tscircuiteval package from version 0.0.1433 to 0.0.1434 |
| [#5240](https://github.com/tscircuit/runframe/pull/5240) | 🐌 Tiny | Automated package update |
| [#5239](https://github.com/tscircuit/runframe/pull/5239) | 🐌 Tiny | Updates the tscircuiteval package from version 0.0.1432 to 0.0.1433 |
| [#5238](https://github.com/tscircuit/runframe/pull/5238) | 🐌 Tiny | Updates the package version from 0.0.2775 to 0.0.2776 in package.json |
| [#5237](https://github.com/tscircuit/runframe/pull/5237) | 🐌 Tiny | Automated package update |
| [#5236](https://github.com/tscircuit/runframe/pull/5236) | 🐌 Tiny | Automated package update |
| [#5235](https://github.com/tscircuit/runframe/pull/5235) | 🐌 Tiny | Updates the tscircuiteval package from version 0.0.1430 to 0.0.1431 in the package.json file. |
| [#5233](https://github.com/tscircuit/runframe/pull/5233) | 🐌 Tiny | Updates the tscircuiteval package from version 0.0.1429 to 0.0.1430 |
| [#5229](https://github.com/tscircuit/runframe/pull/5229) | 🐌 Tiny | Updates the tscircuitpcb-viewer package from version 1.11.404 to 1.11.405 |
| [#5234](https://github.com/tscircuit/runframe/pull/5234) | 🐌 Tiny | Automated package update |
| [#5232](https://github.com/tscircuit/runframe/pull/5232) | 🐌 Tiny | Automated package update |
| [#5231](https://github.com/tscircuit/runframe/pull/5231) | 🐌 Tiny | Updates the tscircuiteval package from version 0.0.1428 to 0.0.1429 |
| [#5230](https://github.com/tscircuit/runframe/pull/5230) | 🐌 Tiny | Automated package update |
| [#5227](https://github.com/tscircuit/runframe/pull/5227) | 🐌 Tiny | Updates the tscircuiteval package from version 0.0.1427 to 0.0.1428 in the package.json file. |
| [#5228](https://github.com/tscircuit/runframe/pull/5228) | 🐌 Tiny | Automated package update |
| [#5221](https://github.com/tscircuit/runframe/pull/5221) | 🐌 Tiny | Updates the tscircuiteval package from version 0.0.1425 to 0.0.1426 |
| [#5220](https://github.com/tscircuit/runframe/pull/5220) | 🐌 Tiny | Updates the tscircuitpcb-viewer package from version 1.11.402 to 1.11.403 |
| [#5218](https://github.com/tscircuit/runframe/pull/5218) | 🐌 Tiny | Updates the tscircuiteval package from version 0.0.1424 to 0.0.1425 in the package.json file. |
| [#5216](https://github.com/tscircuit/runframe/pull/5216) | 🐌 Tiny | Updates the tscircuit3d-viewer package to version 0.0.600 |
| [#5215](https://github.com/tscircuit/runframe/pull/5215) | 🐌 Tiny | Automated package update |
| [#5212](https://github.com/tscircuit/runframe/pull/5212) | 🐌 Tiny | Updates the tscircuitpcb-viewer package from version 1.11.400 to 1.11.401 |
| [#5226](https://github.com/tscircuit/runframe/pull/5226) | 🐌 Tiny | Automated package update |
| [#5225](https://github.com/tscircuit/runframe/pull/5225) | 🐌 Tiny | Updates the tscircuitpcb-viewer package from version 1.11.403 to 1.11.404 |
| [#5224](https://github.com/tscircuit/runframe/pull/5224) | 🐌 Tiny | Automated package update |
| [#5222](https://github.com/tscircuit/runframe/pull/5222) | 🐌 Tiny | Automated package update |
| [#5219](https://github.com/tscircuit/runframe/pull/5219) | 🐌 Tiny | Automated package update |
| [#5217](https://github.com/tscircuit/runframe/pull/5217) | 🐌 Tiny | Automated package update |
| [#5223](https://github.com/tscircuit/runframe/pull/5223) | 🐌 Tiny | Updates the tscircuiteval package from version 0.0.1426 to 0.0.1427 in the package.json file. |
| [#5214](https://github.com/tscircuit/runframe/pull/5214) | 🐌 Tiny | Automated package update |
| [#5213](https://github.com/tscircuit/runframe/pull/5213) | 🐌 Tiny | Automated package update |
| [#5210](https://github.com/tscircuit/runframe/pull/5210) | 🐌 Tiny | Updates the tscircuiteval package from version 0.0.1423 to 0.0.1424 in the package.json file. |
| [#5209](https://github.com/tscircuit/runframe/pull/5209) | 🐌 Tiny | Automated package update |
| [#5208](https://github.com/tscircuit/runframe/pull/5208) | 🐌 Tiny | Updates the tscircuitpcb-viewer package from version 1.11.399 to 1.11.400 |
| [#5207](https://github.com/tscircuit/runframe/pull/5207) | 🐌 Tiny | Automated package update |
| [#5206](https://github.com/tscircuit/runframe/pull/5206) | 🐌 Tiny | Updates the tscircuiteval package from version 0.0.1422 to 0.0.1423 |
| [#5205](https://github.com/tscircuit/runframe/pull/5205) | 🐌 Tiny | Automated package update |
| [#5204](https://github.com/tscircuit/runframe/pull/5204) | 🐌 Tiny | Updates the tscircuiteval package from version 0.0.1421 to 0.0.1422 in the package.json file. |
| [#5203](https://github.com/tscircuit/runframe/pull/5203) | 🐌 Tiny | Automated package update |
| [#5202](https://github.com/tscircuit/runframe/pull/5202) | 🐌 Tiny | Updates the tscircuiteval package from version 0.0.1420 to 0.0.1421 in the package.json file. |
| [#5201](https://github.com/tscircuit/runframe/pull/5201) | 🐌 Tiny | Automated package update |
| [#5200](https://github.com/tscircuit/runframe/pull/5200) | 🐌 Tiny | Automated package update |
| [#5199](https://github.com/tscircuit/runframe/pull/5199) | 🐌 Tiny | Automated package update |
| [#5198](https://github.com/tscircuit/runframe/pull/5198) | 🐌 Tiny | Automated package update |
| [#5197](https://github.com/tscircuit/runframe/pull/5197) | 🐌 Tiny | Automated package update |
| [#5196](https://github.com/tscircuit/runframe/pull/5196) | 🐌 Tiny | Updates the tscircuiteval package from version 0.0.1418 to 0.0.1419 |
| [#5195](https://github.com/tscircuit/runframe/pull/5195) | 🐌 Tiny | Automated package update |
| [#5194](https://github.com/tscircuit/runframe/pull/5194) | 🐌 Tiny | Updates the tscircuiteval package from version 0.0.1417 to 0.0.1418 |
| [#5193](https://github.com/tscircuit/runframe/pull/5193) | 🐌 Tiny | Automated package update |
| [#5192](https://github.com/tscircuit/runframe/pull/5192) | 🐌 Tiny | Updates the tscircuiteval package from version 0.0.1416 to 0.0.1417 |
| [#5211](https://github.com/tscircuit/runframe/pull/5211) | 🐌 Tiny | Automated package update |
| [#5180](https://github.com/tscircuit/runframe/pull/5180) | 🐌 Tiny | Updates the tscircuitpcb-viewer package to version 1.11.399 |
| [#5190](https://github.com/tscircuit/runframe/pull/5190) | 🐌 Tiny | Updates the circuit-json-to-kicad package version from 0.0.216 to 0.0.217 in package.json |
| [#5187](https://github.com/tscircuit/runframe/pull/5187) | 🐌 Tiny | Updates the tscircuiteval package from version 0.0.1415 to 0.0.1416 |
| [#5184](https://github.com/tscircuit/runframe/pull/5184) | 🐌 Tiny | Automated package update |
| [#5183](https://github.com/tscircuit/runframe/pull/5183) | 🐌 Tiny | Updates the circuit-json-to-kicad package version from 0.0.213 to 0.0.216 in package.json |
| [#5181](https://github.com/tscircuit/runframe/pull/5181) | 🐌 Tiny | Automated package update |
| [#5191](https://github.com/tscircuit/runframe/pull/5191) | 🐌 Tiny | Automated package update |
| [#5188](https://github.com/tscircuit/runframe/pull/5188) | 🐌 Tiny | Automated package update |
| [#5186](https://github.com/tscircuit/runframe/pull/5186) | 🐌 Tiny | Automated package update |
| [#5179](https://github.com/tscircuit/runframe/pull/5179) | 🐌 Tiny | Automated package update |
| [#5178](https://github.com/tscircuit/runframe/pull/5178) | 🐌 Tiny | Updates the tscircuiteval package from version 0.0.1414 to 0.0.1415 in the package.json file. |
| [#5174](https://github.com/tscircuit/runframe/pull/5174) | 🐌 Tiny | Updates the tscircuitpcb-viewer package from version 1.11.397 to 1.11.398 |
| [#5177](https://github.com/tscircuit/runframe/pull/5177) | 🐌 Tiny | Automated package update |
| [#5176](https://github.com/tscircuit/runframe/pull/5176) | 🐌 Tiny | Updates the tscircuiteval package from version 0.0.1413 to 0.0.1414 |
| [#5175](https://github.com/tscircuit/runframe/pull/5175) | 🐌 Tiny | Automated package update |
| [#5173](https://github.com/tscircuit/runframe/pull/5173) | 🐌 Tiny | Automated package update |
| [#5172](https://github.com/tscircuit/runframe/pull/5172) | 🐌 Tiny | Updates the tscircuitpcb-viewer package from version 1.11.396 to 1.11.397 |
| [#5171](https://github.com/tscircuit/runframe/pull/5171) | 🐌 Tiny | Automated package update |
| [#5170](https://github.com/tscircuit/runframe/pull/5170) | 🐌 Tiny | Updates the tscircuiteval package from version 0.0.1412 to 0.0.1413 in the package.json file. |
| [#5169](https://github.com/tscircuit/runframe/pull/5169) | 🐌 Tiny | Automated package update |
| [#5168](https://github.com/tscircuit/runframe/pull/5168) | 🐌 Tiny | Updates the tscircuiteval package from version 0.0.1411 to 0.0.1412 |
| [#5167](https://github.com/tscircuit/runframe/pull/5167) | 🐌 Tiny | Automated package update |
| [#5166](https://github.com/tscircuit/runframe/pull/5166) | 🐌 Tiny | Updates the tscircuitpcb-viewer package from version 1.11.395 to 1.11.396 |
| [#5165](https://github.com/tscircuit/runframe/pull/5165) | 🐌 Tiny | Automated package update |
| [#5164](https://github.com/tscircuit/runframe/pull/5164) | 🐌 Tiny | Updates the tscircuitpcb-viewer package to version 1.11.395 |
| [#5163](https://github.com/tscircuit/runframe/pull/5163) | 🐌 Tiny | Automated package update |
| [#5162](https://github.com/tscircuit/runframe/pull/5162) | 🐌 Tiny | Automated package update |
| [#5161](https://github.com/tscircuit/runframe/pull/5161) | 🐌 Tiny | Automated package update |
| [#5160](https://github.com/tscircuit/runframe/pull/5160) | 🐌 Tiny | Updates the tscircuiteval package from version 0.0.1409 to 0.0.1410 |
| [#5159](https://github.com/tscircuit/runframe/pull/5159) | 🐌 Tiny | Automated package update |
| [#5158](https://github.com/tscircuit/runframe/pull/5158) | 🐌 Tiny | Updates the circuit-json-to-kicad package version from 0.0.212 to 0.0.213 in package.json |
| [#4888](https://github.com/tscircuit/cli/pull/4888) | 🐌 Tiny | Automated package update |
| [#4887](https://github.com/tscircuit/cli/pull/4887) | 🐌 Tiny | Updates the tscircuitrunframe package from version 0.0.2784 to 0.0.2785 |
| [#4886](https://github.com/tscircuit/cli/pull/4886) | 🐌 Tiny | Automated package update |
| [#4885](https://github.com/tscircuit/cli/pull/4885) | 🐌 Tiny | Updates the tscircuitrunframe package to version 0.0.2784 in package.json |
| [#4882](https://github.com/tscircuit/cli/pull/4882) | 🐌 Tiny | Automated package update |
| [#4881](https://github.com/tscircuit/cli/pull/4881) | 🐌 Tiny | Updates the tscircuitrunframe package from version 0.0.2782 to 0.0.2783 |
| [#4880](https://github.com/tscircuit/cli/pull/4880) | 🐌 Tiny | Automated package update |
| [#4879](https://github.com/tscircuit/cli/pull/4879) | 🐌 Tiny | Updates the tscircuitrunframe package from version 0.0.2781 to 0.0.2782 |
| [#4876](https://github.com/tscircuit/cli/pull/4876) | 🐌 Tiny | Automated package update |
| [#4875](https://github.com/tscircuit/cli/pull/4875) | 🐌 Tiny | Automated package update |
| [#4874](https://github.com/tscircuit/cli/pull/4874) | 🐌 Tiny | Automated package update |
| [#4873](https://github.com/tscircuit/cli/pull/4873) | 🐌 Tiny | Automated package update |
| [#4872](https://github.com/tscircuit/cli/pull/4872) | 🐌 Tiny | Updates the tscircuitrunframe package version from 0.0.2779 to 0.0.2780 |
| [#4870](https://github.com/tscircuit/cli/pull/4870) | 🐌 Tiny | Automated package update |
| [#4869](https://github.com/tscircuit/cli/pull/4869) | 🐌 Tiny | Updates the tscircuitrunframe package from version 0.0.2778 to 0.0.2779 |
| [#4868](https://github.com/tscircuit/cli/pull/4868) | 🐌 Tiny | Automated package update |
| [#4867](https://github.com/tscircuit/cli/pull/4867) | 🐌 Tiny | Updates the tscircuitrunframe package to version 0.0.2778 |
| [#4866](https://github.com/tscircuit/cli/pull/4866) | 🐌 Tiny | Automated package update |
| [#4865](https://github.com/tscircuit/cli/pull/4865) | 🐌 Tiny | Updates the tscircuitrunframe package to version 0.0.2777 in package.json |
| [#4863](https://github.com/tscircuit/cli/pull/4863) | 🐌 Tiny | Updates the tscircuitrunframe package to version 0.0.2776 |
| [#4862](https://github.com/tscircuit/cli/pull/4862) | 🐌 Tiny | Automated package update |
| [#4861](https://github.com/tscircuit/cli/pull/4861) | 🐌 Tiny | Updates the tscircuitrunframe package from version 0.0.2774 to 0.0.2775 |
| [#4860](https://github.com/tscircuit/cli/pull/4860) | 🐌 Tiny | Automated package update |
| [#4859](https://github.com/tscircuit/cli/pull/4859) | 🐌 Tiny | Updates the tscircuitrunframe package to version 0.0.2774 in package.json |
| [#4850](https://github.com/tscircuit/cli/pull/4850) | 🐌 Tiny | Automated package update |
| [#4857](https://github.com/tscircuit/cli/pull/4857) | 🐌 Tiny | Updates the tscircuitrunframe package from version 0.0.2772 to 0.0.2773 |
| [#4856](https://github.com/tscircuit/cli/pull/4856) | 🐌 Tiny | Automated package update |
| [#4855](https://github.com/tscircuit/cli/pull/4855) | 🐌 Tiny | Updates the tscircuitrunframe package from version 0.0.2771 to 0.0.2772 |
| [#4854](https://github.com/tscircuit/cli/pull/4854) | 🐌 Tiny | Automated package update |
| [#4853](https://github.com/tscircuit/cli/pull/4853) | 🐌 Tiny | Updates the tscircuitrunframe package to version 0.0.2771 in package.json |
| [#4852](https://github.com/tscircuit/cli/pull/4852) | 🐌 Tiny | Automated package update |
| [#4851](https://github.com/tscircuit/cli/pull/4851) | 🐌 Tiny | Updates the tscircuitrunframe package to version 0.0.2770 |
| [#4849](https://github.com/tscircuit/cli/pull/4849) | 🐌 Tiny | Updates the tscircuitrunframe package from version 0.0.2767 to 0.0.2769 |
| [#4858](https://github.com/tscircuit/cli/pull/4858) | 🐌 Tiny | Automated package update |
| [#4837](https://github.com/tscircuit/cli/pull/4837) | 🐌 Tiny | Updates the tscircuitrunframe package from version 0.0.2761 to 0.0.2764 |
| [#4847](https://github.com/tscircuit/cli/pull/4847) | 🐌 Tiny | Automated package update |
| [#4845](https://github.com/tscircuit/cli/pull/4845) | 🐌 Tiny | Automated package update |
| [#4841](https://github.com/tscircuit/cli/pull/4841) | 🐌 Tiny | Automated package update |
| [#4840](https://github.com/tscircuit/cli/pull/4840) | 🐌 Tiny | Updates the tscircuitrunframe package from version 0.0.2764 to 0.0.2765 |
| [#4846](https://github.com/tscircuit/cli/pull/4846) | 🐌 Tiny | Updates the tscircuitrunframe package from version 0.0.2766 to 0.0.2767 |
| [#4844](https://github.com/tscircuit/cli/pull/4844) | 🐌 Tiny | Updates the tscircuitrunframe package from version 0.0.2765 to 0.0.2766 |
| [#4838](https://github.com/tscircuit/cli/pull/4838) | 🐌 Tiny | Automated package update |
| [#4833](https://github.com/tscircuit/cli/pull/4833) | 🐌 Tiny | Updates the tscircuitrunframe package from version 0.0.2760 to 0.0.2761 |
| [#4832](https://github.com/tscircuit/cli/pull/4832) | 🐌 Tiny | Automated package update |
| [#4831](https://github.com/tscircuit/cli/pull/4831) | 🐌 Tiny | Updates the tscircuitrunframe package to version 0.0.2760 |
| [#4829](https://github.com/tscircuit/cli/pull/4829) | 🐌 Tiny | Automated package update |
| [#4828](https://github.com/tscircuit/cli/pull/4828) | 🐌 Tiny | Updates the tscircuitrunframe package version from 0.0.2758 to 0.0.2759 in package.json |
| [#4826](https://github.com/tscircuit/cli/pull/4826) | 🐌 Tiny | Automated package update |
| [#4825](https://github.com/tscircuit/cli/pull/4825) | 🐌 Tiny | Updates the tscircuitrunframe package to version 0.0.2758 |
| [#4823](https://github.com/tscircuit/cli/pull/4823) | 🐌 Tiny | Updates the tscircuitrunframe package to version 0.0.2757 in package.json |
| [#4822](https://github.com/tscircuit/cli/pull/4822) | 🐌 Tiny | Automated package update |
| [#4821](https://github.com/tscircuit/cli/pull/4821) | 🐌 Tiny | Updates the tscircuitrunframe package to version 0.0.2756 in package.json |
| [#4820](https://github.com/tscircuit/cli/pull/4820) | 🐌 Tiny | Automated package update |
| [#4819](https://github.com/tscircuit/cli/pull/4819) | 🐌 Tiny | Updates the tscircuitrunframe package from version 0.0.2754 to 0.0.2755 |
| [#4817](https://github.com/tscircuit/cli/pull/4817) | 🐌 Tiny | Updates the tscircuitrunframe package to version 0.0.2754 |
| [#4814](https://github.com/tscircuit/cli/pull/4814) | 🐌 Tiny | Updates the tscircuitrunframe package version from 0.0.2752 to 0.0.2753 in package.json |
| [#4812](https://github.com/tscircuit/cli/pull/4812) | 🐌 Tiny | Updates the tscircuitrunframe package to version 0.0.2752 in the package.json file. |
| [#4806](https://github.com/tscircuit/cli/pull/4806) | 🐌 Tiny | Updates the tscircuitrunframe package from version 0.0.2747 to 0.0.2748 |
| [#4805](https://github.com/tscircuit/cli/pull/4805) | 🐌 Tiny | Automated package update |
| [#4807](https://github.com/tscircuit/cli/pull/4807) | 🐌 Tiny | Automated package update |
| [#4802](https://github.com/tscircuit/cli/pull/4802) | 🐌 Tiny | Updates the tscircuitrunframe package to version 0.0.2747 in the package.json file. |
| [#4801](https://github.com/tscircuit/cli/pull/4801) | 🐌 Tiny | Automated package update |
| [#4800](https://github.com/tscircuit/cli/pull/4800) | 🐌 Tiny | Updates the tscircuitrunframe package from version 0.0.2740 to 0.0.2746 |
| [#4793](https://github.com/tscircuit/cli/pull/4793) | 🐌 Tiny | Updates the tscircuitrunframe package to version 0.0.2740 in package.json |
| [#4789](https://github.com/tscircuit/cli/pull/4789) | 🐌 Tiny | Updates the tscircuitrunframe package from version 0.0.2737 to 0.0.2738 |
| [#4794](https://github.com/tscircuit/cli/pull/4794) | 🐌 Tiny | Automated package update |
| [#4792](https://github.com/tscircuit/cli/pull/4792) | 🐌 Tiny | Automated package update |
| [#4803](https://github.com/tscircuit/cli/pull/4803) | 🐌 Tiny | Automated package update |
| [#4791](https://github.com/tscircuit/cli/pull/4791) | 🐌 Tiny | Updates the tscircuitrunframe package from version 0.0.2738 to 0.0.2739 |
| [#4788](https://github.com/tscircuit/cli/pull/4788) | 🐌 Tiny | Updates the package version from 0.1.2087 to 0.1.2088 in package.json |
| [#4784](https://github.com/tscircuit/cli/pull/4784) | 🐌 Tiny | Automated package update |
| [#4786](https://github.com/tscircuit/cli/pull/4786) | 🐌 Tiny | Automated package update |
| [#2683](https://github.com/tscircuit/tscircuit-autorouter/pull/2683) | 🐌 Tiny | Automated package update |
| [#2679](https://github.com/tscircuit/tscircuit-autorouter/pull/2679) | 🐌 Tiny | Automated package update |
| [#2670](https://github.com/tscircuit/tscircuit-autorouter/pull/2670) | 🐌 Tiny | Automated package update |
| [#2669](https://github.com/tscircuit/tscircuit-autorouter/pull/2669) | 🐌 Tiny | Automated package update |
| [#2665](https://github.com/tscircuit/tscircuit-autorouter/pull/2665) | 🐌 Tiny | Automated package update |
| [#2659](https://github.com/tscircuit/tscircuit-autorouter/pull/2659) | 🐌 Tiny | Automated package update |
| [#2657](https://github.com/tscircuit/tscircuit-autorouter/pull/2657) | 🐌 Tiny | Automated package update |
| [#2645](https://github.com/tscircuit/tscircuit-autorouter/pull/2645) | 🐌 Tiny | Automated package update |
| [#2641](https://github.com/tscircuit/tscircuit-autorouter/pull/2641) | 🐌 Tiny | Automated package update |
| [#2633](https://github.com/tscircuit/tscircuit-autorouter/pull/2633) | 🐌 Tiny | Automated package update |
| [#2612](https://github.com/tscircuit/tscircuit-autorouter/pull/2612) | 🐌 Tiny | Automated package update |
| [#2610](https://github.com/tscircuit/tscircuit-autorouter/pull/2610) | 🐌 Tiny | Automated package update |
| [#2602](https://github.com/tscircuit/tscircuit-autorouter/pull/2602) | 🐌 Tiny | Automated package update |
| [#2599](https://github.com/tscircuit/tscircuit-autorouter/pull/2599) | 🐌 Tiny | Automated package update |
| [#1208](https://github.com/tscircuit/schematic-trace-solver/pull/1208) | 🐌 Tiny | Adds a snapshot-only regression test and debugger page for the attached JSON solver input. |
| [#1187](https://github.com/tscircuit/schematic-trace-solver/pull/1187) | 🐌 Tiny | Adds a snapshot-only regression test and debugger page for the attached JSON solver input. |
| [#80](https://github.com/tscircuit/test-github-automerge/pull/80) | 🐌 Tiny | Updates the tscircuitcircuit-json-util package from version 0.0.114 to 0.0.115 in the project dependencies. |
| [#79](https://github.com/tscircuit/test-github-automerge/pull/79) | 🐌 Tiny | Automated package update |
| [#77](https://github.com/tscircuit/test-github-automerge/pull/77) | 🐌 Tiny | Updates the tscircuitcircuit-json-util package from version 0.0.113 to 0.0.114 in the devDependencies of the project. |
| [#76](https://github.com/tscircuit/test-github-automerge/pull/76) | 🐌 Tiny | Automated package update |
| [#591](https://github.com/tscircuit/circuit-json-to-kicad/pull/591) | 🐌 Tiny | Automated package update |
| [#578](https://github.com/tscircuit/circuit-json-to-kicad/pull/578) | 🐌 Tiny | Automated package update |
| [#574](https://github.com/tscircuit/circuit-json-to-kicad/pull/574) | 🐌 Tiny | Automated package update |
| [#566](https://github.com/tscircuit/circuit-json-to-kicad/pull/566) | 🐌 Tiny | Automated package update |
| [#289](https://github.com/tscircuit/circuit-to-canvas/pull/289) | 🐌 Tiny | Automated package update |
| [#96](https://github.com/tscircuit/circuit-json-schematic-placement-analysis/pull/96) | 🐌 Tiny | Automated package update |
| [#93](https://github.com/tscircuit/circuit-json-schematic-placement-analysis/pull/93) | 🐌 Tiny | Automated package update |
| [#92](https://github.com/tscircuit/circuit-json-schematic-placement-analysis/pull/92) | 🐌 Tiny | Automated package update |
| [#91](https://github.com/tscircuit/circuit-json-schematic-placement-analysis/pull/91) | 🐌 Tiny | Automated package update |
| [#80](https://github.com/tscircuit/circuit-json-schematic-placement-analysis/pull/80) | 🐌 Tiny | Automated package update |
| [#118](https://github.com/tscircuit/circuit-json-to-footprinter/pull/118) | 🐌 Tiny | Automated package update |
| [#117](https://github.com/tscircuit/circuit-json-to-footprinter/pull/117) | 🐌 Tiny | Automated package update |
| [#207](https://github.com/tscircuit/altiumts/pull/207) | 🐌 Tiny | Automated package update |
| [#204](https://github.com/tscircuit/altiumts/pull/204) | 🐌 Tiny | Automated package update |
| [#201](https://github.com/tscircuit/altiumts/pull/201) | 🐌 Tiny | Automated package update |
| [#200](https://github.com/tscircuit/altiumts/pull/200) | 🐌 Tiny | Automated package update |
| [#1](https://github.com/tscircuit/circuit-json-to-flattenjs/pull/1) | 🐌 Tiny | Automated package update |

</details>

### [techmannih](https://github.com/techmannih)

| PRs # | Impact | Rating | Description |
|------|--------|--------|-------------|
| [#1010](https://github.com/tscircuit/pcb-viewer/pull/1010) | 🐳 Major | ⭐⭐⭐ | Fixes PCB viewer to respect board via tenting and preserve board context when rendering filtered vias, ensuring proper visibility and functionality of vias and traces with hidden copper pours. |
| [#197](https://github.com/tscircuit/circuit-json-util/pull/197) | 🐳 Major | ⭐⭐⭐ | Adds a shared board ownership resolver for PCB renderers to deduplicate vias and choose drillpad diameters based on each vias owning board, allowing Canvas and 3D viewer to use the same resolver without a canvas context. |
| [#996](https://github.com/tscircuit/3d-viewer/pull/996) | 🐳 Major | ⭐⭐⭐ | TEST https:3d-viewer-2z0142pe4-tscircuit.vercel.app?pathstoryvia-tenting--board-defaults-and-overrides https:3d-viewer-2z0142pe4-tscircuit.vercel.app?pathstoryvia-tenting--silkscreen-and-pad-overlap Render standalone and trace-route vias using their owning boards tenting defaults and explicit per-side overrides. Silkscreen stays visible over tented vias and clears exposed drill openings. circuit-to-canvas 0.0.131 keeps overlapping pad openings exposed and uses the shared board ownership resolver. Trace-route vias now use the existing Manifold and JSCAD drillcopper builders, so exposed centres are real holes through the board. Via collection respects board-specific drillpad sizes and explicit route-via dimensions. It indexes vias by board and position, then compares layer spans only at that position to skip standalone and repeated-route duplicates without scanning the entire via list for each route point. Reuse createBoardOwnerMap from tscircuitcircuit-json-util 0.0.116 (tscircuitcircuit-json-util197), removing the custom ownership traversal from getPcbVias. Ownership follows Circuit JSON IDs, including nested groups and panels. Development uses 0.0.116; the existing wildcard peer dependency is retained. Stories on the current preview: Board Defaults And Overrides(https:3d-viewer-2z0142pe4-tscircuit.vercel.app?pathstoryvia-tenting--board-defaults-and-overrides) shows standalone and route vias on two boards with opposite defaults, using the exact Circuit JSON property names in its labels. Silkscreen And Pad Overlap(https:3d-viewer-2z0142pe4-tscircuit.vercel.app?pathstoryvia-tenting--silkscreen-and-pad-overlap) shows PB1 crossing tentedexposed vias and pads partially overlapping their rings on both faces. Validation: Geometry and aperture regression tests pass (2 tests, 14 assertions), including both geometry engines, board drill defaults, and standalonerepeated-route duplicate handling with reversed layer direction. Local comparison with the previous collector preserves nested ownership, separate boards at identical coordinates, board and explicit dimensions, standalonerepeated-route deduplication, generated IDs, tenting overrides, single-board fallback, and unresolved ownership. Opened both stories in the browser with the Manifold renderer and checked their top and bottom views. Tented vias retain silkscreen text, exposed vias have drill openings, and overlapping pad openings remain exposed. Captured screenshots of all four views. Local warmed-up benchmark, median of three runs with 10,000 route vias at distinct positions: approximately 420 ms before indexing and 2.6 ms after, with identical collected vias. Typecheck, formatting of tracked files, package build, and Node bundle load pass with the published utility package. GitHub format, typecheck, Node bundle, and Vercel checks pass on 2cdfdef. The full local suite is not claimed clean: broader checks previously found two unrelated faux-board placement failures. Related to tscircuitcore3903 and tscircuitcircuit-to-canvas291. |
| [#752](https://github.com/tscircuit/circuit-to-svg/pull/752) | 🐳 Major | ⭐⭐⭐ | Standalone and trace-route vias inherit omitted tenting fields from their owning board, preserving explicit per-side and legacy overrides. |
| [#571](https://github.com/tscircuit/circuit-json-to-kicad/pull/571) | 🐳 Major | ⭐⭐⭐ | Fixes the issue where imported pad nets are lost during KiCad round trips by preserving the correct net on all HSP USB LED pads, including repeated lands. |
| [#194](https://github.com/tscircuit/kicad-to-circuit-json/pull/194) | 🐳 Major | ⭐⭐⭐ | Preserve each physical KiCad vias native net as pcb_via.source_net_id, including vias connected through copper pours rather than trace routes. Net 0 remains unassigned. |
| [#288](https://github.com/tscircuit/circuit-to-canvas/pull/288) | 🐳 Major | ⭐⭐⭐ | Resolve omitted tenting fields for standalone and trace-route vias from their owning board, ensuring proper rendering and deduplication of vias in PCB designs. |
| [#3926](https://github.com/tscircuit/core/pull/3926) | 🐙 Minor | ⭐⭐ | Adds support for board default via tenting with per-via overrides, allowing vias to inherit board settings unless explicitly overridden, and updates related tests and dependencies. |
| [#766](https://github.com/tscircuit/circuit-to-svg/pull/766) | 🐙 Minor | ⭐⭐ | Clips the via tenting overlay at exposed SMT pad openings to ensure the pad remains exposed while the rest of the via is tented, including in GLB textures generated from the renderer. |
| [#768](https://github.com/tscircuit/circuit-to-svg/pull/768) | 🐙 Minor | ⭐⭐ | Fixes rendering issue where tented vias erase overlapping silkscreen text by placing tented vias in the viewed surface layer when soldermask is shown. |
| [#219](https://github.com/tscircuit/circuit-json-to-gltf/pull/219) | 🐙 Minor | ⭐⭐ | Update circuit-to-svg to 0.0.429 and its peer minimum to 0.0.429, including board via-tenting defaults, clipping tenting at exposed pad openings, and preserving silkscreen over tented vias. |
| [#582](https://github.com/tscircuit/circuit-json-to-kicad/pull/582) | 🐙 Minor | ⭐⭐ | Fixes the issue where the Pan-Tilt Home Sensor board loses assembly exclusions during the KiCad to Circuit JSON export process, ensuring that excluded footprints are correctly represented in the output. |
| [#576](https://github.com/tscircuit/circuit-json-to-kicad/pull/576) | 🐙 Minor | ⭐⭐ | Fixes the preservation of trace and via net ownership during KiCad round trips, ensuring correct net assignments for traces and vias. |
| [#575](https://github.com/tscircuit/circuit-json-to-kicad/pull/575) | 🐙 Minor | ⭐⭐ | Fixes the issue where the HSP USB LED board preserves pad nets but loses trace and via ownership on export, ensuring all net definitions survive during the export process. |
| [#291](https://github.com/tscircuit/circuit-to-canvas/pull/291) | 🐙 Minor | ⭐⭐ | Keeps pad openings exposed when tented vias overlap SMT pads in the rendering process, ensuring correct visual representation in the output. |
| [#75](https://github.com/tscircuit/altium-to-circuit-json/pull/75) | 🐙 Minor | ⭐⭐ | Changes the PCB text justification mapper to use the shared NinePointAnchor type directly, reducing type friction with Circuit JSON text elements. |
| [#61](https://github.com/tscircuit/altium-to-circuit-json/pull/61) | 🐙 Minor | ⭐⭐ | Adds support for parsing text records on copper layers in Altium PCB documents and converting them into pcb_copper_text elements in Circuit JSON. |

<details>
<summary>🐌 Tiny Contributions (10)</summary>

| PR # | Impact | Description |
|------|--------|-------------|
| [#589](https://github.com/tscircuit/circuit-json-to-kicad/pull/589) | 🐌 Tiny | Fixes loss of assembly exclusions during Circuit JSON round trips for KiCad footprints marked exclude_from_bom or exclude_from_pos_files. |
| [#570](https://github.com/tscircuit/circuit-json-to-kicad/pull/570) | 🐌 Tiny | Reproduces pad-net loss using the existing, unmodified HSP USB LED board, asserting that all input pads have nets but lose net assignments after importexport. |
| [#196](https://github.com/tscircuit/kicad-to-circuit-json/pull/196) | 🐌 Tiny | Preserves KiCad footprint assembly exclusions during import to prevent incorrect inclusion of mechanical or board-only footprints in BOM and position outputs. |
| [#293](https://github.com/tscircuit/circuit-to-canvas/pull/293) | 🐌 Tiny | Resolve board ownership with createBoardOwnerMap from tscircuitcircuit-json-util instead of maintaining a private copy in Canvas. |
| [#240](https://github.com/tscircuit/ti/pull/240) | 🐌 Tiny | Updates the Altium export dependencies to include the latest native pin-label positioning, marker sizing, and pin connection fixes. |
| [#239](https://github.com/tscircuit/ti/pull/239) | 🐌 Tiny | Update the System Block UIs Altium export dependencies to use merged native custom-power support, preserving thin GNDVDD symbol strokes. |
| [#165](https://github.com/tscircuit/circuit-json-to-altium/pull/165) | 🐌 Tiny | Fixes the placement of native electrical terminals at the converted Circuit JSON schematic port center, ensuring accurate pin connection points in Altium. |
| [#164](https://github.com/tscircuit/circuit-json-to-altium/pull/164) | 🐌 Tiny | Adjusts Altium pin markers to match sizes and fill styles defined in Circuit JSON, ensuring proper visual representation and electrical behavior in exported schematics. |
| [#163](https://github.com/tscircuit/circuit-json-to-altium/pull/163) | 🐌 Tiny | Changes the font size of native schematic pin numbers to 3 pt to match the Circuit JSON rendering scale, ensuring consistency in the Altium preview. |
| [#162](https://github.com/tscircuit/circuit-json-to-altium/pull/162) | 🐌 Tiny | Sets an explicit native pin-number margin of 3 schematic units for the TPS61288 conversion, ensuring pin numbers are positioned closer to the component body in all orientations, while preserving font sizes and colors. |

</details>

### [rushabhcodes](https://github.com/rushabhcodes)

| PRs # | Impact | Rating | Description |
|------|--------|--------|-------------|
| [#4005](https://github.com/tscircuit/core/pull/4005) | 🐳 Major | ⭐⭐⭐ | Preserves plated holes and vias as per-pad obstacles on every copper layer they span, ensuring proper PCB packing without affecting opposite-side SMT body stacking behavior. |
| [#569](https://github.com/tscircuit/easyeda-converter/pull/569) | 🐙 Minor | ⭐⭐ | Summary derive generated courtyards from the EasyEDA 3D body outline and physical padhole extents use the broad package BBox only when no model outline exists recognize rectangular explicit courtyards so no fallback is added add FS3000-1015 and VCNL4040 regressions and update affected snapshots This fixes oversizedinaccurate courtyards produced by tsci add, including the FS3000-1015 import, without adding a circuit-json dependency or ignoring errors.  Validation bun run format:check bun run build bun test testsconvert-to-soup-tests (30 pass) affected TSXPCB snapshot tests (11 pass) |
| [#4003](https://github.com/tscircuit/core/pull/4003) | 🐙 Minor | ⭐⭐ | Reproduces the placement failure blocking SparkFun-Electret-Microphone-Breakout by demonstrating that opposite-layer component collapsing removes plated-hole copper from packing obstacles. |
| [#296](https://github.com/tscircuit/checks/pull/296) | 🐙 Minor | ⭐⭐ | Fixes courtyard overlap checks for do-not-place components to ensure proper collision detection without suppressing copper collisions. |
| [#291](https://github.com/tscircuit/checks/pull/291) | 🐙 Minor | ⭐⭐ | Excludes courtyards owned by do-not-place PCB components from overlap checks and adds regression coverage for overlapping same-layer courtyards. |
| [#206](https://github.com/tscircuit/altiumts/pull/206) | 🐙 Minor | ⭐⭐ | Render layer-specific keepout arcs with a distinct color and metadata in PCB SVG output to prevent confusion with conductive traces. |
| [#70](https://github.com/tscircuit/altium-to-circuit-json/pull/70) | 🐙 Minor | ⭐⭐ | Fixes distortion in SVG comparison snapshots by preserving viewBox aspect ratios and preventing independent scaling when viewport dimensions differ. |

<details>
<summary>🐌 Tiny Contributions (5)</summary>

| PR # | Impact | Description |
|------|--------|-------------|
| [#888](https://github.com/tscircuit/footprinter/pull/888) | 🐌 Tiny | Adds explicit identities for DO-219AD and SOD-323HE package footprints, including validated parameters and improved error handling for unsupported parameters. |
| [#3980](https://github.com/tscircuit/core/pull/3980) | 🐌 Tiny | Updates the tscircuitchecks package from version 0.0.193 to 0.0.194, incorporating the courtyard-overlap fix from tscircuitchecks291. |
| [#4588](https://github.com/tscircuit/eval/pull/4588) | 🐌 Tiny | Updates package dependencies and regenerates the TL3342 simple 3D snapshot. |
| [#89](https://github.com/tscircuit/altium-to-circuit-json/pull/89) | 🐌 Tiny | Updates the altiumts dependency to version 0.0.75, fixing the rendering of keepout arcs to match Altiums treatment of routing exclusions. |
| [#73](https://github.com/tscircuit/altium-to-circuit-json/pull/73) | 🐌 Tiny | Normalizes dimension-only SVGs into viewBox-based inputs before stacking, preserves explicit background coverage after SVG roots are unwrapped, adds regression coverage for uniform panel scaling, and regenerates comparison snapshots so Circuit JSON panels use the available area. |

</details>

### [mohan-bee](https://github.com/mohan-bee)

| PRs # | Impact | Rating | Description |
|------|--------|--------|-------------|
| [#4029](https://github.com/tscircuit/core/pull/4029) | 🐳 Major | ⭐⭐⭐ | Honors net-level nominal trace width during PCB routing instead of defaulting to the board minimum, ensuring accurate routing widths based on specified net requirements. |
| [#175](https://github.com/tscircuit/circuit-json-to-gerber/pull/175) | 🐳 Major | ⭐⭐⭐ | motivation capture unwanted mask openings on covered smt pads with one tsx repro and a small layer-overlay snapshot and the routed touch piano full-board snapshot. before all six covered samples incorrectly emit mask openings, matching the six intentionally exposed controls. after add a passing reproduction with labeled shape columns and coveredexposed rows. assertions verify twelve pads and six coverage flags. the piano fixture preserves placement and routing, restoring its eight polygon-workaround keys to equivalent 11 x 27 mm rectangular pads. the focused tests and typecheck pass. snapshots render actual gerber output; schematic output is unaffected. |
| [#1226](https://github.com/tscircuit/schematic-trace-solver/pull/1226) | 🐳 Major | ⭐⭐⭐ | Removes old trace loops left behind when rerouting around label connectors, optimizing path selection for cleaner routing. |
| [#1219](https://github.com/tscircuit/schematic-trace-solver/pull/1219) | 🐳 Major | ⭐⭐⭐ | Prevents junction alignment from causing different-net supply rails to visually overlap by rejecting new stroke contacts while allowing cleanup of existing touching nets, maintaining specified separation distances. |
| [#567](https://github.com/tscircuit/easyeda-converter/pull/567) | 🐙 Minor | ⭐⭐ | Fixes the loss of pin names containing punctuation during import, ensuring that multiplexed EasyEDA pin names and connection aliases are preserved correctly. |
| [#4028](https://github.com/tscircuit/core/pull/4028) | 🐙 Minor | ⭐⭐ | Reproduces a bug where a net requesting a specific trace width is ignored during PCB routing, ensuring the request is preserved in the source net and routing input. |
| [#176](https://github.com/tscircuit/circuit-json-to-gerber/pull/176) | 🐙 Minor | ⭐⭐ | Fixes incorrect soldermask coverage on SMT pads that explicitly request coverage, preventing exposed copper in the Gerber output. |
| [#264](https://github.com/tscircuit/matchpack/pull/264) | 🐙 Minor | ⭐⭐ | Adds a layout snapshot for the acoustic guitar tuner circuit, capturing its configuration for repeatable reviews and ensuring accurate representation in the exported JSON. |
| [#265](https://github.com/tscircuit/matchpack/pull/265) | 🐙 Minor | ⭐⭐ | Fixes the reversed right-side resistorLED branches in the layout, ensuring correct ordering and eliminating overlap issues in the schematic. |
| [#95](https://github.com/tscircuit/copper-pour-solver/pull/95) | 🐙 Minor | ⭐⭐ | Prevents ground copper from shorting polygon plated-hole power pads by ensuring both pads have proper clearance and connectivity, fixing a bug where only one pad was cleared. |
| [#78](https://github.com/tscircuit/circuit-json-schematic-placement-analysis/pull/78) | 🐙 Minor | ⭐⭐ | Fixes false alignment warnings between disconnected ports in schematic analysis by ensuring source-port connectivity is checked before emitting alignment advice. |
| [#74](https://github.com/tscircuit/circuit-json-schematic-placement-analysis/pull/74) | 🐙 Minor | ⭐⭐ | Fixes misleading padding warnings for singleton schematic pins by skipping bank-end padding checks for sides with one pin. |

<details>
<summary>🐌 Tiny Contributions (12)</summary>

| PR # | Impact | Description |
|------|--------|-------------|
| [#566](https://github.com/tscircuit/easyeda-converter/pull/566) | 🐌 Tiny | Reproduces the missing multiplexed pin labels when importing c609652 (attiny1616-snr) by adding the real easyeda fixture and ensuring all source ports and pads remain present. |
| [#4062](https://github.com/tscircuit/core/pull/4062) | 🐌 Tiny | Updates the tscircuitschematic-trace-solver dependency to version 0.0.203 in the package.json file. |
| [#4048](https://github.com/tscircuit/core/pull/4048) | 🐌 Tiny | Updates the tscircuitcopper-pour-solver dependency to version 0.0.56 in the package.json file. |
| [#4044](https://github.com/tscircuit/core/pull/4044) | 🐌 Tiny | Updates the tscircuitmatchpack dependency to version 0.0.97 in the package.json file. |
| [#4020](https://github.com/tscircuit/core/pull/4020) | 🐌 Tiny | Fixes redundant near-parallel VREF routes in the acoustic tuner schematic by updating the schematic trace recovery behavior. |
| [#5185](https://github.com/tscircuit/runframe/pull/5185) | 🐌 Tiny | Updates the easyeda dependency from version 0.0.357 to 0.0.360 in package.json |
| [#1231](https://github.com/tscircuit/schematic-trace-solver/pull/1231) | 🐌 Tiny | Refreshes the AM3352 interfaces snapshot to align with recent routing fixes, ensuring all tests pass with 4 skipped. |
| [#1224](https://github.com/tscircuit/schematic-trace-solver/pull/1224) | 🐌 Tiny | Add full AM3352 03-Interfaces sheet reproduction including all connectors and a test for the solver. |
| [#1225](https://github.com/tscircuit/schematic-trace-solver/pull/1225) | 🐌 Tiny | Add a complete reproduction of the AM3352 06-Boot sheet, including solver input and a test case. |
| [#94](https://github.com/tscircuit/copper-pour-solver/pull/94) | 🐌 Tiny | Reproduces a ground pour shorting a polygon-shaped through-hole power pad without fixing the underlying issue. |
| [#77](https://github.com/tscircuit/circuit-json-schematic-placement-analysis/pull/77) | 🐌 Tiny | Reproduces incorrect dioderesistor alignment advice when a generated net-label trace ends near a port on a different electrical net. |
| [#73](https://github.com/tscircuit/circuit-json-schematic-placement-analysis/pull/73) | 🐌 Tiny | Records existing behavior of padding warnings for centered supply pins without changing it, ensuring all tests pass. |

</details>

### [hrithik18k](https://github.com/hrithik18k)

| PRs # | Impact | Rating | Description |
|------|--------|--------|-------------|
| [#1215](https://github.com/tscircuit/schematic-trace-solver/pull/1215) | 🐳 Major | ⭐⭐⭐ | Shortens same-side rails in schematics by routing through nearby net-label columns when a shorter path is available, improving schematic clarity and compactness. |
| [#72](https://github.com/tscircuit/altium-to-circuit-json/pull/72) | 🐳 Major | ⭐⭐⭐ | Preserves Altium PCB net identities by creating Circuit JSON source nets and traces for every Altium net, linking routed tracks and arcs to their source trace, and retaining copper-pour net ownership. |
| [#3975](https://github.com/tscircuit/core/pull/3975) | 🐙 Minor | ⭐⭐ | Summary adds the complete hrithik18kair-mouse(https:tscircuit.comhrithik18kair-mousefiles) board source as a core repro fixture, including all component imports and all six schematic sections captures the full 1200600 schematic sheet, using the supplied air-mouse.svg as the layout reference preserves the currently published solver (0.0.198) output so the ICM-20948 pins 911 GND-routing bug is visible in the baseline repro  Verification sh bun test testsreprosrepro-icm20948-shared-ground-label.test.tsx  Result: 1 pass, 0 fail. The solver fix is tracked separately in tscircuitschematic-trace-solver1209. |
| [#1209](https://github.com/tscircuit/schematic-trace-solver/pull/1209) | 🐙 Minor | ⭐⭐ | Fixes overlapping GND label for shared pin branch by allowing downward GND labels to search past colliding traces and placing the shared GND symbol below nearby signal traces without overlap. |
| [#1195](https://github.com/tscircuit/schematic-trace-solver/pull/1195) | 🐙 Minor | ⭐⭐ | Fixes the net-label branch origin to prefer the nearest host-trace endpoint pin when placing a vertical label for a two-pin branch of a larger non-ground net, ensuring the V3V3 branch is rooted directly at R8 instead of the interior junction. |
| [#66](https://github.com/tscircuit/altium-to-circuit-json/pull/66) | 🐙 Minor | ⭐⭐ | Fixes the issue where Altium region records on TopOverlay and BottomOverlay were dropped, restoring filled logos, polarity marks, and component artwork in converted boards by converting those regions into pcb_silkscreen_graphic BRep elements. |
| [#57](https://github.com/tscircuit/altium-to-circuit-json/pull/57) | 🐙 Minor | ⭐⭐ | Adds support for importing Altium full-circle arcs on the Keepout layer as circular pcb_keepout elements, preserving routing exclusions during conversion. |
| [#54](https://github.com/tscircuit/altium-to-circuit-json/pull/54) | 🐙 Minor | ⭐⭐ | Fixes rendering of wrapped Altium silkscreen arcs to correctly display a 90 quarter-circle instead of a -270 three-quarter circle, adds regression tests, and updates affected SVG snapshots. |

<details>
<summary>🐌 Tiny Contributions (4)</summary>

| PR # | Impact | Description |
|------|--------|-------------|
| [#572](https://github.com/tscircuit/easyeda-converter/pull/572) | 🐌 Tiny | Prefer schematic pin names over footprint pad aliases while preserving both as connection aliases, ensuring stable canonical pin mapping and adding regression coverage for USB-C connectors. |
| [#571](https://github.com/tscircuit/easyeda-converter/pull/571) | 🐌 Tiny | Adds a reproduction for the incorrect pin naming of the USB-C schematic symbol C2765186, ensuring logical pin names are preserved during import from EasyEDA. |
| [#3999](https://github.com/tscircuit/core/pull/3999) | 🐌 Tiny | Updates the tscircuitschematic-trace-solver package from version 0.0.198 to 0.0.199, including a fix for shared-ground-label and refreshing the Air Mouse schematic regression snapshot. |
| [#3969](https://github.com/tscircuit/core/pull/3969) | 🐌 Tiny | Update tscircuitschematic-trace-solver from 0.0.197 to 0.0.198, bringing in a net-label branch placement fix that maintains junctions while placing eligible net-label branches from the component-adjacent edge. |

</details>

### [addibble](https://github.com/addibble)

| PRs # | Impact | Rating | Description |
|------|--------|--------|-------------|
| [#192](https://github.com/tscircuit/circuit-json-to-gltf/pull/192) | 🐙 Minor | ⭐⭐ | Covers fixed child CAD rotation and size in GLB snapshots, ensuring accurate geometry assertions and type-check fixes with updated dependencies. |

<details>
<summary>🐌 Tiny Contributions (1)</summary>

| PR # | Impact | Description |
|------|--------|-------------|
| [#997](https://github.com/tscircuit/3d-viewer/pull/997) | 🐌 Tiny | Summary Add diagnostic Storybook stories and browser comparisons of the actual 3d-viewer against GLBs generated by pinned, development-only circuit-json-to-gltf0.0.129. This PR changes neither production renderer. There are no changes under src or lib, no renderer corrections hidden in the harness, and no approved screenshot baselines. Existing differences deliberately remain visible as failing, non-blocking diagnostics.  What reviewers can see Run bun run storybook:comparisons to open Diagnostics  Renderer Parity  X Rotation directly. Each story automatically shows both oblique and side comparisons: the normal rendered boards, unlit component geometry, edge maps, redcyan overlay, and downloadable PNGs with camera metadata and metrics. Bottom-layer stories look from below. The inputs isolate XY signs, mixed-axis order, missing and explicit nonzero origins, implicit bottom-layer orientation, and binary GLB dispatch through gltfUrl. Oblique angle probes avoid quarter-turn symmetries. Explicit-origin zeroZ cases are controls. The USB mounting example uses the measured native Z-up model with rotation (0,0,270), an explicit datum and common reference board. Only that fixtures two pill slots are rotated 90 degrees to accept the metal tabs. A geometry test checks all four tabs against the apertures and all five contacts against the pads. The captured input is preserved, and its original missing-origin case remains a separate diagnostic.  Comparison contract Identical local model bytes and Circuit JSON feed both real rendering paths; models are not fetched from ModelCDN during tests. Only the fixed final GLB-to-project coordinate basis is normalized. No registration, recentering, rescaling, or pose correction is allowed. Component-only captures preserve loaded world transforms and use shared 640x640 orthographic cameras, white unlit double-sided surfaces, black backgrounds, and depth-tested crease lines. The same pure matcher runs in the browser UI and tests: bidirectional Euclidean edge coverage, 1.5 px tolerance, at most 1 unmatched edges independently on either side. Empty or clipped captures fail. Viewer-only calibration accepts identical copies and rejects deliberate sign, Euler-order and 0.2248885 mm translation defects. It does not load an exported GLB.  CI and local results GitHub Actions installs matching ChromiumLinux libraries and uses Node 22, Bun 1.3.14 and software WebGL. Matcherunit tests and calibration are blocking. Actual renderer comparisons retain ordinary failed assertions, reports, images and traces but are intentionally non-blocking. Missingmalformed reports and runner failures still produce errors from the diagnostic wrapper; the workflow marks only the diagnostic step continue-on-error. Vercel continues to host Storybook, not run the browser suite. build-storybook now prepares the local comparison assets, so the existing vercel-build entry point includes working stories. Local results:  Scope  Result   ---  ---   New matcher, runner, camera, probe and USB geometry tests  77 passed   Browser calibration  2 passed   Pairwise renderer diagnostics  6 passed, 18 failed as retained diagnostic evidence   Typecheck, formatting, production build and Node import  Passed   Static Storybook build and built XUSB stories  Passed   Workspace PR gates  910 passed; full Bun suite has 132 passed and 5 unrelated failures  All five full-suite failures reproduce on an untouched archive of base commit d18b6fe with the same installed dependencies: two faux-board Z assertions in preprocess-circuit-json.test.ts, the soldermask-color assertion in outline-bounds.test.ts, and the SVG snapshots in convert-3d-view-to-svg-top-view.test.ts and convert-3d-view-to-svg-with-multiple-elements.test.ts. This PR does not change those tests, snapshots, or renderer behavior. The 18 diagnostic failures cover XYmixed rotations, missing origins, the glTF origin and bottom-layer cases, and GLB dispatch. ZeroZ controls and the physically mounted USB match in both views. These are observations, not newly approved expected images; future renderer fixes can turn the actual comparisons green. GitHub-hosted CI results are separate from these local results.  X37 degrees: actual unlit geometry and unmatched-edge overlay (red: viewer; cyan: circuit-json-to-gltf). !pr-x37-geometry.png(https:github.comuser-attachmentsassets569dafb4-1e81-4447-9cdc-4f88a554e009)  Physically seated USB: shared board and measured placement in both rendering paths. !pr-usb-mounted-context.png(https:github.comuser-attachmentsassets45c0e73f-e20b-4e5a-8284-63f271998288)  Seated USB control: component geometry matches despite differences in normal rendering materials. !pr-usb-mounted-geometry.png(https:github.comuser-attachmentsassetse3b44f6f-7ee6-40a6-a076-a9ca6ac93a06) |

</details>

### [Devesh36](https://github.com/Devesh36)

| PRs # | Impact | Rating | Description |
|------|--------|--------|-------------|
| [#85](https://github.com/tscircuit/altium-to-circuit-json/pull/85) | 🐙 Minor | ⭐⭐ | Preserves non-empty custom dimension suffixes and appends measured units to native dimension labels in PCB snapshots. |
| [#84](https://github.com/tscircuit/altium-to-circuit-json/pull/84) | 🐙 Minor | ⭐⭐ | Fixes the copper layer count for Altium PCB files by accurately counting physical layers from modern Altium V8 layer-stack entries instead of relying on user-visible layer names, while retaining a fallback for older files. |
| [#82](https://github.com/tscircuit/altium-to-circuit-json/pull/82) | 🐙 Minor | ⭐⭐ | Derives native dimension labels from their measured geometry when TEXTFORMAT contains a measurement-shaped formatting value such as 10mil, while preserving non-measurement custom text and adding regression coverage for affected TI PCB snapshots. |
| [#77](https://github.com/tscircuit/altium-to-circuit-json/pull/77) | 🐙 Minor | ⭐⭐ | Detects anonymous EasyEDA dimension components exported as Mechanical 1516 vector strokes and converts those strokes to Circuit JSON fabrication-note paths without affecting real component courtyards. |

<details>
<summary>🐌 Tiny Contributions (2)</summary>

| PR # | Impact | Description |
|------|--------|-------------|
| [#995](https://github.com/tscircuit/3d-viewer/pull/995) | 🐌 Tiny | Updates the jscad-electronics dependency to version 0.0.178 to include newer footprint geometry and rotation handling for the interactive 3D viewer. |
| [#210](https://github.com/tscircuit/circuit-json-to-gltf/pull/210) | 🐌 Tiny | Fixes incorrect orientation of JST PH housing in 3D exports by updating jscad-electronics to version 0.0.178, which includes a fix for the rendering issue. |

</details>

### [MustafaMulla29](https://github.com/MustafaMulla29)

| PRs # | Impact | Rating | Description |
|------|--------|--------|-------------|
| [#1229](https://github.com/tscircuit/schematic-trace-solver/pull/1229) | 🐳 Major | ⭐⭐⭐ | Fixes alignment of C99 with the labeled rail and reduces the L34 ground route from eight vertices to six, while allowing a rail group to include a multi-turn backbone on fixed label coordinates. |
| [#1222](https://github.com/tscircuit/schematic-trace-solver/pull/1222) | 🐳 Major | ⭐⭐⭐ | Fixes net label orientation handling to prevent collisions and ensure correct placement of inline labels during schematic trace solving. |
| [#83](https://github.com/tscircuit/circuit-json-schematic-placement-analysis/pull/83) | 🐳 Major | ⭐⭐⭐ | Stacked on 84, which adds the unchanged complete STM32 schematic. Reports a grounded-emitter NPN drawn above its load or with its collectoremitter facing away from the vertical load path. Detection requires explicit transistor pin roles, a base resistor, a positive-supply two-pin load and a correctly connected parallel clamp diode; ambiguous or separate-block circuits are skipped. On the published STM32 sheet, Q1BZ1R6D2 gain one new finding. The full-sheet repro snapshot(https:github.comtscircuitcircuit-json-schematic-placement-analysisblobfeatlow-side-transistor-placementtestscases__snapshots__stm32-low-side-driver-repro-full-sheet.snap.svg) now highlights those four parts with matching numbered badges beside the diagnostic. Only the new issue type is highlighted; the counts include all findings. The original layout and wiring are unchanged. 84 retains the unhighlighted baseline. Murata Figure 1(https:www.murata.comen-globalsupportfaqssoundsoundercharsch0007) shows the corresponding buzzer-driver arrangement: transistor below the load, emitter toward ground, and resistor beside the base. The manufactureroriginal-render comparison is in 84. This is a placement advisory; it does not apply moves or claim collision-checked coordinates. Validation: 102 tests pass; typecheck and formatting pass. The small beforeafter control preserves connectivity and clears the finding. A scan of nine recent published designs reports only the STM32 driver. |

<details>
<summary>🐌 Tiny Contributions (3)</summary>

| PR # | Impact | Description |
|------|--------|-------------|
| [#4081](https://github.com/tscircuit/core/pull/4081) | 🐌 Tiny | Bumps tscircuitschematic-trace-solver from 0.0.203 to 0.0.204 to include the labeled rail alignment and redundant trace detour fixes from the previous pull request. |
| [#1228](https://github.com/tscircuit/schematic-trace-solver/pull/1228) | 🐌 Tiny | Adds a standalone repro for the complete ble_module schematic sheet from imrishabh18smart-lock v0.0.1(https:tscircuit.comimrishabh18smart-lockschematic), so its routing can be inspected and compared in this repo. The shared JSON fixture preserves all 39 components, 123 schematic pins, 16 direct connections, and 37 named nets. It is used by a Bun snapshot test and a Cosmos PipelineDebugger page. Source net names and component names are included for readable snapshots. The input is reconstructed from deployed Circuit JSON with current core input-generation defaults, including maxMspPairDistance: 2.4. It is not an original-build solver capture. This PR adds the repro only; it does not change solver behavior. Validation: bun test: 413 passed, 4 skipped, 0 failed. Re-ran the new snapshot test after adding display metadata. bunx tsc --noEmit and bun run format:check passed. Generated all 24 pipeline-stage artifacts and visually inspected the final snapshot. Audited all pin coordinatesdirections, direct connections, and named-net memberships against the deployed Circuit JSON. Run the repro with bun test testsreprosrepro-smart-lock-ble-module.test.ts, or run bun start and open SchematicTracePipelineSolverrepro-smart-lock-ble-module. |
| [#84](https://github.com/tscircuit/circuit-json-schematic-placement-analysis/pull/84) | 🐌 Tiny | Repro baseline for 83. Imports the complete 29-component STM32 Mini Dev Board v1.0.0, published September 19, preserving every source and schematic record. |

</details>

### [ShiboSoftwareDev](https://github.com/ShiboSoftwareDev)

| PRs # | Impact | Rating | Description |
|------|--------|--------|-------------|
| [#3965](https://github.com/tscircuit/core/pull/3965) | 🐳 Major | ⭐⭐⭐ | The exact 96-component Allwinner T113-S3 Linux board places every fanout component correctly, but Core stores each auto-sized routing group at its authored pcbXpcbY anchor instead of the center of its padded content. The mismatch produces a false REG18USB overlap and gives later fanout solvers boxes that do not enclose their components. This reproduction keeps the original TSX, supplier Circuit JSON, four copper layers, and default Pipeline9 configuration. It contains no manual routes, vias, breakout points, or route hints. The test calls circuit.render() once so it captures the exact placement and group-bounds failure before downstream autorouting starts; it asserts the incorrect group centers and false placement error on current main. t113-linux-routing-group-bounds-pcb.snap.svg is rendered by circuit-to-svg from that live Circuit JSON with native PCB-group overlays enabled. The stacked winding reproduction and implementation fix update this same real board state, so the Files tab exposes the geometry change directly. Validation: bun test --timeout 60000 testsreprost113-linux-routing-group-bounds.test.tsx  pass in about 6 seconds, 8 assertions SVG contains all 96 real board components and the native PCB-group overlays Biome check on the test and exact TSX fixture git diff --check |
| [#2598](https://github.com/tscircuit/tscircuit-autorouter/pull/2598) | 🐳 Major | ⭐⭐⭐ | Fixes autorouting failure by retaining zero-length fixed spans during regional section assembly, allowing for proper reconstruction of routes in the Pipeline9 autorouter. |
| [#2592](https://github.com/tscircuit/tscircuit-autorouter/pull/2592) | 🐳 Major | ⭐⭐⭐ | Adds a visual baseline for the T113-S3 Linux boards autorouting failure at the source_trace_194 boundary, rendering the complete board and its preloaded traces. |
| [#2581](https://github.com/tscircuit/tscircuit-autorouter/pull/2581) | 🐳 Major | ⭐⭐⭐ | Fixes autorouting failure by resolving route and obstacle identities to canonical nets in Pipeline9 during regional via validation. |
| [#19](https://github.com/tscircuit/dataset-srj18/pull/19) | 🐳 Major | ⭐⭐⭐ | Problem SRJ18 sample002 contains the routing endpoint for J4 pin 1 (pcb_port_157), but its plated-slot copper pad is absent from the obstacle list. This lets autorouters produce output that appears cut off at an unrendered pad. The malformed input is reproduced in tscircuittscircuit-autorouter2603.  Change upgrade tscircuitcore to the first release containing tscircuitcore3704 and align its peer dependency graph regenerate sample002 from its checked-in Circuit JSON assert the plated-slot obstacles identity, layers, center, width, and height in dataset validation The regenerated obstacle is a 2 x 4.5 mm rectangle on both copper layers centered at (-39.2404, -18.2722), matching the source plated hole.  Validation bun scriptsvalidate.mjs git diff --check  Consumer The stacked autorouter fix is tscircuittscircuit-autorouter2605. |
| [#167](https://github.com/tscircuit/circuit-json-to-altium/pull/167) | 🐳 Major | ⭐⭐⭐ | Preserves independent slot and pad rotations in Altium by using dedicated Circuit JSON rotated pill-hole shapes when they differ, and restores the CH582 plated-slot orientation in the SVG round-trip snapshot. |
| [#3987](https://github.com/tscircuit/core/pull/3987) | 🐙 Minor | ⭐⭐ | Updates the partial-trace DRC expectations to reflect the corrected behavior after a previous fix, ensuring accurate reporting of trace errors in PCB designs. |
| [#3967](https://github.com/tscircuit/core/pull/3967) | 🐙 Minor | ⭐⭐ | Aligns routing directives with padded content bounds, ensuring consistent center positioning for auto-sized subcircuits and packed groups. |
| [#50](https://github.com/tscircuit/circuit-json-to-connectivity-map/pull/50) | 🐙 Minor | ⭐⭐ | Connects PCB traces to available endpoints independently, addressing false DRC reports from unconnected ports. |
| [#2605](https://github.com/tscircuit/tscircuit-autorouter/pull/2605) | 🐙 Minor | ⭐⭐ | Fixes the missing plated-slot copper obstacle for J4 pin 1 in SRJ18 sample002, ensuring accurate routing visualization and output. |
| [#567](https://github.com/tscircuit/circuit-json-to-kicad/pull/567) | 🐙 Minor | ⭐⭐ | Derives standalone KiCad silkscreen thickness from Circuit JSON font size with practical bounds, restores soil sensor title stroke to visually matching thickness, and updates SVG snapshots. |
| [#568](https://github.com/tscircuit/circuit-json-to-kicad/pull/568) | 🐙 Minor | ⭐⭐ | Add a documented edgeCutsWidth converter option with the existing 0.1 mm default, carry the native source width through real-board round-trip coverage, and verify the soil sensor keeps its 1.0 mm outline with a side-by-side SVG snapshot. |
| [#564](https://github.com/tscircuit/circuit-json-to-kicad/pull/564) | 🐙 Minor | ⭐⭐ | Fixes the loss of knockout silkscreen text in KiCad exports by ensuring the knockout layer flag is preserved for both standalone and footprint-relative text. |
| [#194](https://github.com/tscircuit/altiumts/pull/194) | 🐙 Minor | ⭐⭐ | Fixes a visual issue where off-board content was clipped in DSP5509 CIII diagnostic snapshots, by adding an opt-in SVG viewport mode to include all visible PCB records. |
| [#193](https://github.com/tscircuit/altiumts/pull/193) | 🐙 Minor | ⭐⭐ | Fixes binary PCB serialization issue where rounded SMD pads reopen as plain rectangles by preserving rounded pad stack metadata and validating new pad fields. |
| [#47](https://github.com/tscircuit/altium-to-circuit-json/pull/47) | 🐙 Minor | ⭐⭐ | Converts Altium linear Dimension records into Circuit JSON fabrication-note dimensions, including units, precision, offsets, arrows, and text sizing. Adds a focused regression test and updated TI board visual snapshots. |
| [#168](https://github.com/tscircuit/circuit-json-to-altium/pull/168) | 🐙 Minor | ⭐⭐ | Normalizes Altium wraparound arc sweeps to maintain near-full circles and preserves top and bottom solder-layer text as Circuit JSON annotations, restoring the Cobra board circle and title in the SVG round-trip snapshot. |
| [#160](https://github.com/tscircuit/circuit-json-to-altium/pull/160) | 🐙 Minor | ⭐⭐ | Fixes the export of pill and rounded-rectangle SMT pads to ensure they are correctly represented as ROUNDRECT shapes in Altium, preserving their corner radius and improving the accuracy of pad shapes in the Cobra board. |

<details>
<summary>🐌 Tiny Contributions (3)</summary>

| PR # | Impact | Description |
|------|--------|-------------|
| [#3966](https://github.com/tscircuit/core/pull/3966) | 🐌 Tiny | Reproduces a winding solver error for the T113 board by adding a test case with specific input data, without changing production code. |
| [#4787](https://github.com/tscircuit/cli/pull/4787) | 🐌 Tiny | Updates the CLIs packagedoffline tscircuitcheck-shorts fallback from version 0.0.19 to 0.0.24, including new boundary contact detection and refreshed test snapshots. |
| [#46](https://github.com/tscircuit/altium-to-circuit-json/pull/46) | 🐌 Tiny | Adds six new PCB references from Texas Instruments, including focused side-by-side AltiumCircuit JSON SVG repros for various models, and enhances PCB validation requirements. |

</details>

### [GokulPandi-M](https://github.com/GokulPandi-M)

| PRs # | Impact | Rating | Description |
|------|--------|--------|-------------|
| [#1223](https://github.com/tscircuit/schematic-trace-solver/pull/1223) | 🐙 Minor | ⭐⭐ | Fixes routing issue where traces stop at component boundaries instead of reaching the intended ports. |
| [#1213](https://github.com/tscircuit/schematic-trace-solver/pull/1213) | 🐙 Minor | ⭐⭐ | Prevents recovery from adding redundant routes for already connected same-net pairs in the autorouting process. |
| [#55](https://github.com/tscircuit/altium-to-circuit-json/pull/55) | 🐙 Minor | ⭐⭐ | Maps Altium numeric PCB text justification values 1 through 9 to the corresponding Circuit JSON anchors and preserves existing textual justification fallback while updating affected PCB visual snapshots. |

<details>
<summary>🐌 Tiny Contributions (6)</summary>

| PR # | Impact | Description |
|------|--------|-------------|
| [#3932](https://github.com/tscircuit/core/pull/3932) | 🐌 Tiny | Fixes redundant parallel routing of VREF branches in schematic, preventing potential electrical issues. |
| [#1211](https://github.com/tscircuit/schematic-trace-solver/pull/1211) | 🐌 Tiny | Reproduces a bug where two long, near-parallel branches on the same VREF net are generated, leading to redundant traces in the schematic. |
| [#199](https://github.com/tscircuit/kicad-to-circuit-json/pull/199) | 🐌 Tiny | Motivation A power:GND instance in MIPI.kicad_sch uses a 270 rotation with (mirror x). KiCad renders the symbol body to the left of its electrical anchor, but the converted Circuit JSON renders the graphic to the right even though the emitted port faces left. The complete schematic is included so the incorrect symbol orientation is visible in its original circuit context.  Changes add the complete MIPI KiCad schematic as the repro fixture snapshot the affected graphic direction and emitted port direction add a full-sheet stacked Circuit JSON and KiCad comparison allow schematic snapshots without the drawing sheet !Circuit JSON and KiCad comparison(https:raw.githubusercontent.comGokulPandi-Mkicad-to-circuit-json361b26bf46f935d1a77a92836d9268a33332606atestsreprosrotated-mirrored-symbol-graphics__snapshots__rotated-mirrored-symbol-graphics.snap.png) This PR captures the current incorrect conversion as a repro and does not change the conversion logic.  Validation bun test testsreprosrotated-mirrored-symbolsrotated-mirrored-symbol-graphics.test.ts bun run build:lib bun run format:check |
| [#200](https://github.com/tscircuit/kicad-to-circuit-json/pull/200) | 🐌 Tiny | Fixes the transformation order of rotated and mirrored symbols in KiCad export, ensuring correct graphic and port directions. |
| [#195](https://github.com/tscircuit/kicad-to-circuit-json/pull/195) | 🐌 Tiny | Description Reproduces the USB symbol primitive issue with a minimal KiCad schematic extracted from the original Power.kicad_sch. The fixture contains only the USB-C connector, its CC and data resistors, ESD protection, shield network, related power symbols, labels, and wires. The test converts that schematic through KicadToCircuitJsonConverter, commits the generated Circuit JSON and SVG for inspection, and creates one stacked Circuit-JSON-versus-KiCad PNG snapshot. It also verifies that the converted USB connector owns all six schematic_arc elements.  Motive Provide a small, repeatable conversion snapshot that isolates the incorrect USB symbol shown by the website preview and confirms whether its primitives were lost during conversion or hidden during rendering.  Snapshot !Circuit JSON and KiCad USB comparison(https:raw.githubusercontent.comGokulPandi-Mkicad-to-circuit-jsoncc91c36testsreprosusb-symbol-primitive-layering__snapshots__usb-symbol-primitive-layering.snap.png) Rendered output: usb-symbol-primitive-layering-circuit-json.svg(https:github.comGokulPandi-Mkicad-to-circuit-jsonblobcc91c36testsreprosusb-symbol-primitive-layering__snapshots__usb-symbol-primitive-layering-circuit-json.svg) Generated output: usb-symbol-primitive-layering-circuit-json.json(https:github.comGokulPandi-Mkicad-to-circuit-jsonblobcc91c36testsreprosusb-symbol-primitive-layering__snapshots__usb-symbol-primitive-layering-circuit-json.json)  Validation bun test testsreprosusb-symbol-primitive-layeringusb-symbol-primitive-layering.test.ts bunx tsc --noEmit bunx biome format testsreprosusb-symbol-primitive-layeringusb-symbol-primitive-layering.test.ts bun run build:lib |
| [#198](https://github.com/tscircuit/kicad-to-circuit-json/pull/198) | 🐌 Tiny | Preserves KiCad symbol graphic layering and shape continuity during Circuit JSON conversion. Background-filled polylines, rectangles, circles, and arcs are emitted before pins and foreground geometry, so the symbol body no longer covers details such as the USB trident. Unfilled KiCad polylines are emitted as continuous paths so connected branches retain smooth joins. Filled arcs are represented by a closed filled path while retaining the original arc stroke, which preserves the rounded USB-C socket ends and all six source arcs. |

</details>

### [Abse2001](https://github.com/Abse2001)

| PRs # | Impact | Rating | Description |
|------|--------|--------|-------------|
| [#2664](https://github.com/tscircuit/tscircuit-autorouter/pull/2664) | 🐳 Major | ⭐⭐⭐ | Corrects the detection of through-hole via collisions in the reference DRC by allowing vias to cover the complete board stack when blind and buried vias are disabled, improving DRC reporting accuracy. |
| [#143](https://github.com/tscircuit/high-density-repair03/pull/143) | 🐳 Major | ⭐⭐⭐ | Modifies the via handling in Repair03 to ensure through-hole vias are checked and repaired across the full board drill span when blind and buried vias are disabled, enhancing DRC and circuit JSON projection accuracy. |

<details>
<summary>🐌 Tiny Contributions (3)</summary>

| PR # | Impact | Description |
|------|--------|-------------|
| [#363](https://github.com/tscircuit/jscad-electronics/pull/363) | 🐌 Tiny | Adjusts the MiniMELF component design to ensure proper seating on pads and matches the cylindrical outline as per specifications, improving the fit and visual representation of the component. |
| [#2606](https://github.com/tscircuit/tscircuit-autorouter/pull/2606) | 🐌 Tiny | Reproduces a bug where Pipeline 9 narrows a requested 0.4 mm trace width to 0.2375 mm instead of finding a legal detour, highlighting a flaw in the autorouting logic. |
| [#115](https://github.com/tscircuit/circuit-json-to-footprinter/pull/115) | 🐌 Tiny | Recognizes MiniMELF and SOD-80 package names and seeds their supported Footprinter definitions using the measured pitch and land dimensions, allowing for accurate footprint generation for the C68883 component. |

</details>

### [AnasSarkiz](https://github.com/AnasSarkiz)

| PRs # | Impact | Rating | Description |
|------|--------|--------|-------------|
| [#2640](https://github.com/tscircuit/tscircuit-autorouter/pull/2640) | 🐳 Major | ⭐⭐⭐ | Stops preprocessing when an on-board connection point lies outside the routing bounds, setting the pipeline status to failed and preventing further stages from starting. |
| [#2631](https://github.com/tscircuit/tscircuit-autorouter/pull/2631) | 🐳 Major | ⭐⭐⭐ | Caches via-occupancy results during connection searches to reduce repeated scans, improving routing efficiency in high-density scenarios. |
| [#121](https://github.com/tscircuit/high-density-a01/pull/121) | 🐳 Major | ⭐⭐⭐ | Caches via occupants by grid cell during connection searches in A01 and A03 to optimize routing performance. |

### [KrishnaX12](https://github.com/KrishnaX12)

| PRs # | Impact | Rating | Description |
|------|--------|--------|-------------|
| [#203](https://github.com/tscircuit/altiumts/pull/203) | 🐙 Minor | ⭐⭐ | Add declared Top Solder and Bottom Solder mask layers to the project viewer dropdown and normalize layer names to prevent duplicates. |
| [#80](https://github.com/tscircuit/altium-to-circuit-json/pull/80) | 🐙 Minor | ⭐⭐ | Imports visible component mechanical-layer text as fabrication notes, resolving .Designator and .Comment from the component while skipping text hidden by NAMEON or COMMENTON, and updating affected SVG snapshots. |

<details>
<summary>🐌 Tiny Contributions (1)</summary>

| PR # | Impact | Description |
|------|--------|-------------|
| [#51](https://github.com/tscircuit/altium-to-circuit-json/pull/51) | 🐌 Tiny | Fixes incorrect rendering of Altium pad and plated slot geometry by preserving layer-specific dimensions and shapes, ensuring accurate hole geometry for plated slots. |

</details>

### [anil08607](https://github.com/anil08607)

| PRs # | Impact | Rating | Description |
|------|--------|--------|-------------|
| [#197](https://github.com/tscircuit/altiumts/pull/197) | 🐳 Major | ⭐⭐⭐ | Adds typed access to pin-to-pad mappings for schematic Record 47 while preserving raw fields and ensuring accurate roundtrips, along with updated regression tests for various parsing scenarios. |
| [#60](https://github.com/tscircuit/altium-to-circuit-json/pull/60) | 🐙 Minor | ⭐⭐ | Adds support for AltiumArcRecord on copper layers, enabling curved traces in PCB conversion to circuit-json. |

<details>
<summary>🐌 Tiny Contributions (1)</summary>

| PR # | Impact | Description |
|------|--------|-------------|
| [#59](https://github.com/tscircuit/altium-to-circuit-json/pull/59) | 🐌 Tiny | Updates the altiumts dependency to v0.0.74 to ensure accurate rendering of complex pad shapes with rounded corners in SVGs. |

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
