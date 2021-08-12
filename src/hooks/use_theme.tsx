import create from 'zustand'
import {combine} from 'zustand/middleware'
import {BulbFilled} from '@ant-design/icons'
import {useLayoutEffect} from 'react'
import {Const, CustomTheme} from '../const'

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

export const ThemeButton = ({
  fontSize,
  color,
}: {
  fontSize: number
  color: string
}) => {
  const theme = useThemeStore(
    (s) => s.theme,
    (s1, s2) => s1.name === s2.name
  )

  return (
    <BulbFilled className="" style={{color, fontSize}} onClick={toggleTheme} />
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
