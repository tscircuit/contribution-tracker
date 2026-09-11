/** Discord webhook `content` max length. */
export const DISCORD_CONTENT_LIMIT = 2000

export function splitDiscordContent(
  content: string,
  limit = DISCORD_CONTENT_LIMIT,
): string[] {
  if (content.length === 0) return []
  const chunks: string[] = []
  let remaining = content

  while (remaining.length > limit) {
    const window = remaining.slice(0, limit)
    const lastNewline = window.lastIndexOf("\n")
    let take = limit
    if (lastNewline > 0) {
      take = lastNewline + 1
    } else {
      const lastCode = window.charCodeAt(window.length - 1)
      if (lastCode >= 0xd800 && lastCode <= 0xdbff) {
        take = limit - 1
      }
    }
    if (take <= 0) take = 1
    chunks.push(remaining.slice(0, take))
    remaining = remaining.slice(take)
  }

  if (remaining.length > 0) chunks.push(remaining)
  return chunks
}

export function buildIssueNotificationContent(
  repo: string,
  issues: Array<{
    number: number
    title: string
    html_url: string
    user: { login: string }
  }>,
): string {
  return (
    `New issues in ${repo}:\n` +
    issues
      .map(
        (issue) =>
          `• #${issue.number} ${issue.title} by ${issue.user.login} - <${issue.html_url}>`,
      )
      .join("\n")
  )
}
