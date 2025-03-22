import { anthropic } from "lib/sdks"
import filterDiff from "lib/data-processing/filterDiff"
import type { MergedPullRequest } from "lib/types"
import type { AnalyzedPR } from "lib/types"
import {
  CURRENT_MILESTONE,
  type Milestone,
} from "../../shared/types/milestones"

export function isPRAlignedWithMilestone(
  pr: { title: string; body: string; diff: string },
  milestone: Milestone,
): boolean {
  const content = `${pr.title} ${pr.body} ${pr.diff}`.toLowerCase()
  return milestone.keywords.some((keyword: string) =>
    content.includes(keyword.toLowerCase()),
  )
}

export async function analyzePRWithClaude(
  pr: MergedPullRequest,
  repo: string,
): Promise<AnalyzedPR> {
  try {
    const reducedDiff = filterDiff(pr.diff)

    // First check if PR aligns with milestone using keyword matching
    const milestoneAlignment = isPRAlignedWithMilestone(pr, CURRENT_MILESTONE)

    // If not in cache, perform the analysis
    const prompt = `Analyze the following pull request and provide a one-line description of the change. Also, classify the impact as "Major", "Minor", or "Tiny".

Major Impact: Introduces a huge feature, fixes a critical or difficult bug. Generally difficult to implement. The PR has a relation to circuit boards, electronics, electronic design automation tooling, footprints, bill of materials, electronic design format, PCB design, autorouters.
Minor Impact: Bug fixes, simple feature additions, small improvements. Typically more than 50 lines of code changes. Adding a new symbol. The PR has a relation to circuit boards, electronics, electronic design automation tooling, footprints, bill of materials, electronic design format, PCB design, autorouters.

Tiny Impact: Minor documentation changes, typo fixes, small cosmetic fixes, updates to dependencies.
Also Tiny Impact: The PR has NO RELATION to circuit boards, electronics, electronic design automation tooling, footprints, bill of materials, electronic design format, PCB design, autorouters.

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

    return {
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
      milestoneAlignment,
    }
  } catch (error) {
    return {
      number: pr.number,
      title: pr.title,
      description: "",
      impact: "Minor",
      contributor: pr.user.login,
      repo,
      url: pr.html_url,
      milestoneAlignment: false,
    }
  }
}
