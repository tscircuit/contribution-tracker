import { describe, expect, test } from "bun:test"
import { scoreToSponsorshipStarCount } from "../lib/scoring"
import { MAINTAINERS } from "../lib/scoring/maintainers"

describe("scoreToSponsorshipStarCount", () => {
  test("uses default thresholds for non-maintainers", () => {
    expect(scoreToSponsorshipStarCount(3, "non-maintainer")).toBe(0)
    expect(scoreToSponsorshipStarCount(4, "non-maintainer")).toBe(1)
    expect(scoreToSponsorshipStarCount(11, "non-maintainer")).toBe(2)
    expect(scoreToSponsorshipStarCount(50, "non-maintainer")).toBe(3)
  })

  test("applies reduced thresholds by maintainer level for sponsorship only", () => {
    expect(scoreToSponsorshipStarCount(40, "AnasSarkiz")).toBe(3) // maintainer2: 80%
    expect(scoreToSponsorshipStarCount(30, "ArnavK-09")).toBe(3) // maintainer3: 60%
    expect(scoreToSponsorshipStarCount(20, "ShiboSoftwareDev")).toBe(3) // maintainer4: 40%
  })

  test("gives 3 sponsorship stars at 0 score for maintainer6", () => {
    ;(MAINTAINERS as Record<string, string>).__test_maintainer6_user =
      "maintainer6"
    expect(scoreToSponsorshipStarCount(0, "__test_maintainer6_user")).toBe(3)
    delete (MAINTAINERS as Record<string, string>).__test_maintainer6_user
  })
})
