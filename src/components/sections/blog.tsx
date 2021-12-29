import {Content} from '../content'
import {OGMeta} from '../og_meta'
import Head from 'next/Head'
import {Const} from '../../const'
import {useBreakpoint} from '../../hooks/use_breakpoint'
import {Avatar} from '../avatar'
import {portfolioData} from '../../data/portfolio'
import {portfolioData as p} from '../../data/portfolio'
import type {Blog as IBlog} from '.contentlayer/types'
import {Element} from 'react-scroll'

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
      <Head>
        <OGMeta
          meta={{
            title: blog.title,
            description: blog.summary,
            imgPath: blog.image,
            path: `/blog/${blog.slug}`,
          }}
        />
      </Head>

      <Element name="blog" key="blog">
        <Content
          style={{
            paddingLeft: Const.pad,
            paddingRight: Const.pad,
            paddingTop: Const.pad * 2,
          }}
        >
          <article
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              width: '100%',
              gap: '1rem',
            }}
          >
            <h1
              style={{
                fontSize: Const.css.xxlg,
                color: Const.css.fc0,
                fontWeight: 700,
                marginLeft: -4,
              }}
            >
              {blog.title}
            </h1>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                fontSize: Const.css.md,
                color: Const.css.fc1,
              }}
            >
              <div
                style={{
                  display: 'flex',
                  flexDirection: md ? 'row' : 'column',
                  alignItems: 'center',
                }}
              >
                <Avatar />
                <p
                  style={{
                    marginLeft: Const.pad / 2,
                  }}
                >{`${fullName} - ${blog.publishedAt}`}</p>
              </div>
              <p>{blog.readingTime.text}</p>
            </div>
            {children}
            <a
              aria-label="Edit Article"
              href={`${p.person.githubSrc}/${p.githubProjectName}/edit/main/src/data/content/blog/${blog.slug}.mdx`}
              rel="noreferrer"
              target="_blank"
            >
              <button
                aria-label={'Github'}
                className="hovbg"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  paddingRight: Const.pad,
                }}
              >
                <span
                  style={{
                    fontSize: Const.css.lg,
                    color: Const.css.fc1,
                    paddingInline: Const.pad,
                  }}
                >
                  Edit on Github
                </span>
              </button>
            </a>
          </article>
        </Content>
      </Element>
    </>
  )
}
