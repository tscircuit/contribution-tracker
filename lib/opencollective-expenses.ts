import fs from "node:fs"
import path from "node:path"
import {
  calculateSponsorship,
  getFullWeeksForMonth,
} from "../scripts/generate-sponsorship-csv"
import { resolveContributorIdentity } from "./contributor-identity"
import { arePaymentArtifactsDisabled } from "./payment-artifacts"
import type { AnalyzedPR, ContributorStats } from "./types"

export function allocateCents(prs: AnalyzedPR[], cents: number) {
  if (!Number.isSafeInteger(cents) || cents <= 0)
    throw new Error("Invalid payout")
  const unique = new Map<string, AnalyzedPR>()
  for (const pr of prs) {
    if (pr.state !== "merged" || !pr.merged_at) continue
    if (
      !Number.isInteger(pr.starRating) ||
      pr.starRating < 0 ||
      pr.starRating > 5
    ) {
      throw new Error("Invalid PR rating")
    }
    if (
      !/^https:\/\/github\.com\/[\w.-]+\/[\w.-]+\/pull\/\d+$/.test(pr.html_url)
    ) {
      throw new Error("Invalid PR URL")
    }
    const key = `${pr.repo}#${pr.number}`
    const previous = unique.get(key)
    if (previous && previous.starRating !== pr.starRating)
      throw new Error("Conflicting PR ratings")
    unique.set(key, pr)
  }
  const rows = [...unique.entries()]
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([key, pr]) => ({
      key,
      pr,
      weight: BigInt(2 ** pr.starRating),
      cents: 0,
      remainder: 0n,
    }))
  if (!rows.length) throw new Error("No merged PRs for allocation")
  const denominator = rows.reduce((sum, row) => sum + row.weight, 0n)
  for (const row of rows) {
    const numerator = BigInt(cents) * row.weight
    row.cents = Number(numerator / denominator)
    row.remainder = numerator % denominator
  }
  let remaining = cents - rows.reduce((sum, row) => sum + row.cents, 0)
  for (const row of [...rows].sort((a, b) =>
    a.remainder === b.remainder
      ? a.key.localeCompare(b.key)
      : a.remainder > b.remainder
        ? -1
        : 1,
  )) {
    if (remaining-- > 0) row.cents++
  }
  if (rows.some((row) => row.cents === 0))
    throw new Error("Payout too small for positive PR line items")
  return rows.map(({ pr, cents }) => ({
    description: `${pr.title} (${pr.starRating} stars) — ${pr.html_url}`,
    incurredAt: pr.merged_at,
    amountV2: { valueInCents: cents, currency: "USD" },
  }))
}

export function prepareExpense(
  month: string,
  contributor: string,
  now = new Date(),
) {
  if (!/^\d{4}-(0[1-9]|1[0-2])$/.test(month))
    throw new Error("Month must be YYYY-MM")
  if (!/^[a-zA-Z0-9-]+$/.test(contributor))
    throw new Error("Invalid GitHub login")
  const [year, monthNumber] = month.split("-").map(Number)
  if (arePaymentArtifactsDisabled(year, monthNumber))
    throw new Error("Payment artifacts are disabled for this month")
  const nextMonth = new Date(Date.UTC(year, monthNumber, 1))
  if (now < nextMonth) throw new Error("Month is incomplete")
  const weeks = getFullWeeksForMonth(year, monthNumber, now)
  const ordered = [...weeks].sort(
    (a, b) => a.weekEndDate.getTime() - b.weekEndDate.getTime(),
  )
  const monthStart = new Date(Date.UTC(year, monthNumber - 1, 1))
  const day = 86400000
  if (
    ordered.length < 4 ||
    ordered.length > 5 ||
    (ordered[0].weekEndDate.getTime() - monthStart.getTime()) / day >= 7 ||
    (nextMonth.getTime() - ordered.at(-1)!.weekEndDate.getTime()) / day > 7 ||
    ordered.some(
      (week, i) =>
        i > 0 &&
        week.weekEndDate.getTime() - ordered[i - 1].weekEndDate.getTime() !==
          7 * day,
    )
  ) {
    throw new Error("Missing or incomplete sponsorship weeks")
  }
  const data = weeks.map((week) => ({
    ...week,
    contributorStatsByLogin: JSON.parse(
      fs.readFileSync(week.filePath, "utf8"),
    ) as Record<string, ContributorStats>,
  }))
  const candidates = data.flatMap((week) =>
    Object.entries(week.contributorStatsByLogin)
      .filter(([login, stats]) =>
        [login, stats.githubLogin].some(
          (name) => name?.toLowerCase() === contributor.toLowerCase(),
        ),
      )
      .map(([login, stats]) =>
        resolveContributorIdentity({
          id: stats.githubId,
          login: stats.githubLogin ?? login,
        }),
      ),
  )
  const ids = new Set(
    candidates.flatMap((identity) =>
      identity.githubId === undefined ? [] : [identity.githubId],
    ),
  )
  if (!candidates.length || ids.size > 1)
    throw new Error("Missing or ambiguous contributor identity")
  const githubId = [...ids][0]
  const sponsorships = calculateSponsorship(data).filter((entry) =>
    candidates.some(
      (identity) =>
        identity.githubLogin.toLowerCase() === entry.username.toLowerCase(),
    ),
  )
  if (sponsorships.length !== 1)
    throw new Error("Missing or ambiguous sponsorship")
  const sponsorship = sponsorships[0]
  const cents = sponsorship.amount * 100
  if (!Number.isSafeInteger(cents) || cents <= 0)
    throw new Error("Invalid sponsorship amount")
  const prs: AnalyzedPR[] = data.flatMap((week) => {
    const file = path.join("pr-analysis", path.basename(week.filePath))
    const rows: AnalyzedPR[] = JSON.parse(fs.readFileSync(file, "utf8"))
    return rows.filter((pr) => {
      const id = pr.user?.id
      if (githubId !== undefined && id !== undefined) return id === githubId
      return (
        pr.user?.login?.toLowerCase() === sponsorship.username.toLowerCase()
      )
    })
  })
  const key = `sponsorship:${month}:${githubId === undefined ? sponsorship.username.toLowerCase() : `github-${githubId}`}`
  return {
    month,
    contributor: sponsorship.username,
    cents,
    key,
    weeks: weeks.map((week) => path.basename(week.filePath)),
    expense: {
      type: "INVOICE",
      currency: "USD",
      reference: key,
      description: `${month} contributor sponsorship — ${sponsorship.username} [${key}]`,
      items: allocateCents(prs, cents),
    },
  }
}

