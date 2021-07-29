import React from 'react'
import {v4} from 'uuid'
import {useTheme} from '../hooks/use_theme'
import {SkillsCard} from './skills_card'
import {Svgs} from './svgs'
import {skills} from '../data'

export const Skills = () => {
  useTheme()
  const svgs = Svgs(48)

  return (
    <>
      {skills.map((s) => (
        <SkillsCard
          key={v4()}
          title={s.title}
          skillsSvgs={s.icons.map((s) => svgs[s])}
        />
      ))}
    </>
  )
}
