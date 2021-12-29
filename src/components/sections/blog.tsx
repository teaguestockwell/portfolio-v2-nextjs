import {Element} from 'react-scroll'
import {SectionHeader} from '../section_header'
import {usePortfolio} from '../../hooks/use_portfolio_context'
import {Content} from '../content'
import {Const} from '../../const'
import {UseViewPortHash} from '../../hooks/use_viewport_hash'

export const SkillsSection = () => {
  const portfolio = usePortfolio()
  const name = portfolio.titles.tech

  return (
    <Element name={name} key={name}>
      <UseViewPortHash hash={name} />
      <SectionHeader title={name} subTitle={name} />

      <Content style={{paddingTop: Const.pad * 4}}></Content>
    </Element>
  )
}
