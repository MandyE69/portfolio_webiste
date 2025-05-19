"use client"

import * as React from "react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { Moon, Sun } from "lucide-react"

export function SimpleThemeToggle() {
  const [mounted, setMounted] = React.useState(false)
  const { resolvedTheme, setTheme } = useTheme()

  // After mounting, we can access the theme
  React.useEffect(() => setMounted(true), [])

  if (!mounted) {
    return <Button variant="outline" size="icon" className="rounded-full w-9 h-9" />
  }

  return (
    <Button
      variant="outline"
      size="icon"
      className="rounded-full w-9 h-9"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      aria-label="Toggle theme"
    >
      {resolvedTheme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </Button>
  )
}
