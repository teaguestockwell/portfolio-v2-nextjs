import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from 'next/document'
import {portfolioData} from '../portfolio_data'

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
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="default"
          />
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

          <meta property="og:type" content="website" />
          <meta
            property="og:title"
            content={`${portfolioData.person.firstName} ${portfolioData.person.lastName}'s Portfolio`}
          />
          
          <meta
            property="og:description"
            content={portfolioData.person.shortAbout}
          />
          <meta
            property="og:image"
            name="image"
            content={`${portfolioData.domain}/og-image.jpg`}
          />
          <meta property="og:image:alt" content="Levels - cargo loading app" />

          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:url" content={portfolioData.domain} />
          <meta
            name="twitter:title"
            content={`${portfolioData.person.firstName} ${portfolioData.person.lastName}'s Portfolio`}
          />
          <meta
            name="twitter:description"
            content={portfolioData.person.shortAbout}
          />
          <meta
            name="twitter:image"
            content={`${portfolioData.domain}/og-image.jpg`}
          />
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
