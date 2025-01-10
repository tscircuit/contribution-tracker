import Anthropic from "@anthropic-ai/sdk"
import FileSystemCache from "file-system-cache"

// Initialize cache with 1-week default expiration (much longer than Octokit's 24h)
const cache = FileSystemCache({ basePath: ".cache-anthropic" })
const DEFAULT_CACHE_EXPIRY = 7 * 24 * 60 * 60 * 1000 // 1 week

type AnthropicClient = InstanceType<typeof Anthropic>
type MessageResponse = Awaited<
  ReturnType<AnthropicClient["messages"]["create"]>
>

export class CachedAnthropic {
  private client: AnthropicClient

  constructor(options?: ConstructorParameters<typeof Anthropic>[0]) {
    this.client = new Anthropic(options)
  }

  private async getCached<T extends MessageResponse>(
    params: Record<string, any>,
  ): Promise<T | null> {
    // Only cache non-streaming requests
    if (params.stream) return null

    const cacheKey = JSON.stringify({
      model: params.model,
      messages: params.messages,
      max_tokens: params.max_tokens,
      temperature: params.temperature,
      system: params.system,
    })

    try {
      const cached = await cache.get(cacheKey)
      if (!cached) return null

      const { data, timestamp } = cached as { data: T; timestamp: number }
      if (Date.now() - timestamp > DEFAULT_CACHE_EXPIRY) {
        return null
      }
      return data
    } catch {
      return null
    }
  }

  private async setCached<T extends MessageResponse>(
    params: Record<string, any>,
    data: T,
  ): Promise<void> {
    // Only cache non-streaming requests
    if (params.stream) return

    const cacheKey = JSON.stringify({
      model: params.model,
      messages: params.messages,
      max_tokens: params.max_tokens,
      temperature: params.temperature,
      system: params.system,
    })
    await cache.set(cacheKey, { data, timestamp: Date.now() })
  }

  public messages = {
    create: async (
      params: Parameters<AnthropicClient["messages"]["create"]>[0],
      options?: Parameters<AnthropicClient["messages"]["create"]>[1],
    ): Promise<MessageResponse> => {
      // Don't cache streaming requests
      if (params.stream) {
        return this.client.messages.create(params, options)
      }

      const cached = await this.getCached<MessageResponse>(params)
      if (cached) return cached

      const response = await this.client.messages.create(params, options)
      await this.setCached(params, response)
      return response
    },
  }
}
