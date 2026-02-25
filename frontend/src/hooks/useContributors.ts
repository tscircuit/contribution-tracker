import { useEffect, useState } from "react"
import { getContributionOverviewsUrl, getPrAnalysisUrl } from "../constants/api"
import {
  type ContributorStats,
  type PrAnalysisResult,
  type PrsResultant,
} from "../types/contributor"

interface UseContributorsReturn {
  contributorsByUsername: Record<string, ContributorStats>
  dateUsed: string
  selectedWeek: string
  availableWeeks: string[]
  setSelectedWeek: (week: string) => void
  selectedContributor?: string
  lastEightWeeksContributions: (username: string) => any[]
  isModalOpen: boolean
  sortedContributors: [string, ContributorStats][]
  setSelectedContributor: (username?: string) => void
  setIsModalOpen: (isOpen: boolean) => void
  loading: boolean
  prsResultant: PrsResultant | undefined
  error: Error | null
}

export function useContributors(): UseContributorsReturn {
  const [contributorsByUsername, setContributorsByUsername] = useState<
    Record<string, ContributorStats>
  >({})
  const [dateUsed, setDateUsed] = useState<string>("")
  const [selectedWeek, setSelectedWeek] = useState<string>("")
  const [availableWeeks, setAvailableWeeks] = useState<string[]>([])
  const [prsResultant, setPrsResultant] = useState<PrsResultant>()
  const [selectedContributor, setSelectedContributor] = useState<string>()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [jsonRecords, setJsonRecords] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    async function loadContributors() {
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

        const allWeeks = jsonFiles.map((file: { name: string }) =>
          file.name.replace(".json", ""),
        )
        setAvailableWeeks(allWeeks)

        const weekToLoad = selectedWeek || allWeeks[0]
        setSelectedWeek(weekToLoad)
        setDateUsed(weekToLoad)

        const selectedFile = jsonFiles.find(
          (file: { name: string }) =>
            file.name.replace(".json", "") === weekToLoad,
        )
        if (!selectedFile) {
          throw new Error(`Could not find file for week: ${weekToLoad}`)
        }

        const jsonResp = await fetch(selectedFile.download_url)
        if (!jsonResp.ok)
          throw new Error(
            `Failed to fetch data (${selectedFile.name}): ${jsonResp.statusText} (${jsonResp.status})`,
          )
        const latestContributorsJson = await jsonResp.json()
        setContributorsByUsername(latestContributorsJson)

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
            const historicalRecord = await resp.json()
            const fileDate = new Date(file.name.replace(".json", ""))
            return { ...historicalRecord, date: fileDate }
          },
        )

        const historicalDataResults = await Promise.all(historicalDataPromises)
        const validHistoricalRecords = historicalDataResults.filter(
          (record) => record !== null,
        )
        setJsonRecords(validHistoricalRecords)

        const prAnalysisResp = await fetch(getPrAnalysisUrl(weekToLoad))
        if (!prAnalysisResp.ok)
          throw new Error(
            `Failed to fetch PR analysis (${weekToLoad}.json): ${prAnalysisResp.statusText} (${prAnalysisResp.status})`,
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

    loadContributors()
  }, [selectedWeek])

  const sortedContributors = Object.entries(contributorsByUsername).sort(
    (a, b) => {
      const scoreDiff = (b[1].score ?? 0) - (a[1].score ?? 0)
      if (scoreDiff !== 0) return scoreDiff
      return (b[1].prsMerged ?? 0) - (a[1].prsMerged ?? 0)
    },
  )

  const lastEightWeeksContributions = (username: string) => {
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
    contributorsByUsername,
    dateUsed,
    selectedWeek,
    availableWeeks,
    setSelectedWeek,
    prsResultant,
    selectedContributor,
    lastEightWeeksContributions,
    isModalOpen,
    sortedContributors,
    setSelectedContributor,
    setIsModalOpen,
    loading,
    error,
  }
}
