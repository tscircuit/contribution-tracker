import parseDiff from "parse-diff"

export function filterDiff(diffContent: string): string {
  const filesToExclude = ["package-lock.json", "bun.lockb", "bun.lock"]

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
        result += change.type + change.content + "\n"
      }
    }
  }

  return result.trim()
}

export default filterDiff
