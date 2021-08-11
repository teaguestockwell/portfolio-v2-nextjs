import * as Types from '../../../types/types'
import Image from 'next/image'
import {Const} from '../../../const'
import {useThemeStore} from '../../../hooks/use_theme'
import {textSpanOverlapsWith} from 'typescript'

export const Profile = ({person}: {person: Types.Person}) => {
  const picW = Const.drawerWidth - Const.pad * 2
  const theme = useThemeStore.getState().theme
  const fullName = person.firstName + ' ' + person.lastName

  const textWrap =
    fullName.length < 18
      ? {
          marginRight: Const.pad * -1,
          marginLeft: Const.pad * -1,
        }
      : {}

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
          fontWeight: 400,
          fontSize: Const.fontSizes.lg,
          overflowWrap: 'break-word',
          ...textWrap,
        }}
      >
        {fullName}
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
