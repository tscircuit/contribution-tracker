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

## Rule-based monthly export

The exporter selects the requested month's complete payout weeks, reads merged
PR evaluations, verifies durable contributor IDs against the overview data,
removes staff/ineligible contributors and missing profiles, and counts each PR
once. Previously reviewed PR classifications are saved with each PR evaluation,
including a baseline rating and an evidence note. These are review findings,
not fixed payment overrides. Unevaluated legacy PRs must be refreshed before
export, rather than silently assumed to satisfy the audit.

For each eligible contributor, calculate:

`monthly limit × contributor audited points ÷ highest eligible monthly points`

The standard monthly limit is $200; the configured exception for `mohan-bee`
is $300. Round half-up to cents, then allocate the total across credited PRs
using their point weights and largest remainders. This is proportional pricing;
it replaces the legacy weekly-tier amount for months with PR evaluation data.
The exception changes only that recipient's rate. Staff, missing profiles and
zero-point work do not set the denominator.

No approved monthly dollar amounts are read as calculation inputs. The CSV
and `YYYY-MM-audited.json` files are generated outputs; editing or removing
those outputs does not set the next calculated amount. The same code works for
any requested month with complete weeks and evaluated PR data. Existing
payment-artifact generation pauses remain enforced.

The September and October replay matches the earlier audited payout amounts
exactly: $535.00 and $668.49 respectively, using their previously reviewed PR
classifications. See [the comparison](audited-sponsorship-comparison.md).
This does not claim that a new AI-only pass independently reproduced every
human review decision. New evaluation findings can change the calculated
amounts; there is no dollar override to force a match.

Already-paid sponsorships remain settled. The sender recalculates its invoice
items from current evaluated PRs and retains its existing period-reference and
ledger duplicate protections. No invoices or payments are created by export.
November files and the payment-artifact generation pause are unchanged.
