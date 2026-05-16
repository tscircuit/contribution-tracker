import { describe, expect, it } from "bun:test"
import { extractIssueBounty } from "lib/data-retrieval/extract-issue-bounty"

describe("extractIssueBounty", () => {
  it("extracts bounty commands from issue bodies", () => {
    expect(extractIssueBounty({ body: "Build this\n\n/bounty $12" })).toBe(
      "$12",
    )
    expect(extractIssueBounty({ body: "/bounty 50$" })).toBe("$50")
  })

  it("extracts bounty amounts from Algora comments", () => {
    expect(
      extractIssueBounty({ body: "" }, [
        {
          user: { login: "algora-pbc" },
          body: "## $8 bounty [tscircuit](https://algora.io/tscircuit)",
        },
      ]),
    ).toBe("$8")
  })

  it("uses dollar labels as a fallback", () => {
    expect(extractIssueBounty({ labels: [{ name: "$10" }] })).toBe("$10")
  })

  it("ignores non-bounty comments and labels", () => {
    expect(
      extractIssueBounty(
        { body: "No bounty here", labels: [{ name: "help wanted" }] },
        [{ user: { login: "someone" }, body: "## $100 bounty" }],
      ),
    ).toBeNull()
  })
})
