export const GITHUB_PAGE_SIZE = 100

/**
 * `pulls.list` results are sorted by `updated_at` descending, and a pull
 * request's `updated_at` is never earlier than its `created_at` or `merged_at`.
 * So once a full page ends before the window start, no later page can hold a
 * pull request that opened or merged inside the window.
 */
export function hasMorePagesInWindow(
  pageItems: { updated_at?: string | null }[],
  since: Date,
): boolean {
  if (pageItems.length < GITHUB_PAGE_SIZE) return false

  const lastUpdatedAt = pageItems[pageItems.length - 1]?.updated_at
  if (!lastUpdatedAt) return true

  return new Date(lastUpdatedAt).getTime() >= since.getTime()
}
