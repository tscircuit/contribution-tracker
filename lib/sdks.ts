import Anthropic from "@anthropic-ai/sdk"
import { CachedOctokit } from "./cachedOctokit"

export const octokit = new CachedOctokit({ auth: process.env.GITHUB_TOKEN })
export const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
})
