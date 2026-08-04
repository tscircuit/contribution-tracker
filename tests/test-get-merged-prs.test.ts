import { afterAll, expect, mock, test } from "bun:test"

const listPullRequests = mock(async ({ page }: { page?: number }) => {
  if (page === 1) {
    return {
      data: Array.from({ length: 100 }, () => ({ merged_at: null })),
    }
  }

  return {
    data: [
      {
        number: 4177,
        title: "Migrate web editor to Monaco",
        body: "",
        user: { id: 97875843, login: "rushabhcodes" },
        html_url: "https://github.com/tscircuit/tscircuit.com/pull/4177",
        created_at: "2026-07-31T17:52:42Z",
        merged_at: "2026-08-02T20:15:04Z",
        labels: [],
      },
    ],
  }
})

const getPullRequest = mock(async () => ({
  data: "diff --git a/src/editor.ts b/src/editor.ts",
}))

mock.module("lib/sdks", () => ({
  octokit: {
    pulls: {
      list: listPullRequests,
      get: getPullRequest,
    },
  },
}))

const { getMergedPRs } = await import("../lib/data-retrieval/getMergedPRs")

afterAll(() => {
  mock.restore()
})

test("fetches merged PRs beyond the first GitHub page", async () => {
  const mergedPRs = await getMergedPRs(
    "tscircuit/tscircuit.com",
    "2026-07-28T18:00:00Z",
    new Date("2026-08-05T18:00:00Z"),
  )

  expect(listPullRequests).toHaveBeenCalledTimes(2)
  expect(listPullRequests).toHaveBeenNthCalledWith(1, {
    owner: "tscircuit",
    repo: "tscircuit.com",
    state: "closed",
    sort: "updated",
    direction: "desc",
    per_page: 100,
    page: 1,
  })
  expect(listPullRequests).toHaveBeenNthCalledWith(2, {
    owner: "tscircuit",
    repo: "tscircuit.com",
    state: "closed",
    sort: "updated",
    direction: "desc",
    per_page: 100,
    page: 2,
  })
  expect(mergedPRs).toHaveLength(1)
  expect(mergedPRs[0]?.number).toBe(4177)
})
