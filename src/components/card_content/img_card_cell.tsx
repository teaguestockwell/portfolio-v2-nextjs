import {Const} from '../../const'
import {useThemeStore} from '../../hooks/use_theme'
import Image from 'next/image'

export const ImgCardCell = ({
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
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'start',
        padding: Const.pad,
      }}
    >
      {/* <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'start'
            }}
          > */}
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        style={{
          width: 75,
          height: 75,
          minWidth: 75,
          minHeight: 75,
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
          wordWrap: 'break-word',
          paddingTop: Const.pad * 2,
          paddingBottom: Const.pad,
          textAlign: 'left',
          color: theme.fontColor1,
          fontSize: Const.fontSizes.lg,
          fontWeight: 400,
          lineHeight: `${Const.fontSizes.lg}px`,
        }}
      >
        {title}
        {/* </div> */}
      </div>

      {rows.map((row) => (
        <div
          key={row}
          style={{
            textAlign: 'left',
            color: theme.fontColor1,
            fontSize: Const.fontSizes.sm,
            wordWrap: 'break-word',
            paddingTop: Const.pad / 2,
          }}
        >
          {row}
        </div>
      ))}
    </div>
  )
}
