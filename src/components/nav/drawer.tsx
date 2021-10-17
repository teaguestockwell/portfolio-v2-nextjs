import {Const} from '../../const'
import {useDrawerStore} from '../../hooks/use_drawer'

export const Drawer = ({children}: {children: JSX.Element | JSX.Element[]}) => {
  const store = useDrawerStore()
  const isOpen = store.isOpen

  return isOpen ? (
    <div
      style={{
        position: 'fixed',
        height: '100%',
        width: '100%',
        left: 0,
        top: 0,
        zIndex: 11,
      }}
    >
      <div
        style={{
          position: 'absolute',
          zIndex: 12,
          top: 0,
          bottom: 0,
          left: 0,
          width: Const.drawerWidth,
          backgroundColor: Const.css.bgc1,
          overflowY: 'auto',
        }}
      >
        {children}
      </div>

      {/* Wrapper that closes drawer when clicking outside of it */}
      <div
        onClick={(e) => {
          e.preventDefault()
          store.set({isOpen: false})
        }}
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
  ) : null
}
