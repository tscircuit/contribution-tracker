import { type ContributorCardProps } from "../types/contributor"
import { getAvatarUrl, getProfileUrl } from "../constants/github"
import { CONTRIBUTION_TYPES, STATS_CONFIG } from "../constants/metrics"
import { CONTRIBUTION_TOOLTIPS, STATS_TOOLTIPS } from "../constants/tooltips"
import Tippy from "@tippyjs/react"
import "tippy.js/dist/tippy.css"

export function ContributorCard({
  username,
  contributor,
}: ContributorCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
      <div className="p-4 flex items-center gap-3 border-b border-gray-100">
        <div className="relative flex-shrink-0">
          <img
            src={getAvatarUrl(username)}
            alt={`${username}'s avatar`}
            className="w-14 h-14 rounded-full"
          />
        </div>
        <div className="flex-grow min-w-0">
          <div className="flex items-center justify-between gap-2">
            <h3 className="text-base font-semibold truncate">
              <a
                href={getProfileUrl(username)}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800"
              >
                {username}
              </a>
            </h3>
            <div className="text-yellow-400 text-lg flex-shrink-0">
              {contributor.stars || ""}
            </div>
          </div>
          <div className="mt-1 flex gap-3 text-sm text-gray-600">
            {Object.values(CONTRIBUTION_TYPES).map((type) => (
              <Tippy
                key={type.value}
                content={CONTRIBUTION_TOOLTIPS[type.value]}
              >
                <div className="flex items-center gap-1">
                  <span className={`font-medium ${type.colorClass}`}>
                    {contributor[type.value] || 0}
                  </span>{" "}
                  {type.label}
                </div>
              </Tippy>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 divide-x divide-y divide-gray-100 bg-gray-50/80">
        {STATS_CONFIG.map((stat) => {
          const Icon = stat.icon
          return (
            <div key={stat.key} className="p-2.5">
              <div className="text-sm text-gray-500">{stat.label}</div>
              <div className="mt-1 font-medium flex items-center gap-1.5">
                <Tippy content={STATS_TOOLTIPS[stat.key]}>
                  <span className="inline-flex">
                    <Icon className={`w-4 h-4 ${stat.iconColor}`} />
                  </span>
                </Tippy>
                <span>{stat.getValue(contributor)}</span>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
