import fs from "node:fs"
import path from "node:path"
import { CONTRIBUTION_OVERVIEW_CUTOFF_HOUR_UTC } from "./ai/date-utils"

export interface ContributionWeek {
  filePath: string
  weekStartDate: Date
  weekEndDate: Date
  completedAt: Date
}

export function getFullWeeksForMonth(
  year: number,
  month: number,
  today = new Date(),
): ContributionWeek[] {
  const overviewsDir = path.join(process.cwd(), "contribution-overviews")

  // First day of the target month
  const monthStart = new Date(Date.UTC(year, month - 1, 1))
  // First day of next month
  const nextMonthStart = new Date(Date.UTC(year, month, 1))

  return fs
    .readdirSync(overviewsDir)
    .filter((file) => file.endsWith(".json"))
    .map((file) => {
      const fileDate = new Date(file.replace(".json", ""))
      return {
        filePath: path.join(overviewsDir, file),
        fileDate,
      }
    })
    .filter(({ fileDate }) => !isNaN(fileDate.getTime()))
    .map(({ filePath, fileDate }) => {
      const weekStartDate = new Date(
        Date.UTC(
          fileDate.getUTCFullYear(),
          fileDate.getUTCMonth(),
          fileDate.getUTCDate(),
        ),
      )
      const weekEndDate = new Date(
        Date.UTC(
          fileDate.getUTCFullYear(),
          fileDate.getUTCMonth(),
          fileDate.getUTCDate() + 6,
        ),
      )
      const completedAt = new Date(weekEndDate)
      // Current overview files start at Tuesday's cutoff and are complete at
      // the following Tuesday's cutoff. Older files started on Wednesday.
      if (fileDate.getUTCDay() === 2) {
        completedAt.setUTCDate(completedAt.getUTCDate() + 1)
      }
      completedAt.setUTCHours(CONTRIBUTION_OVERVIEW_CUTOFF_HOUR_UTC, 0, 0, 0)

      return {
        filePath,
        weekStartDate,
        weekEndDate,
        completedAt,
      }
    })
    .filter(({ weekEndDate, completedAt }) => {
      return (
        weekEndDate >= monthStart &&
        weekEndDate < nextMonthStart &&
        completedAt <= today
      )
    })
    .sort((a, b) => b.weekStartDate.getTime() - a.weekStartDate.getTime())
}
