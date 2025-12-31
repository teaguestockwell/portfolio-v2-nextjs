import {allBlogs} from 'contentlayer/generated'
import type {Blog as IBlog} from 'contentlayer/generated'
import {BlogApp} from '../../../../blog_app'

export default function Page({blog}: {blog: IBlog}) {
  return <BlogApp blog={blog} userAgent="mobile" />
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: 'blocking',
  }
}

export async function getStaticProps({params}: {params: any}) {
  const blog = allBlogs.find((b: any) => b.slug === params.slug)
  if (!blog) {
    return {notFound: true}
  }
  return {props: {blog}}
}
