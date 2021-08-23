import {Element} from 'react-scroll'
import {SectionHeader} from '../section_header'
import {PortfolioContext} from '../../pages'
import React, {useContext} from 'react'
import {TagCloud} from '../tag_cloud'

import {Content} from '../content'

export const SkillsSection = () => {
  const portfolio = useContext(PortfolioContext)

  return (
    <Element name={portfolio.titles.tech} key={portfolio.titles.tech}>
      <SectionHeader
        title={portfolio.titles.tech}
        subTitle={portfolio.subTitles.tech}
      />
      <Content>
        <TagCloud svgKeys={portfolio.skills} />
      </Content>
    </Element>
  )
}
