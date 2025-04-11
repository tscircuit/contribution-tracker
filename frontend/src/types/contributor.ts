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
