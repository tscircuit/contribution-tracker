export interface ContributorStats {
  reviewsReceived: number
  approvalsReceived: number
  changesRequestedReceived: number
  prsOpened: number
  prsMerged: number
  issuesCreated: number
  bountiedIssuesCount?: number
  bountiedIssuesTotal?: number
  approvalsGiven: number  // Number of approvals given by this contributor
  changesRequested: number  // Number of changes requested by this contributor
  score?: number
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

export interface ReviewerStats {
  approvalsGiven: number
  changesRequested: number
}

export interface PullRequestWithReviews extends PullRequest {
  reviewsReceived: number
  rejectionsReceived: number
  approvalsReceived: number
  isClosed: boolean
  reviewers: string[]
  reviewsByUser: Record<string, ReviewerStats>
}

export interface AnalyzedPR {
  number: number
  title: string
  description: string
  impact: "Major" | "Minor" | "Tiny"
  contributor: string
  repo: string
  url: string
}
