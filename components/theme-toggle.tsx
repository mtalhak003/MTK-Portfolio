"use client"

import { useEffect, useState } from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

export function ThemeToggle() {
  const { theme, resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  const activeTheme = mounted ? (theme === "system" ? resolvedTheme : theme) : "dark"
  const isDark = activeTheme !== "light"

  const toggleTheme = () => {
    const nextTheme = isDark ? "light" : "dark"
    // Apply the visual state immediately while next-themes persists the choice.
    document.documentElement.classList.remove("light", "dark")
    document.documentElement.classList.add(nextTheme)
    document.documentElement.style.colorScheme = nextTheme
    setTheme(nextTheme)
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      aria-pressed={!isDark}
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-300/30 bg-[#12233b] text-cyan-300 transition-colors hover:border-cyan-300/60 hover:bg-[#173654] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300"
    >
      {isDark ? <Sun className="h-5 w-5" aria-hidden="true" /> : <Moon className="h-5 w-5" aria-hidden="true" />}
    </button>
  )
}
