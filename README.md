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

# Contribution Overview 2025-08-06

## PRs by Repository

```mermaid
pie
    "tscircuit/schematic-viewer" : 1
    "tscircuit/3d-viewer" : 6
    "tscircuit/pcb-viewer" : 3
    "tscircuit/jscad-fiber" : 1
    "tscircuit/tscircuit" : 6
    "tscircuit/props" : 3
    "tscircuit/eval" : 7
    "tscircuit/sparkfun-boards" : 6
    "tscircuit/circuit-json-flex" : 1
    "tscircuit/tscircuit.com" : 19
    "tscircuit/runframe" : 7
    "tscircuit/contribution-tracker" : 1
    "tscircuit/circuit-to-svg" : 1
    "tscircuit/core" : 11
    "tscircuit/bpc-graph" : 1
    "tscircuit/calculate-packing" : 7
    "tscircuit/circuit-json-to-gltf" : 3
    "tscircuit/simple-3d-svg" : 1
    "tscircuit/circuit-json" : 3
    "tscircuit/easyeda-converter" : 1
    "tscircuit/graphics-debug" : 1
    "tscircuit/svg.tscircuit.com" : 1
    "tscircuit/docs" : 5
    "tscircuit/dsn-converter" : 3
    "tscircuit/circuit-json-util" : 2
    "tscircuit/checks" : 1
    "tscircuit/footprinter" : 13
    "tscircuit/kicad-component-converter" : 1
    "tscircuit/kicad-mod-cache" : 1
    "tscircuit/schematic-symbols" : 1
    "tscircuit/winterspec" : 1
```

## Contributor Overview

