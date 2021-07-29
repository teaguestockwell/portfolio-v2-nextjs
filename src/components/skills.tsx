/* eslint-disable react/no-children-prop */
import React from 'react'
import {v4} from 'uuid'
import {useTheme} from '../hooks/use_theme'
import {Content} from './content'
import {SkillsCard} from './skills_card'
import {Svgs} from './svgs'
import {skills} from '../const'

export const Skills = () => {
  useTheme()
  const svgs = Svgs(48)

  return (
    <Content>
      {skills.map((s) => (
        <SkillsCard
          key={v4()}
          title={s.title}
          skillsSvgs={s.icons.map((s) => svgs[s])}
        />
      ))}
    </Content>
  )
}
