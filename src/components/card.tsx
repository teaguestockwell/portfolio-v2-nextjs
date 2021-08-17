import {useBreakpoint} from '../hooks/use_breakpoint'
import {Const} from '../const'
import {useTheme} from '../hooks/use_theme'

export const Card = ({
  children,
  style,
  icon: topRightIcon,
}: {
  children: JSX.Element | JSX.Element[]
  style?: any
  icon?: JSX.Element
}) => {
  const theme = useTheme()
  const md = useBreakpoint.md()

  return (
    <div
      style={{
        WebkitBoxShadow: theme.shadow,
        MozBoxShadow: theme.shadow,
        boxShadow: theme.shadow,
        padding: Const.pad * 2,
        marginTop: Const.pad * 4,
        backgroundColor: theme.background1,
        borderRadius: md ? Const.rad : 0,
        border: theme.border,
        ...style,
      }}
    >
      {topRightIcon}
      {children}
    </div>
  )
}
