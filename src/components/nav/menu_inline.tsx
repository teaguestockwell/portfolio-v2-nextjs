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
    <>
      {items.map((i) => {
        return (
          <Link key={i} to={i} {...Const.reactScrollProps}>
            <div
              className="menu-inline"
              style={{
                marginLeft: Const.pad / 2,
                marginRight: Const.pad / 2,
                color: theme.fontColor0,
                fontSize: Const.fontSizes.md,
                wordWrap: 'break-word',
              }}
            >
              {i}
            </div>
          </Link>
        )
      })}
    </>
  )
}
