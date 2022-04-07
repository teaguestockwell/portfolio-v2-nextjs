import {useTheme as useT} from 'next-themes'
import React from 'react'

const getSystemTheme = () =>
  window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'

export const useTheme = (): {
  theme: 'light' | 'dark'
  toggleTheme: () => void
} => {
  const [isMounted, setIsMounted] = React.useState(false)
  React.useEffect(() => setIsMounted(true), [])
  const {theme, setTheme} = useT()
  const toggleTheme = () => {
    const prev = theme === 'system' ? getSystemTheme() : theme
    setTheme(prev === 'light' ? 'dark' : 'light')
  }

  if (!isMounted || !theme) {
    return {theme: 'light', toggleTheme}
  }

  if (theme === 'system') {
    return {theme: getSystemTheme(), toggleTheme}
  }

  return {theme: theme as 'light' | 'dark', toggleTheme}
}
