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

This file only collects profile links. Adding an entry does not create an expense,
send an invitation, change sponsorship amounts, or trigger payment. The matching
Action below produces a review report; expense creation remains a separate change.
Existing GitHub identity handling and Discord registration in `users.json` are
unchanged.

## Match September 2026 sponsorships (manual only)

After merging this workflow, open **Actions → Match September 2026 Sponsorship
Profiles → Run workflow**, selecting the **main** branch. It has no schedule,
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
missing or conflicting historical GitHub IDs, changed GitHub identities, lookup
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
