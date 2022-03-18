import React from 'react'
import create from 'zustand'
import {combine} from 'zustand/middleware'

const store = create(
  combine({lineI: 0, charI: 0, dir: 'f', eolCount: 0}, (set) => ({set}))
)

export const TypeWriterText = ({
  lines,
  nextCharDelayMs = 50,
  style = {},
  eolWait = 20,
  prefix = '',
}: {
  prefix?: string
  lines: string[]
  nextCharDelayMs?: number
  style?: React.CSSProperties
  eolWait?: number
}) => {
  const state = store()

  React.useEffect(
    () => {
      // a global store is used because set interval is only created once. if React.useState was used, s would be static.
      // to solve that you can use a global store with a getter
      const ticker = setInterval(
        () => {
          const s = store.getState()
          // add a char
          if (s.dir === 'f' && s.charI < lines[s.lineI].length) {
            store.setState({...s, charI: s.charI + 1})
            return
          }

          // end of line, await eol cycle count to === eolWait
          if (s.dir === 'f' && s.eolCount !== eolWait) {
            store.setState({...s, eolCount: s.eolCount + 1})
            return
          }

          // end of line, reverses direction waiting a few cycles
          if (s.dir === 'f' && s.eolCount === eolWait) {
            store.setState({...s, dir: 'b'})
            return
          }

          // remove a char,
          if (s.charI > 0) {
            store.setState({...s, charI: s.charI - 1})
            return
          }

          // next line
          const lineI = s.lineI + 1 === lines.length ? 0 : s.lineI + 1
          store.setState({...s, lineI, dir: 'f', eolCount: 0})
        },

        // throttle typing
        nextCharDelayMs
      )

      // cleanup timeout, and stop typing
      return () => clearInterval(ticker)
    },

    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  )

  return (
    <span style={style}>
      {prefix + lines[state.lineI].substring(0, state.charI)}
    </span>
  )
}
