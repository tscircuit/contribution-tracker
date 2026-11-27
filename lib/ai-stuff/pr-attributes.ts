import { z } from "zod"

export const PR_ATTRIBUTES = {
  mostly_style: "PR mostly contains Tailwind class changes, or styling changes",
  new_page_or_component: "The PR introduces a new page or React component",
  introduces_or_fixes_a_footprint:
    "The PR introduces or fixes an electronic component footprint",
  core_change:
    "Changes actual runtime behavior in tscircuit/core; the repository name alone, tests, fixtures and dependency pins do not qualify",
  only_dependency_update:
    "The PR only updates dependencies, versions or generated declarations, even when it integrates a useful upstream fix or refreshes accompanying snapshots; no new implementation in this repository",
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
    "Systemic/critical autorouting algorithm fix with broad consequences and regression protection, not one routine geometry edge case.",
  only_adds_autorouter_fixtures:
    "Only adds routing fixtures without changing implementation; use only_reproduces_a_bug too when there is an actionable specific regression case",
  only_reproduces_a_bug:
    "This PR reproduces a bug with a comprehensive test, the test may be skipped if it's still failing, but the PR makes it a lot easier for people to fix the bug with a thorough reproduction. The user has described and linked to the situation that caused the bug or where they sourced the bug from",
  reproduces_and_fixes_a_bug:
    "This PR includes a regression reproduction AND fixes that existing bug with a change in the implementation",
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
    "Substantial new/improved production algorithm with broad benefit and tests. A small condition/filter/mapping/paint-order change is not major.",
  substantially_improves_svg_generation:
    "This contribution to circuit-to-svg introduces brand new functionality and support for rendering a new element or handling of a previously unhandled element",
  payment_bookkeeping:
    "Only sponsorship/payment administration, including registering payout profiles; not project functionality.",
  clear_noop_or_duplicate:
    "A demonstrated no-op or work already credited elsewhere. Do not infer duplication from a similar title alone.",
  only_docs_tests_or_ci:
    "Only genuine docs/test-maintenance/CI repairs. A standalone bug reproduction uses reproduction flags; implementation fixes WITH tests are not test-only.",
  missing_regression_evidence:
    "Applicable test/snapshot coverage is not demonstrated. Relevant existing tests count. Generic build/typecheck claims do not; unknown coverage is not proof that no tests exist.",
  changes_runtime_implementation:
    "Changes production implementation/schema. This is separate from impact: a refactor can be low value. Tests, fixtures, snapshots, demos, docs, declarations, dependency pins and CI alone are false.",
  non_substantive_maintenance:
    "Trivial/no meaningful value: cosmetic churn, empty/assertion-free tests, unrelated snapshots, copied fixtures without a specific case. Genuine build repairs/regressions are not trivial.",
  substantial_impact:
    "Broad/critical runtime benefit: substantial algorithm/capability, systemic crash/data-loss fix or measured improvement. One paint-order, metadata, category or UI-state fix is minor. Tests/repros alone are false.",
  regression_test_required:
    "Behavioral logic/conversion/UI changes or bug reproductions require regression coverage. Docs/dead-code cleanup/build configuration may not.",
  has_relevant_regression_test:
    "Focused automated assertion/snapshot covering the claimed case, including expected-failing repros. Specific demonstrated existing coverage counts. Generic tests-pass, smoke/import-only tests or bare fixtures do not.",
  visual_snapshot_required:
    "Visible layout/appearance change where automated snapshots are relevant. Not needed for crash/error/parse/schema/metadata/performance checks just because they involve PCB data.",
  has_relevant_visual_snapshot:
    "Focused automated visual snapshot assertion plus matching artifact for the claimed case. Known custom matchers count. Bare image/path, unrelated snapshot, manual screenshot or hiding changed UI does not.",
  high_quality_reproduction:
    "Diagnostic runnable case that isolates a meaningful edge case/cause, with expected-vs-actual assertions and applicable snapshots. A fix is not required. Routine board dumps are false.",
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
