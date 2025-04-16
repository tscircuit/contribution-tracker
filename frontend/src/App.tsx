import { ContributorOverview } from "./components/ContributorOverview"
import { Header } from "./components/Header"
import { Footer } from "./components/Footer"
import { Modal } from "./components/Modal"
import { useContributorsData } from "./hooks/useContributorsData"
import ContributorGraph from "./components/ContributorGraph"
import { PrsTable } from "./components/PrsTable"
import { CURRENT_MILESTONE } from "./types/milestones"
import { AlertCircleIcon } from "lucide-react"
import { type PrAnalysisResult } from "./types/contributor"

const PrSection = ({
  title,
  prsData,
}: {
  title: string
  prsData?: Record<string, PrAnalysisResult[]>
}) => {
  if (!prsData || Object.keys(prsData).length === 0) {
    return null
  }

  return (
    <>
      <div className="mb-4">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">{title}</h2>
        <div className="text-sm text-gray-600">
          Current Milestone:{" "}
          <span className="font-semibold">{CURRENT_MILESTONE.name}</span>
          <span className="ml-2 text-xs bg-blue-100 text-blue-800 px-2 py-0.5 rounded">
            {CURRENT_MILESTONE.startDate} to {CURRENT_MILESTONE.endDate}
          </span>
        </div>
      </div>
      {Object.entries(prsData).map(([key, prs]) => {
        if (prs && prs.length > 0) {
          return <PrsTable key={key} prs={prs} name={key} />
        }
        return null
      })}
    </>
  )
}

function App() {
  const {
    dateUsed,
    prsResultant,
    selectedContributor,
    isModalOpen,
    sortedContributors,
    setSelectedContributor,
    setIsModalOpen,
    loading,
    error,
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

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="max-w-lg w-full mx-auto p-6 sm:p-8 bg-white rounded-xl shadow-lg border border-red-200">
          <div className="flex flex-col items-center text-center">
            <AlertCircleIcon className="h-10 w-10 text-red-500 mb-4" />
            <h2 className="text-xl sm:text-2xl font-semibold text-red-700 mb-3">
              Error Fetching Data
            </h2>
            <p className="text-gray-600 mb-6 text-sm sm:text-base">
              We encountered an issue retrieving the contribution data. Please
              try again later.
            </p>
            {error.message && (
              <details className="w-full text-left bg-red-50 p-3 rounded-md border border-red-200">
                <summary className="text-sm font-medium text-red-800 cursor-pointer hover:text-red-900">
                  Show Error Details
                </summary>
                <pre className="mt-2 text-xs text-red-700 bg-transparent p-0 rounded overflow-auto whitespace-pre-wrap break-words">
                  {error.message}
                </pre>
              </details>
            )}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto py-8 sm:py-12 px-4 sm:px-6 lg:px-8 space-y-8">
        <Header dateUsed={dateUsed} />

        <ContributorOverview
          contributors={sortedContributors}
          onSelectContributor={(username) => {
            setSelectedContributor(username)
            setIsModalOpen(true)
          }}
        />

        <PrSection
          title="PRs by Repository"
          prsData={prsResultant?.prsByRepos}
        />

        <PrSection
          title="PRs by Contributors"
          prsData={prsResultant?.prsByContributors}
        />

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
          {selectedContributor &&
            prsResultant?.prsByContributors[selectedContributor] && (
              <PrsTable
                inModal
                prs={prsResultant?.prsByContributors[selectedContributor]}
                name={selectedContributor}
              />
            )}
        </Modal>
        <Footer />
      </div>
    </div>
  )
}

export default App
