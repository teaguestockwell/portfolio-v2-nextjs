import {NextSeo} from 'next-seo'
import React from 'react'
import {DancingLinesWithTheme} from './components/dancing_lines'
import {WithNav} from './components/nav/nav'
import {AboutSection} from './components/sections/about'
import {BlogSection} from './components/sections/blog'
import {ContactSection} from './components/sections/contact'
import {ExperienceSection} from './components/sections/experience'
import {ProjectsSection} from './components/sections/projects'
import {SchoolsSection} from './components/sections/school'
import {SkillsSection} from './components/sections/skills'
import {Modal} from './hooks/use_modal'
import {PortfolioContext} from './hooks/use_portfolio_context'
import {UseScrollToA} from './hooks/use_scroll_to_a'

const OrderedSections = ({data}: {data: Types.PortfolioContext}) => {
  const sectionElementBySectionName: Record<
    keyof Types.SectionTitles,
    JSX.Element
  > = {
    about: <AboutSection />,
    tech: <SkillsSection />,
    projects: <ProjectsSection />,
    blog: <BlogSection />,
    experience: <ExperienceSection />,
    education: <SchoolsSection />,
    contact: <ContactSection />,
  }

  return (
    <React.Fragment key={data.sectionOrder.join('')}>
      {data.sectionOrder.map(
        (sectionName) => sectionElementBySectionName[sectionName]
      )}
    </React.Fragment>
  )
}

export const App = ({
  portfolioContextValue,
}: {
  portfolioContextValue: Types.PortfolioContext
}) => {
  UseScrollToA()
  const portfolioData = portfolioContextValue

  return (
    <>
      <NextSeo
        title={`${portfolioData.person.firstName} ${portfolioData.person.lastName} • Portfolio`}
        openGraph={{
          type: 'website',
          locale: 'en_IE',
          url: portfolioData.domain,
          site_name: `${portfolioData.person.firstName} ${portfolioData.person.lastName} Portfolio`,
          title: `${portfolioData.person.firstName} ${portfolioData.person.lastName} Portfolio`,
          description: portfolioData.person.shortAbout,
          images: [
            {
              url: `${portfolioData.domain}/heros/open-graph.png`,
              height: 630,
              width: 1200,
              alt: portfolioData.domain,
            },
          ],
        }}
      />
      <PortfolioContext.Provider value={portfolioContextValue}>
        <WithNav>
          <a id="main-content" href="#main-content" style={{display: 'none'}}>
            Main Content
          </a>
          <OrderedSections data={portfolioData} />

          <Modal />
        </WithNav>

        <DancingLinesWithTheme />
      </PortfolioContext.Provider>
    </>
  )
}
