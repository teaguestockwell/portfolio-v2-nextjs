import {useTheme} from '../../hooks/use_theme'
import {Link} from 'react-scroll'
import {Const} from '../../const'
import {menuData} from './index'
import {ThemeButton} from '../../hooks/use_theme'
import {Linkedin, Github} from '@icons-pack/react-simple-icons'
import {portfolioData} from '../../portfolio_data'
import MailFilled from '@ant-design/icons/MailFilled'
import {CustomSvgs} from '../svgs'

export const SideBar = () => {
  const theme = useTheme()

  return (
    <div
      style={{
        position: 'relative',
        height: '100%',
      }}
    >
      {/* <Divider 
                  key={v4()}
                  style={{
                    backgroundColor: theme.fontColor2,
                    marginBottom: Const.pad,
                    alignItems: 'center'
                  }}
                  /> */}

      {menuData.map((ig) => (
        <Link key={ig.title} to={ig.title} {...Const.reactScrollProps}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'left',
              paddingLeft: Const.pad,
              height: 48,
              fontWeight: 200,
              fontSize: Const.fontSizes.lg,
            }}
          >
            {CustomSvgs.about}
            <div>{ig.title}</div>
          </div>
        </Link>
      ))}

      <div
        style={{
          position: 'absolute',
          bottom: 96,
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
          <ThemeButton fontSize={48} color={theme.fontColor0} />
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
        <a href={portfolioData.githubSrc} rel="noreferrer" target="_blank">
          <div className="icon-hover" style={{}}>
            <Github color={theme.fontColor0} size={48} />
          </div>
        </a>

        <a href={portfolioData.linkedInSrc} rel="noreferrer" target="_blank">
          <div className="icon-hover">
            <Linkedin size={48} color={theme.fontColor0} />
          </div>
        </a>

        <a
          rel="noreferrer"
          target="_blank"
          href={`mailto:${portfolioData.email}?subject=Hello`}
          aria-label="Email"
        >
          <div className="icon-hover" style={{}}>
            <MailFilled style={{fontSize: 48, color: theme.fontColor0}} />
          </div>
        </a>
      </div>
    </div>
  )
}
