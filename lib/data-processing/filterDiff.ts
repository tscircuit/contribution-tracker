import parseDiff from "parse-diff"

const filesToExclude = ["package-lock.json", "bun.lockb", "bun.lock"]

function isLimitedFile(filename: string | undefined): boolean {
  if (!filename) return false
  return filename.endsWith(".json") || filename.endsWith(".svg")
}

export function filterDiff(diffContent: string): string {
  // Parse the diff content
  const files = parseDiff(diffContent)

  // Filter out the excluded files
  const filteredFiles = files.filter(
    (file) => file.to && !filesToExclude.includes(file.to),
  )

  // Reconstruct the diff content
  let result = ""

  for (const file of filteredFiles) {
    result += `diff --git a/${file.from} b/${file.to}\n`
    if (file.index) result += `index ${file.index}\n`
    if (file.deleted) {
      result += `--- a/${file.from}\n`
      result += "+++ /dev/null\n"
    } else if (file.new) {
      result += "--- /dev/null\n"
      result += `+++ b/${file.to}\n`
    } else {
      result += `--- a/${file.from}\n`
      result += `+++ b/${file.to}\n`
    }

    for (const chunk of file.chunks) {
      result += `@@ -${chunk.oldStart},${chunk.oldLines} +${chunk.newStart},${chunk.newLines} @@\n`
      for (const change of chunk.changes) {
        if (isLimitedFile(file.to)) {
          // Limit content to 100 characters for .json or .svg files
          let content = change.content
          if (content.length > 100) {
            content = content.slice(0, 100) + "…"
          }
          result += change.type + content + "\n"
        } else {
          result += change.type + change.content + "\n"
        }
      }
    }
  }

  return result.trim()
}

export default filterDiff
