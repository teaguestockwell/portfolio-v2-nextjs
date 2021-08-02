import {Divider, Drawer, Menu} from 'antd'
import {MenuOutlined} from '@ant-design/icons'
import {useState} from 'react'
import {useTheme} from '../../hooks/use_theme'
import {menuData} from '../../data'

export const HamMenu = ({style}: {style?: any}) => {
  const theme = useTheme()
  const [open, setOpen] = useState(false)
  const toggle = () => setOpen(!open)

  return (
    <div style={style}>
      <div style={{}} onClick={toggle}>
        <MenuOutlined
          style={{
            height: 30,
            fontSize: '150%',
            color: theme.fontColor0,
          }}
        />
      </div>

      <Drawer
        closable={false}
        style={{padding: '0px'}}
        bodyStyle={{backgroundColor: theme.background2}}
        placement="left"
        visible={open}
        onClose={toggle}
      >
        <Menu
          selectedKeys={[]}
          mode="inline"
          style={{
            width: '100%',
            padding: '10px',
            backgroundColor: theme.background2,
          }}
        >
          {menuData.map((ig) => (
            <div key={ig.title}>
              <Menu.ItemGroup
                title={<div style={{color: theme.fontColor0}}>{ig.title}</div>}
              >
                {ig.items.map((i) => (
                  // TODO: next router here
                  <Menu.Item
                    style={{color: theme.fontColor1}}
                    key={ig.title + i.name}
                  >
                    {i.name}
                  </Menu.Item>
                ))}
              </Menu.ItemGroup>
              <Divider />
            </div>
          ))}
        </Menu>
      </Drawer>
    </div>
  )
}
