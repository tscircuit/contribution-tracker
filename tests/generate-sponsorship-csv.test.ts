import { afterEach, describe, expect, test } from "bun:test"
import fs from "node:fs"
import os from "node:os"
import path from "node:path"
import { getFullWeeksForMonth } from "../scripts/generate-sponsorship-csv"

let temporaryDirectory: string | undefined

afterEach(() => {
  if (temporaryDirectory) {
    fs.rmSync(temporaryDirectory, { recursive: true, force: true })
    temporaryDirectory = undefined
  }
})

function createOverviewFiles(dates: string[]): string {
  temporaryDirectory = fs.mkdtempSync(
    path.join(os.tmpdir(), "sponsorship-overviews-"),
  )

  for (const date of dates) {
    fs.writeFileSync(path.join(temporaryDirectory, `${date}.json`), "{}")
  }

  return temporaryDirectory
}

describe("getFullWeeksForMonth", () => {
  test("selects complete weeks ending in the requested month", () => {
    const overviewsDir = createOverviewFiles([
      "2026-05-26",
      "2026-06-02",
      "2026-06-09",
      "2026-06-16",
      "2026-06-23",
      "2026-06-30",
    ])

    const weeks = getFullWeeksForMonth(
      2026,
      6,
      new Date("2026-07-07T00:00:00Z"),
      overviewsDir,
    )

    expect(weeks.map(({ filePath }) => path.basename(filePath))).toEqual([
      "2026-06-23.json",
      "2026-06-16.json",
      "2026-06-09.json",
      "2026-06-02.json",
      "2026-05-26.json",
    ])
  })

  test("excludes an incomplete week", () => {
    const overviewsDir = createOverviewFiles(["2026-06-16", "2026-06-23"])

    const weeks = getFullWeeksForMonth(
      2026,
      6,
      new Date("2026-06-25T00:00:00Z"),
      overviewsDir,
    )

    expect(weeks.map(({ filePath }) => path.basename(filePath))).toEqual([
      "2026-06-16.json",
    ])
  })
})
