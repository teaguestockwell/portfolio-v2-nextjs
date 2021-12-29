import Link from 'next/link'
import {Const} from '../const'
import gradient from 'random-gradient'

export const BlogPost = ({b}: {b: Types.BlogPost}) => {
  return (
    <Link href={`/blog/${b.slug}`} key={b.slug} passHref>
      {/* https://codepen.io/chriscoyier/pen/PXNPRq */}
      <div
        style={{
          height: 200,
          marginTop: 0,
          overflowY: 'auto',
          padding: 10,
          borderRadius: Const.rad,
          background: gradient(b.slug),
          cursor: 'pointer',
        }}
      >
        <div
          style={{
            backgroundColor: Const.css.bgc0,
            width: '-webkit-fill-available',
            height: '-webkit-fill-available',
            borderRadius: Const.rad,
            padding: Const.pad,
          }}
        >
          <span
            style={{
              color: Const.css.fc0,
              fontSize: Const.css.lg,
              fontWeight: 600,
            }}
          >
            {b.title}
          </span>
        </div>
      </div>
    </Link>
  )
}
