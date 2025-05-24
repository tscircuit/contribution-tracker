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
