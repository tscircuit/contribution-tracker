import fs from "node:fs"
import path from "node:path"
import { STAFF_USERNAMES } from "../frontend/src/constants/contributors"
import { isUserIneligible } from "./ineligible-sponsorships"
import { getFullWeeksForMonth } from "./contribution-weeks"
import {
  historicalGithubId,
  parseProfiles,
} from "./sponsorship-profile-matching"
import {
  applyPrAuditRules,
  isNonContribution,
  PR_EVALUATION_POLICY_VERSION,
} from "./ai-stuff/getConstributionStarRatingFromAttributes"
import { getSponsorshipLimitCents } from "./scoring/sponsorship-limits"
import { allocatePrItems } from "./sponsorship-expense-send"
import type { AnalyzedPR } from "./types"
import type { SendPlan } from "./sponsorship-expense-send"

export interface CalculatedSponsorship {
  username: string
  githubId: number
  auditedPoints: number
  amountCents: number
  mergedPRs: number
  items: SendPlan["items"]
}

export function calculatePrSponsorships({
  prs,
  profiles,
}: {
  prs: AnalyzedPR[]
  profiles: Map<string, string | null>
}): CalculatedSponsorship[] {
  const staff = new Set(
    STAFF_USERNAMES.map((username) => username.toLowerCase()),
  )
  const unique = new Map<string, AnalyzedPR>()
  for (const pr of prs) {
    if (
      pr.state !== "merged" ||
      !pr.merged_at ||
      staff.has(pr.contributor.toLowerCase()) ||
      isUserIneligible(pr.contributor) ||
      !profiles.get(pr.contributor.toLowerCase())
    )
      continue
    const id = pr.contributorId ?? pr.user?.id
    if (typeof id !== "number" || !Number.isSafeInteger(id) || id <= 0)
      throw new Error("Missing durable contributor identity")
    if (
      pr.evaluationPolicyVersion !== PR_EVALUATION_POLICY_VERSION ||
      pr.baseStarRating === undefined
    )
      throw new Error(
        `PR evaluation must be refreshed before exporting: ${pr.repo}#${pr.number}`,
      )
    const base = pr.baseStarRating
    if (!Number.isInteger(base) || base < 0 || base > 5)
      throw new Error("Invalid base star rating")
    unique.set(`${pr.repo}#${pr.number}`, {
      ...pr,
      contributorId: id,
      starRating: applyPrAuditRules({ attributes: pr, baseStarRating: base }),
    })
  }
  const groups = new Map<number, AnalyzedPR[]>()
  const usernames = new Map<string, number>()
  for (const pr of unique.values()) {
    const id = pr.contributorId!
    const login = pr.contributor.toLowerCase()
    if (usernames.has(login) && usernames.get(login) !== id)
      throw new Error("Ambiguous contributor username")
    usernames.set(login, id)
    groups.set(id, [...(groups.get(id) ?? []), pr])
  }
  const rows = [...groups].map(([githubId, userPrs]) => ({
    githubId,
    username: userPrs.at(-1)!.contributor,
    prs: userPrs,
    auditedPoints: userPrs.reduce(
      (sum, pr) => sum + (isNonContribution(pr) ? 0 : 2 ** (pr.starRating - 1)),
      0,
    ),
  }))
  const top = Math.max(0, ...rows.map((row) => row.auditedPoints))
  return rows
    .filter((row) => row.auditedPoints > 0)
    .map((row) => {
      // The exception scales only this recipient's rate, not everyone else's.
      // Integer half-points and BigInt keep half-up currency rounding exact.
      const limit = getSponsorshipLimitCents(row.username)
      const numerator = BigInt(limit) * BigInt(row.auditedPoints * 2)
      const denominator = BigInt(top * 2)
      const amountCents = Math.min(
        limit,
        Number((2n * numerator + denominator) / (2n * denominator)),
      )
      return {
        username: row.username,
        githubId: row.githubId,
        auditedPoints: row.auditedPoints,
        amountCents,
        mergedPRs: row.prs.length,
        items: allocatePrItems({ prs: row.prs, amountCents }),
      }
    })
    .sort((a, b) =>
      a.username.toLowerCase().localeCompare(b.username.toLowerCase()),
    )
}

export function readCalculatedSponsorships(
  month: string,
): CalculatedSponsorship[] | null {
  if (!/^\d{4}-(0[1-9]|1[0-2])$/.test(month))
    throw new Error("Invalid sponsorship month")
  // Legacy directories without PR data retain the existing overview exporter.
  if (!fs.existsSync("pr-analysis")) return null
  const [year, monthNumber] = month.split("-").map(Number)
  const weeks = getFullWeeksForMonth(year, monthNumber).reverse()
  if (!weeks.length) throw new Error("No complete contribution weeks")
  const overviews = weeks.map((week) =>
    JSON.parse(fs.readFileSync(week.filePath, "utf8")),
  )
  const prs: AnalyzedPR[] = weeks.flatMap((week) =>
    JSON.parse(
      fs.readFileSync(
        path.join("pr-analysis", path.basename(week.filePath)),
        "utf8",
      ),
    ),
  )
  const profiles = parseProfiles(
    fs.readFileSync("sponsorship-profiles.json", "utf8"),
  )
  const rows = calculatePrSponsorships({ prs, profiles })
  for (const row of rows)
    if (historicalGithubId(row.username, overviews) !== row.githubId)
      throw new Error("PR and overview contributor identities disagree")
  return rows
}

export function calculatedSponsorshipCsv(month: string): string | null {
  const rows = readCalculatedSponsorships(month)
  if (!rows) return null
  return `Maintainer username,Sponsorship amount in USD,REMARKS\n${rows.map((row) => `${row.username},${(row.amountCents / 100).toFixed(2)},"Rule-based audit: ${row.auditedPoints} PR points; ${month}"`).join("\n")}\n`
}
