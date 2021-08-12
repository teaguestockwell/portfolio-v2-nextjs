import {Element} from 'react-scroll'
import {SectionHeader} from '../section_header'
import {CardGrid} from '../card_grid'
import {School} from '../card_content/school'
import {PortfolioContext} from '../../pages'
import {useContext} from 'react'

export const SchoolsSection = () => {
  const portfolio = useContext(PortfolioContext)

  return (
    <Element name={portfolio.titles.education} key={portfolio.titles.education}>
      <SectionHeader
        title={portfolio.titles.education}
        subTitle={portfolio.subTitles.education}
      />
      <CardGrid
        items={portfolio.schools}
        hasSvgs={false}
        getCell={(t) => (
          <School
            name={t.name}
            dateRange={t.dateRange}
            subHeading={t.subHeading}
            src={t.src}
          />
        )}
      />
    </Element>
  )
}
