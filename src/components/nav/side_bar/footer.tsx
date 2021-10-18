import {setOrToggleTheme, useTheme} from '../../../hooks/use_theme_2'
import github from 'simple-icons/icons/github'
import linkedin from 'simple-icons/icons/linkedin'
import {Const} from '../../../const'
import {usePortfolio} from '../../../hooks/use_portfolio_context'
import {getInteractiveSvgs, getSvgFromSimpleIcon} from '../../svgs'

export const Footer = () => {
  const iconSize = 32
  const {person} = usePortfolio()
  const svgs = getInteractiveSvgs(Const.css.fc0, iconSize)

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
          aria-label={'Toggle Theme'}
          onClick={() => setOrToggleTheme()}
          className="icon-hover"
          style={{
            cursor: 'pointer',
          }}
        >
          {useTheme.getState().themeName === 'light'
            ? svgs.darkMode
            : svgs.lightMode}
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
          <button className="icon-hover" style={{}} aria-label={'Github'}>
            {getSvgFromSimpleIcon(github, iconSize, Const.css.fc0)}
          </button>
        </a>

        <a
          href={person.linkedInSrc}
          rel="noreferrer"
          target="_blank"
          tabIndex={-1}
        >
          <button className="icon-hover" aria-label={'LinkedIn'}>
            {getSvgFromSimpleIcon(linkedin, iconSize, Const.css.fc0)}
          </button>
        </a>

        <a
          rel="noreferrer"
          target="_blank"
          href={`mailto:${person.email}?subject=Hello`}
          aria-label="Email"
          tabIndex={-1}
        >
          <button
            className="icon-hover"
            style={{}}
            aria-label={'Send me an email'}
          >
            {svgs.mail}
          </button>
        </a>
      </div>
    </div>
  )
}
