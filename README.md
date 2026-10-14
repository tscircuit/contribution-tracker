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

# Contribution Overview 2026-10-13

The current week is shown below. There are 3 major sections:

- [Contributor Overview](#contributor-overview)
- [PRs by Repository](#prs-by-repository)
- [PRs by Contributor](#changes-by-contributor)
- [Scoring & Sponsorship Details](/docs/sponsorship-calculation-explanation.md)

## PRs by Repository

```mermaid
pie
    "tscircuit/core" : 10
    "tscircuit/checks" : 1
    "tscircuit/tscircuit-autorouter" : 8
    "tscircuit/circuit-json-to-gltf" : 2
    "tscircuit/motor-driver-firmware" : 2
    "tscircuit/single-layer-grid-router" : 1
    "tscircuit/schematic-viewer" : 1
    "tscircuit/internal-dynamic-import" : 4
    "tscircuit/tscircuit-standalone" : 4
    "tscircuit/circuit-json-to-kicad" : 2
    "tscircuit/tscircuit" : 45
    "tscircuit/tscircuit.com" : 10
    "tscircuit/eval" : 16
    "tscircuit/runframe" : 22
    "tscircuit/cli" : 24
    "tscircuit/svg.tscircuit.com" : 17
    "tscircuit/circuit-json-to-step" : 2
    "tscircuit/circuit-json-schematic-placement-analysis" : 8
    "tscircuit/easyeda-converter" : 1
    "tscircuit/circuit-json-to-tscircuit" : 2
    "tscircuit/altium-to-circuit-json" : 1
    "tscircuit/3d-viewer" : 1
    "tscircuit/dataset-tsx35-kicad-boards" : 1
    "tscircuit/jscad-electronics" : 1
    "tscircuit/modelprinter" : 1
    "tscircuit/circuit-json-placement-analysis" : 2
    "tscircuit/ti" : 1
```

## Contributor Overview

| Contributor | 🐳 Major | 🐙 Minor | 🐌 Tiny | Score | ⭐ |
|-------------|---------|---------|---------|-------|-----|
| [seveibar](#seveibar) | 8 | 3 | 9 | 48 | ⭐⭐ |
| [imrishabh18](#imrishabh18) | 3 | 4 | 4 | 25 | ⭐⭐ |
| [MustafaMulla29](#MustafaMulla29) | 3 | 1 | 3 | 18 | ⭐⭐ |
| [tscircuitbot](#tscircuitbot) | 0 | 0 | 137 | 16 | ⭐⭐ |
| [ShiboSoftwareDev](#ShiboSoftwareDev) | 1 | 4 | 1 | 15 | ⭐⭐ |
| [techmannih](#techmannih) | 0 | 1 | 1 | 4 | ⭐ |
| [0hmX](#0hmX) | 0 | 1 | 1 | 3 |  |
| [trixie010](#trixie010) | 0 | 1 | 0 | 2 |  |
| [rushabhcodes](#rushabhcodes) | 0 | 0 | 2 | 2 |  |
| [hrithik18k](#hrithik18k) | 0 | 1 | 0 | 2 |  |
| [AnasSarkiz](#AnasSarkiz) | 0 | 0 | 1 | 1 |  |

## Staff Pass Ratio (SPR)

| Contributor | Reviewed PRs | Rejections | Approvals | SPR |
|-------------|--------------|------------|-----------|-----|
| [imrishabh18](#imrishabh18) | 5 | 0 | 5 | 100.0% |
| [MustafaMulla29](#MustafaMulla29) | 4 | 1 | 4 | 75.0% |
| [0hmX](#0hmX) | 1 | 0 | 1 | 100.0% |
| [raykholo](#raykholo) | 1 | 0 | 1 | 100.0% |
| [trixie010](#trixie010) | 1 | 0 | 1 | 100.0% |

<details>
<summary>imrishabh18 SPR PRs (5)</summary>

- [#5348](https://github.com/tscircuit/cli/pull/5348) Serve prepared JS CDN packages in tsci dev
- [#5344](https://github.com/tscircuit/cli/pull/5344) Copy prepared JS CDN packages for static site builds
- [#5324](https://github.com/tscircuit/cli/pull/5324) Add --jscdn-base-url to static site builds
- [#38](https://github.com/tscircuit/internal-dynamic-import/pull/38) Support window.TSCIRCUIT_JSCDN_BASE_URL for browser imports
- [#11](https://github.com/tscircuit/tscircuit-standalone/pull/11) Launch shared CLI with bundled RunFrame JS CDN packages

</details>

<details>
<summary>MustafaMulla29 SPR PRs (4)</summary>

- [#4596](https://github.com/tscircuit/core/pull/4596) Add standalone solder paste apertures
- [#277](https://github.com/tscircuit/circuit-json-schematic-placement-analysis/pull/277) feat: detect inline parallel capacitor pairs
- [#271](https://github.com/tscircuit/circuit-json-schematic-placement-analysis/pull/271) feat: detect ungrouped switch RC networks
- [#249](https://github.com/tscircuit/circuit-json-schematic-placement-analysis/pull/249) feat: detect separated switch diodes and excessive matrix spacing

</details>

<details>
<summary>0hmX SPR PRs (1)</summary>

- [#4529](https://github.com/tscircuit/core/pull/4529) fix: report disallowed blind/buried vias in manual paths

</details>

<details>
<summary>raykholo SPR PRs (1)</summary>

- [#636](https://github.com/tscircuit/circuit-json-to-kicad/pull/636) Export pcb_via tenting to KiCad vias

</details>

<details>
<summary>trixie010 SPR PRs (1)</summary>

- [#598](https://github.com/tscircuit/easyeda-converter/pull/598) fix: stop emitting a duplicate pcb_cutout for every HOLE record

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
| [0hmX](#0hmX) | 2 | 1 | 0 | 1 | 0 | 4 | 2 | 0 |
| [Abse2001](#Abse2001) | 0 | 0 | 0 | 6 | 0 | 5 | 0 | 0 |
| [AnasSarkiz](#AnasSarkiz) | 1 | 1 | 0 | 0 | 0 | 1 | 1 | 0 |
| [atani](#atani) | 19 | 0 | 0 | 0 | 0 | 12 | 0 | 0 |
| [CreedTech](#CreedTech) | 0 | 0 | 0 | 0 | 0 | 1 | 0 | 0 |
| [daniellachev](#daniellachev) | 0 | 0 | 0 | 0 | 0 | 1 | 0 | 0 |
| [Devesh36](#Devesh36) | 0 | 0 | 0 | 0 | 0 | 8 | 0 | 0 |
| [hrithik18k](#hrithik18k) | 1 | 1 | 0 | 0 | 0 | 2 | 1 | 0 |
| [imrishabh18](#imrishabh18) | 7 | 5 | 0 | 2 | 1 | 16 | 11 | 0 |
| [jloa-dev](#jloa-dev) | 0 | 0 | 0 | 0 | 0 | 1 | 0 | 0 |
| [LuisaW07](#LuisaW07) | 0 | 0 | 0 | 0 | 0 | 1 | 0 | 0 |
| [mohan-bee](#mohan-bee) | 0 | 0 | 0 | 1 | 0 | 0 | 0 | 0 |
| [MustafaMulla29](#MustafaMulla29) | 7 | 4 | 0 | 2 | 0 | 9 | 7 | 0 |
| [oziass](#oziass) | 0 | 0 | 0 | 0 | 0 | 1 | 0 | 0 |
| [Pr1yansu](#Pr1yansu) | 0 | 0 | 0 | 0 | 0 | 2 | 0 | 0 |
| [Ratanlavate](#Ratanlavate) | 0 | 0 | 0 | 0 | 0 | 1 | 0 | 0 |
| [raykholo](#raykholo) | 1 | 1 | 0 | 0 | 0 | 1 | 1 | 0 |
| [rushabhcodes](#rushabhcodes) | 10 | 5 | 0 | 0 | 0 | 4 | 2 | 0 |
| [Sayandevxyz](#Sayandevxyz) | 0 | 0 | 0 | 0 | 0 | 5 | 0 | 0 |
| [seveibar](#seveibar) | 5 | 1 | 0 | 12 | 0 | 35 | 20 | 0 |
| [ShiboSoftwareDev](#ShiboSoftwareDev) | 9 | 6 | 0 | 2 | 0 | 51 | 6 | 0 |
| [tarazum](#tarazum) | 0 | 0 | 0 | 0 | 0 | 1 | 0 | 0 |
| [techmannih](#techmannih) | 3 | 0 | 0 | 1 | 0 | 3 | 2 | 0 |
| [trixie010](#trixie010) | 3 | 2 | 1 | 0 | 0 | 2 | 1 | 0 |
| [tscircuitbot](#tscircuitbot) | 0 | 0 | 0 | 0 | 0 | 175 | 139 | 0 |
| [vreview](#vreview) | 0 | 0 | 0 | 0 | 0 | 1 | 0 | 0 |

## Changes by Repository

### [tscircuit/core](https://github.com/tscircuit/core)

| PR # | Impact | Rating | Contributor | Description |
|------|--------|--------|-------------|-------------|
| [#4603](https://github.com/tscircuit/core/pull/4603) | 🐳 Major | ⭐⭐⭐ | seveibar | Fixes autorouting failure by resolving bare trace names and explicit trace selectors, ensuring proper diagnostics for unmatched or ambiguous selectors. |
| [#4604](https://github.com/tscircuit/core/pull/4604) | 🐳 Major | ⭐⭐⭐ | seveibar | Allows chips and connectors to use physical BGA ball names directly in pinLabels, connections, footprint hints, schematic arrangements, and pin styles, resolving previous issues with alias resolution. |
| [#4596](https://github.com/tscircuit/core/pull/4596) | 🐳 Major | ⭐⭐⭐ | MustafaMulla29 | Problem and change solderpaste is defined by tscircuitprops, but Core rejects it as an unregistered element. This adds the native primitive so one continuous copper pad can carry several independent stencil apertures. The renderer uses the existing props and pcb_solder_paste schemas, supports rectangles and circles on either outer layer, and preserves parent rotations, footprint flips, layout movement, and removal. Cached subcircuits retain independent apertures and their orientation, including suppressed full-pad openings. User props remain immutable. Uses the published tscircuitcircuit-json-util0.0.122, which includes https:github.comtscircuitcircuit-json-utilpull238. Cached PCB primitives use the shared transform utility. Circuit JSON import retains an apertures existing rotation as derived state because authored solder-paste props only expose axis-aligned shapes. Cached circular through-hole paste is restored as independent paste geometry, so inflated round holes must not generate it again. This uses Cores existing _isInflatedFromCircuitJson state. Two focused regressions verify that a mixed footprint keeps three automatic paste records and that an explicitly overlapping aperture is preserved, with caching on and off. Each new regression has its own file and labeled snapshot. Pill and oval generation are unchanged. Includes ten solder-paste tests, including a six-window pattern over a single exposed copper pad. Updated to mains isSmt support; keeps tscircuitprops0.0.701 and the released paste transformation fix. Fixes 3577.  Validation All 10 solder-paste tests pass. The two new cache regressions failed before the fix (5 instead of 3 records, and 6 instead of 4). Focused suite: 34 pass, 1 existing pill-paste snapshot mismatch. The 0.12 mismatch reproduces on unchanged main f518678 with the same dependencies and produces an identical diff image; its snapshot is unchanged. Existing isSmt tests, manual-via regression, and standalone primitive caching pass. The manual-via test now matches main exactly. Polygon plated-hole test and both new snapshot comparisons pass after removing ternaries from the newly touched primitive. bunx tsc --noEmit, bun run build, and bun run smoke-test:dist pass. bun run format, git diff --check, and INPUT_PACKAGE_TYPEinternal_lib bunx tscircuitdependency-check pass. Zero ternaries in the 17 changed TSTSX files. The neighboring polygon-paste caching snapshot previously showed a 0.04 mismatch on both this PR and unchanged code with the same dependencies. That baseline is unchanged. The full test suite was not rerun for this update.  Scope This implements Core rendering and Circuit JSON importcache support. It does not change downstream Gerber or KiCad exporters; they must consume independent pcb_solder_paste records to preserve these apertures. |
| [#4619](https://github.com/tscircuit/core/pull/4619) | 🐙 Minor | ⭐⭐ | ShiboSoftwareDev | Fixes the issue where teardrops for equivalent source traces were not rendered correctly, leading to missing teardrops on routed copper. |
| [#4621](https://github.com/tscircuit/core/pull/4621) | 🐙 Minor | ⭐⭐ | ShiboSoftwareDev | Fixes the issue where a requested teardrop is missing when routed copper is attributed to another source trace on the same physical net. |
| [#4529](https://github.com/tscircuit/core/pull/4529) | 🐙 Minor | ⭐⭐ | 0hmX | Reports disallowed blind or buried vias in manual paths when the board disables them, preserving saved copper and aggregating all disallowed vias. |
| [#4593](https://github.com/tscircuit/core/pull/4593) | 🐙 Minor | ⭐⭐ | hrithik18k | Modifies solder paste generation logic to respect the isSmt property, preventing unwanted paste for through-hole components while retaining paste for mixed footprints. |

<details>
<summary>🐌 Tiny Contributions (3)</summary>

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#4609](https://github.com/tscircuit/core/pull/4609) | 🐌 Tiny | seveibar | Updates tscircuitcapacity-autorouter from 0.0.974 to 0.0.982. |
| [#4618](https://github.com/tscircuit/core/pull/4618) | 🐌 Tiny | rushabhcodes | Reproduces a bug where CC traces of a rotated USB-C connector touch grounded shield slots, providing a comprehensive test to validate the issue. |
| [#4617](https://github.com/tscircuit/core/pull/4617) | 🐌 Tiny | rushabhcodes | Update the circuit-json development dependency and override from 0.0.525 to 0.0.528, ensuring the installed schema and public types recognize the ownership field for components. |

</details>

### [tscircuit/checks](https://github.com/tscircuit/checks)

| PR # | Impact | Rating | Contributor | Description |
|------|--------|--------|-------------|-------------|
| [#427](https://github.com/tscircuit/checks/pull/427) | 🐳 Major | ⭐⭐⭐ | seveibar | Reduces unnecessary computation in continuity validation by deferring the construction of the physical trace graph until needed, optimizing the process of checking connectivity between traces. |

### [tscircuit/tscircuit-autorouter](https://github.com/tscircuit/tscircuit-autorouter)

| PR # | Impact | Rating | Contributor | Description |
|------|--------|--------|-------------|-------------|
| [#2998](https://github.com/tscircuit/tscircuit-autorouter/pull/2998) | 🐳 Major | ⭐⭐⭐ | seveibar | Adds a post-repair cleanup stage that commits only valid improvements and preserves route endpoints while reducing via counts in autorouting. |

<details>
<summary>🐌 Tiny Contributions (7)</summary>

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#3063](https://github.com/tscircuit/tscircuit-autorouter/pull/3063) | 🐌 Tiny | seveibar | Updates the tscircuitchecks dependency to version 0.0.255 to recover via-cleanup performance by incorporating continuity geometry optimization. |
| [#3064](https://github.com/tscircuit/tscircuit-autorouter/pull/3064) | 🐌 Tiny | seveibar | Updates the high-density-repair02 dependency to optimize sequential repair by implementing conservative obstacle pruning, cached clearances, boundary checks, and reused spatial-query hits, while preserving candidate ordering and acceptance checks. |
| [#3052](https://github.com/tscircuit/tscircuit-autorouter/pull/3052) | 🐌 Tiny | seveibar | Updates the dependency on tscircuitchecks to version 0.0.249 and modifies two tests for upstream readable-name diagnostics, ensuring tracegap assertions and structured trace-pair identity are retained. |
| [#3044](https://github.com/tscircuit/tscircuit-autorouter/pull/3044) | 🐌 Tiny | seveibar | Updates the trace simplification solver dependency to a specific upstream commit, improving the handling of routed-copper vias and related cache test instrumentation. |
| [#3069](https://github.com/tscircuit/tscircuit-autorouter/pull/3069) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#3062](https://github.com/tscircuit/tscircuit-autorouter/pull/3062) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#3057](https://github.com/tscircuit/tscircuit-autorouter/pull/3057) | 🐌 Tiny | tscircuitbot | Automated package update |

</details>

### [tscircuit/circuit-json-to-gltf](https://github.com/tscircuit/circuit-json-to-gltf)

| PR # | Impact | Rating | Contributor | Description |
|------|--------|--------|-------------|-------------|
| [#256](https://github.com/tscircuit/circuit-json-to-gltf/pull/256) | 🐳 Major | ⭐⭐⭐ | seveibar | Fixes GLB import issues by correctly decoding interleaved vertex data and applying glTF normalization for various component types, ensuring accurate rendering of positions and normals. |

<details>
<summary>🐌 Tiny Contributions (1)</summary>

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#257](https://github.com/tscircuit/circuit-json-to-gltf/pull/257) | 🐌 Tiny | seveibar | Reproduces issue 255 through generated component GLBs, convertCircuitJsonToGltf, and PoppyGL, capturing broken behavior in GLB accessors for further debugging and fixing. |

</details>

### [tscircuit/motor-driver-firmware](https://github.com/tscircuit/motor-driver-firmware)

| PR # | Impact | Rating | Contributor | Description |
|------|--------|--------|-------------|-------------|
| [#14](https://github.com/tscircuit/motor-driver-firmware/pull/14) | 🐳 Major | ⭐⭐⭐ | seveibar | The single-motor jogging page now exposes supported quarter, 18 and 116 step sizes with angular increments and RPM estimates, allowing for more precise motor control. |
| [#13](https://github.com/tscircuit/motor-driver-firmware/pull/13) | 🐳 Major | ⭐⭐⭐ | seveibar | The latest RP2040 motor controller uses DRV8825 STEPDIR, transistor-driven RGB outputs, winding-current ADC inputs and GPIO-controlled CH224K voltage selection. The firmware and dashboard, single-motor jog and gantry pages now support that board while retaining the original DRV8847 profile. Startup keeps the motor disabled at 5 V. Voltage changes disable the driver and enforce a settling interval; temperature, heartbeat, watchdog and driver-fault protection remain active. Automatic RGB status and manual colors are available, with alarms taking priority. The hardware fixes 116 microsteps; larger selected increments group pulses and saved-position GOTO uses the finest supported increment. Validation: 45 Python tests and all dashboardjogGOTOsong checks pass; CI stages both board profiles. On board e66568714f117e21, all 21 uploaded files matched SHA-256. Live Web Serial controls applied RGB settings and the user confirmed LED operation. With the replacement charger and an explicit 9 V request, two 800-microstep forwardreverse moves completed with exact commanded counts, about 0.87 A peak absolute winding samples and no reported faults; the user confirmed the motor spun. Temperature stayed around 28 C and the motor was stopped afterward. Use 9 V with the tested charger. A 15 V request yielded a measured 9 V input and no movement; the actual PG behavior was not measured. Voltage telemetry represents the request and settling timer, not measured rail voltage. Current samples are uncalibrated, and high-speedloadphysical return accuracy remain unverified. |

### [tscircuit/single-layer-grid-router](https://github.com/tscircuit/single-layer-grid-router)

| PR # | Impact | Rating | Contributor | Description |
|------|--------|--------|-------------|-------------|
| [#1](https://github.com/tscircuit/single-layer-grid-router/pull/1) | 🐳 Major | ⭐⭐⭐ | seveibar | Add a single-layer PCB grid routing solver and custom tscircuit algorithmFn. The supplied 74HC00 breakout is reconstructed as a fixture and solves all 14 nets through 20 branches, entirely on one copper layer, without vias or jumpers. The solver extends BaseSolver, uses conservative clearance-aware A, groups shared electrical terminals, and retries deterministic net orders after ripping up generated copper. The event adapter supports async routing, progress, cancellationrestart, and synchronous solves. Include a React Cosmos debugger and handbookplop bootstrap configuration. Every test has a committed visual SVG snapshot, with brief test bodies and setupverification in testsfixtures; AGENTS.md documents this rule. The board dimensions are estimated from the screenshot and documented in the fixture and README. Validation: 11 Bun tests passed, including a real tscircuit layers1 integration, independent continuous connectivityclearance checks, existing copper, rotated obstacles, off-grid terminals, rip-up retries, and failurecancellation behavior. Type checking, format checking, and the Cosmos production export passed. All SVG snapshots were visually inspected. |

### [tscircuit/schematic-viewer](https://github.com/tscircuit/schematic-viewer)

| PR # | Impact | Rating | Contributor | Description |
|------|--------|--------|-------------|-------------|
| [#291](https://github.com/tscircuit/schematic-viewer/pull/291) | 🐙 Minor | ⭐⭐ | seveibar | Fixes dropdown menus appearing behind schematic toolbar controls due to z-index conflict by raising the view-menu layer to 110. |

### [tscircuit/internal-dynamic-import](https://github.com/tscircuit/internal-dynamic-import)

| PR # | Impact | Rating | Contributor | Description |
|------|--------|--------|-------------|-------------|
| [#37](https://github.com/tscircuit/internal-dynamic-import/pull/37) | 🐙 Minor | ⭐⭐ | seveibar | Adds support for lazy loading of JSCAD STEP and Parasolid exporters, including versioned imports and declaration synchronization. |
| [#38](https://github.com/tscircuit/internal-dynamic-import/pull/38) | 🐙 Minor | ⭐⭐ | imrishabh18 | Allows hosts to set window.TSCIRCUIT_JSCDN_BASE_URL for importing optional modules, enabling a standalone CLI to serve bundled dependencies without custom importers. |

<details>
<summary>🐌 Tiny Contributions (2)</summary>

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#40](https://github.com/tscircuit/internal-dynamic-import/pull/40) | 🐌 Tiny | seveibar | Fixes the issue where exporter declaration snapshots were not aligned with the installed published packages, causing build failures during releases. |
| [#39](https://github.com/tscircuit/internal-dynamic-import/pull/39) | 🐌 Tiny | tscircuitbot | Automated package update |

</details>

### [tscircuit/tscircuit-standalone](https://github.com/tscircuit/tscircuit-standalone)

| PR # | Impact | Rating | Contributor | Description |
|------|--------|--------|-------------|-------------|
| [#11](https://github.com/tscircuit/tscircuit-standalone/pull/11) | 🐳 Major | ⭐⭐⭐ | imrishabh18 | The standalone executable now launches the shared tscircuitcli and supplies the prepared JS CDN directory expected by its merged devsite support. The CLI dependency is pinned to merged commit fc0f4e0739ce3b93b1fb1c332387c9ce9449ae98 (tscircuitcli5350). At build time, follow that CLIs RunFrame dependency graph to discover internal-dynamic-import calls, bundle the 11 requested packages from existing dependencies, and reuse the browserWASM adapters. At startup, extract the embedded files into a temporary directory and set TSCIRCUIT_STANDALONE1 and TSCIRCUIT_JSCDN_DIR before loading the CLI. tsci dev serves jscdn; tsci build --site automatically copies the files into distjscdn. Asset URLs remain relative for sites hosted below a subpath. Include the shared CLIs buildsnapshot workers and runtime module registration. Use portable RollupResvg WASM loaders for compilation. The previous prototype CLI remains available from source; the README and CI now describe and exercise the shared CLI. This bundles the JS CDN packages, not every remote service used by the CLI or RunFrame. No CLI package.json dependencies are added. Validation: Typechecks and the two small JS CDN unit tests pass. Compiled executable smoke passes on macOS arm64Bun 1.3.14: versionhelp, sequential and worker TSX builds, PNG output, automatic site copying, and real tsci dev, with no project dependencies or runtime on PATH. Chromium imports all 11 bundled packages and runs a WASM-backed FDM exporter from both dev and nested static-site URLs, with external browser requests blocked. Linux x64 cross-compilation and license inventory pass with CIs pinned Bun 1.3.12; the graph contains no native .node addons. Bun 1.3.12s compiled executables could not run on this Mac, so native local smoke used 1.3.14. Existing suite: 149 pass; one existing archive test requires GNU tar (--sortname), unavailable with this Macs BSD tar. Ubuntu CI covers the full suite, loopback-only browser check, and five compilation targets. |
| [#10](https://github.com/tscircuit/tscircuit-standalone/pull/10) | 🐙 Minor | ⭐⭐ | seveibar | Fixes the LED fixtures warning emissions to ensure only the correct components emit manufacturer-part-number warnings, allowing successful nightly release qualifications. |

<details>
<summary>🐌 Tiny Contributions (2)</summary>

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#12](https://github.com/tscircuit/tscircuit-standalone/pull/12) | 🐌 Tiny | seveibar | Add a manual standalone release workflow that allows users to publish prereleases with a specific version or the latest version, even if a daily release has already been published. |
| [#13](https://github.com/tscircuit/tscircuit-standalone/pull/13) | 🐌 Tiny | imrishabh18 | Fixes macOS standalone binaries being killed on startup due to malformed signature by updating Bun version and ensuring proper signing and verification of binaries. |

</details>

### [tscircuit/circuit-json-to-kicad](https://github.com/tscircuit/circuit-json-to-kicad)


<details>
<summary>🐌 Tiny Contributions (2)</summary>

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#634](https://github.com/tscircuit/circuit-json-to-kicad/pull/634) | 🐌 Tiny | seveibar | Ensures physical ball names such as A1 are consistent across KiCad PCB pads, library symbol pins, and placed symbol pin instances, preventing disconnection between schematic and footprint. |
| [#637](https://github.com/tscircuit/circuit-json-to-kicad/pull/637) | 🐌 Tiny | tscircuitbot | Automated package update |

</details>

### [tscircuit/tscircuit](https://github.com/tscircuit/tscircuit)


<details>
<summary>🐌 Tiny Contributions (45)</summary>

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#5685](https://github.com/tscircuit/tscircuit/pull/5685) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#5684](https://github.com/tscircuit/tscircuit/pull/5684) | 🐌 Tiny | tscircuitbot | Updates the tscircuitcli package to version 0.1.2334 |
| [#5683](https://github.com/tscircuit/tscircuit/pull/5683) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#5682](https://github.com/tscircuit/tscircuit/pull/5682) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#5681](https://github.com/tscircuit/tscircuit/pull/5681) | 🐌 Tiny | tscircuitbot | Updates the tscircuitcli package from version 0.1.2331 to 0.1.2332 and the tscircuitrunframe package from version 0.0.2988 to 0.0.2989 in package.json |
| [#5680](https://github.com/tscircuit/tscircuit/pull/5680) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#5679](https://github.com/tscircuit/tscircuit/pull/5679) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#5678](https://github.com/tscircuit/tscircuit/pull/5678) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#5677](https://github.com/tscircuit/tscircuit/pull/5677) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#5674](https://github.com/tscircuit/tscircuit/pull/5674) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#5673](https://github.com/tscircuit/tscircuit/pull/5673) | 🐌 Tiny | tscircuitbot | Updates the tscircuitcli package to version 0.1.2331 in the package.json file. |
| [#5672](https://github.com/tscircuit/tscircuit/pull/5672) | 🐌 Tiny | tscircuitbot | Updates the package version from 0.0.2883 to 0.0.2884 in package.json |
| [#5671](https://github.com/tscircuit/tscircuit/pull/5671) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#5665](https://github.com/tscircuit/tscircuit/pull/5665) | 🐌 Tiny | tscircuitbot | Updates the package version from 0.0.2882 to 0.0.2883 in package.json |
| [#5664](https://github.com/tscircuit/tscircuit/pull/5664) | 🐌 Tiny | tscircuitbot | Updates the tscircuitcli package to version 0.1.2330 in the package.json file. |
| [#5663](https://github.com/tscircuit/tscircuit/pull/5663) | 🐌 Tiny | tscircuitbot | Updates the package version from 0.0.2881 to 0.0.2882 in package.json |
| [#5662](https://github.com/tscircuit/tscircuit/pull/5662) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#5661](https://github.com/tscircuit/tscircuit/pull/5661) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#5660](https://github.com/tscircuit/tscircuit/pull/5660) | 🐌 Tiny | tscircuitbot | Updates the tscircuitcli package version from 0.1.2328 to 0.1.2329 |
| [#5659](https://github.com/tscircuit/tscircuit/pull/5659) | 🐌 Tiny | tscircuitbot | Updates the package version from 0.0.2879 to 0.0.2880 in package.json |
| [#5658](https://github.com/tscircuit/tscircuit/pull/5658) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#5657](https://github.com/tscircuit/tscircuit/pull/5657) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#5656](https://github.com/tscircuit/tscircuit/pull/5656) | 🐌 Tiny | tscircuitbot | Updates the tscircuitcli package to version 0.1.2328 |
| [#5655](https://github.com/tscircuit/tscircuit/pull/5655) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#5654](https://github.com/tscircuit/tscircuit/pull/5654) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#5653](https://github.com/tscircuit/tscircuit/pull/5653) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#5652](https://github.com/tscircuit/tscircuit/pull/5652) | 🐌 Tiny | tscircuitbot | Updates the tscircuitcli package version from 0.1.2325 to 0.1.2327 |
| [#5651](https://github.com/tscircuit/tscircuit/pull/5651) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#5650](https://github.com/tscircuit/tscircuit/pull/5650) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#5648](https://github.com/tscircuit/tscircuit/pull/5648) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#5647](https://github.com/tscircuit/tscircuit/pull/5647) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#5646](https://github.com/tscircuit/tscircuit/pull/5646) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#5645](https://github.com/tscircuit/tscircuit/pull/5645) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#5644](https://github.com/tscircuit/tscircuit/pull/5644) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#5643](https://github.com/tscircuit/tscircuit/pull/5643) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#5642](https://github.com/tscircuit/tscircuit/pull/5642) | 🐌 Tiny | tscircuitbot | Updates the package version from 0.0.2871 to 0.0.2872 in package.json |
| [#5641](https://github.com/tscircuit/tscircuit/pull/5641) | 🐌 Tiny | tscircuitbot | Updates the tscircuitcli package to version 0.1.2322 in the package.json file |
| [#5639](https://github.com/tscircuit/tscircuit/pull/5639) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#5638](https://github.com/tscircuit/tscircuit/pull/5638) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#5637](https://github.com/tscircuit/tscircuit/pull/5637) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#5636](https://github.com/tscircuit/tscircuit/pull/5636) | 🐌 Tiny | tscircuitbot | Updates the tscircuitcli package to version 0.1.2321 |
| [#5635](https://github.com/tscircuit/tscircuit/pull/5635) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#5634](https://github.com/tscircuit/tscircuit/pull/5634) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#5633](https://github.com/tscircuit/tscircuit/pull/5633) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#5632](https://github.com/tscircuit/tscircuit/pull/5632) | 🐌 Tiny | tscircuitbot | Updates the tscircuitcli package to version 0.1.2320 in the package.json file. |

</details>

### [tscircuit/tscircuit.com](https://github.com/tscircuit/tscircuit.com)


<details>
<summary>🐌 Tiny Contributions (10)</summary>

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#5436](https://github.com/tscircuit/tscircuit.com/pull/5436) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#5434](https://github.com/tscircuit/tscircuit.com/pull/5434) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#5433](https://github.com/tscircuit/tscircuit.com/pull/5433) | 🐌 Tiny | tscircuitbot | Updates the tscircuitrunframe package to version 0.0.2987 in package.json |
| [#5426](https://github.com/tscircuit/tscircuit.com/pull/5426) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#5425](https://github.com/tscircuit/tscircuit.com/pull/5425) | 🐌 Tiny | tscircuitbot | Updates the tscircuiteval package from version 0.0.1609 to 0.0.1611 |
| [#5424](https://github.com/tscircuit/tscircuit.com/pull/5424) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#5422](https://github.com/tscircuit/tscircuit.com/pull/5422) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#5421](https://github.com/tscircuit/tscircuit.com/pull/5421) | 🐌 Tiny | tscircuitbot | Updates the tscircuiteval package from version 0.0.1607 to 0.0.1609 in the package.json file. |
| [#5420](https://github.com/tscircuit/tscircuit.com/pull/5420) | 🐌 Tiny | tscircuitbot | Updates the tscircuitrunframe package to version 0.0.2981 |
| [#5419](https://github.com/tscircuit/tscircuit.com/pull/5419) | 🐌 Tiny | tscircuitbot | Automated package update |

</details>

### [tscircuit/eval](https://github.com/tscircuit/eval)


<details>
<summary>🐌 Tiny Contributions (16)</summary>

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#5249](https://github.com/tscircuit/eval/pull/5249) | 🐌 Tiny | tscircuitbot | Automated package update to version 0.0.1616 |
| [#5248](https://github.com/tscircuit/eval/pull/5248) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#5246](https://github.com/tscircuit/eval/pull/5246) | 🐌 Tiny | tscircuitbot | Automated package update to version 0.0.1615 |
| [#5245](https://github.com/tscircuit/eval/pull/5245) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#5243](https://github.com/tscircuit/eval/pull/5243) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#5242](https://github.com/tscircuit/eval/pull/5242) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#5240](https://github.com/tscircuit/eval/pull/5240) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#5239](https://github.com/tscircuit/eval/pull/5239) | 🐌 Tiny | tscircuitbot | Updates the version of the tscircuitcore package from 0.0.2148 to 0.0.2149 |
| [#5237](https://github.com/tscircuit/eval/pull/5237) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#5236](https://github.com/tscircuit/eval/pull/5236) | 🐌 Tiny | tscircuitbot | Updates the version of the tscircuitcore package from 0.0.2147 to 0.0.2148 in package.json |
| [#5234](https://github.com/tscircuit/eval/pull/5234) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#5233](https://github.com/tscircuit/eval/pull/5233) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#5231](https://github.com/tscircuit/eval/pull/5231) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#5230](https://github.com/tscircuit/eval/pull/5230) | 🐌 Tiny | tscircuitbot | Updates the version of the tscircuitcore and tscircuitprops packages in package.json |
| [#5228](https://github.com/tscircuit/eval/pull/5228) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#5227](https://github.com/tscircuit/eval/pull/5227) | 🐌 Tiny | tscircuitbot | Updates the version of the tscircuitcore package from 0.0.2144 to 0.0.2145 in package.json |

</details>

### [tscircuit/runframe](https://github.com/tscircuit/runframe)


<details>
<summary>🐌 Tiny Contributions (22)</summary>

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#5737](https://github.com/tscircuit/runframe/pull/5737) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#5736](https://github.com/tscircuit/runframe/pull/5736) | 🐌 Tiny | tscircuitbot | Updates the circuit-json-to-kicad package version from 0.0.229 to 0.0.231 in package.json |
| [#5734](https://github.com/tscircuit/runframe/pull/5734) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#5733](https://github.com/tscircuit/runframe/pull/5733) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#5732](https://github.com/tscircuit/runframe/pull/5732) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#5731](https://github.com/tscircuit/runframe/pull/5731) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#5730](https://github.com/tscircuit/runframe/pull/5730) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#5729](https://github.com/tscircuit/runframe/pull/5729) | 🐌 Tiny | tscircuitbot | Updates the tscircuiteval package from version 0.0.1613 to 0.0.1614 |
| [#5727](https://github.com/tscircuit/runframe/pull/5727) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#5726](https://github.com/tscircuit/runframe/pull/5726) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#5725](https://github.com/tscircuit/runframe/pull/5725) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#5724](https://github.com/tscircuit/runframe/pull/5724) | 🐌 Tiny | tscircuitbot | Updates the tscircuiteval package from version 0.0.1611 to 0.0.1612 in the package.json file. |
| [#5722](https://github.com/tscircuit/runframe/pull/5722) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#5721](https://github.com/tscircuit/runframe/pull/5721) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#5720](https://github.com/tscircuit/runframe/pull/5720) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#5719](https://github.com/tscircuit/runframe/pull/5719) | 🐌 Tiny | tscircuitbot | Updates the tscircuiteval package from version 0.0.1609 to 0.0.1610 |
| [#5718](https://github.com/tscircuit/runframe/pull/5718) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#5717](https://github.com/tscircuit/runframe/pull/5717) | 🐌 Tiny | tscircuitbot | Updates the tscircuiteval package from version 0.0.1608 to 0.0.1609 |
| [#5716](https://github.com/tscircuit/runframe/pull/5716) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#5714](https://github.com/tscircuit/runframe/pull/5714) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#5713](https://github.com/tscircuit/runframe/pull/5713) | 🐌 Tiny | tscircuitbot | Updates the tscircuiteval package from version 0.0.1607 to 0.0.1608 |
| [#5715](https://github.com/tscircuit/runframe/pull/5715) | 🐌 Tiny | imrishabh18 | Updates the tscircuitinternal-dynamic-import package from version 0.0.15 to 0.0.18 and tscircuitprops from 0.0.697 to 0.0.702, enabling support for local JS CDN imports with a new base URL configuration. |

</details>

### [tscircuit/cli](https://github.com/tscircuit/cli)

| PR # | Impact | Rating | Contributor | Description |
|------|--------|--------|-------------|-------------|
| [#5324](https://github.com/tscircuit/cli/pull/5324) | 🐳 Major | ⭐⭐⭐ | imrishabh18 | Add --jscdn-base-url url to tsci build, allowing users to set the JS CDN base URL for dynamic imports in the generated static site. |
| [#5350](https://github.com/tscircuit/cli/pull/5350) | 🐙 Minor | ⭐⭐ | imrishabh18 | Copies prepared JS CDN packages to distjscdn when TSCIRCUIT_STANDALONE is set, allowing for automatic site builds with a default base URL. |
| [#5348](https://github.com/tscircuit/cli/pull/5348) | 🐙 Minor | ⭐⭐ | imrishabh18 | Serve prepared packages from TSCIRCUIT_JSCDN_DIR at jscdn and set window.TSCIRCUIT_JSCDN_BASE_URL  jscdn before runframe loads, with support for local testing via --jscdn-dir path. |
| [#5344](https://github.com/tscircuit/cli/pull/5344) | 🐙 Minor | ⭐⭐ | imrishabh18 | Copies prepared JS CDN packages from TSCIRCUIT_JSCDN_DIR into distjscdn for static site builds, preserving paths and contents without downloading or rebuilding packages. |

<details>
<summary>🐌 Tiny Contributions (20)</summary>

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#5362](https://github.com/tscircuit/cli/pull/5362) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#5361](https://github.com/tscircuit/cli/pull/5361) | 🐌 Tiny | tscircuitbot | Updates the tscircuitrunframe package from version 0.0.2988 to 0.0.2989 |
| [#5359](https://github.com/tscircuit/cli/pull/5359) | 🐌 Tiny | tscircuitbot | Updates the tscircuitrunframe package from version 0.0.2987 to 0.0.2988 |
| [#5358](https://github.com/tscircuit/cli/pull/5358) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#5357](https://github.com/tscircuit/cli/pull/5357) | 🐌 Tiny | tscircuitbot | Updates the tscircuitrunframe package to version 0.0.2987 in the package.json file |
| [#5356](https://github.com/tscircuit/cli/pull/5356) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#5355](https://github.com/tscircuit/cli/pull/5355) | 🐌 Tiny | tscircuitbot | Updates the tscircuitrunframe package to version 0.0.2986 |
| [#5354](https://github.com/tscircuit/cli/pull/5354) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#5353](https://github.com/tscircuit/cli/pull/5353) | 🐌 Tiny | tscircuitbot | Updates the tscircuitrunframe package from version 0.0.2984 to 0.0.2985 |
| [#5351](https://github.com/tscircuit/cli/pull/5351) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#5349](https://github.com/tscircuit/cli/pull/5349) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#5347](https://github.com/tscircuit/cli/pull/5347) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#5345](https://github.com/tscircuit/cli/pull/5345) | 🐌 Tiny | tscircuitbot | Updates the tscircuitrunframe package version from 0.0.2983 to 0.0.2984 in package.json |
| [#5343](https://github.com/tscircuit/cli/pull/5343) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#5342](https://github.com/tscircuit/cli/pull/5342) | 🐌 Tiny | tscircuitbot | Updates the tscircuitrunframe package from version 0.0.2982 to 0.0.2983 |
| [#5340](https://github.com/tscircuit/cli/pull/5340) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#5337](https://github.com/tscircuit/cli/pull/5337) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#5336](https://github.com/tscircuit/cli/pull/5336) | 🐌 Tiny | tscircuitbot | Updates the tscircuitrunframe package from version 0.0.2980 to 0.0.2981 |
| [#5335](https://github.com/tscircuit/cli/pull/5335) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#5334](https://github.com/tscircuit/cli/pull/5334) | 🐌 Tiny | tscircuitbot | Updates the tscircuitrunframe package to version 0.0.2980 in package.json |

</details>

### [tscircuit/svg.tscircuit.com](https://github.com/tscircuit/svg.tscircuit.com)


<details>
<summary>🐌 Tiny Contributions (17)</summary>

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#2628](https://github.com/tscircuit/svg.tscircuit.com/pull/2628) | 🐌 Tiny | tscircuitbot | Updates the tscircuit package version from 0.0.2888 to 0.0.2889 in package.json |
| [#2627](https://github.com/tscircuit/svg.tscircuit.com/pull/2627) | 🐌 Tiny | tscircuitbot | Updates the tscircuit package version from 0.0.2886 to 0.0.2888 in package.json |
| [#2626](https://github.com/tscircuit/svg.tscircuit.com/pull/2626) | 🐌 Tiny | tscircuitbot | Updates the tscircuit package version from 0.0.2883 to 0.0.2886 in package.json |
| [#2624](https://github.com/tscircuit/svg.tscircuit.com/pull/2624) | 🐌 Tiny | tscircuitbot | Updates the tscircuit package version from 0.0.2882 to 0.0.2883 |
| [#2622](https://github.com/tscircuit/svg.tscircuit.com/pull/2622) | 🐌 Tiny | tscircuitbot | Updates the tscircuit package version from 0.0.2881 to 0.0.2882 in package.json |
| [#2621](https://github.com/tscircuit/svg.tscircuit.com/pull/2621) | 🐌 Tiny | tscircuitbot | Updates the tscircuit package version from 0.0.2879 to 0.0.2881 in package.json |
| [#2620](https://github.com/tscircuit/svg.tscircuit.com/pull/2620) | 🐌 Tiny | tscircuitbot | Updates the tscircuit package version from 0.0.2878 to 0.0.2879 in package.json |
| [#2619](https://github.com/tscircuit/svg.tscircuit.com/pull/2619) | 🐌 Tiny | tscircuitbot | Updates the tscircuit package version from 0.0.2877 to 0.0.2878 in package.json |
| [#2618](https://github.com/tscircuit/svg.tscircuit.com/pull/2618) | 🐌 Tiny | tscircuitbot | Updates the tscircuit package version from 0.0.2876 to 0.0.2877 in package.json |
| [#2617](https://github.com/tscircuit/svg.tscircuit.com/pull/2617) | 🐌 Tiny | tscircuitbot | Updates the tscircuit package version from 0.0.2875 to 0.0.2876 in package.json |
| [#2616](https://github.com/tscircuit/svg.tscircuit.com/pull/2616) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#2615](https://github.com/tscircuit/svg.tscircuit.com/pull/2615) | 🐌 Tiny | tscircuitbot | Updates the tscircuit package version from 0.0.2873 to 0.0.2874 in package.json |
| [#2614](https://github.com/tscircuit/svg.tscircuit.com/pull/2614) | 🐌 Tiny | tscircuitbot | Updates the tscircuit package version from 0.0.2871 to 0.0.2873 in package.json |
| [#2612](https://github.com/tscircuit/svg.tscircuit.com/pull/2612) | 🐌 Tiny | tscircuitbot | Updates the tscircuit package version from 0.0.2870 to 0.0.2871 in package.json |
| [#2611](https://github.com/tscircuit/svg.tscircuit.com/pull/2611) | 🐌 Tiny | tscircuitbot | Updates the tscircuit package version from 0.0.2869 to 0.0.2870 in package.json |
| [#2610](https://github.com/tscircuit/svg.tscircuit.com/pull/2610) | 🐌 Tiny | tscircuitbot | Updates the tscircuit package version from 0.0.2867 to 0.0.2869 in package.json |
| [#2608](https://github.com/tscircuit/svg.tscircuit.com/pull/2608) | 🐌 Tiny | tscircuitbot | Updates the tscircuit package from version 0.0.2866 to 0.0.2867 |

</details>

### [tscircuit/circuit-json-to-step](https://github.com/tscircuit/circuit-json-to-step)

| PR # | Impact | Rating | Contributor | Description |
|------|--------|--------|-------------|-------------|
| [#142](https://github.com/tscircuit/circuit-json-to-step/pull/142) | 🐳 Major | ⭐⭐⭐ | imrishabh18 | STEP exports currently split printed parts into a filename map, which consumers package as ZIPs while omitting boards and ordinary assembly parts. Make circuitJsonToStep(circuitJson) return one STEP string containing the complete named assembly by default, including all supported PCB boards, components, printed parts, and other CAD parts. No exportMode or component-inclusion flags are needed for the default export; explicit exportMode: pcb retains the existing PCB-only path. Preserve colors, model origins, unit scale, rotations, and placement for JSCAD and imported STEP parts. Include supported external meshes with shared topology and scope holes to each board in multi-board designs. Missing geometry and nested imported STEP assemblies fail explicitly rather than producing incomplete assemblies. Update public types, the demo, documentation, and regression snapshots. Migration: Assembly output changes from Recordstring, string to string, and the default now includes the complete design even without assembly-part tags. Consumers requiring the previous PCB-only behavior must explicitly select exportMode: pcb. Validation: 29 converter tests (279 assertions), TypeScript, formatting, ESMdeclaration build, and whitespace checks passed. OCCT checks verify default exports for ordinary PCBs, mixed assemblies, multiple boards, and bare CAD, plus names, body counts, colors, transforms, cached STEP instances, and external meshes. The demo browser build remains blocked by the existing native resvgresvg-js .node dependency; the same error was reproduced at the prior PR head f3eca47. Consumer update: https:github.comtscircuittscircuit.compull5409 (draft until a release containing this default behavior is available). |

<details>
<summary>🐌 Tiny Contributions (1)</summary>

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#143](https://github.com/tscircuit/circuit-json-to-step/pull/143) | 🐌 Tiny | tscircuitbot | Automated package update |

</details>

### [tscircuit/circuit-json-schematic-placement-analysis](https://github.com/tscircuit/circuit-json-schematic-placement-analysis)

| PR # | Impact | Rating | Contributor | Description |
|------|--------|--------|-------------|-------------|
| [#271](https://github.com/tscircuit/circuit-json-schematic-placement-analysis/pull/271) | 🐳 Major | ⭐⭐⭐ | MustafaMulla29 | Adds SwitchRcNetworkGroupingSolver, reporting SwitchRcNetworkNotGrouped when a grounded switch, its parallel capacitor, or its local pull resistor is separated from the group. It checks both switchcapacitor spacing and the pull resistors distance from the nearer member of that pair. A distant resistor is reported even when the switch and capacitor are already together. The complete controls sheet from AnasSarkizGame-Boy-Enhance v1.0.3(https:tscircuit.comAnasSarkizGame-Boy-Enhance?version1.0.3schematic) supplies ten real networks: SW3SW12, C45C54, and R26R35. Stacked on the TSX-only repro 270. The analyzer reports placement advice; the TSX fixture demonstrates the correction.  Complete 30-component controls sheet  Existing findings  New grouping findings   ---  ---:  ---:   Original published placement  10  10   Only rotate the capacitors as previously advised  0  10   Group and rotate all ten switchresistorcapacitor networks  0  0   Regression variant: corrected layout with only R26 moved away  0  1  The last row is a deliberate TSX regression variant, not the published placement. Its test verifies that moving only R26 back clears the finding, with every electrical record unchanged.  Reference and original rendering TI SCEA094, page 1(https:www.ti.comlitabscea094scea094.pdfpage1) draws the switch and capacitor as adjacent parallel branches with a pull resistor above their shared signal. Its buffer is not part of this boards controls sheet; the example supports the drawing convention, not a debounce-function inference or a numeric spacing requirement.  Published TI reference  Original tscircuit controls sheet   ---  ---   !TI switch RC network(https:www.ti.comodsimagesSCEA094GUID-D22D0495-3892-4401-908A-5C89503658D6-low.gif)  !Original complete controls sheet(https:raw.githubusercontent.comtscircuitcircuit-json-schematic-placement-analysisd19716adbff5a596c984788fe731b012b74e9454testscases__snapshots__gameboy-switch-capacitor-repro-full-sheet.snap.svg)   Correction Single-network detail, at equal scale with a divider. The switch, capacitor, and resistor share one numbered finding: !SW3 C45 R26 before and after(https:raw.githubusercontent.comtscircuitcircuit-json-schematic-placement-analysis9bf448fbfa268d04ea013c8ffbcbbbd9e234615atestscases__snapshots__gameboy-switch-capacitor-pair-comparison.snap.svg) All ten networks together, with matching numbered diagnostics: !Complete controls before and after(https:raw.githubusercontent.comtscircuitcircuit-json-schematic-placement-analysis9bf448fbfa268d04ea013c8ffbcbbbd9e234615atestscases__snapshots__gameboy-switch-capacitor-correction-comparison.snap.svg) Complete corrected sheet at readable scale(https:raw.githubusercontent.comtscircuitcircuit-json-schematic-placement-analysis9bf448fbfa268d04ea013c8ffbcbbbd9e234615atestscases__snapshots__gameboy-switch-capacitor-correction-full-sheet.snap.svg)  Full original with the new findings(https:raw.githubusercontent.comtscircuitcircuit-json-schematic-placement-analysis9bf448fbfa268d04ea013c8ffbcbbbd9e234615atestscases__snapshots__gameboy-switch-capacitor-repro-full-sheet.snap.svg) The correction retains all 30 components and their symbol definitions, movesrotates the networks, and reduces the section headings font size to avoid crowding the supply label. Full placement analysis reports zero findings on the entire controls sheet; this does not refer to the other five board sheets.  Detection and checks Uses typed switchcapacitorresistor records, connectivity, explicit groundpower flags, and schematic scope. No name, pin-label, net-label, or port_hints matching establishes a role. Requires one grounded two-terminal switch and one capacitor across the same two nets. When present, one local resistor from their signal to an explicitly identified supply joins the group and has its spacing checked. The switchcapacitor check also works without a pull resistor. Measures body gaps: switch to capacitor, then resistor to the nearer switchcapacitor. Reports separation beyond the larger of 4 schematic units or twice the larger symbol dimension for the measured pair. This readability heuristic permits staggered placements and label space; it does not demand exact coordinates. Skips competing switchescapacitors or pull resistors, a same-sheet signal consumer, unsupported or missing placementsports, DNPDNC parts, separate scopes, and intervening unrelated bodies. Off-sheet signal consumers are allowed. Guard tests cover both drawing axes, a resistor close to either member, a separated resistor, and ambiguous or obstructed cases. The R26-only regression verifies a single finding before and zero full-sheet findings after moving R26. Original-to-corrected tests compare all 163 electrical records. Cores rotation-dependent removal of posneg aliases on the 20 capacitor ports is explicitly checked; all other source fields match. Wire-graph checks verify continuous signal and ground connections on every corrected network. Validation: 225 tests pass, typecheck and formatting checks pass, and all four snapshots were rendered and inspected. No dependency changes or unrelated snapshot updates. Shared snapshot helpers only gain an optional subject heading and singularplural footer wording; existing unrelated snapshots remain unchanged. |
| [#249](https://github.com/tscircuit/circuit-json-schematic-placement-analysis/pull/249) | 🐳 Major | ⭐⭐⭐ | MustafaMulla29 | Stacked on 248, the complete TSX repro from pmdroidkey-pcb v1.0.4. Adds SwitchMatrixDiodePlacementSolver to identify two placement problems: 1. A matrix diode is far from its connected switch. 2. Connected matrix rows or columns have excessive unused space after their switchdiode pairs are nearby. The corrected layout uses a compact 34 matrix, reducing the row pitch from 9 to 4 schematic units. All twelve switchdiode connections are drawn as continuous straight wires. Full-sheet placement analysis reports 0 findings with every analyzer enabled; tests verify that electrical source records and pin connections remain unchanged. |
| [#277](https://github.com/tscircuit/circuit-json-schematic-placement-analysis/pull/277) | 🐙 Minor | ⭐⭐ | MustafaMulla29 | Adds functionality to detect and report inline parallel capacitor pairs in schematic designs, ensuring they are drawn as separate branches for improved readability and compliance with design standards. |

<details>
<summary>🐌 Tiny Contributions (5)</summary>

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#280](https://github.com/tscircuit/circuit-json-schematic-placement-analysis/pull/280) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#279](https://github.com/tscircuit/circuit-json-schematic-placement-analysis/pull/279) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#276](https://github.com/tscircuit/circuit-json-schematic-placement-analysis/pull/276) | 🐌 Tiny | MustafaMulla29 | Reproduces C_SD_HF (100 nF) and C_SD_BULK (10 F) on the complete 16-component microSD boot sheet from ShiboSoftwareDevt113-s3-linux-computer-p9 v0.1.4, ensuring correct placement and connectivity without introducing new dependencies or changes to the core functionality. |
| [#270](https://github.com/tscircuit/circuit-json-schematic-placement-analysis/pull/270) | 🐌 Tiny | MustafaMulla29 | Reproduces the complete GAME INPUTS  GPIO FILTERS sheet from AnasSarkizGame-Boy-Enhance v1.0.3, including 30 components with preserved placements and connections. |
| [#248](https://github.com/tscircuit/circuit-json-schematic-placement-analysis/pull/248) | 🐌 Tiny | MustafaMulla29 | Adds the complete 92-component TSX sheet from pmdroidkey-pcb v1.0.4. Each of its 12 matrix diodes (D1D12) sits diagonally away from its corresponding switch (SW1SW12), creating a long bent connection. The current analyzers report 17 other findings and do not identify these separated pairs. The 19 files contain the original board TSX, its 15 component imports, a render wrapper, one test, and an unhighlighted full-sheet snapshot with diagnostics below. Original component positions and physical pin connections are preserved; the repositorys core 0.0.2132 regenerates the routes. The imported C81598 diode declares its manufacturer pin mapping, pin 1  cathode and pin 2  anode. Apart from that explicit TSX mapping, provenance comments, and formatting, the source files are unchanged. Validation: the full-sheet repro test passes against current main. The repro verifies all 12 switchdiode placements, diode ports, private branch connections, and the distinct rowcolumn buses. |

</details>

### [tscircuit/easyeda-converter](https://github.com/tscircuit/easyeda-converter)

| PR # | Impact | Rating | Contributor | Description |
|------|--------|--------|-------------|-------------|
| [#598](https://github.com/tscircuit/easyeda-converter/pull/598) | 🐙 Minor | ⭐⭐ | trixie010 | Fixes the issue of duplicate pcb_cutout emissions for each HOLE record in EasyEDA, ensuring that only a single pcb_hole is reported for component mounting holes. |

### [tscircuit/circuit-json-to-tscircuit](https://github.com/tscircuit/circuit-json-to-tscircuit)

| PR # | Impact | Rating | Contributor | Description |
|------|--------|--------|-------------|-------------|
| [#205](https://github.com/tscircuit/circuit-json-to-tscircuit/pull/205) | 🐳 Major | ⭐⭐⭐ | ShiboSoftwareDev | Board conversion now emits one chip per imported PCB component instead of flattening every footprint into ImportedBoard. Net selectors, compound-pad ports, bottom-side geometry, linked CAD models, and component-local BREPtext placement stay associated with the owning component. Multiple CAD groups for the same component are accumulated instead of overwriting one another. Existing TI board snapshots update in place and focused regressions cover child components and topbottom CAD groups. |
| [#206](https://github.com/tscircuit/circuit-json-to-tscircuit/pull/206) | 🐙 Minor | ⭐⭐ | ShiboSoftwareDev | Component-owned URL and JSCAD bodies are emitted as separate cadmodel elements inside the existing cadassembly. This preserves each bodys position, rotation, origin, scale, board-normal direction, and color without boolean-union geometry loss or custom rotation rebasing. |

### [tscircuit/altium-to-circuit-json](https://github.com/tscircuit/altium-to-circuit-json)

| PR # | Impact | Rating | Contributor | Description |
|------|--------|--------|-------------|-------------|
| [#208](https://github.com/tscircuit/altium-to-circuit-json/pull/208) | 🐙 Minor | ⭐⭐ | ShiboSoftwareDev | Converts non-embedded Altium ComponentBody geometry into Circuit JSON model_jscad operations instead of dropping it, ensuring independent primitive bodies remain present with or without a model URL resolver. |

### [tscircuit/3d-viewer](https://github.com/tscircuit/3d-viewer)


<details>
<summary>🐌 Tiny Contributions (1)</summary>

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#1038](https://github.com/tscircuit/3d-viewer/pull/1038) | 🐌 Tiny | ShiboSoftwareDev | Aligns the viewers direct Circuit JSON dependency with the current Core peer API to prevent production bundling failures due to missing exports. |

</details>

### [tscircuit/dataset-tsx35-kicad-boards](https://github.com/tscircuit/dataset-tsx35-kicad-boards)


<details>
<summary>🐌 Tiny Contributions (1)</summary>

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#1](https://github.com/tscircuit/dataset-tsx35-kicad-boards/pull/1) | 🐌 Tiny | 0hmX | The standard tsci init configuration already loads tscircuit types globally. Remove 75 redundant empty tscircuitcore type imports from the board, footprint, and schematic sources. Validation: full typecheck and FTDI HTML3D build pass. All 75 changed files emit identical JavaScript before and after the cleanup. |

</details>

### [tscircuit/jscad-electronics](https://github.com/tscircuit/jscad-electronics)


<details>
<summary>🐌 Tiny Contributions (1)</summary>

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#503](https://github.com/tscircuit/jscad-electronics/pull/503) | 🐌 Tiny | imrishabh18 | Aligns the NEMA23 motor body with a newly designed curved rear cap, ensuring a flush fit without side overhang, while maintaining existing front features and improving rear mounting options. |

</details>

### [tscircuit/modelprinter](https://github.com/tscircuit/modelprinter)


<details>
<summary>🐌 Tiny Contributions (1)</summary>

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#119](https://github.com/tscircuit/modelprinter/pull/119) | 🐌 Tiny | imrishabh18 | Aligns the NEMA23 rear cap with a new curved design and rectangular rear pattern, ensuring proper fit and validation against existing dimensions. |

</details>

### [tscircuit/circuit-json-placement-analysis](https://github.com/tscircuit/circuit-json-placement-analysis)

| PR # | Impact | Rating | Contributor | Description |
|------|--------|--------|-------------|-------------|
| [#43](https://github.com/tscircuit/circuit-json-placement-analysis/pull/43) | 🐙 Minor | ⭐⭐ | techmannih | Fixes incorrect PCB vertical direction calculations that led to mislabeling of board edges and incorrect placement suggestions, improving the accuracy of component placement analysis. |

<details>
<summary>🐌 Tiny Contributions (1)</summary>

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#42](https://github.com/tscircuit/circuit-json-placement-analysis/pull/42) | 🐌 Tiny | techmannih | Reproduces a bug where PCB placement analysis suggests moving an overlapping component in the wrong vertical direction and labels the nearest top board edge as bottom, capturing this behavior before applying the fix. |

</details>

### [tscircuit/ti](https://github.com/tscircuit/ti)


<details>
<summary>🐌 Tiny Contributions (1)</summary>

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#262](https://github.com/tscircuit/ti/pull/262) | 🐌 Tiny | AnasSarkiz | Add ti generate-sysconfig-site file to generate a self-contained, read-only HTML page from .syscfg, Circuit JSON, or TSTSX without requiring TI software or SDK installation. |

</details>

## Changes by Contributor

### [seveibar](https://github.com/seveibar)

| PRs # | Impact | Rating | Description |
|------|--------|--------|-------------|
| [#4603](https://github.com/tscircuit/core/pull/4603) | 🐳 Major | ⭐⭐⭐ | Fixes autorouting failure by resolving bare trace names and explicit trace selectors, ensuring proper diagnostics for unmatched or ambiguous selectors. |
| [#4604](https://github.com/tscircuit/core/pull/4604) | 🐳 Major | ⭐⭐⭐ | Allows chips and connectors to use physical BGA ball names directly in pinLabels, connections, footprint hints, schematic arrangements, and pin styles, resolving previous issues with alias resolution. |
| [#427](https://github.com/tscircuit/checks/pull/427) | 🐳 Major | ⭐⭐⭐ | Reduces unnecessary computation in continuity validation by deferring the construction of the physical trace graph until needed, optimizing the process of checking connectivity between traces. |
| [#2998](https://github.com/tscircuit/tscircuit-autorouter/pull/2998) | 🐳 Major | ⭐⭐⭐ | Adds a post-repair cleanup stage that commits only valid improvements and preserves route endpoints while reducing via counts in autorouting. |
| [#256](https://github.com/tscircuit/circuit-json-to-gltf/pull/256) | 🐳 Major | ⭐⭐⭐ | Fixes GLB import issues by correctly decoding interleaved vertex data and applying glTF normalization for various component types, ensuring accurate rendering of positions and normals. |
| [#14](https://github.com/tscircuit/motor-driver-firmware/pull/14) | 🐳 Major | ⭐⭐⭐ | The single-motor jogging page now exposes supported quarter, 18 and 116 step sizes with angular increments and RPM estimates, allowing for more precise motor control. |
| [#13](https://github.com/tscircuit/motor-driver-firmware/pull/13) | 🐳 Major | ⭐⭐⭐ | The latest RP2040 motor controller uses DRV8825 STEPDIR, transistor-driven RGB outputs, winding-current ADC inputs and GPIO-controlled CH224K voltage selection. The firmware and dashboard, single-motor jog and gantry pages now support that board while retaining the original DRV8847 profile. Startup keeps the motor disabled at 5 V. Voltage changes disable the driver and enforce a settling interval; temperature, heartbeat, watchdog and driver-fault protection remain active. Automatic RGB status and manual colors are available, with alarms taking priority. The hardware fixes 116 microsteps; larger selected increments group pulses and saved-position GOTO uses the finest supported increment. Validation: 45 Python tests and all dashboardjogGOTOsong checks pass; CI stages both board profiles. On board e66568714f117e21, all 21 uploaded files matched SHA-256. Live Web Serial controls applied RGB settings and the user confirmed LED operation. With the replacement charger and an explicit 9 V request, two 800-microstep forwardreverse moves completed with exact commanded counts, about 0.87 A peak absolute winding samples and no reported faults; the user confirmed the motor spun. Temperature stayed around 28 C and the motor was stopped afterward. Use 9 V with the tested charger. A 15 V request yielded a measured 9 V input and no movement; the actual PG behavior was not measured. Voltage telemetry represents the request and settling timer, not measured rail voltage. Current samples are uncalibrated, and high-speedloadphysical return accuracy remain unverified. |
| [#1](https://github.com/tscircuit/single-layer-grid-router/pull/1) | 🐳 Major | ⭐⭐⭐ | Add a single-layer PCB grid routing solver and custom tscircuit algorithmFn. The supplied 74HC00 breakout is reconstructed as a fixture and solves all 14 nets through 20 branches, entirely on one copper layer, without vias or jumpers. The solver extends BaseSolver, uses conservative clearance-aware A, groups shared electrical terminals, and retries deterministic net orders after ripping up generated copper. The event adapter supports async routing, progress, cancellationrestart, and synchronous solves. Include a React Cosmos debugger and handbookplop bootstrap configuration. Every test has a committed visual SVG snapshot, with brief test bodies and setupverification in testsfixtures; AGENTS.md documents this rule. The board dimensions are estimated from the screenshot and documented in the fixture and README. Validation: 11 Bun tests passed, including a real tscircuit layers1 integration, independent continuous connectivityclearance checks, existing copper, rotated obstacles, off-grid terminals, rip-up retries, and failurecancellation behavior. Type checking, format checking, and the Cosmos production export passed. All SVG snapshots were visually inspected. |
| [#291](https://github.com/tscircuit/schematic-viewer/pull/291) | 🐙 Minor | ⭐⭐ | Fixes dropdown menus appearing behind schematic toolbar controls due to z-index conflict by raising the view-menu layer to 110. |
| [#37](https://github.com/tscircuit/internal-dynamic-import/pull/37) | 🐙 Minor | ⭐⭐ | Adds support for lazy loading of JSCAD STEP and Parasolid exporters, including versioned imports and declaration synchronization. |
| [#10](https://github.com/tscircuit/tscircuit-standalone/pull/10) | 🐙 Minor | ⭐⭐ | Fixes the LED fixtures warning emissions to ensure only the correct components emit manufacturer-part-number warnings, allowing successful nightly release qualifications. |

<details>
<summary>🐌 Tiny Contributions (9)</summary>

| PR # | Impact | Description |
|------|--------|-------------|
| [#4609](https://github.com/tscircuit/core/pull/4609) | 🐌 Tiny | Updates tscircuitcapacity-autorouter from 0.0.974 to 0.0.982. |
| [#3063](https://github.com/tscircuit/tscircuit-autorouter/pull/3063) | 🐌 Tiny | Updates the tscircuitchecks dependency to version 0.0.255 to recover via-cleanup performance by incorporating continuity geometry optimization. |
| [#3064](https://github.com/tscircuit/tscircuit-autorouter/pull/3064) | 🐌 Tiny | Updates the high-density-repair02 dependency to optimize sequential repair by implementing conservative obstacle pruning, cached clearances, boundary checks, and reused spatial-query hits, while preserving candidate ordering and acceptance checks. |
| [#3052](https://github.com/tscircuit/tscircuit-autorouter/pull/3052) | 🐌 Tiny | Updates the dependency on tscircuitchecks to version 0.0.249 and modifies two tests for upstream readable-name diagnostics, ensuring tracegap assertions and structured trace-pair identity are retained. |
| [#3044](https://github.com/tscircuit/tscircuit-autorouter/pull/3044) | 🐌 Tiny | Updates the trace simplification solver dependency to a specific upstream commit, improving the handling of routed-copper vias and related cache test instrumentation. |
| [#257](https://github.com/tscircuit/circuit-json-to-gltf/pull/257) | 🐌 Tiny | Reproduces issue 255 through generated component GLBs, convertCircuitJsonToGltf, and PoppyGL, capturing broken behavior in GLB accessors for further debugging and fixing. |
| [#634](https://github.com/tscircuit/circuit-json-to-kicad/pull/634) | 🐌 Tiny | Ensures physical ball names such as A1 are consistent across KiCad PCB pads, library symbol pins, and placed symbol pin instances, preventing disconnection between schematic and footprint. |
| [#40](https://github.com/tscircuit/internal-dynamic-import/pull/40) | 🐌 Tiny | Fixes the issue where exporter declaration snapshots were not aligned with the installed published packages, causing build failures during releases. |
| [#12](https://github.com/tscircuit/tscircuit-standalone/pull/12) | 🐌 Tiny | Add a manual standalone release workflow that allows users to publish prereleases with a specific version or the latest version, even if a daily release has already been published. |

</details>

### [tscircuitbot](https://github.com/tscircuitbot)


<details>
<summary>🐌 Tiny Contributions (137)</summary>

| PR # | Impact | Description |
|------|--------|-------------|
| [#5685](https://github.com/tscircuit/tscircuit/pull/5685) | 🐌 Tiny | Automated package update |
| [#5684](https://github.com/tscircuit/tscircuit/pull/5684) | 🐌 Tiny | Updates the tscircuitcli package to version 0.1.2334 |
| [#5683](https://github.com/tscircuit/tscircuit/pull/5683) | 🐌 Tiny | Automated package update |
| [#5682](https://github.com/tscircuit/tscircuit/pull/5682) | 🐌 Tiny | Automated package update |
| [#5681](https://github.com/tscircuit/tscircuit/pull/5681) | 🐌 Tiny | Updates the tscircuitcli package from version 0.1.2331 to 0.1.2332 and the tscircuitrunframe package from version 0.0.2988 to 0.0.2989 in package.json |
| [#5680](https://github.com/tscircuit/tscircuit/pull/5680) | 🐌 Tiny | Automated package update |
| [#5679](https://github.com/tscircuit/tscircuit/pull/5679) | 🐌 Tiny | Automated package update |
| [#5678](https://github.com/tscircuit/tscircuit/pull/5678) | 🐌 Tiny | Automated package update |
| [#5677](https://github.com/tscircuit/tscircuit/pull/5677) | 🐌 Tiny | Automated package update |
| [#5674](https://github.com/tscircuit/tscircuit/pull/5674) | 🐌 Tiny | Automated package update |
| [#5673](https://github.com/tscircuit/tscircuit/pull/5673) | 🐌 Tiny | Updates the tscircuitcli package to version 0.1.2331 in the package.json file. |
| [#5672](https://github.com/tscircuit/tscircuit/pull/5672) | 🐌 Tiny | Updates the package version from 0.0.2883 to 0.0.2884 in package.json |
| [#5671](https://github.com/tscircuit/tscircuit/pull/5671) | 🐌 Tiny | Automated package update |
| [#5665](https://github.com/tscircuit/tscircuit/pull/5665) | 🐌 Tiny | Updates the package version from 0.0.2882 to 0.0.2883 in package.json |
| [#5664](https://github.com/tscircuit/tscircuit/pull/5664) | 🐌 Tiny | Updates the tscircuitcli package to version 0.1.2330 in the package.json file. |
| [#5663](https://github.com/tscircuit/tscircuit/pull/5663) | 🐌 Tiny | Updates the package version from 0.0.2881 to 0.0.2882 in package.json |
| [#5662](https://github.com/tscircuit/tscircuit/pull/5662) | 🐌 Tiny | Automated package update |
| [#5661](https://github.com/tscircuit/tscircuit/pull/5661) | 🐌 Tiny | Automated package update |
| [#5660](https://github.com/tscircuit/tscircuit/pull/5660) | 🐌 Tiny | Updates the tscircuitcli package version from 0.1.2328 to 0.1.2329 |
| [#5659](https://github.com/tscircuit/tscircuit/pull/5659) | 🐌 Tiny | Updates the package version from 0.0.2879 to 0.0.2880 in package.json |
| [#5658](https://github.com/tscircuit/tscircuit/pull/5658) | 🐌 Tiny | Automated package update |
| [#5657](https://github.com/tscircuit/tscircuit/pull/5657) | 🐌 Tiny | Automated package update |
| [#5656](https://github.com/tscircuit/tscircuit/pull/5656) | 🐌 Tiny | Updates the tscircuitcli package to version 0.1.2328 |
| [#5655](https://github.com/tscircuit/tscircuit/pull/5655) | 🐌 Tiny | Automated package update |
| [#5654](https://github.com/tscircuit/tscircuit/pull/5654) | 🐌 Tiny | Automated package update |
| [#5653](https://github.com/tscircuit/tscircuit/pull/5653) | 🐌 Tiny | Automated package update |
| [#5652](https://github.com/tscircuit/tscircuit/pull/5652) | 🐌 Tiny | Updates the tscircuitcli package version from 0.1.2325 to 0.1.2327 |
| [#5651](https://github.com/tscircuit/tscircuit/pull/5651) | 🐌 Tiny | Automated package update |
| [#5650](https://github.com/tscircuit/tscircuit/pull/5650) | 🐌 Tiny | Automated package update |
| [#5648](https://github.com/tscircuit/tscircuit/pull/5648) | 🐌 Tiny | Automated package update |
| [#5647](https://github.com/tscircuit/tscircuit/pull/5647) | 🐌 Tiny | Automated package update |
| [#5646](https://github.com/tscircuit/tscircuit/pull/5646) | 🐌 Tiny | Automated package update |
| [#5645](https://github.com/tscircuit/tscircuit/pull/5645) | 🐌 Tiny | Automated package update |
| [#5644](https://github.com/tscircuit/tscircuit/pull/5644) | 🐌 Tiny | Automated package update |
| [#5643](https://github.com/tscircuit/tscircuit/pull/5643) | 🐌 Tiny | Automated package update |
| [#5642](https://github.com/tscircuit/tscircuit/pull/5642) | 🐌 Tiny | Updates the package version from 0.0.2871 to 0.0.2872 in package.json |
| [#5641](https://github.com/tscircuit/tscircuit/pull/5641) | 🐌 Tiny | Updates the tscircuitcli package to version 0.1.2322 in the package.json file |
| [#5639](https://github.com/tscircuit/tscircuit/pull/5639) | 🐌 Tiny | Automated package update |
| [#5638](https://github.com/tscircuit/tscircuit/pull/5638) | 🐌 Tiny | Automated package update |
| [#5637](https://github.com/tscircuit/tscircuit/pull/5637) | 🐌 Tiny | Automated package update |
| [#5636](https://github.com/tscircuit/tscircuit/pull/5636) | 🐌 Tiny | Updates the tscircuitcli package to version 0.1.2321 |
| [#5635](https://github.com/tscircuit/tscircuit/pull/5635) | 🐌 Tiny | Automated package update |
| [#5634](https://github.com/tscircuit/tscircuit/pull/5634) | 🐌 Tiny | Automated package update |
| [#5633](https://github.com/tscircuit/tscircuit/pull/5633) | 🐌 Tiny | Automated package update |
| [#5632](https://github.com/tscircuit/tscircuit/pull/5632) | 🐌 Tiny | Updates the tscircuitcli package to version 0.1.2320 in the package.json file. |
| [#5436](https://github.com/tscircuit/tscircuit.com/pull/5436) | 🐌 Tiny | Automated package update |
| [#5434](https://github.com/tscircuit/tscircuit.com/pull/5434) | 🐌 Tiny | Automated package update |
| [#5433](https://github.com/tscircuit/tscircuit.com/pull/5433) | 🐌 Tiny | Updates the tscircuitrunframe package to version 0.0.2987 in package.json |
| [#5426](https://github.com/tscircuit/tscircuit.com/pull/5426) | 🐌 Tiny | Automated package update |
| [#5425](https://github.com/tscircuit/tscircuit.com/pull/5425) | 🐌 Tiny | Updates the tscircuiteval package from version 0.0.1609 to 0.0.1611 |
| [#5424](https://github.com/tscircuit/tscircuit.com/pull/5424) | 🐌 Tiny | Automated package update |
| [#5422](https://github.com/tscircuit/tscircuit.com/pull/5422) | 🐌 Tiny | Automated package update |
| [#5421](https://github.com/tscircuit/tscircuit.com/pull/5421) | 🐌 Tiny | Updates the tscircuiteval package from version 0.0.1607 to 0.0.1609 in the package.json file. |
| [#5420](https://github.com/tscircuit/tscircuit.com/pull/5420) | 🐌 Tiny | Updates the tscircuitrunframe package to version 0.0.2981 |
| [#5419](https://github.com/tscircuit/tscircuit.com/pull/5419) | 🐌 Tiny | Automated package update |
| [#5249](https://github.com/tscircuit/eval/pull/5249) | 🐌 Tiny | Automated package update to version 0.0.1616 |
| [#5248](https://github.com/tscircuit/eval/pull/5248) | 🐌 Tiny | Automated package update |
| [#5246](https://github.com/tscircuit/eval/pull/5246) | 🐌 Tiny | Automated package update to version 0.0.1615 |
| [#5245](https://github.com/tscircuit/eval/pull/5245) | 🐌 Tiny | Automated package update |
| [#5243](https://github.com/tscircuit/eval/pull/5243) | 🐌 Tiny | Automated package update |
| [#5242](https://github.com/tscircuit/eval/pull/5242) | 🐌 Tiny | Automated package update |
| [#5240](https://github.com/tscircuit/eval/pull/5240) | 🐌 Tiny | Automated package update |
| [#5239](https://github.com/tscircuit/eval/pull/5239) | 🐌 Tiny | Updates the version of the tscircuitcore package from 0.0.2148 to 0.0.2149 |
| [#5237](https://github.com/tscircuit/eval/pull/5237) | 🐌 Tiny | Automated package update |
| [#5236](https://github.com/tscircuit/eval/pull/5236) | 🐌 Tiny | Updates the version of the tscircuitcore package from 0.0.2147 to 0.0.2148 in package.json |
| [#5234](https://github.com/tscircuit/eval/pull/5234) | 🐌 Tiny | Automated package update |
| [#5233](https://github.com/tscircuit/eval/pull/5233) | 🐌 Tiny | Automated package update |
| [#5231](https://github.com/tscircuit/eval/pull/5231) | 🐌 Tiny | Automated package update |
| [#5230](https://github.com/tscircuit/eval/pull/5230) | 🐌 Tiny | Updates the version of the tscircuitcore and tscircuitprops packages in package.json |
| [#5228](https://github.com/tscircuit/eval/pull/5228) | 🐌 Tiny | Automated package update |
| [#5227](https://github.com/tscircuit/eval/pull/5227) | 🐌 Tiny | Updates the version of the tscircuitcore package from 0.0.2144 to 0.0.2145 in package.json |
| [#5737](https://github.com/tscircuit/runframe/pull/5737) | 🐌 Tiny | Automated package update |
| [#5736](https://github.com/tscircuit/runframe/pull/5736) | 🐌 Tiny | Updates the circuit-json-to-kicad package version from 0.0.229 to 0.0.231 in package.json |
| [#5734](https://github.com/tscircuit/runframe/pull/5734) | 🐌 Tiny | Automated package update |
| [#5733](https://github.com/tscircuit/runframe/pull/5733) | 🐌 Tiny | Automated package update |
| [#5732](https://github.com/tscircuit/runframe/pull/5732) | 🐌 Tiny | Automated package update |
| [#5731](https://github.com/tscircuit/runframe/pull/5731) | 🐌 Tiny | Automated package update |
| [#5730](https://github.com/tscircuit/runframe/pull/5730) | 🐌 Tiny | Automated package update |
| [#5729](https://github.com/tscircuit/runframe/pull/5729) | 🐌 Tiny | Updates the tscircuiteval package from version 0.0.1613 to 0.0.1614 |
| [#5727](https://github.com/tscircuit/runframe/pull/5727) | 🐌 Tiny | Automated package update |
| [#5726](https://github.com/tscircuit/runframe/pull/5726) | 🐌 Tiny | Automated package update |
| [#5725](https://github.com/tscircuit/runframe/pull/5725) | 🐌 Tiny | Automated package update |
| [#5724](https://github.com/tscircuit/runframe/pull/5724) | 🐌 Tiny | Updates the tscircuiteval package from version 0.0.1611 to 0.0.1612 in the package.json file. |
| [#5722](https://github.com/tscircuit/runframe/pull/5722) | 🐌 Tiny | Automated package update |
| [#5721](https://github.com/tscircuit/runframe/pull/5721) | 🐌 Tiny | Automated package update |
| [#5720](https://github.com/tscircuit/runframe/pull/5720) | 🐌 Tiny | Automated package update |
| [#5719](https://github.com/tscircuit/runframe/pull/5719) | 🐌 Tiny | Updates the tscircuiteval package from version 0.0.1609 to 0.0.1610 |
| [#5718](https://github.com/tscircuit/runframe/pull/5718) | 🐌 Tiny | Automated package update |
| [#5717](https://github.com/tscircuit/runframe/pull/5717) | 🐌 Tiny | Updates the tscircuiteval package from version 0.0.1608 to 0.0.1609 |
| [#5716](https://github.com/tscircuit/runframe/pull/5716) | 🐌 Tiny | Automated package update |
| [#5714](https://github.com/tscircuit/runframe/pull/5714) | 🐌 Tiny | Automated package update |
| [#5713](https://github.com/tscircuit/runframe/pull/5713) | 🐌 Tiny | Updates the tscircuiteval package from version 0.0.1607 to 0.0.1608 |
| [#5362](https://github.com/tscircuit/cli/pull/5362) | 🐌 Tiny | Automated package update |
| [#5361](https://github.com/tscircuit/cli/pull/5361) | 🐌 Tiny | Updates the tscircuitrunframe package from version 0.0.2988 to 0.0.2989 |
| [#5359](https://github.com/tscircuit/cli/pull/5359) | 🐌 Tiny | Updates the tscircuitrunframe package from version 0.0.2987 to 0.0.2988 |
| [#5358](https://github.com/tscircuit/cli/pull/5358) | 🐌 Tiny | Automated package update |
| [#5357](https://github.com/tscircuit/cli/pull/5357) | 🐌 Tiny | Updates the tscircuitrunframe package to version 0.0.2987 in the package.json file |
| [#5356](https://github.com/tscircuit/cli/pull/5356) | 🐌 Tiny | Automated package update |
| [#5355](https://github.com/tscircuit/cli/pull/5355) | 🐌 Tiny | Updates the tscircuitrunframe package to version 0.0.2986 |
| [#5354](https://github.com/tscircuit/cli/pull/5354) | 🐌 Tiny | Automated package update |
| [#5353](https://github.com/tscircuit/cli/pull/5353) | 🐌 Tiny | Updates the tscircuitrunframe package from version 0.0.2984 to 0.0.2985 |
| [#5351](https://github.com/tscircuit/cli/pull/5351) | 🐌 Tiny | Automated package update |
| [#5349](https://github.com/tscircuit/cli/pull/5349) | 🐌 Tiny | Automated package update |
| [#5347](https://github.com/tscircuit/cli/pull/5347) | 🐌 Tiny | Automated package update |
| [#5345](https://github.com/tscircuit/cli/pull/5345) | 🐌 Tiny | Updates the tscircuitrunframe package version from 0.0.2983 to 0.0.2984 in package.json |
| [#5343](https://github.com/tscircuit/cli/pull/5343) | 🐌 Tiny | Automated package update |
| [#5342](https://github.com/tscircuit/cli/pull/5342) | 🐌 Tiny | Updates the tscircuitrunframe package from version 0.0.2982 to 0.0.2983 |
| [#5340](https://github.com/tscircuit/cli/pull/5340) | 🐌 Tiny | Automated package update |
| [#5337](https://github.com/tscircuit/cli/pull/5337) | 🐌 Tiny | Automated package update |
| [#5336](https://github.com/tscircuit/cli/pull/5336) | 🐌 Tiny | Updates the tscircuitrunframe package from version 0.0.2980 to 0.0.2981 |
| [#5335](https://github.com/tscircuit/cli/pull/5335) | 🐌 Tiny | Automated package update |
| [#5334](https://github.com/tscircuit/cli/pull/5334) | 🐌 Tiny | Updates the tscircuitrunframe package to version 0.0.2980 in package.json |
| [#2628](https://github.com/tscircuit/svg.tscircuit.com/pull/2628) | 🐌 Tiny | Updates the tscircuit package version from 0.0.2888 to 0.0.2889 in package.json |
| [#2627](https://github.com/tscircuit/svg.tscircuit.com/pull/2627) | 🐌 Tiny | Updates the tscircuit package version from 0.0.2886 to 0.0.2888 in package.json |
| [#2626](https://github.com/tscircuit/svg.tscircuit.com/pull/2626) | 🐌 Tiny | Updates the tscircuit package version from 0.0.2883 to 0.0.2886 in package.json |
| [#2624](https://github.com/tscircuit/svg.tscircuit.com/pull/2624) | 🐌 Tiny | Updates the tscircuit package version from 0.0.2882 to 0.0.2883 |
| [#2622](https://github.com/tscircuit/svg.tscircuit.com/pull/2622) | 🐌 Tiny | Updates the tscircuit package version from 0.0.2881 to 0.0.2882 in package.json |
| [#2621](https://github.com/tscircuit/svg.tscircuit.com/pull/2621) | 🐌 Tiny | Updates the tscircuit package version from 0.0.2879 to 0.0.2881 in package.json |
| [#2620](https://github.com/tscircuit/svg.tscircuit.com/pull/2620) | 🐌 Tiny | Updates the tscircuit package version from 0.0.2878 to 0.0.2879 in package.json |
| [#2619](https://github.com/tscircuit/svg.tscircuit.com/pull/2619) | 🐌 Tiny | Updates the tscircuit package version from 0.0.2877 to 0.0.2878 in package.json |
| [#2618](https://github.com/tscircuit/svg.tscircuit.com/pull/2618) | 🐌 Tiny | Updates the tscircuit package version from 0.0.2876 to 0.0.2877 in package.json |
| [#2617](https://github.com/tscircuit/svg.tscircuit.com/pull/2617) | 🐌 Tiny | Updates the tscircuit package version from 0.0.2875 to 0.0.2876 in package.json |
| [#2616](https://github.com/tscircuit/svg.tscircuit.com/pull/2616) | 🐌 Tiny | Automated package update |
| [#2615](https://github.com/tscircuit/svg.tscircuit.com/pull/2615) | 🐌 Tiny | Updates the tscircuit package version from 0.0.2873 to 0.0.2874 in package.json |
| [#2614](https://github.com/tscircuit/svg.tscircuit.com/pull/2614) | 🐌 Tiny | Updates the tscircuit package version from 0.0.2871 to 0.0.2873 in package.json |
| [#2612](https://github.com/tscircuit/svg.tscircuit.com/pull/2612) | 🐌 Tiny | Updates the tscircuit package version from 0.0.2870 to 0.0.2871 in package.json |
| [#2611](https://github.com/tscircuit/svg.tscircuit.com/pull/2611) | 🐌 Tiny | Updates the tscircuit package version from 0.0.2869 to 0.0.2870 in package.json |
| [#2610](https://github.com/tscircuit/svg.tscircuit.com/pull/2610) | 🐌 Tiny | Updates the tscircuit package version from 0.0.2867 to 0.0.2869 in package.json |
| [#2608](https://github.com/tscircuit/svg.tscircuit.com/pull/2608) | 🐌 Tiny | Updates the tscircuit package from version 0.0.2866 to 0.0.2867 |
| [#3069](https://github.com/tscircuit/tscircuit-autorouter/pull/3069) | 🐌 Tiny | Automated package update |
| [#3062](https://github.com/tscircuit/tscircuit-autorouter/pull/3062) | 🐌 Tiny | Automated package update |
| [#3057](https://github.com/tscircuit/tscircuit-autorouter/pull/3057) | 🐌 Tiny | Automated package update |
| [#143](https://github.com/tscircuit/circuit-json-to-step/pull/143) | 🐌 Tiny | Automated package update |
| [#637](https://github.com/tscircuit/circuit-json-to-kicad/pull/637) | 🐌 Tiny | Automated package update |
| [#39](https://github.com/tscircuit/internal-dynamic-import/pull/39) | 🐌 Tiny | Automated package update |
| [#280](https://github.com/tscircuit/circuit-json-schematic-placement-analysis/pull/280) | 🐌 Tiny | Automated package update |
| [#279](https://github.com/tscircuit/circuit-json-schematic-placement-analysis/pull/279) | 🐌 Tiny | Automated package update |

</details>

### [trixie010](https://github.com/trixie010)

| PRs # | Impact | Rating | Description |
|------|--------|--------|-------------|
| [#598](https://github.com/tscircuit/easyeda-converter/pull/598) | 🐙 Minor | ⭐⭐ | Fixes the issue of duplicate pcb_cutout emissions for each HOLE record in EasyEDA, ensuring that only a single pcb_hole is reported for component mounting holes. |

### [ShiboSoftwareDev](https://github.com/ShiboSoftwareDev)

| PRs # | Impact | Rating | Description |
|------|--------|--------|-------------|
| [#205](https://github.com/tscircuit/circuit-json-to-tscircuit/pull/205) | 🐳 Major | ⭐⭐⭐ | Board conversion now emits one chip per imported PCB component instead of flattening every footprint into ImportedBoard. Net selectors, compound-pad ports, bottom-side geometry, linked CAD models, and component-local BREPtext placement stay associated with the owning component. Multiple CAD groups for the same component are accumulated instead of overwriting one another. Existing TI board snapshots update in place and focused regressions cover child components and topbottom CAD groups. |
| [#4619](https://github.com/tscircuit/core/pull/4619) | 🐙 Minor | ⭐⭐ | Fixes the issue where teardrops for equivalent source traces were not rendered correctly, leading to missing teardrops on routed copper. |
| [#4621](https://github.com/tscircuit/core/pull/4621) | 🐙 Minor | ⭐⭐ | Fixes the issue where a requested teardrop is missing when routed copper is attributed to another source trace on the same physical net. |
| [#206](https://github.com/tscircuit/circuit-json-to-tscircuit/pull/206) | 🐙 Minor | ⭐⭐ | Component-owned URL and JSCAD bodies are emitted as separate cadmodel elements inside the existing cadassembly. This preserves each bodys position, rotation, origin, scale, board-normal direction, and color without boolean-union geometry loss or custom rotation rebasing. |
| [#208](https://github.com/tscircuit/altium-to-circuit-json/pull/208) | 🐙 Minor | ⭐⭐ | Converts non-embedded Altium ComponentBody geometry into Circuit JSON model_jscad operations instead of dropping it, ensuring independent primitive bodies remain present with or without a model URL resolver. |

<details>
<summary>🐌 Tiny Contributions (1)</summary>

| PR # | Impact | Description |
|------|--------|-------------|
| [#1038](https://github.com/tscircuit/3d-viewer/pull/1038) | 🐌 Tiny | Aligns the viewers direct Circuit JSON dependency with the current Core peer API to prevent production bundling failures due to missing exports. |

</details>

### [rushabhcodes](https://github.com/rushabhcodes)


<details>
<summary>🐌 Tiny Contributions (2)</summary>

| PR # | Impact | Description |
|------|--------|-------------|
| [#4618](https://github.com/tscircuit/core/pull/4618) | 🐌 Tiny | Reproduces a bug where CC traces of a rotated USB-C connector touch grounded shield slots, providing a comprehensive test to validate the issue. |
| [#4617](https://github.com/tscircuit/core/pull/4617) | 🐌 Tiny | Update the circuit-json development dependency and override from 0.0.525 to 0.0.528, ensuring the installed schema and public types recognize the ownership field for components. |

</details>

### [MustafaMulla29](https://github.com/MustafaMulla29)

| PRs # | Impact | Rating | Description |
|------|--------|--------|-------------|
| [#4596](https://github.com/tscircuit/core/pull/4596) | 🐳 Major | ⭐⭐⭐ | Problem and change solderpaste is defined by tscircuitprops, but Core rejects it as an unregistered element. This adds the native primitive so one continuous copper pad can carry several independent stencil apertures. The renderer uses the existing props and pcb_solder_paste schemas, supports rectangles and circles on either outer layer, and preserves parent rotations, footprint flips, layout movement, and removal. Cached subcircuits retain independent apertures and their orientation, including suppressed full-pad openings. User props remain immutable. Uses the published tscircuitcircuit-json-util0.0.122, which includes https:github.comtscircuitcircuit-json-utilpull238. Cached PCB primitives use the shared transform utility. Circuit JSON import retains an apertures existing rotation as derived state because authored solder-paste props only expose axis-aligned shapes. Cached circular through-hole paste is restored as independent paste geometry, so inflated round holes must not generate it again. This uses Cores existing _isInflatedFromCircuitJson state. Two focused regressions verify that a mixed footprint keeps three automatic paste records and that an explicitly overlapping aperture is preserved, with caching on and off. Each new regression has its own file and labeled snapshot. Pill and oval generation are unchanged. Includes ten solder-paste tests, including a six-window pattern over a single exposed copper pad. Updated to mains isSmt support; keeps tscircuitprops0.0.701 and the released paste transformation fix. Fixes 3577.  Validation All 10 solder-paste tests pass. The two new cache regressions failed before the fix (5 instead of 3 records, and 6 instead of 4). Focused suite: 34 pass, 1 existing pill-paste snapshot mismatch. The 0.12 mismatch reproduces on unchanged main f518678 with the same dependencies and produces an identical diff image; its snapshot is unchanged. Existing isSmt tests, manual-via regression, and standalone primitive caching pass. The manual-via test now matches main exactly. Polygon plated-hole test and both new snapshot comparisons pass after removing ternaries from the newly touched primitive. bunx tsc --noEmit, bun run build, and bun run smoke-test:dist pass. bun run format, git diff --check, and INPUT_PACKAGE_TYPEinternal_lib bunx tscircuitdependency-check pass. Zero ternaries in the 17 changed TSTSX files. The neighboring polygon-paste caching snapshot previously showed a 0.04 mismatch on both this PR and unchanged code with the same dependencies. That baseline is unchanged. The full test suite was not rerun for this update.  Scope This implements Core rendering and Circuit JSON importcache support. It does not change downstream Gerber or KiCad exporters; they must consume independent pcb_solder_paste records to preserve these apertures. |
| [#271](https://github.com/tscircuit/circuit-json-schematic-placement-analysis/pull/271) | 🐳 Major | ⭐⭐⭐ | Adds SwitchRcNetworkGroupingSolver, reporting SwitchRcNetworkNotGrouped when a grounded switch, its parallel capacitor, or its local pull resistor is separated from the group. It checks both switchcapacitor spacing and the pull resistors distance from the nearer member of that pair. A distant resistor is reported even when the switch and capacitor are already together. The complete controls sheet from AnasSarkizGame-Boy-Enhance v1.0.3(https:tscircuit.comAnasSarkizGame-Boy-Enhance?version1.0.3schematic) supplies ten real networks: SW3SW12, C45C54, and R26R35. Stacked on the TSX-only repro 270. The analyzer reports placement advice; the TSX fixture demonstrates the correction.  Complete 30-component controls sheet  Existing findings  New grouping findings   ---  ---:  ---:   Original published placement  10  10   Only rotate the capacitors as previously advised  0  10   Group and rotate all ten switchresistorcapacitor networks  0  0   Regression variant: corrected layout with only R26 moved away  0  1  The last row is a deliberate TSX regression variant, not the published placement. Its test verifies that moving only R26 back clears the finding, with every electrical record unchanged.  Reference and original rendering TI SCEA094, page 1(https:www.ti.comlitabscea094scea094.pdfpage1) draws the switch and capacitor as adjacent parallel branches with a pull resistor above their shared signal. Its buffer is not part of this boards controls sheet; the example supports the drawing convention, not a debounce-function inference or a numeric spacing requirement.  Published TI reference  Original tscircuit controls sheet   ---  ---   !TI switch RC network(https:www.ti.comodsimagesSCEA094GUID-D22D0495-3892-4401-908A-5C89503658D6-low.gif)  !Original complete controls sheet(https:raw.githubusercontent.comtscircuitcircuit-json-schematic-placement-analysisd19716adbff5a596c984788fe731b012b74e9454testscases__snapshots__gameboy-switch-capacitor-repro-full-sheet.snap.svg)   Correction Single-network detail, at equal scale with a divider. The switch, capacitor, and resistor share one numbered finding: !SW3 C45 R26 before and after(https:raw.githubusercontent.comtscircuitcircuit-json-schematic-placement-analysis9bf448fbfa268d04ea013c8ffbcbbbd9e234615atestscases__snapshots__gameboy-switch-capacitor-pair-comparison.snap.svg) All ten networks together, with matching numbered diagnostics: !Complete controls before and after(https:raw.githubusercontent.comtscircuitcircuit-json-schematic-placement-analysis9bf448fbfa268d04ea013c8ffbcbbbd9e234615atestscases__snapshots__gameboy-switch-capacitor-correction-comparison.snap.svg) Complete corrected sheet at readable scale(https:raw.githubusercontent.comtscircuitcircuit-json-schematic-placement-analysis9bf448fbfa268d04ea013c8ffbcbbbd9e234615atestscases__snapshots__gameboy-switch-capacitor-correction-full-sheet.snap.svg)  Full original with the new findings(https:raw.githubusercontent.comtscircuitcircuit-json-schematic-placement-analysis9bf448fbfa268d04ea013c8ffbcbbbd9e234615atestscases__snapshots__gameboy-switch-capacitor-repro-full-sheet.snap.svg) The correction retains all 30 components and their symbol definitions, movesrotates the networks, and reduces the section headings font size to avoid crowding the supply label. Full placement analysis reports zero findings on the entire controls sheet; this does not refer to the other five board sheets.  Detection and checks Uses typed switchcapacitorresistor records, connectivity, explicit groundpower flags, and schematic scope. No name, pin-label, net-label, or port_hints matching establishes a role. Requires one grounded two-terminal switch and one capacitor across the same two nets. When present, one local resistor from their signal to an explicitly identified supply joins the group and has its spacing checked. The switchcapacitor check also works without a pull resistor. Measures body gaps: switch to capacitor, then resistor to the nearer switchcapacitor. Reports separation beyond the larger of 4 schematic units or twice the larger symbol dimension for the measured pair. This readability heuristic permits staggered placements and label space; it does not demand exact coordinates. Skips competing switchescapacitors or pull resistors, a same-sheet signal consumer, unsupported or missing placementsports, DNPDNC parts, separate scopes, and intervening unrelated bodies. Off-sheet signal consumers are allowed. Guard tests cover both drawing axes, a resistor close to either member, a separated resistor, and ambiguous or obstructed cases. The R26-only regression verifies a single finding before and zero full-sheet findings after moving R26. Original-to-corrected tests compare all 163 electrical records. Cores rotation-dependent removal of posneg aliases on the 20 capacitor ports is explicitly checked; all other source fields match. Wire-graph checks verify continuous signal and ground connections on every corrected network. Validation: 225 tests pass, typecheck and formatting checks pass, and all four snapshots were rendered and inspected. No dependency changes or unrelated snapshot updates. Shared snapshot helpers only gain an optional subject heading and singularplural footer wording; existing unrelated snapshots remain unchanged. |
| [#249](https://github.com/tscircuit/circuit-json-schematic-placement-analysis/pull/249) | 🐳 Major | ⭐⭐⭐ | Stacked on 248, the complete TSX repro from pmdroidkey-pcb v1.0.4. Adds SwitchMatrixDiodePlacementSolver to identify two placement problems: 1. A matrix diode is far from its connected switch. 2. Connected matrix rows or columns have excessive unused space after their switchdiode pairs are nearby. The corrected layout uses a compact 34 matrix, reducing the row pitch from 9 to 4 schematic units. All twelve switchdiode connections are drawn as continuous straight wires. Full-sheet placement analysis reports 0 findings with every analyzer enabled; tests verify that electrical source records and pin connections remain unchanged. |
| [#277](https://github.com/tscircuit/circuit-json-schematic-placement-analysis/pull/277) | 🐙 Minor | ⭐⭐ | Adds functionality to detect and report inline parallel capacitor pairs in schematic designs, ensuring they are drawn as separate branches for improved readability and compliance with design standards. |

<details>
<summary>🐌 Tiny Contributions (3)</summary>

| PR # | Impact | Description |
|------|--------|-------------|
| [#276](https://github.com/tscircuit/circuit-json-schematic-placement-analysis/pull/276) | 🐌 Tiny | Reproduces C_SD_HF (100 nF) and C_SD_BULK (10 F) on the complete 16-component microSD boot sheet from ShiboSoftwareDevt113-s3-linux-computer-p9 v0.1.4, ensuring correct placement and connectivity without introducing new dependencies or changes to the core functionality. |
| [#270](https://github.com/tscircuit/circuit-json-schematic-placement-analysis/pull/270) | 🐌 Tiny | Reproduces the complete GAME INPUTS  GPIO FILTERS sheet from AnasSarkizGame-Boy-Enhance v1.0.3, including 30 components with preserved placements and connections. |
| [#248](https://github.com/tscircuit/circuit-json-schematic-placement-analysis/pull/248) | 🐌 Tiny | Adds the complete 92-component TSX sheet from pmdroidkey-pcb v1.0.4. Each of its 12 matrix diodes (D1D12) sits diagonally away from its corresponding switch (SW1SW12), creating a long bent connection. The current analyzers report 17 other findings and do not identify these separated pairs. The 19 files contain the original board TSX, its 15 component imports, a render wrapper, one test, and an unhighlighted full-sheet snapshot with diagnostics below. Original component positions and physical pin connections are preserved; the repositorys core 0.0.2132 regenerates the routes. The imported C81598 diode declares its manufacturer pin mapping, pin 1  cathode and pin 2  anode. Apart from that explicit TSX mapping, provenance comments, and formatting, the source files are unchanged. Validation: the full-sheet repro test passes against current main. The repro verifies all 12 switchdiode placements, diode ports, private branch connections, and the distinct rowcolumn buses. |

</details>

### [0hmX](https://github.com/0hmX)

| PRs # | Impact | Rating | Description |
|------|--------|--------|-------------|
| [#4529](https://github.com/tscircuit/core/pull/4529) | 🐙 Minor | ⭐⭐ | Reports disallowed blind or buried vias in manual paths when the board disables them, preserving saved copper and aggregating all disallowed vias. |

<details>
<summary>🐌 Tiny Contributions (1)</summary>

| PR # | Impact | Description |
|------|--------|-------------|
| [#1](https://github.com/tscircuit/dataset-tsx35-kicad-boards/pull/1) | 🐌 Tiny | The standard tsci init configuration already loads tscircuit types globally. Remove 75 redundant empty tscircuitcore type imports from the board, footprint, and schematic sources. Validation: full typecheck and FTDI HTML3D build pass. All 75 changed files emit identical JavaScript before and after the cleanup. |

</details>

### [hrithik18k](https://github.com/hrithik18k)

| PRs # | Impact | Rating | Description |
|------|--------|--------|-------------|
| [#4593](https://github.com/tscircuit/core/pull/4593) | 🐙 Minor | ⭐⭐ | Modifies solder paste generation logic to respect the isSmt property, preventing unwanted paste for through-hole components while retaining paste for mixed footprints. |

### [imrishabh18](https://github.com/imrishabh18)

| PRs # | Impact | Rating | Description |
|------|--------|--------|-------------|
| [#5324](https://github.com/tscircuit/cli/pull/5324) | 🐳 Major | ⭐⭐⭐ | Add --jscdn-base-url url to tsci build, allowing users to set the JS CDN base URL for dynamic imports in the generated static site. |
| [#142](https://github.com/tscircuit/circuit-json-to-step/pull/142) | 🐳 Major | ⭐⭐⭐ | STEP exports currently split printed parts into a filename map, which consumers package as ZIPs while omitting boards and ordinary assembly parts. Make circuitJsonToStep(circuitJson) return one STEP string containing the complete named assembly by default, including all supported PCB boards, components, printed parts, and other CAD parts. No exportMode or component-inclusion flags are needed for the default export; explicit exportMode: pcb retains the existing PCB-only path. Preserve colors, model origins, unit scale, rotations, and placement for JSCAD and imported STEP parts. Include supported external meshes with shared topology and scope holes to each board in multi-board designs. Missing geometry and nested imported STEP assemblies fail explicitly rather than producing incomplete assemblies. Update public types, the demo, documentation, and regression snapshots. Migration: Assembly output changes from Recordstring, string to string, and the default now includes the complete design even without assembly-part tags. Consumers requiring the previous PCB-only behavior must explicitly select exportMode: pcb. Validation: 29 converter tests (279 assertions), TypeScript, formatting, ESMdeclaration build, and whitespace checks passed. OCCT checks verify default exports for ordinary PCBs, mixed assemblies, multiple boards, and bare CAD, plus names, body counts, colors, transforms, cached STEP instances, and external meshes. The demo browser build remains blocked by the existing native resvgresvg-js .node dependency; the same error was reproduced at the prior PR head f3eca47. Consumer update: https:github.comtscircuittscircuit.compull5409 (draft until a release containing this default behavior is available). |
| [#11](https://github.com/tscircuit/tscircuit-standalone/pull/11) | 🐳 Major | ⭐⭐⭐ | The standalone executable now launches the shared tscircuitcli and supplies the prepared JS CDN directory expected by its merged devsite support. The CLI dependency is pinned to merged commit fc0f4e0739ce3b93b1fb1c332387c9ce9449ae98 (tscircuitcli5350). At build time, follow that CLIs RunFrame dependency graph to discover internal-dynamic-import calls, bundle the 11 requested packages from existing dependencies, and reuse the browserWASM adapters. At startup, extract the embedded files into a temporary directory and set TSCIRCUIT_STANDALONE1 and TSCIRCUIT_JSCDN_DIR before loading the CLI. tsci dev serves jscdn; tsci build --site automatically copies the files into distjscdn. Asset URLs remain relative for sites hosted below a subpath. Include the shared CLIs buildsnapshot workers and runtime module registration. Use portable RollupResvg WASM loaders for compilation. The previous prototype CLI remains available from source; the README and CI now describe and exercise the shared CLI. This bundles the JS CDN packages, not every remote service used by the CLI or RunFrame. No CLI package.json dependencies are added. Validation: Typechecks and the two small JS CDN unit tests pass. Compiled executable smoke passes on macOS arm64Bun 1.3.14: versionhelp, sequential and worker TSX builds, PNG output, automatic site copying, and real tsci dev, with no project dependencies or runtime on PATH. Chromium imports all 11 bundled packages and runs a WASM-backed FDM exporter from both dev and nested static-site URLs, with external browser requests blocked. Linux x64 cross-compilation and license inventory pass with CIs pinned Bun 1.3.12; the graph contains no native .node addons. Bun 1.3.12s compiled executables could not run on this Mac, so native local smoke used 1.3.14. Existing suite: 149 pass; one existing archive test requires GNU tar (--sortname), unavailable with this Macs BSD tar. Ubuntu CI covers the full suite, loopback-only browser check, and five compilation targets. |
| [#5350](https://github.com/tscircuit/cli/pull/5350) | 🐙 Minor | ⭐⭐ | Copies prepared JS CDN packages to distjscdn when TSCIRCUIT_STANDALONE is set, allowing for automatic site builds with a default base URL. |
| [#5348](https://github.com/tscircuit/cli/pull/5348) | 🐙 Minor | ⭐⭐ | Serve prepared packages from TSCIRCUIT_JSCDN_DIR at jscdn and set window.TSCIRCUIT_JSCDN_BASE_URL  jscdn before runframe loads, with support for local testing via --jscdn-dir path. |
| [#5344](https://github.com/tscircuit/cli/pull/5344) | 🐙 Minor | ⭐⭐ | Copies prepared JS CDN packages from TSCIRCUIT_JSCDN_DIR into distjscdn for static site builds, preserving paths and contents without downloading or rebuilding packages. |
| [#38](https://github.com/tscircuit/internal-dynamic-import/pull/38) | 🐙 Minor | ⭐⭐ | Allows hosts to set window.TSCIRCUIT_JSCDN_BASE_URL for importing optional modules, enabling a standalone CLI to serve bundled dependencies without custom importers. |

<details>
<summary>🐌 Tiny Contributions (4)</summary>

| PR # | Impact | Description |
|------|--------|-------------|
| [#503](https://github.com/tscircuit/jscad-electronics/pull/503) | 🐌 Tiny | Aligns the NEMA23 motor body with a newly designed curved rear cap, ensuring a flush fit without side overhang, while maintaining existing front features and improving rear mounting options. |
| [#5715](https://github.com/tscircuit/runframe/pull/5715) | 🐌 Tiny | Updates the tscircuitinternal-dynamic-import package from version 0.0.15 to 0.0.18 and tscircuitprops from 0.0.697 to 0.0.702, enabling support for local JS CDN imports with a new base URL configuration. |
| [#119](https://github.com/tscircuit/modelprinter/pull/119) | 🐌 Tiny | Aligns the NEMA23 rear cap with a new curved design and rectangular rear pattern, ensuring proper fit and validation against existing dimensions. |
| [#13](https://github.com/tscircuit/tscircuit-standalone/pull/13) | 🐌 Tiny | Fixes macOS standalone binaries being killed on startup due to malformed signature by updating Bun version and ensuring proper signing and verification of binaries. |

</details>

### [techmannih](https://github.com/techmannih)

| PRs # | Impact | Rating | Description |
|------|--------|--------|-------------|
| [#43](https://github.com/tscircuit/circuit-json-placement-analysis/pull/43) | 🐙 Minor | ⭐⭐ | Fixes incorrect PCB vertical direction calculations that led to mislabeling of board edges and incorrect placement suggestions, improving the accuracy of component placement analysis. |

<details>
<summary>🐌 Tiny Contributions (1)</summary>

| PR # | Impact | Description |
|------|--------|-------------|
| [#42](https://github.com/tscircuit/circuit-json-placement-analysis/pull/42) | 🐌 Tiny | Reproduces a bug where PCB placement analysis suggests moving an overlapping component in the wrong vertical direction and labels the nearest top board edge as bottom, capturing this behavior before applying the fix. |

</details>

### [AnasSarkiz](https://github.com/AnasSarkiz)


<details>
<summary>🐌 Tiny Contributions (1)</summary>

| PR # | Impact | Description |
|------|--------|-------------|
| [#262](https://github.com/tscircuit/ti/pull/262) | 🐌 Tiny | Add ti generate-sysconfig-site file to generate a self-contained, read-only HTML page from .syscfg, Circuit JSON, or TSTSX without requiring TI software or SDK installation. |

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
