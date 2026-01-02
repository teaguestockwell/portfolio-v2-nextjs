import Image from 'next/image'

export const MobileHero = ({m3u8Src}: {m3u8Src: string}) => {
  const shadow =
    '0 50px 100px -20px rgb(50 50 93 / 25%), 0 30px 60px -30px rgb(0 0 0 / 30%), inset 0 -2px 6px 0 rgb(10 37 64 / 35%)'
  return (
    <div
      className="hero"
      style={{
        position: 'absolute',
        zIndex: 2,
        top: 150,
        width: 250,
        height: 525,
        padding: 8,
        borderRadius: 20,
        background: '#fff',
        boxShadow: shadow,
        WebkitBoxShadow: shadow,
        MozBoxShadow: shadow,
        animation: 'hero-slide 8s infinite ease-in-out',
      }}
    >
      <Image
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          boxSizing: 'border-box',
          padding: 0,
          border: 'none',
          margin: 'auto',
          display: 'block',
          width: 0,
          height: 0,
          minWidth: 'calc(100% - 16px)',
          maxWidth: '100%',
          minHeight: 'calc(100% - 16px)',
          maxHeight: '100%',
          objectFit: 'fill',
        }}
        quality="100"
        src={'/heros/levels-1-mobile.png'}
        width={560}
        height={1216}
        alt={'Levels'}
        loading="eager"
      />
    </div>
  )
}
