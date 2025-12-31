/**
 * copied from https://github.com/mantinedev/mantine/tree/master/src/mantine-core/src/Transition
 * then removed unused code
 */

import React, {
  useEffect,
  useRef,
  EffectCallback,
  DependencyList,
  useState,
} from 'react'

interface MantineTransitionStyles {
  common?: React.CSSProperties
  in: React.CSSProperties
  out: React.CSSProperties
  transitionProperty: React.CSSProperties['transitionProperty']
}

type MantineTransitionName =
  | 'fade'
  // | 'skew-up'
  // | 'skew-down'
  // | 'rotate-right'
  // | 'rotate-left'
  // | 'slide-down'
  // | 'slide-up'
  | 'slide-right'
// | 'slide-left'
// | 'scale-y'
// | 'scale-x'
// | 'scale'
// | 'pop'
// | 'pop-top-left'
// | 'pop-top-right'
// | 'pop-bottom-left'
// | 'pop-bottom-right'

type MantineTransition = MantineTransitionName | MantineTransitionStyles

interface UseMediaQueryOptions {
  getInitialValueInEffect: boolean
}

type MediaQueryCallback = (event: {matches: boolean; media: string}) => void

interface UseTransition {
  duration: number
  exitDuration: number
  timingFunction?: string
  mounted: boolean
  // onEnter?(): void
  // onExit?(): void
  // onEntered?(): void
  // onExited?(): void
}

type TransitionStatus =
  | 'entered'
  | 'exited'
  | 'entering'
  | 'exiting'
  | 'pre-exiting'
  | 'pre-entering'

// const popIn = {
//   in: {opacity: 1, transform: 'scale(1)'},
//   out: {opacity: 0, transform: 'scale(.9) translateY(10px)'},
//   transitionProperty: 'transform, opacity',
// }

const transitions: Record<MantineTransitionName, MantineTransitionStyles> = {
  fade: {
    in: {opacity: 1},
    out: {opacity: 0},
    transitionProperty: 'opacity',
  },

  // scale: {
  //   in: {opacity: 1, transform: 'scale(1)'},
  //   out: {opacity: 0, transform: 'scale(0)'},
  //   common: {transformOrigin: 'top'},
  //   transitionProperty: 'transform, opacity',
  // },

  // 'scale-y': {
  //   in: {opacity: 1, transform: 'scaleY(1)'},
  //   out: {opacity: 0, transform: 'scaleY(0)'},
  //   common: {transformOrigin: 'top'},
  //   transitionProperty: 'transform, opacity',
  // },

  // 'scale-x': {
  //   in: {opacity: 1, transform: 'scaleX(1)'},
  //   out: {opacity: 0, transform: 'scaleX(0)'},
  //   common: {transformOrigin: 'left'},
  //   transitionProperty: 'transform, opacity',
  // },

  // 'skew-up': {
  //   in: {opacity: 1, transform: 'translateY(0) skew(0deg, 0deg)'},
  //   out: {opacity: 0, transform: 'translateY(-20px) skew(-10deg, -5deg)'},
  //   common: {transformOrigin: 'top'},
  //   transitionProperty: 'transform, opacity',
  // },

  // 'skew-down': {
  //   in: {opacity: 1, transform: 'translateY(0) skew(0deg, 0deg)'},
  //   out: {opacity: 0, transform: 'translateY(20px) skew(-10deg, -5deg)'},
  //   common: {transformOrigin: 'bottom'},
  //   transitionProperty: 'transform, opacity',
  // },

  // 'rotate-left': {
  //   in: {opacity: 1, transform: 'translateY(0) rotate(0deg)'},
  //   out: {opacity: 0, transform: 'translateY(20px) rotate(-5deg)'},
  //   common: {transformOrigin: 'bottom'},
  //   transitionProperty: 'transform, opacity',
  // },

  // 'rotate-right': {
  //   in: {opacity: 1, transform: 'translateY(0) rotate(0deg)'},
  //   out: {opacity: 0, transform: 'translateY(20px) rotate(5deg)'},
  //   common: {transformOrigin: 'top'},
  //   transitionProperty: 'transform, opacity',
  // },

  // 'slide-down': {
  //   in: {opacity: 1, transform: 'translateY(0)'},
  //   out: {opacity: 0, transform: 'translateY(-100%)'},
  //   common: {transformOrigin: 'top'},
  //   transitionProperty: 'transform, opacity',
  // },

  // 'slide-up': {
  //   in: {opacity: 1, transform: 'translateY(0)'},
  //   out: {opacity: 0, transform: 'translateY(100%)'},
  //   common: {transformOrigin: 'bottom'},
  //   transitionProperty: 'transform, opacity',
  // },

  // 'slide-left': {
  //   in: {opacity: 1, transform: 'translateX(0)'},
  //   out: {opacity: 0, transform: 'translateX(100%)'},
  //   common: {transformOrigin: 'left'},
  //   transitionProperty: 'transform, opacity',
  // },

  'slide-right': {
    in: {opacity: 1, transform: 'translateX(0)'},
    out: {opacity: 0, transform: 'translateX(-100%)'},
    common: {transformOrigin: 'right'},
    transitionProperty: 'transform, opacity',
  },

  // pop: {
  //   ...popIn,
  //   common: {transformOrigin: 'center center'},
  // },

  // 'pop-bottom-left': {
  //   ...popIn,
  //   common: {transformOrigin: 'bottom left'},
  // },

  // 'pop-bottom-right': {
  //   ...popIn,
  //   common: {transformOrigin: 'bottom right'},
  // },

  // 'pop-top-left': {
  //   ...popIn,
  //   common: {transformOrigin: 'top left'},
  // },

  // 'pop-top-right': {
  //   ...popIn,
  //   common: {transformOrigin: 'top right'},
  // },
}

