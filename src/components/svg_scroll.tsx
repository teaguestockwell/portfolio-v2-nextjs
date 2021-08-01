import React from 'react'
import {v4} from 'uuid'
import {Const} from '../const'

export const SvgScroll = ({
  svgs,
  style = {},
}: {
  svgs: JSX.Element[]
  style?: any
}) => {
  return (
    <div
      style={{
        paddingTop: Const.pad,
        paddingBottom: Const.pad,
        display: 'flex',
        overflowX: 'auto',
        overflowY: 'clip',
        ...style,
      }}
    >
      {svgs.map((s) => (
        <div key={v4()}>{s}</div>
      ))}
    </div>
  )
}
