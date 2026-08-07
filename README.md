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

# Contribution Overview 2026-08-04

The current week is shown below. There are 3 major sections:

- [Contributor Overview](#contributor-overview)
- [PRs by Repository](#prs-by-repository)
- [PRs by Contributor](#changes-by-contributor)
- [Scoring & Sponsorship Details](/docs/sponsorship-calculation-explanation.md)

## PRs by Repository

```mermaid
pie
    "tscircuit/rfc" : 1
    "tscircuit/core" : 15
    "tscircuit/tscircuit-autorouter" : 16
    "tscircuit/altiumts" : 1
    "tscircuit/circuit-json-util" : 1
    "tscircuit/cli" : 33
    "tscircuit/length-matching-solver" : 1
    "tscircuit/tscircuit" : 36
    "tscircuit/tscircuit.com" : 18
    "tscircuit/eval" : 19
    "tscircuit/runframe" : 26
    "tscircuit/circuit-json-to-step" : 4
    "tscircuit/schematic-trace-solver" : 9
    "tscircuit/test-github-automerge" : 1
    "tscircuit/circuit-json" : 1
    "tscircuit/docs" : 1
    "tscircuit/easyedats" : 1
    "tscircuit/props" : 1
    "tscircuit/jlcsearch" : 1
    "tscircuit/usbc-hub" : 2
    "tscircuit/rp2350" : 1
    "tscircuit/footprinter" : 2
    "tscircuit/circuit-to-canvas" : 1
    "tscircuit/calculate-packing" : 2
    "tscircuit/easyeda-converter" : 1
    "tscircuit/3d-viewer" : 2
    "tscircuit/circuit-json-to-gltf" : 2
    "tscircuit/jscad-electronics" : 1
    "tscircuit/matchpack" : 7
    "tscircuit/circuit-json-to-gerber" : 2
    "tscircuit/common" : 1
    "tscircuit/high-density-repair03" : 4
    "tscircuit/datasheet-to-tscircuit" : 4
    "tscircuit/contribution-tracker" : 1
    "tscircuit/system-block-designer" : 2
    "tscircuit/ti" : 13
```

## Contributor Overview

| Contributor | 🐳 Major | 🐙 Minor | 🐌 Tiny | Score | ⭐ |
|-------------|---------|---------|---------|-------|-----|
| [seveibar](#seveibar) | 7 | 6 | 5 | 45.5 | ⭐⭐ |
| [ShiboSoftwareDev](#ShiboSoftwareDev) | 7 | 1 | 6 | 38 | ⭐⭐ |
| [0hmX](#0hmX) | 5 | 5 | 1 | 31 | ⭐⭐ |
| [mohan-bee](#mohan-bee) | 4 | 3 | 6 | 28 | ⭐⭐ |
| [MustafaMulla29](#MustafaMulla29) | 4 | 0 | 5 | 22 | ⭐⭐ |
| [techmannih](#techmannih) | 1 | 1 | 13 | 19 | ⭐⭐ |
| [tscircuitbot](#tscircuitbot) | 0 | 0 | 140 | 14 | ⭐⭐ |
| [imrishabh18](#imrishabh18) | 1 | 1 | 4 | 11 | ⭐⭐ |
| [AnasSarkiz](#AnasSarkiz) | 1 | 0 | 0 | 10 | ⭐ |
| [addibble](#addibble) | 1 | 3 | 0 | 10 | ⭐ |
| [Abse2001](#Abse2001) | 0 | 0 | 1 | 3 |  |
| [anil08607](#anil08607) | 0 | 1 | 1 | 3 |  |

## Staff Pass Ratio (SPR)

| Contributor | Reviewed PRs | Rejections | Approvals | SPR |
|-------------|--------------|------------|-----------|-----|
| [0hmX](#0hmX) | 8 | 2 | 6 | 75.0% |
| [mohan-bee](#mohan-bee) | 5 | 1 | 4 | 80.0% |
| [addibble](#addibble) | 4 | 0 | 4 | 100.0% |
| [ShiboSoftwareDev](#ShiboSoftwareDev) | 4 | 0 | 4 | 100.0% |
| [MustafaMulla29](#MustafaMulla29) | 3 | 1 | 3 | 66.7% |
| [imrishabh18](#imrishabh18) | 2 | 0 | 2 | 100.0% |
| [anil08607](#anil08607) | 1 | 0 | 1 | 100.0% |
| [techmannih](#techmannih) | 1 | 0 | 1 | 100.0% |

<details>
<summary>0hmX SPR PRs (8)</summary>

- [#13](https://github.com/tscircuit/rfc/pull/13) checks: require point-to-point differential pair traces
- [#686](https://github.com/tscircuit/circuit-json/pull/686) Add differential pair point-to-point error
- [#113](https://github.com/tscircuit/circuit-json-util/pull/113) Add source diagnostic category
- [#3011](https://github.com/tscircuit/core/pull/3011) Warn when differential pairs are not point to point
- [#3009](https://github.com/tscircuit/core/pull/3009) Update autorouter to v0.0.748
- [#4062](https://github.com/tscircuit/cli/pull/4062) Add source diagnostic checks
- [#4042](https://github.com/tscircuit/cli/pull/4042) Add source diagnostic checks
- [#37](https://github.com/tscircuit/altiumts/pull/37) Render native Altium schematic images as SVG

</details>

<details>
<summary>mohan-bee SPR PRs (5)</summary>

- [#134](https://github.com/tscircuit/circuit-json-to-gerber/pull/134) Preserve arbitrary rectangular SMT pad rotation in Gerber
- [#197](https://github.com/tscircuit/matchpack/pull/197) Align ordinary signal grounded load rows
- [#786](https://github.com/tscircuit/schematic-trace-solver/pull/786) Keep traces clear of net label side walls
- [#774](https://github.com/tscircuit/schematic-trace-solver/pull/774) Align chained same-net rails across anchored labels
- [#772](https://github.com/tscircuit/schematic-trace-solver/pull/772) Avoid shared-pin trace spikes

</details>

<details>
<summary>addibble SPR PRs (4)</summary>

- [#961](https://github.com/tscircuit/3d-viewer/pull/961) fix: stop shrinking CAD models rotated off-axis
- [#319](https://github.com/tscircuit/jscad-electronics/pull/319) fix: render chip footprints named by their pads instead of by size
- [#176](https://github.com/tscircuit/circuit-json-to-gltf/pull/176) refactor: one shared triangle/position bounds scan
- [#175](https://github.com/tscircuit/circuit-json-to-gltf/pull/175) fix(jscad): put JSCAD-plan geometry in the same frame as every other loader

</details>

<details>
<summary>ShiboSoftwareDev SPR PRs (4)</summary>

- [#1941](https://github.com/tscircuit/tscircuit-autorouter/pull/1941) Repair terminal traces crossing SMT pads
- [#1937](https://github.com/tscircuit/tscircuit-autorouter/pull/1937) Preserve shared same-root via sites during exact repair
- [#1927](https://github.com/tscircuit/tscircuit-autorouter/pull/1927) Track generated stitches in clearance-aware routing
- [#1902](https://github.com/tscircuit/tscircuit-autorouter/pull/1902) fix: complete sample 11 safe trace repair

</details>

<details>
<summary>MustafaMulla29 SPR PRs (3)</summary>

- [#3016](https://github.com/tscircuit/core/pull/3016) Use canonical net label text for schematic solver bounds
- [#3014](https://github.com/tscircuit/core/pull/3014) Fix four-pin crystal trace length propagation
- [#781](https://github.com/tscircuit/schematic-trace-solver/pull/781) Relocate rail labels around crossing traces

</details>

<details>
<summary>imrishabh18 SPR PRs (2)</summary>

- [#785](https://github.com/tscircuit/props/pull/785) Add PCB pack solver timeout platform config
- [#2924](https://github.com/tscircuit/core/pull/2924) Fix missing net labels across subcircuits

</details>

<details>
<summary>anil08607 SPR PRs (1)</summary>

- [#203](https://github.com/tscircuit/matchpack/pull/203) repro: add regression case for distant groups producing a tall schematic layout

</details>

<details>
<summary>techmannih SPR PRs (1)</summary>

- [#65](https://github.com/tscircuit/system-block-designer/pull/65) Add Bluetooth speaker system example

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
| [0hmX](#0hmX) | 18 | 6 | 2 | 0 | 0 | 17 | 11 | 0 |
| [Abse2001](#Abse2001) | 1 | 1 | 0 | 2 | 0 | 5 | 1 | 0 |
| [addibble](#addibble) | 4 | 4 | 0 | 0 | 0 | 8 | 4 | 0 |
| [AnasSarkiz](#AnasSarkiz) | 1 | 1 | 0 | 6 | 0 | 3 | 1 | 0 |
| [anil08607](#anil08607) | 8 | 7 | 0 | 0 | 0 | 6 | 2 | 0 |
| [hanuman-bishnoi](#hanuman-bishnoi) | 1 | 0 | 1 | 0 | 0 | 1 | 0 | 0 |
| [imrishabh18](#imrishabh18) | 2 | 2 | 0 | 3 | 1 | 13 | 6 | 0 |
| [mattkanwisher](#mattkanwisher) | 0 | 0 | 0 | 0 | 0 | 1 | 0 | 0 |
| [mohan-bee](#mohan-bee) | 11 | 6 | 2 | 2 | 0 | 21 | 13 | 0 |
| [MustafaMulla29](#MustafaMulla29) | 6 | 4 | 0 | 1 | 1 | 10 | 9 | 0 |
| [rushabhcodes](#rushabhcodes) | 1 | 0 | 0 | 1 | 0 | 1 | 0 | 0 |
| [seveibar](#seveibar) | 6 | 0 | 0 | 29 | 3 | 31 | 19 | 0 |
| [ShiboSoftwareDev](#ShiboSoftwareDev) | 13 | 13 | 0 | 2 | 0 | 33 | 15 | 0 |
| [techmannih](#techmannih) | 12 | 3 | 0 | 1 | 0 | 16 | 15 | 0 |
| [tscircuitbot](#tscircuitbot) | 0 | 0 | 0 | 0 | 0 | 182 | 140 | 0 |
| [zkasuran](#zkasuran) | 0 | 0 | 0 | 0 | 0 | 3 | 0 | 0 |

## Changes by Repository

### [tscircuit/rfc](https://github.com/tscircuit/rfc)

| PR # | Impact | Rating | Contributor | Description |
|------|--------|--------|-------------|-------------|
| [#13](https://github.com/tscircuit/rfc/pull/13) | 🐳 Major | ⭐⭐⭐ | 0hmX | Defines differential-pair conductors as strictly point-to-point, providing clear diagnostics for ambiguous connections. |

### [tscircuit/core](https://github.com/tscircuit/core)

| PR # | Impact | Rating | Contributor | Description |
|------|--------|--------|-------------|-------------|
| [#3009](https://github.com/tscircuit/core/pull/3009) | 🐳 Major | ⭐⭐⭐ | 0hmX | Bumps tscircuitcapacity-autorouter from 0.0.744 to 0.0.748, refreshing affected deterministic autorouting snapshots to incorporate fixes for dual-meander routing and safe trace repair. |
| [#3024](https://github.com/tscircuit/core/pull/3024) | 🐳 Major | ⭐⭐⭐ | seveibar | Fixes incorrect attribution of routed traces to source traces due to layer-blind endpoint geometry matching, preventing detection of genuine shorts in PCB design. |
| [#3021](https://github.com/tscircuit/core/pull/3021) | 🐳 Major | ⭐⭐⭐ | seveibar | Preserves previously routed traces in SimpleRouteJson.traces instead of synthesizing axis-aligned phase obstacles, allowing the autorouter to handle trace-to-obstacle conversion and diagonal approximation. |
| [#3016](https://github.com/tscircuit/core/pull/3016) | 🐳 Major | ⭐⭐⭐ | MustafaMulla29 | Fixes discrepancies between schematic trace solver input and rendered net label dimensions, ensuring accurate routing decisions based on correct label sizes. |
| [#3014](https://github.com/tscircuit/core/pull/3014) | 🐳 Major | ⭐⭐⭐ | MustafaMulla29 | Fixes trace length propagation for four-pin crystals to ensure that only signal pins are constrained by maximum trace length, preventing autorouting errors related to ground connections. |
| [#3017](https://github.com/tscircuit/core/pull/3017) | 🐙 Minor | ⭐⭐ | 0hmX | Clarifies warnings for differential pairs with ambiguous trace names by providing specific diagnostics without prescriptive advice. |
| [#3011](https://github.com/tscircuit/core/pull/3011) | 🐙 Minor | ⭐⭐ | 0hmX | Adds a warning mechanism for differential pairs that do not connect point-to-point, enhancing design rule checks in the circuit. |
| [#3020](https://github.com/tscircuit/core/pull/3020) | 🐙 Minor | ⭐⭐ | seveibar | Emit named autorouter phases in events, preserving phase names in routing phase plans and providing event metadata for debugging. |
| [#2924](https://github.com/tscircuit/core/pull/2924) | 🐙 Minor | ⭐⭐ | imrishabh18 | Fixes missing net labels for unnamed direct connections across subcircuits, ensuring both endpoints retain their labels when needed. |

<details>
<summary>🐌 Tiny Contributions (6)</summary>

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#3010](https://github.com/tscircuit/core/pull/3010) | 🐌 Tiny | 0hmX | Bump tscircuitcapacity-autorouter from 0.0.748 to 0.0.750, enabling the autorouter to preserve non-ideal fallback output when post-processing cannot produce the ideal route. |
| [#3012](https://github.com/tscircuit/core/pull/3012) | 🐌 Tiny | seveibar | Changes section divider lines in schematics to be rendered as dashed lines, distinguishing them from electrical connections. |
| [#3029](https://github.com/tscircuit/core/pull/3029) | 🐌 Tiny | mohan-bee | Updates the matchpack dependency from version 0.0.64 to 0.0.70 in the package.json file. |
| [#3028](https://github.com/tscircuit/core/pull/3028) | 🐌 Tiny | MustafaMulla29 | Updates the version of the tscircuitschematic-trace-solver dependency from 0.0.122 to 0.0.125 in package.json |
| [#3027](https://github.com/tscircuit/core/pull/3027) | 🐌 Tiny | MustafaMulla29 | Adds a focused schematic reproduction of the DRV8323HRTAR gate-driver upper-pin network from the RP2040 BLDC controller, preserving the upper-pin routing geometry and labels for easier inspection and export to schematic-trace-solver. |
| [#3013](https://github.com/tscircuit/core/pull/3013) | 🐌 Tiny | MustafaMulla29 | Add a focused schematic regression test for the RP2040 U1, including a complete set of U1-connected traces and a generated schematic SVG snapshot. |

</details>

### [tscircuit/tscircuit-autorouter](https://github.com/tscircuit/tscircuit-autorouter)

| PR # | Impact | Rating | Contributor | Description |
|------|--------|--------|-------------|-------------|
| [#1925](https://github.com/tscircuit/tscircuit-autorouter/pull/1925) | 🐳 Major | ⭐⭐⭐ | 0hmX | Pins the post-processing solver revision to return input HD routes when post-processing fails, updates regression tests to expect successful completion instead of an exception, and modifies the visualization snapshot accordingly. |
| [#1923](https://github.com/tscircuit/tscircuit-autorouter/pull/1923) | 🐳 Major | ⭐⭐⭐ | 0hmX | What changed add bugreport82-0e99ec using the full, unminimized F1C200s board Simple Route JSON add an AutoroutingPipelineDebugger fixture add a focused characterization test for the PostProcessingSolver layer-transition exception add the last-step SVG snapshot captured at the failure state  Why The default autorouter creates an HD route named source_net_8_mst3 whose layer transition does not resolve to exactly one via. PostProcessingSolver rejects that route and aborts the board route. The fixture retains all 218 obstacles and 26 connections. Its canonical SRJ SHA-256 matches the original tsci build --autorouter-dump-srj failed output: 5023393d62bf7b3845dd3da50fe5cc112a5ddd3ef06bc2b87a3e8ab5fd1c1475.  Validation bun run build bun test --timeout 9999999 testsbugsbugreport82-0e99ec.test.ts The focused test reproduces the exact exception, asserts the failed solver state, and verifies the SVG snapshot while remaining green for CI.  Follow-up 1925 implements non-ideal fallback output for this reproduction. tscircuitlength-matching-solver39 implements the core solver behavior. |
| [#1933](https://github.com/tscircuit/tscircuit-autorouter/pull/1933) | 🐳 Major | ⭐⭐⭐ | seveibar | Summary Adds a focused Simple Route JSON (SRJ) reproduction from the Allwinner F1C100S Linux laptop motherboard routing experiment. The board uses an LCD connector breakout autorouterdefault to route the connector breakout separately. The breakout phase completes, but a later six-route LCD phase fails during the static reachability precheck.  Reproduction Source project: tscircuitmotherboard-allwinner-f1c100s bash bun run build -- --autorouter-debug  --autorouter-debug-dir distautorouter-debug-breakout-final  --autorouter-dump-srj all  --autorouter-timeout 60s --profile  The checked-in SRJ is the input to routing phase index 4 (phase ordinal 5): 6 connections 889 obstacles 4 routing layers 87 previously routed traces represented in the obstacle reservations The preceding LCD connector breakout phase routed 23 connections successfully. The failing input contains source_trace_178 through source_trace_183.  Observed failure text Static reachability precheck failed: 5 route(s) have no legal path under the current reservation and start-region rules source_trace_182 (50683-50684), source_trace_181 (50685-50686), source_trace_180 (50687-50688), source_trace_179 (50689-50690), source_trace_178 (50691-50692) (capacity-autorouter0.0.722)  The debugger fixture and exact phase-input SRJ are in fixturesbug-reportsbugreport83-f1c100s-breakout.  Validation Parsed the SRJ with jq and Bun JSON import. Confirmed the copied SRJ is byte-for-byte identical to the debug dump. Full autorouter test execution was not run because dependency installation stalled at Resolving dependencies in this environment. |
| [#1937](https://github.com/tscircuit/tscircuit-autorouter/pull/1937) | 🐳 Major | ⭐⭐⭐ | ShiboSoftwareDev | Fixes junction splitting issue in MST branches by ensuring shared-site repairs do not split sites, allowing for valid final-error repair without creating clearance errors. |
| [#1927](https://github.com/tscircuit/tscircuit-autorouter/pull/1927) | 🐳 Major | ⭐⭐⭐ | ShiboSoftwareDev | Fixes clearance-aware stitch selection to ensure generated bridge segments are considered, preventing selection of stitches that cross newly created copper. |
| [#1902](https://github.com/tscircuit/tscircuit-autorouter/pull/1902) | 🐳 Major | ⭐⭐⭐ | ShiboSoftwareDev | Fixes the issue where Dataset 18 sample 11 fails to complete exact DRC repair due to a bounded trace detour not finishing the repair process after canonicalizing a via. |

<details>
<summary>🐌 Tiny Contributions (10)</summary>

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#1948](https://github.com/tscircuit/tscircuit-autorouter/pull/1948) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1943](https://github.com/tscircuit/tscircuit-autorouter/pull/1943) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1936](https://github.com/tscircuit/tscircuit-autorouter/pull/1936) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1930](https://github.com/tscircuit/tscircuit-autorouter/pull/1930) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1926](https://github.com/tscircuit/tscircuit-autorouter/pull/1926) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1924](https://github.com/tscircuit/tscircuit-autorouter/pull/1924) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1919](https://github.com/tscircuit/tscircuit-autorouter/pull/1919) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1947](https://github.com/tscircuit/tscircuit-autorouter/pull/1947) | 🐌 Tiny | imrishabh18 | Replaces the existing bugreport66 fixture with a corrected autorouting bug report that accurately represents the USB-C component rotation and regenerates the matching SVG snapshot. |
| [#1920](https://github.com/tscircuit/tscircuit-autorouter/pull/1920) | 🐌 Tiny | ShiboSoftwareDev | Adds a test to visualize and reproduce the remaining exact DRC errors after geometry repair for dataset 18 sample 10, without changing solver behavior. |
| [#1900](https://github.com/tscircuit/tscircuit-autorouter/pull/1900) | 🐌 Tiny | ShiboSoftwareDev | Reproduces the DRC failure for dataset 18 sample 11, demonstrating the exact errors encountered during the production pipelines exact-DRC stage. |

</details>

### [tscircuit/altiumts](https://github.com/tscircuit/altiumts)

| PR # | Impact | Rating | Contributor | Description |
|------|--------|--------|-------------|-------------|
| [#37](https://github.com/tscircuit/altiumts/pull/37) | 🐳 Major | ⭐⭐⭐ | 0hmX | Summary extract the native TMetafile and TdxPNGImage payloads stored after Altiums embedded bitmap preview add a bounded EMF-to-SVG renderer for the GDI record subset used by the TI TMDS62LEVM design preserve vector paths, Unicode text, fonts, rotation, alignment, and anisotropic coordinate mapping compose TIs adjacent SRCPAINT 1-bit masks and SRCAND 24-bit bitmap records into transparent native-resolution images prefer native SVGPNG content in schematic serialization while retaining the existing bitmap fallback for malformed or unsupported payloads add focused extraction, rendering, malformed-input, and format-selection coverage  Root cause Altium image streams contain a bitmap preview followed by the original native image payload. The existing parser stopped after the bitmap, so the browser viewer embedded a low-resolution PNG preview. Zooming therefore enlarged fixed pixels even when the source document contained an EMF vector drawing or a higher-resolution PNG.  Impact The affected TI sheets now use their original artwork: sheet 05 renders 5,870 vector paths and 491 text elements as SVG sheets 0508 and 11 retain their vector content sheet 09 uses its two native high-resolution PNGs sheet 10 renders its native transparent bitmap tiles instead of the small preview Unknown EMF operations and invalid native payloads continue to fall back safely to the existing preview behavior.  Validation biome check on all changed source and test files library and site TypeScript checks focused embedded-image tests: 2 passed, 25 assertions Vite production site build ESM, declaration, CLI, and package verification build browser verification using the exact TI ZIP from Downloads: sheet 05 remained crisp and readable after 3 zoom, with no browser console errors |

### [tscircuit/circuit-json-util](https://github.com/tscircuit/circuit-json-util)

| PR # | Impact | Rating | Contributor | Description |
|------|--------|--------|-------------|-------------|
| [#113](https://github.com/tscircuit/circuit-json-util/pull/113) | 🐙 Minor | ⭐⭐ | 0hmX | Adds a new diagnostic category source to categorize specific warnings in the DRC process, preserving existing mappings and documentation. |

### [tscircuit/cli](https://github.com/tscircuit/cli)

| PR # | Impact | Rating | Contributor | Description |
|------|--------|--------|-------------|-------------|
| [#4052](https://github.com/tscircuit/cli/pull/4052) | 🐳 Major | ⭐⭐⭐ | seveibar | Add --autorouter-phase name to build, check trace-length, and dev, enabling automatic autorouter diagnostics for specified phases and capturing relevant events while omitting later phases. |
| [#4062](https://github.com/tscircuit/cli/pull/4062) | 🐙 Minor | ⭐⭐ | 0hmX | Add a new check source subcommand to validate source diagnostics and enhance the existing check command to print all detected errors and warnings without category filtering. |
| [#4058](https://github.com/tscircuit/cli/pull/4058) | 🐙 Minor | ⭐⭐ | seveibar | Render the rats nest in the initial placement-unrouted.png autorouter debug image and add a visual SVG snapshot with two crossing unrouted connections for reviewers to see the output. |

<details>
<summary>🐌 Tiny Contributions (30)</summary>

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#4070](https://github.com/tscircuit/cli/pull/4070) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#4069](https://github.com/tscircuit/cli/pull/4069) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#4068](https://github.com/tscircuit/cli/pull/4068) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#4067](https://github.com/tscircuit/cli/pull/4067) | 🐌 Tiny | tscircuitbot | Updates the tscircuitrunframe package from version 0.0.2372 to 0.0.2373 |
| [#4066](https://github.com/tscircuit/cli/pull/4066) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#4065](https://github.com/tscircuit/cli/pull/4065) | 🐌 Tiny | tscircuitbot | Updates the README to reflect the latest CLI usage output by adding the required parameter for the check command. |
| [#4064](https://github.com/tscircuit/cli/pull/4064) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#4061](https://github.com/tscircuit/cli/pull/4061) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#4060](https://github.com/tscircuit/cli/pull/4060) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#4059](https://github.com/tscircuit/cli/pull/4059) | 🐌 Tiny | tscircuitbot | Updates the tscircuitrunframe package from version 0.0.2371 to 0.0.2372 |
| [#4057](https://github.com/tscircuit/cli/pull/4057) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#4056](https://github.com/tscircuit/cli/pull/4056) | 🐌 Tiny | tscircuitbot | Updates the tscircuitrunframe package version from 0.0.2370 to 0.0.2371 in package.json |
| [#4054](https://github.com/tscircuit/cli/pull/4054) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#4053](https://github.com/tscircuit/cli/pull/4053) | 🐌 Tiny | tscircuitbot | Updates the tscircuitrunframe package to version 0.0.2370 in the package.json file |
| [#4035](https://github.com/tscircuit/cli/pull/4035) | 🐌 Tiny | tscircuitbot | Updates the tscircuitrunframe package from version 0.0.2361 to 0.0.2362 |
| [#4043](https://github.com/tscircuit/cli/pull/4043) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#4050](https://github.com/tscircuit/cli/pull/4050) | 🐌 Tiny | tscircuitbot | Updates the tscircuitrunframe package from version 0.0.2368 to 0.0.2369 |
| [#4048](https://github.com/tscircuit/cli/pull/4048) | 🐌 Tiny | tscircuitbot | Updates the tscircuitrunframe package from version 0.0.2367 to 0.0.2368 |
| [#4047](https://github.com/tscircuit/cli/pull/4047) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#4046](https://github.com/tscircuit/cli/pull/4046) | 🐌 Tiny | tscircuitbot | Updates the tscircuitrunframe package from version 0.0.2366 to 0.0.2367 |
| [#4044](https://github.com/tscircuit/cli/pull/4044) | 🐌 Tiny | tscircuitbot | Updates the tscircuitrunframe package from version 0.0.2365 to 0.0.2366 |
| [#4041](https://github.com/tscircuit/cli/pull/4041) | 🐌 Tiny | tscircuitbot | Updates the tscircuitrunframe package from version 0.0.2364 to 0.0.2365 |
| [#4040](https://github.com/tscircuit/cli/pull/4040) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#4039](https://github.com/tscircuit/cli/pull/4039) | 🐌 Tiny | tscircuitbot | Updates the tscircuitrunframe package from version 0.0.2363 to 0.0.2364 |
| [#4037](https://github.com/tscircuit/cli/pull/4037) | 🐌 Tiny | tscircuitbot | Updates the tscircuitrunframe package from version 0.0.2362 to 0.0.2363 |
| [#4051](https://github.com/tscircuit/cli/pull/4051) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#4049](https://github.com/tscircuit/cli/pull/4049) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#4045](https://github.com/tscircuit/cli/pull/4045) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#4038](https://github.com/tscircuit/cli/pull/4038) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#4036](https://github.com/tscircuit/cli/pull/4036) | 🐌 Tiny | tscircuitbot | Automated package update |

</details>

### [tscircuit/length-matching-solver](https://github.com/tscircuit/length-matching-solver)

| PR # | Impact | Rating | Contributor | Description |
|------|--------|--------|-------------|-------------|
| [#39](https://github.com/tscircuit/length-matching-solver/pull/39) | 🐙 Minor | ⭐⭐ | 0hmX | Returns structured post-processing errors by default, providing original input HD routes when validation fails and including a structured postProcessingErrors array in the output. |

### [tscircuit/tscircuit](https://github.com/tscircuit/tscircuit)


<details>
<summary>🐌 Tiny Contributions (36)</summary>

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#4311](https://github.com/tscircuit/tscircuit/pull/4311) | 🐌 Tiny | tscircuitbot | Updates the package version from 0.0.2245 to 0.0.2246 in package.json |
| [#4310](https://github.com/tscircuit/tscircuit/pull/4310) | 🐌 Tiny | tscircuitbot | Updates the tscircuitcli package from version 0.1.1842 to 0.1.1843 and the tscircuitrunframe package from version 0.0.2373 to 0.0.2374 in package.json |
| [#4309](https://github.com/tscircuit/tscircuit/pull/4309) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#4308](https://github.com/tscircuit/tscircuit/pull/4308) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#4307](https://github.com/tscircuit/tscircuit/pull/4307) | 🐌 Tiny | tscircuitbot | Automated package update to version 0.0.2244 |
| [#4306](https://github.com/tscircuit/tscircuit/pull/4306) | 🐌 Tiny | tscircuitbot | Updates the tscircuitcli package to version 0.1.1841 in the package.json file |
| [#4305](https://github.com/tscircuit/tscircuit/pull/4305) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#4304](https://github.com/tscircuit/tscircuit/pull/4304) | 🐌 Tiny | tscircuitbot | Updates the tscircuitcli package to version 0.1.1840 |
| [#4303](https://github.com/tscircuit/tscircuit/pull/4303) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#4302](https://github.com/tscircuit/tscircuit/pull/4302) | 🐌 Tiny | tscircuitbot | Updates the tscircuitcli package version from 0.1.1838 to 0.1.1839 |
| [#4301](https://github.com/tscircuit/tscircuit/pull/4301) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#4300](https://github.com/tscircuit/tscircuit/pull/4300) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#4299](https://github.com/tscircuit/tscircuit/pull/4299) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#4298](https://github.com/tscircuit/tscircuit/pull/4298) | 🐌 Tiny | tscircuitbot | Updates the tscircuitcli package from version 0.1.1836 to 0.1.1837 and the tscircuitrunframe package from version 0.0.2370 to 0.0.2371 in the package.json file. |
| [#4297](https://github.com/tscircuit/tscircuit/pull/4297) | 🐌 Tiny | tscircuitbot | Updates the package version from 0.0.2238 to 0.0.2239 in package.json |
| [#4296](https://github.com/tscircuit/tscircuit/pull/4296) | 🐌 Tiny | tscircuitbot | Updates the tscircuitcli and related packages to their latest versions. |
| [#4295](https://github.com/tscircuit/tscircuit/pull/4295) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#4294](https://github.com/tscircuit/tscircuit/pull/4294) | 🐌 Tiny | tscircuitbot | Updates the tscircuitcli package from version 0.1.1834 to 0.1.1835 and the tscircuitrunframe package from version 0.0.2369 to 0.0.2370 in the package.json file. |
| [#4280](https://github.com/tscircuit/tscircuit/pull/4280) | 🐌 Tiny | tscircuitbot | Updates the tscircuitcli package from version 0.1.1828 to 0.1.1829 and the tscircuitrunframe package from version 0.0.2363 to 0.0.2364. |
| [#4293](https://github.com/tscircuit/tscircuit/pull/4293) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#4292](https://github.com/tscircuit/tscircuit/pull/4292) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#4291](https://github.com/tscircuit/tscircuit/pull/4291) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#4290](https://github.com/tscircuit/tscircuit/pull/4290) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#4289](https://github.com/tscircuit/tscircuit/pull/4289) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#4288](https://github.com/tscircuit/tscircuit/pull/4288) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#4286](https://github.com/tscircuit/tscircuit/pull/4286) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#4285](https://github.com/tscircuit/tscircuit/pull/4285) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#4284](https://github.com/tscircuit/tscircuit/pull/4284) | 🐌 Tiny | tscircuitbot | Updates the versions of several dependencies in the package.json file. |
| [#4283](https://github.com/tscircuit/tscircuit/pull/4283) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#4282](https://github.com/tscircuit/tscircuit/pull/4282) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#4281](https://github.com/tscircuit/tscircuit/pull/4281) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#4278](https://github.com/tscircuit/tscircuit/pull/4278) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#4277](https://github.com/tscircuit/tscircuit/pull/4277) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#4276](https://github.com/tscircuit/tscircuit/pull/4276) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#4275](https://github.com/tscircuit/tscircuit/pull/4275) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#4287](https://github.com/tscircuit/tscircuit/pull/4287) | 🐌 Tiny | tscircuitbot | Automated package update |

</details>

### [tscircuit/tscircuit.com](https://github.com/tscircuit/tscircuit.com)


<details>
<summary>🐌 Tiny Contributions (18)</summary>

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#4262](https://github.com/tscircuit/tscircuit.com/pull/4262) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#4261](https://github.com/tscircuit/tscircuit.com/pull/4261) | 🐌 Tiny | tscircuitbot | Automated package update for tscircuitrunframe from version 0.0.2372 to 0.0.2373 |
| [#4260](https://github.com/tscircuit/tscircuit.com/pull/4260) | 🐌 Tiny | tscircuitbot | Updates the tscircuiteval package from version 0.0.1138 to 0.0.1139 |
| [#4259](https://github.com/tscircuit/tscircuit.com/pull/4259) | 🐌 Tiny | tscircuitbot | Updates the tscircuiteval package from version 0.0.1137 to 0.0.1138 |
| [#4258](https://github.com/tscircuit/tscircuit.com/pull/4258) | 🐌 Tiny | tscircuitbot | Updates the tscircuitrunframe package from version 0.0.2371 to 0.0.2372 |
| [#4257](https://github.com/tscircuit/tscircuit.com/pull/4257) | 🐌 Tiny | tscircuitbot | Updates the tscircuitrunframe package from version 0.0.2370 to 0.0.2371 |
| [#4256](https://github.com/tscircuit/tscircuit.com/pull/4256) | 🐌 Tiny | tscircuitbot | Updates the tscircuiteval package from version 0.0.1136 to 0.0.1137 |
| [#4255](https://github.com/tscircuit/tscircuit.com/pull/4255) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#4253](https://github.com/tscircuit/tscircuit.com/pull/4253) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#4252](https://github.com/tscircuit/tscircuit.com/pull/4252) | 🐌 Tiny | tscircuitbot | Updates the tscircuitrunframe package from version 0.0.2366 to 0.0.2368 |
| [#4249](https://github.com/tscircuit/tscircuit.com/pull/4249) | 🐌 Tiny | tscircuitbot | Updates the tscircuiteval package from version 0.0.1133 to 0.0.1134 |
| [#4248](https://github.com/tscircuit/tscircuit.com/pull/4248) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#4247](https://github.com/tscircuit/tscircuit.com/pull/4247) | 🐌 Tiny | tscircuitbot | Updates the tscircuiteval package from version 0.0.1131 to 0.0.1133 |
| [#4244](https://github.com/tscircuit/tscircuit.com/pull/4244) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#4243](https://github.com/tscircuit/tscircuit.com/pull/4243) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#4242](https://github.com/tscircuit/tscircuit.com/pull/4242) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#4241](https://github.com/tscircuit/tscircuit.com/pull/4241) | 🐌 Tiny | tscircuitbot | Updates the tscircuiteval package from version 0.0.1130 to 0.0.1131 |
| [#4246](https://github.com/tscircuit/tscircuit.com/pull/4246) | 🐌 Tiny | tscircuitbot | Updates the tscircuitrunframe package from version 0.0.2364 to 0.0.2365 |

</details>

### [tscircuit/eval](https://github.com/tscircuit/eval)


<details>
<summary>🐌 Tiny Contributions (19)</summary>

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#3708](https://github.com/tscircuit/eval/pull/3708) | 🐌 Tiny | tscircuitbot | Automated package update to version 0.0.1139 |
| [#3707](https://github.com/tscircuit/eval/pull/3707) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#3705](https://github.com/tscircuit/eval/pull/3705) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#3704](https://github.com/tscircuit/eval/pull/3704) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#3702](https://github.com/tscircuit/eval/pull/3702) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#3700](https://github.com/tscircuit/eval/pull/3700) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#3699](https://github.com/tscircuit/eval/pull/3699) | 🐌 Tiny | tscircuitbot | Updates the version of the tscircuitcore package from 0.0.1605 to 0.0.1606 in package.json |
| [#3696](https://github.com/tscircuit/eval/pull/3696) | 🐌 Tiny | tscircuitbot | Updates the version of the tscircuitcore package from 0.0.1604 to 0.0.1605 in package.json |
| [#3697](https://github.com/tscircuit/eval/pull/3697) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#3694](https://github.com/tscircuit/eval/pull/3694) | 🐌 Tiny | tscircuitbot | Updates the version of the tscircuitcore package from 0.0.1603 to 0.0.1604 in package.json |
| [#3693](https://github.com/tscircuit/eval/pull/3693) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#3692](https://github.com/tscircuit/eval/pull/3692) | 🐌 Tiny | tscircuitbot | Updates the version of the tscircuitcore package from 0.0.1602 to 0.0.1603 in package.json |
| [#3690](https://github.com/tscircuit/eval/pull/3690) | 🐌 Tiny | tscircuitbot | Updates the package version from 0.0.1132 to 0.0.1133 in package.json |
| [#3689](https://github.com/tscircuit/eval/pull/3689) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#3687](https://github.com/tscircuit/eval/pull/3687) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#3686](https://github.com/tscircuit/eval/pull/3686) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#3680](https://github.com/tscircuit/eval/pull/3680) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#3679](https://github.com/tscircuit/eval/pull/3679) | 🐌 Tiny | tscircuitbot | Updates the versions of several dependencies in the package.json file. |
| [#3695](https://github.com/tscircuit/eval/pull/3695) | 🐌 Tiny | tscircuitbot | Automated package update |

</details>

### [tscircuit/runframe](https://github.com/tscircuit/runframe)


<details>
<summary>🐌 Tiny Contributions (26)</summary>

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#4349](https://github.com/tscircuit/runframe/pull/4349) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#4347](https://github.com/tscircuit/runframe/pull/4347) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#4346](https://github.com/tscircuit/runframe/pull/4346) | 🐌 Tiny | tscircuitbot | Updates the tscircuiteval package from version 0.0.1137 to 0.0.1139 |
| [#4345](https://github.com/tscircuit/runframe/pull/4345) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#4344](https://github.com/tscircuit/runframe/pull/4344) | 🐌 Tiny | tscircuitbot | Updates the circuit-json-to-gerber package from version 0.0.89 to 0.0.90 |
| [#4343](https://github.com/tscircuit/runframe/pull/4343) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#4342](https://github.com/tscircuit/runframe/pull/4342) | 🐌 Tiny | tscircuitbot | Updates the tscircuiteval package from version 0.0.1136 to 0.0.1137 in the package.json file. |
| [#4341](https://github.com/tscircuit/runframe/pull/4341) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#4340](https://github.com/tscircuit/runframe/pull/4340) | 🐌 Tiny | tscircuitbot | Updates the circuit-json-to-gerber package from version 0.0.88 to 0.0.89 |
| [#4330](https://github.com/tscircuit/runframe/pull/4330) | 🐌 Tiny | tscircuitbot | Updates the tscircuiteval package from version 0.0.1131 to 0.0.1132 in the package.json file. |
| [#4325](https://github.com/tscircuit/runframe/pull/4325) | 🐌 Tiny | tscircuitbot | Updates the package version from 0.0.2361 to 0.0.2362 in package.json |
| [#4324](https://github.com/tscircuit/runframe/pull/4324) | 🐌 Tiny | tscircuitbot | Updates the tscircuiteval package from version 0.0.1130 to 0.0.1131 in the package.json file. |
| [#4339](https://github.com/tscircuit/runframe/pull/4339) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#4338](https://github.com/tscircuit/runframe/pull/4338) | 🐌 Tiny | tscircuitbot | Updates the tscircuiteval package from version 0.0.1135 to 0.0.1136 in the package.json file. |
| [#4337](https://github.com/tscircuit/runframe/pull/4337) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#4336](https://github.com/tscircuit/runframe/pull/4336) | 🐌 Tiny | tscircuitbot | Updates the tscircuiteval package from version 0.0.1134 to 0.0.1135 in the package.json file. |
| [#4335](https://github.com/tscircuit/runframe/pull/4335) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#4334](https://github.com/tscircuit/runframe/pull/4334) | 🐌 Tiny | tscircuitbot | Updates the tscircuiteval package to version 0.0.1134 in the package.json file. |
| [#4333](https://github.com/tscircuit/runframe/pull/4333) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#4331](https://github.com/tscircuit/runframe/pull/4331) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#4329](https://github.com/tscircuit/runframe/pull/4329) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#4328](https://github.com/tscircuit/runframe/pull/4328) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#4327](https://github.com/tscircuit/runframe/pull/4327) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#4326](https://github.com/tscircuit/runframe/pull/4326) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#4332](https://github.com/tscircuit/runframe/pull/4332) | 🐌 Tiny | tscircuitbot | Updates the tscircuiteval package from version 0.0.1132 to 0.0.1133 in the project dependencies. |
| [#4348](https://github.com/tscircuit/runframe/pull/4348) | 🐌 Tiny | imrishabh18 | Updates the easyeda dependency from version 0.0.279 to 0.0.280, which includes a fix for symbol generation by removing explicit strokeWidth properties from imported EasyEDA symbol elements. |

</details>

### [tscircuit/circuit-json-to-step](https://github.com/tscircuit/circuit-json-to-step)

| PR # | Impact | Rating | Contributor | Description |
|------|--------|--------|-------------|-------------|
| [#125](https://github.com/tscircuit/circuit-json-to-step/pull/125) | 🐙 Minor | ⭐⭐ | seveibar | Fixes the PCB top face outer wire so its oriented edges form a continuous loop and adds regression coverage to check for connectivity breaks in large planar board loops. |
| [#123](https://github.com/tscircuit/circuit-json-to-step/pull/123) | 🐙 Minor | ⭐⭐ | seveibar | Fixes the issue of disconnected circular edges in cylindrical wall boundaries, preventing the introduction of mid-plane vertices during tessellation. |

<details>
<summary>🐌 Tiny Contributions (2)</summary>

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#124](https://github.com/tscircuit/circuit-json-to-step/pull/124) | 🐌 Tiny | tscircuitbot | Updates the package version from 0.0.39 to 0.0.41 in package.json |
| [#121](https://github.com/tscircuit/circuit-json-to-step/pull/121) | 🐌 Tiny | seveibar | Add a minimal rounded business-card board fixture derived from the supplied Circuit JSON, preserving the requested dimensions and adding an independent OpenSCAD reference model alongside the Circuit JSON input. |

</details>

### [tscircuit/schematic-trace-solver](https://github.com/tscircuit/schematic-trace-solver)

| PR # | Impact | Rating | Contributor | Description |
|------|--------|--------|-------------|-------------|
| [#772](https://github.com/tscircuit/schematic-trace-solver/pull/772) | 🐳 Major | ⭐⭐⭐ | mohan-bee | Fixes trace routing issues caused by shared component pins that inflate text padding, leading to incorrect trace paths. |
| [#785](https://github.com/tscircuit/schematic-trace-solver/pull/785) | 🐳 Major | ⭐⭐⭐ | MustafaMulla29 | Generates compound candidates for simple five-segment elbows instead of stacking local four-point notches, ranks valid reroutes by Manhattan length, rendered-label overlap count, and point count, and adds an exact regression test for the U1.pin1 route from core repro148. |
| [#781](https://github.com/tscircuit/schematic-trace-solver/pull/781) | 🐳 Major | ⭐⭐⭐ | MustafaMulla29 | Fixes rail label placement issues when crossing different-net trace segments, ensuring proper clearance and avoiding collisions in schematic layouts. |
| [#774](https://github.com/tscircuit/schematic-trace-solver/pull/774) | 🐙 Minor | ⭐⭐ | mohan-bee | Aligns the positioning of same-net rails to ensure they are properly aligned across anchored labels, preventing intersection with label bodies. |

<details>
<summary>🐌 Tiny Contributions (5)</summary>

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#784](https://github.com/tscircuit/schematic-trace-solver/pull/784) | 🐌 Tiny | tscircuitbot | Adds a snapshot-only regression test and debugger page for the attached JSON solver input. |
| [#776](https://github.com/tscircuit/schematic-trace-solver/pull/776) | 🐌 Tiny | tscircuitbot | Adds a snapshot-only regression test and debugger page for the attached JSON solver input. |
| [#771](https://github.com/tscircuit/schematic-trace-solver/pull/771) | 🐌 Tiny | tscircuitbot | Adds a snapshot-only regression test and debugger page for the attached JSON solver input. |
| [#773](https://github.com/tscircuit/schematic-trace-solver/pull/773) | 🐌 Tiny | mohan-bee | Adds a reproduction test for the V3V3 trace step in the power section autolayout. |
| [#780](https://github.com/tscircuit/schematic-trace-solver/pull/780) | 🐌 Tiny | MustafaMulla29 | Adds a complete reproduction of the RP2040 schematic input that exposes a tracelabel collision, enabling future solver changes to be developed and visually reviewed against this exact input. |

</details>

### [tscircuit/test-github-automerge](https://github.com/tscircuit/test-github-automerge)


<details>
<summary>🐌 Tiny Contributions (1)</summary>

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#62](https://github.com/tscircuit/test-github-automerge/pull/62) | 🐌 Tiny | tscircuitbot | Updates the tscircuitcircuit-json-util package from version 0.0.104 to 0.0.105 in the development dependencies. |

</details>

### [tscircuit/circuit-json](https://github.com/tscircuit/circuit-json)

| PR # | Impact | Rating | Contributor | Description |
|------|--------|--------|-------------|-------------|
| [#688](https://github.com/tscircuit/circuit-json/pull/688) | 🐳 Major | ⭐⭐⭐ | seveibar | Adds an optional source_trace_id to schematic_text, allowing inline net labels to be distinguished from free-standing text and enabling consumers to resolve the net they belong to. |

### [tscircuit/docs](https://github.com/tscircuit/docs)

| PR # | Impact | Rating | Contributor | Description |
|------|--------|--------|-------------|-------------|
| [#835](https://github.com/tscircuit/docs/pull/835) | 🐳 Major | ⭐⭐⭐ | seveibar | Refocuses the circuit-generation guide around writing effective AI prompts, adds a reusable prompt template, and includes real tscircuit prompt examples for various use cases. |

### [tscircuit/easyedats](https://github.com/tscircuit/easyedats)

| PR # | Impact | Rating | Contributor | Description |
|------|--------|--------|-------------|-------------|
| [#4](https://github.com/tscircuit/easyedats/pull/4) | 🐳 Major | ⭐⭐⭐ | seveibar | Summary add structured EasyEDA parse errors with document paths, record tokens, field positions, and configurable safety limits render raster data images safely, add an explicit remote-image policy, and expose SVG diagnostics for blocked, unsupported, or partially rendered content add opt-in PCB net highlighting and shape-selection metadata add focused mutation coverage for every documented Standard token plus deterministic property and fuzz suites provide inspect, validate, normalize, round-trip, and SVG CLI commands verify the public API in Bun, bundled Node.js ESM, and a browser-targeted bundle mark the corresponding ten existing support-checklist items complete  Why These capabilities make malformed and unsupported EasyEDA input observable without weakening lossless round trips, make SVG image handling safe by default, and give contributors executable tooling for reviewing parser and serializer behavior across runtimes.  Developer impact parser callers can catch EasyEdaParseError and inspect stable structured fields SVG callers can use renderEasyEdaSvgWithDiagnostics and opt into remote images, net highlights, or selected-shape metadata contributors can exercise the format from the new CLI and rely on deterministic robustness suites  Validation bun test  53 passing tests, 2,923 assertions bun run typecheck bun run lint bun run format:check git diff --check visually reviewed the new embedded-image SVG snapshot |

### [tscircuit/props](https://github.com/tscircuit/props)

| PR # | Impact | Rating | Contributor | Description |
|------|--------|--------|-------------|-------------|
| [#784](https://github.com/tscircuit/props/pull/784) | 🐙 Minor | ⭐⭐ | seveibar | Adds beta_pipeline9 to the autorouterVersion enum (TS type and zod schema in libcomponentsgroup.ts) so users can opt into the new Pipeline9 (AutoroutingPipelineSolver9_PreloadedTraceGraph) autorouter from tscircuit-autorouter. |

### [tscircuit/jlcsearch](https://github.com/tscircuit/jlcsearch)

| PR # | Impact | Rating | Contributor | Description |
|------|--------|--------|-------------|-------------|
| [#437](https://github.com/tscircuit/jlcsearch/pull/437) | 🐙 Minor | ⭐⭐ | seveibar | Fixes parsing of ARM processor memory attributes by converting them into byte counts and correcting the rendering of memory values without misleading decimals. |

### [tscircuit/usbc-hub](https://github.com/tscircuit/usbc-hub)


<details>
<summary>🐌 Tiny Contributions (2)</summary>

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#2](https://github.com/tscircuit/usbc-hub/pull/2) | 🐌 Tiny | seveibar | Add a project-specific fabrication readiness checklist that records the checks that already pass and the remaining Type-C, power, ESDEMI, signal-integrity, BOM, and fabrication-release gates. |
| [#1](https://github.com/tscircuit/usbc-hub/pull/1) | 🐌 Tiny | seveibar | Fixes hardware layout issues in the USB hub by adding crystal load capacitors, local bypass capacitors, and a thermal array, while also updating the BOM and routing documentation. |

</details>

### [tscircuit/rp2350](https://github.com/tscircuit/rp2350)


<details>
<summary>🐌 Tiny Contributions (1)</summary>

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#1](https://github.com/tscircuit/rp2350/pull/1) | 🐌 Tiny | seveibar | Updates the RP2350 design to use specific components as per the hardware design guide and resolves issues with PCB snapshot reproducibility across different architectures. |

</details>

### [tscircuit/footprinter](https://github.com/tscircuit/footprinter)


<details>
<summary>🐌 Tiny Contributions (2)</summary>

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#770](https://github.com/tscircuit/footprinter/pull/770) | 🐌 Tiny | Abse2001 | Adds full names for asymmetric QFN pad parameters while maintaining backward compatibility with existing abbreviated forms. |
| [#760](https://github.com/tscircuit/footprinter/pull/760) | 🐌 Tiny | anil08607 | Sets circular pads as the default option for BGA footprints to ensure compatibility with KiCad. |

</details>

### [tscircuit/circuit-to-canvas](https://github.com/tscircuit/circuit-to-canvas)

| PR # | Impact | Rating | Contributor | Description |
|------|--------|--------|-------------|-------------|
| [#258](https://github.com/tscircuit/circuit-to-canvas/pull/258) | 🐙 Minor | ⭐⭐ | anil08607 | Add rendering support for pcb_silkscreen_graphic BREP shapes, including inner rings with even-odd filling, correct color application, layer filtering, and a visual snapshot test. |

### [tscircuit/calculate-packing](https://github.com/tscircuit/calculate-packing)

| PR # | Impact | Rating | Contributor | Description |
|------|--------|--------|-------------|-------------|
| [#119](https://github.com/tscircuit/calculate-packing/pull/119) | 🐳 Major | ⭐⭐⭐ | imrishabh18 | Rejects outline candidates that cannot fit before constructing their network target mappings, improving efficiency by reducing unnecessary network target builds. |

<details>
<summary>🐌 Tiny Contributions (1)</summary>

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#118](https://github.com/tscircuit/calculate-packing/pull/118) | 🐌 Tiny | imrishabh18 | What changed adds the exact 825-trace tscircuit source that caused PCB packing to appear stuck adds the exact PackInput captured at the PackSolver2 boundary adds a fast fixture-integrity test and an opt-in full-solver reproduction The captured input contains 218 components, 1,767 pads, and 670 weighted connections.  Why This real-world board exposes severe packing slowdown as the placed-component outline grows and candidate evaluation repeatedly processes a large pad and weighted-connection set. Keeping both the source circuit and boundary input makes it possible to profile improvements directly in calculate-packing without rerunning the full tscircuit pipeline. Run the slow reproduction with: sh RUN_SLOW_PACKING_REPRO1 bun test  testsreprosrepro-large-weighted-connections.test.ts  The full solve is opt-in so ordinary CI does not inherit the current multi-minute behavior.  Validation bun test testsreprosrepro-large-weighted-connections.test.ts bun run typecheck Biome formatting check for all three added files |

</details>

### [tscircuit/easyeda-converter](https://github.com/tscircuit/easyeda-converter)


<details>
<summary>🐌 Tiny Contributions (1)</summary>

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#420](https://github.com/tscircuit/easyeda-converter/pull/420) | 🐌 Tiny | imrishabh18 | Omit strokeWidth from generated EasyEDA schematic rectangles, circles, polylines, polygons, paths, and arcs, relying on default stroke widths instead. |

</details>

### [tscircuit/3d-viewer](https://github.com/tscircuit/3d-viewer)

| PR # | Impact | Rating | Contributor | Description |
|------|--------|--------|-------------|-------------|
| [#960](https://github.com/tscircuit/3d-viewer/pull/960) | 🐳 Major | ⭐⭐⭐ | AnasSarkiz | Flux-grade PCB rendering, now the default PCB renders now use the Flux-style product presentation in every viewer path: controlled studio lighting, a satin solder-mask response, physical coppertrace relief, and no engineering grid or rendering-mode fallback. Uses geometry-derived masked-copper maps, so an empty board cannot generate false texture artifacts. Keeps the existing solder-mask color map intact while applying material detail only where copper geometry exists. Keeps Appearance state focused: Lighting and an opt-in Dark Background. Transparency is the default for every new viewer session. Removes the unused engineering grid and shadow-receiver path. Sets Storybook stories to fullscreen so the visual review is edge-to-edge.  Interactive review Open the Keypad preview(https:3d-viewer-ohwimtp1u-tscircuit.vercel.app?pathstorykeypad--default)  Keypad visual comparison  Transparent canvas (default) !Keypad render on a transparent canvas(https:raw.githubusercontent.comAnasSarkiz3d-viewer8fb7cc318d0ef88435230e19762e77513ae2e831.githubpr-assetskeypad-transparent-background.png)  Dark studio background (optional) !Keypad render with the Flux-style dark studio background(https:raw.githubusercontent.comAnasSarkiz3d-viewer8fb7cc318d0ef88435230e19762e77513ae2e831.githubpr-assetskeypad-dark-studio.png)  Validation bun test testsboard-relief-textures.test.ts testsmanifold-board-textures-strict-mode.test.tsx bunx tsc --noEmit --pretty false (blocked only by existing canvas color typing errors outside this change) Biome checks on the changed files |
| [#961](https://github.com/tscircuit/3d-viewer/pull/961) | 🐙 Minor | ⭐⭐ | addibble | Fixes CAD model scaling issue where models with declared sizes shrink when rotated at angles that are not multiples of 90 due to incorrect bounding box calculations. |

### [tscircuit/circuit-json-to-gltf](https://github.com/tscircuit/circuit-json-to-gltf)

| PR # | Impact | Rating | Contributor | Description |
|------|--------|--------|-------------|-------------|
| [#176](https://github.com/tscircuit/circuit-json-to-gltf/pull/176) | 🐳 Major | ⭐⭐⭐ | addibble | Consolidates multiple bounding box calculations into shared functions to ensure consistent handling of edge cases and reduce code duplication. |
| [#175](https://github.com/tscircuit/circuit-json-to-gltf/pull/175) | 🐙 Minor | ⭐⭐ | addibble | Fixes the JSCAD-plan loader to align its geometry frame with other loaders, resolving a 180-degree rotation issue in rendering. |

### [tscircuit/jscad-electronics](https://github.com/tscircuit/jscad-electronics)

| PR # | Impact | Rating | Contributor | Description |
|------|--------|--------|-------------|-------------|
| [#319](https://github.com/tscircuit/jscad-electronics/pull/319) | 🐙 Minor | ⭐⭐ | addibble | Fixes rendering issue where chip footprints named parametrically by their pads were not displayed, resulting in missing components in the 3D view. |

### [tscircuit/matchpack](https://github.com/tscircuit/matchpack)

| PR # | Impact | Rating | Contributor | Description |
|------|--------|--------|-------------|-------------|
| [#197](https://github.com/tscircuit/matchpack/pull/197) | 🐳 Major | ⭐⭐⭐ | mohan-bee | Aligns ordinary signal-net load chains in schematics by modifying the grounded-load algorithm to recognize and arrange isolated signal-to-two-pin-to-ground chains vertically in rows. |
| [#192](https://github.com/tscircuit/matchpack/pull/192) | 🐳 Major | ⭐⭐⭐ | mohan-bee | Aligns rail-load pins with decoupling capacitor rows to ensure proper connection and layout in circuit design. |
| [#195](https://github.com/tscircuit/matchpack/pull/195) | 🐳 Major | ⭐⭐⭐ | mohan-bee | Preserves passive component alignment during horizontal trace clearance adjustments to prevent misalignment of passive components. |
| [#194](https://github.com/tscircuit/matchpack/pull/194) | 🐙 Minor | ⭐⭐ | mohan-bee | Adds a regression test for the auto-layout of polarized capacitors to ensure correct placement when sharing chip and ground connections. |

<details>
<summary>🐌 Tiny Contributions (3)</summary>

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#200](https://github.com/tscircuit/matchpack/pull/200) | 🐌 Tiny | mohan-bee | Adds a new RGB LED section layout reproduction to address issues with chips sliding. |
| [#198](https://github.com/tscircuit/matchpack/pull/198) | 🐌 Tiny | mohan-bee | Fixes the improper placement of parallel series branches in the LED circuit design. |
| [#196](https://github.com/tscircuit/matchpack/pull/196) | 🐌 Tiny | mohan-bee | Adds a focused reproduction test for the Debug LEDs schematic layout, ensuring the layout is captured and can be solved accurately. |

</details>

### [tscircuit/circuit-json-to-gerber](https://github.com/tscircuit/circuit-json-to-gerber)

| PR # | Impact | Rating | Contributor | Description |
|------|--------|--------|-------------|-------------|
| [#134](https://github.com/tscircuit/circuit-json-to-gerber/pull/134) | 🐙 Minor | ⭐⭐ | mohan-bee | Fixes the issue where 45 degree rectangular SMT pads lose their shape in generated Gerber output by emitting them as explicit transformed Gerber regions. |

<details>
<summary>🐌 Tiny Contributions (1)</summary>

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#133](https://github.com/tscircuit/circuit-json-to-gerber/pull/133) | 🐌 Tiny | mohan-bee | Reproduces a bug where 45-degree rotated rectangular SMT pads drop rotation in Gerber output. |

</details>

### [tscircuit/common](https://github.com/tscircuit/common)


<details>
<summary>🐌 Tiny Contributions (1)</summary>

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#93](https://github.com/tscircuit/common/pull/93) | 🐌 Tiny | MustafaMulla29 | Fixes the PCB X and Y coordinates for the Microcontroller RP2040 component to correct positioning issues. |

</details>

### [tscircuit/high-density-repair03](https://github.com/tscircuit/high-density-repair03)

| PR # | Impact | Rating | Contributor | Description |
|------|--------|--------|-------------|-------------|
| [#58](https://github.com/tscircuit/high-density-repair03/pull/58) | 🐳 Major | ⭐⭐⭐ | ShiboSoftwareDev | Prioritizes full-span layer moves for trace-vs-SMT-pad DRC errors to improve error resolution in routing. |
| [#56](https://github.com/tscircuit/high-density-repair03/pull/56) | 🐳 Major | ⭐⭐⭐ | ShiboSoftwareDev | Fixes clearance errors caused by independent movement of colocated same-root via nodes during repair processes. |

<details>
<summary>🐌 Tiny Contributions (2)</summary>

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#57](https://github.com/tscircuit/high-density-repair03/pull/57) | 🐌 Tiny | ShiboSoftwareDev | Reproduces a bug where a terminal-side top-layer trace remains on two foreign SMT pads when the valid escape requires moving the complete span to another layer, without changing solver behavior. |
| [#55](https://github.com/tscircuit/high-density-repair03/pull/55) | 🐌 Tiny | ShiboSoftwareDev | Adds a focused snapshot test to reproduce the scenario where two MST route branches share the same physical via site, demonstrating the independent movement of duplicated via nodes during force repair. |

</details>

### [tscircuit/datasheet-to-tscircuit](https://github.com/tscircuit/datasheet-to-tscircuit)

| PR # | Impact | Rating | Contributor | Description |
|------|--------|--------|-------------|-------------|
| [#37](https://github.com/tscircuit/datasheet-to-tscircuit/pull/37) | 🐳 Major | ⭐⭐⭐ | ShiboSoftwareDev | Separates source discovery from digitization and comparison so Find Reference Graphs publishes only verified source crops. Expands full-datasheet time-graph detection, deterministic eligibility and source verification, and supported fixture handling. Persists Local references in the standard model workspace with empty downstream views visible, backed by restoration, API, and regression coverage. |
| [#34](https://github.com/tscircuit/datasheet-to-tscircuit/pull/34) | 🐳 Major | ⭐⭐⭐ | ShiboSoftwareDev | Allows restarting of SPICE model runs that have completed, failed, or timed out, enhancing the model run management process. |

<details>
<summary>🐌 Tiny Contributions (2)</summary>

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#36](https://github.com/tscircuit/datasheet-to-tscircuit/pull/36) | 🐌 Tiny | ShiboSoftwareDev | Run retained tasks or complete pipelines in isolated .runtimelocal workspaces using validated, content-addressed inputs. List, inspect, and rerun Local results from the CLI or UI, including artifacts and pipeline stage statuses. Add Docker-safe path handling, scoped agent credentials, documentation, and comprehensive regression coverage. |
| [#35](https://github.com/tscircuit/datasheet-to-tscircuit/pull/35) | 🐌 Tiny | ShiboSoftwareDev | Summary split datasheet processing into three authoritative, typed pipelines for component generation, typical applications, and SPICE generation make every pipeline stage consume only its declared dependency output and persist exact debug inputoutput bundles reshape SPICE generation into explicit reference discovery, comparison graph, model inference, TSX generation, simulation, comparison, repair, and publication stages add server endpoints and UI controls to run a whole pipeline, one isolated step, or a selected step and everything after it add a machine-readable local CLI for task inspection, standalone task execution, full pipeline execution, and replaying old jobs at one task, from a task, or end to end persist a versioned pipeline_task_input envelope containing task identity, complete JSON execution context, and dependency outputs run local replays in fresh cloned workspaces with rewritten job-local paths, immutable summaries, event streams, and artifacts while leaving historical jobs untouched preserve retained inputs for untouched stages across repeated debug runs and restore the new pipeline snapshots across server restarts update architecture documentation and regression coverage for pipeline registries, isolated execution, and non-destructive replay  Why The previous workflow mixed component and typical-application work and did not expose a reproducible way to rerun an individual stage. The UI debugger also was not sufficient for a local coding agent: the agent needed a deterministic CLI contract to discover, inspect, and execute the same work from retained inputs. The new pipelinetask contract gives each stage an explicit input boundary and creates fresh, inspectable invocation artifacts for debugging. Pipelines are now composition only: they pass one task output to the next, while the same task can be invoked directly from its retained input.  User and developer impact Completed tasks expose separate Component, Typical application, and SPICE debugger controls. Developers and coding agents can use bun run debug -- to: discover all pipelines and tasks list retained jobs and traces inspect a task input and its referenced paths run one task from its input run a complete pipeline from an input envelope replay an old jobs task, suffix, or full pipeline Replay clones the source job into .runtimereplays by default and never mutates the retained historical job.  Validation bun test --timeout 30000  625 passed, 10 skipped, 0 failed bun run typecheck bun run format:check bun run build:web CLI smoke checks for catalog and help output end-to-end replay regression proving standalone and old-job task commands leave the source job checkpoint unchanged local browser verification of all three debugger entry points and the SPICE stage modal, with no console errors |

</details>

### [tscircuit/contribution-tracker](https://github.com/tscircuit/contribution-tracker)

| PR # | Impact | Rating | Contributor | Description |
|------|--------|--------|-------------|-------------|
| [#354](https://github.com/tscircuit/contribution-tracker/pull/354) | 🐙 Minor | ⭐⭐ | ShiboSoftwareDev | Fixes pagination for closed pull requests to ensure all relevant contributions are included in scoring and updates the README generation process to prevent overwriting current week data with historical data. |

### [tscircuit/system-block-designer](https://github.com/tscircuit/system-block-designer)

| PR # | Impact | Rating | Contributor | Description |
|------|--------|--------|-------------|-------------|
| [#65](https://github.com/tscircuit/system-block-designer/pull/65) | 🐳 Major | ⭐⭐⭐ | techmannih | Add a Bluetooth Speaker page and Cosmos fixture using the TI blocks introduced in 64, modeling the CC2564C Bluetooth controller, MSP430F5229 host, TAS2505 amplifier, BQ24074 charger, and TPS7A2018 regulator, including 5 blocks, 43 ports, and 27 system connections, while preserving complete power and ground connectivity in the system diagram and verifying supported HCI, IC, and PCM traces emitted in generated TSX. |
| [#64](https://github.com/tscircuit/system-block-designer/pull/64) | 🐙 Minor | ⭐⭐ | techmannih | Updates the TI dependency to version 1.0.93 and adds missing definitions and classes for new TI system blocks, enabling their use in future designs. |

### [tscircuit/ti](https://github.com/tscircuit/ti)


<details>
<summary>🐌 Tiny Contributions (13)</summary>

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#106](https://github.com/tscircuit/ti/pull/106) | 🐌 Tiny | techmannih | Adds manufacturable PCB support for the Bluetooth speaker reference subcircuits. |
| [#104](https://github.com/tscircuit/ti/pull/104) | 🐌 Tiny | techmannih | Adjusts the schematic layout of the CC2564C Bluetooth controller to ensure all components fit within the designated sheet bounds. |
| [#105](https://github.com/tscircuit/ti/pull/105) | 🐌 Tiny | techmannih | Adjusts the schematic positioning of components in the BluetoothAudioHost MSP430F5229 to ensure they fit within the designated sheet bounds. |
| [#103](https://github.com/tscircuit/ti/pull/103) | 🐌 Tiny | techmannih | Add a multi-sheet Bluetooth speaker example combining the CC2564C, MSP430F5229, TAS2505, BQ24074, and TPS7A2018 subcircuits |
| [#102](https://github.com/tscircuit/ti/pull/102) | 🐌 Tiny | techmannih | Normalizes MSP430 pin labels to an alphanumericunderscore format and removes an unused schematic box from the BQ24074 subcircuit. |
| [#101](https://github.com/tscircuit/ti/pull/101) | 🐌 Tiny | techmannih | Adds the TPS7A2018PDBVR 1.8 V SOT-23-5 chip definition and a typical TPS7A2018 LDO subcircuit with 1 uF inputoutput capacitors, making it available as a ready-to-use component. |
| [#100](https://github.com/tscircuit/ti/pull/100) | 🐌 Tiny | techmannih | Add the MSP430F5229 chip components and BluetoothAudioHost_MSP430F5229 reference subcircuit with documentation and PCBschematic snapshots. |
| [#97](https://github.com/tscircuit/ti/pull/97) | 🐌 Tiny | techmannih | Adds the CC2564C Bluetooth controller chip definition and a reusable BluetoothController_CC2564C reference subcircuit, along with documentation and schematic snapshot, while omitting the PCB snapshot. |
| [#95](https://github.com/tscircuit/ti/pull/95) | 🐌 Tiny | techmannih | Add TLV75533PDBVR chip definition and TLV755P short-name wrapper, along with a reusable PowerManagement_TLV755P 3.3 V LDO reference subcircuit, enabling consumers to import these components directly from the package. |
| [#94](https://github.com/tscircuit/ti/pull/94) | 🐌 Tiny | techmannih | Add BQ24072RGTR and BQ24073RGTR chip definitions with short-name wrappers and reusable BatteryManagement_BQ24072 and BatteryManagement_BQ24073 reference subcircuits. |
| [#98](https://github.com/tscircuit/ti/pull/98) | 🐌 Tiny | techmannih | Add the MSP430G2230ID chip definition and reusable TargetSocket_MSPTS430D8 target-socket subcircuit, along with documentation and schematic snapshot. |
| [#96](https://github.com/tscircuit/ti/pull/96) | 🐌 Tiny | techmannih | Add TPS7A20 power management subcircuit with chip definition and reusable component for 3.3 V LDO. |
| [#93](https://github.com/tscircuit/ti/pull/93) | 🐌 Tiny | techmannih | Add a TAS2505 chip definition with its QFN footprint, pin labels, supplier part number, and schematic layout, along with a reusable TAS2505 audio-amplifier application subcircuit. |

</details>

## Changes by Contributor

### [0hmX](https://github.com/0hmX)

| PRs # | Impact | Rating | Description |
|------|--------|--------|-------------|
| [#13](https://github.com/tscircuit/rfc/pull/13) | 🐳 Major | ⭐⭐⭐ | Defines differential-pair conductors as strictly point-to-point, providing clear diagnostics for ambiguous connections. |
| [#3009](https://github.com/tscircuit/core/pull/3009) | 🐳 Major | ⭐⭐⭐ | Bumps tscircuitcapacity-autorouter from 0.0.744 to 0.0.748, refreshing affected deterministic autorouting snapshots to incorporate fixes for dual-meander routing and safe trace repair. |
| [#1925](https://github.com/tscircuit/tscircuit-autorouter/pull/1925) | 🐳 Major | ⭐⭐⭐ | Pins the post-processing solver revision to return input HD routes when post-processing fails, updates regression tests to expect successful completion instead of an exception, and modifies the visualization snapshot accordingly. |
| [#1923](https://github.com/tscircuit/tscircuit-autorouter/pull/1923) | 🐳 Major | ⭐⭐⭐ | What changed add bugreport82-0e99ec using the full, unminimized F1C200s board Simple Route JSON add an AutoroutingPipelineDebugger fixture add a focused characterization test for the PostProcessingSolver layer-transition exception add the last-step SVG snapshot captured at the failure state  Why The default autorouter creates an HD route named source_net_8_mst3 whose layer transition does not resolve to exactly one via. PostProcessingSolver rejects that route and aborts the board route. The fixture retains all 218 obstacles and 26 connections. Its canonical SRJ SHA-256 matches the original tsci build --autorouter-dump-srj failed output: 5023393d62bf7b3845dd3da50fe5cc112a5ddd3ef06bc2b87a3e8ab5fd1c1475.  Validation bun run build bun test --timeout 9999999 testsbugsbugreport82-0e99ec.test.ts The focused test reproduces the exact exception, asserts the failed solver state, and verifies the SVG snapshot while remaining green for CI.  Follow-up 1925 implements non-ideal fallback output for this reproduction. tscircuitlength-matching-solver39 implements the core solver behavior. |
| [#37](https://github.com/tscircuit/altiumts/pull/37) | 🐳 Major | ⭐⭐⭐ | Summary extract the native TMetafile and TdxPNGImage payloads stored after Altiums embedded bitmap preview add a bounded EMF-to-SVG renderer for the GDI record subset used by the TI TMDS62LEVM design preserve vector paths, Unicode text, fonts, rotation, alignment, and anisotropic coordinate mapping compose TIs adjacent SRCPAINT 1-bit masks and SRCAND 24-bit bitmap records into transparent native-resolution images prefer native SVGPNG content in schematic serialization while retaining the existing bitmap fallback for malformed or unsupported payloads add focused extraction, rendering, malformed-input, and format-selection coverage  Root cause Altium image streams contain a bitmap preview followed by the original native image payload. The existing parser stopped after the bitmap, so the browser viewer embedded a low-resolution PNG preview. Zooming therefore enlarged fixed pixels even when the source document contained an EMF vector drawing or a higher-resolution PNG.  Impact The affected TI sheets now use their original artwork: sheet 05 renders 5,870 vector paths and 491 text elements as SVG sheets 0508 and 11 retain their vector content sheet 09 uses its two native high-resolution PNGs sheet 10 renders its native transparent bitmap tiles instead of the small preview Unknown EMF operations and invalid native payloads continue to fall back safely to the existing preview behavior.  Validation biome check on all changed source and test files library and site TypeScript checks focused embedded-image tests: 2 passed, 25 assertions Vite production site build ESM, declaration, CLI, and package verification build browser verification using the exact TI ZIP from Downloads: sheet 05 remained crisp and readable after 3 zoom, with no browser console errors |
| [#113](https://github.com/tscircuit/circuit-json-util/pull/113) | 🐙 Minor | ⭐⭐ | Adds a new diagnostic category source to categorize specific warnings in the DRC process, preserving existing mappings and documentation. |
| [#3017](https://github.com/tscircuit/core/pull/3017) | 🐙 Minor | ⭐⭐ | Clarifies warnings for differential pairs with ambiguous trace names by providing specific diagnostics without prescriptive advice. |
| [#3011](https://github.com/tscircuit/core/pull/3011) | 🐙 Minor | ⭐⭐ | Adds a warning mechanism for differential pairs that do not connect point-to-point, enhancing design rule checks in the circuit. |
| [#4062](https://github.com/tscircuit/cli/pull/4062) | 🐙 Minor | ⭐⭐ | Add a new check source subcommand to validate source diagnostics and enhance the existing check command to print all detected errors and warnings without category filtering. |
| [#39](https://github.com/tscircuit/length-matching-solver/pull/39) | 🐙 Minor | ⭐⭐ | Returns structured post-processing errors by default, providing original input HD routes when validation fails and including a structured postProcessingErrors array in the output. |

<details>
<summary>🐌 Tiny Contributions (1)</summary>

| PR # | Impact | Description |
|------|--------|-------------|
| [#3010](https://github.com/tscircuit/core/pull/3010) | 🐌 Tiny | Bump tscircuitcapacity-autorouter from 0.0.748 to 0.0.750, enabling the autorouter to preserve non-ideal fallback output when post-processing cannot produce the ideal route. |

</details>

### [tscircuitbot](https://github.com/tscircuitbot)


<details>
<summary>🐌 Tiny Contributions (140)</summary>

| PR # | Impact | Description |
|------|--------|-------------|
| [#4311](https://github.com/tscircuit/tscircuit/pull/4311) | 🐌 Tiny | Updates the package version from 0.0.2245 to 0.0.2246 in package.json |
| [#4310](https://github.com/tscircuit/tscircuit/pull/4310) | 🐌 Tiny | Updates the tscircuitcli package from version 0.1.1842 to 0.1.1843 and the tscircuitrunframe package from version 0.0.2373 to 0.0.2374 in package.json |
| [#4309](https://github.com/tscircuit/tscircuit/pull/4309) | 🐌 Tiny | Automated package update |
| [#4308](https://github.com/tscircuit/tscircuit/pull/4308) | 🐌 Tiny | Automated package update |
| [#4307](https://github.com/tscircuit/tscircuit/pull/4307) | 🐌 Tiny | Automated package update to version 0.0.2244 |
| [#4306](https://github.com/tscircuit/tscircuit/pull/4306) | 🐌 Tiny | Updates the tscircuitcli package to version 0.1.1841 in the package.json file |
| [#4305](https://github.com/tscircuit/tscircuit/pull/4305) | 🐌 Tiny | Automated package update |
| [#4304](https://github.com/tscircuit/tscircuit/pull/4304) | 🐌 Tiny | Updates the tscircuitcli package to version 0.1.1840 |
| [#4303](https://github.com/tscircuit/tscircuit/pull/4303) | 🐌 Tiny | Automated package update |
| [#4302](https://github.com/tscircuit/tscircuit/pull/4302) | 🐌 Tiny | Updates the tscircuitcli package version from 0.1.1838 to 0.1.1839 |
| [#4301](https://github.com/tscircuit/tscircuit/pull/4301) | 🐌 Tiny | Automated package update |
| [#4300](https://github.com/tscircuit/tscircuit/pull/4300) | 🐌 Tiny | Automated package update |
| [#4299](https://github.com/tscircuit/tscircuit/pull/4299) | 🐌 Tiny | Automated package update |
| [#4298](https://github.com/tscircuit/tscircuit/pull/4298) | 🐌 Tiny | Updates the tscircuitcli package from version 0.1.1836 to 0.1.1837 and the tscircuitrunframe package from version 0.0.2370 to 0.0.2371 in the package.json file. |
| [#4297](https://github.com/tscircuit/tscircuit/pull/4297) | 🐌 Tiny | Updates the package version from 0.0.2238 to 0.0.2239 in package.json |
| [#4296](https://github.com/tscircuit/tscircuit/pull/4296) | 🐌 Tiny | Updates the tscircuitcli and related packages to their latest versions. |
| [#4295](https://github.com/tscircuit/tscircuit/pull/4295) | 🐌 Tiny | Automated package update |
| [#4294](https://github.com/tscircuit/tscircuit/pull/4294) | 🐌 Tiny | Updates the tscircuitcli package from version 0.1.1834 to 0.1.1835 and the tscircuitrunframe package from version 0.0.2369 to 0.0.2370 in the package.json file. |
| [#4280](https://github.com/tscircuit/tscircuit/pull/4280) | 🐌 Tiny | Updates the tscircuitcli package from version 0.1.1828 to 0.1.1829 and the tscircuitrunframe package from version 0.0.2363 to 0.0.2364. |
| [#4293](https://github.com/tscircuit/tscircuit/pull/4293) | 🐌 Tiny | Automated package update |
| [#4292](https://github.com/tscircuit/tscircuit/pull/4292) | 🐌 Tiny | Automated package update |
| [#4291](https://github.com/tscircuit/tscircuit/pull/4291) | 🐌 Tiny | Automated package update |
| [#4290](https://github.com/tscircuit/tscircuit/pull/4290) | 🐌 Tiny | Automated package update |
| [#4289](https://github.com/tscircuit/tscircuit/pull/4289) | 🐌 Tiny | Automated package update |
| [#4288](https://github.com/tscircuit/tscircuit/pull/4288) | 🐌 Tiny | Automated package update |
| [#4286](https://github.com/tscircuit/tscircuit/pull/4286) | 🐌 Tiny | Automated package update |
| [#4285](https://github.com/tscircuit/tscircuit/pull/4285) | 🐌 Tiny | Automated package update |
| [#4284](https://github.com/tscircuit/tscircuit/pull/4284) | 🐌 Tiny | Updates the versions of several dependencies in the package.json file. |
| [#4283](https://github.com/tscircuit/tscircuit/pull/4283) | 🐌 Tiny | Automated package update |
| [#4282](https://github.com/tscircuit/tscircuit/pull/4282) | 🐌 Tiny | Automated package update |
| [#4281](https://github.com/tscircuit/tscircuit/pull/4281) | 🐌 Tiny | Automated package update |
| [#4278](https://github.com/tscircuit/tscircuit/pull/4278) | 🐌 Tiny | Automated package update |
| [#4277](https://github.com/tscircuit/tscircuit/pull/4277) | 🐌 Tiny | Automated package update |
| [#4276](https://github.com/tscircuit/tscircuit/pull/4276) | 🐌 Tiny | Automated package update |
| [#4275](https://github.com/tscircuit/tscircuit/pull/4275) | 🐌 Tiny | Automated package update |
| [#4287](https://github.com/tscircuit/tscircuit/pull/4287) | 🐌 Tiny | Automated package update |
| [#4262](https://github.com/tscircuit/tscircuit.com/pull/4262) | 🐌 Tiny | Automated package update |
| [#4261](https://github.com/tscircuit/tscircuit.com/pull/4261) | 🐌 Tiny | Automated package update for tscircuitrunframe from version 0.0.2372 to 0.0.2373 |
| [#4260](https://github.com/tscircuit/tscircuit.com/pull/4260) | 🐌 Tiny | Updates the tscircuiteval package from version 0.0.1138 to 0.0.1139 |
| [#4259](https://github.com/tscircuit/tscircuit.com/pull/4259) | 🐌 Tiny | Updates the tscircuiteval package from version 0.0.1137 to 0.0.1138 |
| [#4258](https://github.com/tscircuit/tscircuit.com/pull/4258) | 🐌 Tiny | Updates the tscircuitrunframe package from version 0.0.2371 to 0.0.2372 |
| [#4257](https://github.com/tscircuit/tscircuit.com/pull/4257) | 🐌 Tiny | Updates the tscircuitrunframe package from version 0.0.2370 to 0.0.2371 |
| [#4256](https://github.com/tscircuit/tscircuit.com/pull/4256) | 🐌 Tiny | Updates the tscircuiteval package from version 0.0.1136 to 0.0.1137 |
| [#4255](https://github.com/tscircuit/tscircuit.com/pull/4255) | 🐌 Tiny | Automated package update |
| [#4253](https://github.com/tscircuit/tscircuit.com/pull/4253) | 🐌 Tiny | Automated package update |
| [#4252](https://github.com/tscircuit/tscircuit.com/pull/4252) | 🐌 Tiny | Updates the tscircuitrunframe package from version 0.0.2366 to 0.0.2368 |
| [#4249](https://github.com/tscircuit/tscircuit.com/pull/4249) | 🐌 Tiny | Updates the tscircuiteval package from version 0.0.1133 to 0.0.1134 |
| [#4248](https://github.com/tscircuit/tscircuit.com/pull/4248) | 🐌 Tiny | Automated package update |
| [#4247](https://github.com/tscircuit/tscircuit.com/pull/4247) | 🐌 Tiny | Updates the tscircuiteval package from version 0.0.1131 to 0.0.1133 |
| [#4244](https://github.com/tscircuit/tscircuit.com/pull/4244) | 🐌 Tiny | Automated package update |
| [#4243](https://github.com/tscircuit/tscircuit.com/pull/4243) | 🐌 Tiny | Automated package update |
| [#4242](https://github.com/tscircuit/tscircuit.com/pull/4242) | 🐌 Tiny | Automated package update |
| [#4241](https://github.com/tscircuit/tscircuit.com/pull/4241) | 🐌 Tiny | Updates the tscircuiteval package from version 0.0.1130 to 0.0.1131 |
| [#4246](https://github.com/tscircuit/tscircuit.com/pull/4246) | 🐌 Tiny | Updates the tscircuitrunframe package from version 0.0.2364 to 0.0.2365 |
| [#3708](https://github.com/tscircuit/eval/pull/3708) | 🐌 Tiny | Automated package update to version 0.0.1139 |
| [#3707](https://github.com/tscircuit/eval/pull/3707) | 🐌 Tiny | Automated package update |
| [#3705](https://github.com/tscircuit/eval/pull/3705) | 🐌 Tiny | Automated package update |
| [#3704](https://github.com/tscircuit/eval/pull/3704) | 🐌 Tiny | Automated package update |
| [#3702](https://github.com/tscircuit/eval/pull/3702) | 🐌 Tiny | Automated package update |
| [#3700](https://github.com/tscircuit/eval/pull/3700) | 🐌 Tiny | Automated package update |
| [#3699](https://github.com/tscircuit/eval/pull/3699) | 🐌 Tiny | Updates the version of the tscircuitcore package from 0.0.1605 to 0.0.1606 in package.json |
| [#3696](https://github.com/tscircuit/eval/pull/3696) | 🐌 Tiny | Updates the version of the tscircuitcore package from 0.0.1604 to 0.0.1605 in package.json |
| [#3697](https://github.com/tscircuit/eval/pull/3697) | 🐌 Tiny | Automated package update |
| [#3694](https://github.com/tscircuit/eval/pull/3694) | 🐌 Tiny | Updates the version of the tscircuitcore package from 0.0.1603 to 0.0.1604 in package.json |
| [#3693](https://github.com/tscircuit/eval/pull/3693) | 🐌 Tiny | Automated package update |
| [#3692](https://github.com/tscircuit/eval/pull/3692) | 🐌 Tiny | Updates the version of the tscircuitcore package from 0.0.1602 to 0.0.1603 in package.json |
| [#3690](https://github.com/tscircuit/eval/pull/3690) | 🐌 Tiny | Updates the package version from 0.0.1132 to 0.0.1133 in package.json |
| [#3689](https://github.com/tscircuit/eval/pull/3689) | 🐌 Tiny | Automated package update |
| [#3687](https://github.com/tscircuit/eval/pull/3687) | 🐌 Tiny | Automated package update |
| [#3686](https://github.com/tscircuit/eval/pull/3686) | 🐌 Tiny | Automated package update |
| [#3680](https://github.com/tscircuit/eval/pull/3680) | 🐌 Tiny | Automated package update |
| [#3679](https://github.com/tscircuit/eval/pull/3679) | 🐌 Tiny | Updates the versions of several dependencies in the package.json file. |
| [#3695](https://github.com/tscircuit/eval/pull/3695) | 🐌 Tiny | Automated package update |
| [#4349](https://github.com/tscircuit/runframe/pull/4349) | 🐌 Tiny | Automated package update |
| [#4347](https://github.com/tscircuit/runframe/pull/4347) | 🐌 Tiny | Automated package update |
| [#4346](https://github.com/tscircuit/runframe/pull/4346) | 🐌 Tiny | Updates the tscircuiteval package from version 0.0.1137 to 0.0.1139 |
| [#4345](https://github.com/tscircuit/runframe/pull/4345) | 🐌 Tiny | Automated package update |
| [#4344](https://github.com/tscircuit/runframe/pull/4344) | 🐌 Tiny | Updates the circuit-json-to-gerber package from version 0.0.89 to 0.0.90 |
| [#4343](https://github.com/tscircuit/runframe/pull/4343) | 🐌 Tiny | Automated package update |
| [#4342](https://github.com/tscircuit/runframe/pull/4342) | 🐌 Tiny | Updates the tscircuiteval package from version 0.0.1136 to 0.0.1137 in the package.json file. |
| [#4341](https://github.com/tscircuit/runframe/pull/4341) | 🐌 Tiny | Automated package update |
| [#4340](https://github.com/tscircuit/runframe/pull/4340) | 🐌 Tiny | Updates the circuit-json-to-gerber package from version 0.0.88 to 0.0.89 |
| [#4330](https://github.com/tscircuit/runframe/pull/4330) | 🐌 Tiny | Updates the tscircuiteval package from version 0.0.1131 to 0.0.1132 in the package.json file. |
| [#4325](https://github.com/tscircuit/runframe/pull/4325) | 🐌 Tiny | Updates the package version from 0.0.2361 to 0.0.2362 in package.json |
| [#4324](https://github.com/tscircuit/runframe/pull/4324) | 🐌 Tiny | Updates the tscircuiteval package from version 0.0.1130 to 0.0.1131 in the package.json file. |
| [#4339](https://github.com/tscircuit/runframe/pull/4339) | 🐌 Tiny | Automated package update |
| [#4338](https://github.com/tscircuit/runframe/pull/4338) | 🐌 Tiny | Updates the tscircuiteval package from version 0.0.1135 to 0.0.1136 in the package.json file. |
| [#4337](https://github.com/tscircuit/runframe/pull/4337) | 🐌 Tiny | Automated package update |
| [#4336](https://github.com/tscircuit/runframe/pull/4336) | 🐌 Tiny | Updates the tscircuiteval package from version 0.0.1134 to 0.0.1135 in the package.json file. |
| [#4335](https://github.com/tscircuit/runframe/pull/4335) | 🐌 Tiny | Automated package update |
| [#4334](https://github.com/tscircuit/runframe/pull/4334) | 🐌 Tiny | Updates the tscircuiteval package to version 0.0.1134 in the package.json file. |
| [#4333](https://github.com/tscircuit/runframe/pull/4333) | 🐌 Tiny | Automated package update |
| [#4331](https://github.com/tscircuit/runframe/pull/4331) | 🐌 Tiny | Automated package update |
| [#4329](https://github.com/tscircuit/runframe/pull/4329) | 🐌 Tiny | Automated package update |
| [#4328](https://github.com/tscircuit/runframe/pull/4328) | 🐌 Tiny | Automated package update |
| [#4327](https://github.com/tscircuit/runframe/pull/4327) | 🐌 Tiny | Automated package update |
| [#4326](https://github.com/tscircuit/runframe/pull/4326) | 🐌 Tiny | Automated package update |
| [#4332](https://github.com/tscircuit/runframe/pull/4332) | 🐌 Tiny | Updates the tscircuiteval package from version 0.0.1132 to 0.0.1133 in the project dependencies. |
| [#4070](https://github.com/tscircuit/cli/pull/4070) | 🐌 Tiny | Automated package update |
| [#4069](https://github.com/tscircuit/cli/pull/4069) | 🐌 Tiny | Automated package update |
| [#4068](https://github.com/tscircuit/cli/pull/4068) | 🐌 Tiny | Automated package update |
| [#4067](https://github.com/tscircuit/cli/pull/4067) | 🐌 Tiny | Updates the tscircuitrunframe package from version 0.0.2372 to 0.0.2373 |
| [#4066](https://github.com/tscircuit/cli/pull/4066) | 🐌 Tiny | Automated package update |
| [#4065](https://github.com/tscircuit/cli/pull/4065) | 🐌 Tiny | Updates the README to reflect the latest CLI usage output by adding the required parameter for the check command. |
| [#4064](https://github.com/tscircuit/cli/pull/4064) | 🐌 Tiny | Automated package update |
| [#4061](https://github.com/tscircuit/cli/pull/4061) | 🐌 Tiny | Automated package update |
| [#4060](https://github.com/tscircuit/cli/pull/4060) | 🐌 Tiny | Automated package update |
| [#4059](https://github.com/tscircuit/cli/pull/4059) | 🐌 Tiny | Updates the tscircuitrunframe package from version 0.0.2371 to 0.0.2372 |
| [#4057](https://github.com/tscircuit/cli/pull/4057) | 🐌 Tiny | Automated package update |
| [#4056](https://github.com/tscircuit/cli/pull/4056) | 🐌 Tiny | Updates the tscircuitrunframe package version from 0.0.2370 to 0.0.2371 in package.json |
| [#4054](https://github.com/tscircuit/cli/pull/4054) | 🐌 Tiny | Automated package update |
| [#4053](https://github.com/tscircuit/cli/pull/4053) | 🐌 Tiny | Updates the tscircuitrunframe package to version 0.0.2370 in the package.json file |
| [#4035](https://github.com/tscircuit/cli/pull/4035) | 🐌 Tiny | Updates the tscircuitrunframe package from version 0.0.2361 to 0.0.2362 |
| [#4043](https://github.com/tscircuit/cli/pull/4043) | 🐌 Tiny | Automated package update |
| [#4050](https://github.com/tscircuit/cli/pull/4050) | 🐌 Tiny | Updates the tscircuitrunframe package from version 0.0.2368 to 0.0.2369 |
| [#4048](https://github.com/tscircuit/cli/pull/4048) | 🐌 Tiny | Updates the tscircuitrunframe package from version 0.0.2367 to 0.0.2368 |
| [#4047](https://github.com/tscircuit/cli/pull/4047) | 🐌 Tiny | Automated package update |
| [#4046](https://github.com/tscircuit/cli/pull/4046) | 🐌 Tiny | Updates the tscircuitrunframe package from version 0.0.2366 to 0.0.2367 |
| [#4044](https://github.com/tscircuit/cli/pull/4044) | 🐌 Tiny | Updates the tscircuitrunframe package from version 0.0.2365 to 0.0.2366 |
| [#4041](https://github.com/tscircuit/cli/pull/4041) | 🐌 Tiny | Updates the tscircuitrunframe package from version 0.0.2364 to 0.0.2365 |
| [#4040](https://github.com/tscircuit/cli/pull/4040) | 🐌 Tiny | Automated package update |
| [#4039](https://github.com/tscircuit/cli/pull/4039) | 🐌 Tiny | Updates the tscircuitrunframe package from version 0.0.2363 to 0.0.2364 |
| [#4037](https://github.com/tscircuit/cli/pull/4037) | 🐌 Tiny | Updates the tscircuitrunframe package from version 0.0.2362 to 0.0.2363 |
| [#4051](https://github.com/tscircuit/cli/pull/4051) | 🐌 Tiny | Automated package update |
| [#4049](https://github.com/tscircuit/cli/pull/4049) | 🐌 Tiny | Automated package update |
| [#4045](https://github.com/tscircuit/cli/pull/4045) | 🐌 Tiny | Automated package update |
| [#4038](https://github.com/tscircuit/cli/pull/4038) | 🐌 Tiny | Automated package update |
| [#4036](https://github.com/tscircuit/cli/pull/4036) | 🐌 Tiny | Automated package update |
| [#1948](https://github.com/tscircuit/tscircuit-autorouter/pull/1948) | 🐌 Tiny | Automated package update |
| [#1943](https://github.com/tscircuit/tscircuit-autorouter/pull/1943) | 🐌 Tiny | Automated package update |
| [#1936](https://github.com/tscircuit/tscircuit-autorouter/pull/1936) | 🐌 Tiny | Automated package update |
| [#1930](https://github.com/tscircuit/tscircuit-autorouter/pull/1930) | 🐌 Tiny | Automated package update |
| [#1926](https://github.com/tscircuit/tscircuit-autorouter/pull/1926) | 🐌 Tiny | Automated package update |
| [#1924](https://github.com/tscircuit/tscircuit-autorouter/pull/1924) | 🐌 Tiny | Automated package update |
| [#1919](https://github.com/tscircuit/tscircuit-autorouter/pull/1919) | 🐌 Tiny | Automated package update |
| [#124](https://github.com/tscircuit/circuit-json-to-step/pull/124) | 🐌 Tiny | Updates the package version from 0.0.39 to 0.0.41 in package.json |
| [#784](https://github.com/tscircuit/schematic-trace-solver/pull/784) | 🐌 Tiny | Adds a snapshot-only regression test and debugger page for the attached JSON solver input. |
| [#776](https://github.com/tscircuit/schematic-trace-solver/pull/776) | 🐌 Tiny | Adds a snapshot-only regression test and debugger page for the attached JSON solver input. |
| [#771](https://github.com/tscircuit/schematic-trace-solver/pull/771) | 🐌 Tiny | Adds a snapshot-only regression test and debugger page for the attached JSON solver input. |
| [#62](https://github.com/tscircuit/test-github-automerge/pull/62) | 🐌 Tiny | Updates the tscircuitcircuit-json-util package from version 0.0.104 to 0.0.105 in the development dependencies. |

</details>

### [seveibar](https://github.com/seveibar)

| PRs # | Impact | Rating | Description |
|------|--------|--------|-------------|
| [#688](https://github.com/tscircuit/circuit-json/pull/688) | 🐳 Major | ⭐⭐⭐ | Adds an optional source_trace_id to schematic_text, allowing inline net labels to be distinguished from free-standing text and enabling consumers to resolve the net they belong to. |
| [#3024](https://github.com/tscircuit/core/pull/3024) | 🐳 Major | ⭐⭐⭐ | Fixes incorrect attribution of routed traces to source traces due to layer-blind endpoint geometry matching, preventing detection of genuine shorts in PCB design. |
| [#3021](https://github.com/tscircuit/core/pull/3021) | 🐳 Major | ⭐⭐⭐ | Preserves previously routed traces in SimpleRouteJson.traces instead of synthesizing axis-aligned phase obstacles, allowing the autorouter to handle trace-to-obstacle conversion and diagonal approximation. |
| [#4052](https://github.com/tscircuit/cli/pull/4052) | 🐳 Major | ⭐⭐⭐ | Add --autorouter-phase name to build, check trace-length, and dev, enabling automatic autorouter diagnostics for specified phases and capturing relevant events while omitting later phases. |
| [#835](https://github.com/tscircuit/docs/pull/835) | 🐳 Major | ⭐⭐⭐ | Refocuses the circuit-generation guide around writing effective AI prompts, adds a reusable prompt template, and includes real tscircuit prompt examples for various use cases. |
| [#1933](https://github.com/tscircuit/tscircuit-autorouter/pull/1933) | 🐳 Major | ⭐⭐⭐ | Summary Adds a focused Simple Route JSON (SRJ) reproduction from the Allwinner F1C100S Linux laptop motherboard routing experiment. The board uses an LCD connector breakout autorouterdefault to route the connector breakout separately. The breakout phase completes, but a later six-route LCD phase fails during the static reachability precheck.  Reproduction Source project: tscircuitmotherboard-allwinner-f1c100s bash bun run build -- --autorouter-debug  --autorouter-debug-dir distautorouter-debug-breakout-final  --autorouter-dump-srj all  --autorouter-timeout 60s --profile  The checked-in SRJ is the input to routing phase index 4 (phase ordinal 5): 6 connections 889 obstacles 4 routing layers 87 previously routed traces represented in the obstacle reservations The preceding LCD connector breakout phase routed 23 connections successfully. The failing input contains source_trace_178 through source_trace_183.  Observed failure text Static reachability precheck failed: 5 route(s) have no legal path under the current reservation and start-region rules source_trace_182 (50683-50684), source_trace_181 (50685-50686), source_trace_180 (50687-50688), source_trace_179 (50689-50690), source_trace_178 (50691-50692) (capacity-autorouter0.0.722)  The debugger fixture and exact phase-input SRJ are in fixturesbug-reportsbugreport83-f1c100s-breakout.  Validation Parsed the SRJ with jq and Bun JSON import. Confirmed the copied SRJ is byte-for-byte identical to the debug dump. Full autorouter test execution was not run because dependency installation stalled at Resolving dependencies in this environment. |
| [#4](https://github.com/tscircuit/easyedats/pull/4) | 🐳 Major | ⭐⭐⭐ | Summary add structured EasyEDA parse errors with document paths, record tokens, field positions, and configurable safety limits render raster data images safely, add an explicit remote-image policy, and expose SVG diagnostics for blocked, unsupported, or partially rendered content add opt-in PCB net highlighting and shape-selection metadata add focused mutation coverage for every documented Standard token plus deterministic property and fuzz suites provide inspect, validate, normalize, round-trip, and SVG CLI commands verify the public API in Bun, bundled Node.js ESM, and a browser-targeted bundle mark the corresponding ten existing support-checklist items complete  Why These capabilities make malformed and unsupported EasyEDA input observable without weakening lossless round trips, make SVG image handling safe by default, and give contributors executable tooling for reviewing parser and serializer behavior across runtimes.  Developer impact parser callers can catch EasyEdaParseError and inspect stable structured fields SVG callers can use renderEasyEdaSvgWithDiagnostics and opt into remote images, net highlights, or selected-shape metadata contributors can exercise the format from the new CLI and rely on deterministic robustness suites  Validation bun test  53 passing tests, 2,923 assertions bun run typecheck bun run lint bun run format:check git diff --check visually reviewed the new embedded-image SVG snapshot |
| [#784](https://github.com/tscircuit/props/pull/784) | 🐙 Minor | ⭐⭐ | Adds beta_pipeline9 to the autorouterVersion enum (TS type and zod schema in libcomponentsgroup.ts) so users can opt into the new Pipeline9 (AutoroutingPipelineSolver9_PreloadedTraceGraph) autorouter from tscircuit-autorouter. |
| [#3020](https://github.com/tscircuit/core/pull/3020) | 🐙 Minor | ⭐⭐ | Emit named autorouter phases in events, preserving phase names in routing phase plans and providing event metadata for debugging. |
| [#437](https://github.com/tscircuit/jlcsearch/pull/437) | 🐙 Minor | ⭐⭐ | Fixes parsing of ARM processor memory attributes by converting them into byte counts and correcting the rendering of memory values without misleading decimals. |
| [#4058](https://github.com/tscircuit/cli/pull/4058) | 🐙 Minor | ⭐⭐ | Render the rats nest in the initial placement-unrouted.png autorouter debug image and add a visual SVG snapshot with two crossing unrouted connections for reviewers to see the output. |
| [#125](https://github.com/tscircuit/circuit-json-to-step/pull/125) | 🐙 Minor | ⭐⭐ | Fixes the PCB top face outer wire so its oriented edges form a continuous loop and adds regression coverage to check for connectivity breaks in large planar board loops. |
| [#123](https://github.com/tscircuit/circuit-json-to-step/pull/123) | 🐙 Minor | ⭐⭐ | Fixes the issue of disconnected circular edges in cylindrical wall boundaries, preventing the introduction of mid-plane vertices during tessellation. |

<details>
<summary>🐌 Tiny Contributions (5)</summary>

| PR # | Impact | Description |
|------|--------|-------------|
| [#3012](https://github.com/tscircuit/core/pull/3012) | 🐌 Tiny | Changes section divider lines in schematics to be rendered as dashed lines, distinguishing them from electrical connections. |
| [#121](https://github.com/tscircuit/circuit-json-to-step/pull/121) | 🐌 Tiny | Add a minimal rounded business-card board fixture derived from the supplied Circuit JSON, preserving the requested dimensions and adding an independent OpenSCAD reference model alongside the Circuit JSON input. |
| [#2](https://github.com/tscircuit/usbc-hub/pull/2) | 🐌 Tiny | Add a project-specific fabrication readiness checklist that records the checks that already pass and the remaining Type-C, power, ESDEMI, signal-integrity, BOM, and fabrication-release gates. |
| [#1](https://github.com/tscircuit/usbc-hub/pull/1) | 🐌 Tiny | Fixes hardware layout issues in the USB hub by adding crystal load capacitors, local bypass capacitors, and a thermal array, while also updating the BOM and routing documentation. |
| [#1](https://github.com/tscircuit/rp2350/pull/1) | 🐌 Tiny | Updates the RP2350 design to use specific components as per the hardware design guide and resolves issues with PCB snapshot reproducibility across different architectures. |

</details>

### [Abse2001](https://github.com/Abse2001)


<details>
<summary>🐌 Tiny Contributions (1)</summary>

| PR # | Impact | Description |
|------|--------|-------------|
| [#770](https://github.com/tscircuit/footprinter/pull/770) | 🐌 Tiny | Adds full names for asymmetric QFN pad parameters while maintaining backward compatibility with existing abbreviated forms. |

</details>

### [anil08607](https://github.com/anil08607)

| PRs # | Impact | Rating | Description |
|------|--------|--------|-------------|
| [#258](https://github.com/tscircuit/circuit-to-canvas/pull/258) | 🐙 Minor | ⭐⭐ | Add rendering support for pcb_silkscreen_graphic BREP shapes, including inner rings with even-odd filling, correct color application, layer filtering, and a visual snapshot test. |

<details>
<summary>🐌 Tiny Contributions (1)</summary>

| PR # | Impact | Description |
|------|--------|-------------|
| [#760](https://github.com/tscircuit/footprinter/pull/760) | 🐌 Tiny | Sets circular pads as the default option for BGA footprints to ensure compatibility with KiCad. |

</details>

### [imrishabh18](https://github.com/imrishabh18)

| PRs # | Impact | Rating | Description |
|------|--------|--------|-------------|
| [#119](https://github.com/tscircuit/calculate-packing/pull/119) | 🐳 Major | ⭐⭐⭐ | Rejects outline candidates that cannot fit before constructing their network target mappings, improving efficiency by reducing unnecessary network target builds. |
| [#2924](https://github.com/tscircuit/core/pull/2924) | 🐙 Minor | ⭐⭐ | Fixes missing net labels for unnamed direct connections across subcircuits, ensuring both endpoints retain their labels when needed. |

<details>
<summary>🐌 Tiny Contributions (4)</summary>

| PR # | Impact | Description |
|------|--------|-------------|
| [#420](https://github.com/tscircuit/easyeda-converter/pull/420) | 🐌 Tiny | Omit strokeWidth from generated EasyEDA schematic rectangles, circles, polylines, polygons, paths, and arcs, relying on default stroke widths instead. |
| [#4348](https://github.com/tscircuit/runframe/pull/4348) | 🐌 Tiny | Updates the easyeda dependency from version 0.0.279 to 0.0.280, which includes a fix for symbol generation by removing explicit strokeWidth properties from imported EasyEDA symbol elements. |
| [#1947](https://github.com/tscircuit/tscircuit-autorouter/pull/1947) | 🐌 Tiny | Replaces the existing bugreport66 fixture with a corrected autorouting bug report that accurately represents the USB-C component rotation and regenerates the matching SVG snapshot. |
| [#118](https://github.com/tscircuit/calculate-packing/pull/118) | 🐌 Tiny | What changed adds the exact 825-trace tscircuit source that caused PCB packing to appear stuck adds the exact PackInput captured at the PackSolver2 boundary adds a fast fixture-integrity test and an opt-in full-solver reproduction The captured input contains 218 components, 1,767 pads, and 670 weighted connections.  Why This real-world board exposes severe packing slowdown as the placed-component outline grows and candidate evaluation repeatedly processes a large pad and weighted-connection set. Keeping both the source circuit and boundary input makes it possible to profile improvements directly in calculate-packing without rerunning the full tscircuit pipeline. Run the slow reproduction with: sh RUN_SLOW_PACKING_REPRO1 bun test  testsreprosrepro-large-weighted-connections.test.ts  The full solve is opt-in so ordinary CI does not inherit the current multi-minute behavior.  Validation bun test testsreprosrepro-large-weighted-connections.test.ts bun run typecheck Biome formatting check for all three added files |

</details>

### [AnasSarkiz](https://github.com/AnasSarkiz)

| PRs # | Impact | Rating | Description |
|------|--------|--------|-------------|
| [#960](https://github.com/tscircuit/3d-viewer/pull/960) | 🐳 Major | ⭐⭐⭐ | Flux-grade PCB rendering, now the default PCB renders now use the Flux-style product presentation in every viewer path: controlled studio lighting, a satin solder-mask response, physical coppertrace relief, and no engineering grid or rendering-mode fallback. Uses geometry-derived masked-copper maps, so an empty board cannot generate false texture artifacts. Keeps the existing solder-mask color map intact while applying material detail only where copper geometry exists. Keeps Appearance state focused: Lighting and an opt-in Dark Background. Transparency is the default for every new viewer session. Removes the unused engineering grid and shadow-receiver path. Sets Storybook stories to fullscreen so the visual review is edge-to-edge.  Interactive review Open the Keypad preview(https:3d-viewer-ohwimtp1u-tscircuit.vercel.app?pathstorykeypad--default)  Keypad visual comparison  Transparent canvas (default) !Keypad render on a transparent canvas(https:raw.githubusercontent.comAnasSarkiz3d-viewer8fb7cc318d0ef88435230e19762e77513ae2e831.githubpr-assetskeypad-transparent-background.png)  Dark studio background (optional) !Keypad render with the Flux-style dark studio background(https:raw.githubusercontent.comAnasSarkiz3d-viewer8fb7cc318d0ef88435230e19762e77513ae2e831.githubpr-assetskeypad-dark-studio.png)  Validation bun test testsboard-relief-textures.test.ts testsmanifold-board-textures-strict-mode.test.tsx bunx tsc --noEmit --pretty false (blocked only by existing canvas color typing errors outside this change) Biome checks on the changed files |

### [addibble](https://github.com/addibble)

| PRs # | Impact | Rating | Description |
|------|--------|--------|-------------|
| [#176](https://github.com/tscircuit/circuit-json-to-gltf/pull/176) | 🐳 Major | ⭐⭐⭐ | Consolidates multiple bounding box calculations into shared functions to ensure consistent handling of edge cases and reduce code duplication. |
| [#961](https://github.com/tscircuit/3d-viewer/pull/961) | 🐙 Minor | ⭐⭐ | Fixes CAD model scaling issue where models with declared sizes shrink when rotated at angles that are not multiples of 90 due to incorrect bounding box calculations. |
| [#319](https://github.com/tscircuit/jscad-electronics/pull/319) | 🐙 Minor | ⭐⭐ | Fixes rendering issue where chip footprints named parametrically by their pads were not displayed, resulting in missing components in the 3D view. |
| [#175](https://github.com/tscircuit/circuit-json-to-gltf/pull/175) | 🐙 Minor | ⭐⭐ | Fixes the JSCAD-plan loader to align its geometry frame with other loaders, resolving a 180-degree rotation issue in rendering. |

### [mohan-bee](https://github.com/mohan-bee)

| PRs # | Impact | Rating | Description |
|------|--------|--------|-------------|
| [#197](https://github.com/tscircuit/matchpack/pull/197) | 🐳 Major | ⭐⭐⭐ | Aligns ordinary signal-net load chains in schematics by modifying the grounded-load algorithm to recognize and arrange isolated signal-to-two-pin-to-ground chains vertically in rows. |
| [#192](https://github.com/tscircuit/matchpack/pull/192) | 🐳 Major | ⭐⭐⭐ | Aligns rail-load pins with decoupling capacitor rows to ensure proper connection and layout in circuit design. |
| [#195](https://github.com/tscircuit/matchpack/pull/195) | 🐳 Major | ⭐⭐⭐ | Preserves passive component alignment during horizontal trace clearance adjustments to prevent misalignment of passive components. |
| [#772](https://github.com/tscircuit/schematic-trace-solver/pull/772) | 🐳 Major | ⭐⭐⭐ | Fixes trace routing issues caused by shared component pins that inflate text padding, leading to incorrect trace paths. |
| [#134](https://github.com/tscircuit/circuit-json-to-gerber/pull/134) | 🐙 Minor | ⭐⭐ | Fixes the issue where 45 degree rectangular SMT pads lose their shape in generated Gerber output by emitting them as explicit transformed Gerber regions. |
| [#194](https://github.com/tscircuit/matchpack/pull/194) | 🐙 Minor | ⭐⭐ | Adds a regression test for the auto-layout of polarized capacitors to ensure correct placement when sharing chip and ground connections. |
| [#774](https://github.com/tscircuit/schematic-trace-solver/pull/774) | 🐙 Minor | ⭐⭐ | Aligns the positioning of same-net rails to ensure they are properly aligned across anchored labels, preventing intersection with label bodies. |

<details>
<summary>🐌 Tiny Contributions (6)</summary>

| PR # | Impact | Description |
|------|--------|-------------|
| [#3029](https://github.com/tscircuit/core/pull/3029) | 🐌 Tiny | Updates the matchpack dependency from version 0.0.64 to 0.0.70 in the package.json file. |
| [#133](https://github.com/tscircuit/circuit-json-to-gerber/pull/133) | 🐌 Tiny | Reproduces a bug where 45-degree rotated rectangular SMT pads drop rotation in Gerber output. |
| [#200](https://github.com/tscircuit/matchpack/pull/200) | 🐌 Tiny | Adds a new RGB LED section layout reproduction to address issues with chips sliding. |
| [#198](https://github.com/tscircuit/matchpack/pull/198) | 🐌 Tiny | Fixes the improper placement of parallel series branches in the LED circuit design. |
| [#196](https://github.com/tscircuit/matchpack/pull/196) | 🐌 Tiny | Adds a focused reproduction test for the Debug LEDs schematic layout, ensuring the layout is captured and can be solved accurately. |
| [#773](https://github.com/tscircuit/schematic-trace-solver/pull/773) | 🐌 Tiny | Adds a reproduction test for the V3V3 trace step in the power section autolayout. |

</details>

### [MustafaMulla29](https://github.com/MustafaMulla29)

| PRs # | Impact | Rating | Description |
|------|--------|--------|-------------|
| [#3016](https://github.com/tscircuit/core/pull/3016) | 🐳 Major | ⭐⭐⭐ | Fixes discrepancies between schematic trace solver input and rendered net label dimensions, ensuring accurate routing decisions based on correct label sizes. |
| [#3014](https://github.com/tscircuit/core/pull/3014) | 🐳 Major | ⭐⭐⭐ | Fixes trace length propagation for four-pin crystals to ensure that only signal pins are constrained by maximum trace length, preventing autorouting errors related to ground connections. |
| [#785](https://github.com/tscircuit/schematic-trace-solver/pull/785) | 🐳 Major | ⭐⭐⭐ | Generates compound candidates for simple five-segment elbows instead of stacking local four-point notches, ranks valid reroutes by Manhattan length, rendered-label overlap count, and point count, and adds an exact regression test for the U1.pin1 route from core repro148. |
| [#781](https://github.com/tscircuit/schematic-trace-solver/pull/781) | 🐳 Major | ⭐⭐⭐ | Fixes rail label placement issues when crossing different-net trace segments, ensuring proper clearance and avoiding collisions in schematic layouts. |

<details>
<summary>🐌 Tiny Contributions (5)</summary>

| PR # | Impact | Description |
|------|--------|-------------|
| [#3028](https://github.com/tscircuit/core/pull/3028) | 🐌 Tiny | Updates the version of the tscircuitschematic-trace-solver dependency from 0.0.122 to 0.0.125 in package.json |
| [#3027](https://github.com/tscircuit/core/pull/3027) | 🐌 Tiny | Adds a focused schematic reproduction of the DRV8323HRTAR gate-driver upper-pin network from the RP2040 BLDC controller, preserving the upper-pin routing geometry and labels for easier inspection and export to schematic-trace-solver. |
| [#3013](https://github.com/tscircuit/core/pull/3013) | 🐌 Tiny | Add a focused schematic regression test for the RP2040 U1, including a complete set of U1-connected traces and a generated schematic SVG snapshot. |
| [#780](https://github.com/tscircuit/schematic-trace-solver/pull/780) | 🐌 Tiny | Adds a complete reproduction of the RP2040 schematic input that exposes a tracelabel collision, enabling future solver changes to be developed and visually reviewed against this exact input. |
| [#93](https://github.com/tscircuit/common/pull/93) | 🐌 Tiny | Fixes the PCB X and Y coordinates for the Microcontroller RP2040 component to correct positioning issues. |

</details>

### [ShiboSoftwareDev](https://github.com/ShiboSoftwareDev)

| PRs # | Impact | Rating | Description |
|------|--------|--------|-------------|
| [#1937](https://github.com/tscircuit/tscircuit-autorouter/pull/1937) | 🐳 Major | ⭐⭐⭐ | Fixes junction splitting issue in MST branches by ensuring shared-site repairs do not split sites, allowing for valid final-error repair without creating clearance errors. |
| [#1927](https://github.com/tscircuit/tscircuit-autorouter/pull/1927) | 🐳 Major | ⭐⭐⭐ | Fixes clearance-aware stitch selection to ensure generated bridge segments are considered, preventing selection of stitches that cross newly created copper. |
| [#1902](https://github.com/tscircuit/tscircuit-autorouter/pull/1902) | 🐳 Major | ⭐⭐⭐ | Fixes the issue where Dataset 18 sample 11 fails to complete exact DRC repair due to a bounded trace detour not finishing the repair process after canonicalizing a via. |
| [#58](https://github.com/tscircuit/high-density-repair03/pull/58) | 🐳 Major | ⭐⭐⭐ | Prioritizes full-span layer moves for trace-vs-SMT-pad DRC errors to improve error resolution in routing. |
| [#56](https://github.com/tscircuit/high-density-repair03/pull/56) | 🐳 Major | ⭐⭐⭐ | Fixes clearance errors caused by independent movement of colocated same-root via nodes during repair processes. |
| [#37](https://github.com/tscircuit/datasheet-to-tscircuit/pull/37) | 🐳 Major | ⭐⭐⭐ | Separates source discovery from digitization and comparison so Find Reference Graphs publishes only verified source crops. Expands full-datasheet time-graph detection, deterministic eligibility and source verification, and supported fixture handling. Persists Local references in the standard model workspace with empty downstream views visible, backed by restoration, API, and regression coverage. |
| [#34](https://github.com/tscircuit/datasheet-to-tscircuit/pull/34) | 🐳 Major | ⭐⭐⭐ | Allows restarting of SPICE model runs that have completed, failed, or timed out, enhancing the model run management process. |
| [#354](https://github.com/tscircuit/contribution-tracker/pull/354) | 🐙 Minor | ⭐⭐ | Fixes pagination for closed pull requests to ensure all relevant contributions are included in scoring and updates the README generation process to prevent overwriting current week data with historical data. |

<details>
<summary>🐌 Tiny Contributions (6)</summary>

| PR # | Impact | Description |
|------|--------|-------------|
| [#1920](https://github.com/tscircuit/tscircuit-autorouter/pull/1920) | 🐌 Tiny | Adds a test to visualize and reproduce the remaining exact DRC errors after geometry repair for dataset 18 sample 10, without changing solver behavior. |
| [#1900](https://github.com/tscircuit/tscircuit-autorouter/pull/1900) | 🐌 Tiny | Reproduces the DRC failure for dataset 18 sample 11, demonstrating the exact errors encountered during the production pipelines exact-DRC stage. |
| [#57](https://github.com/tscircuit/high-density-repair03/pull/57) | 🐌 Tiny | Reproduces a bug where a terminal-side top-layer trace remains on two foreign SMT pads when the valid escape requires moving the complete span to another layer, without changing solver behavior. |
| [#55](https://github.com/tscircuit/high-density-repair03/pull/55) | 🐌 Tiny | Adds a focused snapshot test to reproduce the scenario where two MST route branches share the same physical via site, demonstrating the independent movement of duplicated via nodes during force repair. |
| [#36](https://github.com/tscircuit/datasheet-to-tscircuit/pull/36) | 🐌 Tiny | Run retained tasks or complete pipelines in isolated .runtimelocal workspaces using validated, content-addressed inputs. List, inspect, and rerun Local results from the CLI or UI, including artifacts and pipeline stage statuses. Add Docker-safe path handling, scoped agent credentials, documentation, and comprehensive regression coverage. |
| [#35](https://github.com/tscircuit/datasheet-to-tscircuit/pull/35) | 🐌 Tiny | Summary split datasheet processing into three authoritative, typed pipelines for component generation, typical applications, and SPICE generation make every pipeline stage consume only its declared dependency output and persist exact debug inputoutput bundles reshape SPICE generation into explicit reference discovery, comparison graph, model inference, TSX generation, simulation, comparison, repair, and publication stages add server endpoints and UI controls to run a whole pipeline, one isolated step, or a selected step and everything after it add a machine-readable local CLI for task inspection, standalone task execution, full pipeline execution, and replaying old jobs at one task, from a task, or end to end persist a versioned pipeline_task_input envelope containing task identity, complete JSON execution context, and dependency outputs run local replays in fresh cloned workspaces with rewritten job-local paths, immutable summaries, event streams, and artifacts while leaving historical jobs untouched preserve retained inputs for untouched stages across repeated debug runs and restore the new pipeline snapshots across server restarts update architecture documentation and regression coverage for pipeline registries, isolated execution, and non-destructive replay  Why The previous workflow mixed component and typical-application work and did not expose a reproducible way to rerun an individual stage. The UI debugger also was not sufficient for a local coding agent: the agent needed a deterministic CLI contract to discover, inspect, and execute the same work from retained inputs. The new pipelinetask contract gives each stage an explicit input boundary and creates fresh, inspectable invocation artifacts for debugging. Pipelines are now composition only: they pass one task output to the next, while the same task can be invoked directly from its retained input.  User and developer impact Completed tasks expose separate Component, Typical application, and SPICE debugger controls. Developers and coding agents can use bun run debug -- to: discover all pipelines and tasks list retained jobs and traces inspect a task input and its referenced paths run one task from its input run a complete pipeline from an input envelope replay an old jobs task, suffix, or full pipeline Replay clones the source job into .runtimereplays by default and never mutates the retained historical job.  Validation bun test --timeout 30000  625 passed, 10 skipped, 0 failed bun run typecheck bun run format:check bun run build:web CLI smoke checks for catalog and help output end-to-end replay regression proving standalone and old-job task commands leave the source job checkpoint unchanged local browser verification of all three debugger entry points and the SPICE stage modal, with no console errors |

</details>

### [techmannih](https://github.com/techmannih)

| PRs # | Impact | Rating | Description |
|------|--------|--------|-------------|
| [#65](https://github.com/tscircuit/system-block-designer/pull/65) | 🐳 Major | ⭐⭐⭐ | Add a Bluetooth Speaker page and Cosmos fixture using the TI blocks introduced in 64, modeling the CC2564C Bluetooth controller, MSP430F5229 host, TAS2505 amplifier, BQ24074 charger, and TPS7A2018 regulator, including 5 blocks, 43 ports, and 27 system connections, while preserving complete power and ground connectivity in the system diagram and verifying supported HCI, IC, and PCM traces emitted in generated TSX. |
| [#64](https://github.com/tscircuit/system-block-designer/pull/64) | 🐙 Minor | ⭐⭐ | Updates the TI dependency to version 1.0.93 and adds missing definitions and classes for new TI system blocks, enabling their use in future designs. |

<details>
<summary>🐌 Tiny Contributions (13)</summary>

| PR # | Impact | Description |
|------|--------|-------------|
| [#106](https://github.com/tscircuit/ti/pull/106) | 🐌 Tiny | Adds manufacturable PCB support for the Bluetooth speaker reference subcircuits. |
| [#104](https://github.com/tscircuit/ti/pull/104) | 🐌 Tiny | Adjusts the schematic layout of the CC2564C Bluetooth controller to ensure all components fit within the designated sheet bounds. |
| [#105](https://github.com/tscircuit/ti/pull/105) | 🐌 Tiny | Adjusts the schematic positioning of components in the BluetoothAudioHost MSP430F5229 to ensure they fit within the designated sheet bounds. |
| [#103](https://github.com/tscircuit/ti/pull/103) | 🐌 Tiny | Add a multi-sheet Bluetooth speaker example combining the CC2564C, MSP430F5229, TAS2505, BQ24074, and TPS7A2018 subcircuits |
| [#102](https://github.com/tscircuit/ti/pull/102) | 🐌 Tiny | Normalizes MSP430 pin labels to an alphanumericunderscore format and removes an unused schematic box from the BQ24074 subcircuit. |
| [#101](https://github.com/tscircuit/ti/pull/101) | 🐌 Tiny | Adds the TPS7A2018PDBVR 1.8 V SOT-23-5 chip definition and a typical TPS7A2018 LDO subcircuit with 1 uF inputoutput capacitors, making it available as a ready-to-use component. |
| [#100](https://github.com/tscircuit/ti/pull/100) | 🐌 Tiny | Add the MSP430F5229 chip components and BluetoothAudioHost_MSP430F5229 reference subcircuit with documentation and PCBschematic snapshots. |
| [#97](https://github.com/tscircuit/ti/pull/97) | 🐌 Tiny | Adds the CC2564C Bluetooth controller chip definition and a reusable BluetoothController_CC2564C reference subcircuit, along with documentation and schematic snapshot, while omitting the PCB snapshot. |
| [#95](https://github.com/tscircuit/ti/pull/95) | 🐌 Tiny | Add TLV75533PDBVR chip definition and TLV755P short-name wrapper, along with a reusable PowerManagement_TLV755P 3.3 V LDO reference subcircuit, enabling consumers to import these components directly from the package. |
| [#94](https://github.com/tscircuit/ti/pull/94) | 🐌 Tiny | Add BQ24072RGTR and BQ24073RGTR chip definitions with short-name wrappers and reusable BatteryManagement_BQ24072 and BatteryManagement_BQ24073 reference subcircuits. |
| [#98](https://github.com/tscircuit/ti/pull/98) | 🐌 Tiny | Add the MSP430G2230ID chip definition and reusable TargetSocket_MSPTS430D8 target-socket subcircuit, along with documentation and schematic snapshot. |
| [#96](https://github.com/tscircuit/ti/pull/96) | 🐌 Tiny | Add TPS7A20 power management subcircuit with chip definition and reusable component for 3.3 V LDO. |
| [#93](https://github.com/tscircuit/ti/pull/93) | 🐌 Tiny | Add a TAS2505 chip definition with its QFN footprint, pin labels, supplier part number, and schematic layout, along with a reusable TAS2505 audio-amplifier application subcircuit. |

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
