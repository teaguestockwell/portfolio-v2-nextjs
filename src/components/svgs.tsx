/* eslint-disable react/display-name */
import {Const} from '../const'
import {hex2contrast} from '@csstools/convert-colors'

export const getInteractiveSvgs = (
  fill: string,
  size: number,
  className?: string
) => ({
  toBack: (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      height={size}
      viewBox="0 0 24 24"
      width={size}
      fill={fill}
    >
      <path d="M0 0h24v24H0V0z" fill="none" />
      <path d="M9 7H7v2h2V7zm0 4H7v2h2v-2zm0-8c-1.11 0-2 .9-2 2h2V3zm4 12h-2v2h2v-2zm6-12v2h2c0-1.1-.9-2-2-2zm-6 0h-2v2h2V3zM9 17v-2H7c0 1.1.89 2 2 2zm10-4h2v-2h-2v2zm0-4h2V7h-2v2zm0 8c1.1 0 2-.9 2-2h-2v2zM5 7H3v12c0 1.1.89 2 2 2h12v-2H5V7zm10-2h2V3h-2v2zm0 12h2v-2h-2v2z" />
    </svg>
  ),
  toFront: (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      height={size}
      viewBox="0 0 24 24"
      width={size}
      fill={fill}
    >
      <path d="M0 0h24v24H0V0z" fill="none" />
      <path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm2 4v-2H3c0 1.1.89 2 2 2zM3 9h2V7H3v2zm12 12h2v-2h-2v2zm4-18H9c-1.11 0-2 .9-2 2v10c0 1.1.89 2 2 2h10c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 12H9V5h10v10zm-8 6h2v-2h-2v2zm-4 0h2v-2H7v2z" />
    </svg>
  ),
  upArrow: (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      height={size}
      viewBox="0 0 24 24"
      width={size}
      fill={fill}
    >
      <path d="M0 0h24v24H0V0z" fill="none" />
      <path d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z" />
    </svg>
  ),
  hamburger: (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      height={size}
      viewBox="0 0 24 24"
      width={size}
      fill={fill}
    >
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
    </svg>
  ),
  lightMode: (
    <svg
      className={className}
      height={size}
      viewBox="0 0 24 24"
      width={size}
      fill={fill}
    >
      <rect fill="none" height="24" width="24" />
      <path d="M12,7c-2.76,0-5,2.24-5,5s2.24,5,5,5s5-2.24,5-5S14.76,7,12,7L12,7z M2,13l2,0c0.55,0,1-0.45,1-1s-0.45-1-1-1l-2,0 c-0.55,0-1,0.45-1,1S1.45,13,2,13z M20,13l2,0c0.55,0,1-0.45,1-1s-0.45-1-1-1l-2,0c-0.55,0-1,0.45-1,1S19.45,13,20,13z M11,2v2 c0,0.55,0.45,1,1,1s1-0.45,1-1V2c0-0.55-0.45-1-1-1S11,1.45,11,2z M11,20v2c0,0.55,0.45,1,1,1s1-0.45,1-1v-2c0-0.55-0.45-1-1-1 C11.45,19,11,19.45,11,20z M5.99,4.58c-0.39-0.39-1.03-0.39-1.41,0c-0.39,0.39-0.39,1.03,0,1.41l1.06,1.06 c0.39,0.39,1.03,0.39,1.41,0s0.39-1.03,0-1.41L5.99,4.58z M18.36,16.95c-0.39-0.39-1.03-0.39-1.41,0c-0.39,0.39-0.39,1.03,0,1.41 l1.06,1.06c0.39,0.39,1.03,0.39,1.41,0c0.39-0.39,0.39-1.03,0-1.41L18.36,16.95z M19.42,5.99c0.39-0.39,0.39-1.03,0-1.41 c-0.39-0.39-1.03-0.39-1.41,0l-1.06,1.06c-0.39,0.39-0.39,1.03,0,1.41s1.03,0.39,1.41,0L19.42,5.99z M7.05,18.36 c0.39-0.39,0.39-1.03,0-1.41c-0.39-0.39-1.03-0.39-1.41,0l-1.06,1.06c-0.39,0.39-0.39,1.03,0,1.41s1.03,0.39,1.41,0L7.05,18.36z" />
    </svg>
  ),
  darkMode: (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      height={size}
      viewBox="0 0 24 24"
      width={size}
      fill={fill}
    >
      <g>
        <path d="M0,0h24v24H0V0z" fill="none" />
      </g>
      <g>
        <path d="M9.5,2c-1.82,0-3.53,0.5-5,1.35c2.99,1.73,5,4.95,5,8.65s-2.01,6.92-5,8.65C5.97,21.5,7.68,22,9.5,22c5.52,0,10-4.48,10-10 S15.02,2,9.5,2z" />
      </g>
    </svg>
  ),
  mail: (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      height={size}
      viewBox="0 0 24 24"
      width={size}
      fill={fill}
    >
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
    </svg>
  ),
  link: (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      height={size}
      viewBox="0 0 24 24"
      width={size}
      fill={fill}
    >
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z" />
    </svg>
  ),
  pdf: (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      height={size}
      viewBox="0 0 24 24"
      width={size}
      fill={fill}
    >
      <path d="M0 0h24v24H0V0z" fill="none" />
      <path d="M20 2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H8V4h12v12zM4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm12 6V9c0-.55-.45-1-1-1h-2v5h2c.55 0 1-.45 1-1zm-2-3h1v3h-1V9zm4 2h1v-1h-1V9h1V8h-2v5h1zm-8 0h1c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1H9v5h1v-2zm0-2h1v1h-1V9z" />
    </svg>
  ),
})

