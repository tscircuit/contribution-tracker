# Open Collective expense drafts

Use **Actions → Open Collective expenses → Run workflow**. The workflow accepts any GitHub contributor login and completed sponsorship month, plus an explicitly verified Open Collective payee slug. GitHub and Open Collective usernames need not match. The payer is `tscircuit-contributors`.

Modes:

- `authenticate`: checks the Actions secret `OPENCOLLECTIVE_TOKEN` and payer account without creating anything.
- `preview`: computes the existing sponsorship and displays PR items without calling the API. Download `preview.json` from the run artifacts.
- `create-draft`: verifies API authentication and the payer/payee accounts, checks existing expenses, and creates one invoice draft. All invitations are suppressed and the amount is locked. No payment, approval, or recipient email is sent.

For the initial test: month `2026-09`, contributor `trixie010`, verified payee `trixie`. Expected total is USD 10.00, split into USD 3.33 for PR 86 and USD 6.67 for PR 87. These values are computed from repository data, not hardcoded in the workflow.

The script reuses `getFullWeeksForMonth` and `calculateSponsorship`. It uses the same week-end month convention, not a calendar-month merge filter. It rejects incomplete/missing weeks and missing PR-analysis files, filters merged PRs, and uses durable GitHub IDs when available. Each PR receives weight `2 ** (stars - 1)` (implemented as proportionally equivalent integer weights `2 ** stars`); largest-remainder allocation preserves the exact sponsorship in cents. Hardware reimbursements are separate and excluded. Months disabled by `arePaymentArtifactsDisabled` remain disabled, including November 2026 onward under the current rule.

The API token needs expenses scope and a user authorized to create drafts on the payer. Store it only in GitHub Actions secrets. Creating a token with advanced privileges is not assumed necessary; a live permission error must establish that requirement.

Runs are serialized with a shared GitHub concurrency group. Duplicate detection paginates both normal expenses and explicit DRAFT listings using a stable contributor/month marker in the description. An existing matching total is returned without another mutation; conflicting totals or multiple matches fail for review. This guards sequential reruns from this workflow; it is not an API-level atomic idempotency guarantee against unrelated external clients. Preserve the description marker when editing expenses. Manually created expenses without the marker must be checked separately before first use.

The mutation is never automatically retried, because a timeout may follow a successful write. After an uncertain failure, inspect the collective before rerunning. Run summaries and artifacts contain expense IDs and ordinary expense URLs, never draft access keys. Recipients still complete legal identity, billing, and payout details privately on Open Collective; normal host review/payment requirements apply.

Local preview (Bun 1.3.1, after `bun install --frozen-lockfile`):

```sh
SPONSORSHIP_MONTH=2026-09 CONTRIBUTOR=trixie010 PAYEE_SLUG=trixie EXPENSE_MODE=preview bun scripts/opencollective-expense.ts
bun test tests/opencollective-expenses.test.ts
```

No monthly schedule or automatic invitations are enabled yet. Those require verified contributor-to-payee mappings, a successful live draft test, and a separate change to the current payment-artifact restriction if later months are to be processed.
