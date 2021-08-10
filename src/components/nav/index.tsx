import {Grid} from 'antd'
import {MenuInline} from './menu_inline'
import {HamburgerDrawer} from './hamburger_drawer'
import {useTheme} from '../../hooks/use_theme'
import {Linkedin, Github} from '@icons-pack/react-simple-icons'
import {Const} from '../../const'
import {ThemeButton} from '../../hooks/use_theme'
import {portfolioData} from '../../portfolio_data'
import Image from 'next/image'
import {SideBar} from './side_bar'

export const menuData = [
  {
    title: Const.titles.tech,
    items: portfolioData.skills.map((s) => ({name: s.name, a: ''})),
  },
  {
    title: Const.titles.projects,
    items: portfolioData.projects.map((p) => ({
      name: p.name,
      a: p.deploymentSrc,
    })),
  },
  {
    title: Const.titles.education,
    items: portfolioData.schools.map((e) => ({name: e.name, a: ''})),
  },
]

export const Nav = () => {
  const {md, lg} = Grid.useBreakpoint() as any
  const theme = useTheme()
  const iconSize = 24

  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip Nav
      </a>
      <header
        style={{
          zIndex: 1000,
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
            <HamburgerDrawer
              portfolio={portfolioData}
              style={{paddingLeft: Const.pad}}
            />
          ) : (
            <div style={{paddingLeft: Const.pad}}>
              <Image
                src="/favicon-32x32.png"
                width={32}
                height={32}
                alt={
                  portfolioData.person.firstName +
                  ' ' +
                  portfolioData.person.lastName
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
            }}
          >
            {lg ? (
              <div>
                {portfolioData.person.firstName +
                  ' ' +
                  portfolioData.person.lastName}
              </div>
            ) : (
              <>
                <div>{portfolioData.person.firstName}</div>
                <div>{portfolioData.person.lastName}</div>
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
            position: 'fixed',
          }}
        >
          {md && <MenuInline items={Object.values(Const.titles)} />}

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

          <a
            href={portfolioData.person.githubSrc}
            rel="noreferrer"
            target="_blank"
          >
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
            href={portfolioData.person.linkedInSrc}
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
          paddingLeft: xxl ? Const.hamburgerWidth : 0,
        }}
      >
        {xxl && (
          <SideBar
            portfolio={portfolioData}
            style={{
              position: 'fixed',
              left: 0,
              top: 0,
              bottom: 0,
              width: Const.hamburgerWidth,
              height: 'initial',
              borderRight: '1px solid',
            }}
          />
        )}

        {children}
      </main>
    </>
  )
}
