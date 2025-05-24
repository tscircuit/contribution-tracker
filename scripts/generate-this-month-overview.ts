import { generateOverview } from ".."

function getLastMonthStart(): string {
  const today = new Date()
  today.setUTCDate(1)

  const monthName = today.toLocaleString("en-US", {
    month: "long",
    timeZone: "UTC",
  })
  const year = today.getUTCFullYear()
  console.log(`Generating overview for ${monthName} ${year}`)

  return today.toISOString().split("T")[0]
}

generateOverview(getLastMonthStart()).catch(console.error)
