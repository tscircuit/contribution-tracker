import { expect, test } from "bun:test"
import {
  contributorExpenseStatus,
  renderSponsorshipSummary,
  summarizeMatchedSponsorships,
} from "../lib/sponsorship-expense-report"
import type {
  ReportContributor,
  VisibleExpense,
} from "../lib/sponsorship-expense-report"
import { fetchVisibleExpenses } from "../scripts/match-sponsorship-profiles"

const contributor: ReportContributor = {
  username: "trixie010",
  githubId: 123,
  amountCents: 1000,
  profileUrl: "https://opencollective.com/trixie",
  openCollectiveId: "recipient-1",
  status: "matched-needs-owner-review",
}
const expense = (overrides: Partial<VisibleExpense> = {}): VisibleExpense => ({
  id: "expense-1",
  legacyId: 100,
  status: "PAID",
  reference: "tscircuit-2026-09-trixie010",
  payee: { id: "recipient-1" },
  amountV2: { valueInCents: 1000, currency: "USD" },
  ...overrides,
})
const report = (expenses: VisibleExpense[], lookupAvailable = true) =>
  contributorExpenseStatus({
    contributor,
    expenses,
    month: "2026-09",
    lookupAvailable,
  })

test("matches paid September expenses by reference, independently of payment date", () => {
  expect(report([expense()]).paymentStatus).toBe("paid")
  expect(
    report([
      expense({
        reference: "tscircuit-contributors:github:123:sponsorship:2026-09",
      }),
    ]).paymentStatus,
  ).toBe("paid")
  expect(
    report([expense({ reference: "tscircuit-2026-10-trixie010" })])
      .paymentStatus,
  ).toBe("unknown-no-visible-period-expense")
  expect(
    report([expense({ payee: { id: "another-person" } })]).expenses,
  ).toHaveLength(0)
})

test("reports exact pending expense status without marking it paid", () => {
  for (const status of [
    "DRAFT",
    "PENDING",
    "APPROVED",
    "PROCESSING",
    "REJECTED",
    "CANCELED",
    "ERROR",
  ]) {
    const result = report([expense({ status })])
    expect(result.paymentStatus).toBe("period-expense-not-paid")
    expect(result.expenses[0].status).toBe(status)
  }
})

test("public absence and unavailable lookups are unknown, never unpaid", () => {
  expect(report([]).paymentStatus).toBe("unknown-no-visible-period-expense")
  expect(report([expense()], false).paymentStatus).toBe(
    "unknown-lookup-unavailable",
  )
  expect(report([expense()], false).expenses).toHaveLength(0)
  expect(
    contributorExpenseStatus({
      contributor: {
        ...contributor,
        openCollectiveId: undefined,
        profileUrl: null,
      },
      expenses: [expense()],
      month: "2026-09",
      lookupAvailable: true,
    }).paymentStatus,
  ).toBe("unknown-missing-profile")
})

test("unreferenced and manual expenses show their status without assigning a month", () => {
  const result = report([
    expense({ reference: null }),
    expense({ id: "expense-2", reference: "manual invoice" }),
  ])
  expect(result.paymentStatus).toBe("unknown-no-visible-period-expense")
  expect(result.expenses).toHaveLength(0)
  expect(result.unassignedExpenses).toHaveLength(2)
  expect(result.unassignedExpenses.every((item) => !item.periodVerified)).toBe(
    true,
  )
})

test("multiple expenses or unexpected amounts require review", () => {
  expect(
    report([expense(), expense({ id: "expense-2", status: "PENDING" })])
      .paymentStatus,
  ).toBe("multiple-period-expenses-review")
  expect(
    report([expense({ amountV2: { valueInCents: 500, currency: "USD" } })])
      .paymentStatus,
  ).toBe("period-expense-amount-mismatch-review")
  expect(
    report([expense({ amountV2: { valueInCents: 1000, currency: "EUR" } })])
      .paymentStatus,
  ).toBe("period-expense-amount-mismatch-review")
})

test("summary lists contributor, profile, amount, actual expense status and URL", () => {
  const summary = renderSponsorshipSummary({
    month: "2026-09",
    lookupAvailable: true,
    rows: [{ ...contributor, ...report([expense({ status: "APPROVED" })]) }],
  })
  for (const text of [
    "trixie010",
    "https://opencollective.com/trixie",
    "$10.00",
    "APPROVED",
    "https://opencollective.com/tscircuit-contributors/expenses/100",
    "does **not** mean unpaid",
  ])
    expect(summary).toContain(text)
})

test("expense lookup paginates all dates without filtering creation month", async () => {
  const originalFetch = globalThis.fetch
  const offsets: number[] = []
  globalThis.fetch = (async (_url, options) => {
    const request = JSON.parse(options!.body as string)
    offsets.push(request.variables.offset)
    expect(request.query).not.toContain("createdAt")
    const offset = request.variables.offset
    const nodes = Array.from({ length: offset === 0 ? 100 : 1 }, (_, index) =>
      expense({
        id: `expense-${offset + index}`,
        legacyId: offset + index + 1,
      }),
    )
    return new Response(
      JSON.stringify({
        data: { account: { expenses: { totalCount: 101, nodes } } },
      }),
    )
  }) as typeof fetch
  try {
    expect(await fetchVisibleExpenses()).toHaveLength(101)
    expect(offsets).toEqual([0, 100])
  } finally {
    globalThis.fetch = originalFetch
  }
})

