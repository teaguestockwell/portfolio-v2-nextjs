import {Grid} from 'antd'
import {MenuInline} from './menu_inline'
import {useTheme} from '../../hooks/use_theme'
import {Linkedin, Github} from '@icons-pack/react-simple-icons'
import {Const} from '../../const'
import {ThemeButton} from '../../hooks/use_theme'
import Image from 'next/image'
import {SideBar} from './side_bar/side_bar'
import {Drawer} from './drawer'
import {MenuOutlined} from '@ant-design/icons'
import {useDrawerStore} from '../../hooks/use_drawer'
import {PortfolioContext} from '../../pages'
import {useContext} from 'react'

// export const menuData = [
//   {
//     title: Const.titles.tech,
//     items: portfolio.skills.map((s) => ({name: s.name, a: ''})),
//   },
//   {
//     title: Const.titles.projects,
//     items: portfolio.projects.map((p) => ({
//       name: p.name,
//       a: p.deploymentSrc,
//     })),
//   },
//   {
//     title: Const.titles.education,
//     items: portfolio.schools.map((e) => ({name: e.name, a: ''})),
//   },
// ]

const openDrawer = () => useDrawerStore.getState().set({isOpen: true})

export const Nav = () => {
  const {md, lg} = Grid.useBreakpoint() as any
  const portfolio = useContext(PortfolioContext)
  const theme = useTheme()
  const iconSize = 24

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
              style={{
                paddingLeft: Const.pad,
              }}
            >
              <MenuOutlined
                onClick={openDrawer}
                style={{
                  fontSize: '200%',
                  color: theme.fontColor0,
                }}
              />
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
              fontFamily: 'helvetica',
              color: theme.fontColor0,
              paddingLeft: Const.pad / (md ? 1 : 2),
              zIndex: 10,
            }}
          >
            {lg ? (
              <div>
                {portfolio.person.firstName + ' ' + portfolio.person.lastName}
              </div>
            ) : (
              <>
                <div>{portfolio.person.firstName}</div>
                <div>{portfolio.person.lastName}</div>
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
          {md && (
            <>
              <MenuInline items={Object.values(portfolio.titles)} />
            </>
          )}

          <div
            className="icon-hover"
            style={{
              width: '12vw',
              maxWidth: iconSize + Const.pad,
              minWidth: iconSize + 4,
              paddingBottom: 3,
              paddingLeft: 2,
            }}
          >
            <ThemeButton fontSize={iconSize} color={theme.fontColor0} />
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
  const {xxl} = Grid.useBreakpoint()

  return (
    <>
      {xxl ? null : <Nav />}
      <main
        style={{
          paddingTop: Const.topNav,
          paddingLeft: xxl ? Const.drawerWidth : 0,
        }}
      >
        {xxl ? (
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
