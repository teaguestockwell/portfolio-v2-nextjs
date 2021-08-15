/* eslint-disable @next/next/no-img-element */
import {useBreakpoint} from '../hooks/use_breakpoint'

export const Glow = ({
  children,
  tlwh,
}: {
  children: JSX.Element | JSX.Element[]
  tlwh: [number, number, number, number]
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
      {md ? (
        <img
          src={'/glow.png'}
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
      ) : (
        <> </>
      )}

      {children}
    </div>
  )
}
