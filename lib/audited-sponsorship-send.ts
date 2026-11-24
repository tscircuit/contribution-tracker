import type { SendPlan } from "./sponsorship-expense-send"
import { PAYER_SLUG } from "./sponsorship-expense-report"

export function prepareAuditedPlans({
  audit,
  preview,
}: { audit: any; preview: any }): SendPlan[] {
  if (
    audit.month !== "2026-09" ||
    audit.currency !== "USD" ||
    preview.month !== audit.month ||
    !Array.isArray(audit.contributors) ||
    !Array.isArray(audit.settledContributors) ||
    !Array.isArray(preview.rows)
  )
    throw new Error("Invalid audited September data")
  const settled = new Set(
    audit.settledContributors.map((entry: any) => entry.username.toLowerCase()),
  )
  const seen = new Set<string>()
  const payees = new Set<string>()
  const plans: SendPlan[] = []
  for (const contributor of audit.contributors) {
    const username = contributor.username.toLowerCase()
    if (seen.has(username)) throw new Error("Duplicate audited contributor")
    seen.add(username)
    const row = preview.rows.find(
      (entry: any) => entry.username.toLowerCase() === username,
    )
    if (!row || row.amountCents !== contributor.amountCents)
      throw new Error("Preview and audited amounts disagree")
    if (settled.has(username) || row.status === "paid") continue
    // Unknown periods, pending invoices and partial payments never enter sending.
    if (row.status !== "unpaid") continue
    if (
      !Number.isSafeInteger(row.githubId) ||
      row.githubId <= 0 ||
      typeof row.payeeId !== "string" ||
      !Number.isSafeInteger(row.payeeLegacyId) ||
      typeof row.payeeSlug !== "string" ||
      payees.has(row.payeeId)
    )
      throw new Error("Invalid audited recipient identity")
    payees.add(row.payeeId)
    if (
      !Number.isSafeInteger(contributor.amountCents) ||
      contributor.amountCents <= 0 ||
      contributor.amountCents > 20000 ||
      !Array.isArray(contributor.items) ||
      !contributor.items.length
    )
      throw new Error("Invalid audited amount or items")
    let sum = 0
    for (const item of contributor.items) {
      if (
        typeof item.description !== "string" ||
        !item.description ||
        item.amountV2?.currency !== "USD" ||
        !Number.isSafeInteger(item.amountV2.valueInCents) ||
        item.amountV2.valueInCents <= 0
      )
        throw new Error("Invalid audited invoice item")
      sum += item.amountV2.valueInCents
    }
    if (sum !== contributor.amountCents)
      throw new Error("Audited invoice items do not reconcile")
    plans.push({
      month: audit.month,
      username: contributor.username,
      githubId: row.githubId,
      payerSlug: PAYER_SLUG,
      payeeId: row.payeeId,
      payeeLegacyId: row.payeeLegacyId,
      payeeSlug: row.payeeSlug,
      amountCents: contributor.amountCents,
      reference: `${PAYER_SLUG}:github:${row.githubId}:sponsorship:${audit.month}`,
      items: contributor.items,
    })
  }
  return plans
}
