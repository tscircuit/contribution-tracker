import { Octokit } from "@octokit/rest"
import FileSystemCache from "file-system-cache"
import type { Endpoints } from "@octokit/types"
import kleur from "kleur"
import ms from "ms"

// Initialize cache with 24h default expiration
const cache = FileSystemCache({ basePath: ".cache" })
const DEFAULT_CACHE_EXPIRY = ms("6h")

type OctokitInstance = InstanceType<typeof Octokit>

export class CachedOctokit {
  public octokit: OctokitInstance
  private methodExpirations: Record<string, number> = {
    "pulls.list": ms("6h"),
    "pulls.get": DEFAULT_CACHE_EXPIRY,
    "pulls.listReviews": DEFAULT_CACHE_EXPIRY,
    "issues.listForRepo": ms("6h"),
    "issues.listComments": ms("6h"),
    "repos.listForOrg": ms("6h"),
    "raw.fetchFile": DEFAULT_CACHE_EXPIRY,
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
      if (!cached) {
        console.log(kleur.red("cache miss"), cacheKey.slice(0, 100))
        return null
      }

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
      const cached = await this.getCached<
        Endpoints["GET /repos/{owner}/{repo}/pulls"]["response"]["data"]
      >("pulls.list", params as Record<string, unknown>)
      if (cached) return { data: cached }

      const response = await this.octokit.pulls.list(params)
      await this.setCached(
        "pulls.list",
        params as Record<string, unknown>,
        response.data,
      )
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
      const cached = await this.getCached<
        Endpoints["GET /repos/{owner}/{repo}/pulls/{pull_number}/reviews"]["response"]["data"]
      >("pulls.listReviews", params as Record<string, unknown>)
      if (cached) return { data: cached }

      const response = await this.octokit.pulls.listReviews(params)
      await this.setCached(
        "pulls.listReviews",
        params as Record<string, unknown>,
        response.data,
      )
      return response
    },
  }

  public issues = {
    listForRepo: async (
      params: Endpoints["GET /repos/{owner}/{repo}/issues"]["parameters"],
    ): Promise<{
      data: Endpoints["GET /repos/{owner}/{repo}/issues"]["response"]["data"]
    }> => {
      const cached = await this.getCached<
        Endpoints["GET /repos/{owner}/{repo}/issues"]["response"]["data"]
      >("issues.listForRepo", params as Record<string, unknown>)
      if (cached) return { data: cached }

      const response = await this.octokit.issues.listForRepo(params)
      await this.setCached(
        "issues.listForRepo",
        params as Record<string, unknown>,
        response.data,
      )
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

    createComment: async (
      params: Endpoints["POST /repos/{owner}/{repo}/issues/{issue_number}/comments"]["parameters"],
    ): Promise<{
      data: Endpoints["POST /repos/{owner}/{repo}/issues/{issue_number}/comments"]["response"]["data"]
    }> => {
      // Don't cache comment creation - always make the API call
      const response = await this.octokit.issues.createComment(params)
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

  public search = {
    issuesAndPullRequests: async (
      params: Endpoints["GET /search/issues"]["parameters"],
    ): Promise<{
      data: Endpoints["GET /search/issues"]["response"]["data"]
    }> => {
      const response = await this.octokit.search.issuesAndPullRequests(params)
      return response
    },
  }

  public raw = {
    fetchFile: async (params: {
      owner: string
      repo: string
      path: string
      ref?: string
    }): Promise<{ data: string }> => {
      const existingCache = await this.getCached<{
        content: string
        status: number
      }>("raw.fetchFile", params)
      if (existingCache) {
        if (typeof existingCache === "string") {
          return { data: existingCache }
        }
        if (existingCache.status === 404) {
          throw new Error("File not found")
        }
        return { data: existingCache.content }
      }

      const { owner, repo, path, ref = "main" } = params
      const url = `https://raw.githubusercontent.com/${owner}/${repo}/refs/heads/${ref}/${path}`

      const response = await fetch(url)
      if (response.status === 404) {
        await this.setCached("raw.fetchFile", params, {
          content: "",
          status: 404,
        })
        throw new Error("File not found")
      }
      if (!response.ok) {
        throw new Error(
          `Failed to fetch file: ${response.status} ${response.statusText}`,
        )
      }

      const content = await response.text()
      await this.setCached("raw.fetchFile", params, {
        content,
        status: response.status,
      })

      return { data: content }
    },
  }
}
