import {Const} from '../const'
import {useTheme} from '../hooks/use_theme'

export const BulletCardCell = ({
  title,
  bullets,
}: {
  title: string
  bullets: string[]
}) => {
  const theme = useTheme()

  return (
    <div>
      <div
        style={{
          wordWrap: 'break-word',
          textAlign: 'left',
          color: theme.fontColor0,
          fontSize: Const.fontSizes.xl,
          fontWeight: 600,
          lineHeight: `${Const.fontSizes.xl}px`,
        }}
      >
        {title}
      </div>

      <ul
        style={{
          margin: 0,
          marginLeft: -24,
        }}
      >
        {bullets.map((row) => (
          <li
            key={row}
            style={{
              textAlign: 'left',
              color: theme.fontColor1,
              fontSize: Const.fontSizes.sm,
              wordWrap: 'break-word',
              paddingTop: Const.pad,
            }}
          >
            {row}
          </li>
        ))}
      </ul>
    </div>
  )
}
