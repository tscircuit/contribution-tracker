import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"
import {
  type ContributorStats,
  type ContributorOverviewProps,
  type PodiumEntryProps,
} from "../types/contributor"
import { ContributorCard } from "./ContributorCard"
import { getAvatarUrl, getProfileUrl } from "../constants/github"
import { CONTRIBUTION_TYPES, STATS_CONFIG } from "../constants/metrics"
import { FULL_TIMERS } from "../constants/contributors"
import Tippy from "@tippyjs/react"
import "tippy.js/dist/tippy.css"

export function ContributorOverview({
  contributors,
  onSelectContributor,
}: ContributorOverviewProps) {
  const [showAllContributors, setShowAllContributors] = useState(false)

  // First, separate full-timers from other contributors
  const [fullTimerContributors, otherContributors] = contributors.reduce(
    ([full, other], contributor) => {
      if (FULL_TIMERS.includes(contributor[0])) {
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
    .filter(([username]) => !FULL_TIMERS.includes(username))

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
                    <Tippy
                      content={
                        stat.key === "pullRequests"
                          ? "Merged PRs / Total PRs opened"
                          : stat.key === "reviews"
                            ? "Number of reviews received on PRs"
                            : "Number of issues created"
                      }
                    >
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
                  content={
                    type.value === "major"
                      ? "Major contributions: Significant code changes or new features"
                      : type.value === "minor"
                        ? "Minor contributions: Bug fixes or small improvements"
                        : "Tiny contributions: Documentation updates or minor fixes"
                  }
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
      <div className="flex flex-col md:flex-row justify-between items-stretch gap-8 mb-12">
        {fullTimerContributors.length > 0 && (
          <div className="md:w-[14%]">
            <h3 className="text-lg font-semibold mb-3">Full-time</h3>
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
                            <Tippy
                              content={
                                stat.key === "pullRequests"
                                  ? "Merged PRs / Total PRs opened"
                                  : stat.key === "reviews"
                                    ? "Number of reviews received on PRs"
                                    : "Number of issues created"
                              }
                            >
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
                          content={
                            type.value === "major"
                              ? "Major contributions: Significant code changes or new features"
                              : type.value === "minor"
                                ? "Minor contributions: Bug fixes or small improvements"
                                : "Tiny contributions: Documentation updates or minor fixes"
                          }
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
