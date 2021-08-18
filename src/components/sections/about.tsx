import {Element} from 'react-scroll'
import {SectionHeader} from '../section_header'
import {PortfolioContext} from '../../pages'
import {useContext} from 'react'

export const AboutSection = () => {
  const portfolio = useContext(PortfolioContext)

  return (
    <Element name={portfolio.titles.about} key={portfolio.titles.about}>
      {/* Above the fold */}
      <div
        style={{
          minHeight: '100vw',
        }}
      ></div>

      {/* About  */}
      <SectionHeader
        title={portfolio.titles.about}
        subTitle={portfolio.subTitles.about}
      />
    </Element>
  )
}
