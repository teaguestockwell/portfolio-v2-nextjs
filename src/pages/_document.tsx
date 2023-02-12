import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from 'next/document'
import {portfolioData} from '../../data/portfolio'

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)
    return {...initialProps}
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta
            name="application-name"
            content={`${portfolioData.person.firstName} ${portfolioData.person.lastName}'s Portfolio`}
          />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-status-bar-style" content="black" />

          <meta name="theme-color" content="#000000" />

          <meta
            name="apple-mobile-web-app-title"
            content={`${portfolioData.person.firstName} ${portfolioData.person.lastName}'s Portfolio`}
          />

          <meta
            name="description"
            content={`${portfolioData.person.firstName} ${portfolioData.person.lastName}'s Portfolio`}
          />
          <meta name="format-detection" content="telephone=no" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="msapplication-config" content="/browserconfig.xml" />
          <meta name="msapplication-TileColor" content="#2B5797" />
          <meta name="msapplication-tap-highlight" content="no" />

          <link
            rel="apple-touch-icon"
            href="/favorite-icons/apple-touch-icon.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="192x192"
            href="/favorite-icons/android-chrome-192x192.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="512x512"
            href="/favorite-icons/android-chrome-512x512.png"
          />

          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favorite-icons/32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favorite-icons/16x16.png"
          />
          <link rel="manifest" href="/manifest.json" />
          <link
            rel="mask-icon"
            href="/favorite-icons/safari-pinned-tab.svg"
            color="#5bbad5"
          />
          <link rel="shortcut icon" href="/favorite-icons/icon.ico" />
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
