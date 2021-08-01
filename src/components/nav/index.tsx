import {Grid} from 'antd'
import {NavMenu} from './nav_menu'
import {HamMenu} from './ham_menu'
import {useMemo} from 'react'
import {useTheme} from '../../hooks/use_theme'
import {Linkedin, Github} from '@icons-pack/react-simple-icons'
import {Const} from '../../const'
import {ThemeButton} from '../../hooks/use_theme'

export const Nav = () => {
  const {md} = Grid.useBreakpoint()
  const theme = useTheme()

  return useMemo(() => {
    return (
      <div
        style={{
          zIndex: 1000,
          position: 'fixed',
          WebkitBoxShadow: theme.shadow,
          MozBoxShadow: theme.shadow,
          boxShadow: theme.shadow,
        }}
      >
        <div
          style={{
            height: 50,
            backgroundColor: theme.background2,
            position: 'fixed',
            left: 0,
            top: 0,
            right: 0,
          }}
        />

        <HamMenu
          style={{
            position: 'fixed',
            left: 15,
            top: 10,
          }}
        />
        {/* 
          <div
            style={{
              position: 'fixed',
              left: 60,
              top: 0,
              cursor: 'pointer',
            }}
          >
            <LogoSvg />
          </div> */}

        {md && (
          <NavMenu
            style={{
              top: 4,
              left: 260,
              right: 120,
              position: 'fixed',
            }}
          />
        )}

        <div
          style={{
            position: 'absolute',
            left: Const.pad * 3,
            top: 0,
            fontWeight: 'bold',
            fontSize: 22,
            fontFamily: 'helvetica',
            color: theme.fontColor0,
            width: 'max-content',
          }}
        >
          Teague Stockwell
        </div>

        <div
          style={{
            position: 'fixed',
            left: Const.pad * 3,
            top: 26,
            fontSize: Const.fontSizes.md,
            fontFamily: 'helvetica',
            color: theme.fontColor0,
          }}
        >
          Software Development
        </div>

        <a
          href="https://github.com/tsAppDevelopment"
          rel="noreferrer"
          target="_blank"
        >
          <div
            className="icon-hover"
            style={{
              textAlign: 'center',
              paddingTop: 13,
              width: 50,
              height: 50,
              top: 0,
              position: 'fixed',
              right: 0,
            }}
          >
            <Github color={theme.fontColor0} size={24} />
          </div>
        </a>

        <a
          href="https://www.linkedin.com/in/teague-stockwell"
          rel="noreferrer"
          target="_blank"
        >
          <div
            className="icon-hover"
            style={{
              textAlign: 'center',
              paddingTop: 13,
              width: 50,
              height: 50,
              top: 0,
              position: 'fixed',
              right: 38,
            }}
          >
            <Linkedin size={24} color={theme.fontColor0} />
          </div>
        </a>

        <div
          className="icon-hover"
          style={{
            textAlign: 'center',
            paddingTop: 13,
            width: 50,
            height: 50,
            top: 0,
            position: 'fixed',
            right: 72,
          }}
        >
          <ThemeButton fontSize={24} color={theme.fontColor0} />
        </div>
      </div>
    )
  }, [md, theme])
}

export const WithNav = ({children}: {children?: any}) => {
  return (
    <>
      <Nav />
      <div style={{paddingTop: 50}}>{children}</div>
    </>
  )
}
