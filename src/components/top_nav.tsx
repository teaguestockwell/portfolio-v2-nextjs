import {useTheme} from '../hooks/use_theme'
import {Linkedin, Github} from '@icons-pack/react-simple-icons'
import {ThemeButton} from '../hooks/use_theme'
import {Const} from '../const'

const NavInner = () => {
  const theme = useTheme(
    (s) => s.theme,
    (s1, s2) => s1.name === s2.name
  )
  return (
    <div
      style={{
        WebkitBoxShadow: theme.shadow,
        MozBoxShadow: theme.shadow,
        boxShadow: theme.shadow,
        position: 'fixed',
        left: 0,
        top: 0,
        right: 0,
        background: '#0c548b',
        height: 50,
        zIndex: 1000,
      }}
    >
      <div
        style={{
          position: 'absolute',
          left: Const.pad,
          top: 2,
          fontWeight: 'bold',
          fontSize: 22,
          fontFamily: 'helvetica',
          color: '#DEffff',
        }}
      >
        Teague Stockwell
      </div>

      <div
        style={{
          position: 'absolute',
          left: Const.pad,
          top: 27,
          fontSize: Const.fontSizes.md,
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
            paddingTop: 13,
            width: 50,
            height: 50,
            top: 0,
            position: 'absolute',
            right: 0,
          }}
        >
          <Github color={'#DEffff'} size={24} />
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
            paddingTop: 13,
            width: 50,
            height: 50,
            top: 0,
            position: 'absolute',
            right: 38,
          }}
        >
          <Linkedin size={24} color={'#DEffff'} />
        </div>
      </a>

      <div
        className="icon-hover"
        style={{
          textAlign: 'center',
          paddingTop: 13,
          width: 50,
          height: 50,
          top: 0,
          position: 'absolute',
          right: 72,
        }}
      >
        <ThemeButton fontSize={24} color={'#DEffff'} />
      </div>
    </div>
  )
}

export const TopNav = ({children}: {children?: any}) => {
  return (
    <>
      {<NavInner />}
      <div style={{paddingTop: 50}}>{children}</div>
    </>
  )
}
