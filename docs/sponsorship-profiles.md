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

For a real example, Abse2001's GitHub account maps to the Open Collective profile
[opencollective.com/abse](https://opencollective.com/abse):

```json
{
  "Abse2001": {
    "openCollectiveProfileUrl": "https://opencollective.com/abse"
  }
}
```

To make this change on GitHub without a local checkout, open
[`sponsorship-profiles.json`](../sponsorship-profiles.json), click the pencil icon
(**Edit this file**), update your entry, and use **Commit changes** to propose the
change on a new branch and open a pull request. Use your own profile URL rather
than copying the example's URL.

`null` means the profile has not been provided. The initial entries come from the
September and October 2026 sponsorship CSVs; contributors not listed can add
themselves. The list is registration data, not a list of sponsorship eligibility.

Only add a public profile link. Keep bank, identity, and tax details in Open
Collective's private forms. Maintainers should review profile changes because the
mapping will identify future expense recipients.

This file only collects profile links. Adding an entry does not create an expense,
send an invitation, change sponsorship amounts, or trigger payment. The matching
Action below produces a review report; expense creation remains a separate change.
Existing GitHub identity handling and Discord registration in `users.json` are
unchanged.

## Open Collective Sponsorships (manual only)

After merging this workflow, open **Actions → Open Collective Sponsorships → Run workflow**, selecting the **main** branch. It has no schedule,
push trigger, or month input. It is locked to September 2026; running it from
another branch skips the job.

The Action reads `sponsorships/2026-09.csv` and `sponsorship-profiles.json`, then
uploads `sponsorship-profile-matches-2026-09` with a JSON report and summary.
Amounts are copied from the existing CSV in integer cents; no sponsorship is
recalculated or increased. Missing/null profiles are reported, not guessed or
assigned to another recipient. Registrations without a September payout do not
produce a payable row.

For mapped contributors, the Action checks the live GitHub numeric account ID
against the September overview records and resolves the explicit Open Collective
URL to an account ID through its public API. It does not match display names or
assume GitHub and Open Collective usernames are the same. GitHub's automatic
workflow token is used only for read-only GitHub requests; no Open Collective
secret is needed.

Validation stops on duplicate usernames (including case variants and repeated
JSON keys), duplicate Open Collective URLs/account IDs, invalid URLs/CSV amounts,
missing or conflicting historical GitHub IDs, changed GitHub identities, profile lookup
failures, or nonexistent Open Collective profiles. No report artifact is uploaded
on a failed job. The job is read-only, has a timeout, rejects redirects, and never
creates expenses, sends invitations, or pays anyone. Repeated runs just create
new reports.

### Username collisions and ownership

GitHub usernames and Open Collective profile slugs are unique within their own
platforms; display names are not. The same text on different platforms does not
establish that accounts have the same owner. GitHub usernames may be renamed or
later reused, so this Action also compares numeric GitHub IDs against historical
records and stops if they differ.

A valid Open Collective URL proves only that the account exists. It does not
prove that the GitHub contributor owns it, and the registration file currently
does not pin a previously approved Open Collective account ID. Maintainers must
review profile registration PRs and confirm ownership before using a report for
payment. The report explicitly records `ownershipVerified: false` and labels
matched rows `matched-needs-owner-review`; it is not authorization to pay. Shared
recipient accounts are rejected rather than silently pooling multiple payouts.

Offline validation: `bun test tests/sponsorship-profile-matching.test.ts`.
The matching script itself makes live read-only lookups when explicitly run:
`bun scripts/match-sponsorship-profiles.ts` (no arguments).


### Future duplicate-expense protection

This workflow produces reports only. It queries public visible expenses for
status evidence, but does not yet implement complete duplicate-expense protection.

Before adding expense creation to this same workflow, identify each sponsorship
by the payer collective, immutable GitHub contributor ID, expense purpose
(monthly contribution sponsorship), and contribution period (`YYYY-MM`). Record
this key on the Open Collective expense and persist its expense ID in a durable
ledger. The contribution period must come from the sponsorship month, not the
creation date or payment date.

For example, a September 2026 sponsorship paid in November must block another
September sponsorship for that contributor. An October 2026 sponsorship paid in
November has a different key and must remain eligible.

Check existing draft, pending, approved, processing, and paid expenses before
creating another expense with that key, not just already-paid expenses. Include
manual/legacy expenses in reconciliation: an expense without a recorded period
cannot safely be inferred from its payment date and needs human review. A
rejected, canceled, refunded, or failed expense needs explicit reconciliation
rather than automatically creating a replacement.

Serialize expense-creation runs and reconcile uncertain API outcomes before
retrying, so a timeout after successful creation cannot create a duplicate. A
local cache or downloadable report alone is not a durable payment ledger.


### Per-contributor expense and payment reporting

Both the Actions run summary and downloaded `summary.md` contain a table with
GitHub username, Open Collective profile, September amount, profile-match result,
payment evidence, and linked expense statuses. `matches.json` includes the same
information as structured rows.

The Action paginates the payer collective's public received expenses across all
creation dates. It uses recipient account IDs, never display names. A September
expense can therefore be reported even if it was created or paid in November.
The following exact references identify the contribution period:

- `tscircuit-contributors:github:<numeric-id>:sponsorship:2026-09`
- `tscircuit-2026-09-<github-username>` (the earlier invoice generator's reference)

A single matched September expense marked `PAID`, with the expected USD amount,
is reported as `paid`. Other statuses are shown unchanged beside the expense
link, with `period-expense-not-paid`. Multiple September expenses or mismatched
amounts are explicitly flagged for review. This is evidence about existing
expenses, not permission to create a new one.

Expenses with missing or unrecognized references are listed separately as
needing contribution-period review. Their paid date, title, or amount is not used
to assume that they pay September's sponsorship. Missing contributor profiles
remain visible in the report with unknown payment status.

Public API access can hide drafts or invoice references. Accordingly, no matching
visible expense is `unknown-no-visible-period-expense`, not proof that someone
is unpaid. If pagination fails, data changes during the scan, or any GraphQL field
is inaccessible, the expense lookup is discarded and payment statuses become
`unknown-lookup-unavailable`; the profile matching report is still produced. No
private payout details, bank information, or API token are collected. Complete
expense reconciliation will require authorized visibility before enabling sends.
