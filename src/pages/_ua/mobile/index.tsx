import {GetStaticProps} from 'next'
import {allBlogs} from 'contentlayer/generated'
import {App} from '../../../app'
import {portfolioData} from '../../../../data/portfolio'

// all icons live on inside the serverless functions, only the icons defined inside the data are send to the client
import * as icons from 'simple-icons'
import {pick} from '../../../utils'

import * as Types from '../../../types/types'

export const getStaticProps: GetStaticProps = async () => {
  portfolioData.icons = portfolioData.skills.map((s) => {
    const simpleI = (icons as unknown as {[k: string]: Types.SimpleIcon})[s]
    return {
      title: simpleI.title ?? s,
      hex: simpleI.hex ?? null,
      path: simpleI.path ?? null,
      slug: s,
    }
  })
  portfolioData.blogs = allBlogs
    .map((post) =>
      pick(post, ['slug', 'title', 'summary', 'publishedAt', 'readingTime'])
    )
    .sort(
      (a, b) =>
        Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
    )

  return {
    props: portfolioData,
  }
}

export default function Home(portfolio: Types.PortfolioContext) {
  return <App portfolioContextValue={{...portfolio, userAgent: 'mobile'}} />
}
