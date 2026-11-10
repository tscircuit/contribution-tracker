import { expect, test } from "bun:test"
import {
  allocateCents,
  createDraft,
  findExistingExpense,
  prepareExpense,
} from "../lib/opencollective-expenses"
import type { AnalyzedPR } from "../lib/types"

const plan = () =>
  prepareExpense("2026-09", "trixie010", new Date("2026-11-07"))
const pr = (number: number, starRating: number, state = "merged") =>
  ({
    repo: "tscircuit/test",
    number,
    starRating,
    state,
    title: `PR ${number}`,
    merged_at: "2026-09-28T00:00:00Z",
    html_url: `https://github.com/tscircuit/test/pull/${number}`,
  }) as AnalyzedPR

test("September Trixie preserves calculated $10 with the two correct PR allocations", () => {
  const data = plan()
  expect(data.cents).toBe(1000)
  expect(data.weeks.sort()).toEqual([
    "2026-09-01.json",
    "2026-09-08.json",
    "2026-09-15.json",
    "2026-09-22.json",
  ])
  expect(data.expense.items.map((item) => item.amountV2.valueInCents)).toEqual([
    333, 667,
  ])
  expect(data.expense.items[0].description).toContain("/pull/86")
  expect(data.expense.items[1].description).toContain("/pull/87")
})

test("another contributor uses the existing payout formula", () => {
  const data = prepareExpense("2026-09", "Abse2001")
  expect(data.cents).toBe(200000)
  expect(data.expense.items.length).toBe(21)
  expect(
    data.expense.items.reduce(
      (sum, item) => sum + item.amountV2.valueInCents,
      0,
    ),
  ).toBe(200000)
})

test("allocation handles every star rating, exact totals, duplicates, ordering and unmerged PRs", () => {
  const rows = Array.from({ length: 6 }, (_, i) => pr(i + 1, i))
  const items = allocateCents([...rows, rows[0], pr(99, 5, "opened")], 1001)
  expect(items.length).toBe(6)
  expect(items.reduce((sum, item) => sum + item.amountV2.valueInCents, 0)).toBe(
    1001,
  )
  expect(allocateCents([...rows].reverse(), 1001)).toEqual(items)
  expect(() => allocateCents([pr(1, 1), pr(1, 2)], 10)).toThrow("Conflicting")
  expect(() => allocateCents([pr(1, 6)], 10)).toThrow("Invalid")
  expect(() => allocateCents([], 10)).toThrow("No merged")
  expect(() => allocateCents([pr(1, 1), pr(2, 2)], 1)).toThrow("too small")
})

test("disabled, malformed, incomplete months and unknown contributors fail closed", () => {
  expect(() => prepareExpense("2026-11", "trixie010")).toThrow("disabled")
  expect(() => prepareExpense("2026-13", "trixie010")).toThrow("YYYY-MM")
  expect(() =>
    prepareExpense("2026-09", "trixie010", new Date("2026-09-20")),
  ).toThrow("incomplete")
  expect(() => prepareExpense("2026-09", "nonexistent-contributor")).toThrow(
    "identity",
  )
})

test("duplicate lookup paginates and explicitly queries drafts", async () => {
  const statuses: unknown[] = []
  const found = await findExistingExpense(
    async (_, vars) => {
      statuses.push(vars.status)
      return {
        account: {
          expenses: {
            totalCount: 2,
            nodes: [
              vars.offset === 0
                ? { id: "other", description: "Other" }
                : { id: "existing", description: `[${plan().key}]` },
            ],
          },
        },
      }
    },
    "tscircuit-contributors",
    plan().key,
  )
  expect(found.id).toBe("existing")
  expect(statuses).toEqual([null, null, ["DRAFT"], ["DRAFT"]])
})

test("rerun finds existing draft without a mutation; amount mismatch blocks", async () => {
  const data = plan()
  let mutations = 0
  const query = async (q: string) => {
    if (q.includes("mutation")) mutations++
    return {
      account: {
        expenses: {
          totalCount: 1,
          nodes: [
            {
              id: "existing",
              description: `[${data.key}]`,
              amountV2: { valueInCents: data.cents, currency: "USD" },
            },
          ],
        },
      },
    }
  }
  expect(
    (
      await createDraft(query, data, "tscircuit-contributors", {
        legacyId: 1325962,
      })
    ).outcome,
  ).toBe("already-exists")
  expect(mutations).toBe(0)
  await expect(
    createDraft(query, { ...data, cents: 999 }, "tscircuit-contributors", {
      legacyId: 1325962,
    }),
  ).rejects.toThrow("amount differs")
})

test("creates one locked invoice with notifications suppressed and never retries an uncertain write", async () => {
  let writes = 0
  const data = plan()
  const query = async (q: string, vars: Record<string, any>) => {
    if (!q.includes("mutation"))
      return { account: { expenses: { nodes: [], totalCount: 0 } } }
    writes++
    expect(q).toContain("skipInvite: true")
    expect(q).toContain("lockedFields: [AMOUNT]")
    expect(vars.expense.payee).toEqual({ legacyId: 1325962 })
    expect(
      vars.expense.items.reduce(
        (sum: number, item: any) => sum + item.amountV2.valueInCents,
        0,
      ),
    ).toBe(1000)
    throw new Error("Connection lost after write")
  }
  await expect(
    createDraft(query, data, "tscircuit-contributors", { legacyId: 1325962 }),
  ).rejects.toThrow("Connection lost")
  expect(writes).toBe(1)
})
