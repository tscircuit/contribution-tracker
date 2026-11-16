import { expect, test } from "bun:test"
import fs from "node:fs"
import {
  allocatePrItems,
  sendExpenseOnce,
} from "../lib/sponsorship-expense-send"
import type {
  LedgerStore,
  SendExpense,
  SendLedger,
  SendPlan,
  SendRemote,
} from "../lib/sponsorship-expense-send"
import {
  createMohanInvitation,
  GithubLedgerStore,
  normalizeExpense,
} from "../scripts/send-mohan-sponsorship"

const plan: SendPlan = {
  month: "2026-09",
  githubId: 123,
  username: "mohan-bee",
  payerSlug: "tscircuit-contributors",
  payeeId: "payee-1",
  payeeLegacyId: 456,
  payeeSlug: "mohan",
  amountCents: 700,
  reference: "tscircuit-contributors:github:123:sponsorship:2026-09",
  items: [
    {
      description: "PR work",
      amountV2: { valueInCents: 700, currency: "USD" },
    },
  ],
}
const expense: SendExpense = {
  id: "expense-1",
  legacyId: 789,
  status: "DRAFT",
  reference: plan.reference,
  payeeId: plan.payeeId,
  amountCents: 700,
  currency: "USD",
}

class MemoryLedger implements LedgerStore {
  record: SendLedger | null = null
  failReservation = false
  failConfirmation = false
  async read() {
    return this.record
  }
  async write(record: SendLedger) {
    if (record.state === "reserved" && this.failReservation)
      throw new Error("Conflict reserving ledger")
    if (record.state === "confirmed" && this.failConfirmation)
      throw new Error("Confirmation save failed")
    this.record = record
  }
}
class MemoryRemote implements SendRemote {
  expenses: SendExpense[] = []
  creates = 0
  uncertain = false
  failLookup = false
  async list() {
    if (this.failLookup) throw new Error("Lookup unavailable")
    return this.expenses
  }
  async create() {
    this.creates++
    this.expenses.push(expense)
    if (this.uncertain) throw new Error("Timeout after server creation")
    return expense
  }
}

test("creates once, records success, and skips a second invocation without another invitation", async () => {
  const ledger = new MemoryLedger(),
    remote = new MemoryRemote()
  const first = await sendExpenseOnce({
    plan,
    ledger,
    remote,
    excludedIds: new Set(),
  })
  expect(first.outcome).toBe("created")
  expect(first.invitationRequested).toBe(true)
  expect(ledger.record?.state).toBe("confirmed")
  const second = await sendExpenseOnce({
    plan,
    ledger,
    remote,
    excludedIds: new Set(),
  })
  expect(second.outcome).toBe("existing")
  expect(remote.creates).toBe(1)
})

test("existing drafts, pending, paid, rejected and canceled period expenses all block a new creation", async () => {
  for (const status of [
    "DRAFT",
    "PENDING",
    "APPROVED",
    "PROCESSING",
    "PAID",
    "REJECTED",
    "CANCELED",
  ]) {
    const ledger = new MemoryLedger(),
      remote = new MemoryRemote()
    remote.expenses = [{ ...expense, status }]
    expect(
      (await sendExpenseOnce({ plan, ledger, remote, excludedIds: new Set() }))
        .outcome,
    ).toBe("existing")
    expect(remote.creates).toBe(0)
  }
})

test("legacy period references prevent duplicates too", async () => {
  const ledger = new MemoryLedger(),
    remote = new MemoryRemote()
  remote.expenses = [{ ...expense, reference: "tscircuit-2026-09-mohan-bee" }]
  expect(
    (await sendExpenseOnce({ plan, ledger, remote, excludedIds: new Set() }))
      .outcome,
  ).toBe("existing")
  expect(remote.creates).toBe(0)
})

test("a payment for another contribution month does not block September", async () => {
  const ledger = new MemoryLedger(),
    remote = new MemoryRemote()
  remote.expenses = [
    {
      ...expense,
      id: "oct-expense",
      reference: "tscircuit-contributors:github:123:sponsorship:2026-10",
      status: "PAID",
    },
  ]
  expect(
    (await sendExpenseOnce({ plan, ledger, remote, excludedIds: new Set() }))
      .outcome,
  ).toBe("created")
})

