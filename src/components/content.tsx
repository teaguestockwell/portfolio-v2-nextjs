import {Const} from '../const'

export const Content = ({children}: {children: JSX.Element[]}) => {
  return (
    <div
      style={{
        justifyContent: 'center',
        alignContent: 'center',
        display: 'flex',
        paddingLeft: Const.pad.l,
        paddingRight: Const.pad.r,
        paddingBottom: Const.pad.b,
      }}
    >
      <div
        style={{
          maxWidth: Const.maxWidth,
          width: '100%',
        }}
      >
        {children}
      </div>
    </div>
  )
}
