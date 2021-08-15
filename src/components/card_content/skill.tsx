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
          color: theme.fontColor1,
          fontSize: Const.fontSizes.lg,
          wordWrap: 'break-word',
          fontWeight: 400,
          textTransform: 'capitalize',
          overflowY: 'hidden',
        }}
      >
        {name}
      </div>
      <SvgScroll svgs={svgs} />
    </>
  )
}
