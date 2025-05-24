import { generateOverview } from ".."

function getLastMonthStart(): string {
  const today = new Date()
  // Set to first day of current month
  today.setDate(1)

  const monthName = today.toLocaleString("en-US", { month: "long" })
  const year = today.getFullYear()
  console.log(`Generating overview for ${monthName} ${year}`)

  return today.toISOString().split("T")[0]
}

generateOverview(getLastMonthStart()).catch(console.error)
