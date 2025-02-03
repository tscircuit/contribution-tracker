import { useEffect, useState } from "react"
import { useContributorsData } from "../hooks/useContributorsData"

export default function ContributerGraph({ username }: { username: string }) {
  const [last8WeeksData, setLast8weeksData] = useState<any[]>([])
  const data = useContributorsData()
  console.log(data.last8WeeksData(username))
  return (
    <h1>
      {username} {data.selectedContributor ?? "none"}
    </h1>
  )
}
