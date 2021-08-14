import {Element} from 'react-scroll'
import {SectionHeader} from '../section_header'
import {CardRows} from '../card_rows'
import {Project} from '../card_content/project'
import {Glow} from '../glow'
import {PortfolioContext} from '../../pages'
import {useContext} from 'react'

export const ProjectsSection = () => {
  const portfolio = useContext(PortfolioContext)

  return (
    <Element name={portfolio.titles.projects} key={portfolio.titles.projects}>
      <SectionHeader
        title={portfolio.titles.projects}
        subTitle={portfolio.subTitles.projects}
      />

      <Glow tlwh={[-5, -5, 115, 110]}>
        <CardRows
          items={portfolio.projects}
          hasSvgs={true}
          getCell={(t, getSvg) => (
            <Project
              key={t.name}
              techName={portfolio.titles.tech}
              name={t.name}
              subHeading={t.subHeading}
              dateRange={t.dateRange}
              bullets={t.bullets}
              deploymentSrc={t.deploymentSrc}
              repos={t.repos}
              m3u8Src={t.m3u8Src}
              svgs={t.svgs.map((s) => getSvg(s))}
            />
          )}
        />
      </Glow>
    </Element>
  )
}
