import {Const} from '../../const'
import {useBreakpoint} from '../../hooks/use_breakpoint'
import NextLink from 'next/link'
import {useRouter} from 'next/router'
import {Link} from '../react-scroll-exports'

export const MenuInline = ({items}: {items: string[]}) => {
  const xl = useBreakpoint().xl()
  const isBlog = useRouter().asPath.includes('blog')
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
        const button = (
          <button
            className={`menu-inline`}
            style={{
              paddingInline: '1vw',
              paddingBlock: '1vw',
              color: Const.css.fc0,
              fontSize: Const.css.sm,
              wordWrap: 'break-word',
              borderRadius: Const.rad,
            }}
          >
            {x}
          </button>
        )

        return isBlog ? (
          <NextLink key={x} href={`/#${x}`}>
            {button}
          </NextLink>
        ) : (
          <Link
            key={x}
            to={x}
            href={`#${x}`}
            {...Const.reactScrollProps}
            offset={getOffset(i)}
          >
            {button}
          </Link>
        )
      })}
    </>
  )
}
