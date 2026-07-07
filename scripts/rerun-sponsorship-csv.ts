import fs from "node:fs"
import os from "node:os"
import path from "node:path"

export function getOverviewFilesForMonth(
  year: number,
  month: number,
  overviewsDir = path.join(process.cwd(), "contribution-overviews"),
): string[] {
  const monthStart = new Date(Date.UTC(year, month - 1, 1))
  const nextMonthStart = new Date(Date.UTC(year, month, 1))

  return fs
    .readdirSync(overviewsDir)
    .filter((file) => /^\d{4}-\d{2}-\d{2}\.json$/.test(file))
    .filter((file) => {
      const weekStartDate = new Date(file.replace(".json", ""))
      if (Number.isNaN(weekStartDate.getTime())) return false

      const weekEndDate = new Date(weekStartDate)
      weekEndDate.setUTCDate(weekEndDate.getUTCDate() + 6)

      return weekEndDate >= monthStart && weekEndDate < nextMonthStart
    })
    .sort()
}

export async function rerunSponsorshipCsv(monthInput: string): Promise<void> {
  const match = /^(\d{4})-(0[1-9]|1[0-2])$/.exec(monthInput)
  if (!match) throw new Error("month must use YYYY-MM format")

  const year = Number(match[1])
  const month = Number(match[2])
  const repositoryRoot = process.cwd()
  const temporaryRoot = fs.mkdtempSync(
    path.join(os.tmpdir(), "sponsorship-rerun-"),
  )

  try {
    const temporaryOverviews = path.join(
      temporaryRoot,
      "contribution-overviews",
    )
    fs.mkdirSync(temporaryOverviews)
    fs.mkdirSync(path.join(temporaryRoot, "sponsorships"))

    const overviewFiles = getOverviewFilesForMonth(year, month)
    if (overviewFiles.length === 0) {
      throw new Error(`No contribution overviews found for ${monthInput}`)
    }

    for (const file of overviewFiles) {
      fs.copyFileSync(
        path.join(repositoryRoot, "contribution-overviews", file),
        path.join(temporaryOverviews, file),
      )
    }

    const reimbursementsFile = path.join(
      repositoryRoot,
      "hardware-reimbursements.toml",
    )
    if (fs.existsSync(reimbursementsFile)) {
      fs.copyFileSync(
        reimbursementsFile,
        path.join(temporaryRoot, "hardware-reimbursements.toml"),
      )
    }

    const generator = path.join(
      repositoryRoot,
      "scripts",
      "generate-sponsorship-csv.ts",
    )
    const childProcess = Bun.spawn(
      [globalThis.process.execPath, generator, String(year), String(month)],
      {
        cwd: temporaryRoot,
        stdout: "inherit",
        stderr: "inherit",
      },
    )
    const exitCode = await childProcess.exited
    if (exitCode !== 0) {
      throw new Error(`Sponsorship generator exited with code ${exitCode}`)
    }

    fs.copyFileSync(
      path.join(temporaryRoot, "sponsorships", `${monthInput}.csv`),
      path.join(repositoryRoot, "sponsorships", `${monthInput}.csv`),
    )
  } finally {
    fs.rmSync(temporaryRoot, { recursive: true, force: true })
  }
}

if (import.meta.main) {
  await rerunSponsorshipCsv(process.argv[2] ?? "")
}
