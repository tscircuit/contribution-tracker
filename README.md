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

# Contribution Overview 2025-07-09

## PRs by Repository

```mermaid
pie
    "tscircuit/pcb-viewer" : 1
    "tscircuit/schematic-corpus" : 13
    "tscircuit/core" : 9
    "tscircuit/math-utils" : 2
    "tscircuit/bpc-graph" : 7
    "tscircuit/cli" : 8
    "tscircuit/tscircuit" : 4
    "tscircuit/circuit-json-util" : 1
    "tscircuit/props" : 4
    "tscircuit/jscad-fiber" : 1
    "tscircuit/eval" : 7
    "tscircuit/runframe" : 2
    "tscircuit/docs" : 2
    "tscircuit/checks" : 2
    "tscircuit/footprinter" : 1
    "tscircuit/tscircuit.com" : 12
    "tscircuit/status" : 1
    "tscircuit/schematic-symbols" : 1
    "tscircuit/sparkfun-boards" : 1
```

## Contributor Overview

| Contributor | 🐳 Major | 🐙 Minor | 🐌 Tiny | ⭐ | Issues Created | Discussion Contributions |
|-------------|---------|---------|---------|-----|----------------|--------------------------|
| [seveibar](#seveibar) | 4 | 1 | 34 | ⭐⭐⭐ | 0 | 0🔹 0🔶 0💎 |
| [ArnavK-09](#ArnavK-09) | 2 | 2 | 6 | ⭐⭐ | 0 | 0🔹 0🔶 0💎 |
| [imrishabh18](#imrishabh18) | 1 | 1 | 8 | ⭐⭐ | 0 | 0🔹 0🔶 0💎 |
| [Abse2001](#Abse2001) | 0 | 1 | 4 | ⭐⭐ | 0 | 0🔹 0🔶 0💎 |
| [techmannih](#techmannih) | 0 | 0 | 6 | ⭐ | 0 | 0🔹 0🔶 0💎 |
| [MustafaMulla29](#MustafaMulla29) | 0 | 0 | 6 | ⭐ | 0 | 0🔹 0🔶 0💎 |
| [tscircuitbot](#tscircuitbot) | 0 | 0 | 2 |  | 0 | 0🔹 0🔶 0💎 |
| [abimaelmartell](#abimaelmartell) | 0 | 0 | 1 |  | 0 | 0🔹 0🔶 0💎 |
| [nuraci](#nuraci) | 0 | 0 | 0 |  | 0 | 0🔹 1🔶 0💎 |

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
| [techmannih](#techmannih) | 15 | 6 | 1 | 0 | 1 | 10 | 6 | 0 | 0 | 0 |
| [imrishabh18](#imrishabh18) | 11 | 8 | 0 | 3 | 1 | 15 | 11 | 0 | 0 | 0 |
| [seveibar](#seveibar) | 20 | 0 | 0 | 24 | 2 | 55 | 41 | 0 | 0 | 0 |
| [cursor[bot]](#cursor[bot]) | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| [ShiboSoftwareDev](#ShiboSoftwareDev) | 0 | 0 | 0 | 1 | 0 | 1 | 0 | 0 | 0 | 0 |
| [andrii-balitskyi](#andrii-balitskyi) | 2 | 2 | 0 | 0 | 0 | 6 | 3 | 0 | 0 | 0 |
| [MustafaMulla29](#MustafaMulla29) | 19 | 8 | 2 | 0 | 0 | 10 | 6 | 0 | 0 | 0 |
| [graphite-app[bot]](#graphite-app[bot]) | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| [abimaelmartell](#abimaelmartell) | 3 | 0 | 0 | 0 | 0 | 2 | 1 | 0 | 0 | 0 |
| [Abse2001](#Abse2001) | 5 | 3 | 0 | 8 | 0 | 6 | 5 | 0 | 0 | 0 |
| [ArnavK-09](#ArnavK-09) | 23 | 9 | 1 | 0 | 0 | 11 | 10 | 0 | 0 | 0 |
| [tscircuitbot](#tscircuitbot) | 1 | 0 | 0 | 0 | 0 | 18 | 2 | 0 | 0 | 0 |
| [nuraci](#nuraci) | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |

## Top 7 Repositories by Contribution Points

```mermaid
pie
    "tscircuit/tscircuit.com" : 20
    "tscircuit/schematic-corpus" : 13
    "tscircuit/core" : 13
    "tscircuit/bpc-graph" : 13
    "tscircuit/cli" : 9
    "tscircuit/eval" : 7
    "tscircuit/math-utils" : 5
```

## Changes by Repository

### [tscircuit/pcb-viewer](https://github.com/tscircuit/pcb-viewer)


<details>
<summary>🐌 Tiny Contributions (1)</summary>

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#347](https://github.com/tscircuit/pcb-viewer/pull/347) | 🐌 Tiny | techmannih | Updates the circuit-to-svg dependency to version 0.0.166 in package.json. |

</details>

### [tscircuit/schematic-corpus](https://github.com/tscircuit/schematic-corpus)


<details>
<summary>🐌 Tiny Contributions (13)</summary>

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#78](https://github.com/tscircuit/schematic-corpus/pull/78) | 🐌 Tiny | techmannih | Adds a new design (design053) to the schematic corpus, which includes a new circuit board layout for improved autolayout algorithm functionality. |
| [#76](https://github.com/tscircuit/schematic-corpus/pull/76) | 🐌 Tiny | techmannih | Adds a new design (design051) to the schematic corpus, which is intended to enhance the autorouting algorithm. |
| [#70](https://github.com/tscircuit/schematic-corpus/pull/70) | 🐌 Tiny | techmannih | Adds a new design (design047) to the schematic corpus, which includes a new circuit board layout for improved autorouting capabilities. |
| [#72](https://github.com/tscircuit/schematic-corpus/pull/72) | 🐌 Tiny | techmannih | Adds a new design048 circuit to the schematic corpus, which is intended to enhance the autorouting algorithm. |
| [#63](https://github.com/tscircuit/schematic-corpus/pull/63) | 🐌 Tiny | techmannih | Fixes incorrect pin connections in design019 to ensure proper autolayout functionality. |
| [#64](https://github.com/tscircuit/schematic-corpus/pull/64) | 🐌 Tiny | seveibar | Add a script to copy SVG snapshots to the site build output directory during the site build process. |
| [#62](https://github.com/tscircuit/schematic-corpus/pull/62) | 🐌 Tiny | seveibar | Adds functionality to export BPC graphs without net labels, allowing for better handling of circuits that do not utilize net labels. |
| [#80](https://github.com/tscircuit/schematic-corpus/pull/80) | 🐌 Tiny | MustafaMulla29 | Removes the schPinStyle property from the design52 component, simplifying the design structure. |
| [#79](https://github.com/tscircuit/schematic-corpus/pull/79) | 🐌 Tiny | MustafaMulla29 | Adds a new design (design52) to the schematic corpus, which includes a new circuit board layout for improved autorouting capabilities. |
| [#73](https://github.com/tscircuit/schematic-corpus/pull/73) | 🐌 Tiny | MustafaMulla29 | Adds a new design (design049) to the schematic corpus, which is intended to enhance the autorouting algorithms performance. |
| [#77](https://github.com/tscircuit/schematic-corpus/pull/77) | 🐌 Tiny | Abse2001 | Adds a new design (design054) to the schematic corpus, which includes a new circuit board layout with specific component placements to enhance the autolayout algorithm. |
| [#75](https://github.com/tscircuit/schematic-corpus/pull/75) | 🐌 Tiny | Abse2001 | Adds a new design (design050) to the schematic corpus, which includes a new circuit board layout for improved autorouting capabilities. |
| [#71](https://github.com/tscircuit/schematic-corpus/pull/71) | 🐌 Tiny | Abse2001 | Adds a CODEOWNERS file to define code ownership for schematic-corpus designs. |

</details>

### [tscircuit/core](https://github.com/tscircuit/core)

| PR # | Impact | Rating | Contributor | Description |
|------|--------|--------|-------------|-------------|
| [#1045](https://github.com/tscircuit/core/pull/1045) | 🐳 Major | ⭐⭐⭐ | seveibar | Adds elbow routing functionality for schematic traces, allowing for more flexible routing before falling back to autorouter when obstacles are encountered. |
| [#1050](https://github.com/tscircuit/core/pull/1050) | 🐙 Minor | ⭐⭐ | imrishabh18 | Fixes runtime error caused by incorrect import of circuit-to-svg, preventing tests from passing after updating tscircuit with the latest core. |

<details>
<summary>🐌 Tiny Contributions (7)</summary>

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#1056](https://github.com/tscircuit/core/pull/1056) | 🐌 Tiny | seveibar | Updates React and related dependencies to version 19.1.x to address downstream issues with compatibility and performance. |
| [#1054](https://github.com/tscircuit/core/pull/1054) | 🐌 Tiny | seveibar | Updates the circuit-json dependency to version 0.0.219 to prevent accidental installation of zod v4. |
| [#1053](https://github.com/tscircuit/core/pull/1053) | 🐌 Tiny | seveibar | Removes support for layoutlayoutBuilder in PrimitiveComponent and Group components, streamlining the layout handling process by relying solely on manual edits. |
| [#1052](https://github.com/tscircuit/core/pull/1052) | 🐌 Tiny | seveibar | Introduces layout variants for schematic graphs that handle pins without not_connected status, enhancing layout adaptability. |
| [#1047](https://github.com/tscircuit/core/pull/1047) | 🐌 Tiny | seveibar | Stops the layout of net labels in the BPC graph and introduces a system for writing debug graphics, while ensuring debug graphics are not written during CI. |
| [#1058](https://github.com/tscircuit/core/pull/1058) | 🐌 Tiny | MustafaMulla29 | Adds a new prop pcbPinLabels to allow different pin labeling for PCB and schematic representations of components. |
| [#1057](https://github.com/tscircuit/core/pull/1057) | 🐌 Tiny | MustafaMulla29 | Updates the dependency version of tscircuitprops to include the newly exported property pcbPinLabels. |

</details>

### [tscircuit/math-utils](https://github.com/tscircuit/math-utils)

| PR # | Impact | Rating | Contributor | Description |
|------|--------|--------|-------------|-------------|
| [#13](https://github.com/tscircuit/math-utils/pull/13) | 🐳 Major | ⭐⭐⭐ | seveibar | Adds a new helper function to check for segment-rectangle intersections and cleans up the lockfile by removing the bun.lockb file and adding a bunfig.toml to disable lockfile saving. |

<details>
<summary>🐌 Tiny Contributions (1)</summary>

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#12](https://github.com/tscircuit/math-utils/pull/12) | 🐌 Tiny | seveibar | Removes the lockfile for the project and introduces a new configuration file to disable lockfile saving during installation. |

</details>

### [tscircuit/bpc-graph](https://github.com/tscircuit/bpc-graph)

| PR # | Impact | Rating | Contributor | Description |
|------|--------|--------|-------------|-------------|
| [#55](https://github.com/tscircuit/bpc-graph/pull/55) | 🐳 Major | ⭐⭐⭐ | seveibar | Adds functionality to handle layout variants for schematic graphs, allowing for better matching and adaptation of circuit designs. |
| [#51](https://github.com/tscircuit/bpc-graph/pull/51) | 🐳 Major | ⭐⭐⭐ | seveibar | Fixes incorrect partitioning by implementing a depth-first search (DFS) algorithm that prioritizes processing the smallest nets first. |

<details>
<summary>🐌 Tiny Contributions (5)</summary>

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#57](https://github.com/tscircuit/bpc-graph/pull/57) | 🐌 Tiny | seveibar | Updates the package.json dependencies and modifies a test file by removing a prop from a component. |
| [#56](https://github.com/tscircuit/bpc-graph/pull/56) | 🐌 Tiny | seveibar | Clarifies layoutSchematicGraphVariants output by renaming result to fixedGraph for better code readability and understanding. |
| [#54](https://github.com/tscircuit/bpc-graph/pull/54) | 🐌 Tiny | seveibar | Adds a new interactive schematic layout page that allows users to visualize and debug circuit layouts through a series of graphical steps. |
| [#53](https://github.com/tscircuit/bpc-graph/pull/53) | 🐌 Tiny | seveibar | Sets the graphics title in the getGraphicsForBpcGraph function when a title is provided in the options, ensuring that the title is displayed correctly in the graphics output. |
| [#52](https://github.com/tscircuit/bpc-graph/pull/52) | 🐌 Tiny | seveibar | Fixes reproduction issue in tests by using the correct corpus without net labels, ensuring accurate schematic representation. |

</details>

### [tscircuit/cli](https://github.com/tscircuit/cli)

| PR # | Impact | Rating | Contributor | Description |
|------|--------|--------|-------------|-------------|
| [#270](https://github.com/tscircuit/cli/pull/270) | 🐙 Minor | ⭐⭐ | seveibar | Replaces the use of eval for importing tsx files with dynamic import, enhancing security and performance. |

<details>
<summary>🐌 Tiny Contributions (7)</summary>

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#271](https://github.com/tscircuit/cli/pull/271) | 🐌 Tiny | seveibar | Adds a smoketest Dockerfile and modifies the circuit JSON generation to support both default and named exports, ensuring components are correctly identified and rendered. |
| [#267](https://github.com/tscircuit/cli/pull/267) | 🐌 Tiny | seveibar | Adds a debug environment variable for the tsci build process in the smoke-init-test workflow. |
| [#266](https://github.com/tscircuit/cli/pull/266) | 🐌 Tiny | seveibar | Adds zod as a peer dependency at version 3 in package.json |
| [#265](https://github.com/tscircuit/cli/pull/265) | 🐌 Tiny | seveibar | Adds a GitHub Actions workflow to validate the tsci init command by running smoke tests in a temporary environment. |
| [#264](https://github.com/tscircuit/cli/pull/264) | 🐌 Tiny | seveibar | Updates the version of tscircuit and other dependencies in the project, ensuring compatibility and access to the latest features and fixes. |
| [#263](https://github.com/tscircuit/cli/pull/263) | 🐌 Tiny | seveibar | Adds debug logging for the fsMap object in the circuit JSON generation process, allowing developers to view its contents during execution. |
| [#262](https://github.com/tscircuit/cli/pull/262) | 🐌 Tiny | imrishabh18 | Adds a -y--yes option to the tsci init command to allow users to skip prompts and use default values during project initialization. |

</details>

### [tscircuit/tscircuit](https://github.com/tscircuit/tscircuit)


<details>
<summary>🐌 Tiny Contributions (4)</summary>

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#701](https://github.com/tscircuit/tscircuit/pull/701) | 🐌 Tiny | seveibar | Adds a new smoke test workflow that installs the CLI and verifies its initialization and build process in a temporary directory. |
| [#700](https://github.com/tscircuit/tscircuit/pull/700) | 🐌 Tiny | seveibar | Updates dependency versions in package.json to ensure compatibility and avoid overrides by adding all necessary dependencies that core needs. |
| [#699](https://github.com/tscircuit/tscircuit/pull/699) | 🐌 Tiny | imrishabh18 | Updates the footprinter dependency to version 0.0.193 in package.json |
| [#698](https://github.com/tscircuit/tscircuit/pull/698) | 🐌 Tiny | imrishabh18 | Fix errors on test due to stale lock file. |

</details>

### [tscircuit/circuit-json-util](https://github.com/tscircuit/circuit-json-util)


<details>
<summary>🐌 Tiny Contributions (1)</summary>

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#38](https://github.com/tscircuit/circuit-json-util/pull/38) | 🐌 Tiny | seveibar | Exposes the subtree helper in the public API for easier access and usage by developers. |

</details>

### [tscircuit/props](https://github.com/tscircuit/props)


<details>
<summary>🐌 Tiny Contributions (4)</summary>

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#320](https://github.com/tscircuit/props/pull/320) | 🐌 Tiny | seveibar | Removes lockfiles and the dependency on tscircuitlayout from the project. |
| [#319](https://github.com/tscircuit/props/pull/319) | 🐌 Tiny | seveibar | Removes support for the layout property in SubcircuitGroupProps and related components, impacting how layout configurations are handled in the library. |
| [#318](https://github.com/tscircuit/props/pull/318) | 🐌 Tiny | MustafaMulla29 | Adds the pcbPinLabels prop to components to allow users to specify labels for PCB pins, enhancing the flexibility of pin representation in schematics. |
| [#317](https://github.com/tscircuit/props/pull/317) | 🐌 Tiny | abimaelmartell | Allows chip components to specify connections using either pin numbers or labels, enhancing flexibility in component configuration. |

</details>

### [tscircuit/jscad-fiber](https://github.com/tscircuit/jscad-fiber)


<details>
<summary>🐌 Tiny Contributions (1)</summary>

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#109](https://github.com/tscircuit/jscad-fiber/pull/109) | 🐌 Tiny | seveibar | Adds react-reconciler as a peer dependency and updates its version in the package.json file. |

</details>

### [tscircuit/eval](https://github.com/tscircuit/eval)


<details>
<summary>🐌 Tiny Contributions (7)</summary>

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#679](https://github.com/tscircuit/eval/pull/679) | 🐌 Tiny | seveibar | Adds additional debug logging in the entrypoint to assist in debugging user components and their rendering. |
| [#678](https://github.com/tscircuit/eval/pull/678) | 🐌 Tiny | seveibar | Adds extensive debugging capabilities to the CircuitRunner and related modules, allowing for better tracking of execution flow and errors. |
| [#675](https://github.com/tscircuit/eval/pull/675) | 🐌 Tiny | seveibar | Fixes the example3 test by bundling dependencies for the web worker and disabling code splitting to avoid network dependency issues. |
| [#673](https://github.com/tscircuit/eval/pull/673) | 🐌 Tiny | seveibar | Updates the versions of the tscircuitcore and circuit-json dependencies in package.json. |
| [#670](https://github.com/tscircuit/eval/pull/670) | 🐌 Tiny | seveibar | Updates the core version of the tscircuitcore package and modifies the dependency management script to synchronize dependencies with the core package. |
| [#677](https://github.com/tscircuit/eval/pull/677) | 🐌 Tiny | tscircuitbot | Updates the tscircuitcore dependency to version 0.0.558 and updates related dependencies for React and TypeScript types. |
| [#662](https://github.com/tscircuit/eval/pull/662) | 🐌 Tiny | tscircuitbot | Updates the tscircuitcore package from version 0.0.549 to 0.0.553 and updates the graphics-debug package from version 0.0.57 to 0.0.60. |

</details>

### [tscircuit/runframe](https://github.com/tscircuit/runframe)


<details>
<summary>🐌 Tiny Contributions (2)</summary>

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#871](https://github.com/tscircuit/runframe/pull/871) | 🐌 Tiny | seveibar | Adds a GitHub Actions workflow for continuous branch release and modifies package.json to adjust build scripts and dependencies. |
| [#869](https://github.com/tscircuit/runframe/pull/869) | 🐌 Tiny | seveibar | Updates the jscad-fiber dependency to version 0.0.80 in package.json |

</details>

### [tscircuit/docs](https://github.com/tscircuit/docs)


<details>
<summary>🐌 Tiny Contributions (2)</summary>

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#98](https://github.com/tscircuit/docs/pull/98) | 🐌 Tiny | seveibar | Documents the usage and options for the tsci init command, providing users with guidance on initializing a new TSCircuit project. |
| [#97](https://github.com/tscircuit/docs/pull/97) | 🐌 Tiny | seveibar | Removes the Publishing Modules documentation page from the repository. |

</details>

### [tscircuit/checks](https://github.com/tscircuit/checks)

| PR # | Impact | Rating | Contributor | Description |
|------|--------|--------|-------------|-------------|
| [#55](https://github.com/tscircuit/checks/pull/55) | 🐳 Major | ⭐⭐⭐ | imrishabh18 | Adds a DRC check to ensure that two PCB traces maintain a minimum specified distance between them. |

<details>
<summary>🐌 Tiny Contributions (1)</summary>

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#57](https://github.com/tscircuit/checks/pull/57) | 🐌 Tiny | imrishabh18 | Removes the checkTraceSpacing method, which checks for minimum spacing between PCB traces, from the codebase. |

</details>

### [tscircuit/footprinter](https://github.com/tscircuit/footprinter)


<details>
<summary>🐌 Tiny Contributions (1)</summary>

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#319](https://github.com/tscircuit/footprinter/pull/319) | 🐌 Tiny | imrishabh18 | Adds support for custom pad sizes for the 0603 footprint, including a regression test for the new functionality and clarification on numeric string handling. |

</details>

### [tscircuit/tscircuit.com](https://github.com/tscircuit/tscircuit.com)

| PR # | Impact | Rating | Contributor | Description |
|------|--------|--------|-------------|-------------|
| [#1436](https://github.com/tscircuit/tscircuit.com/pull/1436) | 🐳 Major | ⭐⭐⭐ | ArnavK-09 | Adds support for line navigation in the CodeEditor and GlobalFindReplace components, allowing users to navigate directly to specific lines in files. |
| [#1408](https://github.com/tscircuit/tscircuit.com/pull/1408) | 🐳 Major | ⭐⭐⭐ | ArnavK-09 | Adds a new import dialog for components from Runframe, allowing users to select and import components directly into the code editor. |
| [#1442](https://github.com/tscircuit/tscircuit.com/pull/1442) | 🐙 Minor | ⭐⭐ | ArnavK-09 | Changes the redirection behavior in CmdKMenu to navigate to the package view instead of the editor directly when a package is selected. |
| [#1438](https://github.com/tscircuit/tscircuit.com/pull/1438) | 🐙 Minor | ⭐⭐ | ArnavK-09 | Fixes the issue where the RunFrame component would rerender unnecessarily on mobile devices, improving user experience and developer experience. |

<details>
<summary>🐌 Tiny Contributions (8)</summary>

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#1427](https://github.com/tscircuit/tscircuit.com/pull/1427) | 🐌 Tiny | imrishabh18 | Adds tscircuit as a new dependency in the project, enabling its functionalities for use in the application. |
| [#1425](https://github.com/tscircuit/tscircuit.com/pull/1425) | 🐌 Tiny | imrishabh18 | Corrects the toast message displayed when requesting an AI review from An AI review has been generated. to An AI review has been requested. |
| [#1441](https://github.com/tscircuit/tscircuit.com/pull/1441) | 🐌 Tiny | ArnavK-09 | Updates the PackageCard component to conditionally load images based on the default view specified, defaulting to a 3D view if the specified view is not available. |
| [#1440](https://github.com/tscircuit/tscircuit.com/pull/1440) | 🐌 Tiny | ArnavK-09 | Fixes issue where package metadata was coming back as undefined in the API response. |
| [#1439](https://github.com/tscircuit/tscircuit.com/pull/1439) | 🐌 Tiny | ArnavK-09 | Fixes the handling of 404 errors for package views by returning a custom HTML response instead of throwing an error. |
| [#1437](https://github.com/tscircuit/tscircuit.com/pull/1437) | 🐌 Tiny | ArnavK-09 | Fixes the local trending page by ensuring it correctly filters and sorts packages based on star count, and includes minor adjustments to the EditorNav component. |
| [#1435](https://github.com/tscircuit/tscircuit.com/pull/1435) | 🐌 Tiny | ArnavK-09 | Renames the snippet base URL hook to use the packages keyword instead of snippets, ensuring consistency across the codebase. |
| [#1434](https://github.com/tscircuit/tscircuit.com/pull/1434) | 🐌 Tiny | ArnavK-09 | Adds conditional rendering for package type and visibility options based on the owners GitHub username, allowing the owner to change the package type and visibility settings. |

</details>

### [tscircuit/status](https://github.com/tscircuit/status)


<details>
<summary>🐌 Tiny Contributions (1)</summary>

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#46](https://github.com/tscircuit/status/pull/46) | 🐌 Tiny | imrishabh18 | Adds a health check for the tscircuit package to ensure its proper installation and functionality by creating a temporary project, installing the package, and building a circuit. |

</details>

### [tscircuit/schematic-symbols](https://github.com/tscircuit/schematic-symbols)

| PR # | Impact | Rating | Contributor | Description |
|------|--------|--------|-------------|-------------|
| [#318](https://github.com/tscircuit/schematic-symbols/pull/318) | 🐙 Minor | ⭐⭐ | Abse2001 | Introduces new schematic symbols for NPN and PNP transistors in various orientations (right, left, up, down). |

### [tscircuit/sparkfun-boards](https://github.com/tscircuit/sparkfun-boards)


<details>
<summary>🐌 Tiny Contributions (1)</summary>

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#55](https://github.com/tscircuit/sparkfun-boards/pull/55) | 🐌 Tiny | Abse2001 | Updates the username for the SparkFun Transceiver Breakout MAX3232 in the CODEOWNERS file. |

</details>

## Changes by Contributor

### [techmannih](https://github.com/techmannih)


<details>
<summary>🐌 Tiny Contributions (6)</summary>

| PR # | Impact | Description |
|------|--------|-------------|
| [#347](https://github.com/tscircuit/pcb-viewer/pull/347) | 🐌 Tiny | Updates the circuit-to-svg dependency to version 0.0.166 in package.json. |
| [#78](https://github.com/tscircuit/schematic-corpus/pull/78) | 🐌 Tiny | Adds a new design (design053) to the schematic corpus, which includes a new circuit board layout for improved autolayout algorithm functionality. |
| [#76](https://github.com/tscircuit/schematic-corpus/pull/76) | 🐌 Tiny | Adds a new design (design051) to the schematic corpus, which is intended to enhance the autorouting algorithm. |
| [#70](https://github.com/tscircuit/schematic-corpus/pull/70) | 🐌 Tiny | Adds a new design (design047) to the schematic corpus, which includes a new circuit board layout for improved autorouting capabilities. |
| [#72](https://github.com/tscircuit/schematic-corpus/pull/72) | 🐌 Tiny | Adds a new design048 circuit to the schematic corpus, which is intended to enhance the autorouting algorithm. |
| [#63](https://github.com/tscircuit/schematic-corpus/pull/63) | 🐌 Tiny | Fixes incorrect pin connections in design019 to ensure proper autolayout functionality. |

</details>

### [seveibar](https://github.com/seveibar)

| PRs # | Impact | Rating | Description |
|------|--------|--------|-------------|
| [#1045](https://github.com/tscircuit/core/pull/1045) | 🐳 Major | ⭐⭐⭐ | Adds elbow routing functionality for schematic traces, allowing for more flexible routing before falling back to autorouter when obstacles are encountered. |
| [#13](https://github.com/tscircuit/math-utils/pull/13) | 🐳 Major | ⭐⭐⭐ | Adds a new helper function to check for segment-rectangle intersections and cleans up the lockfile by removing the bun.lockb file and adding a bunfig.toml to disable lockfile saving. |
| [#55](https://github.com/tscircuit/bpc-graph/pull/55) | 🐳 Major | ⭐⭐⭐ | Adds functionality to handle layout variants for schematic graphs, allowing for better matching and adaptation of circuit designs. |
| [#51](https://github.com/tscircuit/bpc-graph/pull/51) | 🐳 Major | ⭐⭐⭐ | Fixes incorrect partitioning by implementing a depth-first search (DFS) algorithm that prioritizes processing the smallest nets first. |
| [#270](https://github.com/tscircuit/cli/pull/270) | 🐙 Minor | ⭐⭐ | Replaces the use of eval for importing tsx files with dynamic import, enhancing security and performance. |

<details>
<summary>🐌 Tiny Contributions (34)</summary>

| PR # | Impact | Description |
|------|--------|-------------|
| [#701](https://github.com/tscircuit/tscircuit/pull/701) | 🐌 Tiny | Adds a new smoke test workflow that installs the CLI and verifies its initialization and build process in a temporary directory. |
| [#700](https://github.com/tscircuit/tscircuit/pull/700) | 🐌 Tiny | Updates dependency versions in package.json to ensure compatibility and avoid overrides by adding all necessary dependencies that core needs. |
| [#38](https://github.com/tscircuit/circuit-json-util/pull/38) | 🐌 Tiny | Exposes the subtree helper in the public API for easier access and usage by developers. |
| [#320](https://github.com/tscircuit/props/pull/320) | 🐌 Tiny | Removes lockfiles and the dependency on tscircuitlayout from the project. |
| [#319](https://github.com/tscircuit/props/pull/319) | 🐌 Tiny | Removes support for the layout property in SubcircuitGroupProps and related components, impacting how layout configurations are handled in the library. |
| [#1056](https://github.com/tscircuit/core/pull/1056) | 🐌 Tiny | Updates React and related dependencies to version 19.1.x to address downstream issues with compatibility and performance. |
| [#1054](https://github.com/tscircuit/core/pull/1054) | 🐌 Tiny | Updates the circuit-json dependency to version 0.0.219 to prevent accidental installation of zod v4. |
| [#1053](https://github.com/tscircuit/core/pull/1053) | 🐌 Tiny | Removes support for layoutlayoutBuilder in PrimitiveComponent and Group components, streamlining the layout handling process by relying solely on manual edits. |
| [#1052](https://github.com/tscircuit/core/pull/1052) | 🐌 Tiny | Introduces layout variants for schematic graphs that handle pins without not_connected status, enhancing layout adaptability. |
| [#1047](https://github.com/tscircuit/core/pull/1047) | 🐌 Tiny | Stops the layout of net labels in the BPC graph and introduces a system for writing debug graphics, while ensuring debug graphics are not written during CI. |
| [#109](https://github.com/tscircuit/jscad-fiber/pull/109) | 🐌 Tiny | Adds react-reconciler as a peer dependency and updates its version in the package.json file. |
| [#12](https://github.com/tscircuit/math-utils/pull/12) | 🐌 Tiny | Removes the lockfile for the project and introduces a new configuration file to disable lockfile saving during installation. |
| [#679](https://github.com/tscircuit/eval/pull/679) | 🐌 Tiny | Adds additional debug logging in the entrypoint to assist in debugging user components and their rendering. |
| [#678](https://github.com/tscircuit/eval/pull/678) | 🐌 Tiny | Adds extensive debugging capabilities to the CircuitRunner and related modules, allowing for better tracking of execution flow and errors. |
| [#675](https://github.com/tscircuit/eval/pull/675) | 🐌 Tiny | Fixes the example3 test by bundling dependencies for the web worker and disabling code splitting to avoid network dependency issues. |
| [#673](https://github.com/tscircuit/eval/pull/673) | 🐌 Tiny | Updates the versions of the tscircuitcore and circuit-json dependencies in package.json. |
| [#670](https://github.com/tscircuit/eval/pull/670) | 🐌 Tiny | Updates the core version of the tscircuitcore package and modifies the dependency management script to synchronize dependencies with the core package. |
| [#871](https://github.com/tscircuit/runframe/pull/871) | 🐌 Tiny | Adds a GitHub Actions workflow for continuous branch release and modifies package.json to adjust build scripts and dependencies. |
| [#869](https://github.com/tscircuit/runframe/pull/869) | 🐌 Tiny | Updates the jscad-fiber dependency to version 0.0.80 in package.json |
| [#271](https://github.com/tscircuit/cli/pull/271) | 🐌 Tiny | Adds a smoketest Dockerfile and modifies the circuit JSON generation to support both default and named exports, ensuring components are correctly identified and rendered. |
| [#267](https://github.com/tscircuit/cli/pull/267) | 🐌 Tiny | Adds a debug environment variable for the tsci build process in the smoke-init-test workflow. |
| [#266](https://github.com/tscircuit/cli/pull/266) | 🐌 Tiny | Adds zod as a peer dependency at version 3 in package.json |
| [#265](https://github.com/tscircuit/cli/pull/265) | 🐌 Tiny | Adds a GitHub Actions workflow to validate the tsci init command by running smoke tests in a temporary environment. |
| [#264](https://github.com/tscircuit/cli/pull/264) | 🐌 Tiny | Updates the version of tscircuit and other dependencies in the project, ensuring compatibility and access to the latest features and fixes. |
| [#263](https://github.com/tscircuit/cli/pull/263) | 🐌 Tiny | Adds debug logging for the fsMap object in the circuit JSON generation process, allowing developers to view its contents during execution. |
| [#98](https://github.com/tscircuit/docs/pull/98) | 🐌 Tiny | Documents the usage and options for the tsci init command, providing users with guidance on initializing a new TSCircuit project. |
| [#97](https://github.com/tscircuit/docs/pull/97) | 🐌 Tiny | Removes the Publishing Modules documentation page from the repository. |
| [#57](https://github.com/tscircuit/bpc-graph/pull/57) | 🐌 Tiny | Updates the package.json dependencies and modifies a test file by removing a prop from a component. |
| [#56](https://github.com/tscircuit/bpc-graph/pull/56) | 🐌 Tiny | Clarifies layoutSchematicGraphVariants output by renaming result to fixedGraph for better code readability and understanding. |
| [#54](https://github.com/tscircuit/bpc-graph/pull/54) | 🐌 Tiny | Adds a new interactive schematic layout page that allows users to visualize and debug circuit layouts through a series of graphical steps. |
| [#53](https://github.com/tscircuit/bpc-graph/pull/53) | 🐌 Tiny | Sets the graphics title in the getGraphicsForBpcGraph function when a title is provided in the options, ensuring that the title is displayed correctly in the graphics output. |
| [#52](https://github.com/tscircuit/bpc-graph/pull/52) | 🐌 Tiny | Fixes reproduction issue in tests by using the correct corpus without net labels, ensuring accurate schematic representation. |
| [#64](https://github.com/tscircuit/schematic-corpus/pull/64) | 🐌 Tiny | Add a script to copy SVG snapshots to the site build output directory during the site build process. |
| [#62](https://github.com/tscircuit/schematic-corpus/pull/62) | 🐌 Tiny | Adds functionality to export BPC graphs without net labels, allowing for better handling of circuits that do not utilize net labels. |

</details>

### [imrishabh18](https://github.com/imrishabh18)

| PRs # | Impact | Rating | Description |
|------|--------|--------|-------------|
| [#55](https://github.com/tscircuit/checks/pull/55) | 🐳 Major | ⭐⭐⭐ | Adds a DRC check to ensure that two PCB traces maintain a minimum specified distance between them. |
| [#1050](https://github.com/tscircuit/core/pull/1050) | 🐙 Minor | ⭐⭐ | Fixes runtime error caused by incorrect import of circuit-to-svg, preventing tests from passing after updating tscircuit with the latest core. |

<details>
<summary>🐌 Tiny Contributions (8)</summary>

| PR # | Impact | Description |
|------|--------|-------------|
| [#699](https://github.com/tscircuit/tscircuit/pull/699) | 🐌 Tiny | Updates the footprinter dependency to version 0.0.193 in package.json |
| [#698](https://github.com/tscircuit/tscircuit/pull/698) | 🐌 Tiny | Fix errors on test due to stale lock file. |
| [#319](https://github.com/tscircuit/footprinter/pull/319) | 🐌 Tiny | Adds support for custom pad sizes for the 0603 footprint, including a regression test for the new functionality and clarification on numeric string handling. |
| [#57](https://github.com/tscircuit/checks/pull/57) | 🐌 Tiny | Removes the checkTraceSpacing method, which checks for minimum spacing between PCB traces, from the codebase. |
| [#1427](https://github.com/tscircuit/tscircuit.com/pull/1427) | 🐌 Tiny | Adds tscircuit as a new dependency in the project, enabling its functionalities for use in the application. |
| [#1425](https://github.com/tscircuit/tscircuit.com/pull/1425) | 🐌 Tiny | Corrects the toast message displayed when requesting an AI review from An AI review has been generated. to An AI review has been requested. |
| [#46](https://github.com/tscircuit/status/pull/46) | 🐌 Tiny | Adds a health check for the tscircuit package to ensure its proper installation and functionality by creating a temporary project, installing the package, and building a circuit. |
| [#262](https://github.com/tscircuit/cli/pull/262) | 🐌 Tiny | Adds a -y--yes option to the tsci init command to allow users to skip prompts and use default values during project initialization. |

</details>

### [MustafaMulla29](https://github.com/MustafaMulla29)


<details>
<summary>🐌 Tiny Contributions (6)</summary>

| PR # | Impact | Description |
|------|--------|-------------|
| [#318](https://github.com/tscircuit/props/pull/318) | 🐌 Tiny | Adds the pcbPinLabels prop to components to allow users to specify labels for PCB pins, enhancing the flexibility of pin representation in schematics. |
| [#1058](https://github.com/tscircuit/core/pull/1058) | 🐌 Tiny | Adds a new prop pcbPinLabels to allow different pin labeling for PCB and schematic representations of components. |
| [#1057](https://github.com/tscircuit/core/pull/1057) | 🐌 Tiny | Updates the dependency version of tscircuitprops to include the newly exported property pcbPinLabels. |
| [#80](https://github.com/tscircuit/schematic-corpus/pull/80) | 🐌 Tiny | Removes the schPinStyle property from the design52 component, simplifying the design structure. |
| [#79](https://github.com/tscircuit/schematic-corpus/pull/79) | 🐌 Tiny | Adds a new design (design52) to the schematic corpus, which includes a new circuit board layout for improved autorouting capabilities. |
| [#73](https://github.com/tscircuit/schematic-corpus/pull/73) | 🐌 Tiny | Adds a new design (design049) to the schematic corpus, which is intended to enhance the autorouting algorithms performance. |

</details>

### [abimaelmartell](https://github.com/abimaelmartell)


<details>
<summary>🐌 Tiny Contributions (1)</summary>

| PR # | Impact | Description |
|------|--------|-------------|
| [#317](https://github.com/tscircuit/props/pull/317) | 🐌 Tiny | Allows chip components to specify connections using either pin numbers or labels, enhancing flexibility in component configuration. |

</details>

### [Abse2001](https://github.com/Abse2001)

| PRs # | Impact | Rating | Description |
|------|--------|--------|-------------|
| [#318](https://github.com/tscircuit/schematic-symbols/pull/318) | 🐙 Minor | ⭐⭐ | Introduces new schematic symbols for NPN and PNP transistors in various orientations (right, left, up, down). |

<details>
<summary>🐌 Tiny Contributions (4)</summary>

| PR # | Impact | Description |
|------|--------|-------------|
| [#55](https://github.com/tscircuit/sparkfun-boards/pull/55) | 🐌 Tiny | Updates the username for the SparkFun Transceiver Breakout MAX3232 in the CODEOWNERS file. |
| [#77](https://github.com/tscircuit/schematic-corpus/pull/77) | 🐌 Tiny | Adds a new design (design054) to the schematic corpus, which includes a new circuit board layout with specific component placements to enhance the autolayout algorithm. |
| [#75](https://github.com/tscircuit/schematic-corpus/pull/75) | 🐌 Tiny | Adds a new design (design050) to the schematic corpus, which includes a new circuit board layout for improved autorouting capabilities. |
| [#71](https://github.com/tscircuit/schematic-corpus/pull/71) | 🐌 Tiny | Adds a CODEOWNERS file to define code ownership for schematic-corpus designs. |

</details>

### [ArnavK-09](https://github.com/ArnavK-09)

| PRs # | Impact | Rating | Description |
|------|--------|--------|-------------|
| [#1436](https://github.com/tscircuit/tscircuit.com/pull/1436) | 🐳 Major | ⭐⭐⭐ | Adds support for line navigation in the CodeEditor and GlobalFindReplace components, allowing users to navigate directly to specific lines in files. |
| [#1408](https://github.com/tscircuit/tscircuit.com/pull/1408) | 🐳 Major | ⭐⭐⭐ | Adds a new import dialog for components from Runframe, allowing users to select and import components directly into the code editor. |
| [#1442](https://github.com/tscircuit/tscircuit.com/pull/1442) | 🐙 Minor | ⭐⭐ | Changes the redirection behavior in CmdKMenu to navigate to the package view instead of the editor directly when a package is selected. |
| [#1438](https://github.com/tscircuit/tscircuit.com/pull/1438) | 🐙 Minor | ⭐⭐ | Fixes the issue where the RunFrame component would rerender unnecessarily on mobile devices, improving user experience and developer experience. |

<details>
<summary>🐌 Tiny Contributions (6)</summary>

| PR # | Impact | Description |
|------|--------|-------------|
| [#1441](https://github.com/tscircuit/tscircuit.com/pull/1441) | 🐌 Tiny | Updates the PackageCard component to conditionally load images based on the default view specified, defaulting to a 3D view if the specified view is not available. |
| [#1440](https://github.com/tscircuit/tscircuit.com/pull/1440) | 🐌 Tiny | Fixes issue where package metadata was coming back as undefined in the API response. |
| [#1439](https://github.com/tscircuit/tscircuit.com/pull/1439) | 🐌 Tiny | Fixes the handling of 404 errors for package views by returning a custom HTML response instead of throwing an error. |
| [#1437](https://github.com/tscircuit/tscircuit.com/pull/1437) | 🐌 Tiny | Fixes the local trending page by ensuring it correctly filters and sorts packages based on star count, and includes minor adjustments to the EditorNav component. |
| [#1435](https://github.com/tscircuit/tscircuit.com/pull/1435) | 🐌 Tiny | Renames the snippet base URL hook to use the packages keyword instead of snippets, ensuring consistency across the codebase. |
| [#1434](https://github.com/tscircuit/tscircuit.com/pull/1434) | 🐌 Tiny | Adds conditional rendering for package type and visibility options based on the owners GitHub username, allowing the owner to change the package type and visibility settings. |

</details>

### [tscircuitbot](https://github.com/tscircuitbot)


<details>
<summary>🐌 Tiny Contributions (2)</summary>

| PR # | Impact | Description |
|------|--------|-------------|
| [#677](https://github.com/tscircuit/eval/pull/677) | 🐌 Tiny | Updates the tscircuitcore dependency to version 0.0.558 and updates related dependencies for React and TypeScript types. |
| [#662](https://github.com/tscircuit/eval/pull/662) | 🐌 Tiny | Updates the tscircuitcore package from version 0.0.549 to 0.0.553 and updates the graphics-debug package from version 0.0.57 to 0.0.60. |

</details>

## Repository Owners

| Repository | Codeowners |
|------------|------------|
| [footprinter](https://github.com/tscircuit/footprinter/blob/main/.github/CODEOWNERS) | [techmannih](https://github.com/techmannih) |
| [tscircuit.com](https://github.com/tscircuit/tscircuit.com/blob/main/.github/CODEOWNERS) | [imrishabh18](https://github.com/imrishabh18) |
| [cli](https://github.com/tscircuit/cli/blob/main/.github/CODEOWNERS) | [imrishabh18](https://github.com/imrishabh18), [seveibar](https://github.com/seveibar) |
| [schematic-symbols](https://github.com/tscircuit/schematic-symbols/blob/main/.github/CODEOWNERS) | [seveibar](https://github.com/seveibar) |

## Repos by Owner

| User | Repo |
|------|------|
| [techmannih](https://github.com/techmannih) | [footprinter](https://github.com/tscircuit/footprinter/blob/main/.github/CODEOWNERS) |
| [imrishabh18](https://github.com/imrishabh18) | [tscircuit.com](https://github.com/tscircuit/tscircuit.com/blob/main/.github/CODEOWNERS) |
|  | [cli](https://github.com/tscircuit/cli/blob/main/.github/CODEOWNERS) |
| [seveibar](https://github.com/seveibar) | [schematic-symbols](https://github.com/tscircuit/schematic-symbols/blob/main/.github/CODEOWNERS) |
|  | [cli](https://github.com/tscircuit/cli/blob/main/.github/CODEOWNERS) |



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
