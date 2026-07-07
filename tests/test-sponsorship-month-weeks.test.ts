import { expect, test } from "bun:test"
import path from "node:path"
import { getFullWeeksForMonth } from "../scripts/generate-sponsorship-csv"

function basenamesForMonth(year: number, month: number, today: Date) {
  return getFullWeeksForMonth(year, month, today).map((week) =>
    path.basename(week.filePath),
  )
}

test("sponsorship month includes weeks ending in that month", () => {
  const files = basenamesForMonth(2026, 6, new Date("2026-07-07T00:00:00Z"))

  expect(files).toEqual([
    "2026-06-23.json",
    "2026-06-16.json",
    "2026-06-09.json",
    "2026-06-02.json",
    "2026-05-26.json",
  ])
  expect(files).not.toContain("2026-06-30.json")
})

test("sponsorship month lookup scans past newer overview files", () => {
  const files = basenamesForMonth(2026, 2, new Date("2026-07-07T00:00:00Z"))

  expect(files).toEqual([
    "2026-02-17.json",
    "2026-02-10.json",
    "2026-02-03.json",
    "2026-01-28.json",
  ])
})
