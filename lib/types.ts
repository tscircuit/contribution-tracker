import type { z } from "zod"
import type { pr_attribute_schema } from "./ai-stuff/pr-attributes"

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
  level:
    | "NormalComment"
    | "GreatInformativeComment"
    | "IncredibleCommentTopTier"
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
  discussionNormalComments?: number // Count of "NormalComment" level comments
  discussionGreatInformativeComments?: number // Count of "GreatInformativeComment" level comments
  discussionIncredibleComments?: number // Count of "IncredibleCommentTopTier" level comments
  reposOwned?: Array<{
    repo: string
    paths: string[]
  }>
}

export interface PullRequest {
  number: number
  state: "merged" | "opened" | "closed"
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
  hasMajorTag?: boolean
}

export interface PullRequestWithReviews extends PullRequest {
  reviewsReceived: number
  rejectionsReceived: number
  approvalsReceived: number
  isClosed: boolean
  reviewsByUser?: Record<string, ReviewerStats>
}

export interface AnalyzedPR extends PullRequest {
  number: number
  title: string
  description: string
  impact: "Major" | "Minor" | "Tiny"
  contributor: string
  repo: string
  url: string
  isAlignedWithMilestone: boolean
  starRating: 1 | 2 | 3 | 4 | 5
  object: z.infer<typeof pr_attribute_schema>
}

export interface Milestone {
  name: string
  description: string
  keywords: string[]
  isActive: boolean
  repos?: string[]
  customRequirements?: string
}
