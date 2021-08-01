import {useTheme} from '../hooks/use_theme'
import {Svgs} from './svgs'
import {projects} from '../data'
import {Video} from './video'
import {Content} from '../components/content'
import {Project} from './project'
import {v4} from 'uuid'
import {Card} from './card'

// persist between theme changes, and card state changes
// not inside of a ref because the scope does not depend on state or props
const videos = projects.reduce((acc, p) => {
  acc[p.name] = <Video src={p.src} />
  return acc
}, {} as any)

export const Projects = () => {
  useTheme()
  // when the theme changes, grab a new set of svgs
  const svgs = Svgs(48)

  return (
    <Content>
      {projects.map((p) => (
        // dont add pad to top because flex layout is dynamic, so each col needs pad top
        <Card key={v4()} style={{paddingTop: 0}}>
          <Project
            name={p.name}
            shortDescription={p.shortDescription}
            longDescription={p.longDescription}
            deploymentSrc={p.deploymentSrc}
            repoSrc={p.repoSrc}
            video={videos[p.name]}
            svgs={p.svgs.map((s) => svgs[s])}
          />
        </Card>
      ))}
    </Content>
  )
}
