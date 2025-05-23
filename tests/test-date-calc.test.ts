import { expect, test } from "bun:test"
import { getLastWednesday } from "../lib/ai/date-utils"

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
  expect(result.getMilliseconds()).toBe(0)
})
