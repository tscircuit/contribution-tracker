import { useState } from "react"
import { type RepoData } from "../types/contributor"
import { getProfileUrl } from "../constants/github"

interface PRsByRepositoryProps {
  repositories: RepoData[]
  selectedContributor?: string
}

export function PRsByRepository({
  repositories,
  selectedContributor,
}: PRsByRepositoryProps) {
  const filteredRepositories = repositories
    .map((repo) => ({
      ...repo,
      prs: selectedContributor
        ? repo.prs.filter((pr) => pr.contributor === selectedContributor)
        : repo.prs,
    }))
    .filter((repo) => repo.prs.length > 0)

  if (filteredRepositories.length === 0) {
    return (
      <div className="text-center text-gray-500 py-4">
        No PRs found {selectedContributor ? `for ${selectedContributor}` : ""}
      </div>
    )
  }

  const [showAll, setShowAll] = useState(false)
  const displayedRepositories = showAll
    ? filteredRepositories
    : filteredRepositories.slice(0, 5)
  const hasMoreToShow = filteredRepositories.length > 5

  return (
    <div className={selectedContributor ? "" : "mb-12"}>
      {!selectedContributor && (
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          PRs by Repository
        </h2>
      )}

      <div className="space-y-4">
        {displayedRepositories.map((repo) => (
          <div
            key={repo.name}
            className="bg-white rounded-lg shadow-sm overflow-hidden"
          >
            <div className="px-4 py-3 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900">
                <a
                  href={`https://github.com/${repo.name}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800"
                >
                  {repo.name}
                </a>
              </h3>
            </div>

            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-20">
                      PR
                    </th>
                    <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-24">
                      Impact
                    </th>
                    {!selectedContributor && (
                      <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-32">
                        By
                      </th>
                    )}
                    <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Description
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {repo.prs.map((pr) => (
                    <tr key={pr.number} className="hover:bg-gray-50">
                      <td className="px-3 py-2 whitespace-nowrap text-sm">
                        <a
                          href={pr.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:text-blue-800"
                        >
                          #{pr.number}
                        </a>
                      </td>
                      <td className="px-3 py-2 whitespace-nowrap text-sm">
                        {pr.impact}
                      </td>
                      {!selectedContributor && (
                        <td className="px-3 py-2 whitespace-nowrap text-sm">
                          <a
                            href={getProfileUrl(pr.contributor)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-blue-800"
                          >
                            {pr.contributor}
                          </a>
                        </td>
                      )}
                      <td className="px-3 py-2 text-sm text-gray-900 break-words">
                        {pr.description}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ))}
      </div>

      {hasMoreToShow && (
        <div className="mt-4 text-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            {showAll
              ? "Show Less"
              : `Show More (${filteredRepositories.length - 5} more)`}
          </button>
        </div>
      )}
    </div>
  )
}
