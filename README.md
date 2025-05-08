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

# Contribution Overview 2025-05-07

## PRs by Repository

```mermaid
pie
    "tscircuit/circuit-json-to-gerber" : 2
    "tscircuit/tscircuit.com" : 13
    "tscircuit/cli" : 2
    "tscircuit/pcb-viewer" : 1
    "tscircuit/eval" : 2
    "tscircuit/props" : 1
    "tscircuit/footprinter" : 1
    "tscircuit/jscad-electronics" : 1
    "tscircuit/circuit-to-svg" : 1
    "tscircuit/runframe" : 6
    "tscircuit/tscircuit-autorouter" : 3
```

## Contributor Overview

| Contributor | 🐳 Major | 🐙 Minor | 🐌 Tiny | ⭐ | Issues Created | Discussion Contributions |
|-------------|---------|---------|---------|-----|----------------|--------------------------|
| [imrishabh18](#imrishabh18) | 1 | 10 | 1 | ⭐⭐⭐ | 2 | 0🔹 0🔶 0💎 |
| [ArnavK-09](#ArnavK-09) | 4 | 6 | 1 | ⭐⭐ | 0 | 0🔹 0🔶 0💎 |
| [seveibar](#seveibar) | 3 | 0 | 0 | ⭐⭐ | 10 | 0🔹 0🔶 0💎 |
| [ShiboSoftwareDev](#ShiboSoftwareDev) | 1 | 3 | 0 | ⭐⭐ | 9 | 0🔹 0🔶 0💎 |
| [Anshgrover23](#Anshgrover23) | 0 | 1 | 0 | ⭐ | 1 | 0🔹 0🔶 0💎 |
| [Abse2001](#Abse2001) | 0 | 1 | 0 |  | 6 | 0🔹 0🔶 0💎 |

### Discussion Contribution Legend

- 🔹 Participating: Basic participation with minimal effort
- 🔶 Very Active: Thoughtful participation that adds value
- 💎 Extremely Active: Exceptional participation with high-quality content

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
| [ArnavK-09](#ArnavK-09) | 16 | 12 | 1 | 1 | 0 | 11 | 11 | 0 | 0 | 0 |
| [seveibar](#seveibar) | 0 | 0 | 0 | 18 | 1 | 3 | 3 | 10 | 5 | 85 |
| [ShiboSoftwareDev](#ShiboSoftwareDev) | 7 | 4 | 0 | 0 | 0 | 6 | 4 | 9 | 2 | 33 |
| [Abse2001](#Abse2001) | 3 | 2 | 0 | 0 | 0 | 3 | 1 | 6 | 0 | 0 |
| [graphite-app[bot]](#graphite-app[bot]) | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| [imrishabh18](#imrishabh18) | 9 | 5 | 0 | 4 | 2 | 13 | 13 | 2 | 1 | 2 |
| [krushnarout](#krushnarout) | 2 | 0 | 2 | 0 | 0 | 1 | 0 | 0 | 0 | 0 |
| [MustafaMulla29](#MustafaMulla29) | 0 | 0 | 0 | 0 | 0 | 1 | 0 | 4 | 0 | 0 |
| [Anshgrover23](#Anshgrover23) | 2 | 1 | 0 | 1 | 0 | 3 | 1 | 1 | 1 | 10 |
| [techmannih](#techmannih) | 0 | 0 | 0 | 0 | 0 | 1 | 0 | 0 | 0 | 0 |

## Changes by Repository

### [tscircuit/circuit-json-to-gerber](https://github.com/tscircuit/circuit-json-to-gerber)

| PR # | Impact | Contributor | Description | Milestone Aligned |
|------|--------|-------------|-------------|-------------------|
| [#31](https://github.com/tscircuit/circuit-json-to-gerber/pull/31) | 🐳 Major | ArnavK-09 | Add support for pill-shaped elements in the Gerber aperture generation process. | ✅ |
| [#33](https://github.com/tscircuit/circuit-json-to-gerber/pull/33) | 🐙 Minor | Abse2001 | Fixes a bug where "rotated_rect" shape is not supported in the Gerber aperture definition. | ✅ |

### [tscircuit/tscircuit.com](https://github.com/tscircuit/tscircuit.com)

| PR # | Impact | Contributor | Description | Milestone Aligned |
|------|--------|-------------|-------------|-------------------|
| [#1019](https://github.com/tscircuit/tscircuit.com/pull/1019) | 🐳 Major | ArnavK-09 | Adds support for custom component paths in the runframe package. | ✅ |
| [#1036](https://github.com/tscircuit/tscircuit.com/pull/1036) | 🐳 Major | ArnavK-09 | This pull request introduces the new PackageCard component to display package information and updates the trending page to use packages instead of snippets. | ✅ |
| [#1048](https://github.com/tscircuit/tscircuit.com/pull/1048) | 🐙 Minor | ArnavK-09 | Refactors the `CodeAndPreview` component to simplify the logic for updating package files. | ✅ |
| [#1033](https://github.com/tscircuit/tscircuit.com/pull/1033) | 🐙 Minor | ArnavK-09 | Introduce `isCodeEditorReady` state to manage editor opacity based on its readiness, improving user experience. | ✅ |
| [#1027](https://github.com/tscircuit/tscircuit.com/pull/1027) | 🐙 Minor | ArnavK-09 | Ensure that .ts files are correctly processed by replacing the extension with .tsx in the tsFacet configuration. | ✅ |
| [#1061](https://github.com/tscircuit/tscircuit.com/pull/1061) | 🐙 Minor | imrishabh18 | Switch the API endpoint from `/snippets/list_latest` to `/packages/list_latest` to only return non-snippet packages. | ❌ |
| [#1059](https://github.com/tscircuit/tscircuit.com/pull/1059) | 🐙 Minor | imrishabh18 | Fixes a type error in the code that was returning the wrong data for the packages. | ✅ |
| [#1057](https://github.com/tscircuit/tscircuit.com/pull/1057) | 🐙 Minor | imrishabh18 | Refactor: replacing `/snippets/list` with `/packages/list` | ❌ |
| [#1047](https://github.com/tscircuit/tscircuit.com/pull/1047) | 🐙 Minor | imrishabh18 | Update the @tscircuit/runframe dependency to version 0.0.415 | ✅ |
| [#1037](https://github.com/tscircuit/tscircuit.com/pull/1037) | 🐌 Tiny | ArnavK-09 | Updates the `circuit-json-to-gerber` dependency to version 0.0.18. | ✅ |
| [#1049](https://github.com/tscircuit/tscircuit.com/pull/1049) | 🟣 | imrishabh18 | Update the version of the `@tscircuit/runframe` dependency. | ✅ |
| [#1039](https://github.com/tscircuit/tscircuit.com/pull/1039) | 🐙 Minor | imrishabh18 | Add a fake for the `/packages/list_trending` endpoint | ❌ |
| [#1035](https://github.com/tscircuit/tscircuit.com/pull/1035) | 🐌 Tiny | imrishabh18 | Update the version of the "@tscircuit/runframe" dependency from 0.0.403 to 0.0.412. | ✅ |

### [tscircuit/cli](https://github.com/tscircuit/cli)

| PR # | Impact | Contributor | Description | Milestone Aligned |
|------|--------|-------------|-------------|-------------------|
| [#189](https://github.com/tscircuit/cli/pull/189) | 🐳 Major | ArnavK-09 | Enhance package search with interactive selection and installation | ❌ |
| [#187](https://github.com/tscircuit/cli/pull/187) | 🐙 Minor | Anshgrover23 | Add a search command to the CLI for querying snippets | ❌ |

### [tscircuit/pcb-viewer](https://github.com/tscircuit/pcb-viewer)

| PR # | Impact | Contributor | Description | Milestone Aligned |
|------|--------|-------------|-------------|-------------------|
| [#262](https://github.com/tscircuit/pcb-viewer/pull/262) | 🐙 Minor | ArnavK-09 | Increase the zIndex of the "Click to Interact" overlay in the PCBViewer component to improve its handling of overlays. | ✅ |

### [tscircuit/eval](https://github.com/tscircuit/eval)

| PR # | Impact | Contributor | Description | Milestone Aligned |
|------|--------|-------------|-------------|-------------------|
| [#271](https://github.com/tscircuit/eval/pull/271) | 🐙 Minor | ArnavK-09 | Ensures proper cleanup of web worker instances by adding `await worker.kill()` at the end of each test to prevent potential memory leaks and ensure tests run in a clean state. | ✅ |
| [#274](https://github.com/tscircuit/eval/pull/274) | 🐙 Minor | ArnavK-09 | Update GitHub Actions workflows to use latest versions of `actions/checkout` and `oven-sh/setup-bun`. | ✅ |

### [tscircuit/props](https://github.com/tscircuit/props)

| PR # | Impact | Contributor | Description | Milestone Aligned |
|------|--------|-------------|-------------|-------------------|
| [#217](https://github.com/tscircuit/props/pull/217) | 🐳 Major | ShiboSoftwareDev | Adds new properties (`pinCount` and `internallyConnectedPins`) to the `jumperProps` type to support 2-pin and 3-pin jumpers with different internal pin connections. | ✅ |

### [tscircuit/footprinter](https://github.com/tscircuit/footprinter)

| PR # | Impact | Contributor | Description | Milestone Aligned |
|------|--------|-------------|-------------|-------------------|
| [#255](https://github.com/tscircuit/footprinter/pull/255) | 🐙 Minor | ShiboSoftwareDev | Introduced a new footprint for a "solderjumper" component. | ❌ |

### [tscircuit/jscad-electronics](https://github.com/tscircuit/jscad-electronics)

| PR # | Impact | Contributor | Description | Milestone Aligned |
|------|--------|-------------|-------------|-------------------|
| [#93](https://github.com/tscircuit/jscad-electronics/pull/93) | 🐙 Minor | ShiboSoftwareDev | Fixed the 3D models for SOIC8 and TSSOP8 footprints. | ✅ |

### [tscircuit/circuit-to-svg](https://github.com/tscircuit/circuit-to-svg)

| PR # | Impact | Contributor | Description | Milestone Aligned |
|------|--------|-------------|-------------|-------------------|
| [#211](https://github.com/tscircuit/circuit-to-svg/pull/211) | 🐙 Minor | ShiboSoftwareDev | Change the pin1 indicator to be a filled up triangle instead of a notch. | ✅ |

### [tscircuit/runframe](https://github.com/tscircuit/runframe)

| PR # | Impact | Contributor | Description | Milestone Aligned |
|------|--------|-------------|-------------|-------------------|
| [#563](https://github.com/tscircuit/runframe/pull/563) | 🐳 Major | imrishabh18 | This pull request adds a breakdown of the total cost from the order quote, including the lowest shipping carrier cost and the original total cost without shipping. | ✅ |
| [#565](https://github.com/tscircuit/runframe/pull/565) | 🐙 Minor | imrishabh18 | Fixes a runtime error related to the `orderQuote.shipping_options` property being undefined. | ✅ |
| [#562](https://github.com/tscircuit/runframe/pull/562) | 🐙 Minor | imrishabh18 | Send the shipping carrier information to stripe | ✅ |
| [#560](https://github.com/tscircuit/runframe/pull/560) | 🐙 Minor | imrishabh18 | Add edge case cover to show the loading state when fetching quotes | ✅ |
| [#558](https://github.com/tscircuit/runframe/pull/558) | 🐙 Minor | imrishabh18 | Simplify the logic for handling errors and loading states in the `InitialOrder` component. | ✅ |
| [#556](https://github.com/tscircuit/runframe/pull/556) | 🐙 Minor | imrishabh18 | Update the UI and formatting of the order-quote dialog. | ✅ |

### [tscircuit/tscircuit-autorouter](https://github.com/tscircuit/tscircuit-autorouter)

| PR # | Impact | Contributor | Description | Milestone Aligned |
|------|--------|-------------|-------------|-------------------|
| [#118](https://github.com/tscircuit/tscircuit-autorouter/pull/118) | 🐳 Major | seveibar | The pull request introduces changes to the High Density Intra Node Solvers to incorporate connMap, which causes overlaid vias with the same net but improves completion. | ❌ |
| [#114](https://github.com/tscircuit/tscircuit-autorouter/pull/114) | 🐳 Major | seveibar | Introduces a JSON file with detailed information about a capacity mesh node (cn27815) and its port points, including their coordinates and connection names. | ❌ |
| [#113](https://github.com/tscircuit/tscircuit-autorouter/pull/113) | 🐳 Major | seveibar | Adds a new Autorouting Pipeline Debugger header to allow configuring the cache provider, including options for In Memory, Local Storage, and None. | ✅ |

## Changes by Contributor

### [ArnavK-09](https://github.com/ArnavK-09)

| PR # | Impact | Description | Milestone Aligned |
|------|--------|-------------|-------------------|
| [#31](https://github.com/tscircuit/circuit-json-to-gerber/pull/31) | 🐳 Major | Add support for pill-shaped elements in the Gerber aperture generation process. | ✅ |
| [#1019](https://github.com/tscircuit/tscircuit.com/pull/1019) | 🐳 Major | Adds support for custom component paths in the runframe package. | ✅ |
| [#1036](https://github.com/tscircuit/tscircuit.com/pull/1036) | 🐳 Major | This pull request introduces the new PackageCard component to display package information and updates the trending page to use packages instead of snippets. | ✅ |
| [#189](https://github.com/tscircuit/cli/pull/189) | 🐳 Major | Enhance package search with interactive selection and installation | ❌ |
| [#262](https://github.com/tscircuit/pcb-viewer/pull/262) | 🐙 Minor | Increase the zIndex of the "Click to Interact" overlay in the PCBViewer component to improve its handling of overlays. | ✅ |
| [#1048](https://github.com/tscircuit/tscircuit.com/pull/1048) | 🐙 Minor | Refactors the `CodeAndPreview` component to simplify the logic for updating package files. | ✅ |
| [#1033](https://github.com/tscircuit/tscircuit.com/pull/1033) | 🐙 Minor | Introduce `isCodeEditorReady` state to manage editor opacity based on its readiness, improving user experience. | ✅ |
| [#1027](https://github.com/tscircuit/tscircuit.com/pull/1027) | 🐙 Minor | Ensure that .ts files are correctly processed by replacing the extension with .tsx in the tsFacet configuration. | ✅ |
| [#271](https://github.com/tscircuit/eval/pull/271) | 🐙 Minor | Ensures proper cleanup of web worker instances by adding `await worker.kill()` at the end of each test to prevent potential memory leaks and ensure tests run in a clean state. | ✅ |
| [#274](https://github.com/tscircuit/eval/pull/274) | 🐙 Minor | Update GitHub Actions workflows to use latest versions of `actions/checkout` and `oven-sh/setup-bun`. | ✅ |
| [#1037](https://github.com/tscircuit/tscircuit.com/pull/1037) | 🐌 Tiny | Updates the `circuit-json-to-gerber` dependency to version 0.0.18. | ✅ |

### [ShiboSoftwareDev](https://github.com/ShiboSoftwareDev)

| PR # | Impact | Description | Milestone Aligned |
|------|--------|-------------|-------------------|
| [#217](https://github.com/tscircuit/props/pull/217) | 🐳 Major | Adds new properties (`pinCount` and `internallyConnectedPins`) to the `jumperProps` type to support 2-pin and 3-pin jumpers with different internal pin connections. | ✅ |
| [#255](https://github.com/tscircuit/footprinter/pull/255) | 🐙 Minor | Introduced a new footprint for a "solderjumper" component. | ❌ |
| [#93](https://github.com/tscircuit/jscad-electronics/pull/93) | 🐙 Minor | Fixed the 3D models for SOIC8 and TSSOP8 footprints. | ✅ |
| [#211](https://github.com/tscircuit/circuit-to-svg/pull/211) | 🐙 Minor | Change the pin1 indicator to be a filled up triangle instead of a notch. | ✅ |

### [Abse2001](https://github.com/Abse2001)

| PR # | Impact | Description | Milestone Aligned |
|------|--------|-------------|-------------------|
| [#33](https://github.com/tscircuit/circuit-json-to-gerber/pull/33) | 🐙 Minor | Fixes a bug where "rotated_rect" shape is not supported in the Gerber aperture definition. | ✅ |

### [imrishabh18](https://github.com/imrishabh18)

| PR # | Impact | Description | Milestone Aligned |
|------|--------|-------------|-------------------|
| [#563](https://github.com/tscircuit/runframe/pull/563) | 🐳 Major | This pull request adds a breakdown of the total cost from the order quote, including the lowest shipping carrier cost and the original total cost without shipping. | ✅ |
| [#1061](https://github.com/tscircuit/tscircuit.com/pull/1061) | 🐙 Minor | Switch the API endpoint from `/snippets/list_latest` to `/packages/list_latest` to only return non-snippet packages. | ❌ |
| [#1059](https://github.com/tscircuit/tscircuit.com/pull/1059) | 🐙 Minor | Fixes a type error in the code that was returning the wrong data for the packages. | ✅ |
| [#1057](https://github.com/tscircuit/tscircuit.com/pull/1057) | 🐙 Minor | Refactor: replacing `/snippets/list` with `/packages/list` | ❌ |
| [#1049](https://github.com/tscircuit/tscircuit.com/pull/1049) | 🟣 | Update the version of the `@tscircuit/runframe` dependency. | ✅ |
| [#1047](https://github.com/tscircuit/tscircuit.com/pull/1047) | 🐙 Minor | Update the @tscircuit/runframe dependency to version 0.0.415 | ✅ |
| [#1039](https://github.com/tscircuit/tscircuit.com/pull/1039) | 🐙 Minor | Add a fake for the `/packages/list_trending` endpoint | ❌ |
| [#565](https://github.com/tscircuit/runframe/pull/565) | 🐙 Minor | Fixes a runtime error related to the `orderQuote.shipping_options` property being undefined. | ✅ |
| [#562](https://github.com/tscircuit/runframe/pull/562) | 🐙 Minor | Send the shipping carrier information to stripe | ✅ |
| [#560](https://github.com/tscircuit/runframe/pull/560) | 🐙 Minor | Add edge case cover to show the loading state when fetching quotes | ✅ |
| [#558](https://github.com/tscircuit/runframe/pull/558) | 🐙 Minor | Simplify the logic for handling errors and loading states in the `InitialOrder` component. | ✅ |
| [#556](https://github.com/tscircuit/runframe/pull/556) | 🐙 Minor | Update the UI and formatting of the order-quote dialog. | ✅ |
| [#1035](https://github.com/tscircuit/tscircuit.com/pull/1035) | 🐌 Tiny | Update the version of the "@tscircuit/runframe" dependency from 0.0.403 to 0.0.412. | ✅ |

### [Anshgrover23](https://github.com/Anshgrover23)

| PR # | Impact | Description | Milestone Aligned |
|------|--------|-------------|-------------------|
| [#187](https://github.com/tscircuit/cli/pull/187) | 🐙 Minor | Add a search command to the CLI for querying snippets | ❌ |

### [seveibar](https://github.com/seveibar)

| PR # | Impact | Description | Milestone Aligned |
|------|--------|-------------|-------------------|
| [#118](https://github.com/tscircuit/tscircuit-autorouter/pull/118) | 🐳 Major | The pull request introduces changes to the High Density Intra Node Solvers to incorporate connMap, which causes overlaid vias with the same net but improves completion. | ❌ |
| [#114](https://github.com/tscircuit/tscircuit-autorouter/pull/114) | 🐳 Major | Introduces a JSON file with detailed information about a capacity mesh node (cn27815) and its port points, including their coordinates and connection names. | ❌ |
| [#113](https://github.com/tscircuit/tscircuit-autorouter/pull/113) | 🐳 Major | Adds a new Autorouting Pipeline Debugger header to allow configuring the cache provider, including options for In Memory, Local Storage, and None. | ✅ |



<!-- END_CURRENT_WEEK -->
