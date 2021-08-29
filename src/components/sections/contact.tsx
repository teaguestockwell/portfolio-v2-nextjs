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
  const iconSize = 50
  const theme = useTheme()
  const portfolio = useContext(PortfolioContext)
  const svgs = getInteractiveSvgs(theme.fontColor0, iconSize)
  const space = Const.pad * 2
  const xl = useBreakpoint.xl()

  return (
    <>
      <Element
        style={{
          minHeight: `100vh`,
          backgroundColor: theme.background1,
          position: 'relative',
        }}
        name={portfolio.titles.contact}
        key={portfolio.titles.contact}
      >
        <svg
          preserveAspectRatio="none"
          viewBox="0 0 100 102"
          height={Const.topNav}
          width="100%"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0,0 a1,1 0 0,0 100,0" fill={theme.backGround0}></path>
        </svg>
        <div
          style={{
            paddingTop: space,
          }}
        >
          <div>
            <SectionHeader
              title={portfolio.titles.contact}
              subTitle={portfolio.subTitles.contact}
            />
          </div>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              paddingLeft: space,
              paddingRight: space,
              backgroundColor: theme.background1,
              paddingBottom: '35vh',
              textDecoration: 'none',
            }}
          >
            <a
              aria-label="GitHub"
              href={portfolio.person.githubSrc}
              rel="noreferrer"
              target="_blank"
              style={{marginTop: space, width: 'fit-content'}}
            >
              <div
                className={`${theme.name}`}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  paddingRight: Const.pad,
                }}
              >
                <Github color={theme.fontColor0} size={iconSize} />
                <div
                  style={{
                    fontSize: Const.fontSizes.lg,
                    color: theme.fontColor1,
                    paddingLeft: space,
                    paddingRight: Const.pad,
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
              style={{marginTop: space, width: 'fit-content'}}
            >
              <div
                className={`${theme.name}`}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  paddingRight: Const.pad,
                }}
              >
                <Linkedin size={iconSize} color={theme.fontColor0} />
                <div
                  style={{
                    fontSize: Const.fontSizes.lg,
                    color: theme.fontColor1,
                    paddingLeft: space,
                    paddingRight: Const.pad,
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
              style={{marginTop: space, width: 'fit-content'}}
            >
              <div
                className={`${theme.name}`}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  paddingRight: Const.pad,
                }}
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
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Link
            key={portfolio.titles.about}
            to={portfolio.titles.about}
            {...Const.reactScrollProps}
          >
            <div className="icon-hover">{svgs.upArrow}</div>
          </Link>

          <a
            className={theme.name}
            href={`https://github.com/tsAppDevelopment/hello2`}
            rel="noreferrer"
            target="_blank"
            style={{
              fontSize: Const.fontSizes.md,
              color: theme.fontColor1,
              textAlign: 'center',
              marginTop: space / 2,
              paddingLeft: space,
              paddingRight: space,
            }}
          >
            See this site on Github
          </a>
        </div>
      </Element>
    </>
  )
}
