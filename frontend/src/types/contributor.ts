export interface ContributorStats {
  reviewsReceived: number
  rejectionsReceived: number
  approvalsReceived: number
  approvalsGiven: number
  rejectionsGiven: number
  prsOpened: number
  prsMerged: number
  issuesCreated: number
  bountiedIssuesCount: number
  bountiedIssuesTotal: number
  major?: number
  minor?: number
  tiny?: number
  stars?: string
  score?: number
  distinctPrsReviewed?: number
  discussionComments?: number
  discussionParticipating?: number
  discussionVeryActive?: number
  discussionExtremelyActive?: number
}

export interface PrAnalysisResult {
  tag: string
  number: number
  title: string
  description: string
  impact: "Major" | "Minor" | "Tiny"
  contributor: string
  repo: string
  url: string
  isAlignedWithMilestone: boolean
  // PR Attributes
  mostly_style?: boolean
  new_page_or_component?: boolean
  introduces_or_fixes_a_footprint?: boolean
  core_change?: boolean
  only_dependency_update?: boolean
  bad_title?: boolean
  introduces_new_circuit_board?: boolean
  fixes_circuit_board?: boolean
  fixes_subtle_important_bug?: boolean
  minor_fix?: boolean
  major_autorouter_bug_fix?: boolean
  only_reproduces_a_bug?: boolean
  reproduces_and_fixes_a_bug?: boolean
  major_experience_improvement?: boolean
  introduces_new_schematic_symbol?: boolean
  fixes_schematic_representation?: boolean
  improves_parts_engine?: boolean
  add_design_to_schematic_corpus?: boolean
  major_improvement_to_core_data_modeling?: boolean
  major_library_algorithm_contribution?: boolean
}

export interface ContributorCardProps {
  username: string
  contributor: ContributorStats
}

export type Size = "sm" | "md" | "lg"

export interface PodiumEntryProps {
  position: number
  username: string
  stats: ContributorStats
  ringColor: string
  bgColor: string
  size?: Size
  onClick: () => void
}

export interface ContributorOverviewProps {
  contributors: [string, ContributorStats][]
  onSelectContributor: (username: string) => void
}

export type ImpactType = "🐳 Major" | "🐙 Minor" | "🐌 Tiny"

export interface PR {
  number: number
  impact: ImpactType
  contributor: string
  description: string
  url: string
  isAlignedWithMilestone?: boolean
}

export interface RepoData {
  name: string
  prs: PR[]
}

export interface PrsResultant {
  prsByRepos: Record<string, PrAnalysisResult[]>
  prsByContributors: Record<string, PrAnalysisResult[]>
}
