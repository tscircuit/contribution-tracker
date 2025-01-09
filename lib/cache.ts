import FileSystemCache from "file-system-cache"

export const cache = FileSystemCache({ basePath: ".cache" })

export async function writeCache<T>(key: string, data: T): Promise<void> {
  await cache.set(key, { data, timestamp: Date.now() })
}

export async function readCache<T>(
  key: string,
  expiryMs?: number,
): Promise<T | null> {
  try {
    const cached = await cache.get(key)
    if (!cached) return null

    const { data, timestamp } = cached

    // Check expiry
    if (expiryMs && Date.now() - timestamp > expiryMs) {
      return null
    }
    return data
  } catch {
    return null
  }
}

export async function clearCache(key: string): Promise<void> {
  await cache.remove(key)
}
