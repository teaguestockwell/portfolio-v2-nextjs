/* eslint-disable @next/next/no-img-element */
import {useBreakpoint} from '../hooks/use_breakpoint'

export const Glow = ({
  children,
  tlwh,
  publicSrc = '/glow.png',
  removeOnMdBreak = true,
}: {
  children: JSX.Element | JSX.Element[]
  tlwh: [number, number, number, number]
  publicSrc?: string
  removeOnMdBreak?: boolean
}) => {
  const md = useBreakpoint.md()

  return (
    <div
      data-test-id={'glow'}
      style={{
        position: 'relative',
        display: 'inline-block',
        width: '100%',
        overflow: 'hidden',
      }}
    >
      {!md && removeOnMdBreak ? (
        <> </>
      ) : (
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
      )}

      {children}
    </div>
  )
}
