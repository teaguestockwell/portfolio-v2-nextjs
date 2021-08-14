import {Link} from 'react-scroll'
import {Const} from '../../../const'
import {useThemeStore} from '../../../hooks/use_theme'
import {getCustomSvgs} from '../../svgs'
import {useContext} from 'react'
import {PortfolioContext} from '../../../pages'

export const Menu = () => {
  const theme = useThemeStore.getState().theme
  const {titles} = useContext(PortfolioContext)
  const customSvgs = getCustomSvgs(theme.fontColor0, 24, 24, titles)

  return (
    <div
      style={{
        paddingTop: Const.pad,
      }}
    >
      {Object.values(titles).map((i) => (
        <Link
          key={i}
          to={i}
          {...Const.reactScrollProps}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'left',
            height: 48,
            fontWeight: 200,
            fontSize: Const.fontSizes.lg,
            color: theme.fontColor0,
          }}
        >
          {customSvgs[i]}
          <div
            style={{
              marginLeft: Const.pad / 2,
              color: theme.fontColor0,
              fontSize: Const.fontSizes.lg,
            }}
          >
            {i}
          </div>
        </Link>
      ))}
    </div>
  )
}