test("timeout after server success is reconciled on rerun without creating or emailing again", async () => {
  const ledger = new MemoryLedger(),
    remote = new MemoryRemote()
  remote.uncertain = true
  await expect(
    sendExpenseOnce({ plan, ledger, remote, excludedIds: new Set() }),
  ).rejects.toThrow("Timeout")
  expect(ledger.record?.state).toBe("reserved")
  expect(
    (await sendExpenseOnce({ plan, ledger, remote, excludedIds: new Set() }))
      .outcome,
  ).toBe("existing")
  expect(remote.creates).toBe(1)
})

test("unresolved reservation, lookup failure, or atomic ledger conflict never creates an expense", async () => {
  const ledger = new MemoryLedger(),
    remote = new MemoryRemote()
  remote.failLookup = true
  await expect(
    sendExpenseOnce({ plan, ledger, remote, excludedIds: new Set() }),
  ).rejects.toThrow("Lookup")
  expect(remote.creates).toBe(0)
  remote.failLookup = false
  ledger.failReservation = true
  await expect(
    sendExpenseOnce({ plan, ledger, remote, excludedIds: new Set() }),
  ).rejects.toThrow("Conflict")
  expect(remote.creates).toBe(0)
  ledger.failReservation = false
  remote.uncertain = true
  await expect(
    sendExpenseOnce({ plan, ledger, remote, excludedIds: new Set() }),
  ).rejects.toThrow()
  remote.expenses = []
  await expect(
    sendExpenseOnce({ plan, ledger, remote, excludedIds: new Set() }),
  ).rejects.toThrow("unresolved")
  expect(remote.creates).toBe(1)
})

test("a failed confirmation write still leaves a recoverable reservation", async () => {
  const ledger = new MemoryLedger(),
    remote = new MemoryRemote()
  ledger.failConfirmation = true
  await expect(
    sendExpenseOnce({ plan, ledger, remote, excludedIds: new Set() }),
  ).rejects.toThrow("Confirmation")
  expect(ledger.record?.state).toBe("reserved")
  expect(
    (await sendExpenseOnce({ plan, ledger, remote, excludedIds: new Set() }))
      .outcome,
  ).toBe("existing")
  expect(remote.creates).toBe(1)
})

test("unassigned expenses stop sending unless explicitly reviewed as separate tests", async () => {
  const ledger = new MemoryLedger(),
    remote = new MemoryRemote()
  remote.expenses = [
    {
      ...expense,
      id: "separate-test",
      reference: null,
      status: "PAID",
      amountCents: 100,
    },
  ]
  await expect(
    sendExpenseOnce({ plan, ledger, remote, excludedIds: new Set() }),
  ).rejects.toThrow("unverified")
  expect(remote.creates).toBe(0)
  expect(
    (
      await sendExpenseOnce({
        plan,
        ledger,
        remote,
        excludedIds: new Set(["separate-test"]),
      })
    ).outcome,
  ).toBe("created")
})

test("changed recipient, duplicate period expenses and modified plans cannot be resent", async () => {
  const ledger = new MemoryLedger(),
    remote = new MemoryRemote()
  remote.expenses = [{ ...expense, payeeId: "another-person" }]
  await expect(
    sendExpenseOnce({ plan, ledger, remote, excludedIds: new Set() }),
  ).rejects.toThrow("another recipient")
  remote.expenses = [expense, { ...expense, id: "second" }]
  await expect(
    sendExpenseOnce({ plan, ledger, remote, excludedIds: new Set() }),
  ).rejects.toThrow("Multiple")
  remote.expenses = []
  await sendExpenseOnce({ plan, ledger, remote, excludedIds: new Set() })
  await expect(
    sendExpenseOnce({
      plan: { ...plan, amountCents: 999 },
      ledger,
      remote,
      excludedIds: new Set(),
    }),
  ).rejects.toThrow("differs")
  expect(remote.creates).toBe(1)
})

