import fs from "node:fs"
import path from "node:path"
import { z } from "zod"
import { generateAiObjectCached } from "../lib/ai-stuff/sdk"
import { openai } from "@ai-sdk/openai"

const GUIDELINES = [
  "Ignore PRs that are vague",
  "Ignore PRs that update dependencies",
  "PRs that state clearly an end-user behavior change should be included",
  "PRs that don't mention specific, identifiable changes should be ignored",
  'Anything with a vague notion of "enhancement" should be ignored',
  "Link to PRs in markdown, e.g. [#123](https://github.com/tscircuit/pcb-viewer/pull/123)",
  `Output regular markdown, use "-" for bullet points`,
]

async function main() {
  const today = new Date()
  const year = today.getUTCFullYear()
  const month = today.getUTCMonth() + 1

  const prDir = path.join(process.cwd(), "pr-analysis")
  const files = fs
    .readdirSync(prDir)
    .filter((f) => f.endsWith(".json"))
    .filter((f) => {
      const d = new Date(f.replace(/\.json$/, ""))
      return d.getUTCFullYear() === year && d.getUTCMonth() + 1 === month
    })
    .sort()

  if (files.length === 0) {
    console.log(`No PR analysis found for ${year}-${month}`)
    return
  }

  const summaries: string[] = []
  const prMap = new Map<number, Array<{ repo: string; url: string }>>()

  for (const file of files) {
    const prs = JSON.parse(fs.readFileSync(path.join(prDir, file), "utf8"))
    for (const pr of prs) {
      summaries.push(`- ${pr.repo} #${pr.number}: ${pr.title}`)
      // Store PR number to repo/url mapping (handle collisions across repos)
      if (!prMap.has(pr.number)) {
        prMap.set(pr.number, [])
      }
      prMap.get(pr.number).push({ repo: pr.repo, url: pr.url })
    }
  }

  const prompt = `Create a concise bullet point changelog highlighting the key pull requests from ${year}-${month.toString().padStart(2, "0")}.\n${summaries.join("\n")}\n\n##Guidelines: ${GUIDELINES.map((g) => `- ${g}`).join("\n")}`

  const schema = z.object({ changelog: z.string() })
  const { object } = await generateAiObjectCached({
    schema,
    prompt,
    model: openai("o3"),
  })

  const outDir = path.join(process.cwd(), "changelogs")
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir)

  const filePath = path.join(
    outDir,
    `${year}-${month.toString().padStart(2, "0")}.md`,
  )
  let formatted = object.changelog
    .replace(/^•\s+/gm, "- ")
    .replace(/^\*\s+/gm, "- ")
    .trim()

  // Post-process to add proper PR links
  // Convert all #123 references to markdown links [#123](url)
  formatted = formatted.replace(
    /#(\d+)/g,
    (match: string, prNumber: string) => {
      const num = Number.parseInt(prNumber, 10)
      const prInfos = prMap.get(num)
      if (!prInfos || prInfos.length === 0) {
        return match // Keep original if not found
      }
      // If there's only one PR with this number, use it
      if (prInfos.length === 1) {
        return `[#${prNumber}](${prInfos[0].url})`
      }
      // Multiple PRs with same number across repos - try to detect context
      // For now, use the first one but log a warning
      console.warn(
        `Warning: PR #${prNumber} exists in multiple repos: ${prInfos.map((p) => p.repo).join(", ")}`,
      )
      return `[#${prNumber}](${prInfos[0].url})`
    },
  )

  fs.writeFileSync(
    filePath,
    `# Changelog ${year}-${month.toString().padStart(2, "0")}\n\n${formatted}\n`,
  )
  console.log(`Updated ${filePath}`)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
