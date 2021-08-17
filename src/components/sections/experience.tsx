import {Element} from 'react-scroll'
import {SectionHeader} from '../section_header'
import {CardGrid} from '../card_grid'
import {ImgCardCell} from '../card_content/img_card_cell'
import {PortfolioContext} from '../../pages'
import {useContext} from 'react'
import {BulletCardCell} from '../bullet_card_cell'

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
      <CardGrid
        items={portfolio.jobs}
        getCellFront={(t) => (
          <ImgCardCell
            title={t.name}
            href={t.src ?? ''}
            imgSrc={t.imgSrc}
            rows={[t.dateRange, t.company + ', ' + t.location, t.description]}
          />
        )}
        getCellBack={(t) => (
          <BulletCardCell title={'Accomplishments'} bullets={t.bullets} />
        )}
      />
    </Element>
  )
}
