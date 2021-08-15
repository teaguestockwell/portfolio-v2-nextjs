import {Const} from '../../const'
import {useTheme} from '../../hooks/use_theme'
import {Link} from 'react-scroll'

export const MenuInline = ({items}: {items: string[]}) => {
  const theme = useTheme()
  return (
    <>
      {items.map((i) => {
        return (
          <Link key={i} to={i} {...Const.reactScrollProps}>
            <div
              className="menu-inline"
              style={{
                marginRight: '0.75vw',
                marginLeft: '0.75vw',
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
