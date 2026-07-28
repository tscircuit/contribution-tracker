import { expect, test } from "bun:test"
import {
  GITHUB_PAGE_SIZE,
  hasMorePagesInWindow,
} from "../lib/data-retrieval/pagination"

const since = new Date("2026-07-21T18:00:00Z")

const page = (lastUpdatedAt: string | null, size = GITHUB_PAGE_SIZE) =>
  Array.from({ length: size }, (_, index) => ({
    updated_at: index === size - 1 ? lastUpdatedAt : "2026-07-28T00:00:00Z",
  }))

test("stops on a partial page", () => {
  expect(hasMorePagesInWindow(page("2026-07-28T00:00:00Z", 42), since)).toBe(
    false,
  )
  expect(hasMorePagesInWindow([], since)).toBe(false)
})

test("keeps paging while a full page still ends inside the window", () => {
  expect(hasMorePagesInWindow(page("2026-07-22T09:00:00Z"), since)).toBe(true)
})

test("stops once a full page ends before the window start", () => {
  expect(hasMorePagesInWindow(page("2026-07-21T17:59:59Z"), since)).toBe(false)
})

test("treats a page ending exactly on the window start as more to fetch", () => {
  expect(hasMorePagesInWindow(page("2026-07-21T18:00:00Z"), since)).toBe(true)
})

test("keeps paging when the last entry has no updated_at", () => {
  expect(hasMorePagesInWindow(page(null), since)).toBe(true)
})
