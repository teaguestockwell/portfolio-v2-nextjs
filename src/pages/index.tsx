import {useInitTheme} from '../hooks/use_theme'
import {Section} from '../components/section'
import {WithNav} from '../components/nav/index'
import {Const} from '../const'
import {Cards} from '../components/cards'
import {data} from '../data'
import {Tech} from '../components/card_content/tech'
import {Project} from '../components/card_content/project'
import {School} from '../components/card_content/school'

export default function Home() {
  useInitTheme()

  return (
    <WithNav>
      <Section title={Const.titles.tech} />

      <Cards
        items={data.technologies}
        hasSvgs={true}
        getCell={(t, getSvg) => (
          <Tech title={t.title} svgs={t.svgs.map((s) => getSvg(s))} />
        )}
      />

      <Section title={Const.titles.projects} />

      <Cards
        items={data.projects}
        hasSvgs={true}
        getCell={(t, getSvg) => (
          <Project
            key={t.title}
            title={t.title}
            subHeading={t.subHeading}
            dateRange={t.dateRange}
            bullets={t.bullets}
            deploymentSrc={t.deploymentSrc}
            repos={t.repos}
            src={t.src}
            svgs={t.svgs.map((s) => getSvg(s))}
          />
        )}
      />

      <Section title={Const.titles.education} />

      <Cards
        items={data.education}
        hasSvgs={false}
        getCell={(t) => (
          <School
            title={t.title}
            date={t.date}
            subHeading={t.subHeading}
            src={t.src}
          />
        )}
      />
    </WithNav>
  )
}
