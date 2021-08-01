import {useTheme} from '../hooks/use_theme'
import {Svgs} from './svgs'
import {projects} from '../data'
import {Content} from '../components/content'
import {Project} from './project'
import {Card} from './card'
import React from 'react'

export const Projects = () => {
  useTheme()
  // when the theme changes, grab a new set of svgs
  const svgs = Svgs(48)

  return (
    <Content>
      {projects.map((p) => (
        // dont add pad to top because flex layout is dynamic, so each col needs pad top
        <Card key={p.name} style={{paddingTop: 0}}>
          <Project
            key={p.name}
            name={p.name}
            shortDescription={p.shortDescription}
            longDescription={p.longDescription}
            deploymentSrc={p.deploymentSrc}
            repoSrc={p.repoSrc}
            src={p.src}
            svgs={p.svgs.map((s) => svgs[s])}
          />
        </Card>
      ))}
    </Content>
  )
}
