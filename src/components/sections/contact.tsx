import {Element} from 'react-scroll'
import {SectionHeader} from '../section_header'
import {PortfolioContext} from '../../pages'
import {useContext} from 'react'

export const ContactSection = () => {
  const portfolio = useContext(PortfolioContext)

  return (
    <Element name={portfolio.titles.contact} key={portfolio.titles.contact}>
      <SectionHeader
        title={portfolio.titles.contact}
        subTitle={portfolio.subTitles.contact}
      />
    </Element>
  )
}
