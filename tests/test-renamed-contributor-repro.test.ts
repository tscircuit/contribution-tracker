import { describe, expect, test } from "bun:test"
import { loadPrAnalysis } from "../lib/data-processing/storePrAnalysis"

// test.failing exists in the Bun runtime but isn't in this repo's bun-types yet.
declare module "bun:test" {
  interface Test {
    failing(label: string, fn: () => void | Promise<unknown>): void
  }
}

// Repro for the renamed-contributor bug: when a contributor renames their GitHub
// account, cached PR analyses keep the OLD login while newer PRs use the new one,
// so the tracker counts one person as two (two overview cards, two "PRs by
// contributor" groups, split sponsorship totals).
//
// pr-analysis/2026-07-07.json really contains PRs cached under BOTH
// technologyet31-create (pre-rename) and abdalraof-albarbar (post-rename) for the
// same person. This assertion fails on main; it is marked test.failing so CI
// stays green until the fix canonicalizes the login on load.

describe("renamed contributor is counted once (repro)", () => {
  test.failing(
    "cached PRs from before a rename load under the current login",
    () => {
      const prs = loadPrAnalysis("2026-07-07")
      const renamed = prs.filter(
        (pr) =>
          pr.contributor === "abdalraof-albarbar" ||
          pr.contributor === "technologyet31-create",
      )
      // Sanity: this week really contains the renamed contributor's PRs.
      expect(renamed.length).toBeGreaterThan(0)
      // The bug: those PRs load under two logins instead of one.
      const logins = [...new Set(renamed.map((pr) => pr.contributor))]
      expect(logins).toEqual(["abdalraof-albarbar"])
    },
  )
})
