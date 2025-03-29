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

# Contribution Overview 2025-03-26

## PRs by Repository

```mermaid
pie
    "tscircuit/contribution-tracker" : 3
    "tscircuit/checks" : 6
    "tscircuit/unravel-autorouter" : 5
    "tscircuit/circuit-json-util" : 1
    "tscircuit/core" : 2
    "tscircuit/circuit-json-to-connectivity-map" : 1
    "tscircuit/math-utils" : 1
    "tscircuit/tscircuit.com" : 8
    "tscircuit/graphics-debug" : 1
    "tscircuit/docs" : 1
    "tscircuit/props" : 1
    "tscircuit/jscad-fiber" : 1
    "tscircuit/cli" : 2
    "tscircuit/runframe" : 2
    "tscircuit/eval" : 1
```

## Contributor Overview

| Contributor | 🐳 Major | 🐙 Minor | 🐌 Tiny | ⭐ | Issues Created | Discussion Contributions |
|-------------|---------|---------|---------|-----|----------------|--------------------------|
| [seveibar](#seveibar) | 5 | 12 | 1 | 👑 | 23 | 3🔹 3🔶 0💎 |
| [imrishabh18](#imrishabh18) | 1 | 6 | 1 | ⭐⭐ | 4 | 0🔹 0🔶 0💎 |
| [ArnavK-09](#ArnavK-09) | 1 | 2 | 1 | ⭐⭐ | 2 | 0🔹 0🔶 0💎 |
| [Anshgrover23](#Anshgrover23) | 1 | 1 | 0 | ⭐ | 2 | 1🔹 0🔶 0💎 |
| [MustafaMulla29](#MustafaMulla29) | 0 | 1 | 0 |  | 0 | 0🔹 0🔶 0💎 |
| [tscircuitbot](#tscircuitbot) | 0 | 0 | 1 |  | 0 | 0🔹 0🔶 0💎 |
| [oldbear26](#oldbear26) | 0 | 0 | 0 |  | 0 | 0🔹 0🔶 0💎 |
| [gurjeetsinghvirdee](#gurjeetsinghvirdee) | 0 | 0 | 0 | - | 0 | 0🔹 1🔶 0💎 |

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
| [seveibar](#seveibar) | 1 | 0 | 0 | 12 | 3 | 19 | 18 | 23 | 17 | 240 |
| [techmannih](#techmannih) | 5 | 0 | 2 | 0 | 0 | 2 | 0 | 2 | 1 | 3 |
| [Anshgrover23](#Anshgrover23) | 2 | 2 | 0 | 1 | 3 | 2 | 2 | 2 | 1 | 10 |
| [onyedikachi-david](#onyedikachi-david) | 3 | 0 | 3 | 0 | 0 | 3 | 0 | 0 | 0 | 0 |
| [oldbear26](#oldbear26) | 1 | 1 | 0 | 0 | 0 | 1 | 1 | 0 | 0 | 0 |
| [ArnavK-09](#ArnavK-09) | 5 | 5 | 0 | 0 | 1 | 4 | 4 | 2 | 1 | 10 |
| [copilot-pull-request-reviewer[bot]](#copilot-pull-request-reviewer[bot]) | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| [imrishabh18](#imrishabh18) | 5 | 4 | 0 | 1 | 3 | 10 | 9 | 4 | 4 | 22 |
| [MustafaMulla29](#MustafaMulla29) | 13 | 2 | 3 | 0 | 0 | 3 | 1 | 0 | 0 | 0 |
| [tscircuitbot](#tscircuitbot) | 0 | 0 | 0 | 0 | 0 | 4 | 1 | 0 | 0 | 0 |
| [owuzo](#owuzo) | 1 | 0 | 1 | 0 | 0 | 1 | 0 | 0 | 0 | 0 |
| [deekshatomer](#deekshatomer) | 2 | 0 | 1 | 0 | 0 | 1 | 0 | 0 | 0 | 0 |
| [gurjeetsinghvirdee](#gurjeetsinghvirdee) | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |

## Changes by Repository

### [tscircuit/contribution-tracker](https://github.com/tscircuit/contribution-tracker)

| PR # | Impact | Contributor | Description | Milestone Aligned |
|------|--------|-------------|-------------|-------------------|
| [#107](https://github.com/tscircuit/contribution-tracker/pull/107) | 🐳 Major | seveibar | Updates the script to generate sponsorship CSV to be more idempotent and ensure the correct weeks are picked up. | ❌ |
| [#108](https://github.com/tscircuit/contribution-tracker/pull/108) | 🐳 Major | ArnavK-09 |  | ❌ |
| [#105](https://github.com/tscircuit/contribution-tracker/pull/105) | 🐙 Minor | ArnavK-09 | Downgrade the file-system-cache dependency to a stable version 2.3.0 | ✅ |

### [tscircuit/checks](https://github.com/tscircuit/checks)

| PR # | Impact | Contributor | Description | Milestone Aligned |
|------|--------|-------------|-------------|-------------------|
| [#21](https://github.com/tscircuit/checks/pull/21) | 🐳 Major | seveibar | The pull request incorporates layer information and improves the pcb_via test in the DRC (Design Rule Check) check. | ✅ |
| [#28](https://github.com/tscircuit/checks/pull/28) | 🐙 Minor | seveibar | Adds support for better centers when colliding with things that aren't segments | ✅ |
| [#26](https://github.com/tscircuit/checks/pull/26) | 🐙 Minor | seveibar | Fixes a bug in the DRC calculation for circular obstacles near 45 degree segments. | ✅ |
| [#25](https://github.com/tscircuit/checks/pull/25) | 🐙 Minor | seveibar | Use `pcb_trace_id` in objects (like vias) when determining if two IDs are connected. | ✅ |
| [#23](https://github.com/tscircuit/checks/pull/23) | 🐙 Minor | seveibar | Update circuit JSON utility and add a test to ensure correct handling of via margin. | ✅ |
| [#22](https://github.com/tscircuit/checks/pull/22) | 🐙 Minor | seveibar | Improves the overlapping trace message and error.center | ✅ |

### [tscircuit/unravel-autorouter](https://github.com/tscircuit/unravel-autorouter)

| PR # | Impact | Contributor | Description | Milestone Aligned |
|------|--------|-------------|-------------|-------------------|
| [#85](https://github.com/tscircuit/unravel-autorouter/pull/85) | 🐳 Major | seveibar | Adds a welcome page that allows users to upload or paste a simple route JSON file to test the autorouter. | ❌ |
| [#81](https://github.com/tscircuit/unravel-autorouter/pull/81) | 🐳 Major | seveibar | Final DRC Fixes, Fixes for Segment Creation, Deduping Segments, and SegmentTree margin for path simplification, compute Pf for further nodes than necessary in the UnravelMultiSectionSolver(hack) | ✅ |
| [#80](https://github.com/tscircuit/unravel-autorouter/pull/80) | 🐳 Major | seveibar | This pull request adds a button for running DRC checks, fixes many DRC issues, and improves the simplified path solver to take into account trace thickness when computing margin. | ✅ |
| [#86](https://github.com/tscircuit/unravel-autorouter/pull/86) | 🐙 Minor | seveibar |  | ✅ |
| [#82](https://github.com/tscircuit/unravel-autorouter/pull/82) | 🐌 Tiny | imrishabh18 | The pull request adds a JSON file that defines a 3D model of the letter "S" made up of LED lights. | ✅ |

### [tscircuit/circuit-json-util](https://github.com/tscircuit/circuit-json-util)

| PR # | Impact | Contributor | Description | Milestone Aligned |
|------|--------|-------------|-------------|-------------------|
| [#30](https://github.com/tscircuit/circuit-json-util/pull/30) | 🐙 Minor | seveibar | Correctly compute the bounds for PCB elements with vias. | ✅ |

### [tscircuit/core](https://github.com/tscircuit/core)

| PR # | Impact | Contributor | Description | Milestone Aligned |
|------|--------|-------------|-------------|-------------------|
| [#718](https://github.com/tscircuit/core/pull/718) | 🐙 Minor | seveibar | Update the version of the `@tscircuit/capacity-autorouter` dependency in the `package.json` file. | ✅ |
| [#721](https://github.com/tscircuit/core/pull/721) | 🐙 Minor | Anshgrover23 | Add a new "connection" prop to the diode component. | ✅ |

### [tscircuit/circuit-json-to-connectivity-map](https://github.com/tscircuit/circuit-json-to-connectivity-map)

| PR # | Impact | Contributor | Description | Milestone Aligned |
|------|--------|-------------|-------------|-------------------|
| [#9](https://github.com/tscircuit/circuit-json-to-connectivity-map/pull/9) | 🐙 Minor | seveibar | Adds support for PCB vias when computing full connectivity net | ✅ |

### [tscircuit/math-utils](https://github.com/tscircuit/math-utils)

| PR # | Impact | Contributor | Description | Milestone Aligned |
|------|--------|-------------|-------------|-------------------|
| [#7](https://github.com/tscircuit/math-utils/pull/7) | 🐙 Minor | seveibar | Implement a function to calculate the minimum distance from a line segment to a circle. | ❌ |

### [tscircuit/tscircuit.com](https://github.com/tscircuit/tscircuit.com)

| PR # | Impact | Contributor | Description | Milestone Aligned |
|------|--------|-------------|-------------|-------------------|
| [#754](https://github.com/tscircuit/tscircuit.com/pull/754) | 🐙 Minor | seveibar |  | ❌ |
| [#763](https://github.com/tscircuit/tscircuit.com/pull/763) | 🐙 Minor | imrishabh18 | Update the build script to remove the `build:tsup` and `build:fake-api` scripts and add new `build:fake-api:tsup` and `build:fake-api:bundle` scripts. | ❌ |
| [#762](https://github.com/tscircuit/tscircuit.com/pull/762) | 🐙 Minor | imrishabh18 | Adds tests to verify the order state before the simulate error scenario | ✅ |
| [#761](https://github.com/tscircuit/tscircuit.com/pull/761) | 🐙 Minor | imrishabh18 | Modify logic for `/order/create` and support polling for `/order/get` | ✅ |
| [#760](https://github.com/tscircuit/tscircuit.com/pull/760) | 🐙 Minor | imrishabh18 | This pull request adds new schemas for JLCPCB-related data, including `JlcpcbOrderState` and `JlcpcbOrderStepRun`, to the database schema. | ❌ |
| [#759](https://github.com/tscircuit/tscircuit.com/pull/759) | 🟣 | imrishabh18 | Add all the scenarios to fake | ✅ |
| [#758](https://github.com/tscircuit/tscircuit.com/pull/758) | 🐙 Minor | imrishabh18 | Update the `/order/create` route to handle simulated scenarios. | ❌ |
| [#757](https://github.com/tscircuit/tscircuit.com/pull/757) | 🐙 Minor | MustafaMulla29 | Changed "Snippets" to "Packages" and used the correct "javascript-time-ago" package instead of "timeago.js". | ❌ |

### [tscircuit/graphics-debug](https://github.com/tscircuit/graphics-debug)

| PR # | Impact | Contributor | Description | Milestone Aligned |
|------|--------|-------------|-------------|-------------------|
| [#51](https://github.com/tscircuit/graphics-debug/pull/51) | 🐙 Minor | seveibar | Adds a "Show last step" checkbox to the InteractiveGraphics component. | ✅ |

### [tscircuit/docs](https://github.com/tscircuit/docs)

| PR # | Impact | Contributor | Description | Milestone Aligned |
|------|--------|-------------|-------------|-------------------|
| [#25](https://github.com/tscircuit/docs/pull/25) | 🐌 Tiny | seveibar | The pull request adds documentation for the Simple Route JSON (SRJ) format, which is a lightweight representation of a PCB routing problem used by the tscircuit autorouters. | ❌ |

### [tscircuit/props](https://github.com/tscircuit/props)

| PR # | Impact | Contributor | Description | Milestone Aligned |
|------|--------|-------------|-------------|-------------------|
| [#202](https://github.com/tscircuit/props/pull/202) | 🐳 Major | Anshgrover23 | Add a `connections` prop to the `diode` component to allow specifying connections for the anode, cathode, and other pins. | ✅ |

### [tscircuit/jscad-fiber](https://github.com/tscircuit/jscad-fiber)

| PR # | Impact | Contributor | Description | Milestone Aligned |
|------|--------|-------------|-------------|-------------------|
| [#100](https://github.com/tscircuit/jscad-fiber/pull/100) | 🟣 | oldbear26 | The pull request changes the structure of the cosmos fixtures and the Vite plugin logic to address issues with the code previewer in production. | ❌ |

### [tscircuit/cli](https://github.com/tscircuit/cli)

| PR # | Impact | Contributor | Description | Milestone Aligned |
|------|--------|-------------|-------------|-------------------|
| [#135](https://github.com/tscircuit/cli/pull/135) | 🐙 Minor | ArnavK-09 |  | ✅ |
| [#132](https://github.com/tscircuit/cli/pull/132) | 🐌 Tiny | ArnavK-09 | The onSuccess callback now destructures the outputDestination parameter for clarity and consistency with the codebase's style. | ✅ |

### [tscircuit/runframe](https://github.com/tscircuit/runframe)

| PR # | Impact | Contributor | Description | Milestone Aligned |
|------|--------|-------------|-------------|-------------------|
| [#395](https://github.com/tscircuit/runframe/pull/395) | 🐳 Major | imrishabh18 | The pull request introduces the initial implementation of the order flow feature, including creating orders, fetching order state, and displaying the order progress. | ✅ |
| [#398](https://github.com/tscircuit/runframe/pull/398) | 🐙 Minor | imrishabh18 | Removes the "simulate" option from the dialog box to fixture, and moves it to the `RunFrameForCli` component. | ✅ |

### [tscircuit/eval](https://github.com/tscircuit/eval)

| PR # | Impact | Contributor | Description | Milestone Aligned |
|------|--------|-------------|-------------|-------------------|
| [#174](https://github.com/tscircuit/eval/pull/174) | 🐌 Tiny | tscircuitbot | Update @tscircuit/core dependency to version 0.0.359 | ✅ |

## Changes by Contributor

### [seveibar](https://github.com/seveibar)

| PR # | Impact | Description | Milestone Aligned |
|------|--------|-------------|-------------------|
| [#107](https://github.com/tscircuit/contribution-tracker/pull/107) | 🐳 Major | Updates the script to generate sponsorship CSV to be more idempotent and ensure the correct weeks are picked up. | ❌ |
| [#21](https://github.com/tscircuit/checks/pull/21) | 🐳 Major | The pull request incorporates layer information and improves the pcb_via test in the DRC (Design Rule Check) check. | ✅ |
| [#85](https://github.com/tscircuit/unravel-autorouter/pull/85) | 🐳 Major | Adds a welcome page that allows users to upload or paste a simple route JSON file to test the autorouter. | ❌ |
| [#81](https://github.com/tscircuit/unravel-autorouter/pull/81) | 🐳 Major | Final DRC Fixes, Fixes for Segment Creation, Deduping Segments, and SegmentTree margin for path simplification, compute Pf for further nodes than necessary in the UnravelMultiSectionSolver(hack) | ✅ |
| [#80](https://github.com/tscircuit/unravel-autorouter/pull/80) | 🐳 Major | This pull request adds a button for running DRC checks, fixes many DRC issues, and improves the simplified path solver to take into account trace thickness when computing margin. | ✅ |
| [#30](https://github.com/tscircuit/circuit-json-util/pull/30) | 🐙 Minor | Correctly compute the bounds for PCB elements with vias. | ✅ |
| [#718](https://github.com/tscircuit/core/pull/718) | 🐙 Minor | Update the version of the `@tscircuit/capacity-autorouter` dependency in the `package.json` file. | ✅ |
| [#28](https://github.com/tscircuit/checks/pull/28) | 🐙 Minor | Adds support for better centers when colliding with things that aren't segments | ✅ |
| [#26](https://github.com/tscircuit/checks/pull/26) | 🐙 Minor | Fixes a bug in the DRC calculation for circular obstacles near 45 degree segments. | ✅ |
| [#25](https://github.com/tscircuit/checks/pull/25) | 🐙 Minor | Use `pcb_trace_id` in objects (like vias) when determining if two IDs are connected. | ✅ |
| [#23](https://github.com/tscircuit/checks/pull/23) | 🐙 Minor | Update circuit JSON utility and add a test to ensure correct handling of via margin. | ✅ |
| [#22](https://github.com/tscircuit/checks/pull/22) | 🐙 Minor | Improves the overlapping trace message and error.center | ✅ |
| [#9](https://github.com/tscircuit/circuit-json-to-connectivity-map/pull/9) | 🐙 Minor | Adds support for PCB vias when computing full connectivity net | ✅ |
| [#7](https://github.com/tscircuit/math-utils/pull/7) | 🐙 Minor | Implement a function to calculate the minimum distance from a line segment to a circle. | ❌ |
| [#754](https://github.com/tscircuit/tscircuit.com/pull/754) | 🐙 Minor |  | ❌ |
| [#51](https://github.com/tscircuit/graphics-debug/pull/51) | 🐙 Minor | Adds a "Show last step" checkbox to the InteractiveGraphics component. | ✅ |
| [#86](https://github.com/tscircuit/unravel-autorouter/pull/86) | 🐙 Minor |  | ✅ |
| [#25](https://github.com/tscircuit/docs/pull/25) | 🐌 Tiny | The pull request adds documentation for the Simple Route JSON (SRJ) format, which is a lightweight representation of a PCB routing problem used by the tscircuit autorouters. | ❌ |

### [Anshgrover23](https://github.com/Anshgrover23)

| PR # | Impact | Description | Milestone Aligned |
|------|--------|-------------|-------------------|
| [#202](https://github.com/tscircuit/props/pull/202) | 🐳 Major | Add a `connections` prop to the `diode` component to allow specifying connections for the anode, cathode, and other pins. | ✅ |
| [#721](https://github.com/tscircuit/core/pull/721) | 🐙 Minor | Add a new "connection" prop to the diode component. | ✅ |

### [oldbear26](https://github.com/oldbear26)

| PR # | Impact | Description | Milestone Aligned |
|------|--------|-------------|-------------------|
| [#100](https://github.com/tscircuit/jscad-fiber/pull/100) | 🟣 | The pull request changes the structure of the cosmos fixtures and the Vite plugin logic to address issues with the code previewer in production. | ❌ |

### [ArnavK-09](https://github.com/ArnavK-09)

| PR # | Impact | Description | Milestone Aligned |
|------|--------|-------------|-------------------|
| [#108](https://github.com/tscircuit/contribution-tracker/pull/108) | 🐳 Major |  | ❌ |
| [#105](https://github.com/tscircuit/contribution-tracker/pull/105) | 🐙 Minor | Downgrade the file-system-cache dependency to a stable version 2.3.0 | ✅ |
| [#135](https://github.com/tscircuit/cli/pull/135) | 🐙 Minor |  | ✅ |
| [#132](https://github.com/tscircuit/cli/pull/132) | 🐌 Tiny | The onSuccess callback now destructures the outputDestination parameter for clarity and consistency with the codebase's style. | ✅ |

### [imrishabh18](https://github.com/imrishabh18)

| PR # | Impact | Description | Milestone Aligned |
|------|--------|-------------|-------------------|
| [#395](https://github.com/tscircuit/runframe/pull/395) | 🐳 Major | The pull request introduces the initial implementation of the order flow feature, including creating orders, fetching order state, and displaying the order progress. | ✅ |
| [#763](https://github.com/tscircuit/tscircuit.com/pull/763) | 🐙 Minor | Update the build script to remove the `build:tsup` and `build:fake-api` scripts and add new `build:fake-api:tsup` and `build:fake-api:bundle` scripts. | ❌ |
| [#762](https://github.com/tscircuit/tscircuit.com/pull/762) | 🐙 Minor | Adds tests to verify the order state before the simulate error scenario | ✅ |
| [#761](https://github.com/tscircuit/tscircuit.com/pull/761) | 🐙 Minor | Modify logic for `/order/create` and support polling for `/order/get` | ✅ |
| [#760](https://github.com/tscircuit/tscircuit.com/pull/760) | 🐙 Minor | This pull request adds new schemas for JLCPCB-related data, including `JlcpcbOrderState` and `JlcpcbOrderStepRun`, to the database schema. | ❌ |
| [#759](https://github.com/tscircuit/tscircuit.com/pull/759) | 🟣 | Add all the scenarios to fake | ✅ |
| [#758](https://github.com/tscircuit/tscircuit.com/pull/758) | 🐙 Minor | Update the `/order/create` route to handle simulated scenarios. | ❌ |
| [#398](https://github.com/tscircuit/runframe/pull/398) | 🐙 Minor | Removes the "simulate" option from the dialog box to fixture, and moves it to the `RunFrameForCli` component. | ✅ |
| [#82](https://github.com/tscircuit/unravel-autorouter/pull/82) | 🐌 Tiny | The pull request adds a JSON file that defines a 3D model of the letter "S" made up of LED lights. | ✅ |

### [MustafaMulla29](https://github.com/MustafaMulla29)

| PR # | Impact | Description | Milestone Aligned |
|------|--------|-------------|-------------------|
| [#757](https://github.com/tscircuit/tscircuit.com/pull/757) | 🐙 Minor | Changed "Snippets" to "Packages" and used the correct "javascript-time-ago" package instead of "timeago.js". | ❌ |

### [tscircuitbot](https://github.com/tscircuitbot)

| PR # | Impact | Description | Milestone Aligned |
|------|--------|-------------|-------------------|
| [#174](https://github.com/tscircuit/eval/pull/174) | 🐌 Tiny | Update @tscircuit/core dependency to version 0.0.359 | ✅ |



<!-- END_CURRENT_WEEK -->
