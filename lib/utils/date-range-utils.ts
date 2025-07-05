/**
 * Utility functions for proper date range filtering in weekly contribution calculations
 */

/**
 * Calculate the end date for a given weekly start date
 * Weekly periods run from Wednesday to Tuesday (inclusive)
 */
export function getWeekEndDate(startDate: string): string {
  const start = new Date(startDate)
  const end = new Date(start)
  end.setDate(start.getDate() + 6) // 6 days later (Wednesday to Tuesday)
  end.setHours(23, 59, 59, 999) // End of day
  return end.toISOString().split('T')[0]
}

/**
 * Check if a date falls within a weekly period (start to end inclusive)
 */
export function isDateInWeekRange(date: Date, startDate: string, endDate: string): boolean {
  const start = new Date(startDate)
  start.setHours(0, 0, 0, 0)
  
  const end = new Date(endDate)
  end.setHours(23, 59, 59, 999)
  
  return date >= start && date <= end
}

/**
 * Filter items by date range using a date extractor function
 */
export function filterByDateRange<T>(
  items: T[],
  startDate: string,
  endDate: string,
  dateExtractor: (item: T) => Date | null
): T[] {
  return items.filter(item => {
    const itemDate = dateExtractor(item)
    if (!itemDate) return false
    return isDateInWeekRange(itemDate, startDate, endDate)
  })
}