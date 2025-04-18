import { GitPullRequest, MessageSquare, BadgeAlert } from "lucide-react"

export const CONTRIBUTION_TYPES = {
  MAJOR: {
    label: "major",
    emoji: "🐳",
    value: "major",
    colorClass: "text-red-600",
  },
  MINOR: {
    label: "minor",
    emoji: "🐙",
    value: "minor",
    colorClass: "text-purple-600",
  },
  TINY: {
    label: "tiny",
    emoji: "🐌",
    value: "tiny",
    colorClass: "text-yellow-600",
  },
} as const

export const STATS_CONFIG = [
  {
    key: "pullRequests",
    label: "Pull Requests",
    icon: GitPullRequest,
    iconColor: "text-green-500",
    getValue: (stats: { prsMerged: number; prsOpened: number }) =>
      `${stats.prsMerged}/${stats.prsOpened}`,
  },
  {
    key: "reviews",
    label: "Reviews",
    icon: MessageSquare,
    iconColor: "text-blue-500",
    getValue: (stats: { reviewsReceived: number }) =>
      stats.reviewsReceived.toString(),
  },
  {
    key: "issues",
    label: "Issues",
    icon: BadgeAlert,
    iconColor: "text-gray-500",
    getValue: (stats: { issuesCreated: number }) =>
      stats.issuesCreated.toString(),
  },
] as const
