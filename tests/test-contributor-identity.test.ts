import { describe, expect, test } from "bun:test"
import {
  createEmptyContributorStats,
  getOrCreateContributor,
  normalizeContributorOverview,
  resolveGitHubIdentity,
} from "../lib/contributor-identity"

describe("GitHub contributor identity", () => {
  test("uses the durable account ID when a login changes", () => {
    const before = resolveGitHubIdentity({ id: 123, login: "old-login" })
    const after = resolveGitHubIdentity({ id: 123, login: "new-login" })

    expect(before.key).toBe("github:123")
    expect(after.key).toBe(before.key)
  })

  test("updates the display login without creating a second contributor", () => {
    const contributors = {}
    const first = getOrCreateContributor(contributors, {
      id: 123,
      login: "old-login",
    })
    first.stats.prsOpened++
    const second = getOrCreateContributor(contributors, {
      id: 123,
      login: "new-login",
    })
    second.stats.prsOpened++

    expect(Object.keys(contributors)).toEqual(["github:123"])
    expect(second.stats.githubLogin).toBe("new-login")
    expect(second.stats.prsOpened).toBe(2)
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

    const normalized = normalizeContributorOverview({
      "old-login": oldStats,
      "new-login": newStats,
    })

    expect(Object.keys(normalized)).toEqual(["new-login"])
    expect(normalized["new-login"]).toMatchObject({
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

    const normalized = normalizeContributorOverview({
      "technologyet31-create": oldStats,
      "abdalraof-albarbar": newStats,
    })

    expect(Object.keys(normalized)).toEqual(["abdalraof-albarbar"])
    expect(normalized["abdalraof-albarbar"]).toMatchObject({
      githubId: 236259618,
      githubLogin: "abdalraof-albarbar",
      score: 15,
    })
  })

  test("does not alias a reclaimed legacy login when GitHub supplies a new ID", () => {
    const reclaimed = resolveGitHubIdentity({
      id: 999999999,
      login: "technologyet31-create",
    })

    expect(reclaimed).toEqual({
      key: "github:999999999",
      githubId: 999999999,
      githubLogin: "technologyet31-create",
    })
  })
})
