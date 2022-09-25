import {useMDXComponent} from 'next-contentlayer/hooks'
import {NextSeo} from 'next-seo'
import {portfolioData} from '../data/portfolio'
import {WithNav} from './components/nav/nav'
import {BlogPage} from './components/sections/blog_page'
import {PortfolioContext} from './hooks/use_portfolio_context'
import {UseScrollToA} from './hooks/use_scroll_to_a'
import type {Blog as IBlog} from '.contentlayer/types'
import components from './components/mdx'

export const BlogApp = ({
  blog,
  userAgent,
}: {
  blog: IBlog
  userAgent: Types.PortfolioContext['userAgent']
}) => {
  UseScrollToA()
  const Component = useMDXComponent(blog.body.code) as any

  return (
    <>
      <NextSeo
        title={blog.title}
        description={blog.summary}
        openGraph={{
          title: blog.title,
          description: blog.summary,
          images: [
            {
              url: portfolioData.domain + blog.image,
              alt: blog.title,
              type: 'image/jpeg',
            },
          ],
        }}
      />
      <PortfolioContext.Provider value={{...portfolioData, userAgent}}>
        <WithNav>
          <a id="main-content" href="#main-content" style={{display: 'none'}}>
            Main Content
          </a>
          <BlogPage mdxBlog={blog}>
            <Component
              components={
                {
                  ...components,
                } as any
              }
            />
          </BlogPage>
        </WithNav>
      </PortfolioContext.Provider>
    </>
  )
}
