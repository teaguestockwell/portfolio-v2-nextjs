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
        objectFit="fill"
        quality="100"
        src={'/heros/levels-1-mobile.png'}
        width={560}
        height={1216}
        alt={'Levels'}
      />
    </div>
  )
}
