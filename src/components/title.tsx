import {Svgs} from './svgs'

export const Title = () => {
  return (
    <div
      style={{
        position: 'absolute',
        left: 0,
        top: 0,
        right: 0,
        background: '#0c548b',
        height: 70,
      }}
    >
      <div
        style={{
          position: 'absolute',
          left: 20,
          top: 16,
          fontWeight: 'bold',
          fontSize: 30,
          fontFamily: 'helvetica',
          color: '#DEffff',
        }}
      >
        Teague Stockwell
      </div>

      <div
        style={{
          top: 0,
          position: 'absolute',
          right: 20,
        }}
      >
        {Svgs.dart()}
      </div>
    </div>
  )
}
