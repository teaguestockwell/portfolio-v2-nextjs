import React from 'react'

export const TypeWriterText = ({
  lines,
  nextCharDelayMs = 50,
  style = {},
  eolDelay = 2000,
}: {
  lines: string[]
  nextCharDelayMs?: number
  style?: React.CSSProperties
  eolDelay?: number
}) => {
  const [s, set] = React.useState({lineI: 0, charI: 0, dir: 'f'})

  React.useEffect(
    () => {
      const ticker = setTimeout(
        () => {
          // add a char
          if (s.dir === 'f' && s.charI < lines[s.lineI].length) {
            set((s) => ({...s, charI: s.charI + 1}))
            return
          }

          // end of line, reverses direction after timeout
          if (s.dir === 'f') {
            new Promise(() =>
              setTimeout(() => {
                set((s) => ({...s, dir: 'b'}))
              }, eolDelay)
            )
            return
          }

          // remove a char,
          if (s.charI > 0) {
            set((s) => ({...s, charI: s.charI - 1}))
            return
          }

          // next line
          const lineI = s.lineI + 1 === lines.length ? 0 : s.lineI + 1
          set((s) => ({...s, lineI, dir: 'f'}))
        },

        // throttle typing
        nextCharDelayMs
      )

      // cleanup timeout, and stop typing
      return () => clearTimeout(ticker)
    },

    // run when s changes
    [s, lines, eolDelay, nextCharDelayMs]
  )

  const text = lines[s.lineI].substring(0, s.charI)

  return <div style={style}>{text}</div>
}
