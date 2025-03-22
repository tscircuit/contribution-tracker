export interface ReviewerStats {
  approvalsGiven: number
  rejectionsGiven: number
  prNumbers?: Set<number> // Set of PR numbers this reviewer has reviewed
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
  milestoneAlignment?: boolean // Whether the PR aligns with the current milestone
}
