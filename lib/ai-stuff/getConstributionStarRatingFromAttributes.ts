import type { StarRating } from "lib/types"
import type { PrAttributeSchema } from "./pr-attributes"

const getBaseContributionStarRating = (
  a: PrAttributeSchema,
  repo: string,
  manualStarRating?: StarRating,
): StarRating => {
  if (
    repo === "tscircuit/circuit-json-to-altium" ||
    repo === "tscircuit/circuit-json-to-kicad"
  ) {
    return 1
  }

  if (manualStarRating !== undefined) return manualStarRating

  let maxRating = 3
  let score = 1

  if (a.only_dependency_update) score *= 0.5
  if (a.bad_title) score *= 0.5

  if (a.mostly_style) score *= 0.5

  if (a.fixes_subtle_important_bug) score *= 1.5
  if (a.only_reproduces_a_bug) score *= 0.75

  if (a.only_adds_autorouter_fixtures) maxRating = 1
  if (a.minor_developer_experience_improvement) maxRating = 1
  if (a.major_autorouter_bug_fix) return 3
  if (a.major_library_algorithm_contribution) return 3

  if (a.major_experience_improvement) score *= 2
  if (a.fixes_schematic_representation) score *= 0.6
  if (a.improves_parts_engine) score *= 1.5
  // Regression coverage validates a fix; it does not multiply its impact.
  if (a.new_page_or_component) score *= 1.25
  if (a.major_improvement_to_core_data_modeling) score *= 1.6

  return Math.min(maxRating, Math.round(score)) as StarRating
}

export function isNonContribution(
  attributes: Partial<PrAttributeSchema>,
): boolean {
  return Boolean(
    attributes.only_dependency_update ||
      attributes.payment_bookkeeping ||
      attributes.clear_noop_or_duplicate ||
      attributes.non_substantive_maintenance,
  )
}

export function getContributionStarRatingFromAttributes(
  attributes: PrAttributeSchema,
  repo: string,
  manualStarRating?: StarRating,
): StarRating {
  if (isNonContribution(attributes)) return 0
  const regressionEvidence =
    attributes.has_relevant_regression_test ||
    attributes.has_relevant_visual_snapshot
  const reproduction =
    attributes.changes_runtime_implementation !== true &&
    (attributes.only_reproduces_a_bug ||
      attributes.only_adds_autorouter_fixtures ||
      (attributes.changes_runtime_implementation === false &&
        attributes.high_quality_reproduction))
  if (
    attributes.only_docs_tests_or_ci &&
    attributes.changes_runtime_implementation !== true &&
    !reproduction
  )
    return 1
  let stars = getBaseContributionStarRating(attributes, repo, manualStarRating)
  if (reproduction) {
    // Two stars require an actionable diagnostic case, not just another fixture.
    stars = Math.min(
      stars,
      attributes.high_quality_reproduction && regressionEvidence ? 2 : 1,
    ) as StarRating
  } else if (attributes.changes_runtime_implementation === false) {
    stars = Math.min(stars, 1) as StarRating
  } else if (
    manualStarRating === undefined &&
    attributes.substantial_impact === false
  ) {
    stars = Math.min(stars, 2) as StarRating
  }
  const missingEvidence =
    (attributes.missing_regression_evidence && !regressionEvidence) ||
    (attributes.regression_test_required && !regressionEvidence) ||
    (attributes.visual_snapshot_required &&
      !attributes.has_relevant_visual_snapshot) ||
    (manualStarRating === undefined &&
      stars >= 3 &&
      !attributes.has_relevant_visual_snapshot &&
      attributes.has_relevant_regression_test === false)
  // Missing tests and missing snapshots together are one evidence penalty.
  if (missingEvidence) stars = Math.max(0, stars - 1) as StarRating
  return stars
}
