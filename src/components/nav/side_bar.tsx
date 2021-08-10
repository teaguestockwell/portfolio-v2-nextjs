import {useTheme} from '../../hooks/use_theme'
import {Link} from 'react-scroll'
import {Const} from '../../const'
import {menuData} from './index'
import {ThemeButton} from '../../hooks/use_theme'
import {Linkedin, Github} from '@icons-pack/react-simple-icons'
import MailFilled from '@ant-design/icons/MailFilled'
import {getCustomSvgs} from '../svgs'
import * as Types from '../../types'
import Image from 'next/image'

export const SideBar = ({
  portfolio,
  style = {},
}: {
  portfolio: Types.Portfolio
  style?: any
}) => {
  const theme = useTheme()
  const iconSize = 32
  const customSvgs = getCustomSvgs(theme.fontColor0, 24, 24)

  const picW = Const.hamburgerWidth - Const.pad * 2

  return (
    <div
      style={{
        position: 'relative',
        height: '100%',
        backgroundColor: theme.background1,
        animation: 'slide-up 0.4s ease',
        ...style,
      }}
    >
      <div
        style={{
          paddingTop: Const.pad,
          left: 0,
          right: Const.hamburgerWidth,
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
              alt={portfolio.person.firstName}
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
          width: Const.hamburgerWidth,
          overflowWrap: 'break-word',
        }}
      >
        {portfolio.person.firstName + ' ' + portfolio.person.lastName}
      </div>

      <div
        style={{
          color: theme.fontColor0,
          paddingLeft: Const.pad,
          fontWeight: 200,
          fontSize: Const.fontSizes.md,
          width: Const.hamburgerWidth,
          overflowWrap: 'break-word',
        }}
      >
        {portfolio.person.jobTitle}
      </div>

      <div
        style={{
          color: theme.fontColor0,
          paddingLeft: Const.pad,
          fontWeight: 200,
          fontSize: Const.fontSizes.md,
          width: Const.hamburgerWidth,
          overflowWrap: 'break-word',
        }}
      >
        {portfolio.person.location}
      </div>

      <div
        style={{
          paddingTop: Const.pad,
          left: 0,
          right: 0,
        }}
      >
        {Object.values(Const.titles).map((i) => (
          <Link
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'left',
              paddingLeft: Const.pad,
              height: 48,
              fontWeight: 200,
              fontSize: Const.fontSizes.lg,
              color: theme.fontColor0,
            }}
            key={i}
            to={i}
            {...Const.reactScrollProps}
          >
            {customSvgs[i]}
            <div
              style={{
                marginLeft: Const.pad / 2,
                marginRight: Const.pad / 2,
                color: theme.fontColor0,
                fontSize: Const.fontSizes.lg,
              }}
            >
              {i}
            </div>
          </Link>
        ))}
      </div>

      <div
        style={{
          position: 'absolute',
          bottom: Const.pad * 2 + iconSize,
          left: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-evenly',
          width: '100%',
        }}
      >
        <div
          className="icon-hover"
          style={{
            paddingBottom: 5,
            paddingLeft: 2,
          }}
        >
          <ThemeButton fontSize={iconSize} color={theme.fontColor0} />
        </div>
      </div>

      <div
        style={{
          position: 'absolute',
          bottom: Const.pad,
          left: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-evenly',
          width: '100%',
        }}
      >
        <a href={portfolio.person.githubSrc} rel="noreferrer" target="_blank">
          <div className="icon-hover" style={{}}>
            <Github color={theme.fontColor0} size={iconSize} />
          </div>
        </a>

        <a href={portfolio.person.linkedInSrc} rel="noreferrer" target="_blank">
          <div className="icon-hover">
            <Linkedin size={iconSize} color={theme.fontColor0} />
          </div>
        </a>

        <a
          rel="noreferrer"
          target="_blank"
          href={`mailto:${portfolio.person.email}?subject=Hello`}
          aria-label="Email"
        >
          <div className="icon-hover" style={{}}>
            <MailFilled style={{fontSize: iconSize, color: theme.fontColor0}} />
          </div>
        </a>
      </div>
    </div>
  )
}
