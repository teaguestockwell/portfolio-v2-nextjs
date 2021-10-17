import DancingLines from 'react-dancing-lines'
import {useTheme} from 'next-themes'

export const DancingLinesWithTheme = () => {
  const {theme} = useTheme()

  const getSupportsTouch = () =>
    'ontouchstart' in window || navigator.maxTouchPoints ? true : false

  // can not be dark on SSR
  return theme === 'dark' && !getSupportsTouch() ? <DancingLines /> : <></>
}
