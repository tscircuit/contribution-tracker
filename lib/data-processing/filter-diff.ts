export function filterDiff(diff: string): string {
  if (!diff || typeof diff !== "string") return "No diff available"
  const sections = diff
    .split(/(?=^diff --git )/m)
    .filter((section) => section.startsWith("diff --git "))
  const artifacts: string[] = []
  const tests: string[] = []
  const implementation: string[] = []
  const fixtures: string[] = []
  for (const section of sections) {
    const filename =
      section.split("\n", 1)[0].split(" ")[3]?.replace(/^b\//, "") ?? ""
    if (
      /\.lock$|(^|\/)(package-lock\.json|yarn\.lock|pnpm-lock\.yaml)$/.test(
        filename,
      )
    )
      continue
    if (/\.(svg|png|jpe?g|webp)$/.test(filename)) {
      artifacts.push(
        `[Visual artifact changed: ${filename}; content omitted. A path alone is not proof of regression coverage.]`,
      )
    } else if (
      /\.(test|spec|pw)\.[jt]sx?$/.test(filename) ||
      /(^|\/)(tests?|playwright|bun-tests)\/.*\.[jt]sx?$/.test(filename)
    ) {
      tests.push(section)
    } else if (
      section.length > 4000 &&
      /(^|\/)(fixtures?|assets|repros?)\/|\.json$/.test(filename)
    ) {
      fixtures.push(
        section.slice(0, 4000) +
          `\n[Large fixture ${filename} excerpt shortened; refer to its test assertions for the regression.]\n`,
      )
    } else {
      implementation.push(section)
    }
  }
  // Make the test assertions and snapshot paths visible before large data dumps
  // can exhaust the evaluator's normal prompt limit.
  return (
    [...artifacts, ...tests, ...implementation, ...fixtures]
      .join("\n")
      .trim() || "Changes only in lock files or no diff available"
  )
}

/** A model must not treat an unambiguously test-only diff as production code. */
export function hasOnlySupportingFileChanges(diff: string): boolean {
  const paths = [...diff.matchAll(/^diff --git a\/.*? b\/(.+)$/gm)].map(
    (match) => match[1],
  )
  paths.push(
    ...[...diff.matchAll(/^\[Visual artifact changed: (.+?);/gm)].map(
      (match) => match[1],
    ),
  )
  return (
    paths.length > 0 &&
    paths.every((filename) =>
      /(^|\/)(tests?|__tests__|__snapshots__|fixtures?|examples?|stories|demos?|docs?|\.github)(\/|$)|\.(test|spec|pw)\.[jt]sx?$|\.(md|mdx)$/.test(
        filename,
      ),
    )
  )
}

/** Dependency adoption plus supporting tests/snapshots is still dependency work. */
export function isDependencyOnlyDiff(diff: string): boolean {
  for (const artifact of diff.matchAll(
    /^\[Visual artifact changed: .+?;.*$/gm,
  )) {
    if (!hasOnlySupportingFileChanges(artifact[0])) return false
  }
  const sections = diff
    .split(/(?=^diff --git )/m)
    .filter((section) => section.startsWith("diff --git "))
  const packages: string[] = []
  for (const section of sections) {
    const filename =
      section.split("\n", 1)[0].split(" ")[3]?.replace(/^b\//, "") ?? ""
    if (/(^|\/)package\.json$/.test(filename)) packages.push(section)
    else if (
      !hasOnlySupportingFileChanges(section) &&
      !/\.lock$|type-bundles\/.*\.d\.ts$/.test(filename)
    )
      return false
  }
  if (!packages.length) return false
  let changedVersion = false
  for (const section of packages) {
    for (const line of section.split("\n")) {
      if (!/^[+-]/.test(line) || /^\+\+\+|^---/.test(line)) continue
      const content = line.slice(1).trim()
      if (
        /^[{},\[\]\s]*$/.test(content) ||
        /^"(dependencies|devDependencies|peerDependencies|optionalDependencies|overrides|resolutions)"\s*:/.test(
          content,
        )
      )
        continue
      const entry = content.match(/^"[^"]+"\s*:\s*"([^"]+)"[,]?$/)
      if (
        !entry ||
        !/^(?:[~^<>=v\s]*\d|(?:git\+|https?:|github:|workspace:|file:)|latest$|next$|\*$)/.test(
          entry[1],
        )
      )
        return false
      changedVersion = true
    }
  }
  return changedVersion
}

export function hasRuntimeCodeChanges(diff: string): boolean {
  return [...diff.matchAll(/^diff --git a\/.*? b\/(.+)$/gm)].some((match) => {
    const filename = match[1]
    return (
      /\.[jt]sx?$/.test(filename) &&
      !/\.d\.ts$/.test(filename) &&
      !hasOnlySupportingFileChanges(match[0]) &&
      !/(^|\/)type-bundles\//.test(filename)
    )
  })
}

export function hasMatchingAutomatedVisualSnapshot(diff: string): boolean {
  const artifacts = [
    ...diff.matchAll(/^\[Visual artifact changed: (.+?);/gm),
  ].map((match) => match[1])
  for (const section of diff.split(/(?=^diff --git )/m)) {
    const filename =
      section.split("\n", 1)[0].split(" ")[3]?.replace(/^b\//, "") ?? ""
    if (
      !/\.(test|spec|pw)\.[jt]sx?$/.test(filename) ||
      !/\.toMatch(SolverSnapshot|GraphicsSvg|SvgSnapshot|InlineSnapshot)\s*\(/.test(
        section,
      )
    )
      continue
    const stem = filename
      .split("/")
      .at(-1)!
      .replace(/\.(test|spec|pw)\.[jt]sx?$/, "")
    if (
      artifacts.some(
        (artifact) =>
          artifact.split("/").at(-1)?.startsWith(`${stem}.`) ||
          artifact.split("/").at(-1)?.startsWith(`${stem}-`),
      )
    )
      return true
  }
  return false
}
