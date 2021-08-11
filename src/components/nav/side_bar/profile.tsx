import * as Types from '../../../types'
import Image from 'next/image'
import {Const} from '../../../const'
import {useThemeStore} from '../../../hooks/use_theme'

export const Profile = ({person}: {person: Types.Person}) => {
  const picW = Const.hamburgerWidth - Const.pad * 2
  const theme = useThemeStore.getState().theme

  return (
    <div>
      <div
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          display: 'flex',
        }}
      >
        <div
          style={{
            width: picW,
            height: picW,
            minWidth: picW,
            minHeight: picW,
          }}
        >
          {/* https://github.com/vercel/next.js/discussions/18312 */}
          <>
            <Image
              objectFit="fill"
              src={'/headshot.png'}
              width={picW}
              height={picW}
              alt={person.firstName}
            />

            <style jsx global>{`
              img {
                border-radius: ${Const.pad / 2}px;
              }
            `}</style>
          </>
        </div>
      </div>

      <div
        style={{
          color: theme.fontColor0,
          paddingTop: Const.pad,
          textAlign: 'center',
          fontWeight: 500,
          fontSize: Const.fontSizes.lg,
          overflowWrap: 'break-word',
        }}
      >
        {person.firstName + ' ' + person.lastName}
      </div>

      <div
        style={{
          color: theme.fontColor0,
          fontWeight: 200,
          fontSize: Const.fontSizes.md,
          overflowWrap: 'break-word',
        }}
      >
        {person.jobTitle}
      </div>

      <div
        style={{
          color: theme.fontColor0,
          fontWeight: 200,
          fontSize: Const.fontSizes.md,
          overflowWrap: 'break-word',
        }}
      >
        {person.location}
      </div>
    </div>
  )
}
