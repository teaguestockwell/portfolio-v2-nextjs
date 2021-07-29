export const Content = ({children}: {children: JSX.Element[]}) => {
  return (
    <div
      style={{
        justifyContent: 'center',
        alignContent: 'center',
        display: 'flex',
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 20,
      }}
    >
      <div
        style={{
          maxWidth: 700,
          width: '100%',
        }}
      >
        {children}
      </div>
    </div>
  )
}
