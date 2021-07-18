import type {AppProps} from 'next/app'
import {TopNav} from '../components/top_nav'
import '../style.css'

export default function App({Component, pageProps}: AppProps) {
  return (
    <TopNav>
      <Component {...pageProps} />
    </TopNav>
  )
}
