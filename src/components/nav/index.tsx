import {Grid} from 'antd'
import {NavMenu} from './nav_menu'
import {HamMenu} from './ham_menu'
import {useTheme} from '../../hooks/use_theme'
import {Linkedin, Github} from '@icons-pack/react-simple-icons'
import {Const} from '../../const'
import {ThemeButton} from '../../hooks/use_theme'
import {developer} from '../../data'

const appBarHeight = 60

export const Nav = () => {
  const md = Grid.useBreakpoint()?.md as any
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
          {
            !md ? <HamMenu style={{paddingLeft: Const.pad}} /> : null
            // <div
            //   style={{paddingLeft: Const.pad}}
            // >
            //   <LogoSvg />
            // </div>
          }

          <div
            style={{
              fontSize: Const.fontSizes[md ? 'lg' : 'md'],
              fontFamily: 'helvetica',
              color: theme.fontColor0,
              paddingLeft: Const.pad / (md ? 1 : 2),
            }}
          >
            {developer.name}
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
              maxWidth: 24 + Const.pad,
              minWidth: 30,
              paddingBottom: 3,
              paddingLeft: 2,
            }}
          >
            <ThemeButton fontSize={24} color={theme.fontColor0} />
          </div>

          <a href={developer.githubSrc} rel="noreferrer" target="_blank">
            <div
              className="icon-hover"
              style={{width: '8vw', maxWidth: 24 + Const.pad, minWidth: 30}}
            >
              <Github color={theme.fontColor0} size={24} />
            </div>
          </a>

          <a href={developer.linkedInSrc} rel="noreferrer" target="_blank">
            <div className="icon-hover">
              <Linkedin size={24} color={theme.fontColor0} />
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
