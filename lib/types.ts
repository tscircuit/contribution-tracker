import type { z } from "zod"
import type {
  pr_attribute_schema,
  PrAttributeSchema,
} from "./ai-stuff/pr-attributes"

export interface ReviewerStats {
  githubId?: number
  githubLogin: string
  approvalsGiven: number
  rejectionsGiven: number
  prNumbers?: Set<number> // Set of PR numbers this reviewer has reviewed
}

export interface ContributorStats {
  /** Durable GitHub account ID. Missing only from overview files generated before ID tracking. */
  githubId?: number
  /** Most recently observed GitHub login; used only for display and API filters. */
  githubLogin?: string
  reviewsReceived: number
  rejectionsReceived: number
  approvalsReceived: number
  staffReviewedPrs?: number
  staffRejectionsReceived?: number
  staffApprovalsReceived?: number
  staffReviewedPrLinks?: Array<{
    number: number
    url: string
    title: string
    staffApprovals: number
    staffRejections: number
  }>
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
    id?: number
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
  allReviewsByUser?: Record<string, ReviewerStats>
}

export type StarRating = 0 | 1 | 2 | 3 | 4 | 5

export interface AnalyzedPR extends PullRequest, PrAttributeSchema {
  number: number
  title: string
  description: string
  /** @deprecated */
  impact: "Major" | "Minor" | "Tiny"
  contributor: string
  /** Durable identity for the contributor. Missing only from legacy cached analyses. */
  contributorId?: number
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
