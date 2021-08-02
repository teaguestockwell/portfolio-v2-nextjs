import {useTheme} from '../hooks/use_theme'
import {Svgs} from './svgs'
import {projects} from '../data'
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
      {projects.map((p) => (
        <Element key={p.name} name={p.name}>
          <Card
            key={p.name}
            style={{paddingTop: 0, paddingLeft: 0, paddingRight: 0}}
          >
            <Project
              key={p.name}
              name={p.name}
              subHeading={p.subHeading}
              dateRange={p.dateRange}
              bullets={p.bullets}
              deploymentSrc={p.deploymentSrc}
              repoSrc={p.repoSrc}
              src={p.src}
              svgs={p.svgs.map((s) => svgs[s])}
            />
          </Card>
        </Element>
      ))}
    </Content>
  )
}
