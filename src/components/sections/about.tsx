import {Element} from 'react-scroll'
import {usePortfolio} from '../../hooks/use_portfolio_context'
import React from 'react'
import {MobileHero} from '../hero/levels/mobile_hero'
import {DesktopHero} from '../hero/levels/desktop_hero'
import {Const} from '../../const'
import {Content} from '../content'
import {Link} from 'react-scroll'
import {Glow} from '../glow'
import {TypeWriterText} from '../typewriter_text'

export const AboutSection = () => {
  const portfolio = usePortfolio()

  return (
    <Element name={portfolio.titles.about} key={portfolio.titles.about}>
      <Glow tlwh={[-14, 10, 115, 110]} publicSrc="/glow1.png">
        {/* Above the fold */}
        <Content>
          <div
            style={{
              paddingTop: Const.pad * 2,
              minHeight: '100vh',
              display: 'grid',
              gridTemplateColumns: Const.css.aboutGrid,
              gap: Const.pad * 2,
              alignItems: 'center',
              paddingLeft: Const.pad,
              paddingRight: Const.pad,
            }}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <div
                className="name"
                style={{
                  color: Const.css.fc0,
                  fontSize: Const.css.xxxlg,
                  lineHeight: Const.css.xxxlg,
                  fontWeight: 800,
                  wordWrap: 'break-word',
                }}
              >
                {portfolio.person.firstName + ' ' + portfolio.person.lastName}
              </div>

              <div
                style={{
                  fontSize: Const.css.lg,
                  wordWrap: 'break-word',
                  color: Const.css.fc0,
                  paddingTop: Const.pad,
                }}
              >
                {portfolio.person.shortAbout}
              </div>

              {/* <TypeWriterText
                lines={portfolio.person.typeWriterCallToActions}
                style={{
                  fontSize: Const.css.lg,
                  wordWrap: 'break-word',
                  color: Const.css.fc0,
                  height: 51,
                }}
              /> */}

              <Link
                key={portfolio.titles.contact}
                to={portfolio.titles.contact}
                {...Const.reactScrollProps}
                offset={0}
                style={{marginTop: Const.pad * 2, width: 'fit-content'}}
              >
                <button
                  className="hover-button"
                  style={{
                    fontSize: Const.css.lg,
                    wordWrap: 'break-word',
                    color: Const.css.bgc0,
                    paddingLeft: Const.pad,
                    paddingRight: Const.pad,
                    width: 'fit-content',
                    textAlign: 'left',
                    borderRadius: 20,
                    backgroundColor: Const.css.fc0,
                  }}
                >
                  {'Contact me'}
                </button>
              </Link>
            </div>

            <div
              style={{
                justifyContent: 'left',
                height: 700,
                position: 'relative',
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
              }}
            >
              <MobileHero m3u8Src={portfolio.heroM3u8Src} />
              <DesktopHero />
            </div>
          </div>
        </Content>

        {/* About  */}
        {/* <SectionHeader
        title={portfolio.titles.about}
        subTitle={portfolio.subTitles.about}
        /> */}
      </Glow>
    </Element>
  )
}
