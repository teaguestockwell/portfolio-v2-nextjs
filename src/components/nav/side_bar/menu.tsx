import {Link} from 'react-scroll'
import {Const} from '../../../const'
import {getCustomSvgs} from '../../svgs'
import {usePortfolio} from '../../../hooks/use_portfolio_context'
import {useDrawerStore} from '../../../hooks/use_drawer'
import {useBreakpoint} from '../../../hooks/use_breakpoint'
import {useTheme} from '../../../hooks/use_theme_2'

export const Menu = () => {
  const {titles} = usePortfolio()
  const customSvgs = getCustomSvgs(Const.css.fc0, 24, 24, titles)
  const titleVals = Object.values(titles)
  const xl = useBreakpoint.xl()
  const getOffset = (idx: number) => {
    if (idx === titleVals.length - 1) {
      return 0
    }
    if (xl) {
      return Const.pad * 2 * -1
    }
    return (Const.topNav + Const.pad * 2) * -1
  }
  const themeName = useTheme((s) => s.themeName)

  return (
    <div
      style={{
        paddingTop: Const.pad,
      }}
    >
      {titleVals.map((x, i) => (
        <Link key={x} to={x} {...Const.reactScrollProps} offset={getOffset(i)}>
          <button
            aria-label={x}
            className={'menu-sidebar'}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'left',
              height: 42,
              fontSize: Const.css.lg,
              wordWrap: 'break-word',
              color: Const.css.fc0,
              width: '-webkit-fill-available',
              borderRadius: Const.rad,
              borderBottom: 'solid',
              borderColor: 'rgba(0, 0, 0, 0)',
            }}
            onClick={(_) => {
              if (window.location.pathname.includes('blog')) {
                window.location.href =
                  location.protocol + '//' + location.host + '/#' + x
              }
            }}
          >
            {customSvgs[x]}
            <div
              onClick={() => useDrawerStore.setState({isOpen: false})}
              style={{
                marginLeft: Const.pad / 2,
                color: Const.css.fc0,
                fontSize: Const.css.lg,
                wordWrap: 'break-word',
              }}
            >
              {x}
            </div>
          </button>
        </Link>
      ))}
    </div>
  )
}
