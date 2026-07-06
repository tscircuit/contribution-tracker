import { expect, test } from "bun:test"
import {
  getContributionOverviewWindow,
  getLastTuesday1800,
  getLastWednesday,
  getLatestContributionOverviewCutoff,
} from "../lib/ai/date-utils"

test("returns same date when current day is Wednesday", () => {
  const wednesday = new Date("2024-01-17") // A Wednesday
  const result = getLastWednesday(wednesday)
  expect(result.toISOString().split("T")[0]).toBe("2024-01-17")
})

test("returns previous Wednesday when current day is after Wednesday", () => {
  const thursday = new Date("2024-01-18") // A Thursday
  const friday = new Date("2024-01-19") // A Friday
  const saturday = new Date("2024-01-20") // A Saturday

  expect(getLastWednesday(thursday).toISOString().split("T")[0]).toBe(
    "2024-01-17",
  )
  expect(getLastWednesday(friday).toISOString().split("T")[0]).toBe(
    "2024-01-17",
  )
  expect(getLastWednesday(saturday).toISOString().split("T")[0]).toBe(
    "2024-01-17",
  )
})

test("returns previous Wednesday when current day is before Wednesday", () => {
  const sunday = new Date("2024-01-21") // A Sunday
  const monday = new Date("2024-01-22") // A Monday
  const tuesday = new Date("2024-01-23") // A Tuesday

  expect(getLastWednesday(sunday).toISOString().split("T")[0]).toBe(
    "2024-01-17",
  )
  expect(getLastWednesday(monday).toISOString().split("T")[0]).toBe(
    "2024-01-17",
  )
  expect(getLastWednesday(tuesday).toISOString().split("T")[0]).toBe(
    "2024-01-17",
  )
})

test("handles month boundary correctly", () => {
  const firstOfMonth = new Date("2024-02-01") // A Thursday
  expect(getLastWednesday(firstOfMonth).toISOString().split("T")[0]).toBe(
    "2024-01-31",
  )
})

test("handles year boundary correctly", () => {
  const newYearsDay = new Date("2024-01-01") // A Monday
  expect(getLastWednesday(newYearsDay).toISOString().split("T")[0]).toBe(
    "2023-12-27",
  )
})

test("normalizes to midnight", () => {
  const date = new Date("2024-01-17T15:30:45.123Z") // Wednesday with time
  const result = getLastWednesday(date)
  expect(result.getUTCHours()).toBe(0)
  expect(result.getUTCMinutes()).toBe(0)
  expect(result.getUTCSeconds()).toBe(0)
  expect(result.getUTCMilliseconds()).toBe(0)
})

// Tests for contribution overview windows

// Given Wednesday Jan 17 at 19:00 UTC, the run is after that day's 18:00 UTC
// cutoff, so the latest reporting cutoff should be Wednesday Jan 17 at 18:00 UTC.
test("getLatestContributionOverviewCutoff: returns today's 18:00 UTC after cutoff", () => {
  const afterCutoff = new Date("2024-01-17T19:00:00.000Z")
  const result = getLatestContributionOverviewCutoff(afterCutoff)
  expect(result.toISOString()).toBe("2024-01-17T18:00:00.000Z")
})

// Given Wednesday Jan 17 at 17:00 UTC, the run is before that day's 18:00 UTC
// cutoff, so the latest reporting cutoff should be Tuesday Jan 16 at 18:00 UTC.
test("getLatestContributionOverviewCutoff: returns yesterday's 18:00 UTC before cutoff", () => {
  const beforeCutoff = new Date("2024-01-17T17:00:00.000Z")
  const result = getLatestContributionOverviewCutoff(beforeCutoff)
  expect(result.toISOString()).toBe("2024-01-16T18:00:00.000Z")
})

// Given Tuesday Jan 16 at 10:00 UTC, the Tuesday 18:00 UTC cutoff has not
// happened yet. The report should cover Tuesday Jan 9 at 18:00 UTC through
// Monday Jan 15 at 18:00 UTC.
test("getContributionOverviewWindow: Tuesday morning runs through Monday cutoff", () => {
  const tuesdayMorning = new Date("2024-01-16T10:00:00.000Z")
  const result = getContributionOverviewWindow(tuesdayMorning)
  expect(result.startDate.toISOString()).toBe("2024-01-09T18:00:00.000Z")
  expect(result.endDate.toISOString()).toBe("2024-01-15T18:00:00.000Z")
})

