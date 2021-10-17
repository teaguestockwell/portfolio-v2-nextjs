import {v4} from 'uuid'
import {useTheme} from '../hooks/use_theme_2'
import {TagCanvasOptions, IconCloud, IconTag} from 'react-icon-cloud'
import {Const} from '../const'
import React from 'react'
import {usePortfolio} from '../hooks/use_portfolio_context'

export const SkillCloud = () => {
  const portfolio = usePortfolio()
  const themeName = useTheme((s) => s.themeName)
  const bgHex = themeName === 'light' ? '#f3f2ef' : '#080510'
  const fallback = themeName === 'light' ? '#f3f2ef' : '#080510'

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
      minContrastRatio={themeName === 'dark' ? 2 : 1.2}
      canvasStyle={{}}
      canvasContainerStyle={canvasContainerStyle}
      tagCanvasOptions={tagCanvasOptions}
      backgroundHexColor={bgHex}
      fallbackHexColor={fallback}
      tags={tags}
    />
  )
}
