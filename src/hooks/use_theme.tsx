import {combine} from 'zustand/middleware'
import create from 'zustand'
import * as React from 'react'

type Theme = 'light' | 'dark'
let hasInitialized = false

const useStore = create(
  combine({theme: 'light' as Theme}, (set) => ({
    toggleTheme: () =>
      set((prev) => {
        const theme = prev.theme === 'light' ? 'dark' : 'light'
        document.body.dataset.theme = theme
        document.documentElement.style.setProperty('color-scheme', theme)
        localStorage.setItem('theme', theme)
        return {theme}
      }),
  }))
)

const useResolveInitClientState = () =>
  React.useEffect(() => {
    if (!hasInitialized) {
      const ls = localStorage.getItem('theme')
      const systemDark = window.matchMedia(
        '(prefers-color-scheme: dark)'
      ).matches
      const init = (theme: Theme) => {
        document.body.dataset.theme = theme
        document.documentElement.style.setProperty('color-scheme', theme)
        useStore.setState({theme})
      }

      // preference is given to localStorage
      if (ls === 'dark' || ls === 'light') {
        init(ls)
        return
      }

      // then system default
      if (systemDark) {
        init('dark')
        return
      }

      // finally fallback to default light because it was ssr
      hasInitialized = true
    }
  }, [])

export const useTheme = () => {
  const {toggleTheme, theme} = useStore()
  useResolveInitClientState()
  return {theme, toggleTheme}
}
