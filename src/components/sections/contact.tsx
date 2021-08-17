import {Element} from 'react-scroll'
import {SectionHeader} from '../section_header'
import {PortfolioContext} from '../../pages'
import React, {useContext} from 'react'
import {useTheme} from '../../hooks/use_theme'
import {Const} from '../../const'
import {Linkedin, Github} from '@icons-pack/react-simple-icons'
import {getInteractiveSvgs} from '../svgs'
import {Link} from 'react-scroll'
import {useBreakpoint} from '../../hooks/use_breakpoint'

export const ContactSection = () => {
  const xl = useBreakpoint.xl()
  const iconSize = 50
  const theme = useTheme()
  const portfolio = useContext(PortfolioContext)
  const svgs = getInteractiveSvgs(theme.fontColor0, iconSize)
  const space = Const.pad * 2

  return (
    <Element
      style={{
        minHeight: xl ? '100vh' : `calc(100vh - ${Const.topNav}px)`,
        backgroundColor: theme.background1,
        position: 'relative',
      }}
      name={portfolio.titles.contact}
      key={portfolio.titles.contact}
    >
      <div
        style={{
          paddingTop: space,
        }}
      >
        <SectionHeader
          title={portfolio.titles.contact}
          subTitle={portfolio.subTitles.contact}
        />

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            paddingLeft: space,
            paddingRight: space,
            backgroundColor: theme.background1,
            paddingBottom: '35vh',
          }}
        >
          <a
            aria-label="GitHub"
            href={portfolio.person.githubSrc}
            rel="noreferrer"
            target="_blank"
            style={{paddingTop: space}}
          >
            <div
              className="icon-hover"
              style={{display: 'flex', alignItems: 'center'}}
            >
              <Github color={theme.fontColor0} size={iconSize} />
              <div
                style={{
                  fontSize: Const.fontSizes.lg,
                  color: theme.fontColor1,
                  paddingLeft: space,
                }}
              >
                See my work on Github
              </div>
            </div>
          </a>

          <a
            aria-label="LinkedIn"
            href={portfolio.person.linkedInSrc}
            rel="noreferrer"
            target="_blank"
            style={{paddingTop: space}}
          >
            <div
              className="icon-hover"
              style={{display: 'flex', alignItems: 'center'}}
            >
              <Linkedin size={iconSize} color={theme.fontColor0} />
              <div
                style={{
                  fontSize: Const.fontSizes.lg,
                  color: theme.fontColor1,
                  paddingLeft: space,
                }}
              >
                Connect on LinkedIn
              </div>
            </div>
          </a>

          <a
            rel="noreferrer"
            target="_blank"
            href={`mailto:${portfolio.person.email}?subject=Hello`}
            aria-label="Email"
            style={{paddingTop: space}}
          >
            <div
              className="icon-hover"
              style={{display: 'flex', alignItems: 'center'}}
            >
              {svgs.mail}
              <div
                style={{
                  fontSize: Const.fontSizes.lg,
                  color: theme.fontColor1,
                  paddingLeft: space,
                }}
              >
                Send me an email
              </div>
            </div>
          </a>
        </div>
      </div>

      <div
        style={{
          position: 'absolute',
          bottom: space,
          left: 0,
          right: 0,
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Link
          key={portfolio.titles.about}
          to={portfolio.titles.about}
          {...Const.reactScrollProps}
        >
          <div className="icon-hover">{svgs.upArrow}</div>
        </Link>
      </div>
    </Element>
  )
}
