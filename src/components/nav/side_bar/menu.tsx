import {Link} from 'react-scroll'
import {Const} from '../../../const'
import {useThemeStore} from '../../../hooks/use_theme'
import {getCustomSvgs} from '../../svgs'

export const Menu = () => {
  const theme = useThemeStore.getState().theme
  const customSvgs = getCustomSvgs(theme.fontColor0, 24, 24)

  return (
    <div>
      {Object.values(Const.titles).map((i) => (
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
