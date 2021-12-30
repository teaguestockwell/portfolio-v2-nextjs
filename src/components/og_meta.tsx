import {portfolioData} from '../../data/portfolio'

export const OGMeta = ({meta}: {meta: Types.OgMeta}) => {
  return (
    <>
      <meta property="og:type" content="website" />
      <meta property="og:title" content={meta.title} />

      <meta property="og:description" content={meta.description} />
      <meta
        property="og:image"
        name="image"
        content={`${portfolioData.domain}${meta.imgPath}`}
      />
      <meta property="og:image:alt" content={meta.title} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={portfolioData.domain + meta.path} />
      <meta name="twitter:title" content={meta.title} />
      <meta name="twitter:description" content={meta.description} />
      <meta
        name="twitter:image"
        content={`${portfolioData.domain}${meta.imgPath}`}
      />
    </>
  )
}
