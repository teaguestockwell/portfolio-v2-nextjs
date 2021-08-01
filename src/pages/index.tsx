import {Skills} from '../components/skills'
import {Projects} from '../components/projects'
import {useInitTheme} from '../hooks/use_theme'
import {TopNav} from '../components/top_nav'
import {Section} from '../components/section'
import {Educations} from '../components/educations'
import {WithNav} from '../components/nav/index'

export default function Home() {
  useInitTheme()

  return (
    <WithNav>
      <Section title={'Technologies'} />
      <Skills />
      <Section title={'Projects'} />
      <Projects />
      <Section title={'Education'} />
      <Educations />
    </WithNav>
  )
}
