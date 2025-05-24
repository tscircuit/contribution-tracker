import { CachedAnthropic } from "lib/ai/cachedAnthropic"
import { CachedOctokit } from "lib/data-retrieval/cachedOctokit"

export const octokit = new CachedOctokit({ auth: process.env.GITHUB_TOKEN })

/**
 * @deprecated
 */
export const anthropic = new CachedAnthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
})
