export interface ContributorStats {
  reviewsReceived: number
  rejections: number
  approvals: number
  changesRequested: number
  prsOpened: number
  prsClosed: number
  issuesCreated: number
  bountiedIssuesCount?: number
  bountiedIssuesTotal?: number
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
