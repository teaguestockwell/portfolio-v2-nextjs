import Lazy from 'react-lazyload'
export const Video = ({src, w, h}: {src: string; w?: number; h?: number}) => {
  return (
    <Lazy>
      <video
        src={src}
        muted
        playsInline
        autoPlay
        loop
        controls
        preload="none"
        style={{
          height: h ? h : '70vh',
          // aspectRatio: '6/13', // I Phone X
          borderRadius: 10,
          width: w ? 'auto' : 'calc(70vh * .4615)',
        }}
      />
    </Lazy>
  )
}
