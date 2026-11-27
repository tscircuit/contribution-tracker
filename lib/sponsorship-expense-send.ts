import { isNonContribution } from "./ai-stuff/getConstributionStarRatingFromAttributes"
import type { PrAttributeSchema } from "./ai-stuff/pr-attributes"
import { createHash } from "node:crypto"

export interface SendPlan {
  month: string
  githubId: number
  username: string
  payerSlug: string
  payeeId: string
  payeeLegacyId: number
  payeeSlug: string
  amountCents: number
  reference: string
  items: Array<{
    description: string
    amountV2: { valueInCents: number; currency: "USD" }
  }>
}

export interface SendExpense {
  id: string
  legacyId: number
  status: string
  reference: string | null
  payeeId: string
  payeeLegacyId?: number
  amountCents: number
  currency: string
}

export interface SendLedger {
  reference: string
  fingerprint: string
  state: "reserved" | "confirmed" | "existing"
  expenseId?: string
  expenseLegacyId?: number
  invitationRequested: boolean | null
}

export interface LedgerStore {
  read: () => Promise<SendLedger | null>
  write: (record: SendLedger) => Promise<void>
}

export interface SendRemote {
  list: () => Promise<SendExpense[]>
  create: () => Promise<SendExpense>
}

export function allocatePrItems({
  prs,
  amountCents,
}: {
  prs: Array<
    {
      repo: string
      number: number
      title: string
      starRating: number
      url: string
    } & Partial<PrAttributeSchema>
  >
  amountCents: number
}): SendPlan["items"] {
  if (!Number.isSafeInteger(amountCents) || amountCents <= 0)
    throw new Error("Invalid invoice amount")
  const unique = new Map<string, (typeof prs)[number]>()
  for (const pr of prs) {
    if (isNonContribution(pr)) continue
    if (
      !Number.isInteger(pr.starRating) ||
      pr.starRating < 0 ||
      pr.starRating > 5
    )
      throw new Error("Invalid PR star rating")
    const key = `${pr.repo}#${pr.number}`
    if (unique.has(key) && unique.get(key)!.starRating !== pr.starRating)
      throw new Error("Conflicting PR ratings")
    unique.set(key, pr)
  }
  const sorted = [...unique.values()].sort((a, b) =>
    `${a.repo}#${a.number}`.localeCompare(`${b.repo}#${b.number}`),
  )
  if (!sorted.length) throw new Error("No PRs to invoice")
  const weights = sorted.map((pr) => 2 ** pr.starRating)
  const total = weights.reduce((sum, weight) => sum + weight, 0)
  const shares = weights.map((weight, index) => ({
    index,
    cents: Number((BigInt(amountCents) * BigInt(weight)) / BigInt(total)),
    remainder: Number((BigInt(amountCents) * BigInt(weight)) % BigInt(total)),
  }))
  const left = amountCents - shares.reduce((sum, share) => sum + share.cents, 0)
  for (const share of [...shares]
    .sort((a, b) => b.remainder - a.remainder || a.index - b.index)
    .slice(0, left))
    shares[share.index].cents++
  if (shares.some((share) => share.cents <= 0))
    throw new Error("Invoice has zero-valued PRs; manual review required")
  return sorted.map((pr, index) => ({
    description: `${pr.repo}#${pr.number}: ${pr.title} (${pr.starRating} stars) — ${pr.url}`,
    amountV2: { valueInCents: shares[index].cents, currency: "USD" },
  }))
}

export async function sendExpenseOnce({
  plan,
  ledger,
  remote,
  excludedIds,
}: {
  plan: SendPlan
  ledger: LedgerStore
  remote: SendRemote
  excludedIds: Set<string>
}) {
  const fingerprint = createHash("sha256")
    .update(JSON.stringify(plan))
    .digest("hex")
  const prior = await ledger.read()
  if (
    prior &&
    (prior.reference !== plan.reference || prior.fingerprint !== fingerprint)
  )
    throw new Error("Stored invoice plan differs; reconcile before sending")
  const expenses = await remote.list()
  const references = new Set([
    plan.reference.toLowerCase(),
    `tscircuit-${plan.month}-${plan.username}`.toLowerCase(),
  ])
  const matching = expenses.filter(
    (expense) =>
      !excludedIds.has(expense.id) &&
      references.has(expense.reference?.toLowerCase() ?? ""),
  )
  if (
    prior?.expenseId &&
    !matching.some((expense) => expense.id === prior.expenseId)
  )
    throw new Error(
      "Recorded expense is not visible with the expected reference; do not resend",
    )
  if (matching.length > 1)
    throw new Error(
      "Multiple existing period expenses; reconcile before sending",
    )
  if (matching.length === 1) {
    const existing = matching[0]
    if (
      existing.payeeId !== plan.payeeId &&
      existing.payeeLegacyId !== plan.payeeLegacyId
    )
      throw new Error("Existing period expense has another recipient")
    if (!prior?.expenseId)
      await ledger.write({
        reference: plan.reference,
        fingerprint,
        state: "existing",
        expenseId: existing.id,
        expenseLegacyId: existing.legacyId,
        invitationRequested: null,
      })
    return {
      outcome: "existing" as const,
      expense: existing,
      invitationRequested: prior?.invitationRequested ?? null,
    }
  }
  if (prior)
    throw new Error(
      "An earlier creation attempt is unresolved; reconcile it before retrying. No new expense or email sent.",
    )
  const ambiguous = expenses.filter(
    (expense) =>
      !excludedIds.has(expense.id) &&
      (expense.payeeId === plan.payeeId ||
        expense.payeeLegacyId === plan.payeeLegacyId) &&
      (!expense.reference ||
        !/^tscircuit(?:-contributors:github:\d+:sponsorship:\d{4}-\d{2}|-\d{4}-\d{2}-[a-z\d-]+)$/i.test(
          expense.reference,
        )),
  )
  if (ambiguous.length)
    throw new Error(
      "Recipient has expenses with unverified periods; reconcile them before sending",
    )
  await ledger.write({
    reference: plan.reference,
    fingerprint,
    state: "reserved",
    invitationRequested: false,
  })
  // Never retry this mutation. A timeout may mean it succeeded remotely.
  const created = await remote.create()
  if (
    created.status !== "DRAFT" ||
    !created.id ||
    !Number.isSafeInteger(created.legacyId) ||
    created.legacyId <= 0 ||
    created.reference !== plan.reference ||
    created.amountCents !== plan.amountCents ||
    created.currency !== "USD" ||
    (created.payeeId !== plan.payeeId &&
      created.payeeLegacyId !== plan.payeeLegacyId)
  )
    throw new Error(
      "Creation result is uncertain; reservation retained, do not resend",
    )
  await ledger.write({
    reference: plan.reference,
    fingerprint,
    state: "confirmed",
    expenseId: created.id,
    expenseLegacyId: created.legacyId,
    invitationRequested: true,
  })
  return {
    outcome: "created" as const,
    expense: created,
    invitationRequested: true,
  }
}
