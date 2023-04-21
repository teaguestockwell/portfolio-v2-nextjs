import {Element} from 'react-scroll'
import {SectionHeader} from '../section_header'
import {usePortfolio} from '../../hooks/use_portfolio_context'
import {SkillCloud} from '../skill_cloud'
import {Content} from '../content'
import {Const} from '../../const'
import {siNpm} from 'simple-icons/icons'
import {getSvgFromSimpleIcon} from '../svgs'

export const SkillsSection = () => {
  const portfolio = usePortfolio()
  const name = portfolio.titles.tech

  return (
    <Element name={name} key={name}>
      <SectionHeader title={name} subTitle={portfolio.subTitles.tech} />

      <Content style={{paddingTop: Const.pad * 4}}>
        <SkillCloud />

        {portfolio.person.firstName === 'Teague' && (
          <div
            style={{
              paddingLeft: Const.pad,
              paddingRight: Const.pad,
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <a
              href="https://www.npmjs.com/package/react-icon-cloud"
              target="_blank"
              rel="noreferrer"
              tabIndex={-1}
            >
              <button
                aria-label={'react-icon-cloud on npm'}
                className="hover-button"
                style={{
                  marginTop: Const.pad * 4,
                  fontSize: Const.css.lg,
                  wordWrap: 'break-word',
                  color: Const.css.bgc0,
                  padding: Const.pad * 0.75,
                  width: 'fit-content',
                  textAlign: 'left',
                  borderRadius: 40,
                  backgroundColor: Const.css.fc0,
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
                    {getSvgFromSimpleIcon(siNpm, 24, Const.css.bgc0)}
                  </div>
                }
                {`react-icon-cloud`}
              </button>
            </a>
          </div>
        )}
      </Content>
    </Element>
  )
}
