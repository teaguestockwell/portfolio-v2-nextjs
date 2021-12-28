import {Content} from '../content'
import {OGMeta} from '../og_meta'
import Head from 'next/Head'
import {Const} from '../../const'
import {useBreakpoint} from '../../hooks/use_breakpoint'
import {Avatar} from '../avatar'
import {portfolioData} from '../../data/portfolio'
import {portfolioData as p} from '../../data/portfolio'
import type {Blog as IBlog} from '.contentlayer/types'

export const Blog = ({
  mdxBlog: blog,
  children,
}: {
  mdxBlog: IBlog
  children: any
}) => {
  const md = useBreakpoint.md()
  const fullName = `${portfolioData.person.firstName} ${portfolioData.person.lastName}`

  return (
    <>
      <Head>{/* <OGMeta meta={{}} /> */}</Head>

      <article
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          width: '100%',
        }}
      >
        <h1
          style={{
            fontSize: Const.css.xlg,
            color: Const.css.fc0,
          }}
        >
          {blog.title}
        </h1>

        <div
          style={{
            display: 'flex',
            flexDirection: md ? 'column' : 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Avatar />
          <p
            style={{
              fontSize: Const.css.sm,
              color: Const.css.fc1,
            }}
          >{`${fullName} - ${blog.publishedAt}`}</p>
        </div>

        <Content>{children}</Content>

        <a
          href={`${p.person.githubSrc}/${p.githubProjectName}/edit/main/src/data/blog/${blog.slug}.mdx`}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontSize: Const.css.sm,
            color: Const.css.fc1,
          }}
        >
          {'Edit on GitHub'}
        </a>
      </article>
    </>
  )
}
