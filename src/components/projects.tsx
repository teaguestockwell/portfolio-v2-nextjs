import React from 'react'
import {v4} from 'uuid'
import {Project} from './project'
import {Svgs} from './svgs'

const ipsum =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam id ligula maximus, molestie dui vitae, euismod nulla. Etiam tellus eros, blandit nec porta et, porttitor mollis quam. Nullam elementum sem magna, at scelerisque tortor efficitur convallis. Vivamus quis urna lacus. Nam lorem elit, condimentum vitae enim quis, mattis vehicula nibh. Etiam eu diam sed enim aliquet rhoncus. Vivamus sit amet imperdiet turpis. Nullam nec bibendum tellus. Nullam tellus eros, lobortis at elit sit amet, hendrerit dignissim nibh. Nam scelerisque augue finibus metus ornare, sed finibus orci molestie. Maecenas non lorem aliquet, vulputate nisl eget, maximus nisl. Maecenas quis erat leo.'

const getProjects = (): Project[] => {
  const svgs = Svgs(24)
  return [
    {
      name: 'Levels',
      shortDescription: `Production app for US Air Force to manage aircraft cargo and weight and balance data`,
      longDescription: ipsum,
      deploymentSrc: '',
      mediaSrc:
        'https://hello-next-auth-bucket1d4c77784-hsrquocmbr64.s3.amazonaws.com/levels-encoded-h264-croped.mp4',
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
