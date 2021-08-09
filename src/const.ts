export interface CustomTheme {
  name: string

  nav: any

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
  maxWidth: number
  topNav: number
  titles: {[key: string]: string}
  reactScrollProps: any
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
  maxWidth: 890,
  topNav: 70,
  titles: {
    tech: 'Technologies',
    projects: 'Projects',
    education: 'Education',
  },
  reactScrollProps: {
    spy: true,
    smooth: true,
    duration: 400,
    activeClass: 'scroll-active',
    offset: -80,
  },
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

      nav: {
        backgroundColor: '#fff',
      },

      backGround0: '#EEEEEE',
      background1: '#FAFAFA',
      background2: '#fff',

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

      nav: {
        backgroundColor: 'rgba(29,29,31,0.72)',
        backdropFilter: 'blur(10px)',
      },

      backGround0: '#000',
      background1: '#151516',
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
