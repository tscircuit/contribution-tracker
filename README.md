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

# Contribution Overview 2025-04-09

## PRs by Repository

```mermaid
pie
    "tscircuit/core" : 2
    "tscircuit/schematic-viewer" : 1
    "tscircuit/props" : 2
    "tscircuit/jscad-planner" : 1
    "tscircuit/eval" : 1
    "tscircuit/contribution-tracker" : 1
    "tscircuit/tscircuit.com" : 7
```

## Contributor Overview

| Contributor | 🐳 Major | 🐙 Minor | 🐌 Tiny | ⭐ | Issues Created | Discussion Contributions |
|-------------|---------|---------|---------|-----|----------------|--------------------------|
| [seveibar](#seveibar) | 0 | 1 | 0 | ⭐⭐ | 6 | 3🔹 3🔶 0💎 |
| [ArnavK-09](#ArnavK-09) | 1 | 4 | 1 | ⭐⭐ | 1 | 0🔹 0🔶 0💎 |
| [imrishabh18](#imrishabh18) | 1 | 1 | 0 | ⭐ | 2 | 0🔹 0🔶 0💎 |
| [andrii-balitskyi](#andrii-balitskyi) | 0 | 3 | 0 | ⭐ | 1 | 0🔹 0🔶 0💎 |
| [oldbear26](#oldbear26) | 0 | 1 | 0 |  | 0 | 0🔹 0🔶 0💎 |
| [dekkku](#dekkku) | 0 | 1 | 0 |  | 0 | 0🔹 0🔶 0💎 |
| [techmannih](#techmannih) | 0 | 1 | 0 |  | 0 | 0🔹 0🔶 0💎 |
| [gurjeetsinghvirdee](#gurjeetsinghvirdee) | 0 | 0 | 0 | ⭐ | 0 | 0🔹 2🔶 0💎 |
| [Anshgrover23](#Anshgrover23) | 0 | 0 | 0 |  | 0 | 1🔹 0🔶 0💎 |

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
| [imrishabh18](#imrishabh18) | 8 | 2 | 1 | 1 | 0 | 4 | 2 | 2 | 2 | 4 |
| [seveibar](#seveibar) | 0 | 0 | 0 | 13 | 1 | 2 | 1 | 6 | 5 | 127 |
| [andrii-balitskyi](#andrii-balitskyi) | 3 | 3 | 0 | 0 | 0 | 3 | 3 | 1 | 0 | 0 |
| [techmannih](#techmannih) | 1 | 1 | 0 | 0 | 0 | 3 | 1 | 0 | 0 | 0 |
| [oldbear26](#oldbear26) | 1 | 1 | 0 | 0 | 0 | 1 | 1 | 0 | 0 | 0 |
| [ArnavK-09](#ArnavK-09) | 11 | 6 | 0 | 0 | 0 | 7 | 6 | 1 | 0 | 0 |
| [dekkku](#dekkku) | 1 | 1 | 0 | 0 | 0 | 1 | 1 | 0 | 0 | 0 |
| [Ani-4x](#Ani-4x) | 0 | 0 | 0 | 0 | 0 | 1 | 0 | 0 | 0 | 0 |
| [tscircuitbot](#tscircuitbot) | 0 | 0 | 0 | 0 | 0 | 4 | 0 | 0 | 0 | 0 |
| [gurjeetsinghvirdee](#gurjeetsinghvirdee) | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| [Anshgrover23](#Anshgrover23) | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |

## Changes by Repository

### [tscircuit/core](https://github.com/tscircuit/core)

| PR # | Impact | Contributor | Description | Milestone Aligned |
|------|--------|-------------|-------------|-------------------|
| [#726](https://github.com/tscircuit/core/pull/726) | 🐳 Major | imrishabh18 | Adds a method `applySchematicEditEventsToManualEditsFile` that updates the `schematic_placements` field in the `manual_edits_file` based on the `edit_schematic_component_location` edit events. | ✅ |
| [#727](https://github.com/tscircuit/core/pull/727) | 🐙 Minor | andrii-balitskyi | Update the dependency "@tscircuit/props" to version 0.0.167 | ✅ |

### [tscircuit/schematic-viewer](https://github.com/tscircuit/schematic-viewer)

| PR # | Impact | Contributor | Description | Milestone Aligned |
|------|--------|-------------|-------------|-------------------|
| [#80](https://github.com/tscircuit/schematic-viewer/pull/80) | 🐙 Minor | imrishabh18 | Upgrade the `@tscircuit/core` dependency from version `0.0.245` to `0.0.362`. | ❌ |

### [tscircuit/props](https://github.com/tscircuit/props)

| PR # | Impact | Contributor | Description | Milestone Aligned |
|------|--------|-------------|-------------|-------------------|
| [#205](https://github.com/tscircuit/props/pull/205) | 🐙 Minor | andrii-balitskyi | The pull request updates the `platedhole.ts` component to use `holeWidth` and `holeHeight` instead of `innerWidth` and `innerHeight` for oval plated holes. | ✅ |
| [#203](https://github.com/tscircuit/props/pull/203) | 🐙 Minor | andrii-balitskyi | Changes the properties used for a "pill" plated hole from `innerWidth`/`innerHeight` to `holeWidth`/`holeHeight`. | ✅ |

### [tscircuit/jscad-planner](https://github.com/tscircuit/jscad-planner)

| PR # | Impact | Contributor | Description | Milestone Aligned |
|------|--------|-------------|-------------|-------------------|
| [#9](https://github.com/tscircuit/jscad-planner/pull/9) | 🐙 Minor | oldbear26 | Fix a bug where the hull plan can have an array of operations in its shapes, but the plan executioner doesn't throw an error when the input is an array. | ✅ |

### [tscircuit/eval](https://github.com/tscircuit/eval)

| PR # | Impact | Contributor | Description | Milestone Aligned |
|------|--------|-------------|-------------|-------------------|
| [#191](https://github.com/tscircuit/eval/pull/191) | 🐳 Major | ArnavK-09 | Introduces a new utility function to resolve node modules using the package.json file and the "exports" field. | ✅ |

### [tscircuit/contribution-tracker](https://github.com/tscircuit/contribution-tracker)

| PR # | Impact | Contributor | Description | Milestone Aligned |
|------|--------|-------------|-------------|-------------------|
| [#112](https://github.com/tscircuit/contribution-tracker/pull/112) | 🐙 Minor | ArnavK-09 | Update ring and background colors for the 2nd place contributor | ❌ |

### [tscircuit/tscircuit.com](https://github.com/tscircuit/tscircuit.com)

| PR # | Impact | Contributor | Description | Milestone Aligned |
|------|--------|-------------|-------------|-------------------|
| [#820](https://github.com/tscircuit/tscircuit.com/pull/820) | 🐙 Minor | ArnavK-09 | Add a new 404 page to handle cases where users navigate to non-existent routes or packages. | ✅ |
| [#813](https://github.com/tscircuit/tscircuit.com/pull/813) | 🐙 Minor | ArnavK-09 | Add a new 404 page to handle cases where users navigate to non-existent routes or packages. | ✅ |
| [#810](https://github.com/tscircuit/tscircuit.com/pull/810) | 🐙 Minor | ArnavK-09 | Add edit package details dialog and update sidebar UI | ✅ |
| [#818](https://github.com/tscircuit/tscircuit.com/pull/818) | 🐙 Minor | dekkku | The change adds a check for the availability of circuitJson and displays appropriate UI for disabled views. | ✅ |
| [#815](https://github.com/tscircuit/tscircuit.com/pull/815) | 🐙 Minor | seveibar | Reverts the addition of a 404 page and handling of not found states. | ❌ |
| [#809](https://github.com/tscircuit/tscircuit.com/pull/809) | 🐙 Minor | techmannih | Fixes the text snippets to packages in the user profile page. | ❌ |
| [#811](https://github.com/tscircuit/tscircuit.com/pull/811) | 🐌 Tiny | ArnavK-09 | Wrap the disabled button in a div to improve structure and use `asChild` for DropdownMenuTrigger to ensure proper component composition. | ✅ |

## Changes by Contributor

### [imrishabh18](https://github.com/imrishabh18)

| PR # | Impact | Description | Milestone Aligned |
|------|--------|-------------|-------------------|
| [#726](https://github.com/tscircuit/core/pull/726) | 🐳 Major | Adds a method `applySchematicEditEventsToManualEditsFile` that updates the `schematic_placements` field in the `manual_edits_file` based on the `edit_schematic_component_location` edit events. | ✅ |
| [#80](https://github.com/tscircuit/schematic-viewer/pull/80) | 🐙 Minor | Upgrade the `@tscircuit/core` dependency from version `0.0.245` to `0.0.362`. | ❌ |

### [andrii-balitskyi](https://github.com/andrii-balitskyi)

| PR # | Impact | Description | Milestone Aligned |
|------|--------|-------------|-------------------|
| [#205](https://github.com/tscircuit/props/pull/205) | 🐙 Minor | The pull request updates the `platedhole.ts` component to use `holeWidth` and `holeHeight` instead of `innerWidth` and `innerHeight` for oval plated holes. | ✅ |
| [#203](https://github.com/tscircuit/props/pull/203) | 🐙 Minor | Changes the properties used for a "pill" plated hole from `innerWidth`/`innerHeight` to `holeWidth`/`holeHeight`. | ✅ |
| [#727](https://github.com/tscircuit/core/pull/727) | 🐙 Minor | Update the dependency "@tscircuit/props" to version 0.0.167 | ✅ |

### [oldbear26](https://github.com/oldbear26)

| PR # | Impact | Description | Milestone Aligned |
|------|--------|-------------|-------------------|
| [#9](https://github.com/tscircuit/jscad-planner/pull/9) | 🐙 Minor | Fix a bug where the hull plan can have an array of operations in its shapes, but the plan executioner doesn't throw an error when the input is an array. | ✅ |

### [ArnavK-09](https://github.com/ArnavK-09)

| PR # | Impact | Description | Milestone Aligned |
|------|--------|-------------|-------------------|
| [#191](https://github.com/tscircuit/eval/pull/191) | 🐳 Major | Introduces a new utility function to resolve node modules using the package.json file and the "exports" field. | ✅ |
| [#112](https://github.com/tscircuit/contribution-tracker/pull/112) | 🐙 Minor | Update ring and background colors for the 2nd place contributor | ❌ |
| [#820](https://github.com/tscircuit/tscircuit.com/pull/820) | 🐙 Minor | Add a new 404 page to handle cases where users navigate to non-existent routes or packages. | ✅ |
| [#813](https://github.com/tscircuit/tscircuit.com/pull/813) | 🐙 Minor | Add a new 404 page to handle cases where users navigate to non-existent routes or packages. | ✅ |
| [#810](https://github.com/tscircuit/tscircuit.com/pull/810) | 🐙 Minor | Add edit package details dialog and update sidebar UI | ✅ |
| [#811](https://github.com/tscircuit/tscircuit.com/pull/811) | 🐌 Tiny | Wrap the disabled button in a div to improve structure and use `asChild` for DropdownMenuTrigger to ensure proper component composition. | ✅ |

### [dekkku](https://github.com/dekkku)

| PR # | Impact | Description | Milestone Aligned |
|------|--------|-------------|-------------------|
| [#818](https://github.com/tscircuit/tscircuit.com/pull/818) | 🐙 Minor | The change adds a check for the availability of circuitJson and displays appropriate UI for disabled views. | ✅ |

### [seveibar](https://github.com/seveibar)

| PR # | Impact | Description | Milestone Aligned |
|------|--------|-------------|-------------------|
| [#815](https://github.com/tscircuit/tscircuit.com/pull/815) | 🐙 Minor | Reverts the addition of a 404 page and handling of not found states. | ❌ |

### [techmannih](https://github.com/techmannih)

| PR # | Impact | Description | Milestone Aligned |
|------|--------|-------------|-------------------|
| [#809](https://github.com/tscircuit/tscircuit.com/pull/809) | 🐙 Minor | Fixes the text snippets to packages in the user profile page. | ❌ |



<!-- END_CURRENT_WEEK -->
