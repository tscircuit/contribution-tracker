export const MATCHING_MONTH = "2026-09"

export type GithubUsername = string

export interface SponsorshipRow {
  username: GithubUsername
  amountCents: number
  remarks: string
}

/** Inspect keys while their occurrences are still present in the raw JSON.
 * Strings are consumed as whole tokens, so braces and key-like text in string
 * contents cannot affect nesting. JSON.parse subsequently validates the grammar.
 */
function requireUniqueJsonKeys(source: string): void {
  const containers: Array<{ kind: "object" | "array"; keys: Set<string> }> = []
  for (let position = 0; position < source.length; position++) {
    const character = source[position]
    if (character === "{" || character === "[") {
      containers.push({
        kind: character === "{" ? "object" : "array",
        keys: new Set(),
      })
    } else if (character === "}" || character === "]") {
      containers.pop()
    } else if (character === '"') {
      const start = position++
      while (position < source.length) {
        if (source[position] === "\\") position += 2
        else if (source[position] === '"') break
        else position++
      }
      const decodedString: string = JSON.parse(
        source.slice(start, position + 1),
      )
      let nextPosition = position + 1
      while (
        /\s/.test(source[nextPosition] ?? "") &&
        nextPosition < source.length
      )
        nextPosition++
      const container = containers.at(-1)
      if (source[nextPosition] !== ":" || container?.kind !== "object") continue
      const key =
        containers.length === 1 ? decodedString.toLowerCase() : decodedString
      if (container.keys.has(key)) {
        throw new Error(
          containers.length === 1
            ? "Duplicate GitHub username"
            : "Duplicate JSON profile field",
        )
      }
      container.keys.add(key)
    }
  }
}

export function parseProfiles(
  source: string,
): Map<GithubUsername, string | null> {
  requireUniqueJsonKeys(source)
  const parsedProfiles = JSON.parse(source)
  if (
    !parsedProfiles ||
    Array.isArray(parsedProfiles) ||
    typeof parsedProfiles !== "object"
  ) {
    throw new Error("Profiles must be an object")
  }
  const profilesByUsername = new Map<GithubUsername, string | null>()
  const recipients = new Set<string>()
  for (const [username, entry] of Object.entries(parsedProfiles)) {
    if (!/^[a-z\d](?:[a-z\d-]{0,37}[a-z\d])?$/i.test(username)) {
      throw new Error(`Invalid GitHub username: ${username}`)
    }
    if (
      !entry ||
      typeof entry !== "object" ||
      Array.isArray(entry) ||
      Object.keys(entry).length !== 1 ||
      !("openCollectiveProfileUrl" in entry)
    ) {
      throw new Error(`Invalid profile entry for ${username}`)
    }
    const url = (entry as { openCollectiveProfileUrl: unknown })
      .openCollectiveProfileUrl
    let canonical: string | null = null
    if (url !== null) {
      if (
        typeof url !== "string" ||
        !/^https:\/\/opencollective\.com\/[a-z\d][a-z\d-]*\/?$/i.test(url)
      ) {
        throw new Error(`Invalid Open Collective profile URL for ${username}`)
      }
      canonical = url.toLowerCase().replace(/\/$/, "")
      if (recipients.has(canonical))
        throw new Error(`Duplicate Open Collective recipient: ${canonical}`)
      recipients.add(canonical)
    }
    profilesByUsername.set(username.toLowerCase(), canonical)
  }
  return profilesByUsername
}

export function parseSponsorshipCsv(source: string): SponsorshipRow[] {
  // Parse quoted fields, escaped quotes, CRLF, and commas inside remarks.
  const rows: string[][] = []
  let row: string[] = [],
    field = "",
    quoted = false,
    closed = false
  for (let i = 0; i < source.length; i++) {
    const char = source[i]
    if (quoted) {
      if (char === '"') {
        if (source[i + 1] === '"') {
          field += '"'
          i++
        } else {
          quoted = false
          closed = true
        }
      } else field += char
    } else if (char === '"') {
      if (field || closed) throw new Error("Malformed CSV quote")
      quoted = true
    } else if (char === ",") {
      row.push(field)
      field = ""
      closed = false
    } else if (char === "\n" || char === "\r") {
      if (char === "\r" && source[i + 1] === "\n") i++
      row.push(field)
      rows.push(row)
      row = []
      field = ""
      closed = false
    } else {
      if (closed) throw new Error("Unexpected text after CSV quote")
      field += char
    }
  }
  if (quoted) throw new Error("Unterminated CSV quote")
  if (field || row.length || closed) {
    row.push(field)
    rows.push(row)
  }
  const header = rows.shift()
  if (
    header?.join(",") !==
    "Maintainer username,Sponsorship amount in USD,REMARKS"
  ) {
    throw new Error("Unexpected sponsorship CSV header")
  }
  const seen = new Set<string>()
  return rows.map((fields) => {
    if (fields.length !== 3) throw new Error("Expected three CSV fields")
    const [username, amount, remarks] = fields
    if (!/^[a-z\d](?:[a-z\d-]{0,37}[a-z\d])?$/i.test(username))
      throw new Error("Invalid sponsorship username")
    const key = username.toLowerCase()
    if (seen.has(key)) throw new Error("Duplicate sponsorship username")
    seen.add(key)
    if (!/^\d+(?:\.\d{1,2})?$/.test(amount))
      throw new Error("Invalid sponsorship amount")
    const [dollars, fraction = ""] = amount.split(".")
    const amountCents = Number(dollars) * 100 + Number(fraction.padEnd(2, "0"))
    if (!Number.isSafeInteger(amountCents) || amountCents <= 0)
      throw new Error("Invalid sponsorship amount")
    return { username, amountCents, remarks }
  })
}

export function historicalGithubId(
  username: string,
  overviews: Record<string, { githubLogin?: string; githubId?: number }>[],
): number {
  const ids = new Set<number>()
  for (const overview of overviews) {
    for (const [key, stats] of Object.entries(overview)) {
      if ((stats.githubLogin ?? key).toLowerCase() !== username.toLowerCase())
        continue
      if (!Number.isSafeInteger(stats.githubId) || stats.githubId! <= 0)
        throw new Error(`Missing historical GitHub ID for ${username}`)
      ids.add(stats.githubId!)
    }
  }
  if (ids.size !== 1)
    throw new Error(
      `Missing or ambiguous historical GitHub identity: ${username}`,
    )
  return [...ids][0]
}

export function requireGithubIdentity({
  username,
  expectedId,
  current,
}: {
  username: GithubUsername
  expectedId: number
  current: { id: number; login: string }
}) {
  if (
    current.id !== expectedId ||
    current.login.toLowerCase() !== username.toLowerCase()
  ) {
    throw new Error(
      `GitHub identity changed for ${username}; review the mapping before proceeding`,
    )
  }
}
