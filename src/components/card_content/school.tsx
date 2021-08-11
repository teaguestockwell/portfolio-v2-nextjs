import {Const} from '../../const'
import {useThemeStore} from '../../hooks/use_theme'
import Image from 'next/image'
import * as Types from '../../types/types'

export const School = ({name, dateRange, subHeading, src}: Types.School) => {
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
        {name}
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
              alt={name}
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
            {dateRange}
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
