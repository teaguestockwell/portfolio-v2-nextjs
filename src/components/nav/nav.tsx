import {MenuInline} from './menu_inline'
import {toggleTheme, useTheme} from '../../hooks/use_theme'
import {Linkedin, Github} from '@icons-pack/react-simple-icons'
import {Const} from '../../const'
import Image from 'next/image'
import {SideBar} from './side_bar/side_bar'
import {Drawer} from './drawer'
import {useDrawerStore} from '../../hooks/use_drawer'
import {PortfolioContext} from '../../pages'
import {useContext} from 'react'
import {useBreakpoint} from '../../hooks/use_breakpoint'
import {getInteractiveSvgs} from '../svgs'

const openDrawer = () => useDrawerStore.getState().set({isOpen: true})

export const Nav = () => {
  const md = useBreakpoint.md()
  const lg = useBreakpoint.lg()
  const portfolio = useContext(PortfolioContext)
  const theme = useTheme()
  const iconSize = 24
  const svgs = getInteractiveSvgs(theme.fontColor0, iconSize)
  const hamburger = getInteractiveSvgs(theme.fontColor0, 32).hamburger

  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip Nav
      </a>
      <header
        style={{
          zIndex: 10,
          position: 'fixed',
          WebkitBoxShadow: theme.shadow,
          MozBoxShadow: theme.shadow,
          boxShadow: theme.shadow,
          left: 0,
          top: 0,
          right: 0,
          height: Const.topNav,
        }}
      >
        <div
          style={{
            height: Const.topNav,
            position: 'fixed',
            left: 0,
            top: 0,
            right: 0,
            ...theme.nav,
          }}
        />

        <div
          style={{
            display: 'flex',
            justifyContent: 'left',
            alignItems: 'center',
            top: 0,
            left: 0,
            height: Const.topNav,
            position: 'fixed',
          }}
        >
          {!md ? (
            <div
              onClick={openDrawer}
              style={{
                paddingLeft: Const.pad,
                cursor: 'pointer',
              }}
            >
              {hamburger}
            </div>
          ) : (
            <div style={{paddingLeft: Const.pad}}>
              <Image
                src="/favicon-32x32.png"
                width={32}
                height={32}
                alt={
                  portfolio.person.firstName + ' ' + portfolio.person.lastName
                }
              />
            </div>
          )}

          <div
            style={{
              fontSize: Const.fontSizes[lg ? 'lg' : 'md'],
              wordWrap: 'break-word',
              color: theme.fontColor0,
              paddingLeft: Const.pad / (md ? 1 : 2),
              zIndex: 10,
            }}
          >
            {lg ? (
              <div className="name">
                {portfolio.person.firstName + ' ' + portfolio.person.lastName}
              </div>
            ) : (
              <>
                <div className="name">{portfolio.person.firstName}</div>
                <div className="name">{portfolio.person.lastName}</div>
              </>
            )}
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'right',
            alignItems: 'center',
            top: 0,
            height: Const.topNav,
            right: Const.pad,
            position: 'absolute',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'right',
              marginLeft: Const.pad / 2,
              marginRight: Const.pad / 2,
            }}
          >
            {md ? <MenuInline items={Object.values(portfolio.titles)} /> : null}
          </div>

          <div
            onClick={toggleTheme}
            className="icon-hover"
            style={{
              width: '12vw',
              maxWidth: iconSize + Const.pad,
              minWidth: iconSize + 4,
              cursor: 'pointer',
            }}
          >
            {theme.name === 'light' ? svgs.darkMode : svgs.lightMode}
          </div>

          <a href={portfolio.person.githubSrc} rel="noreferrer" target="_blank">
            <div
              className="icon-hover"
              style={{
                width: '12vw',
                maxWidth: iconSize + Const.pad,
                minWidth: iconSize + 4,
              }}
            >
              <Github color={theme.fontColor0} size={iconSize} />
            </div>
          </a>

          <a
            href={portfolio.person.linkedInSrc}
            rel="noreferrer"
            target="_blank"
          >
            <div className="icon-hover">
              <Linkedin size={iconSize} color={theme.fontColor0} />
            </div>
          </a>
        </div>
      </header>
    </>
  )
}

export const WithNav = ({children}: {children?: any}) => {
  const xl = useBreakpoint.xl()

  return (
    <>
      {xl ? null : <Nav />}
      <main
        style={{
          paddingTop: Const.topNav,
          paddingLeft: xl ? Const.drawerWidth : 0,
        }}
      >
        {xl ? (
          <SideBar
            style={{
              position: 'fixed',
              left: 0,
              top: 0,
              bottom: 0,
              width: Const.drawerWidth,
              height: 'initial',
              borderRight: '1px solid',
            }}
          />
        ) : (
          <Drawer>
            <SideBar />
          </Drawer>
        )}

        {children}
      </main>
    </>
  )
}
