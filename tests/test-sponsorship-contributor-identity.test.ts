import { expect, test } from "bun:test"
import { createEmptyContributorStats } from "../lib/contributor-identity"
import { calculateSponsorship } from "../scripts/generate-sponsorship-csv"

test("sponsorship follows a contributor across a legacy username change", () => {
  const oldStats = createEmptyContributorStats()
  oldStats.score = 11
  const newStats = createEmptyContributorStats()
  newStats.score = 4

  const sponsorships = calculateSponsorship([
    {
      data: { "abdalraof-albarbar": newStats },
      weekStartDate: new Date("2026-07-07T00:00:00Z"),
      weekEndDate: new Date("2026-07-13T00:00:00Z"),
    },
    {
      data: { "technologyet31-create": oldStats },
      weekStartDate: new Date("2026-06-30T00:00:00Z"),
      weekEndDate: new Date("2026-07-06T00:00:00Z"),
    },
  ])

  expect(sponsorships).toEqual([
    {
      username: "abdalraof-albarbar",
      amount: 120,
      remarks: "Weekly scores: [2 (06/30-07/06), 1 (07/07-07/13)]",
    },
  ])
})

test("sponsorship uses the latest login for the same durable ID", () => {
  const oldStats = createEmptyContributorStats({
    id: 987654321,
    login: "old-login",
  })
  oldStats.score = 11
  const newStats = createEmptyContributorStats({
    id: 987654321,
    login: "new-login",
  })
  newStats.score = 4

  // Deliberately oldest-first: the date, not input ordering, chooses the login.
  const sponsorships = calculateSponsorship([
    {
      data: { "old-login": oldStats },
      weekStartDate: new Date("2026-06-30T00:00:00Z"),
      weekEndDate: new Date("2026-07-06T00:00:00Z"),
    },
    {
      data: { "new-login": newStats },
      weekStartDate: new Date("2026-07-07T00:00:00Z"),
      weekEndDate: new Date("2026-07-13T00:00:00Z"),
    },
  ])

  expect(sponsorships).toHaveLength(1)
  expect(sponsorships[0]).toMatchObject({
    username: "new-login",
    amount: 120,
  })
})
