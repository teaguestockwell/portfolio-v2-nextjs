import {Const} from '../const'
import {useTheme} from '../hooks/use_theme'

export const Section = ({title}: {title: string}) => {
  const theme = useTheme()

  return (
    <div
      style={{
        display: 'flex',
        alignContent: 'left',
        justifyContent: 'left',
        backgroundColor: theme.background1,
        paddingTop: Const.pad / 2,
        paddingBottom: Const.pad / 2,
        marginTop: Const.pad * 2,
      }}
    >
      <div
        style={{
          paddingLeft: Const.pad,
          color: theme.fontColor1,
          textAlign: 'left',
          fontSize: Const.fontSizes.xl,
        }}
      >
        {title}
      </div>
    </div>
  )
}
