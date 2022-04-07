import {allBlogs} from '.contentlayer/data'
import type {Blog as IBlog} from '.contentlayer/types'
import {BlogApp} from '../../../../blog_app'

export default function Page({blog}: {blog: IBlog}) {
  return <BlogApp blog={blog} userAgent="mobile" />
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
