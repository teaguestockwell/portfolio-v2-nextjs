import {Element} from '../react-scroll-exports'
import {SectionHeader} from '../section_header'
import {usePortfolio} from '../../hooks/use_portfolio_context'
import {Content} from '../content'
import {Const} from '../../const'
import {BlogPost} from '../blog_post'

export const BlogSection = () => {
  const portfolio = usePortfolio()
  const name = portfolio.titles.blog

  return (
    <Element name={name} key={name}>
      <SectionHeader title={name} subTitle={portfolio.subTitles.blog} />
      <Content style={{paddingTop: Const.pad * 4}}>
        <div
          style={{
            marginTop: Const.pad * 4,
            maxWidth: '100%',
            display: 'grid',
            gridTemplateColumns: Const.css.cardGrid,
            gap: Const.pad * 2,
          }}
        >
          {portfolio.blogs.map((b) => (
            <BlogPost key={b.slug} b={b} />
          ))}
        </div>
      </Content>
    </Element>
  )
}
