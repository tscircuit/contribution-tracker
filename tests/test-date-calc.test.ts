import { expect, test } from "bun:test"
import { getLastTuesday1830, getLastWednesday } from "../lib/ai/date-utils"

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

// Tests for getLastTuesday1830

test("getLastTuesday1830: returns same Tuesday when past 18:30 UTC", () => {
  const tuesdayAfter1830 = new Date("2024-01-16T19:00:00.000Z") // Tuesday 19:00 UTC
  const result = getLastTuesday1830(tuesdayAfter1830)
  expect(result.toISOString()).toBe("2024-01-16T18:30:00.000Z")
})

test("getLastTuesday1830: returns previous Tuesday when before 18:30 UTC on Tuesday", () => {
  const tuesdayBefore1830 = new Date("2024-01-16T17:00:00.000Z") // Tuesday 17:00 UTC
  const result = getLastTuesday1830(tuesdayBefore1830)
  expect(result.toISOString()).toBe("2024-01-09T18:30:00.000Z")
})

test("getLastTuesday1830: returns current week Tuesday when after Tuesday", () => {
  const wednesday = new Date("2024-01-17T12:00:00.000Z") // Wednesday
  const thursday = new Date("2024-01-18T12:00:00.000Z") // Thursday
  const friday = new Date("2024-01-19T12:00:00.000Z") // Friday
  const saturday = new Date("2024-01-20T12:00:00.000Z") // Saturday

  expect(getLastTuesday1830(wednesday).toISOString()).toBe(
    "2024-01-16T18:30:00.000Z",
  )
  expect(getLastTuesday1830(thursday).toISOString()).toBe(
    "2024-01-16T18:30:00.000Z",
  )
  expect(getLastTuesday1830(friday).toISOString()).toBe(
    "2024-01-16T18:30:00.000Z",
  )
  expect(getLastTuesday1830(saturday).toISOString()).toBe(
    "2024-01-16T18:30:00.000Z",
  )
})

test("getLastTuesday1830: returns previous Tuesday when before Tuesday", () => {
  const sunday = new Date("2024-01-21T12:00:00.000Z") // Sunday
  const monday = new Date("2024-01-22T12:00:00.000Z") // Monday

  expect(getLastTuesday1830(sunday).toISOString()).toBe(
    "2024-01-16T18:30:00.000Z",
  )
  expect(getLastTuesday1830(monday).toISOString()).toBe(
    "2024-01-16T18:30:00.000Z",
  )
})

test("getLastTuesday1830: handles month boundary correctly", () => {
  const firstOfMonth = new Date("2024-02-01T12:00:00.000Z") // A Thursday
  expect(getLastTuesday1830(firstOfMonth).toISOString()).toBe(
    "2024-01-30T18:30:00.000Z",
  )
})

test("getLastTuesday1830: handles year boundary correctly", () => {
  const newYearsDay = new Date("2024-01-01T12:00:00.000Z") // A Monday
  expect(getLastTuesday1830(newYearsDay).toISOString()).toBe(
    "2023-12-26T18:30:00.000Z",
  )
})

test("getLastTuesday1830: sets time to 18:30:00.000 UTC", () => {
  const date = new Date("2024-01-17T15:30:45.123Z") // Wednesday with arbitrary time
  const result = getLastTuesday1830(date)
  expect(result.getUTCHours()).toBe(18)
  expect(result.getUTCMinutes()).toBe(30)
  expect(result.getUTCSeconds()).toBe(0)
  expect(result.getUTCMilliseconds()).toBe(0)
})

test("getLastTuesday1830: boundary case exactly at 18:30 UTC on Tuesday", () => {
  const tuesdayAt1830 = new Date("2024-01-16T18:30:00.000Z") // Tuesday exactly 18:30 UTC
  const result = getLastTuesday1830(tuesdayAt1830)
  expect(result.toISOString()).toBe("2024-01-16T18:30:00.000Z")
})
