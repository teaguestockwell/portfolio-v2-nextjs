import {MenuInline} from './menu_inline'
import {Const} from '../../const'
import Image from 'next/image'
import {SideBar} from './side_bar/side_bar'
import {Drawer} from './drawer'
import {useDrawerStore} from '../../hooks/use_drawer'
import {usePortfolio} from '../../hooks/use_portfolio_context'
import {useBreakpoint} from '../../hooks/use_breakpoint'
import {getInteractiveSvgs, getSvgFromSimpleIcon} from '../svgs'
import {siGithub, siLinkedin} from 'simple-icons/icons'
import {useTheme} from '../../hooks/use_theme'
import React from 'react'

const openDrawer = () => useDrawerStore.getState().set({isOpen: true})
const useIsScrolled = () => {
  const [isScrolled, setIsScrolled] = React.useState(false)
  React.useEffect(() => {
    const onScroll = () => {
      const y =
        window?.scrollY ??
        window?.pageYOffset ??
        document?.documentElement?.scrollTop ??
        1
      setIsScrolled(y > 0)
    }
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return isScrolled
}

export const Nav = () => {
  const md = useBreakpoint().md()
  const lg = useBreakpoint().lg()
  const portfolio = usePortfolio()
  const iconSize = 24
  const svgs = getInteractiveSvgs(Const.css.fc0, iconSize)
  const hamburger = getInteractiveSvgs(Const.css.fc0, 32).hamburger
  const {theme, toggleTheme} = useTheme()
  const isScrolled = useIsScrolled()

  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip Nav
      </a>
      <header
        style={{
          zIndex: 10,
          position: 'fixed',
          left: 0,
          top: 0,
          right: 0,
          height: Const.topNav,
          ...(isScrolled
            ? {
                WebkitBoxShadow: Const.css.shadow,
                MozBoxShadow: Const.css.shadow,
                boxShadow: Const.css.shadow,
              }
            : {}),
        }}
      >
        <div
          style={{
            height: Const.topNav,
            position: 'fixed',
            left: 0,
            top: 0,
            right: 0,
            ...(isScrolled
              ? {
                  WebkitBackdropFilter: 'blur(10px)',
                  backdropFilter: 'blur(10px)',
                  backgroundColor: Const.css.navbg,
                }
              : {}),
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
            <button
              onClick={openDrawer}
              className="icon-hover"
              aria-label={'Toggle hamburger menu'}
              style={{
                paddingLeft: Const.pad,
                cursor: 'pointer',
                display: 'flex',
              }}
            >
              {hamburger}
            </button>
          ) : (
            <div style={{paddingLeft: Const.pad}}>
              <Image
                src="/favorite-icons/32x32.png"
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
              fontSize: Const.css.lg,
              wordWrap: 'break-word',
              color: Const.css.fc0,
              paddingLeft: Const.pad / (md ? 1 : 2),
              zIndex: 10,
              lineHeight: '0.8rem',
            }}
          >
            {lg ? (
              isScrolled ? (
                <div className="name" style={{fontSize: Const.css.nameSize}}>
                  {portfolio.person.firstName + ' ' + portfolio.person.lastName}
                </div>
              ) : null
            ) : isScrolled ? (
              <>
                <div style={{fontSize: Const.css.nameSize}} className="name">
                  {portfolio.person.firstName}
                </div>
                <div style={{fontSize: Const.css.nameSize}} className="name">
                  {portfolio.person.lastName}
                </div>
              </>
            ) : null}
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

          <button
            aria-label={'Toggle theme'}
            onClick={toggleTheme}
            className="icon-hover"
            style={{
              width: '12vw',
              maxWidth: iconSize + Const.pad,
              minWidth: iconSize + 4,
              cursor: 'pointer',
              display: 'flex',
            }}
          >
            {theme === 'light' ? svgs.darkMode : svgs.lightMode}
          </button>

          <a
            tabIndex={-1}
            href={portfolio.person.githubSrc}
            rel="noreferrer"
            target="_blank"
          >
            <button
              aria-label={'Github'}
              className="icon-hover"
              style={{
                width: '12vw',
                maxWidth: iconSize + Const.pad,
                minWidth: iconSize + 4,
                display: 'flex',
              }}
            >
              {getSvgFromSimpleIcon(siGithub, iconSize, Const.css.fc0)}
            </button>
          </a>

          <a
            href={portfolio.person.linkedInSrc}
            rel="noreferrer"
            target="_blank"
            tabIndex={-1}
          >
            <button
              className="icon-hover"
              aria-label={'LinkedIn'}
              style={{
                maxWidth: iconSize + Const.pad,
                minWidth: iconSize + 4,
                display: 'flex',
              }}
            >
              {getSvgFromSimpleIcon(siLinkedin, iconSize, Const.css.fc0)}
            </button>
          </a>
        </div>
      </header>
    </>
  )
}

export const WithNav = ({children}: {children?: any}) => {
  const xl = useBreakpoint().xl()

  return (
    <>
      {xl ? null : <Nav />}
      <main
        style={{
          paddingTop: xl ? 0 : Const.topNav,
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
