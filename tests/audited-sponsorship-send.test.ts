import { test, expect } from "bun:test"
import { prepareAuditedPlans } from "../lib/audited-sponsorship-send"
import auditSource from "../sponsorships/2026-09-audited.json"
function fixtures() {
  const audit = structuredClone(auditSource)
  const preview = {
    month: "2026-09",
    rows: audit.contributors.map((row, i) => ({
      ...row,
      githubId: i + 1,
      payeeId: `account-${i}`,
      payeeLegacyId: i + 100,
      payeeSlug: `profile-${i}`,
      status: "unpaid",
    })),
  }
  return { audit, preview }
}
test("sends exactly four unsettled audited amounts, never the three confirmed settled users", () => {
  const plans = prepareAuditedPlans(fixtures())
  expect(plans.map((plan) => [plan.username, plan.amountCents])).toEqual([
    ["anil08607", 5056],
    ["GokulPandi-M", 6556],
    ["hrithik18k", 5333],
    ["KrishnaX12", 4444],
  ])
  expect(plans.reduce((sum, plan) => sum + plan.amountCents, 0)).toBe(21389)
  for (const plan of plans)
    expect(
      plan.items.reduce((sum, item) => sum + item.amountV2.valueInCents, 0),
    ).toBe(plan.amountCents)
})
test("newly paid and pending or ambiguous contributors are skipped", () => {
  for (const status of [
    "paid",
    "existing-expense-do-not-resend",
    "unverified-period-review",
    "partial-payment-review",
  ]) {
    const fixture = fixtures()
    fixture.preview.rows[0].status = status
    expect(
      prepareAuditedPlans(fixture).some(
        (plan) => plan.username === "anil08607",
      ),
    ).toBe(false)
  }
})
test("amount tampering, invalid item totals, duplicate recipients and wrong months fail before sending", () => {
  const mismatch = fixtures()
  mismatch.preview.rows[0].amountCents++
  expect(() => prepareAuditedPlans(mismatch)).toThrow()
  const items = fixtures()
  items.audit.contributors[0].items[0].amountV2.valueInCents++
  expect(() => prepareAuditedPlans(items)).toThrow()
  const recipients = fixtures()
  recipients.preview.rows[2].payeeId = recipients.preview.rows[0].payeeId
  expect(() => prepareAuditedPlans(recipients)).toThrow()
  const month = fixtures()
  month.preview.month = "2026-10"
  expect(() => prepareAuditedPlans(month)).toThrow()
})
