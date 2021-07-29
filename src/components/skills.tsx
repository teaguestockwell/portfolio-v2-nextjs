/* eslint-disable react/no-children-prop */
import React from 'react'
import {v4} from 'uuid'
import {useTheme} from '../hooks/use_theme'
import {Content} from './content'
import {SkillsCard} from './skills_card'
import {Svgs} from './svgs'

const getSkills = (): {title: string; icons: JSX.Element[]}[] => {
  const svgs = Svgs(48)
  return [
    {
      title: 'Languages',
      icons: [
        svgs.typescript,
        svgs.javascript,
        svgs.dart,
        svgs.java,
        svgs.html5,
        svgs.css3,
      ],
    },
    {
      title: 'Frontend',
      icons: [svgs.reactjs, svgs.flutter, svgs.android],
    },
    {
      title: 'Backend',
      icons: [svgs.nodedotjs, svgs.express, svgs.nextdotjs, svgs.prisma],
    },
    {
      title: 'Services',
      icons: [
        svgs.amazonaws,
        svgs.postgresql,
        svgs.firebase,
        svgs.nginx,
        svgs.vercel,
      ],
    },
    {
      title: 'Workflow',
      icons: [
        svgs.docker,
        svgs.git,
        svgs.jira,
        svgs.github,
        svgs.gitlab,
        svgs.sonarqube,
        svgs.figma,
      ],
    },
  ]
}

export const Skills = () => {
  useTheme()
  return (
    <Content>
      {getSkills().map((s) => (
        <SkillsCard key={v4()} title={s.title} children={s.icons} />
      ))}
    </Content>
  )
}
