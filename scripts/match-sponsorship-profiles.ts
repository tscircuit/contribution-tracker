import fs from "node:fs"
import path from "node:path"
import { createHash } from "node:crypto"
import {
  MATCHING_MONTH,
  parseProfiles,
  parseSponsorshipCsv,
  historicalGithubId,
  requireGithubIdentity,
} from "../lib/sponsorship-profile-matching"

async function requestJson(url: string, options: RequestInit = {}) {
  const response = await fetch(url, {
    ...options,
    redirect: "error",
    signal: AbortSignal.timeout(20000),
  })
  if (!response.ok)
    throw new Error(`Account lookup failed: HTTP ${response.status}`)
  return response.json()
}

async function main() {
  if (process.argv.length > 2)
    throw new Error(
      "This script is locked to September 2026 and takes no arguments",
    )
  const source = fs.readFileSync(`sponsorships/${MATCHING_MONTH}.csv`, "utf8")
  const profileSource = fs.readFileSync("sponsorship-profiles.json", "utf8")
  const sponsorships = parseSponsorshipCsv(source)
  if (!sponsorships.length) throw new Error("No sponsorships found")
  const profiles = parseProfiles(profileSource)
  const overviews = ["01", "08", "15", "22"].map((day) =>
    JSON.parse(
      fs.readFileSync(`contribution-overviews/2026-09-${day}.json`, "utf8"),
    ),
  )
  const recipients = new Set<string>()
  const rows = []
  for (const sponsorship of sponsorships) {
    const githubId = historicalGithubId(sponsorship.username, overviews)
    const profileUrl = profiles.get(sponsorship.username.toLowerCase()) ?? null
    if (!profileUrl) {
      rows.push({
        ...sponsorship,
        githubId,
        profileUrl,
        status: "missing-profile",
      })
      continue
    }
    const github = await requestJson(
      `https://api.github.com/users/${encodeURIComponent(sponsorship.username)}`,
      {
        headers: {
          Accept: "application/vnd.github+json",
          ...(process.env.GITHUB_TOKEN
            ? { Authorization: `Bearer ${process.env.GITHUB_TOKEN}` }
            : {}),
        },
      },
    )
    requireGithubIdentity(sponsorship.username, githubId, github)
    const slug = profileUrl.split("/").at(-1)!
    const result = await requestJson(
      "https://api.opencollective.com/graphql/v2",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          query:
            "query MatchProfile($slug: String!) { account(slug: $slug) { id slug name } }",
          variables: { slug },
        }),
      },
    )
    const account = result.data?.account
    if (
      result.errors?.length ||
      typeof account?.id !== "string" ||
      !account.id ||
      account.slug?.toLowerCase() !== slug
    ) {
      throw new Error(
        `Open Collective account could not be verified for ${sponsorship.username}`,
      )
    }
    if (recipients.has(account.id))
      throw new Error(
        "Multiple contributors resolve to the same Open Collective account",
      )
    recipients.add(account.id)
    rows.push({
      ...sponsorship,
      githubId,
      profileUrl,
      openCollectiveId: account.id,
      status: "matched-needs-owner-review",
    })
  }
  // Publish only after every validation/lookup succeeds. No mutations, emails,
  // invoice creation, or payment calls are made by this script.
  const report = {
    month: MATCHING_MONTH,
    currency: "USD",
    sourceSha256: createHash("sha256").update(source).digest("hex"),
    profilesSha256: createHash("sha256").update(profileSource).digest("hex"),
    totalCents: rows.reduce((sum, row) => sum + row.amountCents, 0),
    matchedCount: recipients.size,
    missingCount: rows.length - recipients.size,
    ownershipVerified: false,
    rows,
  }
  if (!Number.isSafeInteger(report.totalCents))
    throw new Error("Unsafe sponsorship total")
  const directory = path.join("sponsorship-matches", MATCHING_MONTH)
  fs.mkdirSync(directory, { recursive: true })
  fs.writeFileSync(
    path.join(directory, "matches.json"),
    `${JSON.stringify(report, null, 2)}\n`,
  )
  const summary = `September 2026 sponsorship matching\n\n${report.matchedCount} matched; ${report.missingCount} missing profiles. Total: $${(report.totalCents / 100).toFixed(2)} USD.\n\nAccount existence and GitHub numeric IDs were checked. Ownership of the Open Collective account still needs maintainer review. No expenses or payments were created.\n`
  fs.writeFileSync(path.join(directory, "summary.md"), summary)
  if (process.env.GITHUB_STEP_SUMMARY)
    fs.appendFileSync(process.env.GITHUB_STEP_SUMMARY, summary)
  console.log(summary)
}

if (import.meta.main)
  main().catch((error) => {
    console.error(error.message)
    process.exitCode = 1
  })
