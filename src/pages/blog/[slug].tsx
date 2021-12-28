import {useMDXComponent} from 'next-contentlayer/hooks'
import {allBlogs} from '.contentlayer/data'
import type {Blog as IBlog} from '.contentlayer/types'
import {Blog} from '../../components/mdx/blog'
import components from '../../components/mdx/components'

export default function Page({blog}: {blog: IBlog}) {
  const Component = useMDXComponent(blog.body.code)

  return (
    <Blog mdxBlog={blog}>
      <Component
        components={
          {
            ...components,
          } as any
        }
      />
    </Blog>
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
