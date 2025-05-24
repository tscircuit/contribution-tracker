import { useState, useEffect } from "react"
import {
  type ContributorStats,
  type PrAnalysisResult,
  type PrsResultant,
} from "../types/contributor"
import { getContributionOverviewsUrl, getPrAnalysisUrl } from "../constants/api"

interface UseContributorsDataReturn {
  data: Record<string, ContributorStats>
  dateUsed: string
  selectedContributor?: string
  last8WeeksData: (username: string) => any[]
  isModalOpen: boolean
  sortedContributors: [string, ContributorStats][]
  setSelectedContributor: (username?: string) => void
  setIsModalOpen: (isOpen: boolean) => void
  loading: boolean
  prsResultant: PrsResultant | undefined
  error: Error | null
}

export function useContributorsData(): UseContributorsDataReturn {
  const [data, setData] = useState<Record<string, ContributorStats>>({})
  const [dateUsed, setDateUsed] = useState<string>("")
  const [prsResultant, setPrsResultant] = useState<PrsResultant>()
  const [selectedContributor, setSelectedContributor] = useState<string>()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [jsonRecords, setJsonRecords] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    async function fetchData() {
      setLoading(true)
      setError(null)
      try {
        const filesResp = await fetch(getContributionOverviewsUrl())
        if (!filesResp.ok)
          throw new Error(
            `Failed to fetch file list: ${filesResp.statusText} (${filesResp.status})`,
          )
        const files = await filesResp.json()

        const jsonFiles = files
          .filter((file: { name: string }) => file.name.endsWith(".json"))
          .sort((a: { name: string }, b: { name: string }) =>
            b.name.localeCompare(a.name),
          )
        if (jsonFiles.length === 0)
          throw new Error("No JSON overview files found")

        const latestFile = jsonFiles[0]
        const date = latestFile.name.replace(".json", "")
        setDateUsed(date)

        const jsonResp = await fetch(latestFile.download_url)
        if (!jsonResp.ok)
          throw new Error(
            `Failed to fetch latest data (${latestFile.name}): ${jsonResp.statusText} (${jsonResp.status})`,
          )
        const latestJsonData = await jsonResp.json()
        setData(latestJsonData)

        const eightWeeksAgo = new Date()
        eightWeeksAgo.setUTCDate(eightWeeksAgo.getUTCDate() - 8 * 7)

        const historicalFiles = jsonFiles.filter((file: { name: string }) => {
          const fileName = file.name.replace(".json", "")
          const fileDate = new Date(fileName)
          return fileDate >= eightWeeksAgo
        })

        const historicalDataPromises = historicalFiles.map(
          async (file: any) => {
            const resp = await fetch(file.download_url)
            if (!resp.ok) {
              console.warn(
                `Failed to fetch historical data for ${file.name}: ${resp.statusText}`,
              )
              return null
            }
            const jsonData = await resp.json()
            const fileDate = new Date(file.name.replace(".json", ""))
            return { ...jsonData, date: fileDate }
          },
        )

        const historicalDataResults = await Promise.all(historicalDataPromises)
        const validHistoricalData = historicalDataResults.filter(
          (data) => data !== null,
        )
        setJsonRecords(validHistoricalData)

        const prAnalysisResp = await fetch(getPrAnalysisUrl(date))
        if (!prAnalysisResp.ok)
          throw new Error(
            `Failed to fetch PR analysis (${date}.json): ${prAnalysisResp.statusText} (${prAnalysisResp.status})`,
          )
        const prAnalysis = (await prAnalysisResp.json()) as PrAnalysisResult[]

        const prsByContributor: Record<string, PrAnalysisResult[]> = {}
        const prsByRepo: Record<string, PrAnalysisResult[]> = {}
        for (const pr of prAnalysis) {
          if (!prsByRepo[pr.repo]) {
            prsByRepo[pr.repo] = []
          }
          prsByRepo[pr.repo].push(pr)
          if (!prsByContributor[pr.contributor]) {
            prsByContributor[pr.contributor] = []
          }
          prsByContributor[pr.contributor].push(pr)
        }

        setPrsResultant({
          prsByContributors: prsByContributor,
          prsByRepos: prsByRepo,
        })
      } catch (error) {
        console.error("Error fetching contributor data:", error)
        setError(error instanceof Error ? error : new Error(String(error)))
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  const sortedContributors = Object.entries(data).sort((a, b) => {
    const scoreDiff = (b[1].score ?? 0) - (a[1].score ?? 0)
    if (scoreDiff !== 0) return scoreDiff
    return (b[1].prsMerged ?? 0) - (a[1].prsMerged ?? 0)
  })

  const last8WeeksData = (username: string) => {
    if (!jsonRecords || jsonRecords.length === 0) return []

    const userRecords = jsonRecords
      .filter((record) => record[username])
      .map((record) => ({
        date: new Date(record.date),
        ...(record[username] || {}),
      }))

    const uniqueDateRecords = userRecords.filter(
      (record, index, array) =>
        index ===
        array.findIndex((r) => r.date.getTime() === record.date.getTime()),
    )

    const sortedRecords = uniqueDateRecords.sort(
      (a, b) => a.date.getTime() - b.date.getTime(),
    )

    return sortedRecords.map(({ date: _date, ...x }) => ({
      date: _date.toLocaleDateString("en-US", {
        month: "2-digit",
        day: "2-digit",
        timeZone: "UTC",
      }),
      ...x,
    }))
  }

  return {
    data,
    dateUsed,
    prsResultant,
    selectedContributor,
    last8WeeksData,
    isModalOpen,
    sortedContributors,
    setSelectedContributor,
    setIsModalOpen,
    loading,
    error,
  }
}
