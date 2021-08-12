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

export const PortfolioContext = React.createContext(portfolioData)

export default function Home() {
  useInitTheme()

  return (
    <PortfolioContext.Provider value={portfolioData}>
      <WithNav>
        <Head>
          <title>{`${portfolioData.person.firstName} ${portfolioData.person.lastName} Portfolio`}</title>
        </Head>

        <AboutSection />

        <SkillsSection />

        <ProjectsSection />

        <ExperienceSection />

        <SchoolsSection />

        <ContactSection />
      </WithNav>
    </PortfolioContext.Provider>
  )
}
