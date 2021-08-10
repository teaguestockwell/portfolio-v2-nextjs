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
import {Element} from 'react-scroll'

export default function Home() {
  useInitTheme()

  return (
    <WithNav>
      <Head>
        <title>{`${portfolioData.person.firstName} ${portfolioData.person.lastName} Portfolio`}</title>
      </Head>

      <Element name={Const.titles.about} key={Const.titles.about}>
        <Section title={Const.titles.about} />
      </Element>

      <Element name={Const.titles.tech} key={Const.titles.tech}>
        <Section title={Const.titles.tech} />
        <CardRows
          items={portfolioData.skills}
          hasSvgs={true}
          getCell={(t, getSvg) => (
            <Skill name={t.name} svgs={t.svgKeys.map((s) => getSvg(s))} />
          )}
        />
      </Element>

      <Element name={Const.titles.projects} key={Const.titles.projects}>
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
      </Element>

      <Element name={Const.titles.experience} key={Const.titles.experience}>
        <Section title={Const.titles.experience} />
      </Element>

      <Element name={Const.titles.education} key={Const.titles.education}>
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
      </Element>

      <Element name={Const.titles.contact} key={Const.titles.contact}>
        <Section title={Const.titles.contact} />
      </Element>
    </WithNav>
  )
}
