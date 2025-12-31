import Link from 'next/link'
import {Const} from '../const'

export const BlogPost = ({b}: {b: Types.BlogPost}) => {
  return (
    <Link href={`/blog/${b.slug}`} key={b.slug}>
      {/* https://codepen.io/chriscoyier/pen/PXNPRq */}
      <div
        style={{
          height: 250,
          marginTop: 0,
          overflowY: 'auto',
          padding: 10,
          borderRadius: Const.rad,
          background: 'linear-gradient(to top right, #06ccf9, #f906cc)',
          cursor: 'pointer',
          overflow: 'hidden',
        }}
      >
        <div
          className="blog-hover"
          style={{
            backgroundColor: Const.css.bgc0,
            width: '100%',
            height: '100%',
            borderRadius: Const.rad,
            padding: Const.pad,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
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
          <span
            style={{
              color: Const.css.fc0,
              fontSize: Const.css.md,
              fontWeight: 600,
            }}
          >
            {b.readingTime.text}
          </span>
        </div>
      </div>
    </Link>
  )
}
