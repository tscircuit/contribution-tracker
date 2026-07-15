import { getCanonicalUsername } from "./contributor-aliases"
import { scoreToStarString } from "./scoring/scoreToStars"

type StatRecord = Record<string, unknown>

/**
 * Combines the per-week stats of two accounts: numbers are summed, arrays
 * concatenated, and any other field keeps the first value seen. Used to merge a
 * contributor's old login into their current one.
 */
export function combineStats(a: StatRecord, b: StatRecord): StatRecord {
  const out: StatRecord = { ...a }
  for (const key of Object.keys(b)) {
    const prev = out[key]
    const next = b[key]
    if (typeof prev === "number" && typeof next === "number") {
      out[key] = prev + next
    } else if (Array.isArray(prev) && Array.isArray(next)) {
      out[key] = [...prev, ...next]
    } else if (prev === undefined) {
      out[key] = next
    }
  }
  return out
}

/**
 * Collapses aliased logins (see contributor-aliases) into their canonical login,
 * summing stats and recomputing the star string from the combined score. The
 * result is order-independent for the numeric/array fields.
 */
export function mergeAliasedContributors(
  raw: Record<string, StatRecord>,
): Record<string, StatRecord> {
  const merged: Record<string, StatRecord> = {}
  const wasMerged = new Set<string>()
  for (const [username, stats] of Object.entries(raw)) {
    const canonical = getCanonicalUsername(username)
    const current = merged[canonical]
    if (!current) {
      merged[canonical] = { ...stats }
      continue
    }
    merged[canonical] = combineStats(current, stats)
    wasMerged.add(canonical)
  }
  for (const canonical of wasMerged) {
    merged[canonical].stars = scoreToStarString(
      (merged[canonical].score as number) ?? 0,
    )
  }
  return merged
}
