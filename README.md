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

# Contribution Overview 2025-03-19

## PRs by Repository

```mermaid
pie
    "tscircuit/pcb-viewer" : 2
    "tscircuit/props" : 2
    "tscircuit/core" : 5
    "tscircuit/graphics-debug" : 1
    "tscircuit/eval" : 11
    "tscircuit/docs" : 1
    "tscircuit/unravel-autorouter" : 10
    "tscircuit/runframe" : 8
    "tscircuit/cli" : 7
    "tscircuit/easyeda-converter" : 1
    "tscircuit/contribution-tracker" : 3
    "tscircuit/3d-viewer" : 1
    "tscircuit/dsn-converter" : 1
    "tscircuit/tscircuit.com" : 3
    "tscircuit/file-server" : 1
```

## Contributor Overview

| Contributor | 🐳 Major | 🐙 Minor | 🐌 Tiny | ⭐ | Issues Created |
|-------------|---------|---------|---------|-----|----------------|
| [seveibar](#seveibar) | 7 | 18 | 2 | 👑 | 50 |
| [imrishabh18](#imrishabh18) | 1 | 4 | 2 | ⭐⭐ | 7 |
| [ArnavK-09](#ArnavK-09) | 1 | 4 | 0 | ⭐⭐ | 2 |
| [Anshgrover23](#Anshgrover23) | 1 | 2 | 0 | ⭐ | 3 |
| [krushnarout](#krushnarout) | 0 | 3 | 0 | ⭐ | 0 |
| [tscircuitbot](#tscircuitbot) | 0 | 0 | 3 |  | 0 |
| [dhvll](#dhvll) | 0 | 1 | 0 |  | 0 |
| [MustafaMulla29](#MustafaMulla29) | 0 | 1 | 0 |  | 0 |
| [Ayushjhawar8](#Ayushjhawar8) | 0 | 0 | 1 |  | 1 |
| [kom-senapati](#kom-senapati) | 0 | 1 | 0 |  | 0 |
| [ricohageman](#ricohageman) | 0 | 1 | 0 |  | 0 |

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
| [dhvll](#dhvll) | 1 | 1 | 0 | 0 | 0 | 1 | 1 | 0 | 0 | 0 |
| [imrishabh18](#imrishabh18) | 13 | 5 | 1 | 4 | 3 | 11 | 7 | 7 | 3 | 14 |
| [MustafaMulla29](#MustafaMulla29) | 7 | 1 | 0 | 0 | 0 | 4 | 1 | 0 | 0 | 0 |
| [seveibar](#seveibar) | 1 | 1 | 0 | 19 | 5 | 33 | 30 | 50 | 34 | 818 |
| [Anshgrover23](#Anshgrover23) | 10 | 3 | 2 | 0 | 0 | 7 | 3 | 3 | 1 | 10 |
| [onyedikachi-david](#onyedikachi-david) | 1 | 0 | 0 | 0 | 0 | 2 | 0 | 0 | 0 | 0 |
| [Ayushjhawar8](#Ayushjhawar8) | 1 | 1 | 0 | 0 | 0 | 1 | 1 | 1 | 1 | 10 |
| [ArnavK-09](#ArnavK-09) | 14 | 5 | 2 | 1 | 0 | 7 | 5 | 2 | 0 | 0 |
| [siva222003](#siva222003) | 3 | 1 | 1 | 0 | 0 | 2 | 0 | 0 | 0 | 0 |
| [kom-senapati](#kom-senapati) | 3 | 2 | 0 | 0 | 0 | 1 | 1 | 0 | 0 | 0 |
| [tscircuitbot](#tscircuitbot) | 0 | 0 | 0 | 0 | 0 | 10 | 4 | 0 | 0 | 0 |
| [krushnarout](#krushnarout) | 5 | 3 | 2 | 0 | 0 | 4 | 3 | 0 | 0 | 0 |
| [ricohageman](#ricohageman) | 2 | 1 | 0 | 0 | 0 | 1 | 1 | 0 | 0 | 0 |

## Changes by Repository

### [tscircuit/pcb-viewer](https://github.com/tscircuit/pcb-viewer)

| PR # | Impact | Contributor | Description | Milestone Aligned |
|------|--------|-------------|-------------|-------------------|
| [#200](https://github.com/tscircuit/pcb-viewer/pull/200) | 🐙 Minor | dhvll | Improve bottom silkscreen visibility by changing its color from blue to yellow. | ✅ |
| [#202](https://github.com/tscircuit/pcb-viewer/pull/202) | 🟣 | seveibar | Fixes the initial transform of the PCBViewer component to ensure it is properly initialized and focused. | ✅ |

### [tscircuit/props](https://github.com/tscircuit/props)

| PR # | Impact | Contributor | Description | Milestone Aligned |
|------|--------|-------------|-------------|-------------------|
| [#197](https://github.com/tscircuit/props/pull/197) | 🐳 Major | seveibar | Enhances the `ChipProps` type with more advanced features, including support for more complex pin label definitions and better type safety for the `connections` property. | ✅ |
| [#198](https://github.com/tscircuit/props/pull/198) | 🐙 Minor | seveibar | Adds `ChipConnections` and `ChipPinLabels` utility types to the library. | ✅ |

### [tscircuit/core](https://github.com/tscircuit/core)

| PR # | Impact | Contributor | Description | Milestone Aligned |
|------|--------|-------------|-------------|-------------------|
| [#711](https://github.com/tscircuit/core/pull/711) | 🐳 Major | seveibar | Add support for new chip selection syntax: `sel.U1(MyChip)` and `sel.U1<"custompin1" | "custompin2">()` | ✅ |
| [#713](https://github.com/tscircuit/core/pull/713) | 🐳 Major | imrishabh18 | Adds a utility function to apply manual edit events to a PCB manual edits file. | ✅ |
| [#714](https://github.com/tscircuit/core/pull/714) | 🐙 Minor | seveibar | Updates the Unravel Autorouter to version 0.0.42 | ✅ |
| [#710](https://github.com/tscircuit/core/pull/710) | 🐙 Minor | seveibar | Replace "visualize" with "preview" to speed up autorouter previews | ✅ |
| [#705](https://github.com/tscircuit/core/pull/705) | 🐙 Minor | seveibar | Update the capacity autorouter to version 0.0.34 | ✅ |

### [tscircuit/graphics-debug](https://github.com/tscircuit/graphics-debug)

| PR # | Impact | Contributor | Description | Milestone Aligned |
|------|--------|-------------|-------------|-------------------|
| [#50](https://github.com/tscircuit/graphics-debug/pull/50) | 🐙 Minor | seveibar | Add default line colors instead of black for canvas rendering, add stroke dash support. | ❌ |

### [tscircuit/eval](https://github.com/tscircuit/eval)

| PR # | Impact | Contributor | Description | Milestone Aligned |
|------|--------|-------------|-------------|-------------------|
| [#154](https://github.com/tscircuit/eval/pull/154) | 🐙 Minor | seveibar | Add support for subdirectory relative imports and absolute project directory imports | ✅ |
| [#151](https://github.com/tscircuit/eval/pull/151) | 🐙 Minor | seveibar | Add support for ".ts" file extension loading in eval | ✅ |
| [#150](https://github.com/tscircuit/eval/pull/150) | 🟣 | seveibar | Adds better file system normalization support, including the ability to import files without file extensions, introduces a new `runTscircuitCode` function, refactors import keys for clarity, and adds default entrypoint configuration. | ❌ |
| [#146](https://github.com/tscircuit/eval/pull/146) | 🟣 | seveibar | Add an auto-merge workflow for pull requests updating the `@tscircuit/core` package. | ✅ |
| [#163](https://github.com/tscircuit/eval/pull/163) | 🐳 Major | Anshgrover23 | Adds support for parent directory imports in the `resolveFilePath` function. | ✅ |
| [#161](https://github.com/tscircuit/eval/pull/161) | 🐙 Minor | imrishabh18 | Fix for a bug that caused an error when importing a `manual-edits.json` file. | ✅ |
| [#148](https://github.com/tscircuit/eval/pull/148) | 🐌 Tiny | imrishabh18 | Update config to not generate lockfile | ❌ |
| [#168](https://github.com/tscircuit/eval/pull/168) | 🟣 | tscircuitbot | Automated update of @tscircuit/core to v0.0.357. | ✅ |
| [#166](https://github.com/tscircuit/eval/pull/166) | 🐌 Tiny | tscircuitbot | Automated update of @tscircuit/core to v0.0.356. | ✅ |
| [#159](https://github.com/tscircuit/eval/pull/159) | 🐌 Tiny | tscircuitbot | Update @tscircuit/core to v0.0.355 | ✅ |
| [#144](https://github.com/tscircuit/eval/pull/144) | 🐌 Tiny | tscircuitbot | Update @tscircuit/core to v0.0.353 | ✅ |

### [tscircuit/docs](https://github.com/tscircuit/docs)

| PR # | Impact | Contributor | Description | Milestone Aligned |
|------|--------|-------------|-------------|-------------------|
| [#22](https://github.com/tscircuit/docs/pull/22) | 🐳 Major | seveibar | The pull request documents the new "selector" pattern for defining chips with type-safe chip properties and pin references. | ❌ |

### [tscircuit/unravel-autorouter](https://github.com/tscircuit/unravel-autorouter)

| PR # | Impact | Contributor | Description | Milestone Aligned |
|------|--------|-------------|-------------|-------------------|
| [#78](https://github.com/tscircuit/unravel-autorouter/pull/78) | 🐳 Major | seveibar | Introduces a "Closed Form Two Trace Transition Crossing Solver" feature that allows downloading unravel sections. | ✅ |
| [#77](https://github.com/tscircuit/unravel-autorouter/pull/77) | 🐳 Major | seveibar | This pull request introduces a multi-section capacity planning feature, where the connections are sorted prior to capacity pathing so that the shortest routes are routed first. It also deletes a significant amount of legacy solver code. | ✅ |
| [#75](https://github.com/tscircuit/unravel-autorouter/pull/75) | 🐳 Major | seveibar | The pull request allows straw solving for smaller nodes, penalizes small nodes in capacity pathing, and fixes an occasional via-in-straw issue. | ✅ |
| [#72](https://github.com/tscircuit/unravel-autorouter/pull/72) | 🐳 Major | seveibar | Fixes not accepting solutions due to cell step rounding issues via SQRT2 multiplication and adds a new test case that shows the existing solvers don't properly handle segment points that overlap X,Y on different Z. | ✅ |
| [#73](https://github.com/tscircuit/unravel-autorouter/pull/73) | 🐙 Minor | seveibar | The pull request fixes a bug in the `IntraNodeSolver` class that was causing issues with routing cells with overlapping z-segment points at the high-density stage. | ✅ |
| [#67](https://github.com/tscircuit/unravel-autorouter/pull/67) | 🐙 Minor | seveibar | Adds a lightweight preview visualization to the AutoroutingPipelineSolver to speed up the previews of the autorouter. | ✅ |
| [#60](https://github.com/tscircuit/unravel-autorouter/pull/60) | 🐙 Minor | seveibar | The pull request allows connecting connections with no hd routes due to adjacent nodes. | ❌ |
| [#59](https://github.com/tscircuit/unravel-autorouter/pull/59) | 🐙 Minor | seveibar | Adds a new JSON file with data for a capacityMeshNode and a nodeWithPortPoints. | ❌ |
| [#57](https://github.com/tscircuit/unravel-autorouter/pull/57) | 🐙 Minor | ricohageman | Reduces the time spent sorting candidates by keeping them sorted inside a priority queue, yielding a 17% speedup on the ledmatrix3 benchmark. | ❌ |
| [#70](https://github.com/tscircuit/unravel-autorouter/pull/70) | 🐌 Tiny | seveibar | Add a new Keyboard4 example file to the project. | ✅ |

### [tscircuit/runframe](https://github.com/tscircuit/runframe)

| PR # | Impact | Contributor | Description | Milestone Aligned |
|------|--------|-------------|-------------|-------------------|
| [#370](https://github.com/tscircuit/runframe/pull/370) | 🐳 Major | ArnavK-09 | Introduces a new `ImportComponentDialog` component that allows users to search and import components from JLC and tscircuit APIs. | ✅ |
| [#347](https://github.com/tscircuit/runframe/pull/347) | 🐙 Minor | seveibar | Add a "CLI Admin Panel" option in the advanced menu to help debug CLI events/files. | ✅ |
| [#339](https://github.com/tscircuit/runframe/pull/339) | 🐙 Minor | seveibar | The pull request adds a new feature that allows the user to force the latest @tscircuit/eval version to be used in the CLI by default. | ❌ |
| [#359](https://github.com/tscircuit/runframe/pull/359) | 🐙 Minor | imrishabh18 | The pull request updates the `@tscircuit/eval` version from `0.0.131` to `0.0.135` and adds a new test to verify that the `manualEdits` functionality works as expected. | ✅ |
| [#354](https://github.com/tscircuit/runframe/pull/354) | 🐙 Minor | krushnarout | Hides the preview graphics after the PCB traces are rendered | ✅ |
| [#357](https://github.com/tscircuit/runframe/pull/357) | 🐙 Minor | krushnarout | Fix error tab content getting cut off in full screen mode | ✅ |
| [#341](https://github.com/tscircuit/runframe/pull/341) | 🐙 Minor | krushnarout | The pull request changes the default behavior of the CircuitJsonPreview component to open in full screen mode. | ✅ |
| [#348](https://github.com/tscircuit/runframe/pull/348) | 🐌 Tiny | seveibar | Use a simpler expression to simplify error text and avoid cutting off important text. | ✅ |

### [tscircuit/cli](https://github.com/tscircuit/cli)

| PR # | Impact | Contributor | Description | Milestone Aligned |
|------|--------|-------------|-------------|-------------------|
| [#119](https://github.com/tscircuit/cli/pull/119) | 🐙 Minor | seveibar | Upgrade the `@tscircuit/runframe` package to version `0.0.271` | ❌ |
| [#113](https://github.com/tscircuit/cli/pull/113) | 🐙 Minor | seveibar | Adds a GitHub Actions workflow to check for non-dev dependencies in the project and prevent them from being added. | ✅ |
| [#112](https://github.com/tscircuit/cli/pull/112) | 🐙 Minor | seveibar | Stylize the tsci dev command | ✅ |
| [#110](https://github.com/tscircuit/cli/pull/110) | 🐙 Minor | seveibar | Update the `@tscircuit/runframe` dependency to version `0.0.254` to get the "force latest eval" feature. | ✅ |
| [#108](https://github.com/tscircuit/cli/pull/108) | 🐙 Minor | seveibar | Update tscircuit/core and tscircuit/eval dependencies to latest versions | ✅ |
| [#117](https://github.com/tscircuit/cli/pull/117) | 🐙 Minor | ArnavK-09 | Adds error handling to the package installation process to provide better guidance to the user in case of failures. | ✅ |
| [#111](https://github.com/tscircuit/cli/pull/111) | 🐙 Minor | ArnavK-09 | Add tests for the `clone` command functionality in the CLI | ✅ |

### [tscircuit/easyeda-converter](https://github.com/tscircuit/easyeda-converter)

| PR # | Impact | Contributor | Description | Milestone Aligned |
|------|--------|-------------|-------------|-------------------|
| [#176](https://github.com/tscircuit/easyeda-converter/pull/176) | 🐙 Minor | Anshgrover23 | Refactors the component definition to use ChipProps for type-safe component definition. | ✅ |

### [tscircuit/contribution-tracker](https://github.com/tscircuit/contribution-tracker)

| PR # | Impact | Contributor | Description | Milestone Aligned |
|------|--------|-------------|-------------|-------------------|
| [#99](https://github.com/tscircuit/contribution-tracker/pull/99) | 🐙 Minor | Anshgrover23 | Adds current milestone information and a column to display if a PR is aligned with the current milestone | ✅ |
| [#100](https://github.com/tscircuit/contribution-tracker/pull/100) | 🐙 Minor | ArnavK-09 | Adjust layout and spacing of the ContributorOverview component for better responsiveness. | ✅ |
| [#101](https://github.com/tscircuit/contribution-tracker/pull/101) | 🐌 Tiny | Ayushjhawar8 | Add "tscircuitbot" to the list of full-time contributors. | ✅ |

### [tscircuit/3d-viewer](https://github.com/tscircuit/3d-viewer)

| PR # | Impact | Contributor | Description | Milestone Aligned |
|------|--------|-------------|-------------|-------------------|
| [#221](https://github.com/tscircuit/3d-viewer/pull/221) | 🐙 Minor | MustafaMulla29 | Fixed a bug where the 3D viewer would be blank when the board's dimensions are 0. | ✅ |

### [tscircuit/dsn-converter](https://github.com/tscircuit/dsn-converter)

| PR # | Impact | Contributor | Description | Milestone Aligned |
|------|--------|-------------|-------------|-------------------|
| [#105](https://github.com/tscircuit/dsn-converter/pull/105) | 🐙 Minor | imrishabh18 | The change matches the number of `pcb_via` with the `route_type` via of `pcb_trace` to fix a mismatch between the two. | ✅ |

### [tscircuit/tscircuit.com](https://github.com/tscircuit/tscircuit.com)

| PR # | Impact | Contributor | Description | Milestone Aligned |
|------|--------|-------------|-------------|-------------------|
| [#738](https://github.com/tscircuit/tscircuit.com/pull/738) | 🐙 Minor | imrishabh18 | Updates the `@tscircuit/core` and `@tscircuit/runframe` dependencies, and adds a new feature to apply PCB edit events to the manual edits file. | ✅ |
| [#716](https://github.com/tscircuit/tscircuit.com/pull/716) | 🐙 Minor | kom-senapati | Add a new "Starred Snippets" tab to the user profile page. | ❌ |
| [#735](https://github.com/tscircuit/tscircuit.com/pull/735) | 🐌 Tiny | imrishabh18 | Update lockfile to ensure dependencies are up-to-date. | ❌ |

### [tscircuit/file-server](https://github.com/tscircuit/file-server)

| PR # | Impact | Contributor | Description | Milestone Aligned |
|------|--------|-------------|-------------|-------------------|
| [#6](https://github.com/tscircuit/file-server/pull/6) | 🐙 Minor | ArnavK-09 | Implement new routes for downloading files via GET requests, with tests to verify the functionality. | ✅ |

## Changes by Contributor

### [dhvll](https://github.com/dhvll)

| PR # | Impact | Description | Milestone Aligned |
|------|--------|-------------|-------------------|
| [#200](https://github.com/tscircuit/pcb-viewer/pull/200) | 🐙 Minor | Improve bottom silkscreen visibility by changing its color from blue to yellow. | ✅ |

### [seveibar](https://github.com/seveibar)

| PR # | Impact | Description | Milestone Aligned |
|------|--------|-------------|-------------------|
| [#202](https://github.com/tscircuit/pcb-viewer/pull/202) | 🟣 | Fixes the initial transform of the PCBViewer component to ensure it is properly initialized and focused. | ✅ |
| [#197](https://github.com/tscircuit/props/pull/197) | 🐳 Major | Enhances the `ChipProps` type with more advanced features, including support for more complex pin label definitions and better type safety for the `connections` property. | ✅ |
| [#711](https://github.com/tscircuit/core/pull/711) | 🐳 Major | Add support for new chip selection syntax: `sel.U1(MyChip)` and `sel.U1<"custompin1" | "custompin2">()` | ✅ |
| [#198](https://github.com/tscircuit/props/pull/198) | 🐙 Minor | Adds `ChipConnections` and `ChipPinLabels` utility types to the library. | ✅ |
| [#714](https://github.com/tscircuit/core/pull/714) | 🐙 Minor | Updates the Unravel Autorouter to version 0.0.42 | ✅ |
| [#710](https://github.com/tscircuit/core/pull/710) | 🐙 Minor | Replace "visualize" with "preview" to speed up autorouter previews | ✅ |
| [#705](https://github.com/tscircuit/core/pull/705) | 🐙 Minor | Update the capacity autorouter to version 0.0.34 | ✅ |
| [#50](https://github.com/tscircuit/graphics-debug/pull/50) | 🐙 Minor | Add default line colors instead of black for canvas rendering, add stroke dash support. | ❌ |
| [#154](https://github.com/tscircuit/eval/pull/154) | 🐙 Minor | Add support for subdirectory relative imports and absolute project directory imports | ✅ |
| [#151](https://github.com/tscircuit/eval/pull/151) | 🐙 Minor | Add support for ".ts" file extension loading in eval | ✅ |
| [#150](https://github.com/tscircuit/eval/pull/150) | 🟣 | Adds better file system normalization support, including the ability to import files without file extensions, introduces a new `runTscircuitCode` function, refactors import keys for clarity, and adds default entrypoint configuration. | ❌ |
| [#146](https://github.com/tscircuit/eval/pull/146) | 🟣 | Add an auto-merge workflow for pull requests updating the `@tscircuit/core` package. | ✅ |
| [#22](https://github.com/tscircuit/docs/pull/22) | 🐳 Major | The pull request documents the new "selector" pattern for defining chips with type-safe chip properties and pin references. | ❌ |
| [#78](https://github.com/tscircuit/unravel-autorouter/pull/78) | 🐳 Major | Introduces a "Closed Form Two Trace Transition Crossing Solver" feature that allows downloading unravel sections. | ✅ |
| [#77](https://github.com/tscircuit/unravel-autorouter/pull/77) | 🐳 Major | This pull request introduces a multi-section capacity planning feature, where the connections are sorted prior to capacity pathing so that the shortest routes are routed first. It also deletes a significant amount of legacy solver code. | ✅ |
| [#75](https://github.com/tscircuit/unravel-autorouter/pull/75) | 🐳 Major | The pull request allows straw solving for smaller nodes, penalizes small nodes in capacity pathing, and fixes an occasional via-in-straw issue. | ✅ |
| [#72](https://github.com/tscircuit/unravel-autorouter/pull/72) | 🐳 Major | Fixes not accepting solutions due to cell step rounding issues via SQRT2 multiplication and adds a new test case that shows the existing solvers don't properly handle segment points that overlap X,Y on different Z. | ✅ |
| [#347](https://github.com/tscircuit/runframe/pull/347) | 🐙 Minor | Add a "CLI Admin Panel" option in the advanced menu to help debug CLI events/files. | ✅ |
| [#339](https://github.com/tscircuit/runframe/pull/339) | 🐙 Minor | The pull request adds a new feature that allows the user to force the latest @tscircuit/eval version to be used in the CLI by default. | ❌ |
| [#119](https://github.com/tscircuit/cli/pull/119) | 🐙 Minor | Upgrade the `@tscircuit/runframe` package to version `0.0.271` | ❌ |
| [#113](https://github.com/tscircuit/cli/pull/113) | 🐙 Minor | Adds a GitHub Actions workflow to check for non-dev dependencies in the project and prevent them from being added. | ✅ |
| [#112](https://github.com/tscircuit/cli/pull/112) | 🐙 Minor | Stylize the tsci dev command | ✅ |
| [#110](https://github.com/tscircuit/cli/pull/110) | 🐙 Minor | Update the `@tscircuit/runframe` dependency to version `0.0.254` to get the "force latest eval" feature. | ✅ |
| [#108](https://github.com/tscircuit/cli/pull/108) | 🐙 Minor | Update tscircuit/core and tscircuit/eval dependencies to latest versions | ✅ |
| [#73](https://github.com/tscircuit/unravel-autorouter/pull/73) | 🐙 Minor | The pull request fixes a bug in the `IntraNodeSolver` class that was causing issues with routing cells with overlapping z-segment points at the high-density stage. | ✅ |
| [#67](https://github.com/tscircuit/unravel-autorouter/pull/67) | 🐙 Minor | Adds a lightweight preview visualization to the AutoroutingPipelineSolver to speed up the previews of the autorouter. | ✅ |
| [#60](https://github.com/tscircuit/unravel-autorouter/pull/60) | 🐙 Minor | The pull request allows connecting connections with no hd routes due to adjacent nodes. | ❌ |
| [#59](https://github.com/tscircuit/unravel-autorouter/pull/59) | 🐙 Minor | Adds a new JSON file with data for a capacityMeshNode and a nodeWithPortPoints. | ❌ |
| [#348](https://github.com/tscircuit/runframe/pull/348) | 🐌 Tiny | Use a simpler expression to simplify error text and avoid cutting off important text. | ✅ |
| [#70](https://github.com/tscircuit/unravel-autorouter/pull/70) | 🐌 Tiny | Add a new Keyboard4 example file to the project. | ✅ |

### [Anshgrover23](https://github.com/Anshgrover23)

| PR # | Impact | Description | Milestone Aligned |
|------|--------|-------------|-------------------|
| [#163](https://github.com/tscircuit/eval/pull/163) | 🐳 Major | Adds support for parent directory imports in the `resolveFilePath` function. | ✅ |
| [#176](https://github.com/tscircuit/easyeda-converter/pull/176) | 🐙 Minor | Refactors the component definition to use ChipProps for type-safe component definition. | ✅ |
| [#99](https://github.com/tscircuit/contribution-tracker/pull/99) | 🐙 Minor | Adds current milestone information and a column to display if a PR is aligned with the current milestone | ✅ |

### [MustafaMulla29](https://github.com/MustafaMulla29)

| PR # | Impact | Description | Milestone Aligned |
|------|--------|-------------|-------------------|
| [#221](https://github.com/tscircuit/3d-viewer/pull/221) | 🐙 Minor | Fixed a bug where the 3D viewer would be blank when the board's dimensions are 0. | ✅ |

### [imrishabh18](https://github.com/imrishabh18)

| PR # | Impact | Description | Milestone Aligned |
|------|--------|-------------|-------------------|
| [#713](https://github.com/tscircuit/core/pull/713) | 🐳 Major | Adds a utility function to apply manual edit events to a PCB manual edits file. | ✅ |
| [#105](https://github.com/tscircuit/dsn-converter/pull/105) | 🐙 Minor | The change matches the number of `pcb_via` with the `route_type` via of `pcb_trace` to fix a mismatch between the two. | ✅ |
| [#738](https://github.com/tscircuit/tscircuit.com/pull/738) | 🐙 Minor | Updates the `@tscircuit/core` and `@tscircuit/runframe` dependencies, and adds a new feature to apply PCB edit events to the manual edits file. | ✅ |
| [#161](https://github.com/tscircuit/eval/pull/161) | 🐙 Minor | Fix for a bug that caused an error when importing a `manual-edits.json` file. | ✅ |
| [#359](https://github.com/tscircuit/runframe/pull/359) | 🐙 Minor | The pull request updates the `@tscircuit/eval` version from `0.0.131` to `0.0.135` and adds a new test to verify that the `manualEdits` functionality works as expected. | ✅ |
| [#735](https://github.com/tscircuit/tscircuit.com/pull/735) | 🐌 Tiny | Update lockfile to ensure dependencies are up-to-date. | ❌ |
| [#148](https://github.com/tscircuit/eval/pull/148) | 🐌 Tiny | Update config to not generate lockfile | ❌ |

### [Ayushjhawar8](https://github.com/Ayushjhawar8)

| PR # | Impact | Description | Milestone Aligned |
|------|--------|-------------|-------------------|
| [#101](https://github.com/tscircuit/contribution-tracker/pull/101) | 🐌 Tiny | Add "tscircuitbot" to the list of full-time contributors. | ✅ |

### [ArnavK-09](https://github.com/ArnavK-09)

| PR # | Impact | Description | Milestone Aligned |
|------|--------|-------------|-------------------|
| [#370](https://github.com/tscircuit/runframe/pull/370) | 🐳 Major | Introduces a new `ImportComponentDialog` component that allows users to search and import components from JLC and tscircuit APIs. | ✅ |
| [#100](https://github.com/tscircuit/contribution-tracker/pull/100) | 🐙 Minor | Adjust layout and spacing of the ContributorOverview component for better responsiveness. | ✅ |
| [#117](https://github.com/tscircuit/cli/pull/117) | 🐙 Minor | Adds error handling to the package installation process to provide better guidance to the user in case of failures. | ✅ |
| [#111](https://github.com/tscircuit/cli/pull/111) | 🐙 Minor | Add tests for the `clone` command functionality in the CLI | ✅ |
| [#6](https://github.com/tscircuit/file-server/pull/6) | 🐙 Minor | Implement new routes for downloading files via GET requests, with tests to verify the functionality. | ✅ |

### [kom-senapati](https://github.com/kom-senapati)

| PR # | Impact | Description | Milestone Aligned |
|------|--------|-------------|-------------------|
| [#716](https://github.com/tscircuit/tscircuit.com/pull/716) | 🐙 Minor | Add a new "Starred Snippets" tab to the user profile page. | ❌ |

### [tscircuitbot](https://github.com/tscircuitbot)

| PR # | Impact | Description | Milestone Aligned |
|------|--------|-------------|-------------------|
| [#168](https://github.com/tscircuit/eval/pull/168) | 🟣 | Automated update of @tscircuit/core to v0.0.357. | ✅ |
| [#166](https://github.com/tscircuit/eval/pull/166) | 🐌 Tiny | Automated update of @tscircuit/core to v0.0.356. | ✅ |
| [#159](https://github.com/tscircuit/eval/pull/159) | 🐌 Tiny | Update @tscircuit/core to v0.0.355 | ✅ |
| [#144](https://github.com/tscircuit/eval/pull/144) | 🐌 Tiny | Update @tscircuit/core to v0.0.353 | ✅ |

### [krushnarout](https://github.com/krushnarout)

| PR # | Impact | Description | Milestone Aligned |
|------|--------|-------------|-------------------|
| [#354](https://github.com/tscircuit/runframe/pull/354) | 🐙 Minor | Hides the preview graphics after the PCB traces are rendered | ✅ |
| [#357](https://github.com/tscircuit/runframe/pull/357) | 🐙 Minor | Fix error tab content getting cut off in full screen mode | ✅ |
| [#341](https://github.com/tscircuit/runframe/pull/341) | 🐙 Minor | The pull request changes the default behavior of the CircuitJsonPreview component to open in full screen mode. | ✅ |

### [ricohageman](https://github.com/ricohageman)

| PR # | Impact | Description | Milestone Aligned |
|------|--------|-------------|-------------------|
| [#57](https://github.com/tscircuit/unravel-autorouter/pull/57) | 🐙 Minor | Reduces the time spent sorting candidates by keeping them sorted inside a priority queue, yielding a 17% speedup on the ledmatrix3 benchmark. | ❌ |



<!-- END_CURRENT_WEEK -->
