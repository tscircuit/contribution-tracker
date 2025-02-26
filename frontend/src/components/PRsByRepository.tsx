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
      <div className="text-center text-gray-500 dark:text-gray-400 py-4">
        No PRs found {selectedContributor ? `for ${selectedContributor}` : ""}
      </div>
    )
  }

  return (
    <div className={selectedContributor ? "" : "mb-12"}>
      {!selectedContributor && (
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
          PRs by Repository
        </h2>
      )}

      <div className="space-y-4">
        {filteredRepositories.map((repo) => (
          <div
            key={repo.name}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-sm overflow-hidden"
          >
            <div className="px-4 py-3 border-b border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                <a
                  href={`https://github.com/${repo.name}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300"
                >
                  {repo.name}
                </a>
              </h3>
            </div>

            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                <thead className="bg-gray-50 dark:bg-gray-700">
                  <tr>
                    <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider w-20">
                      PR
                    </th>
                    <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider w-24">
                      Impact
                    </th>
                    {!selectedContributor && (
                      <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider w-32">
                        By
                      </th>
                    )}
                    <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      Description
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                  {repo.prs.map((pr) => (
                    <tr
                      key={pr.number}
                      className="hover:bg-gray-50 dark:hover:bg-gray-700"
                    >
                      <td className="px-3 py-2 whitespace-nowrap text-sm">
                        <a
                          href={pr.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300"
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
                            className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300"
                          >
                            {pr.contributor}
                          </a>
                        </td>
                      )}
                      <td className="px-3 py-2 text-sm text-gray-900 dark:text-gray-300 break-words">
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
    </div>
  )
}
