import { CachedAnthropic } from "lib/ai/cachedAnthropic"
import { CachedOctokit } from "lib/data-retrieval/cachedOctokit"

// Use TSCIRCUIT_BOT_TOKEN if available for org-wide access, fallback to GITHUB_TOKEN
const githubToken = process.env.TSCIRCUIT_BOT_TOKEN || process.env.GITHUB_TOKEN

export const octokit = new CachedOctokit({ auth: githubToken })

/**
 * @deprecated
 */
export const anthropic = new CachedAnthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
})
