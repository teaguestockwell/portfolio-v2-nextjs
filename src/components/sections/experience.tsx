import {Element} from 'react-scroll'
import {SectionHeader} from '../section_header'
import {CardGrid} from '../card_wrappers/card_grid'
import {ImgCardCell} from '../card_content/img_card_cell'
import {usePortfolio} from '../../hooks/use_portfolio_context'
import {BulletCardCell} from '../card_content/bullet_card_cell'
import {UseViewPortHash} from '../../hooks/use_viewport_hash'

export const ExperienceSection = () => {
  const portfolio = usePortfolio()
  const name = portfolio.titles.experience

  return (
    <Element name={name} key={name}>
      <UseViewPortHash hash={name} />
      <SectionHeader title={name} subTitle={portfolio.subTitles.experience} />
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
