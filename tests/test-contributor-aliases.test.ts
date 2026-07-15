import { describe, expect, test } from "bun:test"
import {
  CONTRIBUTOR_ALIASES,
  getCanonicalUsername,
} from "../lib/contributor-aliases"

describe("getCanonicalUsername", () => {
  test("maps an aliased login to its canonical login", () => {
    expect(getCanonicalUsername("technologyet31-create")).toBe(
      "abdalraof-albarbar",
    )
  })

  test("returns unknown logins unchanged", () => {
    expect(getCanonicalUsername("seveibar")).toBe("seveibar")
  })

  test("is idempotent on canonical logins", () => {
    for (const canonical of Object.values(CONTRIBUTOR_ALIASES)) {
      expect(getCanonicalUsername(canonical)).toBe(canonical)
    }
  })
})
