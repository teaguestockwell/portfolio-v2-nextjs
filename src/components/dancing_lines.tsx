import DancingLines from 'react-dancing-lines'
import {useTheme} from '../hooks/use_theme'
import {useBreakpoint} from '../hooks/use_breakpoint'

export const DancingLinesWithTheme = () => {
  const {theme} = useTheme()
  const isMd = useBreakpoint().md()
  const isDancing = (() => {
    if (typeof window === 'undefined') {
      return false
    }
    if (theme === 'light') {
      return false
    }
    if (!isMd) {
      return false
    }
    if ('ontouchstart' in window) {
      return false
    }
    if (navigator.maxTouchPoints > 0) {
      return false
    }
    return true
  })()

  if (!isDancing) {
    return null
  }

  return <DancingLines />
}
