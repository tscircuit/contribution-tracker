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

# Contribution Overview 2025-03-12

## PRs by Repository

```mermaid
pie
    "tscircuit/footprinter" : 1
    "tscircuit/easyeda-converter" : 1
    "tscircuit/winterspec" : 1
    "tscircuit/core" : 2
    "tscircuit/dsn-converter" : 1
    "tscircuit/tscircuit.com" : 5
    "tscircuit/cli" : 1
    "tscircuit/autorouting-cache-engine" : 1
    "tscircuit/capacity-autorouter" : 2
    "tscircuit/graphics-debug" : 3
```

## Contributor Overview

| Contributor | 🐳 Major | 🐙 Minor | 🐌 Tiny | ⭐ | Issues Created |
|-------------|---------|---------|---------|-----|----------------|
| [seveibar](#seveibar) | 2 | 2 | 0 | ⭐⭐ | 17 |
| [imrishabh18](#imrishabh18) | 0 | 7 | 0 | ⭐⭐ | 3 |
| [MustafaMulla29](#MustafaMulla29) | 0 | 1 | 0 |  | 1 |
| [Anshgrover23](#Anshgrover23) | 0 | 0 | 2 |  | 1 |
| [krushnarout](#krushnarout) | 0 | 0 | 1 |  | 0 |
| [ArnavK-09](#ArnavK-09) | 0 | 0 | 1 |  | 0 |

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
| [Anshgrover23](#Anshgrover23) | 1 | 1 | 0 | 0 | 0 | 3 | 2 | 1 | 0 | 0 |
| [MustafaMulla29](#MustafaMulla29) | 3 | 2 | 0 | 0 | 0 | 2 | 1 | 1 | 0 | 0 |
| [seveibar](#seveibar) | 0 | 0 | 0 | 7 | 1 | 9 | 5 | 17 | 5 | 93 |
| [techmannih](#techmannih) | 0 | 0 | 0 | 1 | 0 | 0 | 0 | 0 | 0 | 0 |
| [krushnarout](#krushnarout) | 1 | 1 | 0 | 0 | 0 | 1 | 1 | 0 | 0 | 0 |
| [ArnavK-09](#ArnavK-09) | 1 | 1 | 0 | 0 | 0 | 1 | 1 | 0 | 0 | 0 |
| [Rishikesh63](#Rishikesh63) | 1 | 0 | 1 | 0 | 0 | 1 | 0 | 0 | 0 | 0 |
| [imrishabh18](#imrishabh18) | 4 | 3 | 0 | 0 | 0 | 8 | 8 | 3 | 1 | 5 |
| [joharkhan99](#joharkhan99) | 0 | 0 | 0 | 0 | 0 | 1 | 0 | 0 | 0 | 0 |

## Changes by Repository

### [tscircuit/footprinter](https://github.com/tscircuit/footprinter)

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#237](https://github.com/tscircuit/footprinter/pull/237) | 🐙 Minor | MustafaMulla29 | Implement VSSOP-10-0.5mm footprint |

### [tscircuit/easyeda-converter](https://github.com/tscircuit/easyeda-converter)

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#169](https://github.com/tscircuit/easyeda-converter/pull/169) | 🐌 Tiny | krushnarout | Removes the "height" attribute from the "platedhole" element for "oval" or "pill" shaped plated holes. |

### [tscircuit/winterspec](https://github.com/tscircuit/winterspec)

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#33](https://github.com/tscircuit/winterspec/pull/33) | 🐌 Tiny | ArnavK-09 | Update the GitHub Actions used in the project to their latest versions. |

### [tscircuit/core](https://github.com/tscircuit/core)

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#701](https://github.com/tscircuit/core/pull/701) | 🐌 Tiny | Anshgrover23 | Adds the import path to the snapshot file names in the tests. |
| [#700](https://github.com/tscircuit/core/pull/700) | 🐌 Tiny | Anshgrover23 | Move snapshot files to correct directory |

### [tscircuit/dsn-converter](https://github.com/tscircuit/dsn-converter)

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#104](https://github.com/tscircuit/dsn-converter/pull/104) | 🐙 Minor | imrishabh18 | Add support for the `circle` shape for SMT pads and refactor the `processedComponents` file. |

### [tscircuit/tscircuit.com](https://github.com/tscircuit/tscircuit.com)

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#731](https://github.com/tscircuit/tscircuit.com/pull/731) | 🐙 Minor | imrishabh18 | Removes the fixed board dimensions for the module. |
| [#730](https://github.com/tscircuit/tscircuit.com/pull/730) | 🐙 Minor | imrishabh18 | Add a lock icon on the profile page to indicate if a snippet is private. |
| [#728](https://github.com/tscircuit/tscircuit.com/pull/728) | 🐙 Minor | imrishabh18 | Adds a dialog to choose package visibility (public or private) when creating a new snippet. |
| [#727](https://github.com/tscircuit/tscircuit.com/pull/727) | 🐙 Minor | imrishabh18 | Add the lock icon for private snippet |
| [#726](https://github.com/tscircuit/tscircuit.com/pull/726) | 🐙 Minor | imrishabh18 | Adds support for creating private packages in the fake-snippets-api |

### [tscircuit/cli](https://github.com/tscircuit/cli)

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#104](https://github.com/tscircuit/cli/pull/104) | 🐙 Minor | imrishabh18 | Adds a --private flag to the push command to create private snippets. |

### [tscircuit/autorouting-cache-engine](https://github.com/tscircuit/autorouting-cache-engine)

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#7](https://github.com/tscircuit/autorouting-cache-engine/pull/7) | 🟣 | imrishabh18 | Add thickness as a property to normalize |

### [tscircuit/capacity-autorouter](https://github.com/tscircuit/capacity-autorouter)

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#45](https://github.com/tscircuit/capacity-autorouter/pull/45) | 🐳 Major | seveibar | The pull request allows straws to be connected if they are from different parents, and requires higher capacity when z availability differs between connected nodes. |
| [#42](https://github.com/tscircuit/capacity-autorouter/pull/42) | 🐳 Major | seveibar | Adds a simplified path solver JSON file with a source trace route. |

### [tscircuit/graphics-debug](https://github.com/tscircuit/graphics-debug)

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#37](https://github.com/tscircuit/graphics-debug/pull/37) | 🐙 Minor | seveibar | Adds a "stroke-width" attribute to the SVG elements in the rendered graphics, scaling the stroke width based on the matrix transformation. |
| [#39](https://github.com/tscircuit/graphics-debug/pull/39) | 🐙 Minor | seveibar | Fix type issues and add type checking in CI |
| [#38](https://github.com/tscircuit/graphics-debug/pull/38) | 🟣 | seveibar | Add support for zoomable stroke dash |

## Changes by Contributor

### [MustafaMulla29](https://github.com/MustafaMulla29)

| PR # | Impact | Description |
|------|--------|-------------|
| [#237](https://github.com/tscircuit/footprinter/pull/237) | 🐙 Minor | Implement VSSOP-10-0.5mm footprint |

### [krushnarout](https://github.com/krushnarout)

| PR # | Impact | Description |
|------|--------|-------------|
| [#169](https://github.com/tscircuit/easyeda-converter/pull/169) | 🐌 Tiny | Removes the "height" attribute from the "platedhole" element for "oval" or "pill" shaped plated holes. |

### [ArnavK-09](https://github.com/ArnavK-09)

| PR # | Impact | Description |
|------|--------|-------------|
| [#33](https://github.com/tscircuit/winterspec/pull/33) | 🐌 Tiny | Update the GitHub Actions used in the project to their latest versions. |

### [Anshgrover23](https://github.com/Anshgrover23)

| PR # | Impact | Description |
|------|--------|-------------|
| [#701](https://github.com/tscircuit/core/pull/701) | 🐌 Tiny | Adds the import path to the snapshot file names in the tests. |
| [#700](https://github.com/tscircuit/core/pull/700) | 🐌 Tiny | Move snapshot files to correct directory |

### [imrishabh18](https://github.com/imrishabh18)

| PR # | Impact | Description |
|------|--------|-------------|
| [#104](https://github.com/tscircuit/dsn-converter/pull/104) | 🐙 Minor | Add support for the `circle` shape for SMT pads and refactor the `processedComponents` file. |
| [#731](https://github.com/tscircuit/tscircuit.com/pull/731) | 🐙 Minor | Removes the fixed board dimensions for the module. |
| [#730](https://github.com/tscircuit/tscircuit.com/pull/730) | 🐙 Minor | Add a lock icon on the profile page to indicate if a snippet is private. |
| [#728](https://github.com/tscircuit/tscircuit.com/pull/728) | 🐙 Minor | Adds a dialog to choose package visibility (public or private) when creating a new snippet. |
| [#727](https://github.com/tscircuit/tscircuit.com/pull/727) | 🐙 Minor | Add the lock icon for private snippet |
| [#726](https://github.com/tscircuit/tscircuit.com/pull/726) | 🐙 Minor | Adds support for creating private packages in the fake-snippets-api |
| [#104](https://github.com/tscircuit/cli/pull/104) | 🐙 Minor | Adds a --private flag to the push command to create private snippets. |
| [#7](https://github.com/tscircuit/autorouting-cache-engine/pull/7) | 🟣 | Add thickness as a property to normalize |

### [seveibar](https://github.com/seveibar)

| PR # | Impact | Description |
|------|--------|-------------|
| [#45](https://github.com/tscircuit/capacity-autorouter/pull/45) | 🐳 Major | The pull request allows straws to be connected if they are from different parents, and requires higher capacity when z availability differs between connected nodes. |
| [#42](https://github.com/tscircuit/capacity-autorouter/pull/42) | 🐳 Major | Adds a simplified path solver JSON file with a source trace route. |
| [#37](https://github.com/tscircuit/graphics-debug/pull/37) | 🐙 Minor | Adds a "stroke-width" attribute to the SVG elements in the rendered graphics, scaling the stroke width based on the matrix transformation. |
| [#39](https://github.com/tscircuit/graphics-debug/pull/39) | 🐙 Minor | Fix type issues and add type checking in CI |
| [#38](https://github.com/tscircuit/graphics-debug/pull/38) | 🟣 | Add support for zoomable stroke dash |



<!-- END_CURRENT_WEEK -->
