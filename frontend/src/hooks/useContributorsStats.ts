import { useState, useEffect, useCallback } from "react"
import {
  type ContributorStats,
  type PrAnalysisResult,
  type PrsResultant,
} from "../types/contributor"
import { getContributionOverviewsUrl, getPrAnalysisUrl } from "../constants/api"

const MAX_WEEKS = 30
const HISTORY_WINDOW_WEEKS = 8

type WeeklyContributors = Record<string, ContributorStats>
type OverviewWeekLookup = Record<string, string>

interface OverviewFileEntry {
  name: string
  download_url: string
}

interface HistoricalSnapshot {
  weekStart: Date
  contributorsByName: WeeklyContributors
}

type ContributorTrendPoint = ContributorStats & { date: string }

interface UseContributorsStateReturn {
  contributors: WeeklyContributors
  dateUsed: string
  selectedContributor?: string
  selectedWeek: string
  availableWeeks: string[]
  setSelectedWeek: (week: string) => void
  getContributorTrend: (username: string) => ContributorTrendPoint[]
  isModalOpen: boolean
  sortedContributors: [string, ContributorStats][]
  setSelectedContributor: (username?: string) => void
  setIsModalOpen: (isOpen: boolean) => void
  loading: boolean
  prsResultant: PrsResultant | undefined
  error: Error | null
}

async function fetchJson<T>(url: string, errorPrefix: string): Promise<T> {
  const response = await fetch(url)
  if (!response.ok) {
    throw new Error(
      `${errorPrefix}: ${response.statusText} (${response.status})`,
    )
  }
  return (await response.json()) as T
}

function parseOverviewWeeks(entries: OverviewFileEntry[]): {
  weeks: string[]
  weekLookup: OverviewWeekLookup
} {
  const latestJsonEntries = entries
    .filter((entry) => entry.name.endsWith(".json"))
    .sort((left, right) => right.name.localeCompare(left.name))
    .slice(0, MAX_WEEKS)

  if (latestJsonEntries.length === 0) {
    throw new Error("No JSON overview files found")
  }

  const weeks = latestJsonEntries.map((entry) =>
    entry.name.replace(".json", ""),
  )
  const weekLookup = latestJsonEntries.reduce<OverviewWeekLookup>(
    (acc, entry) => {
      acc[entry.name.replace(".json", "")] = entry.download_url
      return acc
    },
    {},
  )

  return { weeks, weekLookup }
}

function getInitialWeek(weeks: string[]): string {
  const url = new URL(window.location.href)
  const requestedWeek = url.searchParams.get("date") || ""
  return weeks.includes(requestedWeek) ? requestedWeek : weeks[0]
}

function getRecentWeeks(weeks: string[], windowInWeeks: number): string[] {
  const threshold = new Date()
  threshold.setUTCDate(threshold.getUTCDate() - windowInWeeks * 7)

  return weeks.filter((week) => {
    const parsedWeek = new Date(week)
    return !Number.isNaN(parsedWeek.getTime()) && parsedWeek >= threshold
  })
}

function mapPrs(prs: PrAnalysisResult[]): PrsResultant {
  const prsByContributor: Record<string, PrAnalysisResult[]> = {}
  const prsByRepo: Record<string, PrAnalysisResult[]> = {}

  for (const pr of prs) {
    if (!prsByRepo[pr.repo]) {
      prsByRepo[pr.repo] = []
    }
    prsByRepo[pr.repo].push(pr)

    if (!prsByContributor[pr.contributor]) {
      prsByContributor[pr.contributor] = []
    }
    prsByContributor[pr.contributor].push(pr)
  }

  return {
    prsByContributors: prsByContributor,
    prsByRepos: prsByRepo,
  }
}

async function fetchHistoricalSnapshots(
  weeksToFetch: string[],
  weekLookup: OverviewWeekLookup,
): Promise<HistoricalSnapshot[]> {
  const snapshotPromises = weeksToFetch.map(async (week) => {
    const weekUrl = weekLookup[week]
    if (!weekUrl) return null

    const response = await fetch(weekUrl)
    if (!response.ok) {
      console.warn(
        `Failed to fetch historical overview for ${week}: ${response.statusText}`,
      )
      return null
    }

    const contributorsByName = (await response.json()) as WeeklyContributors
    return {
      weekStart: new Date(week),
      contributorsByName,
    }
  })

  const snapshots = await Promise.all(snapshotPromises)
  return snapshots.filter(
    (snapshot): snapshot is HistoricalSnapshot => snapshot !== null,
  )
}

function formatWeekDate(weekStart: Date): string {
  return weekStart.toLocaleDateString("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    timeZone: "UTC",
  })
}

