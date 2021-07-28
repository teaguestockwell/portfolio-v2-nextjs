import {Skills} from '../components/skills'
import {Projects} from '../components/projects'
import {Content} from '../components/content'
import {v4} from 'uuid'
import {Video} from '../components/video'

export default function Home() {
  return (
    <>
      <Content>
        <Skills key={v4()} />
        <Projects key={v4()} />
      </Content>
    </>
  )
}
