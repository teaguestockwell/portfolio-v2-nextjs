import {Const} from '../../const'
import {Link} from 'react-scroll'
import {useBreakpoint} from '../../hooks/use_breakpoint'

export const MenuInline = ({items}: {items: string[]}) => {
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
            <button
              className={`menu-inline`}
              style={{
                paddingRight: '0.75vw',
                paddingLeft: '0.75vw',
                color: Const.css.fc0,
                fontSize: Const.css.md,
                wordWrap: 'break-word',
                borderRadius: Const.rad,
              }}
              onClick={(_) => {
                if (window.location.pathname.includes('blog') && x === 'blog')
                  return

                if (window.location.pathname.includes('blog') && x !== 'blog') {
                  window.location.href =
                    location.protocol + '//' + location.host + '/#' + x
                }
              }}
            >
              {x}
            </button>
          </Link>
        )
      })}
    </>
  )
}
