import { useCallback, useEffect, useMemo, useRef, useState } from "react"
import { getContributionOverviewsUrl, getPrAnalysisUrl } from "../constants/api"
import {
  type ContributorStats,
  type PrAnalysisResult,
  type PrsResultant,
} from "../types/contributor"

interface UseContributorsReturn {
  contributorsByUsername: Record<string, ContributorStats>
  selectedWeek: string | null
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
  const [selectedWeek, setSelectedWeek] = useState<string | null>(null)
  const [availableWeeks, setAvailableWeeks] = useState<string[]>([])
  const [prsResultant, setPrsResultant] = useState<PrsResultant>()
  const [selectedContributor, setSelectedContributor] = useState<string>()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [jsonRecords, setJsonRecords] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  const isInitialLoad = useRef(true)

  useEffect(() => {
    let cancelled = false

    async function loadContributors() {
      setLoading(true)
      setError(null)
      try {
        const filesResp = await fetch(getContributionOverviewsUrl())
        if (cancelled) return
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

        if (cancelled) return
        setAvailableWeeks(allWeeks)

        let weekToLoad: string
        if (selectedWeek === null) {
          weekToLoad = allWeeks[0]
          setSelectedWeek(weekToLoad)
          isInitialLoad.current = false
        } else {
          weekToLoad = selectedWeek
        }

        const selectedFile = jsonFiles.find(
          (file: { name: string }) =>
            file.name.replace(".json", "") === weekToLoad,
        )
        if (!selectedFile) {
          throw new Error(`Could not find file for week: ${weekToLoad}`)
        }

        const selectedWeekDate = new Date(weekToLoad)
        const eightWeeksAgo = new Date(selectedWeekDate)
        eightWeeksAgo.setUTCDate(eightWeeksAgo.getUTCDate() - 8 * 7)

        const historicalFiles = jsonFiles.filter((file: { name: string }) => {
          const fileDate = new Date(file.name.replace(".json", ""))
          return fileDate >= eightWeeksAgo && fileDate <= selectedWeekDate
        })

        const [weekJsonResp, historicalDataResults, prAnalysisResp] =
          await Promise.all([
            fetch(selectedFile.download_url),
            Promise.all(
              historicalFiles.map(async (file: any) => {
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
              }),
            ),
            fetch(getPrAnalysisUrl(weekToLoad)),
          ])

        if (cancelled) return

        if (!weekJsonResp.ok)
          throw new Error(
            `Failed to fetch data (${selectedFile.name}): ${weekJsonResp.statusText} (${weekJsonResp.status})`,
          )
        if (!prAnalysisResp.ok)
          throw new Error(
            `Failed to fetch PR analysis (${weekToLoad}.json): ${prAnalysisResp.statusText} (${prAnalysisResp.status})`,
          )

        const [latestContributorsJson, prAnalysis] = await Promise.all([
          weekJsonResp.json(),
          prAnalysisResp.json() as Promise<PrAnalysisResult[]>,
        ])

        if (cancelled) return

        const validHistoricalRecords = historicalDataResults.filter(
          (record) => record !== null,
        )

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

        setContributorsByUsername(latestContributorsJson)
        setJsonRecords(validHistoricalRecords)
        setPrsResultant({
          prsByContributors: prsByContributor,
          prsByRepos: prsByRepo,
        })
      } catch (error) {
        if (cancelled) return
        console.error("Error fetching contributor data:", error)
        setError(error instanceof Error ? error : new Error(String(error)))
      } finally {
        if (!cancelled) {
          setLoading(false)
        }
      }
    }

    loadContributors()

    return () => {
      cancelled = true
    }
  }, [selectedWeek])

  const sortedContributors = useMemo(
    () =>
      Object.entries(contributorsByUsername).sort((a, b) => {
        const scoreDiff = (b[1].score ?? 0) - (a[1].score ?? 0)
        if (scoreDiff !== 0) return scoreDiff
        return (b[1].prsMerged ?? 0) - (a[1].prsMerged ?? 0)
      }),
    [contributorsByUsername],
  )

  const lastEightWeeksContributions = useCallback(
    (username: string) => {
      if (jsonRecords.length === 0) return []

      const seen = new Set<number>()
      const records: { date: Date; [key: string]: any }[] = []

      for (const record of jsonRecords) {
        if (!record[username]) continue
        const timestamp = new Date(record.date).getTime()
        if (seen.has(timestamp)) continue
        seen.add(timestamp)
        records.push({ date: new Date(record.date), ...record[username] })
      }

      records.sort((a, b) => a.date.getTime() - b.date.getTime())

      return records.map(({ date, ...rest }) => ({
        date: date.toLocaleDateString("en-US", {
          month: "2-digit",
          day: "2-digit",
          timeZone: "UTC",
        }),
        ...rest,
      }))
    },
    [jsonRecords],
  )

  return {
    contributorsByUsername,
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
