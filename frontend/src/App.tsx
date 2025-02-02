import { useEffect, useState } from "react"
import { GithubIcon } from "lucide-react"
import { ContributorOverview } from "./components/ContributorOverview"
import { PRsByRepository } from "./components/PRsByRepository"
import { Modal } from "./components/Modal"
import {
  type ContributorStats,
  type PR,
  type RepoData,
} from "./types/contributor"
import {
  getContributionOverviewsUrl,
  getContributionOverviewMarkdownUrl,
  getPullRequestUrl,
} from "./constants/api"

function App() {
  const [data, setData] = useState<Record<string, ContributorStats>>({})
  const [dateUsed, setDateUsed] = useState<string>("")
  const [repositories, setRepositories] = useState<Record<string, number>>({})
  const [repoDetails, setRepoDetails] = useState<RepoData[]>([])
  const [selectedContributor, setSelectedContributor] = useState<string>()
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    async function fetchData() {
      try {
        // First fetch the list of files
        const filesResp = await fetch(getContributionOverviewsUrl())
        const files = await filesResp.json()

        // Filter for JSON files and sort by name to get the latest
        const jsonFiles = files
          .filter((file: { name: string }) => file.name.endsWith(".json"))
          .sort((a: { name: string }, b: { name: string }) =>
            b.name.localeCompare(a.name),
          )

        if (jsonFiles.length === 0) throw new Error("No JSON files found")

        const latestFile = jsonFiles[0]
        const date = latestFile.name.replace(".json", "")
        setDateUsed(date)

        // Fetch the JSON data
        const jsonResp = await fetch(latestFile.download_url)
        const jsonData = await jsonResp.json()
        setData(jsonData)

        // Fetch the markdown file
        const mdResp = await fetch(getContributionOverviewMarkdownUrl(date))
        const markdown = await mdResp.text()

        // Parse repository data from markdown
        const repoStats: Record<string, number> = {}
        const repoDetails: RepoData[] = []

        let currentRepo: string | null = null
        let currentPRs: PR[] = []

        markdown.split("\n").forEach((line) => {
          // Match repository headers
          const repoMatch = line.match(/### \[(.*?)\]/)
          if (repoMatch) {
            if (currentRepo && currentPRs.length > 0) {
              repoDetails.push({ name: currentRepo, prs: [...currentPRs] })
            }
            currentRepo = repoMatch[1]
            currentPRs = []
            return
          }

          // Match PR rows in tables
          const prMatch = line.match(
            /\| \[#(\d+)\].*? \| (🐳 Major|🐙 Minor|🐌 Tiny) \| (.*?) \| (.*?) \|/,
          )
          if (prMatch && currentRepo) {
            repoStats[currentRepo] = (repoStats[currentRepo] || 0) + 1
            currentPRs.push({
              number: parseInt(prMatch[1]),
              impact: prMatch[2] as PR["impact"],
              contributor: prMatch[3],
              description: prMatch[4],
              url: getPullRequestUrl(currentRepo, parseInt(prMatch[1])),
            })
          }
        })

        // Add the last repo if exists
        if (currentRepo && currentPRs.length > 0) {
          repoDetails.push({ name: currentRepo, prs: currentPRs })
        }

        setRepositories(repoStats)
        setRepoDetails(repoDetails)
      } catch (error) {
        console.error("Error fetching data:", error)
      }
    }

    fetchData()
  }, [])

  const getStarCount = (stars?: string) => (stars ?? "").length

  const sortedContributors = Object.entries(data).sort((a, b) => {
    // Primary sort by star count
    const starDiff = getStarCount(b[1].stars) - getStarCount(a[1].stars)
    if (starDiff !== 0) return starDiff

    // Secondary sort by PR count
    return (b[1].prsMerged ?? 0) - (a[1].prsMerged ?? 0)
  })

  return (
    <div className="min-h-screen bg-gray-100 py-6 sm:py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between mb-6 sm:mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
            TSCircuit Contributors
          </h1>
          <div className="flex items-center gap-4 mt-2 sm:mt-0">
            <a
              href="https://github.com/tscircuit/contribution-tracker"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
            >
              <GithubIcon className="w-5 h-5" />
              View on GitHub
            </a>
            <span className="text-sm text-gray-600">
              Last updated: {dateUsed}
            </span>
          </div>
        </div>

        <ContributorOverview
          contributors={sortedContributors}
          onSelectContributor={(username) => {
            setSelectedContributor(username)
            setIsModalOpen(true)
          }}
        />

        <PRsByRepository repositories={repoDetails} />

        <Modal
          isOpen={isModalOpen}
          onClose={() => {
            setIsModalOpen(false)
            setSelectedContributor(undefined)
          }}
          title={
            selectedContributor ? `Contributions by ${selectedContributor}` : ""
          }
        >
          {selectedContributor && (
            <PRsByRepository
              repositories={repoDetails}
              selectedContributor={selectedContributor}
            />
          )}
        </Modal>
      </div>
    </div>
  )
}

export default App
