import {useTheme} from '../../../hooks/use_theme'
import {Profile} from './profile'
import {Menu} from './menu'
import {Footer} from './footer'
import {Const} from '../../../const'

export const SideBar = ({style = {}}: {style?: any}) => {
  const theme = useTheme()

  return (
    <div
      style={{
        padding: Const.pad,
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'column',
        backgroundColor: theme.background1,
        ...style,
      }}
    >
      <Profile />
      <Menu />
      <Footer />
    </div>
  )
}
