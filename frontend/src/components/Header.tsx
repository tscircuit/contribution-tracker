import { CircuitBoard, GithubIcon } from "lucide-react"

interface HeaderProps {
  availableWeeks: string[]
  selectedWeek: string | null
  onWeekSelect: (week: string) => void
  loading?: boolean
}

function formatWeekDate(dateStr: string): string {
  const date = new Date(dateStr)
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  })
}

export function Header({
  availableWeeks,
  selectedWeek,
  onWeekSelect,
  loading = false,
}: HeaderProps) {
  return (
    <div className="flex items-center justify-between mb-6 sm:mb-8">
      <div className="flex items-center gap-2">
        <CircuitBoard className="w-6 h-6 text-blue-600" />
        <h1 className="text-xl sm:text-2xl font-bold text-gray-900">
          TSCircuit Contributors
        </h1>
      </div>
      <div className="flex items-center gap-2">
        <select
          className="px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring focus:border-blue-300 disabled:opacity-50 disabled:cursor-not-allowed"
          value={selectedWeek ?? availableWeeks[0] ?? ""}
          disabled={loading || availableWeeks.length === 0}
          onChange={(e) => onWeekSelect(e.target.value)}
        >
          {availableWeeks.map((week) => (
            <option key={week} value={week}>
              {formatWeekDate(week)}
            </option>
          ))}
        </select>
        <a
          href="https://github.com/tscircuit/contribution-tracker"
          target="_blank"
          rel="noopener noreferrer"
          title="View on GitHub"
          className="inline-flex items-center justify-center gap-1 px-2 py-1.5 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
        >
          <GithubIcon className="w-5 h-5" />
          <span className="hidden sm:inline">View on GitHub</span>
        </a>
      </div>
    </div>
  )
}