export function useContributorsStats(): UseContributorsStateReturn {
  const [contributors, setContributors] = useState<WeeklyContributors>({})
  const [dateUsed, setDateUsed] = useState<string>("")
  const [prsResultant, setPrsResultant] = useState<PrsResultant>()
  const [selectedContributor, setSelectedContributor] = useState<string>()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [historicalSnapshots, setHistoricalSnapshots] = useState<
    HistoricalSnapshot[]
  >([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)
  const [availableWeeks, setAvailableWeeks] = useState<string[]>([])
  const [selectedWeek, setSelectedWeek] = useState<string>("")
  const [overviewWeekLookup, setOverviewWeekLookup] =
    useState<OverviewWeekLookup>({})

  useEffect(() => {
    async function loadAvailableWeeks() {
      setLoading(true)
      setError(null)

      try {
        const overviewEntries = await fetchJson<OverviewFileEntry[]>(
          getContributionOverviewsUrl(),
          "Failed to fetch file list",
        )

        const { weeks, weekLookup } = parseOverviewWeeks(overviewEntries)
        setAvailableWeeks(weeks)
        setOverviewWeekLookup(weekLookup)
        setSelectedWeek(getInitialWeek(weeks))
      } catch (err) {
        console.error("Error fetching available weeks:", err)
        setError(err instanceof Error ? err : new Error(String(err)))
        setLoading(false)
      }
    }

    loadAvailableWeeks()
  }, [])

  useEffect(() => {
    if (!selectedWeek || Object.keys(overviewWeekLookup).length === 0) return

    async function loadWeekStats(week: string) {
      setLoading(true)
      setError(null)

      try {
        const weekUrl = overviewWeekLookup[week]
        if (!weekUrl) {
          throw new Error(`No download URL found for week ${week}`)
        }

        const weekContributors = await fetchJson<WeeklyContributors>(
          weekUrl,
          `Failed to fetch overview for ${week}`,
        )

        setContributors(weekContributors)
        setDateUsed(week)

        const recentWeeks = getRecentWeeks(availableWeeks, HISTORY_WINDOW_WEEKS)
        const weeksToFetch = Array.from(new Set([week, ...recentWeeks]))

        const snapshots = await fetchHistoricalSnapshots(
          weeksToFetch,
          overviewWeekLookup,
        )
        setHistoricalSnapshots(snapshots)

        const prAnalysis = await fetchJson<PrAnalysisResult[]>(
          getPrAnalysisUrl(week),
          `Failed to fetch PR analysis (${week}.json)`,
        )
        setPrsResultant(mapPrs(prAnalysis))
      } catch (err) {
        console.error("Error fetching contributor stats:", err)
        setError(err instanceof Error ? err : new Error(String(err)))
      } finally {
        setLoading(false)
      }
    }

    loadWeekStats(selectedWeek)
  }, [selectedWeek, overviewWeekLookup, availableWeeks])

  useEffect(() => {
    if (!selectedWeek) return
    const url = new URL(window.location.href)
    url.searchParams.set("date", selectedWeek)
    window.history.replaceState({}, "", url.toString())
  }, [selectedWeek])

  const sortedContributors = Object.entries(contributors).sort(
    (left, right) => {
      const scoreDiff = (right[1].score ?? 0) - (left[1].score ?? 0)
      if (scoreDiff !== 0) return scoreDiff
      return (right[1].prsMerged ?? 0) - (left[1].prsMerged ?? 0)
    },
  )

  const getContributorTrend = useCallback(
    (username: string): ContributorTrendPoint[] => {
      if (historicalSnapshots.length === 0) return []

      const timeline = historicalSnapshots
        .map((snapshot) => {
          const stats = snapshot.contributorsByName[username]
          if (!stats) return null
          return {
            weekStart: snapshot.weekStart,
            ...stats,
          }
        })
        .filter(
          (
            entry,
          ): entry is ContributorStats & {
            weekStart: Date
          } => entry !== null,
        )

      const uniqueByWeek = timeline.filter(
        (record, index, array) =>
          index ===
          array.findIndex(
            (existing) =>
              existing.weekStart.getTime() === record.weekStart.getTime(),
          ),
      )

      const sorted = uniqueByWeek.sort(
        (first, second) =>
          first.weekStart.getTime() - second.weekStart.getTime(),
      )

      return sorted.map(({ weekStart, ...stats }) => ({
        date: formatWeekDate(weekStart),
        ...stats,
      }))
    },
    [historicalSnapshots],
  )

  return {
    contributors,
    dateUsed,
    selectedWeek,
    availableWeeks,
    setSelectedWeek,
    prsResultant,
    selectedContributor,
    getContributorTrend,
    isModalOpen,
    sortedContributors,
    setSelectedContributor,
    setIsModalOpen,
    loading,
    error,
  }
}
