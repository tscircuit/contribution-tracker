import { describe, expect, test } from "bun:test"
import { loadPrAnalysis } from "../lib/data-processing/storePrAnalysis"

// Regression test for the renamed-contributor bug: when a contributor renames
// their GitHub account, cached PR analyses keep the OLD login while newer PRs use
// the new one. Without canonicalization the tracker counts one person as two
// (two overview cards, two "PRs by contributor" groups, split sponsorship totals).
//
// pr-analysis/2026-07-07.json contains PRs cached under both technologyet31-create
// (pre-rename) and abdalraof-albarbar (post-rename); loadPrAnalysis must return
// them under the single current login.

describe("renamed contributor is counted once", () => {
  test("cached PRs from before a rename load under the current login", () => {
    const prs = loadPrAnalysis("2026-07-07")
    const renamed = prs.filter(
      (pr) =>
        pr.contributor === "abdalraof-albarbar" ||
        pr.contributor === "technologyet31-create",
    )
    // Sanity: this week really contains the renamed contributor's PRs.
    expect(renamed.length).toBeGreaterThan(0)
    // They must load under one login, not two.
    const logins = [...new Set(renamed.map((pr) => pr.contributor))]
    expect(logins).toEqual(["abdalraof-albarbar"])
  })
})
