# contribution-tracker

Generates weekly contribution overviews for tscircuit contributors. Check out all
the [contribution overviews here](./contribution-overviews/)
You can find AI-generated monthly changelogs in the [changelogs directory](./changelogs/).

* All PRs in the tscircuit org are scanned/summarized via Claude Haiku
* Claude classifies each Diff/PR as a Major, Minor or Tiny contribution
* All the PRs, summaries, and classifications are organized into charts and tables

## Getting Started

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

The current week is shown below. There are 3 major sections:

* [Contributor Overview](#contributor-overview)
* [PRs by Repository](#prs-by-repository)
* [PRs by Contributor](#changes-by-contributor)

## Current Week

<!-- START_CURRENT_WEEK -->

# Contribution Overview 2025-06-25

## PRs by Repository

```mermaid
pie
    "tscircuit/props" : 3
    "tscircuit/core" : 19
    "tscircuit/circuit-to-svg" : 3
    "tscircuit/circuit-json-to-gerber" : 2
    "tscircuit/tscircuit.com" : 19
    "tscircuit/runframe" : 4
    "tscircuit/docs" : 3
    "tscircuit/parts-engine" : 2
    "tscircuit/led-water-accelerometer" : 1
    "tscircuit/tscircuit" : 1
    "tscircuit/eval" : 3
    "tscircuit/cli" : 6
    "tscircuit/bpc-graph" : 11
    "tscircuit/easyeda-converter" : 2
    "tscircuit/checks" : 1
    "tscircuit/jlcsearch" : 3
    "tscircuit/graphics-debug" : 11
    "tscircuit/circuit-json-to-bpc" : 1
    "tscircuit/schematic-corpus" : 24
    "tscircuit/calculate-cell-boundaries" : 1
    "tscircuit/deps.tscircuit.com" : 1
    "tscircuit/sparkfun-boards" : 12
    "tscircuit/tscircuit-autorouter" : 7
    "tscircuit/footprinter" : 2
    "tscircuit/3d-viewer" : 2
    "tscircuit/schematic-symbols" : 2
```

## Contributor Overview

| Contributor | 🐳 Major | 🐙 Minor | 🐌 Tiny | ⭐ | Issues Created | Discussion Contributions |
|-------------|---------|---------|---------|-----|----------------|--------------------------|
| [seveibar](#seveibar) | 1 | 41 | 5 | 👑👑👑 | 5 | 0🔹 0🔶 0💎 |
| [imrishabh18](#imrishabh18) | 0 | 15 | 6 | ⭐⭐⭐ | 1 | 0🔹 0🔶 0💎 |
| [Anshgrover23](#Anshgrover23) | 1 | 14 | 6 | ⭐⭐⭐ | 9 | 0🔹 0🔶 0💎 |
| [techmannih](#techmannih) | 0 | 10 | 4 | ⭐⭐⭐ | 2 | 0🔹 0🔶 0💎 |
| [Abse2001](#Abse2001) | 1 | 10 | 0 | ⭐⭐⭐ | 1 | 0🔹 0🔶 0💎 |
| [ArnavK-09](#ArnavK-09) | 3 | 8 | 4 | ⭐⭐⭐ | 7 | 0🔹 0🔶 0💎 |
| [ShiboSoftwareDev](#ShiboSoftwareDev) | 0 | 8 | 3 | ⭐⭐ | 7 | 0🔹 0🔶 0💎 |
| [MustafaMulla29](#MustafaMulla29) | 0 | 2 | 1 | ⭐ | 6 | 0🔹 0🔶 0💎 |
| [andrii-balitskyi](#andrii-balitskyi) | 0 | 1 | 0 |  | 0 | 0🔹 0🔶 0💎 |
| [ricohageman](#ricohageman) | 0 | 1 | 0 |  | 0 | 0🔹 0🔶 0💎 |
| [tscircuitbot](#tscircuitbot) | 0 | 0 | 1 |  | 0 | 0🔹 0🔶 0💎 |

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

| Contributor | Reviews Received | Approvals Received | Rejections Received | Approvals | Rejections | PRs Opened | PRs Merged | Issues Created | Bountied Issues | Bountied Issue $ |
|---|---|---|---|---|---|---|---|---|---|---|
| [seveibar](#seveibar) | 5 | 1 | 0 | 41 | 4 | 62 | 47 | 5 | 2 | 50 |
| [imrishabh18](#imrishabh18) | 18 | 9 | 0 | 9 | 2 | 23 | 21 | 1 | 0 | 0 |
| [graphite-app[bot]](#graphite-app[bot]) | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| [techmannih](#techmannih) | 47 | 20 | 7 | 1 | 4 | 26 | 14 | 2 | 0 | 0 |
| [Anshgrover23](#Anshgrover23) | 30 | 21 | 4 | 3 | 6 | 25 | 21 | 9 | 0 | 0 |
| [ShiboSoftwareDev](#ShiboSoftwareDev) | 12 | 9 | 0 | 13 | 2 | 15 | 11 | 7 | 1 | 5 |
| [MustafaMulla29](#MustafaMulla29) | 8 | 3 | 4 | 0 | 0 | 7 | 3 | 6 | 0 | 0 |
| [ArnavK-09](#ArnavK-09) | 22 | 14 | 1 | 2 | 0 | 17 | 15 | 7 | 0 | 0 |
| [Abse2001](#Abse2001) | 5 | 3 | 1 | 13 | 0 | 13 | 11 | 1 | 0 | 0 |
| [andrii-balitskyi](#andrii-balitskyi) | 2 | 1 | 1 | 0 | 0 | 2 | 1 | 0 | 0 | 0 |
| [tscircuitbot](#tscircuitbot) | 0 | 0 | 0 | 0 | 0 | 32 | 1 | 0 | 0 | 0 |
| [ricohageman](#ricohageman) | 1 | 1 | 0 | 0 | 0 | 1 | 1 | 0 | 0 | 0 |

## Changes by Repository

### [tscircuit/props](https://github.com/tscircuit/props)

| PR # | Impact | Contributor | Description | Milestone Aligned |
|------|--------|-------------|-------------|-------------------|
| [#307](https://github.com/tscircuit/props/pull/307) | 🐙 Minor | imrishabh18 | Enhancements to the PlatformConfig interface improve configurability and documentation for board information. | ❌ |
| [#308](https://github.com/tscircuit/props/pull/308) | 🐙 Minor | seveibar | Enhances component prop interfaces by introducing a new optional `pinAttributes` field, improving type safety and flexibility. | ❌ |
| [#304](https://github.com/tscircuit/props/pull/304) | 🐙 Minor | Anshgrover23 | Enhancement of LED component functionality by introducing a connections property for better integration. | ❌ |

### [tscircuit/core](https://github.com/tscircuit/core)

| PR # | Impact | Contributor | Description | Milestone Aligned |
|------|--------|-------------|-------------|-------------------|
| [#998](https://github.com/tscircuit/core/pull/998) | 🐙 Minor | imrishabh18 | Enhances the board's silkscreen by adding project-specific information, improving documentation and usability. | ❌ |
| [#1002](https://github.com/tscircuit/core/pull/1002) | 🐙 Minor | imrishabh18 | Enhances the autorouting functionality by preventing multiple traces between the same pins in subcircuits, improving circuit design integrity. | ❌ |
| [#997](https://github.com/tscircuit/core/pull/997) | 🐙 Minor | imrishabh18 | The addition of a test case to ensure that subcircuits do not generate duplicate traces enhances the reliability of the circuit design process. | ❌ |
| [#992](https://github.com/tscircuit/core/pull/992) | 🐙 Minor | imrishabh18 | Enhancements to the SolderJumper component improve its configurability by allowing dynamic symbol names. | ❌ |
| [#989](https://github.com/tscircuit/core/pull/989) | 🐙 Minor | imrishabh18 | Enhancement of the SolderJumper component to support a new bridged property, improving its functionality. | ❌ |
| [#1016](https://github.com/tscircuit/core/pull/1016) | 🐙 Minor | seveibar | The introduction of a new algorithm for match adaptation using BPC graphs significantly enhances the schematic layout capabilities. | ❌ |
| [#1015](https://github.com/tscircuit/core/pull/1015) | 🐙 Minor | seveibar | Enhancements to schematic symbol rotation through new orientation tests for polarized capacitors. | ❌ |
| [#1005](https://github.com/tscircuit/core/pull/1005) | 🐙 Minor | seveibar | Elimination of a placeholder improves code clarity and ensures proper fallback naming in component generation. | ❌ |
| [#1004](https://github.com/tscircuit/core/pull/1004) | 🐙 Minor | seveibar | Enhancements to netlabel positioning improve schematic accuracy and usability. | ❌ |
| [#1003](https://github.com/tscircuit/core/pull/1003) | 🐙 Minor | seveibar | Fixes a bug related to net IDs in schematic net labels, enhancing the accuracy of the schematic representation. | ❌ |
| [#976](https://github.com/tscircuit/core/pull/976) | 🐙 Minor | seveibar | Enhancements to net label positioning improve schematic clarity and usability. | ❌ |
| [#1008](https://github.com/tscircuit/core/pull/1008) | 🐙 Minor | ShiboSoftwareDev | Enhancements to the board center calculation improve accuracy in PCB design. | ❌ |
| [#1000](https://github.com/tscircuit/core/pull/1000) | 🐙 Minor | ShiboSoftwareDev | Enhances the core functionality by implementing obstacle generation for various cutout shapes, improving the design capabilities. | ❌ |
| [#1009](https://github.com/tscircuit/core/pull/1009) | 🐙 Minor | MustafaMulla29 | Enhances testing capabilities for jumper netlabel connections in the circuit design. | ❌ |
| [#996](https://github.com/tscircuit/core/pull/996) | 🐙 Minor | Abse2001 | Enhancement of selector functionality by introducing support for test point selectors, improving the flexibility of the library. | ❌ |
| [#1013](https://github.com/tscircuit/core/pull/1013) | 🐌 Tiny | imrishabh18 | The change ensures compatibility by locking the css-select package to a specific version, preventing potential type issues. | ❌ |
| [#995](https://github.com/tscircuit/core/pull/995) | 🐌 Tiny | Anshgrover23 | Enhances testing capabilities for the LED component by adding a connections test, ensuring proper functionality. | ❌ |
| [#999](https://github.com/tscircuit/core/pull/999) | 🐌 Tiny | ShiboSoftwareDev | Updates the footprinter package version and adjusts test cases for consistency in height values. | ❌ |
| [#1014](https://github.com/tscircuit/core/pull/1014) | 🐌 Tiny | techmannih | Enhancements to schematic testing and symbol updates contribute to improved functionality. | ❌ |

### [tscircuit/circuit-to-svg](https://github.com/tscircuit/circuit-to-svg)

| PR # | Impact | Contributor | Description | Milestone Aligned |
|------|--------|-------------|-------------|-------------------|
| [#268](https://github.com/tscircuit/circuit-to-svg/pull/268) | 🐙 Minor | imrishabh18 | Enhancement of text rendering capabilities in PCB silkscreen by supporting multi-line text through newline handling. | ❌ |
| [#276](https://github.com/tscircuit/circuit-to-svg/pull/276) | 🐙 Minor | seveibar | Enhancements to label rendering improve visual clarity and consistency in schematic representations. | ❌ |
| [#270](https://github.com/tscircuit/circuit-to-svg/pull/270) | 🐙 Minor | ShiboSoftwareDev | Enhancements to the SVG rendering of assembly components by adding pads, pins, and holes, improving visual representation. | ❌ |

### [tscircuit/circuit-json-to-gerber](https://github.com/tscircuit/circuit-json-to-gerber)

| PR # | Impact | Contributor | Description | Milestone Aligned |
|------|--------|-------------|-------------|-------------------|
| [#45](https://github.com/tscircuit/circuit-json-to-gerber/pull/45) | 🐙 Minor | imrishabh18 | Enhancements to text rendering in Gerber files improve layout precision for silkscreen text. | ❌ |
| [#44](https://github.com/tscircuit/circuit-json-to-gerber/pull/44) | 🐙 Minor | seveibar | Enhancement of text anchor support in Gerber conversion, improving layout flexibility. | ❌ |

### [tscircuit/tscircuit.com](https://github.com/tscircuit/tscircuit.com)

| PR # | Impact | Contributor | Description | Milestone Aligned |
|------|--------|-------------|-------------|-------------------|
| [#1388](https://github.com/tscircuit/tscircuit.com/pull/1388) | 🐳 Major | ArnavK-09 | Introduces a global find and replace feature, enhancing code editing capabilities significantly. | ❌ |
| [#1378](https://github.com/tscircuit/tscircuit.com/pull/1378) | 🐳 Major | ArnavK-09 | Revamping the Cmd+K menu enhances user experience by improving search functionality and interface design. | ❌ |
| [#1393](https://github.com/tscircuit/tscircuit.com/pull/1393) | 🐙 Minor | imrishabh18 | Enhances user experience by providing contextual information for the AI autocomplete feature. | ❌ |
| [#1371](https://github.com/tscircuit/tscircuit.com/pull/1371) | 🐙 Minor | imrishabh18 | Enhances the dashboard by ensuring packages are sorted based on their update or creation date, improving user experience. | ❌ |
| [#1370](https://github.com/tscircuit/tscircuit.com/pull/1370) | 🐙 Minor | imrishabh18 | Enhancing the dashboard's package sorting functionality by preventing mutation of cached data improves data integrity and user experience. | ❌ |
| [#1325](https://github.com/tscircuit/tscircuit.com/pull/1325) | 🐙 Minor | seveibar | Enhancing TypeScript library caching through IndexedDB improves performance and resource management in the CodeEditor. | ❌ |
| [#1382](https://github.com/tscircuit/tscircuit.com/pull/1382) | 🐙 Minor | ArnavK-09 | Introducing a native sharing feature enhances user engagement by allowing easy sharing of package information. | ❌ |
| [#1381](https://github.com/tscircuit/tscircuit.com/pull/1381) | 🐙 Minor | ArnavK-09 | Enhances user experience by preventing navigation errors during package loading. | ❌ |
| [#1379](https://github.com/tscircuit/tscircuit.com/pull/1379) | 🐙 Minor | ArnavK-09 | Enhancements to responsiveness improve user experience on build pages. | ❌ |
| [#1374](https://github.com/tscircuit/tscircuit.com/pull/1374) | 🐙 Minor | ArnavK-09 | Enhancing user experience by ensuring the correct GitHub username is displayed in the settings dialog. | ❌ |
| [#1373](https://github.com/tscircuit/tscircuit.com/pull/1373) | 🐙 Minor | ArnavK-09 | Enhances security by limiting AI review generation to package owners, ensuring only authorized users can access this feature. | ❌ |
| [#1372](https://github.com/tscircuit/tscircuit.com/pull/1372) | 🐙 Minor | ArnavK-09 | Introducing a toggle button for AI autocomplete enhances user interaction and functionality within the code editor. | ❌ |
| [#1368](https://github.com/tscircuit/tscircuit.com/pull/1368) | 🐙 Minor | andrii-balitskyi | Enhancements to the AI review loading state improve user experience during review requests. | ❌ |
| [#1394](https://github.com/tscircuit/tscircuit.com/pull/1394) | 🐌 Tiny | imrishabh18 | Updating the runframe package to a newer version enhances the project's dependencies and may improve functionality or performance. | ❌ |
| [#1389](https://github.com/tscircuit/tscircuit.com/pull/1389) | 🐌 Tiny | Anshgrover23 | Updating the circuit-to-svg dependency to a newer version enhances the project's compatibility and may include important bug fixes or improvements. | ❌ |
| [#1395](https://github.com/tscircuit/tscircuit.com/pull/1395) | 🐌 Tiny | techmannih | Updating the footprinter dependency to a newer version may enhance functionality or fix issues related to that package. | ❌ |
| [#1387](https://github.com/tscircuit/tscircuit.com/pull/1387) | 🐌 Tiny | ArnavK-09 | Updating dependencies enhances the stability and performance of the project by ensuring that the latest features and bug fixes are included. | ❌ |
| [#1384](https://github.com/tscircuit/tscircuit.com/pull/1384) | 🐌 Tiny | ArnavK-09 | Enhancements to the UI components for better size management and performance. | ❌ |
| [#1383](https://github.com/tscircuit/tscircuit.com/pull/1383) | 🐌 Tiny | ArnavK-09 | Removes unnecessary spacing in the CmdKMenu component, enhancing visual consistency. | ❌ |

### [tscircuit/runframe](https://github.com/tscircuit/runframe)

| PR # | Impact | Contributor | Description | Milestone Aligned |
|------|--------|-------------|-------------|-------------------|
| [#820](https://github.com/tscircuit/runframe/pull/820) | 🐳 Major | ArnavK-09 | Enhancements to the user interface for full screen previews significantly improve user experience on tscircuit.com. | ❌ |
| [#830](https://github.com/tscircuit/runframe/pull/830) | 🐙 Minor | imrishabh18 | Enhancements to version fetching improve reliability and ensure the latest version of the eval package is used, addressing caching issues. | ❌ |
| [#824](https://github.com/tscircuit/runframe/pull/824) | 🐙 Minor | ArnavK-09 | Enhances user experience by ensuring that the last active tab is preserved when an error occurs, improving navigation and usability. | ❌ |
| [#823](https://github.com/tscircuit/runframe/pull/823) | 🐙 Minor | ArnavK-09 | The changes enhance the user interface by ensuring proper height adjustments for full-screen and CLI runframe previews, improving usability and visual consistency. | ❌ |

### [tscircuit/docs](https://github.com/tscircuit/docs)

| PR # | Impact | Contributor | Description | Milestone Aligned |
|------|--------|-------------|-------------|-------------------|
| [#93](https://github.com/tscircuit/docs/pull/93) | 🐙 Minor | imrishabh18 | Enhances documentation by adding video demonstrations for manual edits in PCB and schematic viewers. | ❌ |
| [#94](https://github.com/tscircuit/docs/pull/94) | 🐌 Tiny | seveibar | Enhances documentation by providing clear guidance on the use of the schOrientation property for polarized capacitors. | ❌ |
| [#92](https://github.com/tscircuit/docs/pull/92) | 🐌 Tiny | seveibar | Enhances documentation by detailing the usage of `sel.net` within the selector pattern, improving developer understanding. | ❌ |

### [tscircuit/parts-engine](https://github.com/tscircuit/parts-engine)

| PR # | Impact | Contributor | Description | Milestone Aligned |
|------|--------|-------------|-------------|-------------------|
| [#9](https://github.com/tscircuit/parts-engine/pull/9) | 🐙 Minor | imrishabh18 | Enhances the search functionality by allowing it to consider both the displayed and absolute values of resistance and capacitance. | ❌ |
| [#8](https://github.com/tscircuit/parts-engine/pull/8) | 🐙 Minor | Anshgrover23 | Enhancing robustness by ensuring that undefined fuses are handled gracefully in the findPart function. | ❌ |

### [tscircuit/led-water-accelerometer](https://github.com/tscircuit/led-water-accelerometer)

| PR # | Impact | Contributor | Description | Milestone Aligned |
|------|--------|-------------|-------------|-------------------|
| [#3](https://github.com/tscircuit/led-water-accelerometer/pull/3) | 🐙 Minor | imrishabh18 | Enhancements to the PCB design by adding mounting holes and improving power connections. | ❌ |

### [tscircuit/tscircuit](https://github.com/tscircuit/tscircuit)

| PR # | Impact | Contributor | Description | Milestone Aligned |
|------|--------|-------------|-------------|-------------------|
| [#694](https://github.com/tscircuit/tscircuit/pull/694) | 🐌 Tiny | imrishabh18 | Updates the core and eval packages to their latest versions, ensuring compatibility and potentially introducing minor improvements. | ❌ |

### [tscircuit/eval](https://github.com/tscircuit/eval)

| PR # | Impact | Contributor | Description | Milestone Aligned |
|------|--------|-------------|-------------|-------------------|
| [#624](https://github.com/tscircuit/eval/pull/624) | 🐌 Tiny | imrishabh18 | Updates the parts-engine dependency and enhances test coverage for parts validation. | ❌ |
| [#608](https://github.com/tscircuit/eval/pull/608) | 🐌 Tiny | imrishabh18 | Updating the core package version enhances compatibility and potentially introduces new features or fixes. | ❌ |
| [#619](https://github.com/tscircuit/eval/pull/619) | 🐌 Tiny | tscircuitbot | Updating dependencies is essential for maintaining project health and ensuring compatibility with other packages. | ❌ |

### [tscircuit/cli](https://github.com/tscircuit/cli)

| PR # | Impact | Contributor | Description | Milestone Aligned |
|------|--------|-------------|-------------|-------------------|
| [#251](https://github.com/tscircuit/cli/pull/251) | 🐙 Minor | ShiboSoftwareDev | Updating the Node.js version in workflows enhances compatibility and performance for the project. | ❌ |
| [#250](https://github.com/tscircuit/cli/pull/250) | 🐙 Minor | ShiboSoftwareDev | Enhances the build command by allowing it to proceed despite circuitJson errors when the --ignore-errors flag is used. | ❌ |
| [#252](https://github.com/tscircuit/cli/pull/252) | 🐌 Tiny | imrishabh18 | Updates dependencies in the package.json file to newer versions, ensuring compatibility and potentially improved functionality. | ❌ |
| [#253](https://github.com/tscircuit/cli/pull/253) | 🐌 Tiny | seveibar | Refactoring the CLI to utilize peer dependencies enhances compatibility and reduces bundle size, improving overall performance. | ❌ |
| [#255](https://github.com/tscircuit/cli/pull/255) | 🐌 Tiny | Anshgrover23 | Updating dependencies enhances the stability and performance of the project by ensuring compatibility with the latest features and fixes. | ❌ |
| [#254](https://github.com/tscircuit/cli/pull/254) | 🐌 Tiny | ArnavK-09 | Updating dependencies and runframe enhances the project's stability and performance. | ❌ |

### [tscircuit/bpc-graph](https://github.com/tscircuit/bpc-graph)

| PR # | Impact | Contributor | Description | Milestone Aligned |
|------|--------|-------------|-------------|-------------------|
| [#8](https://github.com/tscircuit/bpc-graph/pull/8) | 🐳 Major | seveibar | Enhancements to the graphical representation and functionality for network adaptation and box assignment in the BPC graph. | ❌ |
| [#17](https://github.com/tscircuit/bpc-graph/pull/17) | 🐙 Minor | seveibar | Enhancements to the README provide clearer examples and improve usability for users interacting with BPC graphs. | ❌ |
| [#13](https://github.com/tscircuit/bpc-graph/pull/13) | 🐙 Minor | seveibar | Enhancing documentation and adding example tests significantly improves usability and understanding of the library. | ❌ |
| [#12](https://github.com/tscircuit/bpc-graph/pull/12) | 🐙 Minor | seveibar | Enhancements to graph partitioning and renetworking improve the scoring and connectivity of BPC graphs, facilitating better performance in layout matching. | ❌ |
| [#11](https://github.com/tscircuit/bpc-graph/pull/11) | 🐙 Minor | seveibar | Enhancements to graph handling through the introduction of subgraph partitioning and improved pin direction handling. | ❌ |
| [#10](https://github.com/tscircuit/bpc-graph/pull/10) | 🐙 Minor | seveibar | The implementation of box side graph utilities enhances the graph processing capabilities by allowing for the detection and merging of isolated box sides, which is crucial for improving the overall functionality of the graph system. | ❌ |
| [#9](https://github.com/tscircuit/bpc-graph/pull/9) | 🐙 Minor | seveibar | Enhancements to the net adaptation logic and additional testing improve the robustness and reliability of the BPC graph handling. | ❌ |
| [#7](https://github.com/tscircuit/bpc-graph/pull/7) | 🐙 Minor | seveibar | Enhancements to adjacency matrix computations and graph matching functionalities significantly improve the library's capabilities. | ❌ |
| [#6](https://github.com/tscircuit/bpc-graph/pull/6) | 🐙 Minor | seveibar | The pull request introduces a significant refactor of the graph similarity calculation logic, enhancing the functionality and maintainability of the codebase. | ❌ |
| [#5](https://github.com/tscircuit/bpc-graph/pull/5) | 🐙 Minor | seveibar | Enhancements to the graph transformation process with added logging and a new corpus matcher page. | ❌ |
| [#4](https://github.com/tscircuit/bpc-graph/pull/4) | 🐙 Minor | seveibar | The addition of a corpus matcher page enhances the functionality of the application by allowing users to compare BPC graphs against a predefined corpus, thereby improving usability and feature set. | ❌ |

### [tscircuit/easyeda-converter](https://github.com/tscircuit/easyeda-converter)

| PR # | Impact | Contributor | Description | Milestone Aligned |
|------|--------|-------------|-------------|-------------------|
| [#270](https://github.com/tscircuit/easyeda-converter/pull/270) | 🐙 Minor | seveibar | Enhancing the converter to support vias significantly improves its functionality for users needing TSX output. | ❌ |
| [#269](https://github.com/tscircuit/easyeda-converter/pull/269) | 🐙 Minor | seveibar | Enhancements to VIA shape handling significantly improve the package conversion process. | ❌ |

### [tscircuit/checks](https://github.com/tscircuit/checks)

| PR # | Impact | Contributor | Description | Milestone Aligned |
|------|--------|-------------|-------------|-------------------|
| [#52](https://github.com/tscircuit/checks/pull/52) | 🐙 Minor | seveibar | The addition of the runAllChecks utility enhances the testing capabilities of the project by integrating multiple checks into a single function, improving code quality assurance. | ❌ |

### [tscircuit/jlcsearch](https://github.com/tscircuit/jlcsearch)

| PR # | Impact | Contributor | Description | Milestone Aligned |
|------|--------|-------------|-------------|-------------------|
| [#62](https://github.com/tscircuit/jlcsearch/pull/62) | 🐙 Minor | seveibar | Enhances the gas sensors functionality by introducing measurement filtering, improving user experience and data relevance. | ❌ |
| [#61](https://github.com/tscircuit/jlcsearch/pull/61) | 🐙 Minor | seveibar | Enhancements to gas sensor data handling and exposure of measurement capabilities. | ❌ |
| [#60](https://github.com/tscircuit/jlcsearch/pull/60) | 🐙 Minor | seveibar | The addition of a dedicated page for Boost DC-DC converters enhances the repository's functionality by providing users with a comprehensive list and details of available converters. | ❌ |

### [tscircuit/graphics-debug](https://github.com/tscircuit/graphics-debug)

| PR # | Impact | Contributor | Description | Milestone Aligned |
|------|--------|-------------|-------------|-------------------|
| [#67](https://github.com/tscircuit/graphics-debug/pull/67) | 🐙 Minor | seveibar | Adjusts the default behavior of the `includeTextLabels` parameter to improve SVG generation by omitting text labels unless specified otherwise. | ❌ |
| [#64](https://github.com/tscircuit/graphics-debug/pull/64) | 🐙 Minor | seveibar | Enhancements to rectangle label positioning and size improve visual clarity and usability. | ❌ |
| [#66](https://github.com/tscircuit/graphics-debug/pull/66) | 🐙 Minor | seveibar | Enhancing SVG customization capabilities by allowing dynamic width and height adjustments adds significant flexibility for users. | ❌ |
| [#65](https://github.com/tscircuit/graphics-debug/pull/65) | 🐙 Minor | seveibar | Corrects the Y offset in graphics grid creation to ensure proper row orientation, enhancing the functionality of the graphics rendering. | ❌ |
| [#63](https://github.com/tscircuit/graphics-debug/pull/63) | 🐙 Minor | seveibar | Dynamic font sizing for rectangle labels enhances visual clarity and adaptability in graphics rendering. | ❌ |
| [#62](https://github.com/tscircuit/graphics-debug/pull/62) | 🐙 Minor | seveibar | Enhancements to the graphics grid functionality by allowing customizable gaps between cells, improving layout flexibility. | ❌ |
| [#61](https://github.com/tscircuit/graphics-debug/pull/61) | 🐙 Minor | seveibar | Introduces a new method for arranging graphics in a grid layout, enhancing the library's functionality. | ❌ |
| [#60](https://github.com/tscircuit/graphics-debug/pull/60) | 🐙 Minor | seveibar | The addition of stacking utilities enhances the library's functionality by allowing users to easily arrange graphics, improving usability and flexibility. | ❌ |
| [#59](https://github.com/tscircuit/graphics-debug/pull/59) | 🐙 Minor | seveibar | Enhancements to text sizing logic improve rendering accuracy and flexibility in graphics. | ❌ |
| [#58](https://github.com/tscircuit/graphics-debug/pull/58) | 🐙 Minor | seveibar | Enhancements to graphics rendering by introducing text objects, improving the overall functionality and interactivity of the graphics component. | ❌ |
| [#57](https://github.com/tscircuit/graphics-debug/pull/57) | 🐙 Minor | seveibar | The addition of the `mergeGraphics` utility enhances the library's functionality by allowing the combination of multiple graphics objects, which is valuable for users needing to manage complex graphics compositions. | ❌ |

### [tscircuit/circuit-json-to-bpc](https://github.com/tscircuit/circuit-json-to-bpc)

| PR # | Impact | Contributor | Description | Milestone Aligned |
|------|--------|-------------|-------------|-------------------|
| [#2](https://github.com/tscircuit/circuit-json-to-bpc/pull/2) | 🐙 Minor | seveibar | Enhancements to the circuit JSON conversion process by adding net label box-pin conversion functionality. | ❌ |

### [tscircuit/schematic-corpus](https://github.com/tscircuit/schematic-corpus)

| PR # | Impact | Contributor | Description | Milestone Aligned |
|------|--------|-------------|-------------|-------------------|
| [#37](https://github.com/tscircuit/schematic-corpus/pull/37) | 🐙 Minor | seveibar | Enhancements to the schematic corpus site with improved SVG handling and user interaction features. | ❌ |
| [#25](https://github.com/tscircuit/schematic-corpus/pull/25) | 🐙 Minor | seveibar | Enhancements to the graphics generation for BPC graphs improve the visual representation of circuit designs. | ❌ |
| [#36](https://github.com/tscircuit/schematic-corpus/pull/36) | 🐙 Minor | Anshgrover23 | Introduces a new circuit design component that enhances the schematic library. | ❌ |
| [#34](https://github.com/tscircuit/schematic-corpus/pull/34) | 🐙 Minor | Anshgrover23 | Introduces a new circuit design with specific component placements and updates the core dependency version. | ❌ |
| [#32](https://github.com/tscircuit/schematic-corpus/pull/32) | 🐙 Minor | Anshgrover23 | Introduces a new design file with multiple net labels and a jumper component, enhancing the circuit design capabilities. | ❌ |
| [#24](https://github.com/tscircuit/schematic-corpus/pull/24) | 🐙 Minor | Anshgrover23 | Introduces a new circuit design with various components, enhancing the schematic corpus. | ❌ |
| [#22](https://github.com/tscircuit/schematic-corpus/pull/22) | 🐙 Minor | Anshgrover23 | Introduces a new circuit design component that enhances the schematic library. | ❌ |
| [#10](https://github.com/tscircuit/schematic-corpus/pull/10) | 🐙 Minor | Anshgrover23 | Introduces a new design example that enhances the library's usability and showcases additional functionality. | ❌ |
| [#33](https://github.com/tscircuit/schematic-corpus/pull/33) | 🐙 Minor | techmannih | Introduces a new circuit design component that enhances the schematic library. | ❌ |
| [#31](https://github.com/tscircuit/schematic-corpus/pull/31) | 🐙 Minor | techmannih | Enhancements to the design025 circuit layout, improving pin arrangement and netlabel connections. | ❌ |
| [#27](https://github.com/tscircuit/schematic-corpus/pull/27) | 🐙 Minor | techmannih | Introduces a new circuit design component that enhances the schematic library. | ❌ |
| [#26](https://github.com/tscircuit/schematic-corpus/pull/26) | 🐙 Minor | techmannih | Introduces a new circuit design component that enhances the schematic library. | ❌ |
| [#21](https://github.com/tscircuit/schematic-corpus/pull/21) | 🐙 Minor | techmannih | Introduces a new circuit design component that enhances the schematic library. | ❌ |
| [#20](https://github.com/tscircuit/schematic-corpus/pull/20) | 🐙 Minor | Abse2001 | Introduces a new circuit design with multiple net labels for a chip, enhancing the schematic representation. | ❌ |
| [#19](https://github.com/tscircuit/schematic-corpus/pull/19) | 🐙 Minor | Abse2001 | Enhancements to circuit design with additional net labels and connections for improved functionality. | ❌ |
| [#18](https://github.com/tscircuit/schematic-corpus/pull/18) | 🐙 Minor | Abse2001 | Introduces a new circuit design component that enhances the schematic capabilities of the project. | ❌ |
| [#17](https://github.com/tscircuit/schematic-corpus/pull/17) | 🐙 Minor | Abse2001 | Introduces a new circuit design component with specific net labels and connections. | ❌ |
| [#16](https://github.com/tscircuit/schematic-corpus/pull/16) | 🐙 Minor | Abse2001 | Introduces a new circuit design component with a switch, capacitor, resistor, and net labels for schematic representation. | ❌ |
| [#15](https://github.com/tscircuit/schematic-corpus/pull/15) | 🐙 Minor | Abse2001 | Introduces a new circuit design component with a switch and net labels for connections. | ❌ |
| [#14](https://github.com/tscircuit/schematic-corpus/pull/14) | 🐙 Minor | Abse2001 | Introduces a new circuit design featuring a schottky diode symbol, addressing a specific functionality issue. | ❌ |
| [#13](https://github.com/tscircuit/schematic-corpus/pull/13) | 🐙 Minor | Abse2001 | Introduces a new circuit design with specific capacitor placements and net labels. | ❌ |
| [#12](https://github.com/tscircuit/schematic-corpus/pull/12) | 🐙 Minor | Abse2001 | Introduces a new circuit design with specific component placements and updates package dependencies. | ❌ |
| [#11](https://github.com/tscircuit/schematic-corpus/pull/11) | 🐌 Tiny | seveibar | The changes enhance the package dependencies and type definitions, improving the project's compatibility and functionality. | ❌ |
| [#35](https://github.com/tscircuit/schematic-corpus/pull/35) | 🐌 Tiny | techmannih | Introduces a new circuit design component that enhances the schematic library. | ❌ |

### [tscircuit/calculate-cell-boundaries](https://github.com/tscircuit/calculate-cell-boundaries)

| PR # | Impact | Contributor | Description | Milestone Aligned |
|------|--------|-------------|-------------|-------------------|
| [#7](https://github.com/tscircuit/calculate-cell-boundaries/pull/7) | 🐙 Minor | seveibar | Refactoring the internal layout enhances code organization and maintainability, improving the overall structure of the project. | ❌ |

### [tscircuit/deps.tscircuit.com](https://github.com/tscircuit/deps.tscircuit.com)

| PR # | Impact | Contributor | Description | Milestone Aligned |
|------|--------|-------------|-------------|-------------------|
| [#23](https://github.com/tscircuit/deps.tscircuit.com/pull/23) | 🐌 Tiny | seveibar | Enhancing the dependency graph by categorizing and installing the @tscircuit/cli package as a downstream dependency adds clarity and functionality to the project. | ❌ |

### [tscircuit/sparkfun-boards](https://github.com/tscircuit/sparkfun-boards)

| PR # | Impact | Contributor | Description | Milestone Aligned |
|------|--------|-------------|-------------|-------------------|
| [#18](https://github.com/tscircuit/sparkfun-boards/pull/18) | 🐳 Major | Anshgrover23 | The addition of the SparkFun Human Presence and Motion Sensor enhances the repository's offerings, providing new functionality for users. | ❌ |
| [#29](https://github.com/tscircuit/sparkfun-boards/pull/29) | 🐳 Major | Abse2001 | The addition of a new board design for the SparkFun Transceiver Breakout MAX3232 enhances the repository's offerings, providing essential components for RS-232 communication. | ❌ |
| [#33](https://github.com/tscircuit/sparkfun-boards/pull/33) | 🐙 Minor | Anshgrover23 | Refactoring the code to improve organization by separating the jumper footprint into its own file enhances maintainability and readability. | ❌ |
| [#24](https://github.com/tscircuit/sparkfun-boards/pull/24) | 🐙 Minor | Anshgrover23 | The update enhances the RFM69 Breakout Board's design and functionality by incorporating new features and optimizations. | ❌ |
| [#12](https://github.com/tscircuit/sparkfun-boards/pull/12) | 🐙 Minor | techmannih | The pull request enhances the USBToSerialBreakout board by correcting pin labels and adding a new component, improving functionality and clarity. | ❌ |
| [#37](https://github.com/tscircuit/sparkfun-boards/pull/37) | 🐙 Minor | MustafaMulla29 | The changes enhance the design and functionality of the HMC6343 breakout board, improving component placement and specifications. | ❌ |
| [#32](https://github.com/tscircuit/sparkfun-boards/pull/32) | 🐌 Tiny | Anshgrover23 | Enhances the development workflow by adding snapshot scripts for easier testing and updates. | ❌ |
| [#16](https://github.com/tscircuit/sparkfun-boards/pull/16) | 🐌 Tiny | Anshgrover23 | Adding a README file enhances documentation and usability for users of the SparkFun RFM69 Breakout board. | ❌ |
| [#30](https://github.com/tscircuit/sparkfun-boards/pull/30) | 🐌 Tiny | ShiboSoftwareDev | The pull request refines the schematic adjustments for the I2C DAC Breakout, enhancing precision in component placement. | ❌ |
| [#25](https://github.com/tscircuit/sparkfun-boards/pull/25) | 🐌 Tiny | ShiboSoftwareDev | Enhancements to the CI workflows and dependency updates improve the reliability and performance of the project. | ❌ |
| [#31](https://github.com/tscircuit/sparkfun-boards/pull/31) | 🐌 Tiny | techmannih | Adding a README file enhances documentation and usability for the SparkFun USB to Serial Breakout board. | ❌ |
| [#21](https://github.com/tscircuit/sparkfun-boards/pull/21) | 🐌 Tiny | MustafaMulla29 | Updates dependencies and snapshots to ensure compatibility and reflect recent changes in the project. | ❌ |

### [tscircuit/tscircuit-autorouter](https://github.com/tscircuit/tscircuit-autorouter)

| PR # | Impact | Contributor | Description | Milestone Aligned |
|------|--------|-------------|-------------|-------------------|
| [#172](https://github.com/tscircuit/tscircuit-autorouter/pull/172) | 🐙 Minor | Anshgrover23 | Enhancements to testing fixtures for improved debugging of autorouting hypersolver issues. | ❌ |
| [#171](https://github.com/tscircuit/tscircuit-autorouter/pull/171) | 🐙 Minor | Anshgrover23 | Enhancements to testing fixtures for hyperdensity bugs improve the robustness of the autorouting feature. | ❌ |
| [#165](https://github.com/tscircuit/tscircuit-autorouter/pull/165) | 🐙 Minor | Anshgrover23 | Enhancements to testing fixtures for improved debugging of hyperdensity solver issues. | ❌ |
| [#168](https://github.com/tscircuit/tscircuit-autorouter/pull/168) | 🐙 Minor | Anshgrover23 | Introduces a new JSON asset and a corresponding fixture for high-density debugging, enhancing testing capabilities. | ❌ |
| [#177](https://github.com/tscircuit/tscircuit-autorouter/pull/177) | 🐙 Minor | techmannih | Enhances the autorouter's capabilities by adding high-density node fixtures, improving routing efficiency. | ❌ |
| [#180](https://github.com/tscircuit/tscircuit-autorouter/pull/180) | 🐙 Minor | ricohageman | Enhancing precision in delta calculations to resolve caching issues improves the reliability of the solver. | ❌ |
| [#170](https://github.com/tscircuit/tscircuit-autorouter/pull/170) | 🐌 Tiny | Anshgrover23 | Excluding JSON files from formatting enhances the development workflow by preventing unnecessary changes in these files. | ❌ |

### [tscircuit/footprinter](https://github.com/tscircuit/footprinter)

| PR # | Impact | Contributor | Description | Milestone Aligned |
|------|--------|-------------|-------------|-------------------|
| [#307](https://github.com/tscircuit/footprinter/pull/307) | 🐙 Minor | ShiboSoftwareDev | Enhancement of the pinrow functionality by allowing the omission of silkscreen pin labels, improving customization for users. | ❌ |
| [#306](https://github.com/tscircuit/footprinter/pull/306) | 🐙 Minor | techmannih | Adjusts the dimensions of the 1210 footprint to improve compatibility with tall pads, enhancing design accuracy. | ❌ |

### [tscircuit/3d-viewer](https://github.com/tscircuit/3d-viewer)

| PR # | Impact | Contributor | Description | Milestone Aligned |
|------|--------|-------------|-------------|-------------------|
| [#365](https://github.com/tscircuit/3d-viewer/pull/365) | 🐙 Minor | ShiboSoftwareDev | Enhancements to JSX board definitions improve the functionality and flexibility of the Manifold engine. | ❌ |
| [#364](https://github.com/tscircuit/3d-viewer/pull/364) | 🐙 Minor | ShiboSoftwareDev | Enhancements to handle empty board scenarios in the manifold rendering process. | ❌ |

### [tscircuit/schematic-symbols](https://github.com/tscircuit/schematic-symbols)

| PR # | Impact | Contributor | Description | Milestone Aligned |
|------|--------|-------------|-------------|-------------------|
| [#316](https://github.com/tscircuit/schematic-symbols/pull/316) | 🐙 Minor | techmannih | Introduces a new symbol for representing unconnected nodes in schematic diagrams, enhancing the library's functionality. | ❌ |
| [#315](https://github.com/tscircuit/schematic-symbols/pull/315) | 🐙 Minor | techmannih | The pull request reduces the size of the testpoint symbol, enhancing the visual clarity of schematic diagrams. | ❌ |

## Changes by Contributor

### [imrishabh18](https://github.com/imrishabh18)

| PR # | Impact | Description | Milestone Aligned |
|------|--------|-------------|-------------------|
| [#307](https://github.com/tscircuit/props/pull/307) | 🐙 Minor | Enhancements to the PlatformConfig interface improve configurability and documentation for board information. | ❌ |
| [#998](https://github.com/tscircuit/core/pull/998) | 🐙 Minor | Enhances the board's silkscreen by adding project-specific information, improving documentation and usability. | ❌ |
| [#1002](https://github.com/tscircuit/core/pull/1002) | 🐙 Minor | Enhances the autorouting functionality by preventing multiple traces between the same pins in subcircuits, improving circuit design integrity. | ❌ |
| [#997](https://github.com/tscircuit/core/pull/997) | 🐙 Minor | The addition of a test case to ensure that subcircuits do not generate duplicate traces enhances the reliability of the circuit design process. | ❌ |
| [#992](https://github.com/tscircuit/core/pull/992) | 🐙 Minor | Enhancements to the SolderJumper component improve its configurability by allowing dynamic symbol names. | ❌ |
| [#989](https://github.com/tscircuit/core/pull/989) | 🐙 Minor | Enhancement of the SolderJumper component to support a new bridged property, improving its functionality. | ❌ |
| [#268](https://github.com/tscircuit/circuit-to-svg/pull/268) | 🐙 Minor | Enhancement of text rendering capabilities in PCB silkscreen by supporting multi-line text through newline handling. | ❌ |
| [#45](https://github.com/tscircuit/circuit-json-to-gerber/pull/45) | 🐙 Minor | Enhancements to text rendering in Gerber files improve layout precision for silkscreen text. | ❌ |
| [#1393](https://github.com/tscircuit/tscircuit.com/pull/1393) | 🐙 Minor | Enhances user experience by providing contextual information for the AI autocomplete feature. | ❌ |
| [#1371](https://github.com/tscircuit/tscircuit.com/pull/1371) | 🐙 Minor | Enhances the dashboard by ensuring packages are sorted based on their update or creation date, improving user experience. | ❌ |
| [#1370](https://github.com/tscircuit/tscircuit.com/pull/1370) | 🐙 Minor | Enhancing the dashboard's package sorting functionality by preventing mutation of cached data improves data integrity and user experience. | ❌ |
| [#830](https://github.com/tscircuit/runframe/pull/830) | 🐙 Minor | Enhancements to version fetching improve reliability and ensure the latest version of the eval package is used, addressing caching issues. | ❌ |
| [#93](https://github.com/tscircuit/docs/pull/93) | 🐙 Minor | Enhances documentation by adding video demonstrations for manual edits in PCB and schematic viewers. | ❌ |
| [#9](https://github.com/tscircuit/parts-engine/pull/9) | 🐙 Minor | Enhances the search functionality by allowing it to consider both the displayed and absolute values of resistance and capacitance. | ❌ |
| [#3](https://github.com/tscircuit/led-water-accelerometer/pull/3) | 🐙 Minor | Enhancements to the PCB design by adding mounting holes and improving power connections. | ❌ |
| [#694](https://github.com/tscircuit/tscircuit/pull/694) | 🐌 Tiny | Updates the core and eval packages to their latest versions, ensuring compatibility and potentially introducing minor improvements. | ❌ |
| [#1013](https://github.com/tscircuit/core/pull/1013) | 🐌 Tiny | The change ensures compatibility by locking the css-select package to a specific version, preventing potential type issues. | ❌ |
| [#1394](https://github.com/tscircuit/tscircuit.com/pull/1394) | 🐌 Tiny | Updating the runframe package to a newer version enhances the project's dependencies and may improve functionality or performance. | ❌ |
| [#624](https://github.com/tscircuit/eval/pull/624) | 🐌 Tiny | Updates the parts-engine dependency and enhances test coverage for parts validation. | ❌ |
| [#608](https://github.com/tscircuit/eval/pull/608) | 🐌 Tiny | Updating the core package version enhances compatibility and potentially introduces new features or fixes. | ❌ |
| [#252](https://github.com/tscircuit/cli/pull/252) | 🐌 Tiny | Updates dependencies in the package.json file to newer versions, ensuring compatibility and potentially improved functionality. | ❌ |

### [seveibar](https://github.com/seveibar)

| PR # | Impact | Description | Milestone Aligned |
|------|--------|-------------|-------------------|
| [#8](https://github.com/tscircuit/bpc-graph/pull/8) | 🐳 Major | Enhancements to the graphical representation and functionality for network adaptation and box assignment in the BPC graph. | ❌ |
| [#308](https://github.com/tscircuit/props/pull/308) | 🐙 Minor | Enhances component prop interfaces by introducing a new optional `pinAttributes` field, improving type safety and flexibility. | ❌ |
| [#270](https://github.com/tscircuit/easyeda-converter/pull/270) | 🐙 Minor | Enhancing the converter to support vias significantly improves its functionality for users needing TSX output. | ❌ |
| [#269](https://github.com/tscircuit/easyeda-converter/pull/269) | 🐙 Minor | Enhancements to VIA shape handling significantly improve the package conversion process. | ❌ |
| [#1016](https://github.com/tscircuit/core/pull/1016) | 🐙 Minor | The introduction of a new algorithm for match adaptation using BPC graphs significantly enhances the schematic layout capabilities. | ❌ |
| [#1015](https://github.com/tscircuit/core/pull/1015) | 🐙 Minor | Enhancements to schematic symbol rotation through new orientation tests for polarized capacitors. | ❌ |
| [#1005](https://github.com/tscircuit/core/pull/1005) | 🐙 Minor | Elimination of a placeholder improves code clarity and ensures proper fallback naming in component generation. | ❌ |
| [#1004](https://github.com/tscircuit/core/pull/1004) | 🐙 Minor | Enhancements to netlabel positioning improve schematic accuracy and usability. | ❌ |
| [#1003](https://github.com/tscircuit/core/pull/1003) | 🐙 Minor | Fixes a bug related to net IDs in schematic net labels, enhancing the accuracy of the schematic representation. | ❌ |
| [#976](https://github.com/tscircuit/core/pull/976) | 🐙 Minor | Enhancements to net label positioning improve schematic clarity and usability. | ❌ |
| [#276](https://github.com/tscircuit/circuit-to-svg/pull/276) | 🐙 Minor | Enhancements to label rendering improve visual clarity and consistency in schematic representations. | ❌ |
| [#52](https://github.com/tscircuit/checks/pull/52) | 🐙 Minor | The addition of the runAllChecks utility enhances the testing capabilities of the project by integrating multiple checks into a single function, improving code quality assurance. | ❌ |
| [#44](https://github.com/tscircuit/circuit-json-to-gerber/pull/44) | 🐙 Minor | Enhancement of text anchor support in Gerber conversion, improving layout flexibility. | ❌ |
| [#1325](https://github.com/tscircuit/tscircuit.com/pull/1325) | 🐙 Minor | Enhancing TypeScript library caching through IndexedDB improves performance and resource management in the CodeEditor. | ❌ |
| [#62](https://github.com/tscircuit/jlcsearch/pull/62) | 🐙 Minor | Enhances the gas sensors functionality by introducing measurement filtering, improving user experience and data relevance. | ❌ |
| [#61](https://github.com/tscircuit/jlcsearch/pull/61) | 🐙 Minor | Enhancements to gas sensor data handling and exposure of measurement capabilities. | ❌ |
| [#60](https://github.com/tscircuit/jlcsearch/pull/60) | 🐙 Minor | The addition of a dedicated page for Boost DC-DC converters enhances the repository's functionality by providing users with a comprehensive list and details of available converters. | ❌ |
| [#67](https://github.com/tscircuit/graphics-debug/pull/67) | 🐙 Minor | Adjusts the default behavior of the `includeTextLabels` parameter to improve SVG generation by omitting text labels unless specified otherwise. | ❌ |
| [#64](https://github.com/tscircuit/graphics-debug/pull/64) | 🐙 Minor | Enhancements to rectangle label positioning and size improve visual clarity and usability. | ❌ |
| [#66](https://github.com/tscircuit/graphics-debug/pull/66) | 🐙 Minor | Enhancing SVG customization capabilities by allowing dynamic width and height adjustments adds significant flexibility for users. | ❌ |
| [#65](https://github.com/tscircuit/graphics-debug/pull/65) | 🐙 Minor | Corrects the Y offset in graphics grid creation to ensure proper row orientation, enhancing the functionality of the graphics rendering. | ❌ |
| [#63](https://github.com/tscircuit/graphics-debug/pull/63) | 🐙 Minor | Dynamic font sizing for rectangle labels enhances visual clarity and adaptability in graphics rendering. | ❌ |
| [#62](https://github.com/tscircuit/graphics-debug/pull/62) | 🐙 Minor | Enhancements to the graphics grid functionality by allowing customizable gaps between cells, improving layout flexibility. | ❌ |
| [#61](https://github.com/tscircuit/graphics-debug/pull/61) | 🐙 Minor | Introduces a new method for arranging graphics in a grid layout, enhancing the library's functionality. | ❌ |
| [#60](https://github.com/tscircuit/graphics-debug/pull/60) | 🐙 Minor | The addition of stacking utilities enhances the library's functionality by allowing users to easily arrange graphics, improving usability and flexibility. | ❌ |
| [#59](https://github.com/tscircuit/graphics-debug/pull/59) | 🐙 Minor | Enhancements to text sizing logic improve rendering accuracy and flexibility in graphics. | ❌ |
| [#58](https://github.com/tscircuit/graphics-debug/pull/58) | 🐙 Minor | Enhancements to graphics rendering by introducing text objects, improving the overall functionality and interactivity of the graphics component. | ❌ |
| [#57](https://github.com/tscircuit/graphics-debug/pull/57) | 🐙 Minor | The addition of the `mergeGraphics` utility enhances the library's functionality by allowing the combination of multiple graphics objects, which is valuable for users needing to manage complex graphics compositions. | ❌ |
| [#17](https://github.com/tscircuit/bpc-graph/pull/17) | 🐙 Minor | Enhancements to the README provide clearer examples and improve usability for users interacting with BPC graphs. | ❌ |
| [#13](https://github.com/tscircuit/bpc-graph/pull/13) | 🐙 Minor | Enhancing documentation and adding example tests significantly improves usability and understanding of the library. | ❌ |
| [#12](https://github.com/tscircuit/bpc-graph/pull/12) | 🐙 Minor | Enhancements to graph partitioning and renetworking improve the scoring and connectivity of BPC graphs, facilitating better performance in layout matching. | ❌ |
| [#11](https://github.com/tscircuit/bpc-graph/pull/11) | 🐙 Minor | Enhancements to graph handling through the introduction of subgraph partitioning and improved pin direction handling. | ❌ |
| [#10](https://github.com/tscircuit/bpc-graph/pull/10) | 🐙 Minor | The implementation of box side graph utilities enhances the graph processing capabilities by allowing for the detection and merging of isolated box sides, which is crucial for improving the overall functionality of the graph system. | ❌ |
| [#9](https://github.com/tscircuit/bpc-graph/pull/9) | 🐙 Minor | Enhancements to the net adaptation logic and additional testing improve the robustness and reliability of the BPC graph handling. | ❌ |
| [#7](https://github.com/tscircuit/bpc-graph/pull/7) | 🐙 Minor | Enhancements to adjacency matrix computations and graph matching functionalities significantly improve the library's capabilities. | ❌ |
| [#6](https://github.com/tscircuit/bpc-graph/pull/6) | 🐙 Minor | The pull request introduces a significant refactor of the graph similarity calculation logic, enhancing the functionality and maintainability of the codebase. | ❌ |
| [#5](https://github.com/tscircuit/bpc-graph/pull/5) | 🐙 Minor | Enhancements to the graph transformation process with added logging and a new corpus matcher page. | ❌ |
| [#4](https://github.com/tscircuit/bpc-graph/pull/4) | 🐙 Minor | The addition of a corpus matcher page enhances the functionality of the application by allowing users to compare BPC graphs against a predefined corpus, thereby improving usability and feature set. | ❌ |
| [#2](https://github.com/tscircuit/circuit-json-to-bpc/pull/2) | 🐙 Minor | Enhancements to the circuit JSON conversion process by adding net label box-pin conversion functionality. | ❌ |
| [#37](https://github.com/tscircuit/schematic-corpus/pull/37) | 🐙 Minor | Enhancements to the schematic corpus site with improved SVG handling and user interaction features. | ❌ |
| [#25](https://github.com/tscircuit/schematic-corpus/pull/25) | 🐙 Minor | Enhancements to the graphics generation for BPC graphs improve the visual representation of circuit designs. | ❌ |
| [#7](https://github.com/tscircuit/calculate-cell-boundaries/pull/7) | 🐙 Minor | Refactoring the internal layout enhances code organization and maintainability, improving the overall structure of the project. | ❌ |
| [#253](https://github.com/tscircuit/cli/pull/253) | 🐌 Tiny | Refactoring the CLI to utilize peer dependencies enhances compatibility and reduces bundle size, improving overall performance. | ❌ |
| [#94](https://github.com/tscircuit/docs/pull/94) | 🐌 Tiny | Enhances documentation by providing clear guidance on the use of the schOrientation property for polarized capacitors. | ❌ |
| [#92](https://github.com/tscircuit/docs/pull/92) | 🐌 Tiny | Enhances documentation by detailing the usage of `sel.net` within the selector pattern, improving developer understanding. | ❌ |
| [#11](https://github.com/tscircuit/schematic-corpus/pull/11) | 🐌 Tiny | The changes enhance the package dependencies and type definitions, improving the project's compatibility and functionality. | ❌ |
| [#23](https://github.com/tscircuit/deps.tscircuit.com/pull/23) | 🐌 Tiny | Enhancing the dependency graph by categorizing and installing the @tscircuit/cli package as a downstream dependency adds clarity and functionality to the project. | ❌ |

### [Anshgrover23](https://github.com/Anshgrover23)

| PR # | Impact | Description | Milestone Aligned |
|------|--------|-------------|-------------------|
| [#18](https://github.com/tscircuit/sparkfun-boards/pull/18) | 🐳 Major | The addition of the SparkFun Human Presence and Motion Sensor enhances the repository's offerings, providing new functionality for users. | ❌ |
| [#304](https://github.com/tscircuit/props/pull/304) | 🐙 Minor | Enhancement of LED component functionality by introducing a connections property for better integration. | ❌ |
| [#172](https://github.com/tscircuit/tscircuit-autorouter/pull/172) | 🐙 Minor | Enhancements to testing fixtures for improved debugging of autorouting hypersolver issues. | ❌ |
| [#171](https://github.com/tscircuit/tscircuit-autorouter/pull/171) | 🐙 Minor | Enhancements to testing fixtures for hyperdensity bugs improve the robustness of the autorouting feature. | ❌ |
| [#165](https://github.com/tscircuit/tscircuit-autorouter/pull/165) | 🐙 Minor | Enhancements to testing fixtures for improved debugging of hyperdensity solver issues. | ❌ |
| [#168](https://github.com/tscircuit/tscircuit-autorouter/pull/168) | 🐙 Minor | Introduces a new JSON asset and a corresponding fixture for high-density debugging, enhancing testing capabilities. | ❌ |
| [#8](https://github.com/tscircuit/parts-engine/pull/8) | 🐙 Minor | Enhancing robustness by ensuring that undefined fuses are handled gracefully in the findPart function. | ❌ |
| [#33](https://github.com/tscircuit/sparkfun-boards/pull/33) | 🐙 Minor | Refactoring the code to improve organization by separating the jumper footprint into its own file enhances maintainability and readability. | ❌ |
| [#24](https://github.com/tscircuit/sparkfun-boards/pull/24) | 🐙 Minor | The update enhances the RFM69 Breakout Board's design and functionality by incorporating new features and optimizations. | ❌ |
| [#36](https://github.com/tscircuit/schematic-corpus/pull/36) | 🐙 Minor | Introduces a new circuit design component that enhances the schematic library. | ❌ |
| [#34](https://github.com/tscircuit/schematic-corpus/pull/34) | 🐙 Minor | Introduces a new circuit design with specific component placements and updates the core dependency version. | ❌ |
| [#32](https://github.com/tscircuit/schematic-corpus/pull/32) | 🐙 Minor | Introduces a new design file with multiple net labels and a jumper component, enhancing the circuit design capabilities. | ❌ |
| [#24](https://github.com/tscircuit/schematic-corpus/pull/24) | 🐙 Minor | Introduces a new circuit design with various components, enhancing the schematic corpus. | ❌ |
| [#22](https://github.com/tscircuit/schematic-corpus/pull/22) | 🐙 Minor | Introduces a new circuit design component that enhances the schematic library. | ❌ |
| [#10](https://github.com/tscircuit/schematic-corpus/pull/10) | 🐙 Minor | Introduces a new design example that enhances the library's usability and showcases additional functionality. | ❌ |
| [#995](https://github.com/tscircuit/core/pull/995) | 🐌 Tiny | Enhances testing capabilities for the LED component by adding a connections test, ensuring proper functionality. | ❌ |
| [#1389](https://github.com/tscircuit/tscircuit.com/pull/1389) | 🐌 Tiny | Updating the circuit-to-svg dependency to a newer version enhances the project's compatibility and may include important bug fixes or improvements. | ❌ |
| [#255](https://github.com/tscircuit/cli/pull/255) | 🐌 Tiny | Updating dependencies enhances the stability and performance of the project by ensuring compatibility with the latest features and fixes. | ❌ |
| [#170](https://github.com/tscircuit/tscircuit-autorouter/pull/170) | 🐌 Tiny | Excluding JSON files from formatting enhances the development workflow by preventing unnecessary changes in these files. | ❌ |
| [#32](https://github.com/tscircuit/sparkfun-boards/pull/32) | 🐌 Tiny | Enhances the development workflow by adding snapshot scripts for easier testing and updates. | ❌ |
| [#16](https://github.com/tscircuit/sparkfun-boards/pull/16) | 🐌 Tiny | Adding a README file enhances documentation and usability for users of the SparkFun RFM69 Breakout board. | ❌ |

### [ShiboSoftwareDev](https://github.com/ShiboSoftwareDev)

| PR # | Impact | Description | Milestone Aligned |
|------|--------|-------------|-------------------|
| [#307](https://github.com/tscircuit/footprinter/pull/307) | 🐙 Minor | Enhancement of the pinrow functionality by allowing the omission of silkscreen pin labels, improving customization for users. | ❌ |
| [#365](https://github.com/tscircuit/3d-viewer/pull/365) | 🐙 Minor | Enhancements to JSX board definitions improve the functionality and flexibility of the Manifold engine. | ❌ |
| [#364](https://github.com/tscircuit/3d-viewer/pull/364) | 🐙 Minor | Enhancements to handle empty board scenarios in the manifold rendering process. | ❌ |
| [#1008](https://github.com/tscircuit/core/pull/1008) | 🐙 Minor | Enhancements to the board center calculation improve accuracy in PCB design. | ❌ |
| [#1000](https://github.com/tscircuit/core/pull/1000) | 🐙 Minor | Enhances the core functionality by implementing obstacle generation for various cutout shapes, improving the design capabilities. | ❌ |
| [#270](https://github.com/tscircuit/circuit-to-svg/pull/270) | 🐙 Minor | Enhancements to the SVG rendering of assembly components by adding pads, pins, and holes, improving visual representation. | ❌ |
| [#251](https://github.com/tscircuit/cli/pull/251) | 🐙 Minor | Updating the Node.js version in workflows enhances compatibility and performance for the project. | ❌ |
| [#250](https://github.com/tscircuit/cli/pull/250) | 🐙 Minor | Enhances the build command by allowing it to proceed despite circuitJson errors when the --ignore-errors flag is used. | ❌ |
| [#999](https://github.com/tscircuit/core/pull/999) | 🐌 Tiny | Updates the footprinter package version and adjusts test cases for consistency in height values. | ❌ |
| [#30](https://github.com/tscircuit/sparkfun-boards/pull/30) | 🐌 Tiny | The pull request refines the schematic adjustments for the I2C DAC Breakout, enhancing precision in component placement. | ❌ |
| [#25](https://github.com/tscircuit/sparkfun-boards/pull/25) | 🐌 Tiny | Enhancements to the CI workflows and dependency updates improve the reliability and performance of the project. | ❌ |

### [techmannih](https://github.com/techmannih)

| PR # | Impact | Description | Milestone Aligned |
|------|--------|-------------|-------------------|
| [#306](https://github.com/tscircuit/footprinter/pull/306) | 🐙 Minor | Adjusts the dimensions of the 1210 footprint to improve compatibility with tall pads, enhancing design accuracy. | ❌ |
| [#316](https://github.com/tscircuit/schematic-symbols/pull/316) | 🐙 Minor | Introduces a new symbol for representing unconnected nodes in schematic diagrams, enhancing the library's functionality. | ❌ |
| [#315](https://github.com/tscircuit/schematic-symbols/pull/315) | 🐙 Minor | The pull request reduces the size of the testpoint symbol, enhancing the visual clarity of schematic diagrams. | ❌ |
| [#177](https://github.com/tscircuit/tscircuit-autorouter/pull/177) | 🐙 Minor | Enhances the autorouter's capabilities by adding high-density node fixtures, improving routing efficiency. | ❌ |
| [#12](https://github.com/tscircuit/sparkfun-boards/pull/12) | 🐙 Minor | The pull request enhances the USBToSerialBreakout board by correcting pin labels and adding a new component, improving functionality and clarity. | ❌ |
| [#33](https://github.com/tscircuit/schematic-corpus/pull/33) | 🐙 Minor | Introduces a new circuit design component that enhances the schematic library. | ❌ |
| [#31](https://github.com/tscircuit/schematic-corpus/pull/31) | 🐙 Minor | Enhancements to the design025 circuit layout, improving pin arrangement and netlabel connections. | ❌ |
| [#27](https://github.com/tscircuit/schematic-corpus/pull/27) | 🐙 Minor | Introduces a new circuit design component that enhances the schematic library. | ❌ |
| [#26](https://github.com/tscircuit/schematic-corpus/pull/26) | 🐙 Minor | Introduces a new circuit design component that enhances the schematic library. | ❌ |
| [#21](https://github.com/tscircuit/schematic-corpus/pull/21) | 🐙 Minor | Introduces a new circuit design component that enhances the schematic library. | ❌ |
| [#1014](https://github.com/tscircuit/core/pull/1014) | 🐌 Tiny | Enhancements to schematic testing and symbol updates contribute to improved functionality. | ❌ |
| [#1395](https://github.com/tscircuit/tscircuit.com/pull/1395) | 🐌 Tiny | Updating the footprinter dependency to a newer version may enhance functionality or fix issues related to that package. | ❌ |
| [#31](https://github.com/tscircuit/sparkfun-boards/pull/31) | 🐌 Tiny | Adding a README file enhances documentation and usability for the SparkFun USB to Serial Breakout board. | ❌ |
| [#35](https://github.com/tscircuit/schematic-corpus/pull/35) | 🐌 Tiny | Introduces a new circuit design component that enhances the schematic library. | ❌ |

### [MustafaMulla29](https://github.com/MustafaMulla29)

| PR # | Impact | Description | Milestone Aligned |
|------|--------|-------------|-------------------|
| [#1009](https://github.com/tscircuit/core/pull/1009) | 🐙 Minor | Enhances testing capabilities for jumper netlabel connections in the circuit design. | ❌ |
| [#37](https://github.com/tscircuit/sparkfun-boards/pull/37) | 🐙 Minor | The changes enhance the design and functionality of the HMC6343 breakout board, improving component placement and specifications. | ❌ |
| [#21](https://github.com/tscircuit/sparkfun-boards/pull/21) | 🐌 Tiny | Updates dependencies and snapshots to ensure compatibility and reflect recent changes in the project. | ❌ |

### [Abse2001](https://github.com/Abse2001)

| PR # | Impact | Description | Milestone Aligned |
|------|--------|-------------|-------------------|
| [#29](https://github.com/tscircuit/sparkfun-boards/pull/29) | 🐳 Major | The addition of a new board design for the SparkFun Transceiver Breakout MAX3232 enhances the repository's offerings, providing essential components for RS-232 communication. | ❌ |
| [#996](https://github.com/tscircuit/core/pull/996) | 🐙 Minor | Enhancement of selector functionality by introducing support for test point selectors, improving the flexibility of the library. | ❌ |
| [#20](https://github.com/tscircuit/schematic-corpus/pull/20) | 🐙 Minor | Introduces a new circuit design with multiple net labels for a chip, enhancing the schematic representation. | ❌ |
| [#19](https://github.com/tscircuit/schematic-corpus/pull/19) | 🐙 Minor | Enhancements to circuit design with additional net labels and connections for improved functionality. | ❌ |
| [#18](https://github.com/tscircuit/schematic-corpus/pull/18) | 🐙 Minor | Introduces a new circuit design component that enhances the schematic capabilities of the project. | ❌ |
| [#17](https://github.com/tscircuit/schematic-corpus/pull/17) | 🐙 Minor | Introduces a new circuit design component with specific net labels and connections. | ❌ |
| [#16](https://github.com/tscircuit/schematic-corpus/pull/16) | 🐙 Minor | Introduces a new circuit design component with a switch, capacitor, resistor, and net labels for schematic representation. | ❌ |
| [#15](https://github.com/tscircuit/schematic-corpus/pull/15) | 🐙 Minor | Introduces a new circuit design component with a switch and net labels for connections. | ❌ |
| [#14](https://github.com/tscircuit/schematic-corpus/pull/14) | 🐙 Minor | Introduces a new circuit design featuring a schottky diode symbol, addressing a specific functionality issue. | ❌ |
| [#13](https://github.com/tscircuit/schematic-corpus/pull/13) | 🐙 Minor | Introduces a new circuit design with specific capacitor placements and net labels. | ❌ |
| [#12](https://github.com/tscircuit/schematic-corpus/pull/12) | 🐙 Minor | Introduces a new circuit design with specific component placements and updates package dependencies. | ❌ |

### [ArnavK-09](https://github.com/ArnavK-09)

| PR # | Impact | Description | Milestone Aligned |
|------|--------|-------------|-------------------|
| [#1388](https://github.com/tscircuit/tscircuit.com/pull/1388) | 🐳 Major | Introduces a global find and replace feature, enhancing code editing capabilities significantly. | ❌ |
| [#1378](https://github.com/tscircuit/tscircuit.com/pull/1378) | 🐳 Major | Revamping the Cmd+K menu enhances user experience by improving search functionality and interface design. | ❌ |
| [#820](https://github.com/tscircuit/runframe/pull/820) | 🐳 Major | Enhancements to the user interface for full screen previews significantly improve user experience on tscircuit.com. | ❌ |
| [#1382](https://github.com/tscircuit/tscircuit.com/pull/1382) | 🐙 Minor | Introducing a native sharing feature enhances user engagement by allowing easy sharing of package information. | ❌ |
| [#1381](https://github.com/tscircuit/tscircuit.com/pull/1381) | 🐙 Minor | Enhances user experience by preventing navigation errors during package loading. | ❌ |
| [#1379](https://github.com/tscircuit/tscircuit.com/pull/1379) | 🐙 Minor | Enhancements to responsiveness improve user experience on build pages. | ❌ |
| [#1374](https://github.com/tscircuit/tscircuit.com/pull/1374) | 🐙 Minor | Enhancing user experience by ensuring the correct GitHub username is displayed in the settings dialog. | ❌ |
| [#1373](https://github.com/tscircuit/tscircuit.com/pull/1373) | 🐙 Minor | Enhances security by limiting AI review generation to package owners, ensuring only authorized users can access this feature. | ❌ |
| [#1372](https://github.com/tscircuit/tscircuit.com/pull/1372) | 🐙 Minor | Introducing a toggle button for AI autocomplete enhances user interaction and functionality within the code editor. | ❌ |
| [#824](https://github.com/tscircuit/runframe/pull/824) | 🐙 Minor | Enhances user experience by ensuring that the last active tab is preserved when an error occurs, improving navigation and usability. | ❌ |
| [#823](https://github.com/tscircuit/runframe/pull/823) | 🐙 Minor | The changes enhance the user interface by ensuring proper height adjustments for full-screen and CLI runframe previews, improving usability and visual consistency. | ❌ |
| [#1387](https://github.com/tscircuit/tscircuit.com/pull/1387) | 🐌 Tiny | Updating dependencies enhances the stability and performance of the project by ensuring that the latest features and bug fixes are included. | ❌ |
| [#1384](https://github.com/tscircuit/tscircuit.com/pull/1384) | 🐌 Tiny | Enhancements to the UI components for better size management and performance. | ❌ |
| [#1383](https://github.com/tscircuit/tscircuit.com/pull/1383) | 🐌 Tiny | Removes unnecessary spacing in the CmdKMenu component, enhancing visual consistency. | ❌ |
| [#254](https://github.com/tscircuit/cli/pull/254) | 🐌 Tiny | Updating dependencies and runframe enhances the project's stability and performance. | ❌ |

### [andrii-balitskyi](https://github.com/andrii-balitskyi)

| PR # | Impact | Description | Milestone Aligned |
|------|--------|-------------|-------------------|
| [#1368](https://github.com/tscircuit/tscircuit.com/pull/1368) | 🐙 Minor | Enhancements to the AI review loading state improve user experience during review requests. | ❌ |

### [tscircuitbot](https://github.com/tscircuitbot)

| PR # | Impact | Description | Milestone Aligned |
|------|--------|-------------|-------------------|
| [#619](https://github.com/tscircuit/eval/pull/619) | 🐌 Tiny | Updating dependencies is essential for maintaining project health and ensuring compatibility with other packages. | ❌ |

### [ricohageman](https://github.com/ricohageman)

| PR # | Impact | Description | Milestone Aligned |
|------|--------|-------------|-------------------|
| [#180](https://github.com/tscircuit/tscircuit-autorouter/pull/180) | 🐙 Minor | Enhancing precision in delta calculations to resolve caching issues improves the reliability of the solver. | ❌ |

## Repository Owners

| Repository | Codeowners |
|------------|------------|
| [circuit-json-to-gerber](https://github.com/tscircuit/circuit-json-to-gerber/blob/main/.github/CODEOWNERS) | [seveibar](https://github.com/seveibar), [ShiboSoftwareDev](https://github.com/ShiboSoftwareDev) |
| [tscircuit.com](https://github.com/tscircuit/tscircuit.com/blob/main/.github/CODEOWNERS) | [seveibar](https://github.com/seveibar), [imrishabh18](https://github.com/imrishabh18) |
| [cli](https://github.com/tscircuit/cli/blob/main/.github/CODEOWNERS) | [seveibar](https://github.com/seveibar), [imrishabh18](https://github.com/imrishabh18), [ArnavK-09](https://github.com/ArnavK-09) |
| [circuit-to-svg](https://github.com/tscircuit/circuit-to-svg/blob/main/.github/CODEOWNERS) | [imrishabh18](https://github.com/imrishabh18) |
| [footprinter](https://github.com/tscircuit/footprinter/blob/main/.github/CODEOWNERS) | [techmannih](https://github.com/techmannih) |

## Repos by Owner

| User | Repo |
|------|------|
| [seveibar](https://github.com/seveibar) | [circuit-json-to-gerber](https://github.com/tscircuit/circuit-json-to-gerber/blob/main/.github/CODEOWNERS) |
|  | [tscircuit.com](https://github.com/tscircuit/tscircuit.com/blob/main/.github/CODEOWNERS) |
|  | [cli](https://github.com/tscircuit/cli/blob/main/.github/CODEOWNERS) |
| [imrishabh18](https://github.com/imrishabh18) | [circuit-to-svg](https://github.com/tscircuit/circuit-to-svg/blob/main/.github/CODEOWNERS) |
|  | [tscircuit.com](https://github.com/tscircuit/tscircuit.com/blob/main/.github/CODEOWNERS) |
|  | [cli](https://github.com/tscircuit/cli/blob/main/.github/CODEOWNERS) |
| [techmannih](https://github.com/techmannih) | [footprinter](https://github.com/tscircuit/footprinter/blob/main/.github/CODEOWNERS) |
| [ShiboSoftwareDev](https://github.com/ShiboSoftwareDev) | [circuit-json-to-gerber](https://github.com/tscircuit/circuit-json-to-gerber/blob/main/.github/CODEOWNERS) |
| [ArnavK-09](https://github.com/ArnavK-09) | [cli](https://github.com/tscircuit/cli/blob/main/.github/CODEOWNERS) |



<!-- END_CURRENT_WEEK -->
