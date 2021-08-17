import React from 'react'
import {Const} from '../../const'
import {useThemeStore} from '../../hooks/use_theme'

export const Skill = ({svgs, name}: {svgs: JSX.Element[]; name: string}) => {
  const theme = useThemeStore.getState().theme

  return (
    <>
      <div
        style={{
          textAlign: 'center',
          color: theme.fontColor0,
          fontSize: Const.fontSizes.xl,
          wordWrap: 'break-word',
          textTransform: 'capitalize',
          overflowY: 'hidden',
          fontWeight: 600,
        }}
      >
        {name}
      </div>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, 100px)',
          justifyContent: 'center',
          paddingTop: Const.pad,
        }}
      >
        {React.Children.map(svgs, (svg) => (
          <div key={svg.key}>{svg}</div>
        ))}
      </div>
    </>
  )
}
