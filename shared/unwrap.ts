export type Result<T, E = Error> = [T, null] | [null, E]

export async function unwrapPromise<T, E = Error>(
  promise: Promise<T>,
): Promise<Result<T, E>> {
  try {
    const data = await promise
    return [data, null]
  } catch (err) {
    return [null, err as E]
  }
}

export function unwrapSync<T, E = Error>(fn: () => T): Result<T, E> {
  try {
    return [fn(), null]
  } catch (err) {
    return [null, err as E]
  }
}
