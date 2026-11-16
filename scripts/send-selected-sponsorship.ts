import fs from "node:fs"
import { PAYER_SLUG } from "../lib/sponsorship-expense-report"
import {
  MATCHING_MONTH,
  parseProfiles,
  parseSponsorshipCsv,
} from "../lib/sponsorship-profile-matching"
import {
  allocatePrItems,
  sendExpenseOnce,
} from "../lib/sponsorship-expense-send"
import type {
  LedgerStore,
  SendExpense,
  SendLedger,
  SendPlan,
} from "../lib/sponsorship-expense-send"

const LEDGER_BRANCH = "opencollective-expense-ledger"

async function githubRequest({
  path,
  method = "GET",
  body,
  allowMissing = false,
}: { path: string; method?: string; body?: unknown; allowMissing?: boolean }) {
  const response = await fetch(
    `https://api.github.com/repos/${process.env.GITHUB_REPOSITORY}${path}`,
    {
      method,
      redirect: "error",
      signal: AbortSignal.timeout(30000),
      headers: {
        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
        "User-Agent": "tscircuit-contribution-tracker",
        "Content-Type": "application/json",
        Accept: "application/vnd.github+json",
      },
      ...(body ? { body: JSON.stringify(body) } : {}),
    },
  )
  if (allowMissing && response.status === 404) return null
  if (!response.ok)
    throw new Error(
      `Ledger request failed: HTTP ${response.status}. No automatic retry.`,
    )
  return response.json()
}

export class GithubLedgerStore implements LedgerStore {
  private sha: string | undefined
  private path: string
  constructor(githubId: number) {
    this.path = `sponsorship-expense-ledger/${MATCHING_MONTH}/github-${githubId}.json`
  }
  async read(): Promise<SendLedger | null> {
    let branch = await githubRequest({
      path: `/git/ref/heads/${LEDGER_BRANCH}`,
      allowMissing: true,
    })
    if (!branch)
      branch = await githubRequest({
        path: "/git/refs",
        method: "POST",
        body: {
          ref: `refs/heads/${LEDGER_BRANCH}`,
          sha: process.env.GITHUB_SHA,
        },
      })
    const file = await githubRequest({
      path: `/contents/${this.path}?ref=${LEDGER_BRANCH}`,
      allowMissing: true,
    })
    if (!file) return null
    if (
      typeof file.sha !== "string" ||
      typeof file.content !== "string" ||
      file.encoding !== "base64"
    )
      throw new Error("Invalid ledger response")
    this.sha = file.sha
    return JSON.parse(Buffer.from(file.content, "base64").toString("utf8"))
  }
  async write(record: SendLedger) {
    const result = await githubRequest({
      path: `/contents/${this.path}`,
      method: "PUT",
      body: {
        branch: LEDGER_BRANCH,
        message: `Record ${record.state} sponsorship ${record.reference}`,
        content: Buffer.from(`${JSON.stringify(record, null, 2)}\n`).toString(
          "base64",
        ),
        ...(this.sha ? { sha: this.sha } : {}),
      },
    })
    if (typeof result.content?.sha !== "string")
      throw new Error("Ledger confirmation missing; stop and reconcile")
    this.sha = result.content.sha
  }
}

async function collectiveQuery(
  query: string,
  variables: Record<string, unknown> = {},
) {
  const response = await fetch("https://api.opencollective.com/graphql/v2", {
    method: "POST",
    redirect: "error",
    signal: AbortSignal.timeout(45000),
    headers: {
      "Content-Type": "application/json",
      "User-Agent": "tscircuit-contribution-tracker",
      "Personal-Token": process.env.OPENCOLLECTIVE_TOKEN!,
    },
    body: JSON.stringify({ query, variables }),
  })
  if (!response.ok)
    throw new Error(
      `Open Collective request failed: HTTP ${response.status}; do not blindly retry a creation`,
    )
  const result = await response.json()
  if (result.errors?.length || !result.data)
    throw new Error(
      "Open Collective returned errors; reconcile before retrying. Response withheld.",
    )
  return result.data
}

export function normalizeExpense({
  expense,
  plan,
}: { expense: any; plan: SendPlan }): SendExpense {
  if (
    !expense ||
    typeof expense.id !== "string" ||
    !Number.isSafeInteger(expense.legacyId) ||
    typeof expense.status !== "string" ||
    !Number.isSafeInteger(expense.amountV2?.valueInCents) ||
    typeof expense.amountV2?.currency !== "string"
  )
    throw new Error("Incomplete expense data; no send allowed")
  const draftPayee = expense.status === "DRAFT" ? expense.draft?.payee : null
  if (
    expense.status === "DRAFT" &&
    (!draftPayee ||
      !(
        typeof draftPayee.slug === "string" ||
        Number.isSafeInteger(draftPayee.id) ||
        typeof draftPayee.email === "string"
      ))
  )
    throw new Error("Draft recipient is hidden; no send allowed")
  if (typeof expense.payee?.id !== "string")
    throw new Error("Expense recipient is hidden; no send allowed")
  const payeeMatches =
    draftPayee &&
    (draftPayee.slug === plan.payeeSlug || draftPayee.id === plan.payeeLegacyId)
  const reference = expense.reference ?? expense.draft?.reference ?? null
  if (reference !== null && typeof reference !== "string")
    throw new Error("Invalid expense reference")
  return {
    id: expense.id,
    legacyId: expense.legacyId,
    status: expense.status,
    reference,
    payeeId: payeeMatches ? plan.payeeId : expense.payee?.id,
    ...(payeeMatches ? { payeeLegacyId: plan.payeeLegacyId } : {}),
    amountCents: expense.amountV2.valueInCents,
    currency: expense.amountV2.currency,
  }
}

