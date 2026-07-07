import { afterEach, describe, expect, test } from "bun:test"
import fs from "node:fs"
import os from "node:os"
import path from "node:path"
import { getOverviewFilesForMonth } from "../scripts/rerun-sponsorship-csv"

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

describe("getOverviewFilesForMonth", () => {
  test("selects weeks ending in the requested month", () => {
    const overviewsDir = createOverviewFiles([
      "2026-05-26",
      "2026-06-02",
      "2026-06-09",
      "2026-06-16",
      "2026-06-23",
      "2026-06-30",
    ])

    expect(getOverviewFilesForMonth(2026, 6, overviewsDir)).toEqual([
      "2026-05-26.json",
      "2026-06-02.json",
      "2026-06-09.json",
      "2026-06-16.json",
      "2026-06-23.json",
    ])
  })

  test("ignores unrelated and invalid files", () => {
    const overviewsDir = createOverviewFiles(["2026-06-23"])
    fs.writeFileSync(path.join(overviewsDir, "notes.json"), "{}")
    fs.writeFileSync(path.join(overviewsDir, "2026-06-23.md"), "")

    expect(getOverviewFilesForMonth(2026, 6, overviewsDir)).toEqual([
      "2026-06-23.json",
    ])
  })
})
