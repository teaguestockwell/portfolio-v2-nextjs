import React from 'react'
import {v4} from 'uuid'
import {Const} from '../const'
import {useTheme} from '../hooks/use_theme'
import {ItemGrid} from './item_grid'

export interface Project {
  name: string
  shortDescription: string
  longDescription: string
  svgs: JSX.Element[]
  repoSrc: {name: string; src: string}[] // fullstack apps may have more than 1 repo
  deploymentSrc: string
  mediaSrc: string
}

export const ProjectCard = ({
  name,
  shortDescription,
  longDescription,
  svgs,
  repoSrc,
  deploymentSrc,
  mediaSrc,
}: Project) => {
  const theme = useTheme.getState().theme

  return (
    <div
      key={v4()}
      style={{
        WebkitBoxShadow: theme.shadow,
        MozBoxShadow: theme.shadow,
        boxShadow: theme.shadow,
        padding: theme.pad.l / 2,
        marginTop: theme.pad.l,
        backgroundColor: theme.background1,
        borderRadius: theme.rad.card,
        maxWidth: Const.maxWidth,
      }}
    >
      <div
        style={{
          content: `url(${mediaSrc})`,
          width: '100%',
          height: '100%',
        }}
      />

      <div
        style={{
          textAlign: 'center',
          color: theme.fontColor1,
          fontSize: theme.fontSizes.lg,
        }}
      >
        {name}
      </div>
      <ItemGrid
        items={svgs}
        outerStyle={{}}
        getCell={(child) => {
          return (
            <div
              key={v4()}
              style={{
                padding: 5,
              }}
            >
              {child}
            </div>
          )
        }}
      />
    </div>
  )
}