const EXPENSE_FIELDS =
  "id legacyId status reference draft payee { id } amountV2 { valueInCents currency }"

async function listAuthenticatedExpenses(
  plan: SendPlan,
): Promise<SendExpense[]> {
  const expenses: SendExpense[] = []
  const ids = new Set<string>()
  let count: number | undefined
  for (let offset = 0; offset < 10000; offset += 100) {
    const data = await collectiveQuery(
      `query ExistingSponsorships($slug:String!,$offset:Int!){account(slug:$slug){ expenses(direction:RECEIVED,limit:100,offset:$offset){totalCount nodes{${EXPENSE_FIELDS}}}}}`,
      { slug: PAYER_SLUG, offset },
    )
    const collection = data.account?.expenses
    if (
      !collection ||
      !Number.isSafeInteger(collection.totalCount) ||
      !Array.isArray(collection.nodes) ||
      (count !== undefined && count !== collection.totalCount)
    )
      throw new Error("Expense scan incomplete or changed; no send allowed")
    count = collection.totalCount
    for (const raw of collection.nodes) {
      const expense = normalizeExpense({ expense: raw, plan })
      if (ids.has(expense.id))
        throw new Error("Expense scan repeated a record; no send allowed")
      ids.add(expense.id)
      expenses.push(expense)
    }
    if (expenses.length === count) return expenses
    if (collection.nodes.length !== 100)
      throw new Error("Incomplete expense scan; no send allowed")
  }
  throw new Error("Expense scan limit exceeded; no send allowed")
}

export async function createSponsorshipInvitation({
  plan,
}: { plan: SendPlan }) {
  if (plan.month !== MATCHING_MONTH || plan.payerSlug !== PAYER_SLUG)
    throw new Error("Only September 2026 sponsorships can be sent")
  const data = await collectiveQuery(
    `mutation InviteSponsorship($expense:ExpenseInviteDraftInput!,$payer:AccountReferenceInput!){draftExpenseAndInviteUser(expense:$expense,account:$payer,skipInvite:false,lockedFields:[AMOUNT]){${EXPENSE_FIELDS}}}`,
    {
      payer: { slug: PAYER_SLUG },
      expense: {
        type: "INVOICE",
        currency: "USD",
        description: `${MATCHING_MONTH} contribution sponsorship — ${plan.username}`,
        reference: plan.reference,
        payee: { legacyId: plan.payeeLegacyId },
        recipientNote: `Your ${MATCHING_MONTH} sponsorship invoice is ready to review. Please complete your private payout details and submit it.`,
        items: plan.items.map((item) => ({
          ...item,
          incurredAt: new Date().toISOString(),
        })),
      },
    },
  )
  return normalizeExpense({
    expense: data.draftExpenseAndInviteUser,
    plan,
  })
}

