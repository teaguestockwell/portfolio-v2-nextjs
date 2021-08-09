import {Grid} from 'antd'
import {Const} from '../const'
export const Content = ({
  children,
}: {
  children: JSX.Element[] | JSX.Element
}) => {
  const md = Grid.useBreakpoint()?.md as any
  return (
    <div
      style={{
        justifyContent: 'center',
        alignContent: 'center',
        display: 'flex',
      }}
    >
      <div
        style={{
          paddingRight: md ? Const.pad : 0,
          paddingLeft: md ? Const.pad : 0,
          maxWidth: Const.maxWidth,
          width: '100%',
        }}
      >
        {children}
      </div>
    </div>
  )
}
