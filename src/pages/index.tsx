import {Technologies} from '../components/technologies'
import {Projects} from '../components/projects'
import {useInitTheme} from '../hooks/use_theme'
import {Section} from '../components/section'
import {Educations} from '../components/educations'
import {WithNav} from '../components/nav/index'
import {Const} from '../const'
import Head from 'next/head'
import {developer} from '../data'

export default function Home() {
  useInitTheme()

  return (
    <WithNav>
      <Head>
        <title>{`Hello, i'm ${developer.name}`}</title>
      </Head>
      <Section title={Const.titles.tech} />
      <Technologies />
      <Section title={Const.titles.projects} />
      <Projects />
      <Section title={Const.titles.education} />
      <Educations />
    </WithNav>
  )
}
