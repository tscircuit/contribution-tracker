# contribution tracker

[contributions.tscircuit.com](https://contributions.tscircuit.com) ・ [tscircuit.com](https://tscircuit.com) ・ [Contribution Overviews](./contribution-overviews/) ・ [Changelogs](./changelogs/)

Generates weekly contribution overviews for tscircuit contributors. Check out all
the [contribution overviews here](./contribution-overviews/)
You can find AI-generated monthly changelogs in the [changelogs directory](./changelogs/)

- All PRs in the tscircuit org are scanned/summarized via an LLM
- The LLM classifies each Diff/PR as into a set of attributes for scoring
- All the PRs, summaries, and classifications are organized into charts and tables for [the website](https://contributions.tscircuit.com)

> Want to run locally? See the [Development Section](#development)

## Current Week

<!-- START_CURRENT_WEEK -->

# Contribution Overview 2026-02-24

The current week is shown below. There are 3 major sections:

- [Contributor Overview](#contributor-overview)
- [PRs by Repository](#prs-by-repository)
- [PRs by Contributor](#changes-by-contributor)
- [Scoring & Sponsorship Details](/docs/sponsorship-calculation-explanation.md)

## PRs by Repository

```mermaid
pie
    "tscircuit/tscircuit" : 32
    "tscircuit/tscircuit.com" : 8
    "tscircuit/eval" : 14
    "tscircuit/runframe" : 19
    "tscircuit/cli" : 30
    "tscircuit/circuit-json-to-kicad" : 6
    "tscircuit/circuit-to-canvas" : 4
    "tscircuit/hypergraph" : 14
    "tscircuit/find-convex-regions" : 2
    "tscircuit/high-density-a01" : 13
    "tscircuit/props" : 1
    "tscircuit/core" : 9
    "tscircuit/easyeda-converter" : 1
    "tscircuit/tscircuit-autorouter" : 10
    "tscircuit/3d-viewer" : 1
    "tscircuit/docs" : 3
    "tscircuit/solver-utils" : 1
    "tscircuit/contribution-tracker" : 4
    "tscircuit/agent-benchmarking-2026-02" : 1
    "tscircuit/kicad-to-circuit-json" : 4
    "tscircuit/svg.tscircuit.com" : 1
    "tscircuit/pcbburn.com" : 1
    "tscircuit/dataset-zero-obstacle-high-density-z01" : 2
```

## Contributor Overview

| Contributor | 🐳 Major | 🐙 Minor | 🐌 Tiny | ⭐ | Discussion Contributions |
|-------------|---------|---------|---------|-----|--------------------------|
| [seveibar](#seveibar) | 9 | 2 | 6 | ⭐⭐⭐ | 0🔹 0🔶 0💎 |
| [MustafaMulla29](#MustafaMulla29) | 1 | 4 | 6 | ⭐⭐ | 0🔹 0🔶 0💎 |
| [ShiboSoftwareDev](#ShiboSoftwareDev) | 1 | 3 | 1 | ⭐⭐ | 0🔹 0🔶 0💎 |
| [Abse2001](#Abse2001) | 3 | 2 | 0 | ⭐⭐ | 0🔹 0🔶 0💎 |
| [imrishabh18](#imrishabh18) | 0 | 5 | 5 | ⭐⭐ | 0🔹 0🔶 0💎 |
| [tscircuitbot](#tscircuitbot) | 0 | 0 | 113 | ⭐⭐ | 0🔹 0🔶 0💎 |
| [AnasSarkiz](#AnasSarkiz) | 3 | 0 | 0 | ⭐⭐ | 0🔹 0🔶 0💎 |
| [ArnavK-09](#ArnavK-09) | 2 | 0 | 2 | ⭐ | 0🔹 0🔶 0💎 |
| [techmannih](#techmannih) | 1 | 2 | 2 | ⭐ | 0🔹 0🔶 0💎 |
| [zalo](#zalo) | 2 | 1 | 0 | ⭐ | 0🔹 0🔶 0💎 |
| [rushabhcodes](#rushabhcodes) | 1 | 0 | 2 | ⭐ | 0🔹 0🔶 0💎 |
| [0hmX](#0hmX) | 1 | 0 | 1 | ⭐ | 0🔹 0🔶 0💎 |

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
| [Excellencedev](#Excellencedev) | 0 | 0 | 0 | 0 | 0 | 1 | 0 | 0 |
| [SolariSystems](#SolariSystems) | 0 | 0 | 0 | 0 | 0 | 2 | 0 | 0 |
| [tscircuitbot](#tscircuitbot) | 0 | 0 | 0 | 0 | 0 | 156 | 122 | 0 |
| [jdhruv1503](#jdhruv1503) | 0 | 0 | 0 | 0 | 0 | 4 | 0 | 0 |
| [ShiboSoftwareDev](#ShiboSoftwareDev) | 5 | 5 | 0 | 6 | 0 | 7 | 5 | 0 |
| [seveibar](#seveibar) | 1 | 0 | 0 | 31 | 0 | 24 | 18 | 0 |
| [dagangtj](#dagangtj) | 1 | 0 | 0 | 0 | 0 | 3 | 0 | 0 |
| [rkluis](#rkluis) | 0 | 0 | 0 | 0 | 0 | 1 | 0 | 0 |
| [MustafaMulla29](#MustafaMulla29) | 15 | 10 | 0 | 1 | 0 | 13 | 12 | 0 |
| [imrishabh18](#imrishabh18) | 6 | 3 | 0 | 4 | 0 | 11 | 10 | 0 |
| [Abse2001](#Abse2001) | 7 | 6 | 0 | 0 | 0 | 7 | 5 | 0 |
| [li224242](#li224242) | 0 | 0 | 0 | 0 | 0 | 3 | 0 | 0 |
| [769066112-ops](#769066112-ops) | 1 | 0 | 0 | 0 | 0 | 3 | 0 | 0 |
| [ArnavK-09](#ArnavK-09) | 4 | 3 | 0 | 0 | 0 | 4 | 4 | 0 |
| [rushabhcodes](#rushabhcodes) | 11 | 4 | 0 | 0 | 1 | 4 | 3 | 0 |
| [jarvis117molt-dot](#jarvis117molt-dot) | 0 | 0 | 0 | 0 | 0 | 1 | 0 | 0 |
| [techmannih](#techmannih) | 10 | 6 | 0 | 0 | 0 | 8 | 5 | 0 |
| [sungdark](#sungdark) | 0 | 0 | 0 | 0 | 0 | 1 | 0 | 0 |
| [Devesh36](#Devesh36) | 1 | 0 | 1 | 0 | 0 | 1 | 0 | 0 |
| [0hmX](#0hmX) | 3 | 3 | 0 | 2 | 0 | 7 | 3 | 0 |
| [AnasSarkiz](#AnasSarkiz) | 3 | 2 | 0 | 0 | 0 | 4 | 3 | 0 |
| [zalo](#zalo) | 8 | 2 | 0 | 0 | 0 | 4 | 3 | 0 |
| [abdul-09](#abdul-09) | 0 | 0 | 0 | 0 | 0 | 1 | 0 | 0 |

## Changes by Repository

### [tscircuit/tscircuit](https://github.com/tscircuit/tscircuit)


<details>
<summary>🐌 Tiny Contributions (32)</summary>

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#2365](https://github.com/tscircuit/tscircuit/pull/2365) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#2364](https://github.com/tscircuit/tscircuit/pull/2364) | 🐌 Tiny | tscircuitbot | Updates the tscircuitcli package to version 0.1.991 in the package.json file |
| [#2363](https://github.com/tscircuit/tscircuit/pull/2363) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#2362](https://github.com/tscircuit/tscircuit/pull/2362) | 🐌 Tiny | tscircuitbot | Updates the tscircuitcli package to version 0.1.990 in the package.json file |
| [#2361](https://github.com/tscircuit/tscircuit/pull/2361) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#2360](https://github.com/tscircuit/tscircuit/pull/2360) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#2359](https://github.com/tscircuit/tscircuit/pull/2359) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#2358](https://github.com/tscircuit/tscircuit/pull/2358) | 🐌 Tiny | tscircuitbot | Updates the tscircuitcli package to version 0.1.988 |
| [#2347](https://github.com/tscircuit/tscircuit/pull/2347) | 🐌 Tiny | tscircuitbot | Updates the tscircuitcli package to version 0.1.983 in the package.json file. |
| [#2345](https://github.com/tscircuit/tscircuit/pull/2345) | 🐌 Tiny | tscircuitbot | Updates the tscircuitcli package to version 0.1.982 in package.json |
| [#2349](https://github.com/tscircuit/tscircuit/pull/2349) | 🐌 Tiny | tscircuitbot | Updates the tscircuitcli package to version 0.1.984 in package.json |
| [#2355](https://github.com/tscircuit/tscircuit/pull/2355) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#2354](https://github.com/tscircuit/tscircuit/pull/2354) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#2348](https://github.com/tscircuit/tscircuit/pull/2348) | 🐌 Tiny | tscircuitbot | Updates the package version from 0.0.1374 to 0.0.1375 in package.json |
| [#2344](https://github.com/tscircuit/tscircuit/pull/2344) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#2346](https://github.com/tscircuit/tscircuit/pull/2346) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#2351](https://github.com/tscircuit/tscircuit/pull/2351) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#2356](https://github.com/tscircuit/tscircuit/pull/2356) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#2353](https://github.com/tscircuit/tscircuit/pull/2353) | 🐌 Tiny | tscircuitbot | Updates the version of several dependencies in the package.json file, including tscircuitcli, tscircuitcore, tscircuiteval, tscircuitprops, and tscircuitrunframe. |
| [#2352](https://github.com/tscircuit/tscircuit/pull/2352) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#2350](https://github.com/tscircuit/tscircuit/pull/2350) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#2339](https://github.com/tscircuit/tscircuit/pull/2339) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#2337](https://github.com/tscircuit/tscircuit/pull/2337) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#2332](https://github.com/tscircuit/tscircuit/pull/2332) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#2341](https://github.com/tscircuit/tscircuit/pull/2341) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#2331](https://github.com/tscircuit/tscircuit/pull/2331) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#2340](https://github.com/tscircuit/tscircuit/pull/2340) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#2334](https://github.com/tscircuit/tscircuit/pull/2334) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#2342](https://github.com/tscircuit/tscircuit/pull/2342) | 🐌 Tiny | tscircuitbot | Updates the package version from 0.0.1370 to 0.0.1371 in package.json |
| [#2343](https://github.com/tscircuit/tscircuit/pull/2343) | 🐌 Tiny | tscircuitbot | Updates the tscircuitcli package to version 0.1.981 in package.json |
| [#2336](https://github.com/tscircuit/tscircuit/pull/2336) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#2333](https://github.com/tscircuit/tscircuit/pull/2333) | 🐌 Tiny | tscircuitbot | Automated package update |

</details>

### [tscircuit/tscircuit.com](https://github.com/tscircuit/tscircuit.com)

| PR # | Impact | Rating | Contributor | Description |
|------|--------|--------|-------------|-------------|
| [#2855](https://github.com/tscircuit/tscircuit.com/pull/2855) | 🐳 Major | ⭐⭐⭐ | ArnavK-09 | Adds a ScrollToTopButton component to the release build detail and release detail pages, allowing users to scroll back to the top of the page easily. |
| [#2852](https://github.com/tscircuit/tscircuit.com/pull/2852) | 🐳 Major | ⭐⭐⭐ | ArnavK-09 | Adds a loading state to the refresh button for GitHub repositories, preventing multiple refresh requests while one is in progress. |

<details>
<summary>🐌 Tiny Contributions (6)</summary>

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#2859](https://github.com/tscircuit/tscircuit.com/pull/2859) | 🐌 Tiny | tscircuitbot | Updates the tscircuiteval package from version 0.0.659 to 0.0.660 |
| [#2858](https://github.com/tscircuit/tscircuit.com/pull/2858) | 🐌 Tiny | tscircuitbot | Updates the tscircuitrunframe package from version 0.0.1652 to 0.0.1654 |
| [#2856](https://github.com/tscircuit/tscircuit.com/pull/2856) | 🐌 Tiny | tscircuitbot | Updates the tscircuitrunframe package from version 0.0.1651 to 0.0.1652 |
| [#2857](https://github.com/tscircuit/tscircuit.com/pull/2857) | 🐌 Tiny | tscircuitbot | Updates the tscircuiteval package from version 0.0.658 to 0.0.659 |
| [#2860](https://github.com/tscircuit/tscircuit.com/pull/2860) | 🐌 Tiny | tscircuitbot | Updates the tscircuitrunframe package from version 0.0.1654 to 0.0.1655 |
| [#2853](https://github.com/tscircuit/tscircuit.com/pull/2853) | 🐌 Tiny | ArnavK-09 | Adds a mock GitHub installation entry to the database seeding process. |

</details>

### [tscircuit/eval](https://github.com/tscircuit/eval)


<details>
<summary>🐌 Tiny Contributions (14)</summary>

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#2123](https://github.com/tscircuit/eval/pull/2123) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#2122](https://github.com/tscircuit/eval/pull/2122) | 🐌 Tiny | tscircuitbot | Updates the version of the tscircuitcore package from 0.0.1061 to 0.0.1062 in package.json |
| [#2119](https://github.com/tscircuit/eval/pull/2119) | 🐌 Tiny | tscircuitbot | Updates the version of the tscircuitcore package from 0.0.1060 to 0.0.1061 in package.json |
| [#2117](https://github.com/tscircuit/eval/pull/2117) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#2120](https://github.com/tscircuit/eval/pull/2120) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#2116](https://github.com/tscircuit/eval/pull/2116) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#2111](https://github.com/tscircuit/eval/pull/2111) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#2112](https://github.com/tscircuit/eval/pull/2112) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#2105](https://github.com/tscircuit/eval/pull/2105) | 🐌 Tiny | tscircuitbot | Updates the version of the tscircuitcore package from 0.0.1055 to 0.0.1056 in package.json |
| [#2102](https://github.com/tscircuit/eval/pull/2102) | 🐌 Tiny | tscircuitbot | Updates the versions of several dependencies in the package.json file. |
| [#2109](https://github.com/tscircuit/eval/pull/2109) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#2108](https://github.com/tscircuit/eval/pull/2108) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#2106](https://github.com/tscircuit/eval/pull/2106) | 🐌 Tiny | tscircuitbot | Automated package update to version 0.0.656 |
| [#2103](https://github.com/tscircuit/eval/pull/2103) | 🐌 Tiny | tscircuitbot | Automated package update |

</details>

### [tscircuit/runframe](https://github.com/tscircuit/runframe)


<details>
<summary>🐌 Tiny Contributions (19)</summary>

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#2741](https://github.com/tscircuit/runframe/pull/2741) | 🐌 Tiny | tscircuitbot | Updates the tscircuit3d-viewer package from version 0.0.525 to 0.0.526 |
| [#2739](https://github.com/tscircuit/runframe/pull/2739) | 🐌 Tiny | tscircuitbot | Updates the circuit-json-to-kicad package version from 0.0.80 to 0.0.81 in package.json |
| [#2744](https://github.com/tscircuit/runframe/pull/2744) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#2745](https://github.com/tscircuit/runframe/pull/2745) | 🐌 Tiny | tscircuitbot | Updates the tscircuiteval package from version 0.0.659 to 0.0.660 in the package.json file. |
| [#2743](https://github.com/tscircuit/runframe/pull/2743) | 🐌 Tiny | tscircuitbot | Updates the tscircuiteval package to version 0.0.659 in the package.json file. |
| [#2742](https://github.com/tscircuit/runframe/pull/2742) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#2740](https://github.com/tscircuit/runframe/pull/2740) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#2746](https://github.com/tscircuit/runframe/pull/2746) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#2737](https://github.com/tscircuit/runframe/pull/2737) | 🐌 Tiny | tscircuitbot | Updates the circuit-json-to-kicad package from version 0.0.79 to 0.0.80 |
| [#2736](https://github.com/tscircuit/runframe/pull/2736) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#2735](https://github.com/tscircuit/runframe/pull/2735) | 🐌 Tiny | tscircuitbot | Updates the tscircuiteval package from version 0.0.657 to 0.0.658 |
| [#2734](https://github.com/tscircuit/runframe/pull/2734) | 🐌 Tiny | tscircuitbot | Updates the package version from v0.0.1649 to v0.0.1650 in package.json |
| [#2733](https://github.com/tscircuit/runframe/pull/2733) | 🐌 Tiny | tscircuitbot | Updates the tscircuiteval package to version 0.0.657 in the package.json file. |
| [#2732](https://github.com/tscircuit/runframe/pull/2732) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#2731](https://github.com/tscircuit/runframe/pull/2731) | 🐌 Tiny | tscircuitbot | Updates the tscircuiteval package to version 0.0.656 in the package.json file. |
| [#2726](https://github.com/tscircuit/runframe/pull/2726) | 🐌 Tiny | tscircuitbot | Updates the tscircuiteval package to version 0.0.655 in the package.json file. |
| [#2727](https://github.com/tscircuit/runframe/pull/2727) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#2730](https://github.com/tscircuit/runframe/pull/2730) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#2729](https://github.com/tscircuit/runframe/pull/2729) | 🐌 Tiny | tscircuitbot | Updates the circuit-json-to-kicad package version from 0.0.78 to 0.0.79 in package.json |

</details>

### [tscircuit/cli](https://github.com/tscircuit/cli)

| PR # | Impact | Rating | Contributor | Description |
|------|--------|--------|-------------|-------------|
| [#2125](https://github.com/tscircuit/cli/pull/2125) | 🐳 Major | ⭐⭐⭐ | seveibar | Adds options to the tsci import command to filter sources for component imports from JLCPCB or the tscircuit registry. |
| [#2132](https://github.com/tscircuit/cli/pull/2132) | 🐙 Minor | ⭐⭐ | MustafaMulla29 | Fetches built-in 3D models from a CDN and copies them to the KiCad librarys 3D models directory, while also handling local model paths appropriately. |
| [#2143](https://github.com/tscircuit/cli/pull/2143) | 🐙 Minor | ⭐⭐ | imrishabh18 | Prevents worker threads from rendering circuit.json and .circuit.json files as they are treated as prebuilt files. |
| [#2123](https://github.com/tscircuit/cli/pull/2123) | 🐙 Minor | ⭐⭐ | imrishabh18 | Adds structured logging before exiting the build process to provide clearer error messages and reasons for termination. |
| [#2117](https://github.com/tscircuit/cli/pull/2117) | 🐙 Minor | ⭐⭐ | imrishabh18 | Fixes the build process to ensure that only files matching the includeBoardFiles patterns are built, preventing unnecessary transpilation of unrelated files. |
| [#2103](https://github.com/tscircuit/cli/pull/2103) | 🐙 Minor | ⭐⭐ | imrishabh18 | Changes the build process to stop immediately upon encountering a fatal circuit generation error, preventing further processing of subsequent files. |

<details>
<summary>🐌 Tiny Contributions (24)</summary>

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#2144](https://github.com/tscircuit/cli/pull/2144) | 🐌 Tiny | tscircuitbot | Updates the package version from 0.1.990 to 0.1.991 in package.json |
| [#2142](https://github.com/tscircuit/cli/pull/2142) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#2138](https://github.com/tscircuit/cli/pull/2138) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#2134](https://github.com/tscircuit/cli/pull/2134) | 🐌 Tiny | tscircuitbot | Updates the tscircuitrunframe package to version 0.0.1654 in the package.json file. |
| [#2128](https://github.com/tscircuit/cli/pull/2128) | 🐌 Tiny | tscircuitbot | Automated README update with latest CLI usage output. |
| [#2129](https://github.com/tscircuit/cli/pull/2129) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#2136](https://github.com/tscircuit/cli/pull/2136) | 🐌 Tiny | tscircuitbot | Updates the tscircuitrunframe package from version 0.0.1654 to 0.0.1655 |
| [#2124](https://github.com/tscircuit/cli/pull/2124) | 🐌 Tiny | tscircuitbot | Updates the package version from v0.1.981 to v0.1.982 in package.json |
| [#2127](https://github.com/tscircuit/cli/pull/2127) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#2137](https://github.com/tscircuit/cli/pull/2137) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#2120](https://github.com/tscircuit/cli/pull/2120) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#2135](https://github.com/tscircuit/cli/pull/2135) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#2130](https://github.com/tscircuit/cli/pull/2130) | 🐌 Tiny | tscircuitbot | Updates the tscircuitrunframe package from version 0.0.1651 to 0.0.1652 |
| [#2131](https://github.com/tscircuit/cli/pull/2131) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#2113](https://github.com/tscircuit/cli/pull/2113) | 🐌 Tiny | tscircuitbot | Updates the tscircuitrunframe package from version 0.0.1648 to 0.0.1649 |
| [#2118](https://github.com/tscircuit/cli/pull/2118) | 🐌 Tiny | tscircuitbot | Updates the tscircuitrunframe package from version 0.0.1650 to 0.0.1651 |
| [#2111](https://github.com/tscircuit/cli/pull/2111) | 🐌 Tiny | tscircuitbot | Updates the tscircuitrunframe package from version 0.0.1646 to 0.0.1648 |
| [#2110](https://github.com/tscircuit/cli/pull/2110) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#2119](https://github.com/tscircuit/cli/pull/2119) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#2112](https://github.com/tscircuit/cli/pull/2112) | 🐌 Tiny | tscircuitbot | Updates the package version from 0.1.976 to 0.1.977 in package.json |
| [#2114](https://github.com/tscircuit/cli/pull/2114) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#2115](https://github.com/tscircuit/cli/pull/2115) | 🐌 Tiny | tscircuitbot | Updates the tscircuitrunframe package from version 0.0.1649 to 0.0.1650 |
| [#2141](https://github.com/tscircuit/cli/pull/2141) | 🐌 Tiny | imrishabh18 | Limits the number of worker threads to the number of files being processed to prevent unnecessary resource usage. |
| [#2139](https://github.com/tscircuit/cli/pull/2139) | 🐌 Tiny | imrishabh18 | Adds truthy fallbacks for various build options in the CI build process to ensure defaults are applied correctly. |

</details>

### [tscircuit/circuit-json-to-kicad](https://github.com/tscircuit/circuit-json-to-kicad)

| PR # | Impact | Rating | Contributor | Description |
|------|--------|--------|-------------|-------------|
| [#152](https://github.com/tscircuit/circuit-json-to-kicad/pull/152) | 🐙 Minor | ⭐⭐ | MustafaMulla29 | Fixes symbol-footprint classification for components that have both builtin and custom footprints, ensuring the correct symbol is assigned to the user library. |
| [#150](https://github.com/tscircuit/circuit-json-to-kicad/pull/150) | 🐙 Minor | ⭐⭐ | MustafaMulla29 | Adds fallback to modelcdn URLs for builtin 3D models when no explicit model is specified and a builtin footprint is present |

<details>
<summary>🐌 Tiny Contributions (4)</summary>

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#153](https://github.com/tscircuit/circuit-json-to-kicad/pull/153) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#149](https://github.com/tscircuit/circuit-json-to-kicad/pull/149) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#151](https://github.com/tscircuit/circuit-json-to-kicad/pull/151) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#148](https://github.com/tscircuit/circuit-json-to-kicad/pull/148) | 🐌 Tiny | MustafaMulla29 | Updates the tscircuit dependency version and adjusts related tests to accommodate changes in the library. |

</details>

### [tscircuit/circuit-to-canvas](https://github.com/tscircuit/circuit-to-canvas)

| PR # | Impact | Rating | Contributor | Description |
|------|--------|--------|-------------|-------------|
| [#185](https://github.com/tscircuit/circuit-to-canvas/pull/185) | 🐙 Minor | ⭐⭐ | Abse2001 | Changes the rendering of top and bottom copper pours to use layer opacity instead of separate colors, improving visual consistency. |
| [#187](https://github.com/tscircuit/circuit-to-canvas/pull/187) | 🐙 Minor | ⭐⭐ | Abse2001 | Adds geometry-aware soldermask cutouts for covered copper pours, allowing for accurate rendering of openings in the soldermask layer based on the underlying copper pour geometry. |

<details>
<summary>🐌 Tiny Contributions (2)</summary>

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#186](https://github.com/tscircuit/circuit-to-canvas/pull/186) | 🐌 Tiny | tscircuitbot | Updates the package version from 0.0.81 to 0.0.82 in package.json |
| [#188](https://github.com/tscircuit/circuit-to-canvas/pull/188) | 🐌 Tiny | tscircuitbot | Automated package update |

</details>

### [tscircuit/hypergraph](https://github.com/tscircuit/hypergraph)

| PR # | Impact | Rating | Contributor | Description |
|------|--------|--------|-------------|-------------|
| [#88](https://github.com/tscircuit/hypergraph/pull/88) | 🐳 Major | ⭐⭐⭐ | ShiboSoftwareDev | Refactors via region topology for improved net routing efficiency by optimizing via placements and segment connections in the PCB layout. |
| [#86](https://github.com/tscircuit/hypergraph/pull/86) | 🐳 Major | ⭐⭐⭐ | Abse2001 | Adds a new 5 net via topology to enhance the performance of the solver in the circuit design process. |
| [#84](https://github.com/tscircuit/hypergraph/pull/84) | 🐳 Major | ⭐⭐⭐ | Abse2001 | Optimizes the default via topology to enhance solve performance in the circuit design process. |
| [#79](https://github.com/tscircuit/hypergraph/pull/79) | 🐳 Major | ⭐⭐⭐ | seveibar | Refactors benchmarking for 0603 by removing redundant topologies, fixing candidate caching, and introducing new benchmarking utilities. |
| [#76](https://github.com/tscircuit/hypergraph/pull/76) | 🐳 Major | ⭐⭐⭐ | AnasSarkiz | Fixes via-region over-porting by limiting via ports to a maximum of 4 sides and resolves solved routes into top stubs and tile-scoped bottom segments for improved trace visualization. |

<details>
<summary>🐌 Tiny Contributions (9)</summary>

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#92](https://github.com/tscircuit/hypergraph/pull/92) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#89](https://github.com/tscircuit/hypergraph/pull/89) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#85](https://github.com/tscircuit/hypergraph/pull/85) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#87](https://github.com/tscircuit/hypergraph/pull/87) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#77](https://github.com/tscircuit/hypergraph/pull/77) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#80](https://github.com/tscircuit/hypergraph/pull/80) | 🐌 Tiny | tscircuitbot | Updates the package version from 0.0.36 to 0.0.37 in package.json |
| [#82](https://github.com/tscircuit/hypergraph/pull/82) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#91](https://github.com/tscircuit/hypergraph/pull/91) | 🐌 Tiny | ShiboSoftwareDev | Updates the tscircuitfind-convex-regions package to version 0.0.9, which includes improvements for constrained Delaunay triangulation functionality. |
| [#81](https://github.com/tscircuit/hypergraph/pull/81) | 🐌 Tiny | seveibar | Adds a GitHub Actions workflow for benchmarking code on push and PR comments, including artifact uploads and result reporting. |

</details>

### [tscircuit/find-convex-regions](https://github.com/tscircuit/find-convex-regions)

| PR # | Impact | Rating | Contributor | Description |
|------|--------|--------|-------------|-------------|
| [#12](https://github.com/tscircuit/find-convex-regions/pull/12) | 🐳 Major | ⭐⭐⭐ | zalo | Summary Adds usePolyanyaMerge: boolean option (default true)  Polyanya two-phase merge replaces greedy concavity merge as default New mergeCellsPolyanya() function implements the Polyanya meshmerger algorithm Adds unionObstacleBoundaries()  unions overlapping obstacle boundaries via flatten-jscore before constraint edge generation Fixes filterTris gating: always runs when obstacles are present (previously skipped when no edge crossings detected, causing invalid triangles with contained obstacles) Adds resolveConstraintCrossings() as safety net for any remaining crossing constraint edges after union Ports resolveConstraintCrossings to polyanya-ts repo to fix overlapping obstacles producing 0 triangles 9 new Polyanya merge tests  9 new obstacle union tests (48 total) 2 new Cosmos fixtures for overlapping obstacle scenarios (10 presets) Test files reorganized into tests directory Version bumped to 0.1.0  Polyanya Merge Algorithm Unlike the existing greedy concavity-bounded merge which picks the lowest-concavity merge each round (O(n) per iteration, up to 800 iterations), the Polyanya merge has two phases: Phase 1  Dead-end elimination: Cells with exactly one traversable neighbor are unconditionally merged into their sole neighbor. These are pathfinding-useless topology that only add node expansions with no alternative route. Phase 2  Max-area priority queue: A max-heap keyed on combined area greedily merges the largest pair of adjacent convex cells. After each merge, only affected neighbors are re-evaluated. This produces the fewest, largest strictly-convex regions. Both phases use O(1) convexity checks (two cross products at junction vertices) rather than full convex-hull  concavity-depth computation per merge candidate.  Overlapping Obstacle Fixes Before constraint edges are generated, all obstacle boundary rings are collected and passed through unionObstacleBoundaries(), which uses flatten-jscore boolean operations to merge overlapping polygons. This prevents: Crossing constraint edges that confuse CDT Contained obstacles generating invalid interior triangles Transitive overlaps (AB, BC) being missed filterTris now always runs when any obstacles are present (previously gated on hadCrossings, which missed fully-contained obstacles).  Benchmark: merge step only (CDT  staggered rects, 5-run avg)  Config  Rects  Triangles  Greedy merge  Polyanya merge  Speedup  ---------------------------------------------------------------  4x4  16  134  38 regions (43.6ms)  45 regions (4.4ms)  10.0x   8x8  64  422  147 regions (260ms)  148 regions (28ms)  9.3x   12x12  144  902  317 regions (1.4s)  309 regions (182ms)  7.9x   16x16  256  1574  774 regions (3.1s)  532 regions (462ms)  6.6x   20x20  400  2438  1638 regions (5.0s)  815 regions (1.2s)  4.2x   25x25  625  3788  2988 regions (8.8s)  1269 regions (3.3s)  2.6x   Test plan x All existing tests pass  18 new tests (48 total) x Polyanya merge produces strictly convex regions across all test configs x Total area preserved exactly (shoelace formula comparison) x Overlappingcontained obstacles produce valid triangulations x Polygon union correctly merges overlapping, contained, and transitive overlaps x Build succeeds with tsup --dts --format esm x polyanya-ts overlapping obstacle tests pass (previously 0 triangles)  Generated with Claude Code(https:claude.comclaude-code) |

<details>
<summary>🐌 Tiny Contributions (1)</summary>

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#13](https://github.com/tscircuit/find-convex-regions/pull/13) | 🐌 Tiny | tscircuitbot | Automated package update |

</details>

### [tscircuit/high-density-a01](https://github.com/tscircuit/high-density-a01)

| PR # | Impact | Rating | Contributor | Description |
|------|--------|--------|-------------|-------------|
| [#10](https://github.com/tscircuit/high-density-a01/pull/10) | 🐳 Major | ⭐⭐⭐ | seveibar | Add sample003 and its edge case to improve routing by allowing root connection overlap and adjusting via margins from borders. |
| [#6](https://github.com/tscircuit/high-density-a01/pull/6) | 🐳 Major | ⭐⭐⭐ | seveibar | Removes the WebAssembly test and improves the algorithm by iterating on sample002, specifically enhancing the decay penalty map and Euclidean distance calculations. |
| [#2](https://github.com/tscircuit/high-density-a01/pull/2) | 🐳 Major | ⭐⭐⭐ | seveibar | Optimizes the HighDensitySolverA01 algorithm to achieve a 40x speed increase in TypeScript execution. |

<details>
<summary>🐌 Tiny Contributions (10)</summary>

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#13](https://github.com/tscircuit/high-density-a01/pull/13) | 🐌 Tiny | tscircuitbot | Updates the package version from 0.0.8 to 0.0.9 in package.json |
| [#11](https://github.com/tscircuit/high-density-a01/pull/11) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#9](https://github.com/tscircuit/high-density-a01/pull/9) | 🐌 Tiny | tscircuitbot | Updates the package version from 0.0.6 to 0.0.7 in package.json |
| [#8](https://github.com/tscircuit/high-density-a01/pull/8) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#7](https://github.com/tscircuit/high-density-a01/pull/7) | 🐌 Tiny | tscircuitbot | Updates the package version from 0.0.4 to 0.0.5 in package.json |
| [#5](https://github.com/tscircuit/high-density-a01/pull/5) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#4](https://github.com/tscircuit/high-density-a01/pull/4) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#3](https://github.com/tscircuit/high-density-a01/pull/3) | 🐌 Tiny | tscircuitbot | Automated package update |
| [#12](https://github.com/tscircuit/high-density-a01/pull/12) | 🐌 Tiny | seveibar | Adds a new sample dataset and corresponding test for the HighDensitySolverA01 component. |
| [#1](https://github.com/tscircuit/high-density-a01/pull/1) | 🐌 Tiny | seveibar | Add a profiling script to measure solver runtime on sample fixtures, allowing easy benchmarking and extension with additional samples. |

</details>

### [tscircuit/props](https://github.com/tscircuit/props)

| PR # | Impact | Rating | Contributor | Description |
|------|--------|--------|-------------|-------------|
| [#605](https://github.com/tscircuit/props/pull/605) | 🐙 Minor | ⭐⭐ | ShiboSoftwareDev | Adds a new boolean property _subcircuitCachingEnabled to the PanelProps interface, allowing for caching control in subcircuits. |

### [tscircuit/core](https://github.com/tscircuit/core)

| PR # | Impact | Rating | Contributor | Description |
|------|--------|--------|-------------|-------------|
| [#1977](https://github.com/tscircuit/core/pull/1977) | 🐳 Major | ⭐⭐⭐ | MustafaMulla29 | Fixes symbol bounds calculation to include ports, ensuring the symbol fits within the specified width and height. |
| [#1971](https://github.com/tscircuit/core/pull/1971) | 🐳 Major | ⭐⭐⭐ | seveibar | Updates the autorouter to support new 0603 routing specifications and adjusts related test fixtures accordingly. |
| [#1978](https://github.com/tscircuit/core/pull/1978) | 🐙 Minor | ⭐⭐ | ShiboSoftwareDev | Adds support for the _subcircuitCachingEnabled flag to enhance caching behavior for panels and subpanels in the rendering process. |
| [#1970](https://github.com/tscircuit/core/pull/1970) | 🐙 Minor | ⭐⭐ | ShiboSoftwareDev | Enables caching of subcircuits for boards to improve rendering performance by reusing identical board configurations. |
| [#1973](https://github.com/tscircuit/core/pull/1973) | 🐙 Minor | ⭐⭐ | MustafaMulla29 | Fixes the issue where port stem lengths were being incorrectly stretched during symbol resizing, ensuring they remain at the user-specified length. |
| [#1979](https://github.com/tscircuit/core/pull/1979) | 🐙 Minor | ⭐⭐ | seveibar | Adds examples for pcbSx and fixes the handling of pcbX and pcbY properties in silkscreen text rendering. |
| [#1969](https://github.com/tscircuit/core/pull/1969) | 🐙 Minor | ⭐⭐ | imrishabh18 | Fixes the issue where the size of the schematic component does not change correctly when the component is rotated. |

<details>
<summary>🐌 Tiny Contributions (2)</summary>

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#1974](https://github.com/tscircuit/core/pull/1974) | 🐌 Tiny | imrishabh18 | Adds tests to reproduce the issue where pcbFlex does not consider the parent width and height for spacing in the layout. |
| [#1972](https://github.com/tscircuit/core/pull/1972) | 🐌 Tiny | imrishabh18 | Adds a GitHub Actions workflow to automatically update and commit snapshot tests to a specified branch. |

</details>

### [tscircuit/easyeda-converter](https://github.com/tscircuit/easyeda-converter)


<details>
<summary>🐌 Tiny Contributions (1)</summary>

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#347](https://github.com/tscircuit/easyeda-converter/pull/347) | 🐌 Tiny | MustafaMulla29 | This pull request adds a reproduction for the issue related to the incorrect z position offset of the model. It includes a new test asset that demonstrates the problem, allowing for easier debugging and verification of the fix. |

</details>

### [tscircuit/tscircuit-autorouter](https://github.com/tscircuit/tscircuit-autorouter)

| PR # | Impact | Rating | Contributor | Description |
|------|--------|--------|-------------|-------------|
| [#583](https://github.com/tscircuit/tscircuit-autorouter/pull/583) | 🐳 Major | ⭐⭐⭐ | seveibar | Integrates the HighDensitySolverA01 from the tscircuithigh-density-a01 package into the autorouting system, enhancing the solver capabilities with increased iteration limits and new routing options. |
| [#585](https://github.com/tscircuit/tscircuit-autorouter/pull/585) | 🐳 Major | ⭐⭐⭐ | 0hmX | Adds a new solver for handling cramped port points in autorouting, improving the routing algorithms ability to manage tight spaces. |
| [#587](https://github.com/tscircuit/tscircuit-autorouter/pull/587) | 🐳 Major | ⭐⭐⭐ | AnasSarkiz | Fixes incorrect intra-node via selection by using region-scoped nearest vias and actual bottom-layer paths, eliminating misattributed via transitions. |
| [#592](https://github.com/tscircuit/tscircuit-autorouter/pull/592) | 🐙 Minor | ⭐⭐ | seveibar | This pull request changes the minimum via diameter from 0.6mm to 0.3mm in various autorouting pipeline files. This change is expected to allow for tighter routing and potentially more efficient designs. |

<details>
<summary>🐌 Tiny Contributions (6)</summary>

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#597](https://github.com/tscircuit/tscircuit-autorouter/pull/597) | 🐌 Tiny | MustafaMulla29 | Add a benchmark script to run benchmarks locally and update the GitHub Actions workflow to display results from both the pull request and the main branch. |
| [#595](https://github.com/tscircuit/tscircuit-autorouter/pull/595) | 🐌 Tiny | MustafaMulla29 | Run all solvers in parallel by default when no specific solver name is provided, and format the output results in a table for better readability. |
| [#594](https://github.com/tscircuit/tscircuit-autorouter/pull/594) | 🐌 Tiny | MustafaMulla29 | Fixes an issue where the benchmark command was not triggered correctly if the comment did not start with benchmark |
| [#586](https://github.com/tscircuit/tscircuit-autorouter/pull/586) | 🐌 Tiny | MustafaMulla29 | Fixes the benchmarking workflow for pull requests from forked repositories by adjusting the timeout and checkout reference. |
| [#591](https://github.com/tscircuit/tscircuit-autorouter/pull/591) | 🐌 Tiny | seveibar | Updates test snapshots for the high-density solver with dip16-crossing data to reflect recent changes in the implementation. |
| [#590](https://github.com/tscircuit/tscircuit-autorouter/pull/590) | 🐌 Tiny | 0hmX | Increases the timeout for the benchmark workflow from 30 minutes to 360 minutes to allow longer-running benchmarks to complete successfully. |

</details>

### [tscircuit/3d-viewer](https://github.com/tscircuit/3d-viewer)

| PR # | Impact | Rating | Contributor | Description |
|------|--------|--------|-------------|-------------|
| [#714](https://github.com/tscircuit/3d-viewer/pull/714) | 🐳 Major | ⭐⭐⭐ | Abse2001 | https:3d-viewer-git-fork-abse2001-main-tscircuit.vercel.app?pathstorycomponents-copperpour--default https:3d-viewer-git-fork-abse2001-main-tscircuit.vercel.app?pathstorycomponents-copperpourconnectedcomponents--default https:3d-viewer-git-fork-abse2001-main-tscircuit.vercel.app?pathstorycopperpour-core-test--copperpour-core-test-story |

### [tscircuit/docs](https://github.com/tscircuit/docs)

| PR # | Impact | Rating | Contributor | Description |
|------|--------|--------|-------------|-------------|
| [#479](https://github.com/tscircuit/docs/pull/479) | 🐳 Major | ⭐⭐⭐ | seveibar | Documents the package files list and download endpoints in the tscircuit registry API, providing detailed usage instructions and examples. |

<details>
<summary>🐌 Tiny Contributions (2)</summary>

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#480](https://github.com/tscircuit/docs/pull/480) | 🐌 Tiny | seveibar | Removes legacy bounty-specific guidance and links from the sponsorship page, focusing solely on contributor sponsorships. |
| [#477](https://github.com/tscircuit/docs/pull/477) | 🐌 Tiny | rushabhcodes | This pull request adds new documentation for the schematictable  element, providing a comprehensive overview and usage guide for creating tabular data in schematic diagrams. |

</details>

### [tscircuit/solver-utils](https://github.com/tscircuit/solver-utils)

| PR # | Impact | Rating | Contributor | Description |
|------|--------|--------|-------------|-------------|
| [#19](https://github.com/tscircuit/solver-utils/pull/19) | 🐳 Major | ⭐⭐⭐ | seveibar | Adds more granular animation speed options and allows multiple solver steps per timer tick for faster visual playback and debugging. |

### [tscircuit/contribution-tracker](https://github.com/tscircuit/contribution-tracker)

| PR # | Impact | Rating | Contributor | Description |
|------|--------|--------|-------------|-------------|
| [#313](https://github.com/tscircuit/contribution-tracker/pull/313) | 🐳 Major | ⭐⭐⭐ | rushabhcodes | This pull request adds support for selecting and viewing contribution data by week in the frontend, allowing users to choose from available weeks using a dropdown in the header, with the displayed data updating accordingly. |

<details>
<summary>🐌 Tiny Contributions (3)</summary>

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#300](https://github.com/tscircuit/contribution-tracker/pull/300) | 🐌 Tiny | seveibar | Updates maintainer roles for Abse2001 and AnasSarkiz in the maintainers list. |
| [#315](https://github.com/tscircuit/contribution-tracker/pull/315) | 🐌 Tiny | ArnavK-09 | Updates the contributor graph based on week selection and refactors the code for better readability and performance. |
| [#312](https://github.com/tscircuit/contribution-tracker/pull/312) | 🐌 Tiny | rushabhcodes | Refactors codebase to use domain-specific naming instead of generic terms like data, info, value, param. Also fixed redundant filtering logic and removed dead code. |

</details>

### [tscircuit/agent-benchmarking-2026-02](https://github.com/tscircuit/agent-benchmarking-2026-02)


<details>
<summary>🐌 Tiny Contributions (1)</summary>

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#1](https://github.com/tscircuit/agent-benchmarking-2026-02/pull/1) | 🐌 Tiny | imrishabh18 | Updates the glob pattern to include circuit.json files as prebuild files in the configuration. |

</details>

### [tscircuit/kicad-to-circuit-json](https://github.com/tscircuit/kicad-to-circuit-json)

| PR # | Impact | Rating | Contributor | Description |
|------|--------|--------|-------------|-------------|
| [#36](https://github.com/tscircuit/kicad-to-circuit-json/pull/36) | 🐳 Major | ⭐⭐⭐ | techmannih | This pull request introduces support for the gr_poly and gr_circle graphics primitives in the footprint processing stage of the KiCad to Circuit JSON conversion. It enhances the ability to handle complex shapes in PCB designs by allowing the use of polygon and circle shapes in surface mount pads. The changes include modifications to the pad processing logic to accommodate these new shapes, ensuring that they are correctly transformed and inserted into the database. |
| [#38](https://github.com/tscircuit/kicad-to-circuit-json/pull/38) | 🐙 Minor | ⭐⭐ | techmannih | Removes incorrect logic that swapped dimensions for rotated oval pads, ensuring accurate representation of pad sizes. |

<details>
<summary>🐌 Tiny Contributions (2)</summary>

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#37](https://github.com/tscircuit/kicad-to-circuit-json/pull/37) | 🐌 Tiny | techmannih | Enhances type safety for footprint graphic elements by replacing any types with explicit KiCad types in the process-graphics module. |
| [#35](https://github.com/tscircuit/kicad-to-circuit-json/pull/35) | 🐌 Tiny | techmannih | This pull request introduces support for the fp_poly elements in footprints, allowing for the creation of polygon shapes in the PCB silkscreen layer. The changes include modifications to the processFootprintGraphics function to handle fp_poly elements and a new function createFootprintPoly to manage the creation of these polygons. This enhancement is expected to improve the representation of complex shapes in PCB designs. |

</details>

### [tscircuit/svg.tscircuit.com](https://github.com/tscircuit/svg.tscircuit.com)

| PR # | Impact | Rating | Contributor | Description |
|------|--------|--------|-------------|-------------|
| [#1051](https://github.com/tscircuit/svg.tscircuit.com/pull/1051) | 🐙 Minor | ⭐⭐ | techmannih | Adds a test for rendering translucent 3D CAD models, ensuring correct output and functionality. |

### [tscircuit/pcbburn.com](https://github.com/tscircuit/pcbburn.com)

| PR # | Impact | Rating | Contributor | Description |
|------|--------|--------|-------------|-------------|
| [#78](https://github.com/tscircuit/pcbburn.com/pull/78) | 🐳 Major | ⭐⭐⭐ | AnasSarkiz | Adds an interactive layer selector UI in the PreviewCanvas, allowing users to toggle between top and bottom layers in real-time, with persistent layer state and improved default rendering for multi-layer boards. |

### [tscircuit/dataset-zero-obstacle-high-density-z01](https://github.com/tscircuit/dataset-zero-obstacle-high-density-z01)

| PR # | Impact | Rating | Contributor | Description |
|------|--------|--------|-------------|-------------|
| [#2](https://github.com/tscircuit/dataset-zero-obstacle-high-density-z01/pull/2) | 🐳 Major | ⭐⭐⭐ | zalo | Adds a complete set of scripts for dataset creation, training, deployment, and inference for fine-tuning the Flux 2 Klein 4B model as a PCB trace router, including adaptations from the morphmaker.ai pipeline. |
| [#3](https://github.com/tscircuit/dataset-zero-obstacle-high-density-z01/pull/3) | 🐙 Minor | ⭐⭐ | zalo | Fetches each sample individually by offset to access any index in the test set, adding samples at indices 10 and 50 for more variety. |

## Changes by Contributor

### [tscircuitbot](https://github.com/tscircuitbot)


<details>
<summary>🐌 Tiny Contributions (113)</summary>

| PR # | Impact | Description |
|------|--------|-------------|
| [#2365](https://github.com/tscircuit/tscircuit/pull/2365) | 🐌 Tiny | Automated package update |
| [#2364](https://github.com/tscircuit/tscircuit/pull/2364) | 🐌 Tiny | Updates the tscircuitcli package to version 0.1.991 in the package.json file |
| [#2363](https://github.com/tscircuit/tscircuit/pull/2363) | 🐌 Tiny | Automated package update |
| [#2362](https://github.com/tscircuit/tscircuit/pull/2362) | 🐌 Tiny | Updates the tscircuitcli package to version 0.1.990 in the package.json file |
| [#2361](https://github.com/tscircuit/tscircuit/pull/2361) | 🐌 Tiny | Automated package update |
| [#2360](https://github.com/tscircuit/tscircuit/pull/2360) | 🐌 Tiny | Automated package update |
| [#2359](https://github.com/tscircuit/tscircuit/pull/2359) | 🐌 Tiny | Automated package update |
| [#2358](https://github.com/tscircuit/tscircuit/pull/2358) | 🐌 Tiny | Updates the tscircuitcli package to version 0.1.988 |
| [#2347](https://github.com/tscircuit/tscircuit/pull/2347) | 🐌 Tiny | Updates the tscircuitcli package to version 0.1.983 in the package.json file. |
| [#2345](https://github.com/tscircuit/tscircuit/pull/2345) | 🐌 Tiny | Updates the tscircuitcli package to version 0.1.982 in package.json |
| [#2349](https://github.com/tscircuit/tscircuit/pull/2349) | 🐌 Tiny | Updates the tscircuitcli package to version 0.1.984 in package.json |
| [#2355](https://github.com/tscircuit/tscircuit/pull/2355) | 🐌 Tiny | Automated package update |
| [#2354](https://github.com/tscircuit/tscircuit/pull/2354) | 🐌 Tiny | Automated package update |
| [#2348](https://github.com/tscircuit/tscircuit/pull/2348) | 🐌 Tiny | Updates the package version from 0.0.1374 to 0.0.1375 in package.json |
| [#2344](https://github.com/tscircuit/tscircuit/pull/2344) | 🐌 Tiny | Automated package update |
| [#2346](https://github.com/tscircuit/tscircuit/pull/2346) | 🐌 Tiny | Automated package update |
| [#2351](https://github.com/tscircuit/tscircuit/pull/2351) | 🐌 Tiny | Automated package update |
| [#2356](https://github.com/tscircuit/tscircuit/pull/2356) | 🐌 Tiny | Automated package update |
| [#2353](https://github.com/tscircuit/tscircuit/pull/2353) | 🐌 Tiny | Updates the version of several dependencies in the package.json file, including tscircuitcli, tscircuitcore, tscircuiteval, tscircuitprops, and tscircuitrunframe. |
| [#2352](https://github.com/tscircuit/tscircuit/pull/2352) | 🐌 Tiny | Automated package update |
| [#2350](https://github.com/tscircuit/tscircuit/pull/2350) | 🐌 Tiny | Automated package update |
| [#2339](https://github.com/tscircuit/tscircuit/pull/2339) | 🐌 Tiny | Automated package update |
| [#2337](https://github.com/tscircuit/tscircuit/pull/2337) | 🐌 Tiny | Automated package update |
| [#2332](https://github.com/tscircuit/tscircuit/pull/2332) | 🐌 Tiny | Automated package update |
| [#2341](https://github.com/tscircuit/tscircuit/pull/2341) | 🐌 Tiny | Automated package update |
| [#2331](https://github.com/tscircuit/tscircuit/pull/2331) | 🐌 Tiny | Automated package update |
| [#2340](https://github.com/tscircuit/tscircuit/pull/2340) | 🐌 Tiny | Automated package update |
| [#2334](https://github.com/tscircuit/tscircuit/pull/2334) | 🐌 Tiny | Automated package update |
| [#2342](https://github.com/tscircuit/tscircuit/pull/2342) | 🐌 Tiny | Updates the package version from 0.0.1370 to 0.0.1371 in package.json |
| [#2343](https://github.com/tscircuit/tscircuit/pull/2343) | 🐌 Tiny | Updates the tscircuitcli package to version 0.1.981 in package.json |
| [#2336](https://github.com/tscircuit/tscircuit/pull/2336) | 🐌 Tiny | Automated package update |
| [#2333](https://github.com/tscircuit/tscircuit/pull/2333) | 🐌 Tiny | Automated package update |
| [#2859](https://github.com/tscircuit/tscircuit.com/pull/2859) | 🐌 Tiny | Updates the tscircuiteval package from version 0.0.659 to 0.0.660 |
| [#2858](https://github.com/tscircuit/tscircuit.com/pull/2858) | 🐌 Tiny | Updates the tscircuitrunframe package from version 0.0.1652 to 0.0.1654 |
| [#2856](https://github.com/tscircuit/tscircuit.com/pull/2856) | 🐌 Tiny | Updates the tscircuitrunframe package from version 0.0.1651 to 0.0.1652 |
| [#2857](https://github.com/tscircuit/tscircuit.com/pull/2857) | 🐌 Tiny | Updates the tscircuiteval package from version 0.0.658 to 0.0.659 |
| [#2860](https://github.com/tscircuit/tscircuit.com/pull/2860) | 🐌 Tiny | Updates the tscircuitrunframe package from version 0.0.1654 to 0.0.1655 |
| [#2123](https://github.com/tscircuit/eval/pull/2123) | 🐌 Tiny | Automated package update |
| [#2122](https://github.com/tscircuit/eval/pull/2122) | 🐌 Tiny | Updates the version of the tscircuitcore package from 0.0.1061 to 0.0.1062 in package.json |
| [#2119](https://github.com/tscircuit/eval/pull/2119) | 🐌 Tiny | Updates the version of the tscircuitcore package from 0.0.1060 to 0.0.1061 in package.json |
| [#2117](https://github.com/tscircuit/eval/pull/2117) | 🐌 Tiny | Automated package update |
| [#2120](https://github.com/tscircuit/eval/pull/2120) | 🐌 Tiny | Automated package update |
| [#2116](https://github.com/tscircuit/eval/pull/2116) | 🐌 Tiny | Automated package update |
| [#2111](https://github.com/tscircuit/eval/pull/2111) | 🐌 Tiny | Automated package update |
| [#2112](https://github.com/tscircuit/eval/pull/2112) | 🐌 Tiny | Automated package update |
| [#2105](https://github.com/tscircuit/eval/pull/2105) | 🐌 Tiny | Updates the version of the tscircuitcore package from 0.0.1055 to 0.0.1056 in package.json |
| [#2102](https://github.com/tscircuit/eval/pull/2102) | 🐌 Tiny | Updates the versions of several dependencies in the package.json file. |
| [#2109](https://github.com/tscircuit/eval/pull/2109) | 🐌 Tiny | Automated package update |
| [#2108](https://github.com/tscircuit/eval/pull/2108) | 🐌 Tiny | Automated package update |
| [#2106](https://github.com/tscircuit/eval/pull/2106) | 🐌 Tiny | Automated package update to version 0.0.656 |
| [#2103](https://github.com/tscircuit/eval/pull/2103) | 🐌 Tiny | Automated package update |
| [#2741](https://github.com/tscircuit/runframe/pull/2741) | 🐌 Tiny | Updates the tscircuit3d-viewer package from version 0.0.525 to 0.0.526 |
| [#2739](https://github.com/tscircuit/runframe/pull/2739) | 🐌 Tiny | Updates the circuit-json-to-kicad package version from 0.0.80 to 0.0.81 in package.json |
| [#2744](https://github.com/tscircuit/runframe/pull/2744) | 🐌 Tiny | Automated package update |
| [#2745](https://github.com/tscircuit/runframe/pull/2745) | 🐌 Tiny | Updates the tscircuiteval package from version 0.0.659 to 0.0.660 in the package.json file. |
| [#2743](https://github.com/tscircuit/runframe/pull/2743) | 🐌 Tiny | Updates the tscircuiteval package to version 0.0.659 in the package.json file. |
| [#2742](https://github.com/tscircuit/runframe/pull/2742) | 🐌 Tiny | Automated package update |
| [#2740](https://github.com/tscircuit/runframe/pull/2740) | 🐌 Tiny | Automated package update |
| [#2746](https://github.com/tscircuit/runframe/pull/2746) | 🐌 Tiny | Automated package update |
| [#2737](https://github.com/tscircuit/runframe/pull/2737) | 🐌 Tiny | Updates the circuit-json-to-kicad package from version 0.0.79 to 0.0.80 |
| [#2736](https://github.com/tscircuit/runframe/pull/2736) | 🐌 Tiny | Automated package update |
| [#2735](https://github.com/tscircuit/runframe/pull/2735) | 🐌 Tiny | Updates the tscircuiteval package from version 0.0.657 to 0.0.658 |
| [#2734](https://github.com/tscircuit/runframe/pull/2734) | 🐌 Tiny | Updates the package version from v0.0.1649 to v0.0.1650 in package.json |
| [#2733](https://github.com/tscircuit/runframe/pull/2733) | 🐌 Tiny | Updates the tscircuiteval package to version 0.0.657 in the package.json file. |
| [#2732](https://github.com/tscircuit/runframe/pull/2732) | 🐌 Tiny | Automated package update |
| [#2731](https://github.com/tscircuit/runframe/pull/2731) | 🐌 Tiny | Updates the tscircuiteval package to version 0.0.656 in the package.json file. |
| [#2726](https://github.com/tscircuit/runframe/pull/2726) | 🐌 Tiny | Updates the tscircuiteval package to version 0.0.655 in the package.json file. |
| [#2727](https://github.com/tscircuit/runframe/pull/2727) | 🐌 Tiny | Automated package update |
| [#2730](https://github.com/tscircuit/runframe/pull/2730) | 🐌 Tiny | Automated package update |
| [#2729](https://github.com/tscircuit/runframe/pull/2729) | 🐌 Tiny | Updates the circuit-json-to-kicad package version from 0.0.78 to 0.0.79 in package.json |
| [#2144](https://github.com/tscircuit/cli/pull/2144) | 🐌 Tiny | Updates the package version from 0.1.990 to 0.1.991 in package.json |
| [#2142](https://github.com/tscircuit/cli/pull/2142) | 🐌 Tiny | Automated package update |
| [#2138](https://github.com/tscircuit/cli/pull/2138) | 🐌 Tiny | Automated package update |
| [#2134](https://github.com/tscircuit/cli/pull/2134) | 🐌 Tiny | Updates the tscircuitrunframe package to version 0.0.1654 in the package.json file. |
| [#2128](https://github.com/tscircuit/cli/pull/2128) | 🐌 Tiny | Automated README update with latest CLI usage output. |
| [#2129](https://github.com/tscircuit/cli/pull/2129) | 🐌 Tiny | Automated package update |
| [#2136](https://github.com/tscircuit/cli/pull/2136) | 🐌 Tiny | Updates the tscircuitrunframe package from version 0.0.1654 to 0.0.1655 |
| [#2124](https://github.com/tscircuit/cli/pull/2124) | 🐌 Tiny | Updates the package version from v0.1.981 to v0.1.982 in package.json |
| [#2127](https://github.com/tscircuit/cli/pull/2127) | 🐌 Tiny | Automated package update |
| [#2137](https://github.com/tscircuit/cli/pull/2137) | 🐌 Tiny | Automated package update |
| [#2120](https://github.com/tscircuit/cli/pull/2120) | 🐌 Tiny | Automated package update |
| [#2135](https://github.com/tscircuit/cli/pull/2135) | 🐌 Tiny | Automated package update |
| [#2130](https://github.com/tscircuit/cli/pull/2130) | 🐌 Tiny | Updates the tscircuitrunframe package from version 0.0.1651 to 0.0.1652 |
| [#2131](https://github.com/tscircuit/cli/pull/2131) | 🐌 Tiny | Automated package update |
| [#2113](https://github.com/tscircuit/cli/pull/2113) | 🐌 Tiny | Updates the tscircuitrunframe package from version 0.0.1648 to 0.0.1649 |
| [#2118](https://github.com/tscircuit/cli/pull/2118) | 🐌 Tiny | Updates the tscircuitrunframe package from version 0.0.1650 to 0.0.1651 |
| [#2111](https://github.com/tscircuit/cli/pull/2111) | 🐌 Tiny | Updates the tscircuitrunframe package from version 0.0.1646 to 0.0.1648 |
| [#2110](https://github.com/tscircuit/cli/pull/2110) | 🐌 Tiny | Automated package update |
| [#2119](https://github.com/tscircuit/cli/pull/2119) | 🐌 Tiny | Automated package update |
| [#2112](https://github.com/tscircuit/cli/pull/2112) | 🐌 Tiny | Updates the package version from 0.1.976 to 0.1.977 in package.json |
| [#2114](https://github.com/tscircuit/cli/pull/2114) | 🐌 Tiny | Automated package update |
| [#2115](https://github.com/tscircuit/cli/pull/2115) | 🐌 Tiny | Updates the tscircuitrunframe package from version 0.0.1649 to 0.0.1650 |
| [#153](https://github.com/tscircuit/circuit-json-to-kicad/pull/153) | 🐌 Tiny | Automated package update |
| [#149](https://github.com/tscircuit/circuit-json-to-kicad/pull/149) | 🐌 Tiny | Automated package update |
| [#151](https://github.com/tscircuit/circuit-json-to-kicad/pull/151) | 🐌 Tiny | Automated package update |
| [#186](https://github.com/tscircuit/circuit-to-canvas/pull/186) | 🐌 Tiny | Updates the package version from 0.0.81 to 0.0.82 in package.json |
| [#188](https://github.com/tscircuit/circuit-to-canvas/pull/188) | 🐌 Tiny | Automated package update |
| [#92](https://github.com/tscircuit/hypergraph/pull/92) | 🐌 Tiny | Automated package update |
| [#89](https://github.com/tscircuit/hypergraph/pull/89) | 🐌 Tiny | Automated package update |
| [#85](https://github.com/tscircuit/hypergraph/pull/85) | 🐌 Tiny | Automated package update |
| [#87](https://github.com/tscircuit/hypergraph/pull/87) | 🐌 Tiny | Automated package update |
| [#77](https://github.com/tscircuit/hypergraph/pull/77) | 🐌 Tiny | Automated package update |
| [#80](https://github.com/tscircuit/hypergraph/pull/80) | 🐌 Tiny | Updates the package version from 0.0.36 to 0.0.37 in package.json |
| [#82](https://github.com/tscircuit/hypergraph/pull/82) | 🐌 Tiny | Automated package update |
| [#13](https://github.com/tscircuit/find-convex-regions/pull/13) | 🐌 Tiny | Automated package update |
| [#13](https://github.com/tscircuit/high-density-a01/pull/13) | 🐌 Tiny | Updates the package version from 0.0.8 to 0.0.9 in package.json |
| [#11](https://github.com/tscircuit/high-density-a01/pull/11) | 🐌 Tiny | Automated package update |
| [#9](https://github.com/tscircuit/high-density-a01/pull/9) | 🐌 Tiny | Updates the package version from 0.0.6 to 0.0.7 in package.json |
| [#8](https://github.com/tscircuit/high-density-a01/pull/8) | 🐌 Tiny | Automated package update |
| [#7](https://github.com/tscircuit/high-density-a01/pull/7) | 🐌 Tiny | Updates the package version from 0.0.4 to 0.0.5 in package.json |
| [#5](https://github.com/tscircuit/high-density-a01/pull/5) | 🐌 Tiny | Automated package update |
| [#4](https://github.com/tscircuit/high-density-a01/pull/4) | 🐌 Tiny | Automated package update |
| [#3](https://github.com/tscircuit/high-density-a01/pull/3) | 🐌 Tiny | Automated package update |

</details>

### [ShiboSoftwareDev](https://github.com/ShiboSoftwareDev)

| PRs # | Impact | Rating | Description |
|------|--------|--------|-------------|
| [#88](https://github.com/tscircuit/hypergraph/pull/88) | 🐳 Major | ⭐⭐⭐ | Refactors via region topology for improved net routing efficiency by optimizing via placements and segment connections in the PCB layout. |
| [#605](https://github.com/tscircuit/props/pull/605) | 🐙 Minor | ⭐⭐ | Adds a new boolean property _subcircuitCachingEnabled to the PanelProps interface, allowing for caching control in subcircuits. |
| [#1978](https://github.com/tscircuit/core/pull/1978) | 🐙 Minor | ⭐⭐ | Adds support for the _subcircuitCachingEnabled flag to enhance caching behavior for panels and subpanels in the rendering process. |
| [#1970](https://github.com/tscircuit/core/pull/1970) | 🐙 Minor | ⭐⭐ | Enables caching of subcircuits for boards to improve rendering performance by reusing identical board configurations. |

<details>
<summary>🐌 Tiny Contributions (1)</summary>

| PR # | Impact | Description |
|------|--------|-------------|
| [#91](https://github.com/tscircuit/hypergraph/pull/91) | 🐌 Tiny | Updates the tscircuitfind-convex-regions package to version 0.0.9, which includes improvements for constrained Delaunay triangulation functionality. |

</details>

### [MustafaMulla29](https://github.com/MustafaMulla29)

| PRs # | Impact | Rating | Description |
|------|--------|--------|-------------|
| [#1977](https://github.com/tscircuit/core/pull/1977) | 🐳 Major | ⭐⭐⭐ | Fixes symbol bounds calculation to include ports, ensuring the symbol fits within the specified width and height. |
| [#1973](https://github.com/tscircuit/core/pull/1973) | 🐙 Minor | ⭐⭐ | Fixes the issue where port stem lengths were being incorrectly stretched during symbol resizing, ensuring they remain at the user-specified length. |
| [#2132](https://github.com/tscircuit/cli/pull/2132) | 🐙 Minor | ⭐⭐ | Fetches built-in 3D models from a CDN and copies them to the KiCad librarys 3D models directory, while also handling local model paths appropriately. |
| [#152](https://github.com/tscircuit/circuit-json-to-kicad/pull/152) | 🐙 Minor | ⭐⭐ | Fixes symbol-footprint classification for components that have both builtin and custom footprints, ensuring the correct symbol is assigned to the user library. |
| [#150](https://github.com/tscircuit/circuit-json-to-kicad/pull/150) | 🐙 Minor | ⭐⭐ | Adds fallback to modelcdn URLs for builtin 3D models when no explicit model is specified and a builtin footprint is present |

<details>
<summary>🐌 Tiny Contributions (6)</summary>

| PR # | Impact | Description |
|------|--------|-------------|
| [#347](https://github.com/tscircuit/easyeda-converter/pull/347) | 🐌 Tiny | This pull request adds a reproduction for the issue related to the incorrect z position offset of the model. It includes a new test asset that demonstrates the problem, allowing for easier debugging and verification of the fix. |
| [#597](https://github.com/tscircuit/tscircuit-autorouter/pull/597) | 🐌 Tiny | Add a benchmark script to run benchmarks locally and update the GitHub Actions workflow to display results from both the pull request and the main branch. |
| [#595](https://github.com/tscircuit/tscircuit-autorouter/pull/595) | 🐌 Tiny | Run all solvers in parallel by default when no specific solver name is provided, and format the output results in a table for better readability. |
| [#594](https://github.com/tscircuit/tscircuit-autorouter/pull/594) | 🐌 Tiny | Fixes an issue where the benchmark command was not triggered correctly if the comment did not start with benchmark |
| [#586](https://github.com/tscircuit/tscircuit-autorouter/pull/586) | 🐌 Tiny | Fixes the benchmarking workflow for pull requests from forked repositories by adjusting the timeout and checkout reference. |
| [#148](https://github.com/tscircuit/circuit-json-to-kicad/pull/148) | 🐌 Tiny | Updates the tscircuit dependency version and adjusts related tests to accommodate changes in the library. |

</details>

### [Abse2001](https://github.com/Abse2001)

| PRs # | Impact | Rating | Description |
|------|--------|--------|-------------|
| [#714](https://github.com/tscircuit/3d-viewer/pull/714) | 🐳 Major | ⭐⭐⭐ | https:3d-viewer-git-fork-abse2001-main-tscircuit.vercel.app?pathstorycomponents-copperpour--default https:3d-viewer-git-fork-abse2001-main-tscircuit.vercel.app?pathstorycomponents-copperpourconnectedcomponents--default https:3d-viewer-git-fork-abse2001-main-tscircuit.vercel.app?pathstorycopperpour-core-test--copperpour-core-test-story |
| [#86](https://github.com/tscircuit/hypergraph/pull/86) | 🐳 Major | ⭐⭐⭐ | Adds a new 5 net via topology to enhance the performance of the solver in the circuit design process. |
| [#84](https://github.com/tscircuit/hypergraph/pull/84) | 🐳 Major | ⭐⭐⭐ | Optimizes the default via topology to enhance solve performance in the circuit design process. |
| [#185](https://github.com/tscircuit/circuit-to-canvas/pull/185) | 🐙 Minor | ⭐⭐ | Changes the rendering of top and bottom copper pours to use layer opacity instead of separate colors, improving visual consistency. |
| [#187](https://github.com/tscircuit/circuit-to-canvas/pull/187) | 🐙 Minor | ⭐⭐ | Adds geometry-aware soldermask cutouts for covered copper pours, allowing for accurate rendering of openings in the soldermask layer based on the underlying copper pour geometry. |

### [seveibar](https://github.com/seveibar)

| PRs # | Impact | Rating | Description |
|------|--------|--------|-------------|
| [#1971](https://github.com/tscircuit/core/pull/1971) | 🐳 Major | ⭐⭐⭐ | Updates the autorouter to support new 0603 routing specifications and adjusts related test fixtures accordingly. |
| [#2125](https://github.com/tscircuit/cli/pull/2125) | 🐳 Major | ⭐⭐⭐ | Adds options to the tsci import command to filter sources for component imports from JLCPCB or the tscircuit registry. |
| [#479](https://github.com/tscircuit/docs/pull/479) | 🐳 Major | ⭐⭐⭐ | Documents the package files list and download endpoints in the tscircuit registry API, providing detailed usage instructions and examples. |
| [#583](https://github.com/tscircuit/tscircuit-autorouter/pull/583) | 🐳 Major | ⭐⭐⭐ | Integrates the HighDensitySolverA01 from the tscircuithigh-density-a01 package into the autorouting system, enhancing the solver capabilities with increased iteration limits and new routing options. |
| [#19](https://github.com/tscircuit/solver-utils/pull/19) | 🐳 Major | ⭐⭐⭐ | Adds more granular animation speed options and allows multiple solver steps per timer tick for faster visual playback and debugging. |
| [#79](https://github.com/tscircuit/hypergraph/pull/79) | 🐳 Major | ⭐⭐⭐ | Refactors benchmarking for 0603 by removing redundant topologies, fixing candidate caching, and introducing new benchmarking utilities. |
| [#10](https://github.com/tscircuit/high-density-a01/pull/10) | 🐳 Major | ⭐⭐⭐ | Add sample003 and its edge case to improve routing by allowing root connection overlap and adjusting via margins from borders. |
| [#6](https://github.com/tscircuit/high-density-a01/pull/6) | 🐳 Major | ⭐⭐⭐ | Removes the WebAssembly test and improves the algorithm by iterating on sample002, specifically enhancing the decay penalty map and Euclidean distance calculations. |
| [#2](https://github.com/tscircuit/high-density-a01/pull/2) | 🐳 Major | ⭐⭐⭐ | Optimizes the HighDensitySolverA01 algorithm to achieve a 40x speed increase in TypeScript execution. |
| [#1979](https://github.com/tscircuit/core/pull/1979) | 🐙 Minor | ⭐⭐ | Adds examples for pcbSx and fixes the handling of pcbX and pcbY properties in silkscreen text rendering. |
| [#592](https://github.com/tscircuit/tscircuit-autorouter/pull/592) | 🐙 Minor | ⭐⭐ | This pull request changes the minimum via diameter from 0.6mm to 0.3mm in various autorouting pipeline files. This change is expected to allow for tighter routing and potentially more efficient designs. |

<details>
<summary>🐌 Tiny Contributions (6)</summary>

| PR # | Impact | Description |
|------|--------|-------------|
| [#300](https://github.com/tscircuit/contribution-tracker/pull/300) | 🐌 Tiny | Updates maintainer roles for Abse2001 and AnasSarkiz in the maintainers list. |
| [#480](https://github.com/tscircuit/docs/pull/480) | 🐌 Tiny | Removes legacy bounty-specific guidance and links from the sponsorship page, focusing solely on contributor sponsorships. |
| [#591](https://github.com/tscircuit/tscircuit-autorouter/pull/591) | 🐌 Tiny | Updates test snapshots for the high-density solver with dip16-crossing data to reflect recent changes in the implementation. |
| [#81](https://github.com/tscircuit/hypergraph/pull/81) | 🐌 Tiny | Adds a GitHub Actions workflow for benchmarking code on push and PR comments, including artifact uploads and result reporting. |
| [#12](https://github.com/tscircuit/high-density-a01/pull/12) | 🐌 Tiny | Adds a new sample dataset and corresponding test for the HighDensitySolverA01 component. |
| [#1](https://github.com/tscircuit/high-density-a01/pull/1) | 🐌 Tiny | Add a profiling script to measure solver runtime on sample fixtures, allowing easy benchmarking and extension with additional samples. |

</details>

### [imrishabh18](https://github.com/imrishabh18)

| PRs # | Impact | Rating | Description |
|------|--------|--------|-------------|
| [#1969](https://github.com/tscircuit/core/pull/1969) | 🐙 Minor | ⭐⭐ | Fixes the issue where the size of the schematic component does not change correctly when the component is rotated. |
| [#2143](https://github.com/tscircuit/cli/pull/2143) | 🐙 Minor | ⭐⭐ | Prevents worker threads from rendering circuit.json and .circuit.json files as they are treated as prebuilt files. |
| [#2123](https://github.com/tscircuit/cli/pull/2123) | 🐙 Minor | ⭐⭐ | Adds structured logging before exiting the build process to provide clearer error messages and reasons for termination. |
| [#2117](https://github.com/tscircuit/cli/pull/2117) | 🐙 Minor | ⭐⭐ | Fixes the build process to ensure that only files matching the includeBoardFiles patterns are built, preventing unnecessary transpilation of unrelated files. |
| [#2103](https://github.com/tscircuit/cli/pull/2103) | 🐙 Minor | ⭐⭐ | Changes the build process to stop immediately upon encountering a fatal circuit generation error, preventing further processing of subsequent files. |

<details>
<summary>🐌 Tiny Contributions (5)</summary>

| PR # | Impact | Description |
|------|--------|-------------|
| [#1974](https://github.com/tscircuit/core/pull/1974) | 🐌 Tiny | Adds tests to reproduce the issue where pcbFlex does not consider the parent width and height for spacing in the layout. |
| [#1972](https://github.com/tscircuit/core/pull/1972) | 🐌 Tiny | Adds a GitHub Actions workflow to automatically update and commit snapshot tests to a specified branch. |
| [#2141](https://github.com/tscircuit/cli/pull/2141) | 🐌 Tiny | Limits the number of worker threads to the number of files being processed to prevent unnecessary resource usage. |
| [#2139](https://github.com/tscircuit/cli/pull/2139) | 🐌 Tiny | Adds truthy fallbacks for various build options in the CI build process to ensure defaults are applied correctly. |
| [#1](https://github.com/tscircuit/agent-benchmarking-2026-02/pull/1) | 🐌 Tiny | Updates the glob pattern to include circuit.json files as prebuild files in the configuration. |

</details>

### [ArnavK-09](https://github.com/ArnavK-09)

| PRs # | Impact | Rating | Description |
|------|--------|--------|-------------|
| [#2855](https://github.com/tscircuit/tscircuit.com/pull/2855) | 🐳 Major | ⭐⭐⭐ | Adds a ScrollToTopButton component to the release build detail and release detail pages, allowing users to scroll back to the top of the page easily. |
| [#2852](https://github.com/tscircuit/tscircuit.com/pull/2852) | 🐳 Major | ⭐⭐⭐ | Adds a loading state to the refresh button for GitHub repositories, preventing multiple refresh requests while one is in progress. |

<details>
<summary>🐌 Tiny Contributions (2)</summary>

| PR # | Impact | Description |
|------|--------|-------------|
| [#315](https://github.com/tscircuit/contribution-tracker/pull/315) | 🐌 Tiny | Updates the contributor graph based on week selection and refactors the code for better readability and performance. |
| [#2853](https://github.com/tscircuit/tscircuit.com/pull/2853) | 🐌 Tiny | Adds a mock GitHub installation entry to the database seeding process. |

</details>

### [rushabhcodes](https://github.com/rushabhcodes)

| PRs # | Impact | Rating | Description |
|------|--------|--------|-------------|
| [#313](https://github.com/tscircuit/contribution-tracker/pull/313) | 🐳 Major | ⭐⭐⭐ | This pull request adds support for selecting and viewing contribution data by week in the frontend, allowing users to choose from available weeks using a dropdown in the header, with the displayed data updating accordingly. |

<details>
<summary>🐌 Tiny Contributions (2)</summary>

| PR # | Impact | Description |
|------|--------|-------------|
| [#312](https://github.com/tscircuit/contribution-tracker/pull/312) | 🐌 Tiny | Refactors codebase to use domain-specific naming instead of generic terms like data, info, value, param. Also fixed redundant filtering logic and removed dead code. |
| [#477](https://github.com/tscircuit/docs/pull/477) | 🐌 Tiny | This pull request adds new documentation for the schematictable  element, providing a comprehensive overview and usage guide for creating tabular data in schematic diagrams. |

</details>

### [techmannih](https://github.com/techmannih)

| PRs # | Impact | Rating | Description |
|------|--------|--------|-------------|
| [#36](https://github.com/tscircuit/kicad-to-circuit-json/pull/36) | 🐳 Major | ⭐⭐⭐ | This pull request introduces support for the gr_poly and gr_circle graphics primitives in the footprint processing stage of the KiCad to Circuit JSON conversion. It enhances the ability to handle complex shapes in PCB designs by allowing the use of polygon and circle shapes in surface mount pads. The changes include modifications to the pad processing logic to accommodate these new shapes, ensuring that they are correctly transformed and inserted into the database. |
| [#1051](https://github.com/tscircuit/svg.tscircuit.com/pull/1051) | 🐙 Minor | ⭐⭐ | Adds a test for rendering translucent 3D CAD models, ensuring correct output and functionality. |
| [#38](https://github.com/tscircuit/kicad-to-circuit-json/pull/38) | 🐙 Minor | ⭐⭐ | Removes incorrect logic that swapped dimensions for rotated oval pads, ensuring accurate representation of pad sizes. |

<details>
<summary>🐌 Tiny Contributions (2)</summary>

| PR # | Impact | Description |
|------|--------|-------------|
| [#37](https://github.com/tscircuit/kicad-to-circuit-json/pull/37) | 🐌 Tiny | Enhances type safety for footprint graphic elements by replacing any types with explicit KiCad types in the process-graphics module. |
| [#35](https://github.com/tscircuit/kicad-to-circuit-json/pull/35) | 🐌 Tiny | This pull request introduces support for the fp_poly elements in footprints, allowing for the creation of polygon shapes in the PCB silkscreen layer. The changes include modifications to the processFootprintGraphics function to handle fp_poly elements and a new function createFootprintPoly to manage the creation of these polygons. This enhancement is expected to improve the representation of complex shapes in PCB designs. |

</details>

### [0hmX](https://github.com/0hmX)

| PRs # | Impact | Rating | Description |
|------|--------|--------|-------------|
| [#585](https://github.com/tscircuit/tscircuit-autorouter/pull/585) | 🐳 Major | ⭐⭐⭐ | Adds a new solver for handling cramped port points in autorouting, improving the routing algorithms ability to manage tight spaces. |

<details>
<summary>🐌 Tiny Contributions (1)</summary>

| PR # | Impact | Description |
|------|--------|-------------|
| [#590](https://github.com/tscircuit/tscircuit-autorouter/pull/590) | 🐌 Tiny | Increases the timeout for the benchmark workflow from 30 minutes to 360 minutes to allow longer-running benchmarks to complete successfully. |

</details>

### [AnasSarkiz](https://github.com/AnasSarkiz)

| PRs # | Impact | Rating | Description |
|------|--------|--------|-------------|
| [#587](https://github.com/tscircuit/tscircuit-autorouter/pull/587) | 🐳 Major | ⭐⭐⭐ | Fixes incorrect intra-node via selection by using region-scoped nearest vias and actual bottom-layer paths, eliminating misattributed via transitions. |
| [#78](https://github.com/tscircuit/pcbburn.com/pull/78) | 🐳 Major | ⭐⭐⭐ | Adds an interactive layer selector UI in the PreviewCanvas, allowing users to toggle between top and bottom layers in real-time, with persistent layer state and improved default rendering for multi-layer boards. |
| [#76](https://github.com/tscircuit/hypergraph/pull/76) | 🐳 Major | ⭐⭐⭐ | Fixes via-region over-porting by limiting via ports to a maximum of 4 sides and resolves solved routes into top stubs and tile-scoped bottom segments for improved trace visualization. |

### [zalo](https://github.com/zalo)

| PRs # | Impact | Rating | Description |
|------|--------|--------|-------------|
| [#12](https://github.com/tscircuit/find-convex-regions/pull/12) | 🐳 Major | ⭐⭐⭐ | Summary Adds usePolyanyaMerge: boolean option (default true)  Polyanya two-phase merge replaces greedy concavity merge as default New mergeCellsPolyanya() function implements the Polyanya meshmerger algorithm Adds unionObstacleBoundaries()  unions overlapping obstacle boundaries via flatten-jscore before constraint edge generation Fixes filterTris gating: always runs when obstacles are present (previously skipped when no edge crossings detected, causing invalid triangles with contained obstacles) Adds resolveConstraintCrossings() as safety net for any remaining crossing constraint edges after union Ports resolveConstraintCrossings to polyanya-ts repo to fix overlapping obstacles producing 0 triangles 9 new Polyanya merge tests  9 new obstacle union tests (48 total) 2 new Cosmos fixtures for overlapping obstacle scenarios (10 presets) Test files reorganized into tests directory Version bumped to 0.1.0  Polyanya Merge Algorithm Unlike the existing greedy concavity-bounded merge which picks the lowest-concavity merge each round (O(n) per iteration, up to 800 iterations), the Polyanya merge has two phases: Phase 1  Dead-end elimination: Cells with exactly one traversable neighbor are unconditionally merged into their sole neighbor. These are pathfinding-useless topology that only add node expansions with no alternative route. Phase 2  Max-area priority queue: A max-heap keyed on combined area greedily merges the largest pair of adjacent convex cells. After each merge, only affected neighbors are re-evaluated. This produces the fewest, largest strictly-convex regions. Both phases use O(1) convexity checks (two cross products at junction vertices) rather than full convex-hull  concavity-depth computation per merge candidate.  Overlapping Obstacle Fixes Before constraint edges are generated, all obstacle boundary rings are collected and passed through unionObstacleBoundaries(), which uses flatten-jscore boolean operations to merge overlapping polygons. This prevents: Crossing constraint edges that confuse CDT Contained obstacles generating invalid interior triangles Transitive overlaps (AB, BC) being missed filterTris now always runs when any obstacles are present (previously gated on hadCrossings, which missed fully-contained obstacles).  Benchmark: merge step only (CDT  staggered rects, 5-run avg)  Config  Rects  Triangles  Greedy merge  Polyanya merge  Speedup  ---------------------------------------------------------------  4x4  16  134  38 regions (43.6ms)  45 regions (4.4ms)  10.0x   8x8  64  422  147 regions (260ms)  148 regions (28ms)  9.3x   12x12  144  902  317 regions (1.4s)  309 regions (182ms)  7.9x   16x16  256  1574  774 regions (3.1s)  532 regions (462ms)  6.6x   20x20  400  2438  1638 regions (5.0s)  815 regions (1.2s)  4.2x   25x25  625  3788  2988 regions (8.8s)  1269 regions (3.3s)  2.6x   Test plan x All existing tests pass  18 new tests (48 total) x Polyanya merge produces strictly convex regions across all test configs x Total area preserved exactly (shoelace formula comparison) x Overlappingcontained obstacles produce valid triangulations x Polygon union correctly merges overlapping, contained, and transitive overlaps x Build succeeds with tsup --dts --format esm x polyanya-ts overlapping obstacle tests pass (previously 0 triangles)  Generated with Claude Code(https:claude.comclaude-code) |
| [#2](https://github.com/tscircuit/dataset-zero-obstacle-high-density-z01/pull/2) | 🐳 Major | ⭐⭐⭐ | Adds a complete set of scripts for dataset creation, training, deployment, and inference for fine-tuning the Flux 2 Klein 4B model as a PCB trace router, including adaptations from the morphmaker.ai pipeline. |
| [#3](https://github.com/tscircuit/dataset-zero-obstacle-high-density-z01/pull/3) | 🐙 Minor | ⭐⭐ | Fetches each sample individually by offset to access any index in the test set, adding samples at indices 10 and 50 for more variety. |

## Repository Owners

| Repository | Codeowners |
|------------|------------|
| [builder](https://github.com/tscircuit/builder/blob/main/.github/CODEOWNERS) | [seveibar](https://github.com/seveibar)
| [pcb-viewer](https://github.com/tscircuit/pcb-viewer/blob/main/.github/CODEOWNERS) | [seveibar](https://github.com/seveibar), [ShiboSoftwareDev](https://github.com/ShiboSoftwareDev), [Abse2001](https://github.com/Abse2001)
| [footprints-old](https://github.com/tscircuit/footprints-old/blob/main/.github/CODEOWNERS) | [seveibar](https://github.com/seveibar)
| [footprinter](https://github.com/tscircuit/footprinter/blob/main/.github/CODEOWNERS) | [seveibar](https://github.com/seveibar), [techmannih](https://github.com/techmannih)
| [3d-viewer](https://github.com/tscircuit/3d-viewer/blob/main/.github/CODEOWNERS) | [ShiboSoftwareDev](https://github.com/ShiboSoftwareDev), [Abse2001](https://github.com/Abse2001)
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
| [circuit-to-canvas](https://github.com/tscircuit/circuit-to-canvas/blob/main/.github/CODEOWNERS) | [ShiboSoftwareDev](https://github.com/ShiboSoftwareDev), [Abse2001](https://github.com/Abse2001), [techmannih](https://github.com/techmannih)
| [circuit-json-to-lbrn](https://github.com/tscircuit/circuit-json-to-lbrn/blob/main/.github/CODEOWNERS) | [AnasSarkiz](https://github.com/AnasSarkiz)
| [pcbburn.com](https://github.com/tscircuit/pcbburn.com/blob/main/.github/CODEOWNERS) | [AnasSarkiz](https://github.com/AnasSarkiz)

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
|  | [circuit-to-canvas](https://github.com/tscircuit/circuit-to-canvas/blob/main/.github/CODEOWNERS) |
| [Abse2001](https://github.com/Abse2001) | [pcb-viewer](https://github.com/tscircuit/pcb-viewer/blob/main/.github/CODEOWNERS) |
|  | [3d-viewer](https://github.com/tscircuit/3d-viewer/blob/main/.github/CODEOWNERS) |
|  | [sparkfun-boards](https://github.com/tscircuit/sparkfun-boards/blob/main/.github/CODEOWNERS) |
|  | [schematic-corpus](https://github.com/tscircuit/schematic-corpus/blob/main/.github/CODEOWNERS) |
|  | [common](https://github.com/tscircuit/common/blob/main/.github/CODEOWNERS) |
|  | [circuit-to-canvas](https://github.com/tscircuit/circuit-to-canvas/blob/main/.github/CODEOWNERS) |
| [techmannih](https://github.com/techmannih) | [footprinter](https://github.com/tscircuit/footprinter/blob/main/.github/CODEOWNERS) |
|  | [jscad-electronics](https://github.com/tscircuit/jscad-electronics/blob/main/.github/CODEOWNERS) |
|  | [schematic-symbols](https://github.com/tscircuit/schematic-symbols/blob/main/.github/CODEOWNERS) |
|  | [sparkfun-boards](https://github.com/tscircuit/sparkfun-boards/blob/main/.github/CODEOWNERS) |
|  | [circuit-to-canvas](https://github.com/tscircuit/circuit-to-canvas/blob/main/.github/CODEOWNERS) |
| [anas-sarkez](https://github.com/anas-sarkez) | [jscad-electronics](https://github.com/tscircuit/jscad-electronics/blob/main/.github/CODEOWNERS) |
| [imrishabh18](https://github.com/imrishabh18) | [circuit-to-svg](https://github.com/tscircuit/circuit-to-svg/blob/main/.github/CODEOWNERS) |
|  | [schematic-symbols](https://github.com/tscircuit/schematic-symbols/blob/main/.github/CODEOWNERS) |
|  | [tscircuit.com](https://github.com/tscircuit/tscircuit.com/blob/main/.github/CODEOWNERS) |
| [Anshgrover23](https://github.com/Anshgrover23) | [issue-roulette](https://github.com/tscircuit/issue-roulette/blob/main/.github/CODEOWNERS) |
|  | [sparkfun-boards](https://github.com/tscircuit/sparkfun-boards/blob/main/.github/CODEOWNERS) |
| [MustafaMulla29](https://github.com/MustafaMulla29) | [sparkfun-boards](https://github.com/tscircuit/sparkfun-boards/blob/main/.github/CODEOWNERS) |
| [AnasSarkiz](https://github.com/AnasSarkiz) | [circuit-json-to-lbrn](https://github.com/tscircuit/circuit-json-to-lbrn/blob/main/.github/CODEOWNERS) |
|  | [pcbburn.com](https://github.com/tscircuit/pcbburn.com/blob/main/.github/CODEOWNERS) |



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
