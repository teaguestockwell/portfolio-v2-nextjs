import {Const} from '../../const'
import {useTheme} from '../../hooks/use_theme'
import Image from 'next/image'
import React from 'react'

// eslint-disable-next-line react/display-name
export const ImgCardCell = React.memo(
  ({
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
    const theme = useTheme()

    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'start',
        }}
      >
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
            textAlign: 'left',
            color: theme.fontColor0,
            fontSize: Const.fontSizes.xl,
            fontWeight: 600,
            lineHeight: `${Const.fontSizes.xl}px`,
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
              wordWrap: 'break-word',
              paddingTop: Const.pad,
            }}
          >
            {row}
          </div>
        ))}
      </div>
    )
  },
  () => true
)
