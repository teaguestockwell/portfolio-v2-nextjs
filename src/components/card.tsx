import {Const} from '../const'
import {useTheme} from '../hooks/use_theme'

export const Card = ({
  children,
  style,
}: {
  children: JSX.Element | JSX.Element[]
  style?: any
}) => {
  const theme = useTheme()

  return (
    <div
      style={{
        WebkitBoxShadow: theme.shadow,
        MozBoxShadow: theme.shadow,
        boxShadow: theme.shadow,
        padding: Const.pad,
        marginTop: Const.pad * 2,
        backgroundColor: theme.background1,
        borderRadius: Const.rad,
        ...style,
      }}
    >
      {children}
    </div>
  )
}
