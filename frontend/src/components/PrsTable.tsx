import { type PrAnalysisResult } from "../types/contributor"
import { getProfileUrl } from "../constants/github"
import { CURRENT_MILESTONE } from "../types/milestones"
import { CONTRIBUTION_TYPES } from "../constants/metrics"

interface PRsByRepositoryProps {
  prs: PrAnalysisResult[]
  inModal?: boolean
  name: string
}

export function PrsTable({ prs, inModal = false, name }: PRsByRepositoryProps) {
  const getImpactColor = (impact: string) => {
    if (impact.includes("Major")) return CONTRIBUTION_TYPES.MAJOR.colorClass
    if (impact.includes("Minor")) return CONTRIBUTION_TYPES.MINOR.colorClass
    if (impact.includes("Tiny")) return CONTRIBUTION_TYPES.TINY.colorClass
    return "text-gray-900"
  }

  return (
    <div className={inModal ? "" : "mb-12"}>
      <div className="space-y-4">
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="px-4 py-3 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">
              <a
                href={`https://github.com/${name}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800"
              >
                {name}
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
                  {!inModal && (
                    <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-32">
                      By
                    </th>
                  )}
                  <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Description
                  </th>
                  <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-32">
                    Milestone
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {prs.map((pr) => (
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
                      <span
                        className={`font-medium ${getImpactColor(pr.impact)}`}
                      >
                        {pr.impact.split(" ")[0]}
                      </span>
                    </td>
                    {!inModal && (
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
                    <td className="px-3 py-2 whitespace-nowrap text-sm">
                      {pr.isAlignedWithMilestone ? (
                        <div className="flex items-center space-x-1">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                            ✅ Aligned
                          </span>
                          <span
                            className="text-xs text-gray-500"
                            title={CURRENT_MILESTONE.description}
                          >
                            {CURRENT_MILESTONE.name}
                          </span>
                        </div>
                      ) : (
                        <div className="flex items-center space-x-1">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                            ❌ Not Aligned
                          </span>
                        </div>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
