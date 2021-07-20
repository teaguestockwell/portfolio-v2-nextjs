import create, {State} from 'zustand'
import {BulbFilled} from '@ant-design/icons'

interface ThemeConstants {
  rad: {
    card: number
  }
  pad: {
    l: number
    t: number
    r: number
    b: number
  }
  fontSizes: {
    sm: number
    md: number
    lg: number
  }
}
export interface CustomTheme extends ThemeConstants {
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

const themeConstants = {
  rad: {
    card: 10,
  },
  pad: {
    l: 20,
    t: 20,
    r: 20,
    b: 20,
  },
  fontSizes: {
    sm: 12,
    md: 14,
    lg: 24,
  },
}

const light: CustomTheme = {
  ...themeConstants,
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
  ...themeConstants,

  name: 'dark',

  backGround0: '#1E1E1E',
  background1: '#2F2F2F',
  background2: '#d0d0d0',

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

export const useTheme = create<State & Props>((set) => ({
  theme: light,
  setTheme: (theme) =>
    set((s) => {
      s.theme = theme
    }),
}))

export const toggleTheme = () => {
  const state = useTheme.getState()
  const newTheme = state.theme.name === 'light' ? dark : light
  state.setTheme(newTheme)
  document.body.style.backgroundColor = newTheme.backGround0
  console.log(newTheme)
}

export const ThemeButton = ({
  fontSize,
  color,
}: {
  fontSize: number
  color: string
}) => {
  const theme = useTheme(
    (s) => s.theme,
    (s1, s2) => s1.name === s2.name
  )

  return (
    <BulbFilled className="" style={{color, fontSize}} onClick={toggleTheme} />
  )
}
