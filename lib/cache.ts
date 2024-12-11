import { Level } from "level"

// Initialize LevelDB
export const db = new Level("./pr-analysis-cache", { valueEncoding: "json" })
