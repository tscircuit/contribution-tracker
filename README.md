# contribution tracker

[contributions.tscircuit.com](https://contributions.tscircuit.com) ・ [tscircuit.com](https://tscircuit.com) ・ [Contribution Overviews](./contribution-overviews/) ・ [Changelogs](./changelogs/)

Generates weekly contribution overviews for tscircuit contributors. Check out all
the [contribution overviews here](./contribution-overviews/)
You can find AI-generated monthly changelogs in the [changelogs directory](./changelogs/)

- All PRs in the tscircuit org are scanned/summarized via an LLM
- The LLM classifies each Diff/PR as into a set of attributes for scoring
- All the PRs, summaries, and classifications are organized into charts and tables for [the website](https://contributions.tscircuit.com)

> Want to run locally? See the [Development Section](#development)

The current week is shown below. There are 4 major sections:

- [Contributor Overview](#contributor-overview)
- [PRs by Repository](#prs-by-repository)
- [PRs by Contributor](#changes-by-contributor)
- [Scoring & Sponsorship System](#scoring--sponsorship-system)

## Current Week

<!-- START_CURRENT_WEEK -->

# Contribution Overview 2025-12-31

The current week is shown below. There are 3 major sections:

- [Contributor Overview](#contributor-overview)
- [PRs by Repository](#prs-by-repository)
- [PRs by Contributor](#changes-by-contributor)
- [Scoring & Sponsorship Details](/docs/sponsorship-calculation-explanation.md)

## PRs by Repository

```mermaid
pie
    "tscircuit/pcb-viewer" : 2
    "tscircuit/tscircuit" : 10
    "tscircuit/tscircuit.com" : 5
    "tscircuit/eval" : 4
    "tscircuit/runframe" : 2
    "tscircuit/cli" : 6
    "tscircuit/circuit-to-canvas" : 7
    "tscircuit/minimal-rp2040" : 1
    "tscircuit/footprinter" : 1
    "tscircuit/schematic-symbols" : 1
    "tscircuit/circuit-to-svg" : 2
    "tscircuit/core" : 2
    "tscircuit/bun-match-svg" : 1
    "tscircuit/tscircuit-autorouter" : 8
    "tscircuit/contribution-tracker" : 1
    "tscircuit/docs" : 1
    "tscircuit/links.tscircuit.com" : 1
    "tscircuit/jscad-electronics" : 3
    "tscircuit/pcbburn.com" : 3
    "tscircuit/circuit-json-to-lbrn" : 1
```

## Contributor Overview

| Contributor | 🐳 Major | 🐙 Minor | 🐌 Tiny | ⭐ | Discussion Contributions |
|-------------|---------|---------|---------|-----|--------------------------|
| [seveibar](#seveibar) | 3 | 2 | 3 | ⭐⭐ | 0🔹 0🔶 0💎 |
| [AnasSarkiz](#AnasSarkiz) | 3 | 1 | 0 | ⭐⭐ | 0🔹 0🔶 0💎 |
| [ShiboSoftwareDev](#ShiboSoftwareDev) | 1 | 0 | 3 | ⭐⭐ | 0🔹 0🔶 0💎 |
| [tscircuitbot](#tscircuitbot) | 0 | 0 | 26 | ⭐⭐ | 0🔹 0🔶 0💎 |
| [0hmX](#0hmX) | 2 | 0 | 4 | ⭐⭐ | 0🔹 0🔶 0💎 |
| [Abse2001](#Abse2001) | 0 | 3 | 2 | ⭐ | 0🔹 0🔶 0💎 |
| [techmannih](#techmannih) | 0 | 2 | 0 | ⭐ | 0🔹 0🔶 0💎 |
| [shehaban](#shehaban) | 0 | 2 | 0 | ⭐ | 0🔹 0🔶 0💎 |
| [rushabhcodes](#rushabhcodes) | 0 | 0 | 4 | ⭐ | 0🔹 0🔶 0💎 |
| [imrishabh18](#imrishabh18) | 1 | 0 | 0 | ⭐ | 0🔹 0🔶 0💎 |

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

| Contributor | Reviews Received | Approvals Received | Rejections Received | Approvals | Rejections | PRs Opened | PRs Merged | Issues Created |
|---|---|---|---|---|---|---|---|---|
| [seveibar](#seveibar) | 1 | 0 | 0 | 16 | 3 | 14 | 8 | 0 |
| [tscircuitbot](#tscircuitbot) | 0 | 0 | 0 | 0 | 0 | 37 | 26 | 0 |
| [Abse2001](#Abse2001) | 4 | 4 | 0 | 1 | 0 | 5 | 5 | 0 |
| [ShiboSoftwareDev](#ShiboSoftwareDev) | 6 | 4 | 1 | 6 | 0 | 5 | 4 | 0 |
| [Sahil-Gupta584](#Sahil-Gupta584) | 1 | 0 | 0 | 0 | 0 | 1 | 0 | 0 |
| [techmannih](#techmannih) | 3 | 2 | 1 | 2 | 0 | 3 | 2 | 0 |
| [shehaban](#shehaban) | 8 | 4 | 1 | 0 | 0 | 2 | 2 | 0 |
| [nailoo](#nailoo) | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| [rushabhcodes](#rushabhcodes) | 9 | 4 | 0 | 0 | 1 | 4 | 4 | 0 |
| [pxlpal](#pxlpal) | 0 | 0 | 0 | 0 | 0 | 1 | 0 | 0 |
| [ArnavK-09](#ArnavK-09) | 0 | 0 | 0 | 1 | 0 | 0 | 0 | 0 |
| [Ayushjhawar8](#Ayushjhawar8) | 0 | 0 | 0 | 0 | 0 | 1 | 0 | 0 |
| [imrishabh18](#imrishabh18) | 1 | 0 | 1 | 0 | 0 | 1 | 1 | 0 |
| [0hmX](#0hmX) | 7 | 2 | 0 | 0 | 0 | 6 | 6 | 0 |
| [AnasSarkiz](#AnasSarkiz) | 6 | 6 | 0 | 0 | 0 | 5 | 4 | 0 |

## Changes by Repository

### [tscircuit/pcb-viewer](https://github.com/tscircuit/pcb-viewer)

| PR # | Impact | Rating | Contributor | Description |
|------|--------|--------|-------------|-------------|
| [#574](https://github.com/tscircuit/pcb-viewer/pull/574) | 🐙 Minor | ⭐⭐ | Abse2001 | Promotes PCB fabrication notes to a first-class rendering path and removes duplicated drawing logic, consolidating all fab rendering behind a single draw path. |

<details>
<summary>🐌 Tiny Contributions (1)</summary>

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#575](https://github.com/tscircuit/pcb-viewer/pull/575) | 🐌 Tiny | tscircuitbot | Automated package update |

</details>

### [tscircuit/tscircuit](https://github.com/tscircuit/tscircuit)


<details>
<summary>🐌 Tiny Contributions (10)</summary>

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#1766](https://github.com/tscircuit/tscircuit/pull/1766) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1765](https://github.com/tscircuit/tscircuit/pull/1765) | 🐌 Tiny | tscircuitbot | Updates the tscircuitcli package to version 0.1.711 in the package.json file. |
| [#1764](https://github.com/tscircuit/tscircuit/pull/1764) | 🐌 Tiny | tscircuitbot | Updates the package version from 0.0.1099 to 0.0.1100 in package.json |
| [#1763](https://github.com/tscircuit/tscircuit/pull/1763) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1762](https://github.com/tscircuit/tscircuit/pull/1762) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1761](https://github.com/tscircuit/tscircuit/pull/1761) | 🐌 Tiny | tscircuitbot | Updates the tscircuitcli package from version 0.1.709 to 0.1.710 |
| [#1758](https://github.com/tscircuit/tscircuit/pull/1758) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1759](https://github.com/tscircuit/tscircuit/pull/1759) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1760](https://github.com/tscircuit/tscircuit/pull/1760) | 🐌 Tiny | tscircuitbot | Updates the package version from 0.0.1097 to 0.0.1098 in package.json |
| [#1757](https://github.com/tscircuit/tscircuit/pull/1757) | 🐌 Tiny | Abse2001 | Adds the missing core dependency tscircuitsoup-util to the package.json file. |

</details>

### [tscircuit/tscircuit.com](https://github.com/tscircuit/tscircuit.com)

| PR # | Impact | Rating | Contributor | Description |
|------|--------|--------|-------------|-------------|
| [#2379](https://github.com/tscircuit/tscircuit.com/pull/2379) | 🐙 Minor | ⭐⭐ | seveibar | Add a fake packagestransfer endpoint to mirror the real backend behavior for localdev usage and tests, and expose a UI flow in the package settings Danger Zone to allow transferring ownership to an organization the user is a member of. |

<details>
<summary>🐌 Tiny Contributions (4)</summary>

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#2383](https://github.com/tscircuit/tscircuit.com/pull/2383) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#2382](https://github.com/tscircuit/tscircuit.com/pull/2382) | 🐌 Tiny | tscircuitbot | Automated package update to version 0.0.177 |
| [#2380](https://github.com/tscircuit/tscircuit.com/pull/2380) | 🐌 Tiny | tscircuitbot | Updates the tscircuiteval package from version 0.0.567 to 0.0.568 |
| [#2353](https://github.com/tscircuit/tscircuit.com/pull/2353) | 🐌 Tiny | rushabhcodes | Updates the visual design and layout of the PackageCard component and its skeleton, enhancing spacing, typography, color usage, and information hierarchy for better readability and aesthetics. |

</details>

### [tscircuit/eval](https://github.com/tscircuit/eval)


<details>
<summary>🐌 Tiny Contributions (4)</summary>

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#1813](https://github.com/tscircuit/eval/pull/1813) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1812](https://github.com/tscircuit/eval/pull/1812) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1810](https://github.com/tscircuit/eval/pull/1810) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1809](https://github.com/tscircuit/eval/pull/1809) | 🐌 Tiny | tscircuitbot | Automated package update |

</details>

### [tscircuit/runframe](https://github.com/tscircuit/runframe)


<details>
<summary>🐌 Tiny Contributions (2)</summary>

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#2249](https://github.com/tscircuit/runframe/pull/2249) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#2248](https://github.com/tscircuit/runframe/pull/2248) | 🐌 Tiny | tscircuitbot | Updates the tscircuiteval package from version 0.0.567 to 0.0.568 |

</details>

### [tscircuit/cli](https://github.com/tscircuit/cli)

| PR # | Impact | Rating | Contributor | Description |
|------|--------|--------|-------------|-------------|
| [#1517](https://github.com/tscircuit/cli/pull/1517) | 🐳 Major | ⭐⭐⭐ | imrishabh18 | Adds a command-line flag to use a CDN-hosted JavaScript file instead of a local bundled file in the generated index.html for tscircuit.app. |

<details>
<summary>🐌 Tiny Contributions (5)</summary>

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#1532](https://github.com/tscircuit/cli/pull/1532) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1531](https://github.com/tscircuit/cli/pull/1531) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1530](https://github.com/tscircuit/cli/pull/1530) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1529](https://github.com/tscircuit/cli/pull/1529) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#1528](https://github.com/tscircuit/cli/pull/1528) | 🐌 Tiny | seveibar | Add a JSON schema for tscircuit.config.json to enable validation and auto-completion in editors, and ensure saved configs include a schema field pointing to the schema URL. |

</details>

### [tscircuit/circuit-to-canvas](https://github.com/tscircuit/circuit-to-canvas)

| PR # | Impact | Rating | Contributor | Description |
|------|--------|--------|-------------|-------------|
| [#85](https://github.com/tscircuit/circuit-to-canvas/pull/85) | 🐙 Minor | ⭐⭐ | Abse2001 | Refactors dimension line rendering to use filled polygon geometry instead of stroked paths, improving visual consistency and stability across orientations and scaling transforms. |
| [#90](https://github.com/tscircuit/circuit-to-canvas/pull/90) | 🐙 Minor | ⭐⭐ | Abse2001 | Fixes dimension line polygon winding issues by implementing a unified perimeter path to prevent self-intersections and ambiguous fill behavior. |
| [#89](https://github.com/tscircuit/circuit-to-canvas/pull/89) | 🐙 Minor | ⭐⭐ | techmannih | Adds support for soldermask margins for all shapes of plated holes in PCB designs, allowing for more precise control over soldermask application. |
| [#87](https://github.com/tscircuit/circuit-to-canvas/pull/87) | 🐙 Minor | ⭐⭐ | techmannih | Adds support for soldermask margins around holes in PCB designs, allowing for better visual representation and manufacturing accuracy. |

<details>
<summary>🐌 Tiny Contributions (3)</summary>

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#91](https://github.com/tscircuit/circuit-to-canvas/pull/91) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#86](https://github.com/tscircuit/circuit-to-canvas/pull/86) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#88](https://github.com/tscircuit/circuit-to-canvas/pull/88) | 🐌 Tiny | tscircuitbot | Automated package update |

</details>

### [tscircuit/minimal-rp2040](https://github.com/tscircuit/minimal-rp2040)


<details>
<summary>🐌 Tiny Contributions (1)</summary>

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#2](https://github.com/tscircuit/minimal-rp2040/pull/2) | 🐌 Tiny | Abse2001 | Adjusts the mounting position of the top display holes and modifies the board height to 74mm. |

</details>

### [tscircuit/footprinter](https://github.com/tscircuit/footprinter)

| PR # | Impact | Rating | Contributor | Description |
|------|--------|--------|-------------|-------------|
| [#442](https://github.com/tscircuit/footprinter/pull/442) | 🐙 Minor | ⭐⭐ | shehaban | Adds support for radial footprints using the same 2D geometry as axial footprints, while providing explicit, machine-readable 3D model hinting for correct 3D rendering. |

### [tscircuit/schematic-symbols](https://github.com/tscircuit/schematic-symbols)

| PR # | Impact | Rating | Contributor | Description |
|------|--------|--------|-------------|-------------|
| [#373](https://github.com/tscircuit/schematic-symbols/pull/373) | 🐙 Minor | ⭐⭐ | shehaban | Fixes alignment of the  pin in the op-amp symbols (opamp_no_power and opamp_with_power) |

### [tscircuit/circuit-to-svg](https://github.com/tscircuit/circuit-to-svg)

| PR # | Impact | Rating | Contributor | Description |
|------|--------|--------|-------------|-------------|
| [#471](https://github.com/tscircuit/circuit-to-svg/pull/471) | 🐳 Major | ⭐⭐⭐ | ShiboSoftwareDev | Includes note dimensions in SVG bounds for PCB elements, allowing for accurate representation of dimensions in the generated SVG. |

<details>
<summary>🐌 Tiny Contributions (1)</summary>

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#470](https://github.com/tscircuit/circuit-to-svg/pull/470) | 🐌 Tiny | ShiboSoftwareDev | Refactors the PCB bounds calculation logic into a separate utility function to improve code organization and maintainability. |

</details>

### [tscircuit/core](https://github.com/tscircuit/core)

| PR # | Impact | Rating | Contributor | Description |
|------|--------|--------|-------------|-------------|
| [#1809](https://github.com/tscircuit/core/pull/1809) | 🐳 Major | ⭐⭐⭐ | seveibar | Updates the autorouter to include improvements in the multi-section port point solver, enhancing routing capabilities for complex designs. |

<details>
<summary>🐌 Tiny Contributions (1)</summary>

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#1810](https://github.com/tscircuit/core/pull/1810) | 🐌 Tiny | ShiboSoftwareDev | Updates the circuit-to-svg and schematic-symbols dependencies to their latest versions in package.json |

</details>

### [tscircuit/bun-match-svg](https://github.com/tscircuit/bun-match-svg)


<details>
<summary>🐌 Tiny Contributions (1)</summary>

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#13](https://github.com/tscircuit/bun-match-svg/pull/13) | 🐌 Tiny | ShiboSoftwareDev | Enhances the init command to be more robust when a bunfig.toml file already exists and adds a test to ensure its behavior is correct. |

</details>

### [tscircuit/tscircuit-autorouter](https://github.com/tscircuit/tscircuit-autorouter)

| PR # | Impact | Rating | Contributor | Description |
|------|--------|--------|-------------|-------------|
| [#483](https://github.com/tscircuit/tscircuit-autorouter/pull/483) | 🐳 Major | ⭐⭐⭐ | seveibar | Reintroduces the MultiSectionSolver to the assignable autorouting pipeline, adding support for rip and replace functionality in connection handling. |
| [#482](https://github.com/tscircuit/tscircuit-autorouter/pull/482) | 🐳 Major | ⭐⭐⭐ | seveibar | Selects the centermost exit port point to avoid trace collisions during autorouting. |
| [#480](https://github.com/tscircuit/tscircuit-autorouter/pull/480) | 🐳 Major | ⭐⭐⭐ | 0hmX | Adds a red dashed line visualization to indicate failed connections in the autorouting process. |
| [#481](https://github.com/tscircuit/tscircuit-autorouter/pull/481) | 🐳 Major | ⭐⭐⭐ | 0hmX | Removes the isHighDensityNodeSolvable function and simplifies the interactive mode by using existing functions for node solvability checks. |

<details>
<summary>🐌 Tiny Contributions (4)</summary>

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#478](https://github.com/tscircuit/tscircuit-autorouter/pull/478) | 🐌 Tiny | 0hmX | This pull request adds a new bug report fixture for bug report ID 33, which includes a larger display board configuration. The changes include the addition of a new JSON file containing the bug report data and a corresponding TypeScript fixture for testing purposes. |
| [#476](https://github.com/tscircuit/tscircuit-autorouter/pull/476) | 🐌 Tiny | 0hmX | Adds a test case to ensure that the autorouter does not return any _mst source trace IDs, addressing a specific issue in the autorouting functionality. |
| [#479](https://github.com/tscircuit/tscircuit-autorouter/pull/479) | 🐌 Tiny | 0hmX | This pull request adds a new bug report fixture for bug report ID e9dea27d-6dc6-4718-9d07-d4732e4cbf8e. It includes a JSON file with detailed routing information and a corresponding TypeScript fixture for testing purposes. |
| [#477](https://github.com/tscircuit/tscircuit-autorouter/pull/477) | 🐌 Tiny | 0hmX | Fixes the target directory in bug report scripts to reflect the recent name change from examples to fixtures. |

</details>

### [tscircuit/contribution-tracker](https://github.com/tscircuit/contribution-tracker)

| PR # | Impact | Rating | Contributor | Description |
|------|--------|--------|-------------|-------------|
| [#290](https://github.com/tscircuit/contribution-tracker/pull/290) | 🐙 Minor | ⭐⭐ | seveibar | This PR moves the sponsorship calculation details from the weekly contribution overview to a dedicated static document, simplifying the overview and making the sponsorship details more discoverable. |

### [tscircuit/docs](https://github.com/tscircuit/docs)


<details>
<summary>🐌 Tiny Contributions (1)</summary>

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#402](https://github.com/tscircuit/docs/pull/402) | 🐌 Tiny | seveibar | Adds documentation for tscircuit.config.json options, including a configuration options table and detailed descriptions for properties like previewComponentPath and snapshotsDir. |

</details>

### [tscircuit/links.tscircuit.com](https://github.com/tscircuit/links.tscircuit.com)


<details>
<summary>🐌 Tiny Contributions (1)</summary>

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#1](https://github.com/tscircuit/links.tscircuit.com/pull/1) | 🐌 Tiny | seveibar | Adds links to the Lab Inventory spreadsheet and Coding Guidelines in the links page for quick access by the team. |

</details>

### [tscircuit/jscad-electronics](https://github.com/tscircuit/jscad-electronics)


<details>
<summary>🐌 Tiny Contributions (3)</summary>

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#250](https://github.com/tscircuit/jscad-electronics/pull/250) | 🐌 Tiny | rushabhcodes | Adds support for rendering axial capacitors in the 3D footprint library with a new AxialCapacitor component and snapshot test for 14mm pitch. |
| [#249](https://github.com/tscircuit/jscad-electronics/pull/249) | 🐌 Tiny | rushabhcodes | Adds support for rendering SMD right-angle pin rows in the 3D footprint viewer, including new props and updated rendering logic. |
| [#248](https://github.com/tscircuit/jscad-electronics/pull/248) | 🐌 Tiny | rushabhcodes | Refactors the codebase to replace the axial capacitor component with a radial capacitor component and updates related dependencies and references. |

</details>

### [tscircuit/pcbburn.com](https://github.com/tscircuit/pcbburn.com)

| PR # | Impact | Rating | Contributor | Description |
|------|--------|--------|-------------|-------------|
| [#7](https://github.com/tscircuit/pcbburn.com/pull/7) | 🐳 Major | ⭐⭐⭐ | AnasSarkiz | Adds comprehensive KiCad PCB file support to PCBBurn, enabling users to upload .kicad_pcb files and folders containing them for automatic conversion to Circuit JSON and LBRN generation. |
| [#6](https://github.com/tscircuit/pcbburn.com/pull/6) | 🐳 Major | ⭐⭐⭐ | AnasSarkiz | Adds a resizable settings panel with drag handle, introduces laser profiles with full copperboard controls, and improves input methods with numeric entry and toggle switches. |
| [#5](https://github.com/tscircuit/pcbburn.com/pull/5) | 🐳 Major | ⭐⭐⭐ | AnasSarkiz | This PR significantly improves the circuit converter apps usability by making the interface fully responsive, adding KiCad file support, and automating LBRN generationreducing manual steps and enhancing mobiledesktop workflows. |

### [tscircuit/circuit-json-to-lbrn](https://github.com/tscircuit/circuit-json-to-lbrn)

| PR # | Impact | Rating | Contributor | Description |
|------|--------|--------|-------------|-------------|
| [#75](https://github.com/tscircuit/circuit-json-to-lbrn/pull/75) | 🐙 Minor | ⭐⭐ | AnasSarkiz | Extract and export the ConvertCircuitJsonToLbrnOptions interface from the inline type definition to enable its reuse in the PCBBurn repository. |

## Changes by Contributor

### [tscircuitbot](https://github.com/tscircuitbot)


<details>
<summary>🐌 Tiny Contributions (26)</summary>

| PR # | Impact | Description |
|------|--------|-------------|
| [#575](https://github.com/tscircuit/pcb-viewer/pull/575) | 🐌 Tiny | Automated package update |
| [#1766](https://github.com/tscircuit/tscircuit/pull/1766) | 🐌 Tiny | Automated package update |
| [#1765](https://github.com/tscircuit/tscircuit/pull/1765) | 🐌 Tiny | Updates the tscircuitcli package to version 0.1.711 in the package.json file. |
| [#1764](https://github.com/tscircuit/tscircuit/pull/1764) | 🐌 Tiny | Updates the package version from 0.0.1099 to 0.0.1100 in package.json |
| [#1763](https://github.com/tscircuit/tscircuit/pull/1763) | 🐌 Tiny | Automated package update |
| [#1762](https://github.com/tscircuit/tscircuit/pull/1762) | 🐌 Tiny | Automated package update |
| [#1761](https://github.com/tscircuit/tscircuit/pull/1761) | 🐌 Tiny | Updates the tscircuitcli package from version 0.1.709 to 0.1.710 |
| [#1758](https://github.com/tscircuit/tscircuit/pull/1758) | 🐌 Tiny | Automated package update |
| [#1759](https://github.com/tscircuit/tscircuit/pull/1759) | 🐌 Tiny | Automated package update |
| [#1760](https://github.com/tscircuit/tscircuit/pull/1760) | 🐌 Tiny | Updates the package version from 0.0.1097 to 0.0.1098 in package.json |
| [#2383](https://github.com/tscircuit/tscircuit.com/pull/2383) | 🐌 Tiny | Automated package update |
| [#2382](https://github.com/tscircuit/tscircuit.com/pull/2382) | 🐌 Tiny | Automated package update to version 0.0.177 |
| [#2380](https://github.com/tscircuit/tscircuit.com/pull/2380) | 🐌 Tiny | Updates the tscircuiteval package from version 0.0.567 to 0.0.568 |
| [#1813](https://github.com/tscircuit/eval/pull/1813) | 🐌 Tiny | Automated package update |
| [#1812](https://github.com/tscircuit/eval/pull/1812) | 🐌 Tiny | Automated package update |
| [#1810](https://github.com/tscircuit/eval/pull/1810) | 🐌 Tiny | Automated package update |
| [#1809](https://github.com/tscircuit/eval/pull/1809) | 🐌 Tiny | Automated package update |
| [#2249](https://github.com/tscircuit/runframe/pull/2249) | 🐌 Tiny | Automated package update |
| [#2248](https://github.com/tscircuit/runframe/pull/2248) | 🐌 Tiny | Updates the tscircuiteval package from version 0.0.567 to 0.0.568 |
| [#1532](https://github.com/tscircuit/cli/pull/1532) | 🐌 Tiny | Automated package update |
| [#1531](https://github.com/tscircuit/cli/pull/1531) | 🐌 Tiny | Automated package update |
| [#1530](https://github.com/tscircuit/cli/pull/1530) | 🐌 Tiny | Automated package update |
| [#1529](https://github.com/tscircuit/cli/pull/1529) | 🐌 Tiny | Automated package update |
| [#91](https://github.com/tscircuit/circuit-to-canvas/pull/91) | 🐌 Tiny | Automated package update |
| [#86](https://github.com/tscircuit/circuit-to-canvas/pull/86) | 🐌 Tiny | Automated package update |
| [#88](https://github.com/tscircuit/circuit-to-canvas/pull/88) | 🐌 Tiny | Automated package update |

</details>

### [Abse2001](https://github.com/Abse2001)

| PRs # | Impact | Rating | Description |
|------|--------|--------|-------------|
| [#574](https://github.com/tscircuit/pcb-viewer/pull/574) | 🐙 Minor | ⭐⭐ | Promotes PCB fabrication notes to a first-class rendering path and removes duplicated drawing logic, consolidating all fab rendering behind a single draw path. |
| [#85](https://github.com/tscircuit/circuit-to-canvas/pull/85) | 🐙 Minor | ⭐⭐ | Refactors dimension line rendering to use filled polygon geometry instead of stroked paths, improving visual consistency and stability across orientations and scaling transforms. |
| [#90](https://github.com/tscircuit/circuit-to-canvas/pull/90) | 🐙 Minor | ⭐⭐ | Fixes dimension line polygon winding issues by implementing a unified perimeter path to prevent self-intersections and ambiguous fill behavior. |

<details>
<summary>🐌 Tiny Contributions (2)</summary>

| PR # | Impact | Description |
|------|--------|-------------|
| [#1757](https://github.com/tscircuit/tscircuit/pull/1757) | 🐌 Tiny | Adds the missing core dependency tscircuitsoup-util to the package.json file. |
| [#2](https://github.com/tscircuit/minimal-rp2040/pull/2) | 🐌 Tiny | Adjusts the mounting position of the top display holes and modifies the board height to 74mm. |

</details>

### [shehaban](https://github.com/shehaban)

| PRs # | Impact | Rating | Description |
|------|--------|--------|-------------|
| [#442](https://github.com/tscircuit/footprinter/pull/442) | 🐙 Minor | ⭐⭐ | Adds support for radial footprints using the same 2D geometry as axial footprints, while providing explicit, machine-readable 3D model hinting for correct 3D rendering. |
| [#373](https://github.com/tscircuit/schematic-symbols/pull/373) | 🐙 Minor | ⭐⭐ | Fixes alignment of the  pin in the op-amp symbols (opamp_no_power and opamp_with_power) |

### [ShiboSoftwareDev](https://github.com/ShiboSoftwareDev)

| PRs # | Impact | Rating | Description |
|------|--------|--------|-------------|
| [#471](https://github.com/tscircuit/circuit-to-svg/pull/471) | 🐳 Major | ⭐⭐⭐ | Includes note dimensions in SVG bounds for PCB elements, allowing for accurate representation of dimensions in the generated SVG. |

<details>
<summary>🐌 Tiny Contributions (3)</summary>

| PR # | Impact | Description |
|------|--------|-------------|
| [#1810](https://github.com/tscircuit/core/pull/1810) | 🐌 Tiny | Updates the circuit-to-svg and schematic-symbols dependencies to their latest versions in package.json |
| [#470](https://github.com/tscircuit/circuit-to-svg/pull/470) | 🐌 Tiny | Refactors the PCB bounds calculation logic into a separate utility function to improve code organization and maintainability. |
| [#13](https://github.com/tscircuit/bun-match-svg/pull/13) | 🐌 Tiny | Enhances the init command to be more robust when a bunfig.toml file already exists and adds a test to ensure its behavior is correct. |

</details>

### [seveibar](https://github.com/seveibar)

| PRs # | Impact | Rating | Description |
|------|--------|--------|-------------|
| [#1809](https://github.com/tscircuit/core/pull/1809) | 🐳 Major | ⭐⭐⭐ | Updates the autorouter to include improvements in the multi-section port point solver, enhancing routing capabilities for complex designs. |
| [#483](https://github.com/tscircuit/tscircuit-autorouter/pull/483) | 🐳 Major | ⭐⭐⭐ | Reintroduces the MultiSectionSolver to the assignable autorouting pipeline, adding support for rip and replace functionality in connection handling. |
| [#482](https://github.com/tscircuit/tscircuit-autorouter/pull/482) | 🐳 Major | ⭐⭐⭐ | Selects the centermost exit port point to avoid trace collisions during autorouting. |
| [#290](https://github.com/tscircuit/contribution-tracker/pull/290) | 🐙 Minor | ⭐⭐ | This PR moves the sponsorship calculation details from the weekly contribution overview to a dedicated static document, simplifying the overview and making the sponsorship details more discoverable. |
| [#2379](https://github.com/tscircuit/tscircuit.com/pull/2379) | 🐙 Minor | ⭐⭐ | Add a fake packagestransfer endpoint to mirror the real backend behavior for localdev usage and tests, and expose a UI flow in the package settings Danger Zone to allow transferring ownership to an organization the user is a member of. |

<details>
<summary>🐌 Tiny Contributions (3)</summary>

| PR # | Impact | Description |
|------|--------|-------------|
| [#1528](https://github.com/tscircuit/cli/pull/1528) | 🐌 Tiny | Add a JSON schema for tscircuit.config.json to enable validation and auto-completion in editors, and ensure saved configs include a schema field pointing to the schema URL. |
| [#402](https://github.com/tscircuit/docs/pull/402) | 🐌 Tiny | Adds documentation for tscircuit.config.json options, including a configuration options table and detailed descriptions for properties like previewComponentPath and snapshotsDir. |
| [#1](https://github.com/tscircuit/links.tscircuit.com/pull/1) | 🐌 Tiny | Adds links to the Lab Inventory spreadsheet and Coding Guidelines in the links page for quick access by the team. |

</details>

### [rushabhcodes](https://github.com/rushabhcodes)


<details>
<summary>🐌 Tiny Contributions (4)</summary>

| PR # | Impact | Description |
|------|--------|-------------|
| [#250](https://github.com/tscircuit/jscad-electronics/pull/250) | 🐌 Tiny | Adds support for rendering axial capacitors in the 3D footprint library with a new AxialCapacitor component and snapshot test for 14mm pitch. |
| [#249](https://github.com/tscircuit/jscad-electronics/pull/249) | 🐌 Tiny | Adds support for rendering SMD right-angle pin rows in the 3D footprint viewer, including new props and updated rendering logic. |
| [#248](https://github.com/tscircuit/jscad-electronics/pull/248) | 🐌 Tiny | Refactors the codebase to replace the axial capacitor component with a radial capacitor component and updates related dependencies and references. |
| [#2353](https://github.com/tscircuit/tscircuit.com/pull/2353) | 🐌 Tiny | Updates the visual design and layout of the PackageCard component and its skeleton, enhancing spacing, typography, color usage, and information hierarchy for better readability and aesthetics. |

</details>

### [imrishabh18](https://github.com/imrishabh18)

| PRs # | Impact | Rating | Description |
|------|--------|--------|-------------|
| [#1517](https://github.com/tscircuit/cli/pull/1517) | 🐳 Major | ⭐⭐⭐ | Adds a command-line flag to use a CDN-hosted JavaScript file instead of a local bundled file in the generated index.html for tscircuit.app. |

### [0hmX](https://github.com/0hmX)

| PRs # | Impact | Rating | Description |
|------|--------|--------|-------------|
| [#480](https://github.com/tscircuit/tscircuit-autorouter/pull/480) | 🐳 Major | ⭐⭐⭐ | Adds a red dashed line visualization to indicate failed connections in the autorouting process. |
| [#481](https://github.com/tscircuit/tscircuit-autorouter/pull/481) | 🐳 Major | ⭐⭐⭐ | Removes the isHighDensityNodeSolvable function and simplifies the interactive mode by using existing functions for node solvability checks. |

<details>
<summary>🐌 Tiny Contributions (4)</summary>

| PR # | Impact | Description |
|------|--------|-------------|
| [#478](https://github.com/tscircuit/tscircuit-autorouter/pull/478) | 🐌 Tiny | This pull request adds a new bug report fixture for bug report ID 33, which includes a larger display board configuration. The changes include the addition of a new JSON file containing the bug report data and a corresponding TypeScript fixture for testing purposes. |
| [#476](https://github.com/tscircuit/tscircuit-autorouter/pull/476) | 🐌 Tiny | Adds a test case to ensure that the autorouter does not return any _mst source trace IDs, addressing a specific issue in the autorouting functionality. |
| [#479](https://github.com/tscircuit/tscircuit-autorouter/pull/479) | 🐌 Tiny | This pull request adds a new bug report fixture for bug report ID e9dea27d-6dc6-4718-9d07-d4732e4cbf8e. It includes a JSON file with detailed routing information and a corresponding TypeScript fixture for testing purposes. |
| [#477](https://github.com/tscircuit/tscircuit-autorouter/pull/477) | 🐌 Tiny | Fixes the target directory in bug report scripts to reflect the recent name change from examples to fixtures. |

</details>

### [techmannih](https://github.com/techmannih)

| PRs # | Impact | Rating | Description |
|------|--------|--------|-------------|
| [#89](https://github.com/tscircuit/circuit-to-canvas/pull/89) | 🐙 Minor | ⭐⭐ | Adds support for soldermask margins for all shapes of plated holes in PCB designs, allowing for more precise control over soldermask application. |
| [#87](https://github.com/tscircuit/circuit-to-canvas/pull/87) | 🐙 Minor | ⭐⭐ | Adds support for soldermask margins around holes in PCB designs, allowing for better visual representation and manufacturing accuracy. |

### [AnasSarkiz](https://github.com/AnasSarkiz)

| PRs # | Impact | Rating | Description |
|------|--------|--------|-------------|
| [#7](https://github.com/tscircuit/pcbburn.com/pull/7) | 🐳 Major | ⭐⭐⭐ | Adds comprehensive KiCad PCB file support to PCBBurn, enabling users to upload .kicad_pcb files and folders containing them for automatic conversion to Circuit JSON and LBRN generation. |
| [#6](https://github.com/tscircuit/pcbburn.com/pull/6) | 🐳 Major | ⭐⭐⭐ | Adds a resizable settings panel with drag handle, introduces laser profiles with full copperboard controls, and improves input methods with numeric entry and toggle switches. |
| [#5](https://github.com/tscircuit/pcbburn.com/pull/5) | 🐳 Major | ⭐⭐⭐ | This PR significantly improves the circuit converter apps usability by making the interface fully responsive, adding KiCad file support, and automating LBRN generationreducing manual steps and enhancing mobiledesktop workflows. |
| [#75](https://github.com/tscircuit/circuit-json-to-lbrn/pull/75) | 🐙 Minor | ⭐⭐ | Extract and export the ConvertCircuitJsonToLbrnOptions interface from the inline type definition to enable its reuse in the PCBBurn repository. |

## Repository Owners

| Repository | Codeowners |
|------------|------------|
| [builder](https://github.com/tscircuit/builder/blob/main/.github/CODEOWNERS) | [seveibar](https://github.com/seveibar)
| [pcb-viewer](https://github.com/tscircuit/pcb-viewer/blob/main/.github/CODEOWNERS) | [seveibar](https://github.com/seveibar), [ShiboSoftwareDev](https://github.com/ShiboSoftwareDev)
| [footprints-old](https://github.com/tscircuit/footprints-old/blob/main/.github/CODEOWNERS) | [seveibar](https://github.com/seveibar)
| [footprinter](https://github.com/tscircuit/footprinter/blob/main/.github/CODEOWNERS) | [seveibar](https://github.com/seveibar), [techmannih](https://github.com/techmannih)
| [3d-viewer](https://github.com/tscircuit/3d-viewer/blob/main/.github/CODEOWNERS) | [ShiboSoftwareDev](https://github.com/ShiboSoftwareDev)
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
| [techmannih](https://github.com/techmannih) | [footprinter](https://github.com/tscircuit/footprinter/blob/main/.github/CODEOWNERS) |
|  | [jscad-electronics](https://github.com/tscircuit/jscad-electronics/blob/main/.github/CODEOWNERS) |
|  | [schematic-symbols](https://github.com/tscircuit/schematic-symbols/blob/main/.github/CODEOWNERS) |
|  | [sparkfun-boards](https://github.com/tscircuit/sparkfun-boards/blob/main/.github/CODEOWNERS) |
| [anas-sarkez](https://github.com/anas-sarkez) | [jscad-electronics](https://github.com/tscircuit/jscad-electronics/blob/main/.github/CODEOWNERS) |
| [imrishabh18](https://github.com/imrishabh18) | [circuit-to-svg](https://github.com/tscircuit/circuit-to-svg/blob/main/.github/CODEOWNERS) |
|  | [schematic-symbols](https://github.com/tscircuit/schematic-symbols/blob/main/.github/CODEOWNERS) |
|  | [tscircuit.com](https://github.com/tscircuit/tscircuit.com/blob/main/.github/CODEOWNERS) |
| [Anshgrover23](https://github.com/Anshgrover23) | [issue-roulette](https://github.com/tscircuit/issue-roulette/blob/main/.github/CODEOWNERS) |
|  | [sparkfun-boards](https://github.com/tscircuit/sparkfun-boards/blob/main/.github/CODEOWNERS) |
| [Abse2001](https://github.com/Abse2001) | [sparkfun-boards](https://github.com/tscircuit/sparkfun-boards/blob/main/.github/CODEOWNERS) |
|  | [schematic-corpus](https://github.com/tscircuit/schematic-corpus/blob/main/.github/CODEOWNERS) |
|  | [common](https://github.com/tscircuit/common/blob/main/.github/CODEOWNERS) |
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
