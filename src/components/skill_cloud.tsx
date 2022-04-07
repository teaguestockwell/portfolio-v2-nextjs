import React from 'react'
import {useTheme} from '../hooks/use_theme'
import {Const} from '../const'
import {usePortfolio} from '../hooks/use_portfolio_context'

let Cloud: any
let renderSimpleIcon: any

const getPortfolioIcons = ({
  theme,
  icons,
}: {
  theme: string
  icons: Types.SimpleIcon[]
}) => {
  const bgHex = theme === 'light' ? '#f3f2ef' : '#080510'
  const fallbackHex = theme === 'light' ? '#6e6e73' : '#a1a1a6'
  const minContrastRatio = theme === 'dark' ? 2 : 1.2

  return icons.map((icon) => {
    return renderSimpleIcon({
      icon,
      bgHex,
      fallbackHex,
      minContrastRatio,
      aProps: {
        href: '#',
        onClick: (e: any) => {
          e.preventDefault()
        },
      },
    })
  })
}

export const SkillCloud = React.memo(() => {
  const {icons} = usePortfolio()
  const {theme} = useTheme()
  const [loaded, setLoaded] = React.useState(false)

  React.useEffect(() => {
    window.addEventListener('load', () => {
      import('react-icon-cloud').then((module) => {
        Cloud = module.Cloud
        renderSimpleIcon = module.renderSimpleIcon
        setLoaded(true)
      })
    })
  }, [])

  if (!loaded) {
    return <p>loading..</p>
  }

  return (
    <Cloud
      options={{
        reverse: true,
        depth: 1,
        wheelZoom: false,
        imageScale: 2,
        activeCursor: 'default',
        tooltip: 'native',
        initial: [0.1, -0.1],
        clickToFront: 500,
        tooltipDelay: 0,
        outlineColour: '#0000',
      }}
      containerProps={{
        style: {
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginLeft: Const.pad * 2,
          marginRight: Const.pad * 2,
        },
      }}
      id={'stable-id-for-CSR-SSR'}
    >
      {getPortfolioIcons({theme, icons})}
    </Cloud>
  )
})

SkillCloud.displayName = 'SkillCloud'
