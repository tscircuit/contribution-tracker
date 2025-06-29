import type { Milestone } from "lib/types"

export const CURRENT_MILESTONES: Milestone[] = [
  {
    name: "Build SparkFun Boards",
    description:
      "Tools and improvements that enable the building of SparkFun boards with tscircuit",
    keywords: ["sparkfun", "boards"],
    isActive: true,
    repos: ["tscircuit/core", "tscircuit/sparkfun-boards"],
  },
]
