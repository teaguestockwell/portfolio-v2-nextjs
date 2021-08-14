import {Grid} from 'antd'
import {Const} from '../const'
export const Content = ({
  children,
  style = {},
}: {
  children: JSX.Element[] | JSX.Element
  style?: any
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
        data-test-id={'inner content wrapper'}
        style={{
          paddingRight: md ? Const.pad : 0,
          paddingLeft: md ? Const.pad : 0,
          maxWidth: Const.maxWidth,
          width: '100%',
          paddingBottom: Const.pad * 10,
          ...style,
        }}
      >
        {children}
      </div>
    </div>
  )
}
