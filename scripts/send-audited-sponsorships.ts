import fs from "node:fs"
import { prepareAuditedPlans } from "../lib/audited-sponsorship-send"
import { sendExpenseOnce } from "../lib/sponsorship-expense-send"
import {
  GithubLedgerStore,
  listAuthenticatedExpenses,
  createSponsorshipInvitation,
} from "./send-selected-sponsorship"

async function main() {
  if (
    process.env.GITHUB_REPOSITORY !== "tscircuit/contribution-tracker" ||
    process.env.GITHUB_REF !== "refs/heads/main"
  )
    throw new Error("Sending is restricted to the repository main branch")
  if (!process.env.GITHUB_TOKEN || !process.env.OPENCOLLECTIVE_TOKEN)
    throw new Error("Existing Actions tokens are required")
  const audit = JSON.parse(
    fs.readFileSync("sponsorships/2026-09-audited.json", "utf8"),
  )
  const preview = JSON.parse(
    fs.readFileSync("sponsorship-matches/2026-09/audited-preview.json", "utf8"),
  )
  // Validate all audited plans before the first external write.
  const plans = prepareAuditedPlans({ audit, preview })
  const results = []
  for (const plan of plans) {
    try {
      const result = await sendExpenseOnce({
        plan,
        ledger: new GithubLedgerStore(plan.githubId),
        excludedIds: new Set(),
        remote: {
          list: () => listAuthenticatedExpenses(plan),
          create: () => createSponsorshipInvitation({ plan }),
        },
      })
      results.push({
        username: plan.username,
        outcome: result.outcome,
        expenseId: result.expense.id,
        status: result.expense.status,
        amountCents: result.expense.amountCents,
        url: `https://opencollective.com/tscircuit-contributors/expenses/${result.expense.legacyId}`,
      })
    } catch {
      // No blind retries. A reserved ledger protects uncertain creation outcomes.
      results.push({
        username: plan.username,
        outcome: "failed-review-required",
      })
    }
    fs.writeFileSync(
      "sponsorship-matches/2026-09/payout-results.json",
      JSON.stringify(results, null, 2) + "\n",
    )
  }
  const summary = `\n## Invoice sending result\n\n${results.map((row) => `- ${row.username}: ${row.outcome}${row.url ? ` — [${row.status}](${row.url})` : ""}`).join("\n") || "No eligible unpaid contributors; nothing sent."}\n\nSettled contributors are excluded. Existing invoices are not recreated. Invitation emails are requested for new invoices; delivery is not guaranteed. This creates invoice invitations, not bank payments.\n`
  fs.appendFileSync("sponsorship-matches/2026-09/summary.md", summary)
  if (process.env.GITHUB_STEP_SUMMARY)
    fs.appendFileSync(process.env.GITHUB_STEP_SUMMARY, summary)
  console.log(summary)
  if (results.some((row) => row.outcome === "failed-review-required"))
    process.exitCode = 1
}
if (import.meta.main)
  main().catch((error) => {
    console.error(error.message)
    process.exitCode = 1
  })
