import { anthropic } from "lib/sdks"
import filterDiff from "lib/data-processing/filterDiff"
import type { MergedPullRequest } from "lib/types"
import type { AnalyzedPR } from "lib/types"
import {
  CURRENT_MILESTONE,
  type Milestone,
} from "../../shared/types/milestones"

/**
 * @deprecated
 */
export async function checkMilestoneAlignment(
  pr: MergedPullRequest,
): Promise<boolean> {
  try {
    const prompt = `Analyze if this pull request aligns with the current milestone:
Title: ${pr.title}
Body: ${pr.body}
Diff: ${pr.diff.slice(0, 8000)}

Current Milestone:
Name: ${CURRENT_MILESTONE.name}
Description: ${CURRENT_MILESTONE.description}
Keywords: ${CURRENT_MILESTONE.keywords.join(", ")}

Determine if this PR aligns with the current milestone's goals and objectives. Consider:
1. Does the PR directly contribute to the milestone's main objective?
2. Is the PR's scope and impact relevant to the milestone?
3. Does the PR's content match the milestone's focus area?

Respond with only "true" or "false".`

    const message = await anthropic.messages.create({
      model: "claude-3-haiku-20240307",
      max_tokens: 100,
      messages: [{ role: "user", content: prompt }],
    })

    // @ts-ignore
    const content = message.content[0].text.trim().toLowerCase()
    return content === "true"
  } catch (error) {
    console.error("Error checking milestone alignment:", error)
    return false
  }
}

/**
 * @deprecated
 */
export async function analyzePRWithClaude(
  pr: MergedPullRequest,
  repo: string,
): Promise<AnalyzedPR> {
  try {
    const reducedDiff = filterDiff(pr.diff)
    const isAlignedWithMilestone = await checkMilestoneAlignment(pr)

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
      impact: impact?.replace("Impact: ", "")?.trim().split(/\s+/)[0] as
        | "Major"
        | "Minor"
        | "Tiny",
      contributor: pr.user.login,
      repo,
      url: pr.html_url,
      isAlignedWithMilestone,
    }
  } catch (error) {
    return {
      number: pr.number,
      title: pr.title,
      description: "",
      impact: "Minor" as const,
      contributor: pr.user.login,
      repo,
      url: pr.html_url,
      isAlignedWithMilestone: false,
    }
  }
}
