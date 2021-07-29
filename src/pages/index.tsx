import {Skills} from '../components/skills'
import {Projects} from '../components/projects'
import {useInitTheme} from '../hooks/use_theme'
import React from 'react'
import {Content} from '../components/content'

export default function Home() {
  useInitTheme()
  return (
    <Content>
      <Skills />
      <Projects />
    </Content>
  )
}
