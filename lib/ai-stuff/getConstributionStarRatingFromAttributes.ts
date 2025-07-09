import type { StarRating } from "lib/types"
import type { PrAttributeSchema } from "./pr-attributes"

export const getContributionStarRatingFromAttributes = (
  a: PrAttributeSchema,
  repo: string,
): StarRating => {
  let maxRating = 3
  let score = 1

  if (a.only_dependency_update) score *= 0.5
  if (a.bad_title) score *= 0.8

  if (a.mostly_style) score *= 0.75
  if (a.introduces_or_fixes_a_footprint) score *= 1.6
  if (a.introduces_new_schematic_symbol) score *= 1.4
  if (a.add_design_to_schematic_corpus) score *= 1.25
  if (a.fixes_circuit_board) score *= 1

  if (a.core_change) score *= 1.4
  if (a.fixes_subtle_important_bug) score *= 1.5
  if (a.only_reproduces_a_bug) score *= 0.75
  if (a.substantially_improves_svg_generation) score *= 1.6

  if (a.only_adds_autorouter_fixtures) maxRating = 1
  if (a.minor_developer_experience_improvement) maxRating = 1
  if (a.introduces_new_circuit_board && repo === "tscircuit/sparkfun-boards")
    return 3
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
