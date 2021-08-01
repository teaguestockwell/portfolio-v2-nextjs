import {Menu} from 'antd'
import {menuData} from '../../data'
import {useTheme} from '../../hooks/use_theme'

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
          style={{color: theme.fontColor0}}
          key={ig.title}
          title={ig.title}
        >
          {ig.items.map((i) => (
            <Menu.Item
              style={{
                backgroundColor: theme.background2,
                color: theme.fontColor0,
                margin: 0,
              }}
              key={ig.title + i.name}
            >
              {i.name}
            </Menu.Item>
          ))}
        </Menu.SubMenu>
      ))}
    </Menu>
  )
}