async function main() {
  if (process.argv.length > 2)
    throw new Error(
      "Sender takes no arguments; set SPONSORSHIP_RECIPIENT to select a September contributor",
    )
  if (
    process.env.GITHUB_REPOSITORY !== "tscircuit/contribution-tracker" ||
    process.env.GITHUB_REF !== "refs/heads/main"
  )
    throw new Error(
      "Sending is restricted to the main branch of tscircuit/contribution-tracker",
    )
  for (const secret of ["GITHUB_TOKEN", "OPENCOLLECTIVE_TOKEN"])
    if (!process.env[secret])
      throw new Error(`Missing Actions secret/runtime variable: ${secret}`)

  const selectedUsername =
    process.env.SPONSORSHIP_RECIPIENT?.trim().toLowerCase()
  if (
    !selectedUsername ||
    !/^[a-z\d](?:[a-z\d-]{0,37}[a-z\d])?$/i.test(selectedUsername)
  )
    throw new Error(
      "Choose a valid GitHub username in the recipient workflow input",
    )
  const config = JSON.parse(
    fs.readFileSync("sponsorship-expense-exclusions.json", "utf8"),
  )
  const report = JSON.parse(
    fs.readFileSync(
      `sponsorship-matches/${MATCHING_MONTH}/matches.json`,
      "utf8",
    ),
  )
  const profiles = parseProfiles(
    fs.readFileSync("sponsorship-profiles.json", "utf8"),
  )
  const source = parseSponsorshipCsv(
    fs.readFileSync(`sponsorships/${MATCHING_MONTH}.csv`, "utf8"),
  )
  const row = report.rows?.find(
    (entry: any) => entry.username.toLowerCase() === selectedUsername,
  )
  const sponsorship = source.find(
    (entry) => entry.username.toLowerCase() === selectedUsername,
  )
  if (
    report.month !== MATCHING_MONTH ||
    !row?.openCollectiveId ||
    row.profileUrl !== profiles.get(selectedUsername) ||
    row.amountCents !== sponsorship?.amountCents ||
    !Number.isSafeInteger(row.githubId)
  )
    throw new Error(
      "Current report, profile mapping, and CSV must agree before sending",
    )
  const slug = row.profileUrl.split("/").at(-1)
  const accounts = await collectiveQuery(
    `query PrepareSponsorship($payer:String!,$payee:String!){me{id} payer:account(slug:$payer){id slug ... on Collective{isAdmin}} payee:account(slug:$payee){id legacyId slug name}}`,
    { payer: PAYER_SLUG, payee: slug },
  )
  if (
    !accounts.me?.id ||
    accounts.payer?.slug !== PAYER_SLUG ||
    accounts.payer.isAdmin !== true
  )
    throw new Error(
      "Token must belong to a collective admin so all drafts can be reconciled",
    )
  const payee = accounts.payee
  if (
    payee?.id !== row.openCollectiveId ||
    payee.slug !== slug ||
    !Number.isSafeInteger(payee.legacyId)
  )
    throw new Error("Recipient identity changed; review before sending")
  const prs = ["01", "08", "15", "22"]
    .flatMap((day) =>
      JSON.parse(fs.readFileSync(`pr-analysis/2026-09-${day}.json`, "utf8")),
    )
    .filter(
      (pr) =>
        (pr.contributorId ?? pr.user?.id) === row.githubId &&
        pr.state === "merged" &&
        pr.merged_at,
    )
  const plan: SendPlan = {
    month: MATCHING_MONTH,
    githubId: row.githubId,
    username: row.username,
    payerSlug: PAYER_SLUG,
    payeeId: payee.id,
    payeeLegacyId: payee.legacyId,
    payeeSlug: payee.slug,
    amountCents: row.amountCents,
    reference: `${PAYER_SLUG}:github:${row.githubId}:sponsorship:${MATCHING_MONTH}`,
    items: allocatePrItems({ prs, amountCents: row.amountCents }),
  }
  const reviewedExclusions = config.excludedTestExpenses.filter(
    (entry: { payeeId: string }) => entry.payeeId === plan.payeeId,
  )
  const result = await sendExpenseOnce({
    plan,
    ledger: new GithubLedgerStore(row.githubId),
    excludedIds: new Set(reviewedExclusions.map((entry: any) => entry.id)),
    remote: {
      list: async () => {
        const expenses = await listAuthenticatedExpenses(plan)
        for (const excluded of reviewedExclusions) {
          const existing = expenses.find(
            (expense) => expense.id === excluded.id,
          )
          if (
            !existing ||
            existing.status !== "PAID" ||
            existing.payeeId !== excluded.payeeId ||
            existing.amountCents !== excluded.amountCents ||
            existing.currency !== excluded.currency
          )
            throw new Error(
              "Reviewed test expense changed or is hidden; reconcile before sending",
            )
        }
        return expenses
      },
      create: () => createSponsorshipInvitation({ plan }),
    },
  })
  report.sendResult = {
    username: plan.username,
    month: plan.month,
    reference: plan.reference,
    outcome: result.outcome,
    expenseId: result.expense.id,
    status: result.expense.status,
    amountCents: result.expense.amountCents,
    invitationRequested: result.invitationRequested,
    deliveryVerified: false,
  }
  fs.writeFileSync(
    `sponsorship-matches/${MATCHING_MONTH}/matches.json`,
    `${JSON.stringify(report, null, 2)}\n`,
  )
  const message = `${plan.username} ${plan.month} sponsorship (result after the report snapshot): ${result.outcome}. Expense: https://opencollective.com/${PAYER_SLUG}/expenses/${result.expense.legacyId}. ${result.outcome === "created" ? "Invitation email requested (not silent); inbox delivery is not independently verified." : "Existing expense found; no new invoice or email sent."}\n`
  console.log(message)
  fs.appendFileSync(
    `sponsorship-matches/${MATCHING_MONTH}/summary.md`,
    `\n${message}`,
  )
  if (process.env.GITHUB_STEP_SUMMARY)
    fs.appendFileSync(process.env.GITHUB_STEP_SUMMARY, `\n${message}`)
}

if (import.meta.main)
  main().catch((error) => {
    console.error(error.message)
    process.exitCode = 1
  })
