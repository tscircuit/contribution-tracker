import { getSponsorshipLimitCents } from "../lib/scoring/sponsorship-limits"
import fs from "node:fs"
import {
  collectiveQuery,
  listAuthenticatedExpenses,
} from "./send-selected-sponsorship"
import { auditedPaymentStatus } from "../lib/audited-sponsorship-preview"
import { PAYER_SLUG } from "../lib/sponsorship-expense-report"

async function main() {
  if (!process.env.OPENCOLLECTIVE_TOKEN)
    throw new Error(
      "Existing OPENCOLLECTIVE_TOKEN is required for complete expense visibility",
    )
  const audit = JSON.parse(
    fs.readFileSync("sponsorships/2026-09-audited.json", "utf8"),
  )
  const matching = JSON.parse(
    fs.readFileSync("sponsorship-matches/2026-09/matches.json", "utf8"),
  )
  if (
    audit.month !== "2026-09" ||
    audit.currency !== "USD" ||
    matching.month !== audit.month
  )
    throw new Error("Invalid audit period")
  const auth = await collectiveQuery(
    `query PreviewAccess($slug:String!){me{id} account(slug:$slug){slug ... on Collective{isAdmin}}}`,
    { slug: PAYER_SLUG },
  )
  if (
    !auth.me?.id ||
    auth.account?.slug !== PAYER_SLUG ||
    auth.account.isAdmin !== true
  )
    throw new Error(
      "Collective admin visibility is required; unpaid status cannot be established",
    )
  const seen = new Set<string>()
  const rows = []
  for (const contributor of audit.contributors) {
    if (
      typeof contributor.username !== "string" ||
      !Number.isSafeInteger(contributor.amountCents) ||
      contributor.amountCents <= 0 ||
      contributor.amountCents >
        getSponsorshipLimitCents(contributor.username) ||
      seen.has(contributor.username.toLowerCase())
    )
      throw new Error("Invalid audited contributor")
    seen.add(contributor.username.toLowerCase())
    const matched = matching.rows.find(
      (row: any) =>
        row.username.toLowerCase() === contributor.username.toLowerCase(),
    )
    if (!matched?.openCollectiveId || !matched.profileUrl)
      throw new Error(
        `Audited contributor profile unavailable: ${contributor.username}`,
      )
    const slug = matched.profileUrl.split("/").at(-1)
    const data = await collectiveQuery(
      `query PreviewPayee($slug:String!){account(slug:$slug){id legacyId slug}}`,
      { slug },
    )
    if (
      data.account?.id !== matched.openCollectiveId ||
      data.account.slug !== slug ||
      !Number.isSafeInteger(data.account.legacyId)
    )
      throw new Error("Recipient identity changed")
    // This reusable scanner only reads; the sender entry point is never invoked.
    const plan = {
      payeeId: matched.openCollectiveId,
      payeeLegacyId: data.account.legacyId,
      payeeSlug: slug,
    }
    const expenses = await listAuthenticatedExpenses(plan)
    rows.push({
      ...contributor,
      profileUrl: matched.profileUrl,
      ...auditedPaymentStatus({
        ...contributor,
        githubId: matched.githubId,
        payeeId: matched.openCollectiveId,
        expenses,
      }),
    })
  }
  const outstanding = rows.filter((row) => row.status !== "paid")
  const totalCents = outstanding.reduce(
    (sum, row) => sum + row.remainingCents,
    0,
  )
  const summary = `# September 2026 audited sponsorship preview\n\n**Test only. No expenses, emails, invoices or payments are sent.**\n\nOutstanding audited amount: **$${(totalCents / 100).toFixed(2)} USD**. Existing expenses and review rows must be reconciled before sending.\n\n| Contributor | Audited payout | September paid | Remaining | Status |\n| --- | ---: | ---: | ---: | --- |\n${outstanding.map((row) => `| ${row.username} | $${(row.amountCents / 100).toFixed(2)} | $${(row.paidCents / 100).toFixed(2)} | $${(row.remainingCents / 100).toFixed(2)} | ${row.status} |`).join("\n")}\n\nAlready paid (omitted above): ${
    rows
      .filter((row) => row.status === "paid")
      .map((row) => row.username)
      .join(", ") || "none confirmed"
  }.\n\nPayment matching uses the September contribution reference and recipient, regardless of payment date. Prior payments above the new audited amount satisfy it; unrelated $10 test payments do not. Unknown periods and existing pending invoices require review, never an automatic resend.\n`
  fs.writeFileSync(
    "sponsorship-matches/2026-09/audited-preview.json",
    JSON.stringify(
      { month: audit.month, totalCents, rows, outstanding },
      null,
      2,
    ) + "\n",
  )
  fs.writeFileSync("sponsorship-matches/2026-09/summary.md", summary)
  if (process.env.GITHUB_STEP_SUMMARY)
    fs.appendFileSync(process.env.GITHUB_STEP_SUMMARY, summary)
  console.log(summary)
}
if (import.meta.main)
  main().catch((error) => {
    console.error(error.message)
    process.exitCode = 1
  })
