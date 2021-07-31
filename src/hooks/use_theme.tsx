import create, {State} from 'zustand'
import {BulbFilled} from '@ant-design/icons'
import {useEffect} from 'react'
import {themeService} from '../services/theme_service'

export interface CustomTheme {
  name: string

  backGround0: string
  background1: string
  background2: string

  fontColor0: string
  fontColor1: string
  fontColor2: string

  paletColor0: string
  paletColor1: string
  paletColor2: string

  shadow: string
}

export const light: CustomTheme = {
  name: 'light',

  backGround0: '#f7f7f7',
  background1: '#e5e5e5',
  background2: '#d0d0d0',

  fontColor0: '#222222',
  fontColor1: '#222222',
  fontColor2: '#222222',

  paletColor0: '#f7f7f7',
  paletColor1: '#f7f7f7',
  paletColor2: '#f7f7f7',

  shadow: '2px 2px 5px 1px rgb(0, 0, 0, 0.5)',
}

const dark: CustomTheme = {
  name: 'dark',

  backGround0: '#1E1E1E',
  background1: '#2F2F2F',
  background2: '#383838',

  fontColor0: '#DEffff',
  fontColor1: '#DEffff',
  fontColor2: '#DEffff',

  paletColor0: '#f7f7f7',
  paletColor1: '#f7f7f7',
  paletColor2: '#f7f7f7',

  shadow: '',
}

interface Props {
  theme: CustomTheme
  setTheme: (theme: CustomTheme) => void
}

export const useThemeStore = create<State & Props>((set) => ({
  theme: light,
  setTheme: (theme) =>
    set((s) => {
      s.theme = theme
    }),
}))

export const useTheme = () =>
  useThemeStore(
    (s) => s.theme,
    (s0, s1) => s0.name === s1.name
  )

const setThemeWrap = (theme: CustomTheme) => {
  const state = useThemeStore.getState()
  state.setTheme(theme)
  document.body.style.backgroundColor = theme.backGround0
  themeService.putTheme(theme.name)
}

export const toggleTheme = () => {
  const state = useThemeStore.getState()
  setThemeWrap(state.theme.name === 'light' ? dark : light)
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
  return useEffect(() => {
    themeService.readTheme().then((name) => {
      if (name) {
        const theme = name === 'light' ? light : dark
        if (useThemeStore.getState().theme.name !== theme.name) {
          setThemeWrap(theme)
        }
      }
    })
  }, [])
}
