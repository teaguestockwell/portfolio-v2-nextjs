import {Element} from 'react-scroll'
import {SectionHeader} from '../section_header'
import {PortfolioContext} from '../../pages'
import {useContext} from 'react'

export const ExperienceSection = () => {
  const portfolio = useContext(PortfolioContext)

  return (
    <Element
      name={portfolio.titles.experience}
      key={portfolio.titles.experience}
    >
      <SectionHeader
        title={portfolio.titles.experience}
        subTitle={portfolio.subTitles.experience}
      />
    </Element>
  )
}
