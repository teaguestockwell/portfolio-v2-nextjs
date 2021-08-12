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
        maxHeight: Const.topNav * 1.3,
        marginTop: Const.pad * 4,
        minHeight: Const.topNav * 0.7,
        height: '12vw',
      }}
    >
      <div
        style={{
          paddingLeft: Const.pad,
          color: theme.fontColor1,
          textAlign: 'left',
          fontSize: Const.fontSizes.xl,
          fontWeight: 100,
          textTransform: 'uppercase',
        }}
      >
        {title}
      </div>
    </div>
  )
}
