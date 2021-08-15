import {Const} from '../../const'
import {useThemeStore} from '../../hooks/use_theme'
import Image from 'next/image'

export const School = ({
  title,
  rows,
  imgSrc,
  href,
}: {
  imgSrc: string
  href: string
  title: string
  rows: string[]
}) => {
  const theme = useThemeStore.getState().theme

  return (
    <div
      style={{
        padding: Const.pad,
        display: 'flex',
        justifyContent: 'start',
        alignItems: 'center',
      }}
    >
      <a
        href={href}
        rel="noreferrer"
        target="_blank"
        style={{
          width: 75,
          height: 75,
          minWidth: 75,
          minHeight: 75,
          marginRight: Const.pad,
        }}
      >
        {/* https://github.com/vercel/next.js/discussions/18312 */}
        <>
          <Image
            objectFit="fill"
            src={imgSrc}
            width={75}
            height={75}
            alt={title}
          />

          <style jsx global>{`
            img {
              border-radius: ${Const.pad / 2}px;
            }
          `}</style>
        </>
      </a>

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'start',
          alignItems: 'top',
          paddingLeft: Const.pad,
        }}
      >
        <div
          style={{
            textAlign: 'left',
            color: theme.fontColor1,
            fontSize: Const.fontSizes.lg,
            fontWeight: 400,
            wordWrap: 'break-word',
            wordBreak: 'break-word',
          }}
        >
          {title}
        </div>

        {rows.map((row) => (
          <div
            key={row}
            style={{
              textAlign: 'left',
              color: theme.fontColor1,
              fontSize: Const.fontSizes.sm,
              paddingTop: Const.pad / 2,
              wordWrap: 'break-word',
            }}
          >
            {row}
          </div>
        ))}
      </div>
    </div>
  )
}
