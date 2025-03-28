export interface ReviewerStats {
  approvalsGiven: number
  rejectionsGiven: number
  prNumbers?: Set<number> // Set of PR numbers this reviewer has reviewed
}

export interface DiscussionComment {
  discussionTitle: string
  discussionNumber: number
  discussionUrl: string
  body: string
  url: string
  createdAt: string
  discussionAuthor: string
}

export interface DiscussionContribution {
  level: "Participating" | "VeryActive" | "ExtremelyActive"
  count: number
}

export interface ContributorStats {
  reviewsReceived: number
  rejectionsReceived: number
  approvalsReceived: number
  prsOpened: number
  prsMerged: number
  issuesCreated: number
  bountiedIssuesCount?: number
  bountiedIssuesTotal?: number
  score?: number
  approvalsGiven: number
  rejectionsGiven: number
  distinctPrsReviewed?: number // Number of unique PRs reviewed by this contributor
  major?: number // Count of Major PRs
  minor?: number // Count of Minor PRs
  tiny?: number // Count of Tiny PRs
  stars?: string // Either "⭐" or "👑" based on score
  discussionComments?: number // Total number of discussion comments
  discussionParticipating?: number // Count of "Participating" level comments
  discussionVeryActive?: number // Count of "Very Active" level comments
  discussionExtremelyActive?: number // Count of "Extremely Active" level comments
}

export interface PullRequest {
  number: number
  title: string
  body: string
  user: {
    login: string
  }
  html_url: string
  created_at: string
  merged_at: string
}

export interface MergedPullRequest extends PullRequest {
  diff: string
}

export interface PullRequestWithReviews extends PullRequest {
  reviewsReceived: number
  rejectionsReceived: number
  approvalsReceived: number
  isClosed: boolean
  reviewsByUser?: Record<string, ReviewerStats>
}

export interface AnalyzedPR {
  number: number
  title: string
  description: string
  impact: "Major" | "Minor" | "Tiny"
  contributor: string
  repo: string
  url: string
  isAlignedWithMilestone?: boolean // Whether the PR aligns with the current milestone
}
