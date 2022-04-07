import {useMDXComponent} from 'next-contentlayer/hooks'
import {allBlogs} from '.contentlayer/data'
import type {Blog as IBlog} from '.contentlayer/types'
import {BlogPage} from '../../components/sections/blog_page'
import components from '../../components/mdx'
import {PortfolioContext} from '../../hooks/use_portfolio_context'
import {UseScrollToA} from '../../hooks/use_scroll_to_a'
import {WithNav} from '../../components/nav/nav'
import {portfolioData} from '../../../data/portfolio'
import {NextSeo} from 'next-seo'

export default function Page({blog}: {blog: IBlog}) {
  UseScrollToA()
  const Component = useMDXComponent(blog.body.code)

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
              url: blog.image,
              alt: blog.title,
              type: 'image/jpeg',
            },
          ],
        }}
      />
      <PortfolioContext.Provider
        value={{...portfolioData, userAgent: 'mobile'}}
      >
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

export async function getStaticPaths() {
  return {
    paths: allBlogs.map((p) => ({params: {slug: p.slug}})),
    fallback: false,
  }
}

export async function getStaticProps({params}: {params: any}) {
  const blog = allBlogs.find((b: any) => b.slug === params.slug)
  return {props: {blog}}
}
