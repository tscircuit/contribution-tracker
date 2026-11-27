import fs from "node:fs"
import type { SendPlan } from "./sponsorship-expense-send"
import { STAFF_USERNAMES } from "../frontend/src/constants/contributors"
import { getSponsorshipLimitCents } from "./scoring/sponsorship-limits"

export interface ReviewedSponsorship {
  username: string
  auditedPoints: number
  amountCents: number
  items?: SendPlan["items"]
}

export function readReviewedSponsorships(
  month: string,
): ReviewedSponsorship[] | null {
  const file = `sponsorships/${month}-audited.json`
  if (!fs.existsSync(file)) return null
  const audit = JSON.parse(fs.readFileSync(file, "utf8"))
  if (
    audit.month !== month ||
    audit.currency !== "USD" ||
    !Array.isArray(audit.contributors)
  )
    throw new Error("Invalid reviewed sponsorship period")
  const seen = new Set<string>()
  const staff = new Set(
    STAFF_USERNAMES.map((username) => username.toLowerCase()),
  )
  for (const contributor of audit.contributors) {
    if (
      typeof contributor.username !== "string" ||
      !/^[a-z\d-]+$/i.test(contributor.username)
    )
      throw new Error("Invalid reviewed username")
    const username = contributor.username.toLowerCase()
    if (seen.has(username) || staff.has(username))
      throw new Error("Duplicate or staff reviewed sponsorship")
    seen.add(username)
    if (
      !Number.isFinite(contributor.auditedPoints) ||
      contributor.auditedPoints < 0 ||
      !Number.isSafeInteger(contributor.amountCents) ||
      contributor.amountCents < 0 ||
      contributor.amountCents > getSponsorshipLimitCents(username)
    )
      throw new Error("Invalid or over-limit reviewed sponsorship")
    if (contributor.items) {
      if (
        !Array.isArray(contributor.items) ||
        contributor.items.some(
          (item: any) =>
            typeof item.description !== "string" ||
            item.amountV2?.currency !== "USD" ||
            !Number.isSafeInteger(item.amountV2.valueInCents) ||
            item.amountV2.valueInCents <= 0,
        ) ||
        contributor.items.reduce(
          (sum: number, item: any) => sum + item.amountV2.valueInCents,
          0,
        ) !== contributor.amountCents
      )
        throw new Error("Reviewed invoice items do not reconcile")
    }
  }
  return audit.contributors
}

export function reviewedSponsorshipCsv(month: string): string | null {
  const contributors = readReviewedSponsorships(month)
  if (!contributors) return null
  const rows = contributors
    .filter((entry) => entry.amountCents > 0)
    .map(
      (entry) =>
        `${entry.username},${(entry.amountCents / 100).toFixed(2)},"Reviewed audit: ${entry.auditedPoints} PR points; ${month}"`,
    )
  return `Maintainer username,Sponsorship amount in USD,REMARKS\n${rows.join("\n")}\n`
}