export const getCustomSvgs = (
  fill: string,
  h: number,
  w: number,
  titles: Types.SectionTitles,
  className?: string
) => ({
  [titles.about]: (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      height={h}
      viewBox="0 0 24 24"
      width={w}
      fill={fill}
    >
      <path d="M0 0h24v24H0V0z" fill="none" />
      <path d="M10.25 13c0 .69-.56 1.25-1.25 1.25S7.75 13.69 7.75 13s.56-1.25 1.25-1.25 1.25.56 1.25 1.25zM15 11.75c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25zm7 .25c0 5.52-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2s10 4.48 10 10zM10.66 4.12C12.06 6.44 14.6 8 17.5 8c.46 0 .91-.05 1.34-.12C17.44 5.56 14.9 4 12 4c-.46 0-.91.05-1.34.12zM4.42 9.47c1.71-.97 3.03-2.55 3.66-4.44C6.37 6 5.05 7.58 4.42 9.47zM20 12c0-.78-.12-1.53-.33-2.24-.7.15-1.42.24-2.17.24-3.13 0-5.92-1.44-7.76-3.69C8.69 8.87 6.6 10.88 4 11.86c.01.04 0 .09 0 .14 0 4.41 3.59 8 8 8s8-3.59 8-8z" />
    </svg>
  ),
  [titles.tech]: (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      height={h}
      viewBox="0 0 24 24"
      width={w}
      fill={fill}
    >
      <path d="M0 0h24v24H0V0z" fill="none" />
      <path d="M5 9.2h3V19H5V9.2zM10.6 5h2.8v14h-2.8V5zm5.6 8H19v6h-2.8v-6z" />
    </svg>
  ),
  [titles.projects]: (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      height={h}
      viewBox="0 0 24 24"
      width={w}
      fill={fill}
    >
      <path d="M0 0h24v24H0V0z" fill="none" />
      <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" />
    </svg>
  ),
  [titles.blog]: (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      height={h}
      viewBox="0 0 24 24"
      width={w}
      fill={fill}
    >
      <path d="M0 0h24v24H0V0z" fill="none" />
      <path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H8V4h12v12zM10 9h8v2h-8zm0 3h4v2h-4zm0-6h8v2h-8z" />
    </svg>
  ),
  [titles.experience]: (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      height={h}
      viewBox="0 0 24 24"
      width={w}
      fill={fill}
    >
      <path d="M0 0h24v24H0V0z" fill="none" />
      <path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z" />
    </svg>
  ),
  [titles.education]: (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      height={h}
      viewBox="0 0 24 24"
      width={w}
      fill={fill}
    >
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z" />
    </svg>
  ),
  [titles.contact]: (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      height={h}
      viewBox="0 0 24 24"
      width={w}
      fill={fill}
    >
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
    </svg>
  ),
})

