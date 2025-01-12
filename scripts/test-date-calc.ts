const now = new Date("2025-01-12") // using fixed date for testing
const weekStart = new Date(now)
weekStart.setDate(weekStart.getDate() - 6) // Subtract 6 days for 7-day window (inclusive)

// Format dates for display
const formatDate = (date: Date): string => date.toISOString().split("T")[0]

console.log(`Current date: ${formatDate(now)}`)
console.log(`Weekly window start date: ${formatDate(weekStart)}`)

// Calculate and verify the day difference (adding 1 for inclusive counting)
const diffTime = Math.abs(now.getTime() - weekStart.getTime())
const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) + 1 // Add 1 for inclusive counting

console.log(`Number of days in window: ${diffDays}`)
console.log(`Is exactly 7 days: ${diffDays === 7 ? "✓" : "✗"}`)
console.log("\nExample dates in window:")
for (let i = 0; i < 7; i++) {
  const date = new Date(weekStart)
  date.setDate(weekStart.getDate() + i)
  console.log(formatDate(date))
}
