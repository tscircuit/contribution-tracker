import { MAINTAINERS } from "../../../lib/scoring/maintainers"
import { getAvatarUrl, getProfileUrl } from "../constants/github"
import { Shield, Crown, Star } from "lucide-react"

const MAINTAINER_ROLES = {
  maintainer1: {
    title: "maintainer1",
    icon: Crown,
    bgColor: "bg-white",
    borderColor: "border-gray-200",
    iconColor: "text-yellow-600",
    titleColor: "text-gray-600",
    priority: 1,
  },
  maintainer2: {
    title: "maintainer2",
    icon: Shield,
    bgColor: "bg-white",
    borderColor: "border-gray-200",
    iconColor: "text-blue-600",
    titleColor: "text-gray-600",
    priority: 2,
  },
  maintainer3: {
    title: "maintainer3",
    icon: Star,
    bgColor: "bg-white",
    borderColor: "border-gray-200",
    iconColor: "text-green-600",
    titleColor: "text-gray-600",
    priority: 3,
  },
} as const

interface MaintainerCardProps {
  username: string
  role: keyof typeof MAINTAINER_ROLES
}

function MaintainerCard({ username, role }: MaintainerCardProps) {
  const roleConfig = MAINTAINER_ROLES[role]
  const Icon = roleConfig.icon

  return (
    <div
      className={`${roleConfig.bgColor} ${roleConfig.borderColor} border rounded-lg p-4 hover:shadow-md transition-all duration-200 hover:scale-[1.02]`}
    >
      <div className="flex items-center gap-3">
        <div className="relative flex-shrink-0">
          <img
            src={getAvatarUrl(username)}
            alt={`${username}'s avatar`}
            className="w-12 h-12 rounded-full ring-2 ring-white shadow-sm"
          />
          <div className="absolute -bottom-1 -right-1 bg-white rounded-full p-1 border-2 border-gray-200">
            <Icon className={`w-3 h-3 ${roleConfig.iconColor}`} />
          </div>
        </div>
        <div className="flex-grow min-w-0">
          <h3 className="font-semibold text-gray-900 truncate">
            <a
              href={getProfileUrl(username)}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 transition-colors"
            >
              {username}
            </a>
          </h3>
          <p className={`text-sm font-medium ${roleConfig.titleColor}`}>
            {roleConfig.title}
          </p>
        </div>
      </div>
    </div>
  )
}

export function MaintainersList() {
  // Sort maintainers by priority (lead first, then core, then regular)
  const sortedMaintainers = Object.entries(MAINTAINERS).sort(
    ([, roleA], [, roleB]) => {
      return (
        MAINTAINER_ROLES[roleA as keyof typeof MAINTAINER_ROLES].priority -
        MAINTAINER_ROLES[roleB as keyof typeof MAINTAINER_ROLES].priority
      )
    },
  )

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <div className="flex items-center gap-2 mb-4">
        <Shield className="w-5 h-5 text-blue-600" />
        <h2 className="text-lg font-semibold text-gray-900">
          Project Maintainers
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {sortedMaintainers.map(([username, role]) => (
          <MaintainerCard
            key={username}
            username={username}
            role={role as keyof typeof MAINTAINER_ROLES}
          />
        ))}
      </div>
    </div>
  )
}
