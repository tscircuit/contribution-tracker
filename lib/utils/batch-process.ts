/**
 * Process an array of items in batches with concurrency control.
 * This helps avoid GitHub's secondary rate limits by limiting concurrent requests.
 *
 * @param items - Array of items to process
 * @param processor - Async function to process each item
 * @param concurrency - Maximum number of concurrent operations (default: 20)
 * @param delayMs - Delay in milliseconds between batches (default: 100)
 * @returns Array of results in the same order as input items
 */
export async function batchProcess<T, R>(
  items: T[],
  processor: (item: T) => Promise<R>,
  concurrency: number = 20,
  delayMs: number = 100,
): Promise<R[]> {
  const results: R[] = []

  for (let i = 0; i < items.length; i += concurrency) {
    const batch = items.slice(i, i + concurrency)
    const batchResults = await Promise.all(batch.map(processor))
    results.push(...batchResults)

    // Add delay between batches (but not after the last batch)
    if (i + concurrency < items.length && delayMs > 0) {
      await new Promise((resolve) => setTimeout(resolve, delayMs))
    }
  }

  return results
}
