import {Element} from 'react-scroll'
import {SectionHeader} from '../section_header'
import {ImgCardCell} from '../card_content/img_card_cell'
import {usePortfolio} from '../../hooks/use_portfolio_context'
import {CardRows} from '../card_wrappers/card_rows'

export const SchoolsSection = () => {
  const portfolio = usePortfolio()
  const name = portfolio.titles.education

  return (
    <Element name={name} key={name}>
      <SectionHeader title={name} subTitle={portfolio.subTitles.education} />
      <CardRows
        items={portfolio.schools}
        getCell={(t) => (
          <ImgCardCell
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
