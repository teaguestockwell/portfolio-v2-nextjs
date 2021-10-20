/* eslint-disable @next/next/no-img-element */
export const Glow = ({
  children,
  tlwh,
  publicSrc = '/glow.png',
}: {
  children: JSX.Element | JSX.Element[]
  tlwh: [number, number, number, number]
  publicSrc?: string
}) => {
  return (
    <div
      data-test-id={'glow'}
      style={{
        position: 'relative',
        display: 'inline-block',
        width: '100%',
        overflow: 'hidden',
        // https://stackoverflow.com/questions/20268962/fixed-attachment-background-image-flicker-disappear-in-chrome-when-coupled-with
        WebkitTransform: 'translate3d(0,0,0)',
      }}
    >
      <img
        src={publicSrc}
        alt="glow"
        style={{
          position: 'absolute',
          zIndex: -1,
          top: `${tlwh[0]}%`,
          left: `${tlwh[1]}%`,
          width: `${tlwh[2]}%`,
          height: `${tlwh[3]}%`,
        }}
      />

      {children}
    </div>
  )
}
