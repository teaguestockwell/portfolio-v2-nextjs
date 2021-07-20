import {Skills} from '../components/skills'
import {ThemeButton} from '../hooks/use_theme'
import {Content} from '../components/content'
import {v4} from 'uuid'

export default function Home() {
  return (
    <>
      <Content>
        <Skills key={v4()} />
        <> </>
      </Content>
    </>
  )
}
