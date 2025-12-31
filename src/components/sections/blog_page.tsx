import {Content} from '../content'
import {Const} from '../../const'
import {useBreakpoint} from '../../hooks/use_breakpoint'
import {portfolioData} from '../../../data/portfolio'
import {portfolioData as p} from '../../../data/portfolio'
import type {Blog as IBlog} from 'contentlayer/generated'
import {Element} from '../react-scroll-exports'
import Image from 'next/image'

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
                fontWeight: 800,
                marginLeft: -4,
                textAlign: md ? 'left' : 'center',
                paddingBottom: Const.pad * 2,
                fontFamily: 'Lobster, Arial, Helvetica, sans-serif',
              }}
            >
              {blog.title}
            </h1>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  gap: Const.pad,
                  fontSize: Const.css.md,
                  color: Const.css.fc0,
                  width: '100%',
                  paddingBottom: Const.pad * 2,
                  alignItems: 'center',
                }}
              >
                <div style={{flex: '0 0 auto'}}>
                  <Image
                    style={{objectFit: 'fill'}}
                    src="/headshot.png"
                    width={50}
                    height={50}
                    alt={
                      portfolioData.person.firstName +
                      ' ' +
                      portfolioData.person.lastName
                    }
                  />

                  <style jsx global>{`
                    img {
                      border-radius: 9999px;
                    }
                  `}</style>
                </div>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    lineHeight: '1.2rem',
                  }}
                >
                  <span>{fullName}</span>
                  <span style={{color: Const.css.fc1}}>{blog.publishedAt}</span>
                </div>
              </div>
            </div>
            <div
              style={{
                fontSize: '1rem',
                lineHeight: '1.7rem',
                color: Const.css.fc0,
              }}
            >
              {children}
            </div>
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
