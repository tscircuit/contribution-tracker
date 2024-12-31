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

# Contribution Overview 2024-12-25

## PRs by Repository

```mermaid
pie
    "tscircuit/core" : 9
    "tscircuit/snippets" : 12
    "tscircuit/runframe" : 11
    "tscircuit/schematic-viewer" : 2
    "tscircuit/handbook" : 2
    "tscircuit/math-utils" : 2
    "tscircuit/status" : 2
    "tscircuit/eval-webworker" : 2
    "tscircuit/file-server" : 2
    "tscircuit/circuit-json" : 5
    "tscircuit/props" : 5
    "tscircuit/lint" : 2
    "tscircuit/autorouting.com" : 2
    "tscircuit/circuit-json-to-readable-netlist" : 1
    "tscircuit/jscad-electronics" : 1
    "tscircuit/footprinter" : 1
    "tscircuit/assembly-viewer" : 1
    "tscircuit/contribution-tracker" : 1
```

## Contributor Overview

| Contributor | 🐳 Major | 🐙 Minor | 🐌 Tiny | ⭐ | Issues Created |
|-------------|---------|---------|---------|-----|----------------|
| [seveibar](#seveibar) | 5 | 24 | 1 | 👑👑👑 | 60 |
| [ShiboSoftwareDev](#ShiboSoftwareDev) | 1 | 2 | 0 | ⭐⭐⭐ | 12 |
| [Anshgrover23](#Anshgrover23) | 2 | 10 | 1 | ⭐⭐ | 6 |
| [Abse2001](#Abse2001) | 0 | 5 | 0 | ⭐⭐ | 3 |
| [AnasSarkiz](#AnasSarkiz) | 1 | 2 | 0 | ⭐⭐ | 4 |
| [devin-ai-integration[bot]](#devin-ai-integration[bot]) | 1 | 3 | 0 | ⭐ | 0 |
| [imrishabh18](#imrishabh18) | 0 | 1 | 0 | ⭐ | 8 |
| [techmannih](#techmannih) | 0 | 3 | 0 | ⭐ | 2 |
| [karthik-nair-20](#karthik-nair-20) | 0 | 1 | 0 |  | 0 |

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
| [seveibar](#seveibar) | 0 | 0 | 0 | 33 | 19 | 30 | 30 | 60 | 25 | 557 |
| [devin-ai-integration[bot]](#devin-ai-integration[bot]) | 7 | 3 | 0 | 0 | 0 | 11 | 4 | 0 | 0 | 0 |
| [Anshgrover23](#Anshgrover23) | 63 | 15 | 15 | 0 | 1 | 18 | 13 | 6 | 0 | 0 |
| [Abse2001](#Abse2001) | 5 | 5 | 0 | 2 | 0 | 5 | 5 | 3 | 3 | 32 |
| [techmannih](#techmannih) | 21 | 4 | 9 | 0 | 0 | 9 | 3 | 2 | 0 | 0 |
| [imrishabh18](#imrishabh18) | 2 | 1 | 0 | 0 | 2 | 2 | 1 | 8 | 3 | 20 |
| [ShiboSoftwareDev](#ShiboSoftwareDev) | 9 | 4 | 0 | 1 | 3 | 5 | 3 | 12 | 6 | 102 |
| [AnasSarkiz](#AnasSarkiz) | 4 | 4 | 0 | 0 | 0 | 3 | 3 | 4 | 2 | 20 |
| [vishwamartur](#vishwamartur) | 1 | 0 | 1 | 0 | 0 | 1 | 0 | 0 | 0 | 0 |
| [abhijitxy](#abhijitxy) | 0 | 0 | 0 | 1 | 0 | 0 | 0 | 0 | 0 | 0 |
| [karthik-nair-20](#karthik-nair-20) | 1 | 1 | 0 | 0 | 0 | 2 | 1 | 0 | 0 | 0 |

## Changes by Repository

### [tscircuit/core](https://github.com/tscircuit/core)

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#455](https://github.com/tscircuit/core/pull/455) | 🐳 Major | seveibar | Adds support for schematic manual placements |
| [#442](https://github.com/tscircuit/core/pull/442) | 🐳 Major | Anshgrover23 | Adds a new component called "resonator" to the circuit-json repository. |
| [#459](https://github.com/tscircuit/core/pull/459) | 🐳 Major | Anshgrover23 | Adds a new Transistor component to the library. |
| [#470](https://github.com/tscircuit/core/pull/470) | 🐙 Minor | seveibar | Modifies the calculation of the `center` property for `schematic_component` and `schematic_text` to use the global schematic position before layout, improving support for manual edits to the schematic. |
| [#468](https://github.com/tscircuit/core/pull/468) | 🐙 Minor | seveibar | Improve error messages in RootCircuit class |
| [#457](https://github.com/tscircuit/core/pull/457) | 🐙 Minor | seveibar | Adds a `pcbRoutingDisabled` property to the `RootCircuit` class, and allows passing the `name` property of the `RootCircuit` as the `display_name` parameter for the autorouting server. It also adds a check in the test fixtures to require the `display_name` parameter to be set. |
| [#456](https://github.com/tscircuit/core/pull/456) | 🐙 Minor | seveibar | Rename `Circuit` class to `RootCircuit` |
| [#466](https://github.com/tscircuit/core/pull/466) | 🐙 Minor | Anshgrover23 | Add `source_component.display_value` for resistor and capacitor components |
| [#458](https://github.com/tscircuit/core/pull/458) | 🐌 Tiny | seveibar | Adds a new `Circuit` export for backwards compatibility |

### [tscircuit/snippets](https://github.com/tscircuit/snippets)

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#446](https://github.com/tscircuit/snippets/pull/446) | 🐳 Major | seveibar | Adds a new landing page for the 'tscircuit' application, including HTML structure, metadata, and example images. |
| [#423](https://github.com/tscircuit/snippets/pull/423) | 🐳 Major | ShiboSoftwareDev | Introduces a new feature to automatically load snippets from the registry to the development server. |
| [#442](https://github.com/tscircuit/snippets/pull/442) | 🐙 Minor | seveibar | Improves the SEO (Search Engine Optimization) of the website by adding a more descriptive title, description, keywords, and other metadata. |
| [#438](https://github.com/tscircuit/snippets/pull/438) | 🐙 Minor | seveibar | Adds a new download option for a readable netlist in the application. |
| [#430](https://github.com/tscircuit/snippets/pull/430) | 🐙 Minor | seveibar | Added circuit name for better logs on the autorouting server. |
| [#434](https://github.com/tscircuit/snippets/pull/434) | 🐙 Minor | Anshgrover23 | Changes the save button to a fork button if the user does not own the snippet. |
| [#431](https://github.com/tscircuit/snippets/pull/431) | 🐙 Minor | Anshgrover23 | Fix for playwright-tests failing |
| [#422](https://github.com/tscircuit/snippets/pull/422) | 🐙 Minor | Anshgrover23 | Adds a `waitForLoadState` to the `view-snippet.spec.ts` test to ensure network requests and animations are complete before taking screenshots. |
| [#439](https://github.com/tscircuit/snippets/pull/439) | 🐙 Minor | devin-ai-integration[bot] | Switch chat icon to Discord icon in the header. |
| [#425](https://github.com/tscircuit/snippets/pull/425) | 🐙 Minor | karthik-nair-20 | Aligns the EditorNav component to the right side on responsive devices. |
| [#417](https://github.com/tscircuit/snippets/pull/417) | 🐙 Minor | imrishabh18 | Fixes the issue of throwing an error when importing an empty file for manual-edits. |
| [#448](https://github.com/tscircuit/snippets/pull/448) | 🐌 Tiny | Anshgrover23 | Updates snapshots of the homePage test |

### [tscircuit/runframe](https://github.com/tscircuit/runframe)

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#79](https://github.com/tscircuit/runframe/pull/79) | 🐳 Major | seveibar | Fixes issues with re-rendering on entrypoint change and the order of execution between evaluation and rendering. |
| [#73](https://github.com/tscircuit/runframe/pull/73) | 🐳 Major | seveibar | Introduces functionality to save circuit snippets, including a "Save Snippet" button, and formalizes events for syncing between the browser and the file server. |
| [#52](https://github.com/tscircuit/runframe/pull/52) | 🐳 Major | seveibar | Introduces schematic drag'n'drop support with filesystem syncing via @tscircuit/file-server. |
| [#84](https://github.com/tscircuit/runframe/pull/84) | 🐙 Minor | seveibar | Update the `@tscircuit/core` and `@tscircuit/eval-webworker` dependencies in the project. |
| [#78](https://github.com/tscircuit/runframe/pull/78) | 🐙 Minor | seveibar | Fix an issue where the `entrypoint` prop change does not trigger a re-render. |
| [#77](https://github.com/tscircuit/runframe/pull/77) | 🐙 Minor | seveibar | Update the default static build target to "run frame" and load initial files via a list. |
| [#76](https://github.com/tscircuit/runframe/pull/76) | 🐙 Minor | seveibar | Use the `RunFrameForCli` component as the default static build target instead of `RunFrameWithApi`, and load initial files via a list. |
| [#75](https://github.com/tscircuit/runframe/pull/75) | 🐙 Minor | seveibar | Replace `RunFrameWithApi` with `RunFrameForCli` as the default static build target for the CLI. |
| [#60](https://github.com/tscircuit/runframe/pull/60) | 🐙 Minor | seveibar | Fix the conversion of `props.fsMap` from an object to a Map. |
| [#48](https://github.com/tscircuit/runframe/pull/48) | 🐙 Minor | seveibar | Adds a new prop `leftHeaderContent` to the `CircuitJsonPreview` and `RunFrame` components to allow displaying content on the left side of the header. |
| [#65](https://github.com/tscircuit/runframe/pull/65) | 🐙 Minor | techmannih | Add assembly view to the circuit preview |

### [tscircuit/schematic-viewer](https://github.com/tscircuit/schematic-viewer)

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#76](https://github.com/tscircuit/schematic-viewer/pull/76) | 🐙 Minor | seveibar | Fix a bug related to circuit JSON updates and add debug statements. |
| [#75](https://github.com/tscircuit/schematic-viewer/pull/75) | 🐙 Minor | seveibar | Change tscircuit dependencies to peer deps to avoid duplicates. |

### [tscircuit/handbook](https://github.com/tscircuit/handbook)

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#6](https://github.com/tscircuit/handbook/pull/6) | 🐙 Minor | seveibar | Introduces a new guide for learning Git, including instructions for resolving `bun.lockb` conflicts. |
| [#4](https://github.com/tscircuit/handbook/pull/4) | 🐙 Minor | Abse2001 | Added a tutorial for using yalc for local development. |

### [tscircuit/math-utils](https://github.com/tscircuit/math-utils)

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#3](https://github.com/tscircuit/math-utils/pull/3) | 🐙 Minor | seveibar | Adds support for centering the grid and adjusts the calculation of cell positions accordingly. |
| [#2](https://github.com/tscircuit/math-utils/pull/2) | 🐙 Minor | seveibar | Add support for a grid function |

### [tscircuit/status](https://github.com/tscircuit/status)

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#6](https://github.com/tscircuit/status/pull/6) | 🐙 Minor | seveibar | Add a filter to only show outages longer than 15 minutes to prevent flaky health checks from being listed. |
| [#8](https://github.com/tscircuit/status/pull/8) | 🐙 Minor | devin-ai-integration[bot] | Improve the display of outage durations by showing them in a more human-readable format. |

### [tscircuit/eval-webworker](https://github.com/tscircuit/eval-webworker)

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#55](https://github.com/tscircuit/eval-webworker/pull/55) | 🐙 Minor | seveibar | Update the core library, fix types, and add support for setting the name of the circuit. |
| [#54](https://github.com/tscircuit/eval-webworker/pull/54) | 🐙 Minor | seveibar | Adds new type exports for `CircuitWebWorker` and `WebWorkerConfiguration` types. |

### [tscircuit/file-server](https://github.com/tscircuit/file-server)

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#3](https://github.com/tscircuit/file-server/pull/3) | 🐙 Minor | seveibar | Adds a new admin index page with links to file and event management, and adds a new /admin/events/list page to display a list of events. |
| [#2](https://github.com/tscircuit/file-server/pull/2) | 🐙 Minor | seveibar | Add a new `/events/reset` route to clear all events in the database. |

### [tscircuit/circuit-json](https://github.com/tscircuit/circuit-json)

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#114](https://github.com/tscircuit/circuit-json/pull/114) | 🐙 Minor | Abse2001 | Added a new optional property `max_decoupling_trace_length` of type `distance` to the `source_simple_capacitor` schema. |
| [#113](https://github.com/tscircuit/circuit-json/pull/113) | 🐙 Minor | Abse2001 | Added `pcb_trace.trace_length` and `source_trace.max_length` properties to the data models. |
| [#111](https://github.com/tscircuit/circuit-json/pull/111) | 🐙 Minor | Anshgrover23 | Add `display_resistance` and `display_capacitance` to zod schema for `SourceSimpleResistor` and `SourceSimpleCapacitor` types. |
| [#103](https://github.com/tscircuit/circuit-json/pull/103) | 🐙 Minor | Anshgrover23 | Adds a new circuit element called "simple transistor" to the project. |
| [#105](https://github.com/tscircuit/circuit-json/pull/105) | 🐙 Minor | techmannih | Adds a new type of PCB plated hole with a circular hole and a rectangular pad. |

### [tscircuit/props](https://github.com/tscircuit/props)

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#133](https://github.com/tscircuit/props/pull/133) | 🐳 Major | devin-ai-integration[bot] | Adds a new MOSFET component with channel type (nmos/pmos) and a comprehensive test suite. |
| [#139](https://github.com/tscircuit/props/pull/139) | 🐙 Minor | Abse2001 | Added `maxLength` prop to `trace` component and `maxDecouplingTraceLength` prop to `capacitor` component. |
| [#125](https://github.com/tscircuit/props/pull/125) | 🐙 Minor | Anshgrover23 | Add transistorProps to the codebase. |
| [#131](https://github.com/tscircuit/props/pull/131) | 🐙 Minor | Anshgrover23 | Adds a new `ResonatorPinVariant` type and updates the `ResonatorProps` interface and its corresponding schema to support a more flexible set of pin variants. |
| [#135](https://github.com/tscircuit/props/pull/135) | 🐙 Minor | devin-ai-integration[bot] | This pull request adds an automated script to generate documentation for manual edit events and files. |

### [tscircuit/lint](https://github.com/tscircuit/lint)

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#7](https://github.com/tscircuit/lint/pull/7) | 🐙 Minor | Abse2001 | Adds a new rule to enforce the context-passing pattern for functions with two parameters, and a new rule to enforce TSCircuit dependency rules in package.json. |
| [#5](https://github.com/tscircuit/lint/pull/5) | 🐙 Minor | techmannih | Add support for running the `tscircuit-lint` command via the `package.json` `bin` field. |

### [tscircuit/autorouting.com](https://github.com/tscircuit/autorouting.com)

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#10](https://github.com/tscircuit/autorouting.com/pull/10) | 🐙 Minor | Anshgrover23 | Automatically retry sample uploads up to 3 times |
| [#12](https://github.com/tscircuit/autorouting.com/pull/12) | 🐙 Minor | ShiboSoftwareDev | Removed the "force-dynamic" setting from various pages, as dynamic routes cannot be prerendered. |

### [tscircuit/circuit-json-to-readable-netlist](https://github.com/tscircuit/circuit-json-to-readable-netlist)

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#3](https://github.com/tscircuit/circuit-json-to-readable-netlist/pull/3) | 🐙 Minor | Anshgrover23 | Adds a components section to the readable netlist output, with component descriptions based on the circuit JSON data. |

### [tscircuit/jscad-electronics](https://github.com/tscircuit/jscad-electronics)

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#84](https://github.com/tscircuit/jscad-electronics/pull/84) | 🐳 Major | AnasSarkiz | Added 3D models for all missing imperial passive components (A01005, A0201, A1206, A1210, A2010, A2512) |

### [tscircuit/footprinter](https://github.com/tscircuit/footprinter)

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#103](https://github.com/tscircuit/footprinter/pull/103) | 🐙 Minor | AnasSarkiz | Fixes the imperial footprints of passive components. |

### [tscircuit/assembly-viewer](https://github.com/tscircuit/assembly-viewer)

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#4](https://github.com/tscircuit/assembly-viewer/pull/4) | 🐙 Minor | AnasSarkiz | Added a `footprint` prop to `capacitor` components in the circuit. |

### [tscircuit/contribution-tracker](https://github.com/tscircuit/contribution-tracker)

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#27](https://github.com/tscircuit/contribution-tracker/pull/27) | 🐙 Minor | ShiboSoftwareDev | The pull request adds a feature to count approvals and rejections as tiny contribution points, with a maximum of 20 points across approvals and rejections. |

## Changes by Contributor

### [seveibar](https://github.com/seveibar)

| PR # | Impact | Description |
|------|--------|-------------|
| [#455](https://github.com/tscircuit/core/pull/455) | 🐳 Major | Adds support for schematic manual placements |
| [#446](https://github.com/tscircuit/snippets/pull/446) | 🐳 Major | Adds a new landing page for the 'tscircuit' application, including HTML structure, metadata, and example images. |
| [#79](https://github.com/tscircuit/runframe/pull/79) | 🐳 Major | Fixes issues with re-rendering on entrypoint change and the order of execution between evaluation and rendering. |
| [#73](https://github.com/tscircuit/runframe/pull/73) | 🐳 Major | Introduces functionality to save circuit snippets, including a "Save Snippet" button, and formalizes events for syncing between the browser and the file server. |
| [#52](https://github.com/tscircuit/runframe/pull/52) | 🐳 Major | Introduces schematic drag'n'drop support with filesystem syncing via @tscircuit/file-server. |
| [#76](https://github.com/tscircuit/schematic-viewer/pull/76) | 🐙 Minor | Fix a bug related to circuit JSON updates and add debug statements. |
| [#75](https://github.com/tscircuit/schematic-viewer/pull/75) | 🐙 Minor | Change tscircuit dependencies to peer deps to avoid duplicates. |
| [#470](https://github.com/tscircuit/core/pull/470) | 🐙 Minor | Modifies the calculation of the `center` property for `schematic_component` and `schematic_text` to use the global schematic position before layout, improving support for manual edits to the schematic. |
| [#468](https://github.com/tscircuit/core/pull/468) | 🐙 Minor | Improve error messages in RootCircuit class |
| [#457](https://github.com/tscircuit/core/pull/457) | 🐙 Minor | Adds a `pcbRoutingDisabled` property to the `RootCircuit` class, and allows passing the `name` property of the `RootCircuit` as the `display_name` parameter for the autorouting server. It also adds a check in the test fixtures to require the `display_name` parameter to be set. |
| [#456](https://github.com/tscircuit/core/pull/456) | 🐙 Minor | Rename `Circuit` class to `RootCircuit` |
| [#6](https://github.com/tscircuit/handbook/pull/6) | 🐙 Minor | Introduces a new guide for learning Git, including instructions for resolving `bun.lockb` conflicts. |
| [#3](https://github.com/tscircuit/math-utils/pull/3) | 🐙 Minor | Adds support for centering the grid and adjusts the calculation of cell positions accordingly. |
| [#2](https://github.com/tscircuit/math-utils/pull/2) | 🐙 Minor | Add support for a grid function |
| [#442](https://github.com/tscircuit/snippets/pull/442) | 🐙 Minor | Improves the SEO (Search Engine Optimization) of the website by adding a more descriptive title, description, keywords, and other metadata. |
| [#438](https://github.com/tscircuit/snippets/pull/438) | 🐙 Minor | Adds a new download option for a readable netlist in the application. |
| [#430](https://github.com/tscircuit/snippets/pull/430) | 🐙 Minor | Added circuit name for better logs on the autorouting server. |
| [#6](https://github.com/tscircuit/status/pull/6) | 🐙 Minor | Add a filter to only show outages longer than 15 minutes to prevent flaky health checks from being listed. |
| [#55](https://github.com/tscircuit/eval-webworker/pull/55) | 🐙 Minor | Update the core library, fix types, and add support for setting the name of the circuit. |
| [#54](https://github.com/tscircuit/eval-webworker/pull/54) | 🐙 Minor | Adds new type exports for `CircuitWebWorker` and `WebWorkerConfiguration` types. |
| [#84](https://github.com/tscircuit/runframe/pull/84) | 🐙 Minor | Update the `@tscircuit/core` and `@tscircuit/eval-webworker` dependencies in the project. |
| [#78](https://github.com/tscircuit/runframe/pull/78) | 🐙 Minor | Fix an issue where the `entrypoint` prop change does not trigger a re-render. |
| [#77](https://github.com/tscircuit/runframe/pull/77) | 🐙 Minor | Update the default static build target to "run frame" and load initial files via a list. |
| [#76](https://github.com/tscircuit/runframe/pull/76) | 🐙 Minor | Use the `RunFrameForCli` component as the default static build target instead of `RunFrameWithApi`, and load initial files via a list. |
| [#75](https://github.com/tscircuit/runframe/pull/75) | 🐙 Minor | Replace `RunFrameWithApi` with `RunFrameForCli` as the default static build target for the CLI. |
| [#60](https://github.com/tscircuit/runframe/pull/60) | 🐙 Minor | Fix the conversion of `props.fsMap` from an object to a Map. |
| [#48](https://github.com/tscircuit/runframe/pull/48) | 🐙 Minor | Adds a new prop `leftHeaderContent` to the `CircuitJsonPreview` and `RunFrame` components to allow displaying content on the left side of the header. |
| [#3](https://github.com/tscircuit/file-server/pull/3) | 🐙 Minor | Adds a new admin index page with links to file and event management, and adds a new /admin/events/list page to display a list of events. |
| [#2](https://github.com/tscircuit/file-server/pull/2) | 🐙 Minor | Add a new `/events/reset` route to clear all events in the database. |
| [#458](https://github.com/tscircuit/core/pull/458) | 🐌 Tiny | Adds a new `Circuit` export for backwards compatibility |

### [Abse2001](https://github.com/Abse2001)

| PR # | Impact | Description |
|------|--------|-------------|
| [#114](https://github.com/tscircuit/circuit-json/pull/114) | 🐙 Minor | Added a new optional property `max_decoupling_trace_length` of type `distance` to the `source_simple_capacitor` schema. |
| [#113](https://github.com/tscircuit/circuit-json/pull/113) | 🐙 Minor | Added `pcb_trace.trace_length` and `source_trace.max_length` properties to the data models. |
| [#139](https://github.com/tscircuit/props/pull/139) | 🐙 Minor | Added `maxLength` prop to `trace` component and `maxDecouplingTraceLength` prop to `capacitor` component. |
| [#4](https://github.com/tscircuit/handbook/pull/4) | 🐙 Minor | Added a tutorial for using yalc for local development. |
| [#7](https://github.com/tscircuit/lint/pull/7) | 🐙 Minor | Adds a new rule to enforce the context-passing pattern for functions with two parameters, and a new rule to enforce TSCircuit dependency rules in package.json. |

### [Anshgrover23](https://github.com/Anshgrover23)

| PR # | Impact | Description |
|------|--------|-------------|
| [#442](https://github.com/tscircuit/core/pull/442) | 🐳 Major | Adds a new component called "resonator" to the circuit-json repository. |
| [#459](https://github.com/tscircuit/core/pull/459) | 🐳 Major | Adds a new Transistor component to the library. |
| [#111](https://github.com/tscircuit/circuit-json/pull/111) | 🐙 Minor | Add `display_resistance` and `display_capacitance` to zod schema for `SourceSimpleResistor` and `SourceSimpleCapacitor` types. |
| [#103](https://github.com/tscircuit/circuit-json/pull/103) | 🐙 Minor | Adds a new circuit element called "simple transistor" to the project. |
| [#125](https://github.com/tscircuit/props/pull/125) | 🐙 Minor | Add transistorProps to the codebase. |
| [#131](https://github.com/tscircuit/props/pull/131) | 🐙 Minor | Adds a new `ResonatorPinVariant` type and updates the `ResonatorProps` interface and its corresponding schema to support a more flexible set of pin variants. |
| [#466](https://github.com/tscircuit/core/pull/466) | 🐙 Minor | Add `source_component.display_value` for resistor and capacitor components |
| [#10](https://github.com/tscircuit/autorouting.com/pull/10) | 🐙 Minor | Automatically retry sample uploads up to 3 times |
| [#434](https://github.com/tscircuit/snippets/pull/434) | 🐙 Minor | Changes the save button to a fork button if the user does not own the snippet. |
| [#431](https://github.com/tscircuit/snippets/pull/431) | 🐙 Minor | Fix for playwright-tests failing |
| [#422](https://github.com/tscircuit/snippets/pull/422) | 🐙 Minor | Adds a `waitForLoadState` to the `view-snippet.spec.ts` test to ensure network requests and animations are complete before taking screenshots. |
| [#3](https://github.com/tscircuit/circuit-json-to-readable-netlist/pull/3) | 🐙 Minor | Adds a components section to the readable netlist output, with component descriptions based on the circuit JSON data. |
| [#448](https://github.com/tscircuit/snippets/pull/448) | 🐌 Tiny | Updates snapshots of the homePage test |

### [techmannih](https://github.com/techmannih)

| PR # | Impact | Description |
|------|--------|-------------|
| [#105](https://github.com/tscircuit/circuit-json/pull/105) | 🐙 Minor | Adds a new type of PCB plated hole with a circular hole and a rectangular pad. |
| [#65](https://github.com/tscircuit/runframe/pull/65) | 🐙 Minor | Add assembly view to the circuit preview |
| [#5](https://github.com/tscircuit/lint/pull/5) | 🐙 Minor | Add support for running the `tscircuit-lint` command via the `package.json` `bin` field. |

### [devin-ai-integration[bot]](https://github.com/devin-ai-integration[bot])

| PR # | Impact | Description |
|------|--------|-------------|
| [#133](https://github.com/tscircuit/props/pull/133) | 🐳 Major | Adds a new MOSFET component with channel type (nmos/pmos) and a comprehensive test suite. |
| [#135](https://github.com/tscircuit/props/pull/135) | 🐙 Minor | This pull request adds an automated script to generate documentation for manual edit events and files. |
| [#439](https://github.com/tscircuit/snippets/pull/439) | 🐙 Minor | Switch chat icon to Discord icon in the header. |
| [#8](https://github.com/tscircuit/status/pull/8) | 🐙 Minor | Improve the display of outage durations by showing them in a more human-readable format. |

### [AnasSarkiz](https://github.com/AnasSarkiz)

| PR # | Impact | Description |
|------|--------|-------------|
| [#84](https://github.com/tscircuit/jscad-electronics/pull/84) | 🐳 Major | Added 3D models for all missing imperial passive components (A01005, A0201, A1206, A1210, A2010, A2512) |
| [#103](https://github.com/tscircuit/footprinter/pull/103) | 🐙 Minor | Fixes the imperial footprints of passive components. |
| [#4](https://github.com/tscircuit/assembly-viewer/pull/4) | 🐙 Minor | Added a `footprint` prop to `capacitor` components in the circuit. |

### [ShiboSoftwareDev](https://github.com/ShiboSoftwareDev)

| PR # | Impact | Description |
|------|--------|-------------|
| [#423](https://github.com/tscircuit/snippets/pull/423) | 🐳 Major | Introduces a new feature to automatically load snippets from the registry to the development server. |
| [#27](https://github.com/tscircuit/contribution-tracker/pull/27) | 🐙 Minor | The pull request adds a feature to count approvals and rejections as tiny contribution points, with a maximum of 20 points across approvals and rejections. |
| [#12](https://github.com/tscircuit/autorouting.com/pull/12) | 🐙 Minor | Removed the "force-dynamic" setting from various pages, as dynamic routes cannot be prerendered. |

### [karthik-nair-20](https://github.com/karthik-nair-20)

| PR # | Impact | Description |
|------|--------|-------------|
| [#425](https://github.com/tscircuit/snippets/pull/425) | 🐙 Minor | Aligns the EditorNav component to the right side on responsive devices. |

### [imrishabh18](https://github.com/imrishabh18)

| PR # | Impact | Description |
|------|--------|-------------|
| [#417](https://github.com/tscircuit/snippets/pull/417) | 🐙 Minor | Fixes the issue of throwing an error when importing an empty file for manual-edits. |



<!-- END_CURRENT_WEEK -->