| Contributor | 🐳 Major | 🐙 Minor | 🐌 Tiny | ⭐ | Score | Discussion Contributions |
|-------------|---------|---------|---------|-----|----------------|--------------------------|
| [seveibar](#seveibar) | 10 | 4 | 26 | 👑 | 73 | 0🔹 0🔶 0💎 |
| [ArnavK-09](#ArnavK-09) | 8 | 3 | 7 | ⭐⭐⭐ | 45 | 0🔹 0🔶 0💎 |
| [Abse2001](#Abse2001) | 5 | 1 | 11 | ⭐⭐⭐ | 32.5 | 0🔹 0🔶 0💎 |
| [ShiboSoftwareDev](#ShiboSoftwareDev) | 2 | 3 | 8 | ⭐⭐⭐ | 32 | 0🔹 0🔶 0💎 |
| [imrishabh18](#imrishabh18) | 3 | 1 | 10 | ⭐⭐ | 29 | 0🔹 0🔶 0💎 |
| [techmannih](#techmannih) | 0 | 1 | 3 | ⭐⭐ | 13 | 0🔹 0🔶 0💎 |
| [MustafaMulla29](#MustafaMulla29) | 1 | 0 | 7 | ⭐⭐ | 11 | 0🔹 0🔶 0💎 |
| [abimaelmartell](#abimaelmartell) | 1 | 0 | 0 | ⭐ | 4 | 0🔹 0🔶 0💎 |
| [tscircuitbot](#tscircuitbot) | 0 | 0 | 3 |  | 3 | 0🔹 0🔶 0💎 |
| [pxlpal](#pxlpal) | 0 | 0 | 1 |  | 1 | 0🔹 0🔶 0💎 |

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
| [ShiboSoftwareDev](#ShiboSoftwareDev) | 17 | 12 | 0 | 10 | 0 | 17 | 14 | 32 | 0 | 0 | 0 |
| [seveibar](#seveibar) | 10 | 1 | 0 | 54 | 3 | 53 | 40 | 73 | 0 | 0 | 0 |
| [ArnavK-09](#ArnavK-09) | 27 | 17 | 1 | 0 | 0 | 18 | 18 | 45 | 0 | 0 | 0 |
| [graphite-app[bot]](#graphite-app[bot]) | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| [imrishabh18](#imrishabh18) | 13 | 6 | 0 | 5 | 1 | 15 | 14 | 29 | 0 | 0 | 0 |
| [MustafaMulla29](#MustafaMulla29) | 17 | 8 | 1 | 0 | 0 | 10 | 8 | 11 | 0 | 0 | 0 |
| [pxlpal](#pxlpal) | 3 | 2 | 0 | 0 | 0 | 2 | 1 | 1 | 0 | 0 | 0 |
| [Abse2001](#Abse2001) | 22 | 17 | 0 | 0 | 0 | 18 | 17 | 32.5 | 0 | 0 | 0 |
| [techmannih](#techmannih) | 20 | 6 | 1 | 1 | 2 | 9 | 4 | 13 | 0 | 0 | 0 |
| [abimaelmartell](#abimaelmartell) | 1 | 1 | 0 | 0 | 0 | 1 | 1 | 4 | 0 | 0 | 0 |
| [baeoca](#baeoca) | 3 | 0 | 3 | 0 | 0 | 2 | 0 | 0 | 0 | 0 | 0 |
| [tscircuitbot](#tscircuitbot) | 0 | 0 | 0 | 0 | 0 | 21 | 3 | 3 | 0 | 0 | 0 |

## Top 7 Repositories by Contribution Points

```mermaid
pie
    "tscircuit/tscircuit.com" : 50
    "tscircuit/calculate-packing" : 20
    "tscircuit/footprinter" : 19
    "tscircuit/sparkfun-boards" : 18
    "tscircuit/core" : 18
    "tscircuit/runframe" : 11
    "tscircuit/3d-viewer" : 10
```

## Changes by Repository

### [tscircuit/schematic-viewer](https://github.com/tscircuit/schematic-viewer)

| PR # | Impact | Rating | Contributor | Description |
|------|--------|--------|-------------|-------------|
| [#102](https://github.com/tscircuit/schematic-viewer/pull/102) | 🐳 Major | ⭐⭐⭐ | ShiboSoftwareDev | Adds SPICE simulation functionality that runs in a background web worker, ensuring UI responsiveness and reruns when circuit JSON changes. |

### [tscircuit/3d-viewer](https://github.com/tscircuit/3d-viewer)

| PR # | Impact | Rating | Contributor | Description |
|------|--------|--------|-------------|-------------|
| [#401](https://github.com/tscircuit/3d-viewer/pull/401) | 🐳 Major | ⭐⭐⭐ | ShiboSoftwareDev | Replaces the react-three library with a vanilla three.js implementation to replicate required functionalities. |
| [#402](https://github.com/tscircuit/3d-viewer/pull/402) | 🐙 Minor | ⭐⭐ | ShiboSoftwareDev | Fixes the tooltip not stopping when the hovered object is removed from the scene, ensuring proper hover behavior in the 3D viewer. |

<details>
<summary>🐌 Tiny Contributions (4)</summary>

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#404](https://github.com/tscircuit/3d-viewer/pull/404) | 🐌 Tiny | ShiboSoftwareDev | Adds a new CODEOWNERS file designating ShiboSoftwareDev as the code owner for the repository. |
| [#403](https://github.com/tscircuit/3d-viewer/pull/403) | 🐌 Tiny | ShiboSoftwareDev | Fixes tooltip behavior to ensure consistent display and interaction when hovering over 3D components. |
| [#398](https://github.com/tscircuit/3d-viewer/pull/398) | 🐌 Tiny | ShiboSoftwareDev | Updates the version of react-threedrei from 9.121.4 to 10.6.1 in package.json to resolve compatibility issues with react-reconciler. |
| [#397](https://github.com/tscircuit/3d-viewer/pull/397) | 🐌 Tiny | seveibar | Updates package dependencies and modifies import statements in the CadViewerContainer and ContainerWithTooltip components. |

</details>

### [tscircuit/pcb-viewer](https://github.com/tscircuit/pcb-viewer)

| PR # | Impact | Rating | Contributor | Description |
|------|--------|--------|-------------|-------------|
| [#355](https://github.com/tscircuit/pcb-viewer/pull/355) | 🐳 Major | ⭐⭐⭐ | ArnavK-09 | Adds responsive design and touch support to the ToolbarOverlay component for improved usability on smaller screens. |
| [#354](https://github.com/tscircuit/pcb-viewer/pull/354) | 🐳 Major | ⭐⭐⭐ | ArnavK-09 | img width1580 height829 altimage srchttps:github.comuser-attachmentsassets404ffd4d-3edb-4725-98e0-f96e27c06c81  fix 353 |
| [#352](https://github.com/tscircuit/pcb-viewer/pull/352) | 🐙 Minor | ⭐⭐ | ShiboSoftwareDev | Adds support for rendering rotated pill holes with rectangular pads in PCB designs, enhancing the PCBViewers capabilities. |

### [tscircuit/jscad-fiber](https://github.com/tscircuit/jscad-fiber)

| PR # | Impact | Rating | Contributor | Description |
|------|--------|--------|-------------|-------------|
| [#112](https://github.com/tscircuit/jscad-fiber/pull/112) | 🐙 Minor | ⭐⭐ | ShiboSoftwareDev | Replaces the react-three librarys primitive component with a local implementation to manage THREE.Object3D objects in the scene. |

### [tscircuit/tscircuit](https://github.com/tscircuit/tscircuit)


<details>
<summary>🐌 Tiny Contributions (6)</summary>

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#735](https://github.com/tscircuit/tscircuit/pull/735) | 🐌 Tiny | ShiboSoftwareDev | Updates the jscad-fiber dependency from version 0.0.82 to 0.0.83 in package.json |
| [#737](https://github.com/tscircuit/tscircuit/pull/737) | 🐌 Tiny | seveibar | Adds the tscircuitmatchpack dependency to the project. |
| [#732](https://github.com/tscircuit/tscircuit/pull/732) | 🐌 Tiny | seveibar | Adds a script to copy the webworker entry point into the package distribution directory. |
| [#736](https://github.com/tscircuit/tscircuit/pull/736) | 🐌 Tiny | imrishabh18 | Fetches the standalone web-worker from a CDN and constructs a Blob URL to avoid CORS issues with cross-origin workers. |
| [#734](https://github.com/tscircuit/tscircuit/pull/734) | 🐌 Tiny | imrishabh18 | Injects the bundled eval CDN URL into the runframe during the build process, replacing a placeholder in the standalone script with the actual CDN URL. |
| [#733](https://github.com/tscircuit/tscircuit/pull/733) | 🐌 Tiny | MustafaMulla29 | Updates the tscircuiteval dependency to version 0.0.279 to support the implementation of the showSilkscreenPinLabels property. |

</details>

### [tscircuit/props](https://github.com/tscircuit/props)


<details>
<summary>🐌 Tiny Contributions (3)</summary>

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#355](https://github.com/tscircuit/props/pull/355) | 🐌 Tiny | ShiboSoftwareDev | Deprecates the schPortArrangement property in the JumperProps interface in favor of schPinArrangement, guiding users to update their implementations accordingly. |
| [#354](https://github.com/tscircuit/props/pull/354) | 🐌 Tiny | seveibar | Adds properties to allow traces to specify a reference and explicit PCB path via pcbPathRelativeTo and pcbPath. |
| [#351](https://github.com/tscircuit/props/pull/351) | 🐌 Tiny | pxlpal | Adds autocomplete functionality for the footprint prop, allowing editors to suggest common footprints while still permitting custom strings. |

</details>

### [tscircuit/eval](https://github.com/tscircuit/eval)


<details>
<summary>🐌 Tiny Contributions (7)</summary>

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#812](https://github.com/tscircuit/eval/pull/812) | 🐌 Tiny | ShiboSoftwareDev | Updates the jscad-fiber dependency from version 0.0.82 to 0.0.83 in package.json |
| [#804](https://github.com/tscircuit/eval/pull/804) | 🐌 Tiny | ArnavK-09 | Removes unnecessary conditional wrapping of components in a board, simplifying the default entrypoint setup. |
| [#817](https://github.com/tscircuit/eval/pull/817) | 🐌 Tiny | seveibar | Adds the tscircuitmatchpack package as a dependency in the project. |
| [#807](https://github.com/tscircuit/eval/pull/807) | 🐌 Tiny | MustafaMulla29 | Updates the core dependency to version 0.0.616 to support the implementation of the showSilkscreenPinLabels property. |
| [#821](https://github.com/tscircuit/eval/pull/821) | 🐌 Tiny | tscircuitbot | Automated update of tscircuitcore to v0.0.621. |
| [#803](https://github.com/tscircuit/eval/pull/803) | 🐌 Tiny | tscircuitbot | Updates the tscircuitcore package from version 0.0.614 to 0.0.615 and the tscircuitprops package from version 0.0.278 to 0.0.281. |
| [#801](https://github.com/tscircuit/eval/pull/801) | 🐌 Tiny | tscircuitbot | Automated update of tscircuitcore to v0.0.614. |

</details>

### [tscircuit/sparkfun-boards](https://github.com/tscircuit/sparkfun-boards)

| PR # | Impact | Rating | Contributor | Description |
|------|--------|--------|-------------|-------------|
| [#109](https://github.com/tscircuit/sparkfun-boards/pull/109) | 🐳 Major | ⭐⭐⭐ | MustafaMulla29 | Introduces a new circuit board for the SparkFun Atmospheric Sensor Breakout - BME280, including its schematic and footprint. |
| [#116](https://github.com/tscircuit/sparkfun-boards/pull/116) | 🐳 Major | ⭐⭐⭐ | Abse2001 | Introduces a new circuit board for the SparkFun RGB Light Sensor ISL29125, including its schematic and footprint. |
| [#114](https://github.com/tscircuit/sparkfun-boards/pull/114) | 🐳 Major | ⭐⭐⭐ | Abse2001 | Introduces a new SparkFun Digital Temperature Sensor Breakout TMP102 circuit board with associated schematic and footprint files. |
| [#113](https://github.com/tscircuit/sparkfun-boards/pull/113) | 🐳 Major | ⭐⭐⭐ | Abse2001 | This pull request introduces a new Sparkfun board for the Humidity and Temperature Sensor Breakout Si7021. It includes the necessary circuit design files, schematic symbols, and documentation for integration into the existing project. |

<details>
<summary>🐌 Tiny Contributions (2)</summary>

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#115](https://github.com/tscircuit/sparkfun-boards/pull/115) | 🐌 Tiny | ShiboSoftwareDev | Replaces instances of schPortArrangement with schPinArrangement in multiple circuit files to standardize pin arrangement references. |
| [#110](https://github.com/tscircuit/sparkfun-boards/pull/110) | 🐌 Tiny | MustafaMulla29 | Updates the tscircuit dependency to version 0.0.585 to include the latest core feature for showing silkscreen pin labels. |

</details>

### [tscircuit/circuit-json-flex](https://github.com/tscircuit/circuit-json-flex)


<details>
<summary>🐌 Tiny Contributions (1)</summary>

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#10](https://github.com/tscircuit/circuit-json-flex/pull/10) | 🐌 Tiny | ShiboSoftwareDev | Removes tscircuit from peer dependencies in package.json to resolve dependency conflicts with bpc-graph versions. |

</details>

### [tscircuit/tscircuit.com](https://github.com/tscircuit/tscircuit.com)

| PR # | Impact | Rating | Contributor | Description |
|------|--------|--------|-------------|-------------|
| [#1558](https://github.com/tscircuit/tscircuit.com/pull/1558) | 🐳 Major | ⭐⭐⭐ | ArnavK-09 | Reduces latency in the editor by optimizing file loading and introducing loading indicators for better user feedback during file operations. |
| [#1555](https://github.com/tscircuit/tscircuit.com/pull/1555) | 🐳 Major | ⭐⭐⭐ | ArnavK-09 | Update schema to move branch_name, commit_message, and commit_author from PackageBuild to PackageRelease, update UI components to use release metadata instead of build metadata, fix route paths to use releases instead of release, remove mock package builds data, set default sidebar state to collapsed in preview page, and ask user to connect github repo |
| [#1551](https://github.com/tscircuit/tscircuit.com/pull/1551) | 🐳 Major | ⭐⭐⭐ | ArnavK-09 | Refactors the build status logic and modifies the preview component to enhance its functionality and user experience. |
| [#1549](https://github.com/tscircuit/tscircuit.com/pull/1549) | 🐳 Major | ⭐⭐⭐ | ArnavK-09 | Refactors the preview functionality to utilize release-based URLs, adds a new release preview page, and updates routing for preview and build links accordingly. |
| [#1544](https://github.com/tscircuit/tscircuit.com/pull/1544) | 🐳 Major | ⭐⭐⭐ | ArnavK-09 | This pull request introduces new endpoints for listing package builds and retrieving specific package build details. It also includes the necessary schema definitions and integration tests to ensure the functionality works as intended. The changes are aimed at enhancing the APIs capabilities related to package builds, allowing users to access build information more effectively. |
| [#1542](https://github.com/tscircuit/tscircuit.com/pull/1542) | 🐳 Major | ⭐⭐⭐ | ArnavK-09 | Replace ConnectedReposCards with ConnectedPackagesList component Add GitHub repo linkingunlinking functionality Improve UI for connected packages with build status and preview Remove unused ConnectedRepoSettings component Update API to handle nullable github_repo_full_name Remove extra settings dialog |
| [#1547](https://github.com/tscircuit/tscircuit.com/pull/1547) | 🐳 Major | ⭐⭐⭐ | seveibar | Allows the package releases page to function correctly even when no build is available, ensuring users can still access release information. |
| [#1546](https://github.com/tscircuit/tscircuit.com/pull/1546) | 🐳 Major | ⭐⭐⭐ | seveibar | Refactors the UI to replace view-connected-repo with releases, introduces new pages for releases and release details, and updates the data model for package releases and builds. |
| [#1545](https://github.com/tscircuit/tscircuit.com/pull/1545) | 🐳 Major | ⭐⭐⭐ | seveibar | Adds a GitHub repository selector component with a refresh button and search functionality, allowing users to refresh their repositories and search through them. |
| [#1559](https://github.com/tscircuit/tscircuit.com/pull/1559) | 🐙 Minor | ⭐⭐ | ArnavK-09 | Fixes the issue of hidden files being included in package file updates, ensuring only visible files are processed. |
| [#1543](https://github.com/tscircuit/tscircuit.com/pull/1543) | 🐙 Minor | ⭐⭐ | ArnavK-09 | Add allow_pr_previews field to package schema and update API, pass currentAllowPrPreviews to edit dialog components, update GitHubRepositorySelector to use allowPrPreviews instead of enablePrPreview, and include is_pr_preview and github_pr_number in package release mapping. |
| [#1554](https://github.com/tscircuit/tscircuit.com/pull/1554) | 🐙 Minor | ⭐⭐ | seveibar | Fixes a bug in the transformFilesToTreeData function by ensuring safe property access for children nodes. |
| [#1560](https://github.com/tscircuit/tscircuit.com/pull/1560) | 🐙 Minor | ⭐⭐ | imrishabh18 | Fixes the issue where the copy functionality in the ImportantFilesView component fails to copy content from files other than AI review. |

<details>
<summary>🐌 Tiny Contributions (6)</summary>

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#1561](https://github.com/tscircuit/tscircuit.com/pull/1561) | 🐌 Tiny | ArnavK-09 | Changes the default state of the editor sidebar to collapsed instead of open. |
| [#1557](https://github.com/tscircuit/tscircuit.com/pull/1557) | 🐌 Tiny | ArnavK-09 | Updates the tscircuitrunframe dependency to version 0.0.781 in package.json |
| [#1556](https://github.com/tscircuit/tscircuit.com/pull/1556) | 🐌 Tiny | ArnavK-09 | Updates the default description in the MobileSidebar component to an empty string instead of a predefined text. |
| [#1550](https://github.com/tscircuit/tscircuit.com/pull/1550) | 🐌 Tiny | ArnavK-09 | Adds custom scrollbar styling for html and body elements in the CSS file, enhancing the visual appearance of scrollbars. |
| [#1553](https://github.com/tscircuit/tscircuit.com/pull/1553) | 🐌 Tiny | seveibar | Increases the timeout duration for reloading the application from 10 seconds to 3 minutes when an error occurs, allowing for a longer wait before a reload is triggered. |
| [#1548](https://github.com/tscircuit/tscircuit.com/pull/1548) | 🐌 Tiny | seveibar | Adds handling for cases where package build information is not available, improving user feedback in the UI. |

</details>

### [tscircuit/runframe](https://github.com/tscircuit/runframe)

| PR # | Impact | Rating | Contributor | Description |
|------|--------|--------|-------------|-------------|
| [#990](https://github.com/tscircuit/runframe/pull/990) | 🐳 Major | ⭐⭐⭐ | imrishabh18 | Add a File menu with downloadable export options to the RunFrame component, exposing the showFileMenu flag and wiring it through RunFrameWithApi and CLI. |
| [#968](https://github.com/tscircuit/runframe/pull/968) | 🐙 Minor | ⭐⭐ | ArnavK-09 | Fixes URL encoding errors in ErrorTabContent that were causing issues on tscircuit.com |

<details>
<summary>🐌 Tiny Contributions (5)</summary>

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#976](https://github.com/tscircuit/runframe/pull/976) | 🐌 Tiny | seveibar | Prevents treeshaking of the worker blob URL by ensuring it is not undefined during the build process. |
| [#974](https://github.com/tscircuit/runframe/pull/974) | 🐌 Tiny | seveibar | Refactors the standalone component to use local type definitions instead of relying on global React types, enhancing type safety and modularity. |
| [#973](https://github.com/tscircuit/runframe/pull/973) | 🐌 Tiny | seveibar | Adds a mechanism to inject a CDN URL for the webworker blob in the RunFrame component, allowing for dynamic loading of the latest version from cdnjs. |
| [#969](https://github.com/tscircuit/runframe/pull/969) | 🐌 Tiny | seveibar | Updates the easyeda dependency to version 0.0.217 in package.json |
| [#977](https://github.com/tscircuit/runframe/pull/977) | 🐌 Tiny | imrishabh18 | Fixes the RunFrame component to correctly utilize the evalWebWorkerBlobUrl prop instead of the workerBlobUrl prop, ensuring proper functionality of the web worker. |

</details>

### [tscircuit/contribution-tracker](https://github.com/tscircuit/contribution-tracker)


<details>
<summary>🐌 Tiny Contributions (1)</summary>

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#214](https://github.com/tscircuit/contribution-tracker/pull/214) | 🐌 Tiny | ArnavK-09 | This PR refactors the prompt generation function to avoid displaying No description provided when there is no description in the pull request. Instead, it conditionally includes the description only if it exists, improving the clarity of the output. |

</details>

### [tscircuit/circuit-to-svg](https://github.com/tscircuit/circuit-to-svg)


<details>
<summary>🐌 Tiny Contributions (1)</summary>

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#295](https://github.com/tscircuit/circuit-to-svg/pull/295) | 🐌 Tiny | ArnavK-09 | Refactors the integration of the port to Cosmos, enabling a functional preview that was previously non-operational. |

</details>

### [tscircuit/core](https://github.com/tscircuit/core)

| PR # | Impact | Rating | Contributor | Description |
|------|--------|--------|-------------|-------------|
| [#1141](https://github.com/tscircuit/core/pull/1141) | 🐳 Major | ⭐⭐⭐ | seveibar | Implements a new automatic schematic layout algorithm for matching pack layouts in circuit design. |
| [#1149](https://github.com/tscircuit/core/pull/1149) | 🐳 Major | ⭐⭐⭐ | imrishabh18 | Fixes autorouting by including PCB cutout elements in the list of obstacles, ensuring they are considered during routing calculations. |
| [#1150](https://github.com/tscircuit/core/pull/1150) | 🐙 Minor | ⭐⭐ | techmannih | Fixes the display of frequency and load capacitance units in the Resonator component to include proper SI unit formatting. |

<details>
<summary>🐌 Tiny Contributions (8)</summary>

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#1145](https://github.com/tscircuit/core/pull/1145) | 🐌 Tiny | seveibar | Ensures that the automatic schematic layout respects the specified orientation and rotation properties of components in the schematic. |
| [#1144](https://github.com/tscircuit/core/pull/1144) | 🐌 Tiny | seveibar | Updates the matchpack dependency version to fix an accidental inclusion of a crypto dependency. |
| [#1143](https://github.com/tscircuit/core/pull/1143) | 🐌 Tiny | seveibar | Allows overriding server URL in auto-cloud preset via autorouter config |
| [#1133](https://github.com/tscircuit/core/pull/1133) | 🐌 Tiny | seveibar | Adds support for manual routing of traces using pcbPath, allowing them to be treated as obstacles and skipping autorouting for defined paths. |
| [#1139](https://github.com/tscircuit/core/pull/1139) | 🐌 Tiny | imrishabh18 | Fixes the issue where the prop value symbolName is not utilized for Mosfet, Switch, and Transistor components, allowing for proper symbol name overrides. |
| [#1136](https://github.com/tscircuit/core/pull/1136) | 🐌 Tiny | imrishabh18 | Removes the usage and dependency of tscircuitcircuit-json-flex and updates tscircuitcircuit-json-util to use its getMinimumFlexContainer method instead. |
| [#1134](https://github.com/tscircuit/core/pull/1134) | 🐌 Tiny | MustafaMulla29 | Adds the showSilkscreenPinLabels prop to control the visibility of silkscreen pin labels in the PinHeader component, along with corresponding tests. |
| [#1147](https://github.com/tscircuit/core/pull/1147) | 🐌 Tiny | techmannih | Refactors resonator tests into a single schematic snapshot for improved test organization and maintainability. |

</details>

### [tscircuit/bpc-graph](https://github.com/tscircuit/bpc-graph)

| PR # | Impact | Rating | Contributor | Description |
|------|--------|--------|-------------|-------------|
| [#69](https://github.com/tscircuit/bpc-graph/pull/69) | 🐳 Major | ⭐⭐⭐ | seveibar | Adds a new PinSpacePartitionProcessor class to partition a canonical right-facing graph into smaller right-facing graphs based on gaps between pins. |

### [tscircuit/calculate-packing](https://github.com/tscircuit/calculate-packing)

| PR # | Impact | Rating | Contributor | Description |
|------|--------|--------|-------------|-------------|
| [#16](https://github.com/tscircuit/calculate-packing/pull/16) | 🐳 Major | ⭐⭐⭐ | seveibar | Fixes overlap issue when placing disconnected components in the packing algorithm by refining the candidate point selection process and removing the deprecated disconnected placement function. |
| [#14](https://github.com/tscircuit/calculate-packing/pull/14) | 🐳 Major | ⭐⭐⭐ | seveibar | Refines component outline construction by using pads instead of component bounds and introduces inner and outer outlines for better component placement. |
| [#11](https://github.com/tscircuit/calculate-packing/pull/11) | 🐳 Major | ⭐⭐⭐ | seveibar | This pull request introduces additional fixes and testing for the minimum distance packing algorithm in the calculate-packing library. It includes the addition of a new file for guidance on development practices and the removal of an outdated packing solver implementation, replacing it with a phased approach to packing that enhances the algorithms efficiency and accuracy. |
| [#9](https://github.com/tscircuit/calculate-packing/pull/9) | 🐳 Major | ⭐⭐⭐ | seveibar | Adds a new packing strategy that optimizes component placement by minimizing the sum of distances to connected pads on the network. |
| [#12](https://github.com/tscircuit/calculate-packing/pull/12) | 🐙 Minor | ⭐⭐ | seveibar | Fixes the issue where rotation is incorrectly altered after rotation trials and removes excessive logging during the process. |

<details>
<summary>🐌 Tiny Contributions (2)</summary>

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#13](https://github.com/tscircuit/calculate-packing/pull/13) | 🐌 Tiny | seveibar | Adds a new React component for debugging pack iterations with JSON input and visualization of packing state. |
| [#10](https://github.com/tscircuit/calculate-packing/pull/10) | 🐌 Tiny | seveibar | Adds a reproduction case for a packing issue and fixes network IDs for the reproduction of staking pack distance, along with a final stacking fix. |

</details>

### [tscircuit/circuit-json-to-gltf](https://github.com/tscircuit/circuit-json-to-gltf)

| PR # | Impact | Rating | Contributor | Description |
|------|--------|--------|-------------|-------------|
| [#3](https://github.com/tscircuit/circuit-json-to-gltf/pull/3) | 🐳 Major | ⭐⭐⭐ | seveibar | ignore reference repos attempt at intiial implementation wip Cosmos and browser viewer for gltf to see results wip wip format load usbc flashlight by default wip wip debugging texture mapping wip svg to png dynamic tech swap fix topbottom texture fix texture rotation fix model orientation fix opacity and back face issue for obj models fix unknown model transparency fix mtl rendering |
| [#4](https://github.com/tscircuit/circuit-json-to-gltf/pull/4) | 🐙 Minor | ⭐⭐ | seveibar | Fixes the trace colors in the rendering of circuit boards by adjusting color values for soldermask and material properties in the GLTF export. |

<details>
<summary>🐌 Tiny Contributions (1)</summary>

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#5](https://github.com/tscircuit/circuit-json-to-gltf/pull/5) | 🐌 Tiny | seveibar | Adds GitHub workflows for format checking, testing, and publishing to npm. |

</details>

### [tscircuit/simple-3d-svg](https://github.com/tscircuit/simple-3d-svg)

| PR # | Impact | Rating | Contributor | Description |
|------|--------|--------|-------------|-------------|
| [#50](https://github.com/tscircuit/simple-3d-svg/pull/50) | 🐙 Minor | ⭐⭐ | seveibar | Fixes the Z-axis inversion issue when loading OBJ objects, ensuring correct rendering of 3D models. |

### [tscircuit/circuit-json](https://github.com/tscircuit/circuit-json)


<details>
<summary>🐌 Tiny Contributions (3)</summary>

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#251](https://github.com/tscircuit/circuit-json/pull/251) | 🐌 Tiny | seveibar | Adds a new error type for PCB ports that are not connected to any trace, including documentation and tests for parsing and support. |
| [#250](https://github.com/tscircuit/circuit-json/pull/250) | 🐌 Tiny | seveibar | Adds a new error type for handling cases where a source trace has no corresponding PCB trace mapping, including documentation and tests for the new error type. |
| [#249](https://github.com/tscircuit/circuit-json/pull/249) | 🐌 Tiny | seveibar | Renames source_trace_not_connected to source_trace_not_connected_error and updates references across the codebase, including documentation regeneration and formatting. |

</details>

### [tscircuit/easyeda-converter](https://github.com/tscircuit/easyeda-converter)


<details>
<summary>🐌 Tiny Contributions (1)</summary>

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#306](https://github.com/tscircuit/easyeda-converter/pull/306) | 🐌 Tiny | seveibar | Summary add latest C2040 raw easy asset and conversion test allow text shapes to accept any font weightdecoration support colors as object or array in EasyEDA schema  Testing BUN_UPDATE_SNAPSHOTS1 bun test testsconvert-to-tsC2040-to-ts.test.ts testsfetch-testsc2040.test.ts bun test testsconvert-to-tsC2040-to-ts.test.ts testsfetch-testsc2040.test.ts |

</details>

### [tscircuit/graphics-debug](https://github.com/tscircuit/graphics-debug)


<details>
<summary>🐌 Tiny Contributions (1)</summary>

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#71](https://github.com/tscircuit/graphics-debug/pull/71) | 🐌 Tiny | seveibar | Adds functionality to load the camera position in the interactive graphics component. |

</details>

### [tscircuit/svg.tscircuit.com](https://github.com/tscircuit/svg.tscircuit.com)


<details>
<summary>🐌 Tiny Contributions (1)</summary>

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#270](https://github.com/tscircuit/svg.tscircuit.com/pull/270) | 🐌 Tiny | seveibar | Updates the tscircuit dependency version from 0.0.581 to 0.0.582 in package.json |

</details>

### [tscircuit/docs](https://github.com/tscircuit/docs)


<details>
<summary>🐌 Tiny Contributions (5)</summary>

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#111](https://github.com/tscircuit/docs/pull/111) | 🐌 Tiny | seveibar | Refines the display of manual PCB path trace examples by updating the syntax for specifying trace connections in the documentation. |
| [#110](https://github.com/tscircuit/docs/pull/110) | 🐌 Tiny | seveibar | Documents the pcbPath and pcbPathRelativeTo properties for manual PCB path specification in the trace  component, along with an example CircuitPreview. |
| [#112](https://github.com/tscircuit/docs/pull/112) | 🐌 Tiny | MustafaMulla29 | Adds documentation for the testpoint  component, detailing its usage, properties, and implementation on PCBs. |
| [#109](https://github.com/tscircuit/docs/pull/109) | 🐌 Tiny | MustafaMulla29 | Adds documentation for the fuse component, detailing its properties, usage, and specifications. |
| [#108](https://github.com/tscircuit/docs/pull/108) | 🐌 Tiny | MustafaMulla29 | Adds documentation for the battery  element, detailing its usage, specifications, and examples for users. |

</details>

### [tscircuit/dsn-converter](https://github.com/tscircuit/dsn-converter)

| PR # | Impact | Rating | Contributor | Description |
|------|--------|--------|-------------|-------------|
| [#112](https://github.com/tscircuit/dsn-converter/pull/112) | 🐳 Major | ⭐⭐⭐ | imrishabh18 | This pull request addresses the issue of incorrect pin number increments for plated holes of the pill shape in the PCB design. It refactors the processPlatedHoles method to improve its structure and maintainability, and it adds tests to ensure the correctness of the changes made. The changes include enhancements to the handling of padstacks and pin assignments, ensuring that the generated PCB designs are accurate and reliable. |

<details>
<summary>🐌 Tiny Contributions (2)</summary>

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#113](https://github.com/tscircuit/dsn-converter/pull/113) | 🐌 Tiny | imrishabh18 | Changes the default clearance value from 300 to 150 for trace clearance in circuit conversion. |
| [#111](https://github.com/tscircuit/dsn-converter/pull/111) | 🐌 Tiny | imrishabh18 | Adds support for a new plated hole shape circular_hole_with_rect_pad in the PCB design process, allowing for rectangular pads to be associated with circular holes. |

</details>

### [tscircuit/circuit-json-util](https://github.com/tscircuit/circuit-json-util)


<details>
<summary>🐌 Tiny Contributions (2)</summary>

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#58](https://github.com/tscircuit/circuit-json-util/pull/58) | 🐌 Tiny | imrishabh18 | Adds type definitions for FlexBoxOptions from the tscircuitminiflex package to improve type safety in flex container sizing calculations. |
| [#57](https://github.com/tscircuit/circuit-json-util/pull/57) | 🐌 Tiny | imrishabh18 | Add getMinimumFlexContainer utility to compute minimal flexbox container size and export it from the library index, along with tests for container sizing in row and column directions. |

</details>

### [tscircuit/checks](https://github.com/tscircuit/checks)


<details>
<summary>🐌 Tiny Contributions (1)</summary>

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#67](https://github.com/tscircuit/checks/pull/67) | 🐌 Tiny | imrishabh18 | Add a check to verify that each source trace has a corresponding PCB trace, integrating this check into the runAllChecks function and exporting it for use. |

</details>

### [tscircuit/footprinter](https://github.com/tscircuit/footprinter)

| PR # | Impact | Rating | Contributor | Description |
|------|--------|--------|-------------|-------------|
| [#347](https://github.com/tscircuit/footprinter/pull/347) | 🐳 Major | ⭐⭐⭐ | Abse2001 | Adds a boolean difference visualization feature for comparing PCB pads and plated holes, enhancing alignment analysis between Footprinter and KiCad. |
| [#345](https://github.com/tscircuit/footprinter/pull/345) | 🐳 Major | ⭐⭐⭐ | Abse2001 | Adds full support for KiCad plated holes, including accurate area calculations, bounding box fixes, and enhanced debug logging for visual comparisons. |

<details>
<summary>🐌 Tiny Contributions (11)</summary>

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#359](https://github.com/tscircuit/footprinter/pull/359) | 🐌 Tiny | Abse2001 | Aligns the test flags used in parity testing with those in KiCad for consistency in footprint comparison. |
| [#358](https://github.com/tscircuit/footprinter/pull/358) | 🐌 Tiny | Abse2001 | Adds a test for the parity of the TO-92-2 footprint against KiCad, ensuring accurate representation and functionality. |
| [#357](https://github.com/tscircuit/footprinter/pull/357) | 🐌 Tiny | Abse2001 | Adds a test for the LQFP-100-1EP footprint to ensure parity between Footprinter and KiCad outputs. |
| [#356](https://github.com/tscircuit/footprinter/pull/356) | 🐌 Tiny | Abse2001 | Adds a test for the parity of the Crystal HC49-4H Vertical footprint against KiCad. |
| [#355](https://github.com/tscircuit/footprinter/pull/355) | 🐌 Tiny | Abse2001 | Adds a parity test for the Analog_BGA-165_11.9x16mm footprint and improves console logging for pad and hole dimensions in the comparison tests. |
| [#354](https://github.com/tscircuit/footprinter/pull/354) | 🐌 Tiny | Abse2001 | Adds a test for the parity of the R_Axial_DIN0204_L3.6mm_D1.6mm_P1.90mm_Vertical footprint against KiCad. |
| [#353](https://github.com/tscircuit/footprinter/pull/353) | 🐌 Tiny | Abse2001 | Adds a test for the SSOP-10 footprint to ensure parity between Footprinter and KiCad. |
| [#352](https://github.com/tscircuit/footprinter/pull/352) | 🐌 Tiny | Abse2001 | Adds a test for the TSSOP-10_3x3mm_P0.5mm footprint to ensure parity between Footprinter and KiCad. |
| [#350](https://github.com/tscircuit/footprinter/pull/350) | 🐌 Tiny | Abse2001 | Adds a test for the SOIC-20W_7.6x12.8mm_P1.27mm footprint to ensure parity between Footprinter and KiCad. |
| [#348](https://github.com/tscircuit/footprinter/pull/348) | 🐌 Tiny | Abse2001 | Fixes DIP pin row spacing and adjusts silkscreen to align with hole centers and clearance for better PCB design accuracy. |
| [#351](https://github.com/tscircuit/footprinter/pull/351) | 🐌 Tiny | techmannih | Updates the bun-match-svg dependency from version 0.0.10 to 0.0.12 in package.json |

</details>

### [tscircuit/kicad-component-converter](https://github.com/tscircuit/kicad-component-converter)

| PR # | Impact | Rating | Contributor | Description |
|------|--------|--------|-------------|-------------|
| [#124](https://github.com/tscircuit/kicad-component-converter/pull/124) | 🐙 Minor | ⭐⭐ | Abse2001 | Adds parsing for plated and non-plated holes in KiCad files, including comprehensive test coverage for the new functionality. |

### [tscircuit/kicad-mod-cache](https://github.com/tscircuit/kicad-mod-cache)


<details>
<summary>🐌 Tiny Contributions (1)</summary>

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#3](https://github.com/tscircuit/kicad-mod-cache/pull/3) | 🐌 Tiny | Abse2001 | Updates the kicad-component-converter dependency from version 0.1.9 to 0.1.10 in package.json |

</details>

### [tscircuit/schematic-symbols](https://github.com/tscircuit/schematic-symbols)


<details>
<summary>🐌 Tiny Contributions (1)</summary>

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#339](https://github.com/tscircuit/schematic-symbols/pull/339) | 🐌 Tiny | techmannih | Adds variations of resonator symbols for different orientations (up, down, left, right) in the schematic symbols library. |

</details>

### [tscircuit/winterspec](https://github.com/tscircuit/winterspec)

| PR # | Impact | Rating | Contributor | Description |
|------|--------|--------|-------------|-------------|
| [#39](https://github.com/tscircuit/winterspec/pull/39) | 🐳 Major | ⭐⭐⭐ | abimaelmartell | Adds support for source map generation in the bundling process, allowing users to choose between inline, external, or no source maps, and updates the CLI and internal APIs accordingly. |

## Changes by Contributor

### [ShiboSoftwareDev](https://github.com/ShiboSoftwareDev)

| PRs # | Impact | Rating | Description |
|------|--------|--------|-------------|
| [#102](https://github.com/tscircuit/schematic-viewer/pull/102) | 🐳 Major | ⭐⭐⭐ | Adds SPICE simulation functionality that runs in a background web worker, ensuring UI responsiveness and reruns when circuit JSON changes. |
| [#401](https://github.com/tscircuit/3d-viewer/pull/401) | 🐳 Major | ⭐⭐⭐ | Replaces the react-three library with a vanilla three.js implementation to replicate required functionalities. |
| [#352](https://github.com/tscircuit/pcb-viewer/pull/352) | 🐙 Minor | ⭐⭐ | Adds support for rendering rotated pill holes with rectangular pads in PCB designs, enhancing the PCBViewers capabilities. |
| [#402](https://github.com/tscircuit/3d-viewer/pull/402) | 🐙 Minor | ⭐⭐ | Fixes the tooltip not stopping when the hovered object is removed from the scene, ensuring proper hover behavior in the 3D viewer. |
| [#112](https://github.com/tscircuit/jscad-fiber/pull/112) | 🐙 Minor | ⭐⭐ | Replaces the react-three librarys primitive component with a local implementation to manage THREE.Object3D objects in the scene. |

<details>
<summary>🐌 Tiny Contributions (8)</summary>

| PR # | Impact | Description |
|------|--------|-------------|
| [#735](https://github.com/tscircuit/tscircuit/pull/735) | 🐌 Tiny | Updates the jscad-fiber dependency from version 0.0.82 to 0.0.83 in package.json |
| [#355](https://github.com/tscircuit/props/pull/355) | 🐌 Tiny | Deprecates the schPortArrangement property in the JumperProps interface in favor of schPinArrangement, guiding users to update their implementations accordingly. |
| [#404](https://github.com/tscircuit/3d-viewer/pull/404) | 🐌 Tiny | Adds a new CODEOWNERS file designating ShiboSoftwareDev as the code owner for the repository. |
| [#403](https://github.com/tscircuit/3d-viewer/pull/403) | 🐌 Tiny | Fixes tooltip behavior to ensure consistent display and interaction when hovering over 3D components. |
| [#398](https://github.com/tscircuit/3d-viewer/pull/398) | 🐌 Tiny | Updates the version of react-threedrei from 9.121.4 to 10.6.1 in package.json to resolve compatibility issues with react-reconciler. |
| [#812](https://github.com/tscircuit/eval/pull/812) | 🐌 Tiny | Updates the jscad-fiber dependency from version 0.0.82 to 0.0.83 in package.json |
| [#115](https://github.com/tscircuit/sparkfun-boards/pull/115) | 🐌 Tiny | Replaces instances of schPortArrangement with schPinArrangement in multiple circuit files to standardize pin arrangement references. |
| [#10](https://github.com/tscircuit/circuit-json-flex/pull/10) | 🐌 Tiny | Removes tscircuit from peer dependencies in package.json to resolve dependency conflicts with bpc-graph versions. |

</details>

### [ArnavK-09](https://github.com/ArnavK-09)

| PRs # | Impact | Rating | Description |
|------|--------|--------|-------------|
| [#355](https://github.com/tscircuit/pcb-viewer/pull/355) | 🐳 Major | ⭐⭐⭐ | Adds responsive design and touch support to the ToolbarOverlay component for improved usability on smaller screens. |
| [#354](https://github.com/tscircuit/pcb-viewer/pull/354) | 🐳 Major | ⭐⭐⭐ | img width1580 height829 altimage srchttps:github.comuser-attachmentsassets404ffd4d-3edb-4725-98e0-f96e27c06c81  fix 353 |
| [#1558](https://github.com/tscircuit/tscircuit.com/pull/1558) | 🐳 Major | ⭐⭐⭐ | Reduces latency in the editor by optimizing file loading and introducing loading indicators for better user feedback during file operations. |
| [#1555](https://github.com/tscircuit/tscircuit.com/pull/1555) | 🐳 Major | ⭐⭐⭐ | Update schema to move branch_name, commit_message, and commit_author from PackageBuild to PackageRelease, update UI components to use release metadata instead of build metadata, fix route paths to use releases instead of release, remove mock package builds data, set default sidebar state to collapsed in preview page, and ask user to connect github repo |
| [#1551](https://github.com/tscircuit/tscircuit.com/pull/1551) | 🐳 Major | ⭐⭐⭐ | Refactors the build status logic and modifies the preview component to enhance its functionality and user experience. |
| [#1549](https://github.com/tscircuit/tscircuit.com/pull/1549) | 🐳 Major | ⭐⭐⭐ | Refactors the preview functionality to utilize release-based URLs, adds a new release preview page, and updates routing for preview and build links accordingly. |
| [#1544](https://github.com/tscircuit/tscircuit.com/pull/1544) | 🐳 Major | ⭐⭐⭐ | This pull request introduces new endpoints for listing package builds and retrieving specific package build details. It also includes the necessary schema definitions and integration tests to ensure the functionality works as intended. The changes are aimed at enhancing the APIs capabilities related to package builds, allowing users to access build information more effectively. |
| [#1542](https://github.com/tscircuit/tscircuit.com/pull/1542) | 🐳 Major | ⭐⭐⭐ | Replace ConnectedReposCards with ConnectedPackagesList component Add GitHub repo linkingunlinking functionality Improve UI for connected packages with build status and preview Remove unused ConnectedRepoSettings component Update API to handle nullable github_repo_full_name Remove extra settings dialog |
| [#1559](https://github.com/tscircuit/tscircuit.com/pull/1559) | 🐙 Minor | ⭐⭐ | Fixes the issue of hidden files being included in package file updates, ensuring only visible files are processed. |
| [#1543](https://github.com/tscircuit/tscircuit.com/pull/1543) | 🐙 Minor | ⭐⭐ | Add allow_pr_previews field to package schema and update API, pass currentAllowPrPreviews to edit dialog components, update GitHubRepositorySelector to use allowPrPreviews instead of enablePrPreview, and include is_pr_preview and github_pr_number in package release mapping. |
| [#968](https://github.com/tscircuit/runframe/pull/968) | 🐙 Minor | ⭐⭐ | Fixes URL encoding errors in ErrorTabContent that were causing issues on tscircuit.com |

<details>
<summary>🐌 Tiny Contributions (7)</summary>

| PR # | Impact | Description |
|------|--------|-------------|
| [#214](https://github.com/tscircuit/contribution-tracker/pull/214) | 🐌 Tiny | This PR refactors the prompt generation function to avoid displaying No description provided when there is no description in the pull request. Instead, it conditionally includes the description only if it exists, improving the clarity of the output. |
| [#295](https://github.com/tscircuit/circuit-to-svg/pull/295) | 🐌 Tiny | Refactors the integration of the port to Cosmos, enabling a functional preview that was previously non-operational. |
| [#1561](https://github.com/tscircuit/tscircuit.com/pull/1561) | 🐌 Tiny | Changes the default state of the editor sidebar to collapsed instead of open. |
| [#1557](https://github.com/tscircuit/tscircuit.com/pull/1557) | 🐌 Tiny | Updates the tscircuitrunframe dependency to version 0.0.781 in package.json |
| [#1556](https://github.com/tscircuit/tscircuit.com/pull/1556) | 🐌 Tiny | Updates the default description in the MobileSidebar component to an empty string instead of a predefined text. |
| [#1550](https://github.com/tscircuit/tscircuit.com/pull/1550) | 🐌 Tiny | Adds custom scrollbar styling for html and body elements in the CSS file, enhancing the visual appearance of scrollbars. |
| [#804](https://github.com/tscircuit/eval/pull/804) | 🐌 Tiny | Removes unnecessary conditional wrapping of components in a board, simplifying the default entrypoint setup. |

</details>

### [seveibar](https://github.com/seveibar)

| PRs # | Impact | Rating | Description |
|------|--------|--------|-------------|
| [#1141](https://github.com/tscircuit/core/pull/1141) | 🐳 Major | ⭐⭐⭐ | Implements a new automatic schematic layout algorithm for matching pack layouts in circuit design. |
| [#1547](https://github.com/tscircuit/tscircuit.com/pull/1547) | 🐳 Major | ⭐⭐⭐ | Allows the package releases page to function correctly even when no build is available, ensuring users can still access release information. |
| [#1546](https://github.com/tscircuit/tscircuit.com/pull/1546) | 🐳 Major | ⭐⭐⭐ | Refactors the UI to replace view-connected-repo with releases, introduces new pages for releases and release details, and updates the data model for package releases and builds. |
| [#1545](https://github.com/tscircuit/tscircuit.com/pull/1545) | 🐳 Major | ⭐⭐⭐ | Adds a GitHub repository selector component with a refresh button and search functionality, allowing users to refresh their repositories and search through them. |
| [#69](https://github.com/tscircuit/bpc-graph/pull/69) | 🐳 Major | ⭐⭐⭐ | Adds a new PinSpacePartitionProcessor class to partition a canonical right-facing graph into smaller right-facing graphs based on gaps between pins. |
| [#16](https://github.com/tscircuit/calculate-packing/pull/16) | 🐳 Major | ⭐⭐⭐ | Fixes overlap issue when placing disconnected components in the packing algorithm by refining the candidate point selection process and removing the deprecated disconnected placement function. |
| [#14](https://github.com/tscircuit/calculate-packing/pull/14) | 🐳 Major | ⭐⭐⭐ | Refines component outline construction by using pads instead of component bounds and introduces inner and outer outlines for better component placement. |
| [#11](https://github.com/tscircuit/calculate-packing/pull/11) | 🐳 Major | ⭐⭐⭐ | This pull request introduces additional fixes and testing for the minimum distance packing algorithm in the calculate-packing library. It includes the addition of a new file for guidance on development practices and the removal of an outdated packing solver implementation, replacing it with a phased approach to packing that enhances the algorithms efficiency and accuracy. |
| [#9](https://github.com/tscircuit/calculate-packing/pull/9) | 🐳 Major | ⭐⭐⭐ | Adds a new packing strategy that optimizes component placement by minimizing the sum of distances to connected pads on the network. |
| [#3](https://github.com/tscircuit/circuit-json-to-gltf/pull/3) | 🐳 Major | ⭐⭐⭐ | ignore reference repos attempt at intiial implementation wip Cosmos and browser viewer for gltf to see results wip wip format load usbc flashlight by default wip wip debugging texture mapping wip svg to png dynamic tech swap fix topbottom texture fix texture rotation fix model orientation fix opacity and back face issue for obj models fix unknown model transparency fix mtl rendering |
| [#1554](https://github.com/tscircuit/tscircuit.com/pull/1554) | 🐙 Minor | ⭐⭐ | Fixes a bug in the transformFilesToTreeData function by ensuring safe property access for children nodes. |
| [#50](https://github.com/tscircuit/simple-3d-svg/pull/50) | 🐙 Minor | ⭐⭐ | Fixes the Z-axis inversion issue when loading OBJ objects, ensuring correct rendering of 3D models. |
| [#12](https://github.com/tscircuit/calculate-packing/pull/12) | 🐙 Minor | ⭐⭐ | Fixes the issue where rotation is incorrectly altered after rotation trials and removes excessive logging during the process. |
| [#4](https://github.com/tscircuit/circuit-json-to-gltf/pull/4) | 🐙 Minor | ⭐⭐ | Fixes the trace colors in the rendering of circuit boards by adjusting color values for soldermask and material properties in the GLTF export. |

<details>
<summary>🐌 Tiny Contributions (26)</summary>

| PR # | Impact | Description |
|------|--------|-------------|
| [#737](https://github.com/tscircuit/tscircuit/pull/737) | 🐌 Tiny | Adds the tscircuitmatchpack dependency to the project. |
| [#732](https://github.com/tscircuit/tscircuit/pull/732) | 🐌 Tiny | Adds a script to copy the webworker entry point into the package distribution directory. |
| [#251](https://github.com/tscircuit/circuit-json/pull/251) | 🐌 Tiny | Adds a new error type for PCB ports that are not connected to any trace, including documentation and tests for parsing and support. |
| [#250](https://github.com/tscircuit/circuit-json/pull/250) | 🐌 Tiny | Adds a new error type for handling cases where a source trace has no corresponding PCB trace mapping, including documentation and tests for the new error type. |
| [#249](https://github.com/tscircuit/circuit-json/pull/249) | 🐌 Tiny | Renames source_trace_not_connected to source_trace_not_connected_error and updates references across the codebase, including documentation regeneration and formatting. |
| [#354](https://github.com/tscircuit/props/pull/354) | 🐌 Tiny | Adds properties to allow traces to specify a reference and explicit PCB path via pcbPathRelativeTo and pcbPath. |
| [#306](https://github.com/tscircuit/easyeda-converter/pull/306) | 🐌 Tiny | Summary add latest C2040 raw easy asset and conversion test allow text shapes to accept any font weightdecoration support colors as object or array in EasyEDA schema  Testing BUN_UPDATE_SNAPSHOTS1 bun test testsconvert-to-tsC2040-to-ts.test.ts testsfetch-testsc2040.test.ts bun test testsconvert-to-tsC2040-to-ts.test.ts testsfetch-testsc2040.test.ts |
| [#397](https://github.com/tscircuit/3d-viewer/pull/397) | 🐌 Tiny | Updates package dependencies and modifies import statements in the CadViewerContainer and ContainerWithTooltip components. |
| [#1145](https://github.com/tscircuit/core/pull/1145) | 🐌 Tiny | Ensures that the automatic schematic layout respects the specified orientation and rotation properties of components in the schematic. |
| [#1144](https://github.com/tscircuit/core/pull/1144) | 🐌 Tiny | Updates the matchpack dependency version to fix an accidental inclusion of a crypto dependency. |
| [#1143](https://github.com/tscircuit/core/pull/1143) | 🐌 Tiny | Allows overriding server URL in auto-cloud preset via autorouter config |
| [#1133](https://github.com/tscircuit/core/pull/1133) | 🐌 Tiny | Adds support for manual routing of traces using pcbPath, allowing them to be treated as obstacles and skipping autorouting for defined paths. |
| [#1553](https://github.com/tscircuit/tscircuit.com/pull/1553) | 🐌 Tiny | Increases the timeout duration for reloading the application from 10 seconds to 3 minutes when an error occurs, allowing for a longer wait before a reload is triggered. |
| [#1548](https://github.com/tscircuit/tscircuit.com/pull/1548) | 🐌 Tiny | Adds handling for cases where package build information is not available, improving user feedback in the UI. |
| [#71](https://github.com/tscircuit/graphics-debug/pull/71) | 🐌 Tiny | Adds functionality to load the camera position in the interactive graphics component. |
| [#817](https://github.com/tscircuit/eval/pull/817) | 🐌 Tiny | Adds the tscircuitmatchpack package as a dependency in the project. |
| [#976](https://github.com/tscircuit/runframe/pull/976) | 🐌 Tiny | Prevents treeshaking of the worker blob URL by ensuring it is not undefined during the build process. |
| [#974](https://github.com/tscircuit/runframe/pull/974) | 🐌 Tiny | Refactors the standalone component to use local type definitions instead of relying on global React types, enhancing type safety and modularity. |
| [#973](https://github.com/tscircuit/runframe/pull/973) | 🐌 Tiny | Adds a mechanism to inject a CDN URL for the webworker blob in the RunFrame component, allowing for dynamic loading of the latest version from cdnjs. |
| [#969](https://github.com/tscircuit/runframe/pull/969) | 🐌 Tiny | Updates the easyeda dependency to version 0.0.217 in package.json |
| [#270](https://github.com/tscircuit/svg.tscircuit.com/pull/270) | 🐌 Tiny | Updates the tscircuit dependency version from 0.0.581 to 0.0.582 in package.json |
| [#111](https://github.com/tscircuit/docs/pull/111) | 🐌 Tiny | Refines the display of manual PCB path trace examples by updating the syntax for specifying trace connections in the documentation. |
| [#110](https://github.com/tscircuit/docs/pull/110) | 🐌 Tiny | Documents the pcbPath and pcbPathRelativeTo properties for manual PCB path specification in the trace  component, along with an example CircuitPreview. |
| [#13](https://github.com/tscircuit/calculate-packing/pull/13) | 🐌 Tiny | Adds a new React component for debugging pack iterations with JSON input and visualization of packing state. |
| [#10](https://github.com/tscircuit/calculate-packing/pull/10) | 🐌 Tiny | Adds a reproduction case for a packing issue and fixes network IDs for the reproduction of staking pack distance, along with a final stacking fix. |
| [#5](https://github.com/tscircuit/circuit-json-to-gltf/pull/5) | 🐌 Tiny | Adds GitHub workflows for format checking, testing, and publishing to npm. |

</details>

### [imrishabh18](https://github.com/imrishabh18)

| PRs # | Impact | Rating | Description |
|------|--------|--------|-------------|
| [#1149](https://github.com/tscircuit/core/pull/1149) | 🐳 Major | ⭐⭐⭐ | Fixes autorouting by including PCB cutout elements in the list of obstacles, ensuring they are considered during routing calculations. |
| [#112](https://github.com/tscircuit/dsn-converter/pull/112) | 🐳 Major | ⭐⭐⭐ | This pull request addresses the issue of incorrect pin number increments for plated holes of the pill shape in the PCB design. It refactors the processPlatedHoles method to improve its structure and maintainability, and it adds tests to ensure the correctness of the changes made. The changes include enhancements to the handling of padstacks and pin assignments, ensuring that the generated PCB designs are accurate and reliable. |
| [#990](https://github.com/tscircuit/runframe/pull/990) | 🐳 Major | ⭐⭐⭐ | Add a File menu with downloadable export options to the RunFrame component, exposing the showFileMenu flag and wiring it through RunFrameWithApi and CLI. |
| [#1560](https://github.com/tscircuit/tscircuit.com/pull/1560) | 🐙 Minor | ⭐⭐ | Fixes the issue where the copy functionality in the ImportantFilesView component fails to copy content from files other than AI review. |

<details>
<summary>🐌 Tiny Contributions (10)</summary>

| PR # | Impact | Description |
|------|--------|-------------|
| [#736](https://github.com/tscircuit/tscircuit/pull/736) | 🐌 Tiny | Fetches the standalone web-worker from a CDN and constructs a Blob URL to avoid CORS issues with cross-origin workers. |
| [#734](https://github.com/tscircuit/tscircuit/pull/734) | 🐌 Tiny | Injects the bundled eval CDN URL into the runframe during the build process, replacing a placeholder in the standalone script with the actual CDN URL. |
| [#58](https://github.com/tscircuit/circuit-json-util/pull/58) | 🐌 Tiny | Adds type definitions for FlexBoxOptions from the tscircuitminiflex package to improve type safety in flex container sizing calculations. |
| [#57](https://github.com/tscircuit/circuit-json-util/pull/57) | 🐌 Tiny | Add getMinimumFlexContainer utility to compute minimal flexbox container size and export it from the library index, along with tests for container sizing in row and column directions. |
| [#1139](https://github.com/tscircuit/core/pull/1139) | 🐌 Tiny | Fixes the issue where the prop value symbolName is not utilized for Mosfet, Switch, and Transistor components, allowing for proper symbol name overrides. |
| [#1136](https://github.com/tscircuit/core/pull/1136) | 🐌 Tiny | Removes the usage and dependency of tscircuitcircuit-json-flex and updates tscircuitcircuit-json-util to use its getMinimumFlexContainer method instead. |
| [#67](https://github.com/tscircuit/checks/pull/67) | 🐌 Tiny | Add a check to verify that each source trace has a corresponding PCB trace, integrating this check into the runAllChecks function and exporting it for use. |
| [#113](https://github.com/tscircuit/dsn-converter/pull/113) | 🐌 Tiny | Changes the default clearance value from 300 to 150 for trace clearance in circuit conversion. |
| [#111](https://github.com/tscircuit/dsn-converter/pull/111) | 🐌 Tiny | Adds support for a new plated hole shape circular_hole_with_rect_pad in the PCB design process, allowing for rectangular pads to be associated with circular holes. |
| [#977](https://github.com/tscircuit/runframe/pull/977) | 🐌 Tiny | Fixes the RunFrame component to correctly utilize the evalWebWorkerBlobUrl prop instead of the workerBlobUrl prop, ensuring proper functionality of the web worker. |

</details>

### [MustafaMulla29](https://github.com/MustafaMulla29)

| PRs # | Impact | Rating | Description |
|------|--------|--------|-------------|
| [#109](https://github.com/tscircuit/sparkfun-boards/pull/109) | 🐳 Major | ⭐⭐⭐ | Introduces a new circuit board for the SparkFun Atmospheric Sensor Breakout - BME280, including its schematic and footprint. |

<details>
<summary>🐌 Tiny Contributions (7)</summary>

| PR # | Impact | Description |
|------|--------|-------------|
| [#733](https://github.com/tscircuit/tscircuit/pull/733) | 🐌 Tiny | Updates the tscircuiteval dependency to version 0.0.279 to support the implementation of the showSilkscreenPinLabels property. |
| [#1134](https://github.com/tscircuit/core/pull/1134) | 🐌 Tiny | Adds the showSilkscreenPinLabels prop to control the visibility of silkscreen pin labels in the PinHeader component, along with corresponding tests. |
| [#807](https://github.com/tscircuit/eval/pull/807) | 🐌 Tiny | Updates the core dependency to version 0.0.616 to support the implementation of the showSilkscreenPinLabels property. |
| [#112](https://github.com/tscircuit/docs/pull/112) | 🐌 Tiny | Adds documentation for the testpoint  component, detailing its usage, properties, and implementation on PCBs. |
| [#109](https://github.com/tscircuit/docs/pull/109) | 🐌 Tiny | Adds documentation for the fuse component, detailing its properties, usage, and specifications. |
| [#108](https://github.com/tscircuit/docs/pull/108) | 🐌 Tiny | Adds documentation for the battery  element, detailing its usage, specifications, and examples for users. |
| [#110](https://github.com/tscircuit/sparkfun-boards/pull/110) | 🐌 Tiny | Updates the tscircuit dependency to version 0.0.585 to include the latest core feature for showing silkscreen pin labels. |

</details>

### [pxlpal](https://github.com/pxlpal)


<details>
<summary>🐌 Tiny Contributions (1)</summary>

| PR # | Impact | Description |
|------|--------|-------------|
| [#351](https://github.com/tscircuit/props/pull/351) | 🐌 Tiny | Adds autocomplete functionality for the footprint prop, allowing editors to suggest common footprints while still permitting custom strings. |

</details>

### [Abse2001](https://github.com/Abse2001)

| PRs # | Impact | Rating | Description |
|------|--------|--------|-------------|
| [#347](https://github.com/tscircuit/footprinter/pull/347) | 🐳 Major | ⭐⭐⭐ | Adds a boolean difference visualization feature for comparing PCB pads and plated holes, enhancing alignment analysis between Footprinter and KiCad. |
| [#345](https://github.com/tscircuit/footprinter/pull/345) | 🐳 Major | ⭐⭐⭐ | Adds full support for KiCad plated holes, including accurate area calculations, bounding box fixes, and enhanced debug logging for visual comparisons. |
| [#116](https://github.com/tscircuit/sparkfun-boards/pull/116) | 🐳 Major | ⭐⭐⭐ | Introduces a new circuit board for the SparkFun RGB Light Sensor ISL29125, including its schematic and footprint. |
| [#114](https://github.com/tscircuit/sparkfun-boards/pull/114) | 🐳 Major | ⭐⭐⭐ | Introduces a new SparkFun Digital Temperature Sensor Breakout TMP102 circuit board with associated schematic and footprint files. |
| [#113](https://github.com/tscircuit/sparkfun-boards/pull/113) | 🐳 Major | ⭐⭐⭐ | This pull request introduces a new Sparkfun board for the Humidity and Temperature Sensor Breakout Si7021. It includes the necessary circuit design files, schematic symbols, and documentation for integration into the existing project. |
| [#124](https://github.com/tscircuit/kicad-component-converter/pull/124) | 🐙 Minor | ⭐⭐ | Adds parsing for plated and non-plated holes in KiCad files, including comprehensive test coverage for the new functionality. |

<details>
<summary>🐌 Tiny Contributions (11)</summary>

| PR # | Impact | Description |
|------|--------|-------------|
| [#359](https://github.com/tscircuit/footprinter/pull/359) | 🐌 Tiny | Aligns the test flags used in parity testing with those in KiCad for consistency in footprint comparison. |
| [#358](https://github.com/tscircuit/footprinter/pull/358) | 🐌 Tiny | Adds a test for the parity of the TO-92-2 footprint against KiCad, ensuring accurate representation and functionality. |
| [#357](https://github.com/tscircuit/footprinter/pull/357) | 🐌 Tiny | Adds a test for the LQFP-100-1EP footprint to ensure parity between Footprinter and KiCad outputs. |
| [#356](https://github.com/tscircuit/footprinter/pull/356) | 🐌 Tiny | Adds a test for the parity of the Crystal HC49-4H Vertical footprint against KiCad. |
| [#355](https://github.com/tscircuit/footprinter/pull/355) | 🐌 Tiny | Adds a parity test for the Analog_BGA-165_11.9x16mm footprint and improves console logging for pad and hole dimensions in the comparison tests. |
| [#354](https://github.com/tscircuit/footprinter/pull/354) | 🐌 Tiny | Adds a test for the parity of the R_Axial_DIN0204_L3.6mm_D1.6mm_P1.90mm_Vertical footprint against KiCad. |
| [#353](https://github.com/tscircuit/footprinter/pull/353) | 🐌 Tiny | Adds a test for the SSOP-10 footprint to ensure parity between Footprinter and KiCad. |
| [#352](https://github.com/tscircuit/footprinter/pull/352) | 🐌 Tiny | Adds a test for the TSSOP-10_3x3mm_P0.5mm footprint to ensure parity between Footprinter and KiCad. |
| [#350](https://github.com/tscircuit/footprinter/pull/350) | 🐌 Tiny | Adds a test for the SOIC-20W_7.6x12.8mm_P1.27mm footprint to ensure parity between Footprinter and KiCad. |
| [#348](https://github.com/tscircuit/footprinter/pull/348) | 🐌 Tiny | Fixes DIP pin row spacing and adjusts silkscreen to align with hole centers and clearance for better PCB design accuracy. |
| [#3](https://github.com/tscircuit/kicad-mod-cache/pull/3) | 🐌 Tiny | Updates the kicad-component-converter dependency from version 0.1.9 to 0.1.10 in package.json |

</details>

### [techmannih](https://github.com/techmannih)

| PRs # | Impact | Rating | Description |
|------|--------|--------|-------------|
| [#1150](https://github.com/tscircuit/core/pull/1150) | 🐙 Minor | ⭐⭐ | Fixes the display of frequency and load capacitance units in the Resonator component to include proper SI unit formatting. |

<details>
<summary>🐌 Tiny Contributions (3)</summary>

| PR # | Impact | Description |
|------|--------|-------------|
| [#351](https://github.com/tscircuit/footprinter/pull/351) | 🐌 Tiny | Updates the bun-match-svg dependency from version 0.0.10 to 0.0.12 in package.json |
| [#1147](https://github.com/tscircuit/core/pull/1147) | 🐌 Tiny | Refactors resonator tests into a single schematic snapshot for improved test organization and maintainability. |
| [#339](https://github.com/tscircuit/schematic-symbols/pull/339) | 🐌 Tiny | Adds variations of resonator symbols for different orientations (up, down, left, right) in the schematic symbols library. |

</details>

### [abimaelmartell](https://github.com/abimaelmartell)

| PRs # | Impact | Rating | Description |
|------|--------|--------|-------------|
| [#39](https://github.com/tscircuit/winterspec/pull/39) | 🐳 Major | ⭐⭐⭐ | Adds support for source map generation in the bundling process, allowing users to choose between inline, external, or no source maps, and updates the CLI and internal APIs accordingly. |

### [tscircuitbot](https://github.com/tscircuitbot)


<details>
<summary>🐌 Tiny Contributions (3)</summary>

| PR # | Impact | Description |
|------|--------|-------------|
| [#821](https://github.com/tscircuit/eval/pull/821) | 🐌 Tiny | Automated update of tscircuitcore to v0.0.621. |
| [#803](https://github.com/tscircuit/eval/pull/803) | 🐌 Tiny | Updates the tscircuitcore package from version 0.0.614 to 0.0.615 and the tscircuitprops package from version 0.0.278 to 0.0.281. |
| [#801](https://github.com/tscircuit/eval/pull/801) | 🐌 Tiny | Automated update of tscircuitcore to v0.0.614. |

</details>

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
