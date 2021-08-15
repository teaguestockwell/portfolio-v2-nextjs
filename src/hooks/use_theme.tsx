import create from 'zustand'
import {combine} from 'zustand/middleware'
import {useLayoutEffect} from 'react'
import {Const, CustomTheme} from '../const'
import {getInteractiveSvgs} from '../components/svgs'

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
  return useLayoutEffect(() => {
    const themeName = localStorage.getItem('theme')
    if (themeName) {
      const theme = themeName === 'light' ? Const.theme.light : Const.theme.dark
      if (useThemeStore.getState().theme.name !== theme.name) {
        setThemeWrap(theme)
      }
    }
  }, [])
}
