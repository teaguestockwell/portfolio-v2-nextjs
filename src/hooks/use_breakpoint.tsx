/* eslint-disable react-hooks/rules-of-hooks */
import {useMedia} from 'react-use'
import {usePortfolio} from './use_portfolio_context'

type Breakpoint = 'xxl' | 'xl' | 'lg' | 'md' | 'sm' | 'xs' | 'projectsBreak'
type Break = Record<Breakpoint, {mediaQuery: string; defaultState: boolean}>

const breakpointsMobile: Break = {
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

const breakpointsDesktop: Break = {
  xs: {
    mediaQuery: '(max-width: 575px)',
    defaultState: false,
  },
  sm: {
    mediaQuery: '(min-width: 576px)',
    defaultState: true,
  },
  md: {
    mediaQuery: '(min-width: 768px)',
    defaultState: true,
  },
  lg: {
    mediaQuery: '(min-width: 992px)',
    defaultState: true,
  },
  xl: {
    mediaQuery: '(min-width: 1200px)',
    defaultState: true,
  },
  xxl: {
    mediaQuery: '(min-width: 1600px)',
    defaultState: true,
  },
  projectsBreak: {
    mediaQuery: '(min-width: 816px)',
    defaultState: true,
  },
}

const makeBreakpointHooks = (b: Break) =>
  Object.entries(b).reduce((prev, cur) => {
    const [breakpoint, {mediaQuery, defaultState}] = cur
    prev[breakpoint] = () => useMedia(mediaQuery, defaultState)
    return prev
  }, {} as any) as Record<Breakpoint, () => boolean>

export const useBreakpoint = () => {
  const {userAgent} = usePortfolio()

  if (userAgent === 'mobile') {
    return makeBreakpointHooks(breakpointsMobile)
  } else {
    return makeBreakpointHooks(breakpointsDesktop)
  }
}
