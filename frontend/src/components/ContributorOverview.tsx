import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"
import {
  type ContributorStats,
  type ContributorOverviewProps,
  type PodiumEntryProps,
} from "../types/contributor"
import { ContributorCard } from "./ContributorCard"
import { getAvatarUrl } from "../constants/github"
import { CONTRIBUTION_TYPES, STATS_CONFIG } from "../constants/metrics"

export function ContributorOverview({
  contributors,
  onSelectContributor,
}: ContributorOverviewProps) {
  const [showAllContributors, setShowAllContributors] = useState(false)

  // Get top 3 contributors for podium
  const podiumContributors = contributors.slice(0, 3)
  const remainingContributors = contributors.slice(3)

  const PodiumEntry = ({
    position,
    username,
    stats,
    ringColor,
    bgColor,
    size = "md",
    onClick,
  }: PodiumEntryProps) => {
    const sizes = {
      sm: "md:w-20 md:h-20",
      md: "md:w-24 md:h-24",
      lg: "md:w-32 md:h-32",
    }

    const badgeSizes = {
      sm: "md:w-8 md:h-8 text-base",
      md: "md:w-8 md:h-8 text-base",
      lg: "md:w-10 md:h-10 md:text-xl text-base",
    }

    const nameSizes = {
      sm: "md:text-lg",
      md: "md:text-lg",
      lg: "md:text-xl",
    }

    return (
      <div className="flex flex-col md:items-center w-full md:w-auto">
        <div className="flex items-center md:flex-col gap-4 md:gap-0">
          <div className="relative">
            <img
              src={getAvatarUrl(username)}
              alt={`${username}'s avatar`}
              className={`w-24 h-24 ${sizes[size]} rounded-full mb-0 md:mb-3 cursor-pointer ring-4 ${ringColor} hover:ring-8 transition-all`}
              onClick={onClick}
            />
            <div
              className={`absolute -top-2 -right-2 w-8 h-8 ${badgeSizes[size]} ${bgColor} rounded-full flex items-center justify-center text-white font-bold`}
            >
              {position}
            </div>
          </div>

          <div className="flex flex-col md:items-center flex-1 md:flex-initial">
            <div
              className={`${nameSizes[size]} font-medium text-gray-900 mb-1`}
            >
              {username}
            </div>
            <div className="flex gap-1 text-yellow-400 mb-2">{stats.stars}</div>

            <div className="flex flex-wrap gap-x-4 md:gap-x-6 gap-y-2 text-sm text-gray-600 mb-2">
              {STATS_CONFIG.map((stat) => {
                const Icon = stat.icon
                return (
                  <div key={stat.key} className="flex items-center gap-1">
                    <Icon className="w-4 h-4" />
                    <span>{stat.getValue(stats)}</span>
                  </div>
                )
              })}
            </div>

            <div className="flex flex-wrap gap-x-4 gap-y-1 items-center">
              {Object.values(CONTRIBUTION_TYPES).map((type) => (
                <div
                  key={type.value}
                  className={`font-medium ${type.colorClass}`}
                >
                  {type.emoji} {stats[type.value] || 0}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }

  const podiumStyles = [
    {
      position: 1,
      ringColor: "ring-yellow-400",
      bgColor: "bg-yellow-400",
      size: "lg" as const,
    },
    {
      position: 2,
      ringColor: "ring-yellow-200",
      bgColor: "bg-yellow-200",
      size: "md" as const,
    },
    {
      position: 3,
      ringColor: "ring-orange-300",
      bgColor: "bg-orange-300",
      size: "sm" as const,
    },
  ]

  return (
    <section className="mt-20 mb-16 max-w-7xl mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-12">
        🏆 Top 3 Contributors 🏆
      </h2>

      {/* Podium */}
      <div className="flex flex-col md:flex-row justify-center items-stretch md:items-end gap-8 mb-12">
        {/* Second Place */}
        {podiumContributors[1] && (
          <div className="order-2 md:order-1">
            <PodiumEntry
              {...podiumStyles[1]}
              username={podiumContributors[1][0]}
              stats={podiumContributors[1][1]}
              onClick={() => onSelectContributor(podiumContributors[1][0])}
            />
          </div>
        )}

        {/* First Place */}
        {podiumContributors[0] && (
          <div className="order-1 md:order-2">
            <PodiumEntry
              {...podiumStyles[0]}
              username={podiumContributors[0][0]}
              stats={podiumContributors[0][1]}
              onClick={() => onSelectContributor(podiumContributors[0][0])}
            />
          </div>
        )}

        {/* Third Place */}
        {podiumContributors[2] && (
          <div className="order-3">
            <PodiumEntry
              {...podiumStyles[2]}
              username={podiumContributors[2][0]}
              stats={podiumContributors[2][1]}
              onClick={() => onSelectContributor(podiumContributors[2][0])}
            />
          </div>
        )}
      </div>

      {/* Show All Contributors Button */}
      {remainingContributors.length > 0 && (
        <div className="text-center mb-8">
          <button
            onClick={() => setShowAllContributors(!showAllContributors)}
            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
          >
            {showAllContributors ? (
              <>
                Hide Other Contributors
                <ChevronUp className="w-4 h-4" />
              </>
            ) : (
              <>
                Show All Contributors
                <ChevronDown className="w-4 h-4" />
              </>
            )}
          </button>
        </div>
      )}

      {/* Remaining Contributors Grid */}
      {showAllContributors && remainingContributors.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {remainingContributors.map(([username, stats]) => (
            <div
              key={username}
              onClick={() => onSelectContributor(username)}
              className="cursor-pointer transform transition-transform hover:scale-105"
            >
              <ContributorCard username={username} contributor={stats} />
            </div>
          ))}
        </div>
      )}
    </section>
  )
}
