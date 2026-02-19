import { CircuitBoard, GithubIcon } from "lucide-react"

interface HeaderProps {
  dateUsed: string
  selectedWeek: string
  availableWeeks: string[]
  onSelectWeek: (week: string) => void
}

export function Header({
  dateUsed,
  selectedWeek,
  availableWeeks,
  onSelectWeek,
}: HeaderProps) {
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between mb-6 sm:mb-8">
      <div className="flex items-center gap-2">
        <CircuitBoard className="w-6 h-6 text-blue-600" />
        <h1 className="text-xl sm:text-2xl font-bold text-gray-900">
          TSCircuit Contributors
        </h1>
      </div>
      <div className="flex items-center flex-wrap gap-3 sm:gap-2">
        <label className="text-sm text-gray-700">Week:</label>
        <select
          value={selectedWeek}
          onChange={(e) => onSelectWeek(e.target.value)}
          className="px-3 py-2 border border-gray-300 rounded-md text-sm bg-white shadow-sm focus:outline-none focus:ring focus:border-blue-400"
          disabled={availableWeeks.length === 0}
        >
          {availableWeeks.map((week) => (
            <option key={week} value={week}>
              {week}
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
        <span className="hidden sm:inline text-sm text-gray-600">
          Last updated: {dateUsed}
        </span>
      </div>
    </div>
  )
}
