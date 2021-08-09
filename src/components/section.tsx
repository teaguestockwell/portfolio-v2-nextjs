import {Grid} from 'antd'
import {Const} from '../const'
import {useTheme} from '../hooks/use_theme'

export const Section = ({title}: {title: string}) => {
  const theme = useTheme()
  const md = Grid.useBreakpoint()?.md as any

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'left',
        backgroundColor: theme.background1,
        height: Const.pad * 4,
        marginTop: Const.pad * 2,
      }}
    >
      <div
        style={{
          paddingLeft: Const.pad,
          color: theme.fontColor1,
          textAlign: 'left',
          fontSize: Const.fontSizes[md ? 'lg' : 'md'],
        }}
      >
        {title}
      </div>
    </div>
  )
}
