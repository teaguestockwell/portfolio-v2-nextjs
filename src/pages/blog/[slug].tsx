import {useMDXComponent} from 'next-contentlayer/hooks'
import {allBlogs} from '.contentlayer/data'
import type {Blog as IBlog} from '.contentlayer/types'
import {Blog} from '../../components/blog'
import components from '../../components/mdx'
import {PortfolioContext} from '../../hooks/use_portfolio_context'
import {useInitTheme} from '../../hooks/use_theme_2'
import {UseScrollToA} from '../../hooks/use_scroll_to_a'
import {WithNav} from '../../components/nav/nav'
import {portfolioData} from '../../data/portfolio'

export default function Page({blog}: {blog: IBlog}) {
  useInitTheme()
  UseScrollToA()
  const Component = useMDXComponent(blog.body.code)

  return (
    <>
      <PortfolioContext.Provider value={portfolioData}>
        <WithNav>
          <a id="main-content" href="#main-content" style={{display: 'none'}}>
            Main Content
          </a>
          <Blog mdxBlog={blog}>
            <Component
              components={
                {
                  ...components,
                } as any
              }
            />
          </Blog>
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
