import type { GithubUsername } from "./sponsorship-profile-matching"

export const PAYER_SLUG = "tscircuit-contributors"

export interface VisibleExpense {
  id: string
  legacyId: number
  status: string
  reference: string | null
  payee: { id: string }
  amountV2: { valueInCents: number; currency: string }
}

export interface ReportContributor {
  username: GithubUsername
  githubId: number
  amountCents: number
  profileUrl: string | null
  openCollectiveId?: string
  status: string
}

export interface ExpenseEvidence {
  id: string
  status: string
  url: string
  amountCents: number
  currency: string
  periodVerified: boolean
}

export function expenseEvidence({
  expense,
  periodVerified,
}: { expense: VisibleExpense; periodVerified: boolean }): ExpenseEvidence {
  return {
    id: expense.id,
    status: expense.status,
    url: `https://opencollective.com/${PAYER_SLUG}/expenses/${expense.legacyId}`,
    amountCents: expense.amountV2.valueInCents,
    currency: expense.amountV2.currency,
    periodVerified,
  }
}

export function contributorExpenseStatus({
  contributor,
  expenses,
  month,
  lookupAvailable,
}: {
  contributor: ReportContributor
  expenses: VisibleExpense[]
  month: string
  lookupAvailable: boolean
}) {
  if (!contributor.openCollectiveId)
    return {
      paymentStatus: "unknown-missing-profile",
      expenses: [] as ExpenseEvidence[],
      unassignedExpenses: [] as ExpenseEvidence[],
    }
  if (!lookupAvailable)
    return {
      paymentStatus: "unknown-lookup-unavailable",
      expenses: [] as ExpenseEvidence[],
      unassignedExpenses: [] as ExpenseEvidence[],
    }
  const periodReferences = new Set([
    `${PAYER_SLUG}:github:${contributor.githubId}:sponsorship:${month}`,
    `tscircuit-${month}-${contributor.username}`.toLowerCase(),
  ])
  const recipientExpenses = expenses.filter(
    (expense) => expense.payee.id === contributor.openCollectiveId,
  )
  const exact = recipientExpenses.filter(
    (expense) =>
      expense.reference &&
      periodReferences.has(expense.reference.toLowerCase()),
  )
  // Legacy/manual references cannot be safely attributed to any service month.
  const unassigned = recipientExpenses.filter(
    (expense) =>
      !expense.reference ||
      (!/^tscircuit-\d{4}-\d{2}-[a-z\d-]+$/i.test(expense.reference) &&
        !/^tscircuit-contributors:github:\d+:sponsorship:\d{4}-\d{2}$/i.test(
          expense.reference,
        )),
  )
  let paymentStatus = "unknown-no-visible-period-expense"
  if (exact.length > 1) paymentStatus = "multiple-period-expenses-review"
  else if (exact.length === 1) {
    const expense = exact[0]
    if (
      expense.amountV2.currency !== "USD" ||
      expense.amountV2.valueInCents !== contributor.amountCents
    )
      paymentStatus = "period-expense-amount-mismatch-review"
    else
      paymentStatus =
        expense.status === "PAID" ? "paid" : "period-expense-not-paid"
  }
  return {
    paymentStatus,
    expenses: exact.map((expense) =>
      expenseEvidence({ expense, periodVerified: true }),
    ),
    unassignedExpenses: unassigned.map((expense) =>
      expenseEvidence({ expense, periodVerified: false }),
    ),
  }
}

const escapeCell = (text: string) =>
  text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\|/g, "&#124;")
    .replace(/[\r\n]/g, " ")
const expenseLinks = (expenses: ExpenseEvidence[]) =>
  expenses
    .map((expense) => `[${escapeCell(expense.status)}](${expense.url})`)
    .join(", ") || "—"

export function renderSponsorshipSummary({
  month,
  rows,
  lookupAvailable,
}: {
  month: string
  rows: Array<ReportContributor & ReturnType<typeof contributorExpenseStatus>>
  lookupAvailable: boolean
}) {
  const matched = rows.filter((row) => row.openCollectiveId).length
  const total = rows.reduce((sum, row) => sum + row.amountCents, 0)
  const table = rows
    .map(
      (row) =>
        `| [${row.username}](https://github.com/${row.username}) | ${row.profileUrl ? `[${row.profileUrl.split("/").at(-1)}](${row.profileUrl})` : "Missing"} | $${(row.amountCents / 100).toFixed(2)} | ${row.status} | ${row.paymentStatus} | ${expenseLinks(row.expenses)} | ${expenseLinks(row.unassignedExpenses)} |`,
    )
    .join("\n")
  return `# Open Collective Sponsorships — ${month}\n\n${matched} matched; ${rows.length - matched} missing profiles. Total: $${(total / 100).toFixed(2)} USD.\n\n| GitHub contributor | Open Collective | Sponsorship (USD) | Profile match | Payment evidence | ${month} expenses | Other expenses needing period review |\n| --- | --- | --- | --- | --- | --- | --- |\n${table}\n\nExpense lookup: ${lookupAvailable ? "public visible expenses checked" : "unavailable; payment status is unknown"}. Public access can hide drafts and invoice references. No visible expense does **not** mean unpaid. Other expenses shown need contribution-month review; their statuses do not establish payment for ${month}. Profile ownership still needs maintainer review. This is a report, not a duplicate-payment guarantee. No expenses, invitations, or payments were created.\n`
}
