import {NextSeo} from 'next-seo'
import {portfolioData} from '../data/portfolio'
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
import {ThemeProvider} from 'next-themes'

export const App = ({
  portfolioContextValue,
}: {
  portfolioContextValue: Types.PortfolioContext
}) => {
  UseScrollToA()

  if (portfolioContextValue.devMessage) {
    console.log(portfolioContextValue.devMessage)
  }

  return (
    <>
      <NextSeo
        title={`${portfolioData.person.firstName} ${portfolioData.person.lastName} • Portfolio`}
      />
      <PortfolioContext.Provider value={portfolioContextValue}>
        <ThemeProvider>
          <WithNav>
            <a id="main-content" href="#main-content" style={{display: 'none'}}>
              Main Content
            </a>
            <AboutSection />

            <SkillsSection />

            <ProjectsSection />

            <BlogSection />

            <ExperienceSection />

            <SchoolsSection />

            <ContactSection />

            <Modal />
          </WithNav>

          <DancingLinesWithTheme />
        </ThemeProvider>
      </PortfolioContext.Provider>
    </>
  )
}
