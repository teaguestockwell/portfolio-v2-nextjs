/* eslint-disable @next/next/no-img-element */
import {useTheme} from '../hooks/use_theme'

export const Glow = ({
  children,
  tlwh,
}: {
  children: JSX.Element | JSX.Element[]
  tlwh: [number, number, number, number]
}) => {
  const theme = useTheme()

  return (
    <div
      style={{
        position: 'relative',
        display: 'inline-block',
        width: '100%',
        overflow: 'hidden',
      }}
    >
      {theme.name === 'dark' ? (
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
