import React from 'react'
import {useTheme} from '../hooks/use_theme'
import {Svgs} from './svgs'
import {skills} from '../data'
import {Content} from './content'
import {Tech} from './tech'
import {Card} from './card'
import {Element} from 'react-scroll'

export const Technologies = () => {
  useTheme()
  const svgs = Svgs(48)

  return (
    <Content>
      {skills.map((s) => (
        <Element key={s.title} name={s.title}>
          <Card key={s.title}>
            <Tech title={s.title} svgs={s.icons.map((s) => svgs[s])} />
          </Card>
        </Element>
      ))}
    </Content>
  )
}
