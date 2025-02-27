import { CircuitBoard, GithubIcon, Moon, Sun } from "lucide-react"
import { useDarkMode } from "../hooks/useDarkMode.tsx"
import {
  TEXT_PRIMARY,
  TEXT_SECONDARY,
  BUTTON_SECONDARY,
  LINK_PRIMARY,
  TRANSITION_COLORS,
} from "../constants/tailwind-utils"

interface HeaderProps {
  dateUsed: string
}

export function Header({ dateUsed }: HeaderProps) {
  const { isDarkMode, toggleDarkMode } = useDarkMode()

  return (
    <div className="flex items-center justify-between mb-6 sm:mb-8">
      <div className="flex items-center gap-2">
        <CircuitBoard className="w-6 h-6 text-primary dark:text-primary-dark" />
        <h1 className={`text-xl sm:text-2xl font-bold ${TEXT_PRIMARY}`}>
          TSCircuit Contributors
        </h1>
      </div>
      <div className="flex items-center gap-2">
        <button
          onClick={toggleDarkMode}
          className={`inline-flex items-center justify-center p-1.5 text-sm font-medium ${BUTTON_SECONDARY} ${TRANSITION_COLORS}`}
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
          className={`inline-flex items-center justify-center gap-1 px-2 py-1.5 text-sm font-medium ${BUTTON_SECONDARY} ${TRANSITION_COLORS}`}
        >
          <GithubIcon className="w-5 h-5" />
          <span className="hidden sm:inline">View on GitHub</span>
        </a>
        <span className={`hidden sm:inline text-sm ${TEXT_SECONDARY}`}>
          Last updated: {dateUsed}
        </span>
      </div>
    </div>
  )
}
