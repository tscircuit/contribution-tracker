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

# Contribution Overview 2026-05-05

The current week is shown below. There are 3 major sections:

- [Contributor Overview](#contributor-overview)
- [PRs by Repository](#prs-by-repository)
- [PRs by Contributor](#changes-by-contributor)
- [Scoring & Sponsorship Details](/docs/sponsorship-calculation-explanation.md)

## PRs by Repository

```mermaid
pie
    "tscircuit/tscircuit" : 26
    "tscircuit/circuit-json" : 2
    "tscircuit/core" : 28
    "tscircuit/tscircuit.com" : 46
    "tscircuit/eval" : 50
    "tscircuit/runframe" : 51
    "tscircuit/cli" : 42
    "tscircuit/svg.tscircuit.com" : 5
    "tscircuit/tscircuit-autorouter" : 23
    "tscircuit/circuit-json-to-kicad" : 4
    "tscircuit/rectdiff" : 9
    "tscircuit/props" : 11
    "tscircuit/kicadts" : 7
    "tscircuit/kicad-to-circuit-json" : 12
    "tscircuit/docs" : 5
    "tscircuit/high-density-repair03" : 9
    "tscircuit/order-dialog" : 1
    "tscircuit/autorouting-phase-demo" : 1
    "tscircuit/circuit-json-to-gerber" : 2
    "tscircuit/circuit-json-to-tscircuit" : 4
    "tscircuit/schematic-trace-solver" : 4
    "tscircuit/circuit-json-schematic-placement-analysis" : 2
    "tscircuit/checks" : 2
    "tscircuit/sparkfun-boards" : 2
    "tscircuit/circuit-json-to-3d-png" : 1
    "tscircuit/circuit-json-to-gltf" : 2
    "tscircuit/high-density-repair01" : 2
```

## Contributor Overview

| Contributor | 🐳 Major | 🐙 Minor | 🐌 Tiny | Score | ⭐ | Discussion Contributions |
|-------------|---------|---------|---------|-------|-----|--------------------------|
| [imrishabh18](#imrishabh18) | 12 | 9 | 18 | 79 | ⭐⭐⭐ | 0🔹 0🔶 0💎 |
| [seveibar](#seveibar) | 10 | 8 | 7 | 64 | ⭐⭐⭐ | 0🔹 0🔶 0💎 |
| [techmannih](#techmannih) | 4 | 7 | 2 | 32 | ⭐⭐ | 0🔹 0🔶 0💎 |
| [0hmX](#0hmX) | 5 | 0 | 8 | 28 | ⭐⭐ | 0🔹 0🔶 0💎 |
| [ShiboSoftwareDev](#ShiboSoftwareDev) | 3 | 6 | 1 | 26 | ⭐⭐ | 0🔹 0🔶 0💎 |
| [Sang-it](#Sang-it) | 3 | 4 | 3 | 23 | ⭐⭐ | 0🔹 0🔶 0💎 |
| [Abse2001](#Abse2001) | 3 | 0 | 1 | 20 | ⭐⭐ | 0🔹 0🔶 0💎 |
| [AnasSarkiz](#AnasSarkiz) | 3 | 1 | 2 | 18 | ⭐⭐ | 0🔹 0🔶 0💎 |
| [tscircuitbot](#tscircuitbot) | 0 | 0 | 216 | 14.5 | ⭐⭐ | 0🔹 0🔶 0💎 |
| [mohan-bee](#mohan-bee) | 1 | 2 | 3 | 12 | ⭐⭐ | 0🔹 0🔶 0💎 |
| [rushabhcodes](#rushabhcodes) | 2 | 0 | 1 | 9 | ⭐ | 0🔹 0🔶 0💎 |
| [MustafaMulla29](#MustafaMulla29) | 0 | 1 | 4 | 7 | ⭐ | 0🔹 0🔶 0💎 |
| [shehaban](#shehaban) | 1 | 0 | 0 | 4 | ⭐ | 0🔹 0🔶 0💎 |
| [techmannih2](#techmannih2) | 0 | 1 | 1 | 3 |  | 0🔹 0🔶 0💎 |

## Staff Pass Ratio (SPR)

| Contributor | Reviewed PRs | Rejections | Approvals | SPR |
|-------------|--------------|------------|-----------|-----|
| [imrishabh18](#imrishabh18) | 12 | 0 | 12 | 100.0% |
| [techmannih](#techmannih) | 9 | 2 | 8 | 77.8% |
| [ShiboSoftwareDev](#ShiboSoftwareDev) | 7 | 0 | 8 | 100.0% |
| [Sang-it](#Sang-it) | 6 | 0 | 6 | 100.0% |
| [mohan-bee](#mohan-bee) | 5 | 4 | 3 | 20.0% |
| [Abse2001](#Abse2001) | 3 | 1 | 2 | 66.7% |
| [0hmX](#0hmX) | 2 | 0 | 2 | 100.0% |
| [AnasSarkiz](#AnasSarkiz) | 1 | 1 | 0 | 0.0% |
| [techmannih2](#techmannih2) | 1 | 0 | 1 | 100.0% |
| [rushabhcodes](#rushabhcodes) | 1 | 0 | 1 | 100.0% |
| [MustafaMulla29](#MustafaMulla29) | 1 | 0 | 2 | 100.0% |

<details>
<summary>imrishabh18 SPR PRs (12)</summary>

- [#2262](https://github.com/tscircuit/core/pull/2262) Adds support for preserving imported pcb_trace elements during circuitJson inflation
- [#2260](https://github.com/tscircuit/core/pull/2260) When reroute autoroutingphase is used without phaseIndex, add a default autorouting phase before
- [#2256](https://github.com/tscircuit/core/pull/2256) Use the platform passed autorouter as algorithmFn for autorouting
- [#2245](https://github.com/tscircuit/core/pull/2245) Add the method `unrouteCircuitJson`
- [#2595](https://github.com/tscircuit/eval/pull/2595) Export `boardContentCircuitJson` from the `kicad_pcb` file import
- [#2574](https://github.com/tscircuit/eval/pull/2574) Import `kicad_pcb` file as Board component
- [#2576](https://github.com/tscircuit/eval/pull/2576) Test verifying that multiple subcircuit with circuitJson being passed works
- [#1113](https://github.com/tscircuit/tscircuit-autorouter/pull/1113) Add via and pad clearance solver when `minViaEdgeToPadEdgeClearance` is present
- [#85](https://github.com/tscircuit/kicad-to-circuit-json/pull/85) Create pcbtrace conectivity graph for segments and via's
- [#82](https://github.com/tscircuit/kicad-to-circuit-json/pull/82) Add source_net support
- [#8](https://github.com/tscircuit/high-density-repair03/pull/8) Add Via to Pad clearance solver
- [#9](https://github.com/tscircuit/high-density-repair03/pull/9) Also consider inferred vias in trace-to-pad clearance relaxation

</details>

<details>
<summary>techmannih SPR PRs (9)</summary>

- [#2244](https://github.com/tscircuit/core/pull/2244) Normalize resistor footprints to resistor-specific packages
- [#29](https://github.com/tscircuit/circuit-json-to-tscircuit/pull/29) Render fabrication note paths on the fabrication layer
- [#28](https://github.com/tscircuit/circuit-json-to-tscircuit/pull/28) Support plated hole rotation for oval and pill holes
- [#30](https://github.com/tscircuit/circuit-json-to-tscircuit/pull/30) Support top and bottom courtyard layers in footprint generation
- [#39](https://github.com/tscircuit/kicadts/pull/39) support pic_programmer schematic
- [#33](https://github.com/tscircuit/kicadts/pull/33) Add typed KicadPcb graphic collections
- [#287](https://github.com/tscircuit/circuit-json-to-kicad/pull/287) add PCB snapshot drill-hole color flag
- [#72](https://github.com/tscircuit/kicad-to-circuit-json/pull/72) Support Edge.Cuts gr_circle with typed KicadPcb graphics
- [#71](https://github.com/tscircuit/kicad-to-circuit-json/pull/71)  Preserve JLCPCB Part no footprint properties in circuit-json 

</details>

<details>
<summary>ShiboSoftwareDev SPR PRs (7)</summary>

- [#2236](https://github.com/tscircuit/core/pull/2236) Add autorouting phase component support
- [#2239](https://github.com/tscircuit/core/pull/2239) Use port direction for group schematic box pin placement
- [#2237](https://github.com/tscircuit/core/pull/2237) Fix named schPinArrangement ports for group schematic boxes
- [#2249](https://github.com/tscircuit/core/pull/2249) Support rectangular reroute phases in autoroutingphase
- [#85](https://github.com/tscircuit/circuit-json-to-gerber/pull/85) submit 8 layers
- [#541](https://github.com/tscircuit/docs/pull/541) Document group schematic box rendering
- [#1136](https://github.com/tscircuit/tscircuit-autorouter/pull/1136) dataset srj16 bga

</details>

<details>
<summary>Sang-it SPR PRs (6)</summary>

- [#2254](https://github.com/tscircuit/core/pull/2254) fix standard ubs_c repros
- [#2255](https://github.com/tscircuit/core/pull/2255) fix net label behaviour
- [#2234](https://github.com/tscircuit/core/pull/2234) add schematic section
- [#286](https://github.com/tscircuit/schematic-trace-solver/pull/286) fix repro33 - trace label collision
- [#19](https://github.com/tscircuit/circuit-json-schematic-placement-analysis/pull/19) add diode-resistor-alignment analysis
- [#18](https://github.com/tscircuit/circuit-json-schematic-placement-analysis/pull/18) add schematic box inner label collision solver

</details>

<details>
<summary>mohan-bee SPR PRs (5)</summary>

- [#2257](https://github.com/tscircuit/core/pull/2257) Fix invalid Circuit JSON routes from through-obstacle autorouting
- [#144](https://github.com/tscircuit/checks/pull/144) Fix false DRC missing-connection errors for multi-pad PCB ports
- [#548](https://github.com/tscircuit/docs/pull/548) update tsci snapshot logic
- [#36](https://github.com/tscircuit/kicadts/pull/36) Fix unhandled PCB syntax blocking KiCad board conversion
- [#297](https://github.com/tscircuit/circuit-json-to-kicad/pull/297) Fix rotated chip pill plated hole

</details>

<details>
<summary>Abse2001 SPR PRs (3)</summary>

- [#143](https://github.com/tscircuit/checks/pull/143) Add polygon-aware DRC checks for rotated pads and plated holes
- [#1125](https://github.com/tscircuit/tscircuit-autorouter/pull/1125) Preserve original obstacle geometry and rotation in circuit-json conversion
- [#1118](https://github.com/tscircuit/tscircuit-autorouter/pull/1118) Add geometry-aware DRC checks for rotated pads and reconstructed obstacle geometry

</details>

<details>
<summary>0hmX SPR PRs (2)</summary>

- [#128](https://github.com/tscircuit/rectdiff/pull/128) Prepare gap-fill logic for board boundary handling
- [#10](https://github.com/tscircuit/high-density-repair01/pull/10) Fix disconnected trace segment bug

</details>

<details>
<summary>AnasSarkiz SPR PRs (1)</summary>

- [#1121](https://github.com/tscircuit/tscircuit-autorouter/pull/1121) Prevent downstream crashes by adding x/y to through_obstacle route points

</details>

<details>
<summary>techmannih2 SPR PRs (1)</summary>

- [#662](https://github.com/tscircuit/props/pull/662) Map supported resistor footprint shorthands in resistorProps

</details>

<details>
<summary>rushabhcodes SPR PRs (1)</summary>

- [#1](https://github.com/tscircuit/circuit-json-to-3d-png/pull/1) Add initial workflow configurations and project setup files

</details>

<details>
<summary>MustafaMulla29 SPR PRs (1)</summary>

- [#160](https://github.com/tscircuit/circuit-json-to-gltf/pull/160) Fix empty footprinter models showing as fallback boxes in normal 3D renders

</details>

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

| Contributor | Reviews Received | Approvals Received | Rejections Received | Approvals | Rejections Given | PRs Opened | PRs Merged | Issues Created |
|---|---|---|---|---|---|---|---|---|
| [time-turner42](#time-turner42) | 0 | 0 | 0 | 0 | 0 | 1 | 0 | 0 |
| [gsdali](#gsdali) | 0 | 0 | 0 | 0 | 0 | 17 | 0 | 0 |
| [tscircuitbot](#tscircuitbot) | 1 | 1 | 0 | 0 | 0 | 271 | 216 | 0 |
| [chengyixu](#chengyixu) | 0 | 0 | 0 | 0 | 0 | 8 | 0 | 0 |
| [seveibar](#seveibar) | 9 | 3 | 0 | 48 | 6 | 31 | 25 | 0 |
| [imrishabh18](#imrishabh18) | 17 | 14 | 0 | 10 | 3 | 43 | 39 | 0 |
| [AnasSarkiz](#AnasSarkiz) | 5 | 4 | 1 | 2 | 0 | 7 | 6 | 0 |
| [techmannih2](#techmannih2) | 5 | 2 | 0 | 0 | 0 | 4 | 2 | 0 |
| [ShiboSoftwareDev](#ShiboSoftwareDev) | 9 | 9 | 0 | 1 | 0 | 11 | 10 | 0 |
| [techmannih](#techmannih) | 12 | 9 | 1 | 0 | 0 | 18 | 13 | 0 |
| [Sang-it](#Sang-it) | 7 | 7 | 0 | 0 | 0 | 12 | 10 | 0 |
| [mohan-bee](#mohan-bee) | 26 | 6 | 4 | 1 | 0 | 12 | 6 | 0 |
| [tk009999](#tk009999) | 1 | 0 | 1 | 0 | 0 | 1 | 0 | 0 |
| [64johnlee](#64johnlee) | 0 | 0 | 0 | 0 | 0 | 6 | 0 | 0 |
| [Abse2001](#Abse2001) | 8 | 4 | 1 | 8 | 0 | 5 | 4 | 0 |
| [CrocCartelDevTeam](#CrocCartelDevTeam) | 0 | 0 | 0 | 0 | 0 | 2 | 0 | 0 |
| [Bortlesboat](#Bortlesboat) | 0 | 0 | 0 | 0 | 0 | 1 | 0 | 0 |
| [rushabhcodes](#rushabhcodes) | 10 | 4 | 1 | 0 | 1 | 4 | 3 | 0 |
| [gwhthompson](#gwhthompson) | 1 | 0 | 0 | 0 | 0 | 1 | 0 | 0 |
| [nexiumbiz-debug](#nexiumbiz-debug) | 0 | 0 | 0 | 0 | 0 | 1 | 0 | 0 |
| [ihti228](#ihti228) | 0 | 0 | 0 | 0 | 0 | 1 | 0 | 0 |
| [mert-kocoglu](#mert-kocoglu) | 0 | 0 | 0 | 0 | 0 | 1 | 0 | 0 |
| [MustafaMulla29](#MustafaMulla29) | 5 | 4 | 0 | 2 | 0 | 6 | 5 | 0 |
| [thisisharsh7](#thisisharsh7) | 0 | 0 | 0 | 0 | 0 | 3 | 0 | 0 |
| [0hmX](#0hmX) | 7 | 4 | 0 | 0 | 0 | 17 | 13 | 0 |
| [shehaban](#shehaban) | 3 | 1 | 1 | 0 | 0 | 1 | 1 | 0 |
| [watcharaponthod-code](#watcharaponthod-code) | 1 | 0 | 0 | 0 | 0 | 5 | 0 | 0 |
| [grantf04](#grantf04) | 4 | 0 | 0 | 0 | 0 | 2 | 0 | 0 |
| [serfersac](#serfersac) | 0 | 0 | 0 | 0 | 0 | 4 | 0 | 0 |
| [sumithkumar07](#sumithkumar07) | 0 | 0 | 0 | 0 | 0 | 1 | 0 | 0 |
| [brone1323](#brone1323) | 0 | 0 | 0 | 0 | 0 | 2 | 0 | 0 |
| [chacu](#chacu) | 0 | 0 | 0 | 0 | 0 | 1 | 0 | 0 |
| [Mira-Mjodheim](#Mira-Mjodheim) | 0 | 0 | 0 | 0 | 0 | 1 | 0 | 0 |
| [sagarshuklaa](#sagarshuklaa) | 0 | 0 | 0 | 0 | 0 | 1 | 0 | 0 |

## Changes by Repository

### [tscircuit/tscircuit](https://github.com/tscircuit/tscircuit)


<details>
<summary>🐌 Tiny Contributions (26)</summary>

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#3167](https://github.com/tscircuit/tscircuit/pull/3167) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#3166](https://github.com/tscircuit/tscircuit/pull/3166) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#3165](https://github.com/tscircuit/tscircuit/pull/3165) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#3164](https://github.com/tscircuit/tscircuit/pull/3164) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#3163](https://github.com/tscircuit/tscircuit/pull/3163) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#3161](https://github.com/tscircuit/tscircuit/pull/3161) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#3160](https://github.com/tscircuit/tscircuit/pull/3160) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#3159](https://github.com/tscircuit/tscircuit/pull/3159) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#3146](https://github.com/tscircuit/tscircuit/pull/3146) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#3151](https://github.com/tscircuit/tscircuit/pull/3151) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#3145](https://github.com/tscircuit/tscircuit/pull/3145) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#3152](https://github.com/tscircuit/tscircuit/pull/3152) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#3147](https://github.com/tscircuit/tscircuit/pull/3147) | 🐌 Tiny | tscircuitbot | Updates the package version from 0.0.1732 to 0.0.1733 in package.json |
| [#3150](https://github.com/tscircuit/tscircuit/pull/3150) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#3157](https://github.com/tscircuit/tscircuit/pull/3157) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#3154](https://github.com/tscircuit/tscircuit/pull/3154) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#3143](https://github.com/tscircuit/tscircuit/pull/3143) | 🐌 Tiny | tscircuitbot | Updates the package version from 0.0.1730 to 0.0.1731 in package.json |
| [#3141](https://github.com/tscircuit/tscircuit/pull/3141) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#3162](https://github.com/tscircuit/tscircuit/pull/3162) | 🐌 Tiny | seveibar | Adds TypeScript definitions for KiCad PCB files, enabling better type support for handling KiCad PCB data in the project. |
| [#3144](https://github.com/tscircuit/tscircuit/pull/3144) | 🐌 Tiny | seveibar | Adds a new dependency for calculating cell boundaries in the circuit design process |
| [#3158](https://github.com/tscircuit/tscircuit/pull/3158) | 🐌 Tiny | imrishabh18 | Updates dependencies for core, eval, runframe, and kicad-to-circuit-json packages to their latest versions. |
| [#3148](https://github.com/tscircuit/tscircuit/pull/3148) | 🐌 Tiny | imrishabh18 | Adds tscircuitkrt-wasm as a new dependency in the package.json file. |
| [#3156](https://github.com/tscircuit/tscircuit/pull/3156) | 🐌 Tiny | imrishabh18 | Updates the dependencies for core and eval to their latest versions in package.json |
| [#3153](https://github.com/tscircuit/tscircuit/pull/3153) | 🐌 Tiny | imrishabh18 | Updates the kicadts dependency from version 0.0.23 to 0.0.33 in package.json |
| [#3140](https://github.com/tscircuit/tscircuit/pull/3140) | 🐌 Tiny | imrishabh18 | Updates dependencies for tscircuit, core, eval, and cli to their latest versions. |
| [#3142](https://github.com/tscircuit/tscircuit/pull/3142) | 🐌 Tiny | imrishabh18 | Updates the kicad-to-circuit-json dependency from 0.0.32 to 0.0.51 in package.json and refreshes bun.lock to reflect the new version. |

</details>

### [tscircuit/circuit-json](https://github.com/tscircuit/circuit-json)

| PR # | Impact | Rating | Contributor | Description |
|------|--------|--------|-------------|-------------|
| [#579](https://github.com/tscircuit/circuit-json/pull/579) | 🐙 Minor | ⭐⭐ | seveibar | Adds a new route type through_pad for PCB trace routing, allowing for more detailed routing options in PCB designs. |

<details>
<summary>🐌 Tiny Contributions (1)</summary>

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#580](https://github.com/tscircuit/circuit-json/pull/580) | 🐌 Tiny | tscircuitbot | Automated package update |

</details>

### [tscircuit/core](https://github.com/tscircuit/core)

| PR # | Impact | Rating | Contributor | Description |
|------|--------|--------|-------------|-------------|
| [#2278](https://github.com/tscircuit/core/pull/2278) | 🐳 Major | ⭐⭐⭐ | seveibar | Adds support for PCB vias in the inflation process of circuit elements, allowing for better integration and rendering of vias in PCB designs. |
| [#2279](https://github.com/tscircuit/core/pull/2279) | 🐳 Major | ⭐⭐⭐ | seveibar | Refactors PcbVia component to clarify prop names and improve integration with ViaProps, removing netAssigned and adjusting prop handling for better clarity. |
| [#2267](https://github.com/tscircuit/core/pull/2267) | 🐳 Major | ⭐⭐⭐ | seveibar | Adds support for providing Design Rule Check (DRC) parameters during the autorouting phase, enhancing routing accuracy and compliance with design specifications. |
| [#2256](https://github.com/tscircuit/core/pull/2256) | 🐳 Major | ⭐⭐⭐ | imrishabh18 | Changes the autorouting configuration to utilize the platform-specific autorouter as the algorithm function for autorouting. |
| [#2259](https://github.com/tscircuit/core/pull/2259) | 🐳 Major | ⭐⭐⭐ | imrishabh18 | Fixes issue where no traces are outputted during rerouting when phaseIndex is not specified |
| [#2260](https://github.com/tscircuit/core/pull/2260) | 🐳 Major | ⭐⭐⭐ | imrishabh18 | Adds a default autorouting phase when reroute is used without a specified phaseIndex, ensuring proper routing behavior in the autorouting process. |
| [#2236](https://github.com/tscircuit/core/pull/2236) | 🐳 Major | ⭐⭐⭐ | ShiboSoftwareDev | Adds a self-closing autoroutingphase  primitive for configuring autorouter behavior per existing routingPhaseIndex phase. Routing phase plans now attach matching phase autorouter configs, local autorouting uses those configs per phase, and net-derived trace phases reuse the existing net phase lookup. |
| [#2238](https://github.com/tscircuit/core/pull/2238) | 🐙 Minor | ⭐⭐ | seveibar | Fixes the issue where the subcircuit anchor alignment does not function correctly in circuit JSON, ensuring proper positioning of autosized subcircuits. |
| [#2235](https://github.com/tscircuit/core/pull/2235) | 🐙 Minor | ⭐⭐ | seveibar | Adds tests for rendering subcircuits with specific anchor alignments in circuit JSON. |
| [#2262](https://github.com/tscircuit/core/pull/2262) | 🐙 Minor | ⭐⭐ | imrishabh18 | Preserves imported pcb_trace elements during circuitJson inflation, ensuring logical connections are maintained when no routed pcb_trace is present. |
| [#2245](https://github.com/tscircuit/core/pull/2245) | 🐙 Minor | ⭐⭐ | imrishabh18 | Adds a method to filter out unrouted elements from circuit JSON data. |
| [#2250](https://github.com/tscircuit/core/pull/2250) | 🐙 Minor | ⭐⭐ | imrishabh18 | Fixes incorrect assignment of minViaEdgeToPadEdgeClearance in autorouting calculations, ensuring proper clearance values are used. |
| [#2251](https://github.com/tscircuit/core/pull/2251) | 🐙 Minor | ⭐⭐ | imrishabh18 | Fixes the issue where inflated footprints were not persisted to their original layer in the PCB design. |
| [#2237](https://github.com/tscircuit/core/pull/2237) | 🐙 Minor | ⭐⭐ | ShiboSoftwareDev | Fixes handling of named child ports in schPinArrangement for group schematic boxes, centralizing pin extraction and improving pin count calculations. |
| [#2239](https://github.com/tscircuit/core/pull/2239) | 🐙 Minor | ⭐⭐ | ShiboSoftwareDev | Adds direction-based schematic box placement for group ports when no explicit schPinArrangement is provided, while preserving schPinArrangement as the override. |
| [#2249](https://github.com/tscircuit/core/pull/2249) | 🐙 Minor | ⭐⭐ | ShiboSoftwareDev | Adds reroute and region handling to autoroutingphase, allowing a later phase to rip previously routed traces inside a rectangular region, autoroute only the clipped regional connections, and reconnect the result back into the full route set. |
| [#2263](https://github.com/tscircuit/core/pull/2263) | 🐙 Minor | ⭐⭐ | techmannih | Changes the way the footprint is retrieved in NormalComponent by using a parsed footprint string instead of directly from props, enhancing the components flexibility in handling footprints. |
| [#2254](https://github.com/tscircuit/core/pull/2254) | 🐙 Minor | ⭐⭐ | Sang-it | Fixes the rendering phase dependencies for the SourceAddConnectivityMapKey in the Renderable component. |
| [#2253](https://github.com/tscircuit/core/pull/2253) | 🐙 Minor | ⭐⭐ | Sang-it | Adds tests for USB-C connector scenarios including connection and trace length validation. |
| [#2255](https://github.com/tscircuit/core/pull/2255) | 🐙 Minor | ⭐⭐ | Sang-it | Fixes net label placement logic to prevent redundant labels and ensure correct rendering of schematic traces. |
| [#2234](https://github.com/tscircuit/core/pull/2234) | 🐙 Minor | ⭐⭐ | Sang-it | Add support for schematic sections and include a missing package for enhanced schematic organization. |

<details>
<summary>🐌 Tiny Contributions (7)</summary>

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#2283](https://github.com/tscircuit/core/pull/2283) | 🐌 Tiny | tscircuitbot | Updates the tscircuitchecks package from version 0.0.126 to 0.0.127 |
| [#2246](https://github.com/tscircuit/core/pull/2246) | 🐌 Tiny | tscircuitbot | Updates the version of the tscircuitchecks package from 0.0.125 to 0.0.126 in package.json |
| [#2275](https://github.com/tscircuit/core/pull/2275) | 🐌 Tiny | imrishabh18 | This pull request integrates the kicad-to-circuit-json converter into the testing framework to enhance inflation testing capabilities. It also removes an outdated test asset that is no longer needed due to the new converters functionality. |
| [#2276](https://github.com/tscircuit/core/pull/2276) | 🐌 Tiny | imrishabh18 | Updates the kicad-to-circuit-json dependency to version 0.0.59 in order to ensure compatibility with trace inflation functionality. |
| [#2269](https://github.com/tscircuit/core/pull/2269) | 🐌 Tiny | imrishabh18 | This pull request adds a new test case for the Arduino Uno circuit, providing a JSON representation of the circuit components and their connections. This will help in verifying the functionality of the circuit design and ensure that the components are correctly represented in the system. |
| [#2252](https://github.com/tscircuit/core/pull/2252) | 🐌 Tiny | imrishabh18 | Upgrade to the latest published tscircuitcapacity-autorouter to pick up fixes and improvements. |
| [#2241](https://github.com/tscircuit/core/pull/2241) | 🐌 Tiny | imrishabh18 | Updates the local autorouter dependency to the latest version (0.0.500) for bug fixes and improved routing behavior. |

</details>

### [tscircuit/tscircuit.com](https://github.com/tscircuit/tscircuit.com)


<details>
<summary>🐌 Tiny Contributions (46)</summary>

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#3395](https://github.com/tscircuit/tscircuit.com/pull/3395) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#3394](https://github.com/tscircuit/tscircuit.com/pull/3394) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#3393](https://github.com/tscircuit/tscircuit.com/pull/3393) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#3392](https://github.com/tscircuit/tscircuit.com/pull/3392) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#3390](https://github.com/tscircuit/tscircuit.com/pull/3390) | 🐌 Tiny | tscircuitbot | Updates the tscircuiteval package to version 0.0.834 in package.json |
| [#3391](https://github.com/tscircuit/tscircuit.com/pull/3391) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#3389](https://github.com/tscircuit/tscircuit.com/pull/3389) | 🐌 Tiny | tscircuitbot | Updates the tscircuiteval package to version 0.0.833 in the package.json file. |
| [#3388](https://github.com/tscircuit/tscircuit.com/pull/3388) | 🐌 Tiny | tscircuitbot | Updates the tscircuitrunframe package to version 0.0.1940 |
| [#3387](https://github.com/tscircuit/tscircuit.com/pull/3387) | 🐌 Tiny | tscircuitbot | Updates the tscircuiteval package to version 0.0.832 in the package.json file |
| [#3377](https://github.com/tscircuit/tscircuit.com/pull/3377) | 🐌 Tiny | tscircuitbot | Automated package update for tscircuiteval from version 0.0.826 to 0.0.827 |
| [#3373](https://github.com/tscircuit/tscircuit.com/pull/3373) | 🐌 Tiny | tscircuitbot | Updates the tscircuiteval package from version 0.0.824 to 0.0.825 in the package.json file. |
| [#3386](https://github.com/tscircuit/tscircuit.com/pull/3386) | 🐌 Tiny | tscircuitbot | Updates the tscircuitrunframe package to version 0.0.1939 |
| [#3385](https://github.com/tscircuit/tscircuit.com/pull/3385) | 🐌 Tiny | tscircuitbot | Updates the tscircuiteval package to version 0.0.831 in the package.json file. |
| [#3383](https://github.com/tscircuit/tscircuit.com/pull/3383) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#3382](https://github.com/tscircuit/tscircuit.com/pull/3382) | 🐌 Tiny | tscircuitbot | Updates the tscircuiteval package from version 0.0.829 to 0.0.830 |
| [#3381](https://github.com/tscircuit/tscircuit.com/pull/3381) | 🐌 Tiny | tscircuitbot | Updates the tscircuiteval package to version 0.0.829 in the package.json file. |
| [#3380](https://github.com/tscircuit/tscircuit.com/pull/3380) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#3379](https://github.com/tscircuit/tscircuit.com/pull/3379) | 🐌 Tiny | tscircuitbot | Updates the tscircuiteval package from version 0.0.827 to 0.0.828 |
| [#3378](https://github.com/tscircuit/tscircuit.com/pull/3378) | 🐌 Tiny | tscircuitbot | Updates the tscircuitrunframe package from version 0.0.1935 to 0.0.1936 |
| [#3375](https://github.com/tscircuit/tscircuit.com/pull/3375) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#3376](https://github.com/tscircuit/tscircuit.com/pull/3376) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#3354](https://github.com/tscircuit/tscircuit.com/pull/3354) | 🐌 Tiny | tscircuitbot | Updates the tscircuiteval package to version 0.0.816 |
| [#3372](https://github.com/tscircuit/tscircuit.com/pull/3372) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#3357](https://github.com/tscircuit/tscircuit.com/pull/3357) | 🐌 Tiny | tscircuitbot | Updates the tscircuitrunframe package from version 0.0.1924 to 0.0.1925 |
| [#3350](https://github.com/tscircuit/tscircuit.com/pull/3350) | 🐌 Tiny | tscircuitbot | Updates the tscircuiteval package from version 0.0.813 to 0.0.814 |
| [#3371](https://github.com/tscircuit/tscircuit.com/pull/3371) | 🐌 Tiny | tscircuitbot | Updates the tscircuiteval package to version 0.0.824 in the package.json file. |
| [#3367](https://github.com/tscircuit/tscircuit.com/pull/3367) | 🐌 Tiny | tscircuitbot | Updates the tscircuiteval package from version 0.0.821 to 0.0.822 |
| [#3365](https://github.com/tscircuit/tscircuit.com/pull/3365) | 🐌 Tiny | tscircuitbot | Updates the tscircuiteval package from version 0.0.820 to 0.0.821 |
| [#3359](https://github.com/tscircuit/tscircuit.com/pull/3359) | 🐌 Tiny | tscircuitbot | Updates the tscircuitrunframe package from version 0.0.1925 to 0.0.1926 |
| [#3356](https://github.com/tscircuit/tscircuit.com/pull/3356) | 🐌 Tiny | tscircuitbot | Updates the tscircuiteval package from version 0.0.816 to 0.0.817 |
| [#3355](https://github.com/tscircuit/tscircuit.com/pull/3355) | 🐌 Tiny | tscircuitbot | Updates the tscircuitrunframe package from version 0.0.1923 to 0.0.1924 |
| [#3352](https://github.com/tscircuit/tscircuit.com/pull/3352) | 🐌 Tiny | tscircuitbot | Updates the tscircuiteval package from version 0.0.814 to 0.0.815 |
| [#3351](https://github.com/tscircuit/tscircuit.com/pull/3351) | 🐌 Tiny | tscircuitbot | Updates the tscircuitrunframe package from version 0.0.1921 to 0.0.1922 |
| [#3348](https://github.com/tscircuit/tscircuit.com/pull/3348) | 🐌 Tiny | tscircuitbot | Updates the tscircuiteval package from version 0.0.811 to 0.0.813 in the package.json file. |
| [#3370](https://github.com/tscircuit/tscircuit.com/pull/3370) | 🐌 Tiny | tscircuitbot | Updates the tscircuitrunframe package from version 0.0.1930 to 0.0.1931 |
| [#3369](https://github.com/tscircuit/tscircuit.com/pull/3369) | 🐌 Tiny | tscircuitbot | Updates the tscircuiteval package from version 0.0.822 to 0.0.823 |
| [#3368](https://github.com/tscircuit/tscircuit.com/pull/3368) | 🐌 Tiny | tscircuitbot | Updates the tscircuitrunframe package from version 0.0.1929 to 0.0.1930 |
| [#3366](https://github.com/tscircuit/tscircuit.com/pull/3366) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#3362](https://github.com/tscircuit/tscircuit.com/pull/3362) | 🐌 Tiny | tscircuitbot | Updates the tscircuiteval package from version 0.0.819 to 0.0.820 |
| [#3360](https://github.com/tscircuit/tscircuit.com/pull/3360) | 🐌 Tiny | tscircuitbot | Updates the tscircuiteval package from version 0.0.818 to 0.0.819 |
| [#3349](https://github.com/tscircuit/tscircuit.com/pull/3349) | 🐌 Tiny | tscircuitbot | Updates the tscircuitrunframe package to version 0.0.1921 |
| [#3347](https://github.com/tscircuit/tscircuit.com/pull/3347) | 🐌 Tiny | tscircuitbot | Updates the tscircuitrunframe package from version 0.0.1919 to 0.0.1920 |
| [#3363](https://github.com/tscircuit/tscircuit.com/pull/3363) | 🐌 Tiny | tscircuitbot | Updates the tscircuitrunframe package from version 0.0.1926 to 0.0.1928 |
| [#3358](https://github.com/tscircuit/tscircuit.com/pull/3358) | 🐌 Tiny | tscircuitbot | Updates the tscircuiteval package from version 0.0.817 to 0.0.818 |
| [#3353](https://github.com/tscircuit/tscircuit.com/pull/3353) | 🐌 Tiny | tscircuitbot | Updates the tscircuitrunframe package from version 0.0.1922 to 0.0.1923 |
| [#3364](https://github.com/tscircuit/tscircuit.com/pull/3364) | 🐌 Tiny | imrishabh18 | Updates the tscircuitorder-dialog dependency to a specific commit to ensure intended upstream changes are pulled into the workspace. |

</details>

### [tscircuit/eval](https://github.com/tscircuit/eval)

| PR # | Impact | Rating | Contributor | Description |
|------|--------|--------|-------------|-------------|
| [#2574](https://github.com/tscircuit/eval/pull/2574) | 🐳 Major | ⭐⭐⭐ | imrishabh18 | This pull request introduces the ability to import .kicad_pcb files as Board components in the application. It includes a new converter for transforming KiCad PCB files into a circuit JSON format, which can then be utilized within the application. Additionally, it adds error handling for unsupported static asset URLs and updates the package dependencies for improved functionality. |
| [#2645](https://github.com/tscircuit/eval/pull/2645) | 🐙 Minor | ⭐⭐ | seveibar | Implements a static file loader map for handling various static file types in the importLocalFile function. |
| [#2595](https://github.com/tscircuit/eval/pull/2595) | 🐙 Minor | ⭐⭐ | imrishabh18 | Exports boardContentCircuitJson from the kicad_pcb file import, filtering out PCB board elements from the circuit JSON. |
| [#2596](https://github.com/tscircuit/eval/pull/2596) | 🐙 Minor | ⭐⭐ | imrishabh18 | Adds support for krt as an autorouter option in the platform configuration, allowing users to utilize the krt wasm autorouter similarly to the existing auto-cloud option. |
| [#2576](https://github.com/tscircuit/eval/pull/2576) | 🐙 Minor | ⭐⭐ | imrishabh18 | Adds a test to verify that multiple subcircuits can be imported and rendered correctly using circuitJson. |

<details>
<summary>🐌 Tiny Contributions (45)</summary>

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#2648](https://github.com/tscircuit/eval/pull/2648) | 🐌 Tiny | tscircuitbot | Updates the package version from 0.0.835 to 0.0.836 in package.json |
| [#2646](https://github.com/tscircuit/eval/pull/2646) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#2636](https://github.com/tscircuit/eval/pull/2636) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#2629](https://github.com/tscircuit/eval/pull/2629) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#2630](https://github.com/tscircuit/eval/pull/2630) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#2626](https://github.com/tscircuit/eval/pull/2626) | 🐌 Tiny | tscircuitbot | Updates package dependencies to their latest versions in package.json |
| [#2627](https://github.com/tscircuit/eval/pull/2627) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#2624](https://github.com/tscircuit/eval/pull/2624) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#2613](https://github.com/tscircuit/eval/pull/2613) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#2610](https://github.com/tscircuit/eval/pull/2610) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#2620](https://github.com/tscircuit/eval/pull/2620) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#2612](https://github.com/tscircuit/eval/pull/2612) | 🐌 Tiny | tscircuitbot | Updates the version of the tscircuitcore package from 0.0.1228 to 0.0.1229 in package.json |
| [#2615](https://github.com/tscircuit/eval/pull/2615) | 🐌 Tiny | tscircuitbot | Updates the version of the tscircuitcore package from 0.0.1229 to 0.0.1230 in package.json |
| [#2618](https://github.com/tscircuit/eval/pull/2618) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#2623](https://github.com/tscircuit/eval/pull/2623) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#2609](https://github.com/tscircuit/eval/pull/2609) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#2619](https://github.com/tscircuit/eval/pull/2619) | 🐌 Tiny | tscircuitbot | Automated package update to version 0.0.828 |
| [#2621](https://github.com/tscircuit/eval/pull/2621) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#2616](https://github.com/tscircuit/eval/pull/2616) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#2580](https://github.com/tscircuit/eval/pull/2580) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#2603](https://github.com/tscircuit/eval/pull/2603) | 🐌 Tiny | tscircuitbot | Updates the version of the tscircuitcore package from 0.0.1225 to 0.0.1226 in package.json |
| [#2577](https://github.com/tscircuit/eval/pull/2577) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#2585](https://github.com/tscircuit/eval/pull/2585) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#2598](https://github.com/tscircuit/eval/pull/2598) | 🐌 Tiny | tscircuitbot | Automated package update to version 0.0.821 |
| [#2607](https://github.com/tscircuit/eval/pull/2607) | 🐌 Tiny | tscircuitbot | Automated package update to version 0.0.824 |
| [#2586](https://github.com/tscircuit/eval/pull/2586) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#2604](https://github.com/tscircuit/eval/pull/2604) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#2600](https://github.com/tscircuit/eval/pull/2600) | 🐌 Tiny | tscircuitbot | Updates the version of the tscircuitcore package from 0.0.1224 to 0.0.1225 in package.json |
| [#2588](https://github.com/tscircuit/eval/pull/2588) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#2573](https://github.com/tscircuit/eval/pull/2573) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#2582](https://github.com/tscircuit/eval/pull/2582) | 🐌 Tiny | tscircuitbot | Updates the version of the tscircuitcore package from 0.0.1219 to 0.0.1220 in package.json |
| [#2593](https://github.com/tscircuit/eval/pull/2593) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#2592](https://github.com/tscircuit/eval/pull/2592) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#2606](https://github.com/tscircuit/eval/pull/2606) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#2594](https://github.com/tscircuit/eval/pull/2594) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#2575](https://github.com/tscircuit/eval/pull/2575) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#2589](https://github.com/tscircuit/eval/pull/2589) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#2583](https://github.com/tscircuit/eval/pull/2583) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#2601](https://github.com/tscircuit/eval/pull/2601) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#2591](https://github.com/tscircuit/eval/pull/2591) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#2572](https://github.com/tscircuit/eval/pull/2572) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#2579](https://github.com/tscircuit/eval/pull/2579) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#2647](https://github.com/tscircuit/eval/pull/2647) | 🐌 Tiny | seveibar | Updates the kicad-to-circuit-json dependency to version 0.0.60 to support KiCad via parsing. |
| [#2635](https://github.com/tscircuit/eval/pull/2635) | 🐌 Tiny | imrishabh18 | Updates the kicad-to-circuit-json dependency version from 0.0.51 to 0.0.59 in package.json |
| [#2597](https://github.com/tscircuit/eval/pull/2597) | 🐌 Tiny | rushabhcodes | Updates the kicadts dependency from version 0.0.22 to 0.0.31 in package.json to bring in the latest features and fixes. |

</details>

### [tscircuit/runframe](https://github.com/tscircuit/runframe)

| PR # | Impact | Rating | Contributor | Description |
|------|--------|--------|-------------|-------------|
| [#3372](https://github.com/tscircuit/runframe/pull/3372) | 🐙 Minor | ⭐⭐ | imrishabh18 | Adds support for fetching KiCad file types (.kicad_pcb, .kicad_sch, .kicad_prl, .kicad_pro) in the RunFrame application. |

<details>
<summary>🐌 Tiny Contributions (50)</summary>

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#3388](https://github.com/tscircuit/runframe/pull/3388) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#3387](https://github.com/tscircuit/runframe/pull/3387) | 🐌 Tiny | tscircuitbot | Updates the circuit-json-to-kicad package version from 0.0.131 to 0.0.135 in package.json |
| [#3385](https://github.com/tscircuit/runframe/pull/3385) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#3384](https://github.com/tscircuit/runframe/pull/3384) | 🐌 Tiny | tscircuitbot | Updates the tscircuiteval package from version 0.0.835 to 0.0.836 in the package.json file. |
| [#3383](https://github.com/tscircuit/runframe/pull/3383) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#3382](https://github.com/tscircuit/runframe/pull/3382) | 🐌 Tiny | tscircuitbot | Updates the tscircuiteval package from version 0.0.834 to 0.0.835 |
| [#3380](https://github.com/tscircuit/runframe/pull/3380) | 🐌 Tiny | tscircuitbot | Updates the tscircuiteval package from version 0.0.833 to 0.0.834 in the package.json file. |
| [#3381](https://github.com/tscircuit/runframe/pull/3381) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#3379](https://github.com/tscircuit/runframe/pull/3379) | 🐌 Tiny | tscircuitbot | Updates the tscircuiteval package from version 0.0.832 to 0.0.833 in the package.json file. |
| [#3378](https://github.com/tscircuit/runframe/pull/3378) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#3377](https://github.com/tscircuit/runframe/pull/3377) | 🐌 Tiny | tscircuitbot | Updates the tscircuiteval package to version 0.0.832 in the package.json file. |
| [#3365](https://github.com/tscircuit/runframe/pull/3365) | 🐌 Tiny | tscircuitbot | Updates the package version from 0.0.1934 to 0.0.1935 in package.json |
| [#3374](https://github.com/tscircuit/runframe/pull/3374) | 🐌 Tiny | tscircuitbot | Updates the version of the tscircuiteval package and tscircuit package in package.json to their latest versions. |
| [#3368](https://github.com/tscircuit/runframe/pull/3368) | 🐌 Tiny | tscircuitbot | Updates the tscircuiteval package from version 0.0.827 to 0.0.828 in the package.json file. |
| [#3366](https://github.com/tscircuit/runframe/pull/3366) | 🐌 Tiny | tscircuitbot | Updates the tscircuiteval package from version 0.0.826 to 0.0.827 in the package.json file. |
| [#3364](https://github.com/tscircuit/runframe/pull/3364) | 🐌 Tiny | tscircuitbot | Updates the tscircuiteval package from version 0.0.825 to 0.0.826 |
| [#3363](https://github.com/tscircuit/runframe/pull/3363) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#3362](https://github.com/tscircuit/runframe/pull/3362) | 🐌 Tiny | tscircuitbot | Updates the tscircuiteval package from version 0.0.824 to 0.0.825 in the package.json file. |
| [#3375](https://github.com/tscircuit/runframe/pull/3375) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#3373](https://github.com/tscircuit/runframe/pull/3373) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#3369](https://github.com/tscircuit/runframe/pull/3369) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#3367](https://github.com/tscircuit/runframe/pull/3367) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#3348](https://github.com/tscircuit/runframe/pull/3348) | 🐌 Tiny | tscircuitbot | Updates the tscircuiteval package from version 0.0.818 to 0.0.819 in the package.json file. |
| [#3334](https://github.com/tscircuit/runframe/pull/3334) | 🐌 Tiny | tscircuitbot | Updates the tscircuiteval package from version 0.0.811 to 0.0.812 in the package.json file. |
| [#3342](https://github.com/tscircuit/runframe/pull/3342) | 🐌 Tiny | tscircuitbot | Updates the tscircuiteval package from version 0.0.815 to 0.0.816 in the package.json file. |
| [#3361](https://github.com/tscircuit/runframe/pull/3361) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#3360](https://github.com/tscircuit/runframe/pull/3360) | 🐌 Tiny | tscircuitbot | Updates the tscircuiteval package to version 0.0.824 in the package.json file. |
| [#3358](https://github.com/tscircuit/runframe/pull/3358) | 🐌 Tiny | tscircuitbot | Updates the circuit-json-to-gerber package from version 0.0.51 to 0.0.52 |
| [#3355](https://github.com/tscircuit/runframe/pull/3355) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#3354](https://github.com/tscircuit/runframe/pull/3354) | 🐌 Tiny | tscircuitbot | Updates the tscircuiteval package to version 0.0.822 in the package.json file. |
| [#3352](https://github.com/tscircuit/runframe/pull/3352) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#3351](https://github.com/tscircuit/runframe/pull/3351) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#3350](https://github.com/tscircuit/runframe/pull/3350) | 🐌 Tiny | tscircuitbot | Updates the tscircuiteval package from version 0.0.819 to 0.0.820 in the project dependencies. |
| [#3349](https://github.com/tscircuit/runframe/pull/3349) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#3347](https://github.com/tscircuit/runframe/pull/3347) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#3346](https://github.com/tscircuit/runframe/pull/3346) | 🐌 Tiny | tscircuitbot | Updates the tscircuiteval package from version 0.0.817 to 0.0.818 in the package.json file. |
| [#3344](https://github.com/tscircuit/runframe/pull/3344) | 🐌 Tiny | tscircuitbot | Updates the tscircuiteval package from version 0.0.816 to 0.0.817 |
| [#3341](https://github.com/tscircuit/runframe/pull/3341) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#3340](https://github.com/tscircuit/runframe/pull/3340) | 🐌 Tiny | tscircuitbot | Updates the tscircuiteval package from version 0.0.814 to 0.0.815 in the package.json file. |
| [#3338](https://github.com/tscircuit/runframe/pull/3338) | 🐌 Tiny | tscircuitbot | Updates the tscircuiteval package from version 0.0.813 to 0.0.814 in the package.json file. |
| [#3337](https://github.com/tscircuit/runframe/pull/3337) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#3336](https://github.com/tscircuit/runframe/pull/3336) | 🐌 Tiny | tscircuitbot | Updates the tscircuiteval package from version 0.0.812 to 0.0.813 in the package.json file. |
| [#3359](https://github.com/tscircuit/runframe/pull/3359) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#3357](https://github.com/tscircuit/runframe/pull/3357) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#3345](https://github.com/tscircuit/runframe/pull/3345) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#3343](https://github.com/tscircuit/runframe/pull/3343) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#3339](https://github.com/tscircuit/runframe/pull/3339) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#3335](https://github.com/tscircuit/runframe/pull/3335) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#3356](https://github.com/tscircuit/runframe/pull/3356) | 🐌 Tiny | tscircuitbot | Updates the tscircuiteval package from version 0.0.822 to 0.0.823 |
| [#3353](https://github.com/tscircuit/runframe/pull/3353) | 🐌 Tiny | tscircuitbot | Automated package update |

</details>

### [tscircuit/cli](https://github.com/tscircuit/cli)

| PR # | Impact | Rating | Contributor | Description |
|------|--------|--------|-------------|-------------|
| [#2987](https://github.com/tscircuit/cli/pull/2987) | 🐙 Minor | ⭐⭐ | seveibar | Adds support for loading static files for KiCad PCB, including .kicad_pcb, .kicad_pro, and .kicad_sch formats, through platform configuration. |

<details>
<summary>🐌 Tiny Contributions (41)</summary>

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#2993](https://github.com/tscircuit/cli/pull/2993) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#2992](https://github.com/tscircuit/cli/pull/2992) | 🐌 Tiny | tscircuitbot | Updates the tscircuitrunframe package from version 0.0.1943 to 0.0.1944 |
| [#2991](https://github.com/tscircuit/cli/pull/2991) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#2990](https://github.com/tscircuit/cli/pull/2990) | 🐌 Tiny | tscircuitbot | Updates the tscircuitrunframe package from version 0.0.1938 to 0.0.1943 |
| [#2989](https://github.com/tscircuit/cli/pull/2989) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#2988](https://github.com/tscircuit/cli/pull/2988) | 🐌 Tiny | tscircuitbot | Automated README update with latest CLI usage output. |
| [#2979](https://github.com/tscircuit/cli/pull/2979) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#2981](https://github.com/tscircuit/cli/pull/2981) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#2970](https://github.com/tscircuit/cli/pull/2970) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#2975](https://github.com/tscircuit/cli/pull/2975) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#2973](https://github.com/tscircuit/cli/pull/2973) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#2971](https://github.com/tscircuit/cli/pull/2971) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#2980](https://github.com/tscircuit/cli/pull/2980) | 🐌 Tiny | tscircuitbot | Updates the tscircuitrunframe package from version 0.0.1937 to 0.0.1938 |
| [#2978](https://github.com/tscircuit/cli/pull/2978) | 🐌 Tiny | tscircuitbot | Updates the tscircuitrunframe package from version 0.0.1936 to 0.0.1937 |
| [#2972](https://github.com/tscircuit/cli/pull/2972) | 🐌 Tiny | tscircuitbot | Updates the tscircuitrunframe package from version 0.0.1934 to 0.0.1935 |
| [#2974](https://github.com/tscircuit/cli/pull/2974) | 🐌 Tiny | tscircuitbot | Updates the tscircuitrunframe package to version 0.0.1936 in the package.json file. |
| [#2948](https://github.com/tscircuit/cli/pull/2948) | 🐌 Tiny | tscircuitbot | Updates the tscircuitrunframe package from version 0.0.1922 to 0.0.1923 |
| [#2956](https://github.com/tscircuit/cli/pull/2956) | 🐌 Tiny | tscircuitbot | Updates the tscircuitrunframe package to version 0.0.1926 in the package.json file |
| [#2964](https://github.com/tscircuit/cli/pull/2964) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#2968](https://github.com/tscircuit/cli/pull/2968) | 🐌 Tiny | tscircuitbot | Updates the tscircuitrunframe package from version 0.0.1931 to 0.0.1933 |
| [#2962](https://github.com/tscircuit/cli/pull/2962) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#2950](https://github.com/tscircuit/cli/pull/2950) | 🐌 Tiny | tscircuitbot | Updates the tscircuitrunframe package from version 0.0.1923 to 0.0.1924 |
| [#2958](https://github.com/tscircuit/cli/pull/2958) | 🐌 Tiny | tscircuitbot | Updates the tscircuitrunframe package from version 0.0.1926 to 0.0.1927 |
| [#2960](https://github.com/tscircuit/cli/pull/2960) | 🐌 Tiny | tscircuitbot | Updates the tscircuitrunframe package from version 0.0.1927 to 0.0.1928 |
| [#2966](https://github.com/tscircuit/cli/pull/2966) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#2967](https://github.com/tscircuit/cli/pull/2967) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#2945](https://github.com/tscircuit/cli/pull/2945) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#2947](https://github.com/tscircuit/cli/pull/2947) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#2961](https://github.com/tscircuit/cli/pull/2961) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#2963](https://github.com/tscircuit/cli/pull/2963) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#2949](https://github.com/tscircuit/cli/pull/2949) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#2969](https://github.com/tscircuit/cli/pull/2969) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#2957](https://github.com/tscircuit/cli/pull/2957) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#2955](https://github.com/tscircuit/cli/pull/2955) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#2943](https://github.com/tscircuit/cli/pull/2943) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#2951](https://github.com/tscircuit/cli/pull/2951) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#2965](https://github.com/tscircuit/cli/pull/2965) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#2954](https://github.com/tscircuit/cli/pull/2954) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#2946](https://github.com/tscircuit/cli/pull/2946) | 🐌 Tiny | tscircuitbot | Updates the tscircuitrunframe package to version 0.0.1922 |
| [#2944](https://github.com/tscircuit/cli/pull/2944) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#2942](https://github.com/tscircuit/cli/pull/2942) | 🐌 Tiny | tscircuitbot | Updates the tscircuitrunframe package to version 0.0.1920 in the package.json file |

</details>

### [tscircuit/svg.tscircuit.com](https://github.com/tscircuit/svg.tscircuit.com)


<details>
<summary>🐌 Tiny Contributions (5)</summary>

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#1438](https://github.com/tscircuit/svg.tscircuit.com/pull/1438) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1435](https://github.com/tscircuit/svg.tscircuit.com/pull/1435) | 🐌 Tiny | tscircuitbot | Updates the tscircuit package version from 0.0.1730 to 0.0.1732 in package.json |
| [#1440](https://github.com/tscircuit/svg.tscircuit.com/pull/1440) | 🐌 Tiny | tscircuitbot | Updates the tscircuit package version from 0.0.1736 to 0.0.1737 in package.json |
| [#1432](https://github.com/tscircuit/svg.tscircuit.com/pull/1432) | 🐌 Tiny | tscircuitbot | Updates the tscircuit package version from 0.0.1722 to 0.0.1730 in package.json |
| [#1439](https://github.com/tscircuit/svg.tscircuit.com/pull/1439) | 🐌 Tiny | MustafaMulla29 | Updates the circuit-json-to-gltf dependency version from 0.0.93 to 0.0.99 in package.json |

</details>

### [tscircuit/tscircuit-autorouter](https://github.com/tscircuit/tscircuit-autorouter)

| PR # | Impact | Rating | Contributor | Description |
|------|--------|--------|-------------|-------------|
| [#1119](https://github.com/tscircuit/tscircuit-autorouter/pull/1119) | 🐳 Major | ⭐⭐⭐ | seveibar | This pull request introduces the ability to retrieve the version of a simple route JSON that is reroutable, specifically for rerouting a region. It also introduces a dataset (srj15) that tests the reroutability of regions, enhancing the benchmarking capabilities of the autorouter. |
| [#1127](https://github.com/tscircuit/tscircuit-autorouter/pull/1127) | 🐳 Major | ⭐⭐⭐ | imrishabh18 | Motivation Capture and preserve an autorouting bug report snapshot for regression prevention by downloading its simple_route_json payload. Provide a quick way to visually inspect the failing SRJ in Cosmos via a debugger fixture. Enable automated regression detection by adding a snapshot test that runs the solver and records the final SVG output.  Description Added the downloaded bug report data to fixturesbug-reportsbugreport58-b69d72bugreport58-b69d72.json containing the simple_route_json. Added a Cosmos debugger fixture at fixturesbug-reportsbugreport58-b69d72bugreport58-b69d72.fixture.tsx that renders AutoroutingPipelineDebugger with the SRJ. Added a Bun snapshot regression test testsbugsbugreport58-b69d72.test.ts and the generated SVG snapshot testsbugs__snapshots__bugreport58-b69d72.snap.svg which runs the AutoroutingPipelineSolver and snapshots the visualization.  Testing Ran bun test testsbugsbugreport58-b69d72.test.ts and the test passed (1 pass, 0 fail). Ran bun run format:check (biome format .) and it reported no unformatted files. The new files were committed and are ready for review. |
| [#1113](https://github.com/tscircuit/tscircuit-autorouter/pull/1113) | 🐳 Major | ⭐⭐⭐ | imrishabh18 | Adds a solver for via and pad clearance when the minimum via edge to pad edge clearance is specified, enhancing the autorouting capabilities. |
| [#1136](https://github.com/tscircuit/tscircuit-autorouter/pull/1136) | 🐳 Major | ⭐⭐⭐ | ShiboSoftwareDev | Adds a new dataset for srj16 bga breakouts, including new fixtures and updates to the benchmark scenarios. |
| [#1125](https://github.com/tscircuit/tscircuit-autorouter/pull/1125) | 🐳 Major | ⭐⭐⭐ | Abse2001 | Preserves the original obstacle geometry and rotation when converting to circuit-json format, ensuring accurate representation of physical components in the design. |
| [#1123](https://github.com/tscircuit/tscircuit-autorouter/pull/1123) | 🐳 Major | ⭐⭐⭐ | Abse2001 | Preserves valid simplified path prefixes when a 45-degree path completion fails, ensuring connectivity by appending the original route slice. |
| [#1137](https://github.com/tscircuit/tscircuit-autorouter/pull/1137) | 🐳 Major | ⭐⭐⭐ | 0hmX | fix: include clipped boundary trace obstacles in reroute bounds regenerate dataset |

<details>
<summary>🐌 Tiny Contributions (16)</summary>

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#1148](https://github.com/tscircuit/tscircuit-autorouter/pull/1148) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1145](https://github.com/tscircuit/tscircuit-autorouter/pull/1145) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1143](https://github.com/tscircuit/tscircuit-autorouter/pull/1143) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1142](https://github.com/tscircuit/tscircuit-autorouter/pull/1142) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1133](https://github.com/tscircuit/tscircuit-autorouter/pull/1133) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1131](https://github.com/tscircuit/tscircuit-autorouter/pull/1131) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1128](https://github.com/tscircuit/tscircuit-autorouter/pull/1128) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1124](https://github.com/tscircuit/tscircuit-autorouter/pull/1124) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1120](https://github.com/tscircuit/tscircuit-autorouter/pull/1120) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1122](https://github.com/tscircuit/tscircuit-autorouter/pull/1122) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1141](https://github.com/tscircuit/tscircuit-autorouter/pull/1141) | 🐌 Tiny | seveibar | Adds support for additional datasets (srj11, srj12, srj13, srj14, srj15, srj16) in benchmark workflows for the main branch. |
| [#1140](https://github.com/tscircuit/tscircuit-autorouter/pull/1140) | 🐌 Tiny | seveibar | Changes the class name from CapacityMeshSolver to AutoroutingPipelineSolver in the README and usage examples. |
| [#1126](https://github.com/tscircuit/tscircuit-autorouter/pull/1126) | 🐌 Tiny | imrishabh18 | Updates the version of the high-density-repair03 dependency in the package.json file. |
| [#1146](https://github.com/tscircuit/tscircuit-autorouter/pull/1146) | 🐌 Tiny | 0hmX | subStack created with a hrefhttps:github.comgithubgh-stackGitHub Stacks CLIa  a hrefhttps:gh.iostacks-feedbackGive Feedback asub |
| [#1144](https://github.com/tscircuit/tscircuit-autorouter/pull/1144) | 🐌 Tiny | 0hmX | Updates the tscircuitmath-utils package version from 0.0.27 to 0.0.36 in the package.json file |
| [#1132](https://github.com/tscircuit/tscircuit-autorouter/pull/1132) | 🐌 Tiny | 0hmX | Refactors the import of SRJ datasets to use dynamic imports, improving maintainability and reducing code duplication. |

</details>

### [tscircuit/circuit-json-to-kicad](https://github.com/tscircuit/circuit-json-to-kicad)

| PR # | Impact | Rating | Contributor | Description |
|------|--------|--------|-------------|-------------|
| [#287](https://github.com/tscircuit/circuit-json-to-kicad/pull/287) | 🐙 Minor | ⭐⭐ | techmannih | Adds an opt-in pcbDrillHoleColor flag to the KiCad snapshot pipeline to ensure drill holes remain visible in KiCad 10 renders by remapping their colors before rasterizing PCB snapshots. |
| [#297](https://github.com/tscircuit/circuit-json-to-kicad/pull/297) | 🐙 Minor | ⭐⭐ | mohan-bee | Fixes the issue where pilloval plated holes lose their ccw_rotation during KiCad PCB export, ensuring correct orientation in the output. |

<details>
<summary>🐌 Tiny Contributions (2)</summary>

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#298](https://github.com/tscircuit/circuit-json-to-kicad/pull/298) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#294](https://github.com/tscircuit/circuit-json-to-kicad/pull/294) | 🐌 Tiny | mohan-bee | Reproduces a bug related to the rendering of a rotated chip with a pill-shaped plated hole in the PCB layout. |

</details>

### [tscircuit/rectdiff](https://github.com/tscircuit/rectdiff)

| PR # | Impact | Rating | Contributor | Description |
|------|--------|--------|-------------|-------------|
| [#128](https://github.com/tscircuit/rectdiff/pull/128) | 🐳 Major | ⭐⭐⭐ | 0hmX | Prepares the out-of-bounds fix by tightening how the solver understands board edges, ensuring shapes do not treat space outside the board as usable routing area. |
| [#129](https://github.com/tscircuit/rectdiff/pull/129) | 🐳 Major | ⭐⭐⭐ | 0hmX | Fixes out-of-bounds issue by ensuring the solver stops expanding at the board boundary and adds regression tests to maintain this behavior. |
| [#130](https://github.com/tscircuit/rectdiff/pull/130) | 🐳 Major | ⭐⭐⭐ | 0hmX | Clips obstacles that cross the board edge to ensure only the part inside the board is treated as real, while ignoring those fully outside the board. |

<details>
<summary>🐌 Tiny Contributions (6)</summary>

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#124](https://github.com/tscircuit/rectdiff/pull/124) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#131](https://github.com/tscircuit/rectdiff/pull/131) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#125](https://github.com/tscircuit/rectdiff/pull/125) | 🐌 Tiny | 0hmX | This pull request relocates existing files and adds new Arduino-related resources to the project. It introduces new pages for Arduino examples and moves existing examples to a more organized structure. |
| [#122](https://github.com/tscircuit/rectdiff/pull/122) | 🐌 Tiny | 0hmX | Adds a new fixture for testing out-of-bounds scenarios in the RectDiffPipeline, including a corresponding test case to validate the behavior of generated nodes outside defined bounds. |
| [#120](https://github.com/tscircuit/rectdiff/pull/120) | 🐌 Tiny | 0hmX | Updates the tscircuitmath-utils package to version 0.0.36 in the package.json file. |
| [#127](https://github.com/tscircuit/rectdiff/pull/127) | 🐌 Tiny | 0hmX | Adds a new page that implements a simplified out-of-bounds example using the RectDiffPipeline and SolverDebugger3d component. |

</details>

### [tscircuit/props](https://github.com/tscircuit/props)

| PR # | Impact | Rating | Contributor | Description |
|------|--------|--------|-------------|-------------|
| [#668](https://github.com/tscircuit/props/pull/668) | 🐳 Major | ⭐⭐⭐ | seveibar | Allows vias to be specified with an explicit layers array or omit explicit fromLayertoLayer to support more flexible layer declarations and maintain backwards compatibility. |
| [#660](https://github.com/tscircuit/props/pull/660) | 🐳 Major | ⭐⭐⭐ | seveibar | Allows autorouting phase to specify phase tolerances for routing parameters. |
| [#665](https://github.com/tscircuit/props/pull/665) | 🐙 Minor | ⭐⭐ | seveibar | Fixes the issue where resistance values were not being parsed as numbers, ensuring correct handling of resistance inputs in the system. |
| [#661](https://github.com/tscircuit/props/pull/661) | 🐙 Minor | ⭐⭐ | imrishabh18 | Adds a new autorouter preset named krt to the autorouter configuration, updating relevant types, schemas, and documentation accordingly. |
| [#662](https://github.com/tscircuit/props/pull/662) | 🐙 Minor | ⭐⭐ | techmannih2 | Maps supported resistor footprint shorthands like 01005, 0402, and 2512 to res01005, res0402, and res2512 in resistorProps, while preserving explicit footprints and adding tests for the new behavior. |
| [#657](https://github.com/tscircuit/props/pull/657) | 🐙 Minor | ⭐⭐ | ShiboSoftwareDev | Makes the direction property optional for port components, allowing for more flexible port definitions without requiring a direction to be specified. |
| [#659](https://github.com/tscircuit/props/pull/659) | 🐙 Minor | ⭐⭐ | ShiboSoftwareDev | Adds a shape property to the autorouting phase regions, allowing for rectangular region definitions in autorouting. |

<details>
<summary>🐌 Tiny Contributions (4)</summary>

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#666](https://github.com/tscircuit/props/pull/666) | 🐌 Tiny | seveibar | Simplifies the type checking for resistor footprint in the component properties to resolve build issues. |
| [#663](https://github.com/tscircuit/props/pull/663) | 🐌 Tiny | seveibar | Changes the footprintFileParserMap to utilize FileExtension for better type safety and clarity in file handling. |
| [#664](https://github.com/tscircuit/props/pull/664) | 🐌 Tiny | techmannih2 | Moves the resistor footprint mapping logic to the footprint field, allowing for optional transformation of the footprint property. |
| [#658](https://github.com/tscircuit/props/pull/658) | 🐌 Tiny | ShiboSoftwareDev | Makes the name property optional in portProps, allowing for ports to be defined without a name. |

</details>

### [tscircuit/kicadts](https://github.com/tscircuit/kicadts)

| PR # | Impact | Rating | Contributor | Description |
|------|--------|--------|-------------|-------------|
| [#40](https://github.com/tscircuit/kicadts/pull/40) | 🐳 Major | ⭐⭐⭐ | seveibar | Adds new properties and classes for zone attributes, connections, fills, and keepouts in the circuit design framework. |
| [#35](https://github.com/tscircuit/kicadts/pull/35) | 🐳 Major | ⭐⭐⭐ | seveibar | Adds support for parsing zones, rectangles, text boxes, and generator versions in KiCad schematic and symbol libraries, enhancing the parsing capabilities of the tscircuit library. |
| [#37](https://github.com/tscircuit/kicadts/pull/37) | 🐳 Major | ⭐⭐⭐ | techmannih | Add parser and serializer support needed for the pic_programmer KiCad demo board to round-trip successfully. |
| [#33](https://github.com/tscircuit/kicadts/pull/33) | 🐳 Major | ⭐⭐⭐ | techmannih | Add first-class KicadPcb collections for top-level arc, gr_arc, gr_circle, and gr_curve primitives, classifying those parsed children directly in KicadPcb instead of leaving them in otherChildren, and adding a focused parser test covering all four collections. |
| [#36](https://github.com/tscircuit/kicadts/pull/36) | 🐳 Major | ⭐⭐⭐ | mohan-bee | Fixes parser gaps that prevented a real KiCad PCB repro from parsing and reaching the conversion pipeline, addressing unsupported tokens and related syntax cases. |
| [#39](https://github.com/tscircuit/kicadts/pull/39) | 🐙 Minor | ⭐⭐ | techmannih | Adds parser and serializer support for the pic_programmer.kicad_sch schematic, enabling full parsing and serialization of previously unsupported symbol and property tokens. |

<details>
<summary>🐌 Tiny Contributions (1)</summary>

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#38](https://github.com/tscircuit/kicadts/pull/38) | 🐌 Tiny | mohan-bee | repro : https:github.comtscircuitkicadtsactionsruns25448691586job74659753661?pr38step:6:199 |

</details>

### [tscircuit/kicad-to-circuit-json](https://github.com/tscircuit/kicad-to-circuit-json)

| PR # | Impact | Rating | Contributor | Description |
|------|--------|--------|-------------|-------------|
| [#86](https://github.com/tscircuit/kicad-to-circuit-json/pull/86) | 🐳 Major | ⭐⭐⭐ | seveibar | Modifies the PCB trace conversion process to include vias as part of the pcb_trace elements, enhancing the representation of traces in the output JSON. |
| [#80](https://github.com/tscircuit/kicad-to-circuit-json/pull/80) | 🐳 Major | ⭐⭐⭐ | seveibar | Collects connected copper primitives into contiguous pcb_trace routes instead of creating separate traces for each segment. |
| [#85](https://github.com/tscircuit/kicad-to-circuit-json/pull/85) | 🐳 Major | ⭐⭐⭐ | imrishabh18 | The graph helps for the segments which are between two vias or junction, it can help to find the parent source ports which are required for connected_source_port_ids to inflate pcb_trace  After inflation it has all the traces img width1252 height1000 altimage srchttps:github.comuser-attachmentsassets6cf0810d-a7d6-4461-8491-1bc68d3cf5c0 |
| [#82](https://github.com/tscircuit/kicad-to-circuit-json/pull/82) | 🐳 Major | ⭐⭐⭐ | imrishabh18 | Before  No source_net and multiple pcb_trace using the same source_trace_id (while inflating in core it drops all the other and picks one)  type: source_trace, source_trace_id: source_trace_2, connected_source_port_ids:  pcb_component_1_port_3, pcb_component_1_port_28, ......, pcb_component_55_port_1, , connected_source_net_ids: , display_name: GND ,   After   type: source_net, source_net_id: source_net_5v, name: 5V ,  linked to the parent source_net   type: source_trace, source_trace_id: source_trace_5v_1, connected_source_port_ids: U1_pin4, C1_pin1, connected_source_net_ids: source_net_5v, display_name: 5V   Each pcb_trace linked to there own source_trace (helps in inflation in core, and doesnt drop pcb_traces) |
| [#81](https://github.com/tscircuit/kicad-to-circuit-json/pull/81) | 🐳 Major | ⭐⭐⭐ | imrishabh18 | This pull request modifies the way source port names and pin numbers are generated in the CollectSourceTracesStage class. It replaces the previous method of obtaining the reference from footprint properties with a new method that formats the port name as pinX where X is the pin number. Additionally, it introduces a new method to parse the pin number from the pad number string. |
| [#83](https://github.com/tscircuit/kicad-to-circuit-json/pull/83) | 🐳 Major | ⭐⭐⭐ | imrishabh18 | This pull request introduces a mechanism to ensure that connected source port IDs are properly tracked and associated with source traces in the PCB context. It modifies several files to add a mapping for source port IDs and updates the logic for creating source traces accordingly. |
| [#72](https://github.com/tscircuit/kicad-to-circuit-json/pull/72) | 🐳 Major | ⭐⭐⭐ | techmannih | What changed added Edge.Cuts gr_circle support to board outline collection and PCB centering added a focused gr_circle Edge.Cuts PCB fixture and snapshot coverage switched the outline helpers to use typed public kicadts collections directly bumped kicadts to 0.0.30  Why Top-level gr_circle board graphics were not being included in pcb_board.outline, and the temporary local fallbacks around graphic primitives were only needed until kicadts exposed typed top-level graphic collections.  Impact Boards that use gr_circle on Edge.Cuts now produce the expected outline, and this repo now depends on the public typed kicadts API instead of local private-field fallbacks.  Validation bun test testspcbgr-circle-edge-cuts-fragment-pcb.test.ts testspcbgr-curve-edge-cuts-fragment-pcb.test.ts bunx tsc --noEmit |
| [#71](https://github.com/tscircuit/kicad-to-circuit-json/pull/71) | 🐳 Major | ⭐⭐⭐ | techmannih | Preserves JLCPCB part number footprint properties in the circuit-json output for better integration with supplier data. |

<details>
<summary>🐌 Tiny Contributions (4)</summary>

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#79](https://github.com/tscircuit/kicad-to-circuit-json/pull/79) | 🐌 Tiny | imrishabh18 | This pull request adds a repro for the Arduino Uno, including a comprehensive set of components and ports in the circuit JSON format. |
| [#74](https://github.com/tscircuit/kicad-to-circuit-json/pull/74) | 🐌 Tiny | imrishabh18 | This pull request updates the kicad version to the latest 10.0. and updates the tscircuit package dependencies in the project. |
| [#77](https://github.com/tscircuit/kicad-to-circuit-json/pull/77) | 🐌 Tiny | techmannih | This pull request aligns the KiCad snapshot bounds with the Circuit JSON in parity tests and updates the kicadts dependency version from 0.0.31 to 0.0.32. The changes include modifications to the snapshot files to reflect the new structure of PCB components, replacing source ports with PCB components and adjusting their properties accordingly. |
| [#78](https://github.com/tscircuit/kicad-to-circuit-json/pull/78) | 🐌 Tiny | techmannih | Updates the kicadts dependency from version 0.0.32 to 0.0.33 and modifies schematic port representations in the test snapshots. |

</details>

### [tscircuit/docs](https://github.com/tscircuit/docs)

| PR # | Impact | Rating | Contributor | Description |
|------|--------|--------|-------------|-------------|
| [#551](https://github.com/tscircuit/docs/pull/551) | 🐙 Minor | ⭐⭐ | seveibar | Adds a more complex sine wave pattern to the autorouting phase example, enhancing the visual representation of PCB traces. |
| [#549](https://github.com/tscircuit/docs/pull/549) | 🐙 Minor | ⭐⭐ | seveibar | Adds a new autorouting phase that allows splitting PCB routing into ordered phases and rerouting specific regions after earlier routing passes. |
| [#541](https://github.com/tscircuit/docs/pull/541) | 🐙 Minor | ⭐⭐ | ShiboSoftwareDev | Adds documentation for rendering groups as schematic boxes, allowing for better organization of schematic designs by collapsing internal components while exposing external connections. |

<details>
<summary>🐌 Tiny Contributions (2)</summary>

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#552](https://github.com/tscircuit/docs/pull/552) | 🐌 Tiny | MustafaMulla29 | This pull request introduces a new STEP file for the SOIC-8 package, which is a common surface mount IC package. The file contains detailed geometric representations and metadata necessary for 3D modeling and design applications. |
| [#553](https://github.com/tscircuit/docs/pull/553) | 🐌 Tiny | MustafaMulla29 | Adds a local example of a CAD model using a STEP file for the SOIC8 footprint in the documentation. |

</details>

### [tscircuit/high-density-repair03](https://github.com/tscircuit/high-density-repair03)

| PR # | Impact | Rating | Contributor | Description |
|------|--------|--------|-------------|-------------|
| [#8](https://github.com/tscircuit/high-density-repair03/pull/8) | 🐳 Major | ⭐⭐⭐ | imrishabh18 | Adds a new solver for adjusting via to pad clearance in routing, enhancing the routing algorithms ability to manage clearance between vias and pads effectively. |
| [#9](https://github.com/tscircuit/high-density-repair03/pull/9) | 🐳 Major | ⭐⭐⭐ | imrishabh18 | Adds functionality to consider inferred vias in trace clearance relaxation, addressing DRC regressions caused by layer transitions with empty vias. |
| [#14](https://github.com/tscircuit/high-density-repair03/pull/14) | 🐳 Major | ⭐⭐⭐ | AnasSarkiz | Adds an interactive DRC14 Cosmos Debugger for enhanced solver regression analysis and repair quality. |
| [#11](https://github.com/tscircuit/high-density-repair03/pull/11) | 🐳 Major | ⭐⭐⭐ | AnasSarkiz | Adds concurrency to the DRC14 benchmark execution, allowing multiple samples to be processed simultaneously, improving performance significantly. |
| [#10](https://github.com/tscircuit/high-density-repair03/pull/10) | 🐳 Major | ⭐⭐⭐ | AnasSarkiz | Adds a benchmark harness to prevent silent DRC14 repair regressions by utilizing a pinned real dataset for testing. |
| [#16](https://github.com/tscircuit/high-density-repair03/pull/16) | 🐙 Minor | ⭐⭐ | AnasSarkiz | Moves DRC14 route visualization out of the Cosmos fixture and into GlobalDrcForceImproveSolver, so every debuggerexport path now shows repaired routes in real board context. |

<details>
<summary>🐌 Tiny Contributions (3)</summary>

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#15](https://github.com/tscircuit/high-density-repair03/pull/15) | 🐌 Tiny | Abse2001 | Adds Abse2001 as a code owner for the repository, ensuring they are notified of changes and can review contributions. |
| [#13](https://github.com/tscircuit/high-density-repair03/pull/13) | 🐌 Tiny | AnasSarkiz | Adds README documentation for the DRC14 benchmark and CI, detailing how to run benchmarks and CI workflows. |
| [#12](https://github.com/tscircuit/high-density-repair03/pull/12) | 🐌 Tiny | AnasSarkiz | Adds a continuous integration workflow for benchmarking DRC14 performance on pull requests, including automated comments and results comparison with the main branch. |

</details>

### [tscircuit/order-dialog](https://github.com/tscircuit/order-dialog)


<details>
<summary>🐌 Tiny Contributions (1)</summary>

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#1](https://github.com/tscircuit/order-dialog/pull/1) | 🐌 Tiny | imrishabh18 | Scoping CSS variables and styles to the order dialog component to prevent global CSS conflicts with the host page. |

</details>

### [tscircuit/autorouting-phase-demo](https://github.com/tscircuit/autorouting-phase-demo)


<details>
<summary>🐌 Tiny Contributions (1)</summary>

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#1](https://github.com/tscircuit/autorouting-phase-demo/pull/1) | 🐌 Tiny | imrishabh18 | Fixes import path for Arduino Uno circuit JSON and updates tscircuit dependency to the latest version. |

</details>

### [tscircuit/circuit-json-to-gerber](https://github.com/tscircuit/circuit-json-to-gerber)

| PR # | Impact | Rating | Contributor | Description |
|------|--------|--------|-------------|-------------|
| [#85](https://github.com/tscircuit/circuit-json-to-gerber/pull/85) | 🐳 Major | ⭐⭐⭐ | ShiboSoftwareDev | This pull request introduces support for 8 layers in the Gerber file generation process. It expands the existing functionality to accommodate additional inner layers, enhancing the capability of the circuit design tool. |

<details>
<summary>🐌 Tiny Contributions (1)</summary>

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#86](https://github.com/tscircuit/circuit-json-to-gerber/pull/86) | 🐌 Tiny | mohan-bee | Adds a repro for a rotated pill-shaped plated hole where the generated Gerber copper and paste layers disagree on orientation. |

</details>

### [tscircuit/circuit-json-to-tscircuit](https://github.com/tscircuit/circuit-json-to-tscircuit)

| PR # | Impact | Rating | Contributor | Description |
|------|--------|--------|-------------|-------------|
| [#32](https://github.com/tscircuit/circuit-json-to-tscircuit/pull/32) | 🐙 Minor | ⭐⭐ | techmannih | Adds support for converting pcb_courtyard_circle circuit-json elements into courtyardcircle  in generated tscircuit footprints. |
| [#29](https://github.com/tscircuit/circuit-json-to-tscircuit/pull/29) | 🐙 Minor | ⭐⭐ | techmannih | Adds rendering of fabrication note paths on the fabrication layer with customizable stroke width and color attributes. |
| [#28](https://github.com/tscircuit/circuit-json-to-tscircuit/pull/28) | 🐙 Minor | ⭐⭐ | techmannih | Adds support for rotation of plated holes with oval and pill shapes in the footprint generation process. |
| [#30](https://github.com/tscircuit/circuit-json-to-tscircuit/pull/30) | 🐙 Minor | ⭐⭐ | techmannih | Adds support for specifying top and bottom courtyard layers in the footprint generation process for PCB designs. |

### [tscircuit/schematic-trace-solver](https://github.com/tscircuit/schematic-trace-solver)

| PR # | Impact | Rating | Contributor | Description |
|------|--------|--------|-------------|-------------|
| [#286](https://github.com/tscircuit/schematic-trace-solver/pull/286) | 🐳 Major | ⭐⭐⭐ | Sang-it | Fixes trace label collision by merging overlapping labels to prevent routing issues in schematic traces. |

<details>
<summary>🐌 Tiny Contributions (3)</summary>

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#288](https://github.com/tscircuit/schematic-trace-solver/pull/288) | 🐌 Tiny | Sang-it | Adds a new example and test for the schematic trace solver to address label overlap issues. |
| [#289](https://github.com/tscircuit/schematic-trace-solver/pull/289) | 🐌 Tiny | Sang-it | Fixes trace collision detection in the AvailableNetOrientationSolver to prevent netlabel collisions during routing. |
| [#285](https://github.com/tscircuit/schematic-trace-solver/pull/285) | 🐌 Tiny | Sang-it | Adds a new example for the schematic trace solver with a specific input problem and corresponding test case. |

</details>

### [tscircuit/circuit-json-schematic-placement-analysis](https://github.com/tscircuit/circuit-json-schematic-placement-analysis)

| PR # | Impact | Rating | Contributor | Description |
|------|--------|--------|-------------|-------------|
| [#19](https://github.com/tscircuit/circuit-json-schematic-placement-analysis/pull/19) | 🐳 Major | ⭐⭐⭐ | Sang-it | Adds a DiodeResistorAlignmentSolver to analyze and report alignment issues between diodes and resistors in schematic placements. |
| [#18](https://github.com/tscircuit/circuit-json-schematic-placement-analysis/pull/18) | 🐳 Major | ⭐⭐⭐ | Sang-it | Adds a solver to detect and report collisions between inner labels in schematic boxes, prompting adjustments to schematic dimensions. |

### [tscircuit/checks](https://github.com/tscircuit/checks)

| PR # | Impact | Rating | Contributor | Description |
|------|--------|--------|-------------|-------------|
| [#143](https://github.com/tscircuit/checks/pull/143) | 🐳 Major | ⭐⭐⭐ | Abse2001 | Add polygon-aware DRC checks for rotated pads and plated holes |
| [#144](https://github.com/tscircuit/checks/pull/144) | 🐙 Minor | ⭐⭐ | mohan-bee | Fixes false DRC missing-connection errors for multi-pad PCB ports by allowing multiple pads to be associated with a single port and improving point-in-pad checks. |

### [tscircuit/sparkfun-boards](https://github.com/tscircuit/sparkfun-boards)

| PR # | Impact | Rating | Contributor | Description |
|------|--------|--------|-------------|-------------|
| [#281](https://github.com/tscircuit/sparkfun-boards/pull/281) | 🐳 Major | ⭐⭐⭐ | rushabhcodes | Adds a complete SparkFun Thermocouple Breakout - MAX31855K board to sparkfun-boards, including the main board definition, a reusable chip footprint, board documentation, and generated PCB, schematic, and 3D snapshots. |
| [#282](https://github.com/tscircuit/sparkfun-boards/pull/282) | 🐳 Major | ⭐⭐⭐ | shehaban | Adds a new SparkFun RJ11 Breakout board with associated schematic and footprint files. |

### [tscircuit/circuit-json-to-3d-png](https://github.com/tscircuit/circuit-json-to-3d-png)

| PR # | Impact | Rating | Contributor | Description |
|------|--------|--------|-------------|-------------|
| [#1](https://github.com/tscircuit/circuit-json-to-3d-png/pull/1) | 🐳 Major | ⭐⭐⭐ | rushabhcodes | Adds the initial public API for rendering circuit-json boards to 3D assets and PNG snapshots, with coverage for camera control and model URL normalization. |

### [tscircuit/circuit-json-to-gltf](https://github.com/tscircuit/circuit-json-to-gltf)

| PR # | Impact | Rating | Contributor | Description |
|------|--------|--------|-------------|-------------|
| [#160](https://github.com/tscircuit/circuit-json-to-gltf/pull/160) | 🐙 Minor | ⭐⭐ | MustafaMulla29 | Fixes rendering issue where empty footprinter models appear as fallback boxes in 3D renders unless debug boxes are requested |

<details>
<summary>🐌 Tiny Contributions (1)</summary>

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#159](https://github.com/tscircuit/circuit-json-to-gltf/pull/159) | 🐌 Tiny | MustafaMulla29 | Adds a new test for rendering testpoints in 3D and updates several dependencies in the project. |

</details>

### [tscircuit/high-density-repair01](https://github.com/tscircuit/high-density-repair01)

| PR # | Impact | Rating | Contributor | Description |
|------|--------|--------|-------------|-------------|
| [#10](https://github.com/tscircuit/high-density-repair01/pull/10) | 🐳 Major | ⭐⭐⭐ | 0hmX | Fixes a bug where a trace segment was incorrectly assigned to a larger node, resulting in a zero-length segment in the output SVG. |

<details>
<summary>🐌 Tiny Contributions (1)</summary>

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#9](https://github.com/tscircuit/high-density-repair01/pull/9) | 🐌 Tiny | 0hmX | add disconnected trace fixture added the zoomed in svg format |

</details>

## Changes by Contributor

### [tscircuitbot](https://github.com/tscircuitbot)


<details>
<summary>🐌 Tiny Contributions (216)</summary>

| PR # | Impact | Description |
|------|--------|-------------|
| [#3167](https://github.com/tscircuit/tscircuit/pull/3167) | 🐌 Tiny | Automated package update |
| [#3166](https://github.com/tscircuit/tscircuit/pull/3166) | 🐌 Tiny | Automated package update |
| [#3165](https://github.com/tscircuit/tscircuit/pull/3165) | 🐌 Tiny | Automated package update |
| [#3164](https://github.com/tscircuit/tscircuit/pull/3164) | 🐌 Tiny | Automated package update |
| [#3163](https://github.com/tscircuit/tscircuit/pull/3163) | 🐌 Tiny | Automated package update |
| [#3161](https://github.com/tscircuit/tscircuit/pull/3161) | 🐌 Tiny | Automated package update |
| [#3160](https://github.com/tscircuit/tscircuit/pull/3160) | 🐌 Tiny | Automated package update |
| [#3159](https://github.com/tscircuit/tscircuit/pull/3159) | 🐌 Tiny | Automated package update |
| [#3146](https://github.com/tscircuit/tscircuit/pull/3146) | 🐌 Tiny | Automated package update |
| [#3151](https://github.com/tscircuit/tscircuit/pull/3151) | 🐌 Tiny | Automated package update |
| [#3145](https://github.com/tscircuit/tscircuit/pull/3145) | 🐌 Tiny | Automated package update |
| [#3152](https://github.com/tscircuit/tscircuit/pull/3152) | 🐌 Tiny | Automated package update |
| [#3147](https://github.com/tscircuit/tscircuit/pull/3147) | 🐌 Tiny | Updates the package version from 0.0.1732 to 0.0.1733 in package.json |
| [#3150](https://github.com/tscircuit/tscircuit/pull/3150) | 🐌 Tiny | Automated package update |
| [#3157](https://github.com/tscircuit/tscircuit/pull/3157) | 🐌 Tiny | Automated package update |
| [#3154](https://github.com/tscircuit/tscircuit/pull/3154) | 🐌 Tiny | Automated package update |
| [#3143](https://github.com/tscircuit/tscircuit/pull/3143) | 🐌 Tiny | Updates the package version from 0.0.1730 to 0.0.1731 in package.json |
| [#3141](https://github.com/tscircuit/tscircuit/pull/3141) | 🐌 Tiny | Automated package update |
| [#580](https://github.com/tscircuit/circuit-json/pull/580) | 🐌 Tiny | Automated package update |
| [#2283](https://github.com/tscircuit/core/pull/2283) | 🐌 Tiny | Updates the tscircuitchecks package from version 0.0.126 to 0.0.127 |
| [#2246](https://github.com/tscircuit/core/pull/2246) | 🐌 Tiny | Updates the version of the tscircuitchecks package from 0.0.125 to 0.0.126 in package.json |
| [#3395](https://github.com/tscircuit/tscircuit.com/pull/3395) | 🐌 Tiny | Automated package update |
| [#3394](https://github.com/tscircuit/tscircuit.com/pull/3394) | 🐌 Tiny | Automated package update |
| [#3393](https://github.com/tscircuit/tscircuit.com/pull/3393) | 🐌 Tiny | Automated package update |
| [#3392](https://github.com/tscircuit/tscircuit.com/pull/3392) | 🐌 Tiny | Automated package update |
| [#3390](https://github.com/tscircuit/tscircuit.com/pull/3390) | 🐌 Tiny | Updates the tscircuiteval package to version 0.0.834 in package.json |
| [#3391](https://github.com/tscircuit/tscircuit.com/pull/3391) | 🐌 Tiny | Automated package update |
| [#3389](https://github.com/tscircuit/tscircuit.com/pull/3389) | 🐌 Tiny | Updates the tscircuiteval package to version 0.0.833 in the package.json file. |
| [#3388](https://github.com/tscircuit/tscircuit.com/pull/3388) | 🐌 Tiny | Updates the tscircuitrunframe package to version 0.0.1940 |
| [#3387](https://github.com/tscircuit/tscircuit.com/pull/3387) | 🐌 Tiny | Updates the tscircuiteval package to version 0.0.832 in the package.json file |
| [#3377](https://github.com/tscircuit/tscircuit.com/pull/3377) | 🐌 Tiny | Automated package update for tscircuiteval from version 0.0.826 to 0.0.827 |
| [#3373](https://github.com/tscircuit/tscircuit.com/pull/3373) | 🐌 Tiny | Updates the tscircuiteval package from version 0.0.824 to 0.0.825 in the package.json file. |
| [#3386](https://github.com/tscircuit/tscircuit.com/pull/3386) | 🐌 Tiny | Updates the tscircuitrunframe package to version 0.0.1939 |
| [#3385](https://github.com/tscircuit/tscircuit.com/pull/3385) | 🐌 Tiny | Updates the tscircuiteval package to version 0.0.831 in the package.json file. |
| [#3383](https://github.com/tscircuit/tscircuit.com/pull/3383) | 🐌 Tiny | Automated package update |
| [#3382](https://github.com/tscircuit/tscircuit.com/pull/3382) | 🐌 Tiny | Updates the tscircuiteval package from version 0.0.829 to 0.0.830 |
| [#3381](https://github.com/tscircuit/tscircuit.com/pull/3381) | 🐌 Tiny | Updates the tscircuiteval package to version 0.0.829 in the package.json file. |
| [#3380](https://github.com/tscircuit/tscircuit.com/pull/3380) | 🐌 Tiny | Automated package update |
| [#3379](https://github.com/tscircuit/tscircuit.com/pull/3379) | 🐌 Tiny | Updates the tscircuiteval package from version 0.0.827 to 0.0.828 |
| [#3378](https://github.com/tscircuit/tscircuit.com/pull/3378) | 🐌 Tiny | Updates the tscircuitrunframe package from version 0.0.1935 to 0.0.1936 |
| [#3375](https://github.com/tscircuit/tscircuit.com/pull/3375) | 🐌 Tiny | Automated package update |
| [#3376](https://github.com/tscircuit/tscircuit.com/pull/3376) | 🐌 Tiny | Automated package update |
| [#3354](https://github.com/tscircuit/tscircuit.com/pull/3354) | 🐌 Tiny | Updates the tscircuiteval package to version 0.0.816 |
| [#3372](https://github.com/tscircuit/tscircuit.com/pull/3372) | 🐌 Tiny | Automated package update |
| [#3357](https://github.com/tscircuit/tscircuit.com/pull/3357) | 🐌 Tiny | Updates the tscircuitrunframe package from version 0.0.1924 to 0.0.1925 |
| [#3350](https://github.com/tscircuit/tscircuit.com/pull/3350) | 🐌 Tiny | Updates the tscircuiteval package from version 0.0.813 to 0.0.814 |
| [#3371](https://github.com/tscircuit/tscircuit.com/pull/3371) | 🐌 Tiny | Updates the tscircuiteval package to version 0.0.824 in the package.json file. |
| [#3367](https://github.com/tscircuit/tscircuit.com/pull/3367) | 🐌 Tiny | Updates the tscircuiteval package from version 0.0.821 to 0.0.822 |
| [#3365](https://github.com/tscircuit/tscircuit.com/pull/3365) | 🐌 Tiny | Updates the tscircuiteval package from version 0.0.820 to 0.0.821 |
| [#3359](https://github.com/tscircuit/tscircuit.com/pull/3359) | 🐌 Tiny | Updates the tscircuitrunframe package from version 0.0.1925 to 0.0.1926 |
| [#3356](https://github.com/tscircuit/tscircuit.com/pull/3356) | 🐌 Tiny | Updates the tscircuiteval package from version 0.0.816 to 0.0.817 |
| [#3355](https://github.com/tscircuit/tscircuit.com/pull/3355) | 🐌 Tiny | Updates the tscircuitrunframe package from version 0.0.1923 to 0.0.1924 |
| [#3352](https://github.com/tscircuit/tscircuit.com/pull/3352) | 🐌 Tiny | Updates the tscircuiteval package from version 0.0.814 to 0.0.815 |
| [#3351](https://github.com/tscircuit/tscircuit.com/pull/3351) | 🐌 Tiny | Updates the tscircuitrunframe package from version 0.0.1921 to 0.0.1922 |
| [#3348](https://github.com/tscircuit/tscircuit.com/pull/3348) | 🐌 Tiny | Updates the tscircuiteval package from version 0.0.811 to 0.0.813 in the package.json file. |
| [#3370](https://github.com/tscircuit/tscircuit.com/pull/3370) | 🐌 Tiny | Updates the tscircuitrunframe package from version 0.0.1930 to 0.0.1931 |
| [#3369](https://github.com/tscircuit/tscircuit.com/pull/3369) | 🐌 Tiny | Updates the tscircuiteval package from version 0.0.822 to 0.0.823 |
| [#3368](https://github.com/tscircuit/tscircuit.com/pull/3368) | 🐌 Tiny | Updates the tscircuitrunframe package from version 0.0.1929 to 0.0.1930 |
| [#3366](https://github.com/tscircuit/tscircuit.com/pull/3366) | 🐌 Tiny | Automated package update |
| [#3362](https://github.com/tscircuit/tscircuit.com/pull/3362) | 🐌 Tiny | Updates the tscircuiteval package from version 0.0.819 to 0.0.820 |
| [#3360](https://github.com/tscircuit/tscircuit.com/pull/3360) | 🐌 Tiny | Updates the tscircuiteval package from version 0.0.818 to 0.0.819 |
| [#3349](https://github.com/tscircuit/tscircuit.com/pull/3349) | 🐌 Tiny | Updates the tscircuitrunframe package to version 0.0.1921 |
| [#3347](https://github.com/tscircuit/tscircuit.com/pull/3347) | 🐌 Tiny | Updates the tscircuitrunframe package from version 0.0.1919 to 0.0.1920 |
| [#3363](https://github.com/tscircuit/tscircuit.com/pull/3363) | 🐌 Tiny | Updates the tscircuitrunframe package from version 0.0.1926 to 0.0.1928 |
| [#3358](https://github.com/tscircuit/tscircuit.com/pull/3358) | 🐌 Tiny | Updates the tscircuiteval package from version 0.0.817 to 0.0.818 |
| [#3353](https://github.com/tscircuit/tscircuit.com/pull/3353) | 🐌 Tiny | Updates the tscircuitrunframe package from version 0.0.1922 to 0.0.1923 |
| [#2648](https://github.com/tscircuit/eval/pull/2648) | 🐌 Tiny | Updates the package version from 0.0.835 to 0.0.836 in package.json |
| [#2646](https://github.com/tscircuit/eval/pull/2646) | 🐌 Tiny | Automated package update |
| [#2636](https://github.com/tscircuit/eval/pull/2636) | 🐌 Tiny | Automated package update |
| [#2629](https://github.com/tscircuit/eval/pull/2629) | 🐌 Tiny | Automated package update |
| [#2630](https://github.com/tscircuit/eval/pull/2630) | 🐌 Tiny | Automated package update |
| [#2626](https://github.com/tscircuit/eval/pull/2626) | 🐌 Tiny | Updates package dependencies to their latest versions in package.json |
| [#2627](https://github.com/tscircuit/eval/pull/2627) | 🐌 Tiny | Automated package update |
| [#2624](https://github.com/tscircuit/eval/pull/2624) | 🐌 Tiny | Automated package update |
| [#2613](https://github.com/tscircuit/eval/pull/2613) | 🐌 Tiny | Automated package update |
| [#2610](https://github.com/tscircuit/eval/pull/2610) | 🐌 Tiny | Automated package update |
| [#2620](https://github.com/tscircuit/eval/pull/2620) | 🐌 Tiny | Automated package update |
| [#2612](https://github.com/tscircuit/eval/pull/2612) | 🐌 Tiny | Updates the version of the tscircuitcore package from 0.0.1228 to 0.0.1229 in package.json |
| [#2615](https://github.com/tscircuit/eval/pull/2615) | 🐌 Tiny | Updates the version of the tscircuitcore package from 0.0.1229 to 0.0.1230 in package.json |
| [#2618](https://github.com/tscircuit/eval/pull/2618) | 🐌 Tiny | Automated package update |
| [#2623](https://github.com/tscircuit/eval/pull/2623) | 🐌 Tiny | Automated package update |
| [#2609](https://github.com/tscircuit/eval/pull/2609) | 🐌 Tiny | Automated package update |
| [#2619](https://github.com/tscircuit/eval/pull/2619) | 🐌 Tiny | Automated package update to version 0.0.828 |
| [#2621](https://github.com/tscircuit/eval/pull/2621) | 🐌 Tiny | Automated package update |
| [#2616](https://github.com/tscircuit/eval/pull/2616) | 🐌 Tiny | Automated package update |
| [#2580](https://github.com/tscircuit/eval/pull/2580) | 🐌 Tiny | Automated package update |
| [#2603](https://github.com/tscircuit/eval/pull/2603) | 🐌 Tiny | Updates the version of the tscircuitcore package from 0.0.1225 to 0.0.1226 in package.json |
| [#2577](https://github.com/tscircuit/eval/pull/2577) | 🐌 Tiny | Automated package update |
| [#2585](https://github.com/tscircuit/eval/pull/2585) | 🐌 Tiny | Automated package update |
| [#2598](https://github.com/tscircuit/eval/pull/2598) | 🐌 Tiny | Automated package update to version 0.0.821 |
| [#2607](https://github.com/tscircuit/eval/pull/2607) | 🐌 Tiny | Automated package update to version 0.0.824 |
| [#2586](https://github.com/tscircuit/eval/pull/2586) | 🐌 Tiny | Automated package update |
| [#2604](https://github.com/tscircuit/eval/pull/2604) | 🐌 Tiny | Automated package update |
| [#2600](https://github.com/tscircuit/eval/pull/2600) | 🐌 Tiny | Updates the version of the tscircuitcore package from 0.0.1224 to 0.0.1225 in package.json |
| [#2588](https://github.com/tscircuit/eval/pull/2588) | 🐌 Tiny | Automated package update |
| [#2573](https://github.com/tscircuit/eval/pull/2573) | 🐌 Tiny | Automated package update |
| [#2582](https://github.com/tscircuit/eval/pull/2582) | 🐌 Tiny | Updates the version of the tscircuitcore package from 0.0.1219 to 0.0.1220 in package.json |
| [#2593](https://github.com/tscircuit/eval/pull/2593) | 🐌 Tiny | Automated package update |
| [#2592](https://github.com/tscircuit/eval/pull/2592) | 🐌 Tiny | Automated package update |
| [#2606](https://github.com/tscircuit/eval/pull/2606) | 🐌 Tiny | Automated package update |
| [#2594](https://github.com/tscircuit/eval/pull/2594) | 🐌 Tiny | Automated package update |
| [#2575](https://github.com/tscircuit/eval/pull/2575) | 🐌 Tiny | Automated package update |
| [#2589](https://github.com/tscircuit/eval/pull/2589) | 🐌 Tiny | Automated package update |
| [#2583](https://github.com/tscircuit/eval/pull/2583) | 🐌 Tiny | Automated package update |
| [#2601](https://github.com/tscircuit/eval/pull/2601) | 🐌 Tiny | Automated package update |
| [#2591](https://github.com/tscircuit/eval/pull/2591) | 🐌 Tiny | Automated package update |
| [#2572](https://github.com/tscircuit/eval/pull/2572) | 🐌 Tiny | Automated package update |
| [#2579](https://github.com/tscircuit/eval/pull/2579) | 🐌 Tiny | Automated package update |
| [#3388](https://github.com/tscircuit/runframe/pull/3388) | 🐌 Tiny | Automated package update |
| [#3387](https://github.com/tscircuit/runframe/pull/3387) | 🐌 Tiny | Updates the circuit-json-to-kicad package version from 0.0.131 to 0.0.135 in package.json |
| [#3385](https://github.com/tscircuit/runframe/pull/3385) | 🐌 Tiny | Automated package update |
| [#3384](https://github.com/tscircuit/runframe/pull/3384) | 🐌 Tiny | Updates the tscircuiteval package from version 0.0.835 to 0.0.836 in the package.json file. |
| [#3383](https://github.com/tscircuit/runframe/pull/3383) | 🐌 Tiny | Automated package update |
| [#3382](https://github.com/tscircuit/runframe/pull/3382) | 🐌 Tiny | Updates the tscircuiteval package from version 0.0.834 to 0.0.835 |
| [#3380](https://github.com/tscircuit/runframe/pull/3380) | 🐌 Tiny | Updates the tscircuiteval package from version 0.0.833 to 0.0.834 in the package.json file. |
| [#3381](https://github.com/tscircuit/runframe/pull/3381) | 🐌 Tiny | Automated package update |
| [#3379](https://github.com/tscircuit/runframe/pull/3379) | 🐌 Tiny | Updates the tscircuiteval package from version 0.0.832 to 0.0.833 in the package.json file. |
| [#3378](https://github.com/tscircuit/runframe/pull/3378) | 🐌 Tiny | Automated package update |
| [#3377](https://github.com/tscircuit/runframe/pull/3377) | 🐌 Tiny | Updates the tscircuiteval package to version 0.0.832 in the package.json file. |
| [#3365](https://github.com/tscircuit/runframe/pull/3365) | 🐌 Tiny | Updates the package version from 0.0.1934 to 0.0.1935 in package.json |
| [#3374](https://github.com/tscircuit/runframe/pull/3374) | 🐌 Tiny | Updates the version of the tscircuiteval package and tscircuit package in package.json to their latest versions. |
| [#3368](https://github.com/tscircuit/runframe/pull/3368) | 🐌 Tiny | Updates the tscircuiteval package from version 0.0.827 to 0.0.828 in the package.json file. |
| [#3366](https://github.com/tscircuit/runframe/pull/3366) | 🐌 Tiny | Updates the tscircuiteval package from version 0.0.826 to 0.0.827 in the package.json file. |
| [#3364](https://github.com/tscircuit/runframe/pull/3364) | 🐌 Tiny | Updates the tscircuiteval package from version 0.0.825 to 0.0.826 |
| [#3363](https://github.com/tscircuit/runframe/pull/3363) | 🐌 Tiny | Automated package update |
| [#3362](https://github.com/tscircuit/runframe/pull/3362) | 🐌 Tiny | Updates the tscircuiteval package from version 0.0.824 to 0.0.825 in the package.json file. |
| [#3375](https://github.com/tscircuit/runframe/pull/3375) | 🐌 Tiny | Automated package update |
| [#3373](https://github.com/tscircuit/runframe/pull/3373) | 🐌 Tiny | Automated package update |
| [#3369](https://github.com/tscircuit/runframe/pull/3369) | 🐌 Tiny | Automated package update |
| [#3367](https://github.com/tscircuit/runframe/pull/3367) | 🐌 Tiny | Automated package update |
| [#3348](https://github.com/tscircuit/runframe/pull/3348) | 🐌 Tiny | Updates the tscircuiteval package from version 0.0.818 to 0.0.819 in the package.json file. |
| [#3334](https://github.com/tscircuit/runframe/pull/3334) | 🐌 Tiny | Updates the tscircuiteval package from version 0.0.811 to 0.0.812 in the package.json file. |
| [#3342](https://github.com/tscircuit/runframe/pull/3342) | 🐌 Tiny | Updates the tscircuiteval package from version 0.0.815 to 0.0.816 in the package.json file. |
| [#3361](https://github.com/tscircuit/runframe/pull/3361) | 🐌 Tiny | Automated package update |
| [#3360](https://github.com/tscircuit/runframe/pull/3360) | 🐌 Tiny | Updates the tscircuiteval package to version 0.0.824 in the package.json file. |
| [#3358](https://github.com/tscircuit/runframe/pull/3358) | 🐌 Tiny | Updates the circuit-json-to-gerber package from version 0.0.51 to 0.0.52 |
| [#3355](https://github.com/tscircuit/runframe/pull/3355) | 🐌 Tiny | Automated package update |
| [#3354](https://github.com/tscircuit/runframe/pull/3354) | 🐌 Tiny | Updates the tscircuiteval package to version 0.0.822 in the package.json file. |
| [#3352](https://github.com/tscircuit/runframe/pull/3352) | 🐌 Tiny | Automated package update |
| [#3351](https://github.com/tscircuit/runframe/pull/3351) | 🐌 Tiny | Automated package update |
| [#3350](https://github.com/tscircuit/runframe/pull/3350) | 🐌 Tiny | Updates the tscircuiteval package from version 0.0.819 to 0.0.820 in the project dependencies. |
| [#3349](https://github.com/tscircuit/runframe/pull/3349) | 🐌 Tiny | Automated package update |
| [#3347](https://github.com/tscircuit/runframe/pull/3347) | 🐌 Tiny | Automated package update |
| [#3346](https://github.com/tscircuit/runframe/pull/3346) | 🐌 Tiny | Updates the tscircuiteval package from version 0.0.817 to 0.0.818 in the package.json file. |
| [#3344](https://github.com/tscircuit/runframe/pull/3344) | 🐌 Tiny | Updates the tscircuiteval package from version 0.0.816 to 0.0.817 |
| [#3341](https://github.com/tscircuit/runframe/pull/3341) | 🐌 Tiny | Automated package update |
| [#3340](https://github.com/tscircuit/runframe/pull/3340) | 🐌 Tiny | Updates the tscircuiteval package from version 0.0.814 to 0.0.815 in the package.json file. |
| [#3338](https://github.com/tscircuit/runframe/pull/3338) | 🐌 Tiny | Updates the tscircuiteval package from version 0.0.813 to 0.0.814 in the package.json file. |
| [#3337](https://github.com/tscircuit/runframe/pull/3337) | 🐌 Tiny | Automated package update |
| [#3336](https://github.com/tscircuit/runframe/pull/3336) | 🐌 Tiny | Updates the tscircuiteval package from version 0.0.812 to 0.0.813 in the package.json file. |
| [#3359](https://github.com/tscircuit/runframe/pull/3359) | 🐌 Tiny | Automated package update |
| [#3357](https://github.com/tscircuit/runframe/pull/3357) | 🐌 Tiny | Automated package update |
| [#3345](https://github.com/tscircuit/runframe/pull/3345) | 🐌 Tiny | Automated package update |
| [#3343](https://github.com/tscircuit/runframe/pull/3343) | 🐌 Tiny | Automated package update |
| [#3339](https://github.com/tscircuit/runframe/pull/3339) | 🐌 Tiny | Automated package update |
| [#3335](https://github.com/tscircuit/runframe/pull/3335) | 🐌 Tiny | Automated package update |
| [#3356](https://github.com/tscircuit/runframe/pull/3356) | 🐌 Tiny | Updates the tscircuiteval package from version 0.0.822 to 0.0.823 |
| [#3353](https://github.com/tscircuit/runframe/pull/3353) | 🐌 Tiny | Automated package update |
| [#2993](https://github.com/tscircuit/cli/pull/2993) | 🐌 Tiny | Automated package update |
| [#2992](https://github.com/tscircuit/cli/pull/2992) | 🐌 Tiny | Updates the tscircuitrunframe package from version 0.0.1943 to 0.0.1944 |
| [#2991](https://github.com/tscircuit/cli/pull/2991) | 🐌 Tiny | Automated package update |
| [#2990](https://github.com/tscircuit/cli/pull/2990) | 🐌 Tiny | Updates the tscircuitrunframe package from version 0.0.1938 to 0.0.1943 |
| [#2989](https://github.com/tscircuit/cli/pull/2989) | 🐌 Tiny | Automated package update |
| [#2988](https://github.com/tscircuit/cli/pull/2988) | 🐌 Tiny | Automated README update with latest CLI usage output. |
| [#2979](https://github.com/tscircuit/cli/pull/2979) | 🐌 Tiny | Automated package update |
| [#2981](https://github.com/tscircuit/cli/pull/2981) | 🐌 Tiny | Automated package update |
| [#2970](https://github.com/tscircuit/cli/pull/2970) | 🐌 Tiny | Automated package update |
| [#2975](https://github.com/tscircuit/cli/pull/2975) | 🐌 Tiny | Automated package update |
| [#2973](https://github.com/tscircuit/cli/pull/2973) | 🐌 Tiny | Automated package update |
| [#2971](https://github.com/tscircuit/cli/pull/2971) | 🐌 Tiny | Automated package update |
| [#2980](https://github.com/tscircuit/cli/pull/2980) | 🐌 Tiny | Updates the tscircuitrunframe package from version 0.0.1937 to 0.0.1938 |
| [#2978](https://github.com/tscircuit/cli/pull/2978) | 🐌 Tiny | Updates the tscircuitrunframe package from version 0.0.1936 to 0.0.1937 |
| [#2972](https://github.com/tscircuit/cli/pull/2972) | 🐌 Tiny | Updates the tscircuitrunframe package from version 0.0.1934 to 0.0.1935 |
| [#2974](https://github.com/tscircuit/cli/pull/2974) | 🐌 Tiny | Updates the tscircuitrunframe package to version 0.0.1936 in the package.json file. |
| [#2948](https://github.com/tscircuit/cli/pull/2948) | 🐌 Tiny | Updates the tscircuitrunframe package from version 0.0.1922 to 0.0.1923 |
| [#2956](https://github.com/tscircuit/cli/pull/2956) | 🐌 Tiny | Updates the tscircuitrunframe package to version 0.0.1926 in the package.json file |
| [#2964](https://github.com/tscircuit/cli/pull/2964) | 🐌 Tiny | Automated package update |
| [#2968](https://github.com/tscircuit/cli/pull/2968) | 🐌 Tiny | Updates the tscircuitrunframe package from version 0.0.1931 to 0.0.1933 |
| [#2962](https://github.com/tscircuit/cli/pull/2962) | 🐌 Tiny | Automated package update |
| [#2950](https://github.com/tscircuit/cli/pull/2950) | 🐌 Tiny | Updates the tscircuitrunframe package from version 0.0.1923 to 0.0.1924 |
| [#2958](https://github.com/tscircuit/cli/pull/2958) | 🐌 Tiny | Updates the tscircuitrunframe package from version 0.0.1926 to 0.0.1927 |
| [#2960](https://github.com/tscircuit/cli/pull/2960) | 🐌 Tiny | Updates the tscircuitrunframe package from version 0.0.1927 to 0.0.1928 |
| [#2966](https://github.com/tscircuit/cli/pull/2966) | 🐌 Tiny | Automated package update |
| [#2967](https://github.com/tscircuit/cli/pull/2967) | 🐌 Tiny | Automated package update |
| [#2945](https://github.com/tscircuit/cli/pull/2945) | 🐌 Tiny | Automated package update |
| [#2947](https://github.com/tscircuit/cli/pull/2947) | 🐌 Tiny | Automated package update |
| [#2961](https://github.com/tscircuit/cli/pull/2961) | 🐌 Tiny | Automated package update |
| [#2963](https://github.com/tscircuit/cli/pull/2963) | 🐌 Tiny | Automated package update |
| [#2949](https://github.com/tscircuit/cli/pull/2949) | 🐌 Tiny | Automated package update |
| [#2969](https://github.com/tscircuit/cli/pull/2969) | 🐌 Tiny | Automated package update |
| [#2957](https://github.com/tscircuit/cli/pull/2957) | 🐌 Tiny | Automated package update |
| [#2955](https://github.com/tscircuit/cli/pull/2955) | 🐌 Tiny | Automated package update |
| [#2943](https://github.com/tscircuit/cli/pull/2943) | 🐌 Tiny | Automated package update |
| [#2951](https://github.com/tscircuit/cli/pull/2951) | 🐌 Tiny | Automated package update |
| [#2965](https://github.com/tscircuit/cli/pull/2965) | 🐌 Tiny | Automated package update |
| [#2954](https://github.com/tscircuit/cli/pull/2954) | 🐌 Tiny | Automated package update |
| [#2946](https://github.com/tscircuit/cli/pull/2946) | 🐌 Tiny | Updates the tscircuitrunframe package to version 0.0.1922 |
| [#2944](https://github.com/tscircuit/cli/pull/2944) | 🐌 Tiny | Automated package update |
| [#2942](https://github.com/tscircuit/cli/pull/2942) | 🐌 Tiny | Updates the tscircuitrunframe package to version 0.0.1920 in the package.json file |
| [#1438](https://github.com/tscircuit/svg.tscircuit.com/pull/1438) | 🐌 Tiny | Automated package update |
| [#1435](https://github.com/tscircuit/svg.tscircuit.com/pull/1435) | 🐌 Tiny | Updates the tscircuit package version from 0.0.1730 to 0.0.1732 in package.json |
| [#1440](https://github.com/tscircuit/svg.tscircuit.com/pull/1440) | 🐌 Tiny | Updates the tscircuit package version from 0.0.1736 to 0.0.1737 in package.json |
| [#1432](https://github.com/tscircuit/svg.tscircuit.com/pull/1432) | 🐌 Tiny | Updates the tscircuit package version from 0.0.1722 to 0.0.1730 in package.json |
| [#1148](https://github.com/tscircuit/tscircuit-autorouter/pull/1148) | 🐌 Tiny | Automated package update |
| [#1145](https://github.com/tscircuit/tscircuit-autorouter/pull/1145) | 🐌 Tiny | Automated package update |
| [#1143](https://github.com/tscircuit/tscircuit-autorouter/pull/1143) | 🐌 Tiny | Automated package update |
| [#1142](https://github.com/tscircuit/tscircuit-autorouter/pull/1142) | 🐌 Tiny | Automated package update |
| [#1133](https://github.com/tscircuit/tscircuit-autorouter/pull/1133) | 🐌 Tiny | Automated package update |
| [#1131](https://github.com/tscircuit/tscircuit-autorouter/pull/1131) | 🐌 Tiny | Automated package update |
| [#1128](https://github.com/tscircuit/tscircuit-autorouter/pull/1128) | 🐌 Tiny | Automated package update |
| [#1124](https://github.com/tscircuit/tscircuit-autorouter/pull/1124) | 🐌 Tiny | Automated package update |
| [#1120](https://github.com/tscircuit/tscircuit-autorouter/pull/1120) | 🐌 Tiny | Automated package update |
| [#1122](https://github.com/tscircuit/tscircuit-autorouter/pull/1122) | 🐌 Tiny | Automated package update |
| [#298](https://github.com/tscircuit/circuit-json-to-kicad/pull/298) | 🐌 Tiny | Automated package update |
| [#124](https://github.com/tscircuit/rectdiff/pull/124) | 🐌 Tiny | Automated package update |
| [#131](https://github.com/tscircuit/rectdiff/pull/131) | 🐌 Tiny | Automated package update |

</details>

### [seveibar](https://github.com/seveibar)

| PRs # | Impact | Rating | Description |
|------|--------|--------|-------------|
| [#668](https://github.com/tscircuit/props/pull/668) | 🐳 Major | ⭐⭐⭐ | Allows vias to be specified with an explicit layers array or omit explicit fromLayertoLayer to support more flexible layer declarations and maintain backwards compatibility. |
| [#660](https://github.com/tscircuit/props/pull/660) | 🐳 Major | ⭐⭐⭐ | Allows autorouting phase to specify phase tolerances for routing parameters. |
| [#2278](https://github.com/tscircuit/core/pull/2278) | 🐳 Major | ⭐⭐⭐ | Adds support for PCB vias in the inflation process of circuit elements, allowing for better integration and rendering of vias in PCB designs. |
| [#2279](https://github.com/tscircuit/core/pull/2279) | 🐳 Major | ⭐⭐⭐ | Refactors PcbVia component to clarify prop names and improve integration with ViaProps, removing netAssigned and adjusting prop handling for better clarity. |
| [#2267](https://github.com/tscircuit/core/pull/2267) | 🐳 Major | ⭐⭐⭐ | Adds support for providing Design Rule Check (DRC) parameters during the autorouting phase, enhancing routing accuracy and compliance with design specifications. |
| [#1119](https://github.com/tscircuit/tscircuit-autorouter/pull/1119) | 🐳 Major | ⭐⭐⭐ | This pull request introduces the ability to retrieve the version of a simple route JSON that is reroutable, specifically for rerouting a region. It also introduces a dataset (srj15) that tests the reroutability of regions, enhancing the benchmarking capabilities of the autorouter. |
| [#40](https://github.com/tscircuit/kicadts/pull/40) | 🐳 Major | ⭐⭐⭐ | Adds new properties and classes for zone attributes, connections, fills, and keepouts in the circuit design framework. |
| [#35](https://github.com/tscircuit/kicadts/pull/35) | 🐳 Major | ⭐⭐⭐ | Adds support for parsing zones, rectangles, text boxes, and generator versions in KiCad schematic and symbol libraries, enhancing the parsing capabilities of the tscircuit library. |
| [#86](https://github.com/tscircuit/kicad-to-circuit-json/pull/86) | 🐳 Major | ⭐⭐⭐ | Modifies the PCB trace conversion process to include vias as part of the pcb_trace elements, enhancing the representation of traces in the output JSON. |
| [#80](https://github.com/tscircuit/kicad-to-circuit-json/pull/80) | 🐳 Major | ⭐⭐⭐ | Collects connected copper primitives into contiguous pcb_trace routes instead of creating separate traces for each segment. |
| [#579](https://github.com/tscircuit/circuit-json/pull/579) | 🐙 Minor | ⭐⭐ | Adds a new route type through_pad for PCB trace routing, allowing for more detailed routing options in PCB designs. |
| [#665](https://github.com/tscircuit/props/pull/665) | 🐙 Minor | ⭐⭐ | Fixes the issue where resistance values were not being parsed as numbers, ensuring correct handling of resistance inputs in the system. |
| [#2238](https://github.com/tscircuit/core/pull/2238) | 🐙 Minor | ⭐⭐ | Fixes the issue where the subcircuit anchor alignment does not function correctly in circuit JSON, ensuring proper positioning of autosized subcircuits. |
| [#2235](https://github.com/tscircuit/core/pull/2235) | 🐙 Minor | ⭐⭐ | Adds tests for rendering subcircuits with specific anchor alignments in circuit JSON. |
| [#2645](https://github.com/tscircuit/eval/pull/2645) | 🐙 Minor | ⭐⭐ | Implements a static file loader map for handling various static file types in the importLocalFile function. |
| [#2987](https://github.com/tscircuit/cli/pull/2987) | 🐙 Minor | ⭐⭐ | Adds support for loading static files for KiCad PCB, including .kicad_pcb, .kicad_pro, and .kicad_sch formats, through platform configuration. |
| [#551](https://github.com/tscircuit/docs/pull/551) | 🐙 Minor | ⭐⭐ | Adds a more complex sine wave pattern to the autorouting phase example, enhancing the visual representation of PCB traces. |
| [#549](https://github.com/tscircuit/docs/pull/549) | 🐙 Minor | ⭐⭐ | Adds a new autorouting phase that allows splitting PCB routing into ordered phases and rerouting specific regions after earlier routing passes. |

<details>
<summary>🐌 Tiny Contributions (7)</summary>

| PR # | Impact | Description |
|------|--------|-------------|
| [#3162](https://github.com/tscircuit/tscircuit/pull/3162) | 🐌 Tiny | Adds TypeScript definitions for KiCad PCB files, enabling better type support for handling KiCad PCB data in the project. |
| [#3144](https://github.com/tscircuit/tscircuit/pull/3144) | 🐌 Tiny | Adds a new dependency for calculating cell boundaries in the circuit design process |
| [#666](https://github.com/tscircuit/props/pull/666) | 🐌 Tiny | Simplifies the type checking for resistor footprint in the component properties to resolve build issues. |
| [#663](https://github.com/tscircuit/props/pull/663) | 🐌 Tiny | Changes the footprintFileParserMap to utilize FileExtension for better type safety and clarity in file handling. |
| [#2647](https://github.com/tscircuit/eval/pull/2647) | 🐌 Tiny | Updates the kicad-to-circuit-json dependency to version 0.0.60 to support KiCad via parsing. |
| [#1141](https://github.com/tscircuit/tscircuit-autorouter/pull/1141) | 🐌 Tiny | Adds support for additional datasets (srj11, srj12, srj13, srj14, srj15, srj16) in benchmark workflows for the main branch. |
| [#1140](https://github.com/tscircuit/tscircuit-autorouter/pull/1140) | 🐌 Tiny | Changes the class name from CapacityMeshSolver to AutoroutingPipelineSolver in the README and usage examples. |

</details>

### [imrishabh18](https://github.com/imrishabh18)

| PRs # | Impact | Rating | Description |
|------|--------|--------|-------------|
| [#2256](https://github.com/tscircuit/core/pull/2256) | 🐳 Major | ⭐⭐⭐ | Changes the autorouting configuration to utilize the platform-specific autorouter as the algorithm function for autorouting. |
| [#2259](https://github.com/tscircuit/core/pull/2259) | 🐳 Major | ⭐⭐⭐ | Fixes issue where no traces are outputted during rerouting when phaseIndex is not specified |
| [#2260](https://github.com/tscircuit/core/pull/2260) | 🐳 Major | ⭐⭐⭐ | Adds a default autorouting phase when reroute is used without a specified phaseIndex, ensuring proper routing behavior in the autorouting process. |
| [#2574](https://github.com/tscircuit/eval/pull/2574) | 🐳 Major | ⭐⭐⭐ | This pull request introduces the ability to import .kicad_pcb files as Board components in the application. It includes a new converter for transforming KiCad PCB files into a circuit JSON format, which can then be utilized within the application. Additionally, it adds error handling for unsupported static asset URLs and updates the package dependencies for improved functionality. |
| [#1127](https://github.com/tscircuit/tscircuit-autorouter/pull/1127) | 🐳 Major | ⭐⭐⭐ | Motivation Capture and preserve an autorouting bug report snapshot for regression prevention by downloading its simple_route_json payload. Provide a quick way to visually inspect the failing SRJ in Cosmos via a debugger fixture. Enable automated regression detection by adding a snapshot test that runs the solver and records the final SVG output.  Description Added the downloaded bug report data to fixturesbug-reportsbugreport58-b69d72bugreport58-b69d72.json containing the simple_route_json. Added a Cosmos debugger fixture at fixturesbug-reportsbugreport58-b69d72bugreport58-b69d72.fixture.tsx that renders AutoroutingPipelineDebugger with the SRJ. Added a Bun snapshot regression test testsbugsbugreport58-b69d72.test.ts and the generated SVG snapshot testsbugs__snapshots__bugreport58-b69d72.snap.svg which runs the AutoroutingPipelineSolver and snapshots the visualization.  Testing Ran bun test testsbugsbugreport58-b69d72.test.ts and the test passed (1 pass, 0 fail). Ran bun run format:check (biome format .) and it reported no unformatted files. The new files were committed and are ready for review. |
| [#1113](https://github.com/tscircuit/tscircuit-autorouter/pull/1113) | 🐳 Major | ⭐⭐⭐ | Adds a solver for via and pad clearance when the minimum via edge to pad edge clearance is specified, enhancing the autorouting capabilities. |
| [#85](https://github.com/tscircuit/kicad-to-circuit-json/pull/85) | 🐳 Major | ⭐⭐⭐ | The graph helps for the segments which are between two vias or junction, it can help to find the parent source ports which are required for connected_source_port_ids to inflate pcb_trace  After inflation it has all the traces img width1252 height1000 altimage srchttps:github.comuser-attachmentsassets6cf0810d-a7d6-4461-8491-1bc68d3cf5c0 |
| [#82](https://github.com/tscircuit/kicad-to-circuit-json/pull/82) | 🐳 Major | ⭐⭐⭐ | Before  No source_net and multiple pcb_trace using the same source_trace_id (while inflating in core it drops all the other and picks one)  type: source_trace, source_trace_id: source_trace_2, connected_source_port_ids:  pcb_component_1_port_3, pcb_component_1_port_28, ......, pcb_component_55_port_1, , connected_source_net_ids: , display_name: GND ,   After   type: source_net, source_net_id: source_net_5v, name: 5V ,  linked to the parent source_net   type: source_trace, source_trace_id: source_trace_5v_1, connected_source_port_ids: U1_pin4, C1_pin1, connected_source_net_ids: source_net_5v, display_name: 5V   Each pcb_trace linked to there own source_trace (helps in inflation in core, and doesnt drop pcb_traces) |
| [#81](https://github.com/tscircuit/kicad-to-circuit-json/pull/81) | 🐳 Major | ⭐⭐⭐ | This pull request modifies the way source port names and pin numbers are generated in the CollectSourceTracesStage class. It replaces the previous method of obtaining the reference from footprint properties with a new method that formats the port name as pinX where X is the pin number. Additionally, it introduces a new method to parse the pin number from the pad number string. |
| [#83](https://github.com/tscircuit/kicad-to-circuit-json/pull/83) | 🐳 Major | ⭐⭐⭐ | This pull request introduces a mechanism to ensure that connected source port IDs are properly tracked and associated with source traces in the PCB context. It modifies several files to add a mapping for source port IDs and updates the logic for creating source traces accordingly. |
| [#8](https://github.com/tscircuit/high-density-repair03/pull/8) | 🐳 Major | ⭐⭐⭐ | Adds a new solver for adjusting via to pad clearance in routing, enhancing the routing algorithms ability to manage clearance between vias and pads effectively. |
| [#9](https://github.com/tscircuit/high-density-repair03/pull/9) | 🐳 Major | ⭐⭐⭐ | Adds functionality to consider inferred vias in trace clearance relaxation, addressing DRC regressions caused by layer transitions with empty vias. |
| [#661](https://github.com/tscircuit/props/pull/661) | 🐙 Minor | ⭐⭐ | Adds a new autorouter preset named krt to the autorouter configuration, updating relevant types, schemas, and documentation accordingly. |
| [#2262](https://github.com/tscircuit/core/pull/2262) | 🐙 Minor | ⭐⭐ | Preserves imported pcb_trace elements during circuitJson inflation, ensuring logical connections are maintained when no routed pcb_trace is present. |
| [#2245](https://github.com/tscircuit/core/pull/2245) | 🐙 Minor | ⭐⭐ | Adds a method to filter out unrouted elements from circuit JSON data. |
| [#2250](https://github.com/tscircuit/core/pull/2250) | 🐙 Minor | ⭐⭐ | Fixes incorrect assignment of minViaEdgeToPadEdgeClearance in autorouting calculations, ensuring proper clearance values are used. |
| [#2251](https://github.com/tscircuit/core/pull/2251) | 🐙 Minor | ⭐⭐ | Fixes the issue where inflated footprints were not persisted to their original layer in the PCB design. |
| [#2595](https://github.com/tscircuit/eval/pull/2595) | 🐙 Minor | ⭐⭐ | Exports boardContentCircuitJson from the kicad_pcb file import, filtering out PCB board elements from the circuit JSON. |
| [#2596](https://github.com/tscircuit/eval/pull/2596) | 🐙 Minor | ⭐⭐ | Adds support for krt as an autorouter option in the platform configuration, allowing users to utilize the krt wasm autorouter similarly to the existing auto-cloud option. |
| [#2576](https://github.com/tscircuit/eval/pull/2576) | 🐙 Minor | ⭐⭐ | Adds a test to verify that multiple subcircuits can be imported and rendered correctly using circuitJson. |
| [#3372](https://github.com/tscircuit/runframe/pull/3372) | 🐙 Minor | ⭐⭐ | Adds support for fetching KiCad file types (.kicad_pcb, .kicad_sch, .kicad_prl, .kicad_pro) in the RunFrame application. |

<details>
<summary>🐌 Tiny Contributions (18)</summary>

| PR # | Impact | Description |
|------|--------|-------------|
| [#3158](https://github.com/tscircuit/tscircuit/pull/3158) | 🐌 Tiny | Updates dependencies for core, eval, runframe, and kicad-to-circuit-json packages to their latest versions. |
| [#3148](https://github.com/tscircuit/tscircuit/pull/3148) | 🐌 Tiny | Adds tscircuitkrt-wasm as a new dependency in the package.json file. |
| [#3156](https://github.com/tscircuit/tscircuit/pull/3156) | 🐌 Tiny | Updates the dependencies for core and eval to their latest versions in package.json |
| [#3153](https://github.com/tscircuit/tscircuit/pull/3153) | 🐌 Tiny | Updates the kicadts dependency from version 0.0.23 to 0.0.33 in package.json |
| [#3140](https://github.com/tscircuit/tscircuit/pull/3140) | 🐌 Tiny | Updates dependencies for tscircuit, core, eval, and cli to their latest versions. |
| [#3142](https://github.com/tscircuit/tscircuit/pull/3142) | 🐌 Tiny | Updates the kicad-to-circuit-json dependency from 0.0.32 to 0.0.51 in package.json and refreshes bun.lock to reflect the new version. |
| [#2275](https://github.com/tscircuit/core/pull/2275) | 🐌 Tiny | This pull request integrates the kicad-to-circuit-json converter into the testing framework to enhance inflation testing capabilities. It also removes an outdated test asset that is no longer needed due to the new converters functionality. |
| [#2276](https://github.com/tscircuit/core/pull/2276) | 🐌 Tiny | Updates the kicad-to-circuit-json dependency to version 0.0.59 in order to ensure compatibility with trace inflation functionality. |
| [#2269](https://github.com/tscircuit/core/pull/2269) | 🐌 Tiny | This pull request adds a new test case for the Arduino Uno circuit, providing a JSON representation of the circuit components and their connections. This will help in verifying the functionality of the circuit design and ensure that the components are correctly represented in the system. |
| [#2252](https://github.com/tscircuit/core/pull/2252) | 🐌 Tiny | Upgrade to the latest published tscircuitcapacity-autorouter to pick up fixes and improvements. |
| [#2241](https://github.com/tscircuit/core/pull/2241) | 🐌 Tiny | Updates the local autorouter dependency to the latest version (0.0.500) for bug fixes and improved routing behavior. |
| [#3364](https://github.com/tscircuit/tscircuit.com/pull/3364) | 🐌 Tiny | Updates the tscircuitorder-dialog dependency to a specific commit to ensure intended upstream changes are pulled into the workspace. |
| [#2635](https://github.com/tscircuit/eval/pull/2635) | 🐌 Tiny | Updates the kicad-to-circuit-json dependency version from 0.0.51 to 0.0.59 in package.json |
| [#1126](https://github.com/tscircuit/tscircuit-autorouter/pull/1126) | 🐌 Tiny | Updates the version of the high-density-repair03 dependency in the package.json file. |
| [#79](https://github.com/tscircuit/kicad-to-circuit-json/pull/79) | 🐌 Tiny | This pull request adds a repro for the Arduino Uno, including a comprehensive set of components and ports in the circuit JSON format. |
| [#74](https://github.com/tscircuit/kicad-to-circuit-json/pull/74) | 🐌 Tiny | This pull request updates the kicad version to the latest 10.0. and updates the tscircuit package dependencies in the project. |
| [#1](https://github.com/tscircuit/order-dialog/pull/1) | 🐌 Tiny | Scoping CSS variables and styles to the order dialog component to prevent global CSS conflicts with the host page. |
| [#1](https://github.com/tscircuit/autorouting-phase-demo/pull/1) | 🐌 Tiny | Fixes import path for Arduino Uno circuit JSON and updates tscircuit dependency to the latest version. |

</details>

### [techmannih2](https://github.com/techmannih2)

| PRs # | Impact | Rating | Description |
|------|--------|--------|-------------|
| [#662](https://github.com/tscircuit/props/pull/662) | 🐙 Minor | ⭐⭐ | Maps supported resistor footprint shorthands like 01005, 0402, and 2512 to res01005, res0402, and res2512 in resistorProps, while preserving explicit footprints and adding tests for the new behavior. |

<details>
<summary>🐌 Tiny Contributions (1)</summary>

| PR # | Impact | Description |
|------|--------|-------------|
| [#664](https://github.com/tscircuit/props/pull/664) | 🐌 Tiny | Moves the resistor footprint mapping logic to the footprint field, allowing for optional transformation of the footprint property. |

</details>

### [ShiboSoftwareDev](https://github.com/ShiboSoftwareDev)

| PRs # | Impact | Rating | Description |
|------|--------|--------|-------------|
| [#2236](https://github.com/tscircuit/core/pull/2236) | 🐳 Major | ⭐⭐⭐ | Adds a self-closing autoroutingphase  primitive for configuring autorouter behavior per existing routingPhaseIndex phase. Routing phase plans now attach matching phase autorouter configs, local autorouting uses those configs per phase, and net-derived trace phases reuse the existing net phase lookup. |
| [#85](https://github.com/tscircuit/circuit-json-to-gerber/pull/85) | 🐳 Major | ⭐⭐⭐ | This pull request introduces support for 8 layers in the Gerber file generation process. It expands the existing functionality to accommodate additional inner layers, enhancing the capability of the circuit design tool. |
| [#1136](https://github.com/tscircuit/tscircuit-autorouter/pull/1136) | 🐳 Major | ⭐⭐⭐ | Adds a new dataset for srj16 bga breakouts, including new fixtures and updates to the benchmark scenarios. |
| [#657](https://github.com/tscircuit/props/pull/657) | 🐙 Minor | ⭐⭐ | Makes the direction property optional for port components, allowing for more flexible port definitions without requiring a direction to be specified. |
| [#659](https://github.com/tscircuit/props/pull/659) | 🐙 Minor | ⭐⭐ | Adds a shape property to the autorouting phase regions, allowing for rectangular region definitions in autorouting. |
| [#2237](https://github.com/tscircuit/core/pull/2237) | 🐙 Minor | ⭐⭐ | Fixes handling of named child ports in schPinArrangement for group schematic boxes, centralizing pin extraction and improving pin count calculations. |
| [#2239](https://github.com/tscircuit/core/pull/2239) | 🐙 Minor | ⭐⭐ | Adds direction-based schematic box placement for group ports when no explicit schPinArrangement is provided, while preserving schPinArrangement as the override. |
| [#2249](https://github.com/tscircuit/core/pull/2249) | 🐙 Minor | ⭐⭐ | Adds reroute and region handling to autoroutingphase, allowing a later phase to rip previously routed traces inside a rectangular region, autoroute only the clipped regional connections, and reconnect the result back into the full route set. |
| [#541](https://github.com/tscircuit/docs/pull/541) | 🐙 Minor | ⭐⭐ | Adds documentation for rendering groups as schematic boxes, allowing for better organization of schematic designs by collapsing internal components while exposing external connections. |

<details>
<summary>🐌 Tiny Contributions (1)</summary>

| PR # | Impact | Description |
|------|--------|-------------|
| [#658](https://github.com/tscircuit/props/pull/658) | 🐌 Tiny | Makes the name property optional in portProps, allowing for ports to be defined without a name. |

</details>

### [techmannih](https://github.com/techmannih)

| PRs # | Impact | Rating | Description |
|------|--------|--------|-------------|
| [#37](https://github.com/tscircuit/kicadts/pull/37) | 🐳 Major | ⭐⭐⭐ | Add parser and serializer support needed for the pic_programmer KiCad demo board to round-trip successfully. |
| [#33](https://github.com/tscircuit/kicadts/pull/33) | 🐳 Major | ⭐⭐⭐ | Add first-class KicadPcb collections for top-level arc, gr_arc, gr_circle, and gr_curve primitives, classifying those parsed children directly in KicadPcb instead of leaving them in otherChildren, and adding a focused parser test covering all four collections. |
| [#72](https://github.com/tscircuit/kicad-to-circuit-json/pull/72) | 🐳 Major | ⭐⭐⭐ | What changed added Edge.Cuts gr_circle support to board outline collection and PCB centering added a focused gr_circle Edge.Cuts PCB fixture and snapshot coverage switched the outline helpers to use typed public kicadts collections directly bumped kicadts to 0.0.30  Why Top-level gr_circle board graphics were not being included in pcb_board.outline, and the temporary local fallbacks around graphic primitives were only needed until kicadts exposed typed top-level graphic collections.  Impact Boards that use gr_circle on Edge.Cuts now produce the expected outline, and this repo now depends on the public typed kicadts API instead of local private-field fallbacks.  Validation bun test testspcbgr-circle-edge-cuts-fragment-pcb.test.ts testspcbgr-curve-edge-cuts-fragment-pcb.test.ts bunx tsc --noEmit |
| [#71](https://github.com/tscircuit/kicad-to-circuit-json/pull/71) | 🐳 Major | ⭐⭐⭐ | Preserves JLCPCB part number footprint properties in the circuit-json output for better integration with supplier data. |
| [#2263](https://github.com/tscircuit/core/pull/2263) | 🐙 Minor | ⭐⭐ | Changes the way the footprint is retrieved in NormalComponent by using a parsed footprint string instead of directly from props, enhancing the components flexibility in handling footprints. |
| [#32](https://github.com/tscircuit/circuit-json-to-tscircuit/pull/32) | 🐙 Minor | ⭐⭐ | Adds support for converting pcb_courtyard_circle circuit-json elements into courtyardcircle  in generated tscircuit footprints. |
| [#29](https://github.com/tscircuit/circuit-json-to-tscircuit/pull/29) | 🐙 Minor | ⭐⭐ | Adds rendering of fabrication note paths on the fabrication layer with customizable stroke width and color attributes. |
| [#28](https://github.com/tscircuit/circuit-json-to-tscircuit/pull/28) | 🐙 Minor | ⭐⭐ | Adds support for rotation of plated holes with oval and pill shapes in the footprint generation process. |
| [#30](https://github.com/tscircuit/circuit-json-to-tscircuit/pull/30) | 🐙 Minor | ⭐⭐ | Adds support for specifying top and bottom courtyard layers in the footprint generation process for PCB designs. |
| [#39](https://github.com/tscircuit/kicadts/pull/39) | 🐙 Minor | ⭐⭐ | Adds parser and serializer support for the pic_programmer.kicad_sch schematic, enabling full parsing and serialization of previously unsupported symbol and property tokens. |
| [#287](https://github.com/tscircuit/circuit-json-to-kicad/pull/287) | 🐙 Minor | ⭐⭐ | Adds an opt-in pcbDrillHoleColor flag to the KiCad snapshot pipeline to ensure drill holes remain visible in KiCad 10 renders by remapping their colors before rasterizing PCB snapshots. |

<details>
<summary>🐌 Tiny Contributions (2)</summary>

| PR # | Impact | Description |
|------|--------|-------------|
| [#77](https://github.com/tscircuit/kicad-to-circuit-json/pull/77) | 🐌 Tiny | This pull request aligns the KiCad snapshot bounds with the Circuit JSON in parity tests and updates the kicadts dependency version from 0.0.31 to 0.0.32. The changes include modifications to the snapshot files to reflect the new structure of PCB components, replacing source ports with PCB components and adjusting their properties accordingly. |
| [#78](https://github.com/tscircuit/kicad-to-circuit-json/pull/78) | 🐌 Tiny | Updates the kicadts dependency from version 0.0.32 to 0.0.33 and modifies schematic port representations in the test snapshots. |

</details>

### [Sang-it](https://github.com/Sang-it)

| PRs # | Impact | Rating | Description |
|------|--------|--------|-------------|
| [#286](https://github.com/tscircuit/schematic-trace-solver/pull/286) | 🐳 Major | ⭐⭐⭐ | Fixes trace label collision by merging overlapping labels to prevent routing issues in schematic traces. |
| [#19](https://github.com/tscircuit/circuit-json-schematic-placement-analysis/pull/19) | 🐳 Major | ⭐⭐⭐ | Adds a DiodeResistorAlignmentSolver to analyze and report alignment issues between diodes and resistors in schematic placements. |
| [#18](https://github.com/tscircuit/circuit-json-schematic-placement-analysis/pull/18) | 🐳 Major | ⭐⭐⭐ | Adds a solver to detect and report collisions between inner labels in schematic boxes, prompting adjustments to schematic dimensions. |
| [#2254](https://github.com/tscircuit/core/pull/2254) | 🐙 Minor | ⭐⭐ | Fixes the rendering phase dependencies for the SourceAddConnectivityMapKey in the Renderable component. |
| [#2253](https://github.com/tscircuit/core/pull/2253) | 🐙 Minor | ⭐⭐ | Adds tests for USB-C connector scenarios including connection and trace length validation. |
| [#2255](https://github.com/tscircuit/core/pull/2255) | 🐙 Minor | ⭐⭐ | Fixes net label placement logic to prevent redundant labels and ensure correct rendering of schematic traces. |
| [#2234](https://github.com/tscircuit/core/pull/2234) | 🐙 Minor | ⭐⭐ | Add support for schematic sections and include a missing package for enhanced schematic organization. |

<details>
<summary>🐌 Tiny Contributions (3)</summary>

| PR # | Impact | Description |
|------|--------|-------------|
| [#288](https://github.com/tscircuit/schematic-trace-solver/pull/288) | 🐌 Tiny | Adds a new example and test for the schematic trace solver to address label overlap issues. |
| [#289](https://github.com/tscircuit/schematic-trace-solver/pull/289) | 🐌 Tiny | Fixes trace collision detection in the AvailableNetOrientationSolver to prevent netlabel collisions during routing. |
| [#285](https://github.com/tscircuit/schematic-trace-solver/pull/285) | 🐌 Tiny | Adds a new example for the schematic trace solver with a specific input problem and corresponding test case. |

</details>

### [mohan-bee](https://github.com/mohan-bee)

| PRs # | Impact | Rating | Description |
|------|--------|--------|-------------|
| [#36](https://github.com/tscircuit/kicadts/pull/36) | 🐳 Major | ⭐⭐⭐ | Fixes parser gaps that prevented a real KiCad PCB repro from parsing and reaching the conversion pipeline, addressing unsupported tokens and related syntax cases. |
| [#144](https://github.com/tscircuit/checks/pull/144) | 🐙 Minor | ⭐⭐ | Fixes false DRC missing-connection errors for multi-pad PCB ports by allowing multiple pads to be associated with a single port and improving point-in-pad checks. |
| [#297](https://github.com/tscircuit/circuit-json-to-kicad/pull/297) | 🐙 Minor | ⭐⭐ | Fixes the issue where pilloval plated holes lose their ccw_rotation during KiCad PCB export, ensuring correct orientation in the output. |

<details>
<summary>🐌 Tiny Contributions (3)</summary>

| PR # | Impact | Description |
|------|--------|-------------|
| [#86](https://github.com/tscircuit/circuit-json-to-gerber/pull/86) | 🐌 Tiny | Adds a repro for a rotated pill-shaped plated hole where the generated Gerber copper and paste layers disagree on orientation. |
| [#38](https://github.com/tscircuit/kicadts/pull/38) | 🐌 Tiny | repro : https:github.comtscircuitkicadtsactionsruns25448691586job74659753661?pr38step:6:199 |
| [#294](https://github.com/tscircuit/circuit-json-to-kicad/pull/294) | 🐌 Tiny | Reproduces a bug related to the rendering of a rotated chip with a pill-shaped plated hole in the PCB layout. |

</details>

### [Abse2001](https://github.com/Abse2001)

| PRs # | Impact | Rating | Description |
|------|--------|--------|-------------|
| [#143](https://github.com/tscircuit/checks/pull/143) | 🐳 Major | ⭐⭐⭐ | Add polygon-aware DRC checks for rotated pads and plated holes |
| [#1125](https://github.com/tscircuit/tscircuit-autorouter/pull/1125) | 🐳 Major | ⭐⭐⭐ | Preserves the original obstacle geometry and rotation when converting to circuit-json format, ensuring accurate representation of physical components in the design. |
| [#1123](https://github.com/tscircuit/tscircuit-autorouter/pull/1123) | 🐳 Major | ⭐⭐⭐ | Preserves valid simplified path prefixes when a 45-degree path completion fails, ensuring connectivity by appending the original route slice. |

<details>
<summary>🐌 Tiny Contributions (1)</summary>

| PR # | Impact | Description |
|------|--------|-------------|
| [#15](https://github.com/tscircuit/high-density-repair03/pull/15) | 🐌 Tiny | Adds Abse2001 as a code owner for the repository, ensuring they are notified of changes and can review contributions. |

</details>

### [rushabhcodes](https://github.com/rushabhcodes)

| PRs # | Impact | Rating | Description |
|------|--------|--------|-------------|
| [#281](https://github.com/tscircuit/sparkfun-boards/pull/281) | 🐳 Major | ⭐⭐⭐ | Adds a complete SparkFun Thermocouple Breakout - MAX31855K board to sparkfun-boards, including the main board definition, a reusable chip footprint, board documentation, and generated PCB, schematic, and 3D snapshots. |
| [#1](https://github.com/tscircuit/circuit-json-to-3d-png/pull/1) | 🐳 Major | ⭐⭐⭐ | Adds the initial public API for rendering circuit-json boards to 3D assets and PNG snapshots, with coverage for camera control and model URL normalization. |

<details>
<summary>🐌 Tiny Contributions (1)</summary>

| PR # | Impact | Description |
|------|--------|-------------|
| [#2597](https://github.com/tscircuit/eval/pull/2597) | 🐌 Tiny | Updates the kicadts dependency from version 0.0.22 to 0.0.31 in package.json to bring in the latest features and fixes. |

</details>

### [MustafaMulla29](https://github.com/MustafaMulla29)

| PRs # | Impact | Rating | Description |
|------|--------|--------|-------------|
| [#160](https://github.com/tscircuit/circuit-json-to-gltf/pull/160) | 🐙 Minor | ⭐⭐ | Fixes rendering issue where empty footprinter models appear as fallback boxes in 3D renders unless debug boxes are requested |

<details>
<summary>🐌 Tiny Contributions (4)</summary>

| PR # | Impact | Description |
|------|--------|-------------|
| [#1439](https://github.com/tscircuit/svg.tscircuit.com/pull/1439) | 🐌 Tiny | Updates the circuit-json-to-gltf dependency version from 0.0.93 to 0.0.99 in package.json |
| [#552](https://github.com/tscircuit/docs/pull/552) | 🐌 Tiny | This pull request introduces a new STEP file for the SOIC-8 package, which is a common surface mount IC package. The file contains detailed geometric representations and metadata necessary for 3D modeling and design applications. |
| [#553](https://github.com/tscircuit/docs/pull/553) | 🐌 Tiny | Adds a local example of a CAD model using a STEP file for the SOIC8 footprint in the documentation. |
| [#159](https://github.com/tscircuit/circuit-json-to-gltf/pull/159) | 🐌 Tiny | Adds a new test for rendering testpoints in 3D and updates several dependencies in the project. |

</details>

### [0hmX](https://github.com/0hmX)

| PRs # | Impact | Rating | Description |
|------|--------|--------|-------------|
| [#1137](https://github.com/tscircuit/tscircuit-autorouter/pull/1137) | 🐳 Major | ⭐⭐⭐ | fix: include clipped boundary trace obstacles in reroute bounds regenerate dataset |
| [#128](https://github.com/tscircuit/rectdiff/pull/128) | 🐳 Major | ⭐⭐⭐ | Prepares the out-of-bounds fix by tightening how the solver understands board edges, ensuring shapes do not treat space outside the board as usable routing area. |
| [#129](https://github.com/tscircuit/rectdiff/pull/129) | 🐳 Major | ⭐⭐⭐ | Fixes out-of-bounds issue by ensuring the solver stops expanding at the board boundary and adds regression tests to maintain this behavior. |
| [#130](https://github.com/tscircuit/rectdiff/pull/130) | 🐳 Major | ⭐⭐⭐ | Clips obstacles that cross the board edge to ensure only the part inside the board is treated as real, while ignoring those fully outside the board. |
| [#10](https://github.com/tscircuit/high-density-repair01/pull/10) | 🐳 Major | ⭐⭐⭐ | Fixes a bug where a trace segment was incorrectly assigned to a larger node, resulting in a zero-length segment in the output SVG. |

<details>
<summary>🐌 Tiny Contributions (8)</summary>

| PR # | Impact | Description |
|------|--------|-------------|
| [#1146](https://github.com/tscircuit/tscircuit-autorouter/pull/1146) | 🐌 Tiny | subStack created with a hrefhttps:github.comgithubgh-stackGitHub Stacks CLIa  a hrefhttps:gh.iostacks-feedbackGive Feedback asub |
| [#1144](https://github.com/tscircuit/tscircuit-autorouter/pull/1144) | 🐌 Tiny | Updates the tscircuitmath-utils package version from 0.0.27 to 0.0.36 in the package.json file |
| [#1132](https://github.com/tscircuit/tscircuit-autorouter/pull/1132) | 🐌 Tiny | Refactors the import of SRJ datasets to use dynamic imports, improving maintainability and reducing code duplication. |
| [#125](https://github.com/tscircuit/rectdiff/pull/125) | 🐌 Tiny | This pull request relocates existing files and adds new Arduino-related resources to the project. It introduces new pages for Arduino examples and moves existing examples to a more organized structure. |
| [#122](https://github.com/tscircuit/rectdiff/pull/122) | 🐌 Tiny | Adds a new fixture for testing out-of-bounds scenarios in the RectDiffPipeline, including a corresponding test case to validate the behavior of generated nodes outside defined bounds. |
| [#120](https://github.com/tscircuit/rectdiff/pull/120) | 🐌 Tiny | Updates the tscircuitmath-utils package to version 0.0.36 in the package.json file. |
| [#127](https://github.com/tscircuit/rectdiff/pull/127) | 🐌 Tiny | Adds a new page that implements a simplified out-of-bounds example using the RectDiffPipeline and SolverDebugger3d component. |
| [#9](https://github.com/tscircuit/high-density-repair01/pull/9) | 🐌 Tiny | add disconnected trace fixture added the zoomed in svg format |

</details>

### [shehaban](https://github.com/shehaban)

| PRs # | Impact | Rating | Description |
|------|--------|--------|-------------|
| [#282](https://github.com/tscircuit/sparkfun-boards/pull/282) | 🐳 Major | ⭐⭐⭐ | Adds a new SparkFun RJ11 Breakout board with associated schematic and footprint files. |

### [AnasSarkiz](https://github.com/AnasSarkiz)

| PRs # | Impact | Rating | Description |
|------|--------|--------|-------------|
| [#14](https://github.com/tscircuit/high-density-repair03/pull/14) | 🐳 Major | ⭐⭐⭐ | Adds an interactive DRC14 Cosmos Debugger for enhanced solver regression analysis and repair quality. |
| [#11](https://github.com/tscircuit/high-density-repair03/pull/11) | 🐳 Major | ⭐⭐⭐ | Adds concurrency to the DRC14 benchmark execution, allowing multiple samples to be processed simultaneously, improving performance significantly. |
| [#10](https://github.com/tscircuit/high-density-repair03/pull/10) | 🐳 Major | ⭐⭐⭐ | Adds a benchmark harness to prevent silent DRC14 repair regressions by utilizing a pinned real dataset for testing. |
| [#16](https://github.com/tscircuit/high-density-repair03/pull/16) | 🐙 Minor | ⭐⭐ | Moves DRC14 route visualization out of the Cosmos fixture and into GlobalDrcForceImproveSolver, so every debuggerexport path now shows repaired routes in real board context. |

<details>
<summary>🐌 Tiny Contributions (2)</summary>

| PR # | Impact | Description |
|------|--------|-------------|
| [#13](https://github.com/tscircuit/high-density-repair03/pull/13) | 🐌 Tiny | Adds README documentation for the DRC14 benchmark and CI, detailing how to run benchmarks and CI workflows. |
| [#12](https://github.com/tscircuit/high-density-repair03/pull/12) | 🐌 Tiny | Adds a continuous integration workflow for benchmarking DRC14 performance on pull requests, including automated comments and results comparison with the main branch. |

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
| [sparkfun-boards](https://github.com/tscircuit/sparkfun-boards/blob/main/.github/CODEOWNERS) | [ShiboSoftwareDev](https://github.com/ShiboSoftwareDev), [Abse2001](https://github.com/Abse2001), [MustafaMulla29](https://github.com/MustafaMulla29), [Anshgrover23](https://github.com/Anshgrover23), [techmannih](https://github.com/techmannih)
| [schematic-corpus](https://github.com/tscircuit/schematic-corpus/blob/main/.github/CODEOWNERS) | [Abse2001](https://github.com/Abse2001)
| [copper-pour-solver](https://github.com/tscircuit/copper-pour-solver/blob/main/.github/CODEOWNERS) | [seveibar](https://github.com/seveibar), [ShiboSoftwareDev](https://github.com/ShiboSoftwareDev)
| [common](https://github.com/tscircuit/common/blob/main/.github/CODEOWNERS) | [seveibar](https://github.com/seveibar), [Abse2001](https://github.com/Abse2001)
| [circuit-to-canvas](https://github.com/tscircuit/circuit-to-canvas/blob/main/.github/CODEOWNERS) | [ShiboSoftwareDev](https://github.com/ShiboSoftwareDev), [Abse2001](https://github.com/Abse2001), [techmannih](https://github.com/techmannih)
| [circuit-json-to-lbrn](https://github.com/tscircuit/circuit-json-to-lbrn/blob/main/.github/CODEOWNERS) | [AnasSarkiz](https://github.com/AnasSarkiz)
| [pcbburn.com](https://github.com/tscircuit/pcbburn.com/blob/main/.github/CODEOWNERS) | [AnasSarkiz](https://github.com/AnasSarkiz)
| [high-density-repair03](https://github.com/tscircuit/high-density-repair03/blob/main/.github/CODEOWNERS) | [Abse2001](https://github.com/Abse2001)

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
|  | [circuit-to-canvas](https://github.com/tscircuit/circuit-to-canvas/blob/main/.github/CODEOWNERS) |
| [Abse2001](https://github.com/Abse2001) | [pcb-viewer](https://github.com/tscircuit/pcb-viewer/blob/main/.github/CODEOWNERS) |
|  | [3d-viewer](https://github.com/tscircuit/3d-viewer/blob/main/.github/CODEOWNERS) |
|  | [sparkfun-boards](https://github.com/tscircuit/sparkfun-boards/blob/main/.github/CODEOWNERS) |
|  | [schematic-corpus](https://github.com/tscircuit/schematic-corpus/blob/main/.github/CODEOWNERS) |
|  | [common](https://github.com/tscircuit/common/blob/main/.github/CODEOWNERS) |
|  | [circuit-to-canvas](https://github.com/tscircuit/circuit-to-canvas/blob/main/.github/CODEOWNERS) |
|  | [high-density-repair03](https://github.com/tscircuit/high-density-repair03/blob/main/.github/CODEOWNERS) |
| [techmannih](https://github.com/techmannih) | [footprinter](https://github.com/tscircuit/footprinter/blob/main/.github/CODEOWNERS) |
|  | [jscad-electronics](https://github.com/tscircuit/jscad-electronics/blob/main/.github/CODEOWNERS) |
|  | [schematic-symbols](https://github.com/tscircuit/schematic-symbols/blob/main/.github/CODEOWNERS) |
|  | [sparkfun-boards](https://github.com/tscircuit/sparkfun-boards/blob/main/.github/CODEOWNERS) |
|  | [circuit-to-canvas](https://github.com/tscircuit/circuit-to-canvas/blob/main/.github/CODEOWNERS) |
| [anas-sarkez](https://github.com/anas-sarkez) | [jscad-electronics](https://github.com/tscircuit/jscad-electronics/blob/main/.github/CODEOWNERS) |
| [imrishabh18](https://github.com/imrishabh18) | [circuit-to-svg](https://github.com/tscircuit/circuit-to-svg/blob/main/.github/CODEOWNERS) |
|  | [schematic-symbols](https://github.com/tscircuit/schematic-symbols/blob/main/.github/CODEOWNERS) |
|  | [tscircuit.com](https://github.com/tscircuit/tscircuit.com/blob/main/.github/CODEOWNERS) |
| [Anshgrover23](https://github.com/Anshgrover23) | [issue-roulette](https://github.com/tscircuit/issue-roulette/blob/main/.github/CODEOWNERS) |
|  | [sparkfun-boards](https://github.com/tscircuit/sparkfun-boards/blob/main/.github/CODEOWNERS) |
| [MustafaMulla29](https://github.com/MustafaMulla29) | [sparkfun-boards](https://github.com/tscircuit/sparkfun-boards/blob/main/.github/CODEOWNERS) |
| [AnasSarkiz](https://github.com/AnasSarkiz) | [circuit-json-to-lbrn](https://github.com/tscircuit/circuit-json-to-lbrn/blob/main/.github/CODEOWNERS) |
|  | [pcbburn.com](https://github.com/tscircuit/pcbburn.com/blob/main/.github/CODEOWNERS) |



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
