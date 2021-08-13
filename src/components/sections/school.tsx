import {Element} from 'react-scroll'
import {SectionHeader} from '../section_header'
import {School} from '../card_content/school'
import {PortfolioContext} from '../../pages'
import {useContext} from 'react'
import {CardRows} from '../card_rows'

export const SchoolsSection = () => {
  const portfolio = useContext(PortfolioContext)

  return (
    <Element name={portfolio.titles.education} key={portfolio.titles.education}>
      <SectionHeader
        title={portfolio.titles.education}
        subTitle={portfolio.subTitles.education}
      />
      <CardRows
        items={portfolio.schools}
        hasSvgs={false}
        getCell={(t) => (
          <School
            href={t.href}
            title={t.name}
            imgSrc={t.imgSrc}
            rows={[t.dateRange, t.subHeading]}
          />
        )}
      />
    </Element>
  )
}
