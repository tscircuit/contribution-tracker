import fs from "node:fs"
import { createDraft, prepareExpense } from "../lib/opencollective-expenses"

const payer = "tscircuit-contributors"

async function main() {
  const {
    SPONSORSHIP_MONTH: month,
    CONTRIBUTOR: contributor,
    PAYEE_SLUG: payee,
    EXPENSE_MODE: mode = "preview",
  } = process.env
  if (!month || !contributor || !payee || !/^[a-zA-Z0-9-]+$/.test(payee))
    throw new Error(
      "Month, contributor and verified Open Collective payee slug are required",
    )
  if (!["preview", "create-draft"].includes(mode))
    throw new Error("Invalid mode")
  const plan = prepareExpense(month, contributor)
  const preview = { ...plan, payer, payee, invitationSuppressed: true }
  fs.mkdirSync("/tmp/opencollective-result", { recursive: true })
  fs.writeFileSync(
    "/tmp/opencollective-result/preview.json",
    JSON.stringify(preview, null, 2),
  )
  console.log(JSON.stringify(preview, null, 2))
  const summary = process.env.GITHUB_STEP_SUMMARY
  if (summary)
    fs.appendFileSync(
      summary,
      `\nExpense preview: ${month}, ${plan.contributor}, payee ${payee}, USD ${(plan.cents / 100).toFixed(2)}. ${plan.expense.items.length} PR items. Invitation suppressed.\n`,
    )
  if (mode === "preview") return
  const token = process.env.OPENCOLLECTIVE_TOKEN
  if (!token) throw new Error("Missing OPENCOLLECTIVE_TOKEN")
  const query = async (query: string, variables: Record<string, unknown>) => {
    const response = await fetch("https://api.opencollective.com/graphql/v2", {
      method: "POST",
      headers: { "Content-Type": "application/json", "Personal-Token": token },
      body: JSON.stringify({ query, variables }),
      signal: AbortSignal.timeout(45000),
    })
    if (!response.ok)
      throw new Error(
        `Open Collective HTTP ${response.status}; no automatic retry`,
      )
    const result = await response.json()
    if (result.errors?.length) {
      // Redact any credential echoed by a remote error and omit arbitrary response bodies.
      const messages = result.errors.map((error: { message?: string }) =>
        String(error.message ?? "Unknown GraphQL error")
          .split(token)
          .join("[REDACTED]")
          .slice(0, 500),
      )
      throw new Error(`Open Collective: ${messages.join("; ")}`)
    }
    if (!result.data) throw new Error("Missing API data")
    return result.data
  }
  const accounts = await query(
    `query VerifyAccounts($payee: String!) {
    me { id } payer: account(slug: "tscircuit-contributors") { legacyId }
    payee: account(slug: $payee) { legacyId slug name }
  }`,
    { payee },
  )
  if (
    !accounts.me?.id ||
    accounts.payer?.legacyId !== 1325871 ||
    !accounts.payee?.legacyId ||
    accounts.payee.slug !== payee
  )
    throw new Error("Account verification failed")
  const result = await createDraft(query, plan, payer, {
    legacyId: accounts.payee.legacyId,
  })
  const url = `https://opencollective.com/${payer}/expenses/${result.expense.legacyId}`
  const receipt = {
    ...result,
    url,
    key: plan.key,
    payee,
    month,
    cents: plan.cents,
  }
  fs.writeFileSync(
    "/tmp/opencollective-result/receipt.json",
    JSON.stringify(receipt, null, 2),
  )
  console.log(JSON.stringify(receipt, null, 2))
  if (summary)
    fs.appendFileSync(
      summary,
      `\nOutcome: ${result.outcome}. [Expense ${result.expense.legacyId}](${url}). No invitation or payment sent.\n`,
    )
}

if (import.meta.main)
  main().catch((error) => {
    console.error(
      error instanceof Error ? error.message : "Expense operation failed",
    )
    process.exitCode = 1
  })
