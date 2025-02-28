import { ContributorOverview } from "./components/ContributorOverview"
import { Header } from "./components/Header"
import { Footer } from "./components/Footer"
import { PRsByRepository } from "./components/PRsByRepository"
import { Modal } from "./components/Modal"
import { useContributorsData } from "./hooks/useContributorsData"
import ContributorGraph from "./components/ContributorGraph"
import PRsByRepositoryPieChart from "./components/PRsByRepositoryPieChart"
import PRsByContributorPieChart from "./components/PRsByContributorPieChart"

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

        <PRsByRepository repositories={repoDetails} />
        <PRsByRepositoryPieChart repositories={repoDetails} />
        <PRsByContributorPieChart contributors={sortedContributors} />

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
        <Footer />
      </div>
    </div>
  )
}

export default App
