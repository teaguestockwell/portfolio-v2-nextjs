import {Grid} from 'antd'
import {NavMenu} from './nav_menu'
import {HamMenu} from './ham_menu'
import {useTheme} from '../../hooks/use_theme'
import {Linkedin, Github} from '@icons-pack/react-simple-icons'
import {Const} from '../../const'
import {ThemeButton} from '../../hooks/use_theme'
import {portfolioData} from '../../portfolio_data'
import Image from 'next/image'

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

const appBarHeight = 70

export const Nav = () => {
  const {md, lg} = Grid.useBreakpoint() as any
  const theme = useTheme()

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
          height: appBarHeight,
        }}
      >
        <div
          style={{
            height: appBarHeight,
            backgroundColor: theme.background2,
            position: 'fixed',
            left: 0,
            top: 0,
            right: 0,
          }}
        />

        <div
          style={{
            display: 'flex',
            justifyContent: 'left',
            alignItems: 'center',
            top: 0,
            left: 0,
            height: appBarHeight,
            position: 'fixed',
          }}
        >
          {!md ? (
            <HamMenu style={{paddingLeft: Const.pad}} />
          ) : (
            <div style={{paddingLeft: Const.pad}}>
              <Image
                src="/favicon-32x32.png"
                width={32}
                height={32}
                alt={portfolioData.firstName + ' ' + portfolioData.lastName}
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
                {portfolioData.firstName + ' ' + portfolioData.lastName}
              </div>
            ) : (
              <>
                <div>{portfolioData.firstName}</div>
                <div>{portfolioData.lastName}</div>
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
            height: appBarHeight,
            right: Const.pad,
            position: 'fixed',
          }}
        >
          {md && (
            <NavMenu
              style={{
                justifyContent: 'flex-end',
              }}
            />
          )}

          <div
            className="icon-hover"
            style={{
              width: '8vw',
              maxWidth: 40 + Const.pad,
              minWidth: 38,
              paddingBottom: 3,
              paddingLeft: 2,
            }}
          >
            <ThemeButton fontSize={32} color={theme.fontColor0} />
          </div>

          <a href={portfolioData.githubSrc} rel="noreferrer" target="_blank">
            <div
              className="icon-hover"
              style={{width: '8vw', maxWidth: 40 + Const.pad, minWidth: 38}}
            >
              <Github color={theme.fontColor0} size={32} />
            </div>
          </a>

          <a href={portfolioData.linkedInSrc} rel="noreferrer" target="_blank">
            <div className="icon-hover">
              <Linkedin size={32} color={theme.fontColor0} />
            </div>
          </a>
        </div>
      </header>
    </>
  )
}

export const WithNav = ({children}: {children?: any}) => {
  return (
    <>
      <Nav />
      <main style={{paddingTop: appBarHeight}}>{children}</main>
    </>
  )
}
