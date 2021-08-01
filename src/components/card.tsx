import {Grid} from 'antd'
import {v4} from 'uuid'
import {Const} from '../const'
import {useTheme} from '../hooks/use_theme'

export const Card = ({
  children,
  style,
}: {
  children: JSX.Element | JSX.Element[]
  style?: any
}) => {
  const sm = Grid.useBreakpoint()?.sm as any
  const theme = useTheme()

  return (
    <div
      key={v4()}
      style={{
        WebkitBoxShadow: theme.shadow,
        MozBoxShadow: theme.shadow,
        boxShadow: theme.shadow,
        padding: Const.pad,
        marginTop: Const.pad * 2,
        backgroundColor: theme.background1,
        borderRadius: sm ? Const.rad : 0,
        ...style,
      }}
    >
      {children}
    </div>
  )
}
