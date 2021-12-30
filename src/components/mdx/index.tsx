import Link from 'next/link'
import Image from 'next/image'
import {Const} from '../../const'

const CustomLink = (props: any) => {
  const href = props.href
  const isInternalLink = href && (href.startsWith('/') || href.startsWith('#'))

  if (isInternalLink) {
    return (
      <Link href={href}>
        <a {...props} style={{color: Const.css.link}}>
          {props.children}
        </a>
      </Link>
    )
  }

  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      {...props}
      style={{color: Const.css.link}}
    />
  )
}

const RoundedImage = (props: any) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Image alt={props.alt} {...props} />
      <style jsx global>{`
        img {
          border-radius: ${Const.pad}px;
        }
      `}</style>
    </div>
  )
}

const MDXComponents = {
  Image: RoundedImage,
  a: CustomLink,
}

export default MDXComponents
