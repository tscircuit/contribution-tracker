import { Octokit } from "@octokit/rest"
import FileSystemCache from "file-system-cache"
import type { Endpoints } from "@octokit/types"

// Initialize cache with 24h default expiration
const cache = FileSystemCache({ basePath: ".cache" })
const DEFAULT_CACHE_EXPIRY = 24 * 60 * 60 * 1000 // 24 hours

type OctokitInstance = InstanceType<typeof Octokit>

export class CachedOctokit {
  private octokit: OctokitInstance
  private methodExpirations: Record<string, number> = {
    "pulls.list": DEFAULT_CACHE_EXPIRY,
    "pulls.get": DEFAULT_CACHE_EXPIRY,
    "pulls.listReviews": DEFAULT_CACHE_EXPIRY,
    "issues.listForRepo": DEFAULT_CACHE_EXPIRY,
    "issues.listComments": 6 * 60 * 60 * 1000, // 6 hours for comments
    "repos.listForOrg": DEFAULT_CACHE_EXPIRY,
  }

  constructor(options?: ConstructorParameters<typeof Octokit>[0]) {
    this.octokit = new Octokit(options)
  }

  private async getCached<T>(
    method: string,
    params: Record<string, unknown>,
  ): Promise<T | null> {
    const cacheKey = `${method}:${JSON.stringify(params)}`
    const expiry = this.methodExpirations[method] || DEFAULT_CACHE_EXPIRY

    try {
      const cached = await cache.get(cacheKey)
      if (!cached) return null

      const { data, timestamp } = cached as { data: T; timestamp: number }
      if (Date.now() - timestamp > expiry) {
        return null
      }
      return data
    } catch {
      return null
    }
  }

  private async setCached<T>(
    method: string,
    params: Record<string, unknown>,
    data: T,
  ): Promise<void> {
    const cacheKey = `${method}:${JSON.stringify(params)}`
    await cache.set(cacheKey, { data, timestamp: Date.now() })
  }

  // Implement exact Octokit method signatures
  public pulls = {
    list: async (
      params: Endpoints["GET /repos/{owner}/{repo}/pulls"]["parameters"],
    ): Promise<{
      data: Endpoints["GET /repos/{owner}/{repo}/pulls"]["response"]["data"]
    }> => {
      const response = await this.octokit.pulls.list(params)
      return response
    },

    get: async (
      params: Endpoints["GET /repos/{owner}/{repo}/pulls/{pull_number}"]["parameters"] & {
        mediaType?: {
          format: "diff" | "raw" | "text" | "html" | "full" | "patch"
        }
      },
    ): Promise<{
      data:
        | Endpoints["GET /repos/{owner}/{repo}/pulls/{pull_number}"]["response"]["data"]
        | string
    }> => {
      const cached = await this.getCached<
        | Endpoints["GET /repos/{owner}/{repo}/pulls/{pull_number}"]["response"]["data"]
        | string
      >("pulls.get", params as Record<string, unknown>)
      if (cached) return { data: cached }

      const response = await this.octokit.pulls.get(params)
      await this.setCached(
        "pulls.get",
        params as Record<string, unknown>,
        response.data,
      )
      return response
    },

    listReviews: async (
      params: Endpoints["GET /repos/{owner}/{repo}/pulls/{pull_number}/reviews"]["parameters"],
    ): Promise<{
      data: Endpoints["GET /repos/{owner}/{repo}/pulls/{pull_number}/reviews"]["response"]["data"]
    }> => {
      const response = await this.octokit.pulls.listReviews(params)
      return response
    },
  }

  public issues = {
    listForRepo: async (
      params: Endpoints["GET /repos/{owner}/{repo}/issues"]["parameters"],
    ): Promise<{
      data: Endpoints["GET /repos/{owner}/{repo}/issues"]["response"]["data"]
    }> => {
      const response = await this.octokit.issues.listForRepo(params)
      return response
    },

    listComments: async (
      params: Endpoints["GET /repos/{owner}/{repo}/issues/{issue_number}/comments"]["parameters"],
    ): Promise<{
      data: Endpoints["GET /repos/{owner}/{repo}/issues/{issue_number}/comments"]["response"]["data"]
    }> => {
      const cached = await this.getCached<
        Endpoints["GET /repos/{owner}/{repo}/issues/{issue_number}/comments"]["response"]["data"]
      >("issues.listComments", params as Record<string, unknown>)
      if (cached) return { data: cached }

      const response = await this.octokit.issues.listComments(params)
      await this.setCached(
        "issues.listComments",
        params as Record<string, unknown>,
        response.data,
      )
      return response
    },
  }

  public repos = {
    listForOrg: async (
      params: Endpoints["GET /orgs/{org}/repos"]["parameters"],
    ): Promise<{
      data: Endpoints["GET /orgs/{org}/repos"]["response"]["data"]
    }> => {
      const cached = await this.getCached<
        Endpoints["GET /orgs/{org}/repos"]["response"]["data"]
      >("repos.listForOrg", params as Record<string, unknown>)
      if (cached) return { data: cached }

      const response = await this.octokit.repos.listForOrg(params)
      await this.setCached(
        "repos.listForOrg",
        params as Record<string, unknown>,
        response.data,
      )
      return response
    },
  }
}
