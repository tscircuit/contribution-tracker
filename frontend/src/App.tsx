import { GithubIcon } from "lucide-react"
import { ContributorOverview } from "./components/ContributorOverview"
import { PRsByRepository } from "./components/PRsByRepository"
import { Modal } from "./components/Modal"
import { useContributorsData } from "./hooks/useContributorsData"
import ContributorGraph from "./components/ContributorGraph"

function App() {
  const {
    dateUsed,
    repoDetails,
    selectedContributor,
    isModalOpen,
    sortedContributors,
    setSelectedContributor,
    setIsModalOpen,
    loading,
  } = useContributorsData()

  if (loading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
        <div className="w-48">
          <div className="loading">
            <div className="loading-bar"></div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-100 py-6 sm:py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between mb-6 sm:mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
            TSCircuit Contributors
          </h1>
          <div className="grid grid-cols-1 md:flex place-items-center md:items-center gap-3 mt-2 sm:mt-0">
            <a
              href="https://github.com/tscircuit/contribution-tracker"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition-colors w-full sm:w-auto"
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
            <ContributorGraph username={selectedContributor} />
          )}
          {selectedContributor && (
            <PRsByRepository
              repositories={repoDetails}
              selectedContributor={selectedContributor}
            />
          )}
        </Modal>
        <a href="https://github.com/tscircuit/contribution-tracker/blob/main/SYNC-DISCORD-ROLES.md">
          <div className="break-words text-sm text-center underline underline-offset-4 text-gray-600 transition ease-in-out hover:text-blue-800">
            Learn how to sync your GitHub contributions with Discord roles
          </div>
        </a>
      </div>
    </div>
  )
}

export default App
