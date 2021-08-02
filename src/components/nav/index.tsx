import {Grid} from 'antd'
import {NavMenu} from './nav_menu'
import {HamMenu} from './ham_menu'
import {useMemo} from 'react'
import {useTheme} from '../../hooks/use_theme'
import {Linkedin, Github} from '@icons-pack/react-simple-icons'
import {Const} from '../../const'
import {ThemeButton} from '../../hooks/use_theme'
import {developer} from '../../data'

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
              top: 8,
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
              top: 19,
            }}
          />
        )}

        <div
          style={{
            fontSize: md ? Const.fontSizes.lg : Const.fontSizes.md,
            fontFamily: 'helvetica',
            color: theme.fontColor0,
            position: 'fixed',
            top: md ? 12 : 18,
            left: md ? Const.pad : 50,
          }}
        >
          {developer.name}
        </div>

        <a href={developer.githubSrc} rel="noreferrer" target="_blank">
          <div
            className="icon-hover"
            style={{
              top: 18,
              right: Const.pad,
              position: 'fixed',
            }}
          >
            <Github color={theme.fontColor0} size={24} />
          </div>
        </a>

        <a href={developer.linkedInSrc} rel="noreferrer" target="_blank">
          <div
            className="icon-hover"
            style={{
              position: 'fixed',
              top: 18,
              right: Const.pad / 2 + 24 + Const.pad,
            }}
          >
            <Linkedin size={24} color={theme.fontColor0} />
          </div>
        </a>

        <div
          className="icon-hover"
          style={{
            paddingTop: 18,
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
