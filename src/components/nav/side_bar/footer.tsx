import {toggleTheme, useThemeStore} from '../../../hooks/use_theme'
import github from 'simple-icons/icons/github'
import linkedin from 'simple-icons/icons/linkedin'
import {Const} from '../../../const'
import {usePortfolio} from '../../../hooks/use_portfolio_context'
import {getInteractiveSvgs, getSvgFromSimpleIcon} from '../../svgs'

export const Footer = () => {
  const iconSize = 32
  const theme = useThemeStore.getState().theme
  const {person} = usePortfolio()
  const svgs = getInteractiveSvgs(theme.fontColor0, iconSize)

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
        <button
          onClick={toggleTheme}
          className="icon-hover"
          style={{
            cursor: 'pointer',
          }}
        >
          {theme.name === 'light' ? svgs.darkMode : svgs.lightMode}
        </button>
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
        <a
          href={person.githubSrc}
          rel="noreferrer"
          target="_blank"
          tabIndex={-1}
        >
          <button className="icon-hover" style={{}}>
            {getSvgFromSimpleIcon(github, iconSize, theme.fontColor0)}
          </button>
        </a>

        <a
          href={person.linkedInSrc}
          rel="noreferrer"
          target="_blank"
          tabIndex={-1}
        >
          <button className="icon-hover">
            {getSvgFromSimpleIcon(linkedin, iconSize, theme.fontColor0)}
          </button>
        </a>

        <a
          rel="noreferrer"
          target="_blank"
          href={`mailto:${person.email}?subject=Hello`}
          aria-label="Email"
          tabIndex={-1}
        >
          <button className="icon-hover" style={{}}>
            {svgs.mail}
          </button>
        </a>
      </div>
    </div>
  )
}
