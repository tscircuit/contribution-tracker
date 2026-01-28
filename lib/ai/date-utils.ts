export function getLastWednesday(date: Date): Date {
  const result = new Date(date)
  const currentDay = result.getUTCDay()
  const daysToSubtract = (currentDay + 4) % 7

  result.setUTCDate(result.getUTCDate() - daysToSubtract)
  result.setUTCHours(0, 0, 0, 0)
  return result
}
