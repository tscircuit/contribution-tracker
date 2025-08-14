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

# Contribution Overview 2025-08-13

## PRs by Repository

```mermaid
pie
    "tscircuit/runframe" : 3
    "tscircuit/tscircuit" : 2
    "tscircuit/core" : 3
    "tscircuit/tscircuit.com" : 7
    "tscircuit/cli" : 1
    "tscircuit/circuit-json" : 1
    "tscircuit/3d-viewer" : 1
    "tscircuit/jscad-electronics" : 1
    "tscircuit/jscad-fiber" : 2
    "tscircuit/jlcsearch" : 1
    "tscircuit/calculate-packing" : 2
    "tscircuit/circuit-json-util" : 1
    "tscircuit/props" : 3
    "tscircuit/footprinter" : 1
    "tscircuit/simple-3d-svg" : 1
    "tscircuit/led-water-accelerometer" : 1
    "tscircuit/easyeda-converter" : 1
    "tscircuit/schematic-symbols" : 1
    "tscircuit/eval" : 1
    "tscircuit/sparkfun-boards" : 1
```

## Contributor Overview

| Contributor | 🐳 Major | 🐙 Minor | 🐌 Tiny | ⭐ | Score | Discussion Contributions |
|-------------|---------|---------|---------|-----|----------------|--------------------------|
| [seveibar](#seveibar) | 3 | 1 | 8 | ⭐⭐⭐ | 37 | 0🔹 0🔶 0💎 |
| [ArnavK-09](#ArnavK-09) | 3 | 1 | 7 | ⭐⭐ | 21 | 0🔹 0🔶 0💎 |
| [imrishabh18](#imrishabh18) | 0 | 1 | 6 | ⭐ | 9 | 0🔹 0🔶 0💎 |
| [MustafaMulla29](#MustafaMulla29) | 1 | 0 | 0 | ⭐ | 4 | 0🔹 0🔶 0💎 |
| [pxlpal](#pxlpal) | 0 | 1 | 1 |  | 3 | 0🔹 0🔶 0💎 |
| [techmannih](#techmannih) | 0 | 0 | 1 |  | 2 | 0🔹 0🔶 0💎 |
| [tscircuitbot](#tscircuitbot) | 0 | 0 | 1 |  | 1 | 0🔹 0🔶 0💎 |

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
| [MustafaMulla29](#MustafaMulla29) | 2 | 1 | 1 | 0 | 0 | 3 | 1 | 4 | 0 | 0 | 0 |
| [seveibar](#seveibar) | 1 | 0 | 0 | 19 | 3 | 16 | 12 | 37 | 0 | 0 | 0 |
| [imrishabh18](#imrishabh18) | 13 | 3 | 1 | 0 | 0 | 11 | 7 | 9 | 0 | 0 | 0 |
| [ArnavK-09](#ArnavK-09) | 20 | 14 | 0 | 0 | 0 | 16 | 12 | 21 | 0 | 0 | 0 |
| [graphite-app[bot]](#graphite-app[bot]) | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| [pxlpal](#pxlpal) | 5 | 2 | 1 | 0 | 0 | 3 | 2 | 3 | 0 | 0 | 0 |
| [abimaelmartell](#abimaelmartell) | 0 | 0 | 0 | 0 | 0 | 1 | 0 | 0 | 0 | 0 | 0 |
| [techmannih](#techmannih) | 1 | 0 | 0 | 0 | 0 | 2 | 1 | 2 | 0 | 0 | 0 |
| [tscircuitbot](#tscircuitbot) | 0 | 0 | 0 | 0 | 0 | 5 | 1 | 1 | 0 | 0 | 0 |
| [ShiboSoftwareDev](#ShiboSoftwareDev) | 0 | 0 | 0 | 1 | 0 | 1 | 0 | 0 | 0 | 0 | 0 |

## Top 7 Repositories by Contribution Points

```mermaid
pie
    "tscircuit/tscircuit.com" : 17
    "tscircuit/core" : 6
    "tscircuit/calculate-packing" : 6
    "tscircuit/runframe" : 4
    "tscircuit/jlcsearch" : 4
    "tscircuit/sparkfun-boards" : 4
    "tscircuit/props" : 3
```

## Changes by Repository

### [tscircuit/runframe](https://github.com/tscircuit/runframe)

| PR # | Impact | Rating | Contributor | Description |
|------|--------|--------|-------------|-------------|
| [#999](https://github.com/tscircuit/runframe/pull/999) | 🐙 Minor | ⭐⭐ | imrishabh18 | Fixes the process reference error in the browser console by ensuring that the tscircuit code works without needing to manually define the process object in the browser environment. |

<details>
<summary>🐌 Tiny Contributions (2)</summary>

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#996](https://github.com/tscircuit/runframe/pull/996) | 🐌 Tiny | imrishabh18 | Renames the RunFrameCliLeftHeader component to FileMenuLeftHeader and adds support for the isWebEmbedded prop, modifying the components behavior based on its value. |
| [#994](https://github.com/tscircuit/runframe/pull/994) | 🐌 Tiny | seveibar | Updates the schematic-symbols dependency to version 0.0.185 in package.json |

</details>

### [tscircuit/tscircuit](https://github.com/tscircuit/tscircuit)


<details>
<summary>🐌 Tiny Contributions (2)</summary>

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#739](https://github.com/tscircuit/tscircuit/pull/739) | 🐌 Tiny | imrishabh18 | Updates the tscircuitrunframe dependency to version 0.0.808, ensuring compatibility without the use of process. |
| [#738](https://github.com/tscircuit/tscircuit/pull/738) | 🐌 Tiny | imrishabh18 | Updates the version of the tscircuitrunframe dependency in package.json from 0.0.788 to 0.0.806 |

</details>

### [tscircuit/core](https://github.com/tscircuit/core)

| PR # | Impact | Rating | Contributor | Description |
|------|--------|--------|-------------|-------------|
| [#1153](https://github.com/tscircuit/core/pull/1153) | 🐳 Major | ⭐⭐⭐ | seveibar | Fixes issue where match pack layout fails for nested groups in schematic designs, ensuring proper layout and rendering of components. |

<details>
<summary>🐌 Tiny Contributions (2)</summary>

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#1148](https://github.com/tscircuit/core/pull/1148) | 🐌 Tiny | imrishabh18 | Changes the error type from source_trace_not_connected to source_trace_not_connected_error in error handling and related tests. |
| [#1154](https://github.com/tscircuit/core/pull/1154) | 🐌 Tiny | seveibar | Adds support for positive and negative pin aliases for capacitors when defined with footprinter strings, aligning with IPC standards. |

</details>

### [tscircuit/tscircuit.com](https://github.com/tscircuit/tscircuit.com)

| PR # | Impact | Rating | Contributor | Description |
|------|--------|--------|-------------|-------------|
| [#1562](https://github.com/tscircuit/tscircuit.com/pull/1562) | 🐳 Major | ⭐⭐⭐ | ArnavK-09 | Adds a function to download GLTF models from Circuit JSON and updates the DownloadButtonAndMenu component to support GLB and GLTF formats. |
| [#1574](https://github.com/tscircuit/tscircuit.com/pull/1574) | 🐳 Major | ⭐⭐⭐ | ArnavK-09 | Optimizes file content fetching in the ImportantFilesView component to prevent multiple requests and reduce latency during loading. |
| [#1572](https://github.com/tscircuit/tscircuit.com/pull/1572) | 🐳 Major | ⭐⭐⭐ | ArnavK-09 | Adds loading and error states for the package build preview, improving user feedback during image loading. |
| [#1573](https://github.com/tscircuit/tscircuit.com/pull/1573) | 🐙 Minor | ⭐⭐ | ArnavK-09 | Only show AI description tab when hasAiContent is true and AI review tab when hasAiReview is true or user is owner. This prevents showing empty or irrelevant tabs to users. |

<details>
<summary>🐌 Tiny Contributions (3)</summary>

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#1570](https://github.com/tscircuit/tscircuit.com/pull/1570) | 🐌 Tiny | imrishabh18 | Hides the GitHub repository button and View Source option when a package does not have a linked repository, ensuring that these options are only available when a repository is connected. |
| [#1575](https://github.com/tscircuit/tscircuit.com/pull/1575) | 🐌 Tiny | ArnavK-09 | Adjusts the position of the dropdown menu in the HeaderLogin component for better mobile usability. |
| [#1577](https://github.com/tscircuit/tscircuit.com/pull/1577) | 🐌 Tiny | ArnavK-09 | Removes unused components, pages, and dependencies, and cleans up the codebase by eliminating commented code and unused imports. |

</details>

### [tscircuit/cli](https://github.com/tscircuit/cli)


<details>
<summary>🐌 Tiny Contributions (1)</summary>

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#313](https://github.com/tscircuit/cli/pull/313) | 🐌 Tiny | imrishabh18 | Handles cancellation of interactive sessions gracefully by catching TypeErrors and exiting with a specific code. |

</details>

### [tscircuit/circuit-json](https://github.com/tscircuit/circuit-json)


<details>
<summary>🐌 Tiny Contributions (1)</summary>

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#253](https://github.com/tscircuit/circuit-json/pull/253) | 🐌 Tiny | ArnavK-09 | Replaces the nanoid dependency with a custom randomId function for generating random string IDs in the circuit element key generation process. |

</details>

### [tscircuit/3d-viewer](https://github.com/tscircuit/3d-viewer)


<details>
<summary>🐌 Tiny Contributions (1)</summary>

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#410](https://github.com/tscircuit/3d-viewer/pull/410) | 🐌 Tiny | ArnavK-09 | Updates React to version 19.1.0, fixes type annotations for React refs, removes unused imports from storybook files, updates biome.json configuration and schema version, and adds path resolution alias in storybook config. |

</details>

### [tscircuit/jscad-electronics](https://github.com/tscircuit/jscad-electronics)


<details>
<summary>🐌 Tiny Contributions (1)</summary>

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#105](https://github.com/tscircuit/jscad-electronics/pull/105) | 🐌 Tiny | ArnavK-09 | Update React and related types to version 19, remove unused jscad-fiber and react-dom from devDependencies, add sourcemap generation to build script, and bump tscircuitfootprinter and vite versions |

</details>

### [tscircuit/jscad-fiber](https://github.com/tscircuit/jscad-fiber)


<details>
<summary>🐌 Tiny Contributions (2)</summary>

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#114](https://github.com/tscircuit/jscad-fiber/pull/114) | 🐌 Tiny | ArnavK-09 | Update GitHub Actions workflows to use the latest versions of actionscheckout and setup-bun, and add a new build-check workflow with Node.js 20 and a frozen lockfile. |
| [#113](https://github.com/tscircuit/jscad-fiber/pull/113) | 🐌 Tiny | ArnavK-09 | Removes react, react-dom, and react-reconciler as they are no longer needed. Updates react-threedrei and react-threefiber to specific versions for better compatibility. |

</details>

### [tscircuit/jlcsearch](https://github.com/tscircuit/jlcsearch)

| PR # | Impact | Rating | Contributor | Description |
|------|--------|--------|-------------|-------------|
| [#78](https://github.com/tscircuit/jlcsearch/pull/78) | 🐳 Major | ⭐⭐⭐ | seveibar | Add RISC-V processor search route, documentation, and expose link on site index. |

### [tscircuit/calculate-packing](https://github.com/tscircuit/calculate-packing)

| PR # | Impact | Rating | Contributor | Description |
|------|--------|--------|-------------|-------------|
| [#18](https://github.com/tscircuit/calculate-packing/pull/18) | 🐳 Major | ⭐⭐⭐ | seveibar | Simplifies outlines by merging adjacent collinear segments into single segments, improving outline representation. |
| [#17](https://github.com/tscircuit/calculate-packing/pull/17) | 🐙 Minor | ⭐⭐ | seveibar | Adds ccwRotationDegrees to the packed component output to preserve rotation information during packing. |

### [tscircuit/circuit-json-util](https://github.com/tscircuit/circuit-json-util)


<details>
<summary>🐌 Tiny Contributions (1)</summary>

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#60](https://github.com/tscircuit/circuit-json-util/pull/60) | 🐌 Tiny | seveibar | Add functions to reposition schematic components and groups, including bounds calculation and type checking for schematic transformations. |

</details>

### [tscircuit/props](https://github.com/tscircuit/props)


<details>
<summary>🐌 Tiny Contributions (3)</summary>

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#358](https://github.com/tscircuit/props/pull/358) | 🐌 Tiny | seveibar | Allows setting schStroke on trace components to control schematic stroke color and accepts any string value, along with adding tests for schStroke. |
| [#356](https://github.com/tscircuit/props/pull/356) | 🐌 Tiny | seveibar | Adds manufacturerPartNumber and mpn properties to the crystal component, along with documentation and tests for these new props. |
| [#357](https://github.com/tscircuit/props/pull/357) | 🐌 Tiny | pxlpal | Allows internallyConnectedPins to include numbers in jumper, connector, and chip props, documents number support in README and generated docs, and adds a test for numeric internally connected pins. |

</details>

### [tscircuit/footprinter](https://github.com/tscircuit/footprinter)


<details>
<summary>🐌 Tiny Contributions (1)</summary>

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#361](https://github.com/tscircuit/footprinter/pull/361) | 🐌 Tiny | seveibar | Add silkscreen label margin option to control spacing between pads and silkscreen labels, and skip pin-1 triangle marker when silkscreen labels are enabled. |

</details>

### [tscircuit/simple-3d-svg](https://github.com/tscircuit/simple-3d-svg)


<details>
<summary>🐌 Tiny Contributions (1)</summary>

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#55](https://github.com/tscircuit/simple-3d-svg/pull/55) | 🐌 Tiny | seveibar | Parse 3MF basematerial colors and assign them to mesh triangles, render 3MF meshes with their triangle colors, and test 3MF color handling and update snapshot. |

</details>

### [tscircuit/led-water-accelerometer](https://github.com/tscircuit/led-water-accelerometer)


<details>
<summary>🐌 Tiny Contributions (1)</summary>

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#8](https://github.com/tscircuit/led-water-accelerometer/pull/8) | 🐌 Tiny | seveibar | Adds an image to the README.md file for better visual representation of the LED matrix with accelerometer project. |

</details>

### [tscircuit/easyeda-converter](https://github.com/tscircuit/easyeda-converter)

| PR # | Impact | Rating | Contributor | Description |
|------|--------|--------|-------------|-------------|
| [#309](https://github.com/tscircuit/easyeda-converter/pull/309) | 🐙 Minor | ⭐⭐ | pxlpal | Fixes CAD component recentering and model seating logic to ensure proper positioning and rotation of components in the PCB layout. |

### [tscircuit/schematic-symbols](https://github.com/tscircuit/schematic-symbols)


<details>
<summary>🐌 Tiny Contributions (1)</summary>

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#343](https://github.com/tscircuit/schematic-symbols/pull/343) | 🐌 Tiny | techmannih | Updates the bun-match-svg dependency to version 0.0.12 in the package.json file. |

</details>

### [tscircuit/eval](https://github.com/tscircuit/eval)


<details>
<summary>🐌 Tiny Contributions (1)</summary>

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#828](https://github.com/tscircuit/eval/pull/828) | 🐌 Tiny | tscircuitbot | Updates the tscircuitcore dependency to version 0.0.625 in the package.json file. |

</details>

### [tscircuit/sparkfun-boards](https://github.com/tscircuit/sparkfun-boards)

| PR # | Impact | Rating | Contributor | Description |
|------|--------|--------|-------------|-------------|
| [#117](https://github.com/tscircuit/sparkfun-boards/pull/117) | 🐳 Major | ⭐⭐⭐ | MustafaMulla29 | Introduces a new circuit board for the SparkFun RFID Reader Breakout, including its schematic and footprint. |

## Changes by Contributor

### [imrishabh18](https://github.com/imrishabh18)

| PRs # | Impact | Rating | Description |
|------|--------|--------|-------------|
| [#999](https://github.com/tscircuit/runframe/pull/999) | 🐙 Minor | ⭐⭐ | Fixes the process reference error in the browser console by ensuring that the tscircuit code works without needing to manually define the process object in the browser environment. |

<details>
<summary>🐌 Tiny Contributions (6)</summary>

| PR # | Impact | Description |
|------|--------|-------------|
| [#739](https://github.com/tscircuit/tscircuit/pull/739) | 🐌 Tiny | Updates the tscircuitrunframe dependency to version 0.0.808, ensuring compatibility without the use of process. |
| [#738](https://github.com/tscircuit/tscircuit/pull/738) | 🐌 Tiny | Updates the version of the tscircuitrunframe dependency in package.json from 0.0.788 to 0.0.806 |
| [#1148](https://github.com/tscircuit/core/pull/1148) | 🐌 Tiny | Changes the error type from source_trace_not_connected to source_trace_not_connected_error in error handling and related tests. |
| [#1570](https://github.com/tscircuit/tscircuit.com/pull/1570) | 🐌 Tiny | Hides the GitHub repository button and View Source option when a package does not have a linked repository, ensuring that these options are only available when a repository is connected. |
| [#996](https://github.com/tscircuit/runframe/pull/996) | 🐌 Tiny | Renames the RunFrameCliLeftHeader component to FileMenuLeftHeader and adds support for the isWebEmbedded prop, modifying the components behavior based on its value. |
| [#313](https://github.com/tscircuit/cli/pull/313) | 🐌 Tiny | Handles cancellation of interactive sessions gracefully by catching TypeErrors and exiting with a specific code. |

</details>

### [ArnavK-09](https://github.com/ArnavK-09)

| PRs # | Impact | Rating | Description |
|------|--------|--------|-------------|
| [#1562](https://github.com/tscircuit/tscircuit.com/pull/1562) | 🐳 Major | ⭐⭐⭐ | Adds a function to download GLTF models from Circuit JSON and updates the DownloadButtonAndMenu component to support GLB and GLTF formats. |
| [#1574](https://github.com/tscircuit/tscircuit.com/pull/1574) | 🐳 Major | ⭐⭐⭐ | Optimizes file content fetching in the ImportantFilesView component to prevent multiple requests and reduce latency during loading. |
| [#1572](https://github.com/tscircuit/tscircuit.com/pull/1572) | 🐳 Major | ⭐⭐⭐ | Adds loading and error states for the package build preview, improving user feedback during image loading. |
| [#1573](https://github.com/tscircuit/tscircuit.com/pull/1573) | 🐙 Minor | ⭐⭐ | Only show AI description tab when hasAiContent is true and AI review tab when hasAiReview is true or user is owner. This prevents showing empty or irrelevant tabs to users. |

<details>
<summary>🐌 Tiny Contributions (7)</summary>

| PR # | Impact | Description |
|------|--------|-------------|
| [#253](https://github.com/tscircuit/circuit-json/pull/253) | 🐌 Tiny | Replaces the nanoid dependency with a custom randomId function for generating random string IDs in the circuit element key generation process. |
| [#410](https://github.com/tscircuit/3d-viewer/pull/410) | 🐌 Tiny | Updates React to version 19.1.0, fixes type annotations for React refs, removes unused imports from storybook files, updates biome.json configuration and schema version, and adds path resolution alias in storybook config. |
| [#105](https://github.com/tscircuit/jscad-electronics/pull/105) | 🐌 Tiny | Update React and related types to version 19, remove unused jscad-fiber and react-dom from devDependencies, add sourcemap generation to build script, and bump tscircuitfootprinter and vite versions |
| [#114](https://github.com/tscircuit/jscad-fiber/pull/114) | 🐌 Tiny | Update GitHub Actions workflows to use the latest versions of actionscheckout and setup-bun, and add a new build-check workflow with Node.js 20 and a frozen lockfile. |
| [#113](https://github.com/tscircuit/jscad-fiber/pull/113) | 🐌 Tiny | Removes react, react-dom, and react-reconciler as they are no longer needed. Updates react-threedrei and react-threefiber to specific versions for better compatibility. |
| [#1575](https://github.com/tscircuit/tscircuit.com/pull/1575) | 🐌 Tiny | Adjusts the position of the dropdown menu in the HeaderLogin component for better mobile usability. |
| [#1577](https://github.com/tscircuit/tscircuit.com/pull/1577) | 🐌 Tiny | Removes unused components, pages, and dependencies, and cleans up the codebase by eliminating commented code and unused imports. |

</details>

### [seveibar](https://github.com/seveibar)

| PRs # | Impact | Rating | Description |
|------|--------|--------|-------------|
| [#1153](https://github.com/tscircuit/core/pull/1153) | 🐳 Major | ⭐⭐⭐ | Fixes issue where match pack layout fails for nested groups in schematic designs, ensuring proper layout and rendering of components. |
| [#78](https://github.com/tscircuit/jlcsearch/pull/78) | 🐳 Major | ⭐⭐⭐ | Add RISC-V processor search route, documentation, and expose link on site index. |
| [#18](https://github.com/tscircuit/calculate-packing/pull/18) | 🐳 Major | ⭐⭐⭐ | Simplifies outlines by merging adjacent collinear segments into single segments, improving outline representation. |
| [#17](https://github.com/tscircuit/calculate-packing/pull/17) | 🐙 Minor | ⭐⭐ | Adds ccwRotationDegrees to the packed component output to preserve rotation information during packing. |

<details>
<summary>🐌 Tiny Contributions (8)</summary>

| PR # | Impact | Description |
|------|--------|-------------|
| [#60](https://github.com/tscircuit/circuit-json-util/pull/60) | 🐌 Tiny | Add functions to reposition schematic components and groups, including bounds calculation and type checking for schematic transformations. |
| [#358](https://github.com/tscircuit/props/pull/358) | 🐌 Tiny | Allows setting schStroke on trace components to control schematic stroke color and accepts any string value, along with adding tests for schStroke. |
| [#356](https://github.com/tscircuit/props/pull/356) | 🐌 Tiny | Adds manufacturerPartNumber and mpn properties to the crystal component, along with documentation and tests for these new props. |
| [#361](https://github.com/tscircuit/footprinter/pull/361) | 🐌 Tiny | Add silkscreen label margin option to control spacing between pads and silkscreen labels, and skip pin-1 triangle marker when silkscreen labels are enabled. |
| [#1154](https://github.com/tscircuit/core/pull/1154) | 🐌 Tiny | Adds support for positive and negative pin aliases for capacitors when defined with footprinter strings, aligning with IPC standards. |
| [#994](https://github.com/tscircuit/runframe/pull/994) | 🐌 Tiny | Updates the schematic-symbols dependency to version 0.0.185 in package.json |
| [#55](https://github.com/tscircuit/simple-3d-svg/pull/55) | 🐌 Tiny | Parse 3MF basematerial colors and assign them to mesh triangles, render 3MF meshes with their triangle colors, and test 3MF color handling and update snapshot. |
| [#8](https://github.com/tscircuit/led-water-accelerometer/pull/8) | 🐌 Tiny | Adds an image to the README.md file for better visual representation of the LED matrix with accelerometer project. |

</details>

### [pxlpal](https://github.com/pxlpal)

| PRs # | Impact | Rating | Description |
|------|--------|--------|-------------|
| [#309](https://github.com/tscircuit/easyeda-converter/pull/309) | 🐙 Minor | ⭐⭐ | Fixes CAD component recentering and model seating logic to ensure proper positioning and rotation of components in the PCB layout. |

<details>
<summary>🐌 Tiny Contributions (1)</summary>

| PR # | Impact | Description |
|------|--------|-------------|
| [#357](https://github.com/tscircuit/props/pull/357) | 🐌 Tiny | Allows internallyConnectedPins to include numbers in jumper, connector, and chip props, documents number support in README and generated docs, and adds a test for numeric internally connected pins. |

</details>

### [techmannih](https://github.com/techmannih)


<details>
<summary>🐌 Tiny Contributions (1)</summary>

| PR # | Impact | Description |
|------|--------|-------------|
| [#343](https://github.com/tscircuit/schematic-symbols/pull/343) | 🐌 Tiny | Updates the bun-match-svg dependency to version 0.0.12 in the package.json file. |

</details>

### [tscircuitbot](https://github.com/tscircuitbot)


<details>
<summary>🐌 Tiny Contributions (1)</summary>

| PR # | Impact | Description |
|------|--------|-------------|
| [#828](https://github.com/tscircuit/eval/pull/828) | 🐌 Tiny | Updates the tscircuitcore dependency to version 0.0.625 in the package.json file. |

</details>

### [MustafaMulla29](https://github.com/MustafaMulla29)

| PRs # | Impact | Rating | Description |
|------|--------|--------|-------------|
| [#117](https://github.com/tscircuit/sparkfun-boards/pull/117) | 🐳 Major | ⭐⭐⭐ | Introduces a new circuit board for the SparkFun RFID Reader Breakout, including its schematic and footprint. |

## Repository Owners

| Repository | Codeowners |
|------------|------------|
| [builder](https://github.com/tscircuit/builder/blob/main/.github/CODEOWNERS) | [seveibar](https://github.com/seveibar)
| [pcb-viewer](https://github.com/tscircuit/pcb-viewer/blob/main/.github/CODEOWNERS) | [seveibar](https://github.com/seveibar), [ShiboSoftwareDev](https://github.com/ShiboSoftwareDev)
| [footprints](https://github.com/tscircuit/footprints/blob/main/.github/CODEOWNERS) | [seveibar](https://github.com/seveibar)
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
| [sparkfun-boards](https://github.com/tscircuit/sparkfun-boards/blob/main/.github/CODEOWNERS) | [ShiboSoftwareDev](https://github.com/ShiboSoftwareDev), [MustafaMulla29](https://github.com/MustafaMulla29), [Anshgrover23](https://github.com/Anshgrover23), [Abse2001](https://github.com/Abse2001), [techmannih](https://github.com/techmannih)
| [schematic-corpus](https://github.com/tscircuit/schematic-corpus/blob/main/.github/CODEOWNERS) | [Abse2001](https://github.com/Abse2001)

## Repositories by Owner

| User | Repo |
|------|------|
| [seveibar](https://github.com/seveibar) | [builder](https://github.com/tscircuit/builder/blob/main/.github/CODEOWNERS) |
|  | [pcb-viewer](https://github.com/tscircuit/pcb-viewer/blob/main/.github/CODEOWNERS) |
|  | [footprints](https://github.com/tscircuit/footprints/blob/main/.github/CODEOWNERS) |
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
| [MustafaMulla29](https://github.com/MustafaMulla29) | [sparkfun-boards](https://github.com/tscircuit/sparkfun-boards/blob/main/.github/CODEOWNERS) |
| [Abse2001](https://github.com/Abse2001) | [sparkfun-boards](https://github.com/tscircuit/sparkfun-boards/blob/main/.github/CODEOWNERS) |
|  | [schematic-corpus](https://github.com/tscircuit/schematic-corpus/blob/main/.github/CODEOWNERS) |



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
