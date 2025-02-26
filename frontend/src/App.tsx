import { ContributorOverview } from "./components/ContributorOverview"
import { Header } from "./components/Header"
import { Footer } from "./components/Footer"
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
  } = useContributorsData()

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-200">
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
