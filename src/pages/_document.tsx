import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from 'next/document'
import {developer} from '../data'

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)
    return {...initialProps}
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta name="application-name" content={developer.name} />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="default"
          />
          <meta name="apple-mobile-web-app-title" content={developer.name} />
          <meta name="description" content={developer.name} />
          <meta name="format-detection" content="telephone=no" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="msapplication-config" content="/browserconfig.xml" />
          <meta name="msapplication-TileColor" content="#2B5797" />
          <meta name="msapplication-tap-highlight" content="no" />
          <meta name="theme-color" content="#000000" />

          <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
          <link
            rel="apple-touch-icon"
            sizes="192x192"
            href="/android-chrome-192x192.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="512x512"
            href="/android-chrome-512x512.png"
          />

          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          <link rel="manifest" href="/manifest.json" />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
          <link rel="shortcut icon" href="/favicon.ico" />

          {/* 
            <link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Roboto:300,400,500' />
             */}

          {/*
            <meta name='twitter:card' content='summary' />
            <meta name='twitter:url' content='https://yourdomain.com' />
            <meta name='twitter:title' content='PWA App' />
            <meta name='twitter:description' content='Best PWA App in the world' />
            <meta name='twitter:image' content='https://yourdomain.com/android-chrome-192x192.png' />
            <meta name='twitter:creator' content='@DavidWShadow' />
            <meta property='og:type' content='website' />
            <meta property='og:title' content='PWA App' />
            <meta property='og:description' content='Best PWA App in the world' />
            <meta property='og:site_name' content='PWA App' />
            <meta property='og:url' content='https://yourdomain.com' />
            <meta property='og:image' content='https://yourdomain.com/apple-touch-icon.png' /> 
            */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
