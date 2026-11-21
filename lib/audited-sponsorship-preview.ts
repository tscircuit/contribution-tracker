import type { SendExpense } from "./sponsorship-expense-send"
import { PAYER_SLUG } from "./sponsorship-expense-report"

export function auditedPaymentStatus({
  username,
  githubId,
  payeeId,
  amountCents,
  expenses,
}: {
  username: string
  githubId: number
  payeeId: string
  amountCents: number
  expenses: SendExpense[]
}) {
  const references = new Set([
    `${PAYER_SLUG}:github:${githubId}:sponsorship:2026-09`,
    `tscircuit-2026-09-${username}`.toLowerCase(),
  ])
  const period = expenses.filter((expense) =>
    references.has(expense.reference?.toLowerCase() ?? ""),
  )
  if (
    period.some(
      (expense) => expense.payeeId !== payeeId || expense.currency !== "USD",
    )
  )
    throw new Error("September expense identity or currency mismatch")
  const paidCents = period
    .filter((expense) => expense.status === "PAID")
    .reduce((sum, expense) => sum + expense.amountCents, 0)
  if (!Number.isSafeInteger(paidCents)) throw new Error("Unsafe paid total")
  const remainingCents = Math.max(0, amountCents - paidCents)
  const pending = period.some((expense) => expense.status !== "PAID")
  const unassigned = expenses.some(
    (expense) =>
      expense.payeeId === payeeId &&
      (!expense.reference ||
        !/^tscircuit(?:-contributors:github:\d+:sponsorship:\d{4}-\d{2}|-\d{4}-\d{2}-[a-z\d-]+)$/i.test(
          expense.reference,
        )),
  )
  return {
    status:
      remainingCents === 0
        ? "paid"
        : pending
          ? "existing-expense-do-not-resend"
          : paidCents > 0
            ? "partial-payment-review"
            : unassigned
              ? "unverified-period-review"
              : "unpaid",
    paidCents,
    remainingCents,
    expenses: period,
  }
}
