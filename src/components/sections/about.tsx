import {Element} from 'react-scroll'
import {SectionHeader} from '../section_header'
import {PortfolioContext} from '../../pages'
import React, {useContext} from 'react'
import {Home} from '../hero/levels/home'
import {Dash} from '../hero/levels/dash'
import {Const} from '../../const'
import {useTheme} from '../../hooks/use_theme'
import {useBreakpoint} from '../../hooks/use_breakpoint'
import {Content} from '../content'
import {Link} from 'react-scroll'

export const AboutSection = () => {
  const portfolio = useContext(PortfolioContext)
  const theme = useTheme()
  const md = useBreakpoint.md()

  return (
    <Element name={portfolio.titles.about} key={portfolio.titles.about}>
      {/* Above the fold */}
      <Content>
        <div
          style={{
            minHeight: '100vh',
            display: 'grid',
            gridTemplateColumns: 'minmax(300px, 500px) 1fr',
            gap: Const.pad * 2,
            alignItems: 'center',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              paddingLeft: Const.pad,
            }}
          >
            <div
              style={{
                color: theme.fontColor0,
                fontSize: Const.fontSizes.xxxl,
                lineHeight: `${Const.fontSizes.xxxl}px`,
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
                color: theme.fontColor1,
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
                className={theme.name}
                style={{
                  marginTop: Const.pad,
                  fontSize: Const.fontSizes.lg,
                  wordWrap: 'break-word',
                  color: theme.fontColor1,
                  marginLeft: Const.pad * -1,
                  paddingLeft: Const.pad,
                  paddingRight: Const.pad,
                  width: 'fit-content',
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
            <Home />
            <Dash />
          </div>
        </div>
      </Content>

      {/* About  */}
      {/* <SectionHeader
        title={portfolio.titles.about}
        subTitle={portfolio.subTitles.about}
        /> */}
    </Element>
  )
}
