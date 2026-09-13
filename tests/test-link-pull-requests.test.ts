import { describe, it, expect } from "bun:test"
import { linkPullRequests } from "lib/data-processing/linkPullRequests"

describe("linkPullRequests", () => {
  const prMap = new Map([
    [
      "tscircuit/core#1443",
      {
        repo: "tscircuit/core",
        url: "https://github.com/tscircuit/core/pull/1443",
      },
    ],
    [
      "tscircuit/tscircuit-autorouter#276",
      {
        repo: "tscircuit/tscircuit-autorouter",
        url: "https://github.com/tscircuit/tscircuit-autorouter/pull/276",
      },
    ],
    [
      "tscircuit/circuit-json#306",
      {
        repo: "tscircuit/circuit-json",
        url: "https://github.com/tscircuit/circuit-json/pull/306",
      },
    ],
    [
      "tscircuit/props#432",
      {
        repo: "tscircuit/props",
        url: "https://github.com/tscircuit/props/pull/432",
      },
    ],
    [
      "tscircuit/core#1496",
      {
        repo: "tscircuit/core",
        url: "https://github.com/tscircuit/core/pull/1496",
      },
    ],
    [
      "tscircuit/circuit-to-svg#365",
      {
        repo: "tscircuit/circuit-to-svg",
        url: "https://github.com/tscircuit/circuit-to-svg/pull/365",
      },
    ],
    [
      "tscircuit/cli#431",
      {
        repo: "tscircuit/cli",
        url: "https://github.com/tscircuit/cli/pull/431",
      },
    ],
    [
      "tscircuit/cli#435",
      {
        repo: "tscircuit/cli",
        url: "https://github.com/tscircuit/cli/pull/435",
      },
    ],
    [
      "tscircuit/3d-viewer#509",
      {
        repo: "tscircuit/3d-viewer",
        url: "https://github.com/tscircuit/3d-viewer/pull/509",
      },
    ],
    [
      "tscircuit/circuit-json-to-gltf#44",
      {
        repo: "tscircuit/circuit-json-to-gltf",
        url: "https://github.com/tscircuit/circuit-json-to-gltf/pull/44",
      },
    ],
  ])

  it("links full repo #123 and repo#123 references", () => {
    const input =
      "- Four-layer PCB rendering (tscircuit/circuit-to-svg #365)\n- KiCad export (tscircuit/cli#431)"
    const output = linkPullRequests(input, prMap)

    expect(output).toBe(
      "- Four-layer PCB rendering ([tscircuit/circuit-to-svg #365](https://github.com/tscircuit/circuit-to-svg/pull/365))\n- KiCad export ([tscircuit/cli #431](https://github.com/tscircuit/cli/pull/431))",
    )
  })

  it("links short repo#123 references", () => {
    const input =
      "- Autorouter improvements (core#1443, tscircuit-autorouter#276)"
    const output = linkPullRequests(input, prMap)

    expect(output).toBe(
      "- Autorouter improvements ([core#1443](https://github.com/tscircuit/core/pull/1443), [tscircuit-autorouter#276](https://github.com/tscircuit/tscircuit-autorouter/pull/276))",
    )
  })

  it("links bare #123 references using context matching", () => {
    const input =
      "- Voltage probes released – schema (#306), props (#432) & Core simulation output (#1496)"
    const output = linkPullRequests(input, prMap)

    expect(output).toBe(
      "- Voltage probes released – schema ([#306](https://github.com/tscircuit/circuit-json/pull/306)), props ([#432](https://github.com/tscircuit/props/pull/432)) & Core simulation output ([#1496](https://github.com/tscircuit/core/pull/1496))",
    )
  })

  it("does not break already linked markdown references", () => {
    const input =
      "- Already linked: [#1443](https://github.com/tscircuit/core/pull/1443) and [core #1443](https://github.com/tscircuit/core/pull/1443)"
    const output = linkPullRequests(input, prMap)

    expect(output).toBe(input)
  })

  it("handles complex multi-PR changelog lines like 2025-10.md", () => {
    const input =
      "- 3D/GLTF pipeline overhaul – poppygl PNG renderer in cli (#435), environment maps & FR4 material in 3d-viewer (#509), bottom-side fixes (#44)"
    const output = linkPullRequests(input, prMap)

    expect(output).toContain("[#435](https://github.com/tscircuit/cli/pull/435)")
    expect(output).toContain(
      "[#509](https://github.com/tscircuit/3d-viewer/pull/509)",
    )
    expect(output).toContain(
      "[#44](https://github.com/tscircuit/circuit-json-to-gltf/pull/44)",
    )
  })
})
