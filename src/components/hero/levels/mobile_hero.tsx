import Image from 'next/image'
import {Video} from '../../video'

// export const Home = ({m3u8Src}: {m3u8Src: string}) => {
//   return (
//     <div
//       style={{
//         position: 'absolute',
//         zIndex: 2,
//         top: 150,
//         width: 246,
//         height: 516,
//         padding: 8,
//         borderRadius: 20,
//         background: '#fff',
//         boxShadow:
//           '0 50px 100px -20px rgb(50 50 93 / 25%), 0 30px 60px -30px rgb(0 0 0 / 30%), inset 0 -2px 6px 0 rgb(10 37 64 / 35%)',
//       }}
//     >
//       <Video src={m3u8Src} key={m3u8Src} w={225} h={500} />
//       {/* <Image
//         objectFit="fill"
//         quality="100"
//         src={'/levels-home.png'}
//         width={376}
//         height={814}
//         alt={'Levels'}
//       /> */}
//     </div>
//   )
// }

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
      }}
    >
      <Image
        objectFit="fill"
        quality="100"
        src={'/levels-home.png'}
        width={560}
        height={1216}
        alt={'Levels'}
      />
    </div>
  )
}
