import React from 'react'
import {v4} from 'uuid'
import {useTheme} from '../hooks/use_theme'
import {Svgs} from './svgs'
import {skills} from '../data'
import {Content} from './content'
import {Skill} from './skill'

export const Skills = () => {
  useTheme()
  const svgs = Svgs(48)

  return (
    <Content>
      {skills.map((s) => (
        <Skill
          key={v4()}
          title={s.title}
          skillsSvgs={s.icons.map((s) => svgs[s])}
        />
      ))}
    </Content>
  )
}
