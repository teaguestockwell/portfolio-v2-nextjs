import {Const} from '../../const'
import {useTheme} from '../../hooks/use_theme'
import {Link} from 'react-scroll'
import {useBreakpoint} from '../../hooks/use_breakpoint'

export const MenuInline = ({items}: {items: string[]}) => {
  const theme = useTheme()
  const xl = useBreakpoint.xl()
  const getOffset = (idx: number) => {
    if (idx === items.length - 1) {
      return 0
    }
    if (xl) {
      return Const.pad * 2 * -1
    }
    return (Const.topNav + Const.pad * 2) * -1
  }
  return (
    <>
      {items.map((x, i) => {
        return (
          <Link
            key={x}
            to={x}
            {...Const.reactScrollProps}
            offset={getOffset(i)}
          >
            <div
              className={`menu-inline ${theme.name}`}
              style={{
                paddingRight: '0.75vw',
                paddingLeft: '0.75vw',
                color: theme.fontColor0,
                fontSize: Const.fontSizes.md,
                wordWrap: 'break-word',
              }}
            >
              {x}
            </div>
          </Link>
        )
      })}
    </>
  )
}
