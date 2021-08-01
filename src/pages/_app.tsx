import type {AppProps} from 'next/app'
import 'video.js/dist/video-js.css'
import '../style.css'

export default function App({Component, pageProps}: AppProps) {
  return <Component {...pageProps} />
}
