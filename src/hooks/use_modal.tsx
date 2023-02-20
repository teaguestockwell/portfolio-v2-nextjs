import {Const} from '../const'
import create from 'zustand'
import {combine} from 'zustand/middleware'
import {Transition} from '../components/nav/transition'

export const useModalStore = create(
  combine(
    {
      children: null as JSX.Element | null,
      contentStyle: null as any,
    },
    (set) => ({set})
  )
)

export const Modal = () => {
  const {children, contentStyle} = useModalStore()

  const styleOverride = contentStyle ? contentStyle : {}

  return (
    <Transition
      mounted={!!children}
      duration={200}
      transition="fade"
      timingFunction="ease"
    >
      {(style) => (
        <div
          style={{
            position: 'fixed',
            height: '100%',
            width: '100%',
            left: 0,
            top: 0,
            zIndex: 11,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <div
            style={{
              ...style,
              zIndex: 12,
              borderRadius: Const.rad,
              backgroundColor: Const.css.bgc1,
              overflowY: 'auto',
              padding: Const.pad * 2,
              ...styleOverride,
            }}
          >
            {children}
          </div>

          {/* Wrapper that closes modal when clicking outside of it */}
          <div
            onClick={(e) =>
              useModalStore.setState({children: null, contentStyle: null})
            }
            style={{
              backgroundColor: 'rgba(0, 0, 0, 0.61)',
              backdropFilter: 'blur(5px)',
              WebkitBackdropFilter: 'blur(5px)',
              position: 'absolute',
              height: '100%',
              width: '100%',
              left: 0,
              top: 0,
              zIndex: 11,
            }}
          />
        </div>
      )}
    </Transition>
  )
}