test("PR allocation preserves star weighting, exact cents, and the real September payout", () => {
  const prs = [1, 2, 3].map((starRating, index) => ({
    repo: "org/repo",
    number: index,
    title: "Work",
    url: "https://github.com/org/repo/pull/1",
    starRating,
  }))
  expect(
    allocatePrItems({ prs, amountCents: 700 }).map(
      (item) => item.amountV2.valueInCents,
    ),
  ).toEqual([100, 200, 400])
  const realPrs = ["01", "08", "15", "22"]
    .flatMap((day) =>
      JSON.parse(fs.readFileSync(`pr-analysis/2026-09-${day}.json`, "utf8")),
    )
    .filter((pr) => pr.contributor === "mohan-bee" && pr.state === "merged")
  const items = allocatePrItems({ prs: realPrs, amountCents: 90000 })
  expect(items.reduce((sum, item) => sum + item.amountV2.valueInCents, 0)).toBe(
    90000,
  )
  expect(items).toHaveLength(
    new Set(realPrs.map((pr) => `${pr.repo}#${pr.number}`)).size,
  )
})

test("invitation API requests notification for the saved account without a new email secret", async () => {
  const originalFetch = globalThis.fetch
  globalThis.fetch = (async (_url, options) => {
    const request = JSON.parse(options!.body as string)
    expect(request.query).toContain("skipInvite:false")
    expect(request.variables.expense.payee).toEqual({
      legacyId: plan.payeeLegacyId,
    })
    expect(request.variables.expense.payee.email).toBeUndefined()
    expect(request.variables.expense.items[0].amountV2.valueInCents).toBe(700)
    expect(request.variables.expense.reference).toBe(plan.reference)
    return Response.json({
      data: {
        draftExpenseAndInviteUser: {
          ...expense,
          amountV2: { valueInCents: 700, currency: "USD" },
          payee: { id: "sender" },
          draft: { payee: { slug: "mohan" }, reference: plan.reference },
        },
      },
    })
  }) as typeof fetch
  try {
    expect(
      (
        await createMohanInvitation({
          plan,
        })
      ).payeeId,
    ).toBe(plan.payeeId)
    await expect(
      createMohanInvitation({
        plan: { ...plan, username: "other-person" },
      }),
    ).rejects.toThrow("Only Mohan")
    await expect(
      createMohanInvitation({
        plan: { ...plan, month: "2026-10" },
      }),
    ).rejects.toThrow("Only Mohan")
  } finally {
    globalThis.fetch = originalFetch
  }
})

test("GitHub ledger uses an atomic create and SHA-conditional confirmation on a separate branch", async () => {
  const originalFetch = globalThis.fetch
  const savedRepository = process.env.GITHUB_REPOSITORY
  process.env.GITHUB_REPOSITORY = "tscircuit/contribution-tracker"
  const writes: Array<Record<string, unknown>> = []
  globalThis.fetch = (async (url, options) => {
    if (String(url).includes("/git/ref/"))
      return Response.json({ object: { sha: "base" } })
    if (options?.method !== "PUT") return new Response(null, { status: 404 })
    writes.push(JSON.parse(options.body as string))
    return Response.json({ content: { sha: `revision-${writes.length}` } })
  }) as typeof fetch
  try {
    const store = new GithubLedgerStore(123)
    expect(await store.read()).toBeNull()
    const record: SendLedger = {
      reference: plan.reference,
      fingerprint: "fingerprint",
      state: "reserved",
      invitationRequested: false,
    }
    await store.write(record)
    await store.write({ ...record, state: "confirmed", expenseId: expense.id })
    expect(writes[0].branch).toBe("opencollective-expense-ledger")
    expect(writes[0].sha).toBeUndefined()
    expect(writes[1].sha).toBe("revision-1")
    expect(
      Buffer.from(writes[1].content as string, "base64").toString(),
    ).not.toContain("email")
  } finally {
    globalThis.fetch = originalFetch
    if (savedRepository === undefined) delete process.env.GITHUB_REPOSITORY
    else process.env.GITHUB_REPOSITORY = savedRepository
  }
})

test("draft recipient uses draft data rather than the author account and rejects hidden recipients", () => {
  const raw = {
    id: "draft-1",
    legacyId: 77,
    status: "DRAFT",
    reference: null,
    payee: { id: "sender" },
    draft: { payee: { slug: plan.payeeSlug }, reference: plan.reference },
    amountV2: { valueInCents: 700, currency: "USD" },
  }
  expect(normalizeExpense({ expense: raw, plan }).payeeId).toBe(plan.payeeId)
  expect(normalizeExpense({ expense: raw, plan }).reference).toBe(
    plan.reference,
  )
  expect(() =>
    normalizeExpense({ expense: { ...raw, draft: {} }, plan }),
  ).toThrow("hidden")
})
