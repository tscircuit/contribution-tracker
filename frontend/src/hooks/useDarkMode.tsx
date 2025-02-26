import { createContext, useContext, useEffect, useState } from "react"

type ThemeContextType = {
  isDarkMode: boolean
  toggleDarkMode: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Check for saved preference or system preference
    const savedTheme = localStorage.getItem("darkMode")
    if (savedTheme !== null) {
      return savedTheme === "true"
    }
    return window.matchMedia("(prefers-color-scheme: dark)").matches
  })

  useEffect(() => {
    // Update localStorage and document class when theme changes
    localStorage.setItem("darkMode", isDarkMode.toString())
    if (isDarkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [isDarkMode])

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev)
  }

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useDarkMode = () => {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error("useDarkMode must be used within a ThemeProvider")
  }
  return context
}
