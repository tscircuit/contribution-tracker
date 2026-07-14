import { describe, expect, test } from "bun:test"
import {
  createEmptyContributorStats,
  getOrCreateContributorStats,
  getPrsWithCurrentContributorLogins,
  mergeContributorStatsByGitHubId,
  resolveContributorIdentity,
} from "../lib/contributor-identity"
import type { AnalyzedPR } from "../lib/types"

describe("GitHub contributor identity", () => {
  test("uses the durable account ID when a login changes", () => {
    const identityBeforeRename = resolveContributorIdentity({
      id: 123,
      login: "old-login",
    })
    const identityAfterRename = resolveContributorIdentity({
      id: 123,
      login: "new-login",
    })

    expect(identityBeforeRename.contributorIdentityKey).toBe("github:123")
    expect(identityAfterRename.contributorIdentityKey).toBe(
      identityBeforeRename.contributorIdentityKey,
    )
  })

  test("updates the display login without creating a second contributor", () => {
    const contributorStatsByIdentity = {}
    const contributorStatsBeforeRename = getOrCreateContributorStats(
      contributorStatsByIdentity,
      {
        id: 123,
        login: "old-login",
      },
    )
    contributorStatsBeforeRename.prsOpened++
    const contributorStatsAfterRename = getOrCreateContributorStats(
      contributorStatsByIdentity,
      {
        id: 123,
        login: "new-login",
      },
    )
    contributorStatsAfterRename.prsOpened++

    expect(Object.keys(contributorStatsByIdentity)).toEqual(["github:123"])
    expect(contributorStatsAfterRename.githubLogin).toBe("new-login")
    expect(contributorStatsAfterRename.prsOpened).toBe(2)
  })

  test("merges ID-keyed overview entries and never adds their IDs", () => {
    const oldStats = createEmptyContributorStats({
      id: 123,
      login: "old-login",
    })
    oldStats.score = 6
    oldStats.prsMerged = 1
    const newStats = createEmptyContributorStats({
      id: 123,
      login: "new-login",
    })
    newStats.score = 8
    newStats.prsMerged = 2

    const contributorStatsByCurrentLogin = mergeContributorStatsByGitHubId({
      "old-login": oldStats,
      "new-login": newStats,
    })

    expect(Object.keys(contributorStatsByCurrentLogin)).toEqual(["new-login"])
    expect(contributorStatsByCurrentLogin["new-login"]).toMatchObject({
      githubId: 123,
      githubLogin: "new-login",
      prsMerged: 3,
      score: 14,
      stars: "⭐⭐",
    })
  })

  test("bridges overview files written before IDs were persisted", () => {
    const oldStats = createEmptyContributorStats()
    oldStats.score = 11
    const newStats = createEmptyContributorStats()
    newStats.score = 4

    const contributorStatsByCurrentLogin = mergeContributorStatsByGitHubId({
      "technologyet31-create": oldStats,
      "abdalraof-albarbar": newStats,
    })

    expect(Object.keys(contributorStatsByCurrentLogin)).toEqual([
      "abdalraof-albarbar",
    ])
    expect(contributorStatsByCurrentLogin["abdalraof-albarbar"]).toMatchObject({
      githubId: 236259618,
      githubLogin: "abdalraof-albarbar",
      score: 15,
    })
  })

  test("uses the current contributor login in persisted PR analysis", () => {
    const currentContributorStats = createEmptyContributorStats({
      id: 123,
      login: "new-login",
    })
    const analyzedPrWithOldLogin = {
      contributor: "old-login",
      contributorId: 123,
      user: { id: 123, login: "old-login" },
    } as AnalyzedPR

    const [analyzedPrWithCurrentLogin] = getPrsWithCurrentContributorLogins(
      [analyzedPrWithOldLogin],
      { "new-login": currentContributorStats },
    )

    expect(analyzedPrWithCurrentLogin).toMatchObject({
      contributor: "new-login",
      contributorId: 123,
      user: { id: 123, login: "new-login" },
    })
  })

  test("does not alias a reclaimed legacy login when GitHub supplies a new ID", () => {
    const reclaimedLoginIdentity = resolveContributorIdentity({
      id: 999999999,
      login: "technologyet31-create",
    })

    expect(reclaimedLoginIdentity).toEqual({
      contributorIdentityKey: "github:999999999",
      githubId: 999999999,
      githubLogin: "technologyet31-create",
    })
  })
})
