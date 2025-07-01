import { z } from "zod"

export const PR_ATTRIBUTES = {
  mostly_style: "PR mostly contains Tailwind class changes, or styling changes",
  new_page_or_component: "The PR introduces a new page or React component",
  introduces_or_fixes_a_footprint:
    "The PR introduces or fixes an electronic component footprint",
  core_change: "The PR changes tscircuit/core with new functionality",
  only_dependency_update:
    "The PR is only a dependency update without any new functionality",
  bad_title:
    "The PR title is overly vague or generic, it can't be used to communicate the PR's purpose in a changelog",
  introduces_new_circuit_board:
    "The PR introduces a new circuit board, the circuit board didn't previously exist and this PR introduces the circuit board in it's entirety (PCB and schematic). There is a PCB and schematic snapshot generated in the PR, and the circuit board is not a toy board, it has a real use case.",
  fixes_circuit_board:
    "This PR fixes a circuit board, the circuit board previously existed and this PR fixes it in some way",
  fixes_subtle_important_bug:
    "Fixes a subtle but important bug in rendering or calculations",
  minor_fix: "The PR is a minor fix, not particularly impactful",
  major_autorouter_bug_fix:
    "This PR to the tscircuit/tscircuit-autorouter or tscircuit/core fixes a major bug in the autorouting system an algorithm change",
  only_adds_autorouter_fixtures:
    "This PR adds JSON objects and fixture.tsx files, but doesn't actually change the algorithm",
  only_reproduces_a_bug:
    "This PR reproduces a bug with a comprehensive test, the test may be skipped if it's still failing, but the PR makes it a lot easier for people to fix the bug with a thorough reproduction. The user has described and linked to the situation that caused the bug or where they sourced the bug from",
  reproduces_and_fixes_a_bug:
    "This PR introduces a bug AND fixes the bug with a change in the implementation",
  minor_developer_experience_improvement:
    "This PR introduces github workflows, adds package.json scripts, formats or otherwise just improves the developer experience in a minor way",
  major_experience_improvement:
    "This PR greatly improves the USER experience with improvements to the website code editor, the command line, RunFrame or user-facing tools",
  introduces_new_schematic_symbol: "Introduces a new schematic symbol",
  fixes_schematic_representation:
    "Fixes how schematics or symbols are represented",
  improves_parts_engine:
    "Improves tscircuit generation of circuit board Bill of Materials",
  add_design_to_schematic_corpus:
    "Creates a new schematic design in the tscircuit/schematic-corpus repository",
  major_improvement_to_core_data_modeling:
    "Improves data modeling within tscircuit/core, adds accuracy or features to obstacle generation for autorouting, better parts engine integration. This is non-trivial and may fix an existing bug",
  major_library_algorithm_contribution:
    "This PR contributes a major algorithm improvement to a library, the algorithm is non-trivial, well-tested and has good documentation and comments",
  substantially_improves_svg_generation:
    "This contribution to circuit-to-svg introduces brand new functionality and support for rendering a new element or handling of a previously unhandled element",
}

export type PrAttribute = keyof typeof PR_ATTRIBUTES

export const pr_attribute_schema = z.object(
  Object.fromEntries(
    Object.keys(PR_ATTRIBUTES).map((attributeName) => [
      attributeName,
      z.boolean(),
    ]),
  ),
)

export type PrAttributeSchema = {
  [key in keyof typeof PR_ATTRIBUTES]: boolean
}
