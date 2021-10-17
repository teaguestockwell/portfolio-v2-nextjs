import {Const} from '../../const'
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
            paddingTop: Const.pad,
            textAlign: 'left',
            color: Const.css.fc0,
            fontSize: Const.css.lg,
            fontWeight: 600,
            lineHeight: Const.css.lg,
          }}
        >
          {title}
        </div>

        {rows.map((row) => (
          <div
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
          </div>
        ))}
      </div>
    )
  },
  () => true
)
