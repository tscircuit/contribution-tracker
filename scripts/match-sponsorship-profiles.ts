import fs from "node:fs"
import path from "node:path"
import { createHash } from "node:crypto"
import {
  MATCHING_MONTH,
  parseProfiles,
  parseSponsorshipCsv,
  historicalGithubId,
  requireGithubIdentity,
} from "../lib/sponsorship-profile-matching"

import {
  PAYER_SLUG,
  contributorExpenseStatus,
  renderSponsorshipSummary,
} from "../lib/sponsorship-expense-report"
import type { VisibleExpense } from "../lib/sponsorship-expense-report"

// Scan all visible received expenses, not expenses created in the payout month.
// This allows September work to be paid in November or later.
export async function fetchVisibleExpenses(): Promise<VisibleExpense[]> {
  const expenses: VisibleExpense[] = []
  let expectedCount: number | undefined
  const ids = new Set<string>()
  for (let offset = 0; offset < 10000; offset += 100) {
    const result = await requestJson(
      "https://api.opencollective.com/graphql/v2",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          query: `query SponsorshipExpenses($slug: String!, $offset: Int!) {
          account(slug: $slug) {
            expenses(direction: RECEIVED, limit: 100, offset: $offset) {
              totalCount
              nodes { id legacyId status reference payee { id } amountV2 { valueInCents currency } }
            }
          }
        }`,
          variables: { slug: PAYER_SLUG, offset },
        }),
      },
    )
    const collection = result.data?.account?.expenses
    if (
      result.errors?.length ||
      !collection ||
      !Array.isArray(collection.nodes) ||
      !Number.isSafeInteger(collection.totalCount) ||
      collection.totalCount < 0
    )
      throw new Error("Expense visibility unavailable")
    if (expectedCount !== undefined && expectedCount !== collection.totalCount)
      throw new Error("Expense list changed during lookup")
    expectedCount = collection.totalCount
    for (const expense of collection.nodes) {
      if (
        !expense ||
        typeof expense.id !== "string" ||
        ids.has(expense.id) ||
        !Number.isSafeInteger(expense.legacyId) ||
        expense.legacyId <= 0 ||
        typeof expense.status !== "string" ||
        typeof expense.payee?.id !== "string" ||
        !Number.isSafeInteger(expense.amountV2?.valueInCents) ||
        typeof expense.amountV2?.currency !== "string" ||
        (expense.reference !== null && typeof expense.reference !== "string")
      )
        throw new Error("Incomplete expense data")
      ids.add(expense.id)
      expenses.push(expense)
    }
    if (expenses.length === expectedCount) return expenses
    if (
      collection.nodes.length !== 100 ||
      expenses.length > collection.totalCount
    )
      throw new Error("Incomplete expense pagination")
  }
  throw new Error("Expense pagination limit exceeded")
}

async function requestJson(url: string, options: RequestInit = {}) {
  const response = await fetch(url, {
    ...options,
    redirect: "error",
    signal: AbortSignal.timeout(20000),
  })
  if (!response.ok)
    throw new Error(`Account lookup failed: HTTP ${response.status}`)
  return response.json()
}

