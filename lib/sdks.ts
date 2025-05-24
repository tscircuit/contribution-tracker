import { CachedAnthropic } from "lib/ai/cachedAnthropic"
import { CachedOctokit } from "lib/data-retrieval/cachedOctokit"

export const octokit = new CachedOctokit({
  auth: "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",
})

export const anthropic = new CachedAnthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
})
