import {Svgs} from './svgs'
import {useTheme} from '../hooks/use_theme'
import {Linkedin, Github} from '@icons-pack/react-simple-icons'

const NavInner = () => {
  const theme = useTheme.getState().theme
  return (
    <div
      style={{
        position: 'fixed',
        left: 0,
        top: 0,
        right: 0,
        background: '#0c548b',
        height: 70,
        zIndex: 1000,
      }}
    >
      <div
        style={{
          position: 'absolute',
          left: 20,
          top: 6,
          fontWeight: 'bold',
          fontSize: 24,
          fontFamily: 'helvetica',
          color: '#DEffff',
        }}
      >
        Teague Stockwell
      </div>

      <div
        style={{
          position: 'absolute',
          left: 20,
          top: 43,
          fontSize: 13,
          fontFamily: 'helvetica',
          color: '#DEffff',
        }}
      >
        Software Development
      </div>
      <a
        href="https://github.com/tsAppDevelopment"
        rel="noreferrer"
        target="_blank"
      >
        <div
          className="icon-hover"
          style={{
            textAlign: 'center',
            paddingTop: 10,
            width: 70,
            height: 70,
            top: 0,
            position: 'absolute',
            right: 0,
          }}
        >
          <Github color={theme.fontColor0} size={48} />
        </div>
      </a>

      <a
        href="https://www.linkedin.com/in/teague-stockwell"
        rel="noreferrer"
        target="_blank"
      >
        <div
          className="icon-hover"
          style={{
            textAlign: 'center',
            paddingTop: 10,
            width: 70,
            height: 70,
            top: 0,
            position: 'absolute',
            right: 60,
          }}
        >
          <Linkedin size={48} color={theme.fontColor0} />
        </div>
      </a>
    </div>
  )
}

export const TopNav = ({children}: {children?: any}) => {
  return (
    <>
      {<NavInner />}
      <div style={{paddingTop: 70}}>{children}</div>
    </>
  )
}
