import type {AppProps} from 'next/app'
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

export default function App({
  Component,
  pageProps,
}: AppProps & {Component: any}) {
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
      <ThemeProvider disableTransitionOnChange={true}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
