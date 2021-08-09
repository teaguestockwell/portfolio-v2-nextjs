import {useInitTheme} from '../hooks/use_theme'
import {Section} from '../components/section'
import {WithNav} from '../components/nav/index'
import {Const} from '../const'
import Head from 'next/head'
import {portfolioData} from '../portfolio_data'
import {CardRows} from '../components/card_rows'
import {Skill} from '../components/card_content/skill'
import {Project} from '../components/card_content/project'
import {School} from '../components/card_content/school'
import {CardGrid} from '../components/card_grid'

export default function Home() {
  useInitTheme()

  return (
    <WithNav>
      <Head>
        <title>{`${portfolioData.firstName} ${portfolioData.lastName} Portfolio`}</title>
      </Head>
      <Section title={Const.titles.tech} />

      <CardRows
        items={portfolioData.skills}
        hasSvgs={true}
        getCell={(t, getSvg) => (
          <Skill name={t.name} svgs={t.svgKeys.map((s) => getSvg(s))} />
        )}
      />

      <Section title={Const.titles.projects} />

      <CardGrid
        items={portfolioData.projects}
        hasSvgs={true}
        getCell={(t, getSvg) => (
          <Project
            key={t.name}
            name={t.name}
            subHeading={t.subHeading}
            dateRange={t.dateRange}
            bullets={t.bullets}
            deploymentSrc={t.deploymentSrc}
            repos={t.repos}
            m3u8Src={t.m3u8Src}
            svgs={t.svgs.map((s) => getSvg(s))}
          />
        )}
      />

      <Section title={Const.titles.education} />

      <CardRows
        items={portfolioData.schools}
        hasSvgs={false}
        getCell={(t) => (
          <School
            name={t.name}
            dateRange={t.dateRange}
            subHeading={t.subHeading}
            src={t.src}
          />
        )}
      />
    </WithNav>
  )
}
