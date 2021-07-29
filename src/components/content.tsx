import {Const} from '../const'

export const Content = ({children}: {children: JSX.Element[]}) => {
  return (
    <div
      style={{
        justifyContent: 'center',
        alignContent: 'center',
        display: 'flex',
        paddingLeft: Const.pad,
        paddingRight: Const.pad,
        paddingBottom: Const.pad,
      }}
    >
      <div
        style={{
          maxWidth: 650,
          width: '100%',
        }}
      >
        {children}
      </div>
    </div>
  )
}
