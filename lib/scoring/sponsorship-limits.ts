export const DEFAULT_SPONSORSHIP_LIMIT_CENTS = 20000
export const SPONSORSHIP_LIMIT_EXCEPTIONS: Record<string, number> = {
  "mohan-bee": 30000,
}

export function getSponsorshipLimitCents(username?: string): number {
  return (
    SPONSORSHIP_LIMIT_EXCEPTIONS[username?.toLowerCase() ?? ""] ??
    DEFAULT_SPONSORSHIP_LIMIT_CENTS
  )
}
