import {Const} from '../../const'
import {useThemeStore} from '../../hooks/use_theme'
import {SvgScroll} from '../svgs'

export const Skill = ({svgs, name}: {svgs: JSX.Element[]; name: string}) => {
  const theme = useThemeStore.getState().theme

  return (
    <>
      <div
        style={{
          textAlign: 'center',
          color: theme.fontColor0,
          fontSize: Const.fontSizes.xl,
          wordWrap: 'break-word',
          textTransform: 'capitalize',
          overflowY: 'hidden',
          fontWeight: 600,
        }}
      >
        {name}
      </div>
      <SvgScroll svgs={svgs} />
    </>
  )
}
