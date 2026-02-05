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

/**
 * Gets the most recent Tuesday at 18:30 UTC.
 * If the current time is before Tuesday 18:30 UTC, returns the previous Tuesday at 18:30 UTC.
 * If the current time is on or after Tuesday 18:30 UTC, returns the current Tuesday at 18:30 UTC.
 */
export function getLastTuesday1830(date: Date): Date {
  const result = new Date(date)

  // Get the current day (0 = Sunday, 2 = Tuesday)
  const currentDay = result.getUTCDay()

  // Calculate days to subtract to get to the most recent Tuesday
  // If it's Tuesday, check if we're past 18:30 UTC
  let daysToSubtract: number
  if (currentDay === 2) {
    // It's Tuesday - check if we're past 18:30 UTC
    const currentHour = result.getUTCHours()
    const currentMinute = result.getUTCMinutes()
    if (currentHour > 18 || (currentHour === 18 && currentMinute >= 30)) {
      // We're past 18:30 UTC on Tuesday, use today
      daysToSubtract = 0
    } else {
      // We're before 18:30 UTC on Tuesday, go back to last Tuesday
      daysToSubtract = 7
    }
  } else if (currentDay < 2) {
    // Sunday (0) or Monday (1) - go back to previous Tuesday
    daysToSubtract = currentDay + 5 // Sunday: 0+5=5, Monday: 1+5=6
  } else {
    // Wednesday (3) through Saturday (6) - go back to this week's Tuesday
    daysToSubtract = currentDay - 2
  }

  result.setUTCDate(result.getUTCDate() - daysToSubtract)
  result.setUTCHours(18, 30, 0, 0) // Set to 18:30 UTC

  return result
}
