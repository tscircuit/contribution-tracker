# Add your Open Collective profile

Edit [`sponsorship-profiles.json`](../sponsorship-profiles.json) and replace `null`
under your GitHub username with your public Open Collective profile link:

```json
{
  "your-github-username": {
    "openCollectiveProfileUrl": "https://opencollective.com/your-profile"
  }
}
```

1. Sign in to Open Collective and copy your personal profile's URL. Your Open
   Collective username can differ from your GitHub username.
2. Find your existing GitHub username in the file, or add an entry using the same
   username shown in the [sponsorship CSVs](../sponsorships).
3. Set `openCollectiveProfileUrl` to your own public profile URL and open a PR.
   Leave other contributors' entries unchanged.

`null` means the profile has not been provided. The initial entries come from the
September and October 2026 sponsorship CSVs; contributors not listed can add
themselves. The list is registration data, not a list of sponsorship eligibility.

Only add a public profile link. Keep bank, identity, and tax details in Open
Collective's private forms. Maintainers should review profile changes because the
mapping will identify future expense recipients.

Adding a profile does not run the workflow or create an expense. Profile changes
need maintainer review because the mapping identifies expense recipients. Existing
GitHub identity handling and Discord registration in `users.json` are unchanged.

## Open Collective Sponsorships (manual only)

Open **Actions → Open Collective Sponsorships → Run workflow**, selecting **main**.
The same workflow remains manual-only and restricted to September 2026.

**Running it now creates a report and attempts to send Mohan's September invoice
invitation once. Everyone else remains report-only.** It never approves an expense
or executes a payment. Missing secrets cause the sender to stop; a successful
report is still uploaded even if sending fails.

### Reporting

The Action reads `sponsorships/2026-09.csv` and `sponsorship-profiles.json`, verifies
GitHub numeric IDs against the September overviews, and resolves public Open
Collective account IDs. It rejects duplicate JSON keys before parsing discards
them, duplicate recipients, invalid URLs/amounts, changed identities, and failed
profile lookups. It never matches display names or assumes usernames match across
platforms. Profile existence is not proof of ownership.

The summary and `matches.json` list only contributors with resolved profiles.
Missing profiles are counted but excluded from rows and the matched total.
`totalCents` is the matched amount; `sourceTotalCents` is the full CSV total.
`confirmedPaidCents` and `paymentReviewTotalCents` explain the headline review
total. Confirmed fully paid sponsorships are excluded from that review total;
pending, partial, unknown payments and ownership still require review.

The public expense scan covers all creation dates. Recipient ID plus exact
references identify contribution months, regardless of when payment happens:

- `tscircuit-contributors:github:<numeric-id>:sponsorship:2026-09`
- `tscircuit-2026-09-<github-username>` (legacy reference)

Expense links show their own status, currency, and amount. An unassigned
`PAID: USD 10.00 (contribution month unverified)` does not mean the full September
sponsorship was paid. Unknown periods, partial amounts, and multiple matching
expenses need review. Public visibility can hide drafts/references; missing
visible evidence is **unknown**, not proof of nonpayment. Incomplete public scans
are discarded and marked unavailable. The sender uses a separate authenticated
scan and does not rely on this public payment evidence to authorize creation.

Download `sponsorship-profile-matches-2026-09` from the run's Artifacts section.
The normal table is a pre-send snapshot. Sending appends an explicit result and
expense link to the summary and records `sendResult` in JSON.

### Sender setup and invitation email

The sender reuses the existing `OPENCOLLECTIVE_TOKEN` repository secret, with
expenses scope and collective-admin access to inspect all drafts. No new email
secret is required or added. The Actions token maintains the sending ledger.

It uses Mohan's existing saved account. The invitation mutation is not silent
(`skipInvite: false`), but his current incognito profile has no admin email
recipients, so an email may not be delivered. The expense link is reported in the
Action output for manual follow-up. Correct the profile with Mohan later if
needed; do not create another invoice merely to get an email.

The sender is restricted to `mohan-bee` and `2026-09` in both code and
`sponsorship-expense-send-config.json`. It reads the amount from September's CSV
(currently $900), not a coded price. Every merged PR in the same four payout weeks
gets an invoice item weighted by `2 ** (stars - 1)`, with exact cent allocation.

The mutation uses `skipInvite: false`, so this is not a silent draft. Open Collective is asked to invite Mohan to finish his private details and submit
the expense;
Open Collective generates the final invoice after submission. No PDF attachment
is generated by the Action. A successful response confirms expense creation and
that the email was requested, **not inbox delivery**. Reruns do not resend the
invitation automatically.

### Duplicate prevention and recovery

The workflow serializes runs. Its Actions token needs `contents: write` for a
separate `opencollective-expense-ledger` branch; it does not commit to main.
Do not delete the ledger branch or reset its records.

The permanent key combines payer, immutable GitHub contributor ID, sponsorship
purpose, and contribution month. A full authenticated scan checks drafts and
submitted expenses before creating anything. An existing September invoice blocks
a second September invoice even when paid in November. Another contribution month
is a different key. Existing rejected/canceled invoices also stop automatic
replacement and need reconciliation.

Expenses with unknown periods block sending unless explicitly reviewed. The $10
paid test expense recorded in the sending config was confirmed by Abse2001 as
separate from September. The sender verifies its ID, payee, paid status, currency,
and amount before honoring that exception; it never assumes all $10 payments are
tests or deducts them from sponsorships.

An atomic ledger reservation is saved **before** the creation mutation. The
confirmed expense ID is saved afterward. A timeout, failed confirmation write,
changed plan/recipient, incomplete visibility, or ledger conflict never causes a
blind retry. Reruns reconcile a visible existing invoice; if the attempt remains
uncertain they stop for manual review. This prevents automated retries from
creating duplicates but cannot make unrelated manual payments idempotent.

The ledger records invoice creation and invitation-request status, not delivery
receipts or payout credentials. If an email is missing, check Open Collective;
do not delete the reservation and retry the invoice.

### Verification and diagnostics

Run `bun test tests/sponsorship-expense-send.test.ts` for offline sending tests.
The matching/reporting tests also remain offline with mocked API responses. Do
not run `scripts/send-mohan-sponsorship.ts` merely to test it: it performs writes
when the configured main-branch environment and secrets are present.

HTTP lookups use an application User-Agent and safe hostname/status diagnostics.
Only a specific GitHub integration-permission denial for a public user GET may
retry without credentials; rate limits and other access failures stop the lookup.
Creation mutations are never retried automatically. Error bodies, tokens, query
strings, and private response bodies are not printed.
