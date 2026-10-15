import { afterAll, afterEach, expect, spyOn, test } from "bun:test"
import { getAllPRs } from "../lib/data-retrieval/getAllPRs"
import { octokit } from "../lib/sdks"

type PullRequest = Awaited<
  ReturnType<typeof octokit.pulls.list>
>["data"][number]

const since = "2026-10-06T18:00:00Z"
const endDate = new Date("2026-10-13T18:00:00Z")
const oldPr = {
  number: 1,
  user: { id: 123, login: "contributor" },
  created_at: "2026-01-01T00:00:00Z",
  updated_at: "2026-01-02T00:00:00Z",
  merged_at: null,
  state: "closed",
} as PullRequest

const list = spyOn(octokit.pulls, "list")
const listReviews = spyOn(octokit.pulls, "listReviews")

afterAll(() => {
  list.mockRestore()
  listReviews.mockRestore()
})

afterEach(() => {
  list.mockReset()
  listReviews.mockReset()
})

test("stops listing historical PRs while keeping an old PR merged this week", async () => {
  const mergedPr = {
    ...oldPr,
    number: 2,
    updated_at: "2026-10-10T00:00:00Z",
    merged_at: "2026-10-10T00:00:00Z",
  }
  list.mockResolvedValueOnce({
    data: [mergedPr, ...Array.from({ length: 99 }, () => oldPr)],
  })
  list.mockResolvedValue({ data: [] })
  listReviews.mockResolvedValue({ data: [] })

  const prs = await getAllPRs("tscircuit/core", since, endDate)

  expect(list).toHaveBeenCalledTimes(1)
  expect(prs.map((pr) => pr.number)).toEqual([2])
  expect(listReviews).toHaveBeenCalledTimes(1)
  expect(listReviews).toHaveBeenCalledWith({
    owner: "tscircuit",
    repo: "core",
    pull_number: 2,
    per_page: 100,
    page: 1,
  })
})

test("continues at the window boundary and counts reviews on a later page", async () => {
  const boundaryPr = { ...oldPr, updated_at: since }
  list.mockResolvedValueOnce({
    data: Array.from({ length: 100 }, () => boundaryPr),
  })
  list.mockResolvedValueOnce({
    data: [{ ...boundaryPr, number: 3, merged_at: since }],
  })
  listReviews.mockResolvedValue({
    data: [
      {
        user: { id: 456, login: "reviewer" },
        state: "APPROVED",
      },
    ] as Awaited<ReturnType<typeof octokit.pulls.listReviews>>["data"],
  })

  const prs = await getAllPRs("tscircuit/core", since, endDate)

  expect(list).toHaveBeenCalledTimes(2)
  expect(list).toHaveBeenLastCalledWith({
    owner: "tscircuit",
    repo: "core",
    sort: "updated",
    direction: "desc",
    state: "all",
    per_page: 100,
    page: 2,
  })
  expect(prs.map((pr) => pr.number)).toEqual([3])
  expect(prs[0].approvalsReceived).toBe(1)
  expect(prs[0].reviewsByUser?.["github:456"].prNumbers).toEqual(new Set([3]))
})
