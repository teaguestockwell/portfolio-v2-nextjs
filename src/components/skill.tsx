import {Const} from '../const'
import {useThemeStore} from '../hooks/use_theme'
import {SvgScroll} from './svg_scroll'

export const Skill = ({svgs, title}: {svgs: JSX.Element[]; title: string}) => {
  const theme = useThemeStore.getState().theme

  return (
    <>
      <div
        style={{
          textAlign: 'center',
          color: theme.fontColor1,
          fontSize: Const.fontSizes.lg,
        }}
      >
        {title}
      </div>
      <SvgScroll svgs={svgs} />
    </>
  )
}
