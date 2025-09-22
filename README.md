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

# Contribution Overview 2025-09-17

## PRs by Repository

```mermaid
pie
    "tscircuit/schematic-viewer" : 1
    "tscircuit/runframe" : 9
    "tscircuit/cli" : 6
    "tscircuit/circuit-json" : 5
    "tscircuit/props" : 4
    "tscircuit/tscircuit" : 3
    "tscircuit/core" : 9
    "tscircuit/eval" : 11
    "tscircuit/file-server" : 1
    "tscircuit/circuit-to-svg" : 4
    "tscircuit/tscircuit.com" : 13
    "tscircuit/keyboard-utils" : 2
    "tscircuit/circuit-json-to-gerber" : 2
    "tscircuit/common" : 6
    "tscircuit/3d-viewer" : 1
    "tscircuit/jlcsearch" : 1
    "tscircuit/assembly-viewer" : 1
    "tscircuit/create-snippet-url" : 1
    "tscircuit/svg.tscircuit.com" : 1
    "tscircuit/parts-engine" : 2
    "tscircuit/contribution-tracker" : 1
```

## Contributor Overview

| Contributor | 🐳 Major | 🐙 Minor | 🐌 Tiny | ⭐ | Score | Discussion Contributions |
|-------------|---------|---------|---------|-----|----------------|--------------------------|
| [seveibar](#seveibar) | 4 | 3 | 10 | ⭐⭐⭐ | 47 | 0🔹 0🔶 0💎 |
| [ShiboSoftwareDev](#ShiboSoftwareDev) | 8 | 3 | 0 | ⭐⭐⭐ | 43 | 0🔹 0🔶 0💎 |
| [ArnavK-09](#ArnavK-09) | 7 | 3 | 4 | ⭐⭐⭐ | 41 | 0🔹 0🔶 0💎 |
| [imrishabh18](#imrishabh18) | 4 | 8 | 5 | ⭐⭐⭐ | 40.5 | 0🔹 0🔶 0💎 |
| [Abse2001](#Abse2001) | 2 | 1 | 8 | ⭐⭐ | 19 | 0🔹 0🔶 0💎 |
| [tscircuitbot](#tscircuitbot) | 0 | 0 | 8 | ⭐ | 8 | 0🔹 0🔶 0💎 |
| [MustafaMulla29](#MustafaMulla29) | 1 | 0 | 0 | ⭐ | 4 | 0🔹 0🔶 0💎 |
| [nailoo](#nailoo) | 0 | 1 | 0 |  | 2 | 0🔹 0🔶 0💎 |
| [Ayushjhawar8](#Ayushjhawar8) | 0 | 0 | 2 |  | 2 | 0🔹 0🔶 0💎 |
| [0hmX](#0hmX) | 0 | 0 | 1 |  | 1 | 0🔹 0🔶 0💎 |
| [devroy10](#devroy10) | 0 | 0 | 1 |  | 1 | 0🔹 0🔶 0💎 |

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
| [Ayushjhawar8](#Ayushjhawar8) | 4 | 2 | 0 | 0 | 0 | 3 | 2 | 2 | 0 | 0 | 0 |
| [seveibar](#seveibar) | 3 | 0 | 0 | 43 | 6 | 25 | 18 | 47 | 0 | 0 | 0 |
| [Asymtode712](#Asymtode712) | 3 | 0 | 0 | 0 | 0 | 2 | 0 | 0 | 0 | 0 | 0 |
| [MustafaMulla29](#MustafaMulla29) | 0 | 0 | 0 | 0 | 0 | 2 | 1 | 4 | 0 | 0 | 0 |
| [nailoo](#nailoo) | 19 | 2 | 1 | 0 | 0 | 6 | 1 | 2 | 0 | 0 | 0 |
| [ShiboSoftwareDev](#ShiboSoftwareDev) | 17 | 10 | 0 | 1 | 0 | 13 | 11 | 43 | 0 | 0 | 0 |
| [shravanngoswamii](#shravanngoswamii) | 1 | 0 | 1 | 0 | 0 | 1 | 0 | 0 | 0 | 0 | 0 |
| [sahil-ansari01](#sahil-ansari01) | 5 | 0 | 0 | 0 | 0 | 18 | 0 | 0 | 0 | 0 | 0 |
| [imrishabh18](#imrishabh18) | 29 | 9 | 0 | 3 | 0 | 24 | 17 | 40.5 | 0 | 0 | 0 |
| [sparkybug](#sparkybug) | 0 | 0 | 0 | 0 | 0 | 1 | 0 | 0 | 0 | 0 | 0 |
| [Abse2001](#Abse2001) | 12 | 8 | 1 | 0 | 1 | 19 | 11 | 19 | 0 | 0 | 0 |
| [Quanta-Naut](#Quanta-Naut) | 5 | 0 | 1 | 0 | 0 | 1 | 0 | 0 | 0 | 0 | 0 |
| [techmannih](#techmannih) | 1 | 0 | 0 | 0 | 0 | 2 | 0 | 0 | 0 | 0 | 0 |
| [dhvll](#dhvll) | 0 | 0 | 0 | 0 | 0 | 1 | 0 | 0 | 0 | 0 | 0 |
| [0hmX](#0hmX) | 3 | 1 | 1 | 0 | 0 | 3 | 1 | 1 | 0 | 0 | 0 |
| [AnasSarkiz](#AnasSarkiz) | 2 | 0 | 1 | 0 | 0 | 1 | 0 | 0 | 0 | 0 | 0 |
| [lessuselesss](#lessuselesss) | 7 | 0 | 0 | 0 | 0 | 3 | 0 | 0 | 0 | 0 | 0 |
| [Copilot](#Copilot) | 0 | 0 | 0 | 0 | 0 | 1 | 0 | 0 | 0 | 0 | 0 |
| [ArnavK-09](#ArnavK-09) | 22 | 15 | 0 | 3 | 0 | 15 | 14 | 41 | 0 | 0 | 0 |
| [tscircuitbot](#tscircuitbot) | 0 | 0 | 0 | 0 | 0 | 17 | 8 | 8 | 0 | 0 | 0 |
| [vishwamartur](#vishwamartur) | 0 | 0 | 0 | 0 | 0 | 1 | 0 | 0 | 0 | 0 | 0 |
| [pxlpal](#pxlpal) | 11 | 2 | 1 | 0 | 0 | 2 | 0 | 0 | 0 | 0 | 0 |
| [AJ0070](#AJ0070) | 2 | 0 | 0 | 0 | 0 | 1 | 0 | 0 | 0 | 0 | 0 |
| [devroy10](#devroy10) | 1 | 1 | 0 | 0 | 0 | 1 | 1 | 1 | 0 | 0 | 0 |
| [Heinrich-XIAO](#Heinrich-XIAO) | 1 | 0 | 0 | 0 | 0 | 1 | 0 | 0 | 0 | 0 | 0 |

## Top 7 Repositories by Contribution Points

```mermaid
pie
    "tscircuit/tscircuit.com" : 32
    "tscircuit/core" : 20
    "tscircuit/cli" : 19
    "tscircuit/runframe" : 18
    "tscircuit/circuit-to-svg" : 14
    "tscircuit/eval" : 11
    "tscircuit/circuit-json" : 9
```

## Changes by Repository

### [tscircuit/schematic-viewer](https://github.com/tscircuit/schematic-viewer)

| PR # | Impact | Rating | Contributor | Description |
|------|--------|--------|-------------|-------------|
| [#136](https://github.com/tscircuit/schematic-viewer/pull/136) | 🐳 Major | ⭐⭐⭐ | seveibar | Add a MouseTracker context and useMouseEventsOverBoundingBox hook for registering bounding boxes, introduce a SchematicComponentMouseTarget overlay that highlights components and reports clicks, and update SchematicViewer to expose an onSchematicComponentClicked prop and render hover outlines when supplied. |

### [tscircuit/runframe](https://github.com/tscircuit/runframe)

| PR # | Impact | Rating | Contributor | Description |
|------|--------|--------|-------------|-------------|
| [#1167](https://github.com/tscircuit/runframe/pull/1167) | 🐳 Major | ⭐⭐⭐ | seveibar | Persist the selected main component in the URL hash for the CLI, allowing for better state management and user experience when navigating the application. |
| [#1178](https://github.com/tscircuit/runframe/pull/1178) | 🐳 Major | ⭐⭐⭐ | ShiboSoftwareDev | Adds a new Pinout tab to the runframe which displays pins that have been explicitly marked for inclusion in the boards pinout. |
| [#1182](https://github.com/tscircuit/runframe/pull/1182) | 🐳 Major | ⭐⭐⭐ | ArnavK-09 | Adds the RunFrameStaticBuildViewer component for displaying circuit JSON files fetched on-demand without code execution. |

<details>
<summary>🐌 Tiny Contributions (6)</summary>

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#1194](https://github.com/tscircuit/runframe/pull/1194) | 🐌 Tiny | seveibar | Renders the static build viewer when TSCIRCUIT_RUNFRAME_STATIC_FILE_LIST is provided in the standalone build and declares relevant window globals for static file list detection. |
| [#1188](https://github.com/tscircuit/runframe/pull/1188) | 🐌 Tiny | seveibar | Updates the tscircuiteval package to the latest patch release version 0.0.332 in the package.json file. |
| [#1185](https://github.com/tscircuit/runframe/pull/1185) | 🐌 Tiny | imrishabh18 | Prevents the enhanced file selector dropdown from listing files whose names start with test.tsx by centralizing file filtering logic to ignore these generated test files. |
| [#1184](https://github.com/tscircuit/runframe/pull/1184) | 🐌 Tiny | Ayushjhawar8 | https:github.comuser-attachmentsassets60e9c48b-4039-4162-85ea-a27d561ff8f4 |
| [#1169](https://github.com/tscircuit/runframe/pull/1169) | 🐌 Tiny | Ayushjhawar8 | When you type, it prioritizes files in your current directory at the top Files from other directories show below with their full paths Search clears automatically when you close the dropdown No more clutter from section titles since the breadcrumbs provide sufficient context |
| [#1170](https://github.com/tscircuit/runframe/pull/1170) | 🐌 Tiny | devroy10 | fixes 1168  Summary Centers the file selector without absolute positioning and constrains its width with truncation so it no longer overlaps or hides the PCBSchematic3D tabs on narrow viewports.  Changes libcomponentsRunFrameWithApiRunFrameWithApi.tsx Replace absolute-centered wrapper with flex-centered wrapper so the selector participates in layout. libcomponentsRunFrameWithApifile-selector-combobox.tsx Add responsive max-width, ellipsis truncation, and keep natural width otherwise.  Rationale Absolute positioning caused the file selector to float above and obscure the tabs at small widths. Letting it flow in flex with truncation keeps all controls accessible.  Risks Extremely narrow widths may still feel tight. Tabs now remain tappable, but we may want a future responsive collapse as CircuitJsonPreview cuts off to the right on smaller screens. |

</details>

### [tscircuit/cli](https://github.com/tscircuit/cli)

| PR # | Impact | Rating | Contributor | Description |
|------|--------|--------|-------------|-------------|
| [#364](https://github.com/tscircuit/cli/pull/364) | 🐳 Major | ⭐⭐⭐ | seveibar | Restores the CLI-focused implementation of getIndex and adds a dedicated getStaticIndexHtmlFile helper for static builds, switching the tscircuit build --site flow to the new static index generator and updating existing index token tests to cover the static index HTML output. |
| [#362](https://github.com/tscircuit/cli/pull/362) | 🐳 Major | ⭐⭐⭐ | seveibar | Stops printing shipping information from tsci auth whoami while keeping accountsession basics and falls back to fetching account data only when the stored account id is missing. |
| [#356](https://github.com/tscircuit/cli/pull/356) | 🐳 Major | ⭐⭐⭐ | ShiboSoftwareDev | Add commands to run circuit simulations and export results in SPICE and CSV formats from the CLI. |
| [#360](https://github.com/tscircuit/cli/pull/360) | 🐳 Major | ⭐⭐⭐ | ArnavK-09 | Fixes the interactive command handling for cloning directories in the CLI, allowing users to choose actions when a directory already exists. |
| [#361](https://github.com/tscircuit/cli/pull/361) | 🐙 Minor | ⭐⭐ | seveibar | Adds support for uploading binary assets by detecting known binary file extensions and encoding them in base64, along with API changes and regression tests for binary asset propagation. |

<details>
<summary>🐌 Tiny Contributions (1)</summary>

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#363](https://github.com/tscircuit/cli/pull/363) | 🐌 Tiny | seveibar | Updates the tscircuitrunframe dependency to version 0.0.970 and modifies the bun lockfile accordingly. |

</details>

### [tscircuit/circuit-json](https://github.com/tscircuit/circuit-json)

| PR # | Impact | Rating | Contributor | Description |
|------|--------|--------|-------------|-------------|
| [#287](https://github.com/tscircuit/circuit-json/pull/287) | 🐙 Minor | ⭐⭐ | seveibar | Add optional rats_nest_color to pcb_trace definitions and docs, introduce pcb_net type with optional source_net_id and rats_nest_color and wire it into exports, document new type and add targeted parsing tests |
| [#294](https://github.com/tscircuit/circuit-json/pull/294) | 🐙 Minor | ⭐⭐ | imrishabh18 | Moves the do_not_place flag from the source component schema to the PCB component schema, updating the documentation accordingly. |
| [#293](https://github.com/tscircuit/circuit-json/pull/293) | 🐙 Minor | ⭐⭐ | imrishabh18 | Adds a do_not_place boolean with a default of false to the source component base schema and aligns source simple pin header and potentiometer interfaces with SourceComponentBase. |
| [#291](https://github.com/tscircuit/circuit-json/pull/291) | 🐙 Minor | ⭐⭐ | imrishabh18 | Add an is_box_with_pins flag to schematic components with a default of true and update documentation and tests accordingly. |

<details>
<summary>🐌 Tiny Contributions (1)</summary>

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#292](https://github.com/tscircuit/circuit-json/pull/292) | 🐌 Tiny | seveibar | Renames the rats_nest_color field to highlight_color in PCB net and trace schemas, updating related documentation and tests accordingly. |

</details>

### [tscircuit/props](https://github.com/tscircuit/props)

| PR # | Impact | Rating | Contributor | Description |
|------|--------|--------|-------------|-------------|
| [#417](https://github.com/tscircuit/props/pull/417) | 🐙 Minor | ⭐⭐ | seveibar | Adds optional ratsNestColor attribute to traces, nets, and pin attributes for customizable visual representation in circuit layouts. |
| [#421](https://github.com/tscircuit/props/pull/421) | 🐙 Minor | ⭐⭐ | Abse2001 | Adds spacing, style, label, and symbol configuration properties for group schematic boxes, along with documentation and tests for the new features. |

<details>
<summary>🐌 Tiny Contributions (2)</summary>

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#420](https://github.com/tscircuit/props/pull/420) | 🐌 Tiny | seveibar | Renames the ratsNestColor property to highlightColor in shared layout definitions and updates related component schemas, adjusting all affected tests accordingly. |
| [#416](https://github.com/tscircuit/props/pull/416) | 🐌 Tiny | Abse2001 | Adds holeOffsetX and holeOffsetY properties to the PillPlatedHoleProps interface for better positioning of plated holes. |

</details>

### [tscircuit/tscircuit](https://github.com/tscircuit/tscircuit)


<details>
<summary>🐌 Tiny Contributions (3)</summary>

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#804](https://github.com/tscircuit/tscircuit/pull/804) | 🐌 Tiny | seveibar | Removes Babel as a dependency and installs Sucrase for faster JavaScript transpilation. |
| [#801](https://github.com/tscircuit/tscircuit/pull/801) | 🐌 Tiny | seveibar | Copies static asset declarations into the distribution folder during the build process and restores the dependency sync script import pattern while adding a type stub for tscircuitcorepackage.json. |
| [#799](https://github.com/tscircuit/tscircuit/pull/799) | 🐌 Tiny | imrishabh18 | Updates the version of the tscircuitprops and circuit-json dependencies in package.json |

</details>

### [tscircuit/core](https://github.com/tscircuit/core)

| PR # | Impact | Rating | Contributor | Description |
|------|--------|--------|-------------|-------------|
| [#1375](https://github.com/tscircuit/core/pull/1375) | 🐳 Major | ⭐⭐⭐ | imrishabh18 | Adds support for custom schematic symbols using the symbol tag, allowing users to define and render custom schematic components in their designs. |
| [#1370](https://github.com/tscircuit/core/pull/1370) | 🐳 Major | ⭐⭐⭐ | Abse2001 | Normalizes hole offsets for plated holes in rectangular pads and removes legacy handling for PCB hole offsets. |
| [#1395](https://github.com/tscircuit/core/pull/1395) | 🐙 Minor | ⭐⭐ | imrishabh18 | Fixes the issue where the CAD component does not account for the accumulated group rotation, ensuring correct positioning and rotation in the layout. |
| [#1393](https://github.com/tscircuit/core/pull/1393) | 🐙 Minor | ⭐⭐ | imrishabh18 | Add schematic arc and schematic circle primitives and register them for JSX usage, update schematic bounds calculations to include arcs and circles when sizing symbols, and add dedicated schematic arc and schematic circle tests with snapshots. |
| [#1386](https://github.com/tscircuit/core/pull/1386) | 🐙 Minor | ⭐⭐ | imrishabh18 | Removes the custom_symbol from the schematic component, ensuring that only predefined symbols are used in the schematic representation. |
| [#1367](https://github.com/tscircuit/core/pull/1367) | 🐙 Minor | ⭐⭐ | ShiboSoftwareDev | Adds support for the includeInBoardPinout property within pinAttributes, allowing ports with this attribute to be marked as board pinouts in the circuit output. |
| [#1369](https://github.com/tscircuit/core/pull/1369) | 🐙 Minor | ⭐⭐ | ArnavK-09 | Adds support for loading and handling circuitjson footprints in the PCB rendering process. |

<details>
<summary>🐌 Tiny Contributions (2)</summary>

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#1392](https://github.com/tscircuit/core/pull/1392) | 🐌 Tiny | seveibar | Updates the circuit-json-to-simple-3d dependency to version 0.0.9 in package.json |
| [#1388](https://github.com/tscircuit/core/pull/1388) | 🐌 Tiny | 0hmX | Updates the version of the schematic-trace-solver dependency from 0.0.37 to 0.0.38 in package.json |

</details>

### [tscircuit/eval](https://github.com/tscircuit/eval)


<details>
<summary>🐌 Tiny Contributions (11)</summary>

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#1098](https://github.com/tscircuit/eval/pull/1098) | 🐌 Tiny | seveibar | Replaces Babel standalone with Sucrase for TypeScriptJSX module transformations, updating the toolchain and documentation accordingly. |
| [#1089](https://github.com/tscircuit/eval/pull/1089) | 🐌 Tiny | ArnavK-09 | Adds multiple checks to wait for various test completions before merging a pull request, ensuring all tests pass for different components. |
| [#1083](https://github.com/tscircuit/eval/pull/1083) | 🐌 Tiny | ArnavK-09 | Adds an auto-merge workflow for pull requests created by the tscircuitbot, enabling automatic merging of specific PRs after required checks are completed. |
| [#1102](https://github.com/tscircuit/eval/pull/1102) | 🐌 Tiny | tscircuitbot | Updates the tscircuitcore dependency to version 0.0.741 in the package.json file. |
| [#1100](https://github.com/tscircuit/eval/pull/1100) | 🐌 Tiny | tscircuitbot | Automated update of tscircuitcore to v0.0.740. |
| [#1099](https://github.com/tscircuit/eval/pull/1099) | 🐌 Tiny | tscircuitbot | Updates the tscircuitcore dependency from version 0.0.739 to 0.0.740 and updates circuit-json-to-simple-3d from version 0.0.8 to 0.0.9 in package.json |
| [#1096](https://github.com/tscircuit/eval/pull/1096) | 🐌 Tiny | tscircuitbot | Updates the tscircuitcore dependency from version 0.0.738 to 0.0.739 and updates the tscircuitschematic-trace-solver from version 0.0.37 to 0.0.38 in package.json. |
| [#1093](https://github.com/tscircuit/eval/pull/1093) | 🐌 Tiny | tscircuitbot | Automated update of tscircuitcore to v0.0.738. |
| [#1092](https://github.com/tscircuit/eval/pull/1092) | 🐌 Tiny | tscircuitbot | Automated update of tscircuitcore to v0.0.737. |
| [#1090](https://github.com/tscircuit/eval/pull/1090) | 🐌 Tiny | tscircuitbot | Updates the tscircuitcore dependency to version 0.0.736 in the package.json file. |
| [#1087](https://github.com/tscircuit/eval/pull/1087) | 🐌 Tiny | tscircuitbot | Updates the tscircuitcore package from version 0.0.733 to 0.0.735 and updates several other dependencies in package.json. |

</details>

### [tscircuit/file-server](https://github.com/tscircuit/file-server)


<details>
<summary>🐌 Tiny Contributions (1)</summary>

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#22](https://github.com/tscircuit/file-server/pull/22) | 🐌 Tiny | seveibar | Documents how to upload binary assets using the filesupsert endpoint, including example payload and response details. |

</details>

### [tscircuit/circuit-to-svg](https://github.com/tscircuit/circuit-to-svg)

| PR # | Impact | Rating | Contributor | Description |
|------|--------|--------|-------------|-------------|
| [#326](https://github.com/tscircuit/circuit-to-svg/pull/326) | 🐳 Major | ⭐⭐⭐⭐ | ShiboSoftwareDev | This PR introduces a new SVG generator, convertCircuitJsonToPinoutSvg, to create pinout diagrams from circuit-json. This feature is designed to produce clear, human-readable reference diagrams for physical board connections.  New Top-Level Converter: Adds convertCircuitJsonToPinoutSvg to the public API, which generates a complete SVG string.  Automatic Label Layout:  Ports marked with is_board_pinout: true are identified and labeled.  Labels are automatically grouped by the nearest board edge (top, bottom, left, right).  A layout algorithm organizes labels along each edge, using staggering and elbow connectors for leader lines to ensure clarity and avoid overlap.  Board Element Rendering: The diagram renders key physical features from the circuit-json, including:  pcb_board with complex outlines and cutouts.  pcb_smtpad (rect, circle, polygon, etc.).  pcb_plated_hole (circle, pill, etc.).  pcb_hole.  A representation of pcb_component footprints.  Comprehensive Testing: Unit tests with SVG snapshot validation have been added to cover various board shapes and pin configurations. |
| [#323](https://github.com/tscircuit/circuit-to-svg/pull/323) | 🐳 Major | ⭐⭐⭐ | imrishabh18 | Adds support for generating SVG snapshots of schematic elements including lines, rectangles, arcs, and circles. |
| [#327](https://github.com/tscircuit/circuit-to-svg/pull/327) | 🐳 Major | ⭐⭐⭐ | ShiboSoftwareDev | Refactors the pinout SVG generation logic by organizing utility functions and encapsulating complex label position calculations, leading to improved code readability and maintainability. |
| [#324](https://github.com/tscircuit/circuit-to-svg/pull/324) | 🐙 Minor | ⭐⭐ | imrishabh18 | Prevents the creation of a schematic box when the component is defined to use React symbols, ensuring correct rendering of schematic components without unnecessary boxes. |

### [tscircuit/tscircuit.com](https://github.com/tscircuit/tscircuit.com)

| PR # | Impact | Rating | Contributor | Description |
|------|--------|--------|-------------|-------------|
| [#1681](https://github.com/tscircuit/tscircuit.com/pull/1681) | 🐳 Major | ⭐⭐⭐ | imrishabh18 | Fixes the issue where the editor displays stale content after file deletion due to cache not being invalidated properly. |
| [#1687](https://github.com/tscircuit/tscircuit.com/pull/1687) | 🐳 Major | ⭐⭐⭐ | ArnavK-09 | Updates the OrganizationCard component to manage organization permissions and display personal organization status correctly. |
| [#1685](https://github.com/tscircuit/tscircuit.com/pull/1685) | 🐳 Major | ⭐⭐⭐ | ArnavK-09 | Refactors the PreviewBuildPage to replace the SuspenseRunFrame component with RunFrameStaticBuildViewer, streamlining the file fetching process and improving the user interface. |
| [#1683](https://github.com/tscircuit/tscircuit.com/pull/1683) | 🐳 Major | ⭐⭐⭐ | ArnavK-09 | Adds an organization settings page that allows users to manage organization details and members, including adding and removing members, and updating organization information. |
| [#1684](https://github.com/tscircuit/tscircuit.com/pull/1684) | 🐳 Major | ⭐⭐⭐ | ArnavK-09 | Adds functionality to update organization display names in the fake production API. |
| [#1682](https://github.com/tscircuit/tscircuit.com/pull/1682) | 🐙 Minor | ⭐⭐ | imrishabh18 | Fixes the issue where clicking on the empty space in the sidebar does not de-select the currently selected file. |
| [#1689](https://github.com/tscircuit/tscircuit.com/pull/1689) | 🐙 Minor | ⭐⭐ | ArnavK-09 | Adds github_handle as a common parameter in the organization listing API, updates the useListUserOrgs hook to accept an optional githubHandle parameter, modifies the user profile page to pass the username as the githubHandle, and simplifies the NotFoundPage component usage in the organization settings page. |
| [#1686](https://github.com/tscircuit/tscircuit.com/pull/1686) | 🐙 Minor | ⭐⭐ | ArnavK-09 | Fixes the issue of undefined requirements by ensuring boolean parameters are correctly set in the usePackageRelease hook. |
| [#1679](https://github.com/tscircuit/tscircuit.com/pull/1679) | 🐙 Minor | ⭐⭐ | nailoo | Fixes the package renaming process to ensure the updated package state is correctly reflected in the application after renaming. |

<details>
<summary>🐌 Tiny Contributions (4)</summary>

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#1688](https://github.com/tscircuit/tscircuit.com/pull/1688) | 🐌 Tiny | imrishabh18 | Updates the easyeda dependency version from 0.0.203 to 0.0.227 in package.json |
| [#1692](https://github.com/tscircuit/tscircuit.com/pull/1692) | 🐌 Tiny | Abse2001 | Changes the environment variable used for the Auto complete API key from VITE_OPENROUTER_API_KEY to OPENROUTER_API_KEY |
| [#1694](https://github.com/tscircuit/tscircuit.com/pull/1694) | 🐌 Tiny | ArnavK-09 | Changes the border style of the FileSidebar component from a solid border to a top-only border. |
| [#1680](https://github.com/tscircuit/tscircuit.com/pull/1680) | 🐌 Tiny | ArnavK-09 | Fixes inconsistency in package renaming functionality by ensuring the correct name is returned and displayed after a rename operation. |

</details>

### [tscircuit/keyboard-utils](https://github.com/tscircuit/keyboard-utils)

| PR # | Impact | Rating | Contributor | Description |
|------|--------|--------|-------------|-------------|
| [#4](https://github.com/tscircuit/keyboard-utils/pull/4) | 🐳 Major | ⭐⭐⭐ | imrishabh18 | Assigns logical row and column coordinates to keys based on their physical positions for the Ergodox keyboard layout. |

<details>
<summary>🐌 Tiny Contributions (1)</summary>

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#3](https://github.com/tscircuit/keyboard-utils/pull/3) | 🐌 Tiny | imrishabh18 | Add support for snapshot testing and create tests for the default60 and ergodox layout |

</details>

### [tscircuit/circuit-json-to-gerber](https://github.com/tscircuit/circuit-json-to-gerber)

| PR # | Impact | Rating | Contributor | Description |
|------|--------|--------|-------------|-------------|
| [#58](https://github.com/tscircuit/circuit-json-to-gerber/pull/58) | 🐳 Major | ⭐⭐⭐ | Abse2001 | Adds support for pill and circle holes with offsets, introduces support for rotated pill holes, and refactors the Gerber SVG snapshot logic. |

<details>
<summary>🐌 Tiny Contributions (1)</summary>

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#55](https://github.com/tscircuit/circuit-json-to-gerber/pull/55) | 🐌 Tiny | imrishabh18 | Honor ccw_rotation when drawing pill plated holes so the flash and line operations follow the rotated axis and extend the pill hole test to cover rotated examples and refresh the corresponding snapshots |

</details>

### [tscircuit/common](https://github.com/tscircuit/common)


<details>
<summary>🐌 Tiny Contributions (6)</summary>

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#20](https://github.com/tscircuit/common/pull/20) | 🐌 Tiny | Abse2001 | Adds a TODO comment to the test for the XiaoBoard to indicate that tests need to be added. |
| [#19](https://github.com/tscircuit/common/pull/19) | 🐌 Tiny | Abse2001 | Fixes TypeScript types not found on import by updating package.json to include type definitions and module exports. |
| [#18](https://github.com/tscircuit/common/pull/18) | 🐌 Tiny | Abse2001 | Adds support for the XiaoBoard and RaspberryPiHat by exporting their circuit definitions in the index file. |
| [#16](https://github.com/tscircuit/common/pull/16) | 🐌 Tiny | Abse2001 | Moves various circuit files to a new lib directory and updates import paths accordingly. |
| [#15](https://github.com/tscircuit/common/pull/15) | 🐌 Tiny | Abse2001 | Adds new Xiao Board component variants for RP2040 and Receiver, including their footprints and configurations. |
| [#13](https://github.com/tscircuit/common/pull/13) | 🐌 Tiny | Abse2001 | claim 2 closes 2 |

</details>

### [tscircuit/3d-viewer](https://github.com/tscircuit/3d-viewer)

| PR # | Impact | Rating | Contributor | Description |
|------|--------|--------|-------------|-------------|
| [#496](https://github.com/tscircuit/3d-viewer/pull/496) | 🐳 Major | ⭐⭐⭐ | MustafaMulla29 | Fixes the zoom functionality in the 3D view to zoom in at the cursor position instead of the center of the view. |

### [tscircuit/jlcsearch](https://github.com/tscircuit/jlcsearch)

| PR # | Impact | Rating | Contributor | Description |
|------|--------|--------|-------------|-------------|
| [#91](https://github.com/tscircuit/jlcsearch/pull/91) | 🐳 Major | ⭐⭐⭐ | ShiboSoftwareDev | Add support for indexing and filtering basic parts from JLCPCB, including a new boolean field in the data schema, a database index for performance, and UIAPI updates for filtering. |

### [tscircuit/assembly-viewer](https://github.com/tscircuit/assembly-viewer)

| PR # | Impact | Rating | Contributor | Description |
|------|--------|--------|-------------|-------------|
| [#8](https://github.com/tscircuit/assembly-viewer/pull/8) | 🐳 Major | ⭐⭐⭐ | ShiboSoftwareDev | Add PinoutViewer component that utilizes convertCircuitJsonToPinoutSvg function to render pinout diagrams and includes an example fixture for usage demonstration. |

### [tscircuit/create-snippet-url](https://github.com/tscircuit/create-snippet-url)

| PR # | Impact | Rating | Contributor | Description |
|------|--------|--------|-------------|-------------|
| [#5](https://github.com/tscircuit/create-snippet-url/pull/5) | 🐳 Major | ⭐⭐⭐ | ShiboSoftwareDev | Adds support for pinout diagrams in createSvgUrl, allowing users to embed pinout diagrams alongside existing support for pcb, schematic, and 3d. |

### [tscircuit/svg.tscircuit.com](https://github.com/tscircuit/svg.tscircuit.com)

| PR # | Impact | Rating | Contributor | Description |
|------|--------|--------|-------------|-------------|
| [#306](https://github.com/tscircuit/svg.tscircuit.com/pull/306) | 🐳 Major | ⭐⭐⭐ | ShiboSoftwareDev | Adds support for generating pinout SVGs, including updates to the endpoint, tests, and documentation. |

### [tscircuit/parts-engine](https://github.com/tscircuit/parts-engine)

| PR # | Impact | Rating | Contributor | Description |
|------|--------|--------|-------------|-------------|
| [#14](https://github.com/tscircuit/parts-engine/pull/14) | 🐙 Minor | ⭐⭐ | ShiboSoftwareDev | Prioritizes basic parts during automatic part selection in the jlcPartsEngine. |
| [#13](https://github.com/tscircuit/parts-engine/pull/13) | 🐙 Minor | ⭐⭐ | ShiboSoftwareDev | Adds support for sourcing JLC parts using KiCad footprint strings by implementing a helper function to parse KiCad formats into standard package names for JLCPCB API. |

### [tscircuit/contribution-tracker](https://github.com/tscircuit/contribution-tracker)

| PR # | Impact | Rating | Contributor | Description |
|------|--------|--------|-------------|-------------|
| [#222](https://github.com/tscircuit/contribution-tracker/pull/222) | 🐳 Major | ⭐⭐⭐ | ArnavK-09 | Adds a feature to notify users on Discord when they are crowned as the top contributor for the week. |

## Changes by Contributor

### [seveibar](https://github.com/seveibar)

| PRs # | Impact | Rating | Description |
|------|--------|--------|-------------|
| [#136](https://github.com/tscircuit/schematic-viewer/pull/136) | 🐳 Major | ⭐⭐⭐ | Add a MouseTracker context and useMouseEventsOverBoundingBox hook for registering bounding boxes, introduce a SchematicComponentMouseTarget overlay that highlights components and reports clicks, and update SchematicViewer to expose an onSchematicComponentClicked prop and render hover outlines when supplied. |
| [#1167](https://github.com/tscircuit/runframe/pull/1167) | 🐳 Major | ⭐⭐⭐ | Persist the selected main component in the URL hash for the CLI, allowing for better state management and user experience when navigating the application. |
| [#364](https://github.com/tscircuit/cli/pull/364) | 🐳 Major | ⭐⭐⭐ | Restores the CLI-focused implementation of getIndex and adds a dedicated getStaticIndexHtmlFile helper for static builds, switching the tscircuit build --site flow to the new static index generator and updating existing index token tests to cover the static index HTML output. |
| [#362](https://github.com/tscircuit/cli/pull/362) | 🐳 Major | ⭐⭐⭐ | Stops printing shipping information from tsci auth whoami while keeping accountsession basics and falls back to fetching account data only when the stored account id is missing. |
| [#287](https://github.com/tscircuit/circuit-json/pull/287) | 🐙 Minor | ⭐⭐ | Add optional rats_nest_color to pcb_trace definitions and docs, introduce pcb_net type with optional source_net_id and rats_nest_color and wire it into exports, document new type and add targeted parsing tests |
| [#417](https://github.com/tscircuit/props/pull/417) | 🐙 Minor | ⭐⭐ | Adds optional ratsNestColor attribute to traces, nets, and pin attributes for customizable visual representation in circuit layouts. |
| [#361](https://github.com/tscircuit/cli/pull/361) | 🐙 Minor | ⭐⭐ | Adds support for uploading binary assets by detecting known binary file extensions and encoding them in base64, along with API changes and regression tests for binary asset propagation. |

<details>
<summary>🐌 Tiny Contributions (10)</summary>

| PR # | Impact | Description |
|------|--------|-------------|
| [#804](https://github.com/tscircuit/tscircuit/pull/804) | 🐌 Tiny | Removes Babel as a dependency and installs Sucrase for faster JavaScript transpilation. |
| [#801](https://github.com/tscircuit/tscircuit/pull/801) | 🐌 Tiny | Copies static asset declarations into the distribution folder during the build process and restores the dependency sync script import pattern while adding a type stub for tscircuitcorepackage.json. |
| [#292](https://github.com/tscircuit/circuit-json/pull/292) | 🐌 Tiny | Renames the rats_nest_color field to highlight_color in PCB net and trace schemas, updating related documentation and tests accordingly. |
| [#420](https://github.com/tscircuit/props/pull/420) | 🐌 Tiny | Renames the ratsNestColor property to highlightColor in shared layout definitions and updates related component schemas, adjusting all affected tests accordingly. |
| [#1392](https://github.com/tscircuit/core/pull/1392) | 🐌 Tiny | Updates the circuit-json-to-simple-3d dependency to version 0.0.9 in package.json |
| [#1098](https://github.com/tscircuit/eval/pull/1098) | 🐌 Tiny | Replaces Babel standalone with Sucrase for TypeScriptJSX module transformations, updating the toolchain and documentation accordingly. |
| [#1194](https://github.com/tscircuit/runframe/pull/1194) | 🐌 Tiny | Renders the static build viewer when TSCIRCUIT_RUNFRAME_STATIC_FILE_LIST is provided in the standalone build and declares relevant window globals for static file list detection. |
| [#1188](https://github.com/tscircuit/runframe/pull/1188) | 🐌 Tiny | Updates the tscircuiteval package to the latest patch release version 0.0.332 in the package.json file. |
| [#363](https://github.com/tscircuit/cli/pull/363) | 🐌 Tiny | Updates the tscircuitrunframe dependency to version 0.0.970 and modifies the bun lockfile accordingly. |
| [#22](https://github.com/tscircuit/file-server/pull/22) | 🐌 Tiny | Documents how to upload binary assets using the filesupsert endpoint, including example payload and response details. |

</details>

### [imrishabh18](https://github.com/imrishabh18)

| PRs # | Impact | Rating | Description |
|------|--------|--------|-------------|
| [#1375](https://github.com/tscircuit/core/pull/1375) | 🐳 Major | ⭐⭐⭐ | Adds support for custom schematic symbols using the symbol tag, allowing users to define and render custom schematic components in their designs. |
| [#323](https://github.com/tscircuit/circuit-to-svg/pull/323) | 🐳 Major | ⭐⭐⭐ | Adds support for generating SVG snapshots of schematic elements including lines, rectangles, arcs, and circles. |
| [#1681](https://github.com/tscircuit/tscircuit.com/pull/1681) | 🐳 Major | ⭐⭐⭐ | Fixes the issue where the editor displays stale content after file deletion due to cache not being invalidated properly. |
| [#4](https://github.com/tscircuit/keyboard-utils/pull/4) | 🐳 Major | ⭐⭐⭐ | Assigns logical row and column coordinates to keys based on their physical positions for the Ergodox keyboard layout. |
| [#294](https://github.com/tscircuit/circuit-json/pull/294) | 🐙 Minor | ⭐⭐ | Moves the do_not_place flag from the source component schema to the PCB component schema, updating the documentation accordingly. |
| [#293](https://github.com/tscircuit/circuit-json/pull/293) | 🐙 Minor | ⭐⭐ | Adds a do_not_place boolean with a default of false to the source component base schema and aligns source simple pin header and potentiometer interfaces with SourceComponentBase. |
| [#291](https://github.com/tscircuit/circuit-json/pull/291) | 🐙 Minor | ⭐⭐ | Add an is_box_with_pins flag to schematic components with a default of true and update documentation and tests accordingly. |
| [#1395](https://github.com/tscircuit/core/pull/1395) | 🐙 Minor | ⭐⭐ | Fixes the issue where the CAD component does not account for the accumulated group rotation, ensuring correct positioning and rotation in the layout. |
| [#1393](https://github.com/tscircuit/core/pull/1393) | 🐙 Minor | ⭐⭐ | Add schematic arc and schematic circle primitives and register them for JSX usage, update schematic bounds calculations to include arcs and circles when sizing symbols, and add dedicated schematic arc and schematic circle tests with snapshots. |
| [#1386](https://github.com/tscircuit/core/pull/1386) | 🐙 Minor | ⭐⭐ | Removes the custom_symbol from the schematic component, ensuring that only predefined symbols are used in the schematic representation. |
| [#324](https://github.com/tscircuit/circuit-to-svg/pull/324) | 🐙 Minor | ⭐⭐ | Prevents the creation of a schematic box when the component is defined to use React symbols, ensuring correct rendering of schematic components without unnecessary boxes. |
| [#1682](https://github.com/tscircuit/tscircuit.com/pull/1682) | 🐙 Minor | ⭐⭐ | Fixes the issue where clicking on the empty space in the sidebar does not de-select the currently selected file. |

<details>
<summary>🐌 Tiny Contributions (5)</summary>

| PR # | Impact | Description |
|------|--------|-------------|
| [#799](https://github.com/tscircuit/tscircuit/pull/799) | 🐌 Tiny | Updates the version of the tscircuitprops and circuit-json dependencies in package.json |
| [#55](https://github.com/tscircuit/circuit-json-to-gerber/pull/55) | 🐌 Tiny | Honor ccw_rotation when drawing pill plated holes so the flash and line operations follow the rotated axis and extend the pill hole test to cover rotated examples and refresh the corresponding snapshots |
| [#1688](https://github.com/tscircuit/tscircuit.com/pull/1688) | 🐌 Tiny | Updates the easyeda dependency version from 0.0.203 to 0.0.227 in package.json |
| [#1185](https://github.com/tscircuit/runframe/pull/1185) | 🐌 Tiny | Prevents the enhanced file selector dropdown from listing files whose names start with test.tsx by centralizing file filtering logic to ignore these generated test files. |
| [#3](https://github.com/tscircuit/keyboard-utils/pull/3) | 🐌 Tiny | Add support for snapshot testing and create tests for the default60 and ergodox layout |

</details>

### [Abse2001](https://github.com/Abse2001)

| PRs # | Impact | Rating | Description |
|------|--------|--------|-------------|
| [#1370](https://github.com/tscircuit/core/pull/1370) | 🐳 Major | ⭐⭐⭐ | Normalizes hole offsets for plated holes in rectangular pads and removes legacy handling for PCB hole offsets. |
| [#58](https://github.com/tscircuit/circuit-json-to-gerber/pull/58) | 🐳 Major | ⭐⭐⭐ | Adds support for pill and circle holes with offsets, introduces support for rotated pill holes, and refactors the Gerber SVG snapshot logic. |
| [#421](https://github.com/tscircuit/props/pull/421) | 🐙 Minor | ⭐⭐ | Adds spacing, style, label, and symbol configuration properties for group schematic boxes, along with documentation and tests for the new features. |

<details>
<summary>🐌 Tiny Contributions (8)</summary>

| PR # | Impact | Description |
|------|--------|-------------|
| [#416](https://github.com/tscircuit/props/pull/416) | 🐌 Tiny | Adds holeOffsetX and holeOffsetY properties to the PillPlatedHoleProps interface for better positioning of plated holes. |
| [#1692](https://github.com/tscircuit/tscircuit.com/pull/1692) | 🐌 Tiny | Changes the environment variable used for the Auto complete API key from VITE_OPENROUTER_API_KEY to OPENROUTER_API_KEY |
| [#20](https://github.com/tscircuit/common/pull/20) | 🐌 Tiny | Adds a TODO comment to the test for the XiaoBoard to indicate that tests need to be added. |
| [#19](https://github.com/tscircuit/common/pull/19) | 🐌 Tiny | Fixes TypeScript types not found on import by updating package.json to include type definitions and module exports. |
| [#18](https://github.com/tscircuit/common/pull/18) | 🐌 Tiny | Adds support for the XiaoBoard and RaspberryPiHat by exporting their circuit definitions in the index file. |
| [#16](https://github.com/tscircuit/common/pull/16) | 🐌 Tiny | Moves various circuit files to a new lib directory and updates import paths accordingly. |
| [#15](https://github.com/tscircuit/common/pull/15) | 🐌 Tiny | Adds new Xiao Board component variants for RP2040 and Receiver, including their footprints and configurations. |
| [#13](https://github.com/tscircuit/common/pull/13) | 🐌 Tiny | claim 2 closes 2 |

</details>

### [MustafaMulla29](https://github.com/MustafaMulla29)

| PRs # | Impact | Rating | Description |
|------|--------|--------|-------------|
| [#496](https://github.com/tscircuit/3d-viewer/pull/496) | 🐳 Major | ⭐⭐⭐ | Fixes the zoom functionality in the 3D view to zoom in at the cursor position instead of the center of the view. |

### [0hmX](https://github.com/0hmX)


<details>
<summary>🐌 Tiny Contributions (1)</summary>

| PR # | Impact | Description |
|------|--------|-------------|
| [#1388](https://github.com/tscircuit/core/pull/1388) | 🐌 Tiny | Updates the version of the schematic-trace-solver dependency from 0.0.37 to 0.0.38 in package.json |

</details>

### [ShiboSoftwareDev](https://github.com/ShiboSoftwareDev)

| PRs # | Impact | Rating | Description |
|------|--------|--------|-------------|
| [#326](https://github.com/tscircuit/circuit-to-svg/pull/326) | 🐳 Major | ⭐⭐⭐⭐ | This PR introduces a new SVG generator, convertCircuitJsonToPinoutSvg, to create pinout diagrams from circuit-json. This feature is designed to produce clear, human-readable reference diagrams for physical board connections.  New Top-Level Converter: Adds convertCircuitJsonToPinoutSvg to the public API, which generates a complete SVG string.  Automatic Label Layout:  Ports marked with is_board_pinout: true are identified and labeled.  Labels are automatically grouped by the nearest board edge (top, bottom, left, right).  A layout algorithm organizes labels along each edge, using staggering and elbow connectors for leader lines to ensure clarity and avoid overlap.  Board Element Rendering: The diagram renders key physical features from the circuit-json, including:  pcb_board with complex outlines and cutouts.  pcb_smtpad (rect, circle, polygon, etc.).  pcb_plated_hole (circle, pill, etc.).  pcb_hole.  A representation of pcb_component footprints.  Comprehensive Testing: Unit tests with SVG snapshot validation have been added to cover various board shapes and pin configurations. |
| [#327](https://github.com/tscircuit/circuit-to-svg/pull/327) | 🐳 Major | ⭐⭐⭐ | Refactors the pinout SVG generation logic by organizing utility functions and encapsulating complex label position calculations, leading to improved code readability and maintainability. |
| [#91](https://github.com/tscircuit/jlcsearch/pull/91) | 🐳 Major | ⭐⭐⭐ | Add support for indexing and filtering basic parts from JLCPCB, including a new boolean field in the data schema, a database index for performance, and UIAPI updates for filtering. |
| [#1178](https://github.com/tscircuit/runframe/pull/1178) | 🐳 Major | ⭐⭐⭐ | Adds a new Pinout tab to the runframe which displays pins that have been explicitly marked for inclusion in the boards pinout. |
| [#356](https://github.com/tscircuit/cli/pull/356) | 🐳 Major | ⭐⭐⭐ | Add commands to run circuit simulations and export results in SPICE and CSV formats from the CLI. |
| [#8](https://github.com/tscircuit/assembly-viewer/pull/8) | 🐳 Major | ⭐⭐⭐ | Add PinoutViewer component that utilizes convertCircuitJsonToPinoutSvg function to render pinout diagrams and includes an example fixture for usage demonstration. |
| [#5](https://github.com/tscircuit/create-snippet-url/pull/5) | 🐳 Major | ⭐⭐⭐ | Adds support for pinout diagrams in createSvgUrl, allowing users to embed pinout diagrams alongside existing support for pcb, schematic, and 3d. |
| [#306](https://github.com/tscircuit/svg.tscircuit.com/pull/306) | 🐳 Major | ⭐⭐⭐ | Adds support for generating pinout SVGs, including updates to the endpoint, tests, and documentation. |
| [#1367](https://github.com/tscircuit/core/pull/1367) | 🐙 Minor | ⭐⭐ | Adds support for the includeInBoardPinout property within pinAttributes, allowing ports with this attribute to be marked as board pinouts in the circuit output. |
| [#14](https://github.com/tscircuit/parts-engine/pull/14) | 🐙 Minor | ⭐⭐ | Prioritizes basic parts during automatic part selection in the jlcPartsEngine. |
| [#13](https://github.com/tscircuit/parts-engine/pull/13) | 🐙 Minor | ⭐⭐ | Adds support for sourcing JLC parts using KiCad footprint strings by implementing a helper function to parse KiCad formats into standard package names for JLCPCB API. |

### [ArnavK-09](https://github.com/ArnavK-09)

| PRs # | Impact | Rating | Description |
|------|--------|--------|-------------|
| [#222](https://github.com/tscircuit/contribution-tracker/pull/222) | 🐳 Major | ⭐⭐⭐ | Adds a feature to notify users on Discord when they are crowned as the top contributor for the week. |
| [#1687](https://github.com/tscircuit/tscircuit.com/pull/1687) | 🐳 Major | ⭐⭐⭐ | Updates the OrganizationCard component to manage organization permissions and display personal organization status correctly. |
| [#1685](https://github.com/tscircuit/tscircuit.com/pull/1685) | 🐳 Major | ⭐⭐⭐ | Refactors the PreviewBuildPage to replace the SuspenseRunFrame component with RunFrameStaticBuildViewer, streamlining the file fetching process and improving the user interface. |
| [#1683](https://github.com/tscircuit/tscircuit.com/pull/1683) | 🐳 Major | ⭐⭐⭐ | Adds an organization settings page that allows users to manage organization details and members, including adding and removing members, and updating organization information. |
| [#1684](https://github.com/tscircuit/tscircuit.com/pull/1684) | 🐳 Major | ⭐⭐⭐ | Adds functionality to update organization display names in the fake production API. |
| [#1182](https://github.com/tscircuit/runframe/pull/1182) | 🐳 Major | ⭐⭐⭐ | Adds the RunFrameStaticBuildViewer component for displaying circuit JSON files fetched on-demand without code execution. |
| [#360](https://github.com/tscircuit/cli/pull/360) | 🐳 Major | ⭐⭐⭐ | Fixes the interactive command handling for cloning directories in the CLI, allowing users to choose actions when a directory already exists. |
| [#1369](https://github.com/tscircuit/core/pull/1369) | 🐙 Minor | ⭐⭐ | Adds support for loading and handling circuitjson footprints in the PCB rendering process. |
| [#1689](https://github.com/tscircuit/tscircuit.com/pull/1689) | 🐙 Minor | ⭐⭐ | Adds github_handle as a common parameter in the organization listing API, updates the useListUserOrgs hook to accept an optional githubHandle parameter, modifies the user profile page to pass the username as the githubHandle, and simplifies the NotFoundPage component usage in the organization settings page. |
| [#1686](https://github.com/tscircuit/tscircuit.com/pull/1686) | 🐙 Minor | ⭐⭐ | Fixes the issue of undefined requirements by ensuring boolean parameters are correctly set in the usePackageRelease hook. |

<details>
<summary>🐌 Tiny Contributions (4)</summary>

| PR # | Impact | Description |
|------|--------|-------------|
| [#1694](https://github.com/tscircuit/tscircuit.com/pull/1694) | 🐌 Tiny | Changes the border style of the FileSidebar component from a solid border to a top-only border. |
| [#1680](https://github.com/tscircuit/tscircuit.com/pull/1680) | 🐌 Tiny | Fixes inconsistency in package renaming functionality by ensuring the correct name is returned and displayed after a rename operation. |
| [#1089](https://github.com/tscircuit/eval/pull/1089) | 🐌 Tiny | Adds multiple checks to wait for various test completions before merging a pull request, ensuring all tests pass for different components. |
| [#1083](https://github.com/tscircuit/eval/pull/1083) | 🐌 Tiny | Adds an auto-merge workflow for pull requests created by the tscircuitbot, enabling automatic merging of specific PRs after required checks are completed. |

</details>

### [nailoo](https://github.com/nailoo)

| PRs # | Impact | Rating | Description |
|------|--------|--------|-------------|
| [#1679](https://github.com/tscircuit/tscircuit.com/pull/1679) | 🐙 Minor | ⭐⭐ | Fixes the package renaming process to ensure the updated package state is correctly reflected in the application after renaming. |

### [tscircuitbot](https://github.com/tscircuitbot)


<details>
<summary>🐌 Tiny Contributions (8)</summary>

| PR # | Impact | Description |
|------|--------|-------------|
| [#1102](https://github.com/tscircuit/eval/pull/1102) | 🐌 Tiny | Updates the tscircuitcore dependency to version 0.0.741 in the package.json file. |
| [#1100](https://github.com/tscircuit/eval/pull/1100) | 🐌 Tiny | Automated update of tscircuitcore to v0.0.740. |
| [#1099](https://github.com/tscircuit/eval/pull/1099) | 🐌 Tiny | Updates the tscircuitcore dependency from version 0.0.739 to 0.0.740 and updates circuit-json-to-simple-3d from version 0.0.8 to 0.0.9 in package.json |
| [#1096](https://github.com/tscircuit/eval/pull/1096) | 🐌 Tiny | Updates the tscircuitcore dependency from version 0.0.738 to 0.0.739 and updates the tscircuitschematic-trace-solver from version 0.0.37 to 0.0.38 in package.json. |
| [#1093](https://github.com/tscircuit/eval/pull/1093) | 🐌 Tiny | Automated update of tscircuitcore to v0.0.738. |
| [#1092](https://github.com/tscircuit/eval/pull/1092) | 🐌 Tiny | Automated update of tscircuitcore to v0.0.737. |
| [#1090](https://github.com/tscircuit/eval/pull/1090) | 🐌 Tiny | Updates the tscircuitcore dependency to version 0.0.736 in the package.json file. |
| [#1087](https://github.com/tscircuit/eval/pull/1087) | 🐌 Tiny | Updates the tscircuitcore package from version 0.0.733 to 0.0.735 and updates several other dependencies in package.json. |

</details>

### [Ayushjhawar8](https://github.com/Ayushjhawar8)


<details>
<summary>🐌 Tiny Contributions (2)</summary>

| PR # | Impact | Description |
|------|--------|-------------|
| [#1184](https://github.com/tscircuit/runframe/pull/1184) | 🐌 Tiny | https:github.comuser-attachmentsassets60e9c48b-4039-4162-85ea-a27d561ff8f4 |
| [#1169](https://github.com/tscircuit/runframe/pull/1169) | 🐌 Tiny | When you type, it prioritizes files in your current directory at the top Files from other directories show below with their full paths Search clears automatically when you close the dropdown No more clutter from section titles since the breadcrumbs provide sufficient context |

</details>

### [devroy10](https://github.com/devroy10)


<details>
<summary>🐌 Tiny Contributions (1)</summary>

| PR # | Impact | Description |
|------|--------|-------------|
| [#1170](https://github.com/tscircuit/runframe/pull/1170) | 🐌 Tiny | fixes 1168  Summary Centers the file selector without absolute positioning and constrains its width with truncation so it no longer overlaps or hides the PCBSchematic3D tabs on narrow viewports.  Changes libcomponentsRunFrameWithApiRunFrameWithApi.tsx Replace absolute-centered wrapper with flex-centered wrapper so the selector participates in layout. libcomponentsRunFrameWithApifile-selector-combobox.tsx Add responsive max-width, ellipsis truncation, and keep natural width otherwise.  Rationale Absolute positioning caused the file selector to float above and obscure the tabs at small widths. Letting it flow in flex with truncation keeps all controls accessible.  Risks Extremely narrow widths may still feel tight. Tabs now remain tappable, but we may want a future responsive collapse as CircuitJsonPreview cuts off to the right on smaller screens. |

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
| [cli](https://github.com/tscircuit/cli/blob/main/.github/CODEOWNERS) | [seveibar](https://github.com/seveibar), [imrishabh18](https://github.com/imrishabh18), [ArnavK-09](https://github.com/ArnavK-09)
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
|  | [cli](https://github.com/tscircuit/cli/blob/main/.github/CODEOWNERS) |
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
|  | [cli](https://github.com/tscircuit/cli/blob/main/.github/CODEOWNERS) |
| [ArnavK-09](https://github.com/ArnavK-09) | [cli](https://github.com/tscircuit/cli/blob/main/.github/CODEOWNERS) |
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
