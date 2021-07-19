import create, {State} from 'zustand'

interface CustomTheme {
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
}

const light: CustomTheme = {
  name: 'light',

  backGround0: '#f7f7f7',
  background1: '#e5e5e5',
  background2: '#d0d0d0',

  fontColor0: '#fff',
  fontColor1: '#222222',
  fontColor2: '#222222',

  paletColor0: '#f7f7f7',
  paletColor1: '#f7f7f7',
  paletColor2: '#f7f7f7',
}

const dark: CustomTheme = {
  name: 'dark',

  backGround0: '#f7f7f7',
  background1: '#e5e5e5',
  background2: '#d0d0d0',

  fontColor0: '#222222',
  fontColor1: '#222222',
  fontColor2: '#222222',

  paletColor0: '#f7f7f7',
  paletColor1: '#f7f7f7',
  paletColor2: '#f7f7f7',
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
}
