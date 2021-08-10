import {Const} from '../../const'
import {useTheme} from '../../hooks/use_theme'
import {Link} from 'react-scroll'

export const MenuInline = ({
  items,
  style = {},
}: {
  items: string[]
  style?: any
}) => {
  const theme = useTheme()
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'right',
        marginLeft: Const.pad / 2,
      }}
    >
      {items.map((i) => {
        return (
          <Link
            key={i}
            to={i}
            style={{
              marginLeft: Const.pad / 2,
              marginRight: Const.pad / 2,
              color: theme.fontColor0,
              fontSize: Const.fontSizes.md,
            }}
            {...Const.reactScrollProps}
          >
            {i}
          </Link>
        )
      })}
    </div>
  )
}
