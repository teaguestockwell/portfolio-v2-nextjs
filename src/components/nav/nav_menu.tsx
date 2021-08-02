import {Menu} from 'antd'
import {Const} from '../../const'
import {menuData} from './index'
import {useTheme} from '../../hooks/use_theme'
import {Link} from 'react-scroll'

export const NavMenu = ({style}: {style?: any}) => {
  const theme = useTheme()
  return (
    <Menu
      mode={'horizontal'}
      style={style}
      triggerSubMenuAction={'hover'}
      selectedKeys={[]}
    >
      {menuData.map((ig) => (
        <Menu.SubMenu
          key={ig.title}
          title={ig.title}
          style={{
            color: theme.fontColor0,
            fontSize: Const.fontSizes.md,
          }}
        >
          {ig.items.map((i) => (
            <Menu.Item
              style={{
                backgroundColor: theme.background2,
                color: theme.fontColor0,
                fontSize: Const.fontSizes.md,
                margin: 0,
              }}
              key={ig.title + i.name}
            >
              {i.name}
              <Link to={i.name} {...Const.reactScrollProps}></Link>
            </Menu.Item>
          ))}
        </Menu.SubMenu>
      ))}
    </Menu>
  )
}
