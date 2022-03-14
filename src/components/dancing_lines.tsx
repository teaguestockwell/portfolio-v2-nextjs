import DancingLines from 'react-dancing-lines'
import {useTheme} from '../hooks/use_theme'
import {useBreakpoint} from '../hooks/use_breakpoint'

export const DancingLinesWithTheme = () => {
  const {theme} = useTheme()
  const xs = useBreakpoint.xs()

  // can not be dark on SSR
  return theme === 'dark' && !xs ? <DancingLines /> : <></>
}
