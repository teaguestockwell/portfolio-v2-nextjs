import React from 'react'
import {useTheme} from '../hooks/use_theme'
import {Svgs} from './svgs'
import {skills} from '../data'
import {Content} from './content'
import {Skill} from './skill'
import {Card} from './card'

export const Skills = () => {
  useTheme()
  const svgs = Svgs(48)

  return (
    <Content>
      {skills.map((s) => (
        <Card key={s.title}>
          <Skill title={s.title} svgs={s.icons.map((s) => svgs[s])} />
        </Card>
      ))}
    </Content>
  )
}
