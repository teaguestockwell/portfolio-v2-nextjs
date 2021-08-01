export const Content = ({children}: {children: JSX.Element[]}) => {
  return (
    <div
      style={{
        justifyContent: 'center',
        alignContent: 'center',
        display: 'flex',
      }}
    >
      <div
        style={{
          maxWidth: 650,
          width: '100%',
        }}
      >
        {children}
      </div>
    </div>
  )
}
