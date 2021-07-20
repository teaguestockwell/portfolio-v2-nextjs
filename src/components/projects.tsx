import React from 'react'
import {v4} from 'uuid'
import {Project, ProjectCard} from './project_card'
import {Svgs} from './svgs'

const getProjects = (): Project[] => {
  const svgs = Svgs(24)
  return [
    {
      name: 'Levels',
      shortDescription: `Production app for US Air Force to manage aircraft cargo and weight and balance data`,
      longDescription: `asjdkjasd ijasidjaijd  iasjdija`,
      deploymentSrc: '',
      mediaSrc: '',
      repoSrc: [
        {
          name: 'Frontend',
          src: 'https://github.com/tsAppDevelopment/levels-v3-react',
        },
      ],
      svgs: [svgs.reactjs],
    },
  ]
}

const Projects = () => {
  return (
    <>
      {getProjects().map((p) => (
        <ProjectCard {...p} key={v4()} />
      ))}
    </>
  )
}
