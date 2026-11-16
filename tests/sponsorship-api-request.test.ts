import { expect, test } from "bun:test"
import { requestJson } from "../scripts/match-sponsorship-profiles"

test("supplies a deliberate User-Agent and preserves request headers", async () => {
  const originalFetch = globalThis.fetch
  globalThis.fetch = (async (_url, options) => {
    const headers = new Headers(options?.headers)
    expect(headers.get("User-Agent")).toBe("tscircuit-contribution-tracker")
    expect(headers.get("Authorization")).toBe("Bearer test-token")
    expect(headers.get("Accept")).toBe("application/vnd.github+json")
    expect(options?.redirect).toBe("error")
    return Response.json({ id: 123 })
  }) as typeof fetch
  try {
    expect(
      await requestJson("https://api.github.com/users/alice", {
        headers: {
          Authorization: "Bearer test-token",
          Accept: "application/vnd.github+json",
        },
      }),
    ).toEqual({ id: 123 })
  } finally {
    globalThis.fetch = originalFetch
  }
})

test("specific integration-permission denial can retry the public profile once without credentials", async () => {
  const originalFetch = globalThis.fetch
  const authHeaders: Array<string | null> = []
  globalThis.fetch = (async (_url, options) => {
    authHeaders.push(new Headers(options?.headers).get("Authorization"))
    return authHeaders.length === 1
      ? Response.json(
          { message: "Resource not accessible by integration" },
          { status: 403 },
        )
      : Response.json({ id: 123, login: "alice" })
  }) as typeof fetch
  try {
    expect(
      await requestJson("https://api.github.com/users/alice", {
        headers: { Authorization: "Bearer test-token" },
      }),
    ).toEqual({ id: 123, login: "alice" })
    expect(authHeaders).toEqual(["Bearer test-token", null])
  } finally {
    globalThis.fetch = originalFetch
  }
})

test("rate limits and unknown 403s fail with safe endpoint diagnostics instead of anonymous retries", async () => {
  const originalFetch = globalThis.fetch
  try {
    const failures: Array<{
      status: number
      headers: Record<string, string>
      message: string
    }> = [
      {
        status: 403,
        headers: { "x-ratelimit-remaining": "0", "x-ratelimit-reset": "1234" },
        message: "Resource not accessible by integration",
      },
      { status: 429, headers: { "retry-after": "60" }, message: "rate limit" },
      { status: 403, headers: {}, message: "unknown secret response" },
    ]
    for (const failure of failures) {
      let calls = 0
      globalThis.fetch = (async () => {
        calls++
        return Response.json(
          { message: failure.message },
          { status: failure.status, headers: failure.headers },
        )
      }) as typeof fetch
      await expect(
        requestJson("https://api.github.com/users/alice", {
          headers: { Authorization: "Bearer private-token" },
        }),
      ).rejects.toThrow(`api.github.com/users/alice HTTP ${failure.status}`)
      expect(calls).toBe(1)
    }
    globalThis.fetch = (async () =>
      new Response("private response body", { status: 403 })) as typeof fetch
    try {
      await requestJson(
        "https://api.opencollective.com/graphql/v2?token=secret",
      )
    } catch (error) {
      expect((error as Error).message).toBe(
        "Account lookup failed: api.opencollective.com/graphql/v2 HTTP 403 (request rejected)",
      )
    }
  } finally {
    globalThis.fetch = originalFetch
  }
})

test("an unsuccessful anonymous fallback stops after one retry", async () => {
  const originalFetch = globalThis.fetch
  let calls = 0
  globalThis.fetch = (async () => {
    calls++
    return Response.json(
      { message: "Resource not accessible by integration" },
      { status: 403 },
    )
  }) as typeof fetch
  try {
    await expect(
      requestJson("https://api.github.com/users/alice", {
        headers: { Authorization: "Bearer test-token" },
      }),
    ).rejects.toThrow("integration permission denied")
    expect(calls).toBe(2)
  } finally {
    globalThis.fetch = originalFetch
  }
})
