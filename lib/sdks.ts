import { CachedAnthropic } from "./cachedAnthropic"
import { CachedOctokit } from "./cachedOctokit"

export const octokit = new CachedOctokit({ auth: process.env.GITHUB_TOKEN })
export const anthropic = new CachedAnthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
})