// Given Tuesday Jan 16 exactly at 18:00 UTC, the weekly cutoff has just happened.
// The report should cover the completed week from Tuesday Jan 9 at 18:00 UTC
// through Tuesday Jan 16 at 18:00 UTC.
test("getContributionOverviewWindow: Tuesday at cutoff closes previous week", () => {
  const tuesdayAtCutoff = new Date("2024-01-16T18:00:00.000Z")
  const result = getContributionOverviewWindow(tuesdayAtCutoff)
  expect(result.startDate.toISOString()).toBe("2024-01-09T18:00:00.000Z")
  expect(result.endDate.toISOString()).toBe("2024-01-16T18:00:00.000Z")
})

// Given Wednesday Jan 17 at 10:00 UTC, Wednesday's 18:00 UTC cutoff has not
// happened yet. The latest 18:00 UTC cutoff is Tuesday Jan 16, so the report
// should still cover the completed previous week from Tuesday Jan 9 at 18:00 UTC
// through Tuesday Jan 16 at 18:00 UTC.
test("getContributionOverviewWindow: Wednesday morning runs the completed previous week", () => {
  const wednesdayMorning = new Date("2024-01-17T10:00:00.000Z")
  const result = getContributionOverviewWindow(wednesdayMorning)
  expect(result.startDate.toISOString()).toBe("2024-01-09T18:00:00.000Z")
  expect(result.endDate.toISOString()).toBe("2024-01-16T18:00:00.000Z")
})

// Given Wednesday Jan 17 at 19:00 UTC, Tuesday's weekly cutoff has already
// happened. The report should cover the new week from Tuesday Jan 16 at
// 18:00 UTC through Wednesday Jan 17 at 18:00 UTC.
test("getContributionOverviewWindow: Wednesday run starts from Tuesday cutoff", () => {
  const wednesday = new Date("2024-01-17T19:00:00.000Z")
  const result = getContributionOverviewWindow(wednesday)
  expect(result.startDate.toISOString()).toBe("2024-01-16T18:00:00.000Z")
  expect(result.endDate.toISOString()).toBe("2024-01-17T18:00:00.000Z")
})

// Given Thursday Feb 1 at 19:00 UTC, the report should cross the month boundary
// cleanly: Tuesday Jan 30 at 18:00 UTC through Thursday Feb 1 at 18:00 UTC.
test("getContributionOverviewWindow: handles month boundary correctly", () => {
  const firstOfMonth = new Date("2024-02-01T19:00:00.000Z") // A Thursday
  const result = getContributionOverviewWindow(firstOfMonth)
  expect(result.startDate.toISOString()).toBe("2024-01-30T18:00:00.000Z")
  expect(result.endDate.toISOString()).toBe("2024-02-01T18:00:00.000Z")
})

// Given Monday Jan 1 at 19:00 UTC, the report should cross the year boundary
// cleanly: Tuesday Dec 26 at 18:00 UTC through Monday Jan 1 at 18:00 UTC.
test("getContributionOverviewWindow: handles year boundary correctly", () => {
  const newYearsDay = new Date("2024-01-01T19:00:00.000Z") // A Monday
  const result = getContributionOverviewWindow(newYearsDay)
  expect(result.startDate.toISOString()).toBe("2023-12-26T18:00:00.000Z")
  expect(result.endDate.toISOString()).toBe("2024-01-01T18:00:00.000Z")
})

// Given Wednesday Jan 17 at 19:00 UTC, this helper should return the start of
// that reporting window: Tuesday Jan 16 at 18:00 UTC.
test("getLastTuesday1800: returns contribution overview start date", () => {
  const date = new Date("2024-01-17T19:00:00.000Z")
  const result = getLastTuesday1800(date)
  expect(result.toISOString()).toBe("2024-01-16T18:00:00.000Z")
})
