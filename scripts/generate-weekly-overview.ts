import { generateWeeklyOverview } from ".."

generateWeeklyOverview().catch((error) => {
  console.error(error)
  process.exit(1)
})
