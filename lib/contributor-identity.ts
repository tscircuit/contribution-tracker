import { scoreToStarString } from "./scoring/scoreToStars"
import type { AnalyzedPR, ContributorStats } from "./types"

export interface GitHubUserIdentity {
  id?: number
  login: string
}

export interface ContributorIdentity {
  contributorIdentityKey: string
  githubId?: number
  githubLogin: string
}

/**
 * Overview files generated before GitHub IDs were persisted need a one-time
 * bridge to the durable identity. New data never relies on this table.
 */
const LEGACY_CONTRIBUTOR_IDENTITIES_BY_LOGIN: Record<
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

const ADDITIVE_CONTRIBUTOR_STAT_FIELDS = [
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
] as const satisfies readonly (keyof ContributorStats)[]

export function resolveContributorIdentity({
  id,
  login,
}: GitHubUserIdentity): ContributorIdentity {
  const trimmedLogin = login.trim()
  if (id !== undefined) {
    return {
      contributorIdentityKey: `github:${id}`,
      githubId: id,
      githubLogin: trimmedLogin,
    }
  }

  const legacyContributorIdentity =
    LEGACY_CONTRIBUTOR_IDENTITIES_BY_LOGIN[trimmedLogin.toLowerCase()]
  if (legacyContributorIdentity) {
    return {
      contributorIdentityKey: `github:${legacyContributorIdentity.githubId}`,
      ...legacyContributorIdentity,
    }
  }

  return {
    contributorIdentityKey: `login:${trimmedLogin.toLowerCase()}`,
    githubLogin: trimmedLogin,
  }
}

export function createEmptyContributorStats(
  githubUserIdentity?: GitHubUserIdentity,
): ContributorStats {
  const contributorIdentity = githubUserIdentity
    ? resolveContributorIdentity(githubUserIdentity)
    : undefined
  return {
    githubId: contributorIdentity?.githubId,
    githubLogin: contributorIdentity?.githubLogin,
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
  }
}

export function getOrCreateContributorStats(
  contributorStatsByIdentity: Record<string, ContributorStats>,
  githubUserIdentity: GitHubUserIdentity,
): ContributorStats {
  const contributorIdentity = resolveContributorIdentity(githubUserIdentity)
  const contributorStats =
    contributorStatsByIdentity[contributorIdentity.contributorIdentityKey] ??
    createEmptyContributorStats(githubUserIdentity)

  contributorStats.githubId = contributorIdentity.githubId
  contributorStats.githubLogin = contributorIdentity.githubLogin
  contributorStatsByIdentity[contributorIdentity.contributorIdentityKey] =
    contributorStats

  return contributorStats
}

function dedupeBy<T>(items: T[], getItemKey: (item: T) => string): T[] {
  const seen = new Set<string>()
  return items.filter((item) => {
    const itemKey = getItemKey(item)
    if (seen.has(itemKey)) return false
    seen.add(itemKey)
    return true
  })
}

export function mergeContributorStats(
  firstContributorStats: ContributorStats,
  secondContributorStats: ContributorStats,
): ContributorStats {
  const mergedContributorStats: ContributorStats = {
    ...firstContributorStats,
  }

  for (const field of ADDITIVE_CONTRIBUTOR_STAT_FIELDS) {
    const firstStat = firstContributorStats[field]
    const secondStat = secondContributorStats[field]
    if (typeof firstStat === "number" || typeof secondStat === "number") {
      Object.assign(mergedContributorStats, {
        [field]:
          (typeof firstStat === "number" ? firstStat : 0) +
          (typeof secondStat === "number" ? secondStat : 0),
      })
    }
  }

  mergedContributorStats.githubId =
    secondContributorStats.githubId ?? firstContributorStats.githubId
  mergedContributorStats.githubLogin =
    secondContributorStats.githubLogin ?? firstContributorStats.githubLogin
  mergedContributorStats.staffReviewedPrLinks = dedupeBy(
    [
      ...(firstContributorStats.staffReviewedPrLinks ?? []),
      ...(secondContributorStats.staffReviewedPrLinks ?? []),
    ],
    (pr) => pr.url,
  )
  mergedContributorStats.reposOwned = dedupeBy(
    [
      ...(firstContributorStats.reposOwned ?? []),
      ...(secondContributorStats.reposOwned ?? []),
    ],
    (ownedRepo) => `${ownedRepo.repo}:${ownedRepo.paths.join(",")}`,
  )

  if (typeof mergedContributorStats.score === "number") {
    mergedContributorStats.stars = scoreToStarString(
      mergedContributorStats.score,
    )
  } else {
    mergedContributorStats.stars =
      secondContributorStats.stars ?? firstContributorStats.stars
  }

  return mergedContributorStats
}

/**
 * Merges contributor stats by durable GitHub ID and returns them keyed by the
 * contributor's current login for display and persisted overview files.
 */
export function mergeContributorStatsByGitHubId(
  contributorStatsByLoginOrIdentity: Record<string, ContributorStats>,
): Record<string, ContributorStats> {
  const contributorStatsByIdentity = new Map<
    string,
    { githubLogin: string; contributorStats: ContributorStats }
  >()

  for (const [loginOrIdentityKey, contributorStats] of Object.entries(
    contributorStatsByLoginOrIdentity,
  )) {
    const contributorIdentity = resolveContributorIdentity({
      id: contributorStats.githubId,
      login: contributorStats.githubLogin ?? loginOrIdentityKey,
    })
    const contributorStatsWithIdentity: ContributorStats = {
      ...contributorStats,
      githubId: contributorIdentity.githubId,
      githubLogin: contributorIdentity.githubLogin,
    }
    const existingContributor = contributorStatsByIdentity.get(
      contributorIdentity.contributorIdentityKey,
    )

    contributorStatsByIdentity.set(contributorIdentity.contributorIdentityKey, {
      githubLogin: contributorIdentity.githubLogin,
      contributorStats: existingContributor
        ? mergeContributorStats(
            existingContributor.contributorStats,
            contributorStatsWithIdentity,
          )
        : contributorStatsWithIdentity,
    })
  }

  return Object.fromEntries(
    [...contributorStatsByIdentity.values()]
      .sort((a, b) => a.githubLogin.localeCompare(b.githubLogin))
      .map(({ githubLogin, contributorStats }) => [
        githubLogin,
        contributorStats,
      ]),
  )
}

export function getPrsWithCurrentContributorLogins(
  analyzedPrs: AnalyzedPR[],
  contributorStatsByLogin: Record<string, ContributorStats>,
): AnalyzedPR[] {
  const currentLoginByGithubId = new Map(
    Object.entries(contributorStatsByLogin).flatMap(
      ([login, contributorStats]) =>
        contributorStats.githubId === undefined
          ? []
          : [[contributorStats.githubId, login] as const],
    ),
  )

  return analyzedPrs.map((analyzedPr) => {
    const contributorIdentity = resolveContributorIdentity({
      id: analyzedPr.contributorId ?? analyzedPr.user.id,
      login: analyzedPr.contributor,
    })
    const currentContributorLogin =
      (contributorIdentity.githubId === undefined
        ? undefined
        : currentLoginByGithubId.get(contributorIdentity.githubId)) ??
      contributorIdentity.githubLogin

    return {
      ...analyzedPr,
      contributor: currentContributorLogin,
      contributorId: contributorIdentity.githubId,
      user: {
        ...analyzedPr.user,
        id: contributorIdentity.githubId,
        login: currentContributorLogin,
      },
    }
  })
}
