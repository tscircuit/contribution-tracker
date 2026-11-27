import { test, expect } from "bun:test"
import { auditedPaymentStatus } from "../lib/audited-sponsorship-preview"
import type { SendExpense } from "../lib/sponsorship-expense-send"
const contributor = {
  username: "example",
  githubId: 123,
  payeeId: "account",
  amountCents: 20000,
}
function expense(overrides: Partial<SendExpense> = {}): SendExpense {
  return {
    id: "expense",
    legacyId: 1,
    status: "PAID",
    reference: "tscircuit-contributors:github:123:sponsorship:2026-09",
    payeeId: "account",
    amountCents: 90000,
    currency: "USD",
    ...overrides,
  }
}
test("prior September payment above audited amount is fully paid", () => {
  expect(
    auditedPaymentStatus({ ...contributor, expenses: [expense()] }),
  ).toMatchObject({ status: "paid", remainingCents: 0 })
})
test("other months never settle September", () => {
  expect(
    auditedPaymentStatus({
      ...contributor,
      expenses: [
        expense({
          reference: "tscircuit-contributors:github:123:sponsorship:2026-10",
        }),
      ],
    }).status,
  ).toBe("unpaid")
})
test("pending September expense blocks another invoice", () => {
  expect(
    auditedPaymentStatus({
      ...contributor,
      expenses: [expense({ status: "PROCESSING" })],
    }).status,
  ).toBe("existing-expense-do-not-resend")
})
test("partial payments show the balance for review", () => {
  expect(
    auditedPaymentStatus({
      ...contributor,
      expenses: [expense({ amountCents: 1000 })],
    }),
  ).toMatchObject({ status: "partial-payment-review", remainingCents: 19000 })
})
test("unassigned tests never establish September payment", () => {
  expect(
    auditedPaymentStatus({
      ...contributor,
      expenses: [expense({ reference: null, amountCents: 1000 })],
    }).status,
  ).toBe("unverified-period-review")
})
test("mismatched recipients and currencies fail closed", () => {
  expect(() =>
    auditedPaymentStatus({
      ...contributor,
      expenses: [expense({ payeeId: "other" })],
    }),
  ).toThrow()
  expect(() =>
    auditedPaymentStatus({
      ...contributor,
      expenses: [expense({ currency: "EUR" })],
    }),
  ).toThrow()
})
test("legacy references match case-insensitively", () => {
  expect(
    auditedPaymentStatus({
      ...contributor,
      expenses: [expense({ reference: "tscircuit-2026-09-EXAMPLE" })],
    }).status,
  ).toBe("paid")
})

test("approved September amounts match the revised spreadsheet", async () => {
  const audit = await Bun.file("sponsorships/2026-09-audited.json").json()
  expect(audit.month).toBe("2026-09")
  expect(audit.contributors).toHaveLength(7)
  expect(
    audit.contributors.reduce(
      (sum: number, row: { amountCents: number }) => sum + row.amountCents,
      0,
    ),
  ).toBe(53500)
  const paidUsers = new Set(["mohan-bee", "trixie010", "Devesh36"])
  const outstanding = audit.contributors.filter(
    (row: { username: string }) => !paidUsers.has(row.username),
  )
  expect(
    outstanding.reduce(
      (sum: number, row: { amountCents: number }) => sum + row.amountCents,
      0,
    ),
  ).toBe(21389)
})
