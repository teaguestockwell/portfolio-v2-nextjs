import {Link} from 'react-scroll'
import {Const} from '../../../const'
import {getCustomSvgs} from '../../svgs'
import {usePortfolio} from '../../../hooks/use_portfolio_context'
import {useDrawerStore} from '../../../hooks/use_drawer'
import {useBreakpoint} from '../../../hooks/use_breakpoint'
import NextLink from 'next/link'
import {useRouter} from 'next/router'

export const Menu = () => {
  const {titles} = usePortfolio()
  const customSvgs = getCustomSvgs(Const.css.fc0, 24, 24, titles)
  const titleVals = Object.values(titles)
  const xl = useBreakpoint().xl()
  const isBlog = useRouter().asPath.includes('blog')
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
      {titleVals.map((x, i) => {
        const content = (
          <Link
            key={x}
            to={x}
            {...Const.reactScrollProps}
            offset={getOffset(i)}
          >
            <button
              aria-label={x}
              className={'menu-sidebar'}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'left',
                height: 36,
                wordWrap: 'break-word',
                color: Const.css.fc0,
                width: '-webkit-fill-available',
                borderRadius: Const.rad,
                borderBottom: 'solid',
                borderColor: 'rgba(0, 0, 0, 0)',
              }}
              onClick={() => useDrawerStore.setState({isOpen: false})}
            >
              {customSvgs[x]}
              <h1
                style={{
                  marginLeft: Const.pad / 2,
                  color: Const.css.fc0,
                  fontSize: Const.css.md,
                  wordWrap: 'break-word',
                }}
              >
                {x}
              </h1>
            </button>
          </Link>
        )

        return isBlog ? <NextLink href={`/#${x}`}>{content}</NextLink> : content
      })}
    </div>
  )
}
