import Image from 'next/image'
import {Const} from '../../../const'
import {usePortfolio} from '../../../hooks/use_portfolio_context'

export const Profile = () => {
  const picW = Const.drawerWidth - Const.pad * 5.1
  const {person} = usePortfolio()
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
              style={{objectFit: 'fill'}}
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
          color: Const.css.fc0,
          paddingTop: Const.pad,
          textAlign: 'center',
          fontSize: Const.css.md,
          overflowWrap: 'break-word',
          fontWeight: 600,
          ...textWrap,
        }}
      >
        {fullName}
      </div>

      <div
        style={{
          color: Const.css.fc0,
          fontSize: Const.css.sm,
          overflowWrap: 'break-word',
          textAlign: 'center',
        }}
      >
        {person.jobTitle}
      </div>

      <div
        style={{
          color: Const.css.fc0,
          fontSize: Const.css.sm,
          overflowWrap: 'break-word',
          textAlign: 'center',
        }}
      >
        {person.location}
      </div>
    </div>
  )
}
