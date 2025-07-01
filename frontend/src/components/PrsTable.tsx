import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"
import { type PrAnalysisResult } from "../types/contributor"
import { getProfileUrl } from "../constants/github"
import { CONTRIBUTION_TYPES } from "../constants/metrics"
import { PrAttributeBadges } from "./PrAttributeBadges"

interface PRsByRepositoryProps {
  prs: PrAnalysisResult[]
  inModal?: boolean
  name: string
}

export function PrsTable({ prs, inModal = false, name }: PRsByRepositoryProps) {
  const [showTinyContributions, setShowTinyContributions] = useState(false)

  const getImpactColor = (impact: string) => {
    if (impact.includes("Major")) return CONTRIBUTION_TYPES.MAJOR.colorClass
    if (impact.includes("Minor")) return CONTRIBUTION_TYPES.MINOR.colorClass
    if (impact.includes("Tiny")) return CONTRIBUTION_TYPES.TINY.colorClass
    return "text-gray-900"
  }

  // Separate PRs by impact level
  const majorMinorPRs = prs.filter((pr) => !pr.impact.includes("Tiny"))
  const tinyPRs = prs.filter((pr) => pr.impact.includes("Tiny"))

  const renderPRTable = (prsToRender: PrAnalysisResult[]) => (
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
            <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-[50px]">
              Tags
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {prsToRender.map((pr) => (
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
                <span className={`font-medium ${getImpactColor(pr.impact)}`}>
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
                <PrAttributeBadges pr={pr} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )

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

          {/* Major and Minor PRs */}
          {majorMinorPRs.length > 0 && renderPRTable(majorMinorPRs)}

          {/* Tiny contributions collapsible section */}
          {tinyPRs.length > 0 && (
            <div className="border-t border-gray-200">
              <button
                onClick={() => setShowTinyContributions(!showTinyContributions)}
                className="w-full px-4 py-3 text-left text-sm font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 flex items-center justify-between"
              >
                <span className="flex items-center gap-2">
                  🐌 Tiny Contributions ({tinyPRs.length})
                </span>
                {showTinyContributions ? (
                  <ChevronUp className="w-4 h-4" />
                ) : (
                  <ChevronDown className="w-4 h-4" />
                )}
              </button>

              {showTinyContributions && (
                <div className="border-t border-gray-100">
                  {renderPRTable(tinyPRs)}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
