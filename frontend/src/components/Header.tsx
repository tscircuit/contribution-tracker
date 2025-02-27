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
        <CircuitBoard className="w-6 h-6 text-primary dark:text-primary-dark" />
        <h1 className="text-xl sm:text-2xl font-bold text-text dark:text-text-dark">
          TSCircuit Contributors
        </h1>
      </div>
      <div className="flex items-center gap-2">
        <button
          onClick={toggleDarkMode}
          className="inline-flex items-center justify-center p-1.5 text-sm font-medium text-text-secondary dark:text-text-secondary-dark bg-background-card dark:bg-background-card-dark border border-border dark:border-border-dark rounded-md hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
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
          className="inline-flex items-center justify-center gap-1 px-2 py-1.5 text-sm font-medium text-text-secondary dark:text-text-secondary-dark bg-background-card dark:bg-background-card-dark border border-border dark:border-border-dark rounded-md hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
        >
          <GithubIcon className="w-5 h-5" />
          <span className="hidden sm:inline">View on GitHub</span>
        </a>
        <span className="hidden sm:inline text-sm text-text-secondary dark:text-text-secondary-dark">
          Last updated: {dateUsed}
        </span>
      </div>
    </div>
  )
}
