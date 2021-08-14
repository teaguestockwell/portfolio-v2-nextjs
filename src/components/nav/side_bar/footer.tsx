import {ThemeButton, useThemeStore} from '../../../hooks/use_theme'
import {Linkedin, Github} from '@icons-pack/react-simple-icons'
import MailFilled from '@ant-design/icons/MailFilled'
import {Const} from '../../../const'
import {useContext} from 'react'
import {PortfolioContext} from '../../../pages'

export const Footer = () => {
  const iconSize = 32
  const theme = useThemeStore.getState().theme
  const {person} = useContext(PortfolioContext)

  return (
    <div
      style={{
        paddingTop: Const.pad,
      }}
    >
      <div
        style={{
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
          paddingTop: Const.pad,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-evenly',
          width: '100%',
        }}
      >
        <a href={person.githubSrc} rel="noreferrer" target="_blank">
          <div className="icon-hover" style={{}}>
            <Github color={theme.fontColor0} size={iconSize} />
          </div>
        </a>

        <a href={person.linkedInSrc} rel="noreferrer" target="_blank">
          <div className="icon-hover">
            <Linkedin size={iconSize} color={theme.fontColor0} />
          </div>
        </a>

        <a
          rel="noreferrer"
          target="_blank"
          href={`mailto:${person.email}?subject=Hello`}
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
