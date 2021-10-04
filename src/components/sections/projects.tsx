import {Element} from 'react-scroll'
import {SectionHeader} from '../section_header'
import {CardRows} from '../card_wrappers/card_rows'
import {Project} from '../card_content/project'
import {Glow} from '../glow'
import {usePortfolio} from '../../hooks/use_portfolio_context'
import {Const} from '../../const'

export const ProjectsSection = () => {
  const portfolio = usePortfolio()

  return (
    <Element name={portfolio.titles.projects} key={portfolio.titles.projects}>
      <SectionHeader
        title={portfolio.titles.projects}
        subTitle={portfolio.subTitles.projects}
      />

      <Glow tlwh={[-5, -5, 115, 110]}>
        <CardRows
          cardStyle={{
            paddingRight: Const.pad,
            paddingLeft: Const.pad,
            paddingTop: Const.pad,
          }}
          items={portfolio.projects}
          getCell={(t) => (
            <>
              <a id={t.id} href={'#' + t.id} />
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
              />
            </>
          )}
        />
      </Glow>
    </Element>
  )
}
