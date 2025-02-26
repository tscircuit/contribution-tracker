import { CircuitBoard, GithubIcon, Moon, Sun } from "lucide-react"
import { useDarkMode } from "../hooks/useDarkMode.tsx"

interface HeaderProps {
  dateUsed: string
}

export function Header({ dateUsed }: HeaderProps) {
  const { isDarkMode, toggleDarkMode } = useDarkMode()

  return (
    <div className="flex items-center justify-between mb-6 sm:mb-8">
      <div className="flex items-center gap-2">
        <CircuitBoard className="w-6 h-6 text-blue-600 dark:text-blue-400" />
        <h1 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100">
          TSCircuit Contributors
        </h1>
      </div>
      <div className="flex items-center gap-2">
        <button
          onClick={toggleDarkMode}
          className="inline-flex items-center justify-center p-1.5 text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
          title={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
        >
          {isDarkMode ? (
            <Sun className="w-5 h-5" />
          ) : (
            <Moon className="w-5 h-5" />
          )}
        </button>
        <a
          href="https://github.com/tscircuit/contribution-tracker"
          target="_blank"
          rel="noopener noreferrer"
          title="View on GitHub"
          className="inline-flex items-center justify-center gap-1 px-2 py-1.5 text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
        >
          <GithubIcon className="w-5 h-5" />
          <span className="hidden sm:inline">View on GitHub</span>
        </a>
        <span className="hidden sm:inline text-sm text-gray-600 dark:text-gray-400">
          Last updated: {dateUsed}
        </span>
      </div>
    </div>
  )
}
