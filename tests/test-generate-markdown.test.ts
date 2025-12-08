import { describe, it, expect } from "bun:test"
import { generateMarkdown } from "lib/data-processing/generateMarkdown"
import type { AnalyzedPR, ContributorStats } from "lib/types"

const minimalPrAttributes = {
  mostly_style: false,
  new_page_or_component: false,
  introduces_or_fixes_a_footprint: false,
  core_change: false,
  only_dependency_update: false,
  bad_title: false,
  introduces_new_circuit_board: false,
  fixes_circuit_board: false,
  fixes_subtle_important_bug: false,
  minor_fix: false,
  major_autorouter_bug_fix: false,
  only_adds_autorouter_fixtures: false,
  only_reproduces_a_bug: false,
  reproduces_and_fixes_a_bug: false,
  minor_developer_experience_improvement: false,
  major_experience_improvement: false,
  introduces_new_schematic_symbol: false,
  fixes_schematic_representation: false,
  improves_parts_engine: false,
  add_design_to_schematic_corpus: false,
  major_improvement_to_core_data_modeling: false,
  major_library_algorithm_contribution: false,
  substantially_improves_svg_generation: false,
}

const mockPRs: AnalyzedPR[] = [
  {
    ...minimalPrAttributes,
    number: 1,
    state: "merged",
    title: "Add feature X",
    body: "Implements feature X.",
    user: { login: "alice" },
    html_url: "https://github.com/org/repo/pull/1",
    created_at: "2024-06-01T00:00:00Z",
    merged_at: "2024-06-02T00:00:00Z",
    description: "Add feature X",
    impact: "Major",
    contributor: "alice",
    repo: "org/repo",
    url: "https://github.com/org/repo/pull/1",
    isAlignedWithMilestone: true,
    starRating: 3,
    mostly_style: true,
    core_change: true,
  },
  {
    ...minimalPrAttributes,
    number: 2,
    state: "merged",
    title: "Fix bug Y",
    body: "Fixes bug Y.",
    user: { login: "bob" },
    html_url: "https://github.com/org/repo/pull/2",
    created_at: "2024-06-03T00:00:00Z",
    merged_at: "2024-06-04T00:00:00Z",
    description: "Fix bug Y",
    impact: "Minor",
    contributor: "bob",
    repo: "org/repo",
    url: "https://github.com/org/repo/pull/2",
    isAlignedWithMilestone: false,
    starRating: 2,
    minor_fix: true,
  },
  {
    ...minimalPrAttributes,
    number: 3,
    state: "merged",
    title: "Update docs",
    body: "Updates documentation.",
    user: { login: "alice" },
    html_url: "https://github.com/org/another-repo/pull/3",
    created_at: "2024-06-05T00:00:00Z",
    merged_at: "2024-06-06T00:00:00Z",
    description: "Update docs",
    impact: "Tiny",
    contributor: "alice",
    repo: "org/another-repo",
    url: "https://github.com/org/another-repo/pull/3",
    isAlignedWithMilestone: false,
    starRating: 1,
    bad_title: true,
  },
]

const mockStats: Record<string, ContributorStats> = {
  alice: {
    reviewsReceived: 1,
    rejectionsReceived: 0,
    approvalsReceived: 1,
    approvalsGiven: 2,
    rejectionsGiven: 0,
    prsOpened: 2,
    prsMerged: 1,
    issuesCreated: 1,
    bountiedIssuesCount: 0,
    bountiedIssuesTotal: 0,
    discussionNormalComments: 2,
    discussionGreatInformativeComments: 1,
    discussionIncredibleComments: 0,
    reposOwned: [{ repo: "org/repo", paths: ["src/"] }],
  },
  bob: {
    reviewsReceived: 0,
    rejectionsReceived: 0,
    approvalsReceived: 0,
    approvalsGiven: 1,
    rejectionsGiven: 0,
    prsOpened: 1,
    prsMerged: 0,
    issuesCreated: 0,
    bountiedIssuesCount: 0,
    bountiedIssuesTotal: 0,
    discussionNormalComments: 0,
    discussionGreatInformativeComments: 0,
    discussionIncredibleComments: 1,
    reposOwned: [],
  },
  "cypher[bot]": {
    reviewsReceived: 0,
    rejectionsReceived: 0,
    approvalsReceived: 0,
    approvalsGiven: 1,
    rejectionsGiven: 0,
    prsOpened: 1,
    prsMerged: 0,
    issuesCreated: 0,
    bountiedIssuesCount: 0,
    bountiedIssuesTotal: 0,
    discussionNormalComments: 0,
    discussionGreatInformativeComments: 0,
    discussionIncredibleComments: 1,
    reposOwned: [],
  },
}

describe("generateMarkdown", () => {
  it("should generate markdown with expected sections and contributor data", async () => {
    const markdown = await generateMarkdown(mockPRs, mockStats, "2024-07-01", {
      "tscircuit/gyromug": ["alice", "bob"],
      "tscircuit/schematic-corpus": ["Abse2001", "alice"],
      "tscircuit/lol": [],
    })
    expect(markdown).toContain("# Contribution Overview 2024-07-01")
    expect(markdown).toContain("## Contributor Overview")
    expect(markdown).toContain("alice")
    expect(markdown).toContain("bob")
    expect(markdown).toContain("org/repo")
    expect(markdown).toContain("org/another-repo")
    expect(markdown).toContain("Add feature X")
    expect(markdown).toContain("Fix bug Y")
    expect(markdown).toContain("Update docs")
    expect(markdown).toContain("Discussion Contribution Legend")
    expect(markdown).toContain("Point Source Breakdown")
    expect(markdown).toContain("PR Points")
    expect(markdown).toContain("Review Points")
    expect(markdown).toContain("Repository Owners")
    expect(markdown).toContain("Repositories by Owner")
    expect(markdown).toMatchSnapshot("markdown")
  })
})
