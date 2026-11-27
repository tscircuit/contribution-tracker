import type { StarRating } from "lib/types"
import type { PrAttributeSchema } from "./pr-attributes"

export const getBaseContributionStarRating = (
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

  if (a.core_change) score *= 1.6
  if (a.fixes_subtle_important_bug) score *= 1.5
  if (a.only_reproduces_a_bug) score *= 0.75

  if (a.only_adds_autorouter_fixtures) maxRating = 1
  if (a.minor_developer_experience_improvement) maxRating = 1
  if (a.major_autorouter_bug_fix) return 3
  if (a.major_library_algorithm_contribution) return 3

  if (a.major_experience_improvement) score *= 2
  if (a.fixes_schematic_representation) score *= 0.6
  if (a.improves_parts_engine) score *= 1.5
  if (a.reproduces_and_fixes_a_bug) score *= 2
  if (a.new_page_or_component) score *= 1.25
  if (a.major_improvement_to_core_data_modeling) score *= 1.6

  return Math.min(maxRating, Math.round(score)) as StarRating
}

export const PR_EVALUATION_POLICY_VERSION = 3

export function isNonContribution(
  attributes: Partial<PrAttributeSchema>,
): boolean {
  return Boolean(
    attributes.only_dependency_update ||
      attributes.payment_bookkeeping ||
      attributes.clear_noop_or_duplicate,
  )
}

export function getContributionStarRatingFromAttributes(
  attributes: PrAttributeSchema,
  repo: string,
  manualStarRating?: StarRating,
): StarRating {
  return applyPrAuditRules({
    attributes,
    baseStarRating: getBaseContributionStarRating(
      attributes,
      repo,
      manualStarRating,
    ),
  })
}

export function applyPrAuditRules({
  attributes,
  baseStarRating,
}: {
  attributes: Partial<PrAttributeSchema>
  baseStarRating: StarRating
}): StarRating {
  if (isNonContribution(attributes)) return 0
  let stars = baseStarRating
  if (
    attributes.only_reproduces_a_bug ||
    attributes.only_adds_autorouter_fixtures
  )
    stars = Math.min(stars, 2) as StarRating
  else if (attributes.only_docs_tests_or_ci) return 1
  if (attributes.missing_regression_evidence)
    stars = Math.max(0, stars - 1) as StarRating
  return stars
}
