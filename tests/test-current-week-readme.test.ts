import { expect, test } from "bun:test"
import {
  isCurrentContributionOverview,
  replaceCurrentWeekReadme,
} from "../lib/data-processing/current-week-readme"

test("identifies only the overview for the current reporting window", () => {
  const now = new Date("2026-08-05T20:15:00Z")

  expect(
    isCurrentContributionOverview(
      "2026-08-04T18:00:00Z",
      "2026-08-05T18:00:00Z",
      now,
    ),
  ).toBe(true)
  expect(
    isCurrentContributionOverview(
      "2026-07-28T18:00:00Z",
      "2026-08-04T18:00:00Z",
      now,
    ),
  ).toBe(false)
  expect(
    isCurrentContributionOverview("not-a-date", "2026-08-05T18:00:00Z", now),
  ).toBe(false)
})

test("handles the Tuesday cutoff boundary when deciding the current overview", () => {
  const beforeCutoff = new Date("2026-08-04T17:59:59Z")
  const atCutoff = new Date("2026-08-04T18:00:00Z")

  expect(
    isCurrentContributionOverview(
      "2026-07-28T18:00:00Z",
      "2026-08-04T18:00:00Z",
      beforeCutoff,
    ),
  ).toBe(false)
  expect(
    isCurrentContributionOverview(
      "2026-07-28T18:00:00Z",
      "2026-08-04T18:00:00Z",
      atCutoff,
    ),
  ).toBe(true)
})

test("replaces only the README current-week block", () => {
  const readme = [
    "# Header",
    "",
    "<!-- START_CURRENT_WEEK -->",
    "",
    "old overview",
    "",
    "<!-- END_CURRENT_WEEK -->",
    "",
    "Footer",
  ].join("\n")

  expect(replaceCurrentWeekReadme(readme, "new overview")).toBe(
    [
      "# Header",
      "",
      "<!-- START_CURRENT_WEEK -->",
      "",
      "new overview",
      "",
      "<!-- END_CURRENT_WEEK -->",
      "",
      "Footer",
    ].join("\n"),
  )
})

test("fails clearly instead of silently skipping malformed README markers", () => {
  expect(() => replaceCurrentWeekReadme("# README", "overview")).toThrow(
    "README current-week markers are missing or out of order",
  )
})
