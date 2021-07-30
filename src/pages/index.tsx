import {Skills} from '../components/skills'
import {Projects} from '../components/projects'
import {useInitTheme} from '../hooks/use_theme'
import React from 'react'
import {Content} from '../components/content'
import {TopNav} from '../components/top_nav'

export default function Home() {
  useInitTheme()
  return (
    <TopNav>
      <Content>
        <Skills />
        <Projects />
      </Content>
    </TopNav>
  )
}
