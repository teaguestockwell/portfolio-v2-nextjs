import {useTheme} from '../hooks/use_theme_2'
import {Cloud, ICloud, renderSimpleIcon} from 'react-icon-cloud'
import {Const} from '../const'
import React from 'react'
import {usePortfolio} from '../hooks/use_portfolio_context'

export const SkillCloud = () => {
  const portfolio = usePortfolio()
  const themeName = useTheme((s) => s.themeName)
  const bgHex = themeName === 'light' ? '#f3f2ef' : '#080510'
  const fallbackHex = themeName === 'light' ? '#6e6e73' : '#a1a1a6'
  const minContrastRatio = themeName === 'dark' ? 2 : 1.2

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

  return (
    <Cloud
      options={options}
      containerProps={containerProps}
      id={'stable-id-for-CSR-SSR'}
    >
      {portfolio.icons.map((icon) =>
        renderSimpleIcon({
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
      )}
    </Cloud>
  )
}
