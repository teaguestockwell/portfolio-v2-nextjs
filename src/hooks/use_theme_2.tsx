import {combine} from 'zustand/middleware'
import create from 'zustand'
import {useMedia} from 'react-use'
import {useEffect} from 'react'

export const useTheme = create(
  combine(
    {
      themeName: 'light',
    },
    (set) => ({set})
  )
)

export const useInitTheme = () => {
  const initDarkPref = useMedia('(prefers-color-scheme: dark)')

  useEffect(() => {
    const preferredThemeName = localStorage.getItem('theme')

    if (preferredThemeName) {
      setOrToggleTheme(preferredThemeName)
      return
    }

    if (initDarkPref !== undefined) {
      document.body.dataset.theme = 'dark'
      useTheme.setState({themeName: 'dark'})
    }
  }, [initDarkPref])
}

export const setOrToggleTheme = (themeName?: string) => {
  // toggle if no params
  if (!themeName) {
    themeName = useTheme.getState().themeName === 'light' ? 'dark' : 'light'
  }

  // set global state so, theme may be toggles without params in future
  useTheme.setState({themeName})

  // persist
  localStorage.setItem('theme', themeName)

  // update css vars
  document.body.dataset.theme = themeName

  // color-scheme tells browser how to render built-in elements like forms, scrollbars, etc.
  // if color-scheme is null, this will remove the property
  document.documentElement.style.setProperty('color-scheme', themeName)
}
