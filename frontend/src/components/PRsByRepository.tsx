import { type RepoData } from "../types/contributor"
import { getProfileUrl } from "../constants/github"
import {
  BG_CARD,
  BG_CARD_HOVER,
  BORDER_DEFAULT,
  LINK_PRIMARY,
  TEXT_PRIMARY,
  TEXT_SECONDARY,
} from "../constants/tailwind-utils"

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
      <div className={`text-center ${TEXT_SECONDARY} py-4`}>
        No PRs found {selectedContributor ? `for ${selectedContributor}` : ""}
      </div>
    )
  }

  return (
    <div className={selectedContributor ? "" : "mb-12"}>
      {!selectedContributor && (
        <h2 className={`text-2xl font-bold ${TEXT_PRIMARY} mb-4`}>
          PRs by Repository
        </h2>
      )}

      <div className="space-y-4">
        {filteredRepositories.map((repo) => (
          <div
            key={repo.name}
            className={`${BG_CARD} rounded-lg shadow-sm overflow-hidden`}
          >
            <div className={`px-4 py-3 border-b ${BORDER_DEFAULT}`}>
              <h3 className={`text-lg font-semibold ${TEXT_PRIMARY}`}>
                <a
                  href={`https://github.com/${repo.name}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={LINK_PRIMARY}
                >
                  {repo.name}
                </a>
              </h3>
            </div>

            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead className="bg-gray-50 dark:bg-gray-700">
                  <tr>
                    <th
                      className={`px-3 py-2 text-left text-xs font-medium ${TEXT_SECONDARY} uppercase tracking-wider w-20`}
                    >
                      PR
                    </th>
                    <th
                      className={`px-3 py-2 text-left text-xs font-medium ${TEXT_SECONDARY} uppercase tracking-wider w-24`}
                    >
                      Impact
                    </th>
                    {!selectedContributor && (
                      <th
                        className={`px-3 py-2 text-left text-xs font-medium ${TEXT_SECONDARY} uppercase tracking-wider w-32`}
                      >
                        By
                      </th>
                    )}
                    <th
                      className={`px-3 py-2 text-left text-xs font-medium ${TEXT_SECONDARY} uppercase tracking-wider`}
                    >
                      Description
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {repo.prs.map((pr, index) => (
                    <tr
                      key={pr.number}
                      className={`${BG_CARD_HOVER} ${index !== repo.prs.length - 1 ? "border-b border-gray-100 dark:border-gray-700" : ""}`}
                    >
                      <td className="px-3 py-2 whitespace-nowrap text-sm">
                        <a
                          href={pr.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={LINK_PRIMARY}
                        >
                          #{pr.number}
                        </a>
                      </td>
                      <td
                        className={`px-3 py-2 whitespace-nowrap text-sm ${TEXT_PRIMARY}`}
                      >
                        {pr.impact}
                      </td>
                      {!selectedContributor && (
                        <td className="px-3 py-2 whitespace-nowrap text-sm">
                          <a
                            href={getProfileUrl(pr.contributor)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={LINK_PRIMARY}
                          >
                            {pr.contributor}
                          </a>
                        </td>
                      )}
                      <td
                        className={`px-3 py-2 text-sm ${TEXT_PRIMARY} break-words`}
                      >
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
