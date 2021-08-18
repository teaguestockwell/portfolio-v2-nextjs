import Image from 'next/image'

export const Dash = () => {
  return (
    <div
      style={{
        position: 'absolute',
        left: 100,
        width: 884,
        height: 497,
        padding: 8,
        borderRadius: 20,
        background: '#fff',
        boxShadow:
          '0 50px 100px -20px rgb(50 50 93 / 25%), 0 30px 60px -30px rgb(0 0 0 / 30%), inset 0 -2px 6px 0 rgb(10 37 64 / 35%)',
      }}
    >
      <Image
        objectFit="cover"
        quality="100"
        src={'/levels-dash.png'}
        width={1263}
        height={700}
        alt={'Levels'}
      />
    </div>
  )
}
