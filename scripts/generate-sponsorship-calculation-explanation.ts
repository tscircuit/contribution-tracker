import * as fs from "fs"
import { generateSponsorshipExplanationMarkdown } from "lib/data-processing/generateSponsorshipExplanationMarkdown"

const outputPath = "docs/sponsorship-calculation-explanation.md"

fs.mkdirSync("docs", { recursive: true })
fs.writeFileSync(outputPath, generateSponsorshipExplanationMarkdown())
console.log(`Generated ${outputPath}`)
