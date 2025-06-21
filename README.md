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

# Contribution Overview 2025-06-18

## PRs by Repository

```mermaid
pie
    "tscircuit/core" : 22
    "tscircuit/bpc-graph" : 1
    "tscircuit/schematic-viewer" : 2
    "tscircuit/circuit-json" : 1
    "tscircuit/props" : 6
    "tscircuit/footprinter" : 1
    "tscircuit/runframe" : 6
    "tscircuit/cli" : 10
    "tscircuit/docs" : 9
    "tscircuit/parts-engine" : 2
    "tscircuit/deps.tscircuit.com" : 15
    "tscircuit/circuit-to-svg" : 1
    "tscircuit/tscircuit.com" : 12
    "tscircuit/3d-viewer" : 2
    "tscircuit/tscircuit-autorouter" : 1
    "tscircuit/sparkfun-boards" : 5
    "tscircuit/tscircuit" : 1
    "tscircuit/easyeda-converter" : 2
    "tscircuit/schematic-symbols" : 1
    "tscircuit/eval" : 5
```

## Contributor Overview

| Contributor | 🐳 Major | 🐙 Minor | 🐌 Tiny | ⭐ | Issues Created | Discussion Contributions |
|-------------|---------|---------|---------|-----|----------------|--------------------------|
| [seveibar](#seveibar) | 2 | 33 | 9 | 👑👑 | 0 | 0🔹 0🔶 0💎 |
| [imrishabh18](#imrishabh18) | 0 | 16 | 6 | ⭐⭐⭐ | 0 | 0🔹 0🔶 0💎 |
| [ShiboSoftwareDev](#ShiboSoftwareDev) | 0 | 9 | 3 | ⭐⭐ | 9 | 0🔹 0🔶 0💎 |
| [techmannih](#techmannih) | 2 | 5 | 1 | ⭐⭐ | 2 | 0🔹 0🔶 0💎 |
| [Abse2001](#Abse2001) | 1 | 1 | 4 | ⭐ | 0 | 0🔹 0🔶 0💎 |
| [Anshgrover23](#Anshgrover23) | 0 | 3 | 2 | ⭐ | 5 | 0🔹 0🔶 0💎 |
| [ArnavK-09](#ArnavK-09) | 0 | 3 | 0 | ⭐ | 2 | 0🔹 0🔶 0💎 |
| [MustafaMulla29](#MustafaMulla29) | 1 | 0 | 1 | ⭐ | 0 | 0🔹 0🔶 0💎 |
| [tscircuitbot](#tscircuitbot) | 0 | 0 | 3 |  | 0 | 0🔹 0🔶 0💎 |

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
| [seveibar](#seveibar) | 19 | 1 | 0 | 43 | 3 | 60 | 44 | 0 | 0 | 0 |
| [Abse2001](#Abse2001) | 9 | 8 | 0 | 0 | 0 | 8 | 6 | 0 | 0 | 0 |
| [imrishabh18](#imrishabh18) | 11 | 9 | 0 | 6 | 0 | 25 | 23 | 0 | 0 | 0 |
| [ShiboSoftwareDev](#ShiboSoftwareDev) | 21 | 14 | 0 | 5 | 0 | 15 | 12 | 9 | 0 | 0 |
| [graphite-app[bot]](#graphite-app[bot]) | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| [Anshgrover23](#Anshgrover23) | 13 | 9 | 1 | 2 | 1 | 6 | 5 | 5 | 0 | 0 |
| [techmannih](#techmannih) | 21 | 9 | 3 | 2 | 1 | 12 | 8 | 2 | 0 | 0 |
| [cursor[bot]](#cursor[bot]) | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| [andrii-balitskyi](#andrii-balitskyi) | 6 | 3 | 0 | 0 | 0 | 3 | 0 | 0 | 0 | 0 |
| [ArnavK-09](#ArnavK-09) | 4 | 3 | 0 | 2 | 0 | 3 | 3 | 2 | 0 | 0 |
| [tscircuitbot](#tscircuitbot) | 0 | 0 | 0 | 0 | 0 | 41 | 3 | 0 | 0 | 0 |
| [MustafaMulla29](#MustafaMulla29) | 6 | 4 | 1 | 0 | 0 | 2 | 2 | 0 | 0 | 0 |

## Changes by Repository

### [tscircuit/core](https://github.com/tscircuit/core)

| PR # | Impact | Contributor | Description | Milestone Aligned |
|------|--------|-------------|-------------|-------------------|
| [#960](https://github.com/tscircuit/core/pull/960) | 🐳 Major | seveibar | Enhancements to jumper and chip selectors improve functionality for keyboard building. | ✅ |
| [#956](https://github.com/tscircuit/core/pull/956) | 🐳 Major | Abse2001 | Enhances the selector functionality by adding support for J references, improving usability for keyboard building. | ✅ |
| [#967](https://github.com/tscircuit/core/pull/967) | 🐳 Major | techmannih | Enhancement of the selector functionality by adding support for a new component type, improving flexibility in component selection. | ✅ |
| [#972](https://github.com/tscircuit/core/pull/972) | 🐙 Minor | seveibar | Enhancements to schematic width handling improve user customization and functionality. | ❌ |
| [#961](https://github.com/tscircuit/core/pull/961) | 🐙 Minor | seveibar | Enhancements to error messaging for unresolved port selectors significantly improve debugging and user experience. | ❌ |
| [#959](https://github.com/tscircuit/core/pull/959) | 🐙 Minor | seveibar | Enhancements to the `sel` function allow for dynamic reference designator usage, improving flexibility in design. | ❌ |
| [#957](https://github.com/tscircuit/core/pull/957) | 🐙 Minor | seveibar | Enhancement of netlabel functionality to support multiple connections, improving flexibility in circuit design. | ❌ |
| [#951](https://github.com/tscircuit/core/pull/951) | 🐙 Minor | seveibar | Enhancements to netlabel functionality improve circuit design capabilities by allowing dynamic net creation and trace generation based on connections. | ❌ |
| [#950](https://github.com/tscircuit/core/pull/950) | 🐙 Minor | seveibar | Enhancements to trace connections improve schematic accuracy and usability. | ❌ |
| [#948](https://github.com/tscircuit/core/pull/948) | 🐙 Minor | seveibar | The removal of the deprecated NetAlias component and its replacement with the new NetLabel component enhances code clarity and maintainability. | ❌ |
| [#963](https://github.com/tscircuit/core/pull/963) | 🐙 Minor | ShiboSoftwareDev | Enhancements to the SolderJumper component for better pin labeling and handling of bridged pins. | ❌ |
| [#954](https://github.com/tscircuit/core/pull/954) | 🐙 Minor | Anshgrover23 | Enhances the SchematicText component by ensuring default values for position properties, improving robustness. | ❌ |
| [#971](https://github.com/tscircuit/core/pull/971) | 🐙 Minor | techmannih | Enhancement of the crystal component to include load capacitance display, improving user information. | ❌ |
| [#949](https://github.com/tscircuit/core/pull/949) | 🐙 Minor | imrishabh18 | Enhancements to component naming and rendering improve usability and error handling in the circuit design process. | ❌ |
| [#965](https://github.com/tscircuit/core/pull/965) | 🐙 Minor | imrishabh18 | Enhances the Group component by ensuring that subcircuit_id is only set for subcircuit groups, improving data integrity. | ❌ |
| [#964](https://github.com/tscircuit/core/pull/964) | 🐙 Minor | imrishabh18 | Introducing a new render phase enhances the rendering capabilities of the library, allowing for better management of subcircuits. | ❌ |
| [#962](https://github.com/tscircuit/core/pull/962) | 🐙 Minor | imrishabh18 | Enhancement of route JSON generation by incorporating subcircuit padding, improving layout accuracy. | ❌ |
| [#947](https://github.com/tscircuit/core/pull/947) | 🐙 Minor | imrishabh18 | Enhancement of PCB layout capabilities by introducing padding support for subcircuits in the Group component. | ❌ |
| [#938](https://github.com/tscircuit/core/pull/938) | 🐙 Minor | imrishabh18 | Enhancements to net label lookup improve circuit functionality and testing reliability. | ❌ |
| [#955](https://github.com/tscircuit/core/pull/955) | 🐌 Tiny | seveibar | The addition of a configuration to disable the lockfile in the project enhances flexibility in dependency management. | ❌ |
| [#946](https://github.com/tscircuit/core/pull/946) | 🐌 Tiny | seveibar | Enhancements to testing capabilities for netalias connections improve code reliability and maintainability. | ❌ |
| [#953](https://github.com/tscircuit/core/pull/953) | 🐌 Tiny | Anshgrover23 | Updating the dependency version for props enhances compatibility and ensures the latest features and fixes are utilized. | ❌ |

### [tscircuit/bpc-graph](https://github.com/tscircuit/bpc-graph)

| PR # | Impact | Contributor | Description | Milestone Aligned |
|------|--------|-------------|-------------|-------------------|
| [#2](https://github.com/tscircuit/bpc-graph/pull/2) | 🐳 Major | seveibar | Enhancements to the graph transformation logic with A* algorithm integration for improved operation cost calculations. | ❌ |

### [tscircuit/schematic-viewer](https://github.com/tscircuit/schematic-viewer)

| PR # | Impact | Contributor | Description | Milestone Aligned |
|------|--------|-------------|-------------|-------------------|
| [#97](https://github.com/tscircuit/schematic-viewer/pull/97) | 🐙 Minor | seveibar | Enhancing user experience by introducing a grid snap feature for component dragging in edit mode. | ❌ |
| [#98](https://github.com/tscircuit/schematic-viewer/pull/98) | 🐌 Tiny | Abse2001 | Updating the dependency version for circuit-to-svg enhances compatibility and potentially introduces new features or fixes. | ❌ |

### [tscircuit/circuit-json](https://github.com/tscircuit/circuit-json)

| PR # | Impact | Contributor | Description | Milestone Aligned |
|------|--------|-------------|-------------|-------------------|
| [#232](https://github.com/tscircuit/circuit-json/pull/232) | 🐙 Minor | seveibar | The removal of the default value for `is_movable` enhances the flexibility of net labels in schematic designs, allowing for more precise control over their positioning. | ❌ |

### [tscircuit/props](https://github.com/tscircuit/props)

| PR # | Impact | Contributor | Description | Milestone Aligned |
|------|--------|-------------|-------------|-------------------|
| [#296](https://github.com/tscircuit/props/pull/296) | 🐙 Minor | seveibar | Enhancement of component properties to support schematic orientation, improving usability in circuit design. | ❌ |
| [#295](https://github.com/tscircuit/props/pull/295) | 🐙 Minor | seveibar | Enhancing the jumper component with a new connections property significantly improves its functionality and flexibility. | ❌ |
| [#291](https://github.com/tscircuit/props/pull/291) | 🐙 Minor | seveibar | Enhancing the `connectsTo` property to accept both string and array types improves flexibility in component connections. | ❌ |
| [#293](https://github.com/tscircuit/props/pull/293) | 🐙 Minor | Anshgrover23 | Enhancing flexibility in component properties by making schX and schY optional improves usability and testing coverage. | ❌ |
| [#292](https://github.com/tscircuit/props/pull/292) | 🐙 Minor | Anshgrover23 | Enhancements to the PinHeaderProps interface by adding new properties for schematic dimensions and styles, improving flexibility in component usage. | ❌ |
| [#294](https://github.com/tscircuit/props/pull/294) | 🐌 Tiny | seveibar | Clarification of documentation for better understanding of the `internallyConnectedPins` property. | ❌ |

### [tscircuit/footprinter](https://github.com/tscircuit/footprinter)

| PR # | Impact | Contributor | Description | Milestone Aligned |
|------|--------|-------------|-------------|-------------------|
| [#302](https://github.com/tscircuit/footprinter/pull/302) | 🐙 Minor | seveibar | Introducing circular pads enhances the flexibility and design options for BGA footprints, catering to diverse PCB design needs. | ❌ |

### [tscircuit/runframe](https://github.com/tscircuit/runframe)

| PR # | Impact | Contributor | Description | Milestone Aligned |
|------|--------|-------------|-------------|-------------------|
| [#783](https://github.com/tscircuit/runframe/pull/783) | 🐙 Minor | seveibar | Enhancement of user interface by displaying the last run evaluation version, improving user awareness of the current evaluation context. | ❌ |
| [#781](https://github.com/tscircuit/runframe/pull/781) | 🐙 Minor | imrishabh18 | Elevating the OrderDialog's z-index enhances its visibility and usability in the UI. | ❌ |
| [#780](https://github.com/tscircuit/runframe/pull/780) | 🐙 Minor | imrishabh18 | Enhancing error tracking in the order dialog improves overall application reliability and user experience. | ❌ |
| [#790](https://github.com/tscircuit/runframe/pull/790) | 🐌 Tiny | Abse2001 | Updating the version of a dependency in the package.json file enhances the project's stability and ensures compatibility with the latest features or fixes. | ❌ |
| [#793](https://github.com/tscircuit/runframe/pull/793) | 🐌 Tiny | imrishabh18 | Updates dependencies in the package.json file, ensuring the project uses the latest versions of specific libraries. | ❌ |
| [#786](https://github.com/tscircuit/runframe/pull/786) | 🐌 Tiny | imrishabh18 | Updating the version of the 3D viewer package enhances the project's dependencies and ensures compatibility with the latest features or fixes. | ❌ |

### [tscircuit/cli](https://github.com/tscircuit/cli)

| PR # | Impact | Contributor | Description | Milestone Aligned |
|------|--------|-------------|-------------|-------------------|
| [#243](https://github.com/tscircuit/cli/pull/243) | 🐙 Minor | seveibar | Enhances the snapshot functionality by allowing users to generate snapshots for individual files, improving usability and flexibility. | ❌ |
| [#236](https://github.com/tscircuit/cli/pull/236) | 🐙 Minor | seveibar | Enhancements to snapshot functionality provide users with more control over the output of PCB and schematic snapshots. | ❌ |
| [#234](https://github.com/tscircuit/cli/pull/234) | 🐙 Minor | seveibar | Enhancements to logging provide better visibility into snapshot creation processes. | ❌ |
| [#245](https://github.com/tscircuit/cli/pull/245) | 🐙 Minor | ShiboSoftwareDev | Fixes a regression that caused the snapshot command to malfunction by checking irrelevant index files, enhancing the command's reliability. | ❌ |
| [#244](https://github.com/tscircuit/cli/pull/244) | 🐙 Minor | ShiboSoftwareDev | Enhancements to the snapshot workflow improve clarity and functionality during GitHub actions. | ❌ |
| [#241](https://github.com/tscircuit/cli/pull/241) | 🐙 Minor | ShiboSoftwareDev | Refactoring of configuration logic enhances clarity and maintainability, allowing for both global and project-specific settings. | ❌ |
| [#237](https://github.com/tscircuit/cli/pull/237) | 🐙 Minor | ShiboSoftwareDev | Enhances cross-platform compatibility by enabling the snapshot command to function on Windows machines. | ❌ |
| [#233](https://github.com/tscircuit/cli/pull/233) | 🐙 Minor | imrishabh18 | Renaming the configuration entry field enhances clarity and consistency in the codebase. | ❌ |
| [#242](https://github.com/tscircuit/cli/pull/242) | 🐌 Tiny | Abse2001 | Updating the dependency version for improved functionality or bug fixes. | ❌ |
| [#239](https://github.com/tscircuit/cli/pull/239) | 🐌 Tiny | ShiboSoftwareDev | The pull request updates several dependencies in the project, which is essential for maintaining compatibility and leveraging improvements from the latest versions. | ❌ |

### [tscircuit/docs](https://github.com/tscircuit/docs)

| PR # | Impact | Contributor | Description | Milestone Aligned |
|------|--------|-------------|-------------|-------------------|
| [#81](https://github.com/tscircuit/docs/pull/81) | 🐙 Minor | seveibar | Enhancements to the CircuitPreview component allow for a more flexible display of circuit information, improving user experience. | ❌ |
| [#76](https://github.com/tscircuit/docs/pull/76) | 🐙 Minor | seveibar | The addition of the `<netlabel />` element enhances documentation clarity and usability for users working with schematic designs. | ❌ |
| [#79](https://github.com/tscircuit/docs/pull/79) | 🐙 Minor | imrishabh18 | Enhances documentation for the `<schematictext />` component and ensures compliance with linting standards for the YouTube embed component. | ❌ |
| [#74](https://github.com/tscircuit/docs/pull/74) | 🐙 Minor | imrishabh18 | The addition of a comprehensive ordering section enhances user experience by streamlining the prototype ordering process. | ❌ |
| [#82](https://github.com/tscircuit/docs/pull/82) | 🐌 Tiny | seveibar | Enhancing documentation for the `sel()` function improves usability and understanding for developers. | ❌ |
| [#80](https://github.com/tscircuit/docs/pull/80) | 🐌 Tiny | seveibar | Enhancements to documentation for the `<jumper />` component improve clarity and usability for developers. | ❌ |
| [#77](https://github.com/tscircuit/docs/pull/77) | 🐌 Tiny | seveibar | Enhances TypeScript configuration documentation and updates a dependency for improved functionality. | ❌ |
| [#75](https://github.com/tscircuit/docs/pull/75) | 🐌 Tiny | seveibar | Enhancing documentation for build and snapshot commands significantly improves user understanding and usability of the tool. | ❌ |
| [#78](https://github.com/tscircuit/docs/pull/78) | 🐌 Tiny | imrishabh18 | Enhancing documentation clarity by completing sentences improves user understanding and usability. | ❌ |

### [tscircuit/parts-engine](https://github.com/tscircuit/parts-engine)

| PR # | Impact | Contributor | Description | Milestone Aligned |
|------|--------|-------------|-------------|-------------------|
| [#7](https://github.com/tscircuit/parts-engine/pull/7) | 🐙 Minor | seveibar | Enhancing the API's resilience by ensuring it returns an empty part list when data is missing adds robustness to the application. | ❌ |
| [#5](https://github.com/tscircuit/parts-engine/pull/5) | 🐙 Minor | techmannih | Enhancement of the parts engine to include support for simple fuse components, improving its functionality. | ❌ |

### [tscircuit/deps.tscircuit.com](https://github.com/tscircuit/deps.tscircuit.com)

| PR # | Impact | Contributor | Description | Milestone Aligned |
|------|--------|-------------|-------------|-------------------|
| [#19](https://github.com/tscircuit/deps.tscircuit.com/pull/19) | 🐙 Minor | seveibar | Enhances the package categorization by mapping 'tscircuit/checks' to the Core Utility category, improving clarity and organization. | ❌ |
| [#18](https://github.com/tscircuit/deps.tscircuit.com/pull/18) | 🐙 Minor | seveibar | Enhances the dependency graph by categorizing the parts-engine as a core utility, improving project organization. | ❌ |
| [#17](https://github.com/tscircuit/deps.tscircuit.com/pull/17) | 🐙 Minor | seveibar | Enhancements to category mapping improve the organization and classification of packages within the project. | ❌ |
| [#14](https://github.com/tscircuit/deps.tscircuit.com/pull/14) | 🐙 Minor | seveibar | Enhances the user interface by introducing a category filter for better navigation and organization of package dependencies. | ❌ |
| [#13](https://github.com/tscircuit/deps.tscircuit.com/pull/13) | 🐙 Minor | seveibar | Enhancements to dependency management by incorporating peerDependencies into the dependency graph. | ❌ |
| [#12](https://github.com/tscircuit/deps.tscircuit.com/pull/12) | 🐙 Minor | seveibar | Enhancing node visualization by introducing color coding based on incoming edge severity improves user experience and debugging capabilities. | ❌ |
| [#10](https://github.com/tscircuit/deps.tscircuit.com/pull/10) | 🐙 Minor | seveibar | Enhancement of dependency visualization through dynamic edge coloring based on version differences. | ❌ |
| [#8](https://github.com/tscircuit/deps.tscircuit.com/pull/8) | 🐙 Minor | seveibar | Enhancements to the dependency graph functionality improve user experience by retaining node positions and adding a reset option. | ❌ |
| [#7](https://github.com/tscircuit/deps.tscircuit.com/pull/7) | 🐙 Minor | seveibar | Enhancing the display of dependency information improves user experience and clarity in dependency management. | ❌ |
| [#9](https://github.com/tscircuit/deps.tscircuit.com/pull/9) | 🐙 Minor | seveibar | Enhancing the dependency graph by adding more GitHub repositories improves visibility and resource management. | ❌ |
| [#6](https://github.com/tscircuit/deps.tscircuit.com/pull/6) | 🐙 Minor | seveibar | Enhancements to project metadata and dependency inclusion improve clarity and functionality. | ❌ |
| [#3](https://github.com/tscircuit/deps.tscircuit.com/pull/3) | 🐙 Minor | seveibar | Enhances user interaction by allowing nodes and edges in the dependency graph to be draggable, improving the overall usability of the component. | ❌ |
| [#2](https://github.com/tscircuit/deps.tscircuit.com/pull/2) | 🐙 Minor | seveibar | Enhancements to the dependency graph by displaying the last update timestamp of package.json files, improving user awareness of dependency freshness. | ❌ |
| [#5](https://github.com/tscircuit/deps.tscircuit.com/pull/5) | 🐌 Tiny | seveibar | Enhancements to the dependency edge display improve visual feedback on version compliance. | ❌ |
| [#4](https://github.com/tscircuit/deps.tscircuit.com/pull/4) | 🐌 Tiny | seveibar | Enhancing documentation with a GitHub badge and updating a dependency version improves project visibility and maintenance. | ❌ |

### [tscircuit/circuit-to-svg](https://github.com/tscircuit/circuit-to-svg)

| PR # | Impact | Contributor | Description | Milestone Aligned |
|------|--------|-------------|-------------|-------------------|
| [#261](https://github.com/tscircuit/circuit-to-svg/pull/261) | 🐙 Minor | Abse2001 | Enhancement of SVG rendering by ensuring stroke width remains consistent regardless of scaling transformations. | ❌ |

### [tscircuit/tscircuit.com](https://github.com/tscircuit/tscircuit.com)

| PR # | Impact | Contributor | Description | Milestone Aligned |
|------|--------|-------------|-------------|-------------------|
| [#1312](https://github.com/tscircuit/tscircuit.com/pull/1312) | 🐙 Minor | ShiboSoftwareDev | Enhancement of the user interface for better interaction with tree actions. | ❌ |
| [#1328](https://github.com/tscircuit/tscircuit.com/pull/1328) | 🐙 Minor | imrishabh18 | Enhancements to the build status indicators improve clarity and user experience in the sidebar release section. | ❌ |
| [#1317](https://github.com/tscircuit/tscircuit.com/pull/1317) | 🐙 Minor | imrishabh18 | Enhancing the dropdown width improves user experience by accommodating longer file names and providing better accessibility. | ❌ |
| [#1307](https://github.com/tscircuit/tscircuit.com/pull/1307) | 🐙 Minor | ArnavK-09 | Enhances the SEO capabilities by allowing dynamic selection of the Open Graph image based on the package's default view. | ❌ |
| [#1310](https://github.com/tscircuit/tscircuit.com/pull/1310) | 🐙 Minor | ArnavK-09 | Enhancements to caching and refetching behavior improve the editor's responsiveness after saving changes. | ❌ |
| [#1313](https://github.com/tscircuit/tscircuit.com/pull/1313) | 🐙 Minor | ArnavK-09 | Introduces a new feature for downloading PNG images of circuit designs, enhancing user functionality. | ❌ |
| [#1329](https://github.com/tscircuit/tscircuit.com/pull/1329) | 🐌 Tiny | Abse2001 | Updating the dependency version for improved functionality or bug fixes. | ❌ |
| [#1323](https://github.com/tscircuit/tscircuit.com/pull/1323) | 🐌 Tiny | Anshgrover23 | Updating dependencies enhances the stability and performance of the project by ensuring compatibility with the latest features and fixes. | ❌ |
| [#1322](https://github.com/tscircuit/tscircuit.com/pull/1322) | 🐌 Tiny | techmannih | Updating the easyeda dependency to a newer version enhances the project's compatibility and may include important bug fixes or improvements. | ❌ |
| [#1324](https://github.com/tscircuit/tscircuit.com/pull/1324) | 🐌 Tiny | imrishabh18 | Updates the version of the @tscircuit/runframe package to enhance functionality. | ❌ |
| [#1318](https://github.com/tscircuit/tscircuit.com/pull/1318) | 🐌 Tiny | imrishabh18 | Updating the runframe package to fix a z-index dialog issue enhances the UI functionality. | ❌ |
| [#1314](https://github.com/tscircuit/tscircuit.com/pull/1314) | 🐌 Tiny | imrishabh18 | The PR updates the package.json file to include new dependencies and adjust existing ones, ensuring compatibility and functionality of the project. | ❌ |

### [tscircuit/3d-viewer](https://github.com/tscircuit/3d-viewer)

| PR # | Impact | Contributor | Description | Milestone Aligned |
|------|--------|-------------|-------------|-------------------|
| [#355](https://github.com/tscircuit/3d-viewer/pull/355) | 🐙 Minor | ShiboSoftwareDev | Enhancement of the manifold processing capabilities to support pill-shaped plated holes, improving design flexibility. | ❌ |
| [#350](https://github.com/tscircuit/3d-viewer/pull/350) | 🐙 Minor | imrishabh18 | Loading the Manifold WASM module from a CDN enhances the application's performance and reduces local resource dependency. | ❌ |

### [tscircuit/tscircuit-autorouter](https://github.com/tscircuit/tscircuit-autorouter)

| PR # | Impact | Contributor | Description | Milestone Aligned |
|------|--------|-------------|-------------|-------------------|
| [#156](https://github.com/tscircuit/tscircuit-autorouter/pull/156) | 🐙 Minor | ShiboSoftwareDev | The addition of high-density node input data and a corresponding solver fixture enhances the testing and functionality of the autorouting feature. | ❌ |

### [tscircuit/sparkfun-boards](https://github.com/tscircuit/sparkfun-boards)

| PR # | Impact | Contributor | Description | Milestone Aligned |
|------|--------|-------------|-------------|-------------------|
| [#5](https://github.com/tscircuit/sparkfun-boards/pull/5) | 🐳 Major | techmannih | The addition of the SparkFun USB to Serial Breakout FT232RL enhances the repository by providing a new component for users, facilitating USB to serial communication in their projects. | ❌ |
| [#10](https://github.com/tscircuit/sparkfun-boards/pull/10) | 🐳 Major | MustafaMulla29 | The addition of the HMC6343 breakout board enhances the repository's offerings, providing users with new hardware integration options. | ❌ |
| [#8](https://github.com/tscircuit/sparkfun-boards/pull/8) | 🐙 Minor | ShiboSoftwareDev | Introduces a new component for the MCP4725 I2C DAC, enhancing the library's functionality. | ❌ |
| [#9](https://github.com/tscircuit/sparkfun-boards/pull/9) | 🐌 Tiny | ShiboSoftwareDev | Introduces new workflows for building and snapshotting TSCircuit projects, enhancing CI/CD capabilities. | ❌ |
| [#13](https://github.com/tscircuit/sparkfun-boards/pull/13) | 🐌 Tiny | MustafaMulla29 | Updating the dependency version addresses type errors, ensuring better compatibility and functionality. | ❌ |

### [tscircuit/tscircuit](https://github.com/tscircuit/tscircuit)

| PR # | Impact | Contributor | Description | Milestone Aligned |
|------|--------|-------------|-------------|-------------------|
| [#688](https://github.com/tscircuit/tscircuit/pull/688) | 🐌 Tiny | ShiboSoftwareDev | Updating dependencies to their latest versions enhances the stability and security of the project. | ❌ |

### [tscircuit/easyeda-converter](https://github.com/tscircuit/easyeda-converter)

| PR # | Impact | Contributor | Description | Milestone Aligned |
|------|--------|-------------|-------------|-------------------|
| [#254](https://github.com/tscircuit/easyeda-converter/pull/254) | 🐙 Minor | techmannih | The changes enhance the import functionality for a specific component, improving compatibility and reliability in the conversion process. | ❌ |
| [#255](https://github.com/tscircuit/easyeda-converter/pull/255) | 🐙 Minor | techmannih | Addresses a specific import failure issue related to a JLCPCB part, enhancing the functionality of the converter. | ❌ |

### [tscircuit/schematic-symbols](https://github.com/tscircuit/schematic-symbols)

| PR # | Impact | Contributor | Description | Milestone Aligned |
|------|--------|-------------|-------------|-------------------|
| [#309](https://github.com/tscircuit/schematic-symbols/pull/309) | 🐙 Minor | techmannih | Enhancements to the crystal symbol variations improve usability and flexibility in schematic designs. | ❌ |

### [tscircuit/eval](https://github.com/tscircuit/eval)

| PR # | Impact | Contributor | Description | Milestone Aligned |
|------|--------|-------------|-------------|-------------------|
| [#537](https://github.com/tscircuit/eval/pull/537) | 🐙 Minor | imrishabh18 | Enhancing configuration handling by setting the entry point based on the parsed configuration file improves the flexibility and usability of the code. | ❌ |
| [#528](https://github.com/tscircuit/eval/pull/528) | 🐙 Minor | imrishabh18 | Enhances the configuration parsing by allowing the main component path to be specified in the tscircuit.config.js file. | ❌ |
| [#563](https://github.com/tscircuit/eval/pull/563) | 🐌 Tiny | tscircuitbot | Updating the core library version enhances compatibility and may include important bug fixes or improvements. | ❌ |
| [#546](https://github.com/tscircuit/eval/pull/546) | 🐌 Tiny | tscircuitbot | Updating the core library version enhances compatibility and may include important bug fixes or improvements. | ❌ |
| [#536](https://github.com/tscircuit/eval/pull/536) | 🐌 Tiny | tscircuitbot | Updating dependencies is essential for maintaining project health and ensuring compatibility with other packages. | ❌ |

## Changes by Contributor

### [seveibar](https://github.com/seveibar)

| PR # | Impact | Description | Milestone Aligned |
|------|--------|-------------|-------------------|
| [#960](https://github.com/tscircuit/core/pull/960) | 🐳 Major | Enhancements to jumper and chip selectors improve functionality for keyboard building. | ✅ |
| [#2](https://github.com/tscircuit/bpc-graph/pull/2) | 🐳 Major | Enhancements to the graph transformation logic with A* algorithm integration for improved operation cost calculations. | ❌ |
| [#97](https://github.com/tscircuit/schematic-viewer/pull/97) | 🐙 Minor | Enhancing user experience by introducing a grid snap feature for component dragging in edit mode. | ❌ |
| [#232](https://github.com/tscircuit/circuit-json/pull/232) | 🐙 Minor | The removal of the default value for `is_movable` enhances the flexibility of net labels in schematic designs, allowing for more precise control over their positioning. | ❌ |
| [#296](https://github.com/tscircuit/props/pull/296) | 🐙 Minor | Enhancement of component properties to support schematic orientation, improving usability in circuit design. | ❌ |
| [#295](https://github.com/tscircuit/props/pull/295) | 🐙 Minor | Enhancing the jumper component with a new connections property significantly improves its functionality and flexibility. | ❌ |
| [#291](https://github.com/tscircuit/props/pull/291) | 🐙 Minor | Enhancing the `connectsTo` property to accept both string and array types improves flexibility in component connections. | ❌ |
| [#302](https://github.com/tscircuit/footprinter/pull/302) | 🐙 Minor | Introducing circular pads enhances the flexibility and design options for BGA footprints, catering to diverse PCB design needs. | ❌ |
| [#972](https://github.com/tscircuit/core/pull/972) | 🐙 Minor | Enhancements to schematic width handling improve user customization and functionality. | ❌ |
| [#961](https://github.com/tscircuit/core/pull/961) | 🐙 Minor | Enhancements to error messaging for unresolved port selectors significantly improve debugging and user experience. | ❌ |
| [#959](https://github.com/tscircuit/core/pull/959) | 🐙 Minor | Enhancements to the `sel` function allow for dynamic reference designator usage, improving flexibility in design. | ❌ |
| [#957](https://github.com/tscircuit/core/pull/957) | 🐙 Minor | Enhancement of netlabel functionality to support multiple connections, improving flexibility in circuit design. | ❌ |
| [#951](https://github.com/tscircuit/core/pull/951) | 🐙 Minor | Enhancements to netlabel functionality improve circuit design capabilities by allowing dynamic net creation and trace generation based on connections. | ❌ |
| [#950](https://github.com/tscircuit/core/pull/950) | 🐙 Minor | Enhancements to trace connections improve schematic accuracy and usability. | ❌ |
| [#948](https://github.com/tscircuit/core/pull/948) | 🐙 Minor | The removal of the deprecated NetAlias component and its replacement with the new NetLabel component enhances code clarity and maintainability. | ❌ |
| [#783](https://github.com/tscircuit/runframe/pull/783) | 🐙 Minor | Enhancement of user interface by displaying the last run evaluation version, improving user awareness of the current evaluation context. | ❌ |
| [#243](https://github.com/tscircuit/cli/pull/243) | 🐙 Minor | Enhances the snapshot functionality by allowing users to generate snapshots for individual files, improving usability and flexibility. | ❌ |
| [#236](https://github.com/tscircuit/cli/pull/236) | 🐙 Minor | Enhancements to snapshot functionality provide users with more control over the output of PCB and schematic snapshots. | ❌ |
| [#234](https://github.com/tscircuit/cli/pull/234) | 🐙 Minor | Enhancements to logging provide better visibility into snapshot creation processes. | ❌ |
| [#81](https://github.com/tscircuit/docs/pull/81) | 🐙 Minor | Enhancements to the CircuitPreview component allow for a more flexible display of circuit information, improving user experience. | ❌ |
| [#76](https://github.com/tscircuit/docs/pull/76) | 🐙 Minor | The addition of the `<netlabel />` element enhances documentation clarity and usability for users working with schematic designs. | ❌ |
| [#7](https://github.com/tscircuit/parts-engine/pull/7) | 🐙 Minor | Enhancing the API's resilience by ensuring it returns an empty part list when data is missing adds robustness to the application. | ❌ |
| [#19](https://github.com/tscircuit/deps.tscircuit.com/pull/19) | 🐙 Minor | Enhances the package categorization by mapping 'tscircuit/checks' to the Core Utility category, improving clarity and organization. | ❌ |
| [#18](https://github.com/tscircuit/deps.tscircuit.com/pull/18) | 🐙 Minor | Enhances the dependency graph by categorizing the parts-engine as a core utility, improving project organization. | ❌ |
| [#17](https://github.com/tscircuit/deps.tscircuit.com/pull/17) | 🐙 Minor | Enhancements to category mapping improve the organization and classification of packages within the project. | ❌ |
| [#14](https://github.com/tscircuit/deps.tscircuit.com/pull/14) | 🐙 Minor | Enhances the user interface by introducing a category filter for better navigation and organization of package dependencies. | ❌ |
| [#13](https://github.com/tscircuit/deps.tscircuit.com/pull/13) | 🐙 Minor | Enhancements to dependency management by incorporating peerDependencies into the dependency graph. | ❌ |
| [#12](https://github.com/tscircuit/deps.tscircuit.com/pull/12) | 🐙 Minor | Enhancing node visualization by introducing color coding based on incoming edge severity improves user experience and debugging capabilities. | ❌ |
| [#10](https://github.com/tscircuit/deps.tscircuit.com/pull/10) | 🐙 Minor | Enhancement of dependency visualization through dynamic edge coloring based on version differences. | ❌ |
| [#8](https://github.com/tscircuit/deps.tscircuit.com/pull/8) | 🐙 Minor | Enhancements to the dependency graph functionality improve user experience by retaining node positions and adding a reset option. | ❌ |
| [#7](https://github.com/tscircuit/deps.tscircuit.com/pull/7) | 🐙 Minor | Enhancing the display of dependency information improves user experience and clarity in dependency management. | ❌ |
| [#9](https://github.com/tscircuit/deps.tscircuit.com/pull/9) | 🐙 Minor | Enhancing the dependency graph by adding more GitHub repositories improves visibility and resource management. | ❌ |
| [#6](https://github.com/tscircuit/deps.tscircuit.com/pull/6) | 🐙 Minor | Enhancements to project metadata and dependency inclusion improve clarity and functionality. | ❌ |
| [#3](https://github.com/tscircuit/deps.tscircuit.com/pull/3) | 🐙 Minor | Enhances user interaction by allowing nodes and edges in the dependency graph to be draggable, improving the overall usability of the component. | ❌ |
| [#2](https://github.com/tscircuit/deps.tscircuit.com/pull/2) | 🐙 Minor | Enhancements to the dependency graph by displaying the last update timestamp of package.json files, improving user awareness of dependency freshness. | ❌ |
| [#294](https://github.com/tscircuit/props/pull/294) | 🐌 Tiny | Clarification of documentation for better understanding of the `internallyConnectedPins` property. | ❌ |
| [#955](https://github.com/tscircuit/core/pull/955) | 🐌 Tiny | The addition of a configuration to disable the lockfile in the project enhances flexibility in dependency management. | ❌ |
| [#946](https://github.com/tscircuit/core/pull/946) | 🐌 Tiny | Enhancements to testing capabilities for netalias connections improve code reliability and maintainability. | ❌ |
| [#82](https://github.com/tscircuit/docs/pull/82) | 🐌 Tiny | Enhancing documentation for the `sel()` function improves usability and understanding for developers. | ❌ |
| [#80](https://github.com/tscircuit/docs/pull/80) | 🐌 Tiny | Enhancements to documentation for the `<jumper />` component improve clarity and usability for developers. | ❌ |
| [#77](https://github.com/tscircuit/docs/pull/77) | 🐌 Tiny | Enhances TypeScript configuration documentation and updates a dependency for improved functionality. | ❌ |
| [#75](https://github.com/tscircuit/docs/pull/75) | 🐌 Tiny | Enhancing documentation for build and snapshot commands significantly improves user understanding and usability of the tool. | ❌ |
| [#5](https://github.com/tscircuit/deps.tscircuit.com/pull/5) | 🐌 Tiny | Enhancements to the dependency edge display improve visual feedback on version compliance. | ❌ |
| [#4](https://github.com/tscircuit/deps.tscircuit.com/pull/4) | 🐌 Tiny | Enhancing documentation with a GitHub badge and updating a dependency version improves project visibility and maintenance. | ❌ |

### [Abse2001](https://github.com/Abse2001)

| PR # | Impact | Description | Milestone Aligned |
|------|--------|-------------|-------------------|
| [#956](https://github.com/tscircuit/core/pull/956) | 🐳 Major | Enhances the selector functionality by adding support for J references, improving usability for keyboard building. | ✅ |
| [#261](https://github.com/tscircuit/circuit-to-svg/pull/261) | 🐙 Minor | Enhancement of SVG rendering by ensuring stroke width remains consistent regardless of scaling transformations. | ❌ |
| [#98](https://github.com/tscircuit/schematic-viewer/pull/98) | 🐌 Tiny | Updating the dependency version for circuit-to-svg enhances compatibility and potentially introduces new features or fixes. | ❌ |
| [#1329](https://github.com/tscircuit/tscircuit.com/pull/1329) | 🐌 Tiny | Updating the dependency version for improved functionality or bug fixes. | ❌ |
| [#790](https://github.com/tscircuit/runframe/pull/790) | 🐌 Tiny | Updating the version of a dependency in the package.json file enhances the project's stability and ensures compatibility with the latest features or fixes. | ❌ |
| [#242](https://github.com/tscircuit/cli/pull/242) | 🐌 Tiny | Updating the dependency version for improved functionality or bug fixes. | ❌ |

### [ShiboSoftwareDev](https://github.com/ShiboSoftwareDev)

| PR # | Impact | Description | Milestone Aligned |
|------|--------|-------------|-------------------|
| [#355](https://github.com/tscircuit/3d-viewer/pull/355) | 🐙 Minor | Enhancement of the manifold processing capabilities to support pill-shaped plated holes, improving design flexibility. | ❌ |
| [#963](https://github.com/tscircuit/core/pull/963) | 🐙 Minor | Enhancements to the SolderJumper component for better pin labeling and handling of bridged pins. | ❌ |
| [#1312](https://github.com/tscircuit/tscircuit.com/pull/1312) | 🐙 Minor | Enhancement of the user interface for better interaction with tree actions. | ❌ |
| [#245](https://github.com/tscircuit/cli/pull/245) | 🐙 Minor | Fixes a regression that caused the snapshot command to malfunction by checking irrelevant index files, enhancing the command's reliability. | ❌ |
| [#244](https://github.com/tscircuit/cli/pull/244) | 🐙 Minor | Enhancements to the snapshot workflow improve clarity and functionality during GitHub actions. | ❌ |
| [#241](https://github.com/tscircuit/cli/pull/241) | 🐙 Minor | Refactoring of configuration logic enhances clarity and maintainability, allowing for both global and project-specific settings. | ❌ |
| [#237](https://github.com/tscircuit/cli/pull/237) | 🐙 Minor | Enhances cross-platform compatibility by enabling the snapshot command to function on Windows machines. | ❌ |
| [#156](https://github.com/tscircuit/tscircuit-autorouter/pull/156) | 🐙 Minor | The addition of high-density node input data and a corresponding solver fixture enhances the testing and functionality of the autorouting feature. | ❌ |
| [#8](https://github.com/tscircuit/sparkfun-boards/pull/8) | 🐙 Minor | Introduces a new component for the MCP4725 I2C DAC, enhancing the library's functionality. | ❌ |
| [#688](https://github.com/tscircuit/tscircuit/pull/688) | 🐌 Tiny | Updating dependencies to their latest versions enhances the stability and security of the project. | ❌ |
| [#239](https://github.com/tscircuit/cli/pull/239) | 🐌 Tiny | The pull request updates several dependencies in the project, which is essential for maintaining compatibility and leveraging improvements from the latest versions. | ❌ |
| [#9](https://github.com/tscircuit/sparkfun-boards/pull/9) | 🐌 Tiny | Introduces new workflows for building and snapshotting TSCircuit projects, enhancing CI/CD capabilities. | ❌ |

### [Anshgrover23](https://github.com/Anshgrover23)

| PR # | Impact | Description | Milestone Aligned |
|------|--------|-------------|-------------------|
| [#293](https://github.com/tscircuit/props/pull/293) | 🐙 Minor | Enhancing flexibility in component properties by making schX and schY optional improves usability and testing coverage. | ❌ |
| [#292](https://github.com/tscircuit/props/pull/292) | 🐙 Minor | Enhancements to the PinHeaderProps interface by adding new properties for schematic dimensions and styles, improving flexibility in component usage. | ❌ |
| [#954](https://github.com/tscircuit/core/pull/954) | 🐙 Minor | Enhances the SchematicText component by ensuring default values for position properties, improving robustness. | ❌ |
| [#953](https://github.com/tscircuit/core/pull/953) | 🐌 Tiny | Updating the dependency version for props enhances compatibility and ensures the latest features and fixes are utilized. | ❌ |
| [#1323](https://github.com/tscircuit/tscircuit.com/pull/1323) | 🐌 Tiny | Updating dependencies enhances the stability and performance of the project by ensuring compatibility with the latest features and fixes. | ❌ |

### [techmannih](https://github.com/techmannih)

| PR # | Impact | Description | Milestone Aligned |
|------|--------|-------------|-------------------|
| [#967](https://github.com/tscircuit/core/pull/967) | 🐳 Major | Enhancement of the selector functionality by adding support for a new component type, improving flexibility in component selection. | ✅ |
| [#5](https://github.com/tscircuit/sparkfun-boards/pull/5) | 🐳 Major | The addition of the SparkFun USB to Serial Breakout FT232RL enhances the repository by providing a new component for users, facilitating USB to serial communication in their projects. | ❌ |
| [#254](https://github.com/tscircuit/easyeda-converter/pull/254) | 🐙 Minor | The changes enhance the import functionality for a specific component, improving compatibility and reliability in the conversion process. | ❌ |
| [#255](https://github.com/tscircuit/easyeda-converter/pull/255) | 🐙 Minor | Addresses a specific import failure issue related to a JLCPCB part, enhancing the functionality of the converter. | ❌ |
| [#971](https://github.com/tscircuit/core/pull/971) | 🐙 Minor | Enhancement of the crystal component to include load capacitance display, improving user information. | ❌ |
| [#309](https://github.com/tscircuit/schematic-symbols/pull/309) | 🐙 Minor | Enhancements to the crystal symbol variations improve usability and flexibility in schematic designs. | ❌ |
| [#5](https://github.com/tscircuit/parts-engine/pull/5) | 🐙 Minor | Enhancement of the parts engine to include support for simple fuse components, improving its functionality. | ❌ |
| [#1322](https://github.com/tscircuit/tscircuit.com/pull/1322) | 🐌 Tiny | Updating the easyeda dependency to a newer version enhances the project's compatibility and may include important bug fixes or improvements. | ❌ |

### [imrishabh18](https://github.com/imrishabh18)

| PR # | Impact | Description | Milestone Aligned |
|------|--------|-------------|-------------------|
| [#350](https://github.com/tscircuit/3d-viewer/pull/350) | 🐙 Minor | Loading the Manifold WASM module from a CDN enhances the application's performance and reduces local resource dependency. | ❌ |
| [#949](https://github.com/tscircuit/core/pull/949) | 🐙 Minor | Enhancements to component naming and rendering improve usability and error handling in the circuit design process. | ❌ |
| [#965](https://github.com/tscircuit/core/pull/965) | 🐙 Minor | Enhances the Group component by ensuring that subcircuit_id is only set for subcircuit groups, improving data integrity. | ❌ |
| [#964](https://github.com/tscircuit/core/pull/964) | 🐙 Minor | Introducing a new render phase enhances the rendering capabilities of the library, allowing for better management of subcircuits. | ❌ |
| [#962](https://github.com/tscircuit/core/pull/962) | 🐙 Minor | Enhancement of route JSON generation by incorporating subcircuit padding, improving layout accuracy. | ❌ |
| [#947](https://github.com/tscircuit/core/pull/947) | 🐙 Minor | Enhancement of PCB layout capabilities by introducing padding support for subcircuits in the Group component. | ❌ |
| [#938](https://github.com/tscircuit/core/pull/938) | 🐙 Minor | Enhancements to net label lookup improve circuit functionality and testing reliability. | ❌ |
| [#1328](https://github.com/tscircuit/tscircuit.com/pull/1328) | 🐙 Minor | Enhancements to the build status indicators improve clarity and user experience in the sidebar release section. | ❌ |
| [#1317](https://github.com/tscircuit/tscircuit.com/pull/1317) | 🐙 Minor | Enhancing the dropdown width improves user experience by accommodating longer file names and providing better accessibility. | ❌ |
| [#537](https://github.com/tscircuit/eval/pull/537) | 🐙 Minor | Enhancing configuration handling by setting the entry point based on the parsed configuration file improves the flexibility and usability of the code. | ❌ |
| [#528](https://github.com/tscircuit/eval/pull/528) | 🐙 Minor | Enhances the configuration parsing by allowing the main component path to be specified in the tscircuit.config.js file. | ❌ |
| [#781](https://github.com/tscircuit/runframe/pull/781) | 🐙 Minor | Elevating the OrderDialog's z-index enhances its visibility and usability in the UI. | ❌ |
| [#780](https://github.com/tscircuit/runframe/pull/780) | 🐙 Minor | Enhancing error tracking in the order dialog improves overall application reliability and user experience. | ❌ |
| [#233](https://github.com/tscircuit/cli/pull/233) | 🐙 Minor | Renaming the configuration entry field enhances clarity and consistency in the codebase. | ❌ |
| [#79](https://github.com/tscircuit/docs/pull/79) | 🐙 Minor | Enhances documentation for the `<schematictext />` component and ensures compliance with linting standards for the YouTube embed component. | ❌ |
| [#74](https://github.com/tscircuit/docs/pull/74) | 🐙 Minor | The addition of a comprehensive ordering section enhances user experience by streamlining the prototype ordering process. | ❌ |
| [#1324](https://github.com/tscircuit/tscircuit.com/pull/1324) | 🐌 Tiny | Updates the version of the @tscircuit/runframe package to enhance functionality. | ❌ |
| [#1318](https://github.com/tscircuit/tscircuit.com/pull/1318) | 🐌 Tiny | Updating the runframe package to fix a z-index dialog issue enhances the UI functionality. | ❌ |
| [#1314](https://github.com/tscircuit/tscircuit.com/pull/1314) | 🐌 Tiny | The PR updates the package.json file to include new dependencies and adjust existing ones, ensuring compatibility and functionality of the project. | ❌ |
| [#793](https://github.com/tscircuit/runframe/pull/793) | 🐌 Tiny | Updates dependencies in the package.json file, ensuring the project uses the latest versions of specific libraries. | ❌ |
| [#786](https://github.com/tscircuit/runframe/pull/786) | 🐌 Tiny | Updating the version of the 3D viewer package enhances the project's dependencies and ensures compatibility with the latest features or fixes. | ❌ |
| [#78](https://github.com/tscircuit/docs/pull/78) | 🐌 Tiny | Enhancing documentation clarity by completing sentences improves user understanding and usability. | ❌ |

### [ArnavK-09](https://github.com/ArnavK-09)

| PR # | Impact | Description | Milestone Aligned |
|------|--------|-------------|-------------------|
| [#1307](https://github.com/tscircuit/tscircuit.com/pull/1307) | 🐙 Minor | Enhances the SEO capabilities by allowing dynamic selection of the Open Graph image based on the package's default view. | ❌ |
| [#1310](https://github.com/tscircuit/tscircuit.com/pull/1310) | 🐙 Minor | Enhancements to caching and refetching behavior improve the editor's responsiveness after saving changes. | ❌ |
| [#1313](https://github.com/tscircuit/tscircuit.com/pull/1313) | 🐙 Minor | Introduces a new feature for downloading PNG images of circuit designs, enhancing user functionality. | ❌ |

### [tscircuitbot](https://github.com/tscircuitbot)

| PR # | Impact | Description | Milestone Aligned |
|------|--------|-------------|-------------------|
| [#563](https://github.com/tscircuit/eval/pull/563) | 🐌 Tiny | Updating the core library version enhances compatibility and may include important bug fixes or improvements. | ❌ |
| [#546](https://github.com/tscircuit/eval/pull/546) | 🐌 Tiny | Updating the core library version enhances compatibility and may include important bug fixes or improvements. | ❌ |
| [#536](https://github.com/tscircuit/eval/pull/536) | 🐌 Tiny | Updating dependencies is essential for maintaining project health and ensuring compatibility with other packages. | ❌ |

### [MustafaMulla29](https://github.com/MustafaMulla29)

| PR # | Impact | Description | Milestone Aligned |
|------|--------|-------------|-------------------|
| [#10](https://github.com/tscircuit/sparkfun-boards/pull/10) | 🐳 Major | The addition of the HMC6343 breakout board enhances the repository's offerings, providing users with new hardware integration options. | ❌ |
| [#13](https://github.com/tscircuit/sparkfun-boards/pull/13) | 🐌 Tiny | Updating the dependency version addresses type errors, ensuring better compatibility and functionality. | ❌ |

## Repository Owners

| Repository | Codeowners |
|------------|------------|
| [footprinter](https://github.com/tscircuit/footprinter/blob/main/.github/CODEOWNERS) | [seveibar](https://github.com/seveibar), [techmannih](https://github.com/techmannih) |
| [tscircuit.com](https://github.com/tscircuit/tscircuit.com/blob/main/.github/CODEOWNERS) | [seveibar](https://github.com/seveibar), [imrishabh18](https://github.com/imrishabh18) |
| [cli](https://github.com/tscircuit/cli/blob/main/.github/CODEOWNERS) | [seveibar](https://github.com/seveibar), [imrishabh18](https://github.com/imrishabh18) |

## Repos by Owner

| User | Repo |
|------|------|
| [seveibar](https://github.com/seveibar) | [footprinter](https://github.com/tscircuit/footprinter/blob/main/.github/CODEOWNERS) |
|  | [tscircuit.com](https://github.com/tscircuit/tscircuit.com/blob/main/.github/CODEOWNERS) |
|  | [cli](https://github.com/tscircuit/cli/blob/main/.github/CODEOWNERS) |
| [imrishabh18](https://github.com/imrishabh18) | [tscircuit.com](https://github.com/tscircuit/tscircuit.com/blob/main/.github/CODEOWNERS) |
|  | [cli](https://github.com/tscircuit/cli/blob/main/.github/CODEOWNERS) |
| [techmannih](https://github.com/techmannih) | [footprinter](https://github.com/tscircuit/footprinter/blob/main/.github/CODEOWNERS) |



<!-- END_CURRENT_WEEK -->