const transitionStatuses = {
  entering: 'in',
  entered: 'in',
  exiting: 'out',
  exited: 'out',
  'pre-exiting': 'out',
  'pre-entering': 'out',
} as const

function useDidUpdate(fn: EffectCallback, dependencies?: DependencyList) {
  const mounted = useRef(false)

  useEffect(
    () => () => {
      mounted.current = false
    },
    []
  )

  useEffect(() => {
    if (mounted.current) {
      return fn()
    }

    mounted.current = true
    return undefined
  }, dependencies)
}

/**
 * Older versions of Safari (shipped withCatalina and before) do not support addEventListener on matchMedia
 * https://stackoverflow.com/questions/56466261/matchmedia-addlistener-marked-as-deprecated-addeventlistener-equivalent
 * */
function attachMediaListener(
  query: MediaQueryList,
  callback: MediaQueryCallback
) {
  try {
    query.addEventListener('change', callback)
    return () => query.removeEventListener('change', callback)
  } catch (e) {
    query.addListener(callback)
    return () => query.removeListener(callback)
  }
}

function getInitialValue(query: string, initialValue?: boolean) {
  if (typeof initialValue === 'boolean') {
    return initialValue
  }

  if (typeof window !== 'undefined' && 'matchMedia' in window) {
    return window.matchMedia(query).matches
  }

  return false
}

function useMediaQuery(
  query: string,
  initialValue?: boolean,
  {getInitialValueInEffect}: UseMediaQueryOptions = {
    getInitialValueInEffect: true,
  }
) {
  const [matches, setMatches] = useState(
    getInitialValueInEffect
      ? initialValue
      : getInitialValue(query, initialValue)
  )
  const queryRef = useRef<MediaQueryList | null>(null)

  useEffect(() => {
    if ('matchMedia' in window) {
      queryRef.current = window.matchMedia(query)
      setMatches(queryRef.current.matches)
      return attachMediaListener(queryRef.current, (event) =>
        setMatches(event.matches)
      )
    }

    return undefined
  }, [query])

  return matches
}

function useReducedMotion(
  initialValue?: boolean,
  options?: UseMediaQueryOptions
) {
  return useMediaQuery(
    '(prefers-reduced-motion: reduce)',
    initialValue,
    options
  )
}

