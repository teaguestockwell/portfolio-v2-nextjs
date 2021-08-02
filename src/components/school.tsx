import {Const} from '../const'
import {useThemeStore} from '../hooks/use_theme'
import Image from 'next/image'

export const School = ({
  title,
  date,
  subHeading,
  src,
  svgs,
}: {
  title: string
  date: string
  subHeading: string
  src: string
  svgs?: any
}) => {
  const theme = useThemeStore.getState().theme

  return (
    <>
      <div
        style={{
          textAlign: 'center',
          color: theme.fontColor1,
          fontSize: Const.fontSizes.lg,
        }}
      >
        {title}
      </div>
      <div
        style={{
          paddingTop: Const.pad / 2,
          display: 'flex',
          justifyContent: 'left',
          alignContent: 'left',
        }}
      >
        <div
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
              src={src}
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
        </div>

        <div>
          <div
            style={{
              textAlign: 'left',
              color: theme.fontColor1,
              fontSize: Const.fontSizes.sm,
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
      </div>
    </>
  )
}
