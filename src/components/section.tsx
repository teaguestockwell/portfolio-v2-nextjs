import {Grid} from 'antd'
import {Const} from '../const'
import {useTheme} from '../hooks/use_theme'

export const Section = ({title}: {title: string}) => {
  const theme = useTheme()

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'left',
        backgroundColor: theme.background1,
        maxHeight: Const.topNav,
        marginTop: Const.pad,
        minHeight: Const.topNav / 2,
        height: '12vw',
      }}
    >
      <div
        style={{
          paddingLeft: Const.pad,
          color: theme.fontColor1,
          textAlign: 'left',
          fontSize: Const.fontSizes['lg'],
        }}
      >
        {title}
      </div>
    </div>
  )
}
