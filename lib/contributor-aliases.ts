/**
 * Maps a contributor's old GitHub login to their current (canonical) login.
 *
 * When someone renames their GitHub account, older PRs, weekly overviews and
 * cached PR analyses keep the old login while new data uses the new one, so the
 * tracker counts them as two separate contributors. Add an entry here
 * (old login -> current login) to merge the two identities everywhere they are
 * aggregated (overview tables, PRs by contributor, sponsorship totals).
 */
export const CONTRIBUTOR_ALIASES: Record<string, string> = {
  "technologyet31-create": "abdalraof-albarbar",
}

/** Returns the canonical login for a username, or the username itself. */
export const getCanonicalUsername = (username: string): string =>
  CONTRIBUTOR_ALIASES[username] ?? username
