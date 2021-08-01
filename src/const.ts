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

export const Const: {
  rad: number
  pad: number
  fontSizes: {
    sm: number
    md: number
    lg: number
    xl: number
  }
  theme: {
    [key: string]: CustomTheme
  }
} = {
  rad: 10,
  pad: 20,
  fontSizes: {
    sm: 14,
    md: 16,
    lg: 24,
    xl: 28,
  },
  theme: {
    light: {
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

      shadow: '1px 1px 10px 1px rgb(0, 0, 0, 0.3)',
    },
    dark: {
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
    },
  },
}
