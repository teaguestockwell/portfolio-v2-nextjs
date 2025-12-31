import {Element} from '../react-scroll-exports'
import {SectionHeader} from '../section_header'
import {CardRows} from '../card_wrappers/card_rows'
import {Project} from '../card_content/project'
import {usePortfolio} from '../../hooks/use_portfolio_context'
import {Const} from '../../const'

export const ProjectsSection = () => {
  const portfolio = usePortfolio()
  const name = portfolio.titles.projects

  return (
    <Element name={name} key={name}>
      <SectionHeader title={name} subTitle={portfolio.subTitles.projects} />
      <CardRows
        cardStyle={{
          paddingRight: Const.pad,
          paddingLeft: Const.pad,
          paddingTop: Const.pad,
        }}
        items={portfolio.projects}
        getCell={(t) => (
          <Project
            techName={portfolio.titles.tech}
            name={t.name}
            subHeading={t.subHeading}
            dateRange={t.dateRange}
            bullets={t.bullets}
            deploymentSrc={t.deploymentSrc}
            repos={t.repos}
            m3u8Src={t.m3u8Src}
            svgs={t.svgs}
            id={t.id}
          />
        )}
      />
    </Element>
  )
}
