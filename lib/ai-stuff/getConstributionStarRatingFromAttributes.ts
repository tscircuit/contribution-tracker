import type { StarRating } from "lib/types"
import type { PrAttributeSchema } from "./pr-attributes"

export const getContributionStarRatingFromAttributes = (
  a: PrAttributeSchema,
): StarRating => {
  let maxRating = 3
  let score = 1

  if (a.only_dependency_update) score *= 0.5
  if (a.bad_title) score *= 0.8

  if (a.mostly_style) score *= 0.75

  if (a.core_change) score *= 1.4
  if (a.fixes_subtle_important_bug) score *= 1.5
  if (a.only_reproduces_a_bug) score *= 0.75

  if (a.introduces_new_circuit_board) return 3
  if (a.major_autorouter_bug_fix) return 3
  if (a.major_library_algorithm_contribution) return 3

  if (a.major_experience_improvement) score *= 2
  if (a.fixes_schematic_representation) score *= 1.5
  if (a.improves_parts_engine) score *= 1.5
  if (a.reproduces_and_fixes_a_bug) score *= 2
  if (a.new_page_or_component) score *= 1.25
  if (a.major_improvement_to_core_data_modeling) score *= 1.5

  return Math.min(maxRating, Math.round(score)) as StarRating
}
