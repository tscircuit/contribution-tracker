import { generateObject } from "ai"
import { openai } from "@ai-sdk/openai"
import FileSystemCache from "file-system-cache"

const cache = FileSystemCache({ basePath: ".cache-ai" })
const DEFAULT_CACHE_EXPIRY = 7 * 24 * 60 * 60 * 1000 // 1 week

async function getCached(params: any): Promise<any | null> {
  const cacheKey = JSON.stringify({
    model: params.model?.modelId || params.model,
    schema: params.schema?._def || params.schema,
    prompt: params.prompt,
    temperature: params.temperature,
    maxTokens: params.maxTokens,
    seed: params.seed,
  })

  try {
    const cached = await cache.get(cacheKey)
    if (!cached) return null

    const { data, timestamp } = cached as { data: any; timestamp: number }
    if (Date.now() - timestamp > DEFAULT_CACHE_EXPIRY) {
      return null
    }
    return data
  } catch {
    return null
  }
}

async function setCached(params: any, data: any): Promise<void> {
  const cacheKey = JSON.stringify({
    model: params.model?.modelId || params.model,
    schema: params.schema?._def || params.schema,
    prompt: params.prompt,
    temperature: params.temperature,
    maxTokens: params.maxTokens,
    seed: params.seed,
  })
  await cache.set(cacheKey, { data, timestamp: Date.now() })
}

export async function generateAiObjectCached(options: any) {
  const optionsWithDefault = {
    ...options,
    model: options.model || openai("o4-mini"),
  }

  const cached = await getCached(optionsWithDefault)
  if (cached) return cached

  const response = await generateObject(optionsWithDefault)
  await setCached(optionsWithDefault, response)
  return response
}
