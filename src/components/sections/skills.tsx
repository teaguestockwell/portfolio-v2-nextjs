import {Element} from 'react-scroll'
import {SectionHeader} from '../section_header'
import {CardRows} from '..//card_wrappers/card_rows'
import {Skill} from '../card_content/skill'
import {PortfolioContext} from '../../pages'
import React, {useContext} from 'react'
import {TagCloud} from '../tag_cloud'
import {useTheme} from '../../hooks/use_theme'
import {getSimpleSvgs} from '../svgs'

export const SkillsSection = () => {
  const portfolio = useContext(PortfolioContext)
  const theme = useTheme()
  const svgs = getSimpleSvgs(42, theme)

  return (
    <Element name={portfolio.titles.tech} key={portfolio.titles.tech}>
      <SectionHeader
        title={portfolio.titles.tech}
        subTitle={portfolio.subTitles.tech}
      />

      <TagCloud svgs={portfolio.skills[0].svgKeys.map((s) => svgs[s])} />
    </Element>
  )
}
