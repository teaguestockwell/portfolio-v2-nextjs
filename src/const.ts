export interface CustomTheme {
  name: string

  nav: any

  backGround0: string
  background1: string

  fontColor0: string
  fontColor1: string

  paletColor0: string
  paletColor1: string

  shadow: string
}

export const Const = {
  maxWidth: 1000,
  topNav: 64,
  drawerWidth: 275,
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
    md: 18,
    lg: 24,
    xl: 28,
    xxl: 32,
    xxxl: 48,
  },
  theme: {
    light: {
      name: 'light',

      nav: {
        backgroundColor: 'rgba(255,255,255,0.72)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
      },

      backGround0: '#F5F5F7',
      background1: '#Fff',

      fontColor0: '#1d1d1f',
      fontColor1: '#6e6e73',

      paletColor0: '#f7f7f7',
      paletColor1: '#f7f7f7',

      shadow: '1px 1px 10px 1px rgb(0, 0, 0, 0.3)',
    },
    dark: {
      name: 'dark',

      nav: {
        backgroundColor: 'rgba(29,29,31,0.72)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
      },

      backGround0: '#000',
      background1: '#151516',

      fontColor0: '#f5f5f7',
      fontColor1: '#A1A1A6',

      paletColor0: '#f7f7f7',
      paletColor1: '#f7f7f7',

      shadow: '',
    },
  },
}
