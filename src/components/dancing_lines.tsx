import DancingLines from 'react-dancing-lines'
import {useTheme} from '../hooks/use_theme_2'

export const DancingLinesWithTheme = () => {
  const themeName = useTheme((s) => s.themeName)

  const getSupportsTouch = () =>
    'ontouchstart' in window || navigator.maxTouchPoints ? true : false

  // can not be dark on SSR
  return themeName === 'dark' && !getSupportsTouch() ? <DancingLines /> : <></>
}
