import { Octokit } from "@octokit/rest"
import Anthropic from "@anthropic-ai/sdk"

export const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN })
export const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
})
