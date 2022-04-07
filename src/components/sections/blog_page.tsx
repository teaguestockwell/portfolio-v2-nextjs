import {Content} from '../content'
import {Const} from '../../const'
import {useBreakpoint} from '../../hooks/use_breakpoint'
import {Avatar} from '../avatar'
import {portfolioData} from '../../../data/portfolio'
import {portfolioData as p} from '../../../data/portfolio'
import type {Blog as IBlog} from '.contentlayer/types'
import {Element} from 'react-scroll'

export const BlogPage = ({
  mdxBlog: blog,
  children,
}: {
  mdxBlog: IBlog
  children: any
}) => {
  const md = useBreakpoint().md()
  const fullName = `${portfolioData.person.firstName} ${portfolioData.person.lastName}`

  return (
    <>
      <Element name="Blog" key="Blog">
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
            }}
          >
            <h1
              style={{
                fontSize: Const.css.xlg,
                color: Const.css.fc0,
                fontWeight: 700,
                marginLeft: -4,
                textAlign: md ? 'left' : 'center',
                paddingBottom: 10,
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
                width: '100%',
                paddingBottom: 40,
              }}
            >
              <div
                style={{
                  display: 'flex',
                  flexDirection: md ? 'row' : 'column',
                  alignItems: 'center',
                  gap: md ? undefined : Const.pad,
                  width: md ? undefined : '100%',
                }}
              >
                <Avatar />
                <span
                  style={{
                    marginLeft: Const.pad / 2,
                  }}
                >{`${fullName} - ${blog.publishedAt}${
                  !md ? ' - ' + blog.readingTime.text : ''
                }`}</span>
              </div>
              {md && <span>{blog.readingTime.text}</span>}
            </div>
            {children}
            <a
              aria-label="Edit Article"
              href={`${p.person.githubSrc}/${p.githubProjectName}/edit/main/data/blog/${blog.slug}.mdx`}
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
                    color: Const.css.fc0,
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