async function main() {
  if (process.argv.length > 2)
    throw new Error(
      "This script is locked to September 2026 and takes no arguments",
    )
  const source = fs.readFileSync(`sponsorships/${MATCHING_MONTH}.csv`, "utf8")
  const profileSource = fs.readFileSync("sponsorship-profiles.json", "utf8")
  const sponsorships = parseSponsorshipCsv(source)
  if (!sponsorships.length) throw new Error("No sponsorships found")
  const profiles = parseProfiles(profileSource)
  const overviews = ["01", "08", "15", "22"].map((day) =>
    JSON.parse(
      fs.readFileSync(`contribution-overviews/2026-09-${day}.json`, "utf8"),
    ),
  )
  const recipients = new Set<string>()
  const rows = []
  for (const sponsorship of sponsorships) {
    const githubId = historicalGithubId(sponsorship.username, overviews)
    const profileUrl = profiles.get(sponsorship.username.toLowerCase()) ?? null
    if (!profileUrl) {
      rows.push({
        ...sponsorship,
        githubId,
        profileUrl,
        status: "missing-profile",
      })
      continue
    }
    const github = await requestJson(
      `https://api.github.com/users/${encodeURIComponent(sponsorship.username)}`,
      {
        headers: {
          Accept: "application/vnd.github+json",
          ...(process.env.GITHUB_TOKEN
            ? { Authorization: `Bearer ${process.env.GITHUB_TOKEN}` }
            : {}),
        },
      },
    )
    requireGithubIdentity({
      username: sponsorship.username,
      expectedId: githubId,
      current: github,
    })
    const slug = profileUrl.split("/").at(-1)!
    const result = await requestJson(
      "https://api.opencollective.com/graphql/v2",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          query:
            "query MatchProfile($slug: String!) { account(slug: $slug) { id slug name } }",
          variables: { slug },
        }),
      },
    )
    const account = result.data?.account
    if (
      result.errors?.length ||
      typeof account?.id !== "string" ||
      !account.id ||
      account.slug?.toLowerCase() !== slug
    ) {
      throw new Error(
        `Open Collective account could not be verified for ${sponsorship.username}`,
      )
    }
    if (recipients.has(account.id))
      throw new Error(
        "Multiple contributors resolve to the same Open Collective account",
      )
    recipients.add(account.id)
    rows.push({
      ...sponsorship,
      githubId,
      profileUrl,
      openCollectiveId: account.id,
      status: "matched-needs-owner-review",
    })
  }
  let expenseLookupAvailable = false
  let visibleExpenses: VisibleExpense[] = []
  try {
    visibleExpenses = await fetchVisibleExpenses()
    expenseLookupAvailable = true
  } catch {
    // Do not publish a misleading unpaid result or partial evidence.
    console.warn(
      "Public expense lookup unavailable; payment statuses will be unknown.",
    )
  }
  const reportRows = rows.map((contributor) => ({
    ...contributor,
    ...contributorExpenseStatus({
      contributor,
      expenses: visibleExpenses,
      month: MATCHING_MONTH,
      lookupAvailable: expenseLookupAvailable,
    }),
  }))
  // Publish only after every validation/lookup succeeds. No mutations, emails,
  // invoice creation, or payment calls are made by this script.
  const report = {
    month: MATCHING_MONTH,
    currency: "USD",
    sourceSha256: createHash("sha256").update(source).digest("hex"),
    profilesSha256: createHash("sha256").update(profileSource).digest("hex"),
    totalCents: rows.reduce((sum, row) => sum + row.amountCents, 0),
    matchedCount: recipients.size,
    missingCount: rows.length - recipients.size,
    ownershipVerified: false,
    expenseLookupAvailable,
    expenseVisibility: "public-only-not-complete-payment-history",
    rows: reportRows,
  }
  if (!Number.isSafeInteger(report.totalCents))
    throw new Error("Unsafe sponsorship total")
  const directory = path.join("sponsorship-matches", MATCHING_MONTH)
  fs.mkdirSync(directory, { recursive: true })
  fs.writeFileSync(
    path.join(directory, "matches.json"),
    `${JSON.stringify(report, null, 2)}\n`,
  )
  const summary = renderSponsorshipSummary({
    month: MATCHING_MONTH,
    rows: reportRows,
    lookupAvailable: expenseLookupAvailable,
  })
  fs.writeFileSync(path.join(directory, "summary.md"), summary)
  if (process.env.GITHUB_STEP_SUMMARY)
    fs.appendFileSync(process.env.GITHUB_STEP_SUMMARY, summary)
  console.log(summary)
}

if (import.meta.main)
  main().catch((error) => {
    console.error(error.message)
    process.exitCode = 1
  })
