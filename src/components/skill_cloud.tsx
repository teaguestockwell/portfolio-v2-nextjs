import React from 'react'
import {Cloud, ICloud, renderSimpleIcon} from 'react-icon-cloud'
import {useTheme} from '../hooks/use_theme'
import {Const} from '../const'
import {usePortfolio} from '../hooks/use_portfolio_context'

const cloudProps: Omit<ICloud, 'children'> = {
  id: 'stable-id-for-csr-ssr',
  containerProps: {
    style: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginLeft: Const.pad * 2,
      marginRight: Const.pad * 2,
    },
  },
  canvasProps: {
    style: {
      maxWidth: '55%',
    },
  },
  options: {
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
  },
}

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
        onClick: (e) => {
          e.preventDefault()
        },
      },
    })
  })
}

export const SkillCloud = React.memo(() => {
  const {icons} = usePortfolio()
  const {theme} = useTheme()

  return <Cloud {...cloudProps}>{getPortfolioIcons({theme, icons})}</Cloud>
})

SkillCloud.displayName = 'SkillCloud'
