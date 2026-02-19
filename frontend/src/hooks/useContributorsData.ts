import { useState, useEffect, useCallback } from "react"
import {
  type ContributorStats,
  type PrAnalysisResult,
  type PrsResultant,
} from "../types/contributor"
import { getContributionOverviewsUrl, getPrAnalysisUrl } from "../constants/api"

const MAX_WEEKS = 30

interface UseContributorsDataReturn {
  data: Record<string, ContributorStats>
  dateUsed: string
  selectedContributor?: string
  selectedWeek: string
  availableWeeks: string[]
  setSelectedWeek: (week: string) => void
  lastWeeksData: (username: string) => any[]
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
  const [availableWeeks, setAvailableWeeks] = useState<string[]>([])
  const [selectedWeek, setSelectedWeek] = useState<string>("")
  const [overviewFileMap, setOverviewFileMap] = useState<
    Record<string, string>
  >({})

  useEffect(() => {
    async function fetchAvailableWeeks() {
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

        const limitedJsonFiles = jsonFiles.slice(0, MAX_WEEKS)
        if (limitedJsonFiles.length === 0)
          throw new Error("No JSON overview files found")

        const weeks = limitedJsonFiles.map((file: { name: string }) =>
          file.name.replace(".json", ""),
        )

        const fileMap = limitedJsonFiles.reduce(
          (
            acc: Record<string, string>,
            file: { name: string; download_url: string },
          ) => {
            acc[file.name.replace(".json", "")] = file.download_url
            return acc
          },
          {},
        )

        setAvailableWeeks(weeks)
        setOverviewFileMap(fileMap)

        const url = new URL(window.location.href)
        const requestedDate = url.searchParams.get("date") || ""
        const initialWeek = weeks.includes(requestedDate)
          ? requestedDate
          : weeks[0]
        setSelectedWeek(initialWeek)
      } catch (err) {
        console.error("Error fetching available weeks:", err)
        setError(err instanceof Error ? err : new Error(String(err)))
        setLoading(false)
      }
    }

    fetchAvailableWeeks()
  }, [])

  useEffect(() => {
    if (!selectedWeek || Object.keys(overviewFileMap).length === 0) return
    async function fetchDataForWeek(week: string) {
      setLoading(true)
      setError(null)
      try {
        const downloadUrl = overviewFileMap[week]
        if (!downloadUrl)
          throw new Error(`No download URL found for week ${week}`)

        const jsonResp = await fetch(downloadUrl)
        if (!jsonResp.ok)
          throw new Error(
            `Failed to fetch data for ${week}: ${jsonResp.statusText} (${jsonResp.status})`,
          )
        const weekJsonData = await jsonResp.json()
        setData(weekJsonData)
        setDateUsed(week)

        const historicalDataPromises = Object.entries(overviewFileMap).map(
          async ([fileWeek, url]) => {
            const resp = await fetch(url)
            if (!resp.ok) {
              console.warn(
                `Failed to fetch historical data for ${fileWeek}: ${resp.statusText}`,
              )
              return null
            }
            const jsonData = await resp.json()
            const fileDate = new Date(fileWeek)
            return { ...jsonData, date: fileDate }
          },
        )

        const historicalDataResults = await Promise.all(historicalDataPromises)
        const validHistoricalData = historicalDataResults.filter(
          (entry) => entry !== null,
        )
        setJsonRecords(validHistoricalData)

        const prAnalysisResp = await fetch(getPrAnalysisUrl(week))
        if (!prAnalysisResp.ok)
          throw new Error(
            `Failed to fetch PR analysis (${week}.json): ${prAnalysisResp.statusText} (${prAnalysisResp.status})`,
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
      } catch (err) {
        console.error("Error fetching contributor data:", err)
        setError(err instanceof Error ? err : new Error(String(err)))
      } finally {
        setLoading(false)
      }
    }

    fetchDataForWeek(selectedWeek)
  }, [selectedWeek, overviewFileMap])

  useEffect(() => {
    if (!selectedWeek) return
    const url = new URL(window.location.href)
    url.searchParams.set("date", selectedWeek)
    window.history.replaceState({}, "", url.toString())
  }, [selectedWeek])

  const sortedContributors = Object.entries(data).sort((a, b) => {
    const scoreDiff = (b[1].score ?? 0) - (a[1].score ?? 0)
    if (scoreDiff !== 0) return scoreDiff
    return (b[1].prsMerged ?? 0) - (a[1].prsMerged ?? 0)
  })

  const lastWeeksData = useCallback(
    (username: string) => {
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
    },
    [jsonRecords],
  )

  return {
    data,
    dateUsed,
    selectedWeek,
    availableWeeks,
    setSelectedWeek,
    prsResultant,
    selectedContributor,
    lastWeeksData,
    isModalOpen,
    sortedContributors,
    setSelectedContributor,
    setIsModalOpen,
    loading,
    error,
  }
}
