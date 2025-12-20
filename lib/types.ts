import type { z } from "zod"
import type {
  pr_attribute_schema,
  PrAttributeSchema,
} from "./ai-stuff/pr-attributes"

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
  distinctPrsReviewedNonCodeOwner?: number // Number of unique PRs reviewed by this contributor
  distinctPrsReviewedAsCodeOwner?: number // Number of unique PRs reviewed by this contributor as a code owner
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
  avgTimeToFirstReviewMs?: number // Average time in milliseconds from PR creation to first review
  avgTimeToFirstReviewHours?: number // Average time in hours from PR creation to first review (for display)
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
  merged_at: string | null
}

export interface MergedPullRequest extends PullRequest {
  diff: string
  manualStarRating?: StarRating
  /** @deprecated */
  hasMajorTag?: boolean
}

export interface PullRequestWithReviews extends PullRequest {
  reviewsReceived: number
  rejectionsReceived: number
  approvalsReceived: number
  isClosed: boolean
  reviewsByUser?: Record<string, ReviewerStats>
  timeToFirstReviewMs?: number // Time in milliseconds from PR creation to first review
}

export type StarRating = 0 | 1 | 2 | 3 | 4 | 5

export interface AnalyzedPR extends PullRequest, PrAttributeSchema {
  number: number
  title: string
  description: string
  /** @deprecated */
  impact: "Major" | "Minor" | "Tiny"
  contributor: string
  repo: string
  url: string
  /** @deprecated */
  isAlignedWithMilestone: boolean
  starRating: StarRating
}

export interface Milestone {
  name: string
  description: string
  keywords: string[]
  isActive: boolean
  repos?: string[]
  customRequirements?: string
}
