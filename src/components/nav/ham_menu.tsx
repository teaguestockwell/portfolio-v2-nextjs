import {Divider, Drawer} from 'antd'
import {MenuOutlined} from '@ant-design/icons'
import React, {useState} from 'react'
import {useTheme} from '../../hooks/use_theme'
import {SideBar} from './side_bar'

export const HamMenu = ({style}: {style?: any}) => {
  const theme = useTheme()
  const [open, setOpen] = useState(false)
  const toggle = () => setOpen(!open)

  return (
    <div style={style}>
      <MenuOutlined
        onClick={toggle}
        style={{
          fontSize: '200%',
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
        <SideBar />
      </Drawer>
    </div>
  )
}
