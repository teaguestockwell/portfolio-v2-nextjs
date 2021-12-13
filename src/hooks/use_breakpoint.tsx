/* eslint-disable react-hooks/rules-of-hooks */
import {useMedia} from '../hooks/use_media'

type Breakpoint = 'xxl' | 'xl' | 'lg' | 'md' | 'sm' | 'xs' | 'projectsBreak'

const breakpoints: Record<
  Breakpoint,
  {mediaQuery: string; defaultState: boolean}
> = {
  xs: {
    mediaQuery: '(max-width: 575px)',
    defaultState: true,
  },
  sm: {
    mediaQuery: '(min-width: 576px)',
    defaultState: false,
  },
  md: {
    mediaQuery: '(min-width: 768px)',
    defaultState: false,
  },
  lg: {
    mediaQuery: '(min-width: 992px)',
    defaultState: false,
  },
  xl: {
    mediaQuery: '(min-width: 1200px)',
    defaultState: false,
  },
  xxl: {
    mediaQuery: '(min-width: 1600px)',
    defaultState: false,
  },
  projectsBreak: {
    mediaQuery: '(min-width: 816px)',
    defaultState: false,
  },
}

export const useBreakpoint = Object.entries(breakpoints).reduce((prev, cur) => {
  const [breakpoint, {mediaQuery, defaultState}] = cur
  prev[breakpoint] = () => useMedia(mediaQuery, defaultState)
  return prev
}, {} as any) as Record<Breakpoint, () => boolean>
