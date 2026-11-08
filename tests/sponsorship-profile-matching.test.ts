import { expect, test } from "bun:test"
import fs from "node:fs"
import {
  parseProfiles,
  parseSponsorshipCsv,
  historicalGithubId,
  requireGithubIdentity,
  MATCHING_MONTH,
} from "../lib/sponsorship-profile-matching"

const profile = (url: string | null) => ({ openCollectiveProfileUrl: url })
const header = "Maintainer username,Sponsorship amount in USD,REMARKS\n"

test("matches case-insensitive GitHub usernames and canonical public URLs", () => {
  const profiles = parseProfiles(
    JSON.stringify({
      Abse2001: profile("https://opencollective.com/abse/"),
      trixie010: profile(null),
    }),
  )
  expect(profiles.get("abse2001")).toBe("https://opencollective.com/abse")
  expect(profiles.get("trixie010")).toBeNull()
})

test("rejects exact, escaped, and case-insensitive duplicate username keys", () => {
  for (const key of ["alice", "ALICE", "\\u0061lice"]) {
    expect(() =>
      parseProfiles(
        `{"alice":{"openCollectiveProfileUrl":null},"${key}":{"openCollectiveProfileUrl":null}}`,
      ),
    ).toThrow("Duplicate")
  }
  expect(() =>
    parseProfiles(
      '{"alice":{"openCollectiveProfileUrl":null,"openCollectiveProfileUrl":"https://opencollective.com/other"}}',
    ),
  ).toThrow("Duplicate")
})

test("rejects shared recipients, even with case and trailing slash differences", () => {
  expect(() =>
    parseProfiles(
      JSON.stringify({
        alice: profile("https://opencollective.com/person"),
        bob: profile("https://opencollective.com/PERSON/"),
      }),
    ),
  ).toThrow("Duplicate Open Collective")
})

test("rejects misleading URLs and invalid profile schemas", () => {
  for (const url of [
    "http://opencollective.com/alice",
    "https://opencollective.com.evil/alice",
    "https://opencollective.com/alice?x=y",
    "https://opencollective.com/alice/expenses",
    "https://evil@opencollective.com/alice",
    "https://opencollective.com:443/alice",
    " ",
    123,
  ]) {
    expect(() =>
      parseProfiles(
        JSON.stringify({ alice: { openCollectiveProfileUrl: url } }),
      ),
    ).toThrow()
  }
  for (const invalidProfiles of [
    [],
    null,
    { alice: {} },
    { alice: { openCollectiveProfileUrl: null, other: true } },
  ]) {
    expect(() => parseProfiles(JSON.stringify(invalidProfiles))).toThrow()
  }
})

test("CSV parsing preserves exact cents, quoted commas, quotes and CRLF", () => {
  expect(
    parseSponsorshipCsv(header + 'alice,10.01,"score, with ""quotes"""\r\n'),
  ).toEqual([
    { username: "alice", amountCents: 1001, remarks: 'score, with "quotes"' },
  ])
})

test("rejects duplicate sponsorships, malformed CSV and nonpositive or unsafe amounts", () => {
  for (const source of [
    header + "alice,10,x\nALICE,20,x",
    header + "alice,-1,x",
    header + "alice,0,x",
    header + "alice,1.234,x",
    header + "alice,1e2,x",
    header + "alice,9999999999999999999,x",
    header + 'alice,1,"unclosed',
    header + 'alice,1,"x"oops',
    header + "alice,1,x,extra",
    "wrong\n",
  ]) {
    expect(() => parseSponsorshipCsv(source)).toThrow()
  }
})

test("historical numeric ID prevents reused or renamed GitHub usernames from matching", () => {
  const expected = historicalGithubId("Alice", [
    { alice: { githubId: 123, githubLogin: "alice" } },
  ])
  expect(expected).toBe(123)
  expect(() =>
    requireGithubIdentity({
      username: "alice",
      expectedId: expected,
      current: { id: 999, login: "alice" },
    }),
  ).toThrow("identity changed")
  expect(() =>
    requireGithubIdentity({
      username: "alice",
      expectedId: expected,
      current: { id: 123, login: "renamed" },
    }),
  ).toThrow("identity changed")
  expect(() =>
    requireGithubIdentity({
      username: "alice",
      expectedId: expected,
      current: { id: 123, login: "ALICE" },
    }),
  ).not.toThrow()
  expect(() =>
    historicalGithubId("alice", [
      { alice: { githubId: 123 } },
      { alice: { githubId: 456 } },
    ]),
  ).toThrow("ambiguous")
  expect(() => historicalGithubId("alice", [{ alice: {} }])).toThrow("Missing")
  expect(() => historicalGithubId("alice", [{}])).toThrow("Missing")
})

test("September fixture retains all payouts including trixie010's $10", () => {
  expect(MATCHING_MONTH).toBe("2026-09")
  const rows = parseSponsorshipCsv(
    fs.readFileSync(`sponsorships/${MATCHING_MONTH}.csv`, "utf8"),
  )
  const overviews = ["01", "08", "15", "22"].map((day) =>
    JSON.parse(
      fs.readFileSync(`contribution-overviews/2026-09-${day}.json`, "utf8"),
    ),
  )
  expect(rows).toHaveLength(11)
  expect(rows.find((row) => row.username === "trixie010")?.amountCents).toBe(
    1000,
  )
  for (const row of rows)
    expect(historicalGithubId(row.username, overviews)).toBeGreaterThan(0)
  expect(() =>
    parseProfiles(fs.readFileSync("sponsorship-profiles.json", "utf8")),
  ).not.toThrow()
})

test("rejects duplicate usernames regardless of the discarded entry's type", () => {
  const validEntry =
    '{"openCollectiveProfileUrl":"https://opencollective.com/alice"}'
  for (const discardedEntry of [
    "null",
    "false",
    "42",
    '"text"',
    "[]",
    "{}",
    validEntry,
  ]) {
    for (const duplicateKey of ["alice", "ALICE", "\\u0061lice"]) {
      expect(() =>
        parseProfiles(
          `{"alice":${discardedEntry},"${duplicateKey}":${validEntry}}`,
        ),
      ).toThrow("Duplicate GitHub username")
      expect(() =>
        parseProfiles(
          `{"alice":${validEntry},"${duplicateKey}":${discardedEntry}}`,
        ),
      ).toThrow("Duplicate GitHub username")
    }
  }
})

test("rejects escaped duplicate profile fields before parsing discards them", () => {
  expect(() =>
    parseProfiles(
      '{"alice":{"openCollectiveProfileUrl":null,"\\u006fpenCollectiveProfileUrl":"https://opencollective.com/alice"}}',
    ),
  ).toThrow("Duplicate JSON profile field")
})

test("key scanner leaves string contents and unrelated object scopes intact", () => {
  expect(() =>
    parseProfiles(JSON.stringify({ alice: profile(null), bob: profile(null) })),
  ).not.toThrow()
  expect(() =>
    parseProfiles(
      JSON.stringify({ alice: profile('text with "alice":{} and [braces]') }),
    ),
  ).toThrow("Invalid Open Collective profile URL")
})
