export {getStaticProps} from './mobile'
import {App} from '../app'

export default function Home(portfolio: Types.PortfolioContext) {
  return <App portfolioContextValue={{...portfolio, userAgent: 'desktop'}} />
}
