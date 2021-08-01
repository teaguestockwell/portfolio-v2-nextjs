import {Grid} from 'antd'
import {NavMenu} from './nav_menu'
import {HamMenu} from './ham_menu'
import {useMemo} from 'react'
import {useTheme} from '../../hooks/use_theme'
import {Linkedin, Github} from '@icons-pack/react-simple-icons'
import {Const} from '../../const'
import {ThemeButton} from '../../hooks/use_theme'

export const Nav = () => {
  const md = Grid.useBreakpoint()?.md as any
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
            height: 60,
            backgroundColor: theme.background2,
            position: 'fixed',
            left: 0,
            top: 0,
            right: 0,
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

        {md ? (
          <NavMenu
            style={{
              top: 4,
              left: 204,
              right: 110,
              position: 'fixed',
              justifyContent: 'flex-end',
            }}
          />
        ) : (
          <HamMenu
            style={{
              zIndex: 2,
              position: 'fixed',
              left: 15,
              top: 15,
            }}
          />
        )}
        <div
          style={{
            position: 'fixed',
            top: 5,
            left: md ? Const.pad : Const.pad * 3,
            display: 'flex',
            justifyContent: 'left',
            alignItems: 'left',
          }}
        >
          <div>
            <div
              style={{
                fontSize: Const.fontSizes.md,
                fontFamily: 'helvetica',
                color: theme.fontColor0,
              }}
            >
              Teague Stockwell
            </div>

            <div
              style={{
                fontSize: Const.fontSizes.md,
                fontFamily: 'helvetica',
                color: theme.fontColor0,
              }}
            >
              Software Development
            </div>
          </div>
        </div>

        <a
          href="https://github.com/tsAppDevelopment"
          rel="noreferrer"
          target="_blank"
        >
          <div
            className="icon-hover"
            style={{
              top: 15,
              right: Const.pad,
              position: 'fixed',
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
              position: 'fixed',
              top: 15,
              right: Const.pad / 2 + 24 + Const.pad,
            }}
          >
            <Linkedin size={24} color={theme.fontColor0} />
          </div>
        </a>

        <div
          className="icon-hover"
          style={{
            paddingTop: 15,
            top: 0,
            position: 'fixed',
            right: Const.pad / 2 + 24 + Const.pad / 2 + 24 + Const.pad,
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
      <div style={{paddingTop: 60}}>{children}</div>
    </>
  )
}
