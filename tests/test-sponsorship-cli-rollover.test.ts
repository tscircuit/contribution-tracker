import { afterEach, expect, test } from "bun:test"
import fs from "node:fs"
import os from "node:os"
import path from "node:path"

const scriptPath = path.resolve(
  import.meta.dir,
  "../scripts/generate-sponsorship-csv.ts",
)
const fixtureDirectories: string[] = []
const csvHeader = "Maintainer username,Sponsorship amount in USD,REMARKS\n"

afterEach(() => {
  for (const directory of fixtureDirectories.splice(0)) {
    fs.rmSync(directory, { recursive: true, force: true })
  }
})

function createFixture(weekStarts: string[]) {
  const directory = fs.mkdtempSync(
    path.join(os.tmpdir(), "sponsorship-rollover-"),
  )
  fixtureDirectories.push(directory)
  fs.mkdirSync(path.join(directory, "contribution-overviews"))
  fs.mkdirSync(path.join(directory, "sponsorships"))
  weekStarts.forEach((weekStart, index) => {
    fs.writeFileSync(
      path.join(directory, "contribution-overviews", `${weekStart}.json`),
      JSON.stringify({
        "test-contributor": { score: index === weekStarts.length - 1 ? 4 : 0 },
      }),
    )
  })
  return directory
}

function runExport({
  directory,
  now,
  args = [],
}: {
  directory: string
  now: string
  args?: string[]
}) {
  const preloadPath = path.join(directory, "clock.ts")
  fs.writeFileSync(
    preloadPath,
    `import { setSystemTime } from "bun:test"; setSystemTime(new Date(${JSON.stringify(now)}));`,
  )
  return Bun.spawnSync({
    cmd: [process.execPath, "--preload", preloadPath, scriptPath, ...args],
    cwd: directory,
    stdout: "pipe",
    stderr: "pipe",
  })
}

const rollovers = [
  {
    month: "2026-08",
    nextMonth: "2026-09",
    cutoffDate: "2026-09-01",
    weekStarts: [
      "2026-07-28",
      "2026-08-04",
      "2026-08-11",
      "2026-08-18",
      "2026-08-25",
    ],
    finalWeekRemark: "1 (08/25-08/31)",
  },
  {
    month: "2029-12",
    nextMonth: "2030-01",
    cutoffDate: "2030-01-01",
    weekStarts: [
      "2029-11-27",
      "2029-12-04",
      "2029-12-11",
      "2029-12-18",
      "2029-12-25",
    ],
    finalWeekRemark: "1 (12/25-12/31)",
  },
]

for (const rollover of rollovers) {
  test(`default export finalizes ${rollover.month} only after its final cutoff`, () => {
    const directory = createFixture(rollover.weekStarts)
    const csvPath = path.join(
      directory,
      "sponsorships",
      `${rollover.month}.csv`,
    )
    fs.writeFileSync(csvPath, csvHeader)

    const before = runExport({
      directory,
      now: `${rollover.cutoffDate}T17:59:59Z`,
    })
    expect(before.exitCode).toBe(0)
    expect(fs.readFileSync(csvPath, "utf8")).toBe(csvHeader)

    const after = runExport({
      directory,
      now: `${rollover.cutoffDate}T18:00:00Z`,
    })
    expect(after.exitCode).toBe(0)
    const csv = fs.readFileSync(csvPath, "utf8")
    expect(csv).toContain("test-contributor,30,")
    expect(csv).toContain(rollover.finalWeekRemark)
    expect(
      fs.existsSync(
        path.join(directory, "sponsorships", `${rollover.nextMonth}.csv`),
      ),
    ).toBe(false)
  })
}

test("default export also refreshes the current month when it has completed weeks", () => {
  const directory = createFixture([...rollovers[0].weekStarts, "2026-09-01"])
  const result = runExport({ directory, now: "2026-09-08T19:00:00Z" })
  expect(result.exitCode).toBe(0)
  expect(
    fs.existsSync(path.join(directory, "sponsorships", "2026-08.csv")),
  ).toBe(true)
  expect(
    fs.readFileSync(
      path.join(directory, "sponsorships", "2026-09.csv"),
      "utf8",
    ),
  ).toContain("test-contributor,75,")
})

test("explicit historical export still writes only the requested month", () => {
  const directory = createFixture(rollovers[0].weekStarts)
  const result = runExport({
    directory,
    now: "2026-10-01T19:00:00Z",
    args: ["2026", "8"],
  })
  expect(result.exitCode).toBe(0)
  expect(fs.readdirSync(path.join(directory, "sponsorships"))).toEqual([
    "2026-08.csv",
  ])
})

test("explicit export of a month without completed weeks remains an error", () => {
  const directory = createFixture(rollovers[0].weekStarts)
  const result = runExport({
    directory,
    now: "2026-09-01T18:00:00Z",
    args: ["2026", "9"],
  })
  expect(result.exitCode).toBe(1)
  expect(result.stderr.toString()).toContain("No weekly data found for 2026-9")
  expect(fs.readdirSync(path.join(directory, "sponsorships"))).toEqual([])
})

test("repeated default exports keep reimbursements in their own months", () => {
  const directory = createFixture([...rollovers[0].weekStarts, "2026-09-01"])
  fs.writeFileSync(
    path.join(directory, "hardware-reimbursements.toml"),
    `[[reimbursements]]
username = "test-contributor"
amount = 12.34
date = "2026-08-31"

[[reimbursements]]
username = "test-contributor"
amount = 7.89
date = "2026-09-01"
`,
  )
  const first = runExport({ directory, now: "2026-09-08T19:00:00Z" })
  expect(first.exitCode).toBe(0)
  const augustPath = path.join(directory, "sponsorships", "2026-08.csv")
  const septemberPath = path.join(directory, "sponsorships", "2026-09.csv")
  const augustCsv = fs.readFileSync(augustPath, "utf8")
  const septemberCsv = fs.readFileSync(septemberPath, "utf8")
  expect(augustCsv).toContain("test-contributor,12.34,")
  expect(septemberCsv).toContain("test-contributor,82.89,")

  const second = runExport({ directory, now: "2026-09-08T19:00:00Z" })
  expect(second.exitCode).toBe(0)
  expect(fs.readFileSync(augustPath, "utf8")).toBe(augustCsv)
  expect(fs.readFileSync(septemberPath, "utf8")).toBe(septemberCsv)
})
