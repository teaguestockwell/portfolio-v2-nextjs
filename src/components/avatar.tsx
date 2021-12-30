import {portfolioData} from '../../data/portfolio'
import Image from 'next/image'

export const Avatar = () => {
  return (
    <>
      <Image
        objectFit="fill"
        src="/headshot.png"
        width={36}
        height={36}
        alt={
          portfolioData.person.firstName + ' ' + portfolioData.person.lastName
        }
      />

      <style jsx global>{`
        img {
          border-radius: 9999px;
        }
      `}</style>
    </>
  )
}
