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
  for (const file of files) {
    const prs = JSON.parse(fs.readFileSync(path.join(prDir, file), "utf8"))
    for (const pr of prs) {
      summaries.push(`- ${pr.repo} #${pr.number}: ${pr.title}`)
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
  const formatted = object.changelog
    .replace(/^•\s+/gm, "- ")
    .replace(/^\*\s+/gm, "- ")
    .trim()
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
