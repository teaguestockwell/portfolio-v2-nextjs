import {WithNav} from '../components/nav/nav'
import {portfolioData} from '../../data/portfolio'
import {AboutSection} from '../components/sections/about'
import {SkillsSection} from '../components/sections/skills'
import {ProjectsSection} from '../components/sections/projects'
import {ExperienceSection} from '../components/sections/experience'
import {SchoolsSection} from '../components/sections/school'
import {ContactSection} from '../components/sections/contact'
import React from 'react'
import {Modal} from '../hooks/use_modal'
import {GetStaticProps} from 'next'
import * as Types from '../types/types'
import {PortfolioContext} from '../hooks/use_portfolio_context'
import {allBlogs} from '.contentlayer/data'
import {NextSeo} from 'next-seo'

// all icons live on inside the serverless functions, only the icons defined inside the data are send to the client
import allIcons from 'simple-icons'
import {DancingLinesWithTheme} from '../components/dancing_lines'
import {UseScrollToA} from '../hooks/use_scroll_to_a'
import {pick} from '../utils'
import {BlogSection} from '../components/sections/blog'

export const getStaticProps: GetStaticProps = async () => {
  portfolioData.icons = portfolioData.skills.map((s) => {
    const simpleI = allIcons.Get(s)
    return {
      title: simpleI.title ?? null,
      hex: simpleI.hex ?? null,
      path: simpleI.path ?? null,
      slug: s,
    }
  })
  portfolioData.blogs = allBlogs
    .map((post) =>
      pick(post, ['slug', 'title', 'summary', 'publishedAt', 'readingTime'])
    )
    .sort(
      (a, b) =>
        Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
    )

  return {
    props: portfolioData,
  }
}

export default function Home(portfolio: Types.Portfolio) {
  UseScrollToA()

  if (portfolio.devMessage) {
    console.log(portfolio.devMessage)
  }

  return (
    <>
      <NextSeo
        title={`${portfolioData.person.firstName} ${portfolioData.person.lastName} • Portfolio`}
      />
      <PortfolioContext.Provider value={portfolio}>
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
      </PortfolioContext.Provider>

      <DancingLinesWithTheme />
    </>
  )
}
