import { type ContributorCardProps } from "../types/contributor"
import { getAvatarUrl, getProfileUrl } from "../constants/github"
import { CONTRIBUTION_TYPES, STATS_CONFIG } from "../constants/metrics"

export function ContributorCard({
  username,
  contributor,
}: ContributorCardProps) {
  return (
    <div className="bg-background-card dark:bg-background-card-dark rounded-lg shadow-sm overflow-hidden">
      <div className="p-4 flex items-center gap-3 border-b border-border dark:border-border-dark">
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
                className="text-primary dark:text-primary-dark hover:text-blue-800 dark:hover:text-blue-300"
              >
                {username}
              </a>
            </h3>
            <div className="text-yellow-400 text-lg flex-shrink-0">
              {contributor.stars || ""}
            </div>
          </div>
          <div className="mt-1 flex gap-3 text-sm text-text-secondary dark:text-secondary-dark">
            {Object.values(CONTRIBUTION_TYPES).map((type) => (
              <div key={type.value} className="flex items-center gap-1">
                <span className={`font-medium ${type.colorClass}`}>
                  {contributor[type.value] || 0}
                </span>{" "}
                {type.label}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 divide-x divide-y divide-border dark:divide-border-dark bg-gray-50/80 dark:bg-background-card-dark/80">
        {STATS_CONFIG.map((stat) => {
          const Icon = stat.icon
          return (
            <div key={stat.key} className="p-2.5">
              <div className="text-sm text-text-secondary dark:text-text-secondary-dark">
                {stat.label}
              </div>
              <div className="mt-1 font-medium flex items-center gap-1.5 text-text dark:text-text-dark">
                <Icon className={`w-4 h-4 ${stat.iconColor}`} />
                <span>{stat.getValue(contributor)}</span>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
