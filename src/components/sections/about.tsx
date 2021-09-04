import {Element} from 'react-scroll'
import {usePortfolio} from '../../hooks/use_portfolio_context'
import React from 'react'
import {Home} from '../hero/levels/home'
import {Dash} from '../hero/levels/dash'
import {Const} from '../../const'
import {useTheme} from '../../hooks/use_theme'
import {useBreakpoint} from '../../hooks/use_breakpoint'
import {Content} from '../content'
import {Link} from 'react-scroll'
import {Glow} from '../glow'

export const AboutSection = () => {
  const portfolio = usePortfolio()
  const theme = useTheme()
  const md = useBreakpoint.md()

  return (
    <Element name={portfolio.titles.about} key={portfolio.titles.about}>
      <Glow
        tlwh={[-14, 10, 115, 110]}
        publicSrc="/glow1.png"
        removeOnMdBreak={false}
      >
        {/* Above the fold */}
        <Content>
          <div
            style={{
              paddingTop: Const.pad * 2,
              minHeight: '100vh',
              display: 'grid',
              gridTemplateColumns: md ? 'minmax(300px, 500px) 1fr' : '1fr',
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
                  color: theme.fontColor0,
                  fontSize: `clamp(${Const.fontSizes.xxxl}px, 5vw, ${
                    Const.fontSizes.xxxl * 1.5
                  }px)`,
                  lineHeight: `clamp(${Const.fontSizes.xxxl}px, 5vw, ${
                    Const.fontSizes.xxxl * 1.5
                  }px)`,
                  fontWeight: 800,
                  wordWrap: 'break-word',
                }}
              >
                {portfolio.person.firstName + ' ' + portfolio.person.lastName}
              </div>

              <div
                style={{
                  fontSize: Const.fontSizes.lg,
                  wordWrap: 'break-word',
                  color: theme.fontColor0,
                  paddingTop: Const.pad,
                }}
              >
                {portfolio.person.shortAbout}
              </div>

              <Link
                key={portfolio.titles.contact}
                to={portfolio.titles.contact}
                {...Const.reactScrollProps}
                offset={0}
              >
                <div
                  className={theme.name + '6'}
                  style={{
                    marginTop: Const.pad,
                    fontSize: Const.fontSizes.lg,
                    wordWrap: 'break-word',
                    color: theme.backGround0,
                    paddingLeft: Const.pad,
                    paddingRight: Const.pad,
                    width: 'fit-content',
                    textAlign: 'left',
                    borderRadius: 20,
                    backgroundColor: theme.fontColor0,
                    boxShadow: theme.shadow,
                    WebkitBoxShadow: theme.shadow,
                    MozBoxShadow: theme.shadow,
                  }}
                >
                  {'Contact me'}
                </div>
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
              <Home m3u8Src={portfolio.heroM3u8Src} />
              <Dash />
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
