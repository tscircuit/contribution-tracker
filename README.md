# contribution-tracker

Generates weekly contribution overviews for tscircuit contributors. Check out all
the [contribution overviews here](./contribution-overviews/)
You can find AI-generated monthly changelogs in the [changelogs directory](./changelogs/).

* All PRs in the tscircuit org are scanned/summarized via Claude Haiku
* Claude classifies each Diff/PR as a Major, Minor or Tiny contribution
* All the PRs, summaries, and classifications are organized into charts and tables

The current week is shown below. There are 3 major sections:

* [Contributor Overview](#contributor-overview)
* [PRs by Repository](#prs-by-repository)
* [PRs by Contributor](#changes-by-contributor)

## Current Week

<!-- START_CURRENT_WEEK -->

# Contribution Overview 2025-06-18

## PRs by Repository

```mermaid
pie
    "tscircuit/core" : 30
    "tscircuit/bpc-graph" : 1
    "tscircuit/schematic-viewer" : 2
    "tscircuit/circuit-json" : 1
    "tscircuit/props" : 9
    "tscircuit/footprinter" : 2
    "tscircuit/contribution-tracker" : 2
    "tscircuit/circuit-to-svg" : 6
    "tscircuit/tscircuit.com" : 39
    "tscircuit/eval" : 7
    "tscircuit/runframe" : 8
    "tscircuit/cli" : 13
    "tscircuit/docs" : 16
    "tscircuit/parts-engine" : 3
    "tscircuit/schematic-corpus" : 8
    "tscircuit/deps.tscircuit.com" : 17
    "tscircuit/api" : 3
    "tscircuit/calculate-cell-boundaries" : 1
    "tscircuit/sparkfun-boards" : 7
    "tscircuit/easyeda-converter" : 2
    "tscircuit/schematic-symbols" : 2
    "tscircuit/tscircuit" : 2
    "tscircuit/3d-viewer" : 3
    "tscircuit/tscircuit-autorouter" : 3
```

## Contributor Overview

| Contributor | 🐳 Major | 🐙 Minor | 🐌 Tiny | ⭐ | Issues Created | Discussion Contributions |
|-------------|---------|---------|---------|-----|----------------|--------------------------|
| [seveibar](#seveibar) | 2 | 53 | 16 | 👑👑👑 | 1 | 0🔹 0🔶 0💎 |
| [imrishabh18](#imrishabh18) | 1 | 21 | 9 | 👑 | 2 | 0🔹 0🔶 0💎 |
| [ArnavK-09](#ArnavK-09) | 2 | 16 | 1 | ⭐⭐⭐ | 14 | 0🔹 0🔶 0💎 |
| [ShiboSoftwareDev](#ShiboSoftwareDev) | 0 | 11 | 5 | ⭐⭐⭐ | 17 | 0🔹 0🔶 0💎 |
| [techmannih](#techmannih) | 2 | 8 | 2 | ⭐⭐⭐ | 2 | 0🔹 0🔶 0💎 |
| [Abse2001](#Abse2001) | 1 | 8 | 5 | ⭐⭐ | 1 | 0🔹 0🔶 0💎 |
| [Anshgrover23](#Anshgrover23) | 0 | 7 | 2 | ⭐⭐ | 9 | 0🔹 0🔶 0💎 |
| [MustafaMulla29](#MustafaMulla29) | 1 | 3 | 3 | ⭐⭐ | 2 | 0🔹 0🔶 0💎 |
| [andrii-balitskyi](#andrii-balitskyi) | 0 | 4 | 0 | ⭐ | 0 | 0🔹 0🔶 0💎 |
| [tscircuitbot](#tscircuitbot) | 0 | 0 | 4 | ⭐ | 0 | 0🔹 0🔶 0💎 |

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

| Contributor | Reviews Received | Approvals Received | Rejections Received | Approvals | Rejections | PRs Opened | PRs Merged | Issues Created | Bountied Issues | Bountied Issue $ |
|---|---|---|---|---|---|---|---|---|---|---|
| [seveibar](#seveibar) | 25 | 1 | 0 | 81 | 7 | 94 | 71 | 1 | 0 | 0 |
| [Abse2001](#Abse2001) | 15 | 13 | 0 | 0 | 0 | 16 | 14 | 1 | 0 | 0 |
| [imrishabh18](#imrishabh18) | 16 | 14 | 0 | 12 | 2 | 34 | 32 | 2 | 0 | 0 |
| [techmannih](#techmannih) | 45 | 16 | 6 | 2 | 1 | 17 | 12 | 2 | 0 | 0 |
| [ShiboSoftwareDev](#ShiboSoftwareDev) | 25 | 17 | 1 | 9 | 0 | 22 | 17 | 17 | 0 | 0 |
| [graphite-app[bot]](#graphite-app[bot]) | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| [Anshgrover23](#Anshgrover23) | 22 | 16 | 2 | 2 | 1 | 14 | 9 | 9 | 0 | 0 |
| [cursor[bot]](#cursor[bot]) | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| [MustafaMulla29](#MustafaMulla29) | 12 | 9 | 1 | 1 | 0 | 8 | 7 | 2 | 0 | 0 |
| [andrii-balitskyi](#andrii-balitskyi) | 5 | 3 | 0 | 0 | 0 | 5 | 4 | 0 | 0 | 0 |
| [ArnavK-09](#ArnavK-09) | 28 | 21 | 1 | 3 | 0 | 19 | 19 | 14 | 0 | 0 |
| [tscircuitbot](#tscircuitbot) | 0 | 0 | 0 | 0 | 0 | 55 | 4 | 0 | 0 | 0 |

## Changes by Repository

### [tscircuit/core](https://github.com/tscircuit/core)

| PR # | Impact | Contributor | Description | Milestone Aligned |
|------|--------|-------------|-------------|-------------------|
| [#960](https://github.com/tscircuit/core/pull/960) | 🐳 Major | seveibar | Enhancements to jumper and chip selectors improve functionality for keyboard building. | ✅ |
| [#956](https://github.com/tscircuit/core/pull/956) | 🐳 Major | Abse2001 | Enhances the selector functionality by adding support for J references, improving usability for keyboard building. | ✅ |
| [#967](https://github.com/tscircuit/core/pull/967) | 🐳 Major | techmannih | Enhancement of selector functionality by adding support for fuse components, improving the flexibility of the library. | ✅ |
| [#962](https://github.com/tscircuit/core/pull/962) | 🐳 Major | imrishabh18 | Enhancement of route JSON generation by incorporating subcircuit padding, improving layout accuracy. | ✅ |
| [#959](https://github.com/tscircuit/core/pull/959) | 🐙 Minor | seveibar | Enhancements to the `sel` function allow for dynamic reference designator usage, improving flexibility in pin selection. | ❌ |
| [#973](https://github.com/tscircuit/core/pull/973) | 🐙 Minor | seveibar | Enhances the RootCircuit class by incorporating platform configuration for pcbDisabled, improving flexibility in circuit initialization. | ❌ |
| [#972](https://github.com/tscircuit/core/pull/972) | 🐙 Minor | seveibar | Enhancements to schematic width handling improve user experience and functionality. | ❌ |
| [#961](https://github.com/tscircuit/core/pull/961) | 🐙 Minor | seveibar | Enhancements to error messaging for unresolved port selectors improve debugging and user experience. | ❌ |
| [#957](https://github.com/tscircuit/core/pull/957) | 🐙 Minor | seveibar | Enhancing the netlabel functionality to support multiple connections significantly improves flexibility in circuit design. | ❌ |
| [#951](https://github.com/tscircuit/core/pull/951) | 🐙 Minor | seveibar | Enhancements to netlabel functionality improve circuit design capabilities by allowing dynamic net creation and trace generation based on defined connections. | ❌ |
| [#950](https://github.com/tscircuit/core/pull/950) | 🐙 Minor | seveibar | Enhancements to trace connections with netlabels improve schematic accuracy and usability. | ❌ |
| [#948](https://github.com/tscircuit/core/pull/948) | 🐙 Minor | seveibar | The removal of the deprecated NetAlias component and its replacement with the new NetLabel component enhances code clarity and maintainability. | ❌ |
| [#975](https://github.com/tscircuit/core/pull/975) | 🐙 Minor | techmannih | Enhancing the switch selector typing to include additional pins improves the flexibility and usability of the component. | ❌ |
| [#971](https://github.com/tscircuit/core/pull/971) | 🐙 Minor | techmannih | Enhancement of the crystal component to display load capacitance alongside frequency, improving user information. | ❌ |
| [#963](https://github.com/tscircuit/core/pull/963) | 🐙 Minor | ShiboSoftwareDev | Enhancements to the SolderJumper component for better pin labeling and handling of bridged pins. | ❌ |
| [#984](https://github.com/tscircuit/core/pull/984) | 🐙 Minor | Anshgrover23 | Enhancement of type definitions to include 'N_CS', improving code clarity and functionality. | ❌ |
| [#980](https://github.com/tscircuit/core/pull/980) | 🐙 Minor | Anshgrover23 | Enhancing the type definitions by adding 'INT' improves the clarity and usability of the codebase for developers working with common net and pin names. | ❌ |
| [#954](https://github.com/tscircuit/core/pull/954) | 🐙 Minor | Anshgrover23 | Enhances the SchematicText component by ensuring default values for position properties, improving robustness. | ❌ |
| [#983](https://github.com/tscircuit/core/pull/983) | 🐙 Minor | imrishabh18 | Enhancing the solderjumper component by establishing a default pin count improves usability and consistency in circuit design. | ❌ |
| [#969](https://github.com/tscircuit/core/pull/969) | 🐙 Minor | imrishabh18 | Enhancement of the polarized capacitor symbol improves schematic accuracy and usability. | ❌ |
| [#949](https://github.com/tscircuit/core/pull/949) | 🐙 Minor | imrishabh18 | Enhancements to component naming and rendering improve usability and error handling in the circuit design process. | ❌ |
| [#965](https://github.com/tscircuit/core/pull/965) | 🐙 Minor | imrishabh18 | The implementation ensures that the subcircuit_id is only set for subcircuit groups, preventing incorrect assignments. | ❌ |
| [#964](https://github.com/tscircuit/core/pull/964) | 🐙 Minor | imrishabh18 | Introducing a new render phase enhances the rendering capabilities for subcircuits, improving the overall functionality of the library. | ❌ |
| [#947](https://github.com/tscircuit/core/pull/947) | 🐙 Minor | imrishabh18 | Enhancements to PCB layout capabilities with added padding support for subcircuits improve design flexibility. | ❌ |
| [#938](https://github.com/tscircuit/core/pull/938) | 🐙 Minor | imrishabh18 | Enhancements to net label lookup improve circuit functionality and testing reliability. | ❌ |
| [#982](https://github.com/tscircuit/core/pull/982) | 🐙 Minor | MustafaMulla29 | Enhancement of type definitions to include 'N_INT', improving type safety and clarity in the codebase. | ❌ |
| [#978](https://github.com/tscircuit/core/pull/978) | 🐙 Minor | MustafaMulla29 | Enhances the transistor functionality by adding access to MOSFET pin types, improving circuit design capabilities. | ❌ |
| [#955](https://github.com/tscircuit/core/pull/955) | 🐌 Tiny | seveibar | The addition of a configuration to disable the lockfile in the project enhances flexibility in dependency management. | ❌ |
| [#946](https://github.com/tscircuit/core/pull/946) | 🐌 Tiny | seveibar | Enhancing testing capabilities for netalias connections improves code reliability and maintainability. | ❌ |
| [#953](https://github.com/tscircuit/core/pull/953) | 🐌 Tiny | Anshgrover23 | Updating the dependency version for props enhances compatibility and ensures the latest features and fixes are utilized. | ❌ |

### [tscircuit/bpc-graph](https://github.com/tscircuit/bpc-graph)

| PR # | Impact | Contributor | Description | Milestone Aligned |
|------|--------|-------------|-------------|-------------------|
| [#2](https://github.com/tscircuit/bpc-graph/pull/2) | 🐳 Major | seveibar | Enhances graph transformation capabilities by implementing A* search with heuristic matching for operation costs. | ❌ |

### [tscircuit/schematic-viewer](https://github.com/tscircuit/schematic-viewer)

| PR # | Impact | Contributor | Description | Milestone Aligned |
|------|--------|-------------|-------------|-------------------|
| [#97](https://github.com/tscircuit/schematic-viewer/pull/97) | 🐙 Minor | seveibar | Enhances user interaction by allowing components to snap to a grid during editing, improving precision in layout adjustments. | ❌ |
| [#98](https://github.com/tscircuit/schematic-viewer/pull/98) | 🐌 Tiny | Abse2001 | Updating the dependency version for circuit-to-svg enhances compatibility and potentially introduces new features or fixes. | ❌ |

### [tscircuit/circuit-json](https://github.com/tscircuit/circuit-json)

| PR # | Impact | Contributor | Description | Milestone Aligned |
|------|--------|-------------|-------------|-------------------|
| [#232](https://github.com/tscircuit/circuit-json/pull/232) | 🐙 Minor | seveibar | The removal of the default value for `is_movable` enhances the flexibility of schematic net labels by allowing explicit control over their repositioning behavior. | ❌ |

### [tscircuit/props](https://github.com/tscircuit/props)

| PR # | Impact | Contributor | Description | Milestone Aligned |
|------|--------|-------------|-------------|-------------------|
| [#301](https://github.com/tscircuit/props/pull/301) | 🐙 Minor | seveibar | Enhancement of the group component by introducing a new schematic title property, improving usability in schematic views. | ❌ |
| [#298](https://github.com/tscircuit/props/pull/298) | 🐙 Minor | seveibar | Enhancing the plated hole component with a new property for connections significantly improves its functionality and usability. | ❌ |
| [#297](https://github.com/tscircuit/props/pull/297) | 🐙 Minor | seveibar | Enhancements to naming and connectivity for vias and smtpads improve usability and functionality in PCB design. | ❌ |
| [#296](https://github.com/tscircuit/props/pull/296) | 🐙 Minor | seveibar | Enhancements to component properties for better schematic representation and orientation handling. | ❌ |
| [#295](https://github.com/tscircuit/props/pull/295) | 🐙 Minor | seveibar | Enhancing the jumper component with a new connections property significantly improves its functionality and flexibility. | ❌ |
| [#291](https://github.com/tscircuit/props/pull/291) | 🐙 Minor | seveibar | Enhancing the `connectsTo` property to accept both string and array types improves flexibility in component connections. | ❌ |
| [#293](https://github.com/tscircuit/props/pull/293) | 🐙 Minor | Anshgrover23 | Enhancing flexibility in component properties by making schX and schY optional improves usability and testing coverage. | ❌ |
| [#292](https://github.com/tscircuit/props/pull/292) | 🐙 Minor | Anshgrover23 | Enhancements to the PinHeaderProps interface improve the flexibility and functionality of the pin header component. | ❌ |
| [#294](https://github.com/tscircuit/props/pull/294) | 🐌 Tiny | seveibar | Clarification of documentation enhances understanding of the `internallyConnectedPins` property. | ❌ |

### [tscircuit/footprinter](https://github.com/tscircuit/footprinter)

| PR # | Impact | Contributor | Description | Milestone Aligned |
|------|--------|-------------|-------------|-------------------|
| [#302](https://github.com/tscircuit/footprinter/pull/302) | 🐙 Minor | seveibar | Introducing circular pads enhances the flexibility and design options for BGA footprints, catering to diverse PCB design needs. | ❌ |
| [#295](https://github.com/tscircuit/footprinter/pull/295) | 🐙 Minor | techmannih | Corrects the pad dimension logic to ensure accurate component footprint calculations, enhancing the reliability of the passive function. | ❌ |

### [tscircuit/contribution-tracker](https://github.com/tscircuit/contribution-tracker)

| PR # | Impact | Contributor | Description | Milestone Aligned |
|------|--------|-------------|-------------|-------------------|
| [#178](https://github.com/tscircuit/contribution-tracker/pull/178) | 🐙 Minor | seveibar | Enhancements to the changelog generation process and type error fixes improve overall functionality and maintainability. | ❌ |
| [#177](https://github.com/tscircuit/contribution-tracker/pull/177) | 🐙 Minor | seveibar | Automating the generation of monthly changelogs enhances documentation and improves project transparency. | ❌ |

### [tscircuit/circuit-to-svg](https://github.com/tscircuit/circuit-to-svg)

| PR # | Impact | Contributor | Description | Milestone Aligned |
|------|--------|-------------|-------------|-------------------|
| [#267](https://github.com/tscircuit/circuit-to-svg/pull/267) | 🐙 Minor | seveibar | Enhancements to pin label rendering improve visual clarity for net labels prefixed with 'N_'. | ❌ |
| [#266](https://github.com/tscircuit/circuit-to-svg/pull/266) | 🐙 Minor | seveibar | Enhancements to SVG rendering by eliminating unnecessary visual elements for connected pins, improving clarity and performance. | ❌ |
| [#264](https://github.com/tscircuit/circuit-to-svg/pull/264) | 🐙 Minor | seveibar | Enhancements to trace rendering ensure proper visual hierarchy in PCB designs, improving usability and accuracy. | ❌ |
| [#262](https://github.com/tscircuit/circuit-to-svg/pull/262) | 🐙 Minor | seveibar | Enhancement of SVG output by including software metadata, improving traceability and documentation. | ❌ |
| [#261](https://github.com/tscircuit/circuit-to-svg/pull/261) | 🐙 Minor | Abse2001 | Enhancement of SVG rendering by ensuring stroke width remains consistent regardless of scaling transformations. | ❌ |
| [#265](https://github.com/tscircuit/circuit-to-svg/pull/265) | 🐙 Minor | imrishabh18 | Enhancement of schematic text rendering to support newline characters, improving text layout capabilities. | ❌ |

### [tscircuit/tscircuit.com](https://github.com/tscircuit/tscircuit.com)

| PR # | Impact | Contributor | Description | Milestone Aligned |
|------|--------|-------------|-------------|-------------------|
| [#1353](https://github.com/tscircuit/tscircuit.com/pull/1353) | 🐳 Major | ArnavK-09 | Introducing a utility hook for keyboard shortcuts enhances user experience and code maintainability. | ❌ |
| [#1337](https://github.com/tscircuit/tscircuit.com/pull/1337) | 🐳 Major | ArnavK-09 | Introducing a VSCode-style file switcher enhances user experience by streamlining file navigation within the editor. | ❌ |
| [#1362](https://github.com/tscircuit/tscircuit.com/pull/1362) | 🐙 Minor | seveibar | Enhancements to polling behavior for AI review requests improve responsiveness and user experience. | ❌ |
| [#1312](https://github.com/tscircuit/tscircuit.com/pull/1312) | 🐙 Minor | ShiboSoftwareDev | Enhancement of the tree actions button for improved user interaction. | ❌ |
| [#1366](https://github.com/tscircuit/tscircuit.com/pull/1366) | 🐙 Minor | imrishabh18 | Enhances user experience by ensuring the copy button is only visible when relevant content exists. | ❌ |
| [#1364](https://github.com/tscircuit/tscircuit.com/pull/1364) | 🐙 Minor | imrishabh18 | Enhancements to AI review functionality improve user experience by providing real-time feedback on AI reviews. | ❌ |
| [#1365](https://github.com/tscircuit/tscircuit.com/pull/1365) | 🐙 Minor | imrishabh18 | Enhances user experience by preventing errors when creating a new file with an empty input. | ❌ |
| [#1328](https://github.com/tscircuit/tscircuit.com/pull/1328) | 🐙 Minor | imrishabh18 | Enhancements to the build status indicators improve clarity and user experience in the sidebar release section. | ❌ |
| [#1360](https://github.com/tscircuit/tscircuit.com/pull/1360) | 🐙 Minor | andrii-balitskyi | Enhancements to SSR query caching improve data retrieval efficiency for package information. | ❌ |
| [#1315](https://github.com/tscircuit/tscircuit.com/pull/1315) | 🐙 Minor | andrii-balitskyi | Enhancements to error handling for dynamic imports improve user experience by automatically reloading the page on failure. | ❌ |
| [#1316](https://github.com/tscircuit/tscircuit.com/pull/1316) | 🐙 Minor | andrii-balitskyi | The addition of a Vercel-style SSR routing plugin enhances the development experience by enabling server-side rendering capabilities during local development. | ❌ |
| [#1320](https://github.com/tscircuit/tscircuit.com/pull/1320) | 🐙 Minor | andrii-balitskyi | Enhances the client application by implementing a build version checking mechanism that reloads the app when a new version is available. | ❌ |
| [#1363](https://github.com/tscircuit/tscircuit.com/pull/1363) | 🐙 Minor | ArnavK-09 | Adjusts the dialog component to prevent it from taking full width on larger screens, enhancing user experience. | ❌ |
| [#1335](https://github.com/tscircuit/tscircuit.com/pull/1335) | 🐙 Minor | ArnavK-09 | Enhances user experience by allowing dynamic font size adjustments in the code editor, mimicking popular IDE behavior. | ❌ |
| [#1357](https://github.com/tscircuit/tscircuit.com/pull/1357) | 🐙 Minor | ArnavK-09 | Enhances the ImportantFilesView component by implementing client-side caching for file content, improving performance and user experience. | ❌ |
| [#1358](https://github.com/tscircuit/tscircuit.com/pull/1358) | 🐙 Minor | ArnavK-09 | Enhancements to markdown content styling improve layout and responsiveness, contributing to a better user experience. | ❌ |
| [#1355](https://github.com/tscircuit/tscircuit.com/pull/1355) | 🐙 Minor | ArnavK-09 | Enhancements to the dialog component improve its responsiveness and visual consistency with the theme, addressing a specific issue. | ❌ |
| [#1354](https://github.com/tscircuit/tscircuit.com/pull/1354) | 🐙 Minor | ArnavK-09 | Filtering out hidden files enhances user experience by decluttering the file selection interface. | ❌ |
| [#1333](https://github.com/tscircuit/tscircuit.com/pull/1333) | 🐙 Minor | ArnavK-09 | Hiding the edit button for AI-generated content enhances user experience by preventing unnecessary actions. | ❌ |
| [#1336](https://github.com/tscircuit/tscircuit.com/pull/1336) | 🐙 Minor | ArnavK-09 | Enhancing user experience by enabling Tab key for autocompletion in the code editor. | ❌ |
| [#1334](https://github.com/tscircuit/tscircuit.com/pull/1334) | 🐙 Minor | ArnavK-09 | Enhancements to the AI review interface significantly improve user experience and interaction. | ❌ |
| [#1338](https://github.com/tscircuit/tscircuit.com/pull/1338) | 🐙 Minor | ArnavK-09 | Enhances user experience by introducing a keyboard shortcut for toggling the files sidebar, similar to popular code editors. | ❌ |
| [#1332](https://github.com/tscircuit/tscircuit.com/pull/1332) | 🐙 Minor | ArnavK-09 | Enhances user interaction by allowing users to re-request AI reviews directly from the interface. | ❌ |
| [#1330](https://github.com/tscircuit/tscircuit.com/pull/1330) | 🐙 Minor | ArnavK-09 | Enhancement of user experience on small screens by adding a dedicated releases section. | ❌ |
| [#1331](https://github.com/tscircuit/tscircuit.com/pull/1331) | 🐙 Minor | ArnavK-09 | Adjusts the z-index of the Download dropdown to ensure proper visibility and functionality in the UI. | ❌ |
| [#1307](https://github.com/tscircuit/tscircuit.com/pull/1307) | 🐙 Minor | ArnavK-09 | Enhances the SEO capabilities by allowing dynamic selection of the Open Graph image based on the package's default view. | ❌ |
| [#1310](https://github.com/tscircuit/tscircuit.com/pull/1310) | 🐙 Minor | ArnavK-09 | Enhancements to caching and refetching behavior improve the editor's responsiveness after saving changes. | ❌ |
| [#1313](https://github.com/tscircuit/tscircuit.com/pull/1313) | 🐙 Minor | ArnavK-09 | Introduces a new feature for downloading PNG images of circuit designs, enhancing user functionality. | ❌ |
| [#1346](https://github.com/tscircuit/tscircuit.com/pull/1346) | 🐌 Tiny | Abse2001 | Updating the dependency version for circuit-to-svg enhances the project's compatibility with the latest features and fixes. | ❌ |
| [#1329](https://github.com/tscircuit/tscircuit.com/pull/1329) | 🐌 Tiny | Abse2001 | Updating the dependency version for improved functionality or bug fixes. | ❌ |
| [#1322](https://github.com/tscircuit/tscircuit.com/pull/1322) | 🐌 Tiny | techmannih | Updating the easyeda dependency enhances the project's compatibility with the latest features and fixes. | ❌ |
| [#1323](https://github.com/tscircuit/tscircuit.com/pull/1323) | 🐌 Tiny | Anshgrover23 | Updating dependencies enhances the stability and performance of the project by ensuring compatibility with the latest features and fixes. | ❌ |
| [#1367](https://github.com/tscircuit/tscircuit.com/pull/1367) | 🐌 Tiny | imrishabh18 | Updating the version of the circuit-to-svg package enhances the project's dependency management and ensures compatibility with the latest features or fixes. | ❌ |
| [#1324](https://github.com/tscircuit/tscircuit.com/pull/1324) | 🐌 Tiny | imrishabh18 | Updating the runframe package to a newer version enhances compatibility and potentially introduces improvements. | ❌ |
| [#1318](https://github.com/tscircuit/tscircuit.com/pull/1318) | 🐌 Tiny | imrishabh18 | Updating the runframe package to fix a z-index dialog issue enhances the UI functionality. | ❌ |
| [#1317](https://github.com/tscircuit/tscircuit.com/pull/1317) | 🐌 Tiny | imrishabh18 | Enhancing the dropdown width improves user experience by accommodating longer file names and providing better accessibility. | ❌ |
| [#1314](https://github.com/tscircuit/tscircuit.com/pull/1314) | 🐌 Tiny | imrishabh18 | The PR enhances the project's dependency management by updating the runframe package and adding necessary dependencies, ensuring compatibility and functionality. | ❌ |
| [#1347](https://github.com/tscircuit/tscircuit.com/pull/1347) | 🐌 Tiny | MustafaMulla29 | Updating the dependency version to resolve an import issue enhances the stability and functionality of the project. | ❌ |
| [#1348](https://github.com/tscircuit/tscircuit.com/pull/1348) | 🐌 Tiny | ArnavK-09 | Adding a home link to the header enhances navigation and user experience. | ❌ |

### [tscircuit/eval](https://github.com/tscircuit/eval)

| PR # | Impact | Contributor | Description | Milestone Aligned |
|------|--------|-------------|-------------|-------------------|
| [#576](https://github.com/tscircuit/eval/pull/576) | 🐙 Minor | seveibar | Enhancing the CircuitRunner's configurability by allowing platform-specific settings improves flexibility and usability. | ❌ |
| [#537](https://github.com/tscircuit/eval/pull/537) | 🐙 Minor | imrishabh18 | Enhancing the configuration handling by setting the entry point based on the parsed configuration file improves the flexibility and usability of the code. | ❌ |
| [#528](https://github.com/tscircuit/eval/pull/528) | 🐙 Minor | imrishabh18 | Enhances the configuration parsing by allowing the main component path to be specified in the tscircuit.config.js file. | ❌ |
| [#575](https://github.com/tscircuit/eval/pull/575) | 🐌 Tiny | tscircuitbot | Updating dependencies is essential for maintaining the health and performance of the project. | ❌ |
| [#563](https://github.com/tscircuit/eval/pull/563) | 🐌 Tiny | tscircuitbot | Updating the core library version enhances compatibility and may include important bug fixes or improvements. | ❌ |
| [#546](https://github.com/tscircuit/eval/pull/546) | 🐌 Tiny | tscircuitbot | Updating the core library version enhances compatibility and may include important bug fixes or improvements. | ❌ |
| [#536](https://github.com/tscircuit/eval/pull/536) | 🐌 Tiny | tscircuitbot | Updating dependencies is essential for maintaining project health and ensuring compatibility with other packages. | ❌ |

### [tscircuit/runframe](https://github.com/tscircuit/runframe)

| PR # | Impact | Contributor | Description | Milestone Aligned |
|------|--------|-------------|-------------|-------------------|
| [#783](https://github.com/tscircuit/runframe/pull/783) | 🐙 Minor | seveibar | Enhancement of user interface by displaying the last run evaluation version, improving user awareness of the current evaluation context. | ❌ |
| [#796](https://github.com/tscircuit/runframe/pull/796) | 🐙 Minor | imrishabh18 | Enhancing user experience by allowing the import dialog to close when clicking outside of it. | ❌ |
| [#781](https://github.com/tscircuit/runframe/pull/781) | 🐙 Minor | imrishabh18 | Elevating the OrderDialog's z-index enhances its visibility and usability in the UI. | ❌ |
| [#780](https://github.com/tscircuit/runframe/pull/780) | 🐙 Minor | imrishabh18 | Enhancing error tracking in the order dialog improves overall application reliability and user experience. | ❌ |
| [#790](https://github.com/tscircuit/runframe/pull/790) | 🐌 Tiny | Abse2001 | Updating the version of a dependency in the project to ensure compatibility and access to the latest features or fixes. | ❌ |
| [#793](https://github.com/tscircuit/runframe/pull/793) | 🐌 Tiny | imrishabh18 | Updates dependencies in the package.json file to newer versions, ensuring compatibility and potentially improved functionality. | ❌ |
| [#786](https://github.com/tscircuit/runframe/pull/786) | 🐌 Tiny | imrishabh18 | Updating the version of the 3D viewer package enhances the project's dependencies, ensuring compatibility and potentially introducing new features or fixes from the updated package. | ❌ |
| [#800](https://github.com/tscircuit/runframe/pull/800) | 🐌 Tiny | MustafaMulla29 | Updating the easyeda dependency to a newer version addresses a specific issue with part imports, enhancing functionality. | ❌ |

### [tscircuit/cli](https://github.com/tscircuit/cli)

| PR # | Impact | Contributor | Description | Milestone Aligned |
|------|--------|-------------|-------------|-------------------|
| [#248](https://github.com/tscircuit/cli/pull/248) | 🐙 Minor | seveibar | Introducing an option to disable PCB outputs enhances the flexibility of the build process, allowing users to customize their builds according to specific needs. | ❌ |
| [#243](https://github.com/tscircuit/cli/pull/243) | 🐙 Minor | seveibar | Enhancing the snapshot functionality to support individual file snapshots significantly improves usability and flexibility for users. | ❌ |
| [#236](https://github.com/tscircuit/cli/pull/236) | 🐙 Minor | seveibar | Enhancements to snapshot functionality provide users with more control over the output of PCB and schematic snapshots. | ❌ |
| [#234](https://github.com/tscircuit/cli/pull/234) | 🐙 Minor | seveibar | Enhancements to logging provide better visibility into snapshot creation processes. | ❌ |
| [#245](https://github.com/tscircuit/cli/pull/245) | 🐙 Minor | ShiboSoftwareDev | Fixes a regression that caused the snapshot command to malfunction by checking irrelevant index files, enhancing the command's reliability. | ❌ |
| [#244](https://github.com/tscircuit/cli/pull/244) | 🐙 Minor | ShiboSoftwareDev | Enhancements to the snapshot workflow improve clarity and functionality during GitHub actions. | ❌ |
| [#241](https://github.com/tscircuit/cli/pull/241) | 🐙 Minor | ShiboSoftwareDev | Refactoring of configuration logic enhances clarity and maintainability, allowing for both global and project-specific settings. | ❌ |
| [#237](https://github.com/tscircuit/cli/pull/237) | 🐙 Minor | ShiboSoftwareDev | Enhancements to cross-platform compatibility for the snapshot command improve usability for Windows users. | ❌ |
| [#233](https://github.com/tscircuit/cli/pull/233) | 🐙 Minor | imrishabh18 | Renaming the configuration entry field enhances clarity and consistency in the codebase. | ❌ |
| [#242](https://github.com/tscircuit/cli/pull/242) | 🐌 Tiny | Abse2001 | Updating the dependency version for improved functionality or bug fixes. | ❌ |
| [#249](https://github.com/tscircuit/cli/pull/249) | 🐌 Tiny | ShiboSoftwareDev | The change enhances dependency management by promoting `@tscircuit/props` to a peer dependency, ensuring compatibility with other packages. | ❌ |
| [#247](https://github.com/tscircuit/cli/pull/247) | 🐌 Tiny | ShiboSoftwareDev | Changing tscircuit to a peer dependency enhances compatibility and flexibility for users of the package. | ❌ |
| [#239](https://github.com/tscircuit/cli/pull/239) | 🐌 Tiny | ShiboSoftwareDev | The pull request updates several dependencies in the project, which is essential for maintaining compatibility and leveraging improvements from the latest versions. | ❌ |

### [tscircuit/docs](https://github.com/tscircuit/docs)

| PR # | Impact | Contributor | Description | Milestone Aligned |
|------|--------|-------------|-------------|-------------------|
| [#88](https://github.com/tscircuit/docs/pull/88) | 🐙 Minor | seveibar | Enhances the documentation by providing detailed information about the Order Quote API, improving developer understanding and usability. | ❌ |
| [#81](https://github.com/tscircuit/docs/pull/81) | 🐙 Minor | seveibar | Enhancements to the CircuitPreview component allow for more flexible display options, improving user experience. | ❌ |
| [#76](https://github.com/tscircuit/docs/pull/76) | 🐙 Minor | seveibar | The addition of the `<netlabel />` element enhances documentation clarity and usability for users working with schematic designs. | ❌ |
| [#74](https://github.com/tscircuit/docs/pull/74) | 🐙 Minor | imrishabh18 | The addition of a comprehensive ordering section enhances user experience by streamlining the prototype ordering process. | ❌ |
| [#90](https://github.com/tscircuit/docs/pull/90) | 🐌 Tiny | seveibar | Enhancing documentation for custom net selectors improves developer understanding and usability. | ❌ |
| [#89](https://github.com/tscircuit/docs/pull/89) | 🐌 Tiny | seveibar | Enhancing the documentation for the Ordering API by adding details on creating order quotes improves developer experience and usability. | ❌ |
| [#86](https://github.com/tscircuit/docs/pull/86) | 🐌 Tiny | seveibar | Enhances the documentation by providing clear guidelines for using the ordering API endpoints, which is essential for developers integrating with the API. | ❌ |
| [#87](https://github.com/tscircuit/docs/pull/87) | 🐌 Tiny | seveibar | Enhancements to the documentation of the Datasheet API, including a new pin information schema and an update to a dependency. | ❌ |
| [#85](https://github.com/tscircuit/docs/pull/85) | 🐌 Tiny | seveibar | Enhancing the documentation for the Datasheet API improves developer experience and usability. | ❌ |
| [#84](https://github.com/tscircuit/docs/pull/84) | 🐌 Tiny | seveibar | The addition of documentation for `<breakout>` and `<breakoutpoint>` elements enhances the clarity and usability of the library for developers. | ❌ |
| [#82](https://github.com/tscircuit/docs/pull/82) | 🐌 Tiny | seveibar | Enhancing documentation for the `sel()` function improves usability and understanding for developers. | ❌ |
| [#80](https://github.com/tscircuit/docs/pull/80) | 🐌 Tiny | seveibar | Enhancements to documentation for the `<jumper />` component improve clarity and usability for developers. | ❌ |
| [#77](https://github.com/tscircuit/docs/pull/77) | 🐌 Tiny | seveibar | Enhancing TypeScript configuration documentation and updating a dependency improves developer experience and project maintenance. | ❌ |
| [#75](https://github.com/tscircuit/docs/pull/75) | 🐌 Tiny | seveibar | Comprehensive documentation for the `tsci build` and `tsci snapshot` commands enhances user understanding and usability of the tool. | ❌ |
| [#79](https://github.com/tscircuit/docs/pull/79) | 🐌 Tiny | imrishabh18 | Enhances documentation for the `<schematictext />` component and ensures compliance with linting standards for the YouTube embed component. | ❌ |
| [#78](https://github.com/tscircuit/docs/pull/78) | 🐌 Tiny | imrishabh18 | Enhancing documentation clarity by completing sentences improves user understanding and usability. | ❌ |

### [tscircuit/parts-engine](https://github.com/tscircuit/parts-engine)

| PR # | Impact | Contributor | Description | Milestone Aligned |
|------|--------|-------------|-------------|-------------------|
| [#7](https://github.com/tscircuit/parts-engine/pull/7) | 🐙 Minor | seveibar | Enhances the robustness of the API by ensuring that missing data results in an empty part list instead of errors. | ❌ |
| [#6](https://github.com/tscircuit/parts-engine/pull/6) | 🐙 Minor | techmannih | Enhancements to the CI/CD pipeline through the addition of format and type check workflows improve code quality and maintainability. | ❌ |
| [#5](https://github.com/tscircuit/parts-engine/pull/5) | 🐙 Minor | techmannih | Enhancement of the parts engine to include support for simple fuse components, improving its functionality. | ❌ |

### [tscircuit/schematic-corpus](https://github.com/tscircuit/schematic-corpus)

| PR # | Impact | Contributor | Description | Milestone Aligned |
|------|--------|-------------|-------------|-------------------|
| [#2](https://github.com/tscircuit/schematic-corpus/pull/2) | 🐙 Minor | seveibar | The implementation of the create-bpcs script significantly enhances the functionality of converting circuit JSON outputs into BPC graphs, thereby streamlining the workflow for generating bundled BPC graphs. | ❌ |
| [#9](https://github.com/tscircuit/schematic-corpus/pull/9) | 🐙 Minor | Abse2001 | Introduces a new circuit design component with specific configurations for a chip and net labels. | ❌ |
| [#8](https://github.com/tscircuit/schematic-corpus/pull/8) | 🐙 Minor | Abse2001 | Introduces a new circuit design with specific component placements and connections. | ❌ |
| [#7](https://github.com/tscircuit/schematic-corpus/pull/7) | 🐙 Minor | Abse2001 | Introduces a new circuit design component with specific placements and connections for schematic representation. | ❌ |
| [#6](https://github.com/tscircuit/schematic-corpus/pull/6) | 🐙 Minor | Abse2001 | Introduces a new circuit design with specific component placements and connections, enhancing the schematic corpus. | ❌ |
| [#5](https://github.com/tscircuit/schematic-corpus/pull/5) | 🐙 Minor | Abse2001 | Introduces a new circuit design with specific component placements and connections. | ❌ |
| [#4](https://github.com/tscircuit/schematic-corpus/pull/4) | 🐙 Minor | Abse2001 | Introduces a new circuit design with specific component placements and connections, enhancing the schematic capabilities of the project. | ❌ |
| [#3](https://github.com/tscircuit/schematic-corpus/pull/3) | 🐙 Minor | Abse2001 | The addition of a new design file enhances the testing and tuning capabilities of the auto-layout algorithm, providing a structured approach to schematic placements. | ❌ |

### [tscircuit/deps.tscircuit.com](https://github.com/tscircuit/deps.tscircuit.com)

| PR # | Impact | Contributor | Description | Milestone Aligned |
|------|--------|-------------|-------------|-------------------|
| [#22](https://github.com/tscircuit/deps.tscircuit.com/pull/22) | 🐙 Minor | seveibar | Enhancements to node interaction and visibility in the dependency graph improve user experience and functionality. | ❌ |
| [#21](https://github.com/tscircuit/deps.tscircuit.com/pull/21) | 🐙 Minor | seveibar | Enhancing the dependency graph to show all dependencies by default improves user experience and visibility. | ❌ |
| [#19](https://github.com/tscircuit/deps.tscircuit.com/pull/19) | 🐙 Minor | seveibar | Enhances the package categorization by mapping 'tscircuit/checks' to the Core Utility category, improving clarity and organization. | ❌ |
| [#18](https://github.com/tscircuit/deps.tscircuit.com/pull/18) | 🐙 Minor | seveibar | Enhances the dependency graph by categorizing the parts-engine as a core utility, improving package management. | ❌ |
| [#17](https://github.com/tscircuit/deps.tscircuit.com/pull/17) | 🐙 Minor | seveibar | Enhancements to category mapping improve the organization and classification of packages within the project. | ❌ |
| [#14](https://github.com/tscircuit/deps.tscircuit.com/pull/14) | 🐙 Minor | seveibar | Enhances the user interface by introducing a category filter for better navigation and organization of package dependencies. | ❌ |
| [#13](https://github.com/tscircuit/deps.tscircuit.com/pull/13) | 🐙 Minor | seveibar | Enhancements to dependency management by incorporating peerDependencies into the dependency graph. | ❌ |
| [#12](https://github.com/tscircuit/deps.tscircuit.com/pull/12) | 🐙 Minor | seveibar | Enhancing visual representation of graph nodes based on edge severity improves user experience and debugging. | ❌ |
| [#10](https://github.com/tscircuit/deps.tscircuit.com/pull/10) | 🐙 Minor | seveibar | Enhancing dependency visualization by introducing color coding based on version differences adds significant value to the user experience. | ❌ |
| [#8](https://github.com/tscircuit/deps.tscircuit.com/pull/8) | 🐙 Minor | seveibar | Enhancements to the dependency graph functionality improve user experience by retaining node positions and adding a reset feature. | ❌ |
| [#7](https://github.com/tscircuit/deps.tscircuit.com/pull/7) | 🐙 Minor | seveibar | Enhancing the display of dependency information improves user experience and clarity in dependency management. | ❌ |
| [#9](https://github.com/tscircuit/deps.tscircuit.com/pull/9) | 🐙 Minor | seveibar | Enhancing the dependency graph by adding more GitHub repositories improves visibility and resource management. | ❌ |
| [#6](https://github.com/tscircuit/deps.tscircuit.com/pull/6) | 🐙 Minor | seveibar | Enhancements to site description and inclusion of a new repository in the dependency graph improve clarity and functionality. | ❌ |
| [#3](https://github.com/tscircuit/deps.tscircuit.com/pull/3) | 🐙 Minor | seveibar | Enhancements to the dependency graph functionality significantly improve user interaction by allowing nodes to be dragged, thus customizing the view. | ❌ |
| [#2](https://github.com/tscircuit/deps.tscircuit.com/pull/2) | 🐙 Minor | seveibar | Enhancing the dependency graph with last update timestamps for better visibility of package status. | ❌ |
| [#5](https://github.com/tscircuit/deps.tscircuit.com/pull/5) | 🐌 Tiny | seveibar | Enhancements to dependency edge visualization improve clarity on version satisfaction. | ❌ |
| [#4](https://github.com/tscircuit/deps.tscircuit.com/pull/4) | 🐌 Tiny | seveibar | Enhancing documentation with a GitHub badge and updating a dependency version improves project visibility and maintenance. | ❌ |

### [tscircuit/api](https://github.com/tscircuit/api)

| PR # | Impact | Contributor | Description | Milestone Aligned |
|------|--------|-------------|-------------|-------------------|
| [#3](https://github.com/tscircuit/api/pull/3) | 🐙 Minor | seveibar | Enhancements to the datasheet functionality improve usability and streamline the process of creating and retrieving datasheets. | ❌ |
| [#2](https://github.com/tscircuit/api/pull/2) | 🐙 Minor | seveibar | The addition of datasheet API functionality enhances the client capabilities and improves test coverage. | ❌ |
| [#4](https://github.com/tscircuit/api/pull/4) | 🐌 Tiny | seveibar | Enhances documentation by providing a clear example of datasheet output, improving usability for developers. | ❌ |

### [tscircuit/calculate-cell-boundaries](https://github.com/tscircuit/calculate-cell-boundaries)

| PR # | Impact | Contributor | Description | Milestone Aligned |
|------|--------|-------------|-------------|-------------------|
| [#2](https://github.com/tscircuit/calculate-cell-boundaries/pull/2) | 🐙 Minor | seveibar | Enhancements to the algorithm improve the accuracy of cell boundary calculations, ensuring better alignment with vertical and horizontal segments. | ❌ |

### [tscircuit/sparkfun-boards](https://github.com/tscircuit/sparkfun-boards)

| PR # | Impact | Contributor | Description | Milestone Aligned |
|------|--------|-------------|-------------|-------------------|
| [#5](https://github.com/tscircuit/sparkfun-boards/pull/5) | 🐳 Major | techmannih | The addition of the SparkFun USB to Serial Breakout FT232RL enhances the repository by providing a new component for users, facilitating USB to serial communication in their projects. | ❌ |
| [#10](https://github.com/tscircuit/sparkfun-boards/pull/10) | 🐳 Major | MustafaMulla29 | The addition of the HMC6343 Breakout board enhances the repository's offerings, providing users with a new component for their projects. | ❌ |
| [#11](https://github.com/tscircuit/sparkfun-boards/pull/11) | 🐙 Minor | ShiboSoftwareDev | Refactoring the I2C DAC Breakout board enhances the code structure and resolves existing errors, improving overall functionality. | ❌ |
| [#8](https://github.com/tscircuit/sparkfun-boards/pull/8) | 🐙 Minor | ShiboSoftwareDev | The addition of a new component enhances the library's functionality by providing a specific chip representation. | ❌ |
| [#15](https://github.com/tscircuit/sparkfun-boards/pull/15) | 🐙 Minor | Anshgrover23 | The addition of the SparkFun RFM69 Breakout board enhances the repository by providing a new component for users, expanding the available hardware options. | ❌ |
| [#9](https://github.com/tscircuit/sparkfun-boards/pull/9) | 🐌 Tiny | ShiboSoftwareDev | Introduces new workflows for building and snapshotting TSCircuit projects, enhancing CI/CD capabilities. | ❌ |
| [#13](https://github.com/tscircuit/sparkfun-boards/pull/13) | 🐌 Tiny | MustafaMulla29 | Updating the dependency version addresses type errors, ensuring better compatibility and functionality. | ❌ |

### [tscircuit/easyeda-converter](https://github.com/tscircuit/easyeda-converter)

| PR # | Impact | Contributor | Description | Milestone Aligned |
|------|--------|-------------|-------------|-------------------|
| [#254](https://github.com/tscircuit/easyeda-converter/pull/254) | 🐙 Minor | techmannih | Enhancements to the import functionality for specific components improve overall reliability and usability. | ❌ |
| [#255](https://github.com/tscircuit/easyeda-converter/pull/255) | 🐙 Minor | techmannih | Addresses a specific import failure issue related to a JLCPCB part, enhancing the functionality of the converter. | ❌ |

### [tscircuit/schematic-symbols](https://github.com/tscircuit/schematic-symbols)

| PR # | Impact | Contributor | Description | Milestone Aligned |
|------|--------|-------------|-------------|-------------------|
| [#309](https://github.com/tscircuit/schematic-symbols/pull/309) | 🐙 Minor | techmannih | Enhancements to the crystal symbol variations improve usability and flexibility in schematic designs. | ❌ |
| [#310](https://github.com/tscircuit/schematic-symbols/pull/310) | 🐙 Minor | imrishabh18 | Enhancements to port labeling improve clarity and usability of schematic symbols. | ❌ |

### [tscircuit/tscircuit](https://github.com/tscircuit/tscircuit)

| PR # | Impact | Contributor | Description | Milestone Aligned |
|------|--------|-------------|-------------|-------------------|
| [#690](https://github.com/tscircuit/tscircuit/pull/690) | 🐌 Tiny | techmannih | Updating dependencies enhances the stability and security of the project by ensuring that the latest versions of packages are used. | ❌ |
| [#688](https://github.com/tscircuit/tscircuit/pull/688) | 🐌 Tiny | ShiboSoftwareDev | Updating dependencies to their latest versions enhances the stability and security of the project. | ❌ |

### [tscircuit/3d-viewer](https://github.com/tscircuit/3d-viewer)

| PR # | Impact | Contributor | Description | Milestone Aligned |
|------|--------|-------------|-------------|-------------------|
| [#356](https://github.com/tscircuit/3d-viewer/pull/356) | 🐙 Minor | ShiboSoftwareDev | Refactoring the manifold to operate within a web worker enhances performance by offloading heavy computations, thereby improving the user experience during rendering. | ❌ |
| [#355](https://github.com/tscircuit/3d-viewer/pull/355) | 🐙 Minor | ShiboSoftwareDev | Enhancement of the manifold processing to support pill-shaped plated holes, improving design flexibility. | ❌ |
| [#350](https://github.com/tscircuit/3d-viewer/pull/350) | 🐙 Minor | imrishabh18 | Loading the Manifold WASM module from a CDN enhances the application's performance and reduces local resource dependency. | ❌ |

### [tscircuit/tscircuit-autorouter](https://github.com/tscircuit/tscircuit-autorouter)

| PR # | Impact | Contributor | Description | Milestone Aligned |
|------|--------|-------------|-------------|-------------------|
| [#156](https://github.com/tscircuit/tscircuit-autorouter/pull/156) | 🐙 Minor | ShiboSoftwareDev | The addition of high-density node input data enhances the autorouting capabilities of the system, providing a more robust testing framework for future developments. | ❌ |
| [#161](https://github.com/tscircuit/tscircuit-autorouter/pull/161) | 🐙 Minor | Anshgrover23 | Introduces a new fixture to address a specific bug in the hyperdensity autorouter, enhancing testing capabilities. | ❌ |
| [#164](https://github.com/tscircuit/tscircuit-autorouter/pull/164) | 🐙 Minor | MustafaMulla29 | Enhancements to node fixtures improve the autorouting functionality by addressing previously failed nodes. | ❌ |

## Changes by Contributor

### [seveibar](https://github.com/seveibar)

| PR # | Impact | Description | Milestone Aligned |
|------|--------|-------------|-------------------|
| [#960](https://github.com/tscircuit/core/pull/960) | 🐳 Major | Enhancements to jumper and chip selectors improve functionality for keyboard building. | ✅ |
| [#2](https://github.com/tscircuit/bpc-graph/pull/2) | 🐳 Major | Enhances graph transformation capabilities by implementing A* search with heuristic matching for operation costs. | ❌ |
| [#97](https://github.com/tscircuit/schematic-viewer/pull/97) | 🐙 Minor | Enhances user interaction by allowing components to snap to a grid during editing, improving precision in layout adjustments. | ❌ |
| [#232](https://github.com/tscircuit/circuit-json/pull/232) | 🐙 Minor | The removal of the default value for `is_movable` enhances the flexibility of schematic net labels by allowing explicit control over their repositioning behavior. | ❌ |
| [#301](https://github.com/tscircuit/props/pull/301) | 🐙 Minor | Enhancement of the group component by introducing a new schematic title property, improving usability in schematic views. | ❌ |
| [#298](https://github.com/tscircuit/props/pull/298) | 🐙 Minor | Enhancing the plated hole component with a new property for connections significantly improves its functionality and usability. | ❌ |
| [#297](https://github.com/tscircuit/props/pull/297) | 🐙 Minor | Enhancements to naming and connectivity for vias and smtpads improve usability and functionality in PCB design. | ❌ |
| [#296](https://github.com/tscircuit/props/pull/296) | 🐙 Minor | Enhancements to component properties for better schematic representation and orientation handling. | ❌ |
| [#295](https://github.com/tscircuit/props/pull/295) | 🐙 Minor | Enhancing the jumper component with a new connections property significantly improves its functionality and flexibility. | ❌ |
| [#291](https://github.com/tscircuit/props/pull/291) | 🐙 Minor | Enhancing the `connectsTo` property to accept both string and array types improves flexibility in component connections. | ❌ |
| [#302](https://github.com/tscircuit/footprinter/pull/302) | 🐙 Minor | Introducing circular pads enhances the flexibility and design options for BGA footprints, catering to diverse PCB design needs. | ❌ |
| [#959](https://github.com/tscircuit/core/pull/959) | 🐙 Minor | Enhancements to the `sel` function allow for dynamic reference designator usage, improving flexibility in pin selection. | ❌ |
| [#973](https://github.com/tscircuit/core/pull/973) | 🐙 Minor | Enhances the RootCircuit class by incorporating platform configuration for pcbDisabled, improving flexibility in circuit initialization. | ❌ |
| [#972](https://github.com/tscircuit/core/pull/972) | 🐙 Minor | Enhancements to schematic width handling improve user experience and functionality. | ❌ |
| [#961](https://github.com/tscircuit/core/pull/961) | 🐙 Minor | Enhancements to error messaging for unresolved port selectors improve debugging and user experience. | ❌ |
| [#957](https://github.com/tscircuit/core/pull/957) | 🐙 Minor | Enhancing the netlabel functionality to support multiple connections significantly improves flexibility in circuit design. | ❌ |
| [#951](https://github.com/tscircuit/core/pull/951) | 🐙 Minor | Enhancements to netlabel functionality improve circuit design capabilities by allowing dynamic net creation and trace generation based on defined connections. | ❌ |
| [#950](https://github.com/tscircuit/core/pull/950) | 🐙 Minor | Enhancements to trace connections with netlabels improve schematic accuracy and usability. | ❌ |
| [#948](https://github.com/tscircuit/core/pull/948) | 🐙 Minor | The removal of the deprecated NetAlias component and its replacement with the new NetLabel component enhances code clarity and maintainability. | ❌ |
| [#178](https://github.com/tscircuit/contribution-tracker/pull/178) | 🐙 Minor | Enhancements to the changelog generation process and type error fixes improve overall functionality and maintainability. | ❌ |
| [#177](https://github.com/tscircuit/contribution-tracker/pull/177) | 🐙 Minor | Automating the generation of monthly changelogs enhances documentation and improves project transparency. | ❌ |
| [#267](https://github.com/tscircuit/circuit-to-svg/pull/267) | 🐙 Minor | Enhancements to pin label rendering improve visual clarity for net labels prefixed with 'N_'. | ❌ |
| [#266](https://github.com/tscircuit/circuit-to-svg/pull/266) | 🐙 Minor | Enhancements to SVG rendering by eliminating unnecessary visual elements for connected pins, improving clarity and performance. | ❌ |
| [#264](https://github.com/tscircuit/circuit-to-svg/pull/264) | 🐙 Minor | Enhancements to trace rendering ensure proper visual hierarchy in PCB designs, improving usability and accuracy. | ❌ |
| [#262](https://github.com/tscircuit/circuit-to-svg/pull/262) | 🐙 Minor | Enhancement of SVG output by including software metadata, improving traceability and documentation. | ❌ |
| [#1362](https://github.com/tscircuit/tscircuit.com/pull/1362) | 🐙 Minor | Enhancements to polling behavior for AI review requests improve responsiveness and user experience. | ❌ |
| [#576](https://github.com/tscircuit/eval/pull/576) | 🐙 Minor | Enhancing the CircuitRunner's configurability by allowing platform-specific settings improves flexibility and usability. | ❌ |
| [#783](https://github.com/tscircuit/runframe/pull/783) | 🐙 Minor | Enhancement of user interface by displaying the last run evaluation version, improving user awareness of the current evaluation context. | ❌ |
| [#248](https://github.com/tscircuit/cli/pull/248) | 🐙 Minor | Introducing an option to disable PCB outputs enhances the flexibility of the build process, allowing users to customize their builds according to specific needs. | ❌ |
| [#243](https://github.com/tscircuit/cli/pull/243) | 🐙 Minor | Enhancing the snapshot functionality to support individual file snapshots significantly improves usability and flexibility for users. | ❌ |
| [#236](https://github.com/tscircuit/cli/pull/236) | 🐙 Minor | Enhancements to snapshot functionality provide users with more control over the output of PCB and schematic snapshots. | ❌ |
| [#234](https://github.com/tscircuit/cli/pull/234) | 🐙 Minor | Enhancements to logging provide better visibility into snapshot creation processes. | ❌ |
| [#88](https://github.com/tscircuit/docs/pull/88) | 🐙 Minor | Enhances the documentation by providing detailed information about the Order Quote API, improving developer understanding and usability. | ❌ |
| [#81](https://github.com/tscircuit/docs/pull/81) | 🐙 Minor | Enhancements to the CircuitPreview component allow for more flexible display options, improving user experience. | ❌ |
| [#76](https://github.com/tscircuit/docs/pull/76) | 🐙 Minor | The addition of the `<netlabel />` element enhances documentation clarity and usability for users working with schematic designs. | ❌ |
| [#7](https://github.com/tscircuit/parts-engine/pull/7) | 🐙 Minor | Enhances the robustness of the API by ensuring that missing data results in an empty part list instead of errors. | ❌ |
| [#2](https://github.com/tscircuit/schematic-corpus/pull/2) | 🐙 Minor | The implementation of the create-bpcs script significantly enhances the functionality of converting circuit JSON outputs into BPC graphs, thereby streamlining the workflow for generating bundled BPC graphs. | ❌ |
| [#22](https://github.com/tscircuit/deps.tscircuit.com/pull/22) | 🐙 Minor | Enhancements to node interaction and visibility in the dependency graph improve user experience and functionality. | ❌ |
| [#21](https://github.com/tscircuit/deps.tscircuit.com/pull/21) | 🐙 Minor | Enhancing the dependency graph to show all dependencies by default improves user experience and visibility. | ❌ |
| [#19](https://github.com/tscircuit/deps.tscircuit.com/pull/19) | 🐙 Minor | Enhances the package categorization by mapping 'tscircuit/checks' to the Core Utility category, improving clarity and organization. | ❌ |
| [#18](https://github.com/tscircuit/deps.tscircuit.com/pull/18) | 🐙 Minor | Enhances the dependency graph by categorizing the parts-engine as a core utility, improving package management. | ❌ |
| [#17](https://github.com/tscircuit/deps.tscircuit.com/pull/17) | 🐙 Minor | Enhancements to category mapping improve the organization and classification of packages within the project. | ❌ |
| [#14](https://github.com/tscircuit/deps.tscircuit.com/pull/14) | 🐙 Minor | Enhances the user interface by introducing a category filter for better navigation and organization of package dependencies. | ❌ |
| [#13](https://github.com/tscircuit/deps.tscircuit.com/pull/13) | 🐙 Minor | Enhancements to dependency management by incorporating peerDependencies into the dependency graph. | ❌ |
| [#12](https://github.com/tscircuit/deps.tscircuit.com/pull/12) | 🐙 Minor | Enhancing visual representation of graph nodes based on edge severity improves user experience and debugging. | ❌ |
| [#10](https://github.com/tscircuit/deps.tscircuit.com/pull/10) | 🐙 Minor | Enhancing dependency visualization by introducing color coding based on version differences adds significant value to the user experience. | ❌ |
| [#8](https://github.com/tscircuit/deps.tscircuit.com/pull/8) | 🐙 Minor | Enhancements to the dependency graph functionality improve user experience by retaining node positions and adding a reset feature. | ❌ |
| [#7](https://github.com/tscircuit/deps.tscircuit.com/pull/7) | 🐙 Minor | Enhancing the display of dependency information improves user experience and clarity in dependency management. | ❌ |
| [#9](https://github.com/tscircuit/deps.tscircuit.com/pull/9) | 🐙 Minor | Enhancing the dependency graph by adding more GitHub repositories improves visibility and resource management. | ❌ |
| [#6](https://github.com/tscircuit/deps.tscircuit.com/pull/6) | 🐙 Minor | Enhancements to site description and inclusion of a new repository in the dependency graph improve clarity and functionality. | ❌ |
| [#3](https://github.com/tscircuit/deps.tscircuit.com/pull/3) | 🐙 Minor | Enhancements to the dependency graph functionality significantly improve user interaction by allowing nodes to be dragged, thus customizing the view. | ❌ |
| [#2](https://github.com/tscircuit/deps.tscircuit.com/pull/2) | 🐙 Minor | Enhancing the dependency graph with last update timestamps for better visibility of package status. | ❌ |
| [#3](https://github.com/tscircuit/api/pull/3) | 🐙 Minor | Enhancements to the datasheet functionality improve usability and streamline the process of creating and retrieving datasheets. | ❌ |
| [#2](https://github.com/tscircuit/api/pull/2) | 🐙 Minor | The addition of datasheet API functionality enhances the client capabilities and improves test coverage. | ❌ |
| [#2](https://github.com/tscircuit/calculate-cell-boundaries/pull/2) | 🐙 Minor | Enhancements to the algorithm improve the accuracy of cell boundary calculations, ensuring better alignment with vertical and horizontal segments. | ❌ |
| [#294](https://github.com/tscircuit/props/pull/294) | 🐌 Tiny | Clarification of documentation enhances understanding of the `internallyConnectedPins` property. | ❌ |
| [#955](https://github.com/tscircuit/core/pull/955) | 🐌 Tiny | The addition of a configuration to disable the lockfile in the project enhances flexibility in dependency management. | ❌ |
| [#946](https://github.com/tscircuit/core/pull/946) | 🐌 Tiny | Enhancing testing capabilities for netalias connections improves code reliability and maintainability. | ❌ |
| [#90](https://github.com/tscircuit/docs/pull/90) | 🐌 Tiny | Enhancing documentation for custom net selectors improves developer understanding and usability. | ❌ |
| [#89](https://github.com/tscircuit/docs/pull/89) | 🐌 Tiny | Enhancing the documentation for the Ordering API by adding details on creating order quotes improves developer experience and usability. | ❌ |
| [#86](https://github.com/tscircuit/docs/pull/86) | 🐌 Tiny | Enhances the documentation by providing clear guidelines for using the ordering API endpoints, which is essential for developers integrating with the API. | ❌ |
| [#87](https://github.com/tscircuit/docs/pull/87) | 🐌 Tiny | Enhancements to the documentation of the Datasheet API, including a new pin information schema and an update to a dependency. | ❌ |
| [#85](https://github.com/tscircuit/docs/pull/85) | 🐌 Tiny | Enhancing the documentation for the Datasheet API improves developer experience and usability. | ❌ |
| [#84](https://github.com/tscircuit/docs/pull/84) | 🐌 Tiny | The addition of documentation for `<breakout>` and `<breakoutpoint>` elements enhances the clarity and usability of the library for developers. | ❌ |
| [#82](https://github.com/tscircuit/docs/pull/82) | 🐌 Tiny | Enhancing documentation for the `sel()` function improves usability and understanding for developers. | ❌ |
| [#80](https://github.com/tscircuit/docs/pull/80) | 🐌 Tiny | Enhancements to documentation for the `<jumper />` component improve clarity and usability for developers. | ❌ |
| [#77](https://github.com/tscircuit/docs/pull/77) | 🐌 Tiny | Enhancing TypeScript configuration documentation and updating a dependency improves developer experience and project maintenance. | ❌ |
| [#75](https://github.com/tscircuit/docs/pull/75) | 🐌 Tiny | Comprehensive documentation for the `tsci build` and `tsci snapshot` commands enhances user understanding and usability of the tool. | ❌ |
| [#5](https://github.com/tscircuit/deps.tscircuit.com/pull/5) | 🐌 Tiny | Enhancements to dependency edge visualization improve clarity on version satisfaction. | ❌ |
| [#4](https://github.com/tscircuit/deps.tscircuit.com/pull/4) | 🐌 Tiny | Enhancing documentation with a GitHub badge and updating a dependency version improves project visibility and maintenance. | ❌ |
| [#4](https://github.com/tscircuit/api/pull/4) | 🐌 Tiny | Enhances documentation by providing a clear example of datasheet output, improving usability for developers. | ❌ |

### [Abse2001](https://github.com/Abse2001)

| PR # | Impact | Description | Milestone Aligned |
|------|--------|-------------|-------------------|
| [#956](https://github.com/tscircuit/core/pull/956) | 🐳 Major | Enhances the selector functionality by adding support for J references, improving usability for keyboard building. | ✅ |
| [#261](https://github.com/tscircuit/circuit-to-svg/pull/261) | 🐙 Minor | Enhancement of SVG rendering by ensuring stroke width remains consistent regardless of scaling transformations. | ❌ |
| [#9](https://github.com/tscircuit/schematic-corpus/pull/9) | 🐙 Minor | Introduces a new circuit design component with specific configurations for a chip and net labels. | ❌ |
| [#8](https://github.com/tscircuit/schematic-corpus/pull/8) | 🐙 Minor | Introduces a new circuit design with specific component placements and connections. | ❌ |
| [#7](https://github.com/tscircuit/schematic-corpus/pull/7) | 🐙 Minor | Introduces a new circuit design component with specific placements and connections for schematic representation. | ❌ |
| [#6](https://github.com/tscircuit/schematic-corpus/pull/6) | 🐙 Minor | Introduces a new circuit design with specific component placements and connections, enhancing the schematic corpus. | ❌ |
| [#5](https://github.com/tscircuit/schematic-corpus/pull/5) | 🐙 Minor | Introduces a new circuit design with specific component placements and connections. | ❌ |
| [#4](https://github.com/tscircuit/schematic-corpus/pull/4) | 🐙 Minor | Introduces a new circuit design with specific component placements and connections, enhancing the schematic capabilities of the project. | ❌ |
| [#3](https://github.com/tscircuit/schematic-corpus/pull/3) | 🐙 Minor | The addition of a new design file enhances the testing and tuning capabilities of the auto-layout algorithm, providing a structured approach to schematic placements. | ❌ |
| [#98](https://github.com/tscircuit/schematic-viewer/pull/98) | 🐌 Tiny | Updating the dependency version for circuit-to-svg enhances compatibility and potentially introduces new features or fixes. | ❌ |
| [#1346](https://github.com/tscircuit/tscircuit.com/pull/1346) | 🐌 Tiny | Updating the dependency version for circuit-to-svg enhances the project's compatibility with the latest features and fixes. | ❌ |
| [#1329](https://github.com/tscircuit/tscircuit.com/pull/1329) | 🐌 Tiny | Updating the dependency version for improved functionality or bug fixes. | ❌ |
| [#790](https://github.com/tscircuit/runframe/pull/790) | 🐌 Tiny | Updating the version of a dependency in the project to ensure compatibility and access to the latest features or fixes. | ❌ |
| [#242](https://github.com/tscircuit/cli/pull/242) | 🐌 Tiny | Updating the dependency version for improved functionality or bug fixes. | ❌ |

### [techmannih](https://github.com/techmannih)

| PR # | Impact | Description | Milestone Aligned |
|------|--------|-------------|-------------------|
| [#967](https://github.com/tscircuit/core/pull/967) | 🐳 Major | Enhancement of selector functionality by adding support for fuse components, improving the flexibility of the library. | ✅ |
| [#5](https://github.com/tscircuit/sparkfun-boards/pull/5) | 🐳 Major | The addition of the SparkFun USB to Serial Breakout FT232RL enhances the repository by providing a new component for users, facilitating USB to serial communication in their projects. | ❌ |
| [#295](https://github.com/tscircuit/footprinter/pull/295) | 🐙 Minor | Corrects the pad dimension logic to ensure accurate component footprint calculations, enhancing the reliability of the passive function. | ❌ |
| [#254](https://github.com/tscircuit/easyeda-converter/pull/254) | 🐙 Minor | Enhancements to the import functionality for specific components improve overall reliability and usability. | ❌ |
| [#255](https://github.com/tscircuit/easyeda-converter/pull/255) | 🐙 Minor | Addresses a specific import failure issue related to a JLCPCB part, enhancing the functionality of the converter. | ❌ |
| [#975](https://github.com/tscircuit/core/pull/975) | 🐙 Minor | Enhancing the switch selector typing to include additional pins improves the flexibility and usability of the component. | ❌ |
| [#971](https://github.com/tscircuit/core/pull/971) | 🐙 Minor | Enhancement of the crystal component to display load capacitance alongside frequency, improving user information. | ❌ |
| [#309](https://github.com/tscircuit/schematic-symbols/pull/309) | 🐙 Minor | Enhancements to the crystal symbol variations improve usability and flexibility in schematic designs. | ❌ |
| [#6](https://github.com/tscircuit/parts-engine/pull/6) | 🐙 Minor | Enhancements to the CI/CD pipeline through the addition of format and type check workflows improve code quality and maintainability. | ❌ |
| [#5](https://github.com/tscircuit/parts-engine/pull/5) | 🐙 Minor | Enhancement of the parts engine to include support for simple fuse components, improving its functionality. | ❌ |
| [#690](https://github.com/tscircuit/tscircuit/pull/690) | 🐌 Tiny | Updating dependencies enhances the stability and security of the project by ensuring that the latest versions of packages are used. | ❌ |
| [#1322](https://github.com/tscircuit/tscircuit.com/pull/1322) | 🐌 Tiny | Updating the easyeda dependency enhances the project's compatibility with the latest features and fixes. | ❌ |

### [ShiboSoftwareDev](https://github.com/ShiboSoftwareDev)

| PR # | Impact | Description | Milestone Aligned |
|------|--------|-------------|-------------------|
| [#356](https://github.com/tscircuit/3d-viewer/pull/356) | 🐙 Minor | Refactoring the manifold to operate within a web worker enhances performance by offloading heavy computations, thereby improving the user experience during rendering. | ❌ |
| [#355](https://github.com/tscircuit/3d-viewer/pull/355) | 🐙 Minor | Enhancement of the manifold processing to support pill-shaped plated holes, improving design flexibility. | ❌ |
| [#963](https://github.com/tscircuit/core/pull/963) | 🐙 Minor | Enhancements to the SolderJumper component for better pin labeling and handling of bridged pins. | ❌ |
| [#1312](https://github.com/tscircuit/tscircuit.com/pull/1312) | 🐙 Minor | Enhancement of the tree actions button for improved user interaction. | ❌ |
| [#245](https://github.com/tscircuit/cli/pull/245) | 🐙 Minor | Fixes a regression that caused the snapshot command to malfunction by checking irrelevant index files, enhancing the command's reliability. | ❌ |
| [#244](https://github.com/tscircuit/cli/pull/244) | 🐙 Minor | Enhancements to the snapshot workflow improve clarity and functionality during GitHub actions. | ❌ |
| [#241](https://github.com/tscircuit/cli/pull/241) | 🐙 Minor | Refactoring of configuration logic enhances clarity and maintainability, allowing for both global and project-specific settings. | ❌ |
| [#237](https://github.com/tscircuit/cli/pull/237) | 🐙 Minor | Enhancements to cross-platform compatibility for the snapshot command improve usability for Windows users. | ❌ |
| [#156](https://github.com/tscircuit/tscircuit-autorouter/pull/156) | 🐙 Minor | The addition of high-density node input data enhances the autorouting capabilities of the system, providing a more robust testing framework for future developments. | ❌ |
| [#11](https://github.com/tscircuit/sparkfun-boards/pull/11) | 🐙 Minor | Refactoring the I2C DAC Breakout board enhances the code structure and resolves existing errors, improving overall functionality. | ❌ |
| [#8](https://github.com/tscircuit/sparkfun-boards/pull/8) | 🐙 Minor | The addition of a new component enhances the library's functionality by providing a specific chip representation. | ❌ |
| [#688](https://github.com/tscircuit/tscircuit/pull/688) | 🐌 Tiny | Updating dependencies to their latest versions enhances the stability and security of the project. | ❌ |
| [#249](https://github.com/tscircuit/cli/pull/249) | 🐌 Tiny | The change enhances dependency management by promoting `@tscircuit/props` to a peer dependency, ensuring compatibility with other packages. | ❌ |
| [#247](https://github.com/tscircuit/cli/pull/247) | 🐌 Tiny | Changing tscircuit to a peer dependency enhances compatibility and flexibility for users of the package. | ❌ |
| [#239](https://github.com/tscircuit/cli/pull/239) | 🐌 Tiny | The pull request updates several dependencies in the project, which is essential for maintaining compatibility and leveraging improvements from the latest versions. | ❌ |
| [#9](https://github.com/tscircuit/sparkfun-boards/pull/9) | 🐌 Tiny | Introduces new workflows for building and snapshotting TSCircuit projects, enhancing CI/CD capabilities. | ❌ |

### [Anshgrover23](https://github.com/Anshgrover23)

| PR # | Impact | Description | Milestone Aligned |
|------|--------|-------------|-------------------|
| [#293](https://github.com/tscircuit/props/pull/293) | 🐙 Minor | Enhancing flexibility in component properties by making schX and schY optional improves usability and testing coverage. | ❌ |
| [#292](https://github.com/tscircuit/props/pull/292) | 🐙 Minor | Enhancements to the PinHeaderProps interface improve the flexibility and functionality of the pin header component. | ❌ |
| [#984](https://github.com/tscircuit/core/pull/984) | 🐙 Minor | Enhancement of type definitions to include 'N_CS', improving code clarity and functionality. | ❌ |
| [#980](https://github.com/tscircuit/core/pull/980) | 🐙 Minor | Enhancing the type definitions by adding 'INT' improves the clarity and usability of the codebase for developers working with common net and pin names. | ❌ |
| [#954](https://github.com/tscircuit/core/pull/954) | 🐙 Minor | Enhances the SchematicText component by ensuring default values for position properties, improving robustness. | ❌ |
| [#161](https://github.com/tscircuit/tscircuit-autorouter/pull/161) | 🐙 Minor | Introduces a new fixture to address a specific bug in the hyperdensity autorouter, enhancing testing capabilities. | ❌ |
| [#15](https://github.com/tscircuit/sparkfun-boards/pull/15) | 🐙 Minor | The addition of the SparkFun RFM69 Breakout board enhances the repository by providing a new component for users, expanding the available hardware options. | ❌ |
| [#953](https://github.com/tscircuit/core/pull/953) | 🐌 Tiny | Updating the dependency version for props enhances compatibility and ensures the latest features and fixes are utilized. | ❌ |
| [#1323](https://github.com/tscircuit/tscircuit.com/pull/1323) | 🐌 Tiny | Updating dependencies enhances the stability and performance of the project by ensuring compatibility with the latest features and fixes. | ❌ |

### [imrishabh18](https://github.com/imrishabh18)

| PR # | Impact | Description | Milestone Aligned |
|------|--------|-------------|-------------------|
| [#962](https://github.com/tscircuit/core/pull/962) | 🐳 Major | Enhancement of route JSON generation by incorporating subcircuit padding, improving layout accuracy. | ✅ |
| [#350](https://github.com/tscircuit/3d-viewer/pull/350) | 🐙 Minor | Loading the Manifold WASM module from a CDN enhances the application's performance and reduces local resource dependency. | ❌ |
| [#983](https://github.com/tscircuit/core/pull/983) | 🐙 Minor | Enhancing the solderjumper component by establishing a default pin count improves usability and consistency in circuit design. | ❌ |
| [#969](https://github.com/tscircuit/core/pull/969) | 🐙 Minor | Enhancement of the polarized capacitor symbol improves schematic accuracy and usability. | ❌ |
| [#949](https://github.com/tscircuit/core/pull/949) | 🐙 Minor | Enhancements to component naming and rendering improve usability and error handling in the circuit design process. | ❌ |
| [#965](https://github.com/tscircuit/core/pull/965) | 🐙 Minor | The implementation ensures that the subcircuit_id is only set for subcircuit groups, preventing incorrect assignments. | ❌ |
| [#964](https://github.com/tscircuit/core/pull/964) | 🐙 Minor | Introducing a new render phase enhances the rendering capabilities for subcircuits, improving the overall functionality of the library. | ❌ |
| [#947](https://github.com/tscircuit/core/pull/947) | 🐙 Minor | Enhancements to PCB layout capabilities with added padding support for subcircuits improve design flexibility. | ❌ |
| [#938](https://github.com/tscircuit/core/pull/938) | 🐙 Minor | Enhancements to net label lookup improve circuit functionality and testing reliability. | ❌ |
| [#265](https://github.com/tscircuit/circuit-to-svg/pull/265) | 🐙 Minor | Enhancement of schematic text rendering to support newline characters, improving text layout capabilities. | ❌ |
| [#310](https://github.com/tscircuit/schematic-symbols/pull/310) | 🐙 Minor | Enhancements to port labeling improve clarity and usability of schematic symbols. | ❌ |
| [#1366](https://github.com/tscircuit/tscircuit.com/pull/1366) | 🐙 Minor | Enhances user experience by ensuring the copy button is only visible when relevant content exists. | ❌ |
| [#1364](https://github.com/tscircuit/tscircuit.com/pull/1364) | 🐙 Minor | Enhancements to AI review functionality improve user experience by providing real-time feedback on AI reviews. | ❌ |
| [#1365](https://github.com/tscircuit/tscircuit.com/pull/1365) | 🐙 Minor | Enhances user experience by preventing errors when creating a new file with an empty input. | ❌ |
| [#1328](https://github.com/tscircuit/tscircuit.com/pull/1328) | 🐙 Minor | Enhancements to the build status indicators improve clarity and user experience in the sidebar release section. | ❌ |
| [#537](https://github.com/tscircuit/eval/pull/537) | 🐙 Minor | Enhancing the configuration handling by setting the entry point based on the parsed configuration file improves the flexibility and usability of the code. | ❌ |
| [#528](https://github.com/tscircuit/eval/pull/528) | 🐙 Minor | Enhances the configuration parsing by allowing the main component path to be specified in the tscircuit.config.js file. | ❌ |
| [#796](https://github.com/tscircuit/runframe/pull/796) | 🐙 Minor | Enhancing user experience by allowing the import dialog to close when clicking outside of it. | ❌ |
| [#781](https://github.com/tscircuit/runframe/pull/781) | 🐙 Minor | Elevating the OrderDialog's z-index enhances its visibility and usability in the UI. | ❌ |
| [#780](https://github.com/tscircuit/runframe/pull/780) | 🐙 Minor | Enhancing error tracking in the order dialog improves overall application reliability and user experience. | ❌ |
| [#233](https://github.com/tscircuit/cli/pull/233) | 🐙 Minor | Renaming the configuration entry field enhances clarity and consistency in the codebase. | ❌ |
| [#74](https://github.com/tscircuit/docs/pull/74) | 🐙 Minor | The addition of a comprehensive ordering section enhances user experience by streamlining the prototype ordering process. | ❌ |
| [#1367](https://github.com/tscircuit/tscircuit.com/pull/1367) | 🐌 Tiny | Updating the version of the circuit-to-svg package enhances the project's dependency management and ensures compatibility with the latest features or fixes. | ❌ |
| [#1324](https://github.com/tscircuit/tscircuit.com/pull/1324) | 🐌 Tiny | Updating the runframe package to a newer version enhances compatibility and potentially introduces improvements. | ❌ |
| [#1318](https://github.com/tscircuit/tscircuit.com/pull/1318) | 🐌 Tiny | Updating the runframe package to fix a z-index dialog issue enhances the UI functionality. | ❌ |
| [#1317](https://github.com/tscircuit/tscircuit.com/pull/1317) | 🐌 Tiny | Enhancing the dropdown width improves user experience by accommodating longer file names and providing better accessibility. | ❌ |
| [#1314](https://github.com/tscircuit/tscircuit.com/pull/1314) | 🐌 Tiny | The PR enhances the project's dependency management by updating the runframe package and adding necessary dependencies, ensuring compatibility and functionality. | ❌ |
| [#793](https://github.com/tscircuit/runframe/pull/793) | 🐌 Tiny | Updates dependencies in the package.json file to newer versions, ensuring compatibility and potentially improved functionality. | ❌ |
| [#786](https://github.com/tscircuit/runframe/pull/786) | 🐌 Tiny | Updating the version of the 3D viewer package enhances the project's dependencies, ensuring compatibility and potentially introducing new features or fixes from the updated package. | ❌ |
| [#79](https://github.com/tscircuit/docs/pull/79) | 🐌 Tiny | Enhances documentation for the `<schematictext />` component and ensures compliance with linting standards for the YouTube embed component. | ❌ |
| [#78](https://github.com/tscircuit/docs/pull/78) | 🐌 Tiny | Enhancing documentation clarity by completing sentences improves user understanding and usability. | ❌ |

### [MustafaMulla29](https://github.com/MustafaMulla29)

| PR # | Impact | Description | Milestone Aligned |
|------|--------|-------------|-------------------|
| [#10](https://github.com/tscircuit/sparkfun-boards/pull/10) | 🐳 Major | The addition of the HMC6343 Breakout board enhances the repository's offerings, providing users with a new component for their projects. | ❌ |
| [#982](https://github.com/tscircuit/core/pull/982) | 🐙 Minor | Enhancement of type definitions to include 'N_INT', improving type safety and clarity in the codebase. | ❌ |
| [#978](https://github.com/tscircuit/core/pull/978) | 🐙 Minor | Enhances the transistor functionality by adding access to MOSFET pin types, improving circuit design capabilities. | ❌ |
| [#164](https://github.com/tscircuit/tscircuit-autorouter/pull/164) | 🐙 Minor | Enhancements to node fixtures improve the autorouting functionality by addressing previously failed nodes. | ❌ |
| [#1347](https://github.com/tscircuit/tscircuit.com/pull/1347) | 🐌 Tiny | Updating the dependency version to resolve an import issue enhances the stability and functionality of the project. | ❌ |
| [#800](https://github.com/tscircuit/runframe/pull/800) | 🐌 Tiny | Updating the easyeda dependency to a newer version addresses a specific issue with part imports, enhancing functionality. | ❌ |
| [#13](https://github.com/tscircuit/sparkfun-boards/pull/13) | 🐌 Tiny | Updating the dependency version addresses type errors, ensuring better compatibility and functionality. | ❌ |

### [andrii-balitskyi](https://github.com/andrii-balitskyi)

| PR # | Impact | Description | Milestone Aligned |
|------|--------|-------------|-------------------|
| [#1360](https://github.com/tscircuit/tscircuit.com/pull/1360) | 🐙 Minor | Enhancements to SSR query caching improve data retrieval efficiency for package information. | ❌ |
| [#1315](https://github.com/tscircuit/tscircuit.com/pull/1315) | 🐙 Minor | Enhancements to error handling for dynamic imports improve user experience by automatically reloading the page on failure. | ❌ |
| [#1316](https://github.com/tscircuit/tscircuit.com/pull/1316) | 🐙 Minor | The addition of a Vercel-style SSR routing plugin enhances the development experience by enabling server-side rendering capabilities during local development. | ❌ |
| [#1320](https://github.com/tscircuit/tscircuit.com/pull/1320) | 🐙 Minor | Enhances the client application by implementing a build version checking mechanism that reloads the app when a new version is available. | ❌ |

### [ArnavK-09](https://github.com/ArnavK-09)

| PR # | Impact | Description | Milestone Aligned |
|------|--------|-------------|-------------------|
| [#1353](https://github.com/tscircuit/tscircuit.com/pull/1353) | 🐳 Major | Introducing a utility hook for keyboard shortcuts enhances user experience and code maintainability. | ❌ |
| [#1337](https://github.com/tscircuit/tscircuit.com/pull/1337) | 🐳 Major | Introducing a VSCode-style file switcher enhances user experience by streamlining file navigation within the editor. | ❌ |
| [#1363](https://github.com/tscircuit/tscircuit.com/pull/1363) | 🐙 Minor | Adjusts the dialog component to prevent it from taking full width on larger screens, enhancing user experience. | ❌ |
| [#1335](https://github.com/tscircuit/tscircuit.com/pull/1335) | 🐙 Minor | Enhances user experience by allowing dynamic font size adjustments in the code editor, mimicking popular IDE behavior. | ❌ |
| [#1357](https://github.com/tscircuit/tscircuit.com/pull/1357) | 🐙 Minor | Enhances the ImportantFilesView component by implementing client-side caching for file content, improving performance and user experience. | ❌ |
| [#1358](https://github.com/tscircuit/tscircuit.com/pull/1358) | 🐙 Minor | Enhancements to markdown content styling improve layout and responsiveness, contributing to a better user experience. | ❌ |
| [#1355](https://github.com/tscircuit/tscircuit.com/pull/1355) | 🐙 Minor | Enhancements to the dialog component improve its responsiveness and visual consistency with the theme, addressing a specific issue. | ❌ |
| [#1354](https://github.com/tscircuit/tscircuit.com/pull/1354) | 🐙 Minor | Filtering out hidden files enhances user experience by decluttering the file selection interface. | ❌ |
| [#1333](https://github.com/tscircuit/tscircuit.com/pull/1333) | 🐙 Minor | Hiding the edit button for AI-generated content enhances user experience by preventing unnecessary actions. | ❌ |
| [#1336](https://github.com/tscircuit/tscircuit.com/pull/1336) | 🐙 Minor | Enhancing user experience by enabling Tab key for autocompletion in the code editor. | ❌ |
| [#1334](https://github.com/tscircuit/tscircuit.com/pull/1334) | 🐙 Minor | Enhancements to the AI review interface significantly improve user experience and interaction. | ❌ |
| [#1338](https://github.com/tscircuit/tscircuit.com/pull/1338) | 🐙 Minor | Enhances user experience by introducing a keyboard shortcut for toggling the files sidebar, similar to popular code editors. | ❌ |
| [#1332](https://github.com/tscircuit/tscircuit.com/pull/1332) | 🐙 Minor | Enhances user interaction by allowing users to re-request AI reviews directly from the interface. | ❌ |
| [#1330](https://github.com/tscircuit/tscircuit.com/pull/1330) | 🐙 Minor | Enhancement of user experience on small screens by adding a dedicated releases section. | ❌ |
| [#1331](https://github.com/tscircuit/tscircuit.com/pull/1331) | 🐙 Minor | Adjusts the z-index of the Download dropdown to ensure proper visibility and functionality in the UI. | ❌ |
| [#1307](https://github.com/tscircuit/tscircuit.com/pull/1307) | 🐙 Minor | Enhances the SEO capabilities by allowing dynamic selection of the Open Graph image based on the package's default view. | ❌ |
| [#1310](https://github.com/tscircuit/tscircuit.com/pull/1310) | 🐙 Minor | Enhancements to caching and refetching behavior improve the editor's responsiveness after saving changes. | ❌ |
| [#1313](https://github.com/tscircuit/tscircuit.com/pull/1313) | 🐙 Minor | Introduces a new feature for downloading PNG images of circuit designs, enhancing user functionality. | ❌ |
| [#1348](https://github.com/tscircuit/tscircuit.com/pull/1348) | 🐌 Tiny | Adding a home link to the header enhances navigation and user experience. | ❌ |

### [tscircuitbot](https://github.com/tscircuitbot)

| PR # | Impact | Description | Milestone Aligned |
|------|--------|-------------|-------------------|
| [#575](https://github.com/tscircuit/eval/pull/575) | 🐌 Tiny | Updating dependencies is essential for maintaining the health and performance of the project. | ❌ |
| [#563](https://github.com/tscircuit/eval/pull/563) | 🐌 Tiny | Updating the core library version enhances compatibility and may include important bug fixes or improvements. | ❌ |
| [#546](https://github.com/tscircuit/eval/pull/546) | 🐌 Tiny | Updating the core library version enhances compatibility and may include important bug fixes or improvements. | ❌ |
| [#536](https://github.com/tscircuit/eval/pull/536) | 🐌 Tiny | Updating dependencies is essential for maintaining project health and ensuring compatibility with other packages. | ❌ |

## Repository Owners

| Repository | Codeowners |
|------------|------------|
| [footprinter](https://github.com/tscircuit/footprinter/blob/main/.github/CODEOWNERS) | [seveibar](https://github.com/seveibar), [techmannih](https://github.com/techmannih) |
| [winterspec](https://github.com/tscircuit/winterspec/blob/main/.github/CODEOWNERS) | [seveibar](https://github.com/seveibar) |
| [tscircuit.com](https://github.com/tscircuit/tscircuit.com/blob/main/.github/CODEOWNERS) | [seveibar](https://github.com/seveibar), [imrishabh18](https://github.com/imrishabh18) |
| [cli](https://github.com/tscircuit/cli/blob/main/.github/CODEOWNERS) | [seveibar](https://github.com/seveibar), [imrishabh18](https://github.com/imrishabh18) |
| [circuit-to-svg](https://github.com/tscircuit/circuit-to-svg/blob/main/.github/CODEOWNERS) | [imrishabh18](https://github.com/imrishabh18) |
| [schematic-symbols](https://github.com/tscircuit/schematic-symbols/blob/main/.github/CODEOWNERS) | [imrishabh18](https://github.com/imrishabh18) |

## Repos by Owner

| User | Repo |
|------|------|
| [seveibar](https://github.com/seveibar) | [footprinter](https://github.com/tscircuit/footprinter/blob/main/.github/CODEOWNERS) |
|  | [winterspec](https://github.com/tscircuit/winterspec/blob/main/.github/CODEOWNERS) |
|  | [tscircuit.com](https://github.com/tscircuit/tscircuit.com/blob/main/.github/CODEOWNERS) |
|  | [cli](https://github.com/tscircuit/cli/blob/main/.github/CODEOWNERS) |
| [imrishabh18](https://github.com/imrishabh18) | [circuit-to-svg](https://github.com/tscircuit/circuit-to-svg/blob/main/.github/CODEOWNERS) |
|  | [schematic-symbols](https://github.com/tscircuit/schematic-symbols/blob/main/.github/CODEOWNERS) |
|  | [tscircuit.com](https://github.com/tscircuit/tscircuit.com/blob/main/.github/CODEOWNERS) |
|  | [cli](https://github.com/tscircuit/cli/blob/main/.github/CODEOWNERS) |
| [techmannih](https://github.com/techmannih) | [footprinter](https://github.com/tscircuit/footprinter/blob/main/.github/CODEOWNERS) |



<!-- END_CURRENT_WEEK -->