function useTransition({
  duration,
  exitDuration,
  timingFunction,
  mounted,
}: // onEnter,
// onExit,
// onEntered,
// onExited,
UseTransition) {
  const reduceMotion = useReducedMotion()
  const [transitionStatus, setStatus] = useState<TransitionStatus>(
    mounted ? 'entered' : 'exited'
  )
  let transitionDuration = reduceMotion ? 0 : duration
  const timeoutRef = useRef<number>(-1)

  const handleStateChange = (shouldMount: boolean) => {
    // const preHandler = shouldMount ? onEnter : onExit
    // const handler = shouldMount ? onEntered : onExited

    setStatus(shouldMount ? 'pre-entering' : 'pre-exiting')
    window.clearTimeout(timeoutRef.current)
    transitionDuration = reduceMotion
      ? 0
      : shouldMount
      ? duration
      : exitDuration

    if (transitionDuration === 0) {
      // typeof preHandler === 'function' && preHandler()
      // typeof handler === 'function' && handler()
      setStatus(shouldMount ? 'entered' : 'exited')
    } else {
      const preStateTimeout = window.setTimeout(() => {
        // typeof preHandler === 'function' && preHandler()
        setStatus(shouldMount ? 'entering' : 'exiting')
      }, 10)

      timeoutRef.current = window.setTimeout(() => {
        window.clearTimeout(preStateTimeout)
        // typeof handler === 'function' && handler()
        setStatus(shouldMount ? 'entered' : 'exited')
      }, transitionDuration)
    }
  }

  useDidUpdate(() => {
    handleStateChange(mounted)
  }, [mounted])

  useEffect(() => () => window.clearTimeout(timeoutRef.current), [])

  return {
    transitionDuration,
    transitionStatus,
    transitionTimingFunction: timingFunction || 'easy',
  }
}

function getTransitionStyles({
  transition,
  state,
  duration,
  timingFunction,
}: {
  transition: MantineTransition
  state: keyof typeof transitionStatuses
  duration: number
  timingFunction: React.CSSProperties['transitionTimingFunction']
}): React.CSSProperties {
  const shared = {
    transitionDuration: `${duration}ms`,
    transitionTimingFunction: timingFunction,
  }

  if (typeof transition === 'string') {
    return {
      transitionProperty: transitions[transition].transitionProperty,
      ...shared,
      ...transitions[transition].common,
      ...transitions[transition][transitionStatuses[state]],
    }
  }

  return {
    transitionProperty: transition.transitionProperty,
    ...shared,
    ...transition.common,
    ...transition[transitionStatuses[state]],
  }
}

export interface TransitionProps {
  /** Predefined transition name or transition styles */
  transition: MantineTransition

  /** Transition duration in ms */
  duration?: number

  /** Exit transition duration in ms */
  exitDuration?: number

  /** Transition timing function, defaults to theme.transitionTimingFunction */
  timingFunction?: string

  /** When true, component will be mounted */
  mounted: boolean

  /** Render function with transition styles argument */
  children(styles: React.CSSProperties): React.ReactElement<any, any>

  // /** Calls when exit transition ends */
  // onExited?: () => void

  // /** Calls when exit transition starts */
  // onExit?: () => void

  // /** Calls when enter transition starts */
  // onEnter?: () => void

  // /** Calls when enter transition ends */
  // onEntered?: () => void
}

export function Transition({
  transition,
  duration = 250,
  exitDuration = duration,
  mounted,
  children,
  timingFunction,
}: // onExit,
// onEntered,
// onEnter,
// onExited,
TransitionProps) {
  const {transitionDuration, transitionStatus, transitionTimingFunction} =
    useTransition({
      mounted,
      exitDuration,
      duration,
      timingFunction,
      // onExit,
      // onEntered,
      // onEnter,
      // onExited,
    })

  if (transitionDuration === 0) {
    return mounted ? <>{children({})}</> : null
  }

  return transitionStatus === 'exited' ? null : (
    <>
      {children(
        getTransitionStyles({
          transition,
          duration: transitionDuration,
          state: transitionStatus,
          timingFunction: transitionTimingFunction,
        })
      )}
    </>
  )
}
