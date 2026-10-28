import { expect, test } from "bun:test"
import fs from "node:fs"
import os from "node:os"
import path from "node:path"
import { arePaymentArtifactsDisabled } from "../lib/payment-artifacts"

const scriptPath = path.resolve("scripts/generate-sponsorship-csv.ts")

test("payment artifacts stop at November 2026 and remain disabled in future years", () => {
  expect(arePaymentArtifactsDisabled(2025, 11)).toBe(false)
  expect(arePaymentArtifactsDisabled(2026, 10)).toBe(false)
  expect(arePaymentArtifactsDisabled(2026, 11)).toBe(true)
  expect(arePaymentArtifactsDisabled(2026, 12)).toBe(true)
  expect(arePaymentArtifactsDisabled(2027, 1)).toBe(true)
})

test("disabled exports succeed without reading input or creating payment files", () => {
  const cwd = fs.mkdtempSync(path.join(os.tmpdir(), "payment-artifacts-"))
  try {
    // No overview directory or reimbursement file: the guard must run first.
    for (const [year, month] of [
      [2026, 11],
      [2026, 12],
      [2027, 1],
    ]) {
      const result = Bun.spawnSync(
        [process.execPath, scriptPath, String(year), String(month)],
        { cwd },
      )
      expect(result.exitCode).toBe(0)
      expect(result.stdout.toString()).toContain(
        "Payment artifacts are disabled",
      )
      expect(result.stdout.toString()).not.toContain("Total amount")
      expect(fs.readdirSync(cwd)).toEqual([])
    }
  } finally {
    fs.rmSync(cwd, { recursive: true, force: true })
  }
})

test("October exports still generate a sponsorship CSV", () => {
  const cwd = fs.mkdtempSync(path.join(os.tmpdir(), "payment-artifacts-"))
  try {
    fs.mkdirSync(path.join(cwd, "contribution-overviews"))
    fs.writeFileSync(
      path.join(cwd, "contribution-overviews", "2026-09-29.json"),
      JSON.stringify({ "example-contributor": { score: 11 } }),
    )
    const result = Bun.spawnSync([process.execPath, scriptPath, "2026", "10"], {
      cwd,
    })
    expect(result.exitCode).toBe(0)
    expect(
      fs.readFileSync(path.join(cwd, "sponsorships", "2026-10.csv"), "utf8"),
    ).toContain("example-contributor,")
  } finally {
    fs.rmSync(cwd, { recursive: true, force: true })
  }
})
