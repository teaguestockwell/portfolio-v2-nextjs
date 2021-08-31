import {Element} from 'react-scroll'
import {SectionHeader} from '../section_header'
import {usePortfolio} from '../../hooks/use_portfolio_context'
import {SkillCloud} from '../skill_cloud'
import {Content} from '../content'
import {Const} from '../../const'

export const SkillsSection = () => {
  const portfolio = usePortfolio()

  return (
    <Element name={portfolio.titles.tech} key={portfolio.titles.tech}>
      <SectionHeader
        title={portfolio.titles.tech}
        subTitle={portfolio.subTitles.tech}
      />
      <Content style={{paddingTop: Const.pad * 4}}>
        <SkillCloud />
      </Content>
    </Element>
  )
}
