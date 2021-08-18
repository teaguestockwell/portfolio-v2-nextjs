import Image from 'next/image'

export const Home = () => {
  return (
    <div
      style={{
        position: 'absolute',
        zIndex: 2,
        top: 150,
        width: 250,
        height: 525,
        padding: 8,
        borderRadius: 20,
        background: '#fff',
        boxShadow:
          '0 50px 100px -20px rgb(50 50 93 / 25%), 0 30px 60px -30px rgb(0 0 0 / 30%), inset 0 -2px 6px 0 rgb(10 37 64 / 35%)',
      }}
    >
      <Image
        objectFit="fill"
        quality="100"
        src={'/levels-home.png'}
        width={376}
        height={814}
        alt={'Levels'}
      />
    </div>
  )
}
