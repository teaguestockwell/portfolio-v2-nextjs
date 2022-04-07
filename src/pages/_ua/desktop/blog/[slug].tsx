import type {Blog as IBlog} from '.contentlayer/types'
import {BlogApp} from '../../../../blog_app'
export {getStaticPaths, getStaticProps} from '../../mobile/blog/[slug]'

export default function Page({blog}: {blog: IBlog}) {
  return <BlogApp blog={blog} userAgent="desktop" />
}
