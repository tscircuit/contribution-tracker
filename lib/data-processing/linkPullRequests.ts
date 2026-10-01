export interface PullRequestDetail {
  repo: string
  url: string
  title?: string
}

/**
 * Links pull request references in a changelog markdown string to their respective GitHub URLs.
 * Handles:
 * - Full references: `tscircuit/core #123` or `tscircuit/core#123`
 * - Short references: `core#123`, `props#123`
 * - Bare references: `#123`
 *
 * Avoids breaking already-linked markdown `[...](...)`.
 */
export function linkPullRequests(
  changelogText: string,
  prMap: Map<string, PullRequestDetail>,
  prByNum?: Map<number, PullRequestDetail[]>,
): string {
  const byNum =
    prByNum ??
    (() => {
      const map = new Map<number, PullRequestDetail[]>()
      for (const [key, detail] of prMap.entries()) {
        const hashIdx = key.indexOf("#")
        if (hashIdx !== -1) {
          const num = parseInt(key.slice(hashIdx + 1), 10)
          if (!Number.isNaN(num)) {
            if (!map.has(num)) map.set(num, [])
            map.get(num)!.push(detail)
          }
        }
      }
      return map
    })()

  return changelogText
    .split("\n")
    .map((line) => {
      // Find all existing markdown links [text](url) to protect them from replacement
      const protectedRanges: Array<{ start: number; end: number }> = []
      const linkRegex = /\[[^\]]+\]\([^)]+\)/g
      let match: RegExpExecArray | null

      while ((match = linkRegex.exec(line)) !== null) {
        protectedRanges.push({
          start: match.index,
          end: match.index + match[0].length,
        })
      }

      const isInsideProtectedRange = (idx: number, len: number) => {
        const end = idx + len
        return protectedRanges.some(
          (range) =>
            (idx >= range.start && idx < range.end) ||
            (end > range.start && end <= range.end),
        )
      }

      // 1. Convert full repo #123 or repo#123 references to markdown links: [repo #123](url)
      let l = line.replace(
        /([\w.-]+\/[\w.-]+)\s*#(\d+)/g,
        (m, repo, prNumber, offset) => {
          if (isInsideProtectedRange(offset, m.length)) return m
          const key = `${repo}#${prNumber}`
          const pullRequestDetails = prMap.get(key)
          if (!pullRequestDetails) {
            return m
          }
          return `[${repo} #${prNumber}](${pullRequestDetails.url})`
        },
      )

      // Recompute protected ranges after step 1
      protectedRanges.length = 0
      linkRegex.lastIndex = 0
      while ((match = linkRegex.exec(l)) !== null) {
        protectedRanges.push({
          start: match.index,
          end: match.index + match[0].length,
        })
      }

      // 2. Convert short repo#123 or short-repo #123 references (e.g. core#1443, pcb-viewer#378)
      l = l.replace(
        /(?<![\w\/-])([\w.-]+)\s*#(\d+)/g,
        (m, shortRepo, prNumber, offset) => {
          if (isInsideProtectedRange(offset, m.length)) return m
          const candidates = [
            `${shortRepo}#${prNumber}`,
            `tscircuit/${shortRepo}#${prNumber}`,
          ]
          for (const cand of candidates) {
            const pullRequestDetails = prMap.get(cand)
            if (pullRequestDetails) {
              return `[${shortRepo}#${prNumber}](${pullRequestDetails.url})`
            }
          }
          return m
        },
      )

      // Recompute protected ranges after step 2
      protectedRanges.length = 0
      linkRegex.lastIndex = 0
      while ((match = linkRegex.exec(l)) !== null) {
        protectedRanges.push({
          start: match.index,
          end: match.index + match[0].length,
        })
      }

      // 3. Convert bare #123 references that are not already inside markdown links
      l = l.replace(/(?<!\w)#(\d+)/g, (m, prNumber, offset) => {
        if (isInsideProtectedRange(offset, m.length)) return m
        const num = parseInt(prNumber, 10)
        const candidates = byNum.get(num)
        if (!candidates || candidates.length === 0) return m

        // If only 1 candidate, use it directly
        if (candidates.length === 1) {
          return `[#${prNumber}](${candidates[0].url})`
        }

        // Match based on repo name appearing anywhere in the line
        const lowerLine = line.toLowerCase()
        for (const c of candidates) {
          const short = c.repo.replace("tscircuit/", "").toLowerCase()
          if (lowerLine.includes(short)) {
            return `[#${prNumber}](${c.url})`
          }
        }

        // Context keyword heuristics
        if (
          lowerLine.includes("autorout") &&
          candidates.some(
            (c) => c.repo.includes("autorouter") || c.repo.includes("core"),
          )
        ) {
          const best =
            candidates.find((c) => c.repo.includes("core")) || candidates[0]
          return `[#${prNumber}](${best.url})`
        }

        if (
          lowerLine.includes("voltage") &&
          candidates.some(
            (c) =>
              c.repo.includes("circuit-json") ||
              c.repo.includes("props") ||
              c.repo.includes("core"),
          )
        ) {
          const best =
            candidates.find(
              (c) =>
                c.repo.includes("circuit-json") ||
                c.repo.includes("props") ||
                c.repo.includes("core"),
            ) || candidates[0]
          return `[#${prNumber}](${best.url})`
        }

        return `[#${prNumber}](${candidates[0].url})`
      })

      return l
    })
    .join("\n")
}
