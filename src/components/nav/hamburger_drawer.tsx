import {Drawer} from 'antd'
import {MenuOutlined} from '@ant-design/icons'
import React, {useState} from 'react'
import {useTheme} from '../../hooks/use_theme'
import {SideBar} from './side_bar/side_bar'
import * as Types from '../../types'
import {Const} from '../../const'

export const HamburgerDrawer = ({
  person,
  style,
}: {
  person: Types.Person
  style?: any
}) => {
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
        style={{padding: '0px', width: Const.hamburgerWidth}}
        bodyStyle={{backgroundColor: theme.background1}}
        placement="left"
        visible={open}
        onClose={toggle}
        width={Const.hamburgerWidth}
      >
        <SideBar person={person} />
      </Drawer>
    </div>
  )
}
