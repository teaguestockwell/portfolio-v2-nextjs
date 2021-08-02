import {Divider, Drawer, Menu} from 'antd'
import {MenuOutlined} from '@ant-design/icons'
import {useState} from 'react'
import {useTheme} from '../../hooks/use_theme'
import {menuData} from '../../data'
import {Link} from 'react-scroll'
import {Const} from '../../const'

export const HamMenu = ({style}: {style?: any}) => {
  const theme = useTheme()
  const [open, setOpen] = useState(false)
  const toggle = () => setOpen(!open)

  return (
    <div style={style}>
      <MenuOutlined
        onClick={toggle}
        style={{
          fontSize: '150%',
          color: theme.fontColor0,
        }}
      />

      <Drawer
        closable={false}
        style={{padding: '0px'}}
        bodyStyle={{backgroundColor: theme.background2}}
        placement="left"
        visible={open}
        onClose={toggle}
      >
        <>
          {menuData.map((ig) => (
            <>
              <div>{ig.title}</div>
              {ig.items.map((i) => (
                <Link key={i.name} to={i.name} {...Const.reactScrollProps}>
                  <div>{i.name}</div>
                </Link>
              ))}
              <Divider />
            </>
          ))}
        </>
      </Drawer>
    </div>
  )
}
