import {useTheme} from '../hooks/use_theme'
import {Svgs} from './svgs'
import {portfolioData} from '../portfolio_data'
import {Content} from '../components/content'
import {Project} from './project'
import {Card} from './card'
import {Element} from 'react-scroll'

export const Projects = () => {
  useTheme()
  // when the theme changes, grab a new set of svgs
  const svgs = Svgs(48)

  return (
    <Content>
      {portfolioData.projects.map((p) => (
        <Element key={p.name} name={p.name}>
          <Card
            key={p.name}
            style={{paddingTop: 0, paddingLeft: 0, paddingRight: 0}}
          >
            <Project
              m3u8Src={p.m3u8Src}
              key={p.name}
              name={p.name}
              subHeading={p.subHeading}
              dateRange={p.dateRange}
              bullets={p.bullets}
              deploymentSrc={p.deploymentSrc}
              repos={p.repos}
              svgs={p.svgs.map((s) => svgs[s])}
            />
          </Card>
        </Element>
      ))}
    </Content>
  )
}