test("partial GraphQL errors fail lookup rather than returning partial payment evidence", async () => {
  const originalFetch = globalThis.fetch
  globalThis.fetch = (async () =>
    new Response(
      JSON.stringify({
        errors: [{ message: "private field" }],
        data: { account: { expenses: { totalCount: 1, nodes: [expense()] } } },
      }),
    )) as typeof fetch
  try {
    await expect(fetchVisibleExpenses()).rejects.toThrow(
      "visibility unavailable",
    )
  } finally {
    globalThis.fetch = originalFetch
  }
})

test("$10 paid expenses without a period cannot imply full September sponsorship payment", () => {
  const contributors: ReportContributor[] = [
    {
      ...contributor,
      username: "Devesh36",
      amountCents: 4500,
      openCollectiveId: "devesh",
    },
    {
      ...contributor,
      username: "mohan-bee",
      amountCents: 90000,
      openCollectiveId: "mohan",
    },
    contributor,
  ]
  const rows = contributors.map((recipient) => ({
    ...recipient,
    ...contributorExpenseStatus({
      contributor: recipient,
      expenses: [
        expense({
          reference: null,
          payee: { id: recipient.openCollectiveId! },
        }),
      ],
      month: "2026-09",
      lookupAvailable: true,
    }),
  }))
  const summary = renderSponsorshipSummary({
    month: "2026-09",
    rows,
    lookupAvailable: true,
  })
  for (const row of rows) {
    expect(row.paymentStatus).toBe("unknown-no-visible-period-expense")
    expect(row.expenses).toHaveLength(0)
    expect(row.unassignedExpenses[0].amountCents).toBe(1000)
  }
  expect(
    summary.match(/PAID: USD 10\.00 \(contribution month unverified\)/g),
  ).toHaveLength(3)
  expect(summary).toContain("$45.00")
  expect(summary).toContain("$900.00")
  expect(summary).not.toContain("[PAID]")
  expect(summary).toContain("do not confirm payment of the 2026-09 sponsorship")
})

test("a period-matched partial payment shows its actual amount and requires review", () => {
  const recipient = { ...contributor, amountCents: 4500 }
  const evidence = contributorExpenseStatus({
    contributor: recipient,
    expenses: [expense()],
    month: "2026-09",
    lookupAvailable: true,
  })
  const summary = renderSponsorshipSummary({
    month: "2026-09",
    rows: [{ ...recipient, ...evidence }],
    lookupAvailable: true,
  })
  expect(evidence.paymentStatus).toBe("period-expense-amount-mismatch-review")
  expect(summary).toContain("[PAID: USD 10.00]")
  expect(summary).not.toContain("[PAID: USD 45.00]")
  expect(summary).toContain("$45.00")
})

test("expense labels retain their currency and each individual amount", () => {
  const evidence = report([
    expense({
      reference: null,
      amountV2: { valueInCents: 1000, currency: "EUR" },
    }),
    expense({
      id: "second",
      legacyId: 101,
      reference: null,
      status: "PENDING",
      amountV2: { valueInCents: 3550, currency: "USD" },
    }),
  ])
  const summary = renderSponsorshipSummary({
    month: "2026-09",
    rows: [{ ...contributor, ...evidence }],
    lookupAvailable: true,
  })
  expect(summary).toContain("[PAID: EUR 10.00 (contribution month unverified)]")
  expect(summary).toContain(
    "[PENDING: USD 35.50 (contribution month unverified)]",
  )
})

test("matched report excludes missing profiles and does not total their sponsorships", () => {
  const matchedRow = { ...contributor, ...report([]) }
  const missingContributor = {
    ...contributor,
    username: "missing-person",
    profileUrl: null,
    openCollectiveId: undefined,
    amountCents: 200000,
    status: "missing-profile",
  }
  const missingRow = {
    ...missingContributor,
    ...contributorExpenseStatus({
      contributor: missingContributor,
      expenses: [],
      month: "2026-09",
      lookupAvailable: true,
    }),
  }
  const rows = [matchedRow, missingRow]
  const totals = summarizeMatchedSponsorships(rows)
  expect(totals.rows).toEqual([matchedRow])
  expect(totals.totalCents).toBe(1000)
  expect(totals.sourceTotalCents).toBe(201000)
  expect(totals.paymentReviewTotalCents).toBe(1000)
  expect(totals.missingCount).toBe(1)
  const summary = renderSponsorshipSummary({
    month: "2026-09",
    rows,
    lookupAvailable: true,
  })
  expect(summary).not.toContain("missing-person")
  expect(summary).not.toContain("$2010.00")
  expect(summary).toContain("Current payment review total: $10.00 USD")
})

test("confirmed fully paid contributors are excluded from payment review total", () => {
  const paidRow = { ...contributor, ...report([expense()]) }
  const pendingRow = {
    ...contributor,
    username: "pending-person",
    ...report([expense({ status: "PENDING" })]),
  }
  const unknownRow = {
    ...contributor,
    username: "unknown-person",
    ...report([expense({ reference: null })]),
  }
  const totals = summarizeMatchedSponsorships([paidRow, pendingRow, unknownRow])
  expect(totals.totalCents).toBe(3000)
  expect(totals.confirmedPaidCents).toBe(1000)
  expect(totals.paymentReviewTotalCents).toBe(2000)
  expect(totals.rows).toHaveLength(3)
})

test("all-missing report has no displayed payouts and a zero payment review total", () => {
  const totals = summarizeMatchedSponsorships([
    {
      ...contributor,
      profileUrl: null,
      openCollectiveId: undefined,
      ...report([]),
    },
  ])
  expect(totals.rows).toHaveLength(0)
  expect(totals.totalCents).toBe(0)
  expect(totals.paymentReviewTotalCents).toBe(0)
  expect(totals.missingCount).toBe(1)
})
