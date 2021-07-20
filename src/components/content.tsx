import {Const} from '../const'
import {useInitTheme, useTheme} from '../hooks/use_theme'

export const Content = ({children}: {children: JSX.Element[]}) => {
  const themeName = useTheme((s) => s.theme.name)
  useInitTheme()
  return (
    <div
      key={themeName}
      style={{
        justifyContent: 'center',
        display: 'grid',
        paddingLeft: Const.pad.l,
        paddingRight: Const.pad.r,
      }}
    >
      {children}
    </div>
  )
}