const Svg = ({name, svg}: {name?: string | undefined; svg: any}) => {
  return (
    <div
      className="icon-hover"
      style={{
        width: 100,
        height: 100,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-evenly',
      }}
    >
      {svg}

      {name && (
        <div
          style={{
            color: Const.css.fc1,
            fontSize: Const.css.sm,
            wordWrap: 'break-word',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
          }}
        >
          {name}
        </div>
      )}
    </div>
  )
}

export const SvgScroll = ({
  svgs,
  style = {},
}: {
  svgs: JSX.Element[]
  style?: any
}) => {
  return (
    <div
      style={{
        paddingTop: Const.pad,
        paddingBottom: Const.pad,
        display: 'flex',
        overflowX: 'auto',
        WebkitOverflowScrolling: 'auto',
        overflowY: 'clip',
        ...style,
      }}
    >
      {svgs.map((s, i) => (
        <div key={i}>{s}</div>
      ))}
    </div>
  )
}

export const SvgScroll2 = ({
  svgs,
  style = {},
}: {
  svgs: JSX.Element[]
  style?: any
}) => {
  const half = Math.ceil(svgs.length / 2)
  const firstHalf = svgs.slice(0, half)
  const secondHalf = svgs.slice(half)

  return (
    <div
      style={{
        paddingTop: Const.pad / 2,
        display: 'flex',
        overflowX: 'auto',
        overflowY: 'clip',
        ...style,
      }}
    >
      <div>
        <div style={{display: 'flex'}}>
          {firstHalf.map((s, i) => (
            <div key={i}>{s}</div>
          ))}
        </div>
        <div style={{display: 'flex', paddingLeft: 58, paddingTop: 20}}>
          {secondHalf.map((s, i) => (
            <div key={i}>{s}</div>
          ))}
        </div>
      </div>
    </div>
  )
}

export const getSvgFromSimpleIcon = (
  ico: any,
  size: number,
  color?: string
) => {
  return (
    <svg
      viewBox="0 0 24 24"
      height={size}
      width={size}
      fill={color ? color : `#${ico.color}`}
    >
      {' '}
      <title>{ico.title}</title> <path d={ico.path}></path>
    </svg>
  )
}

export const getSimpleSvgs = (
  size: number,
  themeName: string,
  wrapped = true,
  icons: Types.SimpleIcon[]
) => {
  const getSvg = (icon: Types.SimpleIcon) => {
    const addHash = (color: string) => (color[0] === '#' ? color : `#${color}`)

    const originalHex = addHash(icon.hex)
    const bgHex = themeName === 'light' ? '#f3f2ef' : '#080510'
    const contrast = hex2contrast(bgHex, originalHex)
    const isAccessibleColor = contrast > (themeName === 'dark' ? 2 : 1)
    const newColor = isAccessibleColor ? originalHex : Const.css.fc1
    const svg = (
      <svg viewBox="0 0 24 24" height={size} width={size} fill={newColor}>
        {' '}
        <title>{icon.title}</title> <path d={icon.path}></path>
      </svg>
    )

    if (wrapped) {
      return <Svg name={icon.title} svg={svg} />
    }

    return svg
  }

  const map = {} as any

  icons.forEach((ico) => {
    map[ico.slug] = getSvg(ico)
  })

  return map
}
