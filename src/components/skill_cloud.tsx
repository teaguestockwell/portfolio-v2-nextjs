import React from 'react'
import {Cloud, ICloud, renderSimpleIcon} from 'react-icon-cloud'
import {useTheme} from '../hooks/use_theme'
import {Const} from '../const'
import {usePortfolio} from '../hooks/use_portfolio_context'

const options: ICloud['options'] = {
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
}

const containerProps: ICloud['containerProps'] = {
  style: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: Const.pad * 2,
    marginRight: Const.pad * 2,
  },
}

const usePortfolioIcons = ({
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
  const renderedIcons = usePortfolioIcons({theme, icons})

  return (
    <Cloud
      options={options}
      containerProps={containerProps}
      id={'stable-id-for-CSR-SSR'}
    >
      {renderedIcons}
    </Cloud>
  )
})

SkillCloud.displayName = 'SkillCloud'
