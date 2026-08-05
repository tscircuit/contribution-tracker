import { expect, test } from "bun:test"
import {
  fetchAllPagesInWindow,
  GITHUB_PAGE_SIZE,
  hasMorePagesInWindow,
} from "../lib/data-retrieval/pagination"

const since = new Date("2026-07-21T18:00:00Z")

const page = (lastUpdatedAt: string | null, size = GITHUB_PAGE_SIZE) =>
  Array.from({ length: size }, (_, index) => ({
    updated_at: index === size - 1 ? lastUpdatedAt : "2026-07-28T00:00:00Z",
  }))

test("stops on an empty or partial page", () => {
  expect(hasMorePagesInWindow([], since)).toBe(false)
  expect(hasMorePagesInWindow(page("2026-07-28T00:00:00Z", 42), since)).toBe(
    false,
  )
})

test("keeps paging while a full page still ends inside the window", () => {
  expect(hasMorePagesInWindow(page("2026-07-22T09:00:00Z"), since)).toBe(true)
})

test("stops once a full page ends before the window start", () => {
  expect(hasMorePagesInWindow(page("2026-07-21T17:59:59Z"), since)).toBe(false)
})

test("keeps paging at the exact boundary so timestamp ties are not lost", () => {
  expect(hasMorePagesInWindow(page("2026-07-21T18:00:00Z"), since)).toBe(true)
})

test("keeps paging when the boundary timestamp is missing or invalid", () => {
  expect(hasMorePagesInWindow(page(null), since)).toBe(true)
  expect(hasMorePagesInWindow(page("not-a-date"), since)).toBe(true)
})

test("fetches and combines every page needed for the reporting window", async () => {
  const pageSize = 2
  const requestedPages: number[] = []
  const pages = [
    [
      { id: 1, updated_at: "2026-07-23T00:00:00Z" },
      { id: 2, updated_at: "2026-07-22T00:00:00Z" },
    ],
    [{ id: 3, updated_at: "2026-07-21T19:00:00Z" }],
  ]

  const result = await fetchAllPagesInWindow({
    since,
    pageSize,
    fetchPage: async (requestedPage, perPage) => {
      requestedPages.push(requestedPage)
      expect(perPage).toBe(pageSize)
      return pages[requestedPage - 1] ?? []
    },
  })

  expect(requestedPages).toEqual([1, 2])
  expect(result.map((item) => item.id)).toEqual([1, 2, 3])
})

test("does not request another page after crossing the window boundary", async () => {
  const requestedPages: number[] = []

  await fetchAllPagesInWindow({
    since,
    pageSize: 2,
    fetchPage: async (requestedPage) => {
      requestedPages.push(requestedPage)
      return [
        { updated_at: "2026-07-21T17:00:00Z" },
        { updated_at: "2026-07-21T16:00:00Z" },
      ]
    },
  })

  expect(requestedPages).toEqual([1])
})
