import {Element} from 'react-scroll'
import {SectionHeader} from '../section_header'
import {usePortfolio} from '../../hooks/use_portfolio_context'
import React from 'react'
import {Const} from '../../const'
import linkedIn from 'simple-icons/icons/linkedin'
import gitHub from 'simple-icons/icons/github'
import {getInteractiveSvgs, getSvgFromSimpleIcon} from '../svgs'
import {Link} from 'react-scroll'

export const ContactSection = () => {
  const iconSize = 50
  const portfolio = usePortfolio()
  const svgs = getInteractiveSvgs(Const.css.fc0, iconSize)
  const space = Const.pad * 2

  return (
    <>
      <Element
        style={{
          minHeight: `100vh`,
          backgroundColor: Const.css.bgc1,
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
          <path style={{fill: Const.css.bgc0}} d="M 0,0 a 1,1 0 0,0 100,0" />
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
              backgroundColor: Const.css.bgc1,
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
              tabIndex={-1}
            >
              <button
                className="hovbg"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  paddingRight: Const.pad,
                }}
              >
                {getSvgFromSimpleIcon(gitHub, iconSize, Const.css.fc0)}
                <div
                  style={{
                    fontSize: Const.css.lg,
                    color: Const.css.fc1,
                    paddingLeft: space,
                    paddingRight: Const.pad,
                  }}
                >
                  See my work on Github
                </div>
              </button>
            </a>

            <a
              aria-label="LinkedIn"
              href={portfolio.person.linkedInSrc}
              rel="noreferrer"
              target="_blank"
              style={{marginTop: space, width: 'fit-content'}}
              tabIndex={-1}
            >
              <button
                className="hovbg"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  paddingRight: Const.pad,
                }}
              >
                {getSvgFromSimpleIcon(linkedIn, iconSize, Const.css.fc0)}
                <div
                  style={{
                    fontSize: Const.css.lg,
                    color: Const.css.fc1,
                    paddingLeft: space,
                    paddingRight: Const.pad,
                  }}
                >
                  Connect on LinkedIn
                </div>
              </button>
            </a>

            <a
              rel="noreferrer"
              target="_blank"
              href={`mailto:${portfolio.person.email}?subject=Hello`}
              aria-label="Email"
              style={{marginTop: space, width: 'fit-content'}}
              tabIndex={-1}
            >
              <button
                className="hovbg"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  paddingRight: Const.pad,
                }}
              >
                {svgs.mail}
                <div
                  style={{
                    fontSize: Const.css.lg,
                    color: Const.css.fc1,
                    paddingLeft: space,
                  }}
                >
                  Send me an email
                </div>
              </button>
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
            <button className="icon-hover">{svgs.upArrow}</button>
          </Link>

          <a
            className="hovbg"
            href={`https://github.com/tsAppDevelopment/hello2`}
            rel="noreferrer"
            target="_blank"
            style={{
              fontSize: Const.css.md,
              color: Const.css.fc1,
              textAlign: 'center',
              marginTop: space / 2,
              paddingLeft: space,
              paddingRight: space,
              borderRadius: Const.rad,
            }}
          >
            See this site on Github
          </a>
        </div>
      </Element>
    </>
  )
}
