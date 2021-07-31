import {v4} from 'uuid'
import {Const} from '../const'
import {useThemeStore} from '../hooks/use_theme'

export const Education = ({
  name,
  date,
  subHeading,
}: {
  name: string
  date: string
  subHeading: string
}) => {
  const theme = useThemeStore.getState().theme

  return (
    <div
      key={v4()}
      style={{
        WebkitBoxShadow: theme.shadow,
        MozBoxShadow: theme.shadow,
        boxShadow: theme.shadow,
        padding: Const.pad / 2,
        marginTop: Const.pad * 2,
        backgroundColor: theme.background1,
        borderRadius: Const.rad,
      }}
    >
      <div
        style={{
          textAlign: 'center',
          color: theme.fontColor1,
          fontSize: Const.fontSizes.lg,
        }}
      >
        {name}
      </div>

      <div
        style={{
          textAlign: 'left',
          color: theme.fontColor1,
          fontSize: Const.fontSizes.sm,
          paddingTop: Const.pad / 2,
        }}
      >
        {date}
      </div>

      <div
        style={{
          textAlign: 'left',
          color: theme.fontColor1,
          fontSize: Const.fontSizes.sm,
          paddingTop: Const.pad / 2,
        }}
      >
        {subHeading}
      </div>
    </div>
  )
}
