import {Element} from 'react-scroll'
import {SectionHeader} from '../section_header'
import {usePortfolio} from '../../hooks/use_portfolio_context'
import {SkillCloud} from '../skill_cloud'
import {Content} from '../content'
import {Const} from '../../const'
import {useTheme} from '../../hooks/use_theme'
import npm from 'simple-icons/icons/npm'
import {getSvgFromSimpleIcon} from '../svgs'

export const SkillsSection = () => {
  const portfolio = usePortfolio()
  const theme = useTheme()

  return (
    <Element name={portfolio.titles.tech} key={portfolio.titles.tech}>
      <SectionHeader
        title={portfolio.titles.tech}
        subTitle={portfolio.subTitles.tech}
      />

      <Content style={{paddingTop: Const.pad * 4}}>
        <SkillCloud />

        {portfolio.person.firstName === 'Teague' ? (
          <div
            style={{
              paddingLeft: Const.pad,
              paddingRight: Const.pad,
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <a href="https://www.npmjs.com/package/react-icon-cloud">
              <div
                className={theme.name + '6'}
                style={{
                  marginTop: Const.pad * 4,
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
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                {
                  <div
                    style={{
                      paddingRight: Const.pad / 2,
                      display: 'flex',
                      alignItems: 'center',
                    }}
                  >
                    {getSvgFromSimpleIcon(
                      npm,
                      Const.fontSizes.lg,
                      theme.backGround0
                    )}
                  </div>
                }
                {`react-icon-cloud`}
              </div>
            </a>
          </div>
        ) : (
          <></>
        )}
      </Content>
    </Element>
  )
}
