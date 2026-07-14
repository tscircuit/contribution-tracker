import type { ContributorStats } from "./types"
import { scoreToStarString } from "./scoring/scoreToStars"

export interface GitHubIdentityInput {
  id?: number
  login: string
}

export interface ResolvedGitHubIdentity {
  key: string
  githubId?: number
  githubLogin: string
}

/**
 * Overview files generated before GitHub IDs were persisted need a one-time
 * bridge to the durable identity. New data never relies on this table.
 */
const LEGACY_IDENTITIES_BY_LOGIN: Record<
  string,
  { githubId: number; githubLogin: string }
> = {
  "technologyet31-create": {
    githubId: 236259618,
    githubLogin: "abdalraof-albarbar",
  },
  "abdalraof-albarbar": {
    githubId: 236259618,
    githubLogin: "abdalraof-albarbar",
  },
}

const ADDITIVE_STAT_FIELDS = [
  "reviewsReceived",
  "rejectionsReceived",
  "approvalsReceived",
  "staffReviewedPrs",
  "staffRejectionsReceived",
  "staffApprovalsReceived",
  "prsOpened",
  "prsMerged",
  "issuesCreated",
  "bountiedIssuesCount",
  "bountiedIssuesTotal",
  "score",
  "approvalsGiven",
  "rejectionsGiven",
  "distinctPrsReviewedNonCodeOwner",
  "distinctPrsReviewedAsCodeOwner",
  "major",
  "minor",
  "tiny",
  "discussionComments",
  "discussionNormalComments",
  "discussionGreatInformativeComments",
  "discussionIncredibleComments",
] as const satisfies readonly (keyof ContributorStats)[]

export function resolveGitHubIdentity({
  id,
  login,
}: GitHubIdentityInput): ResolvedGitHubIdentity {
  const normalizedLogin = login.trim()
  if (id !== undefined) {
    return {
      key: `github:${id}`,
      githubId: id,
      githubLogin: normalizedLogin,
    }
  }

  const legacy = LEGACY_IDENTITIES_BY_LOGIN[normalizedLogin.toLowerCase()]
  if (legacy) {
    return {
      key: `github:${legacy.githubId}`,
      ...legacy,
    }
  }

  return {
    key: `login:${normalizedLogin.toLowerCase()}`,
    githubLogin: normalizedLogin,
  }
}

export function createEmptyContributorStats(
  identity?: GitHubIdentityInput,
): ContributorStats {
  const resolved = identity ? resolveGitHubIdentity(identity) : undefined
  return {
    githubId: resolved?.githubId,
    githubLogin: resolved?.githubLogin,
    reviewsReceived: 0,
    rejectionsReceived: 0,
    approvalsReceived: 0,
    staffReviewedPrs: 0,
    staffRejectionsReceived: 0,
    staffApprovalsReceived: 0,
    staffReviewedPrLinks: [],
    approvalsGiven: 0,
    rejectionsGiven: 0,
    prsOpened: 0,
    prsMerged: 0,
    issuesCreated: 0,
    bountiedIssuesCount: 0,
    bountiedIssuesTotal: 0,
    distinctPrsReviewedNonCodeOwner: 0,
    distinctPrsReviewedAsCodeOwner: 0,
    discussionComments: 0,
    discussionNormalComments: 0,
    discussionGreatInformativeComments: 0,
    discussionIncredibleComments: 0,
  }
}

export function getOrCreateContributor(
  contributorsByIdentity: Record<string, ContributorStats>,
  user: GitHubIdentityInput,
): { key: string; stats: ContributorStats } {
  const identity = resolveGitHubIdentity(user)
  const stats =
    contributorsByIdentity[identity.key] ?? createEmptyContributorStats(user)

  stats.githubId = identity.githubId
  stats.githubLogin = identity.githubLogin
  contributorsByIdentity[identity.key] = stats

  return { key: identity.key, stats }
}

function dedupeBy<T>(items: T[], getKey: (item: T) => string): T[] {
  const seen = new Set<string>()
  return items.filter((item) => {
    const key = getKey(item)
    if (seen.has(key)) return false
    seen.add(key)
    return true
  })
}

export function mergeContributorStats(
  first: ContributorStats,
  second: ContributorStats,
): ContributorStats {
  const merged: ContributorStats = { ...first }

  for (const field of ADDITIVE_STAT_FIELDS) {
    const firstValue = first[field]
    const secondValue = second[field]
    if (typeof firstValue === "number" || typeof secondValue === "number") {
      Object.assign(merged, {
        [field]:
          (typeof firstValue === "number" ? firstValue : 0) +
          (typeof secondValue === "number" ? secondValue : 0),
      })
    }
  }

  merged.githubId = second.githubId ?? first.githubId
  merged.githubLogin = second.githubLogin ?? first.githubLogin
  merged.staffReviewedPrLinks = dedupeBy(
    [
      ...(first.staffReviewedPrLinks ?? []),
      ...(second.staffReviewedPrLinks ?? []),
    ],
    (pr) => pr.url,
  )
  merged.reposOwned = dedupeBy(
    [...(first.reposOwned ?? []), ...(second.reposOwned ?? [])],
    (ownedRepo) => `${ownedRepo.repo}:${ownedRepo.paths.join(",")}`,
  )

  if (typeof merged.score === "number") {
    merged.stars = scoreToStarString(merged.score)
  } else {
    merged.stars = second.stars ?? first.stars
  }

  return merged
}

/** Converts ID-keyed runtime data or legacy login-keyed JSON to display data. */
export function normalizeContributorOverview(
  raw: Record<string, ContributorStats>,
): Record<string, ContributorStats> {
  const byIdentity = new Map<
    string,
    { githubLogin: string; stats: ContributorStats }
  >()

  for (const [outerLogin, rawStats] of Object.entries(raw)) {
    const identity = resolveGitHubIdentity({
      id: rawStats.githubId,
      login: rawStats.githubLogin ?? outerLogin,
    })
    const stats: ContributorStats = {
      ...rawStats,
      githubId: identity.githubId,
      githubLogin: identity.githubLogin,
    }
    const existing = byIdentity.get(identity.key)

    byIdentity.set(identity.key, {
      githubLogin: identity.githubLogin,
      stats: existing ? mergeContributorStats(existing.stats, stats) : stats,
    })
  }

  return Object.fromEntries(
    [...byIdentity.values()]
      .sort((a, b) => a.githubLogin.localeCompare(b.githubLogin))
      .map(({ githubLogin, stats }) => [githubLogin, stats]),
  )
}
