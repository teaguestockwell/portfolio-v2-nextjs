import React from 'react'
import {v4} from 'uuid'
import {Project} from './project'
import {Svgs} from './svgs'

const getProjects = (): Project[] => {
  const svgs = Svgs(24)
  return [
    {
      name: 'Levels',
      shortDescription: `Production app for US Air Force to manage aircraft cargo and weight and balance data`,
      longDescription: `asjdkjasd ijasidjaijd  iasjdija r Force to manage aircraft cargo and weight and balance data r Force to manage aircraft cargo and weight and balance data r Force to manage aircraft cargo and weight and balance data r Force to manage aircraft cargo and weight and balance data`,
      deploymentSrc: '',
      mediaSrc: '',
      repoSrc: [
        {
          name: 'Frontend',
          src: 'https://github.com/tsAppDevelopment/levels-v3-react',
        },
        {
          name: 'Backend',
          src: 'https://github.com/tsAppDevelopment/levels-v2v3-express',
        },
      ],
      svgs: [
        svgs.typescript,
        svgs.html5,
        svgs.css3,
        svgs.reactjs,
        svgs.nginx,
        svgs.nodedotjs,
        svgs.express,
        svgs.prisma,
        svgs.postgresql,
        svgs.amazonaws,
        svgs.docker,
        svgs.gitlab,
        svgs.sonarqube,
        svgs.git,
        svgs.jira,
      ],
    },
  ]
}

export const Projects = () => {
  return (
    <>
      {getProjects().map((p) => (
        <Project {...p} key={v4()} />
      ))}
    </>
  )
}
