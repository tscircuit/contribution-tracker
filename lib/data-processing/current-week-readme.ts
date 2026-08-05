import { getContributionOverviewWindow } from "lib/ai/date-utils"

const CURRENT_WEEK_START_MARKER = "<!-- START_CURRENT_WEEK -->"
const CURRENT_WEEK_END_MARKER = "<!-- END_CURRENT_WEEK -->"

export function isCurrentContributionOverview(
  overviewStartDate: Date | string,
  overviewEndDate: Date | string,
  now: Date = new Date(),
): boolean {
  const overviewStartTime = new Date(overviewStartDate).getTime()
  const overviewEndTime = new Date(overviewEndDate).getTime()
  if (Number.isNaN(overviewStartTime) || Number.isNaN(overviewEndTime)) {
    return false
  }

  const { startDate: currentStartDate, endDate: currentEndDate } =
    getContributionOverviewWindow(now)
  return (
    overviewStartTime === currentStartDate.getTime() &&
    overviewEndTime === currentEndDate.getTime()
  )
}

export function replaceCurrentWeekReadme(
  readme: string,
  markdown: string,
): string {
  const startIndex = readme.indexOf(CURRENT_WEEK_START_MARKER)
  const endIndex = readme.indexOf(CURRENT_WEEK_END_MARKER)

  if (startIndex === -1 || endIndex === -1 || endIndex < startIndex) {
    throw new Error("README current-week markers are missing or out of order")
  }

  const beforeCurrentWeek = readme.slice(
    0,
    startIndex + CURRENT_WEEK_START_MARKER.length,
  )
  const afterCurrentWeek = readme.slice(endIndex)

  return `${beforeCurrentWeek}\n\n${markdown}\n\n${afterCurrentWeek}`
}
