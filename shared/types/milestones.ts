export interface Milestone {
  name: string
  description: string
  keywords: string[]
  startDate: string
  endDate: string
}

export const CURRENT_MILESTONE: Milestone = {
  name: "Build more footprints",
  description:
    "Focus on creating and improving electronic component footprints",
  keywords: [
    "footprint",
    "footprints",
    "component",
    "components",
    "pcb",
    "pcb design",
    "electronic design",
    "circuit board",
    "circuit boards",
    "schematic",
    "schematics",
    "symbol",
    "symbols",
    "library",
    "libraries",
    "kicad",
    "altium",
    "eagle",
    "cadence",
    "orcad",
  ],
  startDate: "2024-03-01",
  endDate: "2024-03-31",
}
