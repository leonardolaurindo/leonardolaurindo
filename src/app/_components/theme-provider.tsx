'use client'

import * as React from 'react'
import { ThemeProvider as NextThemeProvider } from 'next-themes'
import { type ThemeProviderProps } from 'next-themes'

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <div className="min-h-screen bg-white dark:bg-black">{children}</div>
  }

  return <NextThemeProvider {...props}>{children}</NextThemeProvider>
}
