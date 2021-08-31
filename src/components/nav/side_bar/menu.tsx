import {Link} from 'react-scroll'
import {Const} from '../../../const'
import {useThemeStore} from '../../../hooks/use_theme'
import {getCustomSvgs} from '../../svgs'
import {usePortfolio} from '../../../hooks/use_portfolio_context'
import {useDrawerStore} from '../../../hooks/use_drawer'
import {useBreakpoint} from '../../../hooks/use_breakpoint'

export const Menu = () => {
  const theme = useThemeStore.getState().theme
  const {titles} = usePortfolio()
  const customSvgs = getCustomSvgs(theme.fontColor0, 24, 24, titles)
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

  return (
    <div
      style={{
        paddingTop: Const.pad,
      }}
    >
      {titleVals.map((x, i) => (
        <Link key={x} to={x} {...Const.reactScrollProps} offset={getOffset(i)}>
          <div
            className={`menu-sidebar ${theme.name}`}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'left',
              height: 48,
              fontSize: Const.fontSizes.lg,
              wordWrap: 'break-word',
              color: theme.fontColor0,
              width: '-webkit-fill-available',
            }}
          >
            {customSvgs[x]}
            <div
              onClick={() => useDrawerStore.setState({isOpen: false})}
              style={{
                marginLeft: Const.pad / 2,
                color: theme.fontColor0,
                fontSize: Const.fontSizes.lg,
                wordWrap: 'break-word',
              }}
            >
              {x}
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}
