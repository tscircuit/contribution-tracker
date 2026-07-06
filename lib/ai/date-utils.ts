export function getLastWednesday(date: Date): Date {
  const result = new Date(date)
  result.setUTCHours(0, 0, 0, 0) // Normalize to midnight UTC

  // Get days to subtract (0 = Sunday, 3 = Wednesday)
  const currentDay = result.getUTCDay()
  const daysToSubtract =
    currentDay < 3
      ? // If before Wednesday
        currentDay + 4
      : // Add days to get to previous Wednesday
        currentDay - 3 // Subtract days to get to previous/current Wednesday

  result.setUTCDate(result.getUTCDate() - daysToSubtract)
  return result
}

export const CONTRIBUTION_OVERVIEW_CUTOFF_HOUR_UTC = 18

function setContributionOverviewCutoff(date: Date): Date {
  const result = new Date(date)
  result.setUTCHours(CONTRIBUTION_OVERVIEW_CUTOFF_HOUR_UTC, 0, 0, 0)
  return result
}

export function getLatestContributionOverviewCutoff(date: Date): Date {
  const cutoff = setContributionOverviewCutoff(date)
  if (date.getTime() < cutoff.getTime()) {
    cutoff.setUTCDate(cutoff.getUTCDate() - 1)
  }
  return cutoff
}

export function getContributionOverviewWindow(date: Date): {
  startDate: Date
  endDate: Date
} {
  const endDate = getLatestContributionOverviewCutoff(date)
  const startDate = new Date(endDate)

  // Get the current day (0 = Sunday, 2 = Tuesday)
  const currentDay = startDate.getUTCDay()

  // Tuesday at cutoff closes the previous reporting week.
  let daysToSubtract: number
  if (currentDay === 2) {
    daysToSubtract = 7
  } else if (currentDay < 2) {
    // Sunday (0) or Monday (1) - go back to previous Tuesday
    daysToSubtract = currentDay + 5 // Sunday: 0+5=5, Monday: 1+5=6
  } else {
    // Wednesday (3) through Saturday (6) - go back to this week's Tuesday
    daysToSubtract = currentDay - 2
  }

  startDate.setUTCDate(startDate.getUTCDate() - daysToSubtract)
  startDate.setUTCHours(CONTRIBUTION_OVERVIEW_CUTOFF_HOUR_UTC, 0, 0, 0)

  return { startDate, endDate }
}

export function getLastTuesday1800(date: Date): Date {
  return getContributionOverviewWindow(date).startDate
}
