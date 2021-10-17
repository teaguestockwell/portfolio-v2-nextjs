import {Profile} from './profile'
import {Menu} from './menu'
import {Footer} from './footer'
import {Const} from '../../../const'
import React from 'react'

// eslint-disable-next-line react/display-name
export const SideBar = React.memo(
  ({style = {}}: {style?: any}) => {
    return (
      <div
        style={{
          padding: Const.pad * 2,
          width: '100%',
          height: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          flexDirection: 'column',
          backgroundColor: Const.css.bgc1,
          overflowY: 'auto',
          borderRight: Const.css.border,
          ...style,
        }}
      >
        <a className="skip-link" href="#main-content">
          Skip Nav
        </a>
        <Profile />
        <Menu />
        <Footer />
      </div>
    )
  },
  (s0, s1) => true
)
