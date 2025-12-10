import { useState, useMemo } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"
import {
  type ContributorStats,
  type ContributorOverviewProps,
  type PodiumEntryProps,
} from "../types/contributor"
import { ContributorCard } from "./ContributorCard"
import { getAvatarUrl, getProfileUrl } from "../constants/github"
import { CONTRIBUTION_TYPES, STATS_CONFIG } from "../constants/metrics"
import { CONTRIBUTION_TOOLTIPS, STATS_TOOLTIPS } from "../constants/tooltips"
import { STAFF_USERNAMES } from "../constants/contributors"
import Tippy from "@tippyjs/react"
import "tippy.js/dist/tippy.css"

const SCORE_BAR_COLORS = [
  "bg-amber-500",
  "bg-sky-500",
  "bg-emerald-500",
  "bg-violet-500",
  "bg-rose-500",
  "bg-orange-500",
  "bg-teal-500",
  "bg-indigo-500",
  "bg-pink-500",
  "bg-cyan-500",
]

function ScoreBreakdown({
  contributors,
  onSelectContributor,
}: {
  contributors: [string, ContributorStats][]
  onSelectContributor: (username: string) => void
}) {
  const [isExpanded, setIsExpanded] = useState(false)

  const scoreData = useMemo(() => {
    const withScores = contributors
      .filter(([, stats]) => (stats.score ?? 0) > 0)
      .map(([username, stats]) => ({
        username,
        score: stats.score ?? 0,
        stars: stats.stars ?? "",
      }))
      .sort((a, b) => b.score - a.score)

    const total = withScores.reduce((sum, c) => sum + c.score, 0)

    return {
      contributors: withScores.map((c, i) => ({
        ...c,
        percentage: total > 0 ? (c.score / total) * 100 : 0,
        color: SCORE_BAR_COLORS[i % SCORE_BAR_COLORS.length],
      })),
      total,
    }
  }, [contributors])

  if (scoreData.contributors.length === 0) return null

  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden mb-8">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full p-4 sm:p-6 flex items-center justify-between hover:bg-gray-50 transition-colors"
      >
        <div className="flex items-center gap-2 sm:gap-3">
          <span className="text-lg sm:text-xl">📊</span>
          <h3 className="text-base sm:text-xl font-bold text-gray-900">
            Score Breakdown
          </h3>
          <span className="text-xs sm:text-sm text-gray-500 bg-gray-100 px-2 py-0.5 rounded-full">
            {scoreData.total} pts
          </span>
        </div>
        {isExpanded ? (
          <ChevronUp className="w-5 h-5 text-gray-500" />
        ) : (
          <ChevronDown className="w-5 h-5 text-gray-500" />
        )}
      </button>

      <div
        className={`transition-all duration-300 ease-in-out ${
          isExpanded ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden`}
      >
        <div className="px-4 pb-4 sm:px-6 sm:pb-6">
          <div className="h-6 sm:h-8 rounded-lg overflow-hidden flex mb-4 sm:mb-6 bg-gray-100">
            {scoreData.contributors.map((c) => (
              <Tippy
                key={c.username}
                content={`${c.username}: ${c.score} pts (${c.percentage.toFixed(1)}%)`}
              >
                <div
                  className={`${c.color} cursor-pointer hover:opacity-80 transition-opacity`}
                  style={{ width: `${c.percentage}%` }}
                  onClick={() => onSelectContributor(c.username)}
                />
              </Tippy>
            ))}
          </div>

          <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 sm:gap-3">
            {scoreData.contributors.map((c) => (
              <div
                key={c.username}
                onClick={() => onSelectContributor(c.username)}
                className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors"
              >
                <div
                  className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full ${c.color} flex-shrink-0`}
                />
                <div className="min-w-0 flex-1">
                  <div className="text-xs sm:text-sm font-medium text-gray-900 truncate">
                    {c.username}
                  </div>
                  <div className="text-[10px] sm:text-xs text-gray-500">
                    {c.score} pts ({c.percentage.toFixed(1)}%)
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-gray-100 flex justify-between items-center text-xs sm:text-sm">
            <span className="font-medium text-gray-700">Total</span>
            <span className="font-bold text-gray-900">
              {scoreData.total} points
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export function ContributorOverview({
  contributors,
  onSelectContributor,
}: ContributorOverviewProps) {
  const [showAllContributors, setShowAllContributors] = useState(true)

  // First, separate full-timers from other contributors
  const [fullTimerContributors, otherContributors] = contributors.reduce(
    ([full, other], contributor) => {
      if (STAFF_USERNAMES.includes(contributor[0])) {
        return [[...full, contributor], other]
      }
      return [full, [...other, contributor]]
    },
    [[] as [string, ContributorStats][], [] as [string, ContributorStats][]],
  )

  // Get top 3 contributors from non-full-timers
  const podiumContributors = otherContributors.slice(0, 3)
  const remainingContributors = otherContributors
    .slice(3)
    .filter(([username]) => !STAFF_USERNAMES.includes(username))

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
      sm: "md:w-24 md:h-24",
      md: "md:w-28 md:h-28",
      lg: "md:w-36 md:h-36",
    }

    const badgeSizes = {
      sm: "md:w-8 md:h-8 text-base",
      md: "md:w-10 md:h-10 text-lg",
      lg: "md:w-12 md:h-12 md:text-2xl text-lg",
    }

    const nameSizes = {
      sm: "md:text-lg",
      md: "md:text-xl",
      lg: "md:text-2xl",
    }

    return (
      <div className="flex flex-col md:items-center w-full md:w-auto">
        <div className="flex items-center md:flex-col gap-4 md:gap-2">
          <div className="relative">
            <img
              src={getAvatarUrl(username)}
              alt={`${username}'s avatar`}
              className={`w-28 h-28 ${sizes[size]} rounded-full mb-0 md:mb-4 cursor-pointer ring-4 ${ringColor} hover:ring-8 transition-all`}
              onClick={onClick}
            />
            <div
              className={`absolute -top-2 -right-2 w-10 h-10 ${badgeSizes[size]} ${bgColor} rounded-full flex items-center justify-center text-white font-bold`}
            >
              {position}
            </div>
          </div>

          <div className="flex flex-col md:items-center flex-1 md:flex-initial">
            <div
              className={`${nameSizes[size]} font-medium text-gray-900 mb-2`}
            >
              <a
                href={getProfileUrl(username)}
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:text-blue-800"
              >
                {username}
              </a>
            </div>
            <div className="flex gap-1 text-yellow-400 mb-3">{stats.stars}</div>

            <div className="flex flex-wrap gap-x-4 md:gap-x-6 gap-y-2 text-sm md:text-base text-gray-600 mb-3">
              {STATS_CONFIG.map((stat) => {
                const Icon = stat.icon
                return (
                  <div key={stat.key} className="flex items-center gap-1.5">
                    <Tippy content={STATS_TOOLTIPS[stat.key]}>
                      <span className="inline-flex">
                        <Icon className="w-5 h-5" />
                      </span>
                    </Tippy>
                    <span>{stat.getValue(stats)}</span>
                  </div>
                )
              })}
            </div>

            <div className="flex flex-wrap gap-x-4 gap-y-1.5 items-center">
              {Object.values(CONTRIBUTION_TYPES).map((type) => (
                <Tippy
                  key={type.value}
                  content={CONTRIBUTION_TOOLTIPS[type.value]}
                >
                  <div className={`font-medium ${type.colorClass} md:text-lg`}>
                    {type.emoji} {stats[type.value] || 0}
                  </div>
                </Tippy>
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
      ringColor: "ring-gray-300",
      bgColor: "bg-gray-300",
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
      <div className="flex flex-col md:flex-row justify-between items-stretch gap-8 mb-12">
        {fullTimerContributors.length > 0 && (
          <div className="md:w-[25%]">
            <h3 className="text-lg font-semibold mb-3">Staff</h3>
            <div className="space-y-2">
              {fullTimerContributors.map(([username, stats]) => (
                <div
                  key={username}
                  onClick={() => onSelectContributor(username)}
                  className="bg-white rounded-lg shadow-sm p-3 cursor-pointer hover:shadow-md transition-shadow"
                >
                  <div className="flex flex-col">
                    <div className="flex items-center gap-3 sm:gap-3 mb-4">
                      <div className="relative flex-shrink-0">
                        <img
                          src={getAvatarUrl(username)}
                          alt={`${username}'s avatar`}
                          className="w-11 h-11 rounded-full ring-2 ring-blue-400"
                        />
                      </div>
                      <div className="min-w-0">
                        <div className="font-medium text-gray-900 truncate">
                          <a
                            href={getProfileUrl(username)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-black hover:text-blue-800"
                          >
                            {username}
                          </a>
                        </div>
                        <div className="text-yellow-400 text-xs">
                          {stats.stars}
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-x-3 gap-y-2 text-xs text-gray-600 mb-1">
                      {STATS_CONFIG.map((stat) => {
                        const Icon = stat.icon
                        return (
                          <div
                            key={stat.key}
                            className="flex items-center gap-0.5"
                          >
                            <Tippy content={STATS_TOOLTIPS[stat.key]}>
                              <span className="inline-flex">
                                <Icon className="w-4 h-4" />
                              </span>
                            </Tippy>
                            <span>{stat.getValue(stats)}</span>
                          </div>
                        )
                      })}
                    </div>
                    <div className="flex flex-wrap gap-x-1.5 gap-y-0.5 items-center mt-1">
                      {Object.values(CONTRIBUTION_TYPES).map((type) => (
                        <Tippy
                          key={type.value}
                          content={CONTRIBUTION_TOOLTIPS[type.value]}
                        >
                          <div className={`text-sm ${type.colorClass}`}>
                            {type.emoji} {stats[type.value] || 0}
                          </div>
                        </Tippy>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="md:flex-grow">
          <h2 className="text-3xl font-bold text-center mb-10">
            🏆 Top 3 Contributors 🏆
          </h2>

          {/* Podium */}
          <div className="flex flex-col md:flex-row justify-center items-stretch md:items-end gap-10 md:gap-12">
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
        </div>
      </div>

      <ScoreBreakdown
        contributors={contributors}
        onSelectContributor={onSelectContributor}
      />

      {/* Show All Contributors Button */}
      {remainingContributors.length > 0 && (
        <div className="text-center mb-8">
          <button
            onClick={() => setShowAllContributors(!showAllContributors)}
            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
          >
            {showAllContributors ? (
              <>
                Hide Contributors
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
