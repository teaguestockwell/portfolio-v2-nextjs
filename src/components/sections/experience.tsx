import {Element} from 'react-scroll'
import {SectionHeader} from '../section_header'
import {PortfolioContext} from '../../pages'
import {useContext} from 'react'
import {VerticalTimeline} from 'react-vertical-timeline-component'
import {Job} from '../card_content/job'
import {useTheme} from '../../hooks/use_theme'

export const ExperienceSection = () => {
  const portfolio = useContext(PortfolioContext)
  useTheme()

  return (
    <Element
      name={portfolio.titles.experience}
      key={portfolio.titles.experience}
    >
      <SectionHeader
        title={portfolio.titles.experience}
        subTitle={portfolio.subTitles.experience}
      />
      <VerticalTimeline animate={false}>
        {portfolio.jobs.map((job) => (
          <Job key={job.name} job={job} />
        ))}
      </VerticalTimeline>
    </Element>
  )
}
