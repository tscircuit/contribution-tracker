export function filterDiff(diff: string): string {
  if (!diff || typeof diff !== "string") {
    return "No diff available"
  }

  const lines = diff.split("\n")
  const filteredLines: string[] = []
  let skipFile = false
  let hasValidContent = false

  for (const line of lines) {
    if (line.startsWith("diff --git")) {
      const fileName = line.split(" ")[3]?.replace("b/", "") || ""
      skipFile =
        fileName.endsWith(".svg") ||
        fileName.endsWith(".lock") ||
        fileName.includes("package-lock.json") ||
        fileName.includes("yarn.lock") ||
        fileName.includes("pnpm-lock.yaml")

      if (!skipFile) {
        hasValidContent = true
      }
    }

    if (!skipFile) {
      filteredLines.push(line)
    }
  }

  const result = filteredLines.join("\n").trim()

  if (!result || !hasValidContent) {
    return "Changes only in non-code files (SVG, lock files, etc.)"
  }

  return result
}
