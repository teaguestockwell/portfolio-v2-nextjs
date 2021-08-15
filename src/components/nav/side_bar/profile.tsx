import Image from 'next/image'
import {useContext} from 'react'
import {Const} from '../../../const'
import {useThemeStore} from '../../../hooks/use_theme'
import {PortfolioContext} from '../../../pages'

export const Profile = () => {
  const picW = Const.drawerWidth - Const.pad * 2
  const theme = useThemeStore.getState().theme
  const {person} = useContext(PortfolioContext)
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
        className="name"
        style={{
          color: theme.fontColor0,
          paddingTop: Const.pad,
          textAlign: 'center',
          fontSize: Const.fontSizes.lg,
          overflowWrap: 'break-word',
          fontWeight: 600,
          ...textWrap,
        }}
      >
        {fullName}
      </div>

      <div
        style={{
          color: theme.fontColor0,
          fontSize: Const.fontSizes.md,
          overflowWrap: 'break-word',
        }}
      >
        {person.jobTitle}
      </div>

      <div
        style={{
          color: theme.fontColor0,
          fontSize: Const.fontSizes.md,
          overflowWrap: 'break-word',
        }}
      >
        {person.location}
      </div>
    </div>
  )
}
