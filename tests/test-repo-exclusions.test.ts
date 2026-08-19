import { expect, test } from "bun:test"
import { excludeNonPointAwardingRepos } from "lib/data-retrieval/getRepos"

test("sparkfun-boards does not award contribution points", () => {
  expect(
    excludeNonPointAwardingRepos([
      "tscircuit/tscircuit",
      "tscircuit/sparkfun-boards",
    ]),
  ).toEqual(["tscircuit/tscircuit"])
})
