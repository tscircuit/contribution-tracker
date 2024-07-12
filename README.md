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

# Contribution Overview 2024-07-06

## PRs by Repository

```mermaid
pie
    "tscircuit/builder" : 3
    "tscircuit/react-fiber" : 1
    "tscircuit/cli" : 9
    "tscircuit/docs" : 1
    "tscircuit/props" : 1
    "tscircuit/easyeda-converter" : 9
    "tscircuit/3d-viewer" : 6
    "tscircuit/jscad-fiber" : 6
    "tscircuit/layout" : 1
    "tscircuit/soup-util" : 1
    "tscircuit/specctra-dsn-json" : 2
```

## Contributor Overview

| Contributor | 🐳 Major | 🐙 Minor | 🐌 Tiny |
|-------------|-------|-------|-------|
| seveibar | 15 | 11 | 1 |
| imrishabh18 | 1 | 1 | 0 |
| DamilolaAlao | 2 | 0 | 0 |
| andrii-balitskyi | 3 | 1 | 0 |
| Slaviiiii | 2 | 0 | 0 |

## Changes by Repository

### [tscircuit/builder](https://github.com/tscircuit/builder)

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#69](https://github.com/tscircuit/builder/pull/69) | 🐳 Major | seveibar | Upgrade layout dependency to use the latest version of soup-util, remove duplicated code, and fix issues where the layout dependency was depending on old builder versions. |
| [#68](https://github.com/tscircuit/builder/pull/68) | 🐳 Major | seveibar | Adds support for rotation offset for CAD components |
| [#66](https://github.com/tscircuit/builder/pull/66) | 🐙 Minor | seveibar | Handle undefined board thickness in the ComponentBuilder class |

### [tscircuit/react-fiber](https://github.com/tscircuit/react-fiber)

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#12](https://github.com/tscircuit/react-fiber/pull/12) | 🐳 Major | seveibar | Tweaks and improvements with soup logging and cadModel |

### [tscircuit/cli](https://github.com/tscircuit/cli)

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#69](https://github.com/tscircuit/cli/pull/69) | 🐳 Major | seveibar | Remove sqlite, refactor to use level |
| [#68](https://github.com/tscircuit/cli/pull/68) | 🐳 Major | seveibar | Introduce a new level schema and handler to migrate off SQLite. |
| [#67](https://github.com/tscircuit/cli/pull/67) | 🐳 Major | seveibar | Add test setup for dev-server-api |
| [#79](https://github.com/tscircuit/cli/pull/79) | 🐳 Major | imrishabh18 | Add a TSCircuit linter command to the CLI |
| [#86](https://github.com/tscircuit/cli/pull/86) | 🐳 Major | DamilolaAlao | Introduce a function to find an available port for the development server. |
| [#70](https://github.com/tscircuit/cli/pull/70) | 🐳 Major | DamilolaAlao | Adding telemetry to the development command using the PostHog library. |
| [#76](https://github.com/tscircuit/cli/pull/76) | 🐙 Minor | seveibar | Replace the 'level' dependency with 'memory-level' for Stackblitz compatibility. |
| [#71](https://github.com/tscircuit/cli/pull/71) | 🐙 Minor | seveibar | Moves the `example-project` directory from `tests/assets/` to the root directory. |
| [#89](https://github.com/tscircuit/cli/pull/89) | 🐙 Minor | imrishabh18 | Adds `node_modules` to the `.gitignore` file |

### [tscircuit/docs](https://github.com/tscircuit/docs)

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#8](https://github.com/tscircuit/docs/pull/8) | 🐳 Major | seveibar | This pull request adds a tutorial for copying a reference circuit into tscircuit. |

### [tscircuit/props](https://github.com/tscircuit/props)

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#5](https://github.com/tscircuit/props/pull/5) | 🐳 Major | seveibar | Add support for `cadModel` prop, including `biome`, `positionOffset`, and `rotationOffset`. |

### [tscircuit/easyeda-converter](https://github.com/tscircuit/easyeda-converter)

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#11](https://github.com/tscircuit/easyeda-converter/pull/11) | 🐳 Major | seveibar | Add support for loading CAD model rotation |
| [#8](https://github.com/tscircuit/easyeda-converter/pull/8) | 🐳 Major | seveibar | Fixes the release script, introduces formatting scripts, and adds a biome feature. |
| [#7](https://github.com/tscircuit/easyeda-converter/pull/7) | 🐳 Major | seveibar | The pull request introduces a new test file showing broken pad positioning. |
| [#15](https://github.com/tscircuit/easyeda-converter/pull/15) | 🐳 Major | andrii-balitskyi | Adds support for parsing polyline (PL) and polygon (PG) single letter shape schemas. |
| [#19](https://github.com/tscircuit/easyeda-converter/pull/19) | 🐙 Minor | seveibar | Run the build script before releasing the project |
| [#10](https://github.com/tscircuit/easyeda-converter/pull/10) | 🐙 Minor | seveibar | Improve automatic output filenames by using the base name of the input file instead of the full file name. |
| [#17](https://github.com/tscircuit/easyeda-converter/pull/17) | 🐙 Minor | andrii-balitskyi | Export `convertRawEasyEdaToTs` function |
| [#20](https://github.com/tscircuit/easyeda-converter/pull/20) | 🐌 Tiny | seveibar | Update the project name in the README.md file from "easyeda-converter" to "easyeda". |
| [#13](https://github.com/tscircuit/easyeda-converter/pull/13) | 🟣 | andrii-balitskyi | Fix mm conversion in `generateFootprintTsx` function |

### [tscircuit/3d-viewer](https://github.com/tscircuit/3d-viewer)

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#6](https://github.com/tscircuit/3d-viewer/pull/6) | 🐳 Major | seveibar | Implement a global cache for loading and parsing 3D models using the OBJLoader and MTLLoader, and use this cache in the MixedStlModel component. |
| [#3](https://github.com/tscircuit/3d-viewer/pull/3) | 🐳 Major | seveibar | Remove old app files and support not having a PCB board. |
| [#9](https://github.com/tscircuit/3d-viewer/pull/9) | 🐙 Minor | seveibar | Improve the lifecycle management of the object loading process by introducing a flag to track URL changes and clean up the effect accordingly. |
| [#8](https://github.com/tscircuit/3d-viewer/pull/8) | 🐙 Minor | seveibar | Adds small red loading boxes while models are being loaded. |
| [#7](https://github.com/tscircuit/3d-viewer/pull/7) | 🐙 Minor | seveibar | Add version number to the 3D viewer |
| [#5](https://github.com/tscircuit/3d-viewer/pull/5) | 🐙 Minor | seveibar | Switch rotation unit from radians to degrees in the CadViewer component. |

### [tscircuit/jscad-fiber](https://github.com/tscircuit/jscad-fiber)

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#10](https://github.com/tscircuit/jscad-fiber/pull/10) | 🐳 Major | seveibar | Introduce a new `ExtrudeLinear` component for extruding polygons along a linear path. |
| [#9](https://github.com/tscircuit/jscad-fiber/pull/9) | 🐳 Major | seveibar | Fix rendering for polygons by updating the rendering logic to handle 2D and 3D shapes correctly. |
| [#8](https://github.com/tscircuit/jscad-fiber/pull/8) | 🟣 | seveibar | Format all files in the project |
| [#6](https://github.com/tscircuit/jscad-fiber/pull/6) | 🟣 | seveibar | Adds support for the Polygon primitive, and introduces GitHub Actions workflows for type checking and code formatting. |
| [#14](https://github.com/tscircuit/jscad-fiber/pull/14) | 🐳 Major | Slaviiiii | Implement the `Colorize` function to add color to JSCAD primitives |
| [#3](https://github.com/tscircuit/jscad-fiber/pull/3) | 🐳 Major | Slaviiiii | Add support for missing 3D shapes, including cuboid, rounded cuboid, geodesic sphere, ellipsoid, cylinder, and rounded cylinder. |

### [tscircuit/layout](https://github.com/tscircuit/layout)

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#2](https://github.com/tscircuit/layout/pull/2) | 🐙 Minor | seveibar | Replace the use of `builder` with `soup-util` for utility functions |

### [tscircuit/soup-util](https://github.com/tscircuit/soup-util)

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#4](https://github.com/tscircuit/soup-util/pull/4) | 🐙 Minor | seveibar | Adds new utility functions for converting directions to vectors, rotating directions, and converting vectors to directions. |

### [tscircuit/specctra-dsn-json](https://github.com/tscircuit/specctra-dsn-json)

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#10](https://github.com/tscircuit/specctra-dsn-json/pull/10) | 🐳 Major | andrii-balitskyi | Introduce support for parsing the `wiring` DSN element |
| [#9](https://github.com/tscircuit/specctra-dsn-json/pull/9) | 🐳 Major | andrii-balitskyi | Implement parsing of the `network` DSN element, including parsing of `net`, `via`, `via_rule`, and `class` elements. |

## Changes by Contributor

### [seveibar](https://github.com/seveibar)

| PR # | Impact | Description |
|------|--------|-------------|
| [#69](https://github.com/tscircuit/builder/pull/69) | 🐳 Major | Upgrade layout dependency to use the latest version of soup-util, remove duplicated code, and fix issues where the layout dependency was depending on old builder versions. |
| [#68](https://github.com/tscircuit/builder/pull/68) | 🐳 Major | Adds support for rotation offset for CAD components |
| [#12](https://github.com/tscircuit/react-fiber/pull/12) | 🐳 Major | Tweaks and improvements with soup logging and cadModel |
| [#69](https://github.com/tscircuit/cli/pull/69) | 🐳 Major | Remove sqlite, refactor to use level |
| [#68](https://github.com/tscircuit/cli/pull/68) | 🐳 Major | Introduce a new level schema and handler to migrate off SQLite. |
| [#67](https://github.com/tscircuit/cli/pull/67) | 🐳 Major | Add test setup for dev-server-api |
| [#8](https://github.com/tscircuit/docs/pull/8) | 🐳 Major | This pull request adds a tutorial for copying a reference circuit into tscircuit. |
| [#5](https://github.com/tscircuit/props/pull/5) | 🐳 Major | Add support for `cadModel` prop, including `biome`, `positionOffset`, and `rotationOffset`. |
| [#11](https://github.com/tscircuit/easyeda-converter/pull/11) | 🐳 Major | Add support for loading CAD model rotation |
| [#8](https://github.com/tscircuit/easyeda-converter/pull/8) | 🐳 Major | Fixes the release script, introduces formatting scripts, and adds a biome feature. |
| [#7](https://github.com/tscircuit/easyeda-converter/pull/7) | 🐳 Major | The pull request introduces a new test file showing broken pad positioning. |
| [#6](https://github.com/tscircuit/3d-viewer/pull/6) | 🐳 Major | Implement a global cache for loading and parsing 3D models using the OBJLoader and MTLLoader, and use this cache in the MixedStlModel component. |
| [#3](https://github.com/tscircuit/3d-viewer/pull/3) | 🐳 Major | Remove old app files and support not having a PCB board. |
| [#10](https://github.com/tscircuit/jscad-fiber/pull/10) | 🐳 Major | Introduce a new `ExtrudeLinear` component for extruding polygons along a linear path. |
| [#9](https://github.com/tscircuit/jscad-fiber/pull/9) | 🐳 Major | Fix rendering for polygons by updating the rendering logic to handle 2D and 3D shapes correctly. |
| [#66](https://github.com/tscircuit/builder/pull/66) | 🐙 Minor | Handle undefined board thickness in the ComponentBuilder class |
| [#76](https://github.com/tscircuit/cli/pull/76) | 🐙 Minor | Replace the 'level' dependency with 'memory-level' for Stackblitz compatibility. |
| [#71](https://github.com/tscircuit/cli/pull/71) | 🐙 Minor | Moves the `example-project` directory from `tests/assets/` to the root directory. |
| [#2](https://github.com/tscircuit/layout/pull/2) | 🐙 Minor | Replace the use of `builder` with `soup-util` for utility functions |
| [#4](https://github.com/tscircuit/soup-util/pull/4) | 🐙 Minor | Adds new utility functions for converting directions to vectors, rotating directions, and converting vectors to directions. |
| [#19](https://github.com/tscircuit/easyeda-converter/pull/19) | 🐙 Minor | Run the build script before releasing the project |
| [#10](https://github.com/tscircuit/easyeda-converter/pull/10) | 🐙 Minor | Improve automatic output filenames by using the base name of the input file instead of the full file name. |
| [#9](https://github.com/tscircuit/3d-viewer/pull/9) | 🐙 Minor | Improve the lifecycle management of the object loading process by introducing a flag to track URL changes and clean up the effect accordingly. |
| [#8](https://github.com/tscircuit/3d-viewer/pull/8) | 🐙 Minor | Adds small red loading boxes while models are being loaded. |
| [#7](https://github.com/tscircuit/3d-viewer/pull/7) | 🐙 Minor | Add version number to the 3D viewer |
| [#5](https://github.com/tscircuit/3d-viewer/pull/5) | 🐙 Minor | Switch rotation unit from radians to degrees in the CadViewer component. |
| [#20](https://github.com/tscircuit/easyeda-converter/pull/20) | 🐌 Tiny | Update the project name in the README.md file from "easyeda-converter" to "easyeda". |
| [#8](https://github.com/tscircuit/jscad-fiber/pull/8) | 🟣 | Format all files in the project |
| [#6](https://github.com/tscircuit/jscad-fiber/pull/6) | 🟣 | Adds support for the Polygon primitive, and introduces GitHub Actions workflows for type checking and code formatting. |

### [imrishabh18](https://github.com/imrishabh18)

| PR # | Impact | Description |
|------|--------|-------------|
| [#79](https://github.com/tscircuit/cli/pull/79) | 🐳 Major | Add a TSCircuit linter command to the CLI |
| [#89](https://github.com/tscircuit/cli/pull/89) | 🐙 Minor | Adds `node_modules` to the `.gitignore` file |

### [DamilolaAlao](https://github.com/DamilolaAlao)

| PR # | Impact | Description |
|------|--------|-------------|
| [#86](https://github.com/tscircuit/cli/pull/86) | 🐳 Major | Introduce a function to find an available port for the development server. |
| [#70](https://github.com/tscircuit/cli/pull/70) | 🐳 Major | Adding telemetry to the development command using the PostHog library. |

### [andrii-balitskyi](https://github.com/andrii-balitskyi)

| PR # | Impact | Description |
|------|--------|-------------|
| [#15](https://github.com/tscircuit/easyeda-converter/pull/15) | 🐳 Major | Adds support for parsing polyline (PL) and polygon (PG) single letter shape schemas. |
| [#17](https://github.com/tscircuit/easyeda-converter/pull/17) | 🐙 Minor | Export `convertRawEasyEdaToTs` function |
| [#13](https://github.com/tscircuit/easyeda-converter/pull/13) | 🟣 | Fix mm conversion in `generateFootprintTsx` function |
| [#10](https://github.com/tscircuit/specctra-dsn-json/pull/10) | 🐳 Major | Introduce support for parsing the `wiring` DSN element |
| [#9](https://github.com/tscircuit/specctra-dsn-json/pull/9) | 🐳 Major | Implement parsing of the `network` DSN element, including parsing of `net`, `via`, `via_rule`, and `class` elements. |

### [Slaviiiii](https://github.com/Slaviiiii)

| PR # | Impact | Description |
|------|--------|-------------|
| [#14](https://github.com/tscircuit/jscad-fiber/pull/14) | 🐳 Major | Implement the `Colorize` function to add color to JSCAD primitives |
| [#3](https://github.com/tscircuit/jscad-fiber/pull/3) | 🐳 Major | Add support for missing 3D shapes, including cuboid, rounded cuboid, geodesic sphere, ellipsoid, cylinder, and rounded cylinder. |



<!-- END_CURRENT_WEEK -->
