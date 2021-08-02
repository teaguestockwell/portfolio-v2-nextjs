import {Technologies} from '../components/technologies'
import {Projects} from '../components/projects'
import {useInitTheme} from '../hooks/use_theme'
import {TopNav} from '../components/top_nav'
import {Section} from '../components/section'
import {Educations} from '../components/educations'
import {WithNav} from '../components/nav/index'
import {Const} from '../const'

export default function Home() {
  useInitTheme()

  return (
    <WithNav>
      <Section title={Const.titles.tech} />
      <Technologies />
      <Section title={Const.titles.projects} />
      <Projects />
      <Section title={Const.titles.education} />
      <Educations />
    </WithNav>
  )
}
