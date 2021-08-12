import {Const} from '../const'
import {useTheme} from '../hooks/use_theme'

export const SectionHeader = ({
  title,
  subTitle,
}: {
  title: string
  subTitle?: string | null
}) => {
  const theme = useTheme()

  return (
    <div
      style={{
        paddingTop: Const.pad * 4,
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        paddingLeft: Const.pad,
        paddingRight: Const.pad,
      }}
    >
      <div
        style={{
          maxWidth: Const.maxWidth,
          color: theme.fontColor0,
          fontSize: Const.fontSizes.xxxl,
          fontWeight: 800,
        }}
      >
        {title}
      </div>

      {subTitle && (
        <div
          style={{
            fontSize: Const.fontSizes.lg,
            color: theme.fontColor1,
            textAlign: 'center',
            maxWidth: Const.maxWidth,
            paddingTop: Const.pad / 2,
          }}
        >
          {subTitle}
        </div>
      )}
    </div>
  )
}
