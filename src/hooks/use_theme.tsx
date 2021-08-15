import create from 'zustand'
import {combine} from 'zustand/middleware'
import {useEffect} from 'react'
import {Const, CustomTheme} from '../const'
import {useMedia} from 'react-use'

export const useThemeStore = create(
  combine(
    {
      theme: Const.theme.light as CustomTheme,
    },
    (set) => ({set})
  )
)

export const useTheme = () =>
  useThemeStore(
    (s) => s.theme,
    (s0, s1) => s0.name === s1.name
  )

const setThemeWrap = (theme: CustomTheme) => {
  useThemeStore.setState({theme})
  document.body.style.backgroundColor = theme.backGround0
  localStorage.setItem('theme', theme.name)
}

export const toggleTheme = () => {
  const state = useThemeStore.getState()
  setThemeWrap(
    state.theme.name === 'light' ? Const.theme.dark : Const.theme.light
  )
}

export const useInitTheme = () => {
  const initDarkPref = useMedia('(prefers-color-scheme: dark)')

  useEffect(() => {
    const themeName = localStorage.getItem('theme')

    if (themeName) {
      const theme = themeName === 'light' ? Const.theme.light : Const.theme.dark
      if (useThemeStore.getState().theme.name !== theme.name) {
        setThemeWrap(theme)
      }
      return
    }

    if (initDarkPref !== undefined) {
      const theme = initDarkPref ? Const.theme.dark : Const.theme.light
      if (useThemeStore.getState().theme.name !== theme.name) {
        useThemeStore.setState({theme})
        document.body.style.backgroundColor = theme.backGround0
      }
    }
  }, [initDarkPref])
}
