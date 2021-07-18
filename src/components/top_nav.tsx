import {Svgs} from './svgs'

const NavInner = () => {
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
          style={{
            top: -2,
            position: 'absolute',
            right: -12,
          }}
        >
          {Svgs.github('')}
        </div>
      </a>

      <a
        href="https://www.linkedin.com/in/teague-stockwell"
        rel="noreferrer"
        target="_blank"
      >
        <div
          style={{
            top: -2,
            position: 'absolute',
            right: 50,
          }}
        >
          {Svgs.linkedin('')}
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
