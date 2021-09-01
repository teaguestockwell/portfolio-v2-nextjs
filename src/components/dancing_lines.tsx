import DancingLines from 'react-dancing-lines'
import {useTheme} from '../hooks/use_theme'

export const DancingLinesWithTheme = () => {
  const theme = useTheme()

  const getSupportsTouch = () =>
    'ontouchstart' in window || navigator.maxTouchPoints ? true : false

  // can not be dark on SSR
  return theme.name === 'dark' && !getSupportsTouch() ? <DancingLines /> : <></>
}
