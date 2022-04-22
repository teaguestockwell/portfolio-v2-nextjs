import type {AppProps} from 'next/app'
import {DefaultSeo} from 'next-seo'
import {ThemeProvider} from 'next-themes'
import {portfolioData} from '../../data/portfolio'

import '../style.css'
import '../vars.css'
import React from 'react'

const getIsCold = () => {
  const lastWarm = localStorage.getItem('warm-log')
  return lastWarm ? Date.now() - Date.parse(lastWarm) > 1000 * 60 * 5 : true
}

const warm = () => {
  localStorage.setItem('warm-log', new Date().toISOString())
}

export default function App({Component, pageProps}: AppProps) {
  React.useEffect(() => {
    if (getIsCold()) {
      warm()
      console.log(portfolioData.devMessage)
    }
  })
  return (
    <>
      <meta
        name="viewport"
        content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover"
      />
      <DefaultSeo
        openGraph={{
          type: 'website',
          locale: 'en_IE',
          url: portfolioData.domain,
          site_name: `${portfolioData.person.firstName} ${portfolioData.person.lastName} Portfolio`,
          title: `${portfolioData.person.firstName} ${portfolioData.person.lastName} Portfolio`,
          description: portfolioData.person.shortAbout,
          images: [
            {
              url: `${portfolioData.domain}/heros/open-graph.png`,
              height: 630,
              width: 1200,
              alt: portfolioData.domain,
            },
          ],
        }}
      />
      <ThemeProvider disableTransitionOnChange={true}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
