import { anthropic } from "./sdks"
import filterDiff from "./filterDiff"
import type { MergedPullRequest } from "lib/types"
import type { AnalyzedPR } from "./types"
export async function analyzePRWithClaude(
  pr: MergedPullRequest,
  repo: string,
): Promise<AnalyzedPR> {
  try {
    const reducedDiff = filterDiff(pr.diff)

    // If not in cache, perform the analysis
    const prompt = `Analyze the following pull request and provide a one-line description of the change. Also, classify the impact as "Major", "Minor", or "Tiny".

Major Impact: Introduces a huge feature, fixes a critical or difficult bug. Generally difficult to implement.
Minor Impact: Bug fixes, simple feature additions, small improvements. Typically more than 100 lines of code changes. Adding a new symbol.
Tiny Impact: Minor documentation changes, typo fixes, small cosmetic fixes, updates to dependencies.

Title: ${pr.title}
Body: ${pr.body}
Diff:
${reducedDiff.slice(0, 8000)}

Response format:
Description: [One-line description]
Impact: [Major/Minor/Tiny]`

    const message = await anthropic.messages.create({
      model: "claude-3-haiku-20240307",
      max_tokens: 1000,
      messages: [{ role: "user", content: prompt }],
    })

    // @ts-ignore
    const content = message.content[0].text
    const description =
      content.split("Description:")?.[1]?.split("Impact:")[0] ?? ""
    const impact = content.split("Impact:")?.[1] ?? ""

    const analysis: AnalyzedPR = {
      number: pr.number,
      title: pr.title,
      description: description.replace("Description: ", "").trim(),
      impact: impact?.replace("Impact: ", "")?.trim() as
        | "Major"
        | "Minor"
        | "Tiny",
      contributor: pr.user.login,
      repo,
      url: pr.html_url,
    }

    // Analysis complete

    return analysis
  } catch (error) {
    throw new Error(`Error analyzing PR: ${error}`)
  }
}
