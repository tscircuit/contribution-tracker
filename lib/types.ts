export interface ContributorStats {
  reviewsReceived: number
  rejectionsReceived: number  // Number of rejections received on contributor's PRs
  approvalsReceived: number  // Number of approvals received on contributor's PRs
  changesRequested: number  // Number of changes requested on contributor's PRs
  changesRequestedGiven: number  // Number of changes requested by this contributor on others' PRs
  prsOpened: number
  prsMerged: number
  issuesCreated: number
  bountiedIssuesCount?: number
  bountiedIssuesTotal?: number
  approvalsGiven: number  // Number of approvals given by this contributor
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
