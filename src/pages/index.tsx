import {useInitTheme} from '../hooks/use_theme'
import {WithNav} from '../components/nav/nav'
import {portfolioData} from '../portfolio_data'
import {AboutSection} from '../components/sections/about'
import {SkillsSection} from '../components/sections/skills'
import {ProjectsSection} from '../components/sections/projects'
import {ExperienceSection} from '../components/sections/experience'
import {SchoolsSection} from '../components/sections/school'
import {ContactSection} from '../components/sections/contact'
import Head from 'next/head'
import React from 'react'
import {Modal} from '../hooks/use_modal'
import {GetStaticProps} from 'next'
import * as Types from '../types/types'
import {PortfolioContext} from '../hooks/use_portfolio_context'

// all icons live on inside the serverless functions, only the icons defined inside the data are send to the client
import allIcons from 'simple-icons'
export const getStaticProps: GetStaticProps = async () => {
  portfolioData.icons = portfolioData.skills.map((skill) => {
    const icon = allIcons.Get(skill)

    return {
      title: icon.title ?? '',
      slug: icon.slug ?? '',
      path: icon.path ?? '',
      hex: icon.hex ?? '',
    }
  })

  return {
    props: portfolioData,
  }
}

export default function Home(portfolio: Types.Portfolio) {
  useInitTheme()

  return (
    <>
      <Head>
        <title>{`${portfolio.person.firstName} ${portfolio.person.lastName} Portfolio`}</title>
      </Head>

      <PortfolioContext.Provider value={portfolio}>
        <WithNav>
          <AboutSection />

          <SkillsSection />

          <ProjectsSection />

          <ExperienceSection />

          <SchoolsSection />

          <ContactSection />

          <Modal />
        </WithNav>
      </PortfolioContext.Provider>
    </>
  )
}
