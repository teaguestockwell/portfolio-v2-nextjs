import React from 'react'
import {Const} from '../../const'

export const Skill = ({svgs, name}: {svgs: JSX.Element[]; name: string}) => {
  return (
    <>
      <div
        style={{
          textAlign: 'center',
          color: Const.css.fc0,
          fontSize: Const.css.xlg,
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
