export interface IssueNotificationItem {
  number: number
  title: string
  html_url: string
  user: {
    login: string
  }
  created_at?: string
}

export const DISCORD_MAX_CONTENT_LENGTH = 2000

export function formatIssueLine(issue: IssueNotificationItem): string {
  return `• #${issue.number} ${issue.title} by ${issue.user.login} - <${issue.html_url}>`
}

/**
 * Splits a list of issues into bounded Discord message chunks (<= maxLength characters, default 2000),
 * preserving complete lines and avoiding payload rejections.
 */
export function chunkDiscordIssueNotification(
  issues: IssueNotificationItem[],
  repo: string,
  maxLength: number = DISCORD_MAX_CONTENT_LENGTH,
): string[] {
  if (!issues || issues.length === 0) return []

  const chunks: string[] = []
  let isFirst = true
  let currentHeader = `New issues in ${repo}:\n`
  let currentChunk = currentHeader

  for (const issue of issues) {
    let line = formatIssueLine(issue)
    const continuationHeader = `New issues in ${repo} (cont.):\n`
    const maxAllowedLineLength =
      maxLength - (isFirst ? currentHeader.length : continuationHeader.length)

    // Truncate excessively long individual issue line if it would never fit
    if (line.length > maxAllowedLineLength && maxAllowedLineLength > 30) {
      const prefix = `• #${issue.number} `
      const suffix = `... by ${issue.user.login} - <${issue.html_url}>`
      const charsForTitle = Math.max(
        10,
        maxAllowedLineLength - prefix.length - suffix.length,
      )
      // Use Array.from to avoid splitting UTF-16 surrogate pairs (e.g. emojis)
      const safeTitle = Array.from(issue.title).slice(0, charsForTitle).join("")
      line = `${prefix}${safeTitle}${suffix}`
    }

    const potentialChunk =
      currentChunk === currentHeader
        ? `${currentChunk}${line}`
        : `${currentChunk}\n${line}`

    if (potentialChunk.length <= maxLength) {
      currentChunk = potentialChunk
    } else {
      if (currentChunk !== currentHeader) {
        chunks.push(currentChunk)
      }
      isFirst = false
      currentHeader = continuationHeader
      currentChunk = `${currentHeader}${line}`
    }
  }

  if (currentChunk.trim().length > 0 && currentChunk !== currentHeader) {
    chunks.push(currentChunk)
  }

  return chunks
}
