import {Const} from '../../const'

export const BulletCardCell = ({
  title,
  bullets,
}: {
  title: string
  bullets: string[]
}) => {
  return (
    <div>
      <div
        style={{
          wordWrap: 'break-word',
          textAlign: 'left',
          color: Const.css.fc0,
          fontSize: Const.css.xlg,
          fontWeight: 600,
          lineHeight: Const.css.xlg,
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
              color: Const.css.fc1,
              fontSize: Const.css.sm,
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
