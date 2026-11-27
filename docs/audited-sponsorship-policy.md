# Audited sponsorship policy

PR evaluation assigns no contribution credit to dependency/version updates
(including useful upstream integrations), payment bookkeeping, demonstrated
no-ops, and duplicate-counted work. This is distinct from a useful zero-star
PR, which earns 0.5 points. Documentation, test-maintenance and CI-only fixes
receive one star (one point). Useful standalone reproductions are scored
separately and cannot exceed two stars (two points).

When a demonstrated gap exists in meaningful regression tests or relevant
visual snapshots, reduce the rating by one star level. Existing relevant tests
count even if unchanged; nonvisual fixes can use structural assertions. Manual
screenshots alone do not constitute automated regression coverage. Missing
changed tests alone does not prove an existing-coverage gap. The evaluator
receives the PR description and diff, so this does not claim a full independent
repository test audit. Stored analyses without the current policy version are
reevaluated the next time their PR enters the analysis window.

Monthly sponsorships are capped at $200, with a $300 limit for `mohan-bee`.
The limit applies to sponsorship earnings; separately approved hardware
reimbursements are not sponsorship earnings.

## Reviewed September and October 2026

The `sponsorships/2026-09-audited.json` and `2026-10-audited.json` manifests are
reviewed payout snapshots, based on the PR audits prepared in this discussion.
They contain the credited PR invoice items and exact-cent allocations.
Regenerating the CSV for either month uses the reviewed manifest instead of
recalculating the old weekly tiers. Manifest parsing rejects duplicate/staff
recipients, amounts exceeding the applicable cap, and invoice item totals that
do not reconcile.

Only the seven audited contributors with registered Open Collective profiles
are included. Abse2001, AnasSarkiz and ShiboSoftwareDev are staff and receive no
rows. Contributors without a reviewed profile/payout are omitted from these
reviewed month snapshots; the global exporter still uses its existing staff
and eligibility rules for other months.

| Contribution month | Reviewed gross sponsorship total |
| --- | ---: |
| September 2026 | $535.00 |
| October 2026 | $668.49 |

Mohan's reviewed amount is $300 for each month. Everyone else's previously
reviewed amount is unchanged. These totals do not mean new outstanding debt:
already-paid September sponsorships remain settled, and existing expenses and
the contribution-month ledger must be reconciled before sending. The selected
September sender uses the reviewed invoice items and still retains its
existing duplicate protections. A stored older plan is never overwritten to
force another expense through.

November files and the current payment-artifact generation pause are unchanged.
