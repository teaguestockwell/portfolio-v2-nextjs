import lf from 'localforage'

const themeStore = lf.createInstance({
  name: 'portfolio-theme-store',
})

const timeout = <T>(promise: Promise<T>): Promise<T> => {
  return Promise.race<Promise<T>>([
    promise,
    new Promise((_, reject) =>
      setTimeout(() => reject(new Error('timeout')), 11.5e3)
    ),
  ])
}

export const themeService = {
  putTheme: async (theme: string): Promise<string | null> => {
    try {
      await timeout(themeStore.setItem('theme', theme))
    } catch (e) {
      return null
    }
    return theme
  },

  readTheme: async (): Promise<string | null> => {
    try {
      return await timeout(themeStore.getItem('theme'))
    } catch (e) {
      return null
    }
  },

  deleteTheme: async (imgId: string): Promise<boolean> => {
    try {
      await timeout(themeStore.removeItem('theme'))
    } catch (e) {
      return false
    }
    return true
  },
}