export type Query = (
  query: string,
  variables: Record<string, unknown>,
) => Promise<any>

export async function findExistingExpense(
  query: Query,
  payer: string,
  key: string,
) {
  const found = new Map<string, any>()
  // Default listings can hide drafts; query them explicitly as well.
  for (const status of [null, ["DRAFT"]]) {
    let offset = 0
    while (true) {
      const data = await query(
        `query ExistingExpenses($payer: String!, $offset: Int!, $status: [ExpenseStatusFilter]) {
        account(slug: $payer) { expenses(direction: RECEIVED, limit: 100, offset: $offset, status: $status) {
          totalCount nodes { id legacyId description status amountV2 { valueInCents currency } }
        } }
      }`,
        { payer, offset, status },
      )
      const collection = data.account?.expenses
      if (
        !collection ||
        !Array.isArray(collection.nodes) ||
        !Number.isInteger(collection.totalCount)
      )
        throw new Error("Could not verify existing expenses")
      for (const expense of collection.nodes) {
        if (expense.description?.includes(`[${key}]`))
          found.set(expense.id, expense)
      }
      offset += collection.nodes.length
      if (offset >= collection.totalCount) break
      if (!collection.nodes.length || offset > 100000)
        throw new Error("Expense pagination incomplete")
    }
  }
  if (found.size > 1)
    throw new Error("Multiple matching expenses; manual review required")
  return [...found.values()][0]
}

export async function createDraft(
  query: Query,
  plan: ReturnType<typeof prepareExpense>,
  payer: string,
  payee: { legacyId: number },
) {
  const existing = await findExistingExpense(query, payer, plan.key)
  if (existing) {
    if (
      existing.amountV2?.valueInCents !== plan.cents ||
      existing.amountV2?.currency !== "USD"
    )
      throw new Error("Existing expense amount differs; manual review required")
    return { outcome: "already-exists", expense: existing }
  }
  // Intentionally never retry this mutation: a lost response may still mean it succeeded.
  const data = await query(
    `mutation DraftSponsorship($expense: ExpenseInviteDraftInput!, $account: AccountReferenceInput!) {
    draftExpenseAndInviteUser(expense: $expense, account: $account, skipInvite: true, lockedFields: [AMOUNT]) {
      id legacyId status amountV2 { valueInCents currency }
    }
  }`,
    { expense: { ...plan.expense, payee }, account: { slug: payer } },
  )
  const expense = data.draftExpenseAndInviteUser
  if (
    !expense?.id ||
    expense.status !== "DRAFT" ||
    expense.amountV2?.valueInCents !== plan.cents ||
    expense.amountV2?.currency !== "USD"
  ) {
    throw new Error(
      "Unexpected creation response; inspect Open Collective before rerunning",
    )
  }
  return { outcome: "created", expense }
}
