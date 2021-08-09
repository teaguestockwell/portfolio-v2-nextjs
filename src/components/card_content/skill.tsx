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
          fontWeight: 200,
          textTransform: 'capitalize',
        }}
      >
        {name}
      </div>
      <SvgScroll svgs={svgs} />
    </>
  )
}
