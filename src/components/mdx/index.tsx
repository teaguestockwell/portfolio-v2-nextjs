import Link from 'next/link'
import Image from 'next/image'
import {Const} from '../../const'

const CustomLink = (props: any) => {
  let href = props.href

  // Normalize href by removing _ua prefix if present
  if (href && href.includes('/_ua/')) {
    href = href.replace(/\/_ua\/(mobile|desktop)/, '')
  }

  const isInternalLink = href && (href.startsWith('/') || href.startsWith('#'))

  // Use regular anchor tag for hash-only links to avoid Next.js router issues
  if (href && href.startsWith('#')) {
    return (
      <a {...props} href={href} style={{color: Const.css.link}}>
        {props.children}
      </a>
    )
  }

  if (isInternalLink) {
    return (
      <Link href={href} {...props} style={{color: Const.css.link}}>
        {props.children}
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
