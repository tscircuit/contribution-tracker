export const GITHUB_PAGE_SIZE = 100

export interface GitHubUpdatedItem {
  updated_at?: string | null
}

/**
 * GitHub results are sorted by `updated_at` descending. A pull request's
 * `updated_at` cannot be earlier than its `created_at` or `merged_at`, so once
 * the final item on a full page is older than the reporting window, later
 * pages cannot contain a pull request created or merged inside that window.
 */
export function hasMorePagesInWindow(
  pageItems: GitHubUpdatedItem[],
  since: Date,
  pageSize = GITHUB_PAGE_SIZE,
): boolean {
  if (pageItems.length < pageSize) return false

  const lastUpdatedAt = pageItems.at(-1)?.updated_at
  if (!lastUpdatedAt) return true

  const lastUpdatedTime = new Date(lastUpdatedAt).getTime()
  if (Number.isNaN(lastUpdatedTime)) return true

  // Keep paging at the exact boundary because equal timestamps can span pages.
  return lastUpdatedTime >= since.getTime()
}

export async function fetchAllPagesInWindow<T extends GitHubUpdatedItem>({
  fetchPage,
  since,
  pageSize = GITHUB_PAGE_SIZE,
}: {
  fetchPage: (page: number, perPage: number) => Promise<T[]>
  since: Date
  pageSize?: number
}): Promise<T[]> {
  const allItems: T[] = []

  for (let page = 1; ; page++) {
    const pageItems = await fetchPage(page, pageSize)
    allItems.push(...pageItems)

    if (!hasMorePagesInWindow(pageItems, since, pageSize)) {
      return allItems
    }
  }
}
