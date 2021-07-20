import {v4} from 'uuid'
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
      icons: [svgs.amazonaws, svgs.postgresql, svgs.firebase, svgs.nginx],
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
        svgs.vercel,
      ],
    },
  ]
}

export const Skills = () => {
  return (
    <>
      {/* eslint-disable-next-line react/no-children-prop */}
      {getSkills().map((s) => (
        <SkillsCard key={v4()} title={s.title} children={s.icons} />
      ))}
    </>
  )
}
