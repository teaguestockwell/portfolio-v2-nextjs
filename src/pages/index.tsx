import {Skills} from '../components/skills'
import {Projects} from '../components/projects'
import {v4} from 'uuid'
import {useInitTheme} from '../hooks/use_theme'

export default function Home() {
  useInitTheme()
  return (
    <>
      <Skills key={v4()} />
      <Projects key={v4()} />
    </>
  )
}
