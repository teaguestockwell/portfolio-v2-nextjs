import {v4} from 'uuid'
import {TagCanvasOptions, IconCloud, IconTag} from 'react-icon-cloud'
import {Const} from '../const'
import React from 'react'
import {usePortfolio} from '../hooks/use_portfolio_context'
import {useTheme} from 'next-themes'

export const SkillCloud = () => {
  const portfolio = usePortfolio()
  const {theme} = useTheme()

  const bgHex = theme === 'light' ? '#f3f2ef' : '#080510'
  const fallback = theme === 'light' ? '#6e6e73' : '#a1a1a6'
  const minContrastRatio = theme === 'dark' ? 2 : 1.2

  const tags: IconTag[] = portfolio.icons.map((icon) => ({
    id: v4(),
    simpleIcon: icon,
  }))

  const tagCanvasOptions: TagCanvasOptions = {
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

  const canvasContainerStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: Const.pad * 2,
    marginRight: Const.pad * 2,
  }

  return (
    <IconCloud
      iconSize={42}
      minContrastRatio={minContrastRatio}
      canvasStyle={{}}
      canvasContainerStyle={canvasContainerStyle}
      tagCanvasOptions={tagCanvasOptions}
      backgroundHexColor={bgHex}
      fallbackHexColor={fallback}
      tags={tags}
    />
  )
}
