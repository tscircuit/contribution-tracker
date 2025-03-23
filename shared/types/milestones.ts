export interface Milestone {
  name: string
  description: string
  keywords: string[]
  startDate: string
  endDate: string
}

export const CURRENT_MILESTONE: Milestone = {
  name: "Build Keyboards",
  description:
    "Tools and improvements that enable the building of keyboards with tscircuit",
  keywords: ["keyboard"],
  startDate: "2024-03-01",
  endDate: "2024-03-31",
}
