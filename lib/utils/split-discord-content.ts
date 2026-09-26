/**
 * Discord rejects webhook payloads whose `content` exceeds 2,000 characters.
 * Notifications that list every new issue can easily pass that limit, so the
 * content has to be split before it is sent.
 *
 * @see https://discord.com/developers/docs/resources/webhook
 */
export const DISCORD_MAX_CONTENT_LENGTH = 2000

const isHighSurrogate = (code: number) => code >= 0xd800 && code <= 0xdbff
const isLowSurrogate = (code: number) => code >= 0xdc00 && code <= 0xdfff

/**
 * Move `index` back by one when it would split a UTF-16 surrogate pair, so no
 * chunk ever ends with half of a character.
 */
const avoidSplittingSurrogatePair = (text: string, index: number): number => {
  if (index <= 0 || index >= text.length) return index
  if (
    isHighSurrogate(text.charCodeAt(index - 1)) &&
    isLowSurrogate(text.charCodeAt(index))
  ) {
    return index - 1
  }
  return index
}

/**
 * Split `content` into chunks of at most `limit` characters.
 *
 * Lines are kept whole whenever they fit, which keeps issue entries readable.
 * A single line that cannot fit is split on a character boundary that never
 * breaks a surrogate pair. Joining the chunks with "\n" reproduces the input,
 * so no notification is silently dropped.
 */
export const splitDiscordContent = (
  content: string,
  limit: number = DISCORD_MAX_CONTENT_LENGTH,
): string[] => {
  if (content.length === 0) return []

  const max = Math.max(1, Math.floor(limit))
  if (content.length <= max) return [content]

  const chunks: string[] = []
  let current = ""

  const flush = () => {
    if (current.length > 0) {
      chunks.push(current)
      current = ""
    }
  }

  for (const line of content.split("\n")) {
    if (line.length === 0) {
      // Preserve blank lines: an empty line still needs its separator.
      if (current.length === 0) {
        chunks.push("")
      } else if (current.length + 1 <= max) {
        current += "\n"
      } else {
        flush()
        chunks.push("")
      }
      continue
    }

    if (current.length === 0) {
      if (line.length <= max) {
        current = line
        continue
      }
      chunks.push(...splitLongLine(line, max))
      continue
    }

    if (current.length + 1 + line.length <= max) {
      current += `\n${line}`
      continue
    }

    flush()
    if (line.length <= max) {
      current = line
    } else {
      chunks.push(...splitLongLine(line, max))
    }
  }

  flush()
  return chunks.length > 0 ? chunks : [""]
}

const splitLongLine = (line: string, max: number): string[] => {
  const parts: string[] = []
  let start = 0

  while (start < line.length) {
    let end = Math.min(start + max, line.length)
    end = avoidSplittingSurrogatePair(line, end)
    if (end <= start) {
      // Never stall: a single code point that cannot fit on its own still has
      // to advance, otherwise this loop would never terminate.
      end = start + 1
    }
    parts.push(line.slice(start, end))
    start = end
  }

  return parts
}
