/**
 * Splits formatted issue or PR notification lines into multiple Discord message payloads
 * ensuring no single payload exceeds Discord's 2,000-character content limit.
 * Safe default maximum length: 1,950 characters.
 */
export function chunkDiscordMessages(
  header: string,
  lines: string[],
  maxLength = 1950,
): string[] {
  if (lines.length === 0) return []

  const chunks: string[] = []
  let currentChunk = header

  for (const line of lines) {
    // If a single line itself is longer than available buffer, truncate it safely with ellipsis
    const maxLineLength = maxLength - header.length - 10
    const formattedLine =
      line.length > maxLineLength
        ? `${line.slice(0, maxLineLength - 3)}...`
        : line

    // If adding this line would exceed the Discord limit, push the current chunk and start a new one
    if (currentChunk.length + formattedLine.length + 1 > maxLength) {
      if (currentChunk.trim().length > 0) {
        chunks.push(currentChunk.trim())
      }
      currentChunk = `${header}${formattedLine}\n`
    } else {
      currentChunk += `${formattedLine}\n`
    }
  }

  if (currentChunk.trim().length > 0) {
    chunks.push(currentChunk.trim())
  }

  return chunks
}